import { describe, expect, it } from "vitest";

import {
  countArticlesForHub,
  getAllArticles,
  getIndexableRoutes,
  isHubIndexable,
  libraryTotals,
} from "./content";

/**
 * A hub earns indexing by carrying content. Publishing an empty format hub
 * invites a thin-content impression and teaches a crawler that the section is
 * not worth returning to, so an empty hub stays out of the index and out of
 * the sitemap until it holds a page.
 */
describe("hub indexability", () => {
  it("keeps a hub with no articles out of the index", () => {
    for (const hub of ["/guides/", "/how-to/", "/compare/", "/troubleshooting/", "/error-codes/"]) {
      const count = countArticlesForHub(hub);
      expect(isHubIndexable(hub), `${hub} holds ${count} articles`).toBe(count > 0);
    }
  });

  it("keeps empty hubs out of the sitemap", () => {
    const routes = new Set(getIndexableRoutes());
    for (const hub of ["/guides/", "/how-to/", "/compare/"]) {
      if (countArticlesForHub(hub) === 0) {
        expect(routes.has(hub), `${hub} is empty and must not be in the sitemap`).toBe(false);
      } else {
        expect(routes.has(hub)).toBe(true);
      }
    }
  });

  it("indexes reference hubs that are not article listings", () => {
    // The glossary and FAQ carry their own content rather than article cards.
    expect(isHubIndexable("/glossary/")).toBe(true);
    expect(isHubIndexable("/faq/")).toBe(true);
    expect(isHubIndexable("/brands/")).toBe(true);
    expect(isHubIndexable("/equipment/")).toBe(true);
  });
});

/**
 * "25 guides" on the homepage next to "1 published" on the guides hub is a
 * contradiction a reader can see. Counts come from one place and are named for
 * what they actually count.
 */
describe("library totals", () => {
  it("counts every published reference exactly once", () => {
    const totals = libraryTotals();
    expect(totals.references).toBe(getAllArticles().length);
    const routes = new Set(getIndexableRoutes());
    for (const article of getAllArticles()) {
      expect(routes.has(article.path), `${article.path} must be indexable`).toBe(true);
    }
  });

  it("counts each format hub with the articles that hub lists", () => {
    const totals = libraryTotals();
    expect(totals.guides).toBe(countArticlesForHub("/guides/"));
    expect(totals.howTo).toBe(countArticlesForHub("/how-to/"));
    expect(totals.comparisons).toBe(countArticlesForHub("/compare/"));
    expect(totals.errorCodes).toBe(countArticlesForHub("/error-codes/"));
    expect(totals.troubleshooting).toBe(countArticlesForHub("/troubleshooting/"));
  });

  it("never reports a format count larger than the library", () => {
    const totals = libraryTotals();
    for (const key of ["guides", "howTo", "comparisons", "errorCodes", "troubleshooting"] as const) {
      expect(totals[key]).toBeLessThanOrEqual(totals.references);
    }
  });

  it("counts only brands that carry a published reference as covered", () => {
    const totals = libraryTotals();
    expect(totals.brandsCovered).toBeGreaterThan(0);
    expect(totals.brandsCovered).toBeLessThanOrEqual(totals.brandsTracked);
  });
});
