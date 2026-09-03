import { publish } from "./publish";
export const americanStandardS9v2E21 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "American Standard S9V2 E2.1 ignition retry lockout",
  slug: "s9v2-e21-error-code",
  path: "/brands/american-standard/s9v2-e21-error-code/",
  description:
    "What S9V2 E2.1 means, why it does not identify an igniter or flame sensor, and which combustion details belong in the service call.",
  articleType: "error-code",
  brand: "american-standard",
  equipmentType: "furnace",
  productFamily: "S9V2 S-Series two-stage condensing gas furnaces",
  models: ["S9V2 S-Series models in installer guide 18-CE01D1-1E-EN"],
  errorCode: "E2.1",
  problemType: "ignition-lockout",
  directAnswer:
    "On the documented American Standard S9V2, E2.1 means ignition retries were exceeded because flame was never sensed, followed by a one-hour lockout after three attempts. The code reports the failed ignition outcome; it does not prove whether gas delivery, ignition, grounding, flame sensing, venting, or control caused it.",
  scopeNotice:
    "This definition is restricted to S9V2 S-Series furnaces using the seven-segment integrated control display in the cited installer guide. Do not translate an older blink count or another American Standard furnace code as E2.1.",
  symptoms: ["The furnace does not deliver sustained gas heat and its internal display records E2.1."],
  causes: [
    "The ignition sequence can fail before flame forms because gas, ignition, pressure, venting, or control conditions are not satisfied.",
    "Flame can also be physically present but not proven through the flame-sensing and grounding path.",
  ],
  diagnosticBranches: [
    {
      title: "No flame was observed during attempts",
      observation:
        "From outside intact panels, the owner heard startup activity but did not observe normal heat before the furnace stopped and locked out.",
      action:
        "Do not repeat ignition attempts; confirm only that the thermostat calls for heat and arrange licensed combustion service.",
    },
    {
      title: "Flame appeared but was not sustained",
      observation:
        "A brief flame or heat was noticed before shutdown, while the control still reports that valid flame was not established.",
      action:
        "Tell the technician exactly what was seen and for how long because physical ignition and electrical flame proof are separate facts.",
    },
  ],
  decisionTable: {
    caption: "S9V2 E2.1 evidence without parts guessing",
    columns: ["Observation", "What it establishes", "What remains unresolved"],
    rows: [
      ["No visible flame", "Ignition did not visibly complete", "Gas, igniter, vent, pressure, and control path"],
      [
        "Brief flame then stop",
        "Flame existed but sequence failed",
        "Sensing, grounding, flame quality, or another interlock",
      ],
      ["Gas odour", "Potential unburned fuel", "Diagnosis stops and emergency guidance applies"],
    ],
  },
  figures: [
    {
      title: "S9V2 ignition proof sequence",
      description:
        "The control allows heat only after each prerequisite completes and flame current is proved; E2.1 records the failed final outcome across that sequence.",
      nodes: [
        { label: "Heat call", detail: "Thermostat requests a heating cycle" },
        {
          label: "Draft and safeties",
          detail: "Venting conditions must be proven before fuel",
        },
        {
          label: "Ignition and gas",
          detail: "Igniter and valve sequence creates flame",
        },
        {
          label: "Flame proof",
          detail: "Grounded sensing confirms stable combustion",
        },
      ],
    },
  ],
  sections: [
    {
      title: "E2.1 counts failed outcomes, not failed components",
      paragraphs: [
        "The decimal matters. S9V2 furnaces use a seven-segment code system, and E2.1 is the retry-exceeded condition for flame never sensed. The published control logic reaches a one-hour lockout after three failed attempts. That sequence helps explain why the thermostat can continue calling while the burners remain off. It does not make the igniter, gas valve, or flame sensor the automatic repair. Several prerequisites occur before and during flame proof, and the control sees only whether the required electrical proof arrived.",
        "A technician needs to watch the complete sequence with the cabinet safely serviced. Draft initiation, pressure-switch response, igniter operation, measured gas supply and valve output, burner ignition, grounding, and flame current form different evidence. Replacing the part named in search results skips the step that distinguishes no flame from flame not recognised.",
      ],
    },
    {
      title: "Treat repeated reset advice as a safety problem",
      paragraphs: [
        "A lockout limits repeated unproven ignition. Cycling power to create more attempts defeats the practical purpose of that stop and can release fuel during each unsuccessful sequence. Leave the furnace off and follow fuel-utility or emergency guidance if gas is smelled. Keep carbon-monoxide alarms functioning according to their manufacturer instructions, but do not use an alarm as permission to run a faulted appliance.",
        "Without opening panels, record the E2.1 display, thermostat demand, whether the inducer was heard, whether any glow or flame was visible through a factory viewing port, and whether the event followed fuel interruption or service. Never bypass a switch, clean a burner or flame rod, adjust a valve, or probe live circuits. The service engineer should receive the original sequence, not a display erased by repeated resets.",
      ],
    },
  ],
  safeChecks: [
    "From outside closed panels, save E2.1, confirm the thermostat demand, and note sounds or factory-port observations without initiating more ignition attempts.",
  ],
  professionalEscalation: [
    "Gas pressure, venting, safeties, igniter, valve, burner, grounding, flame-current, and live control tests require licensed furnace service.",
  ],
  serviceHandoff:
    "Provide the full S9V2 model, E2.1 photo, thermostat state, startup sounds, any factory-port flame observation, fuel interruption, recent service, and number of resets already attempted.",
  resetGuidance:
    "Do not repeatedly reset E2.1 to force more ignition attempts; preserve the lockout and arrange combustion diagnosis, especially if the code returns.",
  faqs: [
    {
      question: "Does S9V2 E2.1 mean a bad flame sensor?",
      answer:
        "No. It means valid flame was never sensed across three attempts. The physical flame, sensing circuit, grounding, gas, ignition, and prerequisite sequence remain to be tested.",
    },
    {
      question: "How long is the S9V2 E2.1 lockout?",
      answer:
        "The cited installer guide describes a one-hour lockout after three retry failures. Do not use power cycling to manufacture additional ignition attempts.",
    },
    {
      question: "Is E2.1 the same as two LED flashes?",
      answer:
        "No. E2.1 belongs to the S9V2 seven-segment display. An older furnace's blink count uses a different code table and cannot be substituted.",
    },
  ],
  sourceIds: ["american-s9v2-install", "american-standard-s9v2"],
  glossaryTerms: ["error-code", "control-board"],
  relatedContent: [
    "/brands/american-standard/",
    "/how-to-document-hvac-fault-for-service/",
    "/how-to-read-hvac-data-plate/",
  ],
  keywords: [
    "american standard s9v2 e2.1",
    "s9v2 ignition retry exceeded",
    "american standard furnace e21",
    "s9v2 one hour lockout",
  ],
});
