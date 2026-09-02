import { publish } from "./publish";

/**
 * A procedure page, so the steps carry the weight. The FAQs here were the
 * worst of the generated artifacts on the old site ("What does How to clean a
 * mini-split filter without damaging it mean?"); they are now the questions
 * people actually ask while standing in front of an open unit.
 */
export const miniSplitFilterCleaning = publish({
  title: "How to clean a mini-split filter without damaging it",
  slug: "mini-split-filter-cleaning",
  path: "/mini-split-filter-cleaning/",
  description:
    "A model-first filter-cleaning routine covering safe shutdown, gentle dust removal, washing only when allowed, complete drying, and service limits.",
  articleType: "how-to",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless indoor units; filter type and washability vary by model"],
  problemType: "filter-maintenance",
  directAnswer:
    "The cited operating manuals identify specific indoor filters as owner-serviceable, but removal, washing, drying, replacement, and reset steps vary; the exact operating manual remains the authority for your model.",
  scopeNotice:
    "Ductless indoor units carry different filter types, and some hold additional deodorizing, catalytic, carbon, or electrostatic elements alongside the main mesh. Cited manuals give those elements separate care instructions and may prohibit wetting them, so identify each filter before cleaning.",
  symptoms: [
    "Reduced airflow, lower heating or cooling performance, higher operating noise, or a filter reminder can indicate maintenance is due.",
  ],
  causes: [
    "Dust loading increases airflow resistance and can reduce performance or contribute to coil-temperature problems.",
  ],
  diagnosticBranches: [
    {
      title: "Work out what is actually behind the panel",
      observation:
        "Lifting the front panel reveals one or more mesh filters, and possibly smaller coloured or framed elements clipped to them.",
      action:
        "Identify each filter against the operating manual before removal. Wash, vacuum, or replace each element only as that manual directs; a washable main mesh does not mean an attached element is also washable.",
    },
    {
      title: "Decide whether it can be washed or only vacuumed",
      observation:
        "The manual states whether the filter is washable and, if so, what water temperature and detergent are permitted.",
      action:
        "Follow it exactly rather than improvising. Manufacturer instructions commonly specify cool or lukewarm water because heat can deform filter material and affect how it fits.",
    },
  ],
  steps: [
    {
      name: "Switch the unit off before opening it",
      text: "Turn the system off with the normal control rather than at the breaker, and wait for the fan to stop completely so nothing is moving when the panel is opened.",
    },
    {
      name: "Photograph the filters in place",
      text: "Take a photograph before removing anything, showing how each filter sits and which way round it faces. Reassembly is far easier with a picture than with memory.",
    },
    {
      name: "Release the panel and lift the filters out",
      text: "Open the front panel to the position the manual describes and slide the filters out gently. If anything needs force or a screwdriver, stop and check the manual, because you are past the owner boundary.",
    },
    {
      name: "Separate any additional elements",
      text: "If the manual identifies a separate deodorizing, catalytic, carbon, or electrostatic element, follow its own removal and care instructions. Do not wet an element unless the exact manual says it is washable.",
    },
    {
      name: "Vacuum the loose dust first",
      text: "If the manual permits vacuuming, use the attachment and direction it specifies. On models whose instructions allow either vacuuming or washing, light loading may not require water.",
    },
    {
      name: "Wash only if the manual permits it",
      text: "Use the direction, water temperature, and detergent specified by the manual. Cited procedures use gentle rinsing or hand washing and warn that excessive heat or force can damage filter material.",
    },
    {
      name: "Dry completely away from direct heat",
      text: "Shake off excess water and leave the filter to dry fully by the method in the manual. Documented instructions require complete drying before refitting and may prohibit direct heat or sun because filter materials can deform.",
    },
    {
      name: "Refit in the original orientation and close up",
      text: "Use your photograph to refit each filter the right way round and fully seated, reattach any additional elements, and close the panel until it latches properly.",
    },
    {
      name: "Reset the reminder only as documented",
      text: "If the unit shows a filter reminder, clear it using the procedure in the manual. Do not press unfamiliar buttons to make an indicator disappear, because some of them change configuration.",
    },
  ],
  decisionTable: {
    caption: "How often, and what to expect",
    columns: ["Situation", "Practical interval", "What to watch for"],
    rows: [
      [
        "Ordinary domestic room, moderate use",
        "Use the manual interval and inspect sooner if loading increases",
        "Visible grey loading across the mesh is the signal, not the calendar",
      ],
      [
        "Pets, smokers, or heavy dust",
        "Inspect more often than the baseline when the environment loads it faster",
        "Loading concentrated in one area can indicate an airflow pattern worth mentioning",
      ],
      [
        "Cleaning makes no difference to performance",
        "Stop repeating it and look further",
        "The coil behind the filter may be fouled, which is a professional clean",
      ],
    ],
  },
  sections: [
    {
      title: "Why this is the one job worth doing yourself",
      paragraphs: [
        "Manufacturer troubleshooting guidance identifies clogged filters as one cause of reduced airflow, poor heating or cooling, water leakage, odor, and coil icing. The filter is also a component many operating manuals explicitly identify for owner maintenance.",
        "Use the inspection and cleaning interval in the exact operating manual. Some documented units call for checks as often as every two weeks during heavy use, while other filters and room conditions require a different schedule. Dust, pets, and long run hours load a filter faster than light seasonal use, so treat the published interval as a starting point and look at the filter rather than assume it is still clean.",
      ],
    },
    {
      title: "The mistakes that cost money",
      paragraphs: [
        "Avoid water hotter than the manual permits and avoid forceful vacuum suction, both of which manufacturers warn can damage filter material. A damaged or distorted filter may not fit its guides correctly.",
        "Do not refit a washable filter until it is completely dry, and do not wash a separate element unless the exact manual permits it. Different filter layers can have different care and replacement instructions even when they sit in the same panel.",
      ],
    },
    {
      title: "Where the owner boundary sits",
      paragraphs: [
        "Clean only the filters and exposed surfaces that the exact operating manual identifies as user-serviceable. A front panel that opens by hand does not make every component behind it an owner-maintenance item.",
        "Coil, drain-pan, and blower cleaning can require disassembly and protection of electrical parts. Unless the model manual gives an owner procedure, those components belong within professional maintenance rather than this filter routine.",
      ],
    },
  ],
  safeChecks: [
    "Turn the unit off, open only the user-access panel, and photograph the filter orientation before removal.",
    "Vacuum gently or wash only if the manual identifies the filter as washable; use mild detergent when specified and dry completely out of direct heat.",
    "Reinstall the dry filter securely and reset a filter reminder only by the model's documented procedure.",
  ],
  professionalEscalation: [
    "Stop if access requires screws, electrical covers, coil contact, or disassembly beyond the owner manual.",
    "A dirty blower wheel, coil, drain pan, or damaged filter needs model-appropriate parts or professional cleaning.",
  ],
  serviceHandoff:
    "If cleaning has not restored performance, tell the technician how often you clean the filters, how loaded they were, whether any additional elements are fitted and when they were last replaced, and whether the coil behind the filter looks dirty.",
  faqs: [
    {
      question: "How often should I clean a mini split filter?",
      answer:
        "Use the interval in the exact operating manual and inspect more often when the room is dusty or the system runs heavily. Manufacturer examples range from roughly two-week checks in peak use to monthly cleaning in lighter use.",
    },
    {
      question: "Can I wash the filter in hot water?",
      answer:
        "Use only the water temperature permitted by the exact manual. Documented procedures commonly specify cool or lukewarm water because excessive heat can deform filter material.",
    },
    {
      question: "How long does a washed filter take to dry?",
      answer:
        "Let it dry completely by the method in the exact manual before refitting. Do not use direct heat or sun where the manufacturer prohibits it.",
    },
    {
      question: "Do I need to replace the filter or just clean it?",
      answer:
        "Some cited mesh filters are reusable, but replacement rules differ by filter and model. Replace a filter when its manual or maintenance schedule requires it, or when the documented damage criteria apply; follow separate instructions for additional elements.",
    },
    {
      question: "Cleaning the filter did not help. What now?",
      answer:
        "Look past the filter. A coil that has been collecting dust for years, a fouled blower wheel, or a fault unrelated to airflow will not respond to filter cleaning, and repeating it is not going to change that.",
    },
  ],
  sourceIds: [
    "fujitsu-filter-manual",
    "fujitsu-aduh-operation",
    "trane-mini-split-filters",
    "trane-ductless-maintenance",
  ],
  relatedContent: ["/equipment/", "/mini-split-not-cooling/", "/mini-split-smells-musty/"],
  keywords: [
    "clean mini split filter",
    "mini split filter cleaning",
    "how to wash ductless filter",
    "mini split filter maintenance",
    "mini split filter reset",
  ],
});
