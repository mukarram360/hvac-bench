import { publish } from "./publish";
export const friedrichFloatingAirReturningCode = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Friedrich Floating Air code returns after a restart",
  slug: "floating-air-code-returns-after-restart",
  path: "/brands/friedrich/floating-air-code-returns-after-restart/",
  description:
    "Use Friedrich's two-level response for Floating Air Select U8, E5, E6, E8, H6, C5, F0, F1, and F2 without guessing a failed part.",
  articleType: "troubleshooting",
  brand: "friedrich",
  equipmentType: "ductless-mini-split",
  productFamily: "Floating Air Select single-zone wall-mounted systems",
  models: ["Floating Air Select 9K", "Floating Air Select 12K", "Floating Air Select 18K", "Floating Air Select 24K"],
  problemType: "persistent-error-code",
  directAnswer:
    "Friedrich's Floating Air Select owner manual allows a restart check for U8, E5, E6, E8, and H6, followed by professional service if the code remains. It directs C5, F0, F1, and F2 straight to qualified service. The owner table does not justify naming or replacing a component.",
  scopeNotice:
    "This response is for the 9K through 24K Floating Air Select single-zone wall-mounted manual cited here. Floating Air Pro, multi-zone, Breeze, Chill, and VRP products have different controls and code tables.",
  symptoms: ["A listed code remains on the indoor display or returns when the unit attempts to operate."],
  causes: [
    "A transient control state can clear after the single restart check permitted for the first group.",
    "A persistent protection, sensor, fan, control, or system condition can require tests not exposed by the owner display.",
  ],
  diagnosticBranches: [
    {
      title: "Display shows U8, E5, E6, E8, or H6",
      observation:
        "The characters match the group for which the owner manual permits restarting the unit and checking whether the display clears.",
      action:
        "Perform one normal restart as the manual directs, record the outcome, and call qualified service if the same code remains or returns.",
    },
    {
      title: "Display shows C5, F0, F1, or F2",
      observation:
        "The characters match the group the owner manual sends directly to a qualified service professional.",
      action:
        "Do not experiment with reset loops or internet component lists; preserve the display and arrange model-specific diagnosis.",
    },
  ],
  decisionTable: {
    caption: "Floating Air Select owner response by code",
    columns: ["Displayed group", "Owner-manual response", "After that"],
    rows: [
      ["U8, E5, E6, E8, H6", "Restart once and recheck", "Service if persistent"],
      ["C5, F0, F1, F2", "No owner diagnostic step", "Contact qualified service"],
      ["Any other characters", "Do not force into these groups", "Use exact model documentation"],
    ],
  },
  figures: [
    {
      title: "The single-restart decision",
      description:
        "Friedrich's owner instruction uses the restart only as a persistence test, then moves a returning code across the professional service boundary.",
      nodes: [
        {
          label: "Record display",
          detail: "Preserve every character before changing power",
        },
        {
          label: "Check code group",
          detail: "Select restart-allowed or direct-service response",
        },
        { label: "One restart", detail: "Used only for the five listed codes" },
        {
          label: "Persistence result",
          detail: "A remaining or returning code goes to qualified service",
        },
      ],
    },
  ],
  sections: [
    {
      title: "The manual gives a response, not a parts diagnosis",
      paragraphs: [
        "An owner manual has a different job from a service manual. For U8, E5, E6, E8, and H6, Friedrich tells the user to restart the unit and see whether the code persists. That instruction tests whether the controller returns to normal after an ordinary restart. It does not mean that every code in the group has the same cause, and it does not identify a board, motor, sensor, or refrigerant repair. If the display returns, the result of the test is simply persistent fault.",
        "C5, F0, F1, and F2 skip that owner check. The published response is to contact a qualified service professional. Searching a generic code list can be especially misleading here because the same characters appear on unrelated Friedrich products and on other manufacturers' platforms. Full product identity is more reliable than a bare two-character search.",
      ],
    },
    {
      title: "Preserve what the next person cannot recreate",
      paragraphs: [
        "Before the permitted restart, photograph the display and both model labels. Note the selected mode, set temperature, outdoor conditions, time since startup, indoor airflow, outdoor fan behavior, and any preceding outage or service. If the code is intermittent, this is the only record of its original context.",
        "Stop immediately for a breaker trip, burning smell, smoke, water reaching electrical parts, or unusual grinding. Do not open the indoor or outdoor electrical enclosure, touch terminals, or add refrigerant. If U8, E5, E6, E8, or H6 returns after the one restart, leave further cycling alone. If C5, F0, F1, or F2 is displayed, proceed directly to service as the owner manual specifies.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the exact code and paired model labels, identify its owner-response group, and record the operating context before changing power.",
  ],
  professionalEscalation: [
    "Persistent U8, E5, E6, E8, or H6 and every C5, F0, F1, or F2 display require qualified Friedrich service.",
  ],
  serviceHandoff:
    "Provide both model numbers, code photo, selected mode, time to code, airflow and outdoor-unit observations, outage or repair history, and the one-restart result when applicable.",
  resetGuidance:
    "Restart only U8, E5, E6, E8, or H6 once as directed; do not reset-loop a returning code or the direct-service group.",
  faqs: [
    {
      question: "Can I reset Friedrich E6 myself?",
      answer:
        "The cited Floating Air Select manual permits one restart check for E6. If it remains or returns, its next instruction is qualified service.",
    },
    {
      question: "Should I reset a Friedrich F0 code?",
      answer:
        "Not under this owner table. F0 belongs to the group sent directly to a qualified service professional, along with C5, F1, and F2.",
    },
    {
      question: "Does E5 mean the same on every Friedrich unit?",
      answer:
        "No. This page does not assign E5 a component meaning and is limited to the Floating Air Select owner response. Use the exact product manual.",
    },
  ],
  sourceIds: ["friedrich-floating-air", "friedrich-resources"],
  glossaryTerms: ["error-code", "data-plate"],
  relatedContent: [
    "/brands/friedrich/",
    "/how-to-reset-mini-split-safely/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  keywords: [
    "friedrich floating air error code",
    "friedrich e6 error code",
    "friedrich f0 code",
    "floating air select reset",
  ],
});
