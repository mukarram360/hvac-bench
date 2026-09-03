import { publish } from "./publish";

export const idealLogicMaxPreheat = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Ideal Logic Max preheat: On and Timed warm the hot-water exchanger",
  slug: "logic-max-preheat",
  path: "/brands/ideal-heating/logic-max-preheat/",
  description:
    "Logic Max Combi preheat can fire briefly without a tap opening so the plate heat exchanger stays warm. Preheat Active is a status, not a heat demand fault.",
  articleType: "guide",
  brand: "ideal-heating",
  equipmentType: "boiler",
  productFamily: "Ideal Logic Max Combi2 C boilers with domestic-hot-water preheat",
  models: ["Logic Max Combi2 C24", "Logic Max Combi2 C30", "Logic Max Combi2 C35"],
  problemType: "domestic-hot-water-preheat",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "When Logic Max preheat is On or Timed, the boiler can fire for a few seconds without a hot-water draw to keep its plate heat exchanger warm. The display can show Preheat Active during that demand. Turning preheat off removes this readiness cycle, not the ability to make hot water when a tap opens.",
  scopeNotice:
    "This behavior is documented for Logic Max Combi2 C models. Logic Max Heat2 and system boilers use stored-hot-water arrangements and show different normal-operation screens.",
  symptoms: ["The boiler fires briefly with no tap or room-heat request, or the display reads Preheat Active."],
  causes: [
    "The user-selected preheat function maintains temperature in the domestic-hot-water plate heat exchanger between draw-offs.",
    "Timed preheat limits that readiness behavior to its configured period, while On permits it whenever the control calls for maintenance heat.",
  ],
  comparisonTable: {
    caption: "Logic Max preheat choices",
    columns: ["Setting", "Between hot-water draws", "When a tap opens"],
    rows: [
      ["On", "Readiness cycles are enabled", "Boiler supplies domestic hot water"],
      ["Timed", "Readiness follows the configured time period", "Boiler supplies domestic hot water"],
      ["Off", "No preheat maintenance cycle", "Boiler still responds to a hot-water draw"],
    ],
  },
  figures: [{
    title: "Three demands can start the same burner",
    description: "Room heating, an open hot-water tap, and exchanger preheat reach the burner through separate control reasons. The status text identifies which request is active.",
    nodes: [
      { label: "Room demand", detail: "Central-heating circuit requests energy" },
      { label: "Tap demand", detail: "Domestic water begins flowing" },
      { label: "Preheat demand", detail: "Exchanger readiness is maintained" },
      { label: "Burner", detail: "Supplies the selected demand" },
    ],
  }],
  sections: [
    {
      title: "Preheat explains a burner start that the room thermostat did not request",
      paragraphs: [
        "A combination boiler has separate reasons to fire. Central heating follows room demand, a tap creates domestic-hot-water demand, and preheat can create a short maintenance demand while neither is active. The user guide's normal-operation screens label that third state directly.",
        "Check the display at the moment of the brief firing. Preheat Active accounts for the event without implying a stuck room thermostat. If the display instead shows a fault or the burner runs continuously, preserve that different state and do not force it into the preheat explanation.",
        "The timing is useful too. A short cycle ending with the readiness status is consistent with exchanger maintenance. Operation that continues while Preheat Active disappears should be followed through the new display message, because the control has moved to a different demand or condition.",
        "Use a tap test only after the status has returned to Ready. Note the idle period before the draw and how quickly stable hot water arrives. That comparison shows what preheat changes without interpreting every burner sound elsewhere in the day.",
      ],
    },
    {
      title: "Choose readiness against standby operation",
      paragraphs: [
        "Keeping the exchanger warm can shorten the initial hot-water wait, while allowing it to cool removes those maintenance firings. Timed mode is the middle choice when fast delivery matters in known periods but not through the whole day. The best setting follows household draw pattern rather than a universal efficiency claim.",
        "L2 is an ignition lockout on the related Logic Max fault guide. Preheat Active is normal operating text. If L2 appears, follow the ignition boundary and permitted reset limit instead of changing a hot-water convenience setting.",
      ],
    },
  ],
  faqs: [
    { question: "Why does my Ideal Logic Max fire when no tap is open?", answer: "If the display says Preheat Active and preheat is On or Timed, the boiler is maintaining warmth in the domestic-hot-water plate heat exchanger." },
    { question: "Will hot water stop if I turn preheat off?", answer: "No. The boiler still heats domestic water when a tap creates demand. The first delivery can take longer because the exchanger was not held warm." },
    { question: "Is Preheat Active an Ideal fault message?", answer: "No. It is a normal-operation status in the user guide. Faults use their own messages and codes, such as the separate L2 lockout." },
  ],
  sourceIds: ["ideal-logic-max-install", "ideal-logic-max-user"],
  relatedContent: ["/brands/ideal-heating/", "/brands/ideal-heating/logic-max-l2-fault/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["boiler", "thermostat", "error-code"],
  keywords: ["ideal logic max preheat", "preheat active ideal boiler", "logic max preheat timed", "ideal boiler fires no demand"],
});
