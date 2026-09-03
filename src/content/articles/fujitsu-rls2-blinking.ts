import { publish } from "./publish";

export const fujitsuRls2Blinking = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Fujitsu RLS2 operation light blinking: defrost or a fault?",
  slug: "rls2-operation-light-blinking",
  path: "/brands/fujitsu/rls2-operation-light-blinking/",
  description:
    "Read a blinking Fujitsu RLS2 operation lamp by timing and companion lights, and separate normal heat-pump defrost from a service pattern.",
  articleType: "troubleshooting",
  brand: "fujitsu",
  equipmentType: "ductless-mini-split",
  productFamily: "RLS2 Series",
  models: ["AOU9RLS2", "AOU12RLS2", "AOU15RLS2"],
  problemType: "indicator-light",
  directAnswer:
    "On Fujitsu RLS2 systems, a slowly flashing green OPERATION lamp during heating can be normal automatic defrost and may continue for up to 15 minutes. A repeating pattern involving OPERATION, TIMER, and ECONOMY lamps is diagnostic and should be recorded for service.",
  scopeNotice:
    "The normal-state timing and lamp meanings here come from Fujitsu's RLS2 operating manual. Other AIRSTAGE and retired Halcyon series use different lamp combinations, so confirm an RLS2 model before counting flashes.",
  symptoms: ["The green OPERATION indicator flashes and the indoor unit pauses or changes airflow."],
  causes: [
    "Automatic defrost temporarily interrupts heating while the outdoor coil is cleared.",
    "A multi-lamp repeating sequence can report a system diagnostic condition rather than normal defrost.",
  ],
  diagnosticBranches: [
    {
      title: "Green operation lamp flashes slowly in heat",
      observation:
        "Heating pauses in cold or damp weather, the green lamp blinks at a steady slow pace, and no repeating TIMER or ECONOMY sequence joins it.",
      action:
        "Allow the published defrost interval to finish and observe whether heating resumes without changing settings.",
    },
    {
      title: "Several lamps repeat a countable pattern",
      observation:
        "OPERATION, TIMER, or ECONOMY lights flash in groups that repeat, or the unit does not return to heating after the normal interval.",
      action:
        "Make a short video that captures two full cycles and give the exact indoor and outdoor models to Fujitsu service.",
    },
  ],
  decisionTable: {
    caption: "RLS2 blinking-light distinctions",
    columns: ["Lamp behavior", "Likely state", "Response"],
    rows: [
      ["Slow green flash during heating", "Automatic defrost", "Wait up to the manual's 15-minute maximum"],
      ["TIMER flashes after an outage", "Clock or timer lost power", "Reset the clock and programmed timer"],
      ["Multiple lamps flash in groups", "Diagnostic indication", "Record full pattern and obtain service"],
    ],
  },
  figures: [
    {
      title: "Read context before counting",
      description:
        "Mode and duration separate an ordinary heating transition from a repeating diagnostic pattern more reliably than the word blinking alone.",
      nodes: [
        {
          label: "Heating mode",
          detail: "Confirms that automatic defrost is possible",
        },
        {
          label: "One slow green lamp",
          detail: "Matches the documented defrost indication",
        },
        {
          label: "Fifteen-minute boundary",
          detail: "Published maximum for the described defrost pause",
        },
        {
          label: "Grouped lamp sequence",
          detail: "Preserve on video for model-specific decoding",
        },
      ],
    },
  ],
  sections: [
    {
      title: "The blink that belongs to heating",
      paragraphs: [
        "A heat pump has to remove outdoor-coil frost while it is heating the room. During that automatic defrost operation, the RLS2 manual says the green OPERATION lamp flashes and the unit can pause normal heating. The manual gives a maximum of about 15 minutes for the cycle. Outdoor steam, a changed fan sound, and a brief interruption of warm indoor air can accompany the state. Those observations together are more useful than the lamp alone because they agree with the physical job the system is doing.",
        "Avoid cancelling the cycle by changing modes or repeatedly switching power. Interruption can leave the coil unfinished and makes it harder to tell whether the unit would have resumed by itself. Start a timer when you first notice the steady slow blink. If normal heating returns inside the documented window, no error-code interpretation is needed. If it does not, the duration becomes evidence for the service report.",
      ],
    },
    {
      title: "When blinking becomes diagnostic information",
      paragraphs: [
        "Fujitsu also uses combinations of the OPERATION, TIMER, and ECONOMY indicators as fault communication on supported families. Those sequences must be read against the exact model's table. Counting only one lamp, or searching for a generic Fujitsu blink code, can select the wrong series and send diagnosis toward an unrelated component.",
        "Film two complete repetitions with the unit and all lamps visible. Record which operating mode was selected, the outdoor conditions, whether heating resumed, and whether the event followed a power interruption. A TIMER indication after lost power may call for clock and timer setup rather than refrigeration service. A stable multi-lamp sequence or a pause beyond the RLS2 defrost allowance belongs with an authorised technician.",
      ],
    },
  ],
  safeChecks: [
    "Confirm heating mode, time the pause without interrupting it, and record every illuminated lamp in one continuous video.",
  ],
  professionalEscalation: [
    "Arrange service when the lamp sequence repeats with loss of operation or the RLS2 does not resume after the documented defrost interval.",
  ],
  serviceHandoff:
    "Send the technician the indoor and outdoor model numbers, a two-cycle lamp video, selected mode, outdoor conditions, pause duration, and any recent outage information.",
  resetGuidance:
    "Do not reset a normal defrost cycle; if a diagnostic pattern persists, preserve it before following any model-specific restart instruction.",
  faqs: [
    {
      question: "How long can Fujitsu RLS2 defrost last?",
      answer:
        "The RLS2 operating manual states that automatic defrost can take up to 15 minutes. Heating should then resume without the user forcing a mode change.",
    },
    {
      question: "Why is the timer light flashing after a power cut?",
      answer:
        "A power interruption can disturb the clock and timer settings. Restore those settings first if the symptom is limited to the timer indication.",
    },
    {
      question: "Should I count every Fujitsu blinking light?",
      answer:
        "Count and film all lamps only when the pattern repeats or operation fails to resume. A lone slow green OPERATION flash in heating has a documented normal meaning on RLS2.",
    },
  ],
  sourceIds: ["fujitsu-rls2-operation", "fujitsu-troubleshooting"],
  glossaryTerms: ["error-code", "control-board"],
  relatedContent: ["/brands/fujitsu/", "/how-heat-pump-defrost-works/", "/how-to-tell-if-mini-split-is-in-defrost/"],
  keywords: [
    "fujitsu operation light blinking",
    "fujitsu rls2 blinking green light",
    "fujitsu mini split defrost light",
    "aou12rls2 flashing light",
  ],
});
