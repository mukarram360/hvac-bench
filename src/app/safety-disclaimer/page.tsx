import type { Metadata } from "next";

import { TrustPage } from "@/components/trust-page";
import { pageMetadata } from "@/lib/seo";

const PATH = "/safety-disclaimer/";

export const metadata: Metadata = pageMetadata({
  title: "Safety disclaimer",
  description:
    "Where HVAC Bench guidance stops: electrical hazards, refrigerant handling, combustion equipment, working at height, and the certification required in the US and UK.",
  path: PATH,
});

export default function SafetyDisclaimerPage() {
  return (
    <TrustPage
      title="Safety disclaimer"
      eyebrow="Read this first"
      intro="HVAC equipment combines mains electricity, stored electrical energy, pressurised refrigerant, moving parts, and in many systems combustion. This page sets out what the site will and will not tell you to do, and why."
      path={PATH}
      updated="September 1, 2026"
      sections={[
        {
          title: "This is reference information, not a work instruction",
          paragraphs: [
            "Everything published here is general reference material about how equipment behaves and what manufacturer documentation says. It is not a diagnosis of your system, and it cannot account for the condition, age, installation quality, or modification history of the equipment in front of you.",
            "Only a qualified technician who can inspect and test the system can diagnose it. If anything on this site conflicts with the manufacturer documentation for your equipment or with the advice of a qualified technician who has seen it, follow the manufacturer or the technician, not us.",
          ],
        },
        {
          title: "Stop immediately and call a professional if",
          bullets: [
            "You smell burning, see scorch marks, discoloured wiring, or melted plastic anywhere on the equipment.",
            "You smell gas, or a carbon monoxide alarm has sounded. Leave the building first, then call the emergency number for your gas supplier.",
            "Water is in contact with electrical components, or an outdoor unit has been flooded.",
            "The system is making a grinding, screeching, or repeated loud clicking noise.",
            "A breaker or fuse trips repeatedly. That is a protective device doing its job, and resetting it repeatedly removes your protection.",
          ],
        },
        {
          title: "Work this site will never describe",
          bullets: [
            "Opening electrical compartments or working on live circuits. Capacitors store a dangerous charge after power is removed, and can injure or kill someone who assumes an isolated unit is safe.",
            "Any work on a refrigerant circuit. Refrigerant is under pressure, can cause cold burns and, in confined spaces, asphyxiation, and several modern refrigerants including R-32 are classified as mildly flammable.",
            "Work on gas or oil combustion equipment, flues, or heat exchangers.",
            "Brazing, torch work, or anything requiring the system to be opened to atmosphere.",
            "Working at height on roof-mounted or high-level equipment.",
          ],
        },
        {
          title: "Certification is a legal requirement, not a formality",
          paragraphs: [
            "In the United States, handling refrigerant requires EPA Section 608 certification under the Clean Air Act. In the United Kingdom and the European Union, F-Gas certification is required, and work on gas appliances must be carried out by a Gas Safe registered engineer.",
            "These rules exist because the failure modes are severe. They also mean that carrying out this work yourself can invalidate your equipment warranty and your property insurance.",
          ],
        },
        {
          title: "What is genuinely safe for an owner",
          paragraphs: [
            "Plenty is. Reading the display, recording model numbers, cleaning or replacing filters as the manual describes, clearing leaves and snow from around an outdoor unit, checking that vents are not blocked, confirming thermostat settings and batteries, and checking whether a breaker has tripped are all reasonable owner tasks.",
            "Each technical page marks these separately from technician work, and if a check is not in that section, treat it as outside the boundary.",
          ],
        },
        {
          title: "Limitation of liability",
          paragraphs: [
            "You use this information at your own risk. HVAC Bench accepts no liability for loss, damage, injury, or cost arising from actions taken on the basis of anything published here, to the fullest extent permitted by law.",
            "Nothing in this disclaimer limits liability for death or personal injury caused by negligence, or for fraud, where such limitation is not permitted by law.",
          ],
        },
      ]}
    />
  );
}
