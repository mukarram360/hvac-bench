import { publish } from "./publish";
export const stiebelWplRedLight = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Stiebel Eltron WPL red light: flashing versus continuously on",
  slug: "wpl-red-light",
  path: "/brands/stiebel-eltron/wpl-red-light/",
  description:
    "Read a Stiebel Eltron WPL red IWS light by state: one fault and delayed restart when flashing, or initialisation and permanent shutdown when solid.",
  articleType: "troubleshooting",
  brand: "stiebel-eltron",
  equipmentType: "heat-pump",
  productFamily: "WPL 15, WPL 20, and WPL 25 A(C)(S)",
  models: ["WPL 15 A(C)(S)", "WPL 20 A(C)(S)", "WPL 25 A(C)(S)"],
  problemType: "status-led",
  directAnswer:
    "On the documented Stiebel Eltron WPL IWS, a flashing red LED indicates one fault and a restart after a ten-minute delay. A continuously lit red LED can be normal during initialisation, but in operation it can also indicate more than five faults within two hours and permanent shutdown. Context separates those states.",
  scopeNotice:
    "These LED meanings apply only to WPL 15, 20, and 25 A(C)(S) equipment in manual 329692-43825-9670. The IWS board is inside service-access equipment and is not an owner viewing point.",
  symptoms: [
    "A service observation reports that the WPL IWS red LED flashes or remains continuously lit while heat-pump operation is unavailable.",
  ],
  causes: [
    "One detected fault can produce flashing red followed by the control's ten-minute restart delay.",
    "A steady red state can belong to initialisation or to permanent shutdown after more than five faults within two hours.",
  ],
  diagnosticBranches: [
    {
      title: "Solid red occurs only during initialisation",
      observation:
        "A qualified person observes the IWS immediately during the documented startup or commissioning phase before normal operation is expected.",
      action:
        "Allow initialisation to complete and judge the LED only with the full commissioning sequence and other status indications.",
    },
    {
      title: "Red persists or flashes during operation",
      observation:
        "The heat pump has been operating or attempting to operate, with flashing red or a solid red state unrelated to initial startup.",
      action:
        "Preserve controller messages and timing; internal reset and IWS fault diagnosis belong to a Stiebel Eltron technician.",
    },
  ],
  decisionTable: {
    caption: "WPL IWS red-light meanings",
    columns: ["Red LED state", "Documented context", "Control response"],
    rows: [
      ["Flashing", "One fault detected", "Restart attempt after ten minutes"],
      ["Solid during initialisation", "Startup state", "Wait for commissioning sequence"],
      [
        "Solid during failed operation",
        "More than five faults in two hours",
        "Permanent shutdown requiring reset and diagnosis",
      ],
    ],
  },
  figures: [
    {
      title: "Why a solid red LED has two meanings",
      description:
        "The same light participates in startup and accumulated-fault logic, so operating phase and recent fault count must accompany the colour.",
      nodes: [
        {
          label: "Initial power-up",
          detail: "IWS uses solid red while initialising",
        },
        {
          label: "Normal monitoring",
          detail: "Control watches heat-pump inputs and operation",
        },
        {
          label: "Single fault",
          detail: "Flashing red precedes delayed restart",
        },
        {
          label: "Repeated fault threshold",
          detail: "Solid red can mark permanent shutdown",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Colour alone is incomplete evidence",
      paragraphs: [
        "A steady red light sounds unambiguous until the manual assigns it both an initialisation state and a repeated-fault shutdown state. The difference is time and operating context. Immediately after controlled power-up, steady red belongs to IWS startup. After the system has tried to operate, the same steady state can mean that more than five faults occurred within two hours and the heat pump entered permanent shutdown. A flashing red light instead marks one fault with a ten-minute restart delay.",
        "This logic explains why watching a single moment can mislead. A technician should pair the LED with the heat-pump manager display, recorded messages, operating phase, and a timestamped history. The ten-minute delay is a control response, not an owner repair window. If the unit starts and faults again, the accumulating sequence matters more than the temporary recovery.",
      ],
    },
    {
      title: "The IWS is behind the owner boundary",
      paragraphs: [
        "The cited LED is on internal heat-pump electronics. Owners should not remove panels to locate it, touch reset controls, or approach mains and inverter components. Use the external controller or app to photograph every message, and report any red-light observation already made by a qualified installer. Record power-up time, number of attempts, weather, demand, fan behavior, and heat delivery.",
        "Permanent-shutdown reset is a service action because the underlying repeated fault must be resolved first. Cycling building power to imitate it can erase timing and expose faulted equipment again. Keep the system isolated and seek prompt assistance for burning smell, smoke, damaged wiring, water at electrics, repeated protective-device trips, or unsafe loss of building heat.",
      ],
    },
  ],
  safeChecks: [
    "Use only the external controller to capture messages and timing; do not remove heat-pump panels to inspect the internal IWS LED.",
  ],
  professionalEscalation: [
    "IWS viewing, fault-history access, permanent-shutdown reset, electrical, refrigerant, sensor, fan, and internal control work require qualified Stiebel Eltron service.",
  ],
  serviceHandoff:
    "Provide the WPL model, controller messages, power-up time, flashing or solid state reported by service, ten-minute restart result, fault count, weather, demand, fan, and heat output.",
  resetGuidance:
    "Do not power-cycle repeated WPL faults; a permanent shutdown reset belongs after a technician identifies the condition that exceeded the fault threshold.",
  faqs: [
    {
      question: "What does a flashing red WPL light mean?",
      answer:
        "The cited manual assigns flashing red to one fault and a restart attempt after ten minutes. Record whether operation returns and any controller message.",
    },
    {
      question: "Is a solid red WPL light always a fault?",
      answer:
        "No. Solid red occurs during IWS initialisation, but during failed operation it can mark permanent shutdown after more than five faults within two hours.",
    },
    {
      question: "Can I reset the IWS myself?",
      answer:
        "No. The IWS is internal service equipment, and permanent shutdown follows repeated faults that must be diagnosed before a qualified reset.",
    },
  ],
  sourceIds: ["stiebel-wpl-install", "stiebel-wpl-product"],
  glossaryTerms: ["error-code", "air-to-water-heat-pump"],
  relatedContent: [
    "/brands/stiebel-eltron/",
    "/how-to-document-hvac-fault-for-service/",
    "/heat-pump-operating-temperatures/",
  ],
  keywords: ["stiebel eltron wpl red light", "wpl flashing red led", "stiebel iws red light", "wpl permanent shutdown"],
});
