import { publish } from "./publish";

/**
 * The indoor display shows one code where the outdoor board shows three
 * different states. That asymmetry is the page: the reader who only looks at
 * the indoor display is discarding information the manufacturer went to the
 * trouble of publishing, and it is information a technician can use.
 */
export const klimaireP4LedPatterns = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Klimaire P4: one indoor code, three outdoor LED patterns",
  slug: "p4-inverter-drive-error",
  path: "/brands/klimaire/p4-inverter-drive-error/",
  description:
    "Klimaire prints P4 against three different outdoor LED combinations. The indoor display collapses them into one code, and the outdoor board keeps them apart.",
  articleType: "error-code",
  brand: "klimaire",
  equipmentType: "ductless-mini-split",
  productFamily: "KSIO series systems in the manufacturer troubleshooting manual",
  models: ["KSIO009-H124-I", "KSIO012-H123-I"],
  errorCode: "P4",
  problemType: "inverter-drive-error",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "P4 is an inverter compressor drive error. On the documented KSIO models the outdoor board publishes three different green and red LED combinations that all display as P4 indoors, so the outdoor board is carrying detail the indoor display does not.",
  scopeNotice:
    "The LED table here is published for KSIO009-H124-I and KSIO012-H123-I in the Klimaire troubleshooting manual. Klimaire documents its series separately, and the KSIA, KSIV, and KDIP families each have their own tables, so confirm the model on the outdoor plate before using this page.",
  layout: ["decisionTable", "figures", "branches", "sections", "serviceHandoff"],
  symptoms: [
    "P4 appears on the indoor display and the outdoor unit stops or does not start.",
    "The system has been cycling without producing heating or cooling.",
    "The code returns after the supply has been interrupted and restored.",
  ],
  causes: [
    "Klimaire assigns P4 to an inverter compressor drive error rather than to a specific component.",
    "The same manual publishes three separate outdoor LED states against that one indoor code.",
  ],
  decisionTable: {
    caption: "P4 as the outdoor board reports it on the documented KSIO models",
    columns: ["Outdoor LED 2, green", "Outdoor LED 1, red", "Indoor display"],
    rows: [
      ["Marked in the table", "Not marked", "P4"],
      ["Not marked", "Marked in the table", "P4"],
      ["Neither marked", "Neither marked", "P4"],
      ["Marked, standby state", "Not marked, standby state", "No code, the unit is waiting"],
    ],
  },
  figures: [
    {
      title: "Two displays, different amounts of information",
      description:
        "The indoor unit tells you the family of fault. The outdoor board narrows it, and that narrowing is published rather than inferred, which is why counting the outdoor lamps is worth doing before the visit.",
      nodes: [
        { label: "Indoor display", detail: "Shows P4 for every one of the three states" },
        { label: "Outdoor LED 2, green", detail: "Also used for standby and normal operation" },
        { label: "Outdoor LED 1, red", detail: "Present in one of the three P4 states" },
        { label: "The pair together", detail: "What separates one P4 state from another" },
      ],
    },
  ],
  diagnosticBranches: [
    {
      title: "P4 is on the indoor display and nothing else has been checked",
      observation:
        "The code is known but nobody has looked at the outdoor unit, so the LED state has not been recorded.",
      action:
        "Look at the outdoor unit from outside and note which indicator lamps are lit or flashing. No panel comes off for this. The pair of lamps is the detail the indoor code has dropped, and it is worth having before anyone arrives.",
    },
    {
      title: "P4 arrived alongside a voltage complaint",
      observation:
        "Lights in the property have been dimming, other equipment has misbehaved, or the supply has been worked on.",
      action:
        "Record it. Klimaire publishes P1 separately for over voltage or too low voltage protection, so a supply problem has its own code, but supply conditions are still context a technician wants when a drive error is on the table.",
    },
    {
      title: "P4 clears on a restart and returns later",
      observation:
        "A power interruption clears the display and the code comes back after some hours or days of running.",
      action:
        "Write down how long it ran before returning and what the weather and load were doing. An intermittent drive error is difficult to reproduce during a visit, and the interval is the most useful thing you can hand over.",
    },
  ],
  sections: [
    {
      title: "What a drive error is, and what it is not",
      paragraphs: [
        "An inverter drive converts the incoming supply into a variable frequency output and controls the compressor with it. A drive error means that conversion or that control did not go as the board expected. It is a report from the electronics about a process, not a measurement of a component.",
        "That is why P4 does not name a part. Klimaire lists P0 separately for an intelligent power module malfunction or an over-current protection, and P1 for voltage. P4 sits alongside them as its own category, which tells you the manufacturer considers the three distinguishable.",
        "So the useful question after a P4 is not which part to buy. It is which of the three published states the outdoor board was showing, because that is the manufacturer's own subdivision of the same code.",
      ],
    },
    {
      title: "Why the outdoor LEDs are worth reading",
      paragraphs: [
        "The indoor display has one character position for the code and no way to express the difference between three drive states. The outdoor board has two lamps and uses their combination. Whichever way round it is on a given unit, three distinguishable states are being published against one indoor code.",
        "Reading them costs nothing and needs no tools. The lamps are visible on the outdoor board area from outside the cabinet on the documented models, and photographing the state while the fault is present is the sort of evidence that survives the fault clearing before a technician arrives.",
      ],
    },
    {
      title: "The safety line on this one is firm",
      paragraphs: [
        "The Klimaire troubleshooting manual opens by saying it is intended for use by a qualified service technician and is to be used only by a certified service technician. It also warns that electric charge is still kept in capacitors even when the power supply is shut off, and describes discharging them before work.",
        "That is not boilerplate on an inverter outdoor unit. The direct current bus in a drive holds a charge after isolation, and the manual gives a procedure for discharging it precisely because switching off is not sufficient. Looking at lamps from outside is safe. Opening the cabinet is not owner work under any circumstances.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the indoor display showing P4, and note the time and the mode the system was in.",
    "Observe the outdoor indicator lamps from outside the cabinet and record which are lit or flashing.",
    "Record the outdoor model number from the data plate, since the LED table is published per model.",
  ],
  professionalEscalation: [
    "The manual states it is for use by a certified service technician and warns that capacitors hold charge after the supply is switched off.",
    "Drive diagnosis, module testing, and compressor measurement all require the cabinet open with the bus discharged, which is technician work.",
  ],
  serviceHandoff:
    "Hand over the indoor code, the outdoor lamp state, the outdoor model number, and how long the system ran between occurrences. Include the lamp state: on this equipment, the manufacturer published three separate P4 rows that are distinguished by those outdoor indicators.",
  resetGuidance:
    "One power interruption establishes whether P4 survives it. Repeating that on a drive error asks the same conversion to be attempted again, so record the outcome of the first attempt and stop.",
  faqs: [
    {
      question: "Does P4 mean the compressor has failed?",
      answer:
        "It reports an inverter compressor drive error, which is a statement about the drive and its control of the compressor rather than a measurement of the motor. Klimaire keeps module protection and voltage protection as separate codes, so P4 is its own category.",
    },
    {
      question: "Why does the outdoor unit have two lamps?",
      answer:
        "So the board can express more states than a single indicator could. On the documented KSIO models the same manual uses those two lamps for standby and normal operation as well as for the three distinct states that all show as P4 indoors.",
    },
    {
      question: "Is it safe to open the outdoor unit to look at the lamps?",
      answer:
        "No. The manual is a technician document and warns that capacitors retain charge after the supply is switched off. Read the indicators from outside the cabinet and leave the panel alone.",
    },
    {
      question: "Does this table apply to a KSIV or KSIA system?",
      answer:
        "Not necessarily. Klimaire documents its series separately, and this table is published for KSIO009-H124-I and KSIO012-H123-I. Check the outdoor plate and use the troubleshooting manual for that series.",
    },
  ],
  sourceIds: ["klimaire-ksio-troubleshooting", "klimaire-support"],
  relatedContent: [
    "/brands/klimaire/",
    "/brands/klimaire/ksiv-e1-error-code/",
    "/mini-split-outdoor-unit-not-running/",
    "/inverter-technology-explained/",
  ],
  glossaryTerms: ["inverter-module", "inverter-compressor", "capacitor"],
  keywords: [
    "klimaire p4 error code",
    "klimaire inverter compressor drive error",
    "ksio outdoor led pattern",
    "klimaire mini split p4 fix",
    "klimaire outdoor unit lights",
  ],
});
