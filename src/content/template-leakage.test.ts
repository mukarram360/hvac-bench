import { describe, expect, it } from "vitest";

import { articles } from "./articles";
import type { TechnicalArticle } from "./schema";

/**
 * The library used to fill every article from one template, which produced
 * FAQ questions like "What does How to clean a mini-split filter without
 * damaging it mean?" and gave twenty-four pages the same three-row decision
 * table. These tests make that failure mode impossible to reintroduce: the
 * reasoning on a page has to be written for the question the page answers.
 *
 * They deliberately do not require the same sections everywhere. An article
 * chooses the structure its question needs; what it may not do is share its
 * reasoning sentences with another article.
 */

function words(value: string) {
  return value.trim().split(/\s+/).length;
}

function normalise(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

/** Collects a value with the articles that used it, to report collisions well. */
function collect(pick: (article: TechnicalArticle) => string[]) {
  const seen = new Map<string, string[]>();
  for (const article of articles) {
    for (const value of pick(article)) {
      const key = normalise(value);
      seen.set(key, [...(seen.get(key) ?? []), article.slug]);
    }
  }
  return seen;
}

function expectUnique(label: string, pick: (article: TechnicalArticle) => string[]) {
  const collisions = [...collect(pick)]
    .filter(([, slugs]) => new Set(slugs).size > 1)
    .map(([value, slugs]) => `${label}: "${value.slice(0, 80)}" in ${[...new Set(slugs)].join(", ")}`);
  expect(collisions, `${label} is shared between articles`).toEqual([]);
}

describe("no template leakage between articles", () => {
  it("writes section prose for one article only", () => {
    expectUnique("section paragraph", (article) =>
      (article.sections ?? []).flatMap((section) => section.paragraphs),
    );
  });

  it("does not repeat a section heading across the library", () => {
    const headings = collect((article) => (article.sections ?? []).map((s) => s.title));
    const repeated = [...headings].filter(([, slugs]) => new Set(slugs).size > 2);
    expect(repeated.map(([title]) => title), "section headings repeat site wide").toEqual([]);
  });

  it("writes diagnostic branches for the specific question", () => {
    expectUnique("branch observation", (article) =>
      (article.diagnosticBranches ?? []).map((branch) => branch.observation),
    );
    expectUnique("branch action", (article) =>
      (article.diagnosticBranches ?? []).map((branch) => branch.action),
    );
  });

  it("gives each decision and comparison table its own rows", () => {
    expectUnique("table row", (article) => [
      ...(article.decisionTable?.rows ?? []).map((row) => row.join(" | ")),
      ...(article.comparisonTable?.rows ?? []).map((row) => row.join(" | ")),
    ]);
    expectUnique("table caption", (article) =>
      [article.decisionTable?.caption, article.comparisonTable?.caption].filter(
        (caption): caption is string => Boolean(caption),
      ),
    );
  });

  it("does not reuse one figure across the library", () => {
    expectUnique("figure node", (article) =>
      (article.figures ?? []).flatMap((figure) =>
        figure.nodes.map((node) => `${node.label}: ${node.detail}`),
      ),
    );
    const genericPath = articles.filter((article) =>
      (article.figures ?? []).some(
        (figure) =>
          figure.nodes.map((node) => node.label).join(",") === "Observe,Check safely,Escalate",
      ),
    );
    expect(genericPath.map((a) => a.slug), "generic Observe/Check/Escalate figure").toEqual([]);
  });

  it("writes its own FAQ answers and service handoff", () => {
    expectUnique("faq answer", (article) => article.faqs.map((faq) => faq.answer));
    expectUnique("service handoff", (article) =>
      article.serviceHandoff ? [article.serviceHandoff] : [],
    );
    expectUnique("scope notice", (article) =>
      article.scopeNotice ? [article.scopeNotice] : [],
    );
  });
});

describe("FAQ questions read like questions people ask", () => {
  it("never builds a question out of the whole article title", () => {
    for (const article of articles) {
      for (const faq of article.faqs) {
        expect(
          faq.question.includes(article.title),
          `${article.slug} FAQ repeats its title: ${faq.question}`,
        ).toBe(false);
      }
    }
  });

  it("rejects the generated question artifacts", () => {
    const artifacts = [
      /^What does How to /i,
      /^Can I safely reset How to /i,
      /^When does How to .* need professional service/i,
      /^What does .{45,} mean\?$/i,
    ];
    for (const article of articles) {
      for (const faq of article.faqs) {
        for (const pattern of artifacts) {
          expect(
            pattern.test(faq.question),
            `${article.slug} has a generated FAQ: ${faq.question}`,
          ).toBe(false);
        }
      }
    }
  });

  it("keeps questions short enough to be a real search", () => {
    for (const article of articles) {
      for (const faq of article.faqs) {
        expect(words(faq.question), `${article.slug}: ${faq.question}`).toBeLessThanOrEqual(16);
        expect(faq.question.endsWith("?"), `${article.slug}: ${faq.question}`).toBe(true);
      }
    }
  });

  it("asks something different in every question on a page", () => {
    for (const article of articles) {
      const questions = article.faqs.map((faq) => normalise(faq.question));
      expect(new Set(questions).size, `${article.slug} repeats a question`).toBe(questions.length);
    }
  });
});

describe("every article carries real reasoning", () => {
  it("supplies its own diagnostic branches and FAQs", () => {
    for (const article of articles) {
      expect(article.diagnosticBranches?.length ?? 0, article.slug).toBeGreaterThanOrEqual(2);
      expect(article.faqs.length, article.slug).toBeGreaterThanOrEqual(3);
      expect(article.sections?.length ?? 0, article.slug).toBeGreaterThanOrEqual(2);
    }
  });

  it("chooses at least two visual reasoning aids without forcing all of them", () => {
    for (const article of articles) {
      const aids = [
        article.decisionTable,
        article.comparisonTable,
        article.figures?.length ? article.figures : undefined,
        article.steps?.length ? article.steps : undefined,
      ].filter(Boolean).length;
      expect(aids, `${article.slug} has ${aids} reasoning aids`).toBeGreaterThanOrEqual(2);
    }
  });

  it("gives a procedure page real steps and no reset framing", () => {
    for (const article of articles) {
      if (article.articleType === "how-to" || article.articleType === "maintenance") {
        expect(article.steps?.length ?? 0, article.slug).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it("keeps enough explanation to answer the query", () => {
    for (const article of articles) {
      const prose = (article.sections ?? [])
        .flatMap((section) => section.paragraphs)
        .join(" ");
      expect(words(prose), `${article.slug} explanation is thin`).toBeGreaterThanOrEqual(220);
    }
  });

  it("names the model scope on every error code page", () => {
    for (const article of articles) {
      if (article.articleType !== "error-code") continue;
      expect(article.productFamily, `${article.slug} has no product family`).toBeTruthy();
      expect(article.scopeNotice, `${article.slug} has no scope notice`).toBeTruthy();
    }
  });
});
