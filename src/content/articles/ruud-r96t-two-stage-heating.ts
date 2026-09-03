import { publish } from "./publish";

export const ruudR96tTwoStageHeating = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Ruud R96T two-stage heat: low fire is a normal operating state",
  slug: "r96t-two-stage-heating",
  path: "/brands/ruud/r96t-two-stage-heating/",
  description:
    "The Ruud R96T is designed to spend part of a heat call at low stage and move to high stage when demand requires it. Low fire alone is not a fault.",
  articleType: "guide",
  brand: "ruud",
  equipmentType: "furnace",
  productFamily: "R96T Achiever Plus two-stage condensing gas furnaces",
  models: ["R96T Series models covered by the cited installation manual"],
  problemType: "two-stage-heating-operation",
  symptomFamily: "no-heating",
  directAnswer:
    "An R96T can run at its lower heating stage for a sustained call and move to high stage when the thermostat or configured staging logic asks for more output. A quiet burner and gentler supply-air rise therefore do not show that half the furnace has failed.",
  scopeNotice:
    "This explanation is for the Ruud R96T two-stage platform. Thermostat wiring, installer configuration, furnace timing, and model revision determine how a particular installation changes stages.",
  symptoms: ["The furnace is heating, but the burner sound or supply-air temperature changes partway through the call."],
  causes: [
    "Two-stage design deliberately separates a lower-output operating state from full heating output.",
    "The thermostat and furnace configuration decide whether a second-stage request arrives directly or through furnace staging logic.",
  ],
  comparisonTable: {
    caption: "Interpreting the two R96T heating stages",
    columns: ["Observation", "Compatible with normal staging", "Evidence of a fault"],
    rows: [
      ["Long, quiet heat call", "Yes, when low stage is carrying the load", "No, not by itself"],
      ["Sound and airflow increase", "Yes, when high stage is requested", "No, if heat remains controlled"],
      ["Setpoint is never recovered", "Demand may exceed delivered output", "Needs staging, airflow, gas, and load checks"],
      ["A diagnostic code appears", "No conclusion from stage alone", "Preserve the exact code and sequence"],
    ],
  },
  figures: [{
    title: "One heat call can contain two firing rates",
    description: "The room request begins a heating call. Low stage can carry that request alone, while a separate second-stage decision raises burner input and the matching airflow when more output is required.",
    nodes: [
      { label: "Heat demand", detail: "Thermostat requests space heating" },
      { label: "Low stage", detail: "Lower burner input and matched airflow" },
      { label: "High stage", detail: "Additional output after an upstage decision" },
    ],
  }],
  sections: [
    {
      title: "Judge staging by room recovery, not burner volume",
      paragraphs: [
        "Ruud describes the R96T as a two-stage furnace that operates primarily at low speed and changes to high output for greater demand. That design stretches heat delivery across a longer, quieter call when the building load permits it. The meaningful result is whether the room approaches setpoint steadily without a safety code or repeated interruption.",
        "A hand at a register cannot identify firing rate. Blower setup, duct resistance, return-air temperature, and register location all change what the air feels like. A technician can read stage inputs and control outputs while measuring temperature rise against the furnace data, which is stronger evidence than sound alone.",
        "Watch the room trend across the call. A setpoint that is approached smoothly while the furnace remains in low stage shows delivered heat matching the immediate load. A widening temperature gap, repeated interruptions, or a limit event creates a different question that needs measured airflow and furnace data.",
      ],
    },
    {
      title: "A thermostat change can alter who controls the handoff",
      paragraphs: [
        "The installation manual governs the low-stage and high-stage call path. Replacing a thermostat or changing installer settings can move the second-stage decision from one device to another. If comfort changed immediately after control work, give that history to the installer before the gas valve or board is blamed.",
        "Fault 58 belongs to the water-sensor input, not to two-stage operation. If that code is present, follow its sensor-or-jumper branch separately. Staging behavior and a protective input can occur during the same visit without being the same diagnosis.",
      ],
    },
  ],
  faqs: [
    { question: "Should a Ruud R96T start in high heat every time?", answer: "No. Its two-stage design can begin and remain at lower output when that stage can satisfy the call. Installation settings govern the transition." },
    { question: "Does low burner sound mean the second stage is broken?", answer: "No. Sound is consistent with low-stage operation but does not test the high-stage request, gas input, blower setup, or temperature rise." },
    { question: "What should I record before an R96T staging service call?", answer: "Record thermostat stage indications if visible, room and set temperatures, run time, any sound or airflow change, exact fault codes, and recent thermostat work." },
  ],
  sourceIds: ["ruud-r96t-install", "ruud-r96t-product"],
  relatedContent: ["/brands/ruud/", "/brands/ruud/r96t-fault-58/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["blower-motor", "thermostat", "delta-t"],
  keywords: ["ruud r96t two stage", "ruud furnace low fire", "r96t high heat stage", "ruud furnace staging"],
});
