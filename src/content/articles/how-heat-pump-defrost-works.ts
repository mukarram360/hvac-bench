import { publish } from "./publish";

/**
 * Defrost generates more "is my heat pump broken" calls than almost anything
 * else it does, because every visible sign of it looks alarming: steam, a
 * clunk, the fan stopping, and the heat going away in January. The page is
 * built to settle that in the first screen and then draw the line between the
 * sequence working and the sequence failing.
 */
export const howHeatPumpDefrostWorks = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "How heat-pump defrost works, and what normal looks like",
  slug: "how-heat-pump-defrost-works",
  path: "/how-heat-pump-defrost-works/",
  description:
    "Why an outdoor coil frosts in heating, what the machine does about it, how long the interruption should feel, and the signs that frost is not clearing.",
  articleType: "guide",
  equipmentType: "heat-pump",
  problemType: "defrost-operation",
  models: [
    "Air-source ductless and ducted heat pumps in heating mode",
    "Cooling-only equipment does not defrost and is out of scope",
  ],
  directAnswer:
    "In heating, the outdoor coil runs colder than the outdoor air, so airborne moisture freezes onto it. Defrost briefly runs the system in reverse to melt that ice off, which pauses indoor heat and produces steam outside.",
  scopeNotice:
    "How a defrost is triggered, how long it lasts, and what the controller displays are set by each product family. Some models use timed intervals, some use coil and ambient sensors, and some use demand logic. Read the operation manual for your exact outdoor model before judging an interval as wrong.",
  layout: ["sections", "figures", "decisionTable", "branches"],
  symptoms: [
    "Indoor heat pauses for a few minutes and then returns on its own.",
    "White vapour rises from the outdoor unit and water runs from its base.",
    "A single soft clunk from the outdoor unit as the cycle starts or ends.",
  ],
  causes: [
    "Cold, damp outdoor air puts more moisture on the coil, so defrosts come closer together.",
    "Restricted outdoor airflow or blocked base drainage makes each defrost less effective.",
  ],
  sections: [
    {
      title: "Why a heating coil collects ice",
      paragraphs: [
        "To pull heat out of cold air, the outdoor coil has to be colder than that air. Once its surface drops below freezing, moisture in the passing air condenses onto it and freezes rather than draining away. Damp air near freezing frosts a coil faster than dry air well below it.",
        "Frost is an insulator. A layer of it slows the heat transfer the coil exists to do, and left alone it keeps growing, because a less effective coil has to run colder still. So the machine removes it deliberately and on purpose, at intervals.",
      ],
    },
    {
      title: "What the machine does about it",
      paragraphs: [
        "Defrost reverses the refrigerant flow, the same reversal used to switch between heating and cooling. Hot vapour is sent to the outdoor coil, which melts the ice from the inside out. The outdoor fan stops so it is not blowing cold air over the coil being warmed.",
        "The indoor fan is held off or slowed at the same time, because the indoor coil has gone cold and blowing across it would push chilled air into the room. That is the pause a reader feels as heat going away.",
        "When the coil is clear, the system reverses again and heating resumes. Melt water runs off the base of the unit, and the temperature difference between the warm wet coil and the cold air produces the vapour that looks like smoke.",
      ],
    },
    {
      title: "What defrost costs, and why that is still the cheaper option",
      paragraphs: [
        "During a defrost the system is taking heat out of the house rather than adding it, and the compressor is running to do that. This is one reason published heating capacity falls at colder outdoor conditions: some of the operating time is spent clearing the coil rather than heating.",
        "It is still cheaper than the alternative, which is a coil that keeps icing until it can move no heat at all. Greater defrost demand in freezing fog than on a dry cold night reflects the moisture in the air, not a failure by itself.",
      ],
    },
  ],
  figures: [
    {
      title: "One defrost, start to finish",
      description:
        "Each step explains one of the signs at the unit, which is why they arrive in this order and why none of them lasts long.",
      nodes: [
        { label: "Trigger", detail: "Controller decides from time, sensors, or measured demand" },
        { label: "Reverse", detail: "Hot vapour is routed to the outdoor coil; a valve shifts audibly" },
        { label: "Fans held", detail: "Outdoor fan stops, indoor fan is held off or slowed" },
        { label: "Melt", detail: "Ice releases, water runs to the base, vapour rises" },
        { label: "Resume", detail: "Flow reverses back and heating restarts" },
      ],
    },
  ],
  decisionTable: {
    caption: "Reading the outdoor unit in winter",
    columns: ["What you see", "Consistent with defrost", "Not consistent with defrost"],
    rows: [
      [
        "Vapour from the outdoor unit",
        "White, rises, thins within minutes, no smell",
        "Grey or blue, or carries a burning smell",
      ],
      [
        "Ice on the coil",
        "Present, then gone, and the surface is wet afterwards",
        "Thickening across hours, or a solid block around the fan",
      ],
      [
        "Indoor heat stops",
        "A few minutes, then heat returns without any intervention",
        "Stops and stays off, or repeats every few minutes",
      ],
      [
        "Water at the base",
        "Draining away and refreezing only in the coldest spells",
        "Standing and building into a mound under the unit",
      ],
      [
        "Noise",
        "One soft clunk or whoosh as flow reverses",
        "Grinding, rattling, or the fan striking ice",
      ],
    ],
  },
  diagnosticBranches: [
    {
      title: "The pause is short and heat comes back",
      observation:
        "Indoor heat stops for a few minutes, the outdoor unit steams, water drains from the base, and heating resumes with no button pressed.",
      action:
        "Record nothing further. Cold damp weather brings these closer together, which is the control logic responding to conditions rather than a fault developing.",
    },
    {
      title: "Ice is still there after the cycle ends",
      observation:
        "The unit has been through a cycle, the vapour has cleared, and frost or ice is still on the coil, the fan guard, or the base.",
      action:
        "Check what an owner can see: leaves and snow against the coil, a blocked base drain, water dripping onto the unit from above, and clearance around it. Ice that survives a completed cycle needs a technician.",
    },
    {
      title: "It defrosts every few minutes",
      observation:
        "The interruptions prevent the room from recovering, and the outdoor unit spends more time in the cycle than out of it.",
      action:
        "Note the times of three consecutive cycles and the outdoor temperature, then arrange service. Sensor, control, airflow, and refrigerant-side problems can all shorten the interval and are not separable by watching.",
    },
  ],
  safeChecks: [
    "Watch a full cycle before acting, and note how many minutes pass before heat returns.",
    "Clear snow, leaves, and stored items away from the outdoor coil and from the space under the unit.",
    "Check that nothing above the unit drips onto it, since refreezing meltwater builds ice the cycle cannot remove.",
  ],
  professionalEscalation: [
    "Call for service where a finished cycle leaves the coil still iced, or where the ice builds day on day.",
    "Stop and switch the system off at the isolator if the fan is striking ice or the unit is grinding.",
    "Never chip, scrape, or pour hot water on a coil; the fins and the tubing behind them damage easily.",
  ],
  serviceHandoff:
    "Give the technician the outdoor model number, the outdoor temperature and weather when it happens, the interval between three consecutive cycles, how long each pause lasts, and a photograph of where the ice sits when the cycle has finished.",
  faqs: [
    {
      question: "How long should a defrost cycle last?",
      answer:
        "No cross-brand figure applies because triggers and durations are set per product family. A reader can judge whether heating returns on its own and whether the coil is clear afterwards. Persistent ice matters more than the stopwatch.",
    },
    {
      question: "Is steam from my heat pump dangerous?",
      answer:
        "White vapour rising from a warm wet coil in cold air is water, not smoke. Grey or blue vapour, or any burning smell, is a different matter and means switching the system off and calling for service.",
    },
    {
      question: "Should I cover my heat pump in winter?",
      answer:
        "No. The outdoor unit needs free airflow and free drainage to defrost, and a cover traps meltwater against the coil. Keep the space around and beneath it clear instead.",
    },
    {
      question: "Why does the indoor unit blow cool air during defrost?",
      answer:
        "The indoor coil is briefly giving up heat rather than adding it. Controls hold or slow the indoor fan for that reason, so any air that does move can feel cool for the length of the cycle.",
    },
  ],
  sourceIds: ["fujitsu-aduh-operation", "fujitsu-troubleshooting", "doe-heat-pumps"],
  relatedContent: [
    "/heat-pump-outdoor-unit-iced-over/",
    "/mini-split-not-heating/",
    "/how-to-tell-if-mini-split-is-in-defrost/",
    "/heat-pump-operating-temperatures/",
  ],
  glossaryTerms: ["defrost-cycle", "reversing-valve", "heat-pump", "condenser-coil"],
  keywords: [
    "heat pump defrost cycle",
    "heat pump steaming in winter",
    "how long is a defrost cycle",
    "heat pump ice on coil",
  ],
});
