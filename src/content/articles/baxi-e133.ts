import { publish } from "./publish";
export const baxiE133 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Baxi E133: failed ignition and the frozen-condensate clue",
  slug: "e133-fault-code",
  path: "/brands/baxi/e133-fault-code/",
  description:
    "Decode Baxi E133 as failed ignition, understand why frozen condensate can be relevant in cold weather, and know where owner checks stop.",
  articleType: "error-code",
  brand: "baxi",
  equipmentType: "boiler",
  productFamily: "Baxi domestic boilers covered by the manufacturer E133 guidance",
  models: ["Baxi 600", "Baxi 800", "Baxi Platinum models listed in applicable documentation"],
  errorCode: "E133",
  problemType: "ignition-lockout",
  directAnswer:
    "Baxi defines E133 as a failed ignition condition. In freezing weather, a blocked frozen condensate pipe can contribute on installations with an external condensate run, but E133 is not a frozen-pipe detector. Fuel supply, ignition, flame proof, condensate, venting, and controls remain professional diagnostic branches.",
  scopeNotice:
    "This guidance applies only to Baxi boilers whose own user or service instructions list E133. Product generation, country, and fuel setup matter; confirm the complete model before using any reset or thawing instruction.",
  symptoms: ["The Baxi display shows E133 and the boiler does not sustain central heating or hot water."],
  causes: [
    "The supervised sequence can fail to establish or prove flame because of gas, ignition, electrode, grounding, combustion, or control conditions.",
    "In cold weather, frozen water in a safely accessible external condensate section can block the boiler's drainage path and prevent operation.",
  ],
  diagnosticBranches: [
    {
      title: "E133 follows freezing weather",
      observation:
        "An external condensate pipe is visible at ground level, outdoor temperatures are freezing, and other gas appliances appear unaffected.",
      action:
        "Follow only Baxi's published accessible-pipe thawing guidance if every condition is met; never climb, open the boiler, or apply boiling water or flame.",
    },
    {
      title: "E133 has no safe condensate clue",
      observation:
        "Weather is mild, pipework is inaccessible or internal, gas supply is uncertain, or the code returns after one permitted reset.",
      action:
        "Stop owner troubleshooting and arrange a Gas Safe registered engineer to test ignition and combustion safely.",
    },
  ],
  decisionTable: {
    caption: "E133 cold-weather triage",
    columns: ["Context", "What it suggests", "What it does not prove"],
    rows: [
      [
        "Freezing weather plus accessible external pipe",
        "Frozen condensate is a plausible branch",
        "Ignition components are sound",
      ],
      ["Other gas appliances also fail", "Property gas supply may be involved", "The boiler itself caused the outage"],
      ["Reset clears then E133 returns", "Fault remains intermittent or active", "Repeated resetting is safe"],
    ],
  },
  figures: [
    {
      title: "Why drainage can end as an ignition code",
      description:
        "A condensing boiler must dispose of condensate during combustion; a blocked route can interrupt the supervised burner sequence and end at failed ignition.",
      nodes: [
        {
          label: "Ignition request",
          detail: "Boiler begins a controlled burner sequence",
        },
        {
          label: "Combustion and condensate",
          detail: "Burning gas creates water that must drain",
        },
        {
          label: "Drainage or flame proof",
          detail: "Blocked water path or missing flame proof stops operation",
        },
        {
          label: "E133",
          detail: "Display reports the failed ignition outcome",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Cold weather is a branch, not the definition",
      paragraphs: [
        "Baxi's fault guidance calls E133 an ignition failure. Its separate homeowner advice notes that frozen condensate can lead to E133 in cold weather. Both statements can be true because the control reports the unsuccessful burner outcome rather than naming every physical condition that caused it. A blocked condensate route can prevent safe operation, but mild-weather E133 and inaccessible pipework require another path. Even during a freeze, gas, ignition, flame sensing, and controls are not eliminated by the weather.",
        "This framing avoids replacing an electrode when ice is visible and avoids thawing random pipes when no condensate evidence exists. First identify the boiler and its actual condensate route. Then combine outdoor temperature, accessibility, other gas-appliance status, and the full code. The result decides whether the narrow manufacturer homeowner action applies or whether service starts immediately.",
      ],
    },
    {
      title: "Keep the thawing boundary literal",
      paragraphs: [
        "Only a condensate section at ground level and easily reached can be considered for owner thawing under Baxi guidance. Use warm, not boiling, water or another manufacturer-approved method, control the water, and avoid slips and nearby electrics. Never climb, disconnect a pipe, remove the boiler case, use a naked flame, or apply intense heat. If identity or access is uncertain, stop.",
        "Photograph E133, the model, weather, and visible frozen section before changing anything. If a permitted thaw and one model-approved reset restore heat, observe the pipe and arrange correction if freezing recurs. If the code stays, returns, or gas odour, soot, abnormal flame noise, or a carbon-monoxide alarm appears, shut down and follow emergency or Gas Safe guidance. The reset is not a substitute for combustion diagnosis.",
      ],
    },
  ],
  safeChecks: [
    "Confirm the full model and weather, check other gas appliances, and inspect only an easily accessible ground-level external condensate section.",
  ],
  professionalEscalation: [
    "Inaccessible or internal condensate, recurring freezing, gas supply, ignition, electrode, combustion, vent, flame-proof, and sealed-case work require Gas Safe service.",
  ],
  serviceHandoff:
    "Provide the Baxi model, E133 photo, outdoor temperature, other gas-appliance status, condensate route and accessibility, thawing method if used, reset result, and recurrence.",
  resetGuidance:
    "Use one reset only as the exact Baxi user manual permits; do not repeat it when E133 remains or returns after any safe condensate action.",
  faqs: [
    {
      question: "Is Baxi E133 always a frozen condensate pipe?",
      answer:
        "No. E133 is failed ignition. Frozen condensate is one cold-weather branch on applicable installations, not a universal code definition.",
    },
    {
      question: "Can I pour boiling water on condensate pipework?",
      answer:
        "No. Follow Baxi's safe method with warm water only on an easily reached ground-level section, and avoid slips, electrics, climbing, flame, and disassembly.",
    },
    {
      question: "Why did E133 return after thawing?",
      answer:
        "The pipe may freeze again or another ignition branch may remain. Stop reset loops and have a Gas Safe engineer assess the installed drainage and combustion sequence.",
    },
  ],
  sourceIds: ["baxi-e133", "baxi-error-codes"],
  glossaryTerms: ["error-code", "boiler"],
  relatedContent: ["/brands/baxi/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: ["baxi e133", "baxi e133 frozen condensate", "baxi failed ignition code", "baxi boiler e133 reset"],
});
