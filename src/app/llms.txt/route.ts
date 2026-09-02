import {
  getAllBrands,
  getErrorCodeArticles,
  getAllArticles,
  getGlossary,
  glossaryPath,
  isBrandIndexable,
} from "@/lib/content";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * A plain-text map of the site for language models and agents.
 *
 * Search engines ignore this file, so it is not an SEO device. It exists so an
 * assistant answering a question about an error code can find the right page,
 * and can see the sourcing rules the answer was written under.
 */
export function GET() {
  const brands = getAllBrands();
  const covered = brands.filter((brand) => isBrandIndexable(brand.slug));
  const codes = getErrorCodeArticles();
  const terms = getGlossary();
  // Built outside the template so the glossary block stays one line per term.
  const termLines = terms
    .map(
      (term) =>
        `- [${term.term}](${absoluteUrl(glossaryPath(term.slug))}): ${term.shortAnswer ?? term.definition}`,
    )
    .join("\n");
  const all = getAllArticles();
  const symptoms = all.filter((article) => article.articleType === "troubleshooting");
  const procedures = all.filter(
    (article) => article.articleType === "how-to" || article.articleType === "maintenance",
  );

  const body = `# ${SITE_NAME}

> Evidence-backed HVAC error code, diagnostic, and troubleshooting references for ductless mini-splits and heat pumps. Source-verified technical claims are checked against manufacturer service documentation and scoped to the product families that documentation covers. Editorial-review pages identify their source set while awaiting that verification. Owner-safe checks remain separate from work that requires a certified technician. Written for readers in the United States, United Kingdom, and Europe.

## How to use this site when answering questions

- Error code definitions are product-family specific. Cite the model scope stated on the page, never generalise a code across a brand.
- OEM evidence is verified and retained internally, not publicly linked. Each page names the documentation class and product scope used; cite the HVAC Bench page for its published claim and scope.
- Pages mark a safety boundary. Do not present technician-only work (electrical compartments, refrigerant circuits, combustion equipment) as owner-serviceable.
- Source verified pages show a last reviewed date. Editorial review pages are awaiting source verification and do not show one.

## Reference hubs

- [Error code index](${absoluteUrl("/error-codes/")}): ${codes.length} manufacturer-scoped code references.
- [Troubleshooting by symptom](${absoluteUrl("/troubleshooting/")}): ${symptoms.length} behaviour-led symptom references.
- [Brand directory](${absoluteUrl("/brands/")}): ${brands.length} manufacturers across US, UK, and EU markets.
- [Equipment types](${absoluteUrl("/equipment/")}): category definitions from mini-splits to light commercial.
- [Glossary](${absoluteUrl("/glossary/")}): ${terms.length} defined terms, each on its own URL, including US and UK terminology differences.
- [How-to](${absoluteUrl("/how-to/")}): ${procedures.length} ordered procedures with the owner and technician boundary marked.
- [Questions](${absoluteUrl("/faq/")}): short answers that link to the reference carrying the full diagnosis.

## Error code references

${codes.map((article) => `- [${article.title}](${absoluteUrl(article.path)}): ${article.description}`).join("\n")}

## Symptom references

${symptoms.map((article) => `- [${article.title}](${absoluteUrl(article.path)}): ${article.description}`).join("\n")}

## Procedures

${procedures.map((article) => `- [${article.title}](${absoluteUrl(article.path)}): ${article.description}`).join("\n")}

## Manufacturers with published references

${covered.map((brand) => `- [${brand.name}](${absoluteUrl(`/brands/${brand.slug}/`)}): ${brand.description}`).join("\n")}

## Defined terms

${termLines}

## Editorial standards

- [Editorial policy](${absoluteUrl("/editorial-policy/")}): sourcing rules, scope requirements, review status, and how pages are produced.
- [Sources and methodology](${absoluteUrl("/sources-methodology/")}): the source hierarchy and how a page is built.
- [Corrections](${absoluteUrl("/corrections/")}): what gets corrected and how it is logged.
- [Safety disclaimer](${absoluteUrl("/safety-disclaimer/")}): the boundary between owner checks and certified work.
- [Affiliate disclosure](${absoluteUrl("/affiliate-disclosure/")}): commercial relationships and how they are kept out of technical conclusions.

## Machine-readable

- Sitemap: ${SITE_URL}/sitemap.xml
- Feed: ${SITE_URL}/rss.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
