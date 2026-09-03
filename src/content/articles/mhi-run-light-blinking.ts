import { publish } from "./publish";
export const mhiRunLightBlinking = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "MHI RUN light blinking: warm-up, defrost, or a fault?",
  slug: "run-light-blinking",
  path: "/brands/mitsubishi-heavy-industries/run-light-blinking/",
  description:
    "Decode a blinking RUN lamp on documented Mitsubishi Heavy Industries room air conditioners by cadence, mode, duration, and recovery.",
  articleType: "troubleshooting",
  brand: "mitsubishi-heavy-industries",
  equipmentType: "ductless-mini-split",
  productFamily: "MHI wall-mounted room air conditioners in manual RLC012A102A",
  models: ["Models covered by MHI manual RLC012A102A"],
  problemType: "indicator-light",
  directAnswer:
    "On the documented Mitsubishi Heavy Industries room air conditioners, a slow RUN-light blink of about 1.5 seconds on and 0.5 seconds off can mean heating warm-up or automatic defrost. A different repeating lamp pattern, or failure to resume after the stated operating interval, needs model-specific interpretation.",
  scopeNotice:
    "This cadence comes from MHI manual RLC012A102A and must not be applied to Mitsubishi Electric products or to MHI KX and other controls with different displays. Confirm the exact model before decoding another pattern.",
  symptoms: ["The green RUN indicator blinks while heating output pauses or indoor airflow changes."],
  causes: [
    "Heating warm-up or automatic defrost can produce the documented slow blink as a normal state.",
    "A persistent or differently timed sequence may report an operating problem defined in the exact model manual.",
  ],
  diagnosticBranches: [
    {
      title: "Slow blink occurs during heating",
      observation:
        "The lamp stays on for roughly 1.5 seconds and off for roughly 0.5 seconds while the unit warms up or outdoor frost is being cleared.",
      action:
        "Leave the selected heating setting unchanged and observe whether normal warm airflow resumes within the manual's defrost range.",
    },
    {
      title: "Cadence or recovery does not match",
      observation:
        "The blink uses another rhythm, combines with another lamp, continues without heat returning, or follows an abnormal noise or electrical trip.",
      action:
        "Video two full cycles, record elapsed time and conditions, and use the precise MHI model manual or qualified service.",
    },
  ],
  decisionTable: {
    caption: "MHI RUN-lamp context check",
    columns: ["Lamp and context", "Documented reading", "Safe response"],
    rows: [
      ["Slow blink as heating starts", "Hot-air preparation", "Wait for warm airflow"],
      ["Slow blink in cold weather", "Automatic defrost", "Allow the cycle to finish"],
      ["RUN lamp stays on after cooling", "Self-clean may be operating", "Consult the selected function in the manual"],
      ["Other repeating combination", "Not decoded by this guide", "Save video and obtain model-specific help"],
    ],
  },
  figures: [
    {
      title: "Normal heating interruption sequence",
      description:
        "The useful distinction is recovery: warm-up or defrost temporarily changes airflow, completes its control task, and hands operation back to the original heat demand.",
      nodes: [
        {
          label: "Heat requested",
          detail: "Controller starts or continues a room-heating demand",
        },
        {
          label: "Preparation or defrost",
          detail: "Indoor airflow pauses while temperatures are managed",
        },
        {
          label: "Slow RUN blink",
          detail: "Published cadence identifies this temporary state",
        },
        {
          label: "Warm-air return",
          detail: "Normal heating resumes without a reset",
        },
      ],
    },
  ],
  sections: [
    {
      title: "A cadence has more meaning than the word blinking",
      paragraphs: [
        "Search results can collapse every flashing lamp into an error code. MHI's operating manual does not. It assigns a specific slow cadence to hot-air preparation and automatic defrost in heating. During preparation, the indoor fan is held back until the heat exchanger can deliver warmer air. During defrost, the refrigerant cycle temporarily clears the outdoor coil, so room heating pauses. Both behaviors protect performance and comfort, and both should end by returning the system to the existing request.",
        "The manual describes automatic defrost as lasting about five to fifteen minutes. That is a bounded observation, not permission to ignore an endless pause. Time the event from when you notice it and look for recovery. A different cadence cannot be translated by rounding it to the slow pattern. Lamp combinations are deliberate diagnostic data, so preserve them rather than describing every sequence as a blinking green light.",
      ],
    },
    {
      title: "Keep MHI and Mitsubishi Electric separate",
      paragraphs: [
        "Mitsubishi Heavy Industries Thermal Systems is not Mitsubishi Electric. Their names overlap in conversation, but their controllers, manuals, and fault conventions do not. The logo on the rating plate and the complete model number decide which manufacturer literature applies. Searching only for Mitsubishi RUN light can therefore produce a confident answer for the wrong machine.",
        "For the documented slow blink, avoid mode changes and power cycling while a plausible defrost is underway. Observe outdoor frost, drainage, vapour, elapsed time, and the return of warm air. If the sequence exceeds the manual's range, heating never recovers, or the lamps use another count, film the pattern and arrange service. Do not open covers to watch control-board LEDs.",
      ],
    },
  ],
  safeChecks: [
    "Compare the lamp cadence with the published slow pattern, time the interruption, and record whether warm airflow returns without changing controls.",
  ],
  professionalEscalation: [
    "A non-matching pattern, electrical trip, abnormal smell, or failure to recover after the documented interval needs qualified MHI diagnosis.",
  ],
  serviceHandoff:
    "Provide the MHI model number, a clear lamp video, mode, set temperature, outdoor weather, interruption length, frost or drainage observations, and recovery result.",
  resetGuidance:
    "Do not reset a normal warm-up or defrost sequence; preserve any persistent non-matching blink before following model-specific instructions.",
  faqs: [
    {
      question: "How long does MHI defrost take?",
      answer:
        "The cited MHI manual describes automatic defrost as approximately five to fifteen minutes. The system should then return to its heating request.",
    },
    {
      question: "Why does the RUN light blink when heating starts?",
      answer:
        "The documented slow blink can indicate hot-air preparation, when indoor airflow is delayed until the heat exchanger is ready to deliver warmer air.",
    },
    {
      question: "Are MHI blink codes the same as Mitsubishi Electric?",
      answer:
        "No. They are separate manufacturers. A pattern from one must not be used to diagnose the other, even when owners shorten both names to Mitsubishi.",
    },
  ],
  sourceIds: ["mhi-room-air-user", "mhi-user-manual-index"],
  glossaryTerms: ["error-code", "control-board"],
  relatedContent: [
    "/brands/mitsubishi-heavy-industries/",
    "/how-to-tell-if-mini-split-is-in-defrost/",
    "/how-heat-pump-defrost-works/",
  ],
  keywords: [
    "mhi run light blinking",
    "mitsubishi heavy industries flashing run light",
    "mhi air conditioner defrost light",
    "mitsubishi heavy run lamp",
  ],
});
