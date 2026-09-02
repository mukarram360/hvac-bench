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
        "This pattern is consistent with automatic defrost, which is a designed cycle rather than a fault. Time it and count how often it happens. Regular short defrosts in cold damp weather are normal; constant defrosting is not.",
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
        "In heating, the outdoor coil is colder than the outside air, so moisture in that air condenses onto it and freezes. Left alone, the frost would build until the coil could no longer absorb heat. The equipment deals with this by periodically reversing to warm the outdoor coil and melt the frost off.",
        "While that happens, the outdoor unit is not sending heat indoors, and most systems stop or slow the indoor fan so occupants are not blown with cool air. From the sofa this is indistinguishable from a breakdown: the noise changes, the airflow stops, and outside the unit appears to be steaming. It is the system working correctly, and it should end within minutes and return to heating.",
      ],
    },
    {
      title: "The number that separates normal from not",
      paragraphs: [
        "The useful measurement here is not temperature but frequency. A heat pump defrosting every hour or two in cold damp conditions is behaving as designed. A heat pump defrosting every fifteen minutes, or entering defrost and coming out with the coil still iced, is telling you something is wrong.",
        "Keep a simple log for a day: the time each pause starts, roughly how long it lasts, and the outdoor temperature. That record costs nothing and is far more useful to a technician than any description of how it feels in the room, because it distinguishes a control problem from a refrigeration problem from a system simply being at the edge of its range.",
      ],
    },
    {
      title: "Cold weather limits are real",
      paragraphs: [
        "A heat pump moves heat rather than creating it, and there is less heat available in the outside air as it gets colder. Output therefore falls with outdoor temperature, and every system has conditions where it cannot keep up with a building on its own.",
        "This matters when judging whether something is broken. A system holding temperature at 5C and struggling at minus 10C may be entirely healthy and simply undersized for that condition, which is a design conversation rather than a repair. A system that has stopped keeping up in conditions it handled last winter is a different matter, and that comparison with previous seasons is the most useful thing you can bring to it.",
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
        { label: "Heating resumes", detail: "Normal operation returns within minutes" },
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
        "Most often because it has entered a defrost cycle to clear frost from the outdoor coil, and the indoor fan pauses so you are not blown with cool air. It should last a few minutes and then return to heating.",
    },
    {
      question: "How often is defrosting normal?",
      answer:
        "It depends on how cold and damp the air is, but a cycle every hour or two in genuine winter conditions is unremarkable. Defrosting every fifteen minutes, or coming out of defrost still iced up, is worth reporting.",
    },
    {
      question: "Is steam from the outdoor unit a problem?",
      answer:
        "No. Steam and water during winter operation are what a defrost cycle looks like when it is working. What matters is whether the coil is clear afterwards and whether heating resumes.",
    },
    {
      question: "Should I use the emergency or backup heat setting?",
      answer:
        "Use it if you have it and the house is cold, but treat it as a stopgap rather than a fix. Backup heat is usually far more expensive to run, so a system relying on it continuously needs looking at rather than leaving.",
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
