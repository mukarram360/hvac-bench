import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { pageMetadata } from "@/lib/seo";

const PATH = "/about/";

export const metadata: Metadata = pageMetadata({
  title: "About HVAC Bench",
  description:
    "Why HVAC Bench exists: turning manufacturer service documentation into model-aware, safety-bounded reference pages for owners and technicians in the US, UK, and Europe.",
  path: PATH,
});

export default function AboutPage() {
  return (
    <TrustPage
      title="About HVAC Bench"
      eyebrow="The publication"
      intro="HVAC Bench is an independent technical reference for heating and cooling equipment. It exists because the information people need at the moment something stops working is scattered across service manuals, support portals, and forum threads of uneven quality."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "The problem this site is trying to fix",
          paragraphs: [
            "Search for an HVAC error code and you will find three kinds of result: a manufacturer PDF that assumes you already know the trade, a page that lists forty codes for forty brands as if they were interchangeable, and a video that solves a different problem on different equipment.",
            "None of those help the person standing in a cold room at eleven at night. What helps is a page that says what the code means on their equipment, what they can safely check, and where the work becomes a job for someone with instruments and certification.",
            "That is the entire brief. Nothing on this site is written to fill space or to rank for a phrase that has no page behind it.",
          ],
        },
        {
          title: "What we publish",
          paragraphs: [
            "Error-code references scoped to the product families the documentation actually covers. Symptom guides for behaviour rather than codes. Maintenance and how-to procedures with the stop point stated up front. Equipment and brand hubs that organise the library. A glossary written for someone reading a manual for the first time.",
            "The library begins with ductless mini-splits and heat pumps because that is where documentation is most fragmented and demand is highest. The structure already carries central air, furnaces, boilers, controls, indoor air quality, and light commercial equipment, and those sections fill as references are verified.",
          ],
        },
        {
          title: "Who it is for",
          bullets: [
            "Owners who want to understand what their system is doing before they pay for a call-out, and who want to know which checks are genuinely safe to make.",
            "Technicians confirming a code definition or a product family before opening a panel, who need the source rather than someone's recollection of it.",
            "Landlords, facilities staff, and property managers deciding whether a reported fault needs an engineer today or at the next service visit.",
          ],
        },
        {
          title: "United States, United Kingdom, and Europe",
          paragraphs: [
            "The same equipment is sold on both sides of the Atlantic under different names, rated by different test standards, and serviced under different regulations. A page that ignores that is wrong for half its readers.",
            "So capacities appear in both BTU per hour and kilowatts, temperatures in both Fahrenheit and Celsius, and efficiency figures are labelled with the standard they were measured under, because a SEER2 rating and a SCOP rating are not the same measurement. Certification requirements are named for the region they apply to: EPA Section 608 in the United States, F-Gas in the United Kingdom and European Union.",
          ],
        },
        {
          title: "How the site pays for itself",
          paragraphs: [
            "HVAC Bench does not sell equipment, take payment for contractor listings, or accept money to change what a technical page says. Some pages may carry affiliate links, and where they do, the page says so plainly.",
            "The commercial arrangement never determines the recommendation. If the honest answer is that a part should be replaced under warranty by the installer, that is the answer, whether or not a link earns anything.",
          ],
        },
        {
          title: "What we are not",
          paragraphs: [
            "We are not a contracting company, we do not perform onsite diagnosis, and we do not sell parts. Nothing here is a substitute for a qualified technician examining your equipment, and no page should be read as an instruction to work on something you are not trained or certified to service.",
            "We are also not a manufacturer, and we are not affiliated with, endorsed by, or speaking for any of the brands documented on this site. Brand names appear for identification only.",
          ],
        },
      ]}
    />
  );
}
