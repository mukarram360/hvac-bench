import { publish } from "./publish";

/**
 * Most reports of short cycling on inverter equipment are descriptions of
 * modulation. The page gives the reader a way to measure what is actually
 * happening before deciding whether anything is wrong.
 */
export const miniSplitShortCycling = publish({
  title: "Mini-split short cycling: settings, airflow, and service clues",
  slug: "mini-split-short-cycling",
  path: "/mini-split-short-cycling/",
  description:
    "Determine whether inverter modulation is being mistaken for short cycling, then check settings, airflow, room load, and conditions that need service.",
  articleType: "troubleshooting",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless systems, inverter driven and fixed speed"],
  problemType: "short-cycling",
  directAnswer:
    "Variable-speed mini-splits normally modulate and may pause as demand changes; repeated hard starts and stops without maintaining temperature can point to settings, airflow, sizing, sensor location, or equipment faults.",
  scopeNotice:
    "What counts as normal cycling depends on whether the equipment is fixed speed or inverter driven, and on how the system was sized for the space. The cited material describes the general behaviour of modulating equipment; sizing and commissioning decisions belong to the installation rather than to the model.",
  symptoms: [
    "The compressor or complete system starts and stops frequently while comfort remains unstable.",
  ],
  causes: [
    "Small load changes, thermostat satisfaction, or normal inverter modulation can look like cycling.",
    "Dirty filters, blocked airflow, misplaced sensing, sizing issues, or electrical and refrigeration faults can cause abnormal cycling.",
  ],
  diagnosticBranches: [
    {
      title: "Measure it before diagnosing it",
      observation:
        "The impression is that the system keeps starting and stopping, but nobody has actually timed it.",
      action:
        "Log the clock time each time the outdoor unit starts and stops for a couple of hours, with the outdoor temperature and the setpoint. An impression cannot be diagnosed; a list of run and off times can.",
    },
    {
      title: "The room reaches temperature and holds it",
      observation:
        "The system cycles, but the room is comfortable and stable throughout.",
      action:
        "This is likely normal operation on a light load rather than a fault. An inverter system on a mild day may drop to minimum output and still be producing more than the room needs, so it pauses.",
    },
    {
      title: "It cycles and comfort never settles",
      observation:
        "Temperature swings noticeably, the system starts and stops repeatedly, and the room is either overshooting or never arriving.",
      action:
        "Check what the equipment is sensing. A head in direct sun, above a lamp, or near a doorway is reading something other than the room, and the control is responding correctly to a wrong input.",
    },
    {
      title: "Cycling comes with hard starts or a tripping breaker",
      observation:
        "Each start is accompanied by a heavy noise, the lights dim, or the breaker trips during the pattern.",
      action:
        "Stop using the system and arrange service. This is no longer a comfort question; something electrical is struggling, and continued cycling is hard on both the equipment and the supply.",
    },
  ],
  decisionTable: {
    caption: "Modulation and short cycling described side by side",
    columns: ["What you observe", "Consistent with modulation", "Consistent with a real problem"],
    rows: [
      [
        "Length of a run period",
        "Long runs at low output, sometimes continuous",
        "Repeated short bursts of a few minutes each",
      ],
      [
        "Room temperature",
        "Steady, close to the setpoint",
        "Swinging above and below, never settling",
      ],
      [
        "Sound at start",
        "A gradual rise as output increases",
        "An abrupt heavy start each time",
      ],
      [
        "When it happens",
        "Mild weather, when the room needs very little",
        "Any conditions, including when the system should be working hard",
      ],
    ],
  },
  sections: [
    {
      title: "Modulation is not cycling",
      paragraphs: [
        "Fixed-speed equipment has one output, so it controls temperature by running and stopping. Short cycling on that kind of system means something is cutting it off early, and it is a genuine fault worth chasing. Inverter equipment works differently: it varies compressor speed to match the room, and its ideal behaviour is a long, quiet run at low output rather than a series of full-power bursts.",
        "The complication is that an inverter system has a minimum output too. On a mild day in a small room, even that minimum can be more than the space needs, so the system delivers it, satisfies the room, pauses, and starts again. That looks like cycling and is normal for the conditions.",
      ],
    },
    {
      title: "What the equipment thinks the room temperature is",
      paragraphs: [
        "Most ductless heads sense temperature at the indoor unit, high on a wall. That location is convenient rather than representative, and it is easily fooled. Afternoon sun on the unit, a lamp or television below it, a heat source on the other side of the wall, or a draught from a stairwell all produce a reading that has little to do with where people are sitting.",
        "The result is a system responding correctly to bad information. It satisfies early because it thinks the room is warm, then the reading falls back and it starts again, producing exactly the pattern people describe as short cycling. Some systems can sense at the handset instead, and where that option exists it is often the single most effective change available.",
      ],
    },
    {
      title: "Sizing shows up here first",
      paragraphs: [
        "An oversized head is the classic cause of a system that cannot settle. It has plenty of capacity, reaches the setpoint quickly, and then has nothing to do, so it stops. Comfort suffers because temperature swings, humidity is poorly controlled in cooling, and the equipment does more starting and stopping than it was designed for.",
        "This is worth naming because it is not a repair. If a system has behaved this way since installation, in a room that has not changed, no part is faulty and no amount of servicing will alter it. That is a conversation about equipment selection with whoever specified it, and it is a very different discussion from a fault that developed in a system which used to be fine.",
      ],
    },
  ],
  figures: [
    {
      title: "The control loop that decides when to stop",
      description:
        "Cycling is the output of this loop. A bad input at the start of it produces unstable behaviour with nothing mechanically wrong.",
      nodes: [
        { label: "Sensing point", detail: "Usually high on the wall at the indoor unit" },
        { label: "Measured value", detail: "What the control believes the room is" },
        { label: "Setpoint comparison", detail: "Distance from the temperature you asked for" },
        { label: "Output decision", detail: "Modulate, continue, or stop" },
      ],
    },
  ],
  safeChecks: [
    "Hold one steady mode and setpoint, disable short timers, clean the filter, and clear indoor airflow obstructions.",
    "Log run and off times, outdoor temperature, room temperature, and any displayed code for the technician.",
  ],
  professionalEscalation: [
    "Frequent breaker trips, hard starts, ice, fault codes, or cycling that cannot hold temperature requires service.",
    "Sizing, sensor, control, electrical, and refrigerant diagnosis should use model data and qualified tools.",
  ],
  serviceHandoff:
    "Provide the log of start and stop times with outdoor temperatures, say whether the room actually holds temperature during the pattern, describe where the indoor unit is mounted and what is near it, and state whether the behaviour is new or has always been the case.",
  faqs: [
    {
      question: "How often should a mini split cycle?",
      answer:
        "An inverter system ideally runs continuously at low output rather than cycling much at all. Frequent short bursts with unstable temperature are worth investigating, but occasional pauses on a mild day, with the room comfortable, are normal.",
    },
    {
      question: "Is short cycling damaging the compressor?",
      answer:
        "Repeated hard starts are harder on equipment than steady running, which is one reason inverter systems are designed to modulate instead. If each start is heavy and abrupt, treat it as worth diagnosing rather than tolerating.",
    },
    {
      question: "Could my mini split be too big for the room?",
      answer:
        "It is a common cause, particularly where a system has behaved this way since installation. An oversized head satisfies the room quickly and then stops, which produces temperature swings and poor humidity control in cooling.",
    },
    {
      question: "Why does it cycle in mild weather but run steadily in a heatwave?",
      answer:
        "Because in mild weather the room needs less than the system can deliver even at minimum output, so it satisfies and pauses. In a heatwave the demand is high enough to keep it running continuously, which is the behaviour it prefers.",
    },
  ],
  sourceIds: [
    "trane-mini-split-modulation",
    "trane-mini-split-sizing",
    "fujitsu-troubleshooting",
  ],
  relatedContent: [
    "/troubleshooting/",
    "/mini-split-not-cooling/",
    "/mini-split-filter-cleaning/",
  ],
  keywords: [
    "mini split short cycling",
    "mini split turns on and off",
    "inverter compressor modulation",
    "mini split cycling too often",
    "mini split oversized room",
  ],
});
