import { publish } from "./publish";
export const toshibaSeiyaDefrostLight = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Toshiba Seiya heating pause: recognise an on-demand defrost",
  slug: "seiya-heating-pause-defrost",
  path: "/brands/toshiba/seiya-heating-pause-defrost/",
  description:
    "Use timing, weather, and recovery to distinguish a normal Toshiba Seiya S4 defrost pause from a heating problem that needs service.",
  articleType: "troubleshooting",
  brand: "toshiba",
  equipmentType: "ductless-mini-split",
  productFamily: "Seiya S4",
  models: [
    "RAS-B05S4KVG-E",
    "RAS-B07S4KVG-E",
    "RAS-B10S4KVG-E",
    "RAS-B13S4KVG-E",
    "RAS-B16S4KVG-E",
    "RAS-B18S4KVG-E",
    "RAS-B24S4KVG-E",
  ],
  problemType: "defrost-cycle",
  directAnswer:
    "A Toshiba Seiya S4 can temporarily pause warm indoor airflow while it defrosts the outdoor coil. A short cold-weather pause that ends with heating resuming is an operating state; a unit that never recovers, repeats unusually, or shows a diagnostic pattern needs model-specific service.",
  scopeNotice:
    "This guide is for the RAS-B05 through RAS-B24 S4KVG-E Seiya S4 family listed on Toshiba's United Kingdom product page. Earlier Seiya generations and other Toshiba controls can indicate defrost differently.",
  symptoms: ["Indoor warm airflow pauses during heating while the system remains powered."],
  causes: [
    "The heat pump may reverse temporarily to remove frost from its outdoor heat exchanger.",
    "Persistent loss of heat can instead involve airflow, control, sensing, refrigerant, or outdoor-unit faults.",
  ],
  diagnosticBranches: [
    {
      title: "The pause ends by itself",
      observation:
        "Cold or damp outdoor conditions accompany the event and the same heating setting resumes without a reset.",
      action:
        "Treat the completed event as a defrost cycle and keep the outdoor air path clear without touching the coil.",
    },
    {
      title: "Heating does not return",
      observation:
        "The unit remains unable to heat, displays a repeatable lamp pattern, trips power, or accumulates ice that does not clear.",
      action:
        "Photograph the indications and outdoor coil from a safe distance, stop resetting, and request Toshiba service.",
    },
  ],
  decisionTable: {
    caption: "Seiya pause versus unresolved fault",
    columns: ["What happens", "Interpretation", "Next move"],
    rows: [
      ["Pause, outdoor water or vapour, then heat", "Completed defrost behavior", "Continue normal operation"],
      ["Outdoor coil remains heavily blocked", "Defrost has not restored airflow", "Arrange inspection"],
      ["Lamp sequence repeats with no recovery", "Diagnostic condition possible", "Save video and model numbers"],
    ],
  },
  figures: [
    {
      title: "Heating to defrost and back",
      description:
        "A normal event has a complete sequence: heating creates outdoor frost, the unit clears that frost, and the original heating demand resumes.",
      nodes: [
        {
          label: "Heating run",
          detail: "Outdoor coil operates below ambient temperature",
        },
        {
          label: "Frost decision",
          detail: "Control detects conditions that require clearing",
        },
        {
          label: "Defrost interval",
          detail: "Indoor heat delivery pauses while the outdoor coil warms",
        },
        {
          label: "Heating recovery",
          detail: "Airflow returns after the cycle completes",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Judge the sequence, not a single quiet moment",
      paragraphs: [
        "In heating mode, the outdoor coil is the cold heat exchanger. Moist air can freeze on it, and the system must periodically remove that frost to preserve heat transfer. During on-demand defrost, indoor airflow can slow or stop so the room is not deliberately blown with cool air. Water may drain below the outdoor unit and vapour can appear as the warmed coil sheds frost. These signs become reassuring only when they form a completed sequence and the Seiya returns to the same heating request.",
        "A pause without recovery is a different observation. Continuous ice can block outdoor airflow, while a repeated indicator pattern may contain model-specific diagnostic information. A clogged indoor filter, obstructed outdoor intake, sensor problem, fan fault, or refrigerant-side issue can also reduce heating, but the quiet interval alone does not rank those causes. Let outcome and display evidence decide whether the event was normal.",
      ],
    },
    {
      title: "Observe without interrupting the evidence",
      paragraphs: [
        "Note the outdoor temperature, visible frost before the pause, water or vapour during it, total duration, and supply-air recovery afterward. Film any lamp pattern through two repetitions. Check that leaves, snow, or stored items are not restricting the outdoor unit's specified clearance, but do not strike or scrape ice from the coil.",
        "Avoid changing modes repeatedly or cutting power during a plausible defrost. Doing so prevents the system from completing the sequence you are trying to assess. If heating fails to return, ice remains after the event, or a breaker trips, turn the system off as instructed and give a Toshiba technician the paired model numbers and your timeline.",
      ],
    },
  ],
  safeChecks: [
    "Time the pause, observe frost and drainage from a safe position, and confirm that removable outdoor obstructions are outside required clearances.",
  ],
  professionalEscalation: [
    "Persistent icing, repeated diagnostic lamps, electrical trips, or failure to resume heat require model-specific professional testing.",
  ],
  serviceHandoff:
    "Provide both Seiya model numbers, selected temperature, weather, pause duration, photos of the outdoor coil, the recovery result, and a video of any lamp sequence.",
  resetGuidance:
    "Allow a plausible defrost to finish; do not interrupt it with resets, and preserve a persistent indication for Toshiba service.",
  faqs: [
    {
      question: "Why did my Toshiba Seiya stop blowing warm air?",
      answer:
        "During cold-weather heating, a temporary indoor pause can protect comfort while the outdoor coil defrosts. Normal heating should resume when that sequence finishes.",
    },
    {
      question: "Is steam from the outdoor unit dangerous?",
      answer:
        "A cloud of water vapour during a completed defrost can be normal. Smoke, burning odour, or electrical noise is different and calls for shutdown and service.",
    },
    {
      question: "Should I remove ice from the Toshiba coil?",
      answer:
        "Do not scrape, chip, or heat the coil. Preserve its thin fins and let the designed defrost operate; unresolved ice needs professional diagnosis.",
    },
  ],
  sourceIds: ["toshiba-seiya-s4", "toshiba-seiya-manuals"],
  glossaryTerms: ["defrost-cycle", "heat-pump"],
  relatedContent: ["/brands/toshiba/", "/how-heat-pump-defrost-works/", "/how-to-tell-if-mini-split-is-in-defrost/"],
  keywords: [
    "toshiba seiya defrost",
    "toshiba seiya stops heating",
    "toshiba air conditioner heating pause",
    "seiya s4 defrost mode",
  ],
});
