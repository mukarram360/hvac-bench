import { publish } from "./publish";
export const worcesterGreenstarEa227 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Worcester Greenstar Si Compact EA 227 ignition fault",
  slug: "greenstar-si-ea-227-fault",
  path: "/brands/worcester-bosch/greenstar-si-ea-227-fault/",
  description:
    "Read the complete EA 227 display on a Greenstar Si Compact, use the permitted single reset, and preserve ignition evidence for a heating engineer.",
  articleType: "error-code",
  brand: "worcester-bosch",
  equipmentType: "boiler",
  productFamily: "Greenstar Si Compact ErP",
  models: ["Greenstar 25 Si Compact ErP", "Greenstar 30 Si Compact ErP"],
  errorCode: "EA 227",
  problemType: "ignition-lockout",
  directAnswer:
    "On the documented Worcester Bosch Greenstar Si Compact ErP, EA with subcode 227 means no ionisation was detected after ignition. The user instructions permit the Reset button once and require service if the alert returns. The display does not prove whether flame failed to form or formed without valid sensing.",
  scopeNotice:
    "This EA 227 definition is for Greenstar Si Compact ErP user instructions 6 720 813 279. Other Greenstar models attach different three-digit subcodes to EA, so record both lines of the display.",
  symptoms: [
    "The boiler shows EA and 227 with a flashing blue operation or fault light and fails to deliver normal heat.",
  ],
  causes: [
    "The ignition sequence may not establish flame because of fuel, condensate, venting, ignition, burner, or control conditions.",
    "Flame may form but the ionisation path, grounding, electrode, wiring, or control may not prove it.",
  ],
  diagnosticBranches: [
    {
      title: "One reset restores normal operation",
      observation:
        "The display confirms Reset, the alert clears, and the boiler completes stable heating without EA 227 returning.",
      action:
        "Record the original event and observe; recovery confirms only that the control accepted a new attempt, not which condition caused the first failure.",
    },
    {
      title: "EA 227 remains or returns",
      observation:
        "The alert survives the permitted reset, reappears during ignition, or the boiler repeatedly loses heat.",
      action:
        "Stop resetting and arrange a Gas Safe registered engineer, preserving the complete code and startup observations.",
    },
  ],
  decisionTable: {
    caption: "EA needs its three-digit subcode",
    columns: ["Display", "Published meaning", "Owner response"],
    rows: [
      ["EA with 227", "No ionisation detected after ignition", "One user reset, then observe"],
      ["EA with another number", "A different EA branch may apply", "Use exact model table"],
      ["EA 227 returns", "Ignition proof remains unresolved", "Gas Safe service"],
    ],
  },
  figures: [
    {
      title: "From ignition attempt to EA 227",
      description:
        "The boiler must create flame and then detect ionisation through its combustion and electrical path; the display records when that proof is absent.",
      nodes: [
        {
          label: "Burner start request",
          detail: "Control begins the supervised ignition sequence",
        },
        {
          label: "Fuel and ignition",
          detail: "Gas and spark must establish a stable flame",
        },
        {
          label: "Ionisation proof",
          detail: "Electrode and grounding return a valid flame signal",
        },
        {
          label: "EA 227",
          detail: "Locking alert records missing proof after ignition",
        },
      ],
    },
  ],
  sections: [
    {
      title: "The number below EA prevents a wrong lookup",
      paragraphs: [
        "Worcester displays a letter code and a three-digit detail. On this Greenstar Si Compact, EA 227 identifies no ionisation detected after ignition. Other EA subcodes in service literature can describe loss of ionisation during operation, signal range, valve connection, or ignition timing. Reporting only EA strips away the distinction the controller provided. Photograph the full display before pressing Reset.",
        "Ionisation is electrical evidence of flame, not a promise that every earlier ignition stage happened correctly. Fuel must be available, the vent and condensate routes must permit the sequence, ignition must operate, burners must establish flame, and the electrode and earth path must return a valid signal. A technician decides whether flame never formed or was not proved. The code alone cannot select an electrode.",
      ],
    },
    {
      title: "Use the reset as one controlled test",
      paragraphs: [
        "The user manual directs the owner to press Reset and shows a successful confirmation before normal display returns. Follow that model instruction once. Note whether the burner starts, how long heat continues, and whether EA 227 comes back. Some safety faults cannot be cleared by a simple reset, and recurrence is the point at which an engineer visit is required.",
        "Do not remove the boiler case, clean electrodes or burners, adjust gas, thaw inaccessible condensate pipework, or keep manufacturing ignition attempts. If gas is smelled, a carbon-monoxide alarm activates, soot appears, or combustion sounds abnormal, stop and follow emergency guidance without resetting. Give the Gas Safe engineer the complete code, model, weather, fuel interruption, condensate observations, and exact post-reset result.",
      ],
    },
  ],
  safeChecks: [
    "Photograph EA and 227 together, perform only the user-manual reset once, and note whether stable operation returns without opening the case.",
  ],
  professionalEscalation: [
    "Returning EA 227, gas, combustion, ionisation, electrode, vent, condensate, grounding, and sealed-case work require a Gas Safe registered engineer.",
  ],
  serviceHandoff:
    "Provide the Greenstar model, EA 227 photo, blue-light state, reset confirmation, burner and heat duration, gas interruption, cold-weather condensate clues, and recurrence time.",
  resetGuidance:
    "Press Reset once as the Si Compact user manual directs; if EA 227 remains or returns, do not continue forcing ignition attempts.",
  faqs: [
    {
      question: "What does the 227 below Worcester EA mean?",
      answer:
        "On this Greenstar Si Compact, 227 specifies that ionisation was not detected after ignition. Preserve it because another EA subcode can mean something else.",
    },
    {
      question: "Can I reset Greenstar EA 227?",
      answer:
        "The cited user instructions permit a Reset-button attempt. If it fails or the code returns, a service engineer visit is required.",
    },
    {
      question: "Does EA 227 mean a bad ignition electrode?",
      answer:
        "No. The electrode is one part of fuel, ignition, flame, grounding, ionisation, vent, condensate, wiring, and control paths that need professional tests.",
    },
  ],
  sourceIds: ["worcester-si-ea227", "worcester-greenstar-manuals"],
  glossaryTerms: ["error-code", "boiler"],
  relatedContent: [
    "/brands/worcester-bosch/",
    "/how-to-document-hvac-fault-for-service/",
    "/how-to-read-hvac-data-plate/",
  ],
  keywords: [
    "worcester ea 227",
    "greenstar si compact ea fault",
    "worcester boiler no ionisation",
    "worcester ea reset",
  ],
});
