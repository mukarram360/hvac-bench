import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { pageMetadata } from "@/lib/seo";

const PATH = "/sources-methodology/";

export const metadata: Metadata = pageMetadata({
  title: "Sources and methodology",
  description:
    "How HVAC Bench researches a page: the source hierarchy, how product scope is established, how claims are verified, and what happens when documentation does not exist.",
  path: PATH,
});

export default function SourcesMethodologyPage() {
  return (
    <TrustPage
      title="Sources and methodology"
      eyebrow="Research method"
      intro="This page describes exactly how a reference gets built, so you can judge whether to trust the answer rather than taking our word for it."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "The source hierarchy",
          paragraphs: [
            "Sources are ranked, and a lower-ranked source never overrides a higher one.",
          ],
          bullets: [
            "Manufacturer service manuals. The most specific documentation available: code tables, wiring diagrams, pressure data, and diagnostic sequences written for technicians.",
            "Manufacturer installation and operation manuals. Authoritative for normal behaviour, maintenance intervals, and owner-facing indicators.",
            "Official manufacturer support articles and knowledge bases. Useful and current, but often written for a broader product range than a service manual.",
            "Government and standards-body guidance. Used for cross-brand principles such as heat-pump behaviour, airflow, efficiency measurement, and refrigerant regulation.",
          ],
        },
        {
          title: "Establishing product scope",
          paragraphs: [
            "Before a code definition is written, we identify which models the source document covers. That list becomes the scope statement on the page.",
            "If a service manual covers three capacities in one series, the page says those three capacities. It does not say the brand. Generalising a definition beyond the documentation that supports it is how a reader follows correct-looking advice to the wrong conclusion, and it is the failure this rule exists to prevent.",
          ],
        },
        {
          title: "Turning documentation into a page",
          bullets: [
            "The code or symptom is located in the source and the manufacturer's own description is read in full, including any conditions attached to it.",
            "The description is rewritten in plain language without changing its meaning or narrowing its conditions.",
            "Causes are separated from symptoms, and both are separated from actions.",
            "Actions are split into checks that are safe for an owner and work that requires a technician, using the conservative test described in the editorial policy.",
            "The page records which documentation class the definition came from and the model scope that document covers. OEM evidence, document locations, and scope notes are verified and retained internally, not publicly linked.",
          ],
        },
        {
          title: "What we do not do",
          bullets: [
            "We do not copy code tables wholesale from manufacturer documents. Definitions are paraphrased, scoped, and attributed.",
            "We do not merge code tables from several brands into one universal list, because the resulting list would be wrong for most readers.",
            "We do not publish a definition sourced only from a forum, a retailer blog, or a video, however plausible it sounds.",
            "We do not describe procedures that require certification, instruments, or exposure to live electrical parts, refrigerant, or combustion products.",
          ],
        },
        {
          title: "When documentation does not exist",
          paragraphs: [
            "Some codes are not available in public manufacturer documentation. In that case we either leave the page unwritten or publish only what can be established, clearly labelled, with the gap named.",
            "Saying that a definition could not be verified is more useful than inventing one, and it tells a reader where the published evidence stops instead of inviting them to follow a guess.",
          ],
        },
        {
          title: "Measurement conventions",
          paragraphs: [
            "Capacity appears in BTU per hour and kilowatts. Temperatures appear in Fahrenheit and Celsius. Pressures are labelled with their units, and efficiency ratings are labelled with the standard they were measured under, because SEER2 and HSPF2 in the United States and SCOP and SEER under European testing are not interchangeable numbers.",
          ],
        },
        {
          title: "Review and re-verification",
          paragraphs: [
            "Each page records the date its sources were last checked. Pages are re-verified when manufacturer documentation changes, when a reader reports a discrepancy, and on a rolling schedule.",
            "Corrections that change the meaning of a page are logged publicly, with what changed and why.",
          ],
        },
      ]}
    />
  );
}
