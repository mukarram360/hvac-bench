import type { Metadata } from "next";
import Link from "next/link";

import { AssistantConsole } from "@/components/assistant-console";
import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { getErrorCodeArticles, libraryTotals } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const PATH = "/ask/";

export const metadata: Metadata = pageMetadata({
  title: "Ask HVAC Bench: error codes and symptoms answered",
  description:
    "Ask about an error code, a symptom, or a brand and get a short answer drawn from published HVAC Bench references, with the page it came from.",
  path: PATH,
  keywords: ["hvac question", "error code lookup", "mini split help"],
});

export default function AskPage() {
  const totals = libraryTotals();
  const codes = getErrorCodeArticles().slice(0, 6);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Ask", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Ask HVAC Bench",
            description:
              "A question box that answers from published HVAC Bench references and says when a question is not covered.",
            path: PATH,
            breadcrumbs,
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <PageHead
        eyebrow="Assistant"
        title="Ask HVAC Bench"
        description="Type the code on the display or describe what the system is doing. The answer comes from our published references, and if we have not covered it, it will say so rather than guess."
        breadcrumbs={breadcrumbs}
        meta={[`${totals.references} references indexed`, "Answers cite the page they came from"]}
      />

      <section className="band">
        <div className="container">
          <div className="plate plate-ink">
            <div className="plate-head">
              <span>Question</span>
              <span>Answers from published references only</span>
            </div>
            <div className="plate-body">
              <AssistantConsole />
            </div>
          </div>
        </div>
      </section>

      <section className="band band-alt page-tail">
        <div className="container prose">
          <h2>What it can and cannot do</h2>
          <p>
            This assistant reads the HVAC Bench library and nothing else. It does not browse the
            web, and it does not write an answer of its own, so it cannot invent a code meaning that
            no manufacturer publishes. When a question falls outside what we have published, the
            honest answer is that we do not have it, and that is what you will get.
          </p>
          <ul className="check-list">
            <li>
              It prefers an exact brand and code match over a general symptom page, because the same
              characters mean different things between manufacturers.
            </li>
            <li>
              Where a code is used by several brands, it asks which one rather than picking a
              meaning.
            </li>
            <li>
              It will not describe refrigerant handling, live electrical testing, or anything behind
              an electrical cover, because those are not homeowner procedures.
            </li>
            <li>
              It does not cover pricing, quotes, or installer recommendations. HVAC Bench does not
              offer those services and will not pretend to.
            </li>
          </ul>

          <h2>Codes people look up most</h2>
          <ul className="plate-list tracked-families">
            {codes.map((article) => (
              <li key={article.path}>
                <Link href={article.path}>
                  {article.title}
                  <span>{article.errorCode}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
