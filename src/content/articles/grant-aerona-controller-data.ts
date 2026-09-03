import { publish } from "./publish";

export const grantAeronaControllerData = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Grant Aerona controller data: separate schedule, demand, and operating mode",
  slug: "aerona-controller-data",
  path: "/brands/grant/aerona-controller-data/",
  description:
    "A Grant Aerona controller can show a scheduled period, a heating or hot-water demand, and a day or night operating state. These are not interchangeable.",
  articleType: "guide",
  brand: "grant",
  equipmentType: "controls-thermostats",
  productFamily: "Grant Aerona heat pumps using the Aerona Smart Controller or Aerona Remote Controller",
  models: ["Aerona3 with Smart Controller", "Aerona3 with Remote Controller", "Aerona 290 with Smart Controller"],
  problemType: "controller-status-interpretation",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "The calendar says when operation is allowed, demand says whether heating or hot water is being requested now, and day or night mode describes the active operating profile. A scheduled On period can therefore coexist with no demand, and an icon alone does not prove the outdoor unit is running.",
  scopeNotice:
    "Grant states that the Smart Controller supports Aerona3 and Aerona 290, while the Remote Controller is for Aerona3. Their screens and menu paths differ, so identify the controller before following an icon guide.",
  symptoms: ["The controller schedule is On but the heat pump is quiet, or a demand icon does not match the expected day or night setting."],
  causes: [
    "A schedule grants a time window; the room, water cylinder, and control temperatures still decide whether heat is requested inside that window.",
    "Domestic-hot-water priority can pause space-heating output while the cylinder circuit is being served.",
  ],
  decisionTable: {
    caption: "Three Aerona controller questions",
    columns: ["Screen evidence", "Question answered", "What to check next"],
    rows: [
      ["Heating and DHW schedule", "Is this service allowed now?", "Current circuit demand"],
      ["Demand or circuit status", "Is heat requested for that circuit?", "Target and measured temperature"],
      ["Day or night indication", "Which operating profile is active?", "Profile settings and schedule transition"],
      ["DHW priority", "Is cylinder heating taking precedence?", "Cylinder target and valve status"],
    ],
  },
  figures: [{
    title: "Permission, demand, and plant response happen in order",
    description: "The schedule opens an operating window. A room or cylinder then creates demand, the controller selects a profile, and the heat pump plus valves attempt to deliver it.",
    nodes: [
      { label: "Schedule", detail: "Permits operation at this time" },
      { label: "Circuit demand", detail: "Requests heating or hot water" },
      { label: "Control profile", detail: "Applies day, night, or work mode" },
      { label: "Plant response", detail: "Outdoor unit and valves deliver heat" },
    ],
  }],
  sections: [
    {
      title: "Build a controller snapshot before changing a setpoint",
      paragraphs: [
        "Photograph the home screen, then record outdoor temperature, heating target, measured room or circuit value, domestic-hot-water target, schedule block, and day or night icon. Grant's performance-data guidance uses these fields together because each describes a different control decision.",
        "Next watch one transition without altering installer parameters. A schedule boundary, a room reaching target, or a cylinder demand beginning can explain why icons and outdoor operation change. A single still image cannot show which state arrived first.",
        "Include the time shown by the controller in the photograph. A clock error moves schedule boundaries while every programmed period still looks correct on its own screen. Correcting that time relationship can explain an apparent schedule miss without changing heating temperatures.",
        "If the cylinder has priority, compare its measured value with its target before expecting radiator flow. The controller may be completing a legitimate hot-water request. A valve or sensor fault remains possible, but the demand order must be established before either part is blamed.",
      ],
    },
    {
      title: "Controller identity sets the safe menu boundary",
      paragraphs: [
        "The Smart Controller and Remote Controller are not two names for the same interface. The Smart Controller spans Aerona3 and Aerona 290, while Grant limits the Remote Controller to Aerona3. Menu labels, hardware connections, and accessible data follow that pairing.",
        "Remain in user-level status and schedule screens. Heating curves, hysteresis, valve allocation, additional-heater configuration, and installer access change system behavior and should stay with the commissioning engineer. If a fault icon appears, preserve it and use the separate controller-fault guide rather than clearing the state first.",
      ],
    },
  ],
  faqs: [
    { question: "Why is a Grant schedule On while the heat pump is off?", answer: "The schedule permits operation but does not create demand by itself. A circuit at target can remain idle inside an enabled period." },
    { question: "Can hot-water priority pause the radiators?", answer: "Yes. The documented Smart Controller arrangements can give domestic-hot-water demand priority while space-heating valves are closed." },
    { question: "Do Aerona Smart and Remote Controllers use the same menus?", answer: "No. Grant treats them as distinct controls. The Smart Controller supports Aerona3 and Aerona 290, while the Remote Controller is specified for Aerona3." },
  ],
  sourceIds: ["grant-aerona-performance", "grant-smart-controller"],
  relatedContent: ["/brands/grant/", "/brands/grant/aerona-controller-fault-code/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["thermostat", "heat-pump", "flow-temperature"],
  keywords: ["grant aerona controller icons", "aerona heat pump schedule on", "grant aerona day night mode", "aerona dhw priority"],
});
