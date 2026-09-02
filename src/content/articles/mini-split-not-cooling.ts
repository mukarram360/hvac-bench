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
        "Check the mode first. Fan mode does not provide cooling, while Dry mode can use different airflow and temperature control from Cool on documented systems. If Cool is selected and the air still is not cold after the model's normal start delay, the equipment needs diagnosis.",
    },
    {
      title: "The air is cold but the room never gets there",
      observation:
        "The supply air is noticeably cold, the system runs for long periods, and the room temperature falls slowly or stalls a few degrees above the setpoint.",
      action:
        "Check room load as well as the equipment. Sun through glass, an open door to unconditioned space, kitchen or appliance heat, and a heat-soaked room can all make delivered cooling insufficient; cold outlet air alone does not prove rated capacity.",
    },
    {
      title: "Cooling has faded gradually across a season",
      observation:
        "Performance was fine and has declined slowly enough that no single day stood out, and the unit now runs much longer than it used to.",
      action:
        "Start with the user-serviceable filter and visible outdoor airflow clearance. If that does not restore cooling, a gradual decline can also reflect a coil, fan, refrigerant, sensor, or control problem that needs a technician.",
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
        "A not-cooling complaint can involve cooling that is not being produced, cooling that is not being delivered through enough airflow, or delivered cooling that cannot keep up with the room load. Those paths overlap, so one observation should narrow the check rather than declare the cause.",
        "After the model's normal start delay, compare the supply airstream with the room. Noticeably cooler air supports checking airflow and room load next. Air that stays near room temperature supports checking mode and setpoint before arranging equipment diagnosis. This is a useful observation, not a capacity measurement.",
      ],
    },
    {
      title: "Settings that look like faults",
      paragraphs: [
        "Fan mode does not provide cooling. Dry, Quiet, and Eco behaviour varies by model and may use reduced airflow or different temperature control. For a clear test, use Cool and a normal fan setting unless the operating manual directs otherwise.",
        "A setpoint at or above the measured room temperature may create little or no cooling demand. Set Cool and choose a temperature below the room, then allow the documented start delay before judging the response.",
      ],
    },
    {
      title: "When the room is the problem",
      paragraphs: [
        "System sizing and room conditions both affect whether a unit can hold the setpoint. Sun exposure, open doors, added occupants, appliances, insulation, and adjoining unconditioned spaces are among the load factors named in manufacturer sizing guidance.",
        "Close exterior openings, reduce avoidable heat gain, and observe whether the temperature trend improves after the model has had time to operate normally. A poor trend with settings, airflow, and room load checked still needs equipment diagnosis.",
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
        "There is no cross-brand time because capacity, room load, starting temperature, and control logic differ. Use the operating manual's delay guidance, close exterior openings, and watch whether room temperature trends toward the setpoint.",
    },
    {
      question: "Does a dirty filter really stop cooling?",
      answer:
        "A clogged filter can restrict airflow, reduce cooling, and contribute to coil icing. It is one of the first owner checks named in manufacturer troubleshooting guidance.",
    },
    {
      question: "Does this mean the system is low on refrigerant?",
      answer:
        "It is one possibility, but the symptom does not establish it. Manufacturer guidance lists leaks and incorrect initial charging among reasons for low refrigerant. A trained technician should identify the cause before repairing and charging the sealed system.",
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
