import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { articles } from "./articles";
import { glossary } from "./glossary";
import type { GlossaryTermInput } from "./schema";
import { auditProse, repeatedOpeners } from "../../scripts/prose-similarity";
import type { ProseBlock } from "../../scripts/extract-prose";

/**
 * The regression test for the prose factory.
 *
 * This library has twice been built by a function that wrote the same
 * sentences onto every page with a noun swapped: first a single-line article
 * table, then `expanded-library.ts`, whose `page()` helper produced the
 * sections, branches, safety lists, and FAQ closers for twenty-six guides,
 * procedures, and comparisons out of a handful of seed strings. Both passed
 * the exact-string uniqueness checks in template-leakage.test.ts, because
 * interpolating a different title into a shared sentence makes every string
 * unique.
 *
 * So this test does not compare strings. It compares sentences, and it
 * compares them after stripping the words a template would have swapped. A
 * page that shares its reasoning with another page fails here whatever it
 * interpolated, and a helper that writes prose for more than one article
 * cannot be reintroduced without this going red.
 *
 * The same audit is available as `npm run check:similarity`, which prints the
 * offending text rather than a pass or a fail.
 */

function blocksFor(): ProseBlock[] {
  const fromArticles = articles.flatMap((article): ProseBlock[] => {
    const page = article.path;
    const add = (field: string, text?: string | null) =>
      text && text.trim().split(/\s+/).length >= 12 ? [{ page, field, text: text.trim() }] : [];
    return [
      ...add("description", article.description),
      ...add("directAnswer", article.directAnswer),
      ...add("scopeNotice", article.scopeNotice),
      ...article.symptoms.flatMap((t, i) => add(`symptom[${i}]`, t)),
      ...article.causes.flatMap((t, i) => add(`cause[${i}]`, t)),
      ...(article.diagnosticBranches ?? []).flatMap((b, i) => [
        ...add(`branch[${i}].observation`, b.observation),
        ...add(`branch[${i}].action`, b.action),
      ]),
      ...(article.sections ?? []).flatMap((s, i) =>
        s.paragraphs.flatMap((t, j) => add(`section[${i}].p[${j}]`, t)),
      ),
      ...(article.figures ?? []).flatMap((f, i) => add(`figure[${i}]`, f.description)),
      ...(article.steps ?? []).flatMap((s, i) => add(`step[${i}]`, s.text)),
      ...(article.safeChecks ?? []).flatMap((t, i) => add(`safeCheck[${i}]`, t)),
      ...(article.professionalEscalation ?? []).flatMap((t, i) => add(`escalation[${i}]`, t)),
      ...add("serviceHandoff", article.serviceHandoff),
      ...add("resetGuidance", article.resetGuidance),
      ...article.faqs.flatMap((f, i) => add(`faq[${i}]`, f.answer)),
    ];
  });

  const fromGlossary = (glossary as GlossaryTermInput[]).flatMap((term): ProseBlock[] => {
    const page = `/glossary/${term.slug}/`;
    const add = (field: string, text?: string | null) =>
      text && text.trim().split(/\s+/).length >= 12 ? [{ page, field, text: text.trim() }] : [];
    return [
      ...add("definition", term.definition),
      ...add("shortAnswer", term.shortAnswer),
      ...add("metaDescription", term.metaDescription),
      ...add("howItWorks", term.howItWorks),
      ...(term.whereYouMeetIt ?? []).flatMap((t, i) => add(`whereYouMeetIt[${i}]`, t)),
      ...(term.howToCheck ?? []).flatMap((c, i) => add(`check[${i}]`, c.detail)),
      ...(term.mistakes ?? []).flatMap((t, i) => add(`mistake[${i}]`, t)),
      ...(term.regionNotes ?? []).flatMap((n, i) => add(`region[${i}]`, n.note)),
      ...(term.faqs ?? []).flatMap((f, i) => add(`faq[${i}]`, f.answer)),
    ];
  });

  return [...fromArticles, ...fromGlossary];
}

const blocks = blocksFor();

describe("no substantive prose is shared between pages", () => {
  const findings = auditProse(blocks);

  it("repeats no passage on a second page", () => {
    const shared = findings
      .filter((finding) => finding.kind === "passage")
      .map((finding) => `${finding.pages.join(" <-> ")}: ${finding.text.slice(0, 100)}`);
    expect(shared).toEqual([]);
  });

  it("repeats no sentence of ten words or more on a second page", () => {
    const shared = findings
      .filter((finding) => finding.kind === "sentence")
      .map((finding) => `${finding.pages.join(" <-> ")}: ${finding.text.slice(0, 100)}`);
    expect(shared).toEqual([]);
  });

  it("publishes no sentence that is another page's with the nouns swapped", () => {
    const shared = findings
      .filter((finding) => finding.kind === "template")
      .map(
        (finding) =>
          `${finding.similarity} ${finding.pages.join(" <-> ")}: ${finding.text.slice(0, 100)}`,
      );
    expect(shared).toEqual([]);
  });

  it("does not open passages on four or more pages the same way", () => {
    const openers = repeatedOpeners(blocks).map(
      (item) => `"${item.opener}" on ${item.pages.join(", ")}`,
    );
    expect(openers).toEqual([]);
  });
});

/**
 * The structural half of the guarantee. The similarity audit catches a factory
 * after it has run; this catches the factory itself, by refusing to let one
 * module hold the prose for more than one page.
 */
describe("the article library has no shared prose producer", () => {
  const directory = path.join(import.meta.dirname, "articles");
  const modules = readdirSync(directory).filter(
    (name) => name.endsWith(".ts") && !name.includes(".test."),
  );

  it("keeps one module per published article", () => {
    // index.ts and publish.ts are the two non-article modules that belong here.
    // Brand pages are filed under brand-and-code rather than under the route
    // slug, so the count is the guarantee rather than the filename.
    expect(modules.length, "a module holds more than one article, or none").toBe(
      articles.length + 2,
    );
  });

  it("exports exactly one article from each content module", () => {
    for (const name of modules) {
      if (name === "index.ts" || name === "publish.ts") continue;
      const source = readFileSync(path.join(directory, name), "utf8");
      const exports = source.match(/^export const /gm) ?? [];
      expect(exports.length, `${name} exports ${exports.length} articles`).toBe(1);
      expect(source, `${name} maps over a seed list`).not.toMatch(/\.map\(\s*page\s*\)/);
    }
  });

  it("keeps publish() free of prose", () => {
    const source = readFileSync(path.join(directory, "publish.ts"), "utf8");
    // Any template literal that interpolates a value and then continues with
    // prose is the shape the generator used. Publication metadata needs none.
    const interpolatedProse = source.match(/`[^`]*\$\{[^}]+\}[^`]{40,}`/g) ?? [];
    expect(interpolatedProse, "publish() is composing sentences again").toEqual([]);
  });
});
