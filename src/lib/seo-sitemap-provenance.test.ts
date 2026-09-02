import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

vi.mock("./content", () => ({
  getArticleByPath: (path: string) =>
    path === "/undated-article/"
      ? {
          path,
          reviewStatus: "editorial-review",
          lastReviewed: undefined,
          datePublished: undefined,
        }
      : undefined,
  getAuthorBySlug: () => undefined,
  getIndexableRoutes: () => ["/", "/undated-article/"],
  getSourceById: () => undefined,
}));

import { sitemapEntries } from "./seo";

describe("sitemap provenance dates", () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-09-02T12:00:00Z"));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("keeps a current-date fallback for static routes but not undated articles", () => {
    const entries = sitemapEntries();
    const staticRoute = entries.find((entry) => entry.url === "https://hvac-bench.com/");
    const undatedArticle = entries.find(
      (entry) => entry.url === "https://hvac-bench.com/undated-article/",
    );

    expect(undatedArticle).not.toHaveProperty("lastModified");
    expect(staticRoute?.lastModified).toBe("2026-09-02");
  });
});
