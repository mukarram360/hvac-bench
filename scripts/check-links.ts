import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { getAllBrands, getIndexableRoutes } from "../src/lib/content";
import { EQUIPMENT_TYPES } from "../src/content/taxonomy";

const ROOT = process.cwd();
const SEARCH_ROOTS = [path.join(ROOT, "src", "app"), path.join(ROOT, "src", "components")];
const generatedRoutes = new Set([
  ...getIndexableRoutes(),
  ...getAllBrands().map((brand) => `/brands/${brand.slug}/`),
  ...Object.keys(EQUIPMENT_TYPES).map((type) => `/equipment/${type}/`),
  "/search/",
  "/robots.txt",
  "/sitemap.xml",
  "/rss.xml",
  "/llms.txt",
  "/manifest.webmanifest",
  "/search-index.json",
]);

function normalizeRoute(route: string) {
  const pathname = route.split(/[?#]/, 1)[0];
  if (pathname === "/" || path.extname(pathname)) return pathname;
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

async function sourceFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(absolute);
    return /\.(tsx|ts)$/.test(entry.name) ? [absolute] : [];
  }));
  return files.flat();
}

async function main() {
  const files = (await Promise.all(SEARCH_ROOTS.map(sourceFiles))).flat();
  const missing: string[] = [];
  let checked = 0;

  for (const file of files) {
    const source = await readFile(file, "utf8");
    for (const match of source.matchAll(/href=["'](\/[^"']*?)["']/g)) {
      const route = normalizeRoute(match[1]);
      checked += 1;
      if (!generatedRoutes.has(route)) {
        missing.push(`${path.relative(ROOT, file)} -> ${route}`);
      }
    }
  }

  if (missing.length) {
    throw new Error(`Broken internal routes:\n${missing.join("\n")}`);
  }

  console.log(`Internal route check passed: ${checked} literal links across ${files.length} source files; ${generatedRoutes.size} known routes.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
