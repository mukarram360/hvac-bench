import { publish } from "./publish";

export const nestHeatPumpBalance = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Nest Heat Pump Balance: comfort, savings, and the dual-fuel exception",
  slug: "heat-pump-balance",
  path: "/brands/nest/heat-pump-balance/",
  description:
    "Nest Heat Pump Balance changes how readily auxiliary heat joins a heat pump. Dual-fuel systems do not use it and rely on a manual lockout instead.",
  articleType: "guide",
  brand: "nest",
  equipmentType: "controls-thermostats",
  productFamily: "Google Nest thermostats configured for a heat pump with auxiliary heat",
  models: ["Nest Learning Thermostat", "Nest Thermostat", "Nest Learning Thermostat fourth generation"],
  problemType: "auxiliary-heat-balance",
  symptomFamily: "no-heating",
  directAnswer:
    "Max Comfort permits auxiliary heat sooner, Max Savings holds it back longer, and Balanced sits between them. Off exposes a manual auxiliary lockout. Nest excludes dual-fuel systems from Heat Pump Balance because those systems use a separate source-changeover setting.",
  scopeNotice:
    "Heat Pump Balance appears only when Nest detects a heat pump with auxiliary heat and has the required connectivity. Menu paths differ between Nest app, Google Home app, and thermostat generation.",
  symptoms: ["AUX heat runs more or less than expected, or the Heat Pump Balance menu is absent."],
  causes: [
    "The selected balance changes the control's comfort-versus-auxiliary-use decision rather than changing heat-pump capacity.",
    "Equipment detection, wiring configuration, Wi-Fi state, or a dual-fuel setup can remove the feature from the menu.",
  ],
  comparisonTable: {
    caption: "Nest Heat Pump Balance choices",
    columns: ["Choice", "Auxiliary-heat tendency", "Control boundary"],
    rows: [
      ["Max Comfort", "Permits AUX at a higher lockout and earlier recovery", "Comfort has priority"],
      ["Balanced", "Uses an intermediate lockout strategy", "Compromise setting"],
      ["Max Savings", "Uses AUX later and less readily", "Heat pump carries more of the recovery"],
      ["Off", "Follows the manual AUX lockout", "User or installer sets the temperature"],
    ],
  },
  figures: [{
    title: "Nest chooses when a second heat source joins",
    description: "The heat pump begins as the primary source. Heat Pump Balance evaluates recovery and outdoor conditions, then permits auxiliary heat according to the selected comfort or savings preference.",
    nodes: [
      { label: "Heat pump", detail: "Primary electric heating source" },
      { label: "Balance logic", detail: "Applies the selected preference" },
      { label: "AUX heat", detail: "Additional source allowed when required" },
    ],
  }],
  sections: [
    {
      title: "The setting changes control timing, not the price of heat",
      paragraphs: [
        "Nest describes auxiliary heat as more expensive to run than the heat pump in the supported electric-backup arrangement. Max Savings tries to avoid that source longer, while Max Comfort accepts it sooner to reach setpoint. Actual cost and recovery still depend on the installed equipment, tariff, weather, and house load.",
        "Record the selected balance, outdoor temperature, target change, time AUX first appears, and whether the heat pump was already running. A large manual setpoint jump creates a different recovery test from holding one steady temperature through falling outdoor conditions.",
        "Use a full heating period for comparison. An AUX icon seen during outdoor-coil defrost answers a different need from auxiliary heat that remains through a long room recovery. The setting influences both, but their triggers and durations should not be merged.",
      ],
    },
    {
      title: "Missing Heat Pump Balance can be correct configuration",
      paragraphs: [
        "The menu requires a heat pump plus auxiliary heat. A system identified as dual fuel does not use Heat Pump Balance and instead receives a manual lockout in Equipment settings. A heat pump without an auxiliary connection also has nothing for the feature to balance.",
        "Do not move thermostat conductors to make a menu appear. Check the equipment summary without touching wires, photograph terminal labels only if the display can be removed safely under Google's instructions, and call a professional if configuration does not match the installed system. E74 is a separate Rh power-loss diagnosis.",
      ],
    },
  ],
  faqs: [
    { question: "Which Nest Heat Pump Balance setting uses less AUX heat?", answer: "Max Savings holds auxiliary heat back more than Balanced or Max Comfort, but the installed system can still require AUX to maintain heating." },
    { question: "Why is Heat Pump Balance missing on a dual-fuel system?", answer: "Nest does not use the feature for dual fuel. Those systems switch between a heat pump and separate fuel source through a manual lockout strategy." },
    { question: "What happens when Heat Pump Balance is Off?", answer: "Nest follows an auxiliary-heat lockout temperature that is set manually instead of calculating the balance automatically." },
  ],
  sourceIds: ["nest-heat-pump-balance", "nest-pro-guide"],
  relatedContent: ["/brands/nest/", "/brands/nest/e74-no-power-rh/", "/heat-pump-vs-furnace/", "/brands/lennox/icomfort-replaced-with-ecobee-or-nest/"],
  glossaryTerms: ["auxiliary-heat", "balance-point", "thermostat"],
  keywords: ["nest heat pump balance", "nest max savings aux heat", "nest dual fuel lockout", "nest heat pump balance missing"],
});
