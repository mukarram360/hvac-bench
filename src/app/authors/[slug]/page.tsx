import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { getAllArticles, getAllAuthors, getAuthorBySlug } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, personJsonLd, webPageJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllAuthors().map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  return pageMetadata({
    title: `${author.name}: ${author.role}`,
    description: author.shortBio,
    path: `/authors/${author.slug}/`,
  });
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const written = getAllArticles().filter((article) => article.authorSlug === author.slug);
  const reviewed = getAllArticles().filter((article) => article.reviewerSlug === author.slug);
  const path = `/authors/${author.slug}/`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Authors", path: "/authors/" },
    { name: author.name, path },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          webPageJsonLd({
            title: author.name,
            description: author.shortBio,
            path,
            breadcrumbs,
          }),
          personJsonLd(author),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow={author.entityType === "person" ? "Author profile" : "Editorial desk"}
        title={author.name}
        description={author.shortBio}
        breadcrumbs={breadcrumbs}
        aside={
          <div className="plate">
            <div className="plate-head">
              <span>Profile</span>
            </div>
            <dl className="plate-rows">
              <div>
                <dt>Role</dt>
                <dd>{author.role}</dd>
              </div>
              <div>
                <dt>Pages written</dt>
                <dd>{written.length}</dd>
              </div>
              {reviewed.length > 0 && (
                <div>
                  <dt>Pages reviewed</dt>
                  <dd>{reviewed.length}</dd>
                </div>
              )}
              {author.email && (
                <div>
                  <dt>Contact</dt>
                  <dd>
                    <a href={`mailto:${author.email}`}>{author.email}</a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        }
      />

      <div className="container doc-layout">
        <aside className="doc-aside">
          <div className="plate">
            <div className="plate-head">
              <span>Areas of focus</span>
            </div>
            <div className="plate-body">
              <ul className="check-list plate-list">
                {author.expertise.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
          {author.credentials.length > 0 && (
            <div className="plate">
              <div className="plate-head">
                <span>Working standards</span>
              </div>
              <div className="plate-body">
                <ul className="check-list plate-list">
                  {author.credentials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </aside>

        <div className="doc-content prose">
          <section>
            <h2>About</h2>
            {author.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              How pages are researched and checked is set out in the{" "}
              <Link href="/editorial-policy/">editorial policy</Link>, and the sourcing rules are in{" "}
              <Link href="/sources-methodology/">sources and methodology</Link>.
            </p>
          </section>

          {written.length > 0 && (
            <section>
              <h2>Recent pages</h2>
              <div className="grid grid-2">
                {written.slice(0, 6).map((article) => (
                  <ArticleCard article={article} key={article.path} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
