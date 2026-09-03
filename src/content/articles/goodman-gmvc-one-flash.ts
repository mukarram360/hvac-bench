import { publish } from "./publish";
export const goodmanGmvcOneFlash = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Goodman GMVC one flash: external ignition lockout",
  slug: "gmvc-one-flash-lockout",
  path: "/brands/goodman/gmvc-one-flash-lockout/",
  description:
    "Read one control-board flash on a Goodman GMVC as ignition lockout, not a single-part diagnosis, and preserve the startup sequence for service.",
  articleType: "error-code",
  brand: "goodman",
  equipmentType: "furnace",
  productFamily: "GMVC80 condensing gas furnaces",
  models: ["GMVC801005CN", "GMVC80 family covered by the cited installation instructions"],
  errorCode: "1 flash",
  problemType: "ignition-lockout",
  directAnswer:
    "On the documented Goodman GMVC80 control, one flash indicates external lockout after the furnace exceeds its ignition attempts. The control can automatically reset after one hour, while a thermostat or power interruption longer than five seconds can also reset it; none of those actions diagnoses why flame was not proved.",
  scopeNotice:
    "This one-flash definition applies to the GMVC80 family in the cited Goodman installation instructions. Other Goodman boards use different LEDs and decimal codes, so identify the furnace and control before counting.",
  symptoms: [
    "The thermostat requests heat, the burners do not remain operating, and the furnace control LED repeats one flash.",
  ],
  causes: [
    "The sequence can fail to create flame because a draft, ignition, gas, safety, or control prerequisite is not met.",
    "Flame can form but fail to remain proven because of burner, grounding, flame-sensing, gas, or control conditions.",
  ],
  diagnosticBranches: [
    {
      title: "No flame appears during the sequence",
      observation:
        "From outside intact panels, startup sounds occur but no sustained burner flame is visible through the factory viewing area before lockout.",
      action:
        "Stop creating more attempts and give a licensed technician the sound and timing sequence so prerequisites can be measured in order.",
    },
    {
      title: "Flame appears and then disappears",
      observation:
        "The burners light briefly but shut down before useful heat is delivered and the one-flash lockout eventually returns.",
      action:
        "Report that flame existed and its approximate duration; this separates flame creation from flame proof without naming the failed component.",
    },
  ],
  decisionTable: {
    caption: "GMVC one-flash observations",
    columns: ["Observed sequence", "Useful distinction", "Unsafe conclusion"],
    rows: [
      ["Inducer but no igniter glow", "Failure occurred before visible ignition", "Gas valve must be bad"],
      ["Glow but no flame", "Ignition progressed farther", "Fuel should be adjusted by the owner"],
      [
        "Brief flame then stop",
        "Flame formed but was not sustained or proved",
        "Flame sensor is automatically defective",
      ],
    ],
  },
  figures: [
    {
      title: "How the GMVC reaches lockout",
      description:
        "The furnace repeats a controlled ignition sequence and enters lockout only after allowed attempts fail, while the failed stage remains to be measured.",
      nodes: [
        {
          label: "Heat call",
          detail: "Thermostat begins the controlled sequence",
        },
        {
          label: "Draft and ignition",
          detail: "Safeties, inducer, and igniter prepare combustion",
        },
        {
          label: "Gas and flame proof",
          detail: "Burners must light and stable flame must be sensed",
        },
        {
          label: "One-flash lockout",
          detail: "Further attempts pause after the retry limit",
        },
      ],
    },
  ],
  sections: [
    {
      title: "The flash count records a control decision",
      paragraphs: [
        "One flash tells you that the GMVC control stopped repeating an unsuccessful ignition process. It does not state which stage failed. The inducer and pressure safeguards must satisfy the control before ignition. The hot-surface igniter must operate, the gas valve must receive the proper command and fuel supply, burners must light correctly, and the flame-sensing path must prove them. Grounding and electrical control participate too. A failure anywhere in that chain can end with the same lockout.",
        "The manual's automatic one-hour reset explains why heat can return without a repair. That recovery does not make the original event harmless or identify it as transient. The thermostat or power reset described by Goodman also changes control state only. Repeatedly shortening the lockout creates more failed combustion attempts and destroys the timing a service technician needs.",
      ],
    },
    {
      title: "Describe the ignition movie, not just its final frame",
      paragraphs: [
        "With every access panel in place, listen for the inducer, observe only through a factory sight opening, and note igniter glow, flame appearance, duration, blower start, and the moment the LED changes. Photograph the flash through at least two repetitions. Record fuel interruptions, recent service, wind, condensate symptoms, and other stored codes.",
        "Do not hold a door switch, bypass a pressure or rollout control, clean a burner or flame sensor, adjust gas, or place a meter inside the live furnace. Leave immediately and follow emergency guidance for gas odour, soot, rollout, or a carbon-monoxide alarm. A licensed technician should verify the sequence with combustion, pressure, flame-current, grounding, and electrical evidence before replacing anything.",
      ],
    },
  ],
  safeChecks: [
    "Keep furnace panels installed, record one full startup sequence and the repeating flash, and stop without creating additional ignition attempts.",
  ],
  professionalEscalation: [
    "Draft, vent, condensate, igniter, gas, burner, flame-current, grounding, safety, and control tests require licensed gas-furnace service.",
  ],
  serviceHandoff:
    "Provide the GMVC model, one-flash video, thermostat call, inducer, glow and flame observations, time to shutdown, fuel status, weather, recent service, and reset count.",
  resetGuidance:
    "Do not use the published reset paths to keep forcing ignition; a returning one-flash lockout needs its failed sequence stage diagnosed.",
  faqs: [
    {
      question: "How long does Goodman one-flash lockout last?",
      answer:
        "The cited GMVC instructions describe an automatic reset after one hour. Heat returning afterward does not establish that the combustion fault is repaired.",
    },
    {
      question: "Does one flash mean a bad flame sensor?",
      answer:
        "No. The lockout can result from failures before flame exists or from failure to prove flame. The observed sequence and measurements separate them.",
    },
    {
      question: "Can I reset the GMVC at the thermostat?",
      answer:
        "The manual describes reset methods, but repeated resets manufacture more failed ignition attempts. Preserve a returning lockout for licensed diagnosis.",
    },
  ],
  sourceIds: ["goodman-gmvc-install", "goodman-furnace-support"],
  glossaryTerms: ["error-code", "control-board"],
  relatedContent: ["/brands/goodman/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: [
    "goodman furnace one flash",
    "goodman gmvc ignition lockout",
    "gmvc80 one blink",
    "goodman external lockout",
  ],
});
