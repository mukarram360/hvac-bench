import { publish } from "./publish";

/**
 * The one comparison on the site where the honest answer depends on numbers
 * this page cannot know: local fuel and electricity prices. So it teaches the
 * arithmetic instead of guessing at the result, and it refuses to publish a
 * savings percentage, which is the thing every competing page does.
 */
export const heatPumpVsFurnace = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "Heat pump or furnace: it depends on your tariffs",
  slug: "heat-pump-vs-furnace",
  path: "/heat-pump-vs-furnace/",
  description:
    "How the two produce heat differently, the running-cost arithmetic you can do with your own prices, and the electrical and design questions a swap raises.",
  articleType: "comparison",
  equipmentType: "heat-pump",
  problemType: "equipment-comparison",
  models: [
    "Air-source heat pumps, ducted or ductless",
    "Gas, oil, and propane furnaces serving a duct system",
  ],
  directAnswer:
    "A furnace makes heat by burning fuel, so it can never deliver more energy than the fuel contains. A heat pump moves existing heat, so it can deliver several units of heat per unit of electricity. Which costs less to run depends on that ratio against your own fuel and electricity prices.",
  scopeNotice:
    "Running cost is arithmetic done with local prices, which change and which this page does not know. The method below is the comparison; the result belongs to your tariff, your climate, and your building. No savings percentage is published here because none would be honest.",
  layout: ["sections", "comparisonTable", "decisionTable", "branches"],
  symptoms: [
    "An existing furnace is near the end of its life and replacement options are open.",
    "Electrification, running cost, or emissions has put a heat pump on the table.",
    "Cooling is wanted as well as heating and the house currently has neither.",
  ],
  causes: [
    "Combustion efficiency is capped below one; a heat pump's coefficient of performance is above one.",
    "A heat pump's output and efficiency both fall as outdoor temperature falls, while a furnace's do not.",
  ],
  sections: [
    {
      title: "Two different physical jobs",
      paragraphs: [
        "A furnace converts fuel into heat. A modern condensing unit recovers most of the energy in the fuel, but the ceiling is the energy the fuel contains. Output does not change with the weather.",
        "A heat pump moves heat that already exists in outdoor air. Because it is transporting rather than creating, each unit of electricity can deliver more than one unit of heat, and that ratio is its coefficient of performance. The trade is that the ratio falls as it gets colder, exactly when the building needs the most.",
        "That is the whole comparison in one sentence: constant output at a capped efficiency, against variable output at an efficiency that can be several times higher but drops in cold weather.",
      ],
    },
    {
      title: "The arithmetic, which you can do yourself",
      paragraphs: [
        "For the furnace: divide the fuel price per unit of energy by its efficiency. A unit costing ten pence at ninety per cent efficiency delivers usable heat at about eleven pence per unit of energy.",
        "For the heat pump: divide the electricity price per unit of energy by the coefficient of performance at the outdoor temperature you care about. Electricity at twenty-five pence with a coefficient of three delivers heat at about eight pence per unit.",
        "Do it twice: once at a mild outdoor temperature, where the coefficient is high, and once at your design temperature, where it is low. The first tells you about the bulk of the season; the second tells you what the cold snaps cost. Both numbers come from the manufacturer's performance data for the specific system, not from a general figure.",
      ],
    },
    {
      title: "What a swap raises beyond running cost",
      paragraphs: [
        "Electrical capacity. A heat pump adds a substantial electrical load, and the incoming supply, the consumer unit or panel, and the available spare capacity all need checking before the equipment is chosen.",
        "Distribution. Heat pumps deliver at a lower supply air temperature than a furnace, so a duct system sized for hot furnace air can need larger ducts or more registers to deliver the same comfort at a lower temperature.",
        "Backup. If the design has a balance point above your design temperature, something has to cover the shortfall on the coldest days, and how that backup is provided and controlled is part of the design rather than an afterthought.",
      ],
    },
    {
      title: "Where each one is the stronger answer",
      paragraphs: [
        "A heat pump is the stronger answer where cooling is wanted as well as heating, since one machine does both, and where electricity is cheap relative to the available fuel.",
        "A furnace is the stronger answer where sustained low temperatures dominate the season, where fuel is cheap relative to electricity, or where the electrical supply cannot accommodate the load without an expensive upgrade.",
        "A dual arrangement, where a heat pump handles the mild majority of the season and a furnace takes the coldest hours, exists precisely because those two answers are both right at different outdoor temperatures.",
      ],
    },
  ],
  comparisonTable: {
    caption: "The same arithmetic, laid out for both",
    columns: ["Step", "Furnace", "Heat pump"],
    rows: [
      [
        "Energy price",
        "Fuel price per unit of energy",
        "Electricity price per unit of energy",
      ],
      [
        "Divide by",
        "Combustion efficiency, always below one",
        "Coefficient of performance, above one",
      ],
      [
        "Result",
        "Cost per unit of delivered heat, constant",
        "Cost per unit of delivered heat, varying with outdoor temperature",
      ],
      [
        "Do it again at",
        "The same figure holds all season",
        "Your design temperature, where the coefficient is lowest",
      ],
      ["Then add", "Nothing further", "The cost of backup below the balance point"],
    ],
  },
  decisionTable: {
    caption: "What to establish before deciding",
    columns: ["Question", "Why it changes the answer", "Where the figure comes from"],
    rows: [
      [
        "Fuel price per unit of energy",
        "Sets the furnace side of the comparison",
        "Your own bill, converted to a common energy unit",
      ],
      [
        "Electricity price per unit of energy",
        "Sets the heat pump side",
        "Your own bill, including any time-of-use rate",
      ],
      [
        "Coefficient of performance at design temperature",
        "The heat pump's efficiency when it matters most",
        "Performance data for the specific system",
      ],
      [
        "Heating design temperature",
        "The condition both must be judged at",
        "Published design conditions for your location",
      ],
      [
        "Electrical supply capacity",
        "Whether the heat pump can be connected as things stand",
        "Survey of the supply and the distribution board",
      ],
      [
        "Duct sizing",
        "Whether lower supply temperature can be distributed",
        "Assessment of the existing network",
      ],
      [
        "Cooling requirement",
        "A heat pump provides it; a furnace does not",
        "The brief for the building",
      ],
    ],
  },
  diagnosticBranches: [
    {
      title: "Cooling is wanted as well as heating",
      observation:
        "The building has no cooling and summer comfort is part of the reason for the project.",
      action:
        "A heat pump covers both from one machine and one set of equipment. Compare against a furnace plus separate cooling, which is two installations rather than one.",
    },
    {
      title: "The winter is long and hard",
      observation:
        "The heating design temperature is low and sustained cold is the normal condition rather than an exception.",
      action:
        "Run the arithmetic at the design temperature, not at a seasonal average, and price the backup strategy. This is where a dual arrangement becomes worth costing.",
    },
    {
      title: "The electrical supply is tight",
      observation:
        "The incoming supply, the board, or the available spare capacity is already close to its limit.",
      action:
        "Get the supply assessed before choosing equipment. A supply upgrade can be a significant share of the project cost and changes which option is cheaper overall.",
    },
  ],
  faqs: [
    {
      question: "Is a heat pump cheaper to run than a furnace?",
      answer:
        "It depends on your fuel price, your electricity price, and the system's coefficient of performance at your outdoor temperatures. Divide each energy price by its efficiency and compare the two results at both mild and design conditions.",
    },
    {
      question: "Do heat pumps work in cold weather?",
      answer:
        "They operate below freezing, and output and efficiency both fall as it gets colder. Whether that output meets the building's load at your design temperature comes from the extended capacity table against a load calculation.",
    },
    {
      question: "Can I keep my existing ducts if I switch?",
      answer:
        "Sometimes, but they should be assessed first. A heat pump delivers at a lower supply air temperature, so a network sized for hot furnace air may need modification to deliver the same comfort.",
    },
    {
      question: "What is a dual-fuel system?",
      answer:
        "A heat pump paired with a furnace, with controls that hand over at a chosen outdoor temperature. It exists because each is the more economical answer at a different part of the season.",
    },
  ],
  sourceIds: ["doe-heat-pumps", "doe-hvac-sizing", "ahri-directory"],
  relatedContent: [
    "/heat-pump-operating-temperatures/",
    "/ductless-vs-ducted-heat-pump/",
    "/btu-sizing-explained/",
    "/seer2-explained/",
  ],
  glossaryTerms: ["heat-pump", "cop", "balance-point"],
  keywords: [
    "heat pump vs furnace",
    "heat pump running cost",
    "dual fuel heat pump",
    "is a heat pump cheaper than gas",
  ],
});
