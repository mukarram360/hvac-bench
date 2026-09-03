import { publish } from "./publish";
export const aristonClasOne501 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Ariston Clas One error 501: no flame detected",
  slug: "clas-one-error-501",
  path: "/brands/ariston/clas-one-error-501/",
  description:
    "Decode Ariston Clas One 501 as no-flame lockout, use the limited user reset correctly, and preserve combustion evidence for authorised service.",
  articleType: "error-code",
  brand: "ariston",
  equipmentType: "boiler",
  productFamily: "Clas One and Clas System One condensing gas boilers",
  models: ["Clas One 24", "Clas One 30", "Clas One 38", "Clas System One models in the cited user literature"],
  errorCode: "501",
  problemType: "no-flame-lockout",
  directAnswer:
    "On the documented Ariston Clas One family, error 501 is a non-volatile lockout because flame was not detected. The boiler does not restart automatically and the user manual permits reset-button attempts, capped at five within 15 minutes. A returning 501 requires authorised technical service, not continued resetting.",
  scopeNotice:
    "This definition applies to Clas One and Clas System One user literature linked by Ariston. Nimbus heat pumps, Nuos water heaters, other One-series generations, and regional gas configurations need their own manual.",
  symptoms: ["The boiler alternates an error indication with 501 and cannot sustain normal heating or hot water."],
  causes: [
    "Fuel, gas valve command, ignition, burner, air or flue, condensate, or control conditions can prevent flame from forming.",
    "Flame may exist but fail to be detected through electrode, grounding, wiring, signal, or control faults.",
  ],
  diagnosticBranches: [
    {
      title: "501 followed a gas-supply interruption",
      observation:
        "Other gas appliances also stopped, a meter or supply changed, or work occurred on the property gas installation.",
      action:
        "Do not create repeated ignition attempts; confirm only ordinary user supply status and contact the supplier or authorised engineer as appropriate.",
    },
    {
      title: "Only the Clas One reports 501",
      observation:
        "Other gas appliances appear normal but the boiler fails during its own burner sequence or returns to lockout after reset.",
      action:
        "Record audible startup and any brief heat, then arrange authorised service for measured ignition and flame-proof diagnosis.",
    },
  ],
  decisionTable: {
    caption: "Clas One 501 reset boundary",
    columns: ["Result", "Meaning", "Next response"],
    rows: [
      ["One reset restores stable heat", "Control accepted a new ignition sequence", "Record and watch for recurrence"],
      ["501 returns after reset", "No-flame condition remains", "Stop and obtain service"],
      ["Five resets reached within 15 minutes", "Manufacturer safety cap reached", "No further attempts"],
    ],
  },
  figures: [
    {
      title: "Why 501 cannot name an ignition part",
      description:
        "Flame detection is the last required result of fuel, ignition, combustion, electrode, grounding, and control paths, so several failures share one lockout.",
      nodes: [
        {
          label: "Burner request",
          detail: "Boiler begins the supervised sequence",
        },
        {
          label: "Fuel and ignition",
          detail: "Gas and spark must establish combustion",
        },
        {
          label: "Flame sensing",
          detail: "Electrode and earth return a valid signal",
        },
        {
          label: "Error 501",
          detail: "Non-volatile lockout follows missing proof",
        },
      ],
    },
  ],
  sections: [
    {
      title: "The five-reset cap is a ceiling, not a target",
      paragraphs: [
        "Ariston's user manual describes 501 as a lockout that does not clear itself. Pressing the reset control allows another supervised attempt, but the boiler limits reset commands to five within fifteen minutes. That protection should not be read as advice to use all five. One carefully observed attempt provides useful evidence. A second return shows that fuel or flame proof remains unresolved and should move the case to authorised service.",
        "Resetting changes control state; it does not test gas pressure, valve operation, ignition energy, burner condition, flue and air supply, condensate drainage, electrode signal, grounding, or wiring. Any of those can prevent the flame result the controller expects. The display sees no valid signal and cannot explain why it was absent.",
      ],
    },
    {
      title: "Preserve the sequence outside the sealed case",
      paragraphs: [
        "Photograph error 501 and the complete Clas One model. Note whether other gas appliances work, whether the fan and ignition can be heard, whether heat starts briefly, and the time until lockout. Add recent gas work, electrical interruption, cold-weather drainage clues, and the number and timing of reset presses.",
        "Do not remove the room-sealed case, clean an electrode or burner, adjust gas, disturb the flue or condensate trap, or bypass a safety. Gas odour, soot, abnormal combustion sound, scorching, or a carbon-monoxide alarm requires immediate shutdown and emergency guidance. A recurring 501 should go to an Ariston authorised technician or appropriately qualified gas engineer with the unaltered event history.",
      ],
    },
  ],
  safeChecks: [
    "Photograph 501 and the model, check whether other gas appliances operate, and observe sounds only from outside the sealed case.",
  ],
  professionalEscalation: [
    "Gas supply pressure, valve, ignition, burner, flame signal, electrode, grounding, flue, condensate, control, and sealed-case work require authorised qualified service.",
  ],
  serviceHandoff:
    "Provide the Clas One model, 501 photo, other gas status, startup sounds, brief heat if any, gas or electrical work, weather, condensate clues, and exact reset count.",
  resetGuidance:
    "Use a single observed reset rather than aiming for the five-in-15-minute maximum; stop when 501 returns and request service.",
  faqs: [
    {
      question: "What does Ariston error 501 mean?",
      answer:
        "On the cited Clas One family it means no flame was detected and the boiler entered a non-volatile lockout requiring a reset or service.",
    },
    {
      question: "How many times can Clas One 501 be reset?",
      answer:
        "The user manual caps reset presses at five within 15 minutes, but that is a safety limit, not a troubleshooting target. Stop when the fault returns.",
    },
    {
      question: "Does 501 mean the ignition electrode is bad?",
      answer:
        "No. Electrode sensing is one branch among gas, valve, ignition, burner, flue, condensate, grounding, wiring, and control conditions.",
    },
  ],
  sourceIds: ["ariston-clas-one", "ariston-clas-user"],
  glossaryTerms: ["error-code", "boiler"],
  relatedContent: ["/brands/ariston/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: ["ariston error 501", "clas one 501", "ariston no flame detected", "ariston boiler 501 reset"],
});
