import { publish } from "./publish";
export const amanaPtacBrCode = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Amana PTAC br code: low-voltage brownout protection",
  slug: "ptac-br-code",
  path: "/brands/amana/ptac-br-code/",
  description:
    "Understand an Amana PTAC br display, including the normal brief power-off appearance and the continuous low-voltage fault that needs electrical testing.",
  articleType: "error-code",
  brand: "amana",
  equipmentType: "light-commercial",
  productFamily: "Amana PTAC models covered by the M70 service procedure",
  models: ["PTC J Series", "PTH J Series", "Applicable Amana PTAC models in the cited manual"],
  errorCode: "br",
  problemType: "voltage-protection",
  directAnswer:
    "On the documented Amana PTAC controls, br means brownout or low-voltage protection. A brief br appearance for a few seconds while power is switched off is normal in the service flow; a continuous br display means the board sees transformer output below its threshold and requires supply, cord, transformer, accessory, and control checks.",
  scopeNotice:
    "This reading follows the Amana PTAC service procedure cited here. Do not apply lowercase br to Amana furnaces, central equipment, or kitchen appliances; confirm the packaged terminal model and control generation.",
  symptoms: ["The PTAC displays br continuously or briefly as the unit loses power."],
  causes: [
    "Incoming voltage, the power connection, or transformer output may be below the control's required range.",
    "A low-voltage accessory short or a control-board input problem can pull down or misread the 24-volt circuit.",
  ],
  diagnosticBranches: [
    {
      title: "br appears only during power-off",
      observation:
        "The characters remain for a few seconds as the display and board lose power, then disappear with the rest of the unit.",
      action:
        "Treat that brief shutdown appearance as the normal behavior described by the Amana service flow and do not order a part from it.",
    },
    {
      title: "br remains while power is available",
      observation: "The PTAC stays energised but cannot run normally and the br characters remain on its display.",
      action:
        "Stop using the unit and have qualified service measure the receptacle, power connection, transformer output, connected accessories, and board in order.",
    },
  ],
  decisionTable: {
    caption: "Amana PTAC br timing distinction",
    columns: ["Display behavior", "Meaning in service flow", "Response"],
    rows: [
      ["A few seconds at power-off", "Normal board discharge indication", "No fault action from br alone"],
      ["Continuous while energised", "Brownout protection remains active", "Qualified voltage diagnosis"],
      [
        "Several PTACs show br together",
        "Shared supply condition is possible",
        "Report affected units to facilities or electrician",
      ],
    ],
  },
  figures: [
    {
      title: "Where a continuous br can originate",
      description:
        "The PTAC control evaluates low-voltage power after line voltage passes through the installed connection and transformer, with accessories also attached to that circuit.",
      nodes: [
        {
          label: "Building supply",
          detail: "Provides the model's required line voltage",
        },
        {
          label: "Cord or hardwire kit",
          detail: "Carries line power into the PTAC",
        },
        {
          label: "Transformer",
          detail: "Creates the control's nominal low voltage",
        },
        {
          label: "Accessories and board",
          detail: "Load and monitor the control-power circuit",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Why the duration of br matters",
      paragraphs: [
        "The service chart explicitly separates a momentary shutdown display from a continuing fault. As power is removed, stored energy in the control falls through voltage levels and br may appear for a few seconds. That observation alone does not indicate a bad receptacle or transformer. If br stays on while the PTAC is meant to be energised, the board is reporting that its transformer-side voltage is below the documented decision level. The unit protects itself instead of attempting normal compressor or heater operation.",
        "A continuous low-voltage result does not name its source. The Amana flow begins at the correct incoming supply for the particular voltage model, then compares voltage through the power connection, transformer, low-voltage accessories, and control board. A failure or short at each stage can leave the final display looking the same. The measurements are live electrical work and belong to trained personnel.",
      ],
    },
    {
      title: "Use building context without testing live power",
      paragraphs: [
        "Record whether br is momentary or continuous and whether nearby PTACs, lights, or receptacles changed at the same time. Photograph the full model label because 208/230-volt and 265/277-volt installations have different expected supplies and connection hardware. Note recently added wired thermostats or other 24-volt accessories, but do not disconnect them yourself.",
        "Do not use an extension lead, move a 265-volt unit to another outlet, remove the touchpad, or probe receptacle and board voltage. A hot plug, damaged cord, buzzing connection, smoke, repeated breaker operation, or building-wide dimming needs immediate isolation by responsible facilities staff or an electrician. Keep the continuous code visible for service rather than cycling the unit until it happens to start.",
      ],
    },
  ],
  safeChecks: [
    "Record whether br is momentary or continuous, photograph the voltage-model label, and note whether other equipment in the building changed simultaneously.",
  ],
  professionalEscalation: [
    "Receptacle, line connection, cord, transformer, 24-volt accessory, and control-board measurements require authorised PTAC service or a qualified electrician.",
  ],
  serviceHandoff:
    "Provide the PTAC model and voltage, br duration, affected neighboring units, supply-event timing, cord heat or damage, connected thermostat accessories, and breaker history.",
  resetGuidance:
    "Do not reset a continuous br display repeatedly; its voltage path must be measured. A brief appearance only during shutdown requires no reset.",
  faqs: [
    {
      question: "Does br mean breaker on an Amana PTAC?",
      answer:
        "No. The service manual defines br as brownout or low-voltage protection. A breaker or building supply can be involved, but the letters do not mean breaker.",
    },
    {
      question: "Why does br flash when I turn the PTAC off?",
      answer:
        "Amana's flow says br can appear normally for a few seconds during power-off. Continuous br while energised is the diagnostic condition.",
    },
    {
      question: "Can an external thermostat cause the br code?",
      answer:
        "A short on a connected 24-volt accessory circuit is one service branch. Disconnecting and measuring that circuit is technician work, not an owner test.",
    },
  ],
  sourceIds: ["amana-ptac-br-service", "amana-ptac-literature"],
  glossaryTerms: ["error-code", "ptac-unit"],
  relatedContent: ["/brands/amana/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: ["amana ptac br code", "amana ptac brownout", "amana ptac low voltage code", "ptac br display"],
});
