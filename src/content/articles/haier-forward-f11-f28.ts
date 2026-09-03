import { publish } from "./publish";

/**
 * The gap between what the code detects and what it costs is unusually wide
 * here: the same two codes cover a loose terminal and a failed compressor. The
 * page is arranged so a reader meets that spread before anybody quotes, because
 * the difference between the two ends of it is most of the repair bill.
 */
export const haierForwardF11F28 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Haier Forward F11 and F28: compressor position not detected",
  slug: "forward-series-f11-f28",
  path: "/brands/haier/forward-series-f11-f28/",
  description:
    "Haier assigns F11 and F28 to the compressor rotor position not being detected. The documented conditions run from incorrect wiring to a damaged compressor.",
  articleType: "error-code",
  brand: "haier",
  equipmentType: "ductless-mini-split",
  productFamily: "Forward Series systems in the manufacturer service manual",
  models: ["Haier Forward Series indoor and outdoor units covered by the cited service manual"],
  errorCode: "F11 / F28",
  problemType: "compressor-drive-fault",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "Both codes report that the position of the compressor rotor cannot be detected normally. The service manual gives the decision conditions as compressor wiring that is wrong or poorly connected, or a damaged compressor, so the code covers a wide range of repair.",
  scopeNotice:
    "This follows the Haier service manual for the Forward Series, where the codes appear as indoor display F11 and F28 alongside outdoor LED1 flash counts of 18 and 19. Haier assigns codes by product family, and the Forward Series is documented in its own literature, so confirm the range before applying these meanings.",
  layout: ["branches", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The indoor display shows F11 or F28 and the outdoor unit stops or never gets going.",
    "The outdoor board indicator flashes a long count of 18 or 19 rather than a short pattern.",
    "The system has been starting and stopping without producing heating or cooling.",
  ],
  causes: [
    "The service manual gives incorrect compressor wiring or a poor connection as a decision condition for these codes.",
    "The manual gives a damaged compressor as the other decision condition for the same codes.",
  ],
  diagnosticBranches: [
    {
      title: "The code arrived after installation or after outdoor work",
      observation:
        "The system is newly installed, has been moved, or has had work at the outdoor unit, and F11 or F28 has been on the display ever since.",
      action:
        "Say so when you arrange service. The manual names compressor wiring that is wrong or poorly connected as one of its two decision conditions, and recent work on that wiring is the cheapest of the two to confirm.",
    },
    {
      title: "The code arrived on a system that had been running normally for years",
      observation:
        "Nothing has been touched, the system has worked through previous seasons, and the code has appeared on its own.",
      action:
        "Leave the system off and arrange diagnosis. The absence of recent work does not select between the two documented conditions, and repeated restart attempts against a drive fault are not a neutral act.",
    },
    {
      title: "The outdoor indicator is counting rather than the indoor display showing a code",
      observation:
        "No readable code appears indoors, but the outdoor board LED is flashing a repeating group of eighteen or nineteen.",
      action:
        "Count two full cycles and record the number. The Haier manual pairs LED1 flash 18 with indoor display F11 and LED1 flash 19 with F28, so the count is the same information as the code.",
    },
  ],
  figures: [
    {
      title: "What the drive is trying to detect",
      description:
        "An inverter drive has to know where the rotor is before it can decide when to energise each winding. The code says that knowledge is missing, which is why everything from a terminal to the motor itself is in scope.",
      nodes: [
        { label: "Outdoor drive circuit", detail: "Needs rotor position to commutate correctly" },
        { label: "Compressor wiring", detail: "Carries the drive output and the feedback it depends on" },
        { label: "Terminals and connections", detail: "A poor joint changes what the drive sees" },
        { label: "Compressor motor", detail: "The other documented condition for the same code" },
      ],
    },
  ],
  decisionTable: {
    caption: "How far apart the two documented conditions are",
    columns: ["Documented condition", "What confirming it involves", "What it means for the repair"],
    rows: [
      [
        "Compressor wiring wrong or poorly connected",
        "Inspection and measurement at the compressor terminals with the supply isolated",
        "A connection or a wiring correction rather than a component",
      ],
      [
        "Compressor damaged",
        "Electrical testing of the motor windings against the manufacturer values",
        "The most expensive single part in the outdoor unit",
      ],
      [
        "Neither confirmed by the code alone",
        "The display cannot separate them, which is why testing comes first",
        "A quote written from the code without testing has skipped a step",
      ],
    ],
  },
  sections: [
    {
      title: "A detection failure, not a diagnosis",
      paragraphs: [
        "The manual describes the detection method plainly: the position of the compressor rotor cannot be detected normally. That is a statement about information the drive expected and did not get. It is not a statement that the compressor has failed, even though a failed compressor is one of the two conditions listed under it.",
        "Holding that distinction is what protects an owner here. F11 and F28 are the codes where the cheapest and the most expensive outcomes share one display, and the honest reading is that the code has narrowed the fault to the compressor circuit and stopped there.",
        "Anyone quoting a compressor on the strength of the code alone has gone past what the manual supports. Ask what was measured, at which terminals, and against which values.",
      ],
    },
    {
      title: "Two displays, one fault",
      paragraphs: [
        "Haier reports this fault in two places. The indoor display carries F11 or F28, and the outdoor board carries an LED1 flash count of eighteen or nineteen. The manual pairs them, so a household with no readable indoor code can still get the same information by counting at the outdoor unit.",
        "Counting is worth doing carefully. Eighteen and nineteen differ by a single flash, which is easy to miscount at a glance, and the two codes are listed separately in the manual even though they share their detection method and their decision conditions. Watch two complete cycles before committing to a number.",
      ],
    },
    {
      title: "Why repeated restarting is not neutral",
      paragraphs: [
        "A drive that cannot establish rotor position is attempting to start a motor without the feedback that tells it how. Each restart repeats that attempt. This is different from a communication code or a sensor code, where a restart costs nothing but time.",
        "One controlled restart establishes whether the code survives a power interruption, and that is genuinely useful information for the technician. Beyond that, the sensible position is to leave the system off until it has been looked at.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the indoor display, or count two complete flash cycles at the outdoor board and write the number down.",
    "Record whether any work has been done at the outdoor unit, and by whom, since the system last ran normally.",
    "Note whether the outdoor fan turns at all when the system is asked to start, without opening any panel.",
  ],
  professionalEscalation: [
    "Compressor terminals, drive circuits, and winding measurements are technician work with the supply isolated and the capacitors discharged.",
    "Ask for the compressor to be tested rather than inferred, because the manual lists wiring and a damaged compressor as alternatives under the same code.",
  ],
  serviceHandoff:
    "Give the technician the exact code or flash count, the indoor and outdoor model numbers, the date it started, and any work carried out at the outdoor unit beforehand. The last of those is what decides whether the visit starts at the terminals or at the motor.",
  resetGuidance:
    "One controlled restart tells you whether the code survives a power interruption. Repeating it asks a drive to keep starting a motor it cannot locate, so stop after the first attempt.",
  faqs: [
    {
      question: "Does F11 mean my compressor has failed?",
      answer:
        "Not on its own. The manual gives two decision conditions for these codes: compressor wiring that is wrong or poorly connected, and a damaged compressor. The display does not choose between them, so testing does.",
    },
    {
      question: "What is the difference between F11 and F28?",
      answer:
        "Haier lists them separately, paired with outdoor LED1 flash counts of eighteen and nineteen, and gives them the same detection method and the same decision conditions. Record which one appeared rather than treating them as interchangeable.",
    },
    {
      question: "Can I read the fault without an indoor display?",
      answer:
        "Yes. The outdoor board flashes a count that the manual pairs with the indoor code: eighteen for F11 and nineteen for F28. Watch two complete cycles before settling on a number, since the two differ by one flash.",
    },
    {
      question: "Is it safe to keep resetting the system?",
      answer:
        "One restart is reasonable and tells you whether the code survives a power interruption. Repeating it means asking the drive to keep attempting a start without the rotor position feedback it needs, which is not a neutral thing to do.",
    },
  ],
  sourceIds: ["haier-forward-service", "haier-forward-resources"],
  relatedContent: [
    "/brands/haier/",
    "/brands/haier/forward-series-e7-error/",
    "/mini-split-outdoor-unit-not-running/",
    "/inverter-technology-explained/",
  ],
  glossaryTerms: ["compressor", "inverter-module", "inverter-compressor"],
  keywords: [
    "haier f11 error code",
    "haier f28 error code",
    "haier forward compressor error",
    "haier outdoor led 18 flashes",
    "haier mini split compressor position",
  ],
});
