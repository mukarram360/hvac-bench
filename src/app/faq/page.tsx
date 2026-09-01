import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const PATH = "/faq/";

export const metadata: Metadata = pageMetadata({
  title: "HVAC questions people actually ask",
  description:
    "Straight answers on error codes, resets, refrigerant, running costs, filter cleaning, and when a heat pump is behaving normally rather than failing.",
  path: PATH,
  keywords: ["hvac faq", "mini split questions", "heat pump questions", "is my heat pump broken"],
});

const GROUPS = [
  {
    heading: "Error codes and resets",
    faqs: [
      {
        question: "My unit shows a code. Is it safe to keep running it?",
        answer:
          "If the system has stopped itself, leave it stopped until you know why. A protection code means a measured value moved outside a safe range, and forcing the system back on repeats the condition that triggered it. If you smell burning, see scorching, or hear grinding, switch it off at the isolator and call a technician.",
      },
      {
        question: "Will turning the power off and on clear the fault?",
        answer:
          "It clears the display on most systems, and on a small number of one-off electrical glitches that is genuinely the end of it. If the code returns, the condition is still present and the reset has only removed the evidence. Note the code before you cut power, because some systems do not store history.",
      },
      {
        question: "Why do two brands use the same code for different faults?",
        answer:
          "Because there is no industry-wide code standard. Each manufacturer defines codes for its own control platform, and often changes them between generations. That is why every reference on this site names the product family the definition came from.",
      },
    ],
  },
  {
    heading: "Normal behaviour that looks like a fault",
    faqs: [
      {
        question: "Steam is coming off my outdoor unit in winter. Is that a problem?",
        answer:
          "Usually not. Heat pumps run a defrost cycle that briefly reverses operation to melt frost from the outdoor coil, and the steam is that frost evaporating. Heating pauses for a few minutes and the fan may stop. It becomes a problem if the unit ices over completely and does not clear, or if defrost runs constantly.",
      },
      {
        question: "My mini-split blows cool air when I first turn on heating.",
        answer:
          "Most systems hold the indoor fan until the coil warms up, and some run a short delay after any start or mode change. Cool air for a minute or two at start-up is expected. Cool air that continues once the system is running is not.",
      },
      {
        question: "Water is dripping from the outdoor unit in heating mode.",
        answer:
          "That is condensate and defrost meltwater leaving the outdoor coil, which is normal in heating. Water appearing from the indoor unit is not normal and points to the condensate path, the filter, or a frozen coil.",
      },
    ],
  },
  {
    heading: "Maintenance, cost, and service",
    faqs: [
      {
        question: "How often should filters be cleaned?",
        answer:
          "Manufacturers of ductless systems typically specify cleaning the washable filters every two to four weeks in regular use, and more often in dusty homes or with pets. It is the single maintenance task with the largest effect on capacity, energy use, and coil icing.",
      },
      {
        question: "Does a system that is low on refrigerant need topping up each year?",
        answer:
          "No. Refrigerant is not consumed in normal operation, so a system that loses charge has a leak. Repeated top-ups without finding the leak are both expensive and, under UK and EU F-Gas rules and US EPA regulations, not an acceptable substitute for repair.",
      },
      {
        question: "Why is my heat pump running constantly in cold weather?",
        answer:
          "Long run times at low outdoor temperatures are how heat pumps are designed to work. Steady low-output operation is more efficient than short bursts. It becomes a concern when the system cannot hold the set temperature, or when auxiliary or immersion heat is running far more than in previous seasons.",
      },
      {
        question: "Do you recommend contractors or sell equipment?",
        answer:
          "No. HVAC Bench does not sell equipment, take contractor listings, or accept payment for placement. Where a link earns a commission it is disclosed on the page and in the affiliate disclosure, and it never changes what a technical page says.",
      },
    ],
  },
];

export default function FaqPage() {
  const allFaqs = GROUPS.flatMap((group) => group.faqs);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Questions", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          webPageJsonLd({
            title: "HVAC questions people actually ask",
            description: "Answers to the questions readers bring to HVAC Bench most often.",
            path: PATH,
            breadcrumbs,
          }),
          faqJsonLd(allFaqs, PATH),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow="Common questions"
        title="Questions people ask"
        description="The questions that arrive most often, answered the same way the technical pages are: directly, with the reasoning visible, and with the point marked where the answer stops being general and starts depending on your specific equipment."
        breadcrumbs={breadcrumbs}
        meta={[`${allFaqs.length} answers`, "Reviewed with the library"]}
      />

      <div className="container page-tail">
        {GROUPS.map((group) => (
          <section className="band-tight" key={group.heading}>
            <div className="section-head">
              <div>
                <span className="eyebrow">{group.heading}</span>
                <h2>{group.heading}</h2>
              </div>
            </div>
            {group.faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </section>
        ))}

        <section className="empty-state">
          <h2>Question not answered here?</h2>
          <p>
            Send it with the model number from the data plate. Questions that come up repeatedly
            become reference pages, and the ones that need a manufacturer document we do not have get
            told so rather than guessed at.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact/">
              Ask a question
            </Link>
            <Link className="btn btn-secondary" href="/glossary/">
              Check a term
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
