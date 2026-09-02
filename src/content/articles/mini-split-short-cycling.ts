import { publish } from "./publish";

/** Makes the reader distinguish measured starts and stops from modulation. */
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
        "This can be consistent with documented low-load modulation rather than a fault. Whether pausing is expected depends on the model's control description and operating limits.",
    },
    {
      title: "It cycles and comfort never settles",
      observation:
        "Temperature swings noticeably, the system starts and stops repeatedly, and the room is either overshooting or never arriving.",
      action:
        "Note whether the indoor head or documented room sensor is affected by direct sun, a nearby heat source, or a doorway. Those conditions can make a local reading differ from the occupied area, but they do not establish a control fault.",
    },
    {
      title: "Cycling comes with hard starts or a tripping breaker",
      observation:
        "Each start is accompanied by a heavy noise, the lights dim, or the breaker trips during the pattern.",
      action:
        "Stop using the system and arrange service. Breaker operation, dimming lights, or heavy starting noise requires electrical diagnosis rather than continued operation.",
    },
  ],
  decisionTable: {
    caption: "Modulation and short cycling described side by side",
    columns: ["What you observe", "Consistent with modulation", "Consistent with a real problem"],
    rows: [
      [
        "Length of a run period",
        "Long runs at low output, sometimes continuous",
        "Repeated brief runs instead of sustained or modulated operation",
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
        "Fixed-speed equipment controls temperature by running and stopping, while inverter equipment can reduce compressor output as demand falls. Frequent starts with poor comfort deserve investigation, but low, quiet operation on an inverter system should not be counted as an off cycle without observing the unit.",
        "Manufacturer guidance describes inverter systems reducing output as demand falls. Any minimum output and resulting stop-start behaviour are model-specific, so compare the observed pattern with the exact control description rather than applying a universal interval.",
      ],
    },
    {
      title: "What the equipment thinks the room temperature is",
      paragraphs: [
        "The sensing location is model dependent. On wall-mounted units that sense at the indoor head, sun, drafts, or nearby heat sources can make the local reading differ from the occupied part of the room. Some systems support another documented sensing location.",
        "A sensing location affected by sun, drafts, or nearby heat can make some systems satisfy and call again sooner than expected. If the exact model supports a remote sensing location, the controller manual explains how it is selected; otherwise record the mounting conditions for service.",
      ],
    },
    {
      title: "Sizing shows up here first",
      paragraphs: [
        "Manufacturer sizing guidance says substantial oversizing can lead to frequent on-off operation. Sizing is therefore one possibility when the pattern has existed since installation, but the cycle pattern alone does not prove the equipment is oversized.",
        "If the behaviour has been present since installation, ask for the load calculation and equipment selection to be reviewed before assuming a failed part. A pattern that developed later still needs checks for airflow, sensing, protection events, and other model-specific faults.",
      ],
    },
  ],
  figures: [
    {
      title: "The control loop that decides when to stop",
      description:
        "Cycling is the output of this loop. A bad input at the start of it produces unstable behaviour with nothing mechanically wrong.",
      nodes: [
        { label: "Sensing point", detail: "Indoor unit or another model-documented location" },
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
        "There is no universal cycle interval. Inverter systems may reduce output near the setpoint, while other systems stop and restart. Frequent measured starts with unstable comfort are worth reporting; judge normal pauses against the exact manual.",
    },
    {
      question: "Is short cycling damaging the compressor?",
      answer:
        "A heavy or abrupt start, dimming lights, or breaker operation is not the low-output modulation described by manufacturer guidance. Stop the system and have that pattern diagnosed.",
    },
    {
      question: "Could my mini split be too big for the room?",
      answer:
        "It is one possibility. Manufacturer sizing guidance says substantial oversizing can lead to frequent starts and stops, but the pattern alone does not prove sizing is the cause. Review the load calculation and equipment selection.",
    },
    {
      question: "Why does it cycle in mild weather but run steadily in a heatwave?",
      answer:
        "Lower room demand can allow a system to satisfy and pause, while higher demand can keep it operating longer. Minimum output and control behaviour vary by model, so record the conditions rather than treating this pattern as a diagnosis.",
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
