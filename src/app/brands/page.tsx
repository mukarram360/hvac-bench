import type { Metadata } from "next";
import Link from "next/link";
import { DirectoryHero } from "@/components/directory-hero";
import { getAllBrands, getArticlesByBrand } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata({ title: "HVAC brand directory", description: "Browse evidence-backed error-code and troubleshooting references by HVAC manufacturer, with product-family scope shown on every technical guide.", path: "/brands/" });
export default function BrandsPage() { return <main id="main-content" className="directory-page"><DirectoryHero eyebrow="Manufacturer index" title="HVAC brands" description="Choose the name on the indoor or outdoor unit. Each hub lists only content supported for that manufacturer and identified equipment context." path="/brands/" /><div className="brand-directory">{getAllBrands().map((brand) => { const count = getArticlesByBrand(brand.slug).length; return <Link href={`/brands/${brand.slug}/`} key={brand.slug}><span className="brand-monogram">{brand.name.slice(0, 2).toUpperCase()}</span><div><h2>{brand.name}</h2><p>{brand.description}</p></div><small>{count} verified {count === 1 ? "guide" : "guides"}</small></Link>; })}</div></main>; }

