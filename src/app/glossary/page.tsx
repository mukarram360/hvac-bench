import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { getGlossary, getGlossaryByLetter } from "@/lib/content";
import {
  breadcrumbJsonLd,
  definedTermSetJsonLd,
  pageMetadata,
  webPageJsonLd,
} from "@/lib/seo";

const PATH = "/glossary/";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const metadata: Metadata = pageMetadata({
  title: "HVAC glossary: plain-language definitions",
  description:
    "What HVAC terms actually mean, from superheat and subcooling to SCOP, delta T, and the data plate, written for someone reading a service manual for the first time.",
  path: PATH,
  keywords: ["hvac glossary", "hvac terms", "what is superheat", "hvac definitions"],
});

export default function GlossaryPage() {
  const terms = getGlossary();
  const groups = getGlossaryByLetter();
  /* Related slugs are stored, not spelled out, so the label is looked up once. */
  const labels = new Map(terms.map((term) => [term.slug, term.term]));
  const labelFor = (slug: string) => labels.get(slug) ?? slug;
  const activeLetters = new Set(groups.map(([letter]) => letter));
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          webPageJsonLd({
            title: "HVAC glossary",
            description: "Plain-language definitions of HVAC terminology used across the site.",
            path: PATH,
            breadcrumbs,
          }),
          definedTermSetJsonLd(terms, PATH),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow="Reference vocabulary"
        title="HVAC glossary"
        description="Manuals assume vocabulary that nobody is taught. Each entry says what the term means, what the thing does, and where you meet it in the library, including the places where United States and United Kingdom usage differ."
        breadcrumbs={breadcrumbs}
        meta={[`${terms.length} terms defined`, "US and UK usage", "Updated as the library grows"]}
      />

      <div className="container page-tail">
        <nav className="alpha-index" aria-label="Jump to letter">
          {ALPHABET.map((letter) =>
            activeLetters.has(letter) ? (
              <a key={letter} href={`#letter-${letter}`}>
                {letter}
              </a>
            ) : (
              <span key={letter} aria-hidden="true">
                {letter}
              </span>
            ),
          )}
        </nav>

        {groups.map(([letter, letterTerms]) => (
          <section className="glossary-group" key={letter} id={`letter-${letter}`}>
            <h2>{letter}</h2>
            <dl className="glossary-list">
              {letterTerms.map((term) => (
                <div className="glossary-term" key={term.slug} id={term.slug}>
                  <dt>{term.term}</dt>
                  <dd>
                    {term.definition}
                    {term.aliases.length > 0 && (
                      <span className="also">Also called: {term.aliases.join(", ")}</span>
                    )}
                    {(term.related.length > 0 || term.seeAlso) && (
                      <span className="term-links">
                        {term.related.length > 0 && (
                          <span>
                            Related terms:{" "}
                            {term.related.map((slug, index) => (
                              <span key={slug}>
                                {index > 0 && ", "}
                                <a href={`#${slug}`}>{labelFor(slug)}</a>
                              </span>
                            ))}
                          </span>
                        )}
                        {term.seeAlso && (
                          <span>
                            Where you meet it:{" "}
                            <Link href={term.seeAlso.path}>{term.seeAlso.label}</Link>
                          </span>
                        )}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </main>
  );
}
