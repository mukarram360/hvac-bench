import { publish } from "./publish";

export const bryantEvolutionHeatSourceLockouts = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Bryant Evolution heat-source lockouts: two temperatures, opposite jobs",
  slug: "evolution-heat-source-lockouts",
  path: "/brands/bryant/evolution-heat-source-lockouts/",
  description:
    "Bryant Evolution separates a heat-pump lockout from a furnace or auxiliary-heat lockout. Mixing up the two reverses the intended changeover.",
  articleType: "guide",
  brand: "bryant",
  equipmentType: "controls-thermostats",
  productFamily: "Bryant Evolution Connex controls applied to heat-pump systems with backup heat",
  models: ["Evolution Connex control covered by II-SYSTXBBECC-12", "Compatible Bryant heat pump with furnace, electric, or hydronic backup"],
  problemType: "heat-source-lockout-configuration",
  symptomFamily: "no-heating",
  directAnswer:
    "HP Lockout is the outdoor temperature below which the heat pump is withheld. Furnace, Electric Heat, or Hydronic Lockout is the temperature above which backup heat is withheld. They face opposite directions and both default to None in the cited control instructions.",
  scopeNotice:
    "These settings belong to the Bryant Evolution Connex control and only appear for compatible configured equipment. Geothermal and dual-fuel arrangements have additional limits described in the installation instructions.",
  symptoms: ["Backup heat runs in weather where the owner expected the heat pump, or the heat pump remains active near the chosen changeover."],
  causes: [
    "The two lockout names are easy to read as one balance point even though each disables a different heat source on a different side of its value.",
    "Leaving a lockout at None delegates the decision to other control logic instead of creating a fixed outdoor-temperature boundary.",
  ],
  decisionTable: {
    caption: "Bryant Evolution lockout directions",
    columns: ["Setting", "Published range", "Source disabled when"],
    rows: [
      ["HP Lockout", "-20 to 55 degrees Fahrenheit, or None", "Outdoor temperature is below the setting"],
      ["Furnace, electric, or hydronic lockout", "15 to 55 degrees Fahrenheit, or None", "Outdoor temperature is above the setting"],
      ["Defrost with backup heat", "Yes or No; default Yes", "Controls backup operation during defrost"],
    ],
  },
  figures: [{
    title: "Two outdoor boundaries gate two heat sources",
    description: "The heat-pump boundary closes the compressor side as weather gets colder. The backup boundary closes furnace, electric, or hydronic heat as weather gets warmer.",
    nodes: [
      { label: "Colder side", detail: "HP Lockout can withhold the compressor" },
      { label: "Middle range", detail: "Eligibility depends on both selected values" },
      { label: "Warmer side", detail: "Backup lockout can withhold the second source" },
    ],
  }],
  sections: [
    {
      title: "The gap or overlap between settings is intentional configuration",
      paragraphs: [
        "A low HP Lockout lets the heat pump remain eligible deeper into cold weather. A high backup-heat lockout withholds the furnace or electric heaters through more mild weather. The relationship between the values determines where only one source is eligible and where the control may choose between sources.",
        "Bryant notes that simultaneous heating and cooling demand logic may override a preferred source when it cannot deliver the requested heat. A homeowner should therefore record actual outdoor temperature, active equipment icons, and the selected lockouts before describing an override as a control failure.",
        "Weather data quality matters as well. A lockout decision is only as good as the outdoor value available to the control. If the displayed temperature is implausible, resolve the sensor or data path before retuning both source boundaries around a bad input.",
      ],
    },
    {
      title: "Do not confuse source lockout with the furnace limit switch",
      paragraphs: [
        "A heat-source lockout is a thermostat decision based on outdoor temperature. A furnace limit switch is a safety and blower-control device responding to temperature inside the furnace. One can prevent the furnace from being selected in mild weather; the other can stop burners after the furnace has been selected.",
        "Lockout values should come from the installed heat-pump performance, backup source, utility costs, and design decision. They are installer settings rather than universal Bryant recommendations. Capture the screen and ask the commissioning contractor why each boundary was chosen before changing it.",
      ],
    },
  ],
  faqs: [
    { question: "What is the default Bryant HP Lockout?", answer: "The cited Evolution instructions show None as the default, meaning no fixed compressor cutoff has been entered in that setting." },
    { question: "What does furnace lockout above a temperature mean?", answer: "It withholds the furnace or other configured backup source when outdoor temperature is above the selected value. It is the opposite direction from HP Lockout." },
    { question: "Is heat-source lockout the same as a furnace limit trip?", answer: "No. Source lockout is control configuration based on outdoor temperature. A limit trip is a furnace safety response inside an operating heat call." },
  ],
  sourceIds: ["bryant-evolution-install", "bryant-furnace-support"],
  relatedContent: ["/brands/bryant/", "/brands/bryant/furnace-limit-switch-keeps-tripping/", "/heat-pump-vs-furnace/"],
  glossaryTerms: ["balance-point", "auxiliary-heat", "thermostat"],
  keywords: ["bryant heat pump lockout", "evolution furnace lockout", "bryant heat source lockouts", "bryant aux heat outdoor temperature"],
});
