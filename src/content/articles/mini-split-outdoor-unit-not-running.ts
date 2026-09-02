import { publish } from "./publish";

/**
 * The question behind this one is almost always "is it supposed to be running
 * right now?". The page answers that first, because an outdoor unit that is
 * correctly idle is the most common finding.
 */
export const miniSplitOutdoorUnitNotRunning = publish({
  title: "Mini-split outdoor unit not running: delay, demand, or fault",
  slug: "mini-split-outdoor-unit-not-running",
  path: "/mini-split-outdoor-unit-not-running/",
  description:
    "Check demand, mode, restart delay, defrost, and visible blockage before escalating an outdoor unit that appears inactive or cannot start.",
  articleType: "troubleshooting",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless outdoor units, fixed speed and inverter driven"],
  problemType: "outdoor-unit-not-running",
  directAnswer:
    "An outdoor mini-split unit can pause normally when demand is met, during restart protection, or during parts of defrost, but a persistent stop with unmet demand can indicate power, communication, fan, inverter, or compressor faults.",
  scopeNotice:
    "Inverter systems vary their output rather than switching on and off, so a quiet outdoor unit is not necessarily an idle one. Restart intervals, defrost behaviour, and minimum operating speeds differ by model, and the manual for your system defines what normal looks like.",
  symptoms: [
    "The indoor unit responds while the outdoor fan and compressor appear inactive.",
  ],
  causes: [
    "The thermostat may be satisfied, the system may be in Fan mode, or restart protection may still be active.",
    "Power, communication, outdoor fan, inverter, compressor, or safety protection faults may prevent operation.",
  ],
  diagnosticBranches: [
    {
      title: "Create a demand it cannot ignore, then wait",
      observation:
        "It is not clear whether the system has any reason to run, because the room may already be at the setpoint.",
      action:
        "Set Cool with a temperature well below the room, or Heat with one well above, and leave it for the restart protection interval plus a few minutes. An outdoor unit with nothing to do is behaving correctly, and this removes that explanation.",
    },
    {
      title: "The indoor unit is in Fan or Dry",
      observation:
        "Air is moving indoors and the handset shows a mode other than Heat or Cool.",
      action:
        "Change to a heating or cooling mode. Fan mode never calls for the outdoor unit at all, and Dry runs it very differently, so neither tells you anything about whether the outdoor unit can start.",
    },
    {
      title: "It is winter and the pause comes with steam",
      observation:
        "The outdoor fan has stopped, the unit is steaming or dripping, and indoor heating has paused with it.",
      action:
        "Leave it alone for several minutes. A stopped outdoor fan during heating is part of a normal defrost cycle, and interrupting it by cycling the power only makes the system start the process again.",
    },
    {
      title: "Demand is clear, the wait is over, and nothing happens",
      observation:
        "The mode is right, the setpoint is well past the room temperature, the protection interval has elapsed, and the outdoor unit is still silent.",
      action:
        "Look at the indoor display for a code and record it, then arrange service. At this point the ordinary explanations have been eliminated by observation rather than assumption.",
    },
  ],
  decisionTable: {
    caption: "Is the outdoor unit supposed to be running?",
    columns: ["Situation", "Expected outdoor behaviour", "What it means if it differs"],
    rows: [
      [
        "Room is already at the setpoint",
        "Idle or running at a very low output",
        "Nothing is wrong; change the setpoint if you want to test it",
      ],
      [
        "Switched off and straight back on",
        "Held off through the restart protection interval",
        "Only meaningful once that interval has genuinely passed",
      ],
      [
        "Heating in cold damp weather, fan stopped and steaming",
        "Paused for a defrost cycle lasting a few minutes",
        "A pause that runs far longer than the manual describes is worth reporting",
      ],
      [
        "Clear demand, delay elapsed, mode correct",
        "Running",
        "Silence here is a genuine fault and needs diagnosis",
      ],
    ],
  },
  sections: [
    {
      title: "Inverter systems are quiet on purpose",
      paragraphs: [
        "Older equipment ran flat out or not at all, so you always knew which it was. Inverter-driven systems instead vary compressor speed to match what the room needs, and at low demand they run slowly enough to be genuinely hard to hear from a few metres away.",
        "This produces a common false alarm. Someone checks the outdoor unit on a mild day, hears nothing, and concludes it has stopped, when in fact it is ticking over at low output and holding the room exactly where it was asked to. Putting a hand near the discharge, or making the demand unmistakable and watching for a change, resolves it.",
      ],
    },
    {
      title: "Three reasons a healthy unit stays still",
      paragraphs: [
        "Demand is the first. A satisfied room means nothing to do, and no fault will produce a more convincing silence. The second is restart protection, which holds the compressor off for several minutes after any interruption, so anyone who has just cycled the power is guaranteed to see an idle outdoor unit.",
        "The third is defrost, which only applies in heating and only in cold damp conditions. During it, the outdoor fan stops while the coil is warmed, so the unit sits there apparently dead, steaming, with the indoor side gone quiet too. All three of these are the system working, and between them they account for most of these calls.",
      ],
    },
    {
      title: "What not to do while investigating",
      paragraphs: [
        "The temptation with a stationary fan is to check whether it turns freely, and that is exactly the thing not to do. An inverter unit can start without warning after a delay, and a fan that appears dead may simply be waiting out an interval. Reaching into it is how people lose fingers.",
        "The same applies to opening the outdoor casing to look for something obvious. There is nothing safely diagnosable in there for a homeowner, and there are capacitors that hold a charge after the supply is removed. Clear loose debris from around the unit with the power off, look for a code on the indoor display, and stop there.",
      ],
    },
  ],
  figures: [
    {
      title: "Three legitimate reasons for an idle outdoor unit",
      description:
        "Before treating stillness as a fault, each of these has to be ruled out by observation rather than assumption.",
      nodes: [
        { label: "Satisfied demand", detail: "The room is already where it was asked to be" },
        { label: "Restart interval", detail: "Compressor held off after any interruption" },
        { label: "Defrost pause", detail: "Fan deliberately stopped during heating" },
        { label: "Genuine fault", detail: "What remains once the other three are excluded" },
      ],
    },
  ],
  safeChecks: [
    "Choose Heat or Cool, create a clear temperature demand, and wait through the manual's restart delay.",
    "Look for a display code and remove only loose external airflow obstructions with the unit off.",
  ],
  professionalEscalation: [
    "A tripping breaker, fault code, stopped fan under demand, or repeated protection needs qualified diagnosis.",
    "Do not remove panels, spin the fan by hand, or test capacitors and inverter electronics.",
  ],
  serviceHandoff:
    "Confirm the mode and setpoint you used, how long you waited, whether the outdoor fan ever turns, whether the indoor unit shows a code, and whether the outdoor unit has been running normally at other times of day.",
  faqs: [
    {
      question: "How can I tell if the outdoor unit is running at all?",
      answer:
        "Set a demand the system cannot ignore, then check for air movement at the discharge grille and a change in sound after the restart interval. Inverter units at low output are much quieter than people expect, which is why silence alone proves nothing.",
    },
    {
      question: "The outdoor fan stopped but the compressor is running. Is that normal?",
      answer:
        "During heating it may be a defrost cycle, in which the fan is stopped deliberately while the coil is warmed. If it happens in cooling, or the pause lasts far longer than the manual describes, report it.",
    },
    {
      question: "Can I spin the fan to get it going?",
      answer:
        "No. An inverter system can start after a delay with no warning, and the blade will not wait for your hand to be clear. There is also nothing to be learned from it that a technician cannot establish safely.",
    },
    {
      question: "Why does it run at night but not in the afternoon?",
      answer:
        "That pattern is worth recording rather than explaining away. It could be demand, or it could be a protection that only trips under peak load and high outdoor temperatures. Note the times and conditions and pass them on.",
    },
  ],
  sourceIds: [
    "fujitsu-troubleshooting",
    "trane-mini-split-compressor",
    "trane-mini-split-modulation",
  ],
  relatedContent: [
    "/troubleshooting/",
    "/mini-split-not-turning-on/",
    "/mini-split-not-cooling/",
  ],
  keywords: [
    "mini split outdoor unit not running",
    "condenser not turning on",
    "mini split compressor not starting",
    "outdoor fan not spinning",
    "mini split outdoor unit silent",
  ],
});
