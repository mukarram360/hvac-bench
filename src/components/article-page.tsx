import Link from "next/link";

import type { TechnicalArticle } from "@/content/schema";
import { EQUIPMENT_TYPES } from "@/content/taxonomy";
import {
  getAuthorBySlug,
  getBrandBySlug,
  getGlossaryTerm,
  getRelatedArticles,
  getSourceById,
  glossaryPath,
} from "@/lib/content";
import { ArticleCard } from "./article-card";
import { ArticleContentBlocks } from "./article-content-blocks";
import { Breadcrumbs } from "./breadcrumbs";

/**
 * What the scope box calls the coverage when a page is not tied to one product
 * family. A comparison of two product classes is not "symptom guidance", and
 * labelling it that way was a leftover from the days when every page was a
 * symptom page.
 */
const SCOPE_LABELS: Record<string, string> = {
  "error-code": "Cross-brand symptom guidance",
  troubleshooting: "Cross-brand symptom guidance",
  "how-to": "Cross-brand procedure; the exact steps come from your model manual",
  guide: "Cross-brand explanation; product figures come from the model documentation",
  comparison: "Product classes compared; figures belong to specific matched systems",
};

const DOCUMENT_CLASS_LABELS: Record<string, string> = {
  "oem-service-manual": "service manual",
  "oem-operation-manual": "operation manual",
  "oem-support": "official manufacturer support article",
  "government-guidance": "government guidance",
  "standards-body": "standards body publication",
};

function ListSection({
  title,
  items,
  ordered = false,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <section className="article-section">
      <h2>{title}</h2>
      <List className="check-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </section>
  );
}

export function ArticlePage({ article }: { article: TechnicalArticle }) {
  const isSourceVerified = article.reviewStatus === "source-verified";
  const brand = article.brand ? getBrandBySlug(article.brand) : undefined;
  const author = getAuthorBySlug(article.authorSlug);
  const reviewer = article.reviewerSlug ? getAuthorBySlug(article.reviewerSlug) : undefined;
  const related = getRelatedArticles(article);
  const sourceRecords = article.sourceIds
    .map(getSourceById)
    .filter((source) => source !== undefined);
  // Publishers and document classes describe the evidence without sending the
  // reader to a manufacturer site. The URLs stay in the repository record.
  const publishers = Array.from(new Set(sourceRecords.map((source) => source.publisher)));
  const documentClasses = Array.from(
    new Set(sourceRecords.map((source) => DOCUMENT_CLASS_LABELS[source.sourceType])),
  );
  const documentationSummary =
    publishers.length === 1
      ? `${publishers[0]} technical literature`
      : `${publishers.slice(0, -1).join(", ")} and ${publishers.at(-1)} technical literature`;
  const equipmentLabel =
    EQUIPMENT_TYPES[article.equipmentType as keyof typeof EQUIPMENT_TYPES]?.singular ??
    article.equipmentType.replaceAll("-", " ");

  const format = article.articleType === "maintenance" ? "how-to" : article.articleType;
  const formatHub = {
    "error-code": { name: "Error codes", path: "/error-codes/" },
    troubleshooting: { name: "Troubleshooting", path: "/troubleshooting/" },
    "how-to": { name: "How-to", path: "/how-to/" },
    guide: { name: "Guides", path: "/guides/" },
    comparison: { name: "Comparisons", path: "/compare/" },
  }[format];
  const listTitlesByFormat: Record<string, [string, string]> = {
    guide: ["What this guide covers", "What changes the answer"],
    "how-to": ["Before you start", "Why the procedure changes"],
    comparison: ["Criteria compared", "Decision factors"],
  };
  const listTitles = listTitlesByFormat[format] ?? ["What you may notice", "Likely causes"];
  const glossaryTerms = (article.glossaryTerms ?? [])
    .map(getGlossaryTerm)
    .filter((term) => term !== undefined);
  const relatedBrands = (article.relatedBrands ?? [])
    .map(getBrandBySlug)
    .filter((item) => item !== undefined);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...(brand
      ? [
          { name: "Brands", path: "/brands/" },
          { name: brand.name, path: `/brands/${brand.slug}/` },
        ]
      : [formatHub]),
    { name: article.errorCode ?? article.title, path: article.path },
  ];

  return (
    <main id="main-content">
      <div className="container article-shell">
        <Breadcrumbs items={breadcrumbs} />
        <div className="article-layout">
          <article className="article-body">
            <header className="article-header">
              <span className="eyebrow">
                {article.errorCode
                  ? `${brand?.name ?? "HVAC"} code ${article.errorCode}`
                  : article.articleType.replaceAll("-", " ")}
              </span>
              <h1>{article.title}</h1>
              <p className="dek">{article.description}</p>
              <div className="review-line">
                <span className={`badge${isSourceVerified ? " badge-verified" : ""}`}>
                  {isSourceVerified ? "Source verified" : "Editorial review"}
                </span>
                <span>
                  By{" "}
                  <Link href={`/authors/${article.authorSlug}/`}>{author?.name ?? "HVAC Bench"}</Link>
                </span>
                {reviewer && <span>Reviewed by {reviewer.name}</span>}
                {article.lastReviewed && (
                  <span>
                    Last reviewed <time dateTime={article.lastReviewed}>{article.lastReviewed}</time>
                  </span>
                )}
              </div>
            </header>

            <section className="answer-box" aria-labelledby="direct-answer-title">
              <span className="eyebrow">Direct answer</span>
              <h2 id="direct-answer-title">What this means</h2>
              <p>{article.directAnswer}</p>
            </section>

            <section className="scope-box">
              <h2>Equipment and model context</h2>
              <p>{article.productFamily ?? SCOPE_LABELS[format]}</p>
              <ul>
                {article.models.map((model) => (
                  <li key={model}>{model}</li>
                ))}
              </ul>
              <p className="scope-note">
                {article.scopeNotice ??
                  (article.errorCode
                    ? "Codes can change meaning across product families. Confirm the complete model number on the data plate before applying any code definition."
                    : "Remote and controller procedures vary by model. Confirm the complete indoor unit and controller model before applying a reset or replacement instruction.")}
              </p>
            </section>

            <ListSection title={listTitles[0]} items={article.symptoms} />
            <ListSection title={listTitles[1]} items={article.causes} />

            <ArticleContentBlocks article={article} />

            {article.safeChecks && article.safeChecks.length > 0 && (
              <section className="callout callout-safe">
                <span className="eyebrow">Homeowner safe</span>
                <h2>Safe homeowner checks</h2>
                <ol className="check-list">
                  {article.safeChecks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>
            )}

            {article.resetGuidance && (
              <section className="article-section">
                <h2>Is a reset appropriate?</h2>
                <p>{article.resetGuidance}</p>
              </section>
            )}

            {article.professionalEscalation && article.professionalEscalation.length > 0 && (
              <section className="callout callout-pro">
                <span className="eyebrow">Stop point</span>
                <h2>When to call a technician</h2>
                <ul className="check-list">
                  {article.professionalEscalation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {article.faqs.length > 0 && (
              <section className="article-section">
                <h2>Questions people ask about this</h2>
                {article.faqs.map((faq) => (
                  <details className="faq-item" key={faq.question}>
                    <summary>{faq.question}</summary>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </section>
            )}

            {/*
              The evidence record stays on the page in full, but a reader who
              has finished the diagnosis should not have to scroll past it. The
              closed state keeps the documentation class and review status.
              Source-verified pages also keep the review date there.
            */}
            <details className="sources evidence-record">
              <summary>
                <span>
                  <span className="eyebrow">Evidence record</span>
                  <h2>{isSourceVerified ? "How this page was checked" : "Source verification pending"}</h2>
                </span>
                <small>
                  {documentClasses.join(", ")}
                  {article.lastReviewed ? ` · checked ${article.lastReviewed}` : " · editorial review"}
                </small>
              </summary>
              <div className="evidence-record-body">
                {isSourceVerified ? (
                  <p>
                    Every technical claim above was written from primary documentation held in the
                    HVAC Bench evidence record: {documentationSummary}. Where a source limits a
                    definition to certain models, test conditions, or product classes, that limit is
                    repeated here rather than generalised.
                  </p>
                ) : (
                  <p>
                    This page is awaiting source verification against the documentation in its
                    evidence record: {documentationSummary}. Its documentation class and intended
                    scope are shown here while that check is pending.
                  </p>
                )}
                <dl className="verification-plate">
                  <div>
                    <dt>Documentation class</dt>
                    <dd>{documentClasses.join(", ")}</dd>
                  </div>
                  <div>
                    <dt>Scope of the definition</dt>
                    <dd>{article.productFamily ?? "Confirm against the exact model manual"}</dd>
                  </div>
                  {article.lastReviewed && (
                    <div>
                      <dt>Last checked</dt>
                      <dd>{article.lastReviewed}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </details>
          </article>

          <aside className="rail" aria-label="Reference card">
            <div className="plate">
              <div className="plate-head">
                <span>Reference card</span>
                <span>{article.reviewStatus === "source-verified" ? "Verified" : "In review"}</span>
              </div>
              {article.errorCode && <div className="rail-code">{article.errorCode}</div>}
              <dl className="plate-rows">
                {brand && (
                  <div>
                    <dt>Brand</dt>
                    <dd>{brand.name}</dd>
                  </div>
                )}
                <div>
                  <dt>Equipment</dt>
                  <dd>{equipmentLabel}</dd>
                </div>
                <div>
                  <dt>Symptom</dt>
                  <dd>{article.problemType.replaceAll("-", " ")}</dd>
                </div>
                <div>
                  <dt>Evidence</dt>
                  <dd>{article.sourceType.replaceAll("-", " ")}</dd>
                </div>
                {article.lastReviewed && (
                  <div>
                    <dt>Reviewed</dt>
                    <dd>{article.lastReviewed}</dd>
                  </div>
                )}
              </dl>
              <div className="rail-links">
                {brand && <Link href={`/brands/${brand.slug}/`}>All {brand.name} references</Link>}
                {relatedBrands.map((item) => (
                  <Link href={`/brands/${item.slug}/`} key={item.slug}>{item.name} references</Link>
                ))}
                <Link href={formatHub.path}>{formatHub.name}</Link>
                <Link href={`/equipment/${article.equipmentType}/`}>{equipmentLabel}</Link>
                {glossaryTerms.map((term) => (
                  <Link href={glossaryPath(term.slug)} key={term.slug}>{term.term}</Link>
                ))}
                <Link href="/safety-disclaimer/">Safety limits</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="band-alt">
          <div className="container band">
            <div className="section-head">
              <div>
                <span className="eyebrow">Continue the diagnosis</span>
                <h2>Related references</h2>
              </div>
            </div>
            <div className="grid grid-3">
              {related.map((item) => (
                <ArticleCard key={item.path} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
