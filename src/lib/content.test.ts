import { describe, expect, it } from "vitest";

import type {
  Author,
  Brand,
  GlossaryTermInput,
  Source,
  TechnicalArticle,
} from "@/content/schema";

import {
  buildSearchIndex,
  content,
  getAllArticles,
  getAllBrands,
  getArticleByPath,
  getBrandBySlug,
  getBrandsByRegion,
  getGlossaryByLetter,
  getIndexableRoutes,
  getRelatedArticles,
  isBrandIndexable,
  symptomFamilyOf,
  validateContentSet,
} from "./content";

const validAuthor: Author = {
  slug: "hvac-bench-editorial",
  name: "HVAC Bench Editorial Desk",
  role: "Technical research and editing",
  entityType: "editorial-desk",
  shortBio:
    "The editorial desk researches HVAC faults against manufacturer service literature and writes each page with its scope stated.",
  bio: [
    "The desk works from manufacturer documentation for the equipment in question, and states the product family that documentation covers.",
  ],
  expertise: ["Manufacturer fault-code documentation", "Technical editing"],
  credentials: [],
  sameAs: [],
};

const validBrand: Brand = {
  name: "Gree",
  slug: "gree",
  description: "Documentation-led guidance for Gree HVAC equipment.",
  equipmentTypes: ["ductless-mini-split"],
  regions: ["us"],
  series: ["Multi21+"],
  aliases: [],
  group: "ductless-specialist",
};

const validSource: Source = {
  id: "gree-e6-manual",
  title: "Multi21+ Service Manual",
  publisher: "Gree Comfort",
  url: "https://www.greecomfort.com/assets/documents/archive/multi21-revision-b/service-manual-30k-36k-42k.pdf",
  sourceType: "oem-service-manual",
};

const validTerm: GlossaryTermInput = {
  term: "Compressor",
  slug: "compressor",
  definition:
    "The pump at the centre of the refrigeration circuit, raising the pressure and temperature of refrigerant vapour so heat can be rejected at the condenser.",
  category: "components",
  aliases: [],
  related: [],
};

const validArticle: TechnicalArticle = {
  title: "Gree E6 error code: communication fault",
  slug: "e6-error-code",
  path: "/brands/gree/e6-error-code/",
  description:
    "What Gree E6 indicates, which systems the source covers, safe checks, and when service is needed.",
  articleType: "error-code",
  brand: "gree",
  equipmentType: "ductless-mini-split",
  productFamily: "Multi21+",
  models: ["30K", "36K", "42K Multi21+"],
  errorCode: "E6",
  problemType: "communication-fault",
  directAnswer:
    "On the documented Gree Multi21+ systems, E6 indicates a communication malfunction between indoor and outdoor equipment.",
  symptoms: ["The indoor unit displays E6 and normal heating or cooling stops."],
  causes: ["Indoor-to-outdoor wiring or control communication is interrupted."],
  safeChecks: ["Record the complete model number and confirm whether E6 returns after one power cycle."],
  professionalEscalation: ["A technician should inspect wiring and control boards with power isolated."],
  faqs: [],
  sourceIds: ["gree-e6-manual"],
  sourceType: "oem-service-manual",
  authorSlug: "hvac-bench-editorial",
  lastReviewed: "2026-09-01",
  reviewStatus: "source-verified",
  relatedContent: ["/brands/gree/", "/mini-split-not-cooling/"],
  keywords: ["Gree E6"],
};

const baseSet = {
  authors: [validAuthor],
  brands: [validBrand],
  sources: [validSource],
  glossary: [validTerm],
  staticRoutes: ["/brands/gree/", "/mini-split-not-cooling/"],
};

describe("validateContentSet", () => {
  it("accepts a complete, sourced article", () => {
    const result = validateContentSet({ ...baseSet, articles: [validArticle] });

    expect(result.articles).toHaveLength(1);
    expect(result.articles[0].path).toBe("/brands/gree/e6-error-code/");
  });

  it.each([
    ["unknown brand", { brand: "unknown" }, /unknown brand/i],
    ["missing source", { sourceIds: ["missing"] }, /unknown source/i],
    ["broken related route", { relatedContent: ["/missing/"] }, /unknown related route/i],
    ["unknown author", { authorSlug: "someone-else" }, /unknown author/i],
    ["unknown equipment type", { equipmentType: "hovercraft" }, /unknown equipment type/i],
    ["thin direct answer", { directAnswer: "E6 fault." }, /directAnswer/i],
    ["empty safe checks", { safeChecks: [] }, /safeChecks/i],
    ["invalid review date", { lastReviewed: "09-01-2026" }, /lastReviewed/i],
  ])("rejects %s", (_label, patch, error) => {
    expect(() =>
      validateContentSet({ ...baseSet, articles: [{ ...validArticle, ...patch }] }),
    ).toThrow(error);
  });

  it("rejects duplicate article paths", () => {
    expect(() =>
      validateContentSet({
        ...baseSet,
        articles: [validArticle, { ...validArticle, title: "Another complete technical guide title" }],
      }),
    ).toThrow(/duplicate article path/i);
  });

  it("rejects a glossary term linking to a term that does not exist", () => {
    expect(() =>
      validateContentSet({
        ...baseSet,
        glossary: [{ ...validTerm, related: ["not-a-term"] }],
        articles: [validArticle],
      }),
    ).toThrow(/unknown term/i);
  });
});

describe("published content", () => {
  it("covers the founding ductless brands plus the wider US, UK, and EU market", () => {
    const slugs = getAllBrands().map((brand) => brand.slug);
    for (const slug of ["gree", "daikin", "mitsubishi", "midea", "mrcool", "fujitsu", "pioneer", "senville", "lg", "samsung"]) {
      expect(slugs).toContain(slug);
    }
    expect(getAllBrands().length).toBeGreaterThanOrEqual(40);
    expect(getBrandsByRegion("uk").length).toBeGreaterThanOrEqual(10);
    expect(getBrandsByRegion("eu").length).toBeGreaterThanOrEqual(10);
    expect(getBrandSlugsAreUnique()).toBe(true);
    expect(getBrandBySlug("not-a-brand")).toBeUndefined();
  });

  it("publishes a bounded seed set of validated guides", () => {
    expect(content.articles.length).toBeGreaterThanOrEqual(20);
    expect(getAllArticles()).toHaveLength(content.articles.length);
  });

  it("looks up articles by canonical path and resolves controlled relations", () => {
    const article = getArticleByPath("/brands/gree/e6-error-code/");
    expect(article?.errorCode).toBe("E6");
    expect(article && getRelatedArticles(article).length).toBeGreaterThan(0);
    expect(getArticleByPath("/not-published/")).toBeUndefined();
  });

  it("preserves the evidence class of single-source technical guides", () => {
    expect(getArticleByPath("/brands/midea/e1-error-code/")?.sourceType).toBe("oem-service-manual");
    expect(getArticleByPath("/brands/gree/h5-error-code/")?.sourceType).toBe("oem-support");
    expect(getArticleByPath("/mini-split-filter-cleaning/")?.sourceType).toBe("mixed-primary-sources");
  });

  it("groups fine-grained problem types into browsable symptom families", () => {
    const frozen = getArticleByPath("/mini-split-frozen-coil/");
    const remote = getArticleByPath("/mini-split-remote-not-working/");
    expect(frozen && symptomFamilyOf(frozen)).toBe("ice-and-frost");
    expect(remote && symptomFamilyOf(remote)).toBe("remote-and-controls");
  });

  it("gives every author record a resolvable profile route", () => {
    for (const author of content.authors) {
      expect(getIndexableRoutes()).toContain(`/authors/${author.slug}/`);
    }
  });
});

describe("indexing rules", () => {
  it("keeps brand hubs without published references out of the sitemap", () => {
    const routes = getIndexableRoutes();
    const empty = getAllBrands().filter((brand) => !isBrandIndexable(brand.slug));

    expect(empty.length).toBeGreaterThan(0);
    for (const brand of empty) {
      expect(routes).not.toContain(`/brands/${brand.slug}/`);
    }
    expect(routes).toContain("/brands/gree/");
  });

  it("never lists the client-side search utility", () => {
    expect(getIndexableRoutes()).not.toContain("/search/");
  });

  it("lists every published article and every hub", () => {
    const routes = getIndexableRoutes();
    for (const article of getAllArticles()) {
      expect(routes).toContain(article.path);
    }
    for (const hub of ["/", "/brands/", "/error-codes/", "/troubleshooting/", "/glossary/", "/faq/"]) {
      expect(routes).toContain(hub);
    }
  });
});

describe("search index", () => {
  it("indexes articles, brands, and glossary terms with searchable aliases", () => {
    const index = buildSearchIndex();
    const gree = index.find((entry) => entry.path === "/brands/gree/");

    expect(index.length).toBeGreaterThan(getAllArticles().length);
    expect(gree?.terms).toContain("multi21+");
    expect(index.some((entry) => entry.label === "Term")).toBe(true);
    expect(index.every((entry) => entry.title && entry.description && entry.path)).toBe(true);
  });

  it("splits the glossary into alphabetical groups", () => {
    const groups = getGlossaryByLetter();
    expect(groups.length).toBeGreaterThan(5);
    expect(groups.every(([letter]) => /^[A-Z]$/.test(letter))).toBe(true);
  });
});

function getBrandSlugsAreUnique() {
  const slugs = getAllBrands().map((brand) => brand.slug);
  return new Set(slugs).size === slugs.length;
}
