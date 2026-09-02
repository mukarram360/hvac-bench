import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const projectRoot = path.join(import.meta.dirname, "..", "..");

function readProjectFile(relativePath: string) {
  return readFileSync(path.join(projectRoot, relativePath), "utf8");
}

describe("provenance documentation", () => {
  it("does not say the article publisher fills review dates", () => {
    const articleIndex = readProjectFile("src/content/articles/index.ts");

    expect(articleIndex).not.toMatch(/publish[\s\S]*fills[\s\S]*the dates/i);
    expect(articleIndex).toMatch(/review provenance[\s\S]*supplied/i);
  });

  it("describes the collapsed evidence summary without promising a review date", () => {
    const articlePage = readProjectFile("src/components/article-page.tsx");

    expect(articlePage).toMatch(
      /closed state keeps the documentation class and review status/i,
    );
    expect(articlePage).toMatch(/Source-verified pages also keep the review date there/i);
  });

  it("documents review dates as conditional on source verification", () => {
    const initialDesign = readProjectFile(
      "docs/superpowers/specs/2026-09-01-hvac-bench-design.md",
    );

    expect(initialDesign).toMatch(/source-verified technical pages[\s\S]*review date/i);
    expect(initialDesign).toMatch(/editorial-review pages[\s\S]*omit/i);
    expect(initialDesign).not.toMatch(
      /Technical pages must have at least one source, substantive answer\/diagnostic sections, a review date/i,
    );
  });
});
