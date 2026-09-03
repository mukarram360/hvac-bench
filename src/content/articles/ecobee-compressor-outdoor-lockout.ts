import { publish } from "./publish";

export const ecobeeCompressorOutdoorLockout = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "ecobee compressor minimum outdoor temperature: Disabled is not a rating",
  slug: "compressor-minimum-outdoor-temperature",
  path: "/brands/ecobee/compressor-minimum-outdoor-temperature/",
  description:
    "ecobee leaves Compressor Min Outdoor Temperature disabled by default. The correct cutoff must come from the installed heat pump, not the thermostat default.",
  articleType: "guide",
  brand: "ecobee",
  equipmentType: "controls-thermostats",
  productFamily: "ecobee thermostats with heat-pump threshold settings",
  models: ["ecobee Smart Thermostat Premium", "ecobee Enhanced and compatible threshold-menu models"],
  problemType: "compressor-outdoor-lockout",
  symptomFamily: "no-heating",
  directAnswer:
    "Compressor Min Outdoor Temperature is the point below which ecobee withholds the heat-pump compressor. The documented default is Disabled, which means ecobee has not imposed a fixed weather cutoff. It does not certify that the outdoor unit can run at every temperature.",
  scopeNotice:
    "The threshold appears on ecobee heat-pump configurations that expose Installation Settings. Equipment capability, auxiliary-heat type, and available outdoor-temperature data determine whether a fixed value is appropriate.",
  symptoms: ["The heat pump stops below a particular outdoor temperature, or only auxiliary heat runs after a threshold change."],
  causes: [
    "A selected minimum locks out compressor operation below its value and hands demand to the configured auxiliary strategy.",
    "With the setting Disabled, other staging thresholds and temperature difference can still bring on auxiliary heat without a fixed outdoor lockout.",
  ],
  decisionTable: {
    caption: "ecobee heat-pump threshold roles",
    columns: ["Threshold", "What it withholds", "Published default or boundary"],
    rows: [
      ["Compressor Min Outdoor Temperature", "Heat-pump compressor below the value", "Disabled by default"],
      ["Aux Heat Max Outdoor Temperature", "Auxiliary heat above the value", "Separate upper boundary"],
      ["Compressor Min Cycle Off Time", "Compressor restart until delay expires", "300 seconds by default"],
      ["Compressor Min On Time", "Compressor shutdown until run time is met", "300 seconds by default"],
    ],
  },
  figures: [{
    title: "Two thresholds create a source-eligibility window",
    description: "The compressor minimum closes the heat-pump path on the cold side. The auxiliary maximum closes backup heat on the warm side, while staging rules operate between those boundaries.",
    nodes: [
      { label: "Cold boundary", detail: "Compressor can be locked out" },
      { label: "Staging window", detail: "Temperature delta and run time influence AUX" },
      { label: "Warm boundary", detail: "Auxiliary heat can be locked out" },
    ],
  }],
  sections: [
    {
      title: "Use the heat-pump document to supply the missing number",
      paragraphs: [
        "ecobee directs users to the heat-pump or compressor manufacturer before adjusting the minimum. The outdoor unit's published operating range, matched indoor equipment, and low-ambient controls define its capability. A thermostat cannot infer those limits from the wire labels.",
        "A balance-point decision is also economic and capacity-based, which is not identical to a safety limit. One temperature may mark where backup becomes cheaper or necessary for load, while another marks where the manufacturer does not permit compressor operation. Preserve which question the chosen value answers.",
        "Matched-system data matters when an outdoor unit can pair with several indoor components. Use the combination installed at the property, not just the outdoor model's marketing range. Capacity at low temperature and permitted operation can be separate tables in the manufacturer literature.",
        "If no exact document is available, leave the thermostat threshold unchanged and ask the installer. Choosing a conservative-looking number without equipment evidence can disable useful heat-pump output or permit operation beyond the published boundary.",
      ],
    },
    {
      title: "Separate weather lockout from the five-minute compressor pause",
      paragraphs: [
        "The minimum outdoor setting follows weather. Compressor Minimum Cycle Off Time follows the end of the last cycle and defaults to 300 seconds. A heat call during that pause can show demand while the compressor waits, even on a warm day far above any outdoor lockout.",
        "Record outdoor temperature, compressor and auxiliary equipment status, the selected threshold, time since the prior cycle, and any calibrating message. Do not change several staging values together. An HVAC professional should compare the settings with the equipment manuals and installed backup source.",
      ],
    },
  ],
  faqs: [
    { question: "What does Disabled mean for ecobee compressor lockout?", answer: "It means ecobee is not applying a fixed minimum outdoor temperature. It is not a statement that the heat pump has unlimited low-temperature capability." },
    { question: "Why does AUX run when compressor lockout is disabled?", answer: "Other staging rules can call auxiliary heat from indoor temperature difference or run time. The outdoor lockout is only one input." },
    { question: "Is the compressor minimum the same as the five-minute delay?", answer: "No. One follows outdoor temperature. The cycle-off timer follows elapsed time after the compressor stops and defaults to 300 seconds." },
  ],
  sourceIds: ["ecobee-premium-manual", "ecobee-calibration"],
  relatedContent: ["/brands/ecobee/", "/brands/ecobee/calibrating-heat-cool-disabled/", "/heat-pump-operating-temperatures/", "/brands/goodman/comfortbridge-with-nest-or-ecobee/"],
  glossaryTerms: ["balance-point", "auxiliary-heat", "thermostat"],
  keywords: ["ecobee compressor minimum outdoor temperature", "ecobee heat pump lockout", "ecobee compressor min outdoor disabled", "ecobee aux heat threshold"],
});
