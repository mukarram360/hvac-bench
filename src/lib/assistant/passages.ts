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
 * The index is built once per process. It is small enough that scoring every
 * passage on every request is faster than maintaining an inverted index, and
 * far easier to reason about.
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
  articleTitle: string;
  brand?: string;
  /** Normalised code variants this passage's article covers. */
  codes: string[];
  equipmentType?: string;
  problemType?: string;
  productFamily?: string;
  tokens: string[];
};

export type PassageIndex = {
  passages: Passage[];
  articles: TechnicalArticle[];
  /** Document frequency per token, for inverse document frequency weighting. */
  documentFrequency: Record<string, number>;
  codeOwners: Record<string, string[]>;
};

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
      articleTitle: article.title,
      brand: article.brand,
      codes: codeVariants(article),
      equipmentType: article.equipmentType,
      problemType: article.problemType,
      productFamily: article.productFamily,
      tokens: tokenize(`${question ?? ""} ${text}`),
    });
  };

  for (const article of articles) {
    push(article, "direct-answer", article.directAnswer, "0");
    if (article.scopeNotice) push(article, "scope", article.scopeNotice, "0");
    article.symptoms.forEach((text, i) => push(article, "symptom", text, String(i)));
    article.causes.forEach((text, i) => push(article, "cause", text, String(i)));
    article.safeChecks.forEach((text, i) => push(article, "safe-check", text, String(i)));
    article.professionalEscalation.forEach((text, i) => push(article, "escalation", text, String(i)));
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
      tokens: tokenize(
        `${term.term} ${term.aliases.join(" ")} ${term.definition} ${term.shortAnswer ?? ""}`,
      ),
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
      tokens: tokenize(`${brand.name} ${brand.aliases.join(" ")} ${brand.series.join(" ")}`),
    });
  }

  const documentFrequency: Record<string, number> = {};
  for (const passage of passages) {
    for (const token of new Set(passage.tokens)) {
      documentFrequency[token] = (documentFrequency[token] ?? 0) + 1;
    }
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

  return { passages, articles, documentFrequency, codeOwners };
}
