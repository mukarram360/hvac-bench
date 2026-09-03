import { publish } from "./publish";
export const tclAirConditionerNotCooling = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "TCL air conditioner runs but does not cool the room",
  slug: "air-conditioner-running-not-cooling",
  path: "/brands/tcl/air-conditioner-running-not-cooling/",
  description:
    "A TCL-specific cooling check that separates wrong mode, weak airflow, heat load, ice, and compressor delay before a room AC is reset.",
  articleType: "troubleshooting",
  brand: "tcl",
  equipmentType: "ductless-mini-split",
  productFamily: "TCL United States room air conditioners covered by the support guide",
  models: ["5WR1", "6W3ER1", "8W3ER1", "10W31", "12W3E1", "15W3E1"],
  problemType: "not-cooling",
  directAnswer:
    "When a supported TCL room air conditioner runs without cooling, first establish whether it is actually in COOL, whether the setpoint is below room temperature, and whether airflow is strong. Weak airflow points toward filter, vent, or ice checks; strong warm airflow after the compressor delay needs service context.",
  scopeNotice:
    "The cited TCL procedure is for United States room air conditioners, not a universal mini-split code guide. Control names, filter access, exhaust arrangements, and reset instructions vary by model, so use the manual matching the rating plate.",
  symptoms: ["The fan or display operates but the room temperature does not fall as expected."],
  causes: [
    "Fan or Dry mode, a high setpoint, compressor delay, obstructed airflow, dirty filter, or excessive room heat can mimic a refrigeration failure.",
    "Persistent strong but warm airflow can involve compressor, control, installation, or sealed-system faults.",
  ],
  diagnosticBranches: [
    {
      title: "Airflow is weak or disappears",
      observation:
        "Little air leaves the outlet, the filter is loaded, a curtain blocks a vent, or frost is visible behind the filter.",
      action:
        "Switch off and unplug the applicable room unit, clear external obstructions, clean and fully dry the filter as its manual directs, and let ice melt naturally.",
    },
    {
      title: "Airflow is strong but not cool",
      observation:
        "The fan moves room air normally after COOL is selected and the setpoint is lowered, yet the air does not become cooler after the startup delay.",
      action:
        "Record settings, temperatures, room size, exhaust or outdoor conditions, and compressor sound for TCL support rather than opening the refrigerant system.",
    },
  ],
  decisionTable: {
    caption: "TCL running-not-cooling split",
    columns: ["Observation", "Question it answers", "Next check"],
    rows: [
      ["Fan mode icon", "Cooling was not requested", "Select COOL"],
      ["Weak outlet air", "Air path is restricted", "Filter and vent clearance"],
      ["Strong warm air after delay", "Airflow exists but cooling does not", "Installation or service evaluation"],
      ["Coil frost", "Heat transfer is impaired", "Switch off and thaw"],
    ],
  },
  figures: [
    {
      title: "From control request to room cooling",
      description:
        "Room temperature falls only when the selected mode starts the cooling circuit, air crosses an unobstructed coil, and the room heat load stays within capacity.",
      nodes: [
        {
          label: "COOL command",
          detail: "Setpoint must call for compressor operation",
        },
        {
          label: "Startup delay",
          detail: "Protects the compressor after a stop or setting change",
        },
        {
          label: "Air path",
          detail: "Filter, intake, coil, and outlet must pass room air",
        },
        {
          label: "Room result",
          detail: "Capacity must overcome sunlight, openings, and internal heat",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Separate fan operation from cooling operation",
      paragraphs: [
        "A spinning fan proves only that the air-moving circuit has started. In Fan mode, it is doing exactly what was requested without operating the cooling circuit. Dry mode prioritises moisture removal and may not deliver the same sensible cooling as COOL. TCL's support sequence therefore begins with the icon, a setpoint below current room temperature, and a short compressor-protection wait. Testing all three together avoids treating normal control logic as a broken compressor.",
        "Next, use airflow strength as the fork. A loaded filter, blocked intake, closed outlet, curtain, or internal ice reduces the volume of room air crossing the cold surface. The outlet may feel cool at one spot while total room capacity collapses. Strong airflow that stays near room temperature after a valid cooling call moves the question beyond routine filter care toward exhaust, installation, compressor, control, or sealed-system diagnosis.",
      ],
    },
    {
      title: "Test the room without creating a new variable",
      paragraphs: [
        "Close windows and doors, shade direct sun, and move heat-producing appliances away during the check. Confirm that a portable or through-wall model has the exhaust arrangement and clearance specified by its own manual. Record room dimensions and the unit's BTU rating rather than assuming long run time proves a fault; heat gain can exceed available capacity.",
        "For a user-serviceable filter, unplug the room unit, remove it only as illustrated, rinse with lukewarm water if permitted, and let it dry fully. Never run the appliance without the filter. If frost appears, keep it off until thawed and collect any water safely. Recurrent ice, smoke, hot plugs, damaged cords, grinding, breaker trips, or strong airflow that never cools requires support or qualified service.",
      ],
    },
  ],
  safeChecks: [
    "Verify COOL, lower the setpoint, wait through the compressor delay, compare airflow strength, and inspect the model-approved filter and visible vents.",
  ],
  professionalEscalation: [
    "Persistent warm discharge, repeated icing, fan or compressor failure, electrical heat or odour, and sealed-system work belong to TCL support or qualified service.",
  ],
  serviceHandoff:
    "Report the full model, mode and fan setting, setpoint, room and outdoor temperatures, room size, airflow strength, frost, filter result, exhaust arrangement, and abnormal sounds.",
  resetGuidance:
    "Use TCL's five-minute unplugged reset only after airflow checks; do not repeat it when the same cooling failure or electrical symptom returns.",
  faqs: [
    {
      question: "Why does my TCL fan run without cold air?",
      answer:
        "Fan operation can occur in Fan or Dry mode and during compressor protection. Confirm COOL, a lower setpoint, and the delay before assuming a refrigeration fault.",
    },
    {
      question: "Can a dirty TCL filter stop room cooling?",
      answer:
        "A loaded filter reduces air across the coil, weakening delivered capacity and encouraging frost. Clean it only by the method in the model's manual.",
    },
    {
      question: "How long should I wait after changing to Cool?",
      answer:
        "The TCL support procedure allows at least three minutes for compressor protection. If strong air remains warm afterward, preserve the settings and conditions for support.",
    },
  ],
  sourceIds: ["tcl-not-cooling", "tcl-air-conditioner-downloads"],
  glossaryTerms: ["air-filter", "delta-t"],
  relatedContent: ["/brands/tcl/", "/mini-split-not-cooling/", "/mini-split-frozen-coil/"],
  keywords: [
    "tcl air conditioner not cooling",
    "tcl ac running but not cold",
    "tcl ac fan works no cooling",
    "tcl room air conditioner troubleshooting",
  ],
});
