import { publish } from "./publish";
export const nibeF2120Alarm228 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "NIBE F2120 alarm 228 after unsuccessful defrosting",
  slug: "f2120-alarm-228",
  path: "/brands/nibe/f2120-alarm-228/",
  description:
    "Decode NIBE F2120 alarm 228 as repeated unsuccessful defrosting, then preserve frost, drainage, airflow, and weather evidence for the installer.",
  articleType: "error-code",
  brand: "nibe",
  equipmentType: "heat-pump",
  productFamily: "F2120 air-to-water heat pumps",
  models: ["F2120-8", "F2120-12", "F2120-16", "F2120-20"],
  errorCode: "228",
  problemType: "defrost-failure",
  directAnswer:
    "NIBE's F2120 installer manual associates alarm 228 with ten unsuccessful defrosting attempts. The alarm reports failed recovery across repeated cycles, not a single defective defrost part. Outdoor airflow, ice and drainage, sensors, fan, refrigerant operation, reversing process, and controls need installer evidence.",
  scopeNotice:
    "This definition is for the NIBE F2120 manual cited here. S2125, F2040, exhaust-air, and ground-source NIBE products have different alarm logic even when connected to a similar indoor controller or myUplink.",
  symptoms: ["The NIBE controller or myUplink reports alarm 228 and outdoor-unit recovery from frost is unsuccessful."],
  causes: [
    "Airflow blockage, persistent ice, drainage or environmental conditions can prevent the outdoor coil from clearing as expected.",
    "Sensor, fan, refrigerant circuit, reversing, control, or installation faults can keep the defrost logic from completing.",
  ],
  diagnosticBranches: [
    {
      title: "Outdoor obstruction or drainage is visible",
      observation:
        "Snow, windblown debris, roof runoff, standing ice, or blocked clearance surrounds the F2120 without requiring cabinet access to see it.",
      action:
        "Keep clear of the fan and coil, photograph conditions, and remove only loose external obstructions that the installation instructions allow.",
    },
    {
      title: "Clearances look open but alarm 228 remains",
      observation:
        "The unit has free visible airflow and drainage space, yet frost persists or the controller records repeated unsuccessful defrosting.",
      action:
        "Leave the system for NIBE installer diagnosis of temperatures, sensors, fan, refrigeration, and the defrost sequence.",
    },
  ],
  decisionTable: {
    caption: "F2120 defrost-failure evidence",
    columns: ["Observation", "Information gained", "Unsafe leap"],
    rows: [
      ["Snow blocks an air face", "Installed airflow is compromised", "Clearing snow repairs every cause"],
      ["Solid ice below the unit", "Drainage or runoff may affect recovery", "Ice should be chipped from the coil"],
      ["Fan stops during event", "Could be part of defrost or a fault", "Fan motor is defective"],
      ["Alarm after ten attempts", "Repeated recovery failed", "One component is identified"],
    ],
  },
  figures: [
    {
      title: "How unsuccessful cycles accumulate to 228",
      description:
        "The F2120 initiates defrost under its control criteria, expects the outdoor coil to recover, and counts failures when completion conditions are not achieved.",
      nodes: [
        {
          label: "Frost conditions",
          detail: "Outdoor coil accumulates moisture during heating",
        },
        {
          label: "Defrost request",
          detail: "Control selects an active, passive, or safety response",
        },
        {
          label: "Recovery test",
          detail: "Temperature and operating inputs must confirm completion",
        },
        {
          label: "Alarm 228",
          detail: "Ten unsuccessful attempts trigger the documented alarm",
        },
      ],
    },
  ],
  sections: [
    {
      title: "The count is the information gain",
      paragraphs: [
        "Alarm 228 is not the first hint of frost. It appears after the F2120 records ten unsuccessful defrostings, which distinguishes it from one ordinary cold-weather pause. NIBE describes multiple defrost modes and safety logic because the outdoor coil operates across changing temperatures and loads. An attempt can fail when heat cannot be transferred as expected, when ice or airflow conditions overwhelm recovery, or when the sensing and refrigeration process does not demonstrate completion.",
        "The repeated count makes reset advice particularly weak. Clearing the alarm without understanding the ten preceding events removes the summary while leaving their cause. An installer should review alarm history and operating temperatures, then inspect airflow, drainage, fan, sensors, reversing operation, and refrigerant behavior against the F2120 manual. The evidence must explain both why defrost began and why recovery was not accepted.",
      ],
    },
    {
      title: "Photograph the outdoor environment, not the coil interior",
      paragraphs: [
        "From a safe location, capture each air face, the base and drainage area, nearby snow banks, roof runoff, prevailing wind effects, and visible ice. Record outdoor temperature, precipitation, alarm time, controller mode, auxiliary-heat operation, and whether room or water temperatures are being maintained. Keep required clearances free of loose snow and objects only when this can be done without touching the unit.",
        "Never chip or melt ice on the coil, reach through the guard, block drainage with a tray, remove a cover, or force repeated defrosts through service menus. Refrigerant and live electrical work require qualified personnel. If the building is losing safe heat or water threatens electrics, contact the installer promptly and use the system's documented backup arrangements.",
      ],
    },
  ],
  safeChecks: [
    "Record alarm history, weather, visible frost, all outdoor clearances, base drainage, runoff, and whether backup heat maintains the building.",
  ],
  professionalEscalation: [
    "Defrost history, sensor, fan, refrigeration, reversing, drainage design, installer-menu, and live electrical checks require a NIBE installer.",
  ],
  serviceHandoff:
    "Provide the F2120 model, alarm 228 screenshot, timestamps, weather and precipitation, outdoor photos, drainage and runoff, fan observations, backup heat, and prior service.",
  resetGuidance:
    "Do not repeatedly clear alarm 228 or force service-menu defrost; the ten failed attempts and their operating data need installer review.",
  faqs: [
    {
      question: "What triggers NIBE F2120 alarm 228?",
      answer:
        "The cited manual links 228 to ten unsuccessful defrosting attempts. It summarises repeated failed recovery rather than naming a single component.",
    },
    {
      question: "Can I remove ice from an F2120 coil?",
      answer:
        "Do not chip, scrape, or heat the coil. Document frost and clear only permitted loose external obstruction outside the guarded equipment.",
    },
    {
      question: "Does alarm 228 mean low refrigerant?",
      answer:
        "No. Refrigerant operation is one professional branch among airflow, ice, drainage, sensors, fan, reversing process, controls, and installation conditions.",
    },
  ],
  sourceIds: ["nibe-f2120-install", "nibe-f2120-product"],
  glossaryTerms: ["defrost-cycle", "air-to-water-heat-pump"],
  relatedContent: ["/brands/nibe/", "/heat-pump-outdoor-unit-iced-over/", "/how-to-tell-if-mini-split-is-in-defrost/"],
  keywords: ["nibe alarm 228", "f2120 unsuccessful defrost", "nibe f2120 defrost alarm", "nibe heat pump code 228"],
});
