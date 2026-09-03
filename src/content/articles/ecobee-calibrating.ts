import { publish } from "./publish";
export const ecobeeCalibrating = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "ecobee says Calibrating, Heat/Cool Disabled",
  slug: "calibrating-heat-cool-disabled",
  path: "/brands/ecobee/calibrating-heat-cool-disabled/",
  description:
    "Separate ecobee startup temperature calibration from air-quality calibration, know the 20-minute boundary, and diagnose repeated restarts safely.",
  articleType: "troubleshooting",
  brand: "ecobee",
  equipmentType: "controls-thermostats",
  productFamily: "Smart Thermostat Enhanced and Smart Thermostat Premium",
  models: ["Smart Thermostat Enhanced", "Smart Thermostat Premium"],
  problemType: "thermostat-calibration-state",
  directAnswer:
    "After setup or a restart, an ecobee can show Calibrating, Heat/Cool Disabled while it establishes a temperature baseline; ecobee says this can take up to 20 minutes on the Enhanced. That is separate from Premium air-quality calibration, which can take much longer. Repeated temperature calibration points to recurring power or control interruption.",
  scopeNotice:
    "The 20-minute startup statement comes from the Smart Thermostat Enhanced manual. Premium uses the same heat/cool-disabled wording but also calibrates its air-quality sensor for up to eight hours; do not merge those timers.",
  symptoms: ["The thermostat display says it is calibrating and will not call for heating or cooling."],
  causes: [
    "A normal initial setup, firmware start, or reboot can temporarily disable outputs while temperature sensing stabilises.",
    "Recurring calibration can follow intermittent 24-volt power, HVAC safety operation, wiring, transformer, or thermostat faults.",
  ],
  diagnosticBranches: [
    {
      title: "Calibration follows one known startup",
      observation:
        "The message began immediately after installation, a deliberate reboot, or a documented power restoration and progresses within the published 20-minute window.",
      action:
        "Leave the thermostat powered and undisturbed, then verify that the normal temperature display and HVAC control return.",
    },
    {
      title: "Calibration repeats or exceeds the window",
      observation:
        "The message returns without intentional reboot, the ecobee repeatedly goes dark, or heat and cool remain disabled beyond the applicable startup period.",
      action:
        "Record timestamps and equipment behavior, then have the 24-volt power and safety path diagnosed rather than continuing resets.",
    },
  ],
  decisionTable: {
    caption: "ecobee calibration states are not one timer",
    columns: ["Displayed context", "Expected scale", "What is disabled"],
    rows: [
      ["Temperature startup calibration", "Up to 20 minutes on Enhanced", "Heating and cooling calls"],
      ["Premium air-quality calibration", "Up to eight hours", "Air-quality reading is stabilising"],
      ["Repeated Calibrating message", "Not a normal one-time baseline", "Investigate power or reboot cause"],
    ],
  },
  figures: [
    {
      title: "Why repeated calibration points upstream",
      description:
        "Each loss and return of thermostat power can restart the baseline process, making the visible calibration message a timestamp for an upstream interruption.",
      nodes: [
        {
          label: "24-volt supply",
          detail: "Powers the thermostat through HVAC controls",
        },
        {
          label: "Startup or interruption",
          detail: "Begins a fresh temperature baseline",
        },
        {
          label: "Calibration hold",
          detail: "Heat and cool outputs remain disabled temporarily",
        },
        {
          label: "Normal control",
          detail: "Should return after a stable completed startup",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Temperature and air-quality calibration answer different questions",
      paragraphs: [
        "The temperature startup state protects control decisions while the thermostat establishes a credible room reading. During that period, the screen explicitly says heating and cooling are disabled. The Enhanced manual gives an upper duration of twenty minutes. Premium also contains an indoor air-quality sensor whose separate calibration can take up to eight hours. Seeing an air-quality message later does not mean the HVAC outputs should remain disabled for eight hours. The exact wording and feature identify the applicable timer.",
        "A single startup calibration after installation or deliberate reboot is expected. A thermostat that returns to Calibrating every day is repeatedly starting over. That shifts the problem from patience toward why power or software is restarting. Furnace or air-handler safeties, condensate controls, transformer and wiring conditions, or the thermostat can interrupt 24-volt supply without a building-wide outage.",
      ],
    },
    {
      title: "Build a restart timeline without opening equipment",
      paragraphs: [
        "Photograph the message and note its start and finish times. Record whether the screen went completely dark first, whether the HVAC equipment also stopped, weather, recent filter or drain symptoms, and any service work. In the ecobee menu, preserve equipment and wiring configuration screens without changing them. A sequence of blank screen, logo, calibration, normal display is more useful than saying it keeps calibrating.",
        "Do not remove equipment panels, bypass condensate safeties, replace low-voltage fuses, or move thermostat wires under power. If the known startup completes within the manual window, verify ordinary control and leave it alone. If calibration exceeds the applicable time, repeats, or accompanies burning smell, water near controls, or protective-device trips, arrange qualified HVAC or ecobee support.",
      ],
    },
  ],
  safeChecks: [
    "Time the exact message, distinguish temperature from air-quality calibration, record any preceding blank screen, and avoid changing wiring or resetting again.",
  ],
  professionalEscalation: [
    "Recurring 24-volt loss, transformer, fuse, condensate safety, equipment control, concealed wiring, and thermostat power tests require qualified service.",
  ],
  serviceHandoff:
    "Provide ecobee model, exact message photo, start and finish times, preceding screen sequence, HVAC response, equipment model, weather, drain clues, recent work, and recurrence pattern.",
  resetGuidance:
    "Do not reboot to cure a calibration message; a reboot starts calibration again and can hide the power interruption that needs diagnosis.",
  faqs: [
    {
      question: "How long should ecobee temperature calibration take?",
      answer:
        "The Smart Thermostat Enhanced manual says startup calibration can take up to 20 minutes, during which heating and cooling are disabled.",
    },
    {
      question: "Why does ecobee keep returning to Calibrating?",
      answer:
        "Repeated baseline calibration suggests repeated startup, such as from power interruption or reboot. Record the screen sequence and have the 24-volt path checked.",
    },
    {
      question: "Is air-quality calibration also 20 minutes?",
      answer:
        "No. On Premium, air-quality calibration can take up to eight hours and is separate from the temperature startup hold that disables heat and cool.",
    },
  ],
  sourceIds: ["ecobee-calibration", "ecobee-premium-manual"],
  glossaryTerms: ["thermostat", "sensor-fault"],
  relatedContent: ["/brands/ecobee/", "/how-to-document-hvac-fault-for-service/", "/how-to-check-mini-split-remote/"],
  keywords: [
    "ecobee calibrating heat cool disabled",
    "ecobee calibration 20 minutes",
    "ecobee keeps calibrating",
    "ecobee premium air quality calibration",
  ],
});
