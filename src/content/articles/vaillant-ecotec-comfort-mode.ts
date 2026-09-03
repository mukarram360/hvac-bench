import { publish } from "./publish";

export const vaillantEcotecComfortMode = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Vaillant ecoTEC plus Comfort mode: what the C symbol changes",
  slug: "ecotec-plus-comfort-mode",
  path: "/brands/vaillant/ecotec-plus-comfort-mode/",
  description:
    "Comfort mode keeps the ecoTEC plus ready to supply hot water sooner. The C symbol describes hot-water readiness, not a central-heating demand.",
  articleType: "guide",
  brand: "vaillant",
  equipmentType: "boiler",
  productFamily: "Vaillant ecoTEC plus combi and applicable storage-combi boilers",
  models: ["ecoTEC plus models covered by operating instructions 0020245033_02"],
  problemType: "domestic-hot-water-comfort-mode",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "When Comfort mode is active, a C appears on the ecoTEC plus basic display and the boiler maintains hot-water readiness to reduce the wait at the tap. Switching it off removes that readiness function; it does not turn off central heating.",
  scopeNotice:
    "The C-symbol behavior is documented for the ecoTEC plus operating-instruction family cited here. Storage-combi installations can also use Comfort mode to enable cylinder charging, so the exact boiler and hot-water arrangement matter.",
  symptoms: ["A C appears on the boiler display, or hot water takes longer after the symbol is removed."],
  causes: [
    "Comfort mode changes domestic-hot-water preparation during periods without a draw-off.",
    "A connected controller can take responsibility for temperature settings while the boiler face retains a maximum or enabling value.",
  ],
  comparisonTable: {
    caption: "ecoTEC plus Comfort-mode distinction",
    columns: ["Display state", "Hot-water behavior", "Central heating"],
    rows: [
      ["C visible", "Comfort preparation is active", "Unaffected as a mode choice"],
      ["C absent", "Comfort preparation is off", "Can still operate normally"],
      ["Cylinder charging application", "C can enable charging on the documented arrangement", "Follow the installed controller"],
    ],
  },
  figures: [{
    title: "Comfort mode sits before the next tap demand",
    description: "The C setting maintains domestic-hot-water readiness during idle time. Opening a tap then creates the actual water demand, while central heating continues through its separate controller path.",
    nodes: [
      { label: "Idle period", detail: "Comfort can maintain readiness" },
      { label: "Tap opens", detail: "Domestic-hot-water demand begins" },
      { label: "Heating controller", detail: "Runs the radiator circuit separately" },
    ],
  }],
  sections: [
    {
      title: "The convenience has an energy consequence",
      paragraphs: [
        "Hot-water preparation before a tap opens shortens the cold wait because the appliance is not beginning from the same idle condition. Maintaining that readiness requires energy between draw-offs. The useful choice is therefore tied to household pattern: prompt water on repeated draws versus less standby preparation during long quiet periods.",
        "The operating instructions let the user toggle Comfort mode with the hot-water controls and confirm the change on the basic display. The C is the verification. Burner operation at another moment cannot identify the setting because central heating, frost protection, and hot-water demand can also run the boiler.",
        "Compare like-for-like draws if the household is deciding whether to keep it enabled. Use the same tap after a similar idle period and note how long cool water runs before temperature stabilizes. That observation measures the convenience the setting is intended to change.",
      ],
    },
    {
      title: "A controller changes where temperature is chosen",
      paragraphs: [
        "Without a connected controller, the boiler buttons set the requested heating-flow and hot-water temperatures. With a controller, Vaillant directs the user to set the boiler's maximum and choose the required value on the controller. Turning Comfort mode on does not override that division of responsibility.",
        "If hot water remains slow or unstable with C displayed, the mode has been confirmed and the question moves elsewhere. Record the boiler model, controller, C symbol, set temperature, delay at one tap versus several taps, and any F-code. Gas, sealed-case, sensor, and hydraulic checks belong to a competent heating engineer.",
      ],
    },
  ],
  faqs: [
    { question: "What does C mean on a Vaillant ecoTEC plus?", answer: "It means Comfort mode is active on the documented ecoTEC plus control. The mode prepares domestic hot water for faster delivery." },
    { question: "Does turning Comfort mode off disable the radiators?", answer: "No. Comfort is a domestic-hot-water readiness setting. Central-heating demand and its controller remain separate." },
    { question: "Why is the hot-water temperature set on another controller?", answer: "On installations with a connected controller, the boiler can hold the permitted maximum while the controller supplies the requested operating value." },
  ],
  sourceIds: ["vaillant-ecotec-operating", "vaillant-ecotec-plus-install"],
  relatedContent: ["/brands/vaillant/", "/brands/vaillant/ecotec-plus-f75-fault/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["boiler", "thermostat", "flow-temperature"],
  keywords: ["vaillant c symbol", "ecotec plus comfort mode", "vaillant hot water comfort", "turn off vaillant comfort mode"],
});
