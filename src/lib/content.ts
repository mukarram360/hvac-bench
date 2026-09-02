import {
  contentSetSchema,
  type Author,
  type Brand,
  type ContentSetInput,
  type GlossaryTerm,
  type Source,
  type TechnicalArticle,
} from "@/content/schema";
import { articles } from "@/content/articles";
import { authors } from "@/content/authors";
import { brands } from "@/content/brands";
import { glossary } from "@/content/glossary";
import { sources } from "@/content/sources";
import {
  EQUIPMENT_TYPES,
  PROBLEM_TYPES,
  type EquipmentTypeSlug,
  type ProblemTypeSlug,
  type RegionCode,
} from "@/content/taxonomy";

export type ValidatedContentSet = {
  authors: Author[];
  brands: Brand[];
  sources: Source[];
  glossary: GlossaryTerm[];
  articles: TechnicalArticle[];
  staticRoutes: string[];
};

function assertUnique(values: string[], label: string) {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`Duplicate ${label}: ${value}`);
    }
    seen.add(value);
  }
}

export function validateContentSet(input: ContentSetInput): ValidatedContentSet {
  const parsed = contentSetSchema.parse(input);

  assertUnique(parsed.brands.map((brand) => brand.slug), "brand slug");
  assertUnique(parsed.sources.map((source) => source.id), "source ID");
  assertUnique(parsed.articles.map((article) => article.path), "article path");
  assertUnique(parsed.authors.map((author) => author.slug), "author slug");
  assertUnique(parsed.glossary.map((term) => term.slug), "glossary slug");

  const brandSlugs = new Set(parsed.brands.map((brand) => brand.slug));
  const sourceIds = new Set(parsed.sources.map((source) => source.id));
  const authorSlugs = new Set(parsed.authors.map((author) => author.slug));
  const glossarySlugs = new Set(parsed.glossary.map((term) => term.slug));
  const validRoutes = new Set([
    ...parsed.staticRoutes,
    ...parsed.articles.map((article) => article.path),
  ]);

  for (const brand of parsed.brands) {
    for (const equipmentType of brand.equipmentTypes) {
      if (!(equipmentType in EQUIPMENT_TYPES)) {
        throw new Error(`${brand.slug} references unknown equipment type: ${equipmentType}`);
      }
    }
  }

  for (const term of parsed.glossary) {
    for (const related of term.related) {
      if (!glossarySlugs.has(related)) {
        throw new Error(`Glossary term ${term.slug} links to unknown term: ${related}`);
      }
    }
  }

  for (const article of parsed.articles) {
    if (article.brand && !brandSlugs.has(article.brand)) {
      throw new Error(`${article.path} references unknown brand: ${article.brand}`);
    }
    if (!(article.equipmentType in EQUIPMENT_TYPES)) {
      throw new Error(`${article.path} references unknown equipment type: ${article.equipmentType}`);
    }
    if (!authorSlugs.has(article.authorSlug)) {
      throw new Error(`${article.path} references unknown author: ${article.authorSlug}`);
    }
    if (article.reviewerSlug && !authorSlugs.has(article.reviewerSlug)) {
      throw new Error(`${article.path} references unknown reviewer: ${article.reviewerSlug}`);
    }
    for (const sourceId of article.sourceIds) {
      if (!sourceIds.has(sourceId)) {
        throw new Error(`${article.path} references unknown source: ${sourceId}`);
      }
    }
    for (const route of article.relatedContent) {
      if (!validRoutes.has(route)) {
        throw new Error(`${article.path} references unknown related route: ${route}`);
      }
    }
  }

  return parsed;
}

/**
 * Symptom families group the finer-grained `problemType` values used on
 * individual articles into the buckets a reader actually browses by.
 */
const SYMPTOM_FAMILY_BY_PROBLEM: Record<string, ProblemTypeSlug> = {
  "not-cooling": "no-cooling",
  "not-heating": "no-heating",
  "water-leak": "water-leak",
  "not-turning-on": "will-not-start",
  "outdoor-unit-not-running": "will-not-start",
  "communication-fault": "communication-fault",
  "zero-crossing-signal-fault": "communication-fault",
  "temperature-sensor-fault": "sensor-fault",
  "inverter-module-protection": "protection-shutdown",
  "voltage-protection": "protection-shutdown",
  "coil-temperature-protection": "protection-shutdown",
  "condenser-high-temperature-protection": "protection-shutdown",
  "frozen-indoor-coil": "ice-and-frost",
  "outdoor-unit-iced-over": "ice-and-frost",
  "abnormal-noise": "noise-and-vibration",
  "musty-odor": "odour-and-air-quality",
  "remote-not-working": "remote-and-controls",
  "short-cycling": "running-cost",
  "filter-maintenance": "maintenance",
};

export function symptomFamilyOf(article: TechnicalArticle): ProblemTypeSlug {
  if (article.symptomFamily && article.symptomFamily in PROBLEM_TYPES) {
    return article.symptomFamily as ProblemTypeSlug;
  }
  return SYMPTOM_FAMILY_BY_PROBLEM[article.problemType] ?? "maintenance";
}

/* ------------------------------------------------------------- routes ---- */

export const trustRoutes = [
  "/about/",
  "/authors/",
  "/editorial-policy/",
  "/sources-methodology/",
  "/corrections/",
  "/safety-disclaimer/",
  "/affiliate-disclosure/",
  "/accessibility/",
  "/contact/",
  "/privacy/",
  "/cookie-policy/",
  "/terms/",
];

export const hubRoutes = [
  "/brands/",
  "/error-codes/",
  "/troubleshooting/",
  "/equipment/",
  "/guides/",
  "/how-to/",
  "/compare/",
  "/glossary/",
  "/faq/",
  "/benchmark/",
];

export const staticRoutes = [
  "/",
  ...hubRoutes,
  ...brands.map((brand) => `/brands/${brand.slug}/`),
  ...Object.keys(EQUIPMENT_TYPES).map((slug) => `/equipment/${slug}/`),
  ...authors.map((author) => `/authors/${author.slug}/`),
  ...trustRoutes,
  "/site-map/",
  "/search/",
];

export const content = validateContentSet({
  authors,
  brands,
  sources,
  glossary,
  articles,
  staticRoutes,
});

/* ------------------------------------------------------------ queries ---- */

export function getAllBrands() {
  return content.brands;
}

export function getBrandBySlug(slug: string) {
  return content.brands.find((brand) => brand.slug === slug);
}

export function getBrandsByRegion(region: RegionCode) {
  return content.brands.filter((brand) => brand.regions.includes(region));
}

export function getBrandsByGroup(group: Brand["group"]) {
  return content.brands.filter((brand) => brand.group === group);
}

export function getAllArticles() {
  return content.articles;
}

export function getArticleByPath(path: string) {
  const normalized = path === "/" ? path : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return content.articles.find((article) => article.path === normalized);
}

export function getArticlesByBrand(brandSlug: string) {
  return content.articles.filter((article) => article.brand === brandSlug);
}

export function getArticlesByEquipment(equipmentType: string) {
  return content.articles.filter((article) => article.equipmentType === equipmentType);
}

export function getArticlesByType(articleType: TechnicalArticle["articleType"]) {
  return content.articles.filter((article) => article.articleType === articleType);
}

export function getArticlesBySymptomFamily(family: ProblemTypeSlug) {
  return content.articles.filter((article) => symptomFamilyOf(article) === family);
}

export function getErrorCodeArticles() {
  return content.articles.filter((article) => Boolean(article.errorCode));
}

export function getRelatedArticles(article: TechnicalArticle) {
  const relatedPaths = new Set(article.relatedContent);
  return content.articles.filter((candidate) => relatedPaths.has(candidate.path));
}

export function getSourceById(sourceId: string) {
  return content.sources.find((source) => source.id === sourceId);
}

export function getAllAuthors() {
  return content.authors;
}

export function getAuthorBySlug(slug: string) {
  return content.authors.find((author) => author.slug === slug);
}

export function getGlossary() {
  return [...content.glossary].sort((first, second) => first.term.localeCompare(second.term));
}

export function getGlossaryTerm(slug: string) {
  return content.glossary.find((term) => term.slug === slug);
}

export function getGlossaryByLetter() {
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of getGlossary()) {
    const letter = term.term[0].toUpperCase();
    groups.set(letter, [...(groups.get(letter) ?? []), term]);
  }
  return [...groups.entries()].sort(([first], [second]) => first.localeCompare(second));
}

export function getEquipmentTypesInUse() {
  return Object.values(EQUIPMENT_TYPES).map((equipment) => ({
    ...equipment,
    articleCount: getArticlesByEquipment(equipment.slug).length,
    brandCount: content.brands.filter((brand) =>
      brand.equipmentTypes.includes(equipment.slug),
    ).length,
  }));
}

export function getSymptomFamiliesInUse() {
  return Object.values(PROBLEM_TYPES).map((problem) => ({
    ...problem,
    articles: getArticlesBySymptomFamily(problem.slug as ProblemTypeSlug),
  }));
}

/* ------------------------------------------------------ indexing rules ---- */

/**
 * A hub enters the index once it has something to answer. Empty hubs stay
 * crawlable and linked, but are marked `noindex, follow` and kept out of the
 * sitemap so the crawl budget goes to pages that carry verified content.
 */
export function isBrandIndexable(brandSlug: string) {
  return getArticlesByBrand(brandSlug).length > 0;
}

export function isEquipmentIndexable(equipmentType: string) {
  return getArticlesByEquipment(equipmentType).length > 0;
}

/* ------------------------------------------------- hub counts + index ---- */

/**
 * Every hub declares which articles it lists. The hub page, the sitemap, the
 * robots directive, and any headline count all read this one map, so a hub
 * cannot claim a total that its own listing contradicts.
 */
const HUB_LISTINGS: Record<string, () => TechnicalArticle[]> = {
  "/guides/": () => [...getArticlesByType("guide"), ...getArticlesByType("maintenance")],
  "/how-to/": () => getArticlesByType("how-to"),
  "/compare/": () => getArticlesByType("comparison"),
  "/error-codes/": () => getErrorCodeArticles(),
  "/troubleshooting/": () => getArticlesByType("troubleshooting"),
};

/** Hubs whose value is their own content rather than a list of articles. */
const REFERENCE_HUBS = new Set([
  "/brands/",
  "/equipment/",
  "/glossary/",
  "/faq/",
  // The benchmark page documents the rating method, so it carries content of
  // its own whether or not any family currently has a published score.
  "/benchmark/",
]);

export function countArticlesForHub(hubPath: string) {
  return HUB_LISTINGS[hubPath]?.().length ?? 0;
}

export function getArticlesForHub(hubPath: string) {
  return HUB_LISTINGS[hubPath]?.() ?? [];
}

export function isHubIndexable(hubPath: string) {
  if (REFERENCE_HUBS.has(hubPath)) return true;
  return countArticlesForHub(hubPath) > 0;
}

/**
 * One source for every headline number on the site. `references` is the whole
 * published library; the format counts are what each hub actually lists. The
 * homepage used to call the library total "guides", which contradicted the
 * guides hub reading "1 published".
 */
export function libraryTotals() {
  return {
    references: content.articles.length,
    guides: countArticlesForHub("/guides/"),
    howTo: countArticlesForHub("/how-to/"),
    comparisons: countArticlesForHub("/compare/"),
    errorCodes: countArticlesForHub("/error-codes/"),
    troubleshooting: countArticlesForHub("/troubleshooting/"),
    brandsTracked: content.brands.length,
    brandsCovered: content.brands.filter((brand) => isBrandIndexable(brand.slug)).length,
    equipmentCovered: Object.keys(EQUIPMENT_TYPES).filter((type) =>
      isEquipmentIndexable(type),
    ).length,
  };
}

export function getIndexableRoutes() {
  const excluded = new Set<string>(["/search/"]);

  for (const hubPath of Object.keys(HUB_LISTINGS)) {
    if (!isHubIndexable(hubPath)) {
      excluded.add(hubPath);
    }
  }

  for (const brand of content.brands) {
    if (!isBrandIndexable(brand.slug)) {
      excluded.add(`/brands/${brand.slug}/`);
    }
  }
  for (const equipmentType of Object.keys(EQUIPMENT_TYPES) as EquipmentTypeSlug[]) {
    if (!isEquipmentIndexable(equipmentType)) {
      excluded.add(`/equipment/${equipmentType}/`);
    }
  }

  return [
    ...staticRoutes.filter((route) => !excluded.has(route)),
    ...content.articles.map((article) => article.path),
  ];
}

/* ------------------------------------------------------- search index ---- */

export type SearchEntry = {
  title: string;
  path: string;
  description: string;
  label: string;
  terms: string;
};

export function buildSearchIndex(): SearchEntry[] {
  const articleEntries = content.articles.map((article) => ({
    title: article.title,
    path: article.path,
    description: article.description,
    label: article.errorCode ?? "Guide",
    terms: [
      article.brand ?? "",
      article.problemType.replaceAll("-", " "),
      article.equipmentType.replaceAll("-", " "),
      article.productFamily ?? "",
      article.models.join(" "),
      article.keywords.join(" "),
    ]
      .join(" ")
      .toLowerCase(),
  }));

  const brandEntries = content.brands.map((brand) => ({
    title: `${brand.name} systems`,
    path: `/brands/${brand.slug}/`,
    description: brand.description,
    label: "Brand",
    terms: [brand.name, ...brand.aliases, ...brand.series, ...brand.equipmentTypes]
      .join(" ")
      .toLowerCase(),
  }));

  const glossaryEntries = content.glossary.map((term) => ({
    title: term.term,
    path: `/glossary/#${term.slug}`,
    description: term.definition.slice(0, 155),
    label: "Term",
    terms: [term.term, ...term.aliases, term.category].join(" ").toLowerCase(),
  }));

  return [...articleEntries, ...brandEntries, ...glossaryEntries];
}
