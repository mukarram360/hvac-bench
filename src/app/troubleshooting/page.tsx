import type { Metadata } from "next";
import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { getAllArticles, getSymptomFamiliesInUse } from "@/lib/content";
import { breadcrumbJsonLd, collectionPageJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/troubleshooting/";

export const metadata: Metadata = pageMetadata({
  title: "HVAC troubleshooting by symptom",
  description:
    "Start from what the system is doing: not cooling, not heating, leaking water, icing up, short cycling, or refusing to start. Each guide separates safe checks from technician work.",
  path: PATH,
  keywords: [
    "hvac troubleshooting",
    "mini split not cooling",
    "heat pump not heating",
    "air conditioner leaking water",
  ],
});

export default function TroubleshootingPage() {
  const families = getSymptomFamiliesInUse().filter((family) => family.articles.length > 0);
  const upcoming = getSymptomFamiliesInUse().filter((family) => family.articles.length === 0);
  const articles = getAllArticles();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Troubleshooting", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          collectionPageJsonLd({
            title: "HVAC troubleshooting by symptom",
            description:
              "Symptom-led diagnostic guides for ductless mini-splits and heat pumps, with safe checks separated from technician work.",
            path: PATH,
            items: articles
              .filter((article) => !article.errorCode)
              .map((article) => ({ name: article.title, path: article.path })),
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow="Symptom index"
        title="Troubleshooting by symptom"
        description="Most people arrive with a behaviour rather than a code. Find what the system is doing, work through the checks that are safe to make, and stop where the guide says a technician takes over."
        breadcrumbs={breadcrumbs}
        meta={[`${families.length} symptom families published`, "Homeowner checks marked", "Stop points stated"]}
        aside={
          <div className="plate">
            <div className="plate-head">
              <span>Before you start</span>
            </div>
            <div className="plate-body">
              <ul className="check-list plate-list">
                <li>Leave the system off if you smell burning or see scorching.</li>
                <li>Do not open electrical compartments. Capacitors hold a charge.</li>
                <li>Refrigerant work requires certification in both the US and UK.</li>
              </ul>
            </div>
          </div>
        }
      />

      <div className="container page-tail">
        {families.map((family) => (
          <section className="band-tight" key={family.slug} id={family.slug}>
            <div className="section-head">
              <div>
                <span className="eyebrow">{family.label}</span>
                <h2>{family.label}</h2>
                <p>{family.summary}</p>
              </div>
              <span className="badge badge-neutral">
                {family.articles.length} {family.articles.length === 1 ? "guide" : "guides"}
              </span>
            </div>
            <div className="grid grid-3">
              {family.articles.map((article) => (
                <ArticleCard article={article} key={article.path} />
              ))}
            </div>
          </section>
        ))}

        {upcoming.length > 0 && (
          <section className="empty-state">
            <h2>Symptom families still being written</h2>
            <p>
              These sections exist in the structure and will fill as references are verified:{" "}
              {upcoming.map((family) => family.label.toLowerCase()).join(", ")}. Nothing publishes
              until it can name its sources.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/error-codes/">
                Look up a code instead
              </Link>
              <Link className="btn btn-secondary" href="/glossary/">
                Check a term
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
