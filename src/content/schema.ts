import { z } from "zod";

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const absolutePath = z.union([
  z.literal("/"),
  z.string().regex(/^\/[a-z0-9]+(?:[a-z0-9/-]*[a-z0-9])?\/$/),
]);
const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "dates must use YYYY-MM-DD");

const regionCode = z.enum(["us", "uk", "eu"]);

/* ------------------------------------------------------------------ people */

/**
 * Author and reviewer records. Every technical page names the desk that wrote
 * it and, where applicable, the person who reviewed it, so experience and
 * accountability are visible rather than implied.
 */
export const authorSchema = z.object({
  slug,
  name: z.string().min(2),
  role: z.string().min(4),
  entityType: z.enum(["person", "editorial-desk"]),
  shortBio: z.string().min(60).max(320),
  bio: z.array(z.string().min(60)).min(1),
  expertise: z.array(z.string().min(3)).min(2),
  credentials: z.array(z.string().min(3)).default([]),
  email: z.email().optional(),
  sameAs: z.array(z.url()).default([]),
});

/* ------------------------------------------------------------------ brands */

export const brandSchema = z.object({
  name: z.string().min(2),
  slug,
  description: z.string().min(40),
  equipmentTypes: z.array(slug).min(1),
  regions: z.array(regionCode).min(1),
  /** Product families a reader is likely to see on the model label. */
  series: z.array(z.string().min(2)).default([]),
  /** Alternate names and trading styles, used by on-site search only. */
  aliases: z.array(z.string().min(2)).default([]),
  /** How this manufacturer usually presents faults to the owner. */
  faultDisplay: z.string().min(20).optional(),
  group: z.enum([
    "ductless-specialist",
    "global-manufacturer",
    "north-america-full-line",
    "europe-heating",
    "controls",
  ]),
});

/* ----------------------------------------------------------------- sources */

export const sourceSchema = z.object({
  id: slug,
  title: z.string().min(8),
  publisher: z.string().min(2),
  url: z.url(),
  sourceType: z.enum([
    "oem-service-manual",
    "oem-operation-manual",
    "oem-support",
    "government-guidance",
    "standards-body",
  ]),
  scopeNote: z.string().min(20).optional(),
});

/* -------------------------------------------------------------- reference */

export const glossaryTermSchema = z.object({
  term: z.string().min(2),
  slug,
  definition: z.string().min(80),
  category: z.enum([
    "system-types",
    "components",
    "refrigeration",
    "airflow",
    "controls",
    "measurement",
    "efficiency",
    "service",
  ]),
  aliases: z.array(z.string().min(1)).default([]),
  related: z.array(slug).default([]),
  /**
   * Where a reader actually meets the term. A definition that ends without
   * saying where the word turns up leaves the reader holding vocabulary and
   * no route back into the library.
   */
  seeAlso: z
    .object({ label: z.string().min(4), path: absolutePath })
    .optional(),
});

export const faqSchema = z.object({
  question: z.string().min(12),
  answer: z.string().min(60),
});

export const howToStepSchema = z.object({
  name: z.string().min(6),
  text: z.string().min(30),
});

export const diagnosticBranchSchema = z.object({
  title: z.string().min(12),
  observation: z.string().min(30),
  action: z.string().min(30),
});

/**
 * Table cells carry a label in the first column and reasoning in the rest.
 * A useful label is often one word ("Cooling", "P0 or PC00"), so the floor is
 * low enough to allow that while still rejecting an empty cell.
 */
export const decisionRowSchema = z.array(z.string().min(3)).min(2);
export const comparisonRowSchema = z.array(z.string().min(3)).min(2);

const diagnosticTableSchema = z.object({
  caption: z.string().min(12),
  columns: z.array(z.string().min(3)).min(2).max(4),
  rows: z.array(decisionRowSchema).min(1),
});

export const contentSectionSchema = z.object({
  title: z.string().min(8),
  paragraphs: z.array(z.string().min(30)).min(1),
});

export const articleFigureSchema = z.object({
  title: z.string().min(8),
  description: z.string().min(40),
  nodes: z
    .array(
      z.object({
        label: z.string().min(3),
        detail: z.string().min(12),
      }),
    )
    .min(2)
    .max(6),
});

/* ---------------------------------------------------------------- articles */

export const articleSchema = z.object({
  title: z.string().min(20),
  slug,
  path: absolutePath,
  description: z.string().min(70).max(180),
  articleType: z.enum([
    "error-code",
    "troubleshooting",
    "maintenance",
    "how-to",
    "guide",
    "comparison",
  ]),
  brand: slug.optional(),
  equipmentType: slug,
  productFamily: z.string().min(2).optional(),
  models: z.array(z.string().min(1)).min(1),
  errorCode: z.string().min(1).optional(),
  problemType: slug,
  /** Grouping key for the symptom hubs. Derived when omitted. */
  symptomFamily: slug.optional(),
  directAnswer: z.string().min(60),
  scopeNotice: z.string().min(60).optional(),
  symptoms: z.array(z.string().min(20)).min(1),
  causes: z.array(z.string().min(20)).min(1),
  diagnosticBranches: z.array(diagnosticBranchSchema).min(1).optional(),
  decisionTable: diagnosticTableSchema.optional(),
  comparisonTable: diagnosticTableSchema.optional(),
  sections: z.array(contentSectionSchema).min(1).optional(),
  figures: z.array(articleFigureSchema).min(1).optional(),
  safeChecks: z.array(z.string().min(20)).min(1),
  professionalEscalation: z.array(z.string().min(20)).min(1),
  serviceHandoff: z.string().min(60).optional(),
  resetGuidance: z.string().min(30).optional(),
  /** Ordered steps. Present only when the page really is a procedure. */
  steps: z.array(howToStepSchema).min(2).optional(),
  faqs: z.array(faqSchema).max(8).default([]),
  sourceIds: z.array(slug).min(1),
  sourceType: z.enum([
    "oem-service-manual",
    "oem-operation-manual",
    "oem-support",
    "government-guidance",
    "standards-body",
    "mixed-primary-sources",
  ]),
  authorSlug: slug.default("hvac-bench-editorial"),
  reviewerSlug: slug.optional(),
  datePublished: isoDate.optional(),
  lastReviewed: isoDate,
  reviewStatus: z.enum(["source-verified", "editorial-review"]),
  relatedContent: z.array(absolutePath).max(8),
  keywords: z.array(z.string().min(2)).max(12),
});

export type Author = z.infer<typeof authorSchema>;
export type Brand = z.infer<typeof brandSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type GlossaryTerm = z.infer<typeof glossaryTermSchema>;
export type Faq = z.infer<typeof faqSchema>;
export type HowToStep = z.infer<typeof howToStepSchema>;
export type DiagnosticBranch = z.infer<typeof diagnosticBranchSchema>;
export type DecisionRow = z.infer<typeof decisionRowSchema>;
export type ComparisonRow = z.infer<typeof comparisonRowSchema>;
export type ContentSection = z.infer<typeof contentSectionSchema>;
export type ArticleFigure = z.infer<typeof articleFigureSchema>;
export type TechnicalArticle = z.infer<typeof articleSchema>;

export const contentSetSchema = z.object({
  authors: z.array(authorSchema).min(1),
  brands: z.array(brandSchema).min(1),
  sources: z.array(sourceSchema).min(1),
  glossary: z.array(glossaryTermSchema).min(1),
  articles: z.array(articleSchema).min(1),
  staticRoutes: z.array(absolutePath),
});

export type ContentSetInput = z.input<typeof contentSetSchema>;
