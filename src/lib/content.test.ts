import { describe, expect, it } from "vitest";

import type { Brand, Source, TechnicalArticle } from "@/content/schema";

import {
  content,
  getAllArticles,
  getAllBrands,
  getArticleByPath,
  getBrandBySlug,
  getRelatedArticles,
  validateContentSet,
} from "./content";

const validBrand: Brand = {
  name: "Gree",
  slug: "gree",
  description: "Documentation-led guidance for Gree HVAC equipment.",
  equipmentTypes: ["ductless-mini-split"],
};

const validSource: Source = {
  id: "gree-e6-manual",
  title: "Multi21+ Service Manual",
  publisher: "Gree Comfort",
  url: "https://www.greecomfort.com/assets/documents/archive/multi21-revision-b/service-manual-30k-36k-42k.pdf",
  sourceType: "oem-service-manual",
};

const validArticle: TechnicalArticle = {
  title: "Gree E6 error code: communication fault",
  slug: "e6-error-code",
  path: "/brands/gree/e6-error-code/",
  description: "What Gree E6 indicates, which systems the source covers, safe checks, and when service is needed.",
  articleType: "error-code",
  brand: "gree",
  equipmentType: "ductless-mini-split",
  productFamily: "Multi21+",
  models: ["30K", "36K", "42K Multi21+"],
  errorCode: "E6",
  problemType: "communication-fault",
  directAnswer: "On the documented Gree Multi21+ systems, E6 indicates a communication malfunction between indoor and outdoor equipment.",
  symptoms: ["The indoor unit displays E6 and normal heating or cooling stops."],
  causes: ["Indoor-to-outdoor wiring or control communication is interrupted."],
  safeChecks: ["Record the complete model number and confirm whether E6 returns after one power cycle."],
  professionalEscalation: ["A technician should inspect wiring and control boards with power isolated."],
  sourceIds: ["gree-e6-manual"],
  sourceType: "oem-service-manual",
  lastReviewed: "2026-09-01",
  reviewStatus: "source-verified",
  relatedContent: ["/brands/gree/", "/mini-split-not-cooling/"],
  keywords: ["Gree E6"],
};

describe("validateContentSet", () => {
  it("accepts a complete, sourced article", () => {
    const result = validateContentSet({
      brands: [validBrand],
      sources: [validSource],
      articles: [validArticle],
      staticRoutes: ["/brands/gree/", "/mini-split-not-cooling/"],
    });

    expect(result.articles).toHaveLength(1);
    expect(result.articles[0].path).toBe("/brands/gree/e6-error-code/");
  });

  it.each([
    ["unknown brand", { brand: "unknown" }, /unknown brand/i],
    ["missing source", { sourceIds: ["missing"] }, /unknown source/i],
    ["broken related route", { relatedContent: ["/missing/"] }, /unknown related route/i],
    ["thin direct answer", { directAnswer: "E6 fault." }, /directAnswer/i],
    ["empty safe checks", { safeChecks: [] }, /safeChecks/i],
    ["invalid review date", { lastReviewed: "09-01-2026" }, /lastReviewed/i],
  ])("rejects %s", (_label, patch, error) => {
    expect(() =>
      validateContentSet({
        brands: [validBrand],
        sources: [validSource],
        articles: [{ ...validArticle, ...patch }],
        staticRoutes: ["/brands/gree/", "/mini-split-not-cooling/"],
      }),
    ).toThrow(error);
  });

  it("rejects duplicate article paths", () => {
    expect(() =>
      validateContentSet({
        brands: [validBrand],
        sources: [validSource],
        articles: [
          validArticle,
          { ...validArticle, title: "Another complete technical guide title" },
        ],
        staticRoutes: ["/brands/gree/", "/mini-split-not-cooling/"],
      }),
    ).toThrow(/duplicate article path/i);
  });
});

describe("published content", () => {
  it("publishes exactly ten required brand hubs", () => {
    expect(getAllBrands().map((brand) => brand.slug)).toEqual([
      "gree",
      "daikin",
      "mitsubishi",
      "midea",
      "mrcool",
      "fujitsu",
      "pioneer",
      "senville",
      "lg",
      "samsung",
    ]);
    expect(getBrandBySlug("gree")?.name).toBe("Gree");
    expect(getBrandBySlug("not-a-brand")).toBeUndefined();
  });

  it("publishes a bounded seed set of at least twenty validated guides", () => {
    expect(content.articles.length).toBeGreaterThanOrEqual(20);
    expect(content.articles.length).toBeLessThanOrEqual(30);
    expect(getAllArticles()).toHaveLength(content.articles.length);
  });

  it("looks up articles by canonical path and resolves controlled relations", () => {
    const article = getArticleByPath("/brands/gree/e6-error-code/");
    expect(article?.errorCode).toBe("E6");
    expect(article && getRelatedArticles(article).length).toBeGreaterThan(0);
    expect(getArticleByPath("/not-published/")).toBeUndefined();
  });

  it("preserves the evidence class of single-source technical guides", () => {
    expect(getArticleByPath("/brands/midea/e1-error-code/")?.sourceType).toBe(
      "oem-service-manual",
    );
    expect(getArticleByPath("/brands/gree/h5-error-code/")?.sourceType).toBe(
      "oem-support",
    );
    expect(getArticleByPath("/mini-split-filter-cleaning/")?.sourceType).toBe(
      "mixed-primary-sources",
    );
  });
});
