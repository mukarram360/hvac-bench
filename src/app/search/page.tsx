import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { PageHead } from "@/components/page-head";
import { SearchPanel, SiteSearch, type SearchEntry } from "@/components/site-search";
import { formatLabel, getAllBrands, getErrorCodeArticles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const PATH = "/search/";

export const metadata: Metadata = pageMetadata({
  title: "Search HVAC Bench",
  description:
    "Search published HVAC Bench references by error code, manufacturer, equipment type, symptom, or glossary term.",
  path: PATH,
  noIndex: true,
});

export default function SearchPage() {
  const quickLinks: SearchEntry[] = [
    ...getErrorCodeArticles()
      .slice(0, 8)
      .map((article) => ({
        title: article.title,
        path: article.path,
        description: article.description,
        label: formatLabel(article),
        terms: "",
      })),
    ...getAllBrands()
      .slice(0, 4)
      .map((brand) => ({
        title: `${brand.name} systems`,
        path: `/brands/${brand.slug}/`,
        description: brand.description,
        label: "Brand",
        terms: "",
      })),
  ];

  return (
    <main id="main-content">
      <PageHead
        eyebrow="Site index"
        title="Search"
        description="Search runs in your browser against the published index, so nothing you type is sent to a server or recorded. Try a code such as E6, a brand, or a symptom in plain words."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Search", path: PATH },
        ]}
      />

      <div className="container page-tail">
        <Suspense fallback={<SiteSearch quickLinks={quickLinks} variant="page" />}>
          <SearchPanel quickLinks={quickLinks} />
        </Suspense>

        <section className="empty-state stack-gap">
          <h2>Prefer to browse?</h2>
          <p>
            The full structure is on the site map, and the three main entry points are the code index,
            the symptom index, and the manufacturer directory.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/error-codes/">
              Error codes
            </Link>
            <Link className="btn btn-secondary" href="/troubleshooting/">
              Symptoms
            </Link>
            <Link className="btn btn-secondary" href="/site-map/">
              Site map
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
