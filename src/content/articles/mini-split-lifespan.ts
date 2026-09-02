import { publish } from "./publish";

/**
 * Every competing page answers this with a year range. None of the primary
 * documentation this site holds supports one, so the page refuses the number
 * and gives the reader the thing a number would only be standing in for: a way
 * to decide whether this particular system is worth repairing again.
 */
export const miniSplitLifespan = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "Mini-split lifespan: what the evidence supports",
  slug: "mini-split-lifespan",
  path: "/mini-split-lifespan/",
  description:
    "Why no defensible cross-brand year range exists, what a warranty actually covers, and the evidence that decides a repair-or-replace call on one system.",
  articleType: "guide",
  equipmentType: "ductless-mini-split",
  problemType: "service-life",
  models: [
    "Residential ductless single-zone and multi-zone systems",
    "Judgements below apply to one installed system, not to a brand",
  ],
  directAnswer:
    "The manufacturer documentation behind this site does not publish a service life for ductless equipment, so this page does not quote one. What decides the question is the condition of the specific system, whether parts remain available, and whether the next repair restores a system worth keeping.",
  scopeNotice:
    "A warranty term is a contract, not a life expectancy, and one owner's experience is not a population estimate. Where a figure would be an invention, this page says so rather than repeating a number in circulation elsewhere.",
  layout: ["sections", "decisionTable", "figures", "branches"],
  symptoms: [
    "Why a single year range cannot be sourced from manufacturer literature.",
    "What a warranty document does and does not tell you about longevity.",
    "Which evidence changes a repair-or-replace decision on your own system.",
  ],
  causes: [
    "A system ages as a set of parts under different stresses, not as one item with one clock.",
    "Parts availability and refrigerant supply can end a system's service life while it still runs.",
  ],
  sections: [
    {
      title: "Why the number is missing",
      paragraphs: [
        "Manufacturers publish warranty terms, service instructions, and performance data. A predicted service life is not among them, because it would depend on installation quality, climate, run hours, maintenance, supply conditions, and the coastal or industrial exposure of the outdoor unit.",
        "Figures do circulate. They tend to come from contractor experience or from survey work on other equipment classes, and they get repeated until they look like specifications. Repeating one here would put a number on this site that the evidence record cannot support.",
      ],
    },
    {
      title: "A system does not age as one thing",
      paragraphs: [
        "The outdoor coil faces weather, salt, and airborne contaminants. Fan motors and the compressor accumulate run hours. Control boards and inverter modules live with heat and whatever the electrical supply does. The sealed refrigerant circuit depends heavily on how carefully it was brazed, evacuated, and charged on the day it went in.",
        "So the interesting question is not how old the system is. It is which part is failing, why, and whether that reason is confined to the part or a symptom of the whole installation.",
      ],
    },
    {
      title: "What a warranty is telling you",
      paragraphs: [
        "A warranty defines which parts are covered, for how long, from what date, subject to registration, and with what excluded. Labour, parts, and compressor terms can have different durations, and labour may be excluded. Read each term separately.",
        "That is useful information about the manufacturer's commercial risk, and about what a repair will cost you in year six. It is not a statement about how long the equipment will last, and a longer term does not establish a longer life.",
      ],
    },
    {
      title: "Making the call on one system",
      paragraphs: [
        "Ask for a measured diagnosis rather than an age-based recommendation: what failed, what caused it, and what else the same cause has affected. A failed capacitor and a failed compressor are different conversations, and so is a leak found at a flare joint compared with one in a coil.",
        "Then check three things that sit outside the repair itself. Whether the model's parts are still supplied. Whether the original sizing and installation were right, because replacing equipment does not fix a distribution or load problem. And whether the refrigerant is still available for the service that would follow.",
      ],
    },
  ],
  decisionTable: {
    caption: "What each piece of evidence settles",
    columns: ["Evidence", "What it establishes", "What it does not"],
    rows: [
      [
        "Age in years",
        "How long the parts have been under load",
        "Anything about the condition of any part",
      ],
      [
        "Warranty term",
        "What a repair will cost you and until when",
        "How long the equipment will keep working",
      ],
      [
        "Repair history",
        "Whether failures are isolated or related",
        "Whether the next failure is imminent",
      ],
      [
        "Parts availability",
        "Whether a repair is possible at all",
        "Whether the rest of the system is sound",
      ],
      [
        "Measured diagnosis",
        "What failed and what caused it",
        "Whether replacement is cheaper over time",
      ],
      [
        "Original sizing and install record",
        "Whether new equipment would inherit the same problem",
        "The condition of the current equipment",
      ],
    ],
  },
  figures: [
    {
      title: "The order the questions go in",
      description:
        "Age is not on this list. Each step can end the enquiry, and starting at the last one is how a working system gets replaced.",
      nodes: [
        { label: "What failed", detail: "The component and the measured symptom" },
        { label: "Why it failed", detail: "Cause, and whether it reaches other parts" },
        { label: "Can it be repaired", detail: "Whether the parts are still supplied" },
        { label: "Is the system right", detail: "Original sizing and installation quality" },
        { label: "Then cost", detail: "Repair against replacement on the same load basis" },
      ],
    },
  ],
  diagnosticBranches: [
    {
      title: "It works, and the failure was isolated",
      observation:
        "Performance is acceptable, one component failed for an identifiable reason, and the model's parts are still supplied.",
      action:
        "Repair it and keep the record. Age on its own has not established anything, and a documented repair history is what makes the next decision easier.",
    },
    {
      title: "Related failures are repeating",
      observation:
        "More than one failure traces back to the same cause, such as corrosion on the outdoor unit, a supply problem, or an installation defect that keeps producing symptoms.",
      action:
        "Ask for the cause to be addressed rather than the parts replaced again. Until it is, a replacement system inherits the same conditions.",
    },
    {
      title: "The repair cannot restore a system worth having",
      observation:
        "Parts are unavailable, the equipment was the wrong size from the start, or the diagnosis shows deterioration across the circuit rather than at one point.",
      action:
        "Price replacement against a fresh load calculation rather than against the existing capacity, so a sizing error is not carried into the new equipment.",
    },
  ],
  faqs: [
    {
      question: "How long do mini-splits last?",
      answer:
        "The manufacturer documentation this site works from does not publish a figure, so we do not print one. Condition, cause of failure, parts availability, and installation quality decide it for a given system.",
    },
    {
      question: "Does a longer warranty mean the equipment lasts longer?",
      answer:
        "No. A warranty sets out covered parts, dates, registration conditions, labour terms, and exclusions. It describes commercial cover, not expected service life.",
    },
    {
      question: "When is replacing better than repairing?",
      answer:
        "When diagnosis shows deterioration across the system rather than at one point, when parts are no longer supplied, or when the equipment was the wrong size and a repair would preserve that.",
    },
    {
      question: "Does regular maintenance extend the life of a mini-split?",
      answer:
        "Manufacturer instructions tie filter cleaning, clear airflow, and drainage to correct operation, and neglecting them creates conditions that stress components. That is a mechanism, not a measured number of extra years.",
    },
  ],
  sourceIds: ["trane-ductless-maintenance", "fujitsu-filter-manual", "epa-section-608"],
  relatedContent: [
    "/how-to-prepare-mini-split-for-winter/",
    "/how-to-clean-around-outdoor-unit/",
    "/mini-split-making-noise/",
    "/hvac-refrigerants-explained/",
  ],
  glossaryTerms: ["compressor", "condenser-coil", "refrigerant", "commissioning"],
  keywords: [
    "mini split lifespan",
    "how long do mini splits last",
    "repair or replace mini split",
    "mini split warranty vs lifespan",
  ],
});
