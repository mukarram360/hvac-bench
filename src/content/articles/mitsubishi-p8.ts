import { publish } from "./publish";

export const mitsubishiP8 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Mitsubishi Electric P8 fault: what the code actually narrows down",
  slug: "p8-fault-code",
  path: "/brands/mitsubishi/p8-fault-code/",
  description:
    "Decode Mitsubishi Electric P8 without assuming a bad thermistor, with model scope, safe observations, and a technician-ready fault history.",
  articleType: "error-code",
  brand: "mitsubishi",
  equipmentType: "ductless-mini-split",
  productFamily: "Mr Slim families covered by Mitsubishi Electric's P8 reference",
  models: ["Mr Slim systems listed in the P8 reference"],
  errorCode: "P8",
  problemType: "coil-temperature-fault",
  directAnswer:
    "Mitsubishi Electric P8 reports an abnormal piping-temperature relationship. It can follow low refrigerant flow, a restricted circuit, a displaced or faulty thermistor, or crossed piping and wiring on some multi systems; P8 does not identify one failed part.",
  scopeNotice:
    "This interpretation is limited to Mitsubishi Electric systems included in the cited P8 reference. It does not apply to Mitsubishi Heavy Industries equipment, and the exact service sequence must be selected by the complete indoor and outdoor model numbers.",
  symptoms: ["The controller or indoor display presents P8 and conditioned-air output stops or becomes unreliable."],
  causes: [
    "The pipe-temperature reading may not change as the control expects because refrigerant flow is restricted or charge is inadequate.",
    "A thermistor, its holder, paired-unit wiring, or paired refrigerant piping can make the measured relationship implausible.",
  ],
  diagnosticBranches: [
    {
      title: "P8 followed multi-zone installation work",
      observation:
        "The code began after indoor-unit wiring or refrigerant lines were connected, moved, or recommissioned.",
      action:
        "Ask the installer to prove that each indoor unit is paired with its own outdoor connection before authorising a sensor or board replacement.",
    },
    {
      title: "P8 developed on an established system",
      observation:
        "The matched system operated normally before the fault and no recent work changed its piping or controls.",
      action:
        "Record operating mode, outdoor temperature, and how long the unit runs before P8; those facts help service separate a sensing problem from a refrigerant-side condition.",
    },
  ],
  decisionTable: {
    caption: "Evidence P8 gives and evidence it does not",
    columns: ["Observation", "Useful inference", "Not established"],
    rows: [
      ["Immediately after pairing work", "Check crossed pipes or wires early", "A thermistor has failed"],
      [
        "Returns only after a run period",
        "Compare live pipe temperature with the sensor reading",
        "The system only needs refrigerant",
      ],
      [
        "Sensor is loose on its pipe",
        "Correct contact can restore a credible reading",
        "The refrigerant circuit is healthy",
      ],
    ],
  },
  figures: [
    {
      title: "The temperature relationship behind P8",
      description:
        "The controller compares a pipe sensor's response with the operating state; a bad reading or a real lack of heat transfer can break that expected relationship.",
      nodes: [
        {
          label: "Operating command",
          detail: "Establishes the temperature change the controller expects",
        },
        {
          label: "Refrigerant circuit",
          detail: "Creates the real pipe-temperature response",
        },
        {
          label: "Pipe thermistor",
          detail: "Reports that response to the indoor control",
        },
        {
          label: "P8 decision",
          detail: "Flags a relationship outside the documented limit",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Why P8 is broader than a sensor code",
      paragraphs: [
        "A thermistor is part of the P8 logic, but that does not turn the display into a thermistor verdict. The control can only see the temperature reported at the pipe. If refrigerant is not moving normally, the pipe itself fails to warm or cool as expected and a sound sensor reports the abnormal result correctly. If the sensor has lifted from its holder, its reading can lag behind the pipe. On applicable multi systems, crossed electrical and refrigerant pairings can give the control a believable temperature from the wrong circuit. These routes demand different repairs, so parts should follow measurements rather than precede them.",
        "The most useful service test compares the controller's reported temperature with an independent measurement while the correct operating mode is commanded. A technician can then inspect sensor contact and resistance, confirm the indoor-to-outdoor pairing, and evaluate refrigerant temperatures and pressures under the conditions specified for the model. That sequence preserves the distinction between a measurement fault and the physical condition being measured.",
      ],
    },
    {
      title: "Build a useful P8 timeline",
      paragraphs: [
        "Photograph both rating plates and the P8 display. Note whether the fault appears immediately or only after several minutes, whether it occurs in heating, cooling, or both, and whether another indoor unit was running. Include recent installation, leak repair, board work, or line-set changes. This timeline is more diagnostic than a report that the unit simply stopped.",
        "Do not loosen flare joints, add refrigerant, move a live thermistor, or open an electrical enclosure. Those steps expose refrigerant or live conductors and can erase the conditions needed for a valid diagnosis. One model-approved restart can establish persistence; recurring P8 needs measured service work.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the full code and both model plates, then record the mode and elapsed run time when P8 returns.",
  ],
  professionalEscalation: [
    "Refrigerant measurements, thermistor testing, terminal checks, and correction of paired piping or wiring belong to qualified service personnel.",
  ],
  serviceHandoff:
    "Provide both model numbers, operating mode, time to fault, other zones running, and details of any recent piping, wiring, sensor, refrigerant, or control-board work.",
  resetGuidance:
    "Use only one restart permitted by the model instructions; a returning P8 should remain available for diagnosis rather than be repeatedly cleared.",
  faqs: [
    {
      question: "Does P8 mean the thermistor is bad?",
      answer:
        "No. The sensor participates in the test, but genuine abnormal pipe temperature, poor sensor contact, a sensor circuit fault, or incorrect pairing can all produce the reported relationship.",
    },
    {
      question: "Does a Mitsubishi P8 code mean low refrigerant?",
      answer:
        "Low charge is one service possibility, not a diagnosis from the display. Restriction, sensing, and pairing faults can create the same code and require different evidence.",
    },
    {
      question: "Is Mitsubishi Heavy Industries P8 the same fault?",
      answer:
        "Do not transfer this definition. Mitsubishi Electric and Mitsubishi Heavy Industries are separate manufacturers with different diagnostic systems; identify the name and full model first.",
    },
  ],
  sourceIds: ["mitsubishi-p8", "mitsubishi-literature"],
  glossaryTerms: ["error-code", "thermistor"],
  relatedContent: [
    "/brands/mitsubishi/",
    "/how-to-find-mini-split-model-number/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  keywords: ["mitsubishi p8 fault", "mitsubishi electric p8 error code", "mr slim p8", "mitsubishi p8 thermistor"],
});
