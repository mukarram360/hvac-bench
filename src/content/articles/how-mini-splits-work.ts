import { publish } from "./publish";

/**
 * The question behind "how do mini-splits work" is nearly always one of three:
 * where does the heat go, why are there two model numbers, and why does it run
 * without stopping. The page answers those in that order and lets the physics
 * carry only as much weight as each answer needs.
 */
export const howMiniSplitsWork = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "How a mini-split works: the path heat actually takes",
  slug: "how-mini-splits-work",
  path: "/how-mini-splits-work/",
  description:
    "What a ductless system does with heat, why the indoor and outdoor units are rated as a pair, and which running behaviour is designed rather than broken.",
  articleType: "guide",
  equipmentType: "ductless-mini-split",
  models: [
    "Single-zone and multi-zone ductless heat pumps",
    "Cooling-only ductless air conditioners, which have no reversing valve",
  ],
  problemType: "system-operation",
  directAnswer:
    "A mini-split does not make cold. It moves heat along a sealed refrigerant loop between an indoor coil and an outdoor coil, and a heat-pump model reverses the direction of that move to heat instead of cool.",
  scopeNotice:
    "The refrigeration path described here is shared across ductless equipment. Indoor styles, refrigerant, control logic, operating limits, and multi-zone combination rules are set by each product family and are read from the manual for your exact indoor and outdoor models.",
  layout: ["figures", "sections", "decisionTable", "branches"],
  symptoms: [
    "What heat is doing at each end of the system, in cooling and in heating.",
    "Why performance belongs to an indoor and outdoor pair rather than to one box.",
    "Which running behaviour is designed and which is worth investigating.",
  ],
  causes: [
    "Cooling-only equipment has no reversing valve and cannot heat, whatever the remote offers.",
    "Multi-zone systems share one compressor, so one head's behaviour depends on what the others are doing.",
  ],
  figures: [
    {
      title: "The loop, in cooling",
      description:
        "Four things happen in sequence, and each one sets up the next. Heating runs the same loop with the two coils trading jobs.",
      nodes: [
        {
          label: "Indoor coil",
          detail: "Cold liquid refrigerant boils, taking heat out of room air blown across it",
        },
        {
          label: "Compressor",
          detail: "Raises the vapour pressure, which raises the temperature it can reject heat at",
        },
        {
          label: "Outdoor coil",
          detail: "Hot vapour condenses and dumps the room's heat into outdoor air",
        },
        {
          label: "Metering device",
          detail: "Drops the pressure again so the liquid is cold enough to boil indoors",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Nothing is cooled, something is moved",
      paragraphs: [
        "The room gets cooler because its heat is somewhere else. Refrigerant boils at a low temperature when its pressure is low, so a coil full of cold boiling refrigerant will pull heat out of any air warmer than it. That is the indoor half.",
        "The compressor then squeezes that vapour. Pressure and temperature rise together, and the vapour leaves the compressor hotter than the outdoor air, which is the only reason it can shed heat outside on a summer day. The outdoor fan carries that heat away and the vapour turns back into liquid.",
        "This is why an outdoor unit blows warm air in cooling, and why running a mini-split with the outdoor unit boxed in makes the whole system worse. The system needs somewhere to put what it took out.",
      ],
    },
    {
      title: "Heating is the same loop, pointed the other way",
      paragraphs: [
        "A heat-pump model adds a reversing valve, which swaps which coil boils and which coil condenses. In heating, the outdoor coil becomes the one absorbing heat and the indoor coil becomes the one giving it up. Outdoor air still holds usable heat well below freezing.",
        "Two consequences follow. The outdoor coil now runs colder than the air around it, so moisture from that air freezes onto it and has to be melted off at intervals. And a cooling-only model, which has no reversing valve, cannot be made to heat by any setting on the remote.",
      ],
    },
    {
      title: "Two model numbers, one rating",
      paragraphs: [
        "A ductless installation is at least two products. The indoor head and the outdoor unit each carry a full model number, and a certified efficiency or capacity figure describes an approved pairing of the two, not either one on its own.",
        "That matters when reading a specification, ordering a part, or looking up a fault code. A series number on a marketing page can cover a range of capacities with different compressors and different limits. The data plate on the equipment is the identity that manuals and parts lists are written against.",
      ],
    },
    {
      title: "Why it keeps running when the room is comfortable",
      paragraphs: [
        "Inverter equipment varies compressor speed rather than switching between full output and off. Once a room is near its target, the system can settle at a fraction of its rated capacity and stay there, replacing heat as fast as the room loses it.",
        "Long, quiet, low-output running is therefore the design working, not a system that has forgotten to stop. The behaviour worth attention is the opposite one: short bursts of full output with the room never settling.",
      ],
    },
  ],
  decisionTable: {
    caption: "Behaviour that gets misread as a fault",
    columns: ["What you notice", "What the design says", "When it is worth a second look"],
    rows: [
      [
        "The unit runs for hours without stopping",
        "An inverter holds a low output instead of cycling off",
        "Room temperature never reaches the setting despite the long run",
      ],
      [
        "Outdoor air feels hot in summer",
        "That is the heat the room lost, being rejected outside",
        "Discharge air is blowing back into the coil inlet",
      ],
      [
        "Indoor heat pauses in winter and the outdoor unit steams",
        "Frost is being melted off the outdoor coil",
        "The pause repeats every few minutes or ice does not clear",
      ],
      [
        "One head in a multi-zone system feels weaker",
        "Connected heads share one compressor's output",
        "It stays weak when the other heads are switched off",
      ],
    ],
  },
  diagnosticBranches: [
    {
      title: "One indoor unit, one outdoor unit",
      observation:
        "A single outdoor unit serves one head, and the two model numbers appear together on the invoice or the certificate.",
      action:
        "Read capacity, efficiency, and operating limits from that pairing. A figure quoted for the series is a range, and the pair sits somewhere inside it.",
    },
    {
      title: "Two or more heads on one outdoor unit",
      observation:
        "Several indoor units are piped back to one condenser, either directly or through a branch box, and they can operate in different rooms at once.",
      action:
        "Check the manufacturer's approved combination table. Total connected capacity, permitted head sizes, and simultaneous demand all shape what any one room receives.",
    },
    {
      title: "The remote offers heat but nothing warm arrives",
      observation:
        "Heat mode can be selected and the indoor fan responds, yet supply air never becomes warmer than the room over a long run.",
      action:
        "Confirm from the outdoor model number whether the equipment is a heat pump at all. Cooling-only ductless units are sold with remotes that carry an unused heat symbol.",
    },
  ],
  faqs: [
    {
      question: "Does a mini-split bring in fresh air?",
      answer:
        "A standard ductless head recirculates the air already in the room. It filters and conditions that air but adds no outdoor air, so ventilation stays a separate question unless the exact product documents a fresh-air connection.",
    },
    {
      question: "Why does the outdoor unit blow hot air in summer?",
      answer:
        "Because that is the heat taken out of the room. Cooling relocates heat rather than destroying it, and the outdoor coil is where it gets released, which is why blocking that airflow reduces indoor cooling.",
    },
    {
      question: "Can one outdoor unit run several rooms?",
      answer:
        "A multi-zone outdoor unit is built for it, within limits the manufacturer publishes: how many heads, which capacities, and what total connected capacity the compressor is approved for. A single-zone unit cannot be extended this way.",
    },
    {
      question: "Is a mini-split the same thing as a heat pump?",
      answer:
        "A ductless mini-split heat pump is one form of air-source heat pump. Cooling-only ductless models exist too, and they share the same layout without the reversing valve that lets the loop run backwards.",
    },
  ],
  sourceIds: ["doe-heat-pumps", "daikin-ductless-lineup", "gree-product-catalog"],
  relatedContent: [
    "/mini-split-not-cooling/",
    "/mini-split-not-heating/",
    "/inverter-technology-explained/",
    "/single-zone-vs-multi-zone-mini-split/",
    "/how-heat-pump-defrost-works/",
  ],
  glossaryTerms: ["ductless-mini-split", "compressor", "reversing-valve", "expansion-valve"],
  keywords: [
    "how mini splits work",
    "ductless heat pump operation",
    "mini split components",
    "does a mini split bring in fresh air",
  ],
});
