import { publish } from "./publish";

/**
 * Odour questions are diagnosed by when the smell appears and what kind it
 * is. The dividing line that actually matters is between a musty smell, which
 * is a cleaning question, and a burning smell, which is an emergency.
 */
export const miniSplitSmellsMusty = publish({
  title: "Mini-split smells musty: filter care and deeper cleaning",
  slug: "mini-split-smells-musty",
  path: "/mini-split-smells-musty/",
  description:
    "Separate absorbed room odors and dirty filters from persistent moisture or internal contamination that needs model-safe professional cleaning.",
  articleType: "troubleshooting",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless indoor units; drying functions vary by model"],
  problemType: "musty-odor",
  directAnswer:
    "A mini-split can re-emit odors absorbed from the room, while dust and moisture on internal surfaces can sustain a musty smell; routine filter care may help, but deep cleaning is a different task.",
  scopeNotice:
    "The cited manuals identify filter cleaning as owner work on covered models, while internal cleaning may require service. The exact manual sets that boundary and documents any drying or self-clean function.",
  symptoms: [
    "A damp, stale, smoky, or room-like odor appears when the indoor fan starts.",
  ],
  causes: [
    "The indoor unit can absorb odors from furnishings, cooking, smoke, and other room sources.",
    "A dirty filter or moisture and soil deeper in the coil, drain pan, or blower can require cleaning.",
  ],
  diagnosticBranches: [
    {
      title: "The smell is strongest in the first minutes and then fades",
      observation:
        "Starting the unit produces a noticeable odour that becomes much weaker once it has been running for a while.",
      action:
        "This pattern can fit odours held on internal surfaces being carried by the first airflow, but timing alone does not identify the source. Clean the filter, and use a drying or self-clean function only as the exact manual describes.",
    },
    {
      title: "The smell appears only in cooling",
      observation:
        "Heating and fan-only operation smell normal, and the odour arrives with cooling.",
      action:
        "Note that pattern because it makes moisture and drainage useful areas for a technician to inspect. Cooling can produce condensate at the coil, but the timing does not identify a particular contaminated component.",
    },
    {
      title: "It smells of the room rather than of damp",
      observation:
        "The odour is recognisably cooking, smoke, pets, or paint rather than a cellar smell.",
      action:
        "Deal with the source in the room first. Indoor units absorb and re-emit what is in the air around them, and cleaning the equipment will not outpace a source that is still active.",
    },
    {
      title: "It smells hot, electrical, or burning",
      observation:
        "The smell is acrid, plasticky, or like hot wiring rather than musty, and it may come with a noise or a fault code.",
      action:
        "Switch the system off at the breaker and arrange service now. This is a completely different situation from a musty smell and it should never be managed with cleaning or air freshener.",
    },
  ],
  decisionTable: {
    caption: "What the timing of the smell suggests",
    columns: ["When you notice it", "Possible origin", "Reasonable response"],
    rows: [
      [
        "Only for a few minutes after start-up",
        "Moisture and dust on internal surfaces being disturbed by airflow",
        "Clean the filter and use any documented drying function",
      ],
      [
        "Whenever cooling runs, continuously",
        "Damp conditions on the coil or in the drain pan",
        "Professional internal cleaning and a drain check are needed",
      ],
      [
        "In every mode, smelling of the room",
        "Odours absorbed from cooking, smoke, pets, or furnishings",
        "Address the source and ventilate before treating the equipment",
      ],
      [
        "With any hot, electrical, or burning character",
        "Not a hygiene issue at all",
        "Power off at the breaker and call for service immediately",
      ],
    ],
  },
  sections: [
    {
      title: "Why a cooling coil grows a smell",
      paragraphs: [
        "During cooling, moisture can condense on the indoor coil and collect in the drain pan. Manufacturer guidance identifies retained moisture combined with dust or debris, filter restriction, and poor drainage as possible contributors to musty odor or biological growth.",
        "A startup-only odor and a continuous odor are useful observations, but neither identifies the contaminated component. Record when the smell appears and whether there has also been water leakage or visible filter loading.",
      ],
    },
    {
      title: "What owner cleaning can and cannot reach",
      paragraphs: [
        "Cleaning the filter is worthwhile and it is the part of the airflow path an owner is meant to touch. It removes accumulated dust and it stops that dust adding to what collects on the coil. On a mildly smelly unit that has been neglected, it can be enough.",
        "Filter cleaning does not reach the coil, drain pan, blower wheel, or condensate line. Manufacturer guidance identifies moisture, dirt, filter restriction, and drainage problems as possible contributors, and says internal cleaning or drain work may require disassembly by a technician.",
      ],
    },
    {
      title: "Prevention is mostly about drying",
      paragraphs: [
        "Some models provide a documented drying, coil-dry, or self-clean function after cooling. Use it only as the exact operating manual describes; the name, duration, and purpose differ by model.",
        "Where no such owner function is documented, do not invent a generic drying cycle. Keep the filter on its manual schedule and arrange internal cleaning or drainage service when a musty odor persists.",
      ],
    },
  ],
  figures: [
    {
      title: "Where moisture sits between cooling cycles",
      description:
        "An odor that arrives with airflow can involve room sources or damp internal surfaces, so the useful observation is when it appears and whether drainage or filter symptoms accompany it.",
      nodes: [
        { label: "Coil surface", detail: "Condensation forming when coil conditions cross the room dew point" },
        { label: "Drain pan", detail: "Standing water below the coil" },
        { label: "Blower wheel", detail: "Damp dust on the surface that moves the air" },
        { label: "Drain line", detail: "Where that water is supposed to leave" },
      ],
    },
  ],
  safeChecks: [
    "Clean the user-removable filter exactly as the model manual directs and remove obvious room odor sources.",
    "Check for water leakage and allow washable filters to dry fully before reinstalling.",
  ],
  professionalEscalation: [
    "Persistent mustiness, visible internal growth, drain problems, or odors paired with illness concerns warrant professional cleaning and moisture diagnosis.",
    "A burning or electrical odor is different: turn the unit off and arrange urgent service.",
  ],
  serviceHandoff:
    "Say whether the smell is strongest at start-up or continuous, which modes produce it, when the filter was last cleaned, whether the unit has ever leaked water, and whether anyone in the household has raised a health concern about it.",
  faqs: [
    {
      question: "Why does my mini split smell bad when it starts?",
      answer:
        "A startup odor can come from damp or dirty internal surfaces, but timing alone does not identify the component. Clean only the user-serviceable filter and use a drying or self-clean function only where the exact manual documents one.",
    },
    {
      question: "Can I spray a coil cleaner into the indoor unit?",
      answer:
        "Do not apply a cleaner unless the exact manufacturer instructions authorize that product and procedure for owner use. Internal coil, pan, blower, and drain cleaning can require disassembly and protection of electrical components.",
    },
    {
      question: "Is a musty smell from the air conditioner harmful?",
      answer:
        "A technical page cannot determine health risk; seek medical advice for symptoms or individual exposure concerns. A musty odor can accompany moisture or soil, so investigate and correct the equipment or room source rather than masking it.",
    },
    {
      question: "How do I stop it coming back?",
      answer:
        "Use a built-in drying or self-clean function only if the exact operating manual documents it, and keep to the filter-cleaning interval in that manual. Persistent odor still calls for inspection of internal cleanliness and drainage.",
    },
  ],
  sourceIds: ["fujitsu-troubleshooting", "fujitsu-filter-manual", "trane-mini-split-smells"],
  relatedContent: [
    "/troubleshooting/",
    "/mini-split-filter-cleaning/",
    "/mini-split-leaking-water/",
  ],
  keywords: [
    "mini split smells musty",
    "air conditioner smells like mildew",
    "ductless unit bad smell",
    "mini split dirty sock smell",
    "mini split odor when starting",
  ],
});
