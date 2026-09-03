import { publish } from "./publish";

export const mitsubishiHyperHeatDefrostInterval = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Mitsubishi hyper-heating defrosting every 30 to 40 minutes: designed behaviour or a problem to chase",
  slug: "hyper-heat-defrost-interval",
  path: "/brands/mitsubishi/hyper-heat-defrost-interval/",
  description:
    "Mitsubishi documents a defrost prohibition time, a setting that shortens it for snowy regions, and a capacity correction for frost. What a short interval means.",
  articleType: "guide",
  brand: "mitsubishi",
  equipmentType: "heat-pump",
  productFamily:
    "Mitsubishi Electric hyper-heating outdoor units, using the MXZ multi-zone service documentation as the published reference for defrost control settings",
  models: [
    "Mitsubishi Electric MXZ hyper-heating outdoor units",
    "Mitsubishi Electric outdoor units sharing the same defrost control switch functions",
  ],
  problemType: "defrost-interval",
  symptomFamily: "ice-and-frost",
  directAnswer:
    "A short interval on its own is not evidence of a fault, because Mitsubishi treats defrost timing as an adjustable design variable. The service documentation describes a defrosting prohibition time and a switch that shortens it for high humidity or heavy snow regions, and states directly that heating performance is somewhat reduced as a result because defrosting is performed more. The manufacturer also publishes a correction factor for heating capacity under frost and defrost conditions, which is a formal statement that rated output is not what you get while the coil is frosting.",
  scopeNotice:
    "The defrost switch functions and the capacity correction described here are read from Mitsubishi MXZ service documentation. Defrost timing on other manufacturers is governed by different logic entirely, and outdoor unit families within Mitsubishi may carry different switch sets.",
  symptoms: [
    "Defrost cycles arrive at roughly half-hour intervals through cold, damp weather.",
    "Indoor temperature drifts below setpoint across an evening and does not recover between cycles.",
    "The outdoor coil looks frosted between cycles even shortly after one has finished.",
  ],
  causes: [
    "Weather that puts moisture on the coil faster than a longer interval would tolerate, which is what the shortened prohibition time is designed for.",
    "A capacity shortfall that is expected while frosting, quantified by the published correction factor rather than by any fault code.",
    "A heating load that exceeds what the system can deliver at the current outdoor condition once defrost time is deducted.",
    "Airflow or drainage conditions at the outdoor unit that keep the coil wet, which is a different question from defrost timing.",
  ],
  decisionTable: {
    caption: "Reading a short defrost interval against what Mitsubishi documents",
    columns: ["What you observe", "How the documentation reads it"],
    rows: [
      ["Short intervals in humid or snowy weather", "Consistent with the shortened prohibition time setting"],
      ["Reduced heating output during frosting", "Expected, and quantified by the capacity correction factor"],
      ["Defrost cycles closer than ten minutes apart", "Outside the interval the manual forced defrost respects"],
      ["Coil still frosted after a cycle completes", "A question about the defrost itself rather than its timing"],
    ],
  },
  comparisonTable: {
    caption: "Timing and capacity are separate complaints",
    columns: ["Complaint", "What to measure"],
    rows: [
      ["Defrost happens too often", "Interval between cycles, outdoor temperature and humidity"],
      ["The house is falling behind", "Indoor temperature trend across several hours, not one cycle"],
      ["Defrost does not clear the coil", "Coil appearance immediately after a cycle ends"],
      ["Ice at the base rather than on the coil", "Where water sits and whether it drains away"],
    ],
  },
  sections: [
    {
      title: "Mitsubishi treats defrost frequency as a setting with a stated cost",
      paragraphs: [
        "The service documentation lists a switch function for changing the defrosting control, with a normal position and a position intended for high humidity. Its stated purpose is to shorten the defrosting prohibition time in high humidity or heavy snow regions in order to reduce malfunctions caused by frost. The remark alongside it is unusually candid: heating performance is somewhat reduced, because defrosting is carried out more.",
        "That single entry answers the question the title asks. A shorter interval is a position the manufacturer offers on purpose, chosen against frost problems and paid for in heating output. A system set that way is behaving as configured, and the honest response is to check what it was set to rather than to look for a broken part.",
        "There is also a floor on how close cycles can be. The manual defrost function is described as effective only at startup or ten minutes after the last defrosting operation, which tells you the control enforces a minimum spacing rather than defrosting on demand.",
      ],
    },
    {
      title: "Lost capacity during frosting is published, not hidden",
      paragraphs: [
        "The same documentation carries a correction of heating capacity for frost and defrosting, instructing the reader that if heating capacity has been reduced due to frost formation or defrosting, the capacity should be multiplied by the appropriate correction factor from the table to obtain the actual heating capacity.",
        "Two things follow from that. Rated heating capacity is a laboratory figure that the manufacturer itself corrects downward for frosting conditions, so comparing a cold damp evening against a nameplate number compares two different measurements. And the correction is a function of outdoor conditions, so the same equipment gives different answers on different nights without anything changing.",
        "This is where a household complaint about falling behind should be measured rather than argued. An indoor temperature trend across several hours, alongside the outdoor temperature, describes the balance between load and delivered capacity. A single defrost cycle describes nothing.",
      ],
    },
    {
      title: "What would move this from designed behaviour to a real problem",
      paragraphs: [
        "The useful separation is between the timing of defrost and the result of it. Timing that is short in humid weather has a documented explanation. A cycle that finishes with the coil still carrying frost does not, and that observation is worth more than any interval measurement.",
        "Ice that accumulates at the base of the unit rather than on the coil is a drainage question. Mitsubishi offers a base heater as an option, described as reducing snow on the base while heating operation is stopped, at the cost of higher power consumption while the unit is idle. The existence of that option says the manufacturer expects base ice to be a regional concern with its own remedy.",
        "So the sequence to work through is: does the cycle clear the coil, does water leave the unit, and only then, is the interval consistent with the weather. Answering those in order keeps a settings question from being answered with a parts order.",
      ],
    },
    {
      title: "What to record before asking anyone to change something",
      paragraphs: [
        "Three logs settle most of these conversations. Time and duration of several defrost cycles across one evening, outdoor temperature and a sense of the humidity at those times, and the indoor temperature at hourly intervals through the same period.",
        "Add photographs of the outdoor coil immediately after a cycle ends and again ten minutes later. Those two images distinguish a defrost that is doing its job from one that is not, and they are the only evidence in this whole list that a technician cannot recreate on a warmer day.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is a 30 minute defrost interval normal in winter?",
      answer:
        "Mitsubishi documents a setting that deliberately shortens the defrosting prohibition time for high humidity and heavy snow regions, and notes heating performance is reduced as a result. A short interval in those conditions is consistent with that setting.",
    },
    {
      question: "Why does the house fall behind during frosty weather?",
      answer:
        "Heating capacity while frosting is lower than the rated figure. Mitsubishi publishes a correction factor to be applied to capacity when it has been reduced by frost formation or defrosting.",
    },
    {
      question: "How close together can defrost cycles run?",
      answer:
        "The manual defrost function is documented as effective only at startup or ten minutes after the last defrosting operation, which indicates the control enforces a minimum spacing between cycles.",
    },
    {
      question: "What makes defrost behaviour genuinely abnormal?",
      answer:
        "A cycle that ends with the coil still frosted, or ice building at the base of the unit rather than on the coil. Those describe the result of defrost rather than its timing.",
    },
    {
      question: "Can the defrost setting be changed?",
      answer:
        "It is an outdoor unit service switch function with a published trade-off in heating performance, so it belongs to a technician who can weigh frost problems against output for that installation.",
    },
  ],
  sourceIds: ["mitsubishi-mxz-service", "mitsubishi-m-series"],
  relatedContent: [
    "/brands/mitsubishi/",
    "/brands/mitsubishi/mxz-post-defrost-overshoot-and-short-cycling/",
    "/how-heat-pump-defrost-works/",
    "/heat-pump-outdoor-unit-iced-over/",
  ],
  glossaryTerms: ["defrost-cycle", "heat-pump", "condenser-coil", "cop"],
  keywords: [
    "mitsubishi hyper heat defrost frequency",
    "mxz defrost every 30 minutes",
    "mitsubishi defrost interval winter",
    "heat pump defrost too often",
    "hyper heating capacity in frost",
  ],
});
