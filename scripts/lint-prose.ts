import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import { extractProse, toMarkdown } from "./extract-prose";

/**
 * The prose gate.
 *
 * Vale (vale-cli/vale, MIT) is a real linter with a real rule format, so the
 * house style lives in styles/HVACBench as data rather than as a regular
 * expression buried in a test. It reads Markdown, and the publication is a
 * typed content model, so this script renders the model to Markdown first.
 * Nothing in .prose/ is committed; it exists for the length of the run.
 *
 *   npm run lint:prose            lint the publication
 *   npm run lint:prose -- --sync  refresh the vendored third-party styles
 */

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, ".prose");
const WRAPPER = path.join(ROOT, "node_modules", "@vvago", "vale");
const BINARY = path.join(WRAPPER, "bin", process.platform === "win32" ? "vale.exe" : "vale");

/**
 * The published binary is fetched by the wrapper's own installer. npm may
 * decline to run install scripts, so the fetch is triggered here instead of
 * being assumed, and it is a no-op once the binary is on disk.
 */
function ensureBinary() {
  if (existsSync(BINARY)) return;
  console.log("Fetching the Vale binary...");
  const install = spawnSync(process.execPath, [path.join(WRAPPER, "index.js")], {
    stdio: "inherit",
  });
  if (install.status !== 0 || !existsSync(BINARY)) {
    throw new Error(
      "Could not obtain the Vale binary. Run `npm install` with install scripts enabled.",
    );
  }
}

function vale(args: string[]) {
  return spawnSync(BINARY, args, { stdio: "inherit", cwd: ROOT });
}

type Alert = {
  Check: string;
  Severity: "suggestion" | "warning" | "error";
  Line: number;
  Message: string;
};

/**
 * Vale exits non-zero on anything at or above MinAlertLevel, which would make
 * every advisory note a build failure. The house rules that must hold are set
 * to error and gate the run; warnings are printed because a long sentence or a
 * "there is" opening is worth an editor's attention without stopping a deploy.
 */
function runVale(target: string) {
  const result = spawnSync(BINARY, ["--output=JSON", target], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const parsed = JSON.parse(result.stdout || "{}") as Record<string, Alert[]>;
  return Object.entries(parsed).flatMap(([file, alerts]) =>
    alerts.map((alert) => ({ ...alert, file: path.basename(file) })),
  );
}

async function main() {
  ensureBinary();

  if (process.argv.includes("--sync")) {
    const synced = vale(["sync"]);
    process.exit(synced.status ?? 1);
  }

  const documents = await extractProse(ROOT);
  await rm(OUTPUT, { recursive: true, force: true });
  await mkdir(OUTPUT, { recursive: true });
  await Promise.all(
    documents.map((document) =>
      writeFile(path.join(OUTPUT, `${document.id}.md`), toMarkdown(document), "utf8"),
    ),
  );

  const blocks = documents.reduce((total, document) => total + document.blocks.length, 0);
  console.log(`Linting ${blocks} passages across ${documents.length} pages.`);

  const alerts = runVale(".prose");
  await rm(OUTPUT, { recursive: true, force: true });

  const errors = alerts.filter((alert) => alert.Severity === "error");
  const warnings = alerts.filter((alert) => alert.Severity === "warning");

  const byCheck = new Map<string, number>();
  for (const alert of alerts) byCheck.set(alert.Check, (byCheck.get(alert.Check) ?? 0) + 1);

  for (const alert of [...errors, ...warnings]) {
    const level = alert.Severity === "error" ? "error" : "warn ";
    console.log(`${level} ${alert.file}:${alert.Line}  ${alert.Check}  ${alert.Message}`);
  }

  const summary = [...byCheck]
    .sort((a, b) => b[1] - a[1])
    .map(([check, count]) => `  ${count.toString().padStart(4)}  ${check}`);
  console.log("");
  console.log(`${errors.length} error(s), ${warnings.length} warning(s):`);
  for (const line of summary) console.log(line);

  if (errors.length > 0) process.exit(1);
  console.log("Prose gate clean.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
