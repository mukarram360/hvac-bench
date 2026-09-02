import { publish } from "./publish";

/**
 * Two readers arrive here. One wants to know which refrigerant is in their
 * unit and whether that matters. The other has been told a system is "low on
 * gas" and wants to know what that means. The page answers the identity
 * question first because it is answerable from a label, then handles the leak
 * question, then states the legal boundary in both jurisdictions the site
 * covers.
 */
export const hvacRefrigerantsExplained = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "HVAC refrigerants: what you have and who may touch it",
  slug: "hvac-refrigerants-explained",
  path: "/hvac-refrigerants-explained/",
  description:
    "How to find which refrigerant your system holds, what R-410A and R-32 differ on, why a sealed circuit should never need topping up, and the legal limits on handling.",
  articleType: "guide",
  equipmentType: "heat-pump",
  problemType: "refrigerant-reference",
  models: [
    "Residential and light-commercial comfort cooling and heat pumps",
    "Refrigerant identity is read from the outdoor data plate for the installed unit",
  ],
  directAnswer:
    "The refrigerant is the working fluid that carries heat around the sealed circuit by boiling and condensing. Which one your system holds is printed on the outdoor data plate, and it is not interchangeable with another without the manufacturer's written retrofit approval.",
  scopeNotice:
    "This is an identification and decision reference. It contains no charging, recovery, or leak-repair instruction, because that work requires certification in both the United States and the United Kingdom and equipment an owner does not have.",
  layout: ["sections", "decisionTable", "figures"],
  symptoms: [
    "Where to read which refrigerant an installed system holds.",
    "What the designation and the safety class each tell you.",
    "Why refrigerant loss is a leak rather than consumption.",
  ],
  causes: [
    "Compressor, metering device, coils, and lubricant are all engineered around one fluid's properties.",
    "Flammability classification changes installation requirements, room size rules, and service practice.",
  ],
  sections: [
    {
      title: "What the fluid is doing",
      paragraphs: [
        "Refrigerant is chosen because it boils at a useful temperature when its pressure is low and condenses at a useful temperature when its pressure is high. The circuit exploits that twice per lap: boil indoors to absorb heat, condense outdoors to release it, in cooling.",
        "That is why the charge amount matters so precisely. Too little and the evaporator does not fill with boiling liquid, so capacity drops and the coil can ice. Too much and liquid can reach places designed for vapour. The correct quantity is a weighed figure specific to the model and the installed pipe run.",
      ],
    },
    {
      title: "Reading the identity off the unit",
      paragraphs: [
        "The outdoor data plate names the refrigerant designation and the factory charge for that unit. Both are printed on the exterior of the cabinet on the equipment this site cites, so an owner can photograph them without opening anything.",
        "Two figures appear. The factory charge is what the outdoor unit left the plant with. The installed charge can be higher, because longer pipe runs need additional refrigerant, which is why the installation record matters as much as the plate.",
      ],
    },
    {
      title: "R-410A and R-32, where they differ",
      paragraphs: [
        "R-410A is a blend and R-32 is a single component, which changes how each behaves during a leak and how a partial charge can be handled. R-32 has a lower global warming potential, which is why product ranges have moved toward it under both United States and European regulation.",
        "R-32 is classified as mildly flammable, which is the practical difference for a building. That classification brings requirements on charge size relative to room volume, on installation practice, and on the tools and training a technician uses. It does not make the equipment unsafe to own; it makes the installation rules specific.",
        "Neither is a field substitute for the other. Pressures, oil compatibility, component ratings, and safety requirements differ, and a retrofit is only legitimate where the equipment manufacturer publishes a procedure for that exact model.",
      ],
    },
    {
      title: "A sealed circuit does not use refrigerant up",
      paragraphs: [
        "Refrigerant circulates. It is not burned, consumed, or worn out. A system that is short of charge has either lost it through a leak or was not charged correctly when it was installed or last serviced.",
        "This is why adding refrigerant without finding the leak is poor practice rather than a cheap fix. It vents a regulated substance to atmosphere on a schedule, hides the fault, and in the United Kingdom leaves the operator with leak-checking and record-keeping duties they may not know they have.",
      ],
    },
  ],
  decisionTable: {
    caption: "What you can establish yourself, and where it stops",
    columns: ["Question", "How it is answered", "Who answers it"],
    rows: [
      [
        "Which refrigerant is in my system?",
        "Read the designation on the outdoor data plate",
        "Owner, without opening anything",
      ],
      [
        "How much should it hold?",
        "Factory charge on the plate, plus the installer's line-length addition",
        "Owner reads the plate; the record comes from the installer",
      ],
      [
        "Is the charge correct now?",
        "Measured against manufacturer superheat or subcooling targets",
        "Certified technician with gauges",
      ],
      [
        "Is there a leak, and where?",
        "Pressure testing and leak detection on the circuit",
        "Certified technician",
      ],
      [
        "Can I change refrigerant type?",
        "Only under a manufacturer retrofit procedure for that model",
        "Manufacturer documentation decides; technician performs",
      ],
    ],
  },
  figures: [
    {
      title: "One lap of the circuit",
      description:
        "The fluid changes state twice and pressure twice. Every service measurement a technician takes is aimed at one of these four points.",
      nodes: [
        { label: "Evaporator", detail: "Low pressure, refrigerant boils and absorbs heat" },
        { label: "Compressor", detail: "Pressure and temperature rise together" },
        { label: "Condenser", detail: "High pressure, vapour condenses and sheds heat" },
        { label: "Metering device", detail: "Pressure drops so the liquid can boil again" },
      ],
    },
  ],
  safeChecks: [
    "Photograph the outdoor data plate to record the refrigerant designation and factory charge.",
    "Keep the installation paperwork, which is where any addition for pipe length is recorded.",
    "Leave service ports, valve caps, and panels alone; there is nothing an owner can check inside the circuit.",
  ],
  professionalEscalation: [
    "Any suspicion of a leak needs a certified technician, in the United States under EPA Section 608 and in the United Kingdom under the F-gas rules.",
    "Ventilate and leave the room if you suspect a large release, and do not use a flame or a spark source nearby.",
    "Refuse a refrigerant top-up offered without leak diagnosis; the loss has a cause and the cause has not been found.",
  ],
  faqs: [
    {
      question: "Can R-32 be put into an R-410A system?",
      answer:
        "Not unless the equipment manufacturer publishes a retrofit procedure for that exact model. The two differ in pressures, oil compatibility, component ratings, and safety classification, and a substitution outside an approved procedure is neither safe nor lawful.",
    },
    {
      question: "Does refrigerant get used up over time?",
      answer:
        "No. A sealed circuit circulates the same charge indefinitely. A shortage means it escaped through a leak or was never charged correctly, and both need finding rather than topping up.",
    },
    {
      question: "Can I top up my own mini-split?",
      answer:
        "No. Correct work requires leak detection, recovery, evacuation, a weighed charge, and certification under EPA Section 608 in the United States or the F-gas regime in the United Kingdom.",
    },
    {
      question: "Is R-32 dangerous in a home?",
      answer:
        "It is classified as mildly flammable, which sets rules on charge size relative to room volume and on how the system is installed and serviced. Equipment designed and installed to those rules is sold for domestic use.",
    },
    {
      question: "Where do I find the refrigerant type on my unit?",
      answer:
        "On the outdoor unit's data plate, alongside the model number, electrical supply, and factory charge. It is on the outside of the cabinet, so no panel needs to come off to read it.",
    },
  ],
  sourceIds: [
    "epa-refrigerant-substitutes",
    "epa-section-608",
    "gov-uk-f-gas",
    "trane-mini-split-refrigerant",
  ],
  relatedContent: [
    "/mini-split-frozen-coil/",
    "/mini-split-not-cooling/",
    "/mini-split-lifespan/",
    "/how-to-read-hvac-data-plate/",
    "/mrcool-vs-pioneer-mini-splits/",
  ],
  glossaryTerms: ["refrigerant", "r410a", "r32", "refrigerant-leak"],
  keywords: [
    "HVAC refrigerant types",
    "R32 vs R410A",
    "what refrigerant is in my air conditioner",
    "A2L refrigerant safety",
  ],
});
