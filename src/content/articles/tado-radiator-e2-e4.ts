import { publish } from "./publish";

export const tadoRadiatorE2E4 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "tado radiator E2 versus E4: no pin contact or too little valve travel",
  slug: "radiator-thermostat-e2-e4",
  path: "/brands/tado/radiator-thermostat-e2-e4/",
  description:
    "tado E2 means the motor did not detect contact with the valve pin. E4 means the measured distance between open and closed positions was too short.",
  articleType: "error-code",
  brand: "tado",
  equipmentType: "controls-thermostats",
  productFamily: "tado Smart Radiator Thermostat V3+ and earlier devices in the cited support flow",
  models: ["tado Smart Radiator Thermostat", "tado Smart Radiator Thermostat Basic"],
  errorCode: "E2 / E4",
  problemType: "radiator-valve-travel-calibration",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "E2 means calibration found no contact between the thermostat motor and the radiator-valve pin. E4 means contact was found but the distance between the detected open and closed positions was too short. E2 starts with mount and adapter geometry; E4 starts with valve-pin travel and battery condition.",
  scopeNotice:
    "These meanings apply to tado V3+ and earlier Smart Radiator Thermostats in the cited support article. Display symbols differ on the Basic model, and newer product generations require their own support path.",
  symptoms: ["Calibration stops with E2 or E4 after the radiator thermostat is mounted."],
  causes: [
    "E2 can follow a loose bracket, incorrect adapter, missing required pin extender, or geometry that leaves the motor short of the valve pin.",
    "E4 can follow restricted valve-pin movement or low batteries after the control measures too little distance between endpoints.",
  ],
  diagnosticBranches: [
    { title: "E2 reports no motor-to-pin contact", observation: "The display shows E2, or the Basic model shows its documented warning pattern with four dashes.", action: "Check the exact adapter, any specified pin extender, and hand-tight mounting before restarting calibration." },
    { title: "E4 reports travel that is too short", observation: "The display shows E4, or the Basic model shows its documented warning pattern with six dashes.", action: "Stop for leakage or damaged hardware; have a free external valve pin and fresh batteries confirmed before another calibration." },
  ],
  decisionTable: {
    caption: "tado calibration-code split",
    columns: ["Code", "What calibration detected", "First boundary"],
    rows: [
      ["E1", "Closed position not detected", "Mounting and closing endpoint"],
      ["E2", "No contact between motor and valve pin", "Adapter, bracket, and pin extender"],
      ["E4", "Open-to-closed distance too short", "Valve travel and batteries"],
    ],
  },
  figures: [{
    title: "Calibration must find contact and then enough travel",
    description: "The motor first advances to the valve pin, then measures movement between open and closed endpoints. E2 interrupts the contact stage; E4 interrupts the travel measurement.",
    nodes: [
      { label: "Motor advances", detail: "Head searches for the external valve pin" },
      { label: "Contact", detail: "E2 appears when this is not detected" },
      { label: "Travel measured", detail: "E4 appears when the distance is too short" },
    ],
  }],
  sections: [
    {
      title: "The error number identifies which part of travel failed",
      paragraphs: [
        "Calibration teaches the head where the radiator valve is open and closed. E2 occurs before credible contact with the pin, so forcing the motor to repeat cannot correct the distance between parts. E4 occurs after a short movement is measured, so its question is whether the pin can travel through the expected range.",
        "Keep the adapter and extender supplied for the exact valve type together. A visually secure mount can still have the wrong internal reach. Photograph the valve body markings, adapter, extender, bracket, and displayed code before removing anything.",
        "Count the dash pattern on the Basic model as well as recording the letter-number code. tado distinguishes E2 with four dashes and E4 with six in its support flow. A photograph prevents that visual shorthand from being lost after the head restarts.",
      ],
    },
    {
      title: "Stop at the dry side of the radiator valve",
      paragraphs: [
        "The electronic head and its mounting bracket are dry external parts. The valve body and packing retain pressurized heating water. Do not loosen the body, gland, or pipe connection to gain travel, and stop immediately if moisture, corrosion, bending, or mechanical damage is visible.",
        "tado's E4 support includes restoring pin movement and then trying fresh batteries. If movement is uncertain, let a heating engineer handle the valve rather than using pliers or impact. A recurring E2 after the correct mount belongs with tado support and clear photographs of the installed geometry.",
      ],
    },
  ],
  safeChecks: ["Identify the exact code, check the documented adapter and extender, use fresh approved batteries, and keep all work outside the wet valve body."],
  professionalEscalation: ["Leaking, seized, bent, corroded, or uncertain valve hardware and repeated calibration after correct mounting require heating or tado support."],
  serviceHandoff: "Provide the tado model, E2 or E4 photo, valve-body markings, adapter and extender photographs, battery result, mounting result, and any leakage or restricted travel.",
  resetGuidance: "Restart calibration only after correcting the code-specific mount or travel condition; repeated motor runs against unresolved hardware add no evidence.",
  faqs: [
    { question: "What is the difference between tado E2 and E4?", answer: "E2 means the motor did not detect contact with the pin. E4 means the measured open-to-closed travel was too short." },
    { question: "Can the wrong adapter cause tado E2?", answer: "Yes. Adapter or bracket geometry, including a required pin extender, can leave the motor unable to reach the valve pin." },
    { question: "Do low batteries cause tado E4?", answer: "tado lists battery replacement in the E4 response after valve movement is addressed. The code still requires the travel path to be checked." },
  ],
  sourceIds: ["tado-radiator-errors", "tado-radiator-mounting"],
  relatedContent: ["/brands/tado/", "/brands/tado/smart-radiator-thermostat-e1/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["thermostat", "error-code", "boiler"],
  keywords: ["tado e2 error", "tado e4 error", "tado radiator pin contact", "tado valve travel calibration"],
});
