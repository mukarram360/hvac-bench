import { publish } from "./publish";

export const aristonClasAutoVsComfort = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Ariston Clas One Auto versus Comfort: heating control and hot-water readiness",
  slug: "clas-one-auto-vs-comfort",
  path: "/brands/ariston/clas-one-auto-vs-comfort/",
  description:
    "Auto adjusts the Clas One heating flow strategy from connected control data. Comfort keeps the domestic-hot-water exchanger warm between draws.",
  articleType: "guide",
  brand: "ariston",
  equipmentType: "boiler",
  productFamily: "Ariston Clas One and Clas System One boilers covered by the cited user manual",
  models: ["Clas One 24", "Clas One 30", "Clas One 38", "Applicable Clas System One models"],
  problemType: "auto-comfort-function-distinction",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Auto is a space-heating control function that adapts boiler operation to the installed sensors and controls. Comfort is a domestic-hot-water function that keeps the secondary exchanger warm during idle periods. Either can be active without the other because they serve different water circuits and user tasks.",
  scopeNotice:
    "The distinction follows the Clas One and Clas System One user literature. Comfort behavior applies to domestic-hot-water arrangements, while Auto depends on which compatible control and outdoor or room sensors the installer connected.",
  symptoms: ["AUTO or COMFORT appears on the display, and the boiler changes behavior when no obvious room or tap demand is present."],
  causes: [
    "Auto varies the heating operating regime using environmental conditions and connected devices.",
    "Comfort maintains heat in the domestic-hot-water exchanger so a later draw begins from a warmer state.",
  ],
  comparisonTable: {
    caption: "Clas One function split",
    columns: ["Function", "Controls", "Display evidence"],
    rows: [
      ["Auto", "Space-heating flow strategy", "AUTO indication is illuminated"],
      ["Comfort", "Domestic-hot-water readiness", "COMFORT indication is illuminated"],
      ["Winter mode", "Heating plus domestic hot water", "Operating-mode symbol, separate from both functions"],
      ["Summer mode", "Domestic hot water only", "Heating mode is withheld without cancelling hot water"],
    ],
  },
  figures: [{
    title: "Two buttons influence two different comfort paths",
    description: "Auto uses connected temperature information to shape space-heating flow. Comfort holds domestic-hot-water readiness in the secondary exchanger before the next tap opens.",
    nodes: [
      { label: "Auto", detail: "Adapts central-heating operation" },
      { label: "Comfort", detail: "Maintains hot-water exchanger readiness" },
      { label: "Display", detail: "Shows each function independently" },
    ],
  }],
  sections: [
    {
      title: "Auto needs installed information to make a useful decision",
      paragraphs: [
        "The user manual describes Auto as adapting operation to external conditions and the type of system installed. A room control, outdoor sensor, or thermoregulation accessory supplies the context. If those devices are absent or misconfigured, pressing Auto cannot create the missing measurement path.",
        "Heating flow can become lower in mild conditions because the control is matching delivery to demand rather than holding one manual target. Record room temperature, outdoor indication if present, flow target, and control model before deciding that a lower burner output is a fault.",
        "Change no installer parameters during that observation. A connected sensor and boiler form one control system, and the displayed AUTO state is only the visible end. An engineer needs the accessory model and commissioning values to explain why a particular target was selected.",
        "If AUTO is absent, verify the user button state before assuming the sensor failed. If it will not remain enabled, record the connected-control symbols and current operating mode. That distinction gives support a reproducible interface problem rather than a broad comfort complaint.",
      ],
    },
    {
      title: "Comfort explains idle hot-water preparation",
      paragraphs: [
        "Comfort keeps the secondary exchanger hot during periods without domestic draw. That can shorten the wait when a tap opens, and it can also produce brief boiler activity when the room thermostat is satisfied. The illuminated COMFORT text identifies the setting behind that activity.",
        "Error 501 is a flame-establishment lockout and belongs to a different decision path. Neither Auto nor Comfort is a repair for it. After the permitted reset boundary, repeated 501 requires a qualified gas engineer, while these two user functions can remain recorded as configuration context.",
      ],
    },
  ],
  faqs: [
    { question: "Does Ariston Auto control hot-water preheat?", answer: "No. Auto governs the heating operating strategy. The separate Comfort function maintains domestic-hot-water exchanger readiness." },
    { question: "Why does the Clas One fire when the room is warm?", answer: "If COMFORT is shown, a brief firing can maintain the hot-water exchanger. Check the display before treating it as a room-control demand." },
    { question: "Can Auto or Comfort clear error 501?", answer: "No. Error 501 is a flame lockout. The functions alter normal heating or hot-water behavior and do not repair ignition faults." },
  ],
  sourceIds: ["ariston-clas-user", "ariston-clas-one"],
  relatedContent: ["/brands/ariston/", "/brands/ariston/clas-one-error-501/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["boiler", "thermostat", "flow-temperature"],
  keywords: ["ariston auto function", "clas one comfort mode", "ariston auto vs comfort", "clas one hot water preheat"],
});
