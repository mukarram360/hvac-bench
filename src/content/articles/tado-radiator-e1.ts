import { publish } from "./publish";
export const tadoRadiatorE1 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "tado Smart Radiator Thermostat E1 calibration error",
  slug: "smart-radiator-thermostat-e1",
  path: "/brands/tado/smart-radiator-thermostat-e1/",
  description:
    "Fix the mounting and valve-pin conditions behind tado radiator E1 without confusing it with E2 or E4 calibration failures.",
  articleType: "error-code",
  brand: "tado",
  equipmentType: "controls-thermostats",
  productFamily: "tado Smart Radiator Thermostat",
  models: ["Smart Radiator Thermostat", "Smart Radiator Thermostat X where the cited support flow applies"],
  errorCode: "E1",
  problemType: "radiator-valve-calibration",
  directAnswer:
    "tado defines Smart Radiator Thermostat E1 as calibration failure because the closed valve position was not detected. The support path focuses on secure mounting, the correct adapter, adequate batteries, and a valve pin that moves and returns properly. E2 and E4 are different calibration outcomes and should not be merged into E1.",
  scopeNotice:
    "This page follows tado's E1, E2, and E4 radiator-thermostat support article. Hardware generation, mounting bracket, adapter, and valve body vary, so use the instructions for the exact tado device.",
  symptoms: ["The radiator thermostat displays E1 after mounting or an attempted valve calibration."],
  causes: [
    "A loose head, wrong or poorly seated adapter, weak batteries, or misalignment can prevent the motor from reaching the valve pin correctly.",
    "A stuck, stiff, damaged, or unusually positioned valve pin can prevent the device from detecting a closed position.",
  ],
  diagnosticBranches: [
    {
      title: "E1 began after installation or battery change",
      observation:
        "The head was recently removed or remounted, an adapter was fitted, or batteries were replaced before calibration failed.",
      action:
        "Use tado's exact mounting guide, confirm compatible fresh batteries and secure alignment, then allow a new calibration without forcing the motor.",
    },
    {
      title: "Mounting is secure but E1 returns",
      observation:
        "The correct adapter and head appear fully seated, yet the valve cannot reach a detected closed position on repeated calibration.",
      action:
        "Remove the tado head only as instructed and have a competent person assess pin movement or valve-body condition; do not dismantle a pressurised valve.",
    },
  ],
  decisionTable: {
    caption: "tado radiator calibration code split",
    columns: ["Code", "Published calibration issue", "First distinction"],
    rows: [
      ["E1", "Closed position not detected", "Mounting and valve-pin closure"],
      ["E2", "Mounting or motor travel problem in the cited flow", "Use E2-specific support steps"],
      ["E4", "Calibration travel or valve interaction differs", "Do not apply the E1 fix blindly"],
    ],
  },
  figures: [
    {
      title: "How tado learns the closed valve position",
      description:
        "The motor moves through the mounted head and adapter to press the radiator valve pin, then uses resistance and travel to identify its calibrated endpoint.",
      nodes: [
        {
          label: "Thermostat motor",
          detail: "Creates controlled movement during calibration",
        },
        {
          label: "Mount and adapter",
          detail: "Align and transfer movement to the valve",
        },
        {
          label: "Valve pin",
          detail: "Moves inward to reduce or close water flow",
        },
        {
          label: "Endpoint detection",
          detail: "Control must recognise the closed position or show E1",
        },
      ],
    },
  ],
  sections: [
    {
      title: "E1 is a mechanical relationship, not a boiler fault",
      paragraphs: [
        "A smart radiator head does not directly create heat. It moves the small pin on the radiator valve body. During calibration, the tado motor needs a rigid, correctly aligned path through its mounting hardware and adapter so it can press that pin and recognise the closed endpoint. If the head is loose, the adapter is wrong, or the pin is stiff, motor travel can finish without a credible closed position. E1 reports that calibration result.",
        "The boiler can operate normally while one radiator head shows E1 because the problem boundary is local to that valve interaction. Conversely, a radiator remaining hot does not prove the boiler ignored tado; a head that never calibrated cannot reliably control its water flow. Settle the physical head-to-pin path before investigating wider heating demand.",
      ],
    },
    {
      title: "Handle the pin without opening the wet system",
      paragraphs: [
        "Follow tado's device-specific removal and mounting illustrations. Confirm the adapter matches the valve, the head locks firmly, and recommended fresh batteries are correctly oriented. With the electronic head removed only as documented, the exposed external pin should be assessed for straight movement and return. Do not use excessive force, pliers, oil, or impacts; valve designs and allowable movement differ.",
        "Never unscrew the valve body or packing from the radiator, because that can release pressurised heating water. Stop for leakage, corrosion, a bent pin, damaged mount, grinding motor, or recurring E1 after correct installation. Photograph the valve, adapter, mount, error, and device serial details for tado support or a heating professional. Repeated calibration against a stuck mechanism can damage the drive.",
      ],
    },
  ],
  safeChecks: [
    "Use the exact tado mounting guide, fit compatible fresh batteries, confirm the correct adapter and secure head, and never dismantle the water valve.",
  ],
  professionalEscalation: [
    "Leaking, bent, seized, damaged, or uncertain radiator valves, pressurised components, and recurring calibration after correct mounting need heating or tado support.",
  ],
  serviceHandoff:
    "Provide the tado model, E1 photo, valve and adapter photos, mount type, battery result, whether the pin moves and returns, leakage or corrosion, and calibration attempts.",
  resetGuidance:
    "Do not repeat calibration against a visibly stuck or misaligned valve; correct the documented mount or obtain service before another attempt.",
  faqs: [
    {
      question: "What does tado radiator E1 mean?",
      answer:
        "It means calibration did not detect the closed valve position. Mounting, adapter, batteries, motor alignment, and valve-pin movement are the relevant path.",
    },
    {
      question: "Can a stuck radiator pin cause tado E1?",
      answer:
        "Yes. The head must press and detect the closing endpoint. Do not force or dismantle the valve; uncertain or leaking hardware needs a heating professional.",
    },
    {
      question: "Are tado E1, E2, and E4 the same?",
      answer:
        "No. They are separate calibration results in tado support. Preserve the exact code and follow its hardware-specific branch rather than a combined generic fix.",
    },
  ],
  sourceIds: ["tado-radiator-errors", "tado-radiator-mounting"],
  glossaryTerms: ["thermostat", "error-code"],
  relatedContent: ["/brands/tado/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: [
    "tado radiator e1",
    "tado e1 calibration",
    "tado valve closed position not detected",
    "smart radiator thermostat e1",
  ],
});
