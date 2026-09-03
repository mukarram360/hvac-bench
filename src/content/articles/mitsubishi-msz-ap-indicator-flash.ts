import { publish } from "./publish";

/**
 * The whole page exists for one sentence in the MSZ-AP service manual: the
 * blink counts in the recall table are not the blink counts in the live
 * troubleshooting table. Everything else here is arranged so a reader cannot
 * reach a count without first establishing which table they are counting in.
 */
export const mitsubishiMszApIndicatorFlash = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Mitsubishi Electric MSZ-AP: counting the operation indicator flashes",
  slug: "msz-ap-operation-indicator-flashes",
  path: "/brands/mitsubishi/msz-ap-operation-indicator-flashes/",
  description:
    "The MSZ-AP lamp uses two different flash tables, one live and one recalled. Counting in the wrong one turns a serial-signal fault into a fan-motor fault.",
  articleType: "troubleshooting",
  brand: "mitsubishi",
  equipmentType: "ductless-mini-split",
  productFamily: "MSZ-AP15VF and MSZ-AP20VF indoor units in service manual OBH799",
  models: ["MSZ-AP15VF-E1", "MSZ-AP15VF-ER1", "MSZ-AP20VF-E1", "MSZ-AP20VF-ER1"],
  problemType: "fault-indicator-count",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "Count the flashes, but record which state you counted them in. On the MSZ-AP indoor units the service manual publishes two flash tables, one for a lamp flashing during normal running and one for the failure mode recall function, and the same count means different things in each.",
  scopeNotice:
    "Flash counts and the recall procedure below are taken from Mitsubishi Electric indoor unit service manual OBH799 for MSZ-AP15VF and MSZ-AP20VF. Outdoor faults on these systems are read against the MXZ-D and MXZ-E series outdoor manuals instead, and other M-Series indoor ranges publish their own tables.",
  layout: ["branches", "comparisonTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The green operation lamp on the indoor unit is flashing in a repeating group with a long pause between groups.",
    "Heating or cooling stopped and the only information available is that lamp, because no wired controller is fitted.",
    "The lamp flashed for a while, the system started working again, and nobody wrote down what the pattern was.",
  ],
  causes: [
    "The indoor board flashes a count when a monitored input is out of range or a signal it expects does not arrive.",
    "A stored abnormal condition remains in memory after the live indication clears, which is what the recall function exists to read back.",
  ],
  diagnosticBranches: [
    {
      title: "The lamp is flashing right now",
      observation:
        "Operation has stopped or is behaving oddly, and the lamp is repeating a group of flashes at half-second intervals with a pause of about two and a half seconds between groups.",
      action:
        "Watch at least two complete groups before you commit to a number, then write the count down along with the date and what the system was doing. This is the live indication, so it is read against the troubleshooting check table rather than the recall table.",
    },
    {
      title: "The lamp stays on for three seconds before each group",
      observation:
        "Each repeating cycle begins with the left lamp lit steadily for about three seconds, and then the counted flashes follow.",
      action:
        "Record that the steady three seconds is present. In the recall sequence the manual uses that steady period to separate an outdoor abnormality from an indoor one, which changes which service manual the count is looked up in.",
    },
    {
      title: "The fault has cleared and nobody caught the pattern",
      observation:
        "Operation returned to normal, the lamp is out, and the complaint is intermittent enough that nobody expects to be present next time.",
      action:
        "Mention the failure mode recall function when you arrange service. The indoor unit stores an abnormal condition it has already shown, and a technician can play it back rather than waiting for the fault to happen during the visit.",
    },
  ],
  figures: [
    {
      title: "What one flash cycle contains",
      description:
        "Each element of the cycle carries information. Readers who count only the flashes lose the two parts that decide which table applies and which cabinet is being reported.",
      nodes: [
        { label: "Steady three seconds", detail: "Present in recall when the outdoor unit is the subject" },
        { label: "Counted flashes", detail: "Half-second flashes, the number that is looked up" },
        { label: "Two and a half second pause", detail: "Separates one cycle from the next" },
        { label: "Beep alongside the flash", detail: "Emitted in recall mode as the count is played back" },
      ],
    },
  ],
  comparisonTable: {
    caption: "The same count in the two published MSZ-AP tables",
    columns: ["Flashes on the left lamp", "Live troubleshooting check table", "Indoor failure mode recall table"],
    rows: [
      ["2 flashes", "Room temperature or indoor coil thermistor", "Indoor coil thermistor"],
      ["3 flashes", "Indoor fan motor", "Serial signal not received from the outdoor unit"],
      ["4 flashes", "Indoor unit control system", "Not listed in the indoor recall table"],
      ["11 flashes", "Not listed in the check table", "Indoor fan motor feedback missing during operation"],
      ["12 flashes", "Not listed in the check table", "Indoor control board nonvolatile memory unreadable"],
    ],
  },
  sections: [
    {
      title: "Two tables, one lamp",
      paragraphs: [
        "Service manual OBH799 prints two tables. One is an indoor failure mode table for the recall function, the other a troubleshooting check table for what the lamp does while the system is running. Between them sits a note saying the blinking patterns of the recall mode differ from those of the check table. That note is the reason this page exists. A reader who finds a flash count on one page of the manual and applies it to a lamp they watched in the other state has read the equipment correctly and then answered the wrong question.",
        "Three flashes is the clearest example. In the live check table three flashes points at the indoor fan motor. In the indoor failure mode recall table three flashes means the serial signal from the outdoor unit was not received for up to six minutes. One of those is a motor, the other is the link between the two cabinets, and there is nothing about the lamp itself that separates them.",
        "So the count on its own is not a diagnosis. The count plus the state it was observed in is the smallest piece of information worth writing down, and it is worth writing down at the moment you see it rather than reconstructing it later.",
      ],
    },
    {
      title: "How the manual separates indoor from outdoor",
      paragraphs: [
        "In the recall sequence the manual asks two questions in order. First, does the left lamp blink at half-second intervals at all? If it does not, the indoor unit is treated as normal, with the caveat that some outdoor abnormalities cannot be recalled this way. Second, does the lamp stay lit for three seconds before the blinking starts? If it does, and no beep accompanies it, the outdoor unit is the subject and the count is looked up in the outdoor service manual for the MXZ series.",
        "That structure is worth knowing even if you never enter the recall mode yourself, because it explains why a technician asks whether the lamp did anything before it started counting. The answer decides which of two documents the visit is run from.",
      ],
    },
    {
      title: "Where an owner should stop",
      paragraphs: [
        "Watching a lamp and counting is safe, and so is writing down what preceded it. Entering the recall function is a service procedure. It is set up with a button combination on the handset and it changes how the unit responds, and the manual is explicit that the function must be released afterwards or the unit cannot operate properly. Clearing the stored condition also involves the emergency operation switch on the unit itself.",
        "The practical division is simple. Record what the equipment shows you, and leave anything that changes the equipment's state to somebody who has the manual for both the indoor and the outdoor model in front of them.",
      ],
    },
  ],
  safeChecks: [
    "Watch two complete flash cycles before recording a number, because a partial cycle reads as a different count.",
    "Note whether the lamp is lit steadily for about three seconds before the flashes begin.",
    "Record the indoor and outdoor model numbers from their plates, since the count is looked up in a different manual for each.",
  ],
  professionalEscalation: [
    "Setting up and releasing the failure mode recall function belongs to a technician working from service manual OBH799.",
    "Any count that resolves to a control board, a fan motor, or an outdoor abnormality needs qualified diagnosis rather than a part ordered from the number alone.",
  ],
  serviceHandoff:
    "Hand over three things: the flash count, whether the lamp was flashing during normal running or in a recall you were shown, and whether a steady three-second period preceded each group. Those three facts choose the table and the manual before the technician has taken a cover off.",
  resetGuidance:
    "Switching the supply off and on clears the live indication without clearing what the indoor board has stored. A fault that returns after the supply is restored has not been fixed by restoring it.",
  faqs: [
    {
      question: "Does a flashing lamp always mean the indoor unit is at fault?",
      answer:
        "No. The lamp is the only display these indoor units have, so it reports outdoor abnormalities as well. The manual uses a steady three-second period before the flashes to indicate that the outdoor unit is the subject, and the count is then read against the outdoor service manual.",
    },
    {
      question: "What is the failure mode recall function?",
      answer:
        "It is a service function that plays back an abnormal condition the indoor unit has already recorded, so an intermittent fault can be identified after the live indication has gone. The manual sets it up from the handset and requires it to be released before normal operation resumes.",
    },
    {
      question: "Why does the lamp beep in recall mode?",
      answer:
        "The manual describes a beep emitted in time with the flashes during recall. It gives you a second channel to count on, which matters when the lamp is behind a louvre or across a room.",
    },
    {
      question: "Do these counts apply to other Mitsubishi Electric indoor units?",
      answer:
        "Only to the models the manual covers, which are MSZ-AP15VF and MSZ-AP20VF in the E1 and ER1 variants. Other M-Series indoor ranges publish their own tables, and applying one range's count to another is how a thermistor fault becomes a board replacement.",
    },
  ],
  sourceIds: ["mitsubishi-msz-ap-service", "mitsubishi-literature"],
  relatedContent: [
    "/brands/mitsubishi/",
    "/brands/mitsubishi/p8-fault-code/",
    "/how-to-document-hvac-fault-for-service/",
    "/mini-split-not-turning-on/",
  ],
  glossaryTerms: ["error-code", "thermistor", "control-board"],
  keywords: [
    "mitsubishi msz-ap flashing light",
    "mitsubishi operation indicator lamp flashes",
    "msz-ap failure mode recall",
    "mitsubishi mini split blinking green light",
    "mitsubishi indoor unit fault count",
  ],
});
