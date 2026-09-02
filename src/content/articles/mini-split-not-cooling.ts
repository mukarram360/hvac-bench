import { publish } from "./publish";

/**
 * "Not cooling" is really two complaints wearing one name: nothing cold is
 * being produced, or something cold is being produced and losing the argument
 * with the room. The page separates them first, because everything after that
 * depends on which one you have.
 */
export const miniSplitNotCooling = publish({
  title: "Mini-split not cooling: a safe diagnostic path",
  slug: "mini-split-not-cooling",
  path: "/mini-split-not-cooling/",
  description:
    "Check mode, setpoint, filters, airflow, doors, sunlight, and visible fault codes before deciding whether a non-cooling mini-split needs service.",
  articleType: "troubleshooting",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless systems; confirm mode names and delays in your model manual"],
  problemType: "not-cooling",
  directAnswer:
    "A mini-split that runs but does not cool may be in the wrong mode, have an unsuitable setpoint, restricted indoor or outdoor airflow, a high room load, or a fault that needs model-specific diagnosis.",
  scopeNotice:
    "This is cross-brand guidance drawn from the manufacturer material cited for the page. Delay intervals, mode names, filter construction, and what counts as normal supply air temperature vary between models, so the operating manual for your indoor and outdoor units remains the authority.",
  symptoms: [
    "Airflow is present but the room temperature does not fall as expected.",
    "The unit may run quietly or intermittently without delivering normal cooling.",
  ],
  causes: [
    "Dirty filters, blocked intake or outlet, open doors, direct sun, or Quiet mode can reduce delivered capacity.",
    "Frozen coils, fan faults, refrigerant problems, or control faults require service.",
  ],
  diagnosticBranches: [
    {
      title: "The air from the unit is not cold at all",
      observation:
        "Hold a hand in the supply airstream. It feels like room air, or close to it, no matter how long the system has been running.",
      action:
        "Check the mode first. Fan and Dry both move air without delivering normal cooling, and both are easy to select by accident. If the mode is right and the air is still not cold, the problem is on the equipment side and belongs with a technician.",
    },
    {
      title: "The air is cold but the room never gets there",
      observation:
        "The supply air is noticeably cold, the system runs for long periods, and the room temperature falls slowly or stalls a few degrees above the setpoint.",
      action:
        "Treat this as a load problem rather than a fault. Sun through glass, an open door to unconditioned space, kitchen or appliance heat, and a room that has been left to heat-soak all show up exactly like this.",
    },
    {
      title: "Cooling has faded gradually across a season",
      observation:
        "Performance was fine and has declined slowly enough that no single day stood out, and the unit now runs much longer than it used to.",
      action:
        "Start with the filter and the outdoor coil; if that does not restore cooling, the next diagnosis needs a technician. A slow decline usually means something accumulating rather than something breaking.",
    },
    {
      title: "There is ice, water, or a code on the display",
      observation:
        "You can see frost on the indoor coil behind the filter, water in an unexpected place, or characters on the display that are not the temperature.",
      action:
        "Stop and follow that specific evidence instead of continuing with general cooling checks, because the code or the ice narrows things much faster than the symptom does.",
    },
  ],
  decisionTable: {
    caption: "What the supply air temperature tells you",
    columns: ["What you feel at the outlet", "Most useful reading", "Where to go next"],
    rows: [
      [
        "Air that is barely cooler than the room",
        "Either the mode is not cooling or capacity is not being produced",
        "Confirm the mode and setpoint, then arrange diagnosis if nothing changes",
      ],
      [
        "Clearly cold air, weak volume",
        "Capacity exists but airflow is restricted somewhere",
        "Check the filter, the intake path, and the outdoor coil for obstruction",
      ],
      [
        "Clearly cold air, good volume, room still warm",
        "The room load is beating the delivered capacity",
        "Look at solar gain, open doors, ventilation, and heat sources in the room",
      ],
    ],
  },
  sections: [
    {
      title: "Two different complaints share one name",
      paragraphs: [
        "When someone says a mini-split is not cooling, they usually mean one of two things, and the fix has almost nothing in common between them. Either the equipment is not producing cooling, or it is producing cooling that the room is cancelling out faster than it arrives.",
        "The test that separates them takes ten seconds. Put a hand in the airstream at the indoor unit after the system has been running for a while. Cold air at the outlet means capacity is being produced and the question becomes what is happening to it in the room. Room-temperature air at the outlet means capacity is not arriving, and that is an equipment question.",
      ],
    },
    {
      title: "Settings that look like faults",
      paragraphs: [
        "Dry mode is the most common false alarm in this category. It is designed to remove humidity with reduced airflow, and on a mild damp day it does its job perfectly while a room full of people concludes the system has failed. Quiet and Eco settings similarly cap output on purpose, and a fan speed left on low will do the same thing quietly.",
        "Setpoint is the other one. A system will not cool a room to a temperature below the number it has been given, and a setpoint at or above the current room temperature is a complete explanation for no cooling. Before anything else, set Cool, choose a temperature clearly below the room, and put the fan on a normal speed rather than low.",
      ],
    },
    {
      title: "When the room is the problem",
      paragraphs: [
        "A ductless head is sized for a particular room doing particular things. Change what the room does and the same equipment stops keeping up, without anything having gone wrong with it. West-facing glass in late afternoon, a door left open to a stairwell, a new oven, more people, or a computer that was not there last summer all add load the system was never asked to carry.",
        "This is worth checking properly before paying for a diagnostic visit, because a technician who finds correct operation and a heavy load has done nothing wrong and will still charge for the call. Close the door, shade the glass, run the system for an hour with the room settled, and see whether the story changes.",
      ],
    },
  ],
  figures: [
    {
      title: "Where cooling can be lost between the coil and the room",
      description:
        "Capacity has to be produced, delivered, and then survive the room. Each stage fails in a different way and needs a different answer.",
      nodes: [
        { label: "Refrigeration circuit", detail: "Produces the cooling capacity" },
        { label: "Indoor coil and fan", detail: "Transfers it into moving air" },
        { label: "Air distribution", detail: "Carries it to where people are" },
        { label: "Room load", detail: "Solar gain, doors, and heat sources working against it" },
      ],
    },
  ],
  safeChecks: [
    "Select Cool rather than Fan or Dry and set a temperature below the measured room temperature.",
    "Clean the user-serviceable filter, clear indoor and outdoor airflow space, and close exterior doors and windows.",
    "Record any displayed code instead of guessing from the symptom alone.",
  ],
  professionalEscalation: [
    "Call for service if a clean, unobstructed system still does not cool, if ice forms, or if a code returns.",
    "Refrigerant, coil, motor, and electrical diagnosis are not homeowner procedures.",
  ],
  serviceHandoff:
    "Tell the technician whether the supply air is cold at the outlet, how long the system runs before you give up on it, the indoor and outdoor temperatures at the time, when the filter was last cleaned, and whether performance dropped suddenly or faded over a season.",
  faqs: [
    {
      question: "Why is my mini split blowing cool air but not cold?",
      answer:
        "Either capacity is reduced or the mode is limiting it. Check that you are in Cool rather than Dry, that fan speed is not set low, and that Eco or Quiet is off. If the settings are right and the air still is not properly cold, the equipment needs diagnosis.",
    },
    {
      question: "How long should a mini split take to cool a room?",
      answer:
        "Longer than most people expect, particularly for a room that has heat-soaked through a hot day. Give it an hour with doors closed before judging it. What matters more than speed is whether the room reaches the setpoint at all.",
    },
    {
      question: "Does a dirty filter really stop cooling?",
      answer:
        "It reduces airflow across the coil, which cuts delivered capacity and can eventually lead to a frozen coil that stops cooling completely. It is the cheapest thing to rule out and the most commonly neglected.",
    },
    {
      question: "Is low refrigerant the usual cause?",
      answer:
        "It is one possibility, and a system that is low has a leak, because refrigerant is not consumed. Anyone offering to top it up without finding the leak is selling you the same repair again next year. It needs proper diagnosis rather than assumption.",
    },
  ],
  sourceIds: ["fujitsu-rls2-operation", "trane-mini-split-not-cooling", "daikin-mxs-engineering"],
  relatedContent: ["/troubleshooting/", "/mini-split-filter-cleaning/", "/mini-split-frozen-coil/"],
  keywords: [
    "mini split not cooling",
    "mini split blowing warm air",
    "ductless not cooling room",
    "mini split not cold enough",
    "mini split cooling problems",
  ],
});
