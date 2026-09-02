import Link from "next/link";

import type { TechnicalArticle } from "@/content/schema";
import { allArticlesSourceVerified } from "@/lib/provenance";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";
import { ArticleCard } from "./article-card";
import { JsonLd } from "./json-ld";
import { PageHead } from "./page-head";

/**
 * Shared template for the format hubs (guides, how-to, comparisons). Each hub
 * explains what that format promises the reader, which is what makes the page
 * worth landing on before any article exists beneath it. An empty hub stays
 * live and crawlable but is left out of the header and footer menus.
 */
export function FormatHub({
  eyebrow,
  title,
  description,
  path,
  articles,
  promises,
  emptyHeading,
  emptyCopy,
}: {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  articles: TechnicalArticle[];
  promises: { heading: string; copy: string }[];
  emptyHeading: string;
  emptyCopy: string;
}) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          collectionPageJsonLd({
            title,
            description,
            path,
            items: articles.map((article) => ({ name: article.title, path: article.path })),
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <PageHead
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        meta={[
          articles.length > 0 ? `${articles.length} published` : "First pages in preparation",
          articles.length === 0
            ? "Source verification pending"
            : allArticlesSourceVerified(articles)
              ? "Checked against manufacturer documentation"
              : "Includes pages awaiting source verification",
        ]}
      />

      <div className="container page-tail">
        <section className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">What this section is for</span>
              <h2>What you can expect here</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {promises.map((promise) => (
              <div className="card" key={promise.heading}>
                <h3>{promise.heading}</h3>
                <p>{promise.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {articles.length > 0 ? (
          <section className="band-tight">
            <div className="section-head">
              <div>
                <span className="eyebrow">Published</span>
                <h2>{title}</h2>
              </div>
            </div>
            <div className="grid grid-3">
              {articles.map((article) => (
                <ArticleCard article={article} key={article.path} />
              ))}
            </div>
          </section>
        ) : (
          <section className="empty-state">
            <h2>{emptyHeading}</h2>
            <p>{emptyCopy}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/troubleshooting/">
                Browse symptom references
              </Link>
              <Link className="btn btn-secondary" href="/error-codes/">
                Error code index
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
