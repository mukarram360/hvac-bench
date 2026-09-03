import { publish } from "./publish";

/**
 * A code that exists on three outdoor models and nowhere else is the clearest
 * possible demonstration of why a brand-wide code list is dangerous. That
 * scope note in the manual is the reason for the page, and the model list is
 * the value layer.
 */
export const boschClimate5000Pc30Pc31 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Bosch PC 30 and PC 31: codes that exist on three outdoor models",
  slug: "climate-5000-pc30-pc31",
  path: "/brands/bosch/climate-5000-pc30-pc31/",
  description:
    "The Climate 5000 multi-zone service manual restricts high and low pressure protection to three outdoor units. On the rest of the range the codes cannot appear.",
  articleType: "error-code",
  brand: "bosch",
  equipmentType: "multi-zone",
  productFamily: "Climate 5000 Generation 3 R-454B multi-zone outdoor units",
  models: ["M4OB-36HFN8-Q", "M5OD-42HFN8-Q", "M5OE-42HFN8-Q"],
  errorCode: "PC 30 / PC 31",
  problemType: "pressure-protection",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "PC 30 is high pressure protection and PC 31 is low pressure protection, and the service manual restricts both to three named outdoor units. An outdoor unit outside that list has no pressure switches to report on and will show a different code instead.",
  scopeNotice:
    "The code table here is from the Bosch Climate 5000 Generation 3 R-454B multi-zone service manual dated May 2025, which covers the outdoor units. Indoor codes are published in the indoor service manual, and earlier Climate 5000 generations on a different refrigerant platform have their own documentation.",
  layout: ["decisionTable", "figures", "branches", "sections", "serviceHandoff"],
  symptoms: [
    "The outdoor display or the indoor unit is showing PC 30 or PC 31 and the system has stopped.",
    "A code lookup returned a pressure protection meaning that does not match the outdoor unit installed.",
    "The system stops repeatedly in hot weather, or in cold weather, without any other symptom.",
  ],
  causes: [
    "Bosch publishes PC 30 and PC 31 only for the three multi-zone outdoor units named in the manual.",
    "A pressure protection stops the compressor at a limit rather than reporting a component that has failed.",
  ],
  decisionTable: {
    caption: "Which outdoor protections apply to which units in this manual",
    columns: ["Code", "What Bosch assigns it to", "Which models it is published for"],
    rows: [
      [
        "PC 30",
        "High pressure protection",
        "M4OB-36HFN8-Q, M5OD-42HFN8-Q, and M5OE-42HFN8-Q only",
      ],
      [
        "PC 31",
        "Low pressure protection",
        "The same three outdoor units",
      ],
      [
        "PC 0A",
        "High temperature protection of the condenser",
        "Published without a model restriction in the same table",
      ],
      [
        "PC 0L",
        "Low ambient temperature protection",
        "Published without a model restriction in the same table",
      ],
      [
        "PC 06",
        "Temperature protection of compressor discharge",
        "Published without a model restriction in the same table",
      ],
    ],
  },
  figures: [
    {
      title: "Two ways a system protects the same circuit",
      description:
        "Pressure switches and temperature protections both stop the compressor, and they are not interchangeable. Knowing which your outdoor unit has decides which codes it can produce at all.",
      nodes: [
        { label: "Pressure switch", detail: "Measures the refrigerant pressure directly" },
        { label: "PC 30 and PC 31", detail: "What a switch reports, on the three listed models" },
        { label: "Temperature sensors", detail: "Infer conditions from coil and discharge temperature" },
        { label: "PC 0A and PC 06", detail: "What those sensors report, across the range" },
      ],
    },
  ],
  diagnosticBranches: [
    {
      title: "PC 30 has appeared in hot weather",
      observation:
        "The system stops during the hottest part of the day and runs at other times.",
      action:
        "Look at what is around the outdoor unit before anything else. High pressure builds when heat cannot leave the condensing side, so clearance, a clean coil face, and unobstructed discharge air are the conditions worth putting right first.",
    },
    {
      title: "PC 31 has appeared in cold weather",
      observation:
        "The code shows during cold conditions, or after a long period of the system running at low output.",
      action:
        "Record the outdoor temperature and how long it had been running. Low pressure protection has several possible explanations and the ambient conditions are the piece a technician cannot recover afterwards.",
    },
    {
      title: "The outdoor unit is not one of the three named models",
      observation:
        "The model on the outdoor plate does not appear in the list, and a lookup elsewhere returned PC 30 or PC 31 as a pressure protection.",
      action:
        "Recheck the characters on the display against the outdoor table for your model. If that equipment has no pressure switches, verify the transcription before treating a code that resembles PC 30 as pressure protection.",
    },
  ],
  sections: [
    {
      title: "Why a code can exist on one model and not another",
      paragraphs: [
        "A control reports what it can measure. Pressure switches are fitted to some outdoor units and not to others, and a system without them has nothing to report a pressure protection from. Bosch reflects that by naming the three models these two codes belong to, in the middle of a table that leaves the rest unrestricted.",
        "That parenthetical is easy to skim past and is the most useful thing on the page for anybody troubleshooting. It means a code list read without checking the model can hand you an answer for equipment you do not own.",
        "It also explains a common frustration. Somebody searching PC 31 finds low pressure protection, concludes their system is short of refrigerant, and pays for a leak search on equipment that has no low pressure switch. The model plate is what prevents that.",
      ],
    },
    {
      title: "What the temperature protections cover instead",
      paragraphs: [
        "The same table carries protections that apply across the range. PC 0A is high temperature protection of the condenser, PC 06 is temperature protection of compressor discharge, and PC 02 is top temperature protection of the compressor. PC 0L is low ambient temperature protection.",
        "Those are inferred from sensors rather than measured at a switch, so they respond to conditions that would also raise or lower pressure without naming pressure. On an outdoor unit without pressure switches, they are what the system stops on when a pressure-related condition develops.",
        "The practical consequence is that the diagnosis is similar even when the code is not. Restricted heat rejection produces a high temperature protection on one model and a high pressure protection on another, and the physical thing to look at is the same in both cases.",
      ],
    },
    {
      title: "Reading the code correctly matters more here than usual",
      paragraphs: [
        "This manual uses two prefixes with different meanings. EC codes cover sensors, EEPROM, fan motors, and fan speed, while PC codes cover protections and drive conditions. A misread prefix moves the fault between two entirely different families.",
        "It also uses characters that are easy to confuse in a two-character field. PC 0A, PC 0F, and PC 0L differ by one letter, and PC 30 and PC 31 differ by one digit while sitting at opposite ends of the same circuit. Photograph the display.",
      ],
    },
  ],
  safeChecks: [
    "Record the full outdoor model number from the data plate and check it against the three models these codes are published for.",
    "Photograph the code exactly, since the prefix and the final character both change the meaning.",
    "Note the outdoor temperature, the mode, and how long the system had been running when it stopped.",
  ],
  professionalEscalation: [
    "Pressure measurement requires gauges on service ports and a certified technician, and this refrigerant platform has its own handling requirements.",
    "Do not restart repeatedly against a protection code, since each attempt returns the system to the condition that stopped it.",
  ],
  serviceHandoff:
    "Give the technician the outdoor model number first, then the code, the mode, the outdoor conditions, and the run time before it stopped. On this range the model decides whether the code you saw is even in the table for your equipment.",
  resetGuidance:
    "Clearing an obstruction and trying again is a reasonable single test. A protection that returns without any change to the conditions is reporting the same limit, and further restarts do not move it.",
  faqs: [
    {
      question: "Does PC 31 mean my system is low on refrigerant?",
      answer:
        "It is low pressure protection on the three outdoor units Bosch publishes it for, and low pressure has more than one explanation. It is also not available on other models in the range, so the first thing to establish is whether your outdoor unit is one of the three.",
    },
    {
      question: "Why does my outdoor unit not have these codes?",
      answer:
        "Because the manual restricts PC 30 and PC 31 to M4OB-36HFN8-Q, M5OD-42HFN8-Q, and M5OE-42HFN8-Q. Other outdoor units in the range report conditions through temperature protections instead.",
    },
    {
      question: "What is the difference between PC 30 and PC 0A?",
      answer:
        "PC 30 is high pressure protection, published for three models. PC 0A is high temperature protection of the condenser and is published without that restriction. Both can follow restricted heat rejection, but they are measured differently.",
    },
    {
      question: "Where do I find the indoor codes?",
      answer:
        "This manual covers the multi-zone outdoor units and states directly that indoor error codes are in the indoor service manual. A code that does not appear in the outdoor table may be an indoor one.",
    },
  ],
  sourceIds: ["bosch-climate5000-service", "bosch-ductless-manuals"],
  relatedContent: [
    "/brands/bosch/",
    "/brands/bosch/climate-5000-ec07-error/",
    "/how-to-clean-around-outdoor-unit/",
    "/single-zone-vs-multi-zone-mini-split/",
  ],
  glossaryTerms: ["protection-code", "condenser-coil", "refrigerant-charge"],
  keywords: [
    "bosch pc 30 error",
    "bosch pc 31 low pressure",
    "climate 5000 pressure protection",
    "bosch multi zone outdoor codes",
    "m4ob-36hfn8-q error code",
  ],
});
