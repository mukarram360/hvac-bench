import { publish } from "./publish";

/**
 * One number decides which fuel heats the house at a given outdoor temperature,
 * and it lives in an installer menu nobody opens after commissioning. Homeowners
 * with a dual fuel system who have never heard of it are paying whatever the
 * default happened to be, which is the case this page is written for.
 */
export const goodmanHeatPumpLockoutTemperature = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Goodman GMVC dual fuel: the heat pump lockout temperature",
  slug: "gmvc-heat-pump-lockout-temperature",
  path: "/brands/goodman/gmvc-heat-pump-lockout-temperature/",
  description:
    "A setting on the GMVC furnace control decides the outdoor temperature below which gas takes over from the heat pump. The default is 45 degrees Fahrenheit.",
  articleType: "guide",
  brand: "goodman",
  equipmentType: "furnace",
  productFamily: "GMVC80 condensing gas furnaces paired with a heat pump",
  models: ["GMVC80 family covered by the cited installation instructions"],
  problemType: "dual-fuel-changeover",
  symptomFamily: "no-heating",
  directAnswer:
    "The control has a heat pump compressor lockout temperature, and the installation instructions state that the furnace acts as the primary heat source below it. The default is 45 degrees Fahrenheit.",
  scopeNotice:
    "This setting is documented in the Goodman installation instructions for the GMVC80 family and applies where the furnace is paired with a heat pump in a dual fuel arrangement. A furnace on its own has nothing to hand over to, and other Goodman control platforms present their menus differently.",
  layout: ["decisionTable", "figures", "sections"],
  symptoms: [
    "Gas heating runs in mild weather when the heat pump could have covered the load.",
    "The house feels short of heat in cold weather and the heat pump seems to be doing all of the work.",
    "A dual fuel system was installed and nobody knows at what temperature the changeover happens.",
  ],
  causes: [
    "The furnace control holds a heat pump compressor lockout temperature that decides which appliance is the primary heat source.",
    "The default is a factory value rather than a value chosen for the property, the equipment pairing, or the local fuel prices.",
  ],
  decisionTable: {
    caption: "Related GMVC settings that affect a dual fuel system",
    columns: ["Setting as documented", "Default", "What it decides"],
    rows: [
      [
        "Heat pump compressor lockout temperature",
        "45 degrees Fahrenheit",
        "Below this the furnace acts as the primary heat source",
      ],
      [
        "Gas heat operation during defrost",
        "High heat",
        "Whether the furnace runs low or high heat while the heat pump defrosts",
      ],
      [
        "Compressor off delay at the beginning and end of a defrost cycle",
        "30 seconds",
        "How the changeover into and out of defrost is sequenced",
      ],
      [
        "Maximum compressor run time between defrost cycles",
        "120 minutes",
        "How long the heat pump runs before a defrost is considered",
      ],
      [
        "Heat pump heating airflow on and off delays",
        "5 seconds on, 60 seconds off",
        "When the blower starts and stops around a heat pump call",
      ],
    ],
  },
  figures: [
    {
      title: "What the lockout temperature separates",
      description:
        "A dual fuel system has two appliances that can heat the house and one decision to make between them. The lockout temperature is where that decision is written down.",
      nodes: [
        { label: "Above the setting", detail: "The heat pump is the primary heat source" },
        { label: "The setting itself", detail: "Documented default of 45 degrees Fahrenheit" },
        { label: "Below the setting", detail: "The furnace acts as the primary heat source" },
        { label: "During defrost", detail: "Gas heat runs, at low or high heat as configured" },
      ],
    },
  ],
  sections: [
    {
      title: "Why the number is a decision rather than a specification",
      paragraphs: [
        "A heat pump and a gas furnace both heat the house, and which one should do it at a given outdoor temperature depends on things the factory cannot know. The heat pump's output and efficiency at that temperature, the price of gas against the price of electricity, and the load the house presents all bear on it, and all three vary by property and by year.",
        "So 45 degrees Fahrenheit is a starting point rather than an answer. Set too high, the furnace takes over while the heat pump would still have been the cheaper source, and gas is burned in weather where it did not need to be. Set too low, the heat pump is asked to carry conditions where its output has fallen, and the house recovers slowly.",
        "The setting is also the thing to check when a dual fuel system behaves unexpectedly. A homeowner who reports that the gas furnace runs on mild days has described the lockout temperature doing exactly what it was set to do.",
      ],
    },
    {
      title: "What happens during defrost",
      paragraphs: [
        "A heat pump in cold weather has to defrost its outdoor coil, and while it does so it is not heating the house. The GMVC control carries a setting for gas heat operation during defrost, with two options, low heat and high heat, and the documented default is high heat.",
        "That choice is a comfort and consumption trade. High heat covers the defrost period more decisively and burns more gas doing it; low heat is gentler and may allow a noticeable dip. Neither is wrong, and which suits a property depends on how long defrosts last there and how sensitive the occupants are to the supply air temperature.",
        "The control also holds a compressor off delay at the beginning and end of a defrost cycle, documented at 30 seconds. Its documented maximum compressor run time between defrost cycles is 120 minutes. Those values define defrost timing and how the handover is sequenced.",
      ],
    },
    {
      title: "Who should change it, and what to ask",
      paragraphs: [
        "These settings live in the installer menu on the furnace control, inside the cabinet. Reaching them means opening a furnace that contains gas piping and line voltage connections, which puts the adjustment with a technician rather than with an owner.",
        "The useful thing an owner can do is ask. What is the lockout temperature set to now, what was it set to at commissioning, and what would the installer recommend given the heat pump fitted and the way the house behaves. Those three questions turn an invisible default into a decision somebody has taken deliberately.",
        "It is worth asking again if the fuel picture changes. A setting chosen when electricity was expensive relative to gas is not automatically the right setting later, and nothing in the equipment revisits it.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the default heat pump lockout temperature on a GMVC furnace?",
      answer:
        "The installation instructions give 45 degrees Fahrenheit, and state that the furnace acts as the primary heat source below that temperature. It is a configurable value rather than a fixed property of the equipment.",
    },
    {
      question: "Why does my gas furnace run when it is not very cold?",
      answer:
        "On a dual fuel system that is what the lockout temperature does. Below the configured value the furnace becomes the primary heat source, so a value set high moves the changeover into milder weather.",
    },
    {
      question: "Does the furnace run during a heat pump defrost?",
      answer:
        "The control carries a setting for gas heat operation during defrost, offering low heat or high heat, with high heat as the documented default. That covers the period when the heat pump has reversed and is not heating the house.",
    },
    {
      question: "Can I change the lockout temperature myself?",
      answer:
        "It sits in the installer menu on the control board inside the furnace cabinet, alongside gas piping and line voltage connections. Ask the technician what it is set to and what they recommend rather than opening the cabinet.",
    },
  ],
  sourceIds: ["goodman-gmvc-install", "goodman-furnace-support"],
  relatedContent: [
    "/brands/goodman/",
    "/brands/goodman/gmvc-one-flash-lockout/",
    "/heat-pump-vs-furnace/",
    "/how-heat-pump-defrost-works/",
    "/brands/goodman/comfortbridge-with-nest-or-ecobee/",
  ],
  glossaryTerms: ["balance-point", "auxiliary-heat", "defrost-cycle"],
  keywords: [
    "goodman heat pump lockout temperature",
    "gmvc dual fuel changeover",
    "goodman furnace heat pump setting",
    "dual fuel balance point goodman",
    "goodman gas heat during defrost",
  ],
});
