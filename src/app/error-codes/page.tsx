import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { getAllBrands, getErrorCodeArticles } from "@/lib/content";
import { allArticlesSourceVerified } from "@/lib/provenance";
import { breadcrumbJsonLd, collectionPageJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/error-codes/";

export const metadata: Metadata = pageMetadata({
  title: "HVAC error code index: what the code on your display means",
  description:
    "Look up mini-split and heat-pump error codes by manufacturer. Each reference states the product family it was documented for, what the control board detected, and where the diagnosis stops.",
  path: PATH,
  keywords: [
    "hvac error codes",
    "mini split error codes",
    "heat pump fault codes",
    "air conditioner error code list",
  ],
});

const FAQS = [
  {
    question: "Does the same error code mean the same thing on every brand?",
    answer:
      "No. Codes are defined by the manufacturer for a specific product family. E1 on one system can describe a communication fault and on another a sensor fault, and the same brand can reuse a code with a different meaning across generations. Always match the code to the documentation for your exact model.",
  },
  {
    question: "Can I clear an error code by turning the power off and on?",
    answer:
      "Cycling power can clear a displayed code, but it does not address the trigger. If the condition remains, the code can return after operation resumes. Repeatedly resetting a protection code without finding the cause allows the underlying condition to continue.",
  },
  {
    question: "Where do I find the model number I need to look up a code?",
    answer:
      "On the data plate: a printed or etched label on the side or rear of the outdoor unit and on the chassis of the indoor unit, behind or beneath the front panel. It lists the full model and serial number, electrical ratings, and the refrigerant charge.",
  },
  {
    question: "Is an error code always a fault?",
    answer:
      "Not always. Some codes report a protection state, which means the system stopped itself deliberately because a measured value moved outside its safe range. Others report normal states such as defrost. The reference for your model will say which category a code falls into.",
  },
];

export default function ErrorCodesPage() {
  const articles = getErrorCodeArticles();
  const brands = getAllBrands();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Error codes", path: PATH },
  ];

  const byBrand = new Map<string, typeof articles>();
  for (const article of articles) {
    const key = article.brand ?? "other";
    byBrand.set(key, [...(byBrand.get(key) ?? []), article]);
  }

  return (
    <main id="main-content">
      <JsonLd
        data={[
          collectionPageJsonLd({
            title: "HVAC error code index",
            description:
              "Manufacturer-scoped error code references for ductless mini-splits and heat pumps.",
            path: PATH,
            items: articles.map((article) => ({ name: article.title, path: article.path })),
          }),
          breadcrumbJsonLd(breadcrumbs),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHead
        eyebrow="Code desk"
        title="HVAC error code index"
        description="A code is the control board reporting what it measured. This index groups published references by manufacturer, and every page states the product family the definition came from rather than treating a code as universal."
        breadcrumbs={breadcrumbs}
        meta={[
          `${articles.length} code references`,
          `${byBrand.size} manufacturers`,
          articles.length === 0
            ? "Source verification pending"
            : allArticlesSourceVerified(articles)
              ? "Source verified"
              : "Includes pages awaiting source verification",
        ]}
        aside={
          <div className="plate">
            <div className="plate-head">
              <span>Reading a code</span>
            </div>
            <dl className="plate-rows">
              <div>
                <dt>Step 1</dt>
                <dd>Photograph the display while the code is visible.</dd>
              </div>
              <div>
                <dt>Step 2</dt>
                <dd>Record the indoor and outdoor model numbers from the data plate.</dd>
              </div>
              <div>
                <dt>Step 3</dt>
                <dd>Note what the system was doing when the code appeared.</dd>
              </div>
            </dl>
          </div>
        }
      />

      <div className="container page-tail">
        {[...byBrand.entries()].map(([brandSlug, brandArticles]) => {
          const brand = brands.find((entry) => entry.slug === brandSlug);
          return (
            <section className="band-tight" key={brandSlug}>
              <div className="section-head">
                <div>
                  <span className="eyebrow">{brand?.name ?? "Cross-brand"}</span>
                  <h2>{brand ? `${brand.name} codes` : "Cross-brand codes"}</h2>
                </div>
                {brand && (
                  <Link className="link-arrow" href={`/brands/${brand.slug}/`}>
                    {brand.name} hub
                  </Link>
                )}
              </div>
              <div className="code-grid code-grid-light">
                {brandArticles.map((article) => (
                  <Link className="code-card" key={article.path} href={article.path}>
                    <span>{article.errorCode}</span>
                    <div>
                      <strong>{article.title.split(":")[1]?.trim() ?? article.title}</strong>
                      <small>{article.problemType.replaceAll("-", " ")}</small>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <section className="band-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">Common questions</span>
              <h2>How error codes actually work</h2>
            </div>
          </div>
          {FAQS.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </section>

        <section className="empty-state">
          <h2>Your code is not listed yet</h2>
          <p>
            The index grows in the order that real lookups arrive. If your code is missing, a
            symptom reference may cover the same underlying behaviour, and the manufacturer hub for
            your brand lists what has been verified so far.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/troubleshooting/">
              Search by symptom
            </Link>
            <Link className="btn btn-secondary" href="/brands/">
              Browse manufacturers
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
