import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/seo";

const PATH = "/cookie-policy/";

export const metadata: Metadata = pageMetadata({
  title: "Cookie policy",
  description:
    "Exactly which cookies and browser storage HVAC Bench uses, what each one does, how long it lasts, and how to refuse or remove them.",
  path: PATH,
});

export default function CookiePolicyPage() {
  return (
    <TrustPage
      title="Cookie policy"
      eyebrow="Browser storage"
      intro="This site uses very little. There is no advertising network, no social tracking, and no cross-site profiling. What follows is the complete list."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "Strictly necessary storage",
          paragraphs: [
            "One entry in your browser's local storage, named hvacbench-consent, records whether you accepted or declined analytics. It holds a single word, either granted or denied, and exists so the notice does not reappear on every page.",
            "It is not a cookie, it is never sent to a server, and clearing your browser's site data removes it. Under the UK Privacy and Electronic Communications Regulations and the EU ePrivacy Directive, storage of this kind does not require consent because it exists solely to honour your choice.",
          ],
        },
        {
          title: "Analytics cookies",
          paragraphs: [
            "If you accept analytics, Google Analytics 4 sets cookies to distinguish one visit from another so page counts are not wildly inflated.",
          ],
          bullets: [
            "_ga distinguishes visitors and expires two years after it is set.",
            "_ga_J5MZ194SEG maintains session state for this property and expires two years after it is set.",
            "Both are first-party cookies. IP addresses are anonymised, and advertising personalisation is denied at all times.",
          ],
        },
        {
          title: "Cookies this site does not set",
          bullets: [
            "No advertising or retargeting cookies, because the site runs no ad network.",
            "No social media pixels or embedded trackers.",
            "No cookies for accounts, comments, carts, or newsletters, because none of those exist here.",
            "No fingerprinting, and no attempt to identify you across other websites.",
          ],
        },
        {
          title: "Refusing or removing them",
          bullets: [
            "Use the notice shown on your first visit to decline. Analytics cookies are then never set.",
            "In the United Kingdom, the European Economic Area, and Switzerland, analytics storage stays denied unless you actively accept.",
            "Clear site data in your browser to remove everything and reset the choice, which brings the notice back.",
            "Browser settings that block cookies or run private windows work normally here; the site is fully usable with all storage blocked.",
            "Google publishes an opt-out browser add-on that disables Google Analytics measurement on every site you visit.",
          ],
        },
        {
          title: "Hosting and security",
          paragraphs: [
            "Our host processes standard request data, including IP address, to deliver pages and defend against abuse. That is server-side processing rather than storage on your device, and it is described in the privacy policy.",
          ],
        },
        {
          title: "Questions",
          paragraphs: [
            `If something here does not match what you see in your browser's developer tools, tell us at ${CONTACT_EMAIL}. A discrepancy would be a bug, and we would want to fix it.`,
          ],
        },
      ]}
    />
  );
}
