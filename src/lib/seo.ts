import type { Metadata, MetadataRoute } from "next";

import type { Author, Brand, GlossaryTerm, TechnicalArticle } from "@/content/schema";
import { EQUIPMENT_TYPES } from "@/content/taxonomy";
import {
  getArticleByPath,
  getAuthorBySlug,
  getIndexableRoutes,
  getSourceById,
} from "./content";

export const SITE_NAME = "HVAC Bench";
export const SITE_URL = "https://hvac-bench.com";
export const SITE_TAGLINE = "HVAC error codes, diagnostics, and troubleshooting";
export const SITE_DESCRIPTION =
  "Evidence-backed HVAC error codes, diagnostics, and troubleshooting with clear safety boundaries and primary-source references for US and UK systems.";
export const SITE_LOCALE = "en_US";
export const CONTACT_EMAIL = "editorial@hvac-bench.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const [route, hash] = path.split("#");
  const normalized = route === "/" ? "/" : `/${route.replace(/^\/+|\/+$/g, "")}/`;
  return new URL(hash ? `${normalized}#${hash}` : normalized, SITE_URL).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  /** A route that generates its own social card. Defaults to the site card. */
  ogImagePath?: string;
  /**
   * What the card shows, for `og:image:alt`. Falls back to the page title,
   * which is accurate but says nothing a screen reader could not already get
   * from the heading, so pages that draw a real card should describe it.
   */
  ogImageAlt?: string;
};

/**
 * Social cards are addressed with the trailing slash the site serves, because
 * `trailingSlash` would otherwise redirect every crawler that asks for one, and
 * not every social or answer-engine fetcher follows redirects for images.
 */
function socialImage(path: string, alt: string) {
  return [{ url: `${absoluteUrl(path)}opengraph-image/`, width: 1200, height: 630, alt }];
}

const robotsAllowed = {
  index: true,
  follow: true,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1,
} as const;

const robotsBlocked = {
  index: false,
  follow: true,
  nocache: false,
} as const;

/** One place that decides how every page presents itself to search and social. */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authorName,
  ogImagePath,
  ogImageAlt,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const images = socialImage(ogImagePath ?? "/", ogImageAlt ?? title);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? robotsBlocked
      : { ...robotsAllowed, googleBot: robotsAllowed },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: SITE_LOCALE,
      alternateLocale: ["en_GB"],
      images,
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: authorName ? [authorName] : undefined,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export function articleMetadata(article: TechnicalArticle): Metadata {
  const author = getAuthorBySlug(article.authorSlug);
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: article.path,
    keywords: article.keywords,
    type: "article",
    publishedTime: article.datePublished ?? article.lastReviewed,
    modifiedTime: article.lastReviewed,
    authorName: author?.name ?? SITE_NAME,
    ogImagePath: article.path,
  });
}

/* --------------------------------------------------------- structured data */

/** Publisher identity, referenced by @id from every other node on the site. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "HVACBench",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/icon`,
      width: 512,
      height: 512,
      caption: SITE_NAME,
    },
    image: { "@id": `${SITE_URL}/#logo` },
    knowsAbout: [
      "HVAC error codes",
      "Ductless mini-split systems",
      "Air source heat pumps",
      "Heating and cooling diagnostics",
      "Indoor air quality",
    ],
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Place", name: "Europe" },
    ],
    publishingPrinciples: absoluteUrl("/editorial-policy/"),
    correctionsPolicy: absoluteUrl("/corrections/"),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      email: CONTACT_EMAIL,
      url: absoluteUrl("/contact/"),
      availableLanguage: ["English"],
    },
  } as const;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: SITE_NAME,
    alternateName: SITE_TAGLINE,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  } as const;
}

export function siteJsonLd() {
  return [organizationJsonLd(), websiteJsonLd()];
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const current = items[items.length - 1]?.path ?? "/";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(current)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  } as const;
}

export function webPageJsonLd({
  title,
  description,
  path,
  breadcrumbs,
}: {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
    // References the standalone BreadcrumbList node rather than repeating it.
    ...(breadcrumbs ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  } as const;
}

export function collectionPageJsonLd({
  title,
  description,
  path,
  items,
}: {
  title: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  } as const;
}

export function personJsonLd(author: Author) {
  const url = absoluteUrl(`/authors/${author.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": author.entityType === "person" ? "Person" : "Organization",
    "@id": `${url}#author`,
    name: author.name,
    url,
    jobTitle: author.role,
    description: author.shortBio,
    knowsAbout: author.expertise,
    ...(author.email ? { email: author.email } : {}),
    ...(author.sameAs.length ? { sameAs: author.sameAs } : {}),
    ...(author.entityType === "person"
      ? { worksFor: { "@id": ORG_ID } }
      : { parentOrganization: { "@id": ORG_ID } }),
  } as const;
}

export function faqJsonLd(faqs: { question: string; answer: string }[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } as const;
}

export const GLOSSARY_PATH = "/glossary/";
export const GLOSSARY_SET_ID = `${absoluteUrl(GLOSSARY_PATH)}#glossary`;

/**
 * The set node lives on the hub and every term page references it by @id, so
 * a crawler that lands on one definition can still see which vocabulary it
 * belongs to without the hub repeating all sixty-odd definitions inline.
 */
export function definedTermSetJsonLd(terms: GlossaryTerm[], path: string) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": GLOSSARY_SET_ID,
    name: "HVAC glossary",
    description:
      "Defined terms used across HVAC Bench, covering system types, components, refrigeration, airflow, controls, measurement units, efficiency ratings, and service regulation.",
    url,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${absoluteUrl(`/glossary/${term.slug}/`)}#term`,
      name: term.term,
      description: term.shortAnswer ?? term.definition,
      url: absoluteUrl(`/glossary/${term.slug}/`),
      inDefinedTermSet: { "@id": GLOSSARY_SET_ID },
    })),
  } as const;
}

/**
 * A single term, published on its own URL. `DefinedTerm` carries the meaning,
 * and the page adds `FAQPage` and `BreadcrumbList` nodes beside it rather than
 * nesting them, so each node keeps a stable @id that other pages can cite.
 */
export function definedTermJsonLd(term: GlossaryTerm) {
  const url = absoluteUrl(`/glossary/${term.slug}/`);
  const citations = term.sourceIds
    .map(getSourceById)
    .filter((source) => source !== undefined)
    .map((source) => ({
      "@type": "CreativeWork" as const,
      name: source.title,
      publisher: { "@type": "Organization" as const, name: source.publisher },
    }));

  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${url}#term`,
    name: term.term,
    url,
    description: term.shortAnswer ?? term.definition,
    inLanguage: "en",
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": GLOSSARY_SET_ID,
      name: "HVAC glossary",
      url: absoluteUrl(GLOSSARY_PATH),
    },
    termCode: term.slug,
    ...(term.aliases.length ? { alternateName: term.aliases } : {}),
    ...(citations.length ? { subjectOf: citations } : {}),
    mainEntityOfPage: { "@id": `${url}#webpage` },
    image: {
      "@type": "ImageObject",
      url: `${url}opengraph-image/`,
      width: 1200,
      height: 630,
      caption: `${term.term} defined on HVAC Bench, with its unit and where it is measured`,
    },
  } as const;
}

/**
 * The full node set for one term page. An answer engine reading this gets the
 * definition, the questions the page answers, and the trail back to the hub.
 */
export function glossaryTermStructuredData(
  term: GlossaryTerm,
  breadcrumbs: { name: string; path: string }[],
) {
  const path = `/glossary/${term.slug}/`;
  const nodes: object[] = [
    webPageJsonLd({
      title: `${term.term} in HVAC`,
      description: term.shortAnswer ?? term.definition,
      path,
      breadcrumbs,
    }),
    breadcrumbJsonLd(breadcrumbs),
    definedTermJsonLd(term),
  ];
  /*
   * The heading question and its short answer become the first Question node,
   * ahead of the page's own FAQ. "What is superheat" is the query the page is
   * written for, and an answer engine should find it stated as a question
   * rather than have to infer it from an H2.
   */
  const primary =
    term.question && term.shortAnswer
      ? [{ question: term.question, answer: term.shortAnswer }]
      : [];
  const questions = [...primary, ...term.faqs];
  if (questions.length) nodes.push(faqJsonLd(questions, path));
  return nodes;
}

export function brandJsonLd(brand: Brand, articleCount: number) {
  const url = absoluteUrl(`/brands/${brand.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: `${brand.name} HVAC error codes and troubleshooting`,
    description: brand.description,
    inLanguage: "en",
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
    about: {
      "@type": "Brand",
      name: brand.name,
      ...(brand.aliases.length ? { alternateName: brand.aliases[0] } : {}),
      description: brand.description,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articleCount,
    },
  } as const;
}

/**
 * Technical pages publish as TechArticle, and add HowTo only when the record
 * really contains an ordered procedure. Ratings and review claims are never
 * emitted, because the site does not collect them.
 */
export function articleJsonLd(article: TechnicalArticle) {
  const url = absoluteUrl(article.path);
  const author = getAuthorBySlug(article.authorSlug);
  const reviewer = article.reviewerSlug ? getAuthorBySlug(article.reviewerSlug) : undefined;
  const citations = article.sourceIds
    .map(getSourceById)
    .filter((source) => source !== undefined)
    .map((source) => ({
      "@type": "CreativeWork" as const,
      name: source.title,
      publisher: { "@type": "Organization" as const, name: source.publisher },
    }));

  const equipmentLabel =
    EQUIPMENT_TYPES[article.equipmentType as keyof typeof EQUIPMENT_TYPES]?.singular ??
    article.equipmentType.replaceAll("-", " ");

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: article.title,
    name: article.title,
    description: article.description,
    abstract: article.directAnswer,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    datePublished: article.datePublished ?? article.lastReviewed,
    dateModified: article.lastReviewed,
    inLanguage: "en",
    isAccessibleForFree: true,
    author: author ? personJsonLd(author) : { "@id": ORG_ID },
    ...(reviewer
      ? {
          reviewedBy: {
            "@type": reviewer.entityType === "person" ? "Person" : "Organization",
            name: reviewer.name,
            url: absoluteUrl(`/authors/${reviewer.slug}/`),
          },
        }
      : {}),
    publisher: { "@id": ORG_ID },
    citation: citations,
    keywords: article.keywords.join(", "),
    articleSection: article.articleType.replaceAll("-", " "),
    about: [
      {
        "@type": "Thing",
        name: article.errorCode
          ? `${article.brand ? `${article.brand} ` : ""}${article.errorCode} error code`
          : article.problemType.replaceAll("-", " "),
      },
      { "@type": "Thing", name: equipmentLabel },
    ],
    proficiencyLevel: "Beginner",
    dependencies: article.models.join("; "),
  } as const;
}

export function howToJsonLd(article: TechnicalArticle) {
  if (!article.steps?.length) return undefined;
  const url = absoluteUrl(article.path);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: article.title,
    description: article.description,
    inLanguage: "en",
    // No totalTime. It was hard-coded at twenty minutes for every procedure on
    // the site, which is a figure no page states and no source supports.
    step: article.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${url}#step-${index + 1}`,
    })),
  } as const;
}

export function articleStructuredData(
  article: TechnicalArticle,
  breadcrumbs: { name: string; path: string }[],
) {
  const optionalNodes = [
    article.steps?.length ? howToJsonLd(article) : undefined,
    article.faqs.length ? faqJsonLd(article.faqs, article.path) : undefined,
  ].filter((node) => node !== undefined);

  return [
    webPageJsonLd({
      title: article.title,
      description: article.description,
      path: article.path,
      breadcrumbs,
    }),
    breadcrumbJsonLd(breadcrumbs),
    articleJsonLd(article),
    ...optionalNodes,
  ];
}

/* ------------------------------------------------------------- sitemap ---- */

const HUB_ROUTES = new Set([
  "/brands/",
  "/error-codes/",
  "/troubleshooting/",
  "/equipment/",
  "/guides/",
  "/how-to/",
  "/compare/",
  "/glossary/",
  "/faq/",
]);

export function sitemapEntries(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().slice(0, 10);

  return getIndexableRoutes().map((path) => {
    const article = getArticleByPath(path);
    const lastModified = article
      ? article.lastReviewed ?? article.datePublished
      : currentDate;
    const depth = path.split("/").filter(Boolean).length;

    const priority =
      path === "/"
        ? 1
        : HUB_ROUTES.has(path)
          ? 0.9
          : article
            ? 0.8
            : path.startsWith("/glossary/")
              ? 0.7
              : depth <= 1
                ? 0.5
                : 0.6;

    return {
      url: absoluteUrl(path),
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: path === "/" || HUB_ROUTES.has(path) ? "weekly" : "monthly",
      priority,
    };
  });
}
