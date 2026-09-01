import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/seo";

const PATH = "/corrections/";

export const metadata: Metadata = pageMetadata({
  title: "Corrections policy",
  description:
    "How HVAC Bench handles errors: what counts as a correction, how quickly they are made, how they are logged, and how to report one.",
  path: PATH,
});

export default function CorrectionsPage() {
  return (
    <TrustPage
      title="Corrections"
      eyebrow="Accountability"
      intro="Technical writing gets things wrong sometimes. What separates a reference you can trust from one you cannot is what happens next."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "What counts as a correction",
          paragraphs: [
            "A correction is any change that alters the meaning of a page: a code definition that was wrong, a model list that included equipment the source did not cover, a safety boundary drawn in the wrong place, or a cause described with more certainty than the documentation supports.",
            "Fixing a typo, improving a sentence, or adding a link is an update rather than a correction, and is not logged individually.",
          ],
        },
        {
          title: "How we handle them",
          bullets: [
            "Reports involving safety are checked the day they arrive, and the page is amended or withdrawn immediately if the report is credible.",
            "Other reports are checked against the manufacturer documentation within the week.",
            "If a claim cannot be verified, the claim comes off the page. We do not leave unverifiable statements published while we investigate.",
            "Where a correction changes what a reader should do, the page carries a dated note explaining what changed.",
          ],
        },
        {
          title: "Withdrawing a page",
          paragraphs: [
            "Occasionally the right answer is that a page should not exist, usually because the source we relied on turned out not to cover the equipment we applied it to.",
            "In that case the page is withdrawn rather than quietly rewritten, and the URL explains what happened and points to the material that is still accurate.",
          ],
        },
        {
          title: "The log",
          paragraphs: [
            "Corrections that change the meaning of a page are recorded here with the date, the page, and a short description of what was wrong.",
            "No corrections have been logged since the current library was published on September 1, 2026. When they are, they will appear in this section rather than being folded silently into an edit.",
          ],
        },
        {
          title: "Reporting an error",
          paragraphs: [
            `Send the page address, what you believe is wrong, and the source you are working from if you have one, to ${CONTACT_EMAIL}. Corrections are read before anything else in the inbox.`,
            "If you are a manufacturer and a page misrepresents your documentation, tell us and we will fix it. We would rather be corrected than be wrong.",
          ],
        },
      ]}
    />
  );
}
