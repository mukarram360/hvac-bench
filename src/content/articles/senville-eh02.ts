import { publish } from "./publish";

/**
 * EH 02 is tied to a fan motor design, so the page turns on whether the model
 * uses that design at all. Senville also specifies an exact restart interval,
 * which is the one action a homeowner can take correctly or incorrectly.
 */
export const senvilleEh02 = publish({
  title: "Senville EH 02 error code: zero-crossing signal fault",
  slug: "eh02-error-code",
  path: "/brands/senville/eh02-error-code/",
  description:
    "What Senville EH 02 reports on applicable LETO and AURA models, why the fan motor design matters, and how to use the documented two-minute restart.",
  articleType: "error-code",
  brand: "senville",
  equipmentType: "ductless-mini-split",
  productFamily: "LETO and AURA models using an applicable AC fan motor",
  models: [
    "Senville LETO models with the applicable AC fan design",
    "Senville AURA models with the applicable AC fan design",
  ],
  errorCode: "EH 02",
  problemType: "zero-crossing-signal-fault",
  directAnswer:
    "Senville says EH 02 on applicable LETO and AURA equipment means the indoor PCB is not receiving the expected zero-crossing feedback associated with the AC fan motor; it does not apply the same way to DC-motor designs.",
  scopeNotice:
    "This code is attached to a specific indoor fan motor design. Senville support scopes EH 02 to LETO and AURA models using the applicable AC fan motor, so a model built around a DC motor does not share the same signal arrangement and should not be diagnosed from this entry.",
  symptoms: [
    "The indoor display shows EH 02 and indoor fan operation may be interrupted.",
  ],
  causes: [
    "A wiring or power-supply issue can interrupt the expected feedback signal.",
    "The indoor control board may be faulty after wiring and supply are verified.",
  ],
  diagnosticBranches: [
    {
      title: "Confirm the model uses the applicable fan design",
      observation:
        "The indoor unit shows EH 02, but it is not yet established whether the model is one of the LETO or AURA units built around the applicable AC fan motor.",
      action:
        "Check the model against Senville support before going further. The zero-crossing signal this code refers to belongs to that motor arrangement, so the entry does not transfer to a different design.",
    },
    {
      title: "Perform the documented restart exactly",
      observation:
        "The model is confirmed and the code is displayed, with no restart attempted yet.",
      action:
        "Remove system power completely, wait the full two minutes Senville specifies, then restore it. The interval matters; a quick flick of the breaker is not the same test and will not tell you what the documented procedure would have.",
    },
    {
      title: "EH 02 returns after the full two-minute restart",
      observation:
        "Power was removed for the specified interval and restored, and the code came back either immediately or when the indoor fan next tried to run.",
      action:
        "Arrange service. What remains is wiring, supply, the fan arrangement, and the indoor board, and separating them means opening the indoor electrical enclosure.",
    },
  ],
  figures: [
    {
      title: "The feedback the indoor board expects",
      description:
        "The indoor control watches for a timing signal associated with the AC supply and the fan arrangement. EH 02 says that signal is not arriving as expected.",
      nodes: [
        { label: "Indoor supply", detail: "The alternating supply the timing reference comes from" },
        { label: "Signal path", detail: "Wiring and connections carrying the feedback" },
        { label: "Indoor control board", detail: "Expects the reference and reports when it is absent" },
        { label: "Indoor fan motor", detail: "The AC design the code is scoped to" },
      ],
    },
  ],
  sections: [
    {
      title: "Why the motor design decides whether this page applies",
      paragraphs: [
        "A zero-crossing reference is a timing signal derived from the alternating supply, and it exists so a control can synchronise switching with the supply waveform. That arrangement belongs to the AC fan motor design Senville scopes this code to. Equipment built around a DC motor manages fan speed differently and does not rely on the same reference in the same way.",
        "So the model check is not a formality. If the code is read on equipment outside that scope, the definition on this page describes a signal the system may not use, and the diagnosis starts from a false premise. Senville support is the place to confirm which design your model uses.",
      ],
    },
    {
      title: "Two minutes means two minutes",
      paragraphs: [
        "The documented restart specifies a complete power removal for two minutes. It is easy to treat that as approximate, and it is worth understanding why it is not. Control electronics hold stored states and residual charge briefly after the supply is removed, and the interval exists so those states genuinely clear before power returns.",
        "A restart that is too short can leave the equipment in the same state it was already in, which produces a misleading result: the code returns and it looks like a standing fault when the test was never properly performed. Time it, do it once, and treat the outcome as real either way.",
        "Time it with a clock rather than counting. Two minutes feels considerably longer than it is when you are standing at a consumer unit in a cold hallway, and a restart that was actually forty seconds produces a result you cannot rely on. The whole value of the step is that it is repeatable and specified.",
      ],
    },
  ],
  decisionTable: {
    caption: "Reading the result of the documented restart",
    columns: ["What happens after the full two minutes", "What it establishes", "Where that leaves you"],
    rows: [
      [
        "The code clears and stays clear",
        "The condition was transient rather than a standing fault",
        "Note the date and watch whether it returns over the following weeks",
      ],
      [
        "The code returns when the fan tries to run",
        "The signal fails under operating conditions rather than at rest",
        "Report that specific behaviour, because it is more useful than the code alone",
      ],
      [
        "The code never clears",
        "The feedback path is broken rather than intermittent",
        "Arrange service and leave the system off in the meantime",
      ],
    ],
  },
  safeChecks: [
    "Confirm the exact series and whether the model uses the applicable AC fan motor before using this diagnosis.",
    "Turn off system power completely, wait two minutes as Senville directs, and observe whether the code returns.",
  ],
  professionalEscalation: [
    "If the code remains, wiring, supply, fan design, and indoor PCB checks belong with qualified service.",
    "Do not access the indoor electrical enclosure or test energized components.",
  ],
  serviceHandoff:
    "Tell the technician the exact Senville series and model, confirm that the documented two-minute power-off restart was performed in full, say whether the code returned immediately or when the fan tried to run, and mention any recent electrical work.",
  resetGuidance:
    "Senville specifies one complete two-minute power-off restart; recurrence means the fault needs service.",
  faqs: [
    {
      question: "What is a zero-crossing signal?",
      answer:
        "It is a timing reference taken from the alternating supply, used by the control to synchronise with the supply waveform. On the applicable LETO and AURA models, EH 02 means the indoor board is not receiving that reference as expected.",
    },
    {
      question: "Does EH 02 apply to my DC motor Senville?",
      answer:
        "Senville scopes this code to models using the applicable AC fan motor design. A DC arrangement manages fan speed differently, so confirm your model with Senville support rather than assuming the same entry applies.",
    },
    {
      question: "Why does the restart have to be two minutes?",
      answer:
        "Because stored states and residual charge take time to clear after the supply is removed. A shorter interruption may leave the control where it was, which makes the result of the restart meaningless rather than informative.",
    },
    {
      question: "Can I check the fan wiring myself?",
      answer:
        "No. The wiring and the board sit inside the indoor electrical enclosure, and inspecting or testing them means exposure to live parts. Once the documented restart has been tried, the remaining work belongs with a qualified technician.",
    },
  ],
  sourceIds: ["senville-eh02"],
  relatedContent: ["/brands/senville/", "/mini-split-not-turning-on/", "/mini-split-making-noise/"],
  keywords: [
    "senville eh02 error code",
    "senville eh 02 fault",
    "senville leto error code",
    "zero crossing signal error",
    "senville indoor fan error",
  ],
});
