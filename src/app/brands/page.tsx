import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { REGIONS, type RegionCode } from "@/content/taxonomy";
import { getAllBrands, getArticlesByBrand } from "@/lib/content";
import { collectionPageJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/brands/";

export const metadata: Metadata = pageMetadata({
  title: "HVAC brand directory: error codes by manufacturer",
  description:
    "Browse HVAC error-code and troubleshooting references by manufacturer, covering ductless, heat-pump, heating, and control brands sold across the US, UK, and Europe.",
  path: PATH,
  keywords: ["hvac brands", "mini split brands", "heat pump manufacturers", "hvac error codes by brand"],
});

const SECTIONS: { id: RegionCode; heading: string; blurb: string }[] = [
  {
    id: "us",
    heading: "United States",
    blurb:
      "Manufacturers installed across North America, including the ductless specialists sold through online and contractor channels.",
  },
  {
    id: "uk",
    heading: "United Kingdom",
    blurb:
      "Brands you meet in British homes: air-source heat pumps, combi and system boilers, and the controls that sit between them.",
  },
  {
    id: "eu",
    heading: "Europe",
    blurb:
      "Manufacturers with strong presence across mainland Europe, including hydronic heat pumps and mainstream split systems.",
  },
];

export default function BrandsPage() {
  const brands = getAllBrands();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Brands", path: PATH },
  ];

  const controlsBrands = brands.filter((brand) => brand.group === "controls");
  const withCounts = brands.map((brand) => ({
    brand,
    count: getArticlesByBrand(brand.slug).length,
  }));
  const covered = withCounts.filter((entry) => entry.count > 0).length;

  return (
    <main id="main-content">
      <JsonLd
        data={[
          collectionPageJsonLd({
            title: "HVAC brand directory",
            description:
              "Manufacturer hubs for HVAC error codes and troubleshooting across the US, UK, and Europe.",
            path: PATH,
            items: brands.map((brand) => ({ name: brand.name, path: `/brands/${brand.slug}/` })),
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <PageHead
        eyebrow="Manufacturer index"
        title="HVAC brands"
        description="Find the name on the indoor or outdoor unit. Each hub carries the references published for that manufacturer, with the product family stated on every technical page, because a code table belongs to a series rather than to a badge."
        breadcrumbs={breadcrumbs}
        meta={[
          `${brands.length} manufacturers listed`,
          `${covered} with published references`,
          "US · UK · EU",
        ]}
      />

      <div className="container page-tail">
        {SECTIONS.map((section) => {
          const sectionBrands = withCounts.filter(
            (entry) => entry.brand.regions.includes(section.id) && entry.brand.group !== "controls",
          );
          if (!sectionBrands.length) return null;

          return (
            <section key={section.id} id={section.id} className="band-tight">
              <div className="section-head">
                <div>
                  <span className="eyebrow">{REGIONS[section.id].label}</span>
                  <h2>{section.heading}</h2>
                  <p>{section.blurb}</p>
                </div>
                <span className="badge badge-neutral">{sectionBrands.length} brands</span>
              </div>
              <div className="brand-directory">
                {sectionBrands.map(({ brand, count }) => (
                  <Link className="brand-row" key={brand.slug} href={`/brands/${brand.slug}/`}>
                    <span className="brand-monogram" aria-hidden="true">
                      {brand.name.slice(0, 2).toUpperCase()}
                    </span>
                    <div>
                      <h3>{brand.name}</h3>
                      <p>{brand.description}</p>
                      <div className="brand-row-meta">
                        <span>{count > 0 ? `${count} published` : "Coverage in progress"}</span>
                        {brand.series[0] && <span>{brand.series.slice(0, 2).join(" · ")}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <section id="controls" className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">Controls</span>
              <h2>Thermostats and controls</h2>
              <p>
                Control faults look like equipment faults from the room. These hubs cover wiring
                requirements, pairing, and the messages controls show when the problem is upstream.
              </p>
            </div>
            <span className="badge badge-neutral">{controlsBrands.length} brands</span>
          </div>
          <div className="brand-directory">
            {controlsBrands.map((brand) => (
              <Link className="brand-row" key={brand.slug} href={`/brands/${brand.slug}/`}>
                <span className="brand-monogram" aria-hidden="true">
                  {brand.name.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>
                  <div className="brand-row-meta">
                    <span>{getArticlesByBrand(brand.slug).length > 0 ? "Published" : "Coverage in progress"}</span>
                    <span>{brand.regions.map((region) => region.toUpperCase()).join(" · ")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="empty-state">
          <h2>Cannot find your brand?</h2>
          <p>
            Many systems are built on shared platforms and sold under several names, so the code table
            that matches your unit may sit under a different manufacturer. Search by the code itself,
            or send us the model number from the data plate and we will tell you which documentation
            applies.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/search/">
              Search by code
            </Link>
            <Link className="btn btn-secondary" href="/contact/">
              Send a model number
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
