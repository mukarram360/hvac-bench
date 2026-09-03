import { publish } from "./publish";

/**
 * A Seiya quote that names one model number is naming half a product. The
 * specification splits the data across the two boxes in a way that makes this
 * concrete: the operating range is published against the outdoor unit and the
 * airflow and sound against the indoor one, so neither sheet answers a whole
 * question on its own.
 */
export const toshibaSeiyaMatchedPairs = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Toshiba Seiya S4: the indoor and outdoor pair is the product",
  slug: "seiya-s4-matched-pairs",
  path: "/brands/toshiba/seiya-s4-matched-pairs/",
  description:
    "Every Seiya S4 indoor unit has one matching outdoor unit in Toshiba's specification, and the data you need is split between the two. Here is the map.",
  articleType: "guide",
  brand: "toshiba",
  equipmentType: "ductless-mini-split",
  productFamily: "Seiya S4 high-wall single split systems in the Toshiba residential specification",
  models: [
    "RAS-B05S4KVG-E with RAS-05E2AVG-E",
    "RAS-B10S4KVG-E with RAS-10E2AVG-E",
    "RAS-B16S4KVG-E with RAS-16E2AVG-E",
    "RAS-B24S4KVG-E with RAS-24E2AVG-E",
  ],
  problemType: "matched-system-identification",
  symptomFamily: "maintenance",
  directAnswer:
    "Each Seiya S4 indoor unit is specified against one outdoor unit carrying the same capacity number, so a RAS-B10S4KVG-E belongs with a RAS-10E2AVG-E. Quote both. The operating range is published on the outdoor unit and the airflow and sound on the indoor one.",
  scopeNotice:
    "This covers the Seiya S4 single split range as Toshiba lists it in the United Kingdom residential specification. Seiya indoor units are also sold for multi split applications, where the outdoor unit is a different product entirely and the pairing below does not describe the system.",
  layout: ["decisionTable", "figures", "sections"],
  symptoms: [
    "A quotation names one Toshiba model number and it is not clear whether that covers the whole system.",
    "A replacement indoor unit is being considered and nobody has confirmed what the outdoor unit is.",
    "A specification figure has been quoted and it is not clear which half of the system it belongs to.",
  ],
  causes: [
    "Toshiba publishes indoor and outdoor units as separate products with separate specification blocks.",
    "The performance data a buyer cares about is split between those blocks rather than repeated in both.",
  ],
  decisionTable: {
    caption: "Seiya S4 indoor unit to outdoor unit, by capacity number",
    columns: ["Indoor unit", "Outdoor unit", "What the number in the middle is"],
    rows: [
      ["RAS-B05S4KVG-E", "RAS-05E2AVG-E", "The capacity class the pair is rated at"],
      ["RAS-B07S4KVG-E", "RAS-07E2AVG-E", "The same class, carried on both model strings"],
      ["RAS-B10S4KVG-E", "RAS-10E2AVG-E", "Matching numbers are what identify the pair"],
      ["RAS-B13S4KVG-E", "RAS-13E2AVG-E", "The letters differ because the products differ"],
      ["RAS-B16S4KVG-E", "RAS-16E2AVG-E", "B marks the indoor unit, E the outdoor one"],
      ["RAS-B18S4KVG-E", "RAS-18E2AVG-E", "The suffix carries the series and the market"],
      ["RAS-B24S4KVG-E", "RAS-24E2AVG-E", "The top of the single split range"],
    ],
  },
  figures: [
    {
      title: "Which sheet answers which question",
      description:
        "Toshiba does not repeat the same figures on both sides of a pair. Knowing where each one is published stops a reader looking for a number on the sheet that was never going to carry it.",
      nodes: [
        { label: "Outdoor specification", detail: "Operating range for cooling and for heating" },
        { label: "Outdoor specification, sound", detail: "Sound pressure and power at high, and in silent" },
        { label: "Indoor specification", detail: "Air flow at high and low, and indoor sound levels" },
        { label: "Indoor specification, physical", detail: "Cabinet dimensions, weight, and pipe connections" },
      ],
    },
  ],
  sections: [
    {
      title: "Reading the two model strings",
      paragraphs: [
        "The indoor string opens RAS-B and the outdoor string opens RAS with no B. Both then carry the capacity number, and both end in a suffix that identifies the series and the market. On this range the indoor suffix is S4KVG-E and the outdoor is E2AVG-E, and the pairing is by the number in the middle.",
        "That structure is why a single number is ambiguous in conversation. Someone saying they have a Toshiba 10 has given the capacity class and nothing else, which does not identify the indoor cabinet, the outdoor unit, or the series any of it belongs to. Two full strings settle all of it.",
      ],
    },
    {
      title: "The operating range lives on the outdoor unit",
      paragraphs: [
        "Toshiba publishes the operating range against the outdoor product rather than the indoor one, which makes sense: the outdoor unit is the part exposed to the weather and the part whose limits stop the system. On the Seiya S4 outdoor range the specification gives a cooling operating range of minus 15 to 46 degrees Celsius and a heating operating range of minus 15 to 24 degrees Celsius.",
        "This matters when a system is being considered for a climate near either end. The question is answered on the outdoor sheet, and it is answered for that outdoor model, so it should be checked against the outdoor unit actually being quoted rather than against the range as a whole.",
      ],
    },
    {
      title: "Sound is published twice, and they are different numbers",
      paragraphs: [
        "Both sheets carry sound figures, and they are not interchangeable. The outdoor specification lists sound pressure and sound power for cooling, heating, and silent operation. The indoor specification lists the indoor unit's own levels at high and low fan speed.",
        "Sound pressure and sound power are also two different quantities. Pressure is what a measurement position experiences and depends on distance and surroundings; power is a property of the source. A figure quoted without saying which one it is, and for which unit, cannot be compared with anything.",
        "For a reader placing an outdoor unit near a boundary, the useful practice is to record which unit and which quantity each number belongs to before comparing products. Two manufacturers quoting different quantities look like a large difference and may not be one.",
      ],
    },
    {
      title: "What to write down before anyone quotes",
      paragraphs: [
        "Both model strings, in full, with every hyphen and trailing letter. The capacity number tells a supplier the class; the suffix tells them the series and the market variant, and those decide which documentation, which accessories, and which spare parts apply.",
        "If the indoor unit is going onto a multi split outdoor unit rather than its single split partner, say so explicitly. That is a different product arrangement with different pipe, capacity, and control considerations, and the pairing on this page does not describe it.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I replace just the indoor unit on a Seiya S4?",
      answer:
        "That is a question for the technician holding both model numbers. Toshiba specifies these as pairs, and a replacement indoor unit has to be compatible with the outdoor unit already installed, with the refrigerant, pipework, and control arrangement all confirmed rather than assumed.",
    },
    {
      question: "What does the B in RAS-B10S4KVG-E mean?",
      answer:
        "It appears on the indoor unit string and is absent from the matching outdoor string, RAS-10E2AVG-E. Read the pair by the capacity number in the middle rather than by trying to interpret every letter.",
    },
    {
      question: "Where is the operating range published?",
      answer:
        "On the outdoor unit specification. For the Seiya S4 outdoor range Toshiba gives a cooling range of minus 15 to 46 degrees Celsius and a heating range of minus 15 to 24 degrees Celsius, so the limits belong to the outdoor model being quoted.",
    },
    {
      question: "Does this pairing apply to multi split installations?",
      answer:
        "No. Seiya indoor units are also available for multi split use, where several indoor units share one outdoor unit that is a different product with its own specification. The one-to-one map here describes the single split range only.",
    },
  ],
  sourceIds: ["toshiba-ras-residential-spec", "toshiba-seiya-manuals"],
  relatedContent: [
    "/brands/toshiba/",
    "/brands/toshiba/seiya-heating-pause-defrost/",
    "/how-to-find-mini-split-model-number/",
    "/single-zone-vs-multi-zone-mini-split/",
  ],
  glossaryTerms: ["data-plate", "ductless-mini-split", "multi-zone-system"],
  keywords: [
    "toshiba seiya s4 model numbers",
    "ras-b10s4kvg-e outdoor unit",
    "toshiba seiya matched pair",
    "toshiba seiya operating range",
    "toshiba indoor outdoor model pairing",
  ],
});
