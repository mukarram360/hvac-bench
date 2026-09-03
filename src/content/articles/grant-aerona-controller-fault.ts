import { publish } from "./publish";
export const grantAeronaControllerFault = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Grant Aerona controller fault: capture the code before service",
  slug: "aerona-controller-fault-code",
  path: "/brands/grant/aerona-controller-fault-code/",
  description:
    "Find and record a Grant Aerona controller fault correctly, including warning icon, red LED, operating state, and the installer handoff.",
  articleType: "troubleshooting",
  brand: "grant",
  equipmentType: "heat-pump",
  productFamily: "Aerona air-source heat pumps",
  models: ["Aerona3", "Aerona 290"],
  problemType: "controller-fault-display",
  directAnswer:
    "When a Grant Aerona controller shows a fault, record the complete code alongside the warning icon and red LED, then use the installation manual matching the exact heat-pump and controller combination. Grant directs owners to their installer for diagnosis; the code characters alone are not permission to open the unit or change service parameters.",
  scopeNotice:
    "This guide covers Grant Aerona controller fault capture and referral. Aerona3 and Aerona 290 use different equipment and documentation, while installer menus can vary with controller and system design.",
  symptoms: ["The heat-pump controller presents a warning symbol or code and the status LED is red."],
  causes: [
    "The controller can report a heat-pump, hydraulic, sensor, communication, electrical, or configured system condition.",
    "A code copied without its full characters, controller location, time, and active operating mode can point to the wrong table.",
  ],
  diagnosticBranches: [
    {
      title: "The code remains visible on the controller",
      observation: "The warning icon, characters, and red LED can be photographed before anyone changes mode or power.",
      action:
        "Capture the whole screen, exact time, active heating or hot-water request, and both equipment labels, then contact the installer.",
    },
    {
      title: "The warning cleared before it was recorded",
      observation:
        "The system resumed or another user reset it, leaving only a red-light history, app message, or remembered partial code.",
      action:
        "Write down what is known without reconstructing missing characters and ask the installer to retrieve stored fault history where supported.",
    },
  ],
  decisionTable: {
    caption: "Aerona fault handoff checklist",
    columns: ["Capture", "Why it matters", "Common loss"],
    rows: [
      ["Every code character", "Selects the exact manual entry", "A prefix or subcode omitted"],
      ["Controller and heat-pump models", "Distinguishes system generations", "Aerona name used alone"],
      ["Heating or hot-water state", "Identifies the active hydraulic route", "Mode changed before recording"],
      ["Time and weather", "Allows log and operating context comparison", "Fault described as random"],
    ],
  },
  figures: [
    {
      title: "From display to installer diagnosis",
      description:
        "The owner preserves identity and event context; the installer combines them with the matching fault table, system design, stored history, and measurements.",
      nodes: [
        {
          label: "Full display",
          detail: "Code, warning icon, and LED state captured together",
        },
        {
          label: "System identity",
          detail: "Controller, indoor, and outdoor model labels",
        },
        {
          label: "Operating context",
          detail: "Demand, time, weather, and recent work",
        },
        {
          label: "Installer evidence",
          detail: "Correct manual, history, and measured diagnosis",
        },
      ],
    },
  ],
  sections: [
    {
      title: "A code is only useful inside its document scope",
      paragraphs: [
        "Grant's owner support sends a displayed fault to the installation manual and the original installer. That direction matters because an Aerona system is more than the outdoor heat pump. Its controller, hydraulic module, cylinder, pumps, valves, emitters, sensors, and wiring are commissioned as one design. The same symptom can reach the controller from different components, and controller generations do not necessarily format alerts alike. The exact equipment combination chooses the code table.",
        "Photograph the screen rather than copying it from memory. Include punctuation, leading zeroes, prefixes, warning icon, and LED colour. A secondary number or location can distinguish the reporting device. If an app mirrors the event, capture its timestamp and wording too. This evidence provides more information than an internet search for a partial number.",
      ],
    },
    {
      title: "Keep the owner task observational",
      paragraphs: [
        "Record whether the system was making space heat, domestic hot water, or neither; current outdoor weather; visible controller pressure or temperatures; recent power interruption; and any plumbing, filter, valve, or installer work. Observe external water, frost, sound, and whether backup heat is active without removing a panel or changing commissioning settings.",
        "Do not enter installer menus, force outputs, alter curves or flow temperatures to clear an alarm, open strainers, bleed unfamiliar pressurised components, or reset repeatedly. Water near electrics, freezing risk, smoke, burning odour, or loss of safe building temperature warrants prompt contact. If the display clears, preserve its photo and do not claim repair; stored history and recurrence timing remain valuable to the Grant installer.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the complete controller display, warning icon, red LED, system labels, operating mode, weather, and external water or frost.",
  ],
  professionalEscalation: [
    "Fault decoding beyond the user manual, hydraulic access, installer settings, sensors, pumps, valves, refrigerant, and electrical checks belong to the Grant installer.",
  ],
  serviceHandoff:
    "Send the installer the Aerona and controller models, unedited display photo, timestamp, heating or hot-water state, weather, pressure shown, external observations, recent work, and reset history.",
  resetGuidance:
    "Do not reset before capturing the fault, and avoid repeated clearing; follow only the exact controller user instruction while the installer evaluates recurrence.",
  faqs: [
    {
      question: "Where do I find a Grant Aerona fault meaning?",
      answer:
        "Grant directs users to the installation manual for the exact system and to the installer. Capture the complete code and models first.",
    },
    {
      question: "What does the red Aerona controller light mean?",
      answer:
        "Together with the warning icon and code, the red LED signals a fault state. It does not name a failed component without the matching manual.",
    },
    {
      question: "Can I clear an Aerona fault in installer settings?",
      answer:
        "Do not change commissioning menus to suppress a fault. Those settings control the designed heating system and belong with the installer.",
    },
  ],
  sourceIds: ["grant-aerona-fault", "grant-aerona-support"],
  glossaryTerms: ["error-code", "air-to-water-heat-pump"],
  relatedContent: ["/brands/grant/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: [
    "grant aerona fault code",
    "aerona controller red light",
    "grant heat pump warning icon",
    "aerona fault display",
  ],
});
