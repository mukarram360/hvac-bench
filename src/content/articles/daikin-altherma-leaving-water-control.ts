import { publish } from "./publish";

export const daikinAlthermaLeavingWaterControl = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Daikin Altherma leaving-water control: fixed target versus weather-dependent",
  slug: "leaving-water-control",
  path: "/brands/daikin-altherma/leaving-water-control/",
  description:
    "A fixed Altherma target holds one leaving-water temperature. Weather-dependent control changes the target with outdoor temperature and its configured curve.",
  articleType: "guide",
  brand: "daikin-altherma",
  equipmentType: "heat-pump",
  productFamily: "Daikin Altherma low-temperature split systems covered by user guide 4PEN449972-1",
  models: ["EHVH04-16CBV", "EHBH04-16CBV", "Associated outdoor units in the cited user guide"],
  problemType: "leaving-water-temperature-control",
  symptomFamily: "no-heating",
  directAnswer:
    "A fixed leaving-water target asks the Altherma for the same water temperature until another control changes it. Weather-dependent mode calculates the target from outdoor temperature and the configured curve, so a lower target on a mild day can be correct even when the room setpoint has not changed.",
  scopeNotice:
    "This control distinction is documented for the named Altherma low-temperature split family. Later Altherma generations use different interfaces, and installer configuration decides which temperature controls the home screen exposes.",
  symptoms: ["The leaving-water target changes with weather, or a user cannot find one permanent flow-temperature value."],
  causes: [
    "Weather-dependent control deliberately moves the water target as outdoor conditions change.",
    "Room-temperature control and leaving-water control can both influence operation, depending on the installed user-interface location and configuration.",
  ],
  comparisonTable: {
    caption: "Two Altherma water-target methods",
    columns: ["Method", "What changes the target", "Expected display behavior"],
    rows: [
      ["Fixed", "A manually selected leaving-water value", "Target remains fixed until changed"],
      ["Weather-dependent", "Outdoor temperature and configured curve", "Target moves with weather"],
      ["Weather-dependent with shift", "Curve plus a user offset", "Whole curve moves warmer or cooler"],
    ],
  },
  figures: [{
    title: "Outdoor temperature becomes a water target through the curve",
    description: "The outdoor sensor supplies weather input, the configured curve converts it to a leaving-water target, and the emitters translate delivered water temperature into room heat.",
    nodes: [
      { label: "Outdoor sensor", detail: "Measures the weather input" },
      { label: "Heating curve", detail: "Calculates leaving-water target" },
      { label: "Radiators or floors", detail: "Transfer water heat into rooms" },
      { label: "Room response", detail: "Shows the combined system result" },
    ],
  }],
  sections: [
    {
      title: "The curve controls water, not the weather forecast for the room",
      paragraphs: [
        "An air-to-water heat pump delivers energy through water to radiators or underfloor loops. The curve translates colder outdoor conditions into a higher leaving-water target and milder conditions into a lower one. It does not directly promise a room temperature, because emitter size, flow, building loss, and room controls still sit between water and comfort.",
        "When rooms are persistently cool across weather conditions, record outdoor temperature, leaving-water target and actual value, room target, room temperature, and whether the same circuit serves radiators or floors. That set distinguishes a curve question from a delivery or zoning question.",
        "A target and an actual water temperature must be labeled separately. The curve can request the correct value while low flow or another control prevents delivery. Conversely, water can meet target while undersized emitters or building loss leave the room below setpoint.",
      ],
    },
    {
      title: "Adjust the right layer of control",
      paragraphs: [
        "A user offset can shift a weather-dependent target without replacing the curve. Repeated large corrections suggest the commissioning values or emitter assumptions need review. Changing several room valves, the curve, and the leaving-water offset together removes the evidence needed to see which layer solved the problem.",
        "Alarm 7H subcodes report water-flow conditions on a different Altherma family and are not curve settings. If a flow alarm is active, preserve the subcode and stop at the owner-safe boundary. Hydraulic tests, pump configuration, and installer menus require qualified service.",
      ],
    },
  ],
  faqs: [
    { question: "Why does my Altherma flow target fall on a mild day?", answer: "Weather-dependent control lowers the leaving-water target as outdoor conditions become milder. That movement is the purpose of the configured curve." },
    { question: "Is leaving-water temperature the same as room temperature?", answer: "No. It is the temperature of water leaving the heat-pump system. Emitters and building heat loss determine how that water affects the room." },
    { question: "What does a weather-dependent shift change?", answer: "It moves the calculated water target warmer or cooler while retaining the relationship between outdoor temperature and the curve." },
  ],
  sourceIds: ["daikin-altherma-user-reference", "daikin-altherma-homeowner"],
  relatedContent: ["/brands/daikin-altherma/", "/brands/daikin-altherma/7h-water-flow-subcodes/", "/heat-pump-operating-temperatures/"],
  glossaryTerms: ["heat-pump", "flow-temperature", "thermostat"],
  keywords: ["daikin altherma leaving water temperature", "altherma weather dependent curve", "daikin fixed leaving water target", "altherma flow temperature control"],
});
