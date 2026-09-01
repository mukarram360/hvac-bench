import type { Metadata } from "next";
import { DirectoryHero } from "@/components/directory-hero";
import { SiteSearch, type SearchEntry } from "@/components/site-search";
import { getAllArticles, getAllBrands } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata({ title: "Search HVAC Bench", description: "Search published HVAC Bench guides by brand, error code, equipment, or symptom.", path: "/search/", noIndex: true });
export default function SearchPage() { const entries: SearchEntry[] = [...getAllArticles().map((article) => ({ title: article.title, path: article.path, description: article.description, label: article.errorCode ?? "Guide", terms: `${article.brand ?? ""} ${article.problemType} ${article.keywords.join(" ")}` })), ...getAllBrands().map((brand) => ({ title: `${brand.name} HVAC`, path: `/brands/${brand.slug}/`, description: brand.description, label: "Brand hub", terms: `${brand.name} ${brand.equipmentTypes.join(" ")}` }))]; return <main id="main-content" className="directory-page"><DirectoryHero eyebrow="Local site index" title="Search HVAC Bench" description="Search runs in your browser against the published guide index. Search queries are utility state and do not create indexable pages." path="/search/" /><SiteSearch entries={entries} /></main>; }

