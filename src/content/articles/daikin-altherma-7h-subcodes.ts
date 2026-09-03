import { publish } from "./publish";
export const daikinAltherma7hSubcodes = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Daikin Altherma 7H subcodes: identify the failed flow check",
  slug: "7h-water-flow-subcodes",
  path: "/brands/daikin-altherma/7h-water-flow-subcodes/",
  description:
    "Decode Daikin Altherma 3 R MT 7H-01, 7H-04, 7H-05, 7H-06, 7H-07, and 7H-08 by the operating flow check that failed.",
  articleType: "error-code",
  brand: "daikin-altherma",
  equipmentType: "heat-pump",
  productFamily: "Altherma 3 R MT with ELBH-E or ELBX-E and ERRA08-12",
  models: ["ELBH-E(6V/9W)", "ELBX-E(6V/9W)", "ERRA08-12EV3", "ERRA08-12EW1"],
  errorCode: "7H",
  problemType: "water-flow-fault",
  directAnswer:
    "On the documented Daikin Altherma 3 R MT, 7H is incomplete without its suffix. 7H-01 is a general water-flow problem; 7H-04 relates to domestic hot water, 7H-05 to heating or sampling, 7H-06 to cooling or defrost, 7H-07 to pump deblocking, and 7H-08 to pump feedback.",
  scopeNotice:
    "These subcodes belong to the ELBH-E and ELBX-E indoor units paired with ERRA08-12 equipment in the cited European installer reference. Other Altherma generations and monoblocs use different tables.",
  symptoms: ["The Altherma controller shows 7H with a suffix and the active hydraulic operation is interrupted."],
  causes: [
    "Insufficient water, air, valves, strainers, emitters, restrictions, freeze conditions, or hydraulic configuration can prevent required flow in the selected route.",
    "Pump operation, deblocking, feedback, flow sensing, wiring, or control can fail to create or prove circulation.",
  ],
  diagnosticBranches: [
    {
      title: "Suffix identifies an operating route",
      observation:
        "The controller preserves -04, -05, or -06, tying the event to hot water, heating or sampling, or cooling or defrost.",
      action:
        "Record the exact demand and which other modes still operate so the installer can compare route-specific valves and hydraulic components.",
    },
    {
      title: "Suffix identifies pump behavior",
      observation:
        "The display shows -07 during pump deblocking or -08 for pump feedback rather than a general route code.",
      action:
        "Avoid forcing the pump through installer menus and give service the suffix, sound, pressure, and recent hydraulic work.",
    },
  ],
  decisionTable: {
    caption: "Altherma 3 R MT 7H suffix map",
    columns: ["Complete code", "Flow-check context", "High-value record"],
    rows: [
      ["7H-01", "General water-flow problem", "Pressure, mode, and affected circuits"],
      ["7H-04", "Domestic hot-water operation", "Cylinder demand and valve route"],
      ["7H-05", "Space heating or water-flow sampling", "Heating zones and emitter state"],
      ["7H-06", "Cooling or defrost operation", "Mode, weather, and freeze evidence"],
      ["7H-07", "Pump deblocking function", "Pump sound and preceding inactivity"],
      ["7H-08", "Pump feedback", "Commanded operation and reported response"],
    ],
  },
  figures: [
    {
      title: "Suffix locates the failed flow proof",
      description:
        "The controller runs water-flow checks in different operating contexts, and the two digits after 7H preserve which route or pump function was active.",
      nodes: [
        {
          label: "Demand or control task",
          detail: "Hot water, heating, cooling, defrost, or deblocking begins",
        },
        {
          label: "Selected hydraulic route",
          detail: "Pump and valves create the intended circulation path",
        },
        {
          label: "Flow and feedback",
          detail: "Sensors and pump reporting confirm the response",
        },
        {
          label: "7H suffix",
          detail: "Records the specific check that did not pass",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Do not stop reading at 7H",
      paragraphs: [
        "A search for Altherma 7H can return a single phrase, water flow problem. The installer manual carries more information. Its suffix separates a general event from domestic-hot-water circulation, space-heating or sampling, cooling or defrost, pump deblocking, and pump feedback. That distinction tells the engineer which valves, emitters, and operating conditions participated. A cylinder-only failure does not have the same boundary as a fault shared by every mode.",
        "The complete code still does not name a pump or flow sensor. A pump can run against a closed or restricted path. Valves can select the wrong circuit. Air, low water content, filters, frozen sections, and configuration can reduce flow. Feedback can be missing even while motion exists. Diagnosis compares hydraulic response, pump command and feedback, temperatures, pressure, valve state, and system design.",
      ],
    },
    {
      title: "Turn the suffix into a system map",
      paragraphs: [
        "Photograph the entire display before reset. Record whether the request was hot water, space heating, cooling, or defrost; which zones and emitters were open; controller pressure; outdoor temperature; pump sound; and recent draining, filter, valve, cylinder, or commissioning work. Note which other modes still function without deliberately forcing them.",
        "Do not open a strainer, bleed unfamiliar pressurised equipment, change installer parameters, force deblocking, remove covers, or reset in a loop. Water near electrical components, freeze risk, or loss of safe building temperature warrants prompt installer contact. The ELBH or ELBX indoor label and ERRA outdoor label are both needed because Altherma is a system family, not one appliance.",
      ],
    },
  ],
  safeChecks: [
    "Capture the complete 7H suffix, both model labels, active mode, visible pressure, outdoor weather, pump sound, open zones, and recent hydraulic work.",
  ],
  professionalEscalation: [
    "Flow measurement, valves, filters, pumps, feedback, sensing, venting, configuration, electrical, and refrigerant work require an Altherma-qualified installer.",
  ],
  serviceHandoff:
    "Provide indoor and outdoor models, full 7H suffix, mode, pressure, active zones, cylinder state, weather, pump sound, other working modes, and recent water-side work.",
  resetGuidance:
    "Do not clear the suffix before recording it or force pump functions; a returning 7H needs its exact hydraulic context diagnosed.",
  faqs: [
    {
      question: "What is the difference between 7H-04 and 7H-05?",
      answer:
        "In the cited manual, -04 belongs to domestic-hot-water flow, while -05 belongs to space heating or water-flow sampling. That changes the active route.",
    },
    {
      question: "Does Altherma 7H mean the pump is broken?",
      answer:
        "No. The pump, valves, hydraulic restriction, air, pressure, sensing, feedback, configuration, and active circuit can all affect flow proof.",
    },
    {
      question: "Why is the full 7H suffix important?",
      answer:
        "It preserves which operating check failed. Reporting only 7H discards the route or pump-function information the controller supplied.",
    },
  ],
  sourceIds: ["daikin-altherma-7h", "daikin-altherma-homeowner"],
  glossaryTerms: ["error-code", "air-to-water-heat-pump"],
  relatedContent: [
    "/brands/daikin-altherma/",
    "/how-to-document-hvac-fault-for-service/",
    "/heat-pump-operating-temperatures/",
  ],
  keywords: ["daikin altherma 7h", "altherma 7h-01", "daikin 7h-04", "altherma water flow error"],
});
