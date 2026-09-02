import { publish } from "./publish";

/** Checks documented idle states before treating outdoor stillness as a fault. */
export const miniSplitOutdoorUnitNotRunning = publish({
  title: "Outdoor unit not running: delay, demand, or fault",
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
      title: "Create a clear demand, then wait",
      observation:
        "It is not clear whether the system has any reason to run, because the room may already be at the setpoint.",
      action:
        "Set Cool below the room temperature, or Heat above it, and wait through the restart protection interval in the model manual. This helps distinguish an idle system with little demand from one that does not respond to a clear call.",
    },
    {
      title: "The indoor unit is in Fan or Dry",
      observation:
        "Air is moving indoors and the handset shows a mode other than Heat or Cool.",
      action:
        "Change to a heating or cooling mode. On the documented systems, Fan mode does not call for compressor operation and Dry uses different control logic, so neither is a reliable test of normal heating or cooling response.",
    },
    {
      title: "It is winter and the pause comes with steam",
      observation:
        "The outdoor fan has stopped, the unit is steaming or dripping, and indoor heating has paused with it.",
      action:
        "Do not interrupt it. Compare the fan stop, steam or water, indoor pause, and recovery with the defrost sequence in the exact operating manual.",
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
        "Idle or running at low output",
        "This may be normal; create a clear demand if you want to test response",
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
        "Persistent non-response here needs model-specific diagnosis",
      ],
    ],
  },
  sections: [
    {
      title: "Inverter systems are quiet on purpose",
      paragraphs: [
        "Fixed-speed and inverter-driven systems can behave differently near the setpoint. Manufacturer guidance notes that inverter equipment may continue at reduced capacity rather than cycling fully off.",
        "Low-output operation can be difficult to judge from sound alone. Create a clear Heat or Cool demand, wait through the documented delay, and observe air movement from outside the discharge grille without reaching into it. If the room already sits close to the setpoint, move the setpoint several degrees further before you judge the result, because a small difference gives the system almost nothing to respond to.",
      ],
    },
    {
      title: "Three documented reasons an outdoor unit may stay still",
      paragraphs: [
        "Low demand is one explanation for an idle outdoor unit. Restart protection is another: documented systems may hold compressor operation after an interruption, so checking immediately after cycling power can give a misleading result.",
        "Defrost is a third model-dependent explanation in heating. Some documented systems stop the outdoor fan and reduce indoor airflow while clearing frost. Demand, delay, and defrost should be checked against the model manual before treating silence as a failed component.",
      ],
    },
    {
      title: "What not to do while investigating",
      paragraphs: [
        "Do not reach through the grille or try to turn a stationary fan. The unit may start after a delay, and a stopped fan can also occur during model-dependent control states. Its condition cannot be established safely by hand.",
        "Do not open the outdoor casing. Manufacturer troubleshooting keeps internal electrical, inverter, fan, and compressor diagnosis on the technician side. Clear only loose external debris with the unit off, record any display code, and stop there.",
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
        "Set a clear Heat or Cool demand, wait through the model's restart interval, then observe air movement from outside the discharge grille and listen for a change. Inverter operation can continue at reduced capacity, so sound alone does not establish whether the unit is off.",
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
