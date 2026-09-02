import type { ProseBlock } from "./extract-prose";

/**
 * Deterministic cross-page similarity.
 *
 * The failure this exists to catch is not plagiarism, it is a prose factory:
 * one function that writes the same sentence onto thirty pages with the brand,
 * the code, or the equipment type swapped. Exact-string comparison misses that
 * completely, because swapping one noun makes every string unique. So the
 * audit works at three depths.
 *
 *   1. A whole passage repeated verbatim on another page.
 *   2. A sentence of ten words or more repeated verbatim on another page.
 *   3. A long sentence that matches another page's sentence everywhere except
 *      a handful of tokens, which is the signature of a filled-in template.
 *
 * Everything here is pure and order-independent, so the same content always
 * produces the same report, and the same report in a test as on the command
 * line.
 */

export type Finding = {
  kind: "passage" | "sentence" | "template";
  /** Routes that share the text, sorted, so a report never reorders itself. */
  pages: string[];
  /** How alike the two pieces are, 1 for verbatim. */
  similarity: number;
  text: string;
  where: string[];
};

/** Words that carry no editorial signal, so a match on them means nothing. */
const STOP = new Set([
  "the", "a", "an", "and", "or", "of", "to", "in", "on", "for", "is", "are",
  "that", "this", "it", "as", "at", "by", "be", "with", "from", "not", "can",
  "may", "which", "when", "than", "then", "but", "its", "has", "have", "was",
]);

export function normalise(value: string) {
  return value
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokens(value: string) {
  return normalise(value).split(" ").filter(Boolean);
}

/**
 * Sentence split that survives technical prose. A full stop only ends a
 * sentence when the next thing is the start of one, which keeps "SEER2 of
 * 16.2" and "R-410A" in one piece without a list of exceptions.
 */
export function sentences(value: string) {
  return value
    .split(/(?<=[.?!])\s+(?=["'(“]?[A-Z])/)
    .map((part) => part.trim())
    .filter(Boolean);
}

/**
 * Similarity between two token lists, counting only content words and only
 * once each. Two sentences that differ by a brand name and an equipment type
 * score close to 1; two sentences about the same subject written independently
 * do not, because independent writing varies its verbs and its clause order.
 */
export function contentSimilarity(left: string[], right: string[]) {
  const content = (list: string[]) => list.filter((word) => !STOP.has(word));
  const a = content(left);
  const b = content(right);
  if (a.length < 4 || b.length < 4) return 0;

  const pool = new Map<string, number>();
  for (const word of b) pool.set(word, (pool.get(word) ?? 0) + 1);

  let shared = 0;
  for (const word of a) {
    const available = pool.get(word) ?? 0;
    if (available > 0) {
      shared += 1;
      pool.set(word, available - 1);
    }
  }
  return (2 * shared) / (a.length + b.length);
}

type Candidate = { block: ProseBlock; text: string; words: string[] };

/**
 * Buckets candidates by content word so the audit compares the pairs that
 * could plausibly match instead of every pair on the site. Two sentences with
 * no content word in common cannot be template siblings. Words that turn up
 * across a large slice of the library say nothing about authorship, so their
 * buckets are skipped.
 */
function pairsToCheck(candidates: Candidate[]) {
  const index = new Map<string, number[]>();
  candidates.forEach((candidate, position) => {
    for (const word of new Set(candidate.words.filter((w) => !STOP.has(w)))) {
      index.set(word, [...(index.get(word) ?? []), position]);
    }
  });

  const pairs = new Set<string>();
  for (const positions of index.values()) {
    if (positions.length > 80) continue;
    for (let i = 0; i < positions.length; i += 1) {
      for (let j = i + 1; j < positions.length; j += 1) {
        pairs.add(`${positions[i]}:${positions[j]}`);
      }
    }
  }
  return [...pairs].map((pair) => pair.split(":").map(Number) as [number, number]);
}

export type AuditOptions = {
  /** Sentences at or above this similarity are treated as one template. */
  templateSimilarity?: number;
  /** Shortest sentence the audit will judge, in words. */
  minSentenceWords?: number;
};

export function auditProse(blocks: ProseBlock[], options: AuditOptions = {}) {
  const templateSimilarity = options.templateSimilarity ?? 0.8;
  const minSentenceWords = options.minSentenceWords ?? 10;
  const findings: Finding[] = [];

  /* --------------------------------------------- 1. repeated whole passage */
  const passages = new Map<string, ProseBlock[]>();
  for (const item of blocks) {
    const key = normalise(item.text);
    passages.set(key, [...(passages.get(key) ?? []), item]);
  }
  for (const [key, group] of passages) {
    const pages = [...new Set(group.map((item) => item.page))].sort();
    if (pages.length < 2) continue;
    findings.push({
      kind: "passage",
      pages,
      similarity: 1,
      text: key,
      where: group.map((item) => `${item.page} ${item.field}`).sort(),
    });
  }

  /* ------------------------------------------ 2 and 3. the sentence level */
  const candidates: Candidate[] = [];
  for (const item of blocks) {
    for (const sentence of sentences(item.text)) {
      const words = tokens(sentence);
      if (words.length < minSentenceWords) continue;
      candidates.push({ block: item, text: sentence, words });
    }
  }

  const verbatim = new Map<string, Candidate[]>();
  for (const candidate of candidates) {
    const key = candidate.words.join(" ");
    verbatim.set(key, [...(verbatim.get(key) ?? []), candidate]);
  }
  for (const group of verbatim.values()) {
    const pages = [...new Set(group.map((item) => item.block.page))].sort();
    if (pages.length < 2) continue;
    findings.push({
      kind: "sentence",
      pages,
      similarity: 1,
      text: group[0].text,
      where: group.map((item) => `${item.block.page} ${item.block.field}`).sort(),
    });
  }

  for (const [left, right] of pairsToCheck(candidates)) {
    const a = candidates[left];
    const b = candidates[right];
    if (a.block.page === b.block.page) continue;
    if (a.words.join(" ") === b.words.join(" ")) continue; // reported above
    const similarity = contentSimilarity(a.words, b.words);
    if (similarity < templateSimilarity) continue;
    findings.push({
      kind: "template",
      pages: [a.block.page, b.block.page].sort(),
      similarity: Number(similarity.toFixed(3)),
      text: a.text,
      where: [`${a.block.page} ${a.block.field}`, `${b.block.page} ${b.block.field}`].sort(),
    });
  }

  return findings.sort(
    (x, y) =>
      y.similarity - x.similarity ||
      x.kind.localeCompare(y.kind) ||
      x.pages.join().localeCompare(y.pages.join()) ||
      x.text.localeCompare(y.text),
  );
}

/**
 * Repeated paragraph openings. A library where thirty pages open a passage the
 * same way was written from one outline, whatever the rest of the sentence
 * goes on to say.
 */
export function repeatedOpeners(blocks: ProseBlock[], limit = 3) {
  const openers = new Map<string, Set<string>>();
  for (const item of blocks) {
    const words = tokens(item.text).slice(0, 5);
    if (words.length < 5) continue;
    const key = words.join(" ");
    openers.set(key, new Set([...(openers.get(key) ?? []), item.page]));
  }
  return [...openers]
    .filter(([, pages]) => pages.size > limit)
    .map(([opener, pages]) => ({ opener, pages: [...pages].sort() }))
    .sort((a, b) => b.pages.length - a.pages.length || a.opener.localeCompare(b.opener));
}
