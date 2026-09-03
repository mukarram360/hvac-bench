import { publish } from "./publish";
export const yorkYp9cSevenFlashes = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "York Affinity YP9C seven red flashes: ignition lockout",
  slug: "yp9c-seven-red-flashes",
  path: "/brands/york/yp9c-seven-red-flashes/",
  description:
    "Decode seven red flashes on a York Affinity YP9C as ignition-attempt lockout without reducing the sequence to a flame-sensor guess.",
  articleType: "error-code",
  brand: "york",
  equipmentType: "furnace",
  productFamily: "Affinity YP9C modulating gas furnaces",
  models: ["YP9C Series models in the cited installation manual"],
  errorCode: "7 red flashes",
  problemType: "ignition-lockout",
  directAnswer:
    "On the documented York Affinity YP9C, seven red flashes indicate lockout because ignition did not succeed after three attempts. The control waits one hour before another automatic attempt. The pattern reports the outcome, not whether the cause is gas supply, ignition, burner, flame sensing, grounding, venting, or control.",
  scopeNotice:
    "This flash count is scoped to the YP9C manual cited here. York LX, Latitude, rooftop, heat-pump, and newer communicating controls can use other code systems, so the model and LED colour must match.",
  symptoms: ["The YP9C fails to sustain gas heat and its control LED repeats seven red flashes."],
  causes: [
    "An ignition prerequisite, igniter, fuel, gas valve, burner, or venting condition can prevent flame from forming.",
    "Flame can form but not be electrically proven because of flame quality, sensing, grounding, wiring, or control issues.",
  ],
  diagnosticBranches: [
    {
      title: "No flame is visible during attempts",
      observation:
        "With all panels intact, the sequence produces sounds or igniter glow but no sustained burner flame before seven flashes begin.",
      action: "Do not force more attempts; record the exact progression and arrange licensed York furnace service.",
    },
    {
      title: "Flame appears briefly before lockout",
      observation:
        "Burners light through the factory viewing area but shut down before normal heat continues, eventually ending at seven flashes.",
      action:
        "Tell the technician that flame existed and its duration so the flame-proof branch is not confused with failure to create ignition.",
    },
  ],
  decisionTable: {
    caption: "YP9C seven-flash sequence clues",
    columns: ["Visible or audible stage", "What it narrows", "What it cannot diagnose"],
    rows: [
      ["No inducer sound", "Sequence stopped near its beginning", "A flame sensor fault"],
      ["Igniter glows without flame", "Ignition reached the hot-surface stage", "Gas should be adjusted by the owner"],
      ["Flame starts then stops", "Combustion began but was not sustained or proved", "One specific failed part"],
    ],
  },
  figures: [
    {
      title: "Three failed attempts to seven flashes",
      description:
        "The YP9C progresses through draft, ignition, gas, and flame proof; repeated failure sends the control into a one-hour lockout.",
      nodes: [
        { label: "Heating call", detail: "Thermostat requests a burner cycle" },
        {
          label: "Safety and ignition",
          detail: "Draft proof and igniter prepare for fuel",
        },
        {
          label: "Flame establishment",
          detail: "Gas must ignite across the burner assembly",
        },
        {
          label: "Lockout report",
          detail: "Seven red flashes follow three unsuccessful attempts",
        },
      ],
    },
  ],
  sections: [
    {
      title: "A retry counter cannot identify the failed stage",
      paragraphs: [
        "The YP9C control knows that three allowed ignition sequences ended without acceptable flame proof. It can count those outcomes and impose the documented one-hour lockout, but seven flashes do not say where each sequence stopped. The inducer and pressure safeguards act before the igniter. Gas must then reach correctly operating burners and ignite. Finally, flame current must return through a sound grounding and sensing path. Distinct faults across that chain share one final control decision.",
        "That explains why automatic recovery after an hour is not a repair. An intermittent connection, variable fuel condition, condensate or vent issue, marginal ignition, or weak flame proof may allow a later attempt while remaining unsafe or unreliable. Replacing a flame sensor because a generic search result names it skips the sequence observations and measured combustion evidence.",
      ],
    },
    {
      title: "Preserve one sequence with the cabinet closed",
      paragraphs: [
        "Record the thermostat call, inducer sound, igniter glow, flame appearance, flame duration, circulation-blower response, and transition to seven red flashes. Use only a factory viewing opening and leave access panels secured. Note recent gas interruption, furnace work, strong wind, drain symptoms, and whether other gas appliances changed.",
        "Do not defeat a door switch, bypass a pressure or rollout safety, clean burners, adjust gas, or probe a live control. Gas odour, soot, flame outside its normal area, a carbon-monoxide alarm, or repeated electrical protection requires immediate shutdown and emergency guidance. Avoid reset loops that create extra failed fuel attempts. A licensed technician should diagnose the original sequence with pressure, combustion, ignition, flame-current, and electrical tests.",
      ],
    },
  ],
  safeChecks: [
    "With panels closed, save the seven-red-flash pattern and observe one startup only through the factory viewing area without forcing another attempt.",
  ],
  professionalEscalation: [
    "Venting, pressure safeguards, ignition, gas, burners, flame current, grounding, combustion, and control testing require licensed York service.",
  ],
  serviceHandoff:
    "Provide the exact YP9C model, flash video, thermostat call, inducer, glow and flame observations, time to shutdown, gas history, weather, drainage clues, and reset count.",
  resetGuidance:
    "Do not repeatedly interrupt the one-hour lockout to create more ignition attempts; let a qualified technician find the failed stage.",
  faqs: [
    {
      question: "How long is a York seven-flash lockout?",
      answer:
        "The cited YP9C manual specifies a one-hour lockout after three unsuccessful ignition attempts, followed by an automatic retry.",
    },
    {
      question: "Do seven flashes prove a dirty flame sensor?",
      answer:
        "No. The code covers the outcome of the entire ignition sequence. Flame may never form, or it may form without valid proof.",
    },
    {
      question: "Can I reset a YP9C ignition lockout?",
      answer:
        "Forcing repeated resets creates additional failed combustion attempts and loses timing evidence. Preserve the flash pattern and arrange licensed diagnosis.",
    },
  ],
  sourceIds: ["york-yp9c-install", "york-affinity-furnaces"],
  glossaryTerms: ["error-code", "control-board"],
  relatedContent: ["/brands/york/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/", "/brands/york/yp9c-three-red-flashes-at-low-fire/"],
  keywords: [
    "york furnace seven red flashes",
    "yp9c 7 flashes",
    "york ignition lockout",
    "york affinity furnace code 7",
  ],
});
