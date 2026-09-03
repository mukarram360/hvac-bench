import { publish } from "./publish";

/**
 * Della prints seven codes for seven measurement points, and every one of them
 * is on the outdoor unit. The letter after the E is doing the work, which is
 * unlike the numeric suffixes used by the comparison codes, and it is the reason
 * an owner can tell a technician where the fault sits before the visit.
 */
export const dellaOutdoorSensorCodes = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Della outdoor sensor codes: the letter after E names the sensor",
  slug: "outdoor-sensor-error-codes",
  path: "/brands/della/outdoor-sensor-error-codes/",
  description:
    "E3, E7, E8, EH, Ej, En, and Ey each name a different outdoor measurement point on documented Della series. Seven codes, seven sensors, one place to look.",
  articleType: "error-code",
  brand: "della",
  equipmentType: "ductless-mini-split",
  productFamily: "Econo IF, Vario TL, and Optima TP single zone, and the multi-zone systems sharing the table",
  models: ["Econo IF Series", "Vario TL Series", "Optima TP Series", "Della multi-zone systems using the same table"],
  errorCode: "E3 / E7 / E8 / EH / Ej / En / Ey",
  problemType: "outdoor-sensor-fault",
  symptomFamily: "sensor-fault",
  directAnswer:
    "All seven codes report a failed outdoor temperature sensor, and the character after the E identifies which one. None of them is a compressor fault, a refrigerant fault, or an indoor fault.",
  scopeNotice:
    "This table is published for the Della Econo IF, Vario TL, and Optima TP single zone series, and the multi-zone systems that share it. The Motto JA and Umbra JPB series use a different set entirely, where outdoor sensor faults appear as F codes, so the series has to be established before any of this applies.",
  layout: ["decisionTable", "figures", "branches", "sections", "serviceHandoff"],
  symptoms: [
    "The indoor display shows a code beginning with E followed by a letter rather than a digit.",
    "The system runs briefly and stops, or refuses to start, with one of these codes present.",
    "Heating or cooling has become unreliable and a code appears intermittently.",
  ],
  causes: [
    "Della assigns each of these codes to a specific outdoor temperature sensor rather than to a general outdoor fault.",
    "A sensor reading open or short is what the control detects, which can follow a connector, the sensing element, or the wiring between them.",
  ],
  decisionTable: {
    caption: "Which sensor each Della code names",
    columns: ["Code", "What Della assigns it to", "Where that measurement is taken"],
    rows: [
      ["E3", "Outdoor unit coil temperature sensor failure", "On the outdoor coil, listed for the Optima series"],
      ["E7", "Outdoor unit ambient temperature sensor failure", "The outdoor air the unit is drawing across the coil"],
      ["E8", "Outdoor unit discharge temperature sensor failure", "At the compressor discharge, the hottest point in the circuit"],
      ["EH", "Outdoor unit suction temperature sensor failure", "On the return to the compressor"],
      ["Ej", "Outdoor unit central coil temperature sensor failure", "Part way through the outdoor coil"],
      ["En", "Outdoor unit gas pipe temperature sensor failure", "On the larger of the two connecting pipes"],
      ["Ey", "Outdoor unit liquid pipe temperature sensor failure", "On the smaller of the two connecting pipes"],
    ],
  },
  figures: [
    {
      title: "Why one circuit needs this many thermistors",
      description:
        "An inverter system decides compressor speed and valve position from temperature differences around the circuit. Each sensor in the table is one of those measurement points, which is why losing any single one can stop the control making a decision it trusts.",
      nodes: [
        { label: "Outdoor ambient", detail: "The condition the whole control strategy is set against" },
        { label: "Coil and central coil", detail: "Two points across the outdoor heat exchanger" },
        { label: "Discharge and suction", detail: "Either side of the compressor" },
        { label: "Gas and liquid pipe", detail: "The two connections running to the indoor unit" },
      ],
    },
  ],
  diagnosticBranches: [
    {
      title: "The code appeared after work at the outdoor unit",
      observation:
        "A service visit, an installation, a pipe alteration, or a board replacement happened shortly before the code arrived.",
      action:
        "Say what was done and when. Every sensor in this table lands on a connector inside the outdoor unit, and a connector disturbed during other work is the first thing a technician can rule in or out.",
    },
    {
      title: "The code is intermittent and follows the weather",
      observation:
        "It appears on cold mornings or during heavy rain and clears later without anybody doing anything.",
      action:
        "Record the conditions each time it appears. A sensor circuit that reads open when it is cold or wet and recovers points at a joint or a chafed lead rather than at a failed element, and that pattern is something a technician cannot see on a dry afternoon.",
    },
    {
      title: "The code is constant and the system will not run",
      observation:
        "The same code is present every time the system is switched on, with no intermittent behaviour.",
      action:
        "Arrange service and leave the system off. A permanently open or shorted sensor circuit is straightforward for a technician to measure, and nothing an owner can reach changes it.",
    },
  ],
  sections: [
    {
      title: "The character after the E is the whole message",
      paragraphs: [
        "Della's table does something distinctive for this family: the second character is a letter for four of the seven codes, and each letter selects a different sensor. EH is the suction sensor, Ej the central coil, En the gas pipe, and Ey the liquid pipe.",
        "That makes these codes unusually easy to transcribe wrongly. A lower case j read as a capital, a y read as a v, or an H read as a 4 all move the fault to a different part of the outdoor unit. Photograph the display rather than writing the characters down from memory.",
        "It also makes them specific once read correctly. A code that names the liquid pipe sensor gives the technician a defined sensor circuit to test instead of identifying only a broad outdoor-unit category.",
      ],
    },
    {
      title: "What a sensor code rules out",
      paragraphs: [
        "None of these codes says anything about refrigerant quantity, compressor health, board health, or the indoor unit. Della publishes separate codes for those: E0 for indoor to outdoor communication, E6 for the indoor fan motor, E9 for inverter or compressor drive control, P1 for voltage, and Hd for refrigerant leak protection.",
        "Keeping that separation matters when a quote arrives. A sensor fault is a small part on a connector. If a compressor or a board is being proposed on the strength of a code from this table, the code has not asked for it.",
      ],
    },
    {
      title: "Why an unreadable sensor stops the system",
      paragraphs: [
        "An inverter control does not run at a fixed output. It sets compressor speed and expansion valve position from the differences between these measurement points, and a missing input removes part of the picture it uses to decide.",
        "Rather than run blind, the control stops and reports which reading it lost. That is why a system with a healthy compressor can refuse to operate on a sensor code, and why the repair can be smaller than the symptom suggests.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the display so the exact character after the E is preserved, since several of them are easy to misread.",
    "Note whether the code is constant or intermittent, and what the weather was doing when it appeared.",
    "Record any work carried out at the outdoor unit since the system last ran normally.",
  ],
  professionalEscalation: [
    "Sensor circuits, connectors, and their resistance measurements sit inside the outdoor electrical compartment and are technician work with the supply isolated.",
    "Question any proposal to replace a compressor or a control board on the strength of a code from this sensor table.",
  ],
  serviceHandoff:
    "Give the technician the exact code characters, the Della series from the model plate, whether the code is constant or comes and goes, and the weather when it last appeared. The series decides which table applies and the pattern decides where in the circuit to start.",
  resetGuidance:
    "One restart establishes whether the reading recovers. A code that returns immediately is reporting a circuit the control still cannot read, and further cycles remove the timing record rather than the fault.",
  faqs: [
    {
      question: "Is Ey a refrigerant fault?",
      answer:
        "No. Della assigns Ey to the outdoor liquid pipe temperature sensor failing. It names a measurement point on the smaller connecting pipe, not the amount of refrigerant in the system, which Della reports separately.",
    },
    {
      question: "Do these codes appear on every Della system?",
      answer:
        "No. This table belongs to the Econo IF, Vario TL, and Optima TP series and the multi-zone systems that share it. The Motto JA and Umbra JPB series publish their own set, where outdoor sensor faults appear as F codes instead.",
    },
    {
      question: "Why does one failed sensor stop the whole system?",
      answer:
        "An inverter control sets compressor speed and valve position from the differences between these measurements. Losing one removes part of what it decides from, so it stops and reports the missing reading rather than running without it.",
    },
    {
      question: "Can I check an outdoor sensor myself?",
      answer:
        "No. Every sensor in this table terminates inside the outdoor electrical compartment, which needs the supply isolated and a meter used against manufacturer resistance values. Recording the exact code is the useful thing an owner can contribute.",
    },
  ],
  sourceIds: ["della-code-guide", "della-manual-support"],
  relatedContent: [
    "/brands/della/",
    "/brands/della/e5-error-code-by-series/",
    "/how-to-find-mini-split-model-number/",
    "/mini-split-not-cooling/",
  ],
  glossaryTerms: ["thermistor", "sensor-fault", "error-code"],
  keywords: [
    "della e7 error code",
    "della eh error code",
    "della ey error code",
    "della outdoor sensor failure",
    "della mini split sensor codes",
  ],
});
