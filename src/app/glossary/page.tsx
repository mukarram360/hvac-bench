import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import {
  getGlossary,
  getGlossaryByCategory,
  getGlossaryByLetter,
  glossaryPath,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
  definedTermSetJsonLd,
  pageMetadata,
} from "@/lib/seo";

const PATH = "/glossary/";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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
  const groups = getGlossaryByLetter();
  const activeLetters = new Set(groups.map(([letter]) => letter));
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
        <nav className="glossary-subjects" aria-label="Browse by subject">
          {categories.map((category) => (
            <a className="subject-chip" href={`#${category.slug}`} key={category.slug}>
              <span>{category.label}</span>
              <small>{category.terms.length}</small>
            </a>
          ))}
        </nav>

        {categories.map((category) => (
          <section className="glossary-group" key={category.slug} id={category.slug}>
            <div className="glossary-group-head">
              <h2>{category.label}</h2>
              <p>{category.blurb}</p>
            </div>
            <ul className="term-index">
              {category.terms.map((term) => (
                <li key={term.slug}>
                  <Link href={glossaryPath(term.slug)}>
                    <strong>{term.term}</strong>
                    <span>{term.shortAnswer ?? term.definition}</span>
                    {term.aliases.length > 0 && (
                      <small>Also called: {term.aliases.join(", ")}</small>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="glossary-group" id="a-to-z">
          <div className="glossary-group-head">
            <h2>A to Z</h2>
            <p>The same terms in alphabetical order, for when you know the word already.</p>
          </div>
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
            <div className="alpha-block" key={letter} id={`letter-${letter}`}>
              <h3>{letter}</h3>
              <ul className="alpha-terms">
                {letterTerms.map((term) => (
                  <li key={term.slug}>
                    <Link href={glossaryPath(term.slug)}>{term.term}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
