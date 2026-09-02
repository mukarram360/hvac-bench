import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { EQUIPMENT_TYPES } from "@/content/taxonomy";
import { footerNav } from "@/lib/nav";
import {
  getAllArticles,
  getAllBrands,
  getArticlesByBrand,
  getErrorCodeArticles,
  getGlossaryByCategory,
  glossaryPath,
} from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const PATH = "/site-map/";

export const metadata: Metadata = pageMetadata({
  title: "Site map",
  description:
    "Every published section of HVAC Bench in one place: error codes, symptom references, procedures, manufacturer hubs, equipment categories, reference material, and site policies.",
  path: PATH,
});

export default function SiteMapPage() {
  const brands = getAllBrands();
  const articles = getAllArticles();
  const codeArticles = getErrorCodeArticles();
  const glossaryCategories = getGlossaryByCategory();
  const glossaryCount = glossaryCategories.reduce(
    (total, category) => total + category.terms.length,
    0,
  );
  const symptomArticles = articles.filter((article) => article.articleType === "troubleshooting");
  const procedures = articles.filter(
    (article) => article.articleType === "how-to" || article.articleType === "maintenance",
  );
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Site map", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Site map",
            description: "The full published structure of HVAC Bench.",
            path: PATH,
            breadcrumbs,
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow="Navigation"
        title="Site map"
        description="Everything published, laid out in one page. The machine-readable version is at /sitemap.xml, and the crawler rules are in /robots.txt."
        breadcrumbs={breadcrumbs}
        meta={[
          `${articles.length} references`,
          `${brands.length} manufacturer hubs`,
          `${Object.keys(EQUIPMENT_TYPES).length} equipment categories`,
          `${glossaryCount} defined terms`,
        ]}
      />

      <div className="container page-tail">
        <section className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">Error codes</span>
              <h2>Code references</h2>
            </div>
            <Link className="link-arrow" href="/error-codes/">
              Code index
            </Link>
          </div>
          <ul className="doc-list">
            {codeArticles.map((article) => (
              <li key={article.path}>
                <Link href={article.path}>
                  <span>
                    <strong>{article.title}</strong>
                  </span>
                  <small>{article.errorCode}</small>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">Symptoms</span>
              <h2>Symptom references</h2>
            </div>
            <Link className="link-arrow" href="/troubleshooting/">
              Symptom index
            </Link>
          </div>
          <ul className="doc-list">
            {symptomArticles.map((article) => (
              <li key={article.path}>
                <Link href={article.path}>
                  <span>
                    <strong>{article.title}</strong>
                  </span>
                  <small>{article.problemType.replaceAll("-", " ")}</small>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {procedures.length > 0 && (
          <section className="band-tight">
            <div className="section-head">
              <div>
                <span className="eyebrow">Procedures</span>
                <h2>How-to</h2>
              </div>
              <Link className="link-arrow" href="/how-to/">
                How-to index
              </Link>
            </div>
            <ul className="doc-list">
              {procedures.map((article) => (
                <li key={article.path}>
                  <Link href={article.path}>
                    <span>
                      <strong>{article.title}</strong>
                    </span>
                    <small>{article.problemType.replaceAll("-", " ")}</small>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">Manufacturers</span>
              <h2>Brand hubs</h2>
            </div>
            <Link className="link-arrow" href="/brands/">
              Brand directory
            </Link>
          </div>
          <div className="brand-grid">
            {brands.map((brand) => (
              <Link className="brand-tile" key={brand.slug} href={`/brands/${brand.slug}/`}>
                <span className="brand-region">
                  {brand.regions.map((region) => region.toUpperCase()).join(" · ")}
                </span>
                <strong>{brand.name}</strong>
                <small>
                  {getArticlesByBrand(brand.slug).length > 0
                    ? `${getArticlesByBrand(brand.slug).length} published`
                    : "In progress"}
                </small>
              </Link>
            ))}
          </div>
        </section>

        <section className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">Equipment</span>
              <h2>Categories</h2>
            </div>
            <Link className="link-arrow" href="/equipment/">
              Equipment index
            </Link>
          </div>
          <ul className="doc-list">
            {Object.values(EQUIPMENT_TYPES).map((type) => (
              <li key={type.slug}>
                <Link href={`/equipment/${type.slug}/`}>
                  <span>
                    <strong>{type.label}</strong>
                    <p>{type.summary}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">Vocabulary</span>
              <h2>Glossary terms</h2>
            </div>
            <Link className="link-arrow" href="/glossary/">
              Full glossary
            </Link>
          </div>
          {glossaryCategories.map((category) => (
            <div className="alpha-block" key={category.slug}>
              <h3>{category.label}</h3>
              <ul className="alpha-terms">
                {category.terms.map((term) => (
                  <li key={term.slug}>
                    <Link href={glossaryPath(term.slug)}>{term.term}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">Everything else</span>
              <h2>Reference, standards, and site pages</h2>
            </div>
          </div>
          <div className="grid grid-4">
            {footerNav.map((column) => (
              <div className="card" key={column.heading}>
                <h3>{column.heading}</h3>
                <ul className="check-list plate-list">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
