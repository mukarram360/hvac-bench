import { publish } from "./publish";

/**
 * Twelve flashes is the flash code with the cheapest answer on the whole
 * table, and one that can be misread as a control failure. The page
 * leads with what the ID plug is, because a reader who has never heard of it
 * cannot make sense of a code that names it.
 */
export const yorkYp9cTwelveFlashes = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "York YP9C twelve red flashes: the ID plug is not connected",
  slug: "yp9c-twelve-red-flashes",
  path: "/brands/york/yp9c-twelve-red-flashes/",
  description:
    "Twelve red flashes on a York Affinity YP9C means the ID plug is missing or not seated. It is a small connector that tells the control what furnace it is in.",
  articleType: "error-code",
  brand: "york",
  equipmentType: "furnace",
  productFamily: "Affinity YP9C modulating gas furnaces",
  models: ["YP9C Series models in the cited installation manual"],
  errorCode: "12 red flashes",
  problemType: "identification-plug-fault",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "The manual assigns twelve red flashes to the ID plug not being present or not connected properly, and directs the check at a loose plug or loose wires in the plug. It is a connector fault, not a control board failure.",
  scopeNotice:
    "This flash code is published in the York installation manual for the Affinity YP9C modulating gas furnaces. Other York furnace families use different control boards with different flash tables, and a twelve-flash code on another manufacturer's furnace means something unrelated.",
  layout: ["branches", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The furnace will not run and the control LED is flashing red in a repeating group of twelve.",
    "The fault appeared immediately after a control board replacement or other work in the furnace.",
    "Heating stopped with no prior warning and no unusual noises or smells.",
  ],
  causes: [
    "The manual names the ID plug not being present or not being connected properly, and asks for a check on a loose plug or loose wires in the plug.",
    "Work inside the furnace can disturb the plug, since it is a small connector that has to be moved when a board is changed.",
  ],
  diagnosticBranches: [
    {
      title: "Twelve flashes followed a board replacement",
      observation:
        "The control board was changed recently and the furnace has shown this code since the work was finished.",
      action:
        "Say so when you call. The ID plug has to be transferred from the old board to the new one, and a plug left behind or pushed onto the wrong header produces exactly this code on an otherwise correct repair.",
    },
    {
      title: "Twelve flashes appeared with no work done",
      observation:
        "Nobody has been inside the furnace, and the code has arrived on its own.",
      action:
        "Arrange service and report the flash count. A connector that has worked loose over time is one explanation and a fault in the reading circuit is another, and separating them means opening the cabinet with the supply isolated.",
    },
    {
      title: "The count might be eleven or twelve",
      observation:
        "The group is long and it is not certain whether there were eleven or twelve flashes.",
      action:
        "Watch several complete cycles before deciding, because eleven and twelve are different faults. Eleven is assigned to a main blower failure and twelve to the ID plug, so a miscount sends the visit to the wrong component.",
    },
  ],
  figures: [
    {
      title: "How to count a York flash code correctly",
      description:
        "The manual describes the pattern, and long counts are where readers go wrong. Getting the timing right is what separates an eleven from a twelve at a glance.",
      nodes: [
        { label: "The LED turns on and off", detail: "Once for each number in the code" },
        { label: "A two second pause", detail: "Separates one set of flashes from the next" },
        { label: "The set repeats", detail: "The same count is shown again, so it can be confirmed" },
        { label: "Colour matters", detail: "Red, green, and amber carry different meanings on this control" },
      ],
    },
  ],
  decisionTable: {
    caption: "The long red flash counts on the YP9C control",
    columns: ["Flashes", "What the manual assigns it to", "What that means for the repair"],
    rows: [
      [
        "Ten red",
        "Gas valve circuit shorted, with the wiring checked before the valve is replaced",
        "A wiring check comes first, then a component",
      ],
      [
        "Eleven red",
        "Main blower failure",
        "A motor or its circuit, which is a different part of the furnace",
      ],
      [
        "Twelve red",
        "The ID plug is not present or not connected properly",
        "A connector, checked for a loose plug or loose wires",
      ],
      [
        "Steady on red",
        "A control fault detected, or 24 volts present without 115 volts",
        "A supply question before a control question",
      ],
    ],
  },
  sections: [
    {
      title: "What an ID plug is doing on a furnace",
      paragraphs: [
        "A modulating furnace control is not built individually for every model in a family. One board is manufactured and then told which furnace it has been fitted to, and on this range that is what the ID plug does. It carries the identity the control reads at startup so that airflow, staging, and firing rate match the appliance rather than a default.",
        "That makes the plug small, cheap, and disproportionately important. Without it the control has no basis for the decisions it is about to make, so rather than guess it stops and flashes twelve.",
        "It also creates a route to an incorrect control-board diagnosis. A furnace that will not run and a control board flashing a fault can look like a failed board, and a board fitted without transferring the plug produces the same picture immediately afterwards.",
      ],
    },
    {
      title: "Green and amber are not faults",
      paragraphs: [
        "The same LED reports normal states as well as faults, and the colour is what separates them. One green flash is normal operation with no call for heat. Two green flashes indicate that no error codes are held in memory, and three green flashes confirm that error codes have been cleared from memory.",
        "So a reader who sees the LED flashing and assumes something is wrong may be looking at the furnace telling them everything is fine. Note the colour before the count, because the count alone is not the message.",
      ],
    },
    {
      title: "Where the owner-safe boundary sits",
      paragraphs: [
        "Counting flashes through a sight glass, noting the colour, and recording when it started are all reasonable. Everything past that is not. The control board, the ID plug, and the wiring around them sit inside a cabinet that also contains gas piping, a burner assembly, and line voltage connections.",
        "The manual is explicit about the general principle as well: it warns against bypassing any safety control to allow furnace operation, and against adjusting a pressure switch to allow operation. Neither of those is a temptation on a twelve-flash code, but the same reasoning applies to reaching in to reseat a connector.",
      ],
    },
  ],
  safeChecks: [
    "Watch at least two complete flash groups and note both the colour and the count before recording it.",
    "Record whether any work was done inside the furnace before the code appeared, and by whom.",
    "Check that the furnace has power and that no breaker has tripped, without opening the cabinet.",
  ],
  professionalEscalation: [
    "The ID plug and the control board sit inside a cabinet containing gas piping and line voltage connections, so reseating or replacing the plug is technician work.",
    "The manual warns against bypassing any safety control or adjusting a pressure switch to allow the furnace to run.",
  ],
  serviceHandoff:
    "Tell the technician the flash colour and count, whether the code has been consistent, and whether the control board has been replaced at any point. If a board was changed, mention it first, because the ID plug transfer is part of that job.",
  resetGuidance:
    "Cycling the supply restarts the control and it will read the plug again. A code that returns immediately means the plug is still not being read, and repeating the cycle does not seat a connector.",
  faqs: [
    {
      question: "What is the ID plug on a York furnace?",
      answer:
        "It is a small connector that identifies the furnace to the control board. The board reads it so that its settings match the appliance it is fitted to, and the manual assigns twelve red flashes to that plug being absent or not connected properly.",
    },
    {
      question: "Do I need a new control board?",
      answer:
        "Not on the strength of this code. The manual directs the check at a loose plug or loose wires in the plug, which is a connector question. A board replaced without transferring the ID plug will show the same twelve flashes.",
    },
    {
      question: "How do I tell eleven flashes from twelve?",
      answer:
        "Watch several complete cycles. The control flashes the count, pauses for about two seconds, and repeats, so the pattern can be confirmed. Eleven is a main blower failure and twelve is the ID plug, which are different repairs.",
    },
    {
      question: "The light is flashing green. Is that a fault?",
      answer:
        "No. One green flash is normal operation with no call for heat, two green flashes mean no error codes are held in memory, and three green flashes confirm codes have been cleared. Note the colour before the count.",
    },
  ],
  sourceIds: ["york-yp9c-install", "york-affinity-furnaces"],
  relatedContent: [
    "/brands/york/",
    "/brands/york/yp9c-seven-red-flashes/",
    "/how-to-document-hvac-fault-for-service/",
    "/heat-pump-vs-furnace/",
  ],
  glossaryTerms: ["control-board", "error-code", "service-manual"],
  keywords: [
    "york furnace 12 red flashes",
    "yp9c id plug",
    "york affinity twelve flashes",
    "york furnace flash code 12",
    "york furnace id plug not connected",
  ],
});
