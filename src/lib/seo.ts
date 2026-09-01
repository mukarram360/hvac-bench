import type { Metadata, MetadataRoute } from "next";

import type { TechnicalArticle } from "@/content/schema";
import { getIndexableRoutes } from "./content";

export const SITE_NAME = "HVAC Bench";
export const SITE_URL = "https://hvac-bench.com";
export const SITE_DESCRIPTION =
  "Evidence-backed HVAC error codes, diagnostics, and troubleshooting with clear safety boundaries and primary-source references.";

export function absoluteUrl(path: string) {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return new URL(normalized, SITE_URL).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function articleMetadata(article: TechnicalArticle): Metadata {
  const url = absoluteUrl(article.path);
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: article.title,
      description: article.description,
      url,
      modifiedTime: article.lastReviewed,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  } as const;
}

export function articleJsonLd(article: TechnicalArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    dateModified: article.lastReviewed,
    mainEntityOfPage: absoluteUrl(article.path),
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: article.errorCode
      ? `${article.brand ?? "HVAC"} ${article.errorCode}`
      : article.problemType,
  } as const;
}

export function websiteJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ] as const;
}

export function sitemapEntries(): MetadataRoute.Sitemap {
  const articleDate = new Map<string, string>();
  return getIndexableRoutes().map((path) => ({
    url: absoluteUrl(path),
    lastModified: articleDate.get(path) ?? "2026-09-01",
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").filter(Boolean).length <= 1 ? 0.8 : 0.7,
  }));
}

