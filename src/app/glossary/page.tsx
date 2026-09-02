import type { Metadata } from "next";
import { GlossaryBrowser } from "@/components/glossary-browser";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import {
  getGlossary,
  getGlossaryByCategory,
  glossaryPath,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
  definedTermSetJsonLd,
  pageMetadata,
} from "@/lib/seo";

const PATH = "/glossary/";
export const metadata: Metadata = pageMetadata({
  title: "HVAC glossary: every term on its own page",
  description:
    "Plain-language definitions of HVAC vocabulary, one page per term. What superheat, delta T, SCOP, static pressure, and the data plate mean, what units they use, and where United States and United Kingdom practice differs.",
  path: PATH,
  keywords: [
    "hvac glossary",
    "hvac terms explained",
    "hvac definitions",
    "heat pump terminology",
    "what is superheat",
  ],
});

export default function GlossaryPage() {
  const terms = getGlossary();
  const categories = getGlossaryByCategory();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          collectionPageJsonLd({
            title: "HVAC glossary",
            description:
              "Every term used across HVAC Bench, defined on its own page with units, usage, and the checks the term appears in.",
            path: PATH,
            items: terms.map((term) => ({ name: term.term, path: glossaryPath(term.slug) })),
          }),
          definedTermSetJsonLd(terms, PATH),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow="Reference vocabulary"
        title="HVAC glossary"
        description="Manuals assume vocabulary that nobody is taught. Every term here has its own page: what it means in one sentence, how the thing works, where the word turns up, what a normal figure looks like, and where United States and United Kingdom usage part company."
        breadcrumbs={breadcrumbs}
        meta={[
          `${terms.length} terms defined`,
          `${categories.length} subjects`,
          "US and UK usage",
        ]}
      />

      <div className="container page-tail">
        <GlossaryBrowser
          terms={terms.map((term) => ({
            term: term.term,
            slug: term.slug,
            category: term.category,
            aliases: term.aliases,
            shortAnswer: term.shortAnswer,
            definition: term.definition,
          }))}
          subjects={categories.map((category) => ({
            slug: category.slug,
            label: category.label,
            count: category.terms.length,
          }))}
        />
      </div>
    </main>
  );
}
