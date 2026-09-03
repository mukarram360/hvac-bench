import { publish } from "./publish";

/**
 * The letter is the only part of a Daikin code a reader can act on before
 * finding the right table, and it is the part nobody explains. This page
 * exists to answer one question completely: which box reported the fault. It
 * deliberately does not restate any individual code meaning, because the two
 * Daikin code pages on this site already carry those with their model scope.
 */
export const daikinCodeLetterDivisions = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Daikin malfunction codes: what the first letter identifies",
  slug: "malfunction-code-letters",
  path: "/brands/daikin/malfunction-code-letters/",
  description:
    "Daikin groups malfunction codes by division letter. A and C sit with the indoor unit, E to P with the outdoor unit, and U with the system between them.",
  articleType: "guide",
  brand: "daikin",
  equipmentType: "ductless-mini-split",
  productFamily: "Room air conditioner, SkyAir, VRV, packaged, and heat reclaim ventilator ranges in SM-TS3",
  models: [
    "Room air conditioner ranges covered by SM-TS3",
    "SkyAir ranges covered by SM-TS3",
    "VRV ranges covered by SM-TS3",
    "Heat reclaim ventilators covered by SM-TS3",
  ],
  problemType: "code-taxonomy",
  symptomFamily: "communication-fault",
  directAnswer:
    "The letter is a division, not a severity. Daikin files A and C codes under the indoor unit, E, F, H, J, L, and P codes under the outdoor unit, U codes under the system that links them, and M codes under optional controllers.",
  scopeNotice:
    "The divisions here come from the Daikin After Sales Service chart SM-TS3, which covers room air conditioners, SkyAir, VRV, packaged equipment, and heat reclaim ventilators. Chillers use a chart of their own in the same document, and knowing the division never replaces reading the code meaning for your exact model.",
  layout: ["decisionTable", "figures", "sections"],
  symptoms: [
    "A controller is showing a two-character code and the manual for that exact model is not to hand.",
    "A quotation names a code and you want to know which half of the system it came from.",
  ],
  causes: [
    "Daikin publishes code meanings per equipment range, so the same two characters can be documented differently between families.",
    "The division letter is assigned by which board detected the condition, which is not always where the underlying problem sits.",
  ],
  decisionTable: {
    caption: "Division letters in the Daikin SM-TS3 chart",
    columns: ["Letter", "Division", "Examples of what falls in it"],
    rows: [
      ["A codes", "Indoor unit", "Indoor PCB, freezing protection, electronic expansion valve, drain level"],
      ["C codes", "Indoor unit", "Liquid and gas pipe thermistors, suction air thermistor, controller room sensor"],
      ["E codes", "Outdoor unit", "Outdoor PCB, high and low pressure switch actuation, compressor motor"],
      ["F codes", "Outdoor unit", "Discharge pipe temperature, high pressure actuation, oil conditions"],
      ["H codes", "Outdoor unit", "Compressor sensor system, power supply sensor, position detection sensor"],
      ["J codes", "Outdoor unit", "Pressure sensors, current sensor, refrigerant circuit thermistors"],
      ["L codes", "Outdoor unit", "Inverter system, radiation fin temperature, startup and overcurrent conditions"],
      ["P codes", "Outdoor unit", "Refrigerant amount, power voltage imbalance, automatic charge operation"],
      ["U codes", "System", "Refrigerant shortage, reverse or open phase, transmission between units"],
      ["M codes", "Controllers", "Transmission between optional controllers and centralized control"],
    ],
  },
  figures: [
    {
      title: "What the two characters are each doing",
      description:
        "A Daikin code carries a division in the first character and a detail code in the second. The chart is read as a grid, so the letter narrows the search to one block of the table before the digit picks the row.",
      nodes: [
        { label: "First character", detail: "Division: indoor, outdoor, system, controllers" },
        { label: "Second character", detail: "Detail code, running 0 to 9 and then A, C, E, F, H, J" },
        { label: "Equipment range", detail: "Decides which published table the pair is read against" },
      ],
    },
  ],
  sections: [
    {
      title: "Why the division is worth knowing before the meaning",
      paragraphs: [
        "Daikin publishes code meanings by equipment range, and a reader who searches the two characters alone will find several answers that disagree. The division letter is stable across the ranges the chart covers, so it is the first thing you can trust. Knowing that a code sits with the outdoor unit tells you where the diagnosis will happen and what a technician will need access to, before anyone has established what the code means.",
        "It also filters the search. If a code begins with U, no amount of work on the indoor board addresses it, because the U division covers the system: refrigerant quantity, supply phase, and the transmission that runs between the boxes. That is why U4, the transmission code, is a wiring and communication question rather than a component replacement.",
      ],
    },
    {
      title: "The letter says who reported it, not what failed",
      paragraphs: [
        "A division tells you which board raised its hand. It does not promise the cause lives in the same cabinet. An A division freezing-protection code is raised by the indoor unit, and a restricted filter, a failed indoor fan, and a low refrigerant charge in the outdoor circuit can all end with the indoor coil too cold. The letter is the reporter's address, not the culprit's.",
        "The same trap runs the other way. An outdoor division code can be raised by something the outdoor unit simply measured, such as a pressure switch closing because indoor airflow stopped. Treating the letter as a parts list is how a board gets replaced on equipment whose actual problem was a blocked return.",
      ],
    },
    {
      title: "How the second character works",
      paragraphs: [
        "The chart is a grid. Divisions run down the left, and detail codes run across the top in the sequence 0 to 9 followed by A, C, E, F, H, and J. Two codes sharing a letter are neighbours in one block; two codes sharing a digit have nothing in common, because the digit only has meaning inside its division.",
        "This is why a code should never be typed into a search bar without its letter, and why reading a code aloud over the phone needs both characters confirmed. A misheard letter moves the fault from one cabinet to another.",
      ],
    },
  ],
  faqs: [
    {
      question: "Does the letter tell me how serious the fault is?",
      answer:
        "No. The divisions are structural rather than graded, so an A code is not milder than an L code. Severity comes from what the specific code means on your range and whether the system has locked out or is still running with a limit applied.",
    },
    {
      question: "Why do two Daikin systems show the same code for different faults?",
      answer:
        "Because meanings are published per equipment range. The divisions in this chart hold across room air conditioners, SkyAir, VRV, packaged equipment, and heat reclaim ventilators, but the detailed row a code lands on belongs to the documentation for that range.",
    },
    {
      question: "What does a U code mean in practice?",
      answer:
        "It puts the fault in the system rather than in one box. That division holds refrigerant shortage, reverse and open phase supply conditions, and transmission between indoor units, outdoor units, remote controllers, and centralized control equipment.",
    },
    {
      question: "Where do chillers fit?",
      answer:
        "They are charted separately in the same Daikin document, with their own division rows. Do not carry a division from the room air conditioner and applied product chart onto chiller equipment.",
    },
  ],
  sourceIds: ["daikin-sm-ts3-codes", "daikin-error-code-service"],
  relatedContent: [
    "/brands/daikin/",
    "/brands/daikin/u4-error-code/",
    "/brands/daikin/a5-error-code/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  glossaryTerms: ["error-code", "protection-code", "service-manual"],
  keywords: [
    "daikin error code letters",
    "daikin malfunction code divisions",
    "daikin u code meaning",
    "daikin a code indoor unit",
    "daikin code first character",
  ],
});
