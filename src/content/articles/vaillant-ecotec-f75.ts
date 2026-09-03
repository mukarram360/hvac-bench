import { publish } from "./publish";
export const vaillantEcotecF75 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Vaillant ecoTEC plus F.75: pressure rise not detected",
  slug: "ecotec-plus-f75-fault",
  path: "/brands/vaillant/ecotec-plus-f75-fault/",
  description:
    "Decode Vaillant ecoTEC plus F.75 as a missing pressure change at pump start, not an automatic pump or pressure-sensor diagnosis.",
  articleType: "error-code",
  brand: "vaillant",
  equipmentType: "boiler",
  productFamily: "Current ecoTEC plus boilers covered by manual 0020308121-04",
  models: ["ecoTEC plus models in installation manual 0020308121-04"],
  errorCode: "F.75",
  problemType: "water-pressure-change-fault",
  directAnswer:
    "On the documented Vaillant ecoTEC plus, F.75 means the control did not detect sufficient heating-water pressure change when the pump started. The service list includes low fill pressure, air or insufficient water, expansion-vessel influence, pump or pressure-sensor faults, and their wiring; neither component is proven by the code.",
  scopeNotice:
    "This meaning follows current ecoTEC plus installation and maintenance instructions 0020308121-04. Older ecoTEC generations, commercial boilers, aroTHERM heat pumps, and regional variants require their own document.",
  symptoms: ["The boiler displays F.75 and does not continue an expected heating or hot-water sequence."],
  causes: [
    "The sealed heating circuit may have insufficient water, trapped air, low static pressure, or an expansion condition that prevents the expected pressure response.",
    "The circulation pump, pressure sensor, electrical connections, or control can fail to create or report the response.",
  ],
  diagnosticBranches: [
    {
      title: "Displayed pressure is visibly low",
      observation:
        "The normal user display shows pressure below the range specified for the installed ecoTEC system, with or without external leakage evidence.",
      action:
        "Record the value and any water outside the system; do not repeatedly top up because the reason pressure was lost must be established.",
    },
    {
      title: "Displayed pressure appears normal",
      observation: "The static reading looks plausible but F.75 occurs as the boiler tries to start circulation.",
      action:
        "A heating engineer should compare pump operation with dynamic pressure-sensor response and assess air, vessel, water path, wiring, and controls.",
    },
  ],
  decisionTable: {
    caption: "F.75 evidence split",
    columns: ["Observation", "Useful question", "Not established"],
    rows: [
      ["Low static pressure", "Where did water or pressure go?", "Simple refilling is a lasting repair"],
      [
        "Normal static pressure, no start response",
        "Did pump movement create a measurable change?",
        "Pressure sensor is defective",
      ],
      ["Fault after drain or vessel work", "Was filling, venting, and pre-charge restored?", "Pump must be replaced"],
    ],
  },
  figures: [
    {
      title: "The F.75 start-up comparison",
      description:
        "The ecoTEC control compares pressure before and during pump start; the water circuit must respond and the sensor must report that response credibly.",
      nodes: [
        {
          label: "Static water state",
          detail: "Filled and vented circuit establishes starting pressure",
        },
        {
          label: "Pump start",
          detail: "Circulator attempts to move heating water",
        },
        {
          label: "Hydraulic response",
          detail: "System pressure changes with pump action",
        },
        {
          label: "Sensor report",
          detail: "Control must detect enough change to continue",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Why F.75 creates two diagnostic questions",
      paragraphs: [
        "F.75 sits at the boundary between hydraulics and sensing. The boiler starts its pump and expects the water-pressure signal to change. If little water is present, air interrupts circulation, or the expansion vessel and circuit conditions absorb the response, the sensor can truthfully report too little change. If the pump does not run correctly, the hydraulic event may never occur. If movement is sound but the pressure sensor or its wiring is inaccurate, the control can miss a real response. The display cannot tell those routes apart.",
        "A heating engineer should first establish the cold static condition and integrity of the sealed system, then observe pump command and hydraulic response. Pressure-sensor readings can be compared with a suitable gauge, while pump electrical and mechanical operation, filling, venting, water content, expansion-vessel state, and wiring are checked against the exact boiler instructions. Parts follow that evidence.",
      ],
    },
    {
      title: "Do not make topping up a recurring routine",
      paragraphs: [
        "The user display can provide a valuable pressure reading without opening the case. Photograph it with F.75, note whether radiators were recently bled, and look for water at accessible pipe joints, radiator valves, discharge outlets, or beneath the boiler. A falling value needs a cause. Repeated filling adds fresh oxygen and can hide a leak or vessel problem while pressure later rises excessively when hot.",
        "Use only the normal filling procedure if the exact ecoTEC user instructions and installer advice permit it, and never remove the sealed case. Do not touch pump, sensor, expansion vessel, gas train, internal wiring, or automatic air vents. Water near electrics, a discharge that runs continuously, extreme pressure, gas odour, or a carbon-monoxide alarm requires shutdown and prompt professional or emergency guidance.",
      ],
    },
  ],
  safeChecks: [
    "Photograph F.75 and the visible pressure, note recent bleeding or filling, and inspect only accessible external pipework for water.",
  ],
  professionalEscalation: [
    "Pump, pressure-sensor, expansion-vessel, filling, venting, internal leak, wiring, gas, and sealed-case work requires a qualified heating engineer.",
  ],
  serviceHandoff:
    "Provide the ecoTEC model, F.75 photo, cold and hot pressure if safely visible, recent filling or radiator work, external leakage, pump sound, and recurrence timing.",
  resetGuidance:
    "Do not repeatedly reset or refill an F.75 boiler; a returning missing-pressure-change condition needs its hydraulic and sensing paths compared.",
  faqs: [
    {
      question: "Does Vaillant F.75 mean the pump has failed?",
      answer:
        "No. Pump failure is one possibility, but water content, air, system pressure, expansion vessel, sensor, wiring, and hydraulic response can lead to F.75.",
    },
    {
      question: "Can I fix F.75 by topping up pressure?",
      answer:
        "Only follow the exact user filling instruction when permitted. If pressure fell, its cause still needs attention, and repeated top-ups are not a diagnosis.",
    },
    {
      question: "Can a pressure sensor cause ecoTEC F.75?",
      answer:
        "Yes, but it should be tested against the real hydraulic response. Replacing it before pump and water-side evidence can leave the fault unchanged.",
    },
  ],
  sourceIds: ["vaillant-ecotec-plus-install", "vaillant-fault-codes"],
  glossaryTerms: ["error-code", "boiler"],
  relatedContent: ["/brands/vaillant/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: ["vaillant f75", "ecotec plus f.75", "vaillant pressure change fault", "vaillant f75 pump pressure sensor"],
});
