import { publish } from "./publish";

/**
 * The current-family E1. The observation that helps here is whether the
 * displayed room temperature is plausible, which a homeowner can judge with a
 * cheap thermometer and no risk.
 */
export const pioneerE1Sensor = publish({
  title: "Pioneer E1 error code: room-temperature sensor failure",
  slug: "e1-temperature-sensor-error-code",
  path: "/brands/pioneer/e1-temperature-sensor-error-code/",
  description:
    "Pioneer E1 on current Diamante, Quantum Fresh, Hyperformance, and Ultra families means a room temperature sensor fault, not the older communication error.",
  articleType: "error-code",
  brand: "pioneer",
  equipmentType: "ductless-mini-split",
  productFamily: "Diamante Essenza, Diamante Pro, Quantum Fresh, Hyperformance, and Ultra",
  models: ["WYT-17", "WYT-20", "WYT-FA", "WYT-25", "CYT-24", "RYT-24", "UYT-24", "WYT-24"],
  errorCode: "E1",
  problemType: "temperature-sensor-fault",
  directAnswer:
    "On the Pioneer families listed by the current official guide, E1 indicates an indoor room-temperature sensor failure; this differs from the communication meaning used by specified discontinued Quantum equipment.",
  scopeNotice:
    "The sensor meaning applies to the models the current Pioneer guide lists, including the WYT, CYT, RYT, and UYT designations shown above. If your indoor unit belongs to one of the discontinued Quantum families, the same characters report a communication failure and the diagnosis is completely different.",
  symptoms: [
    "The supported indoor unit reports E1 and temperature sensing or normal operation may be affected.",
  ],
  causes: [
    "The indoor room-temperature sensor, its connection, or the indoor control board can require diagnosis.",
  ],
  diagnosticBranches: [
    {
      title: "Compare the displayed room temperature with a thermometer",
      observation:
        "The unit reports a room temperature, and it can be checked against an ordinary room thermometer placed near the indoor unit but away from direct sun and draughts.",
      action:
        "Write down both readings. A displayed value that is implausible, stuck, or drifting away from reality supports the sensor diagnosis and is a concrete observation a technician can use.",
    },
    {
      title: "Watch how the system behaves rather than what it says",
      observation:
        "The unit may still heat or cool, but comfort is inconsistent, the system runs longer than expected, or it satisfies far too early.",
      action:
        "Record the pattern over a couple of days. A control acting on a wrong temperature reading produces exactly this kind of behaviour, and the description helps confirm the sensor circuit is the right place to look.",
    },
    {
      title: "Confirm the family before assuming the sensor meaning",
      observation:
        "The model number has not been matched against the current Pioneer supported list.",
      action:
        "Check the indoor unit label. If it is a discontinued Quantum family, this page does not apply and the communication page does, because the sensor procedure will not resolve a communication fault.",
    },
  ],
  decisionTable: {
    caption: "Observations worth recording before a sensor diagnosis",
    columns: ["What to observe", "How to observe it safely", "What it supports"],
    rows: [
      [
        "Displayed room temperature against a thermometer",
        "Place a thermometer near the indoor unit, out of sun and draughts",
        "Evidence that the sensed value has drifted from the real room condition",
      ],
      [
        "Whether the reading changes at all",
        "Note the display over several hours in a room that warms or cools",
        "A stuck reading points more firmly at the sensor circuit than a slightly odd one",
      ],
      [
        "How the system runs against the setpoint",
        "Keep one steady setpoint and note run times and comfort",
        "Control behaviour consistent with a temperature input that cannot be trusted",
      ],
    ],
  },
  sections: [
    {
      title: "What a room sensor actually does",
      paragraphs: [
        "The indoor unit decides when to run, how hard, and when to stop by reading the temperature of the air arriving at it. If that reading is wrong, every decision built on it is wrong too, even though the compressor, the fan, and the refrigerant circuit may be in perfect condition.",
        "This is why the fault is worth taking seriously despite sounding minor. A system working from a bad reading can overshoot, undershoot, run far longer than it needs to, or stop while the room is still uncomfortable. The equipment is not faulty in the way the word suggests; it is being told the wrong thing.",
      ],
    },
    {
      title: "The comparison you can make yourself",
      paragraphs: [
        "The one genuinely useful check here needs a room thermometer and nothing else. Put it near the indoor unit, out of direct sunlight and away from a draught or a doorway, give it time to settle, and compare it with what the unit reports.",
        "A close match tells you the sensed value is credible at that moment, which is worth knowing but does not clear the fault. A large gap, a reading that never changes as the room does, or a value that is simply not credible for the conditions is a concrete piece of evidence. Either way, write down both numbers and the time, because a technician arriving to a system that has been reset has nothing to work from otherwise.",
      ],
    },
  ],
  figures: [
    {
      title: "The loop a room sensor sits inside",
      description:
        "Every operating decision is built on the sensed value. A wrong reading produces wrong decisions without anything mechanical being at fault.",
      nodes: [
        { label: "Room air", detail: "The actual condition in the space" },
        { label: "Room sensor", detail: "Converts that condition to a value" },
        { label: "Indoor control", detail: "Compares the value with the setpoint" },
        { label: "System output", detail: "Runs, modulates, or stops on that comparison" },
      ],
    },
  ],
  safeChecks: [
    "Compare both indoor and outdoor model numbers with the guide's supported-model list before interpreting E1.",
    "Record the room conditions and whether the displayed temperature appears implausible.",
  ],
  professionalEscalation: [
    "Sensor resistance, connector, and PCB diagnosis requires the exact service data and qualified equipment access.",
    "Do not substitute the older Quantum communication procedure for these listed models.",
  ],
  serviceHandoff:
    "Provide the indoor model designation so the correct Pioneer code table is used, the displayed room temperature alongside a thermometer reading taken at the same time, and a short description of how the system has been running against its setpoint.",
  resetGuidance:
    "If E1 returns after one permitted power cycle, the sensor circuit needs model-specific diagnosis.",
  faqs: [
    {
      question: "Why does my Pioneer E1 look different online?",
      answer:
        "Because Pioneer uses E1 for two faults on two sets of families. The sensor meaning applies to the currently listed models such as the WYT and CYT designations. The discontinued Quantum families use E1 for a communication failure instead.",
    },
    {
      question: "Can I replace the temperature sensor myself?",
      answer:
        "No. Reaching it means opening the indoor unit, and confirming the fault requires resistance measurement against Pioneer service data. Diagnosis that stops at the symptom risks replacing a sensor when the indoor control board is at fault.",
    },
    {
      question: "Is it safe to keep using the system with E1?",
      answer:
        "It is not a safety code, but comfort and running cost suffer while the control is working from an unreliable reading. The repair needs a technician; keep a note of how the system behaves in the meantime.",
    },
    {
      question: "The displayed temperature looks about right. Now what?",
      answer:
        "Record it anyway with the time and the thermometer reading. Sensor faults are not always a wild reading; a value that never changes as the room warms or cools is just as informative, and the record is what makes that visible.",
    },
  ],
  sourceIds: ["pioneer-current-e1-e2"],
  relatedContent: [
    "/brands/pioneer/",
    "/brands/pioneer/e1-communication-error-code/",
    "/mini-split-not-cooling/",
  ],
  keywords: [
    "pioneer e1 sensor error",
    "pioneer diamante e1",
    "pioneer wyt e1 code",
    "pioneer room temperature sensor",
    "pioneer e1 meaning",
  ],
});
