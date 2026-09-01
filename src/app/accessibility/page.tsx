import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/seo";

const PATH = "/accessibility/";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility statement",
  description:
    "How HVAC Bench is built for readability and assistive technology, the standard it targets, known limitations, and how to report a barrier.",
  path: PATH,
});

export default function AccessibilityPage() {
  return (
    <TrustPage
      title="Accessibility"
      eyebrow="Commitment"
      intro="People often read this site in poor conditions: a dim plant room, a phone held in one hand, a screen reader, or eyes tired at midnight. Accessibility is a functional requirement here rather than a compliance exercise."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "The standard we work to",
          paragraphs: [
            "HVAC Bench targets the Web Content Accessibility Guidelines version 2.2 at level AA, which is the standard referenced by the Americans with Disabilities Act guidance in the United States, the Public Sector Bodies Accessibility Regulations in the United Kingdom, and the European Accessibility Act.",
          ],
        },
        {
          title: "What that means in practice",
          bullets: [
            "Body text is set at a comfortable reading size with generous line spacing, and the page reflows without horizontal scrolling down to a 320 pixel viewport.",
            "Text and interface colours are chosen to meet or exceed the 4.5 to 1 contrast ratio, and colour is never the only way information is conveyed.",
            "Every interactive element is reachable and operable by keyboard, with a visible focus outline that is not removed.",
            "Headings follow a real hierarchy, landmarks are marked up correctly, and a skip link jumps straight to the main content.",
            "Touch targets are at least 44 by 44 pixels, so a control is usable with cold or gloved hands.",
            "Motion is limited to short transitions, and the prefers-reduced-motion setting removes them entirely.",
            "Pages are static HTML that render without JavaScript, so the content is available even when scripts are blocked or fail.",
          ],
        },
        {
          title: "Writing for comprehension",
          paragraphs: [
            "Accessibility is not only a technical property. Sentences are kept short, jargon is defined in the glossary and linked on first use, and every technical page leads with a direct answer before the detail.",
            "Instructions are ordered lists rather than paragraphs that hide a second step inside them, because that is what someone follows while holding a torch.",
          ],
        },
        {
          title: "Known limitations",
          bullets: [
            "Some manufacturer documents we link to are scanned PDFs published by third parties, and those files are frequently not accessible. We cannot fix them, so we describe their relevant content on the page rather than only linking to them.",
            "The site currently offers a single light theme. A dark theme is planned.",
            "Wide reference tables scroll horizontally inside their own container on small screens. The container is keyboard scrollable, but a very wide table remains harder to read on a phone than on a laptop.",
          ],
        },
        {
          title: "Report a barrier",
          paragraphs: [
            `If something here is difficult or impossible to use, tell us at ${CONTACT_EMAIL}. Include the page, what you were trying to do, and the browser and assistive technology you were using if you can.`,
            "Accessibility reports are treated with the same priority as safety corrections. We will acknowledge quickly, tell you what we can fix and when, and say so honestly if something is outside our control.",
          ],
        },
      ]}
    />
  );
}
