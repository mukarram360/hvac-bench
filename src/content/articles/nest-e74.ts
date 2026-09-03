import { publish } from "./publish";
export const nestE74 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Nest E74: no power detected on the Rh wire",
  slug: "e74-no-power-rh",
  path: "/brands/nest/e74-no-power-rh/",
  description:
    "Decode Nest E74 as missing Rh power, use screen and system context to narrow the supply path, and avoid unsafe live-wire troubleshooting.",
  articleType: "error-code",
  brand: "nest",
  equipmentType: "controls-thermostats",
  productFamily: "Google Nest thermostats covered by the E-code power guide",
  models: ["Nest Learning Thermostat", "Nest Thermostat E"],
  errorCode: "E74",
  problemType: "thermostat-power-fault",
  directAnswer:
    "Google Nest defines E74 as no power detected on the Rh wire. The thermostat is reporting the missing 24-volt heating-power input, not its cause. Furnace power, transformer and fuse, equipment safeties, condensate devices, Rh wiring and connection, and the thermostat input remain separate diagnostic points.",
  scopeNotice:
    "This E74 definition applies to Nest models covered by Google's wiring-error guide. The 2020 Nest Thermostat can present different messages, and Rc, C, and other E-codes identify different inputs.",
  symptoms: ["The Nest screen reports E74 or no power to Rh and heating control is unavailable."],
  causes: [
    "Heating equipment power, transformer output, a low-voltage fuse, or a safety circuit can remove 24-volt supply from Rh.",
    "The Rh conductor, terminal seating, splice, or thermostat input can fail to deliver or recognise available power.",
  ],
  diagnosticBranches: [
    {
      title: "E74 followed equipment shutdown or water",
      observation:
        "The furnace or air handler also appears unpowered, a service switch or breaker changed, or a condensate pump or drain condition preceded the message.",
      action:
        "Keep away from water and equipment wiring, record every related symptom, and have the equipment power and safety path checked.",
    },
    {
      title: "E74 followed thermostat or wall work",
      observation:
        "The message began after the Nest was removed, rewired, painted around, or disturbed while the HVAC equipment otherwise appears normal.",
      action:
        "Turn HVAC power off before any model-approved connector inspection and stop if conductor identity, damage, or voltage is uncertain.",
    },
  ],
  decisionTable: {
    caption: "Nest E74 path split",
    columns: ["Observation", "Likely boundary", "What E74 does not prove"],
    rows: [
      ["Equipment also dead", "Source, transformer, fuse, or safety path", "Nest base is defective"],
      ["Only thermostat changed", "Rh seating or wall conductor deserves review", "Furnace is healthy"],
      ["Water near furnace or drain safety", "Condensate protection may have opened power", "Drain should be bypassed"],
      ["E74 intermittent", "Connection or supply varies with condition", "A battery recharge is the repair"],
    ],
  },
  figures: [
    {
      title: "Where Rh power reaches the Nest",
      description:
        "The thermostat can detect Rh only after building power is transformed, equipment safeties remain closed, and the low-voltage conductor reaches its terminal.",
      nodes: [
        {
          label: "HVAC line power",
          detail: "Supplies furnace or air-handler transformer",
        },
        {
          label: "24-volt and safeties",
          detail: "Fuse and protective circuits pass control power",
        },
        {
          label: "Rh conductor",
          detail: "Carries heating power from equipment to wall",
        },
        {
          label: "Nest input",
          detail: "Connector and electronics detect the arriving voltage",
        },
      ],
    },
  ],
  sections: [
    {
      title: "E74 is a voltage observation at one endpoint",
      paragraphs: [
        "The Nest knows whether it sees usable power at Rh. It cannot see why that voltage disappeared upstream. A switched-off furnace, open service switch, tripped protective device, failed transformer or fuse, activated condensate safety, broken conductor, loose connector, or thermostat input can all leave the same endpoint unpowered. Community advice can jump directly to a drain because some systems interrupt thermostat power on overflow. That is one installation-dependent branch, not the E74 definition.",
        "Start by asking what else lost power. A blank furnace status window or silent air handler shifts attention upstream. A message immediately after wall work makes the Rh termination history valuable. Water around equipment changes the safety response. These observations locate boundaries without using a meter or pretending the display has identified a part.",
      ],
    },
    {
      title: "Power off before touching a thermostat conductor",
      paragraphs: [
        "Photograph E74, the Equipment or wiring screen if accessible, and every wire position before removing anything. Use the HVAC disconnect or breaker identified for the system and verify the equipment is off before a manual-approved connector check. Copper should be straight, clean, and inserted only under the correct label, but do not strip, splice, repurpose, or move an uncertain wire.",
        "Google warns that HVAC equipment can contain charge even when power is off. Furnace panels, fuses, transformer, condensate switches, and live voltage testing belong to qualified service. Do not bypass a float or join Rh to another terminal. If E74 returns after restoring a known switch or reseating a wire identified by its terminal label with power off, provide the full system history to the installer.",
      ],
    },
  ],
  safeChecks: [
    "Save the E74 and wiring screen, identify whether equipment also lost power, and switch HVAC power off before any manual-approved connector inspection.",
  ],
  professionalEscalation: [
    "Transformer, fuse, equipment safety, condensate control, concealed wiring, voltage measurement, and thermostat-input diagnosis require qualified HVAC service.",
  ],
  serviceHandoff:
    "Provide Nest model, E74 photo, wiring-screen photo, system type, equipment power and status lights, water or drain clues, recent wall or service work, and intermittent timing.",
  resetGuidance:
    "Do not reset-loop E74 or bypass a safety; restore only a known normal power switch and preserve a returning no-Rh condition for diagnosis.",
  faqs: [
    {
      question: "Does Nest E74 mean the thermostat is broken?",
      answer:
        "No. It means Rh power is not detected at the thermostat. The upstream equipment supply, safeties, conductor, connector, and Nest input remain possible.",
    },
    {
      question: "Can a condensate float switch cause E74?",
      answer:
        "Some installations interrupt 24-volt thermostat power when drainage backs up. That is a system-specific possibility, not proof from the E74 display.",
    },
    {
      question: "Can I move Rh to Rc to clear E74?",
      answer:
        "Do not move wires to suppress an error. Rh and Rc arrangements depend on the installed system, and incorrect changes can damage controls.",
    },
  ],
  sourceIds: ["nest-e74", "nest-pro-guide"],
  glossaryTerms: ["thermostat", "c-wire"],
  relatedContent: ["/brands/nest/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: ["nest e74", "no power to rh wire", "nest thermostat e74 error", "nest rh power fault"],
});
