import { publish } from "./publish";

/**
 * Narrow question, narrow page. Somebody is standing at a window in February
 * watching their outdoor unit steam and wants to know whether to phone anyone.
 * So the whole thing is an identification exercise: signs present, signs
 * absent, and a two-observation confirmation that does not require anybody to
 * touch the equipment.
 */
export const howToTellIfMiniSplitIsInDefrost = publish({
  title: "How to tell whether a mini-split is defrosting or faulty",
  slug: "how-to-tell-if-mini-split-is-in-defrost",
  path: "/how-to-tell-if-mini-split-is-in-defrost/",
  description:
    "The signs that identify a defrost cycle, the ones that rule it out, and a two-observation check that settles it from indoors without touching anything.",
  articleType: "how-to",
  equipmentType: "heat-pump",
  problemType: "identify-defrost",
  models: [
    "Air-source heat pumps operating in heating mode",
    "Displayed defrost indicators differ by controller and are read from your manual",
  ],
  directAnswer:
    "A defrost cycle happens during heating, lasts a few minutes, and ends by itself. Indoor heat pauses, the outdoor fan stops while the compressor keeps running, vapour rises, and water drains from the base. Heat then returns without anyone doing anything.",
  scopeNotice:
    "Indicators, symbols, and timing vary between controllers and product families. The observations here identify the cycle without relying on a display, but the manual for your indoor unit will name whatever symbol your model shows.",
  layout: ["decisionTable", "steps", "sections"],
  symptoms: [
    "Indoor heat has stopped while the outdoor unit is still running.",
    "White vapour is rising from the outdoor unit in cold weather.",
    "The outdoor fan is still and the unit has just made a single soft noise.",
  ],
  causes: [
    "Frost accumulates on the outdoor coil in heating and has to be melted off at intervals.",
    "Controls hold the indoor fan during the cycle so chilled air is not blown into the room.",
  ],
  decisionTable: {
    caption: "Five signs, read together",
    columns: ["Sign", "Defrost", "Something else"],
    rows: [
      [
        "Mode",
        "The system is in heating",
        "It happens in cooling, or with the system off",
      ],
      [
        "Outdoor fan",
        "Stopped, while the compressor hum continues",
        "Fan running normally, or nothing running at all",
      ],
      [
        "Vapour",
        "White, rising, thinning within minutes",
        "Grey or blue, or with any burning smell",
      ],
      [
        "Duration",
        "Minutes, then heat returns unaided",
        "Stops and stays off, or repeats every few minutes",
      ],
      [
        "Afterwards",
        "Coil is wet and clear, water at the base",
        "Ice still on the coil once the cycle has ended",
      ],
    ],
  },
  steps: [
    {
      name: "Confirm the system is heating",
      text: "Check the controller shows heating mode and a setpoint above the room temperature. A defrost cycle only happens while a heat pump is heating, so anything seen in cooling or in standby is something else.",
    },
    {
      name: "Note the time",
      text: "Write down the minute the indoor heat stopped. Duration is the observation that separates a normal cycle from a system that has stopped, and memory is unreliable about how long four minutes feels in a cold room.",
    },
    {
      name: "Look at the outdoor fan",
      text: "During a defrost the outdoor fan stops while the compressor keeps running, so you hear a hum with no propeller turning. That combination is unusual outside this cycle and is the strongest single sign.",
    },
    {
      name: "Watch for the vapour and the water",
      text: "Melting ice produces white vapour off a warm wet coil and water running to the base. From a safe distance, note whether the vapour is white and whether water is draining or pooling.",
    },
    {
      name: "Wait for it to end on its own",
      text: "Do not switch the system off or change the mode. Let the cycle finish and record how many minutes passed before warm air returned, and whether the coil is clear afterwards.",
    },
  ],
  sections: [
    {
      title: "The two observations that settle it",
      paragraphs: [
        "The first is the fan and compressor combination: outdoor fan stopped, compressor still running, during heating. Ordinary operation does not produce that, and a stopped system produces neither.",
        "The second is that it ends by itself. A defrost cycle finishes and heating resumes with no intervention. Anything that requires a person to press something, or that never resumes, is not this.",
        "Together those two are enough. A reader who has both does not need to interpret vapour colour, count minutes precisely, or find a symbol in a manual.",
      ],
    },
    {
      title: "When to stop watching and act",
      paragraphs: [
        "Ice still on the coil after a completed cycle means the cycle is not achieving what it exists to do. That is a service matter regardless of how normal the cycle itself looked.",
        "Cycles that repeat every few minutes are also a service matter, because the room never recovers between them. Note the times of three consecutive cycles and the outdoor temperature before calling.",
        "Grey or blue vapour, a burning smell, grinding, or a fan striking ice are not defrost signs at all. Switch the system off and call for service without waiting for the cycle to end.",
      ],
    },
  ],
  safeChecks: [
    "Observe from a safe distance with the system left running; there is nothing to touch during a cycle.",
    "Note the start time, the end time, and whether the coil is clear once heat returns.",
    "Check that nothing overhead is dripping onto the unit and refreezing after the cycle.",
  ],
  professionalEscalation: [
    "Call for service if ice remains on the coil after a completed cycle, or grows across a day.",
    "Switch the system off and call immediately for grey or blue vapour, a burning smell, or a fan striking ice.",
    "Report cycles that repeat every few minutes with the times of three of them.",
  ],
  serviceHandoff:
    "Give the technician the outdoor model number, the outdoor temperature and conditions, the start and end times of three cycles, how long heat was absent each time, and a photograph of any ice remaining once a cycle has finished.",
  faqs: [
    {
      question: "How long does a defrost cycle last?",
      answer:
        "Long enough to clear the coil, which the controller decides from time, sensors, or measured demand depending on the model. What matters to an owner is that heat returns unaided and that the coil is clear afterwards.",
    },
    {
      question: "Why has the outdoor fan stopped but the unit is still running?",
      answer:
        "That is the clearest sign of a defrost cycle. The fan is held off so it is not blowing cold air across a coil the system is deliberately warming, while the compressor keeps running to supply that heat.",
    },
    {
      question: "Is my heat pump broken if it stops heating in winter?",
      answer:
        "Not if it stops for a few minutes and starts again on its own while the outdoor unit steams. A pause that does not end, or that returns every few minutes, is worth reporting.",
    },
    {
      question: "Does a mini-split defrost in cooling mode?",
      answer:
        "No. Frost forms on the outdoor coil because it runs colder than the outdoor air in heating. In cooling that coil is the hot one, so there is nothing to melt off.",
    },
  ],
  sourceIds: ["fujitsu-rls2-operation", "fujitsu-aduh-operation", "doe-heat-pumps"],
  relatedContent: [
    "/how-heat-pump-defrost-works/",
    "/heat-pump-outdoor-unit-iced-over/",
    "/mini-split-not-heating/",
    "/how-to-prepare-mini-split-for-winter/",
  ],
  glossaryTerms: ["defrost-cycle", "reversing-valve", "condenser-coil"],
  keywords: [
    "is my heat pump in defrost",
    "heat pump outdoor fan stopped",
    "heat pump steaming",
    "defrost cycle signs",
  ],
});
