import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { EQUIPMENT_TYPES, type EquipmentTypeSlug } from "@/content/taxonomy";
import {
  getAllBrands,
  getArticlesByEquipment,
  isEquipmentIndexable,
} from "@/lib/content";
import { breadcrumbJsonLd, collectionPageJsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(EQUIPMENT_TYPES).map((type) => ({ type }));
}

function equipmentFor(type: string) {
  return EQUIPMENT_TYPES[type as EquipmentTypeSlug];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const equipment = equipmentFor(type);
  if (!equipment) return {};

  return pageMetadata({
    title: `${equipment.label}: faults, symptoms, and references`,
    description: equipment.summary,
    path: `/equipment/${equipment.slug}/`,
    noIndex: !isEquipmentIndexable(equipment.slug),
    keywords: [equipment.label.toLowerCase(), `${equipment.singular.toLowerCase()} troubleshooting`],
  });
}

export default async function EquipmentTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const equipment = equipmentFor(type);
  if (!equipment) notFound();

  const articles = getArticlesByEquipment(equipment.slug);
  const brands = getAllBrands().filter((brand) => brand.equipmentTypes.includes(equipment.slug));
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Equipment", path: "/equipment/" },
    { name: equipment.label, path: `/equipment/${equipment.slug}/` },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          collectionPageJsonLd({
            title: equipment.label,
            description: equipment.summary,
            path: `/equipment/${equipment.slug}/`,
            items: articles.map((article) => ({ name: article.title, path: article.path })),
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow="Equipment category"
        title={equipment.label}
        description={equipment.summary}
        breadcrumbs={breadcrumbs}
        aside={
          <div className="plate">
            <div className="plate-head">
              <span>Category file</span>
            </div>
            <dl className="plate-rows">
              <div>
                <dt>References</dt>
                <dd>{articles.length}</dd>
              </div>
              <div>
                <dt>Brands covered</dt>
                <dd>{brands.length}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{articles.length > 0 ? "Published" : "Coverage in progress"}</dd>
              </div>
            </dl>
          </div>
        }
      />

      <div className="container page-tail">
        {articles.length > 0 ? (
          <section className="band-tight">
            <div className="section-head">
              <div>
                <span className="eyebrow">Published references</span>
                <h2>References for {equipment.label.toLowerCase()}</h2>
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
            <h2>This category is structured but not yet populated</h2>
            <p>
              The route, schema, and internal linking for {equipment.label.toLowerCase()} are in
              place. Pages appear here as references are verified against manufacturer documentation,
              and the category stays out of search results until they are.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/troubleshooting/">
                Browse symptoms
              </Link>
              <Link className="btn btn-secondary" href="/glossary/">
                Check terminology
              </Link>
            </div>
          </section>
        )}

        {brands.length > 0 && (
          <section className="band-tight">
            <div className="section-head">
              <div>
                <span className="eyebrow">Manufacturers</span>
                <h2>Brands making {equipment.label.toLowerCase()}</h2>
              </div>
              <Link className="link-arrow" href="/brands/">
                Full brand index
              </Link>
            </div>
            <div className="brand-grid">
              {brands.slice(0, 15).map((brand) => (
                <Link className="brand-tile" key={brand.slug} href={`/brands/${brand.slug}/`}>
                  <span className="brand-region">
                    {brand.regions.map((region) => region.toUpperCase()).join(" · ")}
                  </span>
                  <strong>{brand.name}</strong>
                  <small>{brand.series[0] ?? "Reference hub"}</small>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
