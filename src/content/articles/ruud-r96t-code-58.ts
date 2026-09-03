import { publish } from "./publish";
export const ruudR96tCode58 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Ruud R96T fault 58: open water-sensor circuit",
  slug: "r96t-fault-58",
  path: "/brands/ruud/r96t-fault-58/",
  description:
    "Decode Ruud R96T fault 58 as an open water-sensor input, including the sensor-or-jumper distinction that generic pressure-switch answers miss.",
  articleType: "error-code",
  brand: "ruud",
  equipmentType: "furnace",
  productFamily: "R96T two-stage communicating condensing furnaces",
  models: ["R96T Series models covered by the cited installation manual"],
  errorCode: "58",
  problemType: "water-sensor-circuit",
  directAnswer:
    "On the documented Ruud R96T, fault 58 means the water-sensor circuit is open. Depending on the installed configuration, that path can include a water sensor or a required jumper plus its wiring and control input. It is not the same as the combustion pressure-switch codes and does not prove water is present.",
  scopeNotice:
    "This definition is limited to the R96T manual cited here. Rheem and Ruud share some platforms, but model suffix, control generation, optional sensor configuration, and the exact code table still govern the diagnosis.",
  symptoms: ["The R96T reports 58 and gas-heating operation may be interrupted."],
  causes: [
    "A configured water sensor may be open because it detected a condition or because its circuit, connector, or wiring failed.",
    "An installation without that sensor may have a missing, loose, or incorrect jumper where the control expects a closed path.",
  ],
  diagnosticBranches: [
    {
      title: "The installation uses a water sensor",
      observation:
        "Commissioning records or a technician confirms that the optional water-detection circuit is installed on this R96T.",
      action:
        "Keep the furnace off, look only for external water, and have service identify the source before testing the sensor and wiring.",
    },
    {
      title: "No water sensor is fitted",
      observation:
        "The documented configuration relies on a factory or field jumper rather than a water sensor at the relevant control input.",
      action:
        "Have the installer verify the exact R96T diagram and jumper integrity with power isolated; do not bridge the terminals yourself.",
    },
  ],
  decisionTable: {
    caption: "R96T fault 58 configuration split",
    columns: ["Installed input", "Open circuit may represent", "Required evidence"],
    rows: [
      ["Water sensor", "Detected moisture or sensor-path failure", "Leak inspection and circuit test"],
      ["Documented jumper", "Missing, loose, or open jumper path", "Configuration and continuity check"],
      ["Configuration unknown", "Meaning cannot be narrowed safely", "Model and commissioning records"],
    ],
  },
  figures: [
    {
      title: "Why configuration changes fault 58",
      description:
        "The furnace control expects one closed electrical path, but the installed hardware providing that path can be a sensor or a documented jumper.",
      nodes: [
        {
          label: "Installed design",
          detail: "Determines whether sensor or jumper is expected",
        },
        {
          label: "Water input path",
          detail: "Connector and wiring carry the closed-state signal",
        },
        {
          label: "Open state",
          detail: "Detection, damage, or missing jumper interrupts the circuit",
        },
        {
          label: "Fault 58",
          detail: "Control reports the open input without naming why",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Do not translate 58 into a pressure-switch fault",
      paragraphs: [
        "A common search mistake is to assume every two-digit furnace code near the fifties concerns combustion pressure. Ruud's R96T table assigns 58 to the water-sensor circuit. That circuit can protect against water where a sensor is installed, but the control only reads an electrical state. An open connector or conductor produces the same input as an activated or failed sensor. On a permitted configuration without the sensor, the expected jumper becomes part of the circuit and can account for the same code if absent or open.",
        "The technician therefore has to establish installed configuration before testing. Substituting a jumper into a sensed application could defeat water protection, while fitting a sensor explanation to a jumper-only furnace sends the visit toward hardware that is not there. Model documentation and commissioning records settle that first branch.",
      ],
    },
    {
      title: "Water outside the cabinet changes urgency",
      paragraphs: [
        "Without removing a furnace door, inspect the floor and accessible drain route for water. Photograph any wet area and keep away from electrical equipment. Condensing furnaces create water in normal operation, but it must remain within the designed drain system. Water outside that path needs its source identified before operation resumes.",
        "Record fault 58, the full model, thermostat demand, recent condensate or drain work, weather, and whether any water alarm or pump also changed state. Do not bridge the input, reposition internal connectors, open a trap, or reset repeatedly. If water is near wiring, isolate the known furnace circuit only when safe and obtain prompt service. Even when everything looks dry, the sensor-or-jumper circuit still requires isolated electrical checks.",
      ],
    },
  ],
  safeChecks: [
    "Keep panels closed, photograph fault 58 and the rating plate, and observe only external water or recent drain work from a safe position.",
  ],
  professionalEscalation: [
    "Configuration verification, sensor and jumper access, continuity tests, condensate diagnosis, wiring repair, and control-input checks require qualified furnace service.",
  ],
  serviceHandoff:
    "Provide the R96T model, fault photo, visible water and drain observations, recent maintenance, whether a water sensor is documented, thermostat state, and reset history.",
  resetGuidance:
    "Do not bypass or repeatedly reset an open water input; identify whether the R96T expects a sensor or jumper and repair the cause.",
  faqs: [
    {
      question: "Is Ruud fault 58 a pressure switch code?",
      answer:
        "Not on the cited R96T. It identifies an open water-sensor input, which has a different configuration and diagnostic path.",
    },
    {
      question: "What if my R96T has no water sensor?",
      answer:
        "The documented circuit may use a required jumper in that configuration. A technician should verify the exact diagram rather than adding an improvised bridge.",
    },
    {
      question: "Does code 58 prove there is a leak?",
      answer:
        "No. Water detection is one route, while a sensor, connector, conductor, jumper, or control input can also leave the circuit open.",
    },
  ],
  sourceIds: ["ruud-r96t-install", "ruud-r96t-product"],
  glossaryTerms: ["error-code", "control-board"],
  relatedContent: ["/brands/ruud/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: ["ruud code 58", "r96t fault 58", "ruud water sensor open", "ruud furnace error 58"],
});
