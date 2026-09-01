import Link from "next/link";
import type { TechnicalArticle } from "@/content/schema";
import {
  getBrandBySlug,
  getRelatedArticles,
  getSourceById,
} from "@/lib/content";
import { Breadcrumbs } from "./breadcrumbs";
import { ArticleCard } from "./article-card";

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="article-section">
      <h2>{title}</h2>
      <ul className="detail-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export function ArticlePage({ article }: { article: TechnicalArticle }) {
  const brand = article.brand ? getBrandBySlug(article.brand) : undefined;
  const related = getRelatedArticles(article);
  const sourceRecords = article.sourceIds
    .map(getSourceById)
    .filter((source) => source !== undefined);
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
      <div className="article-shell">
        <Breadcrumbs items={breadcrumbs} />
        <div className="article-layout">
          <article className="article-body">
            <header className="article-header">
              <div className="eyebrow">{article.errorCode ? `${brand?.name ?? "HVAC"} code ${article.errorCode}` : article.articleType}</div>
              <h1>{article.title}</h1>
              <p className="dek">{article.description}</p>
              <div className="review-line">
                <span>Source verified</span>
                <span>Last reviewed {article.lastReviewed}</span>
              </div>
            </header>

            <section className="direct-answer" aria-labelledby="direct-answer-title">
              <span className="panel-label">Direct answer</span>
              <h2 id="direct-answer-title">What this means</h2>
              <p>{article.directAnswer}</p>
            </section>

            <section className="scope-box">
              <h2>Equipment and model context</h2>
              <p>{article.productFamily ?? "Cross-brand symptom guidance"}</p>
              <ul>{article.models.map((model) => <li key={model}>{model}</li>)}</ul>
              <p className="scope-warning">Codes can change meaning across product families. Confirm the complete model number before using a code definition.</p>
            </section>

            <ListSection title="What you may notice" items={article.symptoms} />
            <ListSection title="Likely causes" items={article.causes} />

            <section className="safety-panel safe-panel">
              <div className="panel-label">Homeowner-safe</div>
              <h2>Safe homeowner checks</h2>
              <ol>{article.safeChecks.map((item) => <li key={item}>{item}</li>)}</ol>
            </section>

            {article.resetGuidance && (
              <section className="article-section">
                <h2>Is a reset appropriate?</h2>
                <p>{article.resetGuidance}</p>
              </section>
            )}

            <section className="safety-panel pro-panel">
              <div className="panel-label">Stop point</div>
              <h2>When to call a technician</h2>
              <ul>{article.professionalEscalation.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className="sources-section">
              <h2>Sources</h2>
              <p>Technical claims on this page are scoped to the documentation below and paraphrased for clarity.</p>
              <ol>
                {sourceRecords.map((source) => (
                  <li key={source.id}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
                    <span>{source.publisher} · {source.sourceType.replaceAll("-", " ")}</span>
                    {source.scopeNote && <small>{source.scopeNote}</small>}
                  </li>
                ))}
              </ol>
            </section>
          </article>

          <aside className="article-rail" aria-label="Article context">
            <span className="rail-label">Reference card</span>
            {article.errorCode && <div className="code-display">{article.errorCode}</div>}
            <dl>
              <div><dt>Equipment</dt><dd>{article.equipmentType.replaceAll("-", " ")}</dd></div>
              <div><dt>Problem</dt><dd>{article.problemType.replaceAll("-", " ")}</dd></div>
              <div><dt>Evidence</dt><dd>{article.sourceType.replaceAll("-", " ")}</dd></div>
            </dl>
            {brand && <Link className="rail-link" href={`/brands/${brand.slug}/`}>View {brand.name} hub →</Link>}
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related-section">
          <div className="section-heading">
            <div><span className="eyebrow">Continue diagnosis</span><h2>Related guides</h2></div>
          </div>
          <div className="card-grid">{related.map((item) => <ArticleCard key={item.path} article={item} />)}</div>
        </section>
      )}
    </main>
  );
}

