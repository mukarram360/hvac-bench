import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/seo";

const PATH = "/contact/";

export const metadata: Metadata = pageMetadata({
  title: "Contact HVAC Bench",
  description:
    "How to reach the HVAC Bench editorial desk: corrections, missing error codes, technical review offers, and press or licensing enquiries.",
  path: PATH,
});

export default function ContactPage() {
  return (
    <TrustPage
      title="Contact"
      eyebrow="Editorial desk"
      intro={`Everything reaches the same desk at ${CONTACT_EMAIL}. Corrections are read first, and a message that names the equipment gets a useful reply far faster than one that does not.`}
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "Reporting an error on a page",
          paragraphs: [
            "This matters more to us than anything else in the inbox. If a code definition, a model list, or a safety boundary is wrong, tell us and we will check it against the manufacturer documentation the same week.",
            "Include the page address, what you believe is incorrect, and the source you are working from if you have one. Every correction that changes the meaning of a page is logged publicly on the corrections page.",
          ],
        },
        {
          title: "Asking about your own system",
          paragraphs: [
            "We can point you to the right reference, and we can tell you when the documentation does not support a clear answer. We cannot diagnose your equipment remotely, and we will not guess.",
            "To get a useful answer, include the complete indoor and outdoor model numbers from the data plate, the code shown on the display, what the system was doing when it appeared, and roughly how old the installation is.",
          ],
        },
        {
          title: "Requesting a code or a topic",
          paragraphs: [
            "Requests genuinely shape the publishing order. If a code is missing from the index, say which brand and series it appeared on and we will look for documentation that covers it.",
            "If no manufacturer source exists for a code, we will say so rather than publishing a plausible-sounding definition, and we will tell you what we did find.",
          ],
        },
        {
          title: "Offering a technical review",
          paragraphs: [
            "We welcome reviewers with a current refrigeration or heating qualification in their area of practice. Relevant credentials include EPA Section 608 or NATE in the United States and F-Gas or Gas Safe registration in the United Kingdom.",
            "Reviewers are named on the pages they check, with their credentials stated, and they are free to refuse to sign off anything they disagree with.",
          ],
        },
        {
          title: "Press, licensing, and everything else",
          bullets: [
            `Editorial, corrections, and technical review: ${CONTACT_EMAIL}`,
            "Privacy requests, including access and deletion under GDPR, UK GDPR, and CCPA, go to the same address and are handled as set out in the privacy policy.",
            "We do not accept guest posts, link placements, or sponsored content, and messages offering them will not receive a reply.",
          ],
        },
        {
          title: "What to expect",
          paragraphs: [
            "This is a small desk. Corrections are acknowledged quickly. Technical questions get a reply within a few working days. Anything requiring documentation we do not already hold takes longer, and we will say so rather than leaving you waiting.",
          ],
        },
      ]}
    />
  );
}
