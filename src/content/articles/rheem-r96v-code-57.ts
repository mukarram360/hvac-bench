import { publish } from "./publish";
export const rheemR96vCode57 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Rheem R96V fault 57: pressure switch open at the wrong time",
  slug: "r96v-fault-57",
  path: "/brands/rheem/r96v-fault-57/",
  description:
    "Understand Rheem R96V fault 57 without replacing the pressure switch before vent, condensate, inducer, tubing, wiring, and pressure are tested.",
  articleType: "error-code",
  brand: "rheem",
  equipmentType: "furnace",
  productFamily: "R96V communicating condensing gas furnaces",
  models: ["R96V Series models in Rheem document 92-24161-184"],
  errorCode: "57",
  problemType: "pressure-switch-fault",
  directAnswer:
    "Rheem R96V fault 57 means the combustion pressure switch is open when the control expects it closed. The furnace can withhold gas heat while other modes remain available. The code does not prove a defective switch because draft, venting, condensate, tubing, inducer, wiring, and actual pressure determine its state.",
  scopeNotice:
    "This definition applies to R96V furnaces covered by Rheem document 92-24161-184. Other Rheem control generations and water-heating products can assign 57 differently, so use the full furnace model.",
  symptoms: ["The R96V does not produce gas heat and its control or communicating thermostat reports fault 57."],
  causes: [
    "The combustion-air or flue path, condensate system, pressure tubing, or inducer may not create the required draft.",
    "The pressure switch, its wiring, or the integrated control input may fail to report an otherwise valid condition.",
  ],
  diagnosticBranches: [
    {
      title: "Fault 57 follows heavy weather or drainage symptoms",
      observation:
        "The event appeared with wind, snow, ice, water sounds, a condensate backup, or visible obstruction at an accessible exterior termination.",
      action:
        "Do not dismantle the vent or drain; photograph safe exterior conditions and give the timing to a licensed furnace technician.",
    },
    {
      title: "Fault 57 follows furnace service",
      observation:
        "Inducer, condensate, vent, tubing, wiring, or control work occurred shortly before the pressure-switch fault began.",
      action:
        "Return the exact work history to the servicing company and ask for measured draft and switch-state verification rather than an assumption.",
    },
  ],
  decisionTable: {
    caption: "R96V fault 57 diagnostic boundaries",
    columns: ["Observation", "What it may prioritise", "What it cannot prove"],
    rows: [
      ["Inducer never starts", "Command, power, motor, or control path", "Pressure switch is bad"],
      ["Inducer runs but 57 remains", "Draft, vent, condensate, tubing, switch, or wiring", "Vent is clear"],
      [
        "Fault changes with wind",
        "Termination or pressure conditions deserve review",
        "A permanent cause is identified",
      ],
    ],
  },
  figures: [
    {
      title: "Combustion pressure proof path",
      description:
        "Before fuel is allowed, the inducer must create a valid pressure through an open vent and condensate route, and the switch circuit must report that proof.",
      nodes: [
        {
          label: "Inducer command",
          detail: "Control starts the combustion-air mover",
        },
        {
          label: "Vent and condensate",
          detail: "Air and water paths must remain within design",
        },
        {
          label: "Pressure tubing and switch",
          detail: "Translate draft into an electrical state",
        },
        {
          label: "Control proof",
          detail: "Valid closed input permits ignition sequence to continue",
        },
      ],
    },
  ],
  sections: [
    {
      title: "The switch reports draft but does not create it",
      paragraphs: [
        "A furnace pressure switch is an interlock. It observes whether the inducer and connected air path create the required pressure before gas ignition continues. Fault 57 says the expected closed state was absent. A blocked intake or exhaust, incorrect venting, condensate that cannot drain, damaged or water-filled tubing, weak inducer performance, loose wiring, or a control issue can all leave that input open. The switch can also fail, but replacing it without measuring the system treats the messenger as the cause.",
        "Qualified diagnosis compares actual pressure with the switch rating and observes when the contacts change. The technician also inspects the complete vent and condensate design, tubing route, inducer operation, electrical connections, and related stored faults. Bypassing the switch destroys a combustion safeguard and must never be used as a way to keep heat running.",
      ],
    },
    {
      title: "Owner observations that retain safety value",
      paragraphs: [
        "Keep all furnace panels installed. Record fault 57, thermostat demand, whether the inducer starts, whether the code appears immediately or after a delay, and whether circulation fan or cooling modes still operate. From a safe outdoor location, photograph only the visible vent termination and surrounding snow, ice, debris, or construction. Do not insert tools into it.",
        "Leave the furnace off and follow emergency guidance for gas odour, combustion smell, a carbon-monoxide alarm, soot, flame outside its normal area, or repeated electrical trips. Do not drain internal tubing, open the condensate trap, adjust venting, or test live switches. A restart that temporarily restores heat is not proof of repair; intermittent pressure faults need the original conditions and timing.",
      ],
    },
  ],
  safeChecks: [
    "With panels intact, capture code 57, thermostat demand, inducer sound, time to fault, and safe exterior photos of the vent termination.",
  ],
  professionalEscalation: [
    "Draft measurement, vent and condensate access, inducer testing, tubing inspection, switch verification, wiring, and combustion work require licensed furnace service.",
  ],
  serviceHandoff:
    "Provide the complete R96V model, fault photo, heat-call sequence, inducer observation, weather and wind, exterior termination photos, condensate clues, recent service, and reset history.",
  resetGuidance:
    "Do not power-cycle fault 57 repeatedly or bypass the pressure switch; a returning pressure-proof failure requires measured combustion-path diagnosis.",
  faqs: [
    {
      question: "Does Rheem code 57 mean a bad pressure switch?",
      answer:
        "No. It means the expected switch state was absent. Actual draft, venting, condensate, tubing, inducer, wiring, switch, and control all remain in the path.",
    },
    {
      question: "Why does the blower work with fault 57?",
      answer:
        "Rheem notes that gas heat can be unavailable while other operating modes may still function. A running circulation blower does not prove the combustion path.",
    },
    {
      question: "Can wind cause an R96V pressure fault?",
      answer:
        "Weather-related pressure changes are useful context, but recurring fault 57 still needs vent termination, measured draft, and switch operation assessed as an installed system.",
    },
  ],
  sourceIds: ["rheem-r96v-service", "rheem-heating-support"],
  glossaryTerms: ["error-code", "control-board"],
  relatedContent: ["/brands/rheem/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/", "/brands/rheem/econet-server-connection-error/"],
  keywords: ["rheem code 57", "r96v fault 57", "rheem pressure switch open", "rheem furnace error 57"],
});
