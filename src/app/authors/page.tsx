import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { getAllAuthors } from "@/lib/content";
import { breadcrumbJsonLd, collectionPageJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/authors/";

export const metadata: Metadata = pageMetadata({
  title: "Who writes HVAC Bench",
  description:
    "The editorial desk behind HVAC Bench: what it researches, how it verifies technical claims, and how reviewers are credited on the pages they check.",
  path: PATH,
});

export default function AuthorsPage() {
  const authors = getAllAuthors();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Authors", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          collectionPageJsonLd({
            title: "Who writes HVAC Bench",
            description: "Authors and reviewers publishing on HVAC Bench.",
            path: PATH,
            items: authors.map((author) => ({ name: author.name, path: `/authors/${author.slug}/` })),
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow="Accountability"
        title="Who writes this"
        description="Technical writing is only as good as the person accountable for it. Every page names who wrote it and, where a page has been checked by someone with field qualifications, who reviewed it."
        breadcrumbs={breadcrumbs}
        meta={[`${authors.length} contributors`, "Reviewers named on the page"]}
      />

      <div className="container page-tail">
        <div className="grid grid-2">
          {authors.map((author) => (
            <article className="card" key={author.slug}>
              <div className="card-meta">
                <span>{author.entityType === "person" ? "Author" : "Editorial desk"}</span>
                <span>{author.expertise.length} areas</span>
              </div>
              <h2 className="card-heading">
                <Link href={`/authors/${author.slug}/`}>{author.name}</Link>
              </h2>
              <p>{author.shortBio}</p>
              <Link className="link-arrow" href={`/authors/${author.slug}/`}>
                Read the full profile
              </Link>
            </article>
          ))}
        </div>

        <section className="empty-state">
          <h2>Reviewing for HVAC Bench</h2>
          <p>
            If you hold a current refrigeration or heating qualification, whether that is EPA Section
            608 and NATE certification in the United States or F-Gas and Gas Safe registration in the
            United Kingdom, and you would review pages in your area, get in touch. Reviewers are named
            on the pages they check, with their credentials stated.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact/">
              Offer a technical review
            </Link>
            <Link className="btn btn-secondary" href="/editorial-policy/">
              Read the editorial policy
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
