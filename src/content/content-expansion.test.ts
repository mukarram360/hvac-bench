import { describe, expect, it } from "vitest";

import { articles } from "./articles";
import { glossary } from "./glossary";

const expectedGuides = [
  "/how-mini-splits-work/",
  "/how-heat-pump-defrost-works/",
  "/seer2-explained/",
  "/btu-sizing-explained/",
  "/inverter-technology-explained/",
  "/mini-split-lifespan/",
  "/heat-pump-operating-temperatures/",
  "/hvac-refrigerants-explained/",
];

const expectedHowTos = [
  "/mini-split-filter-cleaning/",
  "/how-to-find-mini-split-model-number/",
  "/how-to-reset-mini-split-safely/",
  "/how-to-check-mini-split-remote/",
  "/how-to-prepare-mini-split-for-winter/",
  "/how-to-clean-around-outdoor-unit/",
  "/how-to-tell-if-mini-split-is-in-defrost/",
  "/how-to-read-hvac-data-plate/",
  "/how-to-check-mini-split-condensate-drain/",
  "/how-to-document-hvac-fault-for-service/",
];

const expectedComparisons = [
  "/daikin-vs-mitsubishi-mini-splits/",
  "/mitsubishi-vs-fujitsu-mini-splits/",
  "/gree-vs-midea-mini-splits/",
  "/mrcool-vs-pioneer-mini-splits/",
  "/senville-vs-pioneer-mini-splits/",
  "/mini-split-vs-central-air/",
  "/single-zone-vs-multi-zone-mini-split/",
  "/heat-pump-vs-furnace/",
  "/ductless-vs-ducted-heat-pump/",
];

describe("the planned content expansion", () => {
  it("publishes the complete guide, how-to, and comparison inventory", () => {
    const byType = (type: string) =>
      articles.filter((article) => article.articleType === type).map((article) => article.path);

    expect(byType("guide").sort()).toEqual([...expectedGuides].sort());
    expect(
      articles
        .filter((article) => ["how-to", "maintenance"].includes(article.articleType))
        .map((article) => article.path)
        .sort(),
    ).toEqual([...expectedHowTos].sort());
    expect(byType("comparison").sort()).toEqual([...expectedComparisons].sort());
    expect(articles).toHaveLength(51);
  });

  it("keeps every new page evidence-backed and internally connected", () => {
    const foundingCount = 25;
    for (const article of articles.slice(foundingCount)) {
      expect(article.sourceIds.length, `${article.path} has no evidence`).toBeGreaterThanOrEqual(2);
      expect(article.relatedContent.length, `${article.path} has no article links`).toBeGreaterThanOrEqual(3);
      expect(article.glossaryTerms?.length, `${article.path} has no glossary links`).toBeGreaterThanOrEqual(2);
      if (article.articleType === "how-to") {
        expect(article.steps!.length, article.path).toBeGreaterThanOrEqual(4);
      } else {
        expect(article.steps?.length ?? 0, article.path).toBe(0);
      }
    }

    for (const path of expectedComparisons.slice(0, 5)) {
      const article = articles.find((item) => item.path === path);
      expect(article?.relatedBrands?.length, `${path} has no brand-hub links`).toBe(2);
    }
  });

  it("finishes the evidence record for every glossary page", () => {
    const missing = glossary.filter((term) => !term.sourceIds?.length).map((term) => term.slug);
    expect(missing).toEqual([]);
  });
});
