import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/seo";

const PATH = "/affiliate-disclosure/";

export const metadata: Metadata = pageMetadata({
  title: "Affiliate disclosure",
  description:
    "How HVAC Bench earns, what an affiliate link is, why commission never changes a recommendation, and the FTC, UK CAP, and EU rules this disclosure is written to meet.",
  path: PATH,
});

export default function AffiliateDisclosurePage() {
  return (
    <TrustPage
      title="Affiliate disclosure"
      eyebrow="Commercial transparency"
      intro="Some links on this site may earn a commission if you buy something after clicking them. It costs you nothing, it never changes what a page says, and this page explains the arrangement in full."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "The short version",
          paragraphs: [
            "HVAC Bench may participate in affiliate programmes, including the Amazon Associates Programme and manufacturer or retailer programmes. When a page carries an affiliate link and you buy through it, the retailer pays us a small percentage of the sale. Your price is the same either way.",
            "As an Amazon Associate, we earn from qualifying purchases where that programme is in use.",
          ],
        },
        {
          title: "Why this cannot influence the content",
          paragraphs: [
            "The rule is simple and it is not negotiable: commission has no part in what a technical page concludes.",
            "If the correct answer is that a part is under warranty and should be replaced by the installer at no cost, that is what the page says. If the correct answer is that the cheapest option is adequate, the page says that. If a product we could earn from is the wrong choice for your system, the page says so and links to nothing.",
            "Recommendations are ordered by what suits the reader, never by what pays. Comparisons declare their criteria before any conclusion, so you can check the reasoning against the ranking.",
          ],
        },
        {
          title: "Where disclosure appears",
          bullets: [
            "On any page containing affiliate links, before the first such link rather than buried at the foot of the page.",
            "In comparison and recommendation pages, as part of the criteria section.",
            "Here, in full, linked from the footer of every page on the site.",
          ],
        },
        {
          title: "What we do not do",
          bullets: [
            "We do not accept payment for placement, ranking, or inclusion in a comparison.",
            "We do not publish sponsored posts, paid guest articles, or paid link insertions, and we do not sell links on existing pages.",
            "We do not accept payment from manufacturers to review, alter, or remove technical content.",
            "We do not use affiliate links inside safety guidance, where a purchase prompt has no business being.",
          ],
        },
        {
          title: "The rules this is written to meet",
          paragraphs: [
            "United States readers: the Federal Trade Commission requires clear and conspicuous disclosure of material connections under its Endorsement Guides, which is why disclosure sits near the link rather than only in the footer.",
            "United Kingdom readers: the Consumer Protection from Unfair Trading Regulations and the CAP Code require advertising to be identifiable as such.",
            "European Union readers: the Unfair Commercial Practices Directive and consumer protection rules in each member state impose equivalent requirements.",
          ],
        },
        {
          title: "Questions about a specific link",
          paragraphs: [
            `If you want to know whether a particular link earns a commission, ask at ${CONTACT_EMAIL} and we will tell you straight. If you would rather not use an affiliate link at all, search for the product directly; it makes no difference to the advice on the page.`,
          ],
        },
      ]}
    />
  );
}
