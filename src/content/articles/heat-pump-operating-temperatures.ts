import { publish } from "./publish";

/**
 * The confusion this page exists to fix is a single conflation: people read
 * the lowest permitted operating temperature as the lowest useful one. It is
 * a boundary, not a promise, and the capacity table is a separate document
 * answering a separate question. Everything else follows from that.
 */
export const heatPumpOperatingTemperatures = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "Heat-pump operating temperature and real capacity",
  slug: "heat-pump-operating-temperatures",
  path: "/heat-pump-operating-temperatures/",
  description:
    "The difference between a permitted operating range and delivered capacity, how to read an extended capacity table, and what a balance point tells you.",
  articleType: "guide",
  equipmentType: "heat-pump",
  problemType: "ambient-limits",
  models: [
    "Air-source ductless and ducted heat pumps",
    "Figures apply to one matched system at stated indoor and outdoor conditions",
  ],
  directAnswer:
    "A published minimum operating temperature says the manufacturer permits the equipment to run there. It does not say how much heat it will deliver. Available capacity falls as outdoor temperature falls, and only the extended capacity table for that matched system shows by how much.",
  scopeNotice:
    "Operating ranges and capacity tables belong to a specific matched system. A low-temperature figure quoted for a product family, or for the largest model in it, does not transfer to a different capacity, a different indoor-unit combination, or a multi-zone arrangement.",
  layout: ["comparisonTable", "sections", "figures"],
  symptoms: [
    "What a stated operating range does and does not permit.",
    "How to read delivered capacity at your own design temperature.",
    "What the balance point is and why backup heat is designed around it.",
  ],
  causes: [
    "Falling outdoor temperature reduces the heat available at the coil and raises the temperature lift the compressor works across.",
    "Time spent in defrost is time not spent heating, which reduces output over an hour.",
  ],
  comparisonTable: {
    caption: "Three documents, three different answers",
    columns: ["Document", "The question it answers", "What it cannot tell you"],
    rows: [
      [
        "Operating range",
        "May the equipment run at this outdoor temperature?",
        "How much heat arrives when it does",
      ],
      [
        "Extended capacity table",
        "How many BTU per hour at this outdoor and indoor condition?",
        "Whether that is enough for your building",
      ],
      [
        "Load calculation",
        "How much heat the building needs at that condition",
        "What the equipment can supply",
      ],
    ],
  },
  sections: [
    {
      title: "A boundary is not a capability",
      paragraphs: [
        "An operating range is a permission. Inside it, the manufacturer represents that the equipment is designed to run and that its protections are set for those conditions. Outside it, protections may reduce output or stop the machine, and the manufacturer has not represented normal operation.",
        "Capacity is a separate matter. Two systems can share a stated minimum operating temperature and deliver different amounts of heat there. Reading the boundary as a performance claim is how a system ends up permitted to run on the coldest night of the year while the house gets colder.",
      ],
    },
    {
      title: "Why output falls with the temperature",
      paragraphs: [
        "Heat has to come from somewhere, and the outdoor coil is where it is collected. Colder air holds less heat available at the coil surface, so less refrigerant can be boiled per pass and less heat is carried indoors.",
        "At the same time the compressor is working across a wider gap, from a colder outdoor coil to an indoor coil that still has to be warm enough to heat a room. That larger lift costs more electrical input for each unit of heat moved, which is why efficiency falls alongside capacity.",
        "Defrost adds a third effect. Cold damp conditions bring the cycles closer together, and each one spends operating time clearing the coil rather than heating the house.",
      ],
    },
    {
      title: "Reading the capacity table",
      paragraphs: [
        "An extended capacity table is indexed by outdoor temperature down one axis and indoor condition across the other. Find your local heating design temperature, read the heating capacity at the indoor condition you intend to hold, and note whether the figure is a maximum or a rated output.",
        "Then compare it with the building's calculated heat loss at the same outdoor temperature. If capacity exceeds load, the heat pump can hold the house on its own at that condition. If not, the shortfall is what backup heat is sized to cover.",
        "Check the table is for the pairing being quoted. Multi-zone outdoor units publish capacity for combinations, and the figure for one head depends on what else is connected and running.",
      ],
    },
    {
      title: "The balance point",
      paragraphs: [
        "Plot delivered capacity against building load across a range of outdoor temperatures and the two lines cross. That crossing is the balance point: the outdoor temperature below which the heat pump alone can no longer meet the load.",
        "A balance point is a design output, not a fault. It tells the designer where supplementary heat has to be available and supports an estimate of annual runtime. Lowering the balance point below the local design temperature reduces backup demand; placing it above that temperature increases demand.",
      ],
    },
  ],
  figures: [
    {
      title: "Checking one design condition",
      description:
        "Four readings, taken in this order. Reversing the order is how a system gets specified on a headline temperature.",
      nodes: [
        { label: "Design temperature", detail: "The published winter condition for your location" },
        { label: "Building load", detail: "Calculated heat loss at that outdoor temperature" },
        { label: "System capacity", detail: "Extended table output for the matched pairing" },
        { label: "Shortfall", detail: "The gap backup heat is sized to cover, if any" },
      ],
    },
  ],
  faqs: [
    {
      question: "Will a heat pump still heat at its minimum temperature?",
      answer:
        "It is permitted to run there. Whether it heats the house depends on the capacity published for that condition against the building's load at the same condition. Those are two different tables and both have to be checked.",
    },
    {
      question: "Why does my heat pump struggle on the coldest days?",
      answer:
        "Available capacity falls as outdoor temperature falls while the building's demand rises, and defrost consumes some of the operating time. Below the system's balance point the two no longer meet without supplementary heat.",
    },
    {
      question: "Are all cold-climate heat pumps the same?",
      answer:
        "No. The label groups equipment broadly, and models sold under it differ in capacity at low temperature. Compare extended capacity data for the exact matched systems at the same outdoor and indoor conditions.",
    },
    {
      question: "What is a balance point in simple terms?",
      answer:
        "The point where the two curves cross: available output falling as it gets colder, building demand rising. Above that outdoor temperature the heat pump keeps up alone; below it, something has to make up the shortfall.",
    },
  ],
  sourceIds: ["daikin-mxs-engineering", "gree-product-catalog", "fujitsu-product-library"],
  relatedContent: [
    "/mini-split-not-heating/",
    "/heat-pump-outdoor-unit-iced-over/",
    "/how-heat-pump-defrost-works/",
    "/heat-pump-vs-furnace/",
    "/senville-vs-pioneer-mini-splits/",
  ],
  glossaryTerms: ["heat-pump", "balance-point", "auxiliary-heat", "defrost-cycle"],
  keywords: [
    "heat pump operating temperature",
    "heat pump capacity cold weather",
    "heat pump balance point",
    "mini split low temperature heating",
  ],
});
