import { publish } from "./publish";
export const draytonWiserFlameNoBoiler = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Drayton Wiser flame icon on but boiler not firing",
  slug: "wiser-flame-icon-boiler-not-firing",
  path: "/brands/drayton/wiser-flame-icon-boiler-not-firing/",
  description:
    "Trace a Wiser heat demand from app flame icon to Heat Hub relay, zone valve, boiler input, and burner without assuming the icon proves heat.",
  articleType: "troubleshooting",
  brand: "drayton",
  equipmentType: "controls-thermostats",
  productFamily: "Drayton Wiser Heat Hub systems",
  models: ["Wiser Heat HubR", "Wiser Heat HubR Multi-zone", "Wiser room thermostats and radiator thermostats"],
  problemType: "heat-demand-no-boiler",
  directAnswer:
    "The flame icon in Drayton Wiser indicates a heating demand, not proof that the boiler burner is operating. Check whether the Heat Hub heating LED and relay follow that demand. If the hub switches but the boiler stays off, the fault boundary moves downstream to wiring, zone valves, boiler enable, boiler safeties, or the boiler itself.",
  scopeNotice:
    "This logic applies to Wiser Heat Hub systems described in Drayton's installer handbook. HubR variants, multi-zone wiring centres, combi and system boilers, OpenTherm, and motorised-valve layouts route demand differently.",
  symptoms: [
    "The Wiser app or thermostat shows a flame while radiators remain cold and the boiler does not appear to fire.",
  ],
  causes: [
    "The app demand may not reach the hub because of device, wireless, schedule, or control-state issues.",
    "The hub relay may switch correctly while downstream wiring, valves, interlocks, boiler input, or combustion safety prevents heat.",
  ],
  diagnosticBranches: [
    {
      title: "Hub heating indication does not follow demand",
      observation:
        "The app flame appears but the corresponding Heat Hub heating LED or manual channel response does not change as the guide describes.",
      action:
        "Record device and hub states, check connectivity and schedules through user controls, and contact Wiser support before altering boiler wiring.",
    },
    {
      title: "Hub indicates heat but boiler remains off",
      observation:
        "The correct hub channel illuminates or its relay can be heard, yet no zone warms and the boiler does not begin its sequence.",
      action:
        "Treat the Wiser demand as handed downstream and have an engineer trace valve end switches, wiring, boiler input, and boiler status.",
    },
  ],
  decisionTable: {
    caption: "Wiser demand-to-heat checkpoints",
    columns: ["Checkpoint", "Positive evidence", "If the next step fails"],
    rows: [
      ["App or room control", "Flame icon shows a request", "Check device schedule and connectivity"],
      ["Heat Hub channel", "Heating LED or documented relay response", "Check hub state and configuration"],
      ["Zone-control output", "Valve opens and end switch proves", "Trace valve and wiring"],
      ["Boiler enable", "Boiler accepts demand", "Read boiler status or fault"],
      ["Burner and circulation", "Heat reaches emitters", "Diagnose boiler or hydraulic delivery"],
    ],
  },
  figures: [
    {
      title: "The flame icon is the first link",
      description:
        "A room demand must travel through several controls before fuel burns and hot water reaches a radiator, so each checkpoint proves only its own link.",
      nodes: [
        {
          label: "Wiser demand",
          detail: "App or room device requests a higher temperature",
        },
        {
          label: "Heat Hub relay",
          detail: "Selected channel translates demand into wired output",
        },
        {
          label: "Valve and wiring",
          detail: "Installed controls pass enable toward the boiler",
        },
        {
          label: "Boiler and water",
          detail: "Combustion and circulation finally deliver heat",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Demand is not the same as delivery",
      paragraphs: [
        "The flame symbol is a statement about Wiser's control intention. It says a room or schedule is requesting heat. It cannot observe flame inside every connected boiler, and in many installations it does not prove that a motorised valve reached its end switch. The Heat Hub is the next checkpoint. Its channel indication and relay response show whether the request left the Wiser logic. From there, the installed wiring design decides what must happen before the boiler receives enable.",
        "This distinction prevents resetting wireless devices when the real fault is downstream. If the hub switches and a zone valve stalls, the app can remain internally consistent while the boiler never receives the valve's end-switch signal. If the boiler receives demand but is locked out, neither the Wiser icon nor relay caused the combustion fault. A checkpoint method finds the boundary without blaming the first visible interface.",
      ],
    },
    {
      title: "Test indicators, not mains terminals",
      paragraphs: [
        "Create one clear demand by raising a single room setpoint above measured temperature. Record the app flame, room-device state, correct hub channel LED, relay sound if audible, valve movement sound, boiler display, and which pipes or radiators begin warming. Then cancel the demand and record which states release. This paired on-and-off observation is stronger than a single screenshot.",
        "Do not remove the Heat Hub cover, bridge relay terminals, force a motorised valve, open a wiring centre, or enter boiler service controls. These circuits can carry mains voltage. If the hub never follows demand, use Wiser support with device diagnostics. If the hub responds but the next checkpoint fails, a qualified heating engineer or electrician should trace the installed schematic. Preserve any boiler fault separately.",
      ],
    },
  ],
  safeChecks: [
    "Create one controlled room demand and record app, room control, hub LED, relay sound, boiler display, and heat response without opening equipment.",
  ],
  professionalEscalation: [
    "Hub wiring, mains relay output, wiring centres, zone valves, boiler enable, OpenTherm, combustion faults, and hydraulic diagnosis require qualified service.",
  ],
  serviceHandoff:
    "Provide hub and room-device models, screenshots, demanded zone and setpoint, hub channel and LED response, relay and valve sounds, boiler display, wiring type if known, and on-off test results.",
  resetGuidance:
    "Do not reset the whole Wiser system until the failed checkpoint is identified; a factory reset can obscure a downstream wiring or boiler fault.",
  faqs: [
    {
      question: "Does the Wiser flame icon prove the boiler is on?",
      answer:
        "No. It proves Wiser is requesting heat. Hub relay, zone controls, boiler enable, burner operation, and water circulation are later checkpoints.",
    },
    {
      question: "What if the Wiser hub heating light is on?",
      answer:
        "That moves the fault boundary downstream. The installed valve, wiring, boiler input, boiler status, and hydraulic delivery need to be traced.",
    },
    {
      question: "Should I factory-reset Wiser when radiators stay cold?",
      answer:
        "Not before checking the demand chain. Resetting wireless controls cannot repair a valve, mains wiring, boiler lockout, or circulation problem.",
    },
  ],
  sourceIds: ["drayton-wiser-handbook", "drayton-wiser-demand"],
  glossaryTerms: ["thermostat", "boiler"],
  relatedContent: ["/brands/drayton/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: [
    "wiser flame icon boiler not firing",
    "drayton wiser calling for heat no boiler",
    "wiser hub heating light on",
    "wiser radiators cold",
  ],
});
