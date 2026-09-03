import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { articles } from "./articles";
import { glossary } from "./glossary/index";
import { getIndexableRoutes, staticRoutes, getAllArticles } from "@/lib/content";

/**
 * The evidence rule applies to the whole publication, not only to the long
 * technical pages.
 *
 * An earlier pass cleaned unsupported prevalence claims out of the cross-brand
 * articles and left them standing in the glossary and the FAQ, which are the
 * two surfaces a reader is most likely to quote back. "The single most common
 * cause of reduced airflow" is a statistical claim, and nothing in the
 * manufacturer literature the site holds supports one. Mechanism can be stated
 * from documentation; frequency cannot.
 */

const projectRoot = path.join(import.meta.dirname, "..", "..");

function read(relativePath: string) {
  return readFileSync(path.join(projectRoot, relativePath), "utf8");
}

/** Claims about how often something happens, as opposed to how it works. */
const PREVALENCE_CLAIMS = [
  /\bsingle most\b/i,
  /\bmost common\b/i,
  /\bcommon(?:est)? (?:root )?cause\b/i,
  /\bcommon origin\b/i,
  /\bcommon source of\b/i,
  /\bthe usual (?:reason|cause|culprit|suspect)\b/i,
  /\bfrequent sources?\b/i,
  /\bmost systems\b/i,
  /\bmost units\b/i,
  /\bmost installations\b/i,
  /\bin most cases\b/i,
  /\balmost always\b/i,
  /\bnine times out of ten\b/i,
  /\bmore often than not\b/i,
  /\bmost (?:setups|comfort complaints|owners|fault codes)\b/i,
  /\bmost likely to be misdiagnosed\b/i,
  /\blargest effect\b/i,
  /\bbiggest cause\b/i,
  /\bmain culprit\b/i,
  /\busually the (?:cause|problem|reason)\b/i,
];

/**
 * Editorial surfaces that carry technical claims. Policy and legal pages are
 * excluded because they describe the publication rather than the equipment.
 */
const EDITORIAL_SURFACES = [
  "src/content/glossary/system-types.ts",
  "src/content/glossary/components.ts",
  "src/content/glossary/refrigeration.ts",
  "src/content/glossary/airflow.ts",
  "src/content/glossary/controls.ts",
  "src/content/glossary/measurement.ts",
  "src/content/glossary/efficiency.ts",
  "src/content/glossary/service.ts",
  "src/app/glossary/[term]/page.tsx",
  "src/app/faq/page.tsx",
  "src/app/page.tsx",
  "src/app/guides/page.tsx",
  "src/app/how-to/page.tsx",
  "src/app/compare/page.tsx",
  "src/app/troubleshooting/page.tsx",
  "src/app/error-codes/page.tsx",
  "src/app/glossary/page.tsx",
  "src/components/glossary-term-page.tsx",
  "src/app/sources-methodology/page.tsx",
  "src/app/editorial-policy/page.tsx",
  "src/app/about/page.tsx",
];

describe("supporting content keeps the article evidence discipline", () => {
  it("publishes no unsupported prevalence claim on an editorial surface", () => {
    for (const surface of EDITORIAL_SURFACES) {
      const contents = read(surface);
      for (const pattern of PREVALENCE_CLAIMS) {
        expect(
          pattern.test(contents),
          `${surface} makes an unsupported prevalence claim (${pattern})`,
        ).toBe(false);
      }
    }
  });

  it("holds brand-scoped articles to the same rule as cross-brand ones", () => {
    for (const article of articles) {
      const prose = JSON.stringify(article);
      for (const pattern of PREVALENCE_CLAIMS) {
        expect(pattern.test(prose), `${article.path} (${pattern})`).toBe(false);
      }
    }
  });

  it("keeps every glossary definition free of prevalence claims", () => {
    for (const term of glossary) {
      for (const pattern of PREVALENCE_CLAIMS) {
        expect(pattern.test(term.definition), `${term.slug} (${pattern})`).toBe(false);
      }
    }
  });

  it("routes the terms a reader arrives on back into the library", () => {
    const indexable = new Set(getIndexableRoutes());
    const linked = glossary.filter((term) => term.seeAlso);

    expect(linked.length, "no glossary term points at a published reference").toBeGreaterThan(15);
    for (const term of linked) {
      expect(indexable, `${term.slug} points at ${term.seeAlso!.path}`).toContain(
        term.seeAlso!.path,
      );
    }
  });

  it("writes definitions rather than diagnoses", () => {
    for (const term of glossary) {
      expect(term.definition.length, `${term.slug} is too short to define anything`)
        .toBeGreaterThan(80);
      expect(term.definition, `${term.slug} uses a prohibited dash form`).not.toContain("—");
      expect(term.definition, `${term.slug} uses a prohibited dash form`).not.toContain("--");
    }
  });
});

/**
 * The FAQ is a routing surface, not a content silo. A question that needs more
 * than a paragraph belongs in the library, and the answer here should say so
 * by pointing at the page that carries the full diagnosis.
 */
describe("FAQ answers route to the library", () => {
  const faqSource = read("src/app/faq/page.tsx");
  const questions = [...faqSource.matchAll(/question:\s*"/g)];
  const references = [...faqSource.matchAll(/reference: \{ label: "[^"]+", href: "([^"]+)" \}/g)];

  it("gives every answer a reference link", () => {
    expect(questions.length).toBeGreaterThan(0);
    expect(references.length).toBe(questions.length);
  });

  it("links only to routes that exist", () => {
    const known = new Set([...staticRoutes, ...getAllArticles().map((article) => article.path)]);
    for (const [, href] of references) {
      expect(known, `FAQ links to unknown route ${href}`).toContain(href);
    }
  });

  it("keeps the linked routes indexable", () => {
    const indexable = new Set(getIndexableRoutes());
    for (const [, href] of references) {
      expect(indexable, `FAQ sends readers to noindexed ${href}`).toContain(href);
    }
  });
});
