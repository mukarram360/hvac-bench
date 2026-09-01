import Link from "next/link";

import type { TechnicalArticle } from "@/content/schema";
import { EQUIPMENT_TYPES } from "@/content/taxonomy";
import {
  getAuthorBySlug,
  getBrandBySlug,
  getRelatedArticles,
  getSourceById,
} from "@/lib/content";
import { ArticleCard } from "./article-card";
import { ArticleContentBlocks } from "./article-content-blocks";
import { Breadcrumbs } from "./breadcrumbs";

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
  const brand = article.brand ? getBrandBySlug(article.brand) : undefined;
  const author = getAuthorBySlug(article.authorSlug);
  const reviewer = article.reviewerSlug ? getAuthorBySlug(article.reviewerSlug) : undefined;
  const related = getRelatedArticles(article);
  const sourceRecords = article.sourceIds
    .map(getSourceById)
    .filter((source) => source !== undefined);
  const equipmentLabel =
    EQUIPMENT_TYPES[article.equipmentType as keyof typeof EQUIPMENT_TYPES]?.singular ??
    article.equipmentType.replaceAll("-", " ");

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...(brand
      ? [
          { name: "Brands", path: "/brands/" },
          { name: brand.name, path: `/brands/${brand.slug}/` },
        ]
      : [{ name: "Troubleshooting", path: "/troubleshooting/" }]),
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
                <span className="badge badge-verified">
                  {article.reviewStatus === "source-verified" ? "Source verified" : "Editorial review"}
                </span>
                <span>
                  By{" "}
                  <Link href={`/authors/${article.authorSlug}/`}>{author?.name ?? "HVAC Bench"}</Link>
                </span>
                {reviewer && <span>Reviewed by {reviewer.name}</span>}
                <span>
                  Last reviewed{" "}
                  <time dateTime={article.lastReviewed}>{article.lastReviewed}</time>
                </span>
              </div>
            </header>

            <section className="answer-box" aria-labelledby="direct-answer-title">
              <span className="eyebrow">Direct answer</span>
              <h2 id="direct-answer-title">What this means</h2>
              <p>{article.directAnswer}</p>
            </section>

            <section className="scope-box">
              <h2>Equipment and model context</h2>
              <p>{article.productFamily ?? "Cross-brand symptom guidance"}</p>
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

            <ListSection title="What you may notice" items={article.symptoms} />
            <ListSection title="Likely causes" items={article.causes} />

            <ArticleContentBlocks article={article} />

            {article.steps && article.steps.length > 0 && (
              <section className="article-section">
                <h2>Procedure</h2>
                <ol className="check-list">
                  {article.steps.map((step, index) => (
                    <li key={step.name} id={`step-${index + 1}`}>
                      <strong>{step.name}.</strong> {step.text}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <section className="callout callout-safe">
              <span className="eyebrow">Homeowner safe</span>
              <h2>Safe homeowner checks</h2>
              <ol className="check-list">
                {article.safeChecks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            {article.resetGuidance && (
              <section className="article-section">
                <h2>Is a reset appropriate?</h2>
                <p>{article.resetGuidance}</p>
              </section>
            )}

            <section className="callout callout-pro">
              <span className="eyebrow">Stop point</span>
              <h2>When to call a technician</h2>
              <ul className="check-list">
                {article.professionalEscalation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

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

            <section className="sources">
              <h2>Sources</h2>
              <p>
                Technical claims on this page are scoped to the documentation below and paraphrased
                for clarity. Where a manufacturer limits a definition to certain models, that limit is
                repeated here rather than generalised.
              </p>
              <ol>
                {sourceRecords.map((source) => (
                  <li key={source.id}>
                    <a href={source.url} target="_blank" rel="noreferrer nofollow">
                      {source.title}
                    </a>
                    <cite>
                      {source.publisher} · {source.sourceType.replaceAll("-", " ")}
                    </cite>
                    {source.scopeNote && <small>{source.scopeNote}</small>}
                  </li>
                ))}
              </ol>
            </section>
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
                <div>
                  <dt>Reviewed</dt>
                  <dd>{article.lastReviewed}</dd>
                </div>
              </dl>
              <div className="rail-links">
                {brand && <Link href={`/brands/${brand.slug}/`}>All {brand.name} references</Link>}
                <Link href="/error-codes/">Error code index</Link>
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
