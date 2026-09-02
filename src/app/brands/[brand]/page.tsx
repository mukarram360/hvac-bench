import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { BenchmarkScorecard } from "@/components/benchmark-scorecard";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { EQUIPMENT_TYPES, REGIONS } from "@/content/taxonomy";
import {
  getAllBrands,
  getArticlesByBrand,
  getBrandBySlug,
  isBrandIndexable,
} from "@/lib/content";
import { getScorecardSubjectsForBrand } from "@/content/benchmark/subjects";
import { getBenchmark } from "@/lib/benchmark-content";
import { brandJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBrands().map((brand) => ({ brand: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return pageMetadata({
    title: `${brand.name} error codes and troubleshooting`,
    description: brand.description,
    path: `/brands/${brand.slug}/`,
    noIndex: !isBrandIndexable(brand.slug),
    keywords: [
      `${brand.name} error codes`,
      `${brand.name} troubleshooting`,
      `${brand.name} not cooling`,
      ...brand.series.slice(0, 3).map((series) => `${brand.name} ${series}`),
    ],
  });
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const articles = getArticlesByBrand(slug);
  const codeArticles = articles.filter((article) => article.errorCode);
  const symptomArticles = articles.filter((article) => !article.errorCode);
  const scorecards = getScorecardSubjectsForBrand(slug);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Brands", path: "/brands/" },
    { name: brand.name, path: `/brands/${brand.slug}/` },
  ];

  return (
    <main id="main-content">
      <JsonLd data={[brandJsonLd(brand, articles.length), breadcrumbJsonLd(breadcrumbs)]} />

      <PageHead
        eyebrow="Manufacturer file"
        title={brand.name}
        description={brand.description}
        breadcrumbs={breadcrumbs}
        aside={
          <div className="plate">
            <div className="plate-head">
              <span>Coverage</span>
              <span>{articles.length > 0 ? "Published" : "In progress"}</span>
            </div>
            <dl className="plate-rows">
              <div>
                <dt>References</dt>
                <dd>{articles.length}</dd>
              </div>
              <div>
                <dt>Markets</dt>
                <dd>{brand.regions.map((region) => REGIONS[region].label).join(", ")}</dd>
              </div>
              <div>
                <dt>Equipment</dt>
                <dd>
                  {brand.equipmentTypes
                    .map(
                      (type) =>
                        EQUIPMENT_TYPES[type as keyof typeof EQUIPMENT_TYPES]?.label ??
                        type.replaceAll("-", " "),
                    )
                    .join(", ")}
                </dd>
              </div>
            </dl>
          </div>
        }
      />

      <div className="container page-tail">
        {brand.faultDisplay && (
          <section className="callout callout-note">
            <span className="eyebrow">How {brand.name} reports faults</span>
            <p>{brand.faultDisplay}</p>
          </section>
        )}

        {scorecards.length > 0 && (
          <section className="band-tight">
            <div className="section-head">
              <div>
                <span className="eyebrow">HVAC Bench Score</span>
                <h2>Family scorecards</h2>
                <p>
                  What manufacturer documentation establishes about each family, and what owner
                  evidence we hold. A score appears only where that evidence clears the{" "}
                  <Link href="/benchmark/">published threshold</Link>.
                </p>
              </div>
            </div>
            {scorecards.map((subject) => {
              const result = getBenchmark(subject.id);
              if (!result) return null;
              return (
                <BenchmarkScorecard key={subject.id} subject={subject} result={result} />
              );
            })}
          </section>
        )}

        {brand.series.length > 0 && (
          <section className="band-tight">
            <div className="section-head">
              <div>
                <span className="eyebrow">Product families</span>
                <h2>Series you may see on the label</h2>
                <p>
                  Check the model number on the data plate against this list before using any code
                  table. Definitions are published per family, not per brand.
                </p>
              </div>
            </div>
            <div className="hero-chips">
              {brand.series.map((series) => (
                <span className="chip" key={series}>
                  {series}
                </span>
              ))}
            </div>
          </section>
        )}

        {codeArticles.length > 0 && (
          <section className="band-tight">
            <div className="section-head">
              <div>
                <span className="eyebrow">Error codes</span>
                <h2>{brand.name} code references</h2>
              </div>
              <Link className="link-arrow" href="/error-codes/">
                All manufacturers
              </Link>
            </div>
            <div className="grid grid-3">
              {codeArticles.map((article) => (
                <ArticleCard article={article} key={article.path} />
              ))}
            </div>
          </section>
        )}

        {symptomArticles.length > 0 && (
          <section className="band-tight">
            <div className="section-head">
              <div>
                <span className="eyebrow">Symptoms</span>
                <h2>Symptom references that apply here</h2>
              </div>
            </div>
            <div className="grid grid-3">
              {symptomArticles.map((article) => (
                <ArticleCard article={article} key={article.path} />
              ))}
            </div>
          </section>
        )}

        {articles.length === 0 && (
          <section className="empty-state">
            <h2>No {brand.name} reference has been published yet</h2>
            <p>
              This hub is open, but it stays out of search results until it carries verified content,
              because an empty page helps nobody. In the meantime, the cross-brand symptom
              references cover behaviour common to{" "}
              {EQUIPMENT_TYPES[brand.equipmentTypes[0] as keyof typeof EQUIPMENT_TYPES]?.label.toLowerCase() ??
                "systems"}
              , and the error-code index may already document a code that matches yours.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/troubleshooting/">
                Browse symptoms
              </Link>
              <Link className="btn btn-secondary" href="/error-codes/">
                Error code index
              </Link>
            </div>
          </section>
        )}

        <section className="band-tight">
          <div className="callout callout-note">
            <span className="eyebrow">Before you use a code table</span>
            <ul className="check-list">
              <li>
                Record the full indoor and outdoor model numbers from the data plate, not just the
                brand name.
              </li>
              <li>
                Photograph the display while the code is showing. Some systems clear the code on
                power interruption and it can be difficult to reproduce.
              </li>
              <li>
                Note what the system was doing when the code appeared: starting, running, defrosting,
                or idle. That context narrows the cause faster than the code alone.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
