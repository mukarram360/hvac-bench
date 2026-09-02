import type { TechnicalArticle } from "@/content/schema";
import type { Passage, PassageIndex } from "./passages";
import type { ParsedQuery } from "./query";

/**
 * Ranking.
 *
 * The ordering rule that matters most: an exact brand and code match beats
 * everything. A reader typing "gree e6" wants the Gree E6 page, not the best
 * lexical match across a library where several pages discuss communication
 * faults. Symptom pages win only when no code was given.
 *
 * The second rule is that a brand in the query is a filter, not a hint. If
 * someone asks about Gree, a Daikin page is not an acceptable answer at any
 * score, because codes do not transfer between manufacturers.
 */

export type RankedArticle = {
  article: TechnicalArticle;
  score: number;
  /** Best passages from this article, strongest first. */
  passages: { passage: Passage; score: number }[];
  matchedCode: boolean;
  matchedBrand: boolean;
  /** Distinct query terms this article matched anywhere. */
  matchedTokens: Set<string>;
};

/**
 * A question is only "about" an article if a reasonable share of what was
 * asked appears in it. Without this, one incidental word carries a whole
 * query: "how much does a new boiler cost in leeds" matches the glossary
 * entry for boiler and would otherwise come back as an answer about boilers.
 */
const MIN_TERM_COVERAGE = 0.4;

/** Passage kinds that answer a question directly rather than support one. */
const KIND_PRIOR: Record<string, number> = {
  "direct-answer": 3,
  faq: 2.6,
  branch: 1.8,
  section: 1.5,
  "safe-check": 1.4,
  cause: 1.3,
  symptom: 1.3,
  table: 1.2,
  step: 1.4,
  scope: 1.1,
  escalation: 1.1,
  reset: 1.2,
  handoff: 0.7,
  glossary: 1.6,
  brand: 0.9,
};

function lexicalScore(
  query: ParsedQuery,
  passage: Passage,
  index: PassageIndex,
  matched: Set<string>,
): number {
  if (query.tokens.length === 0) return 0;
  const passageTokens = new Set(passage.tokens);
  const total = index.passages.length;
  let score = 0;

  for (const token of new Set(query.tokens)) {
    if (!passageTokens.has(token)) continue;
    matched.add(token);
    const df = index.documentFrequency[token] ?? 1;
    // Inverse document frequency: a token in every passage says nothing.
    score += Math.log(total / df);
  }

  // A FAQ whose question overlaps the query is a strong signal.
  if (passage.question) {
    const questionTokens = new Set(
      passage.question.toLowerCase().replace(/[^a-z0-9]+/g, " ").split(" "),
    );
    const overlap = query.tokens.filter((token) => questionTokens.has(token)).length;
    score += overlap * 0.8;
  }

  return score;
}

export function retrieve(query: ParsedQuery, index: PassageIndex): RankedArticle[] {
  const byArticle = new Map<string, RankedArticle>();

  for (const passage of index.passages) {
    // Brand filter. A named brand excludes every other brand's material, and
    // cross-brand pages stay eligible because they are written to apply.
    if (query.brand && passage.brand && passage.brand !== query.brand) continue;

    const matchedCode =
      query.errorCodes.length > 0 &&
      passage.codes.some((code) => query.errorCodes.includes(code));

    // A code in the query that this article does not document means the
    // article is not about the thing being asked, unless it has no code at all
    // and could be relevant as symptom guidance.
    if (query.errorCodes.length > 0 && passage.codes.length > 0 && !matchedCode) continue;

    const matchedHere = new Set<string>();
    let score = lexicalScore(query, passage, index, matchedHere) * (KIND_PRIOR[passage.kind] ?? 1);

    if (matchedCode) score += 40;
    if (query.brand && passage.brand === query.brand) score += 12;
    if (passage.problemType && query.problemTypes.includes(passage.problemType)) score += 14;
    // A code page reached without its code should not outrank symptom pages.
    if (query.errorCodes.length === 0 && passage.codes.length > 0) score -= 3;

    if (score <= 0) continue;

    const article = index.articles.find((entry) => entry.path === passage.articlePath);
    const key = passage.articlePath;
    const existing = byArticle.get(key);

    if (existing) {
      for (const token of matchedHere) existing.matchedTokens.add(token);
      existing.passages.push({ passage, score });
      // An article's score is its best passage plus a fraction of the rest, so
      // a page that matches in several places beats one lucky sentence.
      existing.score = Math.max(existing.score, score) + score * 0.08;
      existing.matchedCode = existing.matchedCode || matchedCode;
    } else if (article) {
      byArticle.set(key, {
        article,
        score,
        passages: [{ passage, score }],
        matchedCode,
        matchedBrand: Boolean(query.brand) && passage.brand === query.brand,
        matchedTokens: matchedHere,
      });
    } else {
      // Glossary and brand passages have no article record. They are carried as
      // suggestions rather than as answers, handled by the answer layer.
      byArticle.set(key, {
        article: {
          title: passage.articleTitle,
          path: passage.articlePath,
        } as TechnicalArticle,
        score,
        passages: [{ passage, score }],
        matchedCode: false,
        matchedBrand: false,
        matchedTokens: matchedHere,
      });
    }
  }

  // Coverage gate. A code match or a recognised symptom is evidence in its own
  // right. Otherwise the question has to overlap the article substantially,
  // measured by information rather than by word count: a query term that
  // appears nowhere in the library ("leeds", "pizza") is rare, therefore
  // heavily weighted, and leaving it unmatched sinks the coverage score. That
  // is what stops one incidental word carrying an off-topic question.
  const total = index.passages.length;
  const termWeight = (token: string) =>
    Math.log(total / ((index.documentFrequency[token] ?? 0) + 1));
  const queryTerms = [...new Set(query.tokens)];
  const queryMass = queryTerms.reduce((sum, token) => sum + termWeight(token), 0);

  const ranked = [...byArticle.values()].filter((entry) => {
    if (entry.matchedCode) return true;
    if (query.problemTypes.length > 0 && entry.article.problemType &&
        query.problemTypes.includes(entry.article.problemType)) {
      return true;
    }
    if (queryMass === 0) return false;
    const matchedMass = [...entry.matchedTokens].reduce(
      (sum, token) => sum + termWeight(token),
      0,
    );
    return matchedMass / queryMass >= MIN_TERM_COVERAGE;
  });

  for (const entry of ranked) {
    entry.passages.sort((a, b) => b.score - a.score || a.passage.id.localeCompare(b.passage.id));
  }

  // Ties break on path so the same question always returns the same answer.
  return ranked.sort(
    (a, b) => b.score - a.score || a.article.path.localeCompare(b.article.path),
  );
}
