import { describe, expect, it } from "vitest";

import { glossary } from "./glossary/index";
import type { GlossaryTermInput } from "./schema";
import { getGlossary, getIndexableRoutes, glossaryPath, staticRoutes } from "@/lib/content";

/**
 * The glossary used to be one scrolling page of paragraphs. It is now sixty
 * odd standalone pages, and a standalone page has to answer a question on its
 * own or it is thin content wearing a URL.
 *
 * These tests set the floor for what a term page must carry, and they check
 * the two things that go wrong when content is produced at this scale: prose
 * shared between records, and a snippet that only makes sense with the heading
 * above it. A short answer that opens "It is the pump that..." is useless to an
 * answer engine, so every one of them has to name its own subject.
 */

const terms = glossary as GlossaryTermInput[];

function normalise(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

/** Every string a reader sees, for the rules that apply to all prose. */
function proseOf(term: GlossaryTermInput) {
  return [
    term.definition,
    term.shortAnswer ?? "",
    term.question ?? "",
    term.metaTitle ?? "",
    term.metaDescription ?? "",
    term.howItWorks ?? "",
    ...(term.whereYouMeetIt ?? []),
    ...(term.mistakes ?? []),
    ...(term.howToCheck ?? []).flatMap((check) => [check.title, check.detail]),
    ...(term.typicalValues ?? []).flatMap((row) => [row.context, row.value, row.note ?? ""]),
    ...(term.faqs ?? []).flatMap((faq) => [faq.question, faq.answer]),
    ...(term.regionNotes ?? []).map((note) => note.note),
    ...(term.facts ?? []).flatMap((fact) => [fact.label, fact.value]),
  ];
}

/**
 * Words from the term that a self-contained answer should repeat. Short
 * connecting words are dropped so "Ton of refrigeration" is satisfied by
 * "refrigeration" rather than by the word "of".
 */
function subjectWords(term: GlossaryTermInput) {
  const words = term.term
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2 && !["and", "the", "for"].includes(word));
  // Short designations such as R-32 leave nothing behind, so fall back to the
  // whole term rather than exempting the entry from the rule.
  return words.length > 0 ? words : [term.term.toLowerCase()];
}

describe("every glossary term carries a page worth publishing", () => {
  it("gives each term its own indexable URL", () => {
    const indexable = new Set(getIndexableRoutes());
    const routes = new Set(staticRoutes);
    for (const term of terms) {
      const path = glossaryPath(term.slug);
      expect(routes, `${term.slug} has no static route`).toContain(path);
      expect(indexable, `${term.slug} is not in the sitemap`).toContain(path);
    }
  });

  it("answers the question before the page has to be read", () => {
    for (const term of terms) {
      expect(term.question, `${term.slug} has no heading question`).toBeTruthy();
      expect(term.question, `${term.slug} question is not a question`).toMatch(/\?$/);
      expect(term.shortAnswer, `${term.slug} has no short answer`).toBeTruthy();
    }
  });

  it("writes a short answer that stands up without the page around it", () => {
    for (const term of terms) {
      const answer = normalise(term.shortAnswer ?? "");
      const named = subjectWords(term).some((word) => answer.includes(word));
      expect(named, `${term.slug} short answer never names its own subject`).toBe(true);
      expect(answer.startsWith("it "), `${term.slug} short answer opens with a pronoun`).toBe(false);
      expect(answer.startsWith("this "), `${term.slug} short answer opens with a pronoun`).toBe(
        false,
      );
    }
  });

  it("carries the depth a standalone page needs", () => {
    for (const term of terms) {
      expect(term.metaTitle, `${term.slug} has no written title`).toBeTruthy();
      expect(term.metaDescription, `${term.slug} has no written description`).toBeTruthy();
      expect(term.keywords?.length ?? 0, `${term.slug} declares no query shapes`).toBeGreaterThan(2);
      expect(term.facts?.length ?? 0, `${term.slug} has an empty term plate`).toBeGreaterThan(2);
      expect(term.howItWorks, `${term.slug} never explains the mechanism`).toBeTruthy();
      expect(term.whereYouMeetIt?.length ?? 0, `${term.slug} says where it is used`).toBeGreaterThan(
        2,
      );
      expect(term.howToCheck?.length ?? 0, `${term.slug} offers no check`).toBeGreaterThan(1);
      expect(term.mistakes?.length ?? 0, `${term.slug} heads off no confusion`).toBeGreaterThan(1);
      expect(term.faqs?.length ?? 0, `${term.slug} answers no follow-up questions`).toBeGreaterThan(
        2,
      );
    }
  });

  it("marks who each check is for", () => {
    for (const term of terms) {
      for (const check of term.howToCheck ?? []) {
        expect(
          check.performedBy,
          `${term.slug} check "${check.title}" does not say who performs it`,
        ).toBeTruthy();
      }
    }
  });

  it("keeps the house style in every field, not only in the definition", () => {
    for (const term of terms) {
      for (const line of proseOf(term)) {
        expect(line, `${term.slug} uses a prohibited dash form`).not.toContain("—");
        expect(line, `${term.slug} uses a prohibited dash form`).not.toContain("--");
      }
    }
  });

  it("writes prose for one term only", () => {
    const fields = ["shortAnswer", "metaTitle", "metaDescription", "howItWorks"] as const;
    for (const field of fields) {
      const seen = new Map<string, string[]>();
      for (const term of terms) {
        const value = term[field];
        if (!value) continue;
        const key = normalise(value);
        seen.set(key, [...(seen.get(key) ?? []), term.slug]);
      }
      const shared = [...seen].filter(([, slugs]) => slugs.length > 1);
      expect(shared.map(([value]) => value), `${field} is shared between terms`).toEqual([]);
    }
  });

  it("does not ask the same question on two pages", () => {
    const seen = new Map<string, string[]>();
    for (const term of terms) {
      for (const question of [term.question, ...(term.faqs ?? []).map((faq) => faq.question)]) {
        if (!question) continue;
        const key = normalise(question);
        seen.set(key, [...(seen.get(key) ?? []), term.slug]);
      }
    }
    const repeated = [...seen]
      .filter(([, slugs]) => new Set(slugs).size > 1)
      .map(([question, slugs]) => `"${question}" on ${[...new Set(slugs)].join(", ")}`);
    expect(repeated, "the same question is answered on more than one page").toEqual([]);
  });

  it("keeps titles and descriptions inside what a result page will show", () => {
    for (const term of terms) {
      // The layout appends " | HVAC Bench", which is why the ceiling is lower
      // than the sixty characters a result page renders.
      expect(term.metaTitle!.length, `${term.slug} title is too long`).toBeLessThanOrEqual(60);
      expect(term.metaDescription!.length, `${term.slug} description is too long`)
        .toBeLessThanOrEqual(165);
      expect(term.metaDescription!.length, `${term.slug} description is too short`)
        .toBeGreaterThanOrEqual(110);
    }
  });

  it("links every term into the rest of the vocabulary", () => {
    const slugs = new Set(terms.map((term) => term.slug));
    for (const term of terms) {
      const related = term.related ?? [];
      expect(related.length, `${term.slug} is an island`).toBeGreaterThan(0);
      for (const target of related) {
        expect(slugs, `${term.slug} links to missing ${target}`).toContain(target);
      }
    }
  });

  it("sorts and groups without losing a term", () => {
    const sorted = getGlossary();
    expect(sorted.length).toBe(terms.length);
    expect(new Set(sorted.map((term) => term.slug)).size).toBe(terms.length);
  });
});
