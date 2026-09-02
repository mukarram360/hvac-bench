import Link from "next/link";

import type { GlossaryTerm } from "@/content/schema";
import {
  getGlossaryNeighbours,
  getGlossarySiblings,
  getRelatedGlossaryTerms,
  getSourceById,
  glossaryCategoryLabel,
  glossaryPath,
  spokenTerm,
} from "@/lib/content";
import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs";

const DOCUMENT_CLASS_LABELS: Record<string, string> = {
  "oem-service-manual": "service manual",
  "oem-operation-manual": "operation manual",
  "oem-support": "manufacturer support article",
  "government-guidance": "government guidance",
  "standards-body": "standards body publication",
};

const REGION_LABELS: Record<string, string> = {
  us: "United States",
  uk: "United Kingdom",
  eu: "Europe",
};

/**
 * A defined term on its own page.
 *
 * The order is the order a reader needs it in: the answer first, short enough
 * to be quoted whole, then the mechanism, then where the word turns up, then
 * how to establish a value, and only then the caveats. Nothing here restates
 * the definition in longer words, because a glossary that pads is a glossary
 * nobody finishes reading.
 */
export function GlossaryTermPage({ term }: { term: GlossaryTerm }) {
  const related = getRelatedGlossaryTerms(term);
  const siblings = getGlossarySiblings(term);
  const { previous, next } = getGlossaryNeighbours(term.slug);
  const categoryLabel = glossaryCategoryLabel(term.category);
  const sourceRecords = term.sourceIds
    .map(getSourceById)
    .filter((source) => source !== undefined);
  const documentClasses = Array.from(
    new Set(sourceRecords.map((source) => DOCUMENT_CLASS_LABELS[source.sourceType])),
  );
  const hasOwnerCheck = term.howToCheck.some((check) => check.performedBy === "owner");
  /*
   * Used only where the term reads as a modifier. Headings put it after a
   * colon instead, because "How air-to-water heat pump works" needs an article
   * the record does not carry and "How SEER and SEER2 works" needs a plural.
   */
  const spoken = spokenTerm(term);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: "/glossary/" },
    { name: term.term, path: glossaryPath(term.slug) },
  ];

  return (
    <main id="main-content">
      <div className="container article-shell">
        <Breadcrumbs items={breadcrumbs} />
        <div className="article-layout">
          <article className="article-body term-body">
            <header className="article-header">
              <span className="eyebrow">{categoryLabel}</span>
              <h1>{term.term}</h1>
              <p className="dek">{term.definition}</p>
              {term.aliases.length > 0 && (
                <p className="term-aliases">
                  <span>Also called</span> {term.aliases.join(", ")}
                </p>
              )}
            </header>

            <section className="answer-box" aria-labelledby="term-answer">
              <span className="eyebrow">Direct answer</span>
              <h2 id="term-answer">{term.question ?? `What is ${spoken}?`}</h2>
              <p>{term.shortAnswer ?? term.definition}</p>
            </section>

            {term.howItWorks && (
              <section className="article-section" id="how-it-works">
                <h2>{term.term}: how it works</h2>
                <p>{term.howItWorks}</p>
              </section>
            )}

            {term.whereYouMeetIt.length > 0 && (
              <section className="article-section" id="where-used">
                <h2>Where you meet the term</h2>
                <ul className="check-list">
                  {term.whereYouMeetIt.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {term.howToCheck.length > 0 && (
              <section
                className={hasOwnerCheck ? "article-section" : "callout callout-pro"}
                id="how-to-check"
              >
                {!hasOwnerCheck && <span className="eyebrow">Technician work</span>}
                <h2>How to check it</h2>
                <ol className="check-list term-checks">
                  {term.howToCheck.map((check) => (
                    <li key={check.title}>
                      <strong>{check.title}.</strong> {check.detail}{" "}
                      <span
                        className={check.performedBy === "owner" ? "who who-owner" : "who who-tech"}
                      >
                        {check.performedBy === "owner" ? "Owner check" : "Technician"}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {term.typicalValues.length > 0 && (
              <section className="article-section" id="typical-values">
                <h2>Figures you will see</h2>
                <div className="diagnostic-table-wrap">
                  <table className="diagnostic-table term-table">
                    <caption>
                      Published {spoken} figures with the condition each one applies to. Confirm
                      against the documentation for your own model before acting on any of them.
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Condition</th>
                        <th scope="col">Figure</th>
                        <th scope="col">What it tells you</th>
                      </tr>
                    </thead>
                    <tbody>
                      {term.typicalValues.map((row) => (
                        <tr key={`${row.context}-${row.value}`}>
                          <th scope="row">{row.context}</th>
                          <td className="mono-cell">{row.value}</td>
                          <td>{row.note ?? "Read against the model documentation"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {term.regionNotes.length > 0 && (
              <section className="article-section" id="regional-usage">
                <h2>United States and United Kingdom usage</h2>
                <dl className="region-list">
                  {term.regionNotes.map((note) => (
                    <div key={note.region}>
                      <dt>{REGION_LABELS[note.region]}</dt>
                      <dd>{note.note}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {term.mistakes.length > 0 && (
              <section className="callout callout-safe" id="mistakes">
                <span className="eyebrow">Read this twice</span>
                <h2>{term.term}: what it is not</h2>
                <ul className="check-list">
                  {term.mistakes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {term.faqs.length > 0 && (
              <section className="article-section term-faq" id="faq">
                <h2>{term.term} questions</h2>
                {term.faqs.map((faq) => (
                  <div className="term-faq-item" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </section>
            )}

            <section className="article-section term-evidence" id="evidence">
              <h2>Where this definition comes from</h2>
              {sourceRecords.length > 0 ? (
                <>
                  <p>
                    Written from {documentClasses.join(", ")} material held in the HVAC Bench
                    evidence record. Where a document limits a definition to certain models, that
                    limit is repeated here rather than generalised across a brand.
                  </p>
                  <ul className="source-list">
                    {sourceRecords.map((source) => (
                      <li key={source.id}>
                        <span className="source-title">{source.title}</span>
                        <span className="source-meta">
                          {source.publisher} · {DOCUMENT_CLASS_LABELS[source.sourceType]}
                        </span>
                        {source.scopeNote && <span className="source-scope">{source.scopeNote}</span>}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>
                  This entry defines vocabulary rather than the behaviour of a particular model, so
                  it carries no single manufacturer citation. The{" "}
                  <Link href="/sources-methodology/">sources and methodology</Link> page sets out
                  which documents the library is built from and how each claim is checked.
                </p>
              )}
            </section>

            <nav className="term-pager" aria-label="Glossary">
              {previous ? (
                <Link className="term-pager-prev" href={glossaryPath(previous.slug)}>
                  <span>Previous term</span>
                  {previous.term}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link className="term-pager-next" href={glossaryPath(next.slug)}>
                  <span>Next term</span>
                  {next.term}
                </Link>
              )}
            </nav>
          </article>

          <aside className="rail" aria-label="Term summary">
            <div className="plate">
              <div className="plate-head">
                <span>Term plate</span>
                <span>{categoryLabel}</span>
              </div>
              <dl className="plate-rows">
                {term.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="rail-links">
                {term.seeAlso && <Link href={term.seeAlso.path}>{term.seeAlso.label}</Link>}
                <Link href="/glossary/">All glossary terms</Link>
                <Link href="/safety-disclaimer/">Safety limits</Link>
              </div>
            </div>

            {related.length > 0 && (
              <div className="plate rail-terms">
                <div className="plate-head">
                  <span>Related terms</span>
                </div>
                <ul>
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link href={glossaryPath(item.slug)}>{item.term}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      {siblings.length > 0 && (
        <section className="band-alt">
          <div className="container band">
            <div className="section-head">
              <div>
                <span className="eyebrow">Same subject</span>
                <h2>More {categoryLabel.toLowerCase()} vocabulary</h2>
              </div>
              <Link className="btn btn-secondary" href="/glossary/">
                Full glossary
              </Link>
            </div>
            <div className="grid grid-3">
              {siblings.map((item) => (
                <Link className="term-card" href={glossaryPath(item.slug)} key={item.slug}>
                  <h3>{item.term}</h3>
                  <p>{item.shortAnswer ?? item.definition}</p>
                  <span className="term-card-more">Read the definition</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
