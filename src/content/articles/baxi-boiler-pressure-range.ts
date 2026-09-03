import { publish } from "./publish";

export const baxiBoilerPressureRange = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Baxi boiler pressure: compare the cold gauge with the heating rise",
  slug: "boiler-pressure-range",
  path: "/brands/baxi/boiler-pressure-range/",
  description:
    "Baxi gives one to 2 bar as the normal operating range and says the gauge may rise during heating. The cold-to-hot movement matters more than one snapshot.",
  articleType: "guide",
  brand: "baxi",
  equipmentType: "boiler",
  productFamily: "Baxi sealed-system boilers with a user-visible pressure gauge",
  models: ["Baxi combi and system boilers whose user instructions specify a sealed-system pressure gauge"],
  problemType: "boiler-pressure-interpretation",
  symptomFamily: "no-heating",
  directAnswer:
    "Baxi states that normal boiler and central-heating water pressure is between 1 and 2 bar. The needle can rise while heating and should remain in the green area; a pressure below 1 bar, a climb beyond about 2.5 bar, or repeated loss needs a model-specific response.",
  scopeNotice:
    "This is Baxi's general homeowner guidance for sealed systems. The exact filling device, gauge markings, and fault codes vary by boiler, so the product user manual controls the procedure.",
  symptoms: ["The gauge reading differs between a cool system and an active heating cycle, or pressure repeatedly leaves the green area."],
  causes: [
    "Heating expands the system water, producing a rise that must be distinguished from a filling valve left open or a pressure-control problem.",
    "Bleeding, leakage, discharge, or recent system work can reduce the cold reading below the operating band.",
  ],
  decisionTable: {
    caption: "How Baxi frames gauge readings",
    columns: ["Reading or movement", "Interpretation", "Next boundary"],
    rows: [
      ["1 to 2 bar", "Within Baxi's normal operating range", "Compare cold and hot readings"],
      ["Below 1 bar", "Repressurising may be required", "Use the exact boiler filling instructions"],
      ["Rises during heating but stays below about 2.5 bar", "Expected thermal movement can account for the change", "Record if the rise grows"],
      ["High pressure persists or discharge pipe drips", "Overfill or pressure-control fault needs attention", "Close the filling path and contact an engineer"],
    ],
  },
  figures: [{
    title: "Cold pressure becomes hot pressure through expansion",
    description: "A cool sealed circuit provides the baseline. Heating expands the water and lifts the gauge, while the expansion vessel and relief path control how far that movement can go.",
    nodes: [
      { label: "Cool system", detail: "Baseline gauge reading" },
      { label: "Water heats", detail: "Thermal expansion raises pressure" },
      { label: "Pressure controls", detail: "Vessel and relief path manage the rise" },
    ],
  }],
  sections: [
    {
      title: "Two readings show what one reading hides",
      paragraphs: [
        "Take the first photograph when the radiators are cool and the second during a steady heating call. Label both with time and gauge value. A modest movement inside the green area is not the same event as a needle that approaches the high end and sends water through the pressure-relief discharge.",
        "Also confirm that any user-operated filling loop is fully closed after a permitted top-up. A valve left passing can continue adding mains water after the gauge first reaches its target. Do not use filling to counter a high-pressure condition, and do not open the boiler case to reach internal valves.",
        "Use the same gauge for both photographs and avoid reading it at an angle. Digital and analogue displays may update differently, but the comparison still needs a labeled cool baseline and a labeled heating value. A memory of yesterday's needle position is not equivalent evidence.",
      ],
    },
    {
      title: "Pressure evidence does not replace the displayed fault code",
      paragraphs: [
        "Baxi's E133 page concerns ignition and flame establishment, while system pressure describes the sealed water circuit. An abnormal gauge can coexist with an ignition code, but one does not automatically explain the other. Record both instead of translating every shutdown into low pressure.",
        "Arrange an engineer when pressure repeatedly falls, rises toward the relief threshold, or produces external discharge. State whether radiators were bled, a filling loop was used, or pipework was altered. Those details help separate a simple recent water loss from a continuing leak or expansion-control problem.",
      ],
    },
  ],
  faqs: [
    { question: "What pressure does Baxi call normal?", answer: "Baxi's homeowner guidance gives 1.0 to 2.0 bar as the normal operating water-pressure range for the boiler and central-heating system." },
    { question: "Should boiler pressure rise when the heating runs?", answer: "Some rise is expected as the water heats. Baxi says it should remain in the green area and not go higher than about 2.5 bar." },
    { question: "Does Baxi E133 mean low water pressure?", answer: "No. E133 is treated as an ignition or flame-establishment fault in Baxi guidance. Preserve the code and gauge as separate evidence." },
  ],
  sourceIds: ["baxi-boiler-pressure", "baxi-high-pressure"],
  relatedContent: ["/brands/baxi/", "/brands/baxi/e133-fault-code/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["boiler", "flow-temperature", "error-code"],
  keywords: ["baxi boiler pressure", "baxi pressure 1 to 2 bar", "baxi boiler pressure rises", "baxi pressure gauge green"],
});
