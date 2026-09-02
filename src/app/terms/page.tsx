import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/seo";

const PATH = "/terms/";

export const metadata: Metadata = pageMetadata({
  title: "Terms of use",
  description:
    "The terms covering use of HVAC Bench: what the content is and is not, intellectual property, trademarks, external links, and limitation of liability.",
  path: PATH,
});

export default function TermsPage() {
  return (
    <TrustPage
      title="Terms of use"
      eyebrow="Effective September 1, 2026"
      intro="By using hvac-bench.com you accept these terms. They are written to be read rather than to be impenetrable, and they say plainly what this site is and what it is not."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "What this site provides",
          paragraphs: [
            "HVAC Bench publishes general technical reference information about heating, ventilation, and air conditioning equipment, compiled from manufacturer documentation and public guidance.",
            "It does not provide professional advice for your specific installation, it does not create a technician and client relationship, and it cannot account for the condition of equipment it has never seen. Where this site and your manufacturer documentation disagree, follow the manufacturer.",
          ],
        },
        {
          title: "Using the content",
          bullets: [
            "You may read, print, and share pages for your own use, and link to them freely.",
            "You may quote short extracts with attribution and a link to the page quoted.",
            "You may not republish pages in whole or substantial part, or use the content to train a commercial model, without written permission.",
            "You may not present this content as your own, or as the output of a licensed professional.",
          ],
        },
        {
          title: "Intellectual property and trademarks",
          paragraphs: [
            "The writing, structure, and design of this site belong to HVAC Bench. Manufacturer documentation quoted or referenced remains the property of the manufacturer that published it.",
            "Brand names, model numbers, and product families appear for identification and reference only. HVAC Bench is not affiliated with, endorsed by, or sponsored by any manufacturer named on the site, and all trademarks remain the property of their owners.",
          ],
        },
        {
          title: "External sites",
          paragraphs: [
            "Technical pages keep manufacturer evidence internal and publish no outbound evidence URLs. Links to other sites may appear for non-evidence purposes; we do not control those sites, and a link is not an endorsement of anything else the linked party publishes or sells.",
          ],
        },
        {
          title: "Availability and changes",
          paragraphs: [
            "The site is provided as it is. We do not guarantee uninterrupted availability, and we may add, change, correct, or withdraw pages at any time, including where a claim can no longer be verified.",
          ],
        },
        {
          title: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, HVAC Bench is not liable for any loss, damage, injury, or cost arising from use of, or reliance on, anything published here, including indirect or consequential loss.",
            "Nothing in these terms excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot lawfully be excluded. Statutory consumer rights in your jurisdiction are unaffected.",
          ],
        },
        {
          title: "Safety terms take priority",
          paragraphs: [
            "The safety disclaimer forms part of these terms. Where they appear to conflict, the more cautious reading applies.",
          ],
        },
        {
          title: "Governing terms and contact",
          paragraphs: [
            "These terms are governed by the laws applicable at the operator's place of business, without limiting any mandatory consumer protections available to you where you live.",
            `Questions about these terms go to ${CONTACT_EMAIL}.`,
          ],
        },
      ]}
    />
  );
}
