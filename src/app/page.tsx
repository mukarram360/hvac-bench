import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { SiteSearch, type SearchEntry } from "@/components/site-search";
import { getAllArticles, getAllBrands } from "@/lib/content";

export default function Home() {
  const brands = getAllBrands();
  const articles = getAllArticles();
  const errorGuides = articles.filter((article) => article.articleType === "error-code").slice(0, 6);
  const searchEntries: SearchEntry[] = [
    ...articles.map((article) => ({ title: article.title, path: article.path, description: article.description, label: article.errorCode ?? "Guide", terms: `${article.brand ?? ""} ${article.problemType} ${article.keywords.join(" ")}` })),
    ...brands.map((brand) => ({ title: `${brand.name} HVAC`, path: `/brands/${brand.slug}/`, description: brand.description, label: "Brand hub", terms: `${brand.name} ${brand.equipmentTypes.join(" ")}` })),
  ];

  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Evidence-backed HVAC reference</div>
          <h1>Find the code.<br /><span>Trace the problem.</span></h1>
          <p>Model-aware error codes and practical troubleshooting, checked against manufacturer documentation and separated into safe checks and technician work.</p>
          <div className="hero-actions"><Link className="button primary" href="/error-codes/">Browse error codes</Link><Link className="button secondary" href="/troubleshooting/">Start with a symptom</Link></div>
        </div>
        <div className="hero-console-wrap">
          <div className="console-topline"><span>HVAC BENCH / INDEX</span><span>{articles.length} GUIDES · {brands.length} BRANDS</span></div>
          <SiteSearch entries={searchEntries} compact />
        </div>
      </section>
      <section className="proof-strip" aria-label="Editorial standards">
        <div><strong>Primary sources first</strong><span>OEM manuals and official support</span></div><div><strong>Model scope shown</strong><span>No universal code assumptions</span></div><div><strong>Safety boundary built in</strong><span>Homeowner checks versus service</span></div>
      </section>
      <section className="home-section brand-section">
        <div className="section-heading"><div><span className="eyebrow">Manufacturer index</span><h2>Start with the brand on the unit</h2></div><Link className="text-link" href="/brands/">All brands →</Link></div>
        <div className="brand-grid">{brands.map((brand, index) => <Link className="brand-tile" href={`/brands/${brand.slug}/`} key={brand.slug}><span className="brand-index">{String(index + 1).padStart(2, "0")}</span><strong>{brand.name}</strong><small>{brand.equipmentTypes[0].replaceAll("-", " ")}</small></Link>)}</div>
      </section>
      <section className="home-section dark-section">
        <div className="section-heading inverse"><div><span className="eyebrow">Code desk</span><h2>Common error-code references</h2></div><Link className="text-link" href="/error-codes/">Open code directory →</Link></div>
        <div className="code-grid">{errorGuides.map((article) => <Link href={article.path} className="code-card" key={article.path}><span>{article.errorCode}</span><div><strong>{article.title}</strong><small>{article.brand} · {article.problemType.replaceAll("-", " ")}</small></div></Link>)}</div>
      </section>
      <section className="home-section pathway-section">
        <div className="section-heading"><div><span className="eyebrow">Diagnostic paths</span><h2>Start with what the system is doing</h2></div></div>
        <div className="pathway-grid">{[["No cooling", "Airflow, settings, ice, and fault checks", "/mini-split-not-cooling/"], ["No heat", "Defrost, delay, airflow, and low-temperature context", "/mini-split-not-heating/"], ["Water leak", "Condensate, drainage, filter, and frozen-coil clues", "/mini-split-leaking-water/"], ["Will not start", "Power, timer, remote, delay, and protection states", "/mini-split-not-turning-on/"]].map(([title, copy, path]) => <Link href={path} className="pathway-card" key={path}><span>SYMPTOM</span><h3>{title}</h3><p>{copy}</p><em>Follow the checks →</em></Link>)}</div>
      </section>
      <section className="home-section equipment-section">
        <div className="equipment-copy"><span className="eyebrow">Equipment map</span><h2>Built beyond one equipment category</h2><p>The initial bench focuses on ductless mini-splits and heat pumps. The route and content system is ready for central air, furnaces, thermostats, air handlers, and commercial HVAC without changing the site structure.</p><Link className="button secondary" href="/equipment/">Explore equipment</Link></div>
        <div className="equipment-list"><Link href="/equipment/"><span>01</span><strong>Ductless mini-splits</strong><small>Active</small></Link><Link href="/equipment/"><span>02</span><strong>Heat pumps</strong><small>Active</small></Link><Link href="/equipment/"><span>03</span><strong>Controls &amp; remotes</strong><small>Active</small></Link><Link href="/equipment/"><span>04</span><strong>Central &amp; commercial</strong><small>Architecture ready</small></Link></div>
      </section>
      <section className="home-section latest-section"><div className="section-heading"><div><span className="eyebrow">Bench notes</span><h2>Useful starting guides</h2></div></div><div className="card-grid">{articles.slice(-6).reverse().map((article) => <ArticleCard article={article} key={article.path} />)}</div></section>
      <section className="method-band"><div><span className="eyebrow">How HVAC Bench works</span><h2>A citation is part of the diagnostic, not decoration.</h2></div><p>Every technical page states the product scope, preserves uncertainty, links its sources, and places hazardous testing on the technician side of the line.</p><Link className="button light" href="/sources-methodology/">Read our research method</Link></section>
    </main>
  );
}

