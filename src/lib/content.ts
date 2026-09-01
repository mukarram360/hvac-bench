import {
  contentSetSchema,
  type Brand,
  type ContentSetInput,
  type Source,
  type TechnicalArticle,
} from "@/content/schema";
import { articles } from "@/content/articles";
import { brands } from "@/content/brands";
import { sources } from "@/content/sources";

export type ValidatedContentSet = {
  brands: Brand[];
  sources: Source[];
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

  assertUnique(
    parsed.brands.map((brand) => brand.slug),
    "brand slug",
  );
  assertUnique(
    parsed.sources.map((source) => source.id),
    "source ID",
  );
  assertUnique(
    parsed.articles.map((article) => article.path),
    "article path",
  );

  const brandSlugs = new Set(parsed.brands.map((brand) => brand.slug));
  const sourceIds = new Set(parsed.sources.map((source) => source.id));
  const validRoutes = new Set([
    ...parsed.staticRoutes,
    ...parsed.articles.map((article) => article.path),
  ]);

  for (const article of parsed.articles) {
    if (article.brand && !brandSlugs.has(article.brand)) {
      throw new Error(`${article.path} references unknown brand: ${article.brand}`);
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

export const staticRoutes = [
  "/",
  "/brands/",
  ...brands.map((brand) => `/brands/${brand.slug}/`),
  "/error-codes/",
  "/troubleshooting/",
  "/equipment/",
  "/about/",
  "/editorial-policy/",
  "/sources-methodology/",
  "/safety-disclaimer/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/search/",
];

export const content = validateContentSet({
  brands,
  sources,
  articles,
  staticRoutes,
});

export function getAllBrands() {
  return content.brands;
}

export function getBrandBySlug(slug: string) {
  return content.brands.find((brand) => brand.slug === slug);
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

export function getRelatedArticles(article: TechnicalArticle) {
  const relatedPaths = new Set(article.relatedContent);
  return content.articles.filter((candidate) => relatedPaths.has(candidate.path));
}

export function getSourceById(sourceId: string) {
  return content.sources.find((source) => source.id === sourceId);
}

export function getIndexableRoutes() {
  return [
    ...staticRoutes.filter((route) => route !== "/search/"),
    ...content.articles.map((article) => article.path),
  ];
}
