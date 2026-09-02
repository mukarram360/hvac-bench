import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { pageMetadata } from "@/lib/seo";

const PATH = "/editorial-policy/";

export const metadata: Metadata = pageMetadata({
  title: "Editorial policy",
  description:
    "The rules HVAC Bench publishes under: sourcing, product scope, safety boundaries, review status, independence from manufacturers, and how pages are actually produced.",
  path: PATH,
});

export default function EditorialPolicyPage() {
  return (
    <TrustPage
      title="Editorial policy"
      eyebrow="How pages are made"
      intro="These are the rules a page has to satisfy before it publishes. They exist because technical information that is confidently wrong is more dangerous than no information at all."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "Every technical claim names its source",
          paragraphs: [
            "A page cannot state what a code means, what a component does, or what a manufacturer requires without a source that says so. OEM evidence is verified and retained internally, not publicly linked. The public page names the documentation class and product scope it supports.",
            "We prefer manufacturer service manuals, then installation and operation manuals, then official manufacturer support articles, then government and standards-body guidance. Forum posts, retailer blog content, and video walkthroughs are not treated as sources.",
          ],
        },
        {
          title: "Scope is stated, never implied",
          paragraphs: [
            "Codes are defined per product family. A definition that applies to one series is published as applying to that series, with the models listed, and not generalised across a brand.",
            "Where a manufacturer publishes different meanings for the same code across generations, the page says so. Where documentation does not exist, the page says that too, and does not fill the gap with a plausible guess.",
          ],
        },
        {
          title: "The safety boundary is part of the content",
          paragraphs: [
            "Each technical page separates checks that an owner can carry out safely from work that requires isolation, instruments, or certification. That line is drawn conservatively.",
            "Anything involving opening electrical compartments, working on a refrigerant circuit, testing under load, or handling combustion components is technician work, and the page says so instead of describing how to do it.",
          ],
        },
        {
          title: "Uncertainty survives editing",
          paragraphs: [
            "If a source is ambiguous, the page reports the ambiguity. If two manufacturer documents disagree, the page shows both and says which applies to which equipment.",
            "Writing that reads as more certain than the evidence supports is treated as an error and corrected like any other.",
          ],
        },
        {
          title: "Review status is visible",
          paragraphs: [
            "Pages carry one of two states. Source verified means the technical claims have been checked against the retained documentation. Editorial review means the page has been written and edited but is awaiting that verification.",
            "Where a qualified technician or engineer has reviewed a page, they are named on it with their credentials. We do not invent bylines, and we do not describe experience the desk does not have.",
          ],
        },
        {
          title: "Independence from manufacturers and advertisers",
          paragraphs: [
            "HVAC Bench is not affiliated with, endorsed by, or sponsored by any manufacturer named on the site. Brand names and model numbers appear for identification only, and remain the property of their owners.",
            "No manufacturer, retailer, contractor, or advertiser reviews content before publication or has any influence over what a page says. Affiliate links, where used, are disclosed and never change a technical conclusion.",
          ],
        },
        {
          title: "How this site is produced, including the AI part",
          paragraphs: [
            "Pages are researched and drafted with AI assistance, working from the manufacturer and regulator documents listed in the evidence record on each page. That is stated here because it is true and because you are entitled to know it, not as a disclaimer bolted on after the fact.",
            "What the assistance does not do is decide what is true. A claim reaches a page only if it can be traced to a document in the source registry, and where the documentation does not settle a question the page says so instead of filling the gap. The pages on lifespan and on brand comparisons are the clearest examples: both refuse to publish figures that no cited source supports.",
            "Before anything deploys, the repository runs automated checks that a person can inspect and re-run: schema validation on every page, a prose linter carrying this site's banned phrases and its rule against frequency claims, a cross-page similarity audit that fails if two pages share a paragraph or a sentence, an internal link check, and a full production build. Those checks catch template writing and unsupported wording. They cannot verify a technical fact, which is why the source list on each page is the thing to judge it by.",
            "An operator reviews and publishes. Where a qualified technician or engineer has reviewed a page, that person is named on it. No page claims a review that did not happen.",
          ],
        },
        {
          title: "Updating and dating",
          paragraphs: [
            "Every technical page shows when it was last reviewed. A review means the sources were re-checked and the content still matches them, not simply that a date was changed.",
            "Pages are revisited when a manufacturer updates its documentation, when a reader reports a problem, and on a rolling schedule as the library grows. Substantive changes are logged on the corrections page.",
          ],
        },
      ]}
    />
  );
}
