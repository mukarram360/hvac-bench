import { getAllBrands, getArticlesByBrand, getBrandBySlug } from "@/lib/content";
import { normaliseCode, type PassageIndex } from "./passages";
import { parseQuery, type ParsedQuery } from "./query";
import { retrieve, type RankedArticle } from "./retrieve";

/**
 * Answer composition.
 *
 * Every sentence an answer contains is either published HVAC Bench content or
 * one of the fixed framing lines below. There is no generation step, which is
 * what makes "does not invent an answer" a property of the design rather than
 * a hope about a model's behaviour. When retrieval finds nothing, the only
 * thing available to say is that we do not have it.
 *
 * `composeAnswer` is deliberately separated from retrieval so a stronger
 * backend can be introduced later behind the same interface: swap the composer,
 * keep the retrieval, the safety layer, and the entire UI.
 */

export type AssistantLink = { title: string; path: string };

export type AssistantAnswer = {
  question: string;
  answered: boolean;
  answer: string;
  /** Extra line shown separately when the question implies a hazard. */
  safetyNote: string;
  safetyBlocked: boolean;
  /** True when the answer cannot be trusted without knowing the model. */
  needsModel: boolean;
  links: AssistantLink[];
  suggestions: AssistantLink[];
  /** Passage ids every sentence of the answer came from. */
  citations: string[];
  tookMs: number;
};

/** Below this, retrieval has not found anything worth calling an answer. */
const ANSWER_FLOOR = 8;

const FRAMING = {
  notFound:
    "I could not find that on HVAC Bench. We only answer from what we have published, so rather than guess, here is what we do cover.",
  unknownBrand:
    "We do not have published references for that manufacturer yet, and error codes do not carry across brands, so I will not answer from another maker's documentation.",
  brandNotPublished:
    "We track that manufacturer but do not have published references for it yet. Error codes do not carry between brands, so rather than answer from another maker's documentation, here is where to go instead.",
  outOfScope:
    "HVAC Bench does not cover pricing, quotes, installer recommendations, or buying advice, so I do not have an answer for that. What this site does is explain what a fault means and what is safe to check.",
  needsBrand:
    "That code is used by more than one manufacturer with different meanings. Which brand is it, and what is the model number on the indoor unit?",
  unknownCode:
    "We have not published that code, and answering with a different one would be worse than answering nothing. Check the characters against the display and the model number on the rating plate, then try the error code index.",
  safety:
    "That is not a homeowner procedure and HVAC Bench does not publish steps for it. Refrigerant handling, live electrical testing, and anything behind an electrical cover belong with a qualified technician.",
  urgent:
    "If there is burning smell, smoke, sparking, or a breaker that keeps tripping, switch the system off and arrange service before diagnosing anything further.",
  modelScope:
    "Confirm the model on the indoor and outdoor rating plates before relying on this, because the same characters can mean something else on another family.",
};

function truncateToSentences(text: string, maxWords: number): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  const out: string[] = [];
  let words = 0;
  for (const sentence of sentences) {
    const count = sentence.trim().split(/\s+/).length;
    if (words + count > maxWords && out.length > 0) break;
    out.push(sentence.trim());
    words += count;
  }
  return out.join(" ");
}

function linkFor(entry: RankedArticle): AssistantLink {
  return { title: entry.article.title, path: entry.article.path };
}

/**
 * Builds the reply out of retrieved passages. Kept as its own function so a
 * different composer, including a model-backed one, can replace it without
 * touching retrieval, the safety layer, the API, or the interface.
 */
function composeAnswer(
  query: ParsedQuery,
  ranked: RankedArticle[],
): { answer: string; citations: string[]; needsModel: boolean } {
  const best = ranked[0];
  const citations: string[] = [];
  const parts: string[] = [];

  // The direct answer is the page's own one-line statement of what is true,
  // and it is the sentence a code question is asking for.
  const direct = best.passages.find((entry) => entry.passage.kind === "direct-answer");
  const supporting = best.passages.find(
    (entry) =>
      entry.passage.kind !== "direct-answer" &&
      entry.passage.kind !== "scope" &&
      entry.passage.kind !== "handoff",
  );

  if (direct) {
    parts.push(direct.passage.text);
    citations.push(direct.passage.id);
  }

  if (supporting && parts.join(" ").split(/\s+/).length < 70) {
    const text =
      supporting.passage.kind === "faq"
        ? supporting.passage.text
        : truncateToSentences(supporting.passage.text, 45);
    if (text && !parts.includes(text)) {
      parts.push(text);
      citations.push(supporting.passage.id);
    }
  }

  if (parts.length === 0 && best.passages.length > 0) {
    const first = best.passages[0];
    parts.push(truncateToSentences(first.passage.text, 60));
    citations.push(first.passage.id);
  }

  const needsModel = Boolean(best.article.errorCode) || best.matchedCode;
  if (needsModel) parts.push(FRAMING.modelScope);

  return {
    answer: truncateToSentences(parts.join(" "), 110),
    citations,
    needsModel,
  };
}

export function answerQuestion(question: string, index: PassageIndex): AssistantAnswer {
  const started = performance.now();
  const query = parseQuery(question);

  const base = {
    question,
    safetyNote: query.urgent ? FRAMING.urgent : "",
    citations: [] as string[],
  };

  const finish = (partial: Omit<AssistantAnswer, "tookMs" | "question" | "safetyNote">) => ({
    ...base,
    ...partial,
    question,
    safetyNote: base.safetyNote,
    tookMs: performance.now() - started,
  });

  // 1. Safety first. A procedure request past the boundary is refused before
  //    retrieval, so no combination of published text can be assembled into
  //    something that reads like instructions.
  if (query.hazardous) {
    const ranked = retrieve({ ...query, hazardous: false }, index);
    const escalation = ranked[0]?.passages.find(
      (entry) => entry.passage.kind === "escalation",
    );
    return finish({
      answered: false,
      safetyBlocked: true,
      needsModel: false,
      answer: escalation
        ? `${FRAMING.safety} ${escalation.passage.text}`
        : FRAMING.safety,
      links: ranked.slice(0, 2).map(linkFor),
      suggestions: [{ title: "Safety disclaimer", path: "/safety-disclaimer/" }],
      citations: escalation ? [escalation.passage.id] : [],
    });
  }

  // 2. Subjects the site does not publish. Declining is the honest answer;
  //    there is no dealer or quote journey here to hand the question to.
  if (query.outOfScope) {
    return finish({
      answered: false,
      safetyBlocked: false,
      needsModel: false,
      answer: FRAMING.outOfScope,
      links: [],
      suggestions: [
        { title: "Troubleshooting by symptom", path: "/troubleshooting/" },
        { title: "Error code index", path: "/error-codes/" },
        { title: "The HVAC Bench Score", path: "/benchmark/" },
      ],
      citations: [],
    });
  }

  // 3. A brand we track but have not written about yet. The brand hub exists,
  //    so the reader is sent there rather than being answered from a page
  //    about somebody else's equipment.
  if (query.brand && getArticlesByBrand(query.brand).length === 0) {
    const brand = getBrandBySlug(query.brand);
    return finish({
      answered: false,
      safetyBlocked: false,
      needsModel: true,
      answer: FRAMING.brandNotPublished,
      links: [],
      suggestions: [
        ...(brand ? [{ title: `${brand.name} coverage`, path: `/brands/${brand.slug}/` }] : []),
        { title: "Troubleshooting by symptom", path: "/troubleshooting/" },
        { title: "Error code index", path: "/error-codes/" },
      ],
      citations: [],
    });
  }

  // 4. A manufacturer that is not in the registry at all.
  if (query.uncoveredBrand) {
    return finish({
      answered: false,
      safetyBlocked: false,
      needsModel: true,
      answer: FRAMING.unknownBrand,
      links: [],
      suggestions: [
        { title: "Manufacturers we cover", path: "/brands/" },
        { title: "Troubleshooting by symptom", path: "/troubleshooting/" },
      ],
      citations: [],
    });
  }

  // 5. A code or model the reader named that we have never published. Without
  //    this the code is dropped and the question degrades to whatever else is
  //    in it, which answered "gree z99" with the Gree E7 page.
  const unpublishedCode = unpublishedCodeToken(query, index);
  if (unpublishedCode) {
    const brand = query.brand ? getBrandBySlug(query.brand) : undefined;
    return finish({
      answered: false,
      safetyBlocked: false,
      needsModel: true,
      answer: FRAMING.unknownCode,
      links: [],
      suggestions: [
        ...(brand ? [{ title: `${brand.name} coverage`, path: `/brands/${brand.slug}/` }] : []),
        { title: "Error code index", path: "/error-codes/" },
        { title: "Search the library", path: "/search/" },
      ],
      citations: [],
    });
  }

  // 6. A bare code shared by several manufacturers is a question we cannot
  //    answer without knowing whose equipment it is.
  if (!query.brand && query.errorCodes.length > 0) {
    const owners = new Set<string>();
    for (const code of query.errorCodes) {
      for (const brand of index.codeOwners[code] ?? []) owners.add(brand);
    }
    if (owners.size > 1) {
      const names = getAllBrands()
        .filter((brand) => owners.has(brand.slug))
        .map((brand) => brand.name);
      return finish({
        answered: false,
        safetyBlocked: false,
        needsModel: true,
        answer: `${FRAMING.needsBrand} We hold that code for ${names.join(", ")}.`,
        links: [],
        suggestions: [...owners].map((slug) => ({
          title: getAllBrands().find((brand) => brand.slug === slug)!.name,
          path: `/brands/${slug}/`,
        })),
        citations: [],
      });
    }
  }

  const ranked = retrieve(query, index);
  const best = ranked[0];

  // 7. Nothing worth calling an answer, either because retrieval scored too
  //    low or because what it did match was the wording of the question rather
  //    than its subject.
  if (!best || best.score < ANSWER_FLOOR || !isGrounded(query, best)) {
    return finish({
      answered: false,
      safetyBlocked: false,
      needsModel: false,
      answer: FRAMING.notFound,
      links: [],
      suggestions: [
        { title: "Error code index", path: "/error-codes/" },
        { title: "Troubleshooting by symptom", path: "/troubleshooting/" },
        { title: "Search the library", path: "/search/" },
      ],
      citations: [],
    });
  }

  const composed = composeAnswer(query, ranked);

  // A symptom question should not be handed somebody else's error code page.
  // Code pages stay eligible when a code or a brand was actually asked about.
  const relevant =
    query.errorCodes.length > 0 || query.brand
      ? ranked
      : ranked.filter((entry, position) => position === 0 || !entry.article.errorCode);

  return finish({
    answered: true,
    safetyBlocked: false,
    needsModel: composed.needsModel,
    answer: composed.answer,
    links: relevant.slice(0, 3).map(linkFor),
    suggestions: [],
    citations: composed.citations,
  });
}

/**
 * Terms that appear in almost every fault question and identify nothing on
 * their own. An answer resting only on these has matched the shape of the
 * question rather than its subject.
 */
const GENERIC_TERMS = new Set([
  "error", "errors", "code", "codes", "fault", "faults", "alarm", "alarms",
  "alert", "alerts", "mean", "means", "meaning", "hvac", "unit", "units",
  "system", "systems", "ac", "air", "heat", "heating", "cooling", "furnace",
  "thermostat", "display", "screen", "showing", "shows", "reading", "reads",
  "getting", "help", "problem", "issue", "wrong", "model",
]);

/**
 * Whether the retrieved article is anchored to something the reader actually
 * named. A resolved code, the named manufacturer, or a recognised symptom all
 * count, as does any distinctive word from the question. A bare number does
 * not: "payne 21 error code" matched an unrelated page on the strength of
 * "21", "error" and "code", which is the shape of the question and none of its
 * subject.
 */
function isGrounded(query: ParsedQuery, best: RankedArticle): boolean {
  if (best.matchedCode || best.matchedBrand) return true;
  if (query.problemTypes.length > 0) return true;
  for (const token of best.matchedTokens) {
    if (!GENERIC_TERMS.has(token) && !/^\d+$/.test(token)) return true;
  }
  return false;
}

/**
 * A code or model designation the reader typed that this library has never
 * published anywhere. Checked against the index vocabulary rather than a
 * pattern list, so a model the site does write about, such as `yp9c`, stays a
 * perfectly good search term while `z99` does not.
 */
function unpublishedCodeToken(
  query: ParsedQuery,
  index: PassageIndex,
): string | undefined {
  const resolved = new Set(query.errorCodes);
  for (const token of query.codeShapedTokens) {
    if (resolved.has(normaliseCode(token))) continue;
    if (index.postings[token]?.length) continue;
    if (index.codeOwners[normaliseCode(token)]?.length) continue;
    return token;
  }
  return undefined;
}
