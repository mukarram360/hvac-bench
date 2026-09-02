import { extractProse } from "./extract-prose";
import { auditProse, repeatedOpeners } from "./prose-similarity";

/**
 * Cross-page editorial similarity report.
 *
 * The same audit runs as a test (src/content/prose-similarity.test.ts). This
 * command exists so the report can be read while editing, with the offending
 * text printed rather than reduced to a pass or a fail.
 */

async function main() {
  const documents = await extractProse(process.cwd());
  const editorial = documents.filter((document) => document.kind !== "route");
  const blocks = editorial.flatMap((document) => document.blocks);

  const findings = auditProse(blocks);
  const openers = repeatedOpeners(blocks);

  const counts = {
    passage: findings.filter((f) => f.kind === "passage").length,
    sentence: findings.filter((f) => f.kind === "sentence").length,
    template: findings.filter((f) => f.kind === "template").length,
  };

  console.log(
    `${blocks.length} passages across ${editorial.length} editorial pages.\n` +
      `repeated passages: ${counts.passage}\n` +
      `repeated sentences: ${counts.sentence}\n` +
      `template siblings: ${counts.template}\n` +
      `repeated openings: ${openers.length}`,
  );

  for (const finding of findings.slice(0, 60)) {
    console.log(
      `\n[${finding.kind} ${finding.similarity}] ${finding.pages.join(" <-> ")}\n  ${finding.text.slice(0, 220)}`,
    );
  }
  if (findings.length > 60) console.log(`\n...and ${findings.length - 60} more.`);

  for (const opener of openers) {
    console.log(`\n[opening x${opener.pages.length}] "${opener.opener}"\n  ${opener.pages.join(", ")}`);
  }

  if (findings.length > 0 || openers.length > 0) process.exit(1);
  console.log("\nNo shared editorial prose.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
