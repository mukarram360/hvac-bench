import { publish } from "./publish";

/**
 * The fact worth the page: LG uses one code for two completely different
 * situations, and which one applies depends on whether the indoor unit was
 * built with a float switch at all. On a model without one, CH04 is about a
 * missing jumper and has nothing to do with water.
 */
export const lgCh04 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "LG CH04: float switch error, or a missing jumper",
  slug: "ch04-error-code",
  path: "/brands/lg/ch04-error-code/",
  description:
    "LG CH04 reports the float switch circuit. On indoor units built without a float switch the same code follows a missing short key, and no drainage work will clear it.",
  articleType: "error-code",
  brand: "lg",
  equipmentType: "ductless-mini-split",
  productFamily: "LG single-zone systems in general service manual MFL41161610",
  models: ["LG single-zone indoor units covered by General Service Manual MFL41161610"],
  errorCode: "CH04",
  problemType: "drain-circuit-fault",
  symptomFamily: "water-leak",
  directAnswer:
    "CH04 reports the float switch circuit rather than a measured water level. On an indoor unit fitted with a float switch it points at drainage or the switch; on a model built without one it follows a short key missing from the float switch connector on the indoor board.",
  scopeNotice:
    "Whether your indoor unit has a float switch at all decides which half of this code applies, and that depends on the cabinet style and the exact model. Establishing it is the first thing document MFL41161610 asks a technician to do, which is why the characters alone cannot answer CH04 on any single-zone LG system.",
  layout: ["branches", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The indoor display or wired remote shows CH04 and the system stops or refuses a cooling call.",
    "CH04 appeared on a wall-mounted unit that has never had a condensate pump fitted to it.",
    "Water has been seen at the indoor unit, or the drain has been slow, and the code followed.",
  ],
  causes: [
    "LG lists drain hose clogging and a float switch fault as the causes on models that use a float switch.",
    "On models that do not use a float switch, the manual attributes the code to the short key being removed from or never fitted to the indoor board connector.",
  ],
  diagnosticBranches: [
    {
      title: "The indoor unit is a type that collects and pumps condensate",
      observation:
        "The installation has a condensate pump or a drain arrangement that lifts water, and CH04 has appeared alongside slow drainage or visible water.",
      action:
        "Treat the drain path as the first question. The manual points at drain pipe location and at clogging of the drain pipe, both of which are conditions a technician can establish quickly before anything electrical is considered.",
    },
    {
      title: "The indoor unit has no float switch",
      observation:
        "The model is one LG builds without a float switch, and CH04 is showing even though there is no float assembly in the unit to fail.",
      action:
        "The manual attributes this to the short key at the float switch connector on the indoor board. It has to be present for the circuit to read as satisfied, and the fix is re-inserting or replacing that key rather than anything to do with water.",
    },
    {
      title: "CH04 stays with a short key correctly fitted",
      observation:
        "On a model that does use a float switch, the code persists even when a short key has been inserted at the board connector for testing.",
      action:
        "The manual is explicit that this is judged a board fault and the indoor board is replaced. It is equally explicit that the board should not be replaced otherwise, which is worth quoting back if a board is proposed before that test has been done.",
    },
  ],
  figures: [
    {
      title: "What the CH04 circuit actually contains",
      description:
        "The control is reading a circuit, not a water level. Everything in that circuit can produce the code, which is why the first question is what the circuit is made of on your model.",
      nodes: [
        { label: "Float switch, where fitted", detail: "Opens when the pan level rises" },
        { label: "Short key, where not fitted", detail: "Stands in for the switch at the connector" },
        { label: "Board connector", detail: "Where either one lands on the indoor PCB" },
        { label: "Indoor control board", detail: "Reads the circuit and raises the code" },
      ],
    },
  ],
  decisionTable: {
    caption: "Two readings of one LG code",
    columns: ["Indoor unit build", "What CH04 is reporting", "What will not clear it"],
    rows: [
      [
        "Fitted with a float switch",
        "Drain pipe location or clogging, or the switch itself",
        "Refitting a short key that the model was never meant to use permanently",
      ],
      [
        "Built without a float switch",
        "The short key removed from or missing at the board connector",
        "Clearing a drain that was never the subject of the code",
      ],
      [
        "Fitted with a float switch, short key inserted for test",
        "The manual judges a board fault when the code remains",
        "Further drainage work, since the circuit has been proven at the connector",
      ],
    ],
  },
  sections: [
    {
      title: "Where CH04 sits in the LG numbering",
      paragraphs: [
        "The general service manual states that CH01 to CH12 relate to indoor unit problems and CH21 to CH73 to outdoor unit problems, with CH05 and CH53 as the stated exceptions because they concern the link between the two. CH04 falls in the indoor range with no exception attached to it, so the search stays inside the indoor unit.",
        "The manual makes that point sharply for parts. Indoor parts are not to be replaced on the basis of a CH21 to CH73 code, and outdoor parts are not to be replaced on the basis of a CH01 to CH12 code, with only the two exceptions. For CH04 that means the outdoor unit is not the place to look.",
      ],
    },
    {
      title: "Why a jumper produces a water code",
      paragraphs: [
        "The control is not measuring water. It is reading a circuit that is closed in normal conditions and opens when the float rises, and it raises the code when that circuit reads open. An indoor unit built without a float switch still has the input, so LG fits a short key across the connector to hold it in the satisfied state.",
        "Remove that key, or fit a board without transferring it, and the input reads exactly as a raised float would. The code is correct, the equipment is behaving as designed, and the drain has nothing to do with any of it. This is the reading that saves an owner paying for drainage work on a unit with no drainage problem.",
      ],
    },
    {
      title: "What an owner can and cannot establish",
      paragraphs: [
        "You can establish the visible half. Whether water has appeared, whether the drain outlet outside is running when the system is in cooling, whether the discharge point is obstructed, and whether anything was changed at the indoor unit recently are all things you can answer without opening anything.",
        "You cannot establish the connector. The float switch input, the short key, and the board are inside the electrical compartment, and the manual asks for the power to be off for three minutes before that area is worked in. That boundary is the whole of the difference between the two readings of this code, which is why CH04 is a code to report accurately rather than to act on.",
      ],
    },
  ],
  safeChecks: [
    "Note whether water has appeared at or under the indoor unit, and whether the outside drain discharges during cooling.",
    "Record the indoor model number, since whether a float switch is fitted at all depends on it.",
    "Note any recent work at the indoor unit, particularly a board replacement or a service visit that opened the electrical cover.",
  ],
  professionalEscalation: [
    "The float switch connector, the short key, and the indoor board sit inside the electrical compartment and are technician work with the supply isolated.",
    "Ask for the short key test described in the manual before an indoor board is quoted, because the manual conditions that replacement on it.",
  ],
  serviceHandoff:
    "Give the technician the indoor model number, whether any water has been seen, whether the outdoor drain runs during cooling, and the date of the last visit that opened the indoor electrical cover. Those four answers decide which of the two readings of CH04 the visit starts from.",
  resetGuidance:
    "A restart tells you whether the circuit reads open again as soon as the board looks at it. Repeating it does not close a drain or refit a short key, so one attempt is the useful limit.",
  faqs: [
    {
      question: "Why does CH04 show when there is no water anywhere?",
      answer:
        "Because the code reports a circuit rather than a level. On an indoor unit built without a float switch, the short key that holds that circuit closed at the board connector is what the code is about, and a missing key reads exactly like a raised float.",
    },
    {
      question: "Is CH04 an indoor or outdoor fault?",
      answer:
        "Indoor. The service manual puts CH01 to CH12 with the indoor unit and CH21 to CH73 with the outdoor unit, naming only CH05 and CH53 as exceptions. CH04 carries no exception, so outdoor parts should not be replaced on the strength of it.",
    },
    {
      question: "Should the indoor board be replaced for CH04?",
      answer:
        "Only after the test the manual describes. On a model that uses a float switch, LG judges a board fault when CH04 remains with a short key inserted at the connector, and states that the board should not be replaced otherwise.",
    },
    {
      question: "Does clearing the drain always fix CH04?",
      answer:
        "No, and on a unit with no float switch it fixes nothing at all. Drain pipe location and clogging are the causes LG lists for models that use a float switch, which is why the model has to be identified before the drain is blamed.",
    },
  ],
  sourceIds: ["lg-general-service", "lg-console-owner"],
  relatedContent: [
    "/brands/lg/",
    "/brands/lg/ch05-error-code/",
    "/mini-split-leaking-water/",
    "/how-to-check-mini-split-condensate-drain/",
  ],
  glossaryTerms: ["float-switch", "condensate-drain", "control-board"],
  keywords: [
    "lg ch04 error code",
    "lg float switch error",
    "lg ch04 no water",
    "lg mini split drain error",
    "lg short key float connector",
  ],
});
