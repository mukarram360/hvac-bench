import { publish } from "./publish";

export const nibeF2120SilentMode = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "NIBE F2120 silent mode: lower sound can also limit heating output",
  slug: "f2120-silent-mode",
  path: "/brands/nibe/f2120-silent-mode/",
  description:
    "NIBE says F2120 silent mode should be limited because the heat pump may not reach its designed output. Use it as a timed sound constraint, not a free setting.",
  articleType: "guide",
  brand: "nibe",
  equipmentType: "heat-pump",
  productFamily: "NIBE F2120 monobloc air-to-water heat pumps",
  models: ["F2120-8", "F2120-12", "F2120-16", "F2120-20"],
  problemType: "silent-mode-output-limit",
  symptomFamily: "no-heating",
  directAnswer:
    "Silent mode reduces the F2120 noise level by constraining operation, and NIBE warns that the unit may not reach its dimensioned output while the function is active. Schedule it for limited noise-sensitive periods and check comfort recovery before extending it.",
  scopeNotice:
    "This limitation is stated in the F2120 user manual. The indoor module or controller creates the schedule, and other NIBE outdoor-unit families have their own sound modes and capacity limits.",
  symptoms: ["The heat pump is quieter during a scheduled period but room or hot-water recovery is slower."],
  causes: [
    "Silent mode reduces the operating freedom available to the compressor and fan during its active window.",
    "A building load near the heat pump's available output leaves less margin when the sound constraint is applied.",
  ],
  comparisonTable: {
    caption: "F2120 silent-mode decision",
    columns: ["Choice", "Sound result", "Heating consequence"],
    rows: [
      ["Short scheduled window", "Reduced sound in the selected period", "Recovery can move outside the window"],
      ["Extended silent operation", "Longer sound reduction", "Designed output may not be available"],
      ["Silent mode off", "Normal sound control", "Full configured operating range remains available"],
    ],
  },
  figures: [{
    title: "A timed sound limit changes the available output window",
    description: "The controller applies silent mode for selected hours, the outdoor unit works inside that constraint, and unmet load can appear later as room, water, or backup-heat recovery.",
    nodes: [
      { label: "Silent window", detail: "Selected period carries the sound constraint" },
      { label: "F2120 output", detail: "Available operation can be reduced" },
      { label: "Recovery", detail: "Load may move beyond the quiet period" },
    ],
  }],
  sections: [
    {
      title: "Dimensioned output is the boundary the manual protects",
      paragraphs: [
        "The F2120 is selected against a design load and paired with an indoor control strategy. Silent mode does not change that load. It changes how much of the outdoor unit's operating envelope is available during the selected hours, which is why NIBE describes it as a limited-period function.",
        "Judge the setting across a complete weather event. Record outdoor temperature, silent-mode start and finish, supply target, indoor temperature, and any additional-heat use. Slower recovery only inside the window points toward the constraint; weak output at all times belongs to a broader system diagnosis.",
        "Compare nights with similar outdoor conditions rather than consecutive dates alone. Wind, hot-water demand, and a changed room target alter the load the F2120 sees. A useful comparison holds those visible differences as steady as the household can manage and records each one.",
      ],
    },
    {
      title: "Do not solve night sound by cutting power",
      paragraphs: [
        "The user manual provides silent mode so the control can reduce sound while retaining system protection. Removing electrical power is different. NIBE warns that a long power cut can require the outdoor part of the water system to be drained, with the installer consulted when the user is unsure.",
        "Keep grilles clear by observation only and do not spray water into the casing. Controller scheduling is owner-level work when the installed manual exposes it. Output limits, additional-heat strategy, hydraulic flow, and refrigerant diagnosis belong to the installer.",
      ],
    },
  ],
  faqs: [
    { question: "Does NIBE F2120 silent mode reduce capacity?", answer: "It can. NIBE says the heat pump may not reach its dimensioned output, which is why the function should be used for limited periods." },
    { question: "Should I switch off the F2120 overnight instead?", answer: "No. Power interruption removes controlled operation and frost protection. Use the documented schedule rather than isolating the outdoor unit." },
    { question: "What data helps tune a silent-mode schedule?", answer: "Record outdoor temperature, the active window, room response, supply target, hot-water recovery, and whether additional heat operates during or after it." },
  ],
  sourceIds: ["nibe-f2120-user", "nibe-f2120-product"],
  relatedContent: ["/brands/nibe/", "/brands/nibe/f2120-alarm-228/", "/heat-pump-operating-temperatures/"],
  glossaryTerms: ["heat-pump", "compressor", "balance-point"],
  keywords: ["nibe f2120 silent mode", "f2120 quiet mode output", "nibe heat pump night mode", "f2120 silent schedule"],
});
