import { publish } from "./publish";

/**
 * A5 covers two different protections that share one code and are told apart
 * by the mode the system was in. That distinction is the page.
 */
export const daikinA5 = publish({
  title: "Daikin A5 error code: freeze-up or peak-cut",
  slug: "a5-error-code",
  path: "/brands/daikin/a5-error-code/",
  description:
    "Why Daikin A5 means one thing in cooling and another in heating, which airflow checks are safe, and when coil temperature protection needs service.",
  articleType: "error-code",
  brand: "daikin",
  equipmentType: "ductless-mini-split",
  productFamily: "Daikin 15 and 19 Series",
  models: ["15 Series models in SiUS041501E", "19 Series models in SiUS041501E"],
  errorCode: "A5",
  problemType: "coil-temperature-protection",
  directAnswer:
    "On Daikin 15 and 19 Series equipment, A5 represents freeze-up protection in cooling or heating peak-cut control when the indoor heat-exchanger temperature crosses the documented limits.",
  scopeNotice:
    "The two meanings described here come from the Daikin service manual covering the 15 and 19 Series. Which protection you are looking at depends on the mode the system was running, and other Daikin ranges assign A5 within their own code structure, so start from the manual that matches your model plate.",
  symptoms: [
    "Cooling or heating pauses and the controller reports A5 as coil-temperature protection operates.",
  ],
  causes: [
    "A clogged indoor filter, dust on the heat exchanger, or recirculated discharge air can disturb airflow.",
    "An indoor heat-exchanger thermistor or indoor control board can also be defective.",
  ],
  diagnosticBranches: [
    {
      title: "A5 appeared while the system was cooling",
      observation:
        "The unit was in cooling mode, and cooling stopped or paused when the code was displayed. There may be frost or water at the indoor unit.",
      action:
        "Treat this as freeze protection. Switch cooling off, let any ice melt on its own, and check the filter and the intake path before a single monitored restart.",
    },
    {
      title: "A5 appeared while the system was heating",
      observation:
        "The unit was in heating mode when the code showed, and warm air had been delivered until the pause.",
      action:
        "Treat this as peak-cut control acting on a high indoor coil temperature. The airflow question is the same but the direction is reversed: warm air needs somewhere to go, so look at what is blocking the discharge rather than the intake.",
    },
    {
      title: "Airflow is clear and A5 returns anyway",
      observation:
        "The filter is clean, nothing blocks the intake or discharge, and the code still appears in normal use.",
      action:
        "Stop cycling the system and arrange diagnosis. Once airflow is genuinely ruled out, what remains is the coil temperature sensor and the indoor control, and both need measurement against Daikin data.",
    },
  ],
  figures: [
    {
      title: "Where air has to move for the coil to stay in range",
      description:
        "Both A5 protections come back to the same physical requirement. Air must arrive at the indoor coil, cross it, and leave without returning, and a restriction anywhere on that loop moves coil temperature towards a limit.",
      nodes: [
        { label: "Room air in", detail: "Reaches the intake grille and the filter behind it" },
        { label: "Across the coil", detail: "Where heat is exchanged and temperature is sensed" },
        { label: "Discharge", detail: "Leaves through the louvres into the room" },
        { label: "Recirculation", detail: "Discharge finding its way back to the intake" },
      ],
    },
  ],
  comparisonTable: {
    caption: "The same code, two protections",
    columns: ["Running mode", "What the control is protecting against", "Where restricted airflow shows up"],
    rows: [
      [
        "Cooling",
        "Indoor coil temperature falling far enough for the coil to freeze",
        "Loaded filter or blocked intake starving the coil of warm room air",
      ],
      [
        "Heating",
        "Indoor coil temperature climbing past the documented peak-cut limit",
        "Blocked discharge, closed louvres, or warm air recirculating back into the unit",
      ],
    ],
  },
  sections: [
    {
      title: "One code, two directions",
      paragraphs: [
        "It is unusual for a single code to cover opposite conditions, and it catches people out. In cooling, A5 means the indoor coil got too cold and the control stopped before ice formed. In heating, the same code means the coil got too hot and peak-cut control reduced or stopped operation. The mode you were in tells you which one you are reading.",
        "Both share a root: air is not moving across the heat exchanger the way the design assumes. Too little air in cooling lets the coil temperature fall away, and too little air in heating lets it climb. That is why the first checks look similar even though the protections are opposites.",
      ],
    },
    {
      title: "Where to look, depending on the mode",
      paragraphs: [
        "In cooling, look at the way in before anything else. The filter loads up, the intake sits close to a wall or a shelf, or the coil behind the filter has picked up a felt of dust that a filter clean does not touch. Any of those stops warm room air arriving at the coil in the volume the system expects, and the coil temperature falls.",
        "In heating, look at where the air leaves. A discharge aimed straight into a curtain, a louvre closed for comfort, or a unit mounted where its own warm air loops back into the intake will all raise coil temperature. The unit is fighting itself, and peak-cut control is the equipment noticing before something is damaged.",
      ],
    },
  ],
  safeChecks: [
    "Turn the unit off and inspect the user-removable filter for loading; clean it exactly as the model manual directs.",
    "Confirm furniture, curtains, or closed louvers are not blocking the indoor intake or outlet.",
  ],
  professionalEscalation: [
    "Persistent icing, thermistor testing, coil cleaning beyond routine maintenance, and PCB diagnosis need qualified service.",
    "Do not chip ice from a coil or use heat sources to force thawing.",
  ],
  serviceHandoff:
    "Tell the technician which mode the system was in when A5 appeared, whether frost or water was visible at the indoor unit, when the filter was last cleaned, how the indoor unit is positioned relative to furniture and curtains, and whether the code returns in both modes or only one.",
  resetGuidance:
    "Let visible ice thaw with the system off; if A5 returns after airflow is restored, stop cycling the unit and arrange diagnosis.",
  faqs: [
    {
      question: "Why does A5 show in heating when nothing is frozen?",
      answer:
        "Because in heating the code is not about freezing. On the 15 and 19 Series it also covers peak-cut control, which acts when the indoor coil temperature climbs past the documented limit. Nothing has to be iced up for that protection to operate.",
    },
    {
      question: "Can I speed up thawing with a hairdryer?",
      answer:
        "No. Forced heat and any attempt to chip ice risk damaging fins, tubing, and the sensor that reports coil temperature. Switch cooling off, protect the floor from meltwater, and let the coil come back to room temperature on its own.",
    },
    {
      question: "Is a dirty filter really enough to cause A5?",
      answer:
        "It is one of the causes Daikin lists, along with dust on the heat exchanger itself and recirculated discharge air. A filter is the part you can inspect, so it is the sensible starting point, but a clean filter does not rule out a coil that needs professional cleaning.",
    },
    {
      question: "The code cleared by itself. Do I still need service?",
      answer:
        "If it cleared once after you corrected an obvious airflow restriction, monitor it. If it returns with airflow genuinely clear, professional diagnosis is needed rather than more waiting, because the remaining candidates are the coil sensor and the indoor control board.",
    },
  ],
  sourceIds: ["daikin-a5-service"],
  relatedContent: ["/brands/daikin/", "/mini-split-frozen-coil/", "/mini-split-filter-cleaning/"],
  keywords: [
    "daikin a5 error code",
    "daikin a5 freeze up",
    "daikin peak cut control",
    "daikin 15 series a5",
    "daikin indoor coil protection",
  ],
});
