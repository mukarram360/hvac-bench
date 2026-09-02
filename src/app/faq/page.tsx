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
        reference: { label: "Error code index", href: "/error-codes/" },
      },
      {
        question: "Will turning the power off and on clear the fault?",
        answer:
          "Cutting power clears the display on any system that does not store fault history, and where the trigger really was a single electrical event that can be the end of it. If the code returns, the condition is still present and the reset has only removed the evidence. Note the code before you cut power.",
        reference: { label: "When a system will not start", href: "/mini-split-not-turning-on/" },
      },
      {
        question: "Why do two brands use the same code for different faults?",
        answer:
          "Because there is no industry-wide code standard. Each manufacturer defines codes for its own control platform, and can change them between generations. That is why every reference on this site names the product family the definition came from.",
        reference: { label: "Error code index", href: "/error-codes/" },
      },
    ],
  },
  {
    heading: "Normal behaviour that looks like a fault",
    faqs: [
      {
        question: "Steam is coming off my outdoor unit in winter. Is that a problem?",
        answer:
          "Not on its own. Heat pumps run a defrost cycle that briefly reverses operation to melt frost from the outdoor coil, and the steam is that frost evaporating. Heating pauses for a few minutes and the fan may stop. It becomes a problem if the unit ices over completely and does not clear, or if defrost runs and repeats without the coil clearing.",
        reference: { label: "Outdoor unit iced over", href: "/heat-pump-outdoor-unit-iced-over/" },
      },
      {
        question: "My mini-split blows cool air when I first turn on heating.",
        answer:
          "Manufacturers publish a cold-air prevention or hot-start delay that holds the indoor fan until the coil has warmed, and some systems add a further delay after any start or mode change. Cool air for a minute or two at start-up is the delay doing its job. Cool air that continues once the system is running is not.",
        reference: { label: "Mini-split not heating", href: "/mini-split-not-heating/" },
      },
      {
        question: "Water is dripping from the outdoor unit in heating mode.",
        answer:
          "That is condensate and defrost meltwater leaving the outdoor coil, which is normal in heating. Water appearing from the indoor unit is not, and points to the condensate path, the filter, or a frozen coil.",
        reference: { label: "Mini-split leaking water", href: "/mini-split-leaking-water/" },
      },
    ],
  },
  {
    heading: "Maintenance, cost, and service",
    faqs: [
      {
        question: "How often should filters be cleaned?",
        answer:
          "Follow the interval printed in the operation manual for your own model, because that is the figure the manufacturer stands behind. Ductless manuals that state one for washable filters put it in the range of two to four weeks in regular use, with shorter intervals in dusty homes and homes with pets. The reason the interval exists is airflow: a loaded filter restricts air across the coil, and coil airflow is what capacity, energy use, and icing depend on.",
        reference: { label: "How to clean a mini-split filter", href: "/mini-split-filter-cleaning/" },
      },
      {
        question: "Does a system that is low on refrigerant need topping up each year?",
        answer:
          "No. Refrigerant is not consumed in normal operation, so a system that loses charge has a leak. Repeated top-ups without finding the leak are both expensive and, under UK and EU F-Gas rules and US EPA regulations, not an acceptable substitute for repair.",
        reference: { label: "Mini-split not cooling", href: "/mini-split-not-cooling/" },
      },
      {
        question: "Why is my heat pump running constantly in cold weather?",
        answer:
          "Long run times at low outdoor temperatures are how heat pumps are designed to work. Steady low-output operation is more efficient than short bursts, which is also why a system that starts and stops every few minutes is the pattern worth investigating. It becomes a concern when the system cannot hold the set temperature, or when auxiliary or immersion heat runs far more than in previous seasons.",
        reference: { label: "Short cycling explained", href: "/mini-split-short-cycling/" },
      },
      {
        question: "Do you recommend contractors or sell equipment?",
        answer:
          "No. HVAC Bench does not sell equipment, take contractor listings, or accept payment for placement. Where a link earns a commission it is disclosed on the page and in the affiliate disclosure, and it never changes what a technical page says.",
        reference: { label: "Affiliate disclosure", href: "/affiliate-disclosure/" },
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
            description: "Answers to recurring HVAC Bench questions.",
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
        description="Short answers to recurring reader questions. Each one links to the reference that carries the full diagnosis, because a question worth asking twice deserves a page rather than a paragraph."
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
                  <p className="faq-reference">
                    Full reference: <Link href={faq.reference.href}>{faq.reference.label}</Link>
                  </p>
                </div>
              </details>
            ))}
          </section>
        ))}

        <section className="empty-state">
          <h2>Question not answered here?</h2>
          <p>
            Send it with the model number from the data plate. Questions that come up repeatedly
            become reference pages rather than another entry on this list, and the ones that need a
            manufacturer document we do not hold get told so rather than guessed at.
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
