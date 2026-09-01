import { describe, expect, it } from "vitest";

import { getArticleByPath, getIndexableRoutes } from "./content";
import {
  SITE_URL,
  absoluteUrl,
  articleJsonLd,
  articleMetadata,
  breadcrumbJsonLd,
  sitemapEntries,
} from "./seo";

describe("SEO helpers", () => {
  const article = getArticleByPath("/brands/gree/e6-error-code/");

  it("uses the apex HTTPS origin for every canonical", () => {
    expect(SITE_URL).toBe("https://hvac-bench.com");
    expect(absoluteUrl("/brands/gree/")).toBe(
      "https://hvac-bench.com/brands/gree/",
    );
  });

  it("builds unique, useful article metadata", () => {
    expect(article).toBeDefined();
    const metadata = articleMetadata(article!);
    expect(metadata.title).toContain("Gree E6");
    expect(metadata.description).toBe(article!.description);
    expect(metadata.alternates?.canonical).toBe(
      "https://hvac-bench.com/brands/gree/e6-error-code/",
    );
    expect(metadata.openGraph).toMatchObject({ type: "article" });
  });

  it("emits valid breadcrumb and article schema without review claims", () => {
    const breadcrumbs = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Gree", path: "/brands/gree/" },
    ]);
    const schema = articleJsonLd(article!);
    expect(breadcrumbs["@type"]).toBe("BreadcrumbList");
    expect(schema["@type"]).toBe("Article");
    expect(JSON.stringify(schema)).not.toMatch(/reviewedBy|licensed|rating/i);
    expect(() => JSON.parse(JSON.stringify([breadcrumbs, schema]))).not.toThrow();
  });

  it("includes every indexable route and excludes search", () => {
    const entries = sitemapEntries();
    const urls = entries.map((entry) => entry.url);
    expect(entries).toHaveLength(getIndexableRoutes().length);
    expect(urls).toContain("https://hvac-bench.com/brands/gree/");
    expect(urls).not.toContain("https://hvac-bench.com/search/");
  });
});
