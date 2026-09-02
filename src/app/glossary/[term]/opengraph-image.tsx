import { glossaryOgImage, ogSize } from "@/components/og-card";
import { getGlossary, getGlossaryTerm } from "@/lib/content";

/**
 * Next.js turns the exported `alt` into the `og:image:alt` and
 * `twitter:image:alt` tags, so it is written as a real description of the
 * card rather than as a filename.
 */
export const alt = "HVAC Bench glossary card showing the term, its category, and its definition";
export const size = ogSize;
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return getGlossary().map((entry) => ({ term: entry.slug }));
}

export default async function Image({ params }: { params: Promise<{ term: string }> }) {
  const { term: slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) throw new Error(`Unknown glossary term: ${slug}`);
  return glossaryOgImage(term);
}
