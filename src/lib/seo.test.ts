import { describe, expect, it } from "vitest";

import { getAllArticles, getArticleByPath, getIndexableRoutes } from "./content";
import {
  SITE_URL,
  absoluteUrl,
  articleJsonLd,
  articleMetadata,
  breadcrumbJsonLd,
  collectionPageJsonLd,
  faqJsonLd,
  howToJsonLd,
  organizationJsonLd,
  pageMetadata,
  sitemapEntries,
  websiteJsonLd,
} from "./seo";

describe("SEO helpers", () => {
  const article = getArticleByPath("/brands/gree/e6-error-code/");

  it("uses the apex HTTPS origin for every canonical", () => {
    expect(SITE_URL).toBe("https://hvac-bench.com");
    expect(absoluteUrl("/brands/gree/")).toBe("https://hvac-bench.com/brands/gree/");
    expect(absoluteUrl("/")).toBe("https://hvac-bench.com/");
    expect(absoluteUrl("/glossary/#superheat")).toBe("https://hvac-bench.com/glossary/#superheat");
  });

  it("builds unique, useful article metadata", () => {
    expect(article).toBeDefined();
    const metadata = articleMetadata(article!);
    expect(metadata.title).toContain("Gree E6");
    expect(metadata.description).toBe(article!.description);
    expect(metadata.alternates?.canonical).toBe("https://hvac-bench.com/brands/gree/e6-error-code/");
    expect(metadata.openGraph).toMatchObject({ type: "article" });
  });

  it("asks crawlers for full snippets and large previews on indexable pages", () => {
    const metadata = pageMetadata({
      title: "Test",
      description: "A description long enough to be plausible for a real page.",
      path: "/error-codes/",
    });
    expect(metadata.robots).toMatchObject({
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    });
  });

  it("blocks indexing but keeps following links on utility pages", () => {
    const metadata = pageMetadata({
      title: "Search",
      description: "A description long enough to be plausible for a real page.",
      path: "/search/",
      noIndex: true,
    });
    expect(metadata.robots).toMatchObject({ index: false, follow: true });
  });

  it("keeps every page title and description unique across the library", () => {
    const titles = getAllArticles().map((entry) => entry.title);
    const descriptions = getAllArticles().map((entry) => entry.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("keeps descriptions inside the length search engines will display", () => {
    for (const entry of getAllArticles()) {
      expect(entry.description.length).toBeGreaterThanOrEqual(70);
      expect(entry.description.length).toBeLessThanOrEqual(180);
    }
  });
});

describe("structured data", () => {
  const article = getArticleByPath("/brands/gree/e6-error-code/")!;

  it("publishes technical pages as TechArticle with citations and no invented ratings", () => {
    const schema = articleJsonLd(article);
    expect(schema["@type"]).toBe("TechArticle");
    expect(schema.citation.length).toBeGreaterThan(0);
    expect(schema.publisher).toEqual({ "@id": `${SITE_URL}/#organization` });
    expect(JSON.stringify(schema)).not.toMatch(/aggregateRating|ratingValue|reviewRating/);
  });

  it("omits reviewedBy when no reviewer has actually signed off", () => {
    expect(JSON.stringify(articleJsonLd(article))).not.toContain("reviewedBy");
  });

  it("only emits HowTo when a page carries ordered steps", () => {
    expect(howToJsonLd(article)).toBeUndefined();
    expect(howToJsonLd({ ...article, steps: [
      { name: "Isolate the system", text: "Switch the system off at the isolator before removing the front panel." },
      { name: "Remove the filters", text: "Lift the front panel and slide the washable filters out of their runners." },
    ] })).toMatchObject({ "@type": "HowTo" });
  });

  it("wires the organisation and website nodes together by identifier", () => {
    const organization = organizationJsonLd();
    const website = websiteJsonLd();
    expect(organization["@id"]).toBe(`${SITE_URL}/#organization`);
    expect(website.publisher).toEqual({ "@id": organization["@id"] });
    expect(website.potentialAction.target.urlTemplate).toContain("{search_term_string}");
    expect(organization.publishingPrinciples).toBe(`${SITE_URL}/editorial-policy/`);
  });

  it("emits valid breadcrumbs, collections, and FAQ nodes", () => {
    const breadcrumbs = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Gree", path: "/brands/gree/" },
    ]);
    expect(breadcrumbs["@type"]).toBe("BreadcrumbList");
    expect(breadcrumbs.itemListElement[1]).toMatchObject({ position: 2, name: "Gree" });

    const collection = collectionPageJsonLd({
      title: "Codes",
      description: "Index",
      path: "/error-codes/",
      items: [{ name: "Gree E6", path: "/brands/gree/e6-error-code/" }],
    });
    expect(collection.mainEntity.numberOfItems).toBe(1);

    const faq = faqJsonLd(
      [{ question: "Is this a fault?", answer: "Not always, some codes report a protection state." }],
      "/faq/",
    );
    expect(faq.mainEntity[0]["@type"]).toBe("Question");
    expect(() => JSON.parse(JSON.stringify([breadcrumbs, collection, faq]))).not.toThrow();
  });
});

describe("sitemap", () => {
  it("lists every indexable route once, with absolute canonical URLs", () => {
    const entries = sitemapEntries();
    const urls = entries.map((entry) => entry.url);

    expect(entries).toHaveLength(getIndexableRoutes().length);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every((url) => url.startsWith("https://hvac-bench.com/"))).toBe(true);
    expect(urls.every((url) => url.endsWith("/"))).toBe(true);
  });

  it("gives the homepage and hubs the highest priority", () => {
    const entries = sitemapEntries();
    const home = entries.find((entry) => entry.url === "https://hvac-bench.com/");
    const hub = entries.find((entry) => entry.url === "https://hvac-bench.com/error-codes/");
    const legal = entries.find((entry) => entry.url === "https://hvac-bench.com/terms/");

    expect(home?.priority).toBe(1);
    expect(hub?.priority).toBe(0.9);
    expect(legal?.priority).toBeLessThan(0.9);
  });

  it("excludes the search utility and empty brand hubs", () => {
    const urls = sitemapEntries().map((entry) => entry.url);
    expect(urls).not.toContain("https://hvac-bench.com/search/");
    expect(urls).not.toContain("https://hvac-bench.com/brands/vaillant/");
  });
});
