import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { buildSearchIndex } from "../src/lib/content";

/**
 * Writes the on-site search index to /public as a static asset.
 *
 * Keeping the index out of the page payload means the homepage does not grow
 * as the library does; the browser fetches it only when someone searches.
 */
async function main() {
  const entries = buildSearchIndex();
  const outputDirectory = path.join(process.cwd(), "public");
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(
    path.join(outputDirectory, "search-index.json"),
    JSON.stringify(entries),
    "utf8",
  );
  console.log(`Search index written: ${entries.length} entries.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
