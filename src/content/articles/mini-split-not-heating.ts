import { publish } from "./publish";

/**
 * Heat pumps behave in ways that look broken and are not. The spine here is
 * the difference between a pause with a purpose and an absence of heat.
 */
export const miniSplitNotHeating = publish({
  title: "Mini-split not heating: what to check before service",
  slug: "mini-split-not-heating",
  path: "/mini-split-not-heating/",
  description:
    "Separate normal heat-pump delays and defrost from mode, setpoint, filter, airflow, and fault conditions that require professional diagnosis.",
  articleType: "troubleshooting",
  equipmentType: "heat-pump",
  models: ["Cross-brand ductless heat pumps; defrost behaviour varies by model"],
  problemType: "not-heating",
  directAnswer:
    "A heat-pump mini-split may briefly pause or reduce indoor airflow during warm-up and defrost, but persistent no-heat can also come from settings, blocked airflow, low outdoor conditions, or an equipment fault.",
  scopeNotice:
    "Warm-up behaviour, defrost frequency, and the outdoor temperature at which output falls away are all model-specific. The cited manufacturer material establishes the general pattern; the manual for your equipment gives the intervals and limits that apply to it.",
  symptoms: [
    "The indoor fan is slow or stopped, supply air is not warm, or heating pauses during cold weather.",
  ],
  causes: [
    "Normal coil warm-up and automatic defrost can temporarily interrupt warm airflow.",
    "Dirty filters, blocked outdoor airflow, an unsuitable setpoint, or a documented fault can prevent expected heating.",
  ],
  diagnosticBranches: [
    {
      title: "Heating stops for a few minutes and then returns",
      observation:
        "Warm air is delivered normally, then the indoor fan slows or stops, the outdoor unit sounds different, and after several minutes heating resumes. Steam may rise from the outdoor unit.",
      action:
        "This pattern can match automatic defrost. Record the pause, frost clearing, and return to heat, then compare them with the sequence and limits in the exact operating manual.",
    },
    {
      title: "The fan runs cool for a minute or two at start-up",
      observation:
        "Heating is selected and the unit runs, but the first minutes deliver air that is not yet warm.",
      action:
        "Wait. Many systems hold or reduce indoor fan speed until the coil is warm enough to avoid blowing cold air into the room, and interrupting that with repeated mode changes only restarts the delay.",
    },
    {
      title: "Heating output falls away as the weather gets colder",
      observation:
        "The system keeps the room comfortable in mild conditions but cannot hold temperature during a genuine cold snap.",
      action:
        "Note the outdoor temperature where it stops keeping up. Heat pump capacity falls as outdoor temperature drops, so this may be the system reaching a real limit rather than failing, but it is also how a low charge or a fouled coil presents.",
    },
    {
      title: "There is no warm air at any point",
      observation:
        "The system has been in Heat with a high setpoint for a long period and the supply air has never become warm.",
      action:
        "Check the mode and setpoint once more, then arrange service. A heat pump that never produces warmth is not exhibiting a normal behaviour and further waiting will not change it.",
    },
  ],
  comparisonTable: {
    caption: "Designed pauses and genuine faults look similar",
    columns: ["What you see", "Normal explanation", "What would make it abnormal"],
    rows: [
      [
        "Indoor fan stops while the system is on",
        "Coil warm-up, or defrost keeping cold air out of the room",
        "The pause lasts far longer than the manual describes, or heat never returns",
      ],
      [
        "Steam rising from the outdoor unit",
        "Frost melting off the coil during a defrost cycle",
        "The unit stays encased in ice through repeated cycles instead of clearing",
      ],
      [
        "Water under the outdoor unit in winter",
        "Defrost meltwater draining as designed",
        "The water freezes into a mound that reaches the coil or blocks the base",
      ],
      [
        "Reduced output on the coldest days",
        "Capacity falling with outdoor temperature",
        "Output falls in mild weather too, or a supplementary source runs constantly",
      ],
    ],
  },
  sections: [
    {
      title: "Why a heat pump pauses on purpose",
      paragraphs: [
        "Frost on the outdoor unit is expected in this mode. The coil has to sit below the air it draws heat from, so moisture in that air freezes. Left alone, the frost would build until the coil could no longer absorb heat. The equipment deals with this by periodically reversing to warm the outdoor coil and melt the frost off.",
        "During documented defrost, some systems stop or slow the indoor fan while the outdoor coil is warmed. Noise and airflow can change, and steam or water may appear outside. Normal completion means the model follows its documented sequence and returns to heating within the manual's limits.",
      ],
    },
    {
      title: "The number that separates normal from not",
      paragraphs: [
        "Defrost timing is model and weather dependent. Compare the pause and recovery with the operating manual instead of applying a generic interval. Repeated pauses that do not clear frost or restore heat are useful evidence for service.",
        "Keep a simple log of when each pause starts, roughly how long it lasts, whether frost clears, and the outdoor conditions. The record does not diagnose the cause, but it lets a technician compare actual behaviour with the model's documented sequence.",
      ],
    },
    {
      title: "Cold weather limits are real",
      paragraphs: [
        "Manufacturer capacity data show that available heating output varies with outdoor temperature and model. Compare the equipment's published operating range and capacity data with the conditions rather than applying one temperature threshold to every heat pump.",
        "A system may reach a capacity limit in colder conditions without a component fault, but the symptom alone cannot separate capacity, building load, airflow, or equipment problems. A change from performance under similar past conditions is useful service context.",
      ],
    },
  ],
  figures: [
    {
      title: "A heating cycle including its designed interruption",
      description:
        "Following the sequence explains why a pause is expected. Judging the system means watching a whole cycle rather than the moment the fan stops.",
      nodes: [
        { label: "Start and warm up", detail: "Indoor fan held back until the coil is warm" },
        { label: "Steady heating", detail: "Warm air delivered to the room" },
        { label: "Frost accumulates", detail: "Moisture freezing on the outdoor coil" },
        { label: "Defrost", detail: "Outdoor coil warmed, indoor fan paused" },
        { label: "Heating resumes", detail: "Operation returns within the model's documented sequence" },
      ],
    },
  ],
  safeChecks: [
    "Confirm Heat mode, raise the setpoint above room temperature, and allow the model's normal start delay.",
    "Clean the filter, clear safe outdoor airflow space, and look for a fault code or defrost indication.",
  ],
  professionalEscalation: [
    "Arrange service when heating does not resume after normal defrost, a fault code appears, or ice does not clear.",
    "Do not remove outdoor ice with tools, boiling water, or improvised heaters.",
  ],
  serviceHandoff:
    "Bring a log of how often heating pauses and for how long, the outdoor temperature during those pauses, whether the outdoor coil clears afterwards, how this winter compares with last, and any code shown on the indoor display.",
  faqs: [
    {
      question: "Why does my heat pump stop blowing warm air?",
      answer:
        "One documented reason is defrost, during which some systems pause or reduce indoor airflow while clearing the outdoor coil. Use the exact manual to judge the sequence and duration, and report a cycle that does not restore heat.",
    },
    {
      question: "How often is defrosting normal?",
      answer:
        "There is no reliable cross-brand interval. Frequency depends on the model and outdoor conditions. Compare it with the operating manual and report cycles that do not clear frost or restore heating.",
    },
    {
      question: "Is steam from the outdoor unit a problem?",
      answer:
        "No. Steam and water during winter operation are what a defrost cycle looks like when it is working. What matters is whether the coil is clear afterwards and whether heating resumes.",
    },
    {
      question: "Should I use the emergency or backup heat setting?",
      answer:
        "Use backup heat only as its controls and operating manual direct. If it runs persistently while the heat pump does not recover, record that behaviour for service rather than assuming the backup stage identifies the fault.",
    },
  ],
  sourceIds: ["fujitsu-troubleshooting", "fujitsu-aduh-operation", "trane-mini-split-not-heating"],
  relatedContent: [
    "/troubleshooting/",
    "/heat-pump-outdoor-unit-iced-over/",
    "/mini-split-filter-cleaning/",
  ],
  keywords: [
    "mini split not heating",
    "heat pump not blowing hot air",
    "heat pump defrost cycle",
    "mini split cold air in heat mode",
    "heat pump not keeping up",
  ],
});
