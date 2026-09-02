import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/seo";

const PATH = "/privacy/";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "What HVAC Bench collects and what it does not: hosting logs, Google Analytics with consent mode, local search, and your rights under GDPR, UK GDPR, and CCPA.",
  path: PATH,
});

export default function PrivacyPage() {
  return (
    <TrustPage
      title="Privacy policy"
      eyebrow="Effective September 1, 2026"
      intro="HVAC Bench collects as little as it can while still measuring which pages help people. The site has no accounts, comments, newsletter, shopping cart, or advertising network."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "Who is responsible",
          paragraphs: [
            `HVAC Bench operates hvac-bench.com and is the controller of the limited personal data described here. Questions and requests go to ${CONTACT_EMAIL}.`,
          ],
        },
        {
          title: "What is collected",
          bullets: [
            "Hosting and delivery data. Our host, Vercel, processes standard request information such as IP address, browser and device type, the page requested, timestamps, and security signals in order to serve the site and protect it from abuse.",
            "Analytics data, if you allow it. Google Analytics 4 records which pages are viewed, roughly where in the world the visit came from, referral source, and device category. IP addresses are anonymised.",
            "A single browser storage entry recording your analytics choice, so you are not asked repeatedly.",
          ],
        },
        {
          title: "What is not collected",
          bullets: [
            "Names, addresses, or phone numbers, because nothing on the site asks for them.",
            "Anything you type into the site search. Search runs entirely in your browser against a static index file; queries are never sent to us or logged.",
            "Advertising or cross-site tracking data. Advertising storage and personalisation are set to denied at all times through Google Consent Mode.",
            "Payment information. Nothing is sold here.",
          ],
        },
        {
          title: "Your analytics choice",
          paragraphs: [
            "For visitors in the United Kingdom, the European Economic Area, and Switzerland, analytics storage is denied by default until you accept it, and the notice on your first visit lets you decide. Declining leaves the site fully functional.",
            "Elsewhere, analytics storage is enabled by default, and the same notice lets you turn it off at any time. Clearing your browser storage resets the choice and the notice appears again.",
          ],
        },
        {
          title: "Legal basis for processing",
          paragraphs: [
            "Under the UK GDPR and EU GDPR, hosting and security data is processed on the basis of legitimate interests, specifically delivering the site and keeping it available and secure. Analytics is processed on the basis of your consent, which you may withdraw at any time.",
            "Under the California Consumer Privacy Act, we do not sell or share personal information as those terms are defined, and we do not process the personal information of anyone we know to be under 16.",
          ],
        },
        {
          title: "Data transfers and retention",
          paragraphs: [
            "The site is hosted on Vercel's global edge network, and Google Analytics processes data on infrastructure that may sit outside your country. Both operate under standard contractual clauses and equivalent transfer mechanisms for international transfers.",
            "Analytics data is retained on the shortest practical setting available in Google Analytics. Hosting logs are retained for a limited period by our host for operational and security purposes. We do not maintain any separate database of visitors.",
          ],
        },
        {
          title: "Your rights",
          bullets: [
            "Access, correction, deletion, restriction, objection, and portability under GDPR and UK GDPR.",
            "The right to know, delete, correct, and opt out of sale or sharing under CCPA, noting that we do neither.",
            "The right to withdraw analytics consent at any time using the notice, or by clearing site data in your browser.",
            "The right to complain to a supervisory authority, which in the United Kingdom is the Information Commissioner's Office.",
          ],
        },
        {
          title: "Third parties",
          paragraphs: [
            "The site uses Vercel for hosting, Google Analytics for measurement, and Google Fonts served as self-hosted files rather than from Google's servers, so loading a page does not contact a font server.",
            "If you follow a non-evidence link to another site, that site is governed by its own privacy policy, which we do not control.",
          ],
        },
        {
          title: "Children",
          paragraphs: [
            "This site is written for adults dealing with building equipment. It is not directed at children, and we do not knowingly collect information from them.",
          ],
        },
        {
          title: "Changes to this policy",
          paragraphs: [
            "If this policy changes in a way that affects what is collected or how it is used, the effective date at the top of this page changes with it, and material changes are noted on the corrections page.",
          ],
        },
      ]}
    />
  );
}
