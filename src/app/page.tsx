import type { Metadata } from "next";
import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { AssistantConsole } from "@/components/assistant-console";
import { JsonLd } from "@/components/json-ld";
import { PROBLEM_TYPES } from "@/content/taxonomy";
import {
  getAllArticles,
  getAllBrands,
  getArticlesByEquipment,
  getErrorCodeArticles,
  isBrandIndexable,
  libraryTotals,
} from "@/lib/content";
import { SITE_DESCRIPTION, pageMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HVAC error codes and troubleshooting | HVAC Bench",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "hvac error codes",
    "mini split troubleshooting",
    "heat pump not heating",
    "hvac fault code lookup",
    "mini split not cooling",
  ],
});

const SYMPTOM_PATHS = [
  {
    title: "It is not cooling",
    copy: "Airflow, filters, ice on the coil, settings, and the fault codes that explain a system running without cooling.",
    href: "/mini-split-not-cooling/",
  },
  {
    title: "It is not heating",
    copy: "Defrost behaviour, start delays, outdoor temperature limits, and what counts as normal on a heat pump in winter.",
    href: "/mini-split-not-heating/",
  },
  {
    title: "It is leaking water",
    copy: "Condensate path, drain blockages, filter loading, and the frozen-coil pattern that produces water indoors.",
    href: "/mini-split-leaking-water/",
  },
  {
    title: "It will not start",
    copy: "Power, remotes, timers, protection delays, and the states a system enters deliberately before it will run again.",
    href: "/mini-split-not-turning-on/",
  },
];

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5 16 5v5c0 3.4-2.4 6.3-6 7.5-3.6-1.2-6-4.1-6-7.5V5l6-2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m7.4 10 1.9 1.9 3.4-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="3.5" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7.5h14M7 7.5v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LimitIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v4.4M10 13.4h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const brands = getAllBrands();
  const articles = getAllArticles();
  const totals = libraryTotals();
  const codeArticles = getErrorCodeArticles();
  const featuredCodes = codeArticles.slice(0, 6);
  const coveredBrands = brands.filter((brand) => isBrandIndexable(brand.slug));
  const brandTiles = [...coveredBrands, ...brands.filter((brand) => !isBrandIndexable(brand.slug))].slice(0, 10);
  const startingGuides = articles.filter((article) => !article.errorCode).slice(0, 3);

  const equipmentRows = [
    { label: "Ductless mini-splits", slug: "ductless-mini-split", note: "Single and multi-zone" },
    { label: "Heat pumps", slug: "heat-pump", note: "Air source, ducted and hydronic" },
    { label: "Controls and thermostats", slug: "controls-thermostats", note: "Remotes and smart controls" },
    { label: "Light commercial", slug: "light-commercial", note: "VRF, cassettes, rooftop units" },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={webPageJsonLd({
          title: "HVAC error codes, diagnostics, and troubleshooting",
          description: SITE_DESCRIPTION,
          path: "/",
        })}
      />

      <section className="container hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Evidence-backed HVAC reference</span>
            <h1>
              Find the fault code.
              <br />
              Then find out <em>what it means</em>.
            </h1>
            <p className="hero-lede">
              Error codes, symptoms, and service documentation for ductless mini-splits and heat
              pumps, checked against manufacturer literature and written with the product scope and
              the safety limit stated on the page.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/error-codes/">
                Browse error codes
              </Link>
              <Link className="btn btn-secondary" href="/troubleshooting/">
                Start from a symptom
              </Link>
            </div>
            <div className="hero-chips">
              <span className="hero-chips-label">Frequently looked up</span>
              {featuredCodes.slice(0, 5).map((article) => (
                <Link className="chip" key={article.path} href={article.path}>
                  {article.errorCode}
                  <span>{article.brand}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="plate plate-ink">
            <div className="plate-head">
              <span>Ask HVAC Bench</span>
              <span>
                {totals.references} references · {totals.brandsCovered} brands covered
              </span>
            </div>
            <div className="plate-body">
              <AssistantConsole compact />
              <p className="assistant-meta">
                Answers come from published references only.{" "}
                <Link href="/search/">Search the index</Link> if you would rather browse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="assurance" aria-label="Editorial standards">
        <div className="container assurance-inner">
          <div>
            <ScopeIcon />
            <strong>Primary sources first</strong>
            <p>
              Every technical claim is written from a manufacturer service manual, operation
              manual, or official support article, and each page states which documentation class
              it was checked against.
            </p>
          </div>
          <div>
            <ShieldIcon />
            <strong>Product scope stated</strong>
            <p>
              A code means what the documentation for that product family says it means. Pages name
              the models they cover instead of implying every system is the same.
            </p>
          </div>
          <div>
            <LimitIcon />
            <strong>The safety line is drawn</strong>
            <p>
              Checks a homeowner can make safely are separated from work that requires isolation,
              instruments, or refrigerant certification.
            </p>
          </div>
        </div>
      </section>

      <section className="container band">
        <div className="section-head">
          <div>
            <span className="eyebrow">Start here</span>
            <h2>What is the system actually doing?</h2>
            <p>
              Most people arrive with a behaviour rather than a code. Pick the one that matches, and
              the guide narrows it from there.
            </p>
          </div>
          <Link className="link-arrow" href="/troubleshooting/">
            All symptoms
          </Link>
        </div>
        <div className="grid grid-4">
          {SYMPTOM_PATHS.map((path) => (
            <Link className="path-card" key={path.href} href={path.href}>
              <h3>{path.title}</h3>
              <p>{path.copy}</p>
              <span className="link-arrow">Follow the checks</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="band-ink">
        <div className="container band">
          <div className="section-head">
            <div>
              <span className="eyebrow">Code desk</span>
              <h2>Codes people look up at eleven at night</h2>
              <p>
                Each reference states the family the code was documented for, what the board
                detected, and where the diagnosis stops being a homeowner task.
              </p>
            </div>
            <Link className="link-arrow" href="/error-codes/">
              Open the code index
            </Link>
          </div>
          <div className="code-grid">
            {featuredCodes.map((article) => (
              <Link className="code-card" key={article.path} href={article.path}>
                <span>{article.errorCode}</span>
                <div>
                  <strong>{article.title.split(":")[0]}</strong>
                  <small>{article.problemType.replaceAll("-", " ")}</small>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container band">
        <div className="section-head">
          <div>
            <span className="eyebrow">Manufacturer index</span>
            <h2>Start with the name on the unit</h2>
            <p>
              Codes are published per manufacturer and often per series, so the brand hub is the
              right first stop when you have a model number in front of you.
            </p>
          </div>
          <Link className="link-arrow" href="/brands/">
            All {brands.length} brands
          </Link>
        </div>
        <div className="brand-grid">
          {brandTiles.map((brand) => (
            <Link className="brand-tile" key={brand.slug} href={`/brands/${brand.slug}/`}>
              <span className="brand-region">{brand.regions.map((region) => region.toUpperCase()).join(" · ")}</span>
              <strong>{brand.name}</strong>
              <small>{brand.series[0] ?? brand.equipmentTypes[0].replaceAll("-", " ")}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="band-alt">
        <div className="container band">
          <div className="section-head">
            <div>
              <span className="eyebrow">Equipment map</span>
              <h2>Built for more than one category</h2>
              <p>
                Mini-splits and heat pumps carry the current library. The route structure, schema,
                and internal linking already hold central air, furnaces, boilers, controls, and light
                commercial work without a rebuild.
              </p>
            </div>
            <Link className="link-arrow" href="/equipment/">
              Equipment index
            </Link>
          </div>
          <ul className="doc-list">
            {equipmentRows.map((row) => {
              const count = getArticlesByEquipment(row.slug).length;
              return (
                <li key={row.slug}>
                  <Link href={`/equipment/${row.slug}/`}>
                    <span>
                      <strong>{row.label}</strong>
                      <p>{row.note}</p>
                    </span>
                    <small>{count > 0 ? `${count} published` : "In progress"}</small>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container band">
        <div className="section-head">
          <div>
            <span className="eyebrow">Working references</span>
            <h2>Guides worth reading before you call anyone</h2>
            <p>
              Symptom guides that cover the checks a competent owner can make, and explain what a
              technician will do next.
            </p>
          </div>
          <Link className="link-arrow" href="/guides/">
            All guides
          </Link>
        </div>
        <div className="grid grid-3">
          {startingGuides.map((article) => (
            <ArticleCard article={article} key={article.path} />
          ))}
        </div>
      </section>

      <section className="method">
        <div className="container method-inner">
          <div>
            <span className="eyebrow">How this site works</span>
            <h2>Evidence stays traceable without becoming an outbound journey</h2>
          </div>
          <p>
            Pages state the equipment they apply to and keep the uncertainty found in the source.
            OEM evidence is verified and retained internally, not publicly linked, while the page
            names the documentation class and scope used. Hazardous testing stays on the
            technician&apos;s side of the line. Where {Object.keys(PROBLEM_TYPES).length} symptom
            families meet {brands.length} manufacturers, that discipline keeps the answer honest.
          </p>
          <Link className="btn btn-inverse" href="/sources-methodology/">
            Read the method
          </Link>
        </div>
      </section>
    </main>
  );
}
