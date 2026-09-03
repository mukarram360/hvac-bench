import { publish } from "./publish";
export const idealLogicMaxL2 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Ideal Logic Max L2 flame-loss lockout",
  slug: "logic-max-l2-fault",
  path: "/brands/ideal-heating/logic-max-l2-fault/",
  description:
    "Decode L2 on an Ideal Logic Max as flame-loss lockout, preserve the burner sequence, and keep gas, electrode, flue, and condensate work professional.",
  articleType: "error-code",
  brand: "ideal-heating",
  equipmentType: "boiler",
  productFamily: "Logic Max Combi boilers in manual 237660 A01",
  models: ["Logic Max Combi 2 C24", "Logic Max Combi 2 C30", "Logic Max Combi 2 C35"],
  errorCode: "L2",
  problemType: "flame-loss-lockout",
  directAnswer:
    "On the documented Ideal Logic Max Combi, L2 is a flame-loss lockout. It records failure to establish or retain valid flame through the supervised sequence; it does not prove a dirty electrode. Gas pressure, valve command, spark, electrode and lead, condensate, flue, flame signal, and control require qualified tests.",
  scopeNotice:
    "This L2 interpretation is limited to Logic Max Combi models covered by Ideal manual 237660 A01. Vogue, older Logic, Logic Air, and commercial Ideal appliances use their own fault tables.",
  symptoms: ["The boiler displays L2 and cannot sustain central heating or domestic hot water."],
  causes: [
    "Fuel supply, ignition energy, burner condition, electrode position, lead, grounding, or flame signal can prevent valid flame proof.",
    "Condensate, flue, gas-pressure, valve, or control conditions can interrupt the same supervised sequence.",
  ],
  diagnosticBranches: [
    {
      title: "L2 followed a property fuel interruption",
      observation:
        "Other gas appliances also stopped, credit or supply changed, or work was performed on the incoming gas before the boiler locked out.",
      action:
        "Confirm supply only through ordinary user controls, avoid repeated ignition, and contact the supplier or Gas Safe engineer as appropriate.",
    },
    {
      title: "Only the Logic Max reports L2",
      observation:
        "Other gas appliances operate normally and the boiler loses flame or fails to light during its own sequence.",
      action:
        "Preserve startup sounds and timing, then arrange Gas Safe diagnosis of the boiler's ignition, combustion, flue, and condensate paths.",
    },
  ],
  decisionTable: {
    caption: "Logic Max L2 evidence split",
    columns: ["Observation", "Useful direction", "Not proven"],
    rows: [
      ["All gas appliances affected", "Property supply needs checking", "Boiler electrode is faulty"],
      ["Boiler lights then stops", "Flame formed but was lost or not proved", "Gas valve must be replaced"],
      ["Cold-weather drain symptoms", "Condensate or flue path deserves attention", "Drainage is the only cause"],
    ],
  },
  figures: [
    {
      title: "How flame loss becomes L2",
      description:
        "The Logic Max must receive fuel, generate ignition, establish combustion, and continuously prove flame; failure anywhere in that chain ends in lockout.",
      nodes: [
        {
          label: "Heat request",
          detail: "Control begins a supervised burner sequence",
        },
        {
          label: "Gas and spark",
          detail: "Valve and ignition system establish flame",
        },
        {
          label: "Combustion path",
          detail: "Burner, flue, and condensate permit stable operation",
        },
        {
          label: "Flame proof",
          detail: "Electrode signal must remain valid or L2 follows",
        },
      ],
    },
  ],
  sections: [
    {
      title: "L2 is the result of a sequence",
      paragraphs: [
        "A flame-loss code is wider than the component most visible in search results. Ideal's service flow examines whether gas pressure is available, whether the valve receives the correct command, whether the spark generator and lead work, whether the electrode is positioned and connected correctly, and whether flame is established. It also includes condensate and flue conditions because stable combustion depends on air entering, products leaving, and water draining. The final L2 display cannot tell the owner which stage failed.",
        "A technician can separate no ignition from ignition followed by loss. That distinction changes the branch: spark and gas creation are assessed differently from flame quality and ionisation proof. Measured inlet and burner conditions, electrical command, flame signal, and physical inspection belong together. A cleaned or replaced electrode without that evidence can leave the true gas, flue, condensate, or control fault untouched.",
      ],
    },
    {
      title: "Record one attempt without opening the boiler",
      paragraphs: [
        "Photograph L2 and the full Logic Max model. Note whether other gas appliances work, whether the boiler fan or ignition can be heard, whether heat begins briefly, and how long it lasts. Include weather, recent gas work, condensate changes, and every reset already attempted. Leave the case sealed; room-sealed integrity and combustion safety depend on correct reassembly and testing.",
        "Do not adjust gas, clean an electrode, remove a condensate trap, alter the flue, or keep pressing reset. Leave the property and follow the relevant emergency procedure if you smell fuel or a carbon-monoxide alarm operates; visible soot, heat damage, or unusual burner sounds also rule out further use. One reset permitted by the user instructions can establish persistence, but a returning L2 needs a Gas Safe registered engineer with the exact manual.",
      ],
    },
  ],
  safeChecks: [
    "Save L2, the model, other gas-appliance status, and audible startup sequence from outside the sealed case without forcing repeated ignition.",
  ],
  professionalEscalation: [
    "Gas pressure, valve, spark, electrode, flame-current, combustion, flue, condensate, wiring, and sealed-case work require a Gas Safe registered engineer.",
  ],
  serviceHandoff:
    "Provide the Logic Max model, L2 photo, other gas status, fan and ignition sounds, whether heat begins, run duration, weather, gas or drain work, and reset count.",
  resetGuidance:
    "Use at most one reset allowed by the exact user instructions; a remaining or returning L2 must not be reset repeatedly.",
  faqs: [
    {
      question: "Does Ideal L2 mean a dirty flame sensor?",
      answer:
        "No. Electrode condition is one branch, but L2 spans gas, ignition, burner, flame proof, flue, condensate, wiring, and control evidence.",
    },
    {
      question: "Can low gas supply cause Logic Max L2?",
      answer:
        "Fuel availability is part of the service path. If other gas appliances also fail, preserve that fact and involve the supplier or Gas Safe engineer.",
    },
    {
      question: "Can I keep resetting an L2 boiler?",
      answer:
        "No. Repeated resets create more unsuccessful combustion attempts and remove useful timing. Preserve a returning lockout for qualified diagnosis.",
    },
  ],
  sourceIds: ["ideal-logic-max-install", "ideal-boiler-support"],
  glossaryTerms: ["error-code", "boiler"],
  relatedContent: [
    "/brands/ideal-heating/",
    "/how-to-document-hvac-fault-for-service/",
    "/how-to-read-hvac-data-plate/",
  ],
  keywords: ["ideal logic max l2", "ideal boiler flame loss", "logic max l2 fault", "ideal heating l2 lockout"],
});
