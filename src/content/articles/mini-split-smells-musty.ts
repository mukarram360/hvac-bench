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
    "Filter cleaning is owner work on most models and internal cleaning is not. Where the boundary sits for your equipment is set by its operating manual, and some units also offer a drying or self-clean function that changes what routine care involves.",
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
        "This pattern fits odours held on damp internal surfaces being carried off by the first airflow. Clean the filter, and if your model has a drying or self-clean function, use it as the manual describes.",
    },
    {
      title: "The smell appears only in cooling",
      observation:
        "Heating and fan-only operation smell normal, and the odour arrives with cooling.",
      action:
        "Note that, because it points at moisture. Cooling condenses water onto the coil, and a coil or drain pan that stays damp is where this kind of odour develops.",
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
    columns: ["When you notice it", "Most likely origin", "Reasonable response"],
    rows: [
      [
        "Only for a few minutes after start-up",
        "Moisture and dust on internal surfaces being disturbed by airflow",
        "Clean the filter and use any documented drying function",
      ],
      [
        "Whenever cooling runs, continuously",
        "Damp conditions on the coil or in the drain pan",
        "Book a professional internal clean and have the drain checked",
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
        "In cooling, the indoor coil is below the dew point of the room, so water condenses on it continuously. That water carries dust that has passed the filter, and it collects in a pan below. The result is a dark, permanently damp surface with a food supply, which is exactly the environment that biological growth prefers.",
        "This is why the odour is so often worst at start-up. While the fan is off, growth on those surfaces sits undisturbed. When the fan starts, the first burst of air passes over them and carries the smell into the room, then the effect diminishes as the surfaces dry in the airstream.",
      ],
    },
    {
      title: "What owner cleaning can and cannot reach",
      paragraphs: [
        "Cleaning the filter is worthwhile and it is the part of the airflow path an owner is meant to touch. It removes accumulated dust and it stops that dust adding to what collects on the coil. On a mildly smelly unit that has been neglected, it can be enough.",
        "What it does not reach is the coil itself, the drain pan, and the blower wheel, which is where an established musty smell usually lives. Those are cleaned by dismantling part of the indoor unit, protecting the electrics, and using chemistry appropriate to aluminium fins. Aerosol coil cleaners sold for the purpose frequently make things worse by leaving residue on a surface that then stays wetter for longer.",
      ],
    },
    {
      title: "Prevention is mostly about drying",
      paragraphs: [
        "The single most effective habit is letting the indoor unit dry out rather than stopping it wet. Many models include a drying or self-clean function that runs the fan for a period after cooling ends to evaporate moisture from the coil, and switching it on costs nothing.",
        "Where that function does not exist, running fan-only for ten or fifteen minutes at the end of a cooling session does much the same job. Combined with cleaning the filter on the interval the manual gives, it addresses the moisture rather than the smell, which is the only version of this that lasts.",
      ],
    },
  ],
  figures: [
    {
      title: "Where moisture sits between cooling cycles",
      description:
        "An odour that arrives with the fan is usually about surfaces that stayed wet, so the useful question is where water lingers.",
      nodes: [
        { label: "Coil surface", detail: "Condensation forming during every cooling run" },
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
        "Moisture and dust settle on internal surfaces while the fan is off, and the first airflow carries the smell into the room. Cleaning the filter helps, and using a drying or self-clean function where your model has one addresses the moisture that causes it.",
    },
    {
      question: "Can I spray a coil cleaner into the indoor unit?",
      answer:
        "It is a common way to make things worse. Aerosol products leave residue on the fins and in the drain pan, which holds moisture and feeds the problem. Proper internal cleaning is done with the unit partly dismantled and the electrics protected.",
    },
    {
      question: "Is a musty smell from the air conditioner harmful?",
      answer:
        "That is a question for a medical professional rather than a technical page, particularly if anyone in the household has asthma or allergies. What is fair to say is that the smell indicates dampness and soil that should be cleaned rather than masked.",
    },
    {
      question: "How do I stop it coming back?",
      answer:
        "Let the unit dry after cooling, either with a built-in drying function or by running fan-only for ten to fifteen minutes at the end of a session, and keep to the filter cleaning interval in the manual. The aim is to stop surfaces staying wet.",
    },
  ],
  sourceIds: ["fujitsu-troubleshooting", "fujitsu-filter-manual"],
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
