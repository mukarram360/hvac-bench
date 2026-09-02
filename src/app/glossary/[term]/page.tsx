import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GlossaryTermPage } from "@/components/glossary-term-page";
import { JsonLd } from "@/components/json-ld";
import {
  getGlossary,
  getGlossaryTerm,
  glossaryCategoryLabel,
  glossaryPath,
} from "@/lib/content";
import { glossaryTermStructuredData, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGlossary().map((entry) => ({ term: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term: slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return {};

  const path = glossaryPath(term.slug);
  return pageMetadata({
    title: term.metaTitle ?? `${term.term} in HVAC`,
    description: term.metaDescription ?? term.shortAnswer ?? term.definition.slice(0, 160),
    path,
    keywords: term.keywords.length
      ? term.keywords
      : [term.term.toLowerCase(), `what is ${term.term.toLowerCase()}`, "hvac glossary"],
    type: "article",
    ogImagePath: path,
    ogImageAlt: `Glossary card defining ${term.term} in HVAC, labelled ${glossaryCategoryLabel(term.category).toLowerCase()}`,
  });
}

export default async function GlossaryTermRoute({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term: slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary/" },
    { name: term.term, path: glossaryPath(term.slug) },
  ];

  return (
    <>
      <GlossaryTermPage term={term} />
      <JsonLd data={glossaryTermStructuredData(term, breadcrumbs)} />
    </>
  );
}
