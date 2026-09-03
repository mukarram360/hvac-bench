import type { TechnicalArticle } from "@/content/schema";
import { getAllArticles, getAllBrands, getGlossary, glossaryPath } from "@/lib/content";

/**
 * The retrieval index.
 *
 * The assistant answers out of published HVAC Bench content and nothing else,
 * so the index is built from the same records the pages render. Passages carry
 * their article's identity with them, which is what lets retrieval refuse to
 * answer a Gree question with a Daikin page.
 *
 * The index is built once per process. It used to score every passage on every
 * request, which was defensible while the library was small: the scan cost
 * grew with the library, and so did the per-passage work, because each scored
 * passage rebuilt a token set and re-tokenised its own question. At three
 * times the original page count that arrangement stopped being cheap.
 *
 * So the index now carries postings: token to passage, and the same for the
 * three non-lexical signals that can pull a passage into a result on their own
 * (an exact code, the named brand, a recognised symptom). Retrieval visits the
 * passages that can score and nothing else, and the ranking it produces is
 * unchanged.
 */

export type PassageKind =
  | "direct-answer"
  | "scope"
  | "symptom"
  | "cause"
  | "branch"
  | "safe-check"
  | "escalation"
  | "reset"
  | "handoff"
  | "section"
  | "faq"
  | "step"
  | "table"
  | "glossary"
  | "brand";

export type Passage = {
  id: string;
  kind: PassageKind;
  text: string;
  /** Question text where the passage is a FAQ, used for question matching. */
  question?: string;
  articlePath: string;
  /**
   * Carried only by the glossary and brand passages, which have no article
   * record behind them. For an article passage the title lives once on the
   * article rather than once per passage, which is where it was costing the
   * index a hundred kilobytes to say the same thing forty times.
   */
  articleTitle?: string;
  brand?: string;
  /** Normalised code variants this passage's article covers. */
  codes: string[];
  problemType?: string;
  tokens: string[];
  /**
   * The question split the way the question bonus compares it: lower case,
   * every run of non-alphanumerics treated as a break, and no stop-word
   * filtering, because "what" and "how" are part of how a question reads.
   * Computed here so it is not recomputed for every query.
   */
  questionTokens?: string[];
};

/** Token or key to the positions in `passages` that carry it. */
export type Postings = Record<string, number[]>;

export type PassageIndex = {
  passages: Passage[];
  articles: TechnicalArticle[];
  /** Document frequency per token, for inverse document frequency weighting. */
  documentFrequency: Record<string, number>;
  codeOwners: Record<string, string[]>;
  /** Token to passage positions. Document frequency is the posting length. */
  postings: Postings;
  /** The three signals that can score a passage without any token matching. */
  codePostings: Postings;
  brandPostings: Postings;
  problemPostings: Postings;
};

function questionTokensOf(question: string) {
  return question.toLowerCase().replace(/[^a-z0-9]+/g, " ").split(" ");
}

const STOP_WORDS = new Set([
  "the", "a", "an", "is", "it", "of", "to", "in", "on", "my", "i", "and", "or",
  "for", "with", "at", "be", "this", "that", "does", "do", "what", "why", "how",
  "can", "you", "your", "me", "am", "are", "was", "not", "no", "but", "from",
  "if", "so", "as", "its", "has", "have", "will", "would", "should", "when",
]);

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

/**
 * Codes are written differently everywhere: "PC 0A", "pc-0a", "PC0A". Every
 * comparison happens on this normalised form.
 */
export function normaliseCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

/** An article may document more than one display string for the same fault. */
export function codeVariants(article: TechnicalArticle): string[] {
  if (!article.errorCode) return [];
  return article.errorCode
    .split("/")
    .map((part) => normaliseCode(part))
    .filter(Boolean);
}

export function buildPassageIndex(): PassageIndex {
  const articles = getAllArticles();
  const passages: Passage[] = [];

  const push = (
    article: TechnicalArticle,
    kind: PassageKind,
    text: string,
    suffix: string,
    question?: string,
  ) => {
    passages.push({
      id: `${article.slug}:${kind}:${suffix}`,
      kind,
      text,
      question,
      articlePath: article.path,
      brand: article.brand,
      codes: codeVariants(article),
      problemType: article.problemType,
      // Retrieval only tests token presence, so retaining repeats wastes memory
      // without changing relevance scoring.
      tokens: [...new Set(tokenize(`${question ?? ""} ${text}`))],
      questionTokens: question ? questionTokensOf(question) : undefined,
    });
  };

  for (const article of articles) {
    // The direct answer carries the page's title and its query shapes as well
    // as its own text. A page that answers "how long do mini-splits last" by
    // refusing to give a number still has to be findable by that question, and
    // nothing here changes a word a reader sees.
    push(
      article,
      "direct-answer",
      article.directAnswer,
      "0",
      `${article.title}. ${article.keywords.join(". ")}`,
    );
    if (article.scopeNotice) push(article, "scope", article.scopeNotice, "0");
    article.symptoms.forEach((text, i) => push(article, "symptom", text, String(i)));
    article.causes.forEach((text, i) => push(article, "cause", text, String(i)));
    (article.safeChecks ?? []).forEach((text, i) => push(article, "safe-check", text, String(i)));
    (article.professionalEscalation ?? []).forEach((text, i) => push(article, "escalation", text, String(i)));
    if (article.resetGuidance) push(article, "reset", article.resetGuidance, "0");
    if (article.serviceHandoff) push(article, "handoff", article.serviceHandoff, "0");

    article.diagnosticBranches?.forEach((branch, i) =>
      push(article, "branch", `${branch.title}. ${branch.observation} ${branch.action}`, String(i)),
    );
    article.sections?.forEach((section, i) =>
      push(article, "section", `${section.title}. ${section.paragraphs.join(" ")}`, String(i)),
    );
    article.steps?.forEach((step, i) => push(article, "step", `${step.name}. ${step.text}`, String(i)));
    article.faqs.forEach((faq, i) => push(article, "faq", faq.answer, String(i), faq.question));

    for (const table of [article.decisionTable, article.comparisonTable]) {
      if (!table) continue;
      push(
        article,
        "table",
        `${table.caption}. ${table.rows.map((row) => row.join(", ")).join(". ")}`,
        table === article.decisionTable ? "decision" : "comparison",
      );
    }
  }

  // Reference records answer vocabulary questions the articles assume.
  for (const term of getGlossary()) {
    passages.push({
      id: `glossary:${term.slug}`,
      kind: "glossary",
      text: term.shortAnswer ?? term.definition,
      question: `What is ${term.term}?`,
      articlePath: glossaryPath(term.slug),
      articleTitle: `${term.term} in the HVAC glossary`,
      codes: [],
      questionTokens: questionTokensOf(`What is ${term.term}?`),
      tokens: [...new Set(tokenize(
        `${term.term} ${term.aliases.join(" ")} ${term.definition} ${term.shortAnswer ?? ""}`,
      ))],
    });
  }

  for (const brand of getAllBrands()) {
    passages.push({
      id: `brand:${brand.slug}`,
      kind: "brand",
      text: brand.faultDisplay ? `${brand.description} ${brand.faultDisplay}` : brand.description,
      question: `${brand.name} systems`,
      articlePath: `/brands/${brand.slug}/`,
      articleTitle: `${brand.name} error codes and troubleshooting`,
      brand: brand.slug,
      codes: [],
      questionTokens: questionTokensOf(`${brand.name} systems`),
      tokens: [...new Set(tokenize(
        `${brand.name} ${brand.aliases.join(" ")} ${brand.series.join(" ")}`,
      ))],
    });
  }

  const postings: Postings = {};
  const codePostings: Postings = {};
  const brandPostings: Postings = {};
  const problemPostings: Postings = {};
  const add = (map: Postings, key: string, position: number) => {
    const list = map[key];
    if (list) list.push(position);
    else map[key] = [position];
  };

  passages.forEach((passage, position) => {
    for (const token of passage.tokens) add(postings, token, position);
    for (const code of passage.codes) add(codePostings, code, position);
    if (passage.brand) add(brandPostings, passage.brand, position);
    if (passage.problemType) add(problemPostings, passage.problemType, position);
  });

  // Tokens are deduplicated on the passage, so a posting list has one entry
  // per passage and its length is the document frequency.
  const documentFrequency: Record<string, number> = {};
  for (const [token, positions] of Object.entries(postings)) {
    documentFrequency[token] = positions.length;
  }

  // Which brands document a given code, so a bare code can ask for a brand
  // rather than guessing at one.
  const codeOwners: Record<string, string[]> = {};
  for (const article of articles) {
    for (const code of codeVariants(article)) {
      const owners = codeOwners[code] ?? [];
      if (article.brand && !owners.includes(article.brand)) owners.push(article.brand);
      codeOwners[code] = owners;
    }
  }

  return {
    passages,
    articles,
    documentFrequency,
    codeOwners,
    postings,
    codePostings,
    brandPostings,
    problemPostings,
  };
}
