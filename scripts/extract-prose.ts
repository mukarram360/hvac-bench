import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import { articles } from "../src/content/articles";
import { glossary } from "../src/content/glossary";
import type { GlossaryTermInput } from "../src/content/schema";

/**
 * Pulls the prose a reader actually sees out of the content model.
 *
 * Two tools need the same view of the publication: the Vale gate, which reads
 * it as Markdown, and the similarity audit, which reads it as a list of
 * paragraphs with a home page. Extracting once keeps them honest with each
 * other, and keeps both of them away from the TypeScript around the strings.
 *
 * Only substantive prose is collected. Labels, captions, table cells, source
 * titles, model designations, and route paths are left out: they are supposed
 * to repeat, and a duplicate-detector that flags "Cooling" as shared writing
 * teaches its readers to ignore it.
 */

export type ProseBlock = {
  /** Route the reader would be on. */
  page: string;
  /** Where on the page the text sits, for a useful failure message. */
  field: string;
  text: string;
};

export type ProseDocument = {
  /** File-safe identifier, used for the generated Markdown name. */
  id: string;
  page: string;
  title: string;
  kind: string;
  blocks: ProseBlock[];
};

/** Substantive prose only: a sentence a human wrote to explain something. */
function isSubstantive(value: string) {
  return value.trim().split(/\s+/).length >= 12;
}

function block(page: string, field: string, text: string | undefined | null) {
  if (!text) return [];
  const trimmed = text.trim();
  if (!isSubstantive(trimmed)) return [];
  return [{ page, field, text: trimmed }];
}

function articleDocument(article: (typeof articles)[number]): ProseDocument {
  const page = article.path;
  const blocks: ProseBlock[] = [
    ...block(page, "description", article.description),
    ...block(page, "directAnswer", article.directAnswer),
    ...block(page, "scopeNotice", article.scopeNotice),
    ...article.symptoms.flatMap((text, i) => block(page, `symptoms[${i}]`, text)),
    ...article.causes.flatMap((text, i) => block(page, `causes[${i}]`, text)),
    ...(article.diagnosticBranches ?? []).flatMap((branch, i) => [
      ...block(page, `branch[${i}].observation`, branch.observation),
      ...block(page, `branch[${i}].action`, branch.action),
    ]),
    ...(article.sections ?? []).flatMap((section, i) =>
      section.paragraphs.flatMap((text, j) => block(page, `section[${i}].p[${j}]`, text)),
    ),
    ...(article.figures ?? []).flatMap((figure, i) =>
      block(page, `figure[${i}].description`, figure.description),
    ),
    ...(article.steps ?? []).flatMap((step, i) => block(page, `step[${i}]`, step.text)),
    ...(article.safeChecks ?? []).flatMap((text, i) => block(page, `safeCheck[${i}]`, text)),
    ...(article.professionalEscalation ?? []).flatMap((text, i) =>
      block(page, `escalation[${i}]`, text),
    ),
    ...block(page, "serviceHandoff", article.serviceHandoff),
    ...block(page, "resetGuidance", article.resetGuidance),
    ...article.faqs.flatMap((faq, i) => block(page, `faq[${i}].answer`, faq.answer)),
  ];

  return {
    id: `article-${article.slug}`,
    page,
    title: article.title,
    kind: article.articleType,
    blocks,
  };
}

function glossaryDocument(term: GlossaryTermInput): ProseDocument {
  const page = `/glossary/${term.slug}/`;
  const blocks: ProseBlock[] = [
    ...block(page, "definition", term.definition),
    ...block(page, "shortAnswer", term.shortAnswer),
    ...block(page, "metaDescription", term.metaDescription),
    ...block(page, "howItWorks", term.howItWorks),
    ...(term.whereYouMeetIt ?? []).flatMap((text, i) =>
      block(page, `whereYouMeetIt[${i}]`, text),
    ),
    ...(term.howToCheck ?? []).flatMap((check, i) => block(page, `check[${i}]`, check.detail)),
    ...(term.mistakes ?? []).flatMap((text, i) => block(page, `mistake[${i}]`, text)),
    ...(term.regionNotes ?? []).flatMap((note, i) => block(page, `region[${i}]`, note.note)),
    ...(term.faqs ?? []).flatMap((faq, i) => block(page, `faq[${i}].answer`, faq.answer)),
  ];

  return {
    id: `glossary-${term.slug}`,
    page,
    title: term.term,
    kind: "glossary",
    blocks,
  };
}

/**
 * Prose written directly into a route or a component rather than into the
 * content model. The policy pages, the hub introductions, and the FAQ all live
 * there, and they are read by the same people, so they meet the same standard.
 *
 * A string qualifies only when it reads like a sentence: twelve words or more,
 * closed with sentence punctuation. Class lists, route paths, and identifiers
 * do not survive that test, which keeps the gate pointed at editorial copy.
 */
const SENTENCE = /^(?=.*[a-z]{3,}\s+[a-z]{3,})[^`$<>{}]*[.?!]$/;

function literalsFrom(source: string) {
  const found: string[] = [];
  // Double-quoted strings, and template literals with no interpolation.
  const patterns = [/"((?:[^"\\]|\\.){40,}?)"/g, /`((?:[^`\\$]|\\.){40,}?)`/g];
  for (const pattern of patterns) {
    for (const [, raw] of source.matchAll(pattern)) {
      const value = raw.replace(/\\"/g, '"').replace(/\s+/g, " ").trim();
      if (!SENTENCE.test(value)) continue;
      if (!isSubstantive(value)) continue;
      found.push(value);
    }
  }
  return found;
}

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) return walk(absolute);
      return entry.name.endsWith(".tsx") && !entry.name.includes(".test.")
        ? [absolute]
        : [];
    }),
  );
  return nested.flat();
}

async function routeDocuments(root: string): Promise<ProseDocument[]> {
  const files = await walk(path.join(root, "src", "app"));
  const documents = await Promise.all(
    files.map(async (file): Promise<ProseDocument> => {
      const relative = path.relative(root, file).split(path.sep).join("/");
      const source = await readFile(file, "utf8");
      const page = `/${path
        .relative(path.join(root, "src", "app"), file)
        .split(path.sep)
        .slice(0, -1)
        .join("/")}/`.replace("//", "/");
      return {
        id: `route-${relative.replace(/[^a-z0-9]+/gi, "-")}`,
        page,
        title: relative,
        kind: "route",
        blocks: literalsFrom(source).map((text, i) => ({
          page: relative,
          field: `literal[${i}]`,
          text,
        })),
      };
    }),
  );
  return documents.filter((document) => document.blocks.length > 0);
}

export async function extractProse(root = process.cwd()): Promise<ProseDocument[]> {
  return [
    ...articles.map(articleDocument),
    ...(glossary as GlossaryTermInput[]).map(glossaryDocument),
    ...(await routeDocuments(root)),
  ];
}

/** Renders one document as Markdown for Vale. */
export function toMarkdown(document: ProseDocument) {
  const lines = [`# ${document.title}`, ""];
  for (const item of document.blocks) {
    lines.push(item.text, "");
  }
  return lines.join("\n");
}
