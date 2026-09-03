import { publish } from "./publish";

export const stiebelWplSilentPrograms = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Stiebel Eltron WPL silent programs: reduced output versus heat pump off",
  slug: "wpl-silent-programs",
  path: "/brands/stiebel-eltron/wpl-silent-programs/",
  description:
    "WPL Silent Program 1 reduces compressor and fan output. Silent Program 2 switches off the heat pump and can leave heating to the electric booster.",
  articleType: "guide",
  brand: "stiebel-eltron",
  equipmentType: "heat-pump",
  productFamily: "WPL 15, 20, and 25 A, AC, AS, and ACS air-to-water heat pumps",
  models: ["WPL 15 AS and ACS", "WPL 20 A and AC", "WPL 25 A, AC, and ACS"],
  problemType: "night-mode-selection",
  symptomFamily: "no-heating",
  directAnswer:
    "Silent Program 1 reduces WPL compressor output and fan control to lower sound. Silent Program 2 switches the heat pump off; central heating and hot water then depend on the electric emergency or booster heater, which Stiebel Eltron warns can raise running costs.",
  scopeNotice:
    "The two-program distinction comes from the WPL 15/20/25 A(C)(S) installation manual and is configured through the heat-pump manager. Available limits differ by exact outdoor-unit model.",
  symptoms: ["Night operation becomes quieter but electricity use rises, or the heat pump stops while heating remains available."],
  causes: [
    "The two silent programs reach lower sound through different mechanisms: one constrains output, while the other removes the heat pump from operation.",
    "The emergency or booster heater can cover load during the off program, changing the source of heat rather than merely changing fan sound.",
  ],
  decisionTable: {
    caption: "WPL silent-program consequences",
    columns: ["Program", "Outdoor-unit action", "Heating source"],
    rows: [
      ["Silent Program 1", "Compressor output and fan control are reduced", "Heat pump continues within the set limits"],
      ["Silent Program 2", "Heat pump is switched off", "Electric emergency or booster heat supplies demand"],
      ["No silent program", "Normal configured control", "Heat pump and backup follow ordinary strategy"],
    ],
  },
  figures: [{
    title: "The quiet period can constrain or replace the heat pump",
    description: "Program 1 keeps the compressor in service at reduced limits. Program 2 removes it, so the electric emergency or booster stage becomes the available heat source.",
    nodes: [
      { label: "Program 1", detail: "Heat pump continues under sound limits" },
      { label: "Program 2", detail: "Heat pump is switched off" },
      { label: "Electric heater", detail: "Carries demand when configured and required" },
    ],
  }],
  sections: [
    {
      title: "The two programs should not be compared as equal sound presets",
      paragraphs: [
        "Program 1 keeps the refrigeration cycle available but places ceilings on compressor and fan operation. The manual publishes different sound, compressor, fan, and heating-output values by model. An installer therefore has to set limits against the exact WPL rather than copy a percentage from another size.",
        "Program 2 is a source substitution. The heat pump is off and the electric heater carries central-heating and hot-water demand. A quiet outdoor unit during that window can coincide with higher electrical input, so sound alone is not evidence of efficient operation.",
        "Read the programmed name rather than inferring it from outdoor-unit silence. Mild weather can leave either program with no active demand, while a cold night exposes their different consequences. Controller status and electricity use provide the missing distinction.",
        "The manual's published reduction values are tied to WPL size and water condition. Those figures belong in commissioning, where sound targets can be compared with required output. They are not interchangeable percentages for every WPL carrying the same cabinet style.",
      ],
    },
    {
      title: "Keep frost protection through the manager",
      paragraphs: [
        "Stiebel Eltron says to use Standby on the heat-pump manager when shutting the system down so safety functions such as frost protection remain enabled. It separately warns against interrupting power outside the heating season. A silent schedule belongs inside that controlled system state.",
        "If comfort falls only during Program 1, compare the scheduled constraint with building demand. If electric use rises during Program 2, confirm whether the booster supplied the load. Red-light faults, repeated trips, and internal settings still require a qualified installer and the model-specific fault record.",
      ],
    },
  ],
  faqs: [
    { question: "What is the difference between WPL Silent Programs 1 and 2?", answer: "Program 1 reduces compressor and fan operation. Program 2 switches the heat pump off and leaves demand to the emergency or booster heater." },
    { question: "Why can Silent Program 2 cost more to run?", answer: "The manual states that heating and hot water are then supplied solely through the electric emergency or booster heater if it cuts in." },
    { question: "Can I turn off WPL power to make it quiet?", answer: "No. Stiebel Eltron warns that interrupting the supply removes automatic protection. Use the heat-pump manager and its documented programs." },
  ],
  sourceIds: ["stiebel-wpl-install", "stiebel-wpl-product"],
  relatedContent: ["/brands/stiebel-eltron/", "/brands/stiebel-eltron/wpl-red-light/", "/heat-pump-operating-temperatures/"],
  glossaryTerms: ["heat-pump", "compressor", "auxiliary-heat"],
  keywords: ["stiebel wpl silent mode", "wpl silent program 1", "wpl silent program 2", "stiebel heat pump night mode"],
});
