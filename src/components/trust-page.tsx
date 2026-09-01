import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "./json-ld";
import { PageHead } from "./page-head";

export type TrustSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  children?: React.ReactNode;
};

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Shared template for policy, standards, and company pages. Long documents get
 * a jump list rather than one unbroken column, because these pages are read by
 * people checking one specific thing.
 */
export function TrustPage({
  title,
  eyebrow,
  intro,
  path,
  updated,
  sections,
  children,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  path: string;
  updated: string;
  sections: TrustSection[];
  children?: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          webPageJsonLd({ title, description: intro, path, breadcrumbs }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <PageHead
        eyebrow={eyebrow}
        title={title}
        description={intro}
        breadcrumbs={breadcrumbs}
        meta={[`Last updated ${updated}`]}
      />
      <div className="container doc-layout">
        <aside className="doc-aside">
          <div className="plate">
            <div className="plate-head">
              <span>On this page</span>
            </div>
            <nav className="toc" aria-label="Sections">
              <ol>
                {sections.map((section) => (
                  <li key={section.title}>
                    <a href={`#${sectionId(section.title)}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className="plate">
            <div className="plate-head">
              <span>HVAC Bench standard</span>
            </div>
            <div className="plate-body">
              <p>
                Clear sourcing, honest scope, and safety before convenience. If a page cannot meet
                that, it does not publish.
              </p>
            </div>
          </div>
        </aside>
        <article className="doc-content prose">
          {sections.map((section) => (
            <section key={section.title} id={sectionId(section.title)}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.children}
            </section>
          ))}
          {children}
        </article>
      </div>
    </main>
  );
}
