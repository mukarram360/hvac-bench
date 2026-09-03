import { publish } from "./publish";

export const hiveOfflineHeatingControl = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Hive heating offline: use the thermostat or receiver without app control",
  slug: "heating-control-when-offline",
  path: "/brands/hive/heating-control-when-offline/",
  description:
    "Hive says local thermostat control can remain available when the app is offline. If it does not, the receiver manual override can call the boiler temporarily.",
  articleType: "guide",
  brand: "hive",
  equipmentType: "controls-thermostats",
  productFamily: "Hive thermostat and receiver systems covered by current United Kingdom support",
  models: ["Hive Thermostat", "Hive Thermostat Mini", "Hive single-channel and dual-channel receivers"],
  problemType: "offline-manual-heating-control",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Loss of app access does not automatically remove local heat. First try the physical thermostat. If it cannot control the room, Hive directs the user to the receiver's manual override button. That temporary call bypasses app convenience, not boiler safeties or downstream faults.",
  scopeNotice:
    "Button position and channel behavior differ between Hive receiver generations and single-channel or dual-channel models. Use the receiver label and matching support image before pressing an override.",
  symptoms: ["The Hive app cannot reach heating devices, but the property still needs a temporary local heat command."],
  causes: [
    "Internet, account, hub, or app connectivity can fail while thermostat-to-receiver control remains paired.",
    "If thermostat control is also unavailable, the receiver can provide a local manual demand without rebuilding the whole network first.",
  ],
  decisionTable: {
    caption: "Hive offline control choices",
    columns: ["Available path", "What it can do", "What remains unavailable"],
    rows: [
      ["Physical thermostat", "Set a local target through the paired receiver", "Remote app changes"],
      ["Receiver manual override", "Switch the selected heating channel locally", "Automatic room-temperature regulation from a disconnected thermostat"],
      ["Standalone thermostat and receiver", "Operate local heating without hub features", "Cloud schedules, remote access, and app reporting"],
    ],
  },
  figures: [{
    title: "Offline operation descends through local control layers",
    description: "The app depends on internet and hub access. The thermostat can still speak locally to the receiver, and the receiver button can issue a manual demand when that room link is unavailable.",
    nodes: [
      { label: "App and hub", detail: "Remote control layer" },
      { label: "Thermostat", detail: "Local temperature-control layer" },
      { label: "Receiver button", detail: "Manual demand at the wired output" },
      { label: "Boiler", detail: "Must still accept the downstream call" },
    ],
  }],
  sections: [
    {
      title: "Use the highest working layer and leave it intact",
      paragraphs: [
        "Wake the thermostat and make a small target change above room temperature. If the receiver and boiler respond, local temperature control has survived the app outage. Keep using that path while hub or broadband support is restored, because re-pairing the working devices can turn one failed link into two.",
        "When the thermostat cannot issue a demand, identify the receiver and use Hive's model-specific manual button. Observe which channel light changes and whether the boiler responds. On a dual-channel receiver, heating and hot water are separate outputs and the wrong button answers the wrong question.",
        "Write down the pre-outage schedule before making temporary changes. Receiver override supplies immediate demand but does not recreate cloud timing. A household can then cancel manual heat deliberately rather than discovering hours later that a local override is still active.",
      ],
    },
    {
      title: "Manual override proves only the receiver output",
      paragraphs: [
        "A receiver light or relay response shows that Hive issued a wired call. It does not prove a zone valve opened, the boiler accepted enable, or the burner lit. If the receiver changes state but no heat follows, preserve the boiler display and move the service boundary downstream.",
        "The receiver is a mains device, so its enclosure and terminals stay untouched. Cancel temporary override when heat is no longer needed, then restore connectivity through the matching Hive support sequence. The separate No Signal guide identifies whether the lost link is thermostat, receiver, hub, or internet.",
      ],
    },
  ],
  faqs: [
    { question: "Can Hive heat the home without the app?", answer: "Yes, when the physical thermostat still controls the receiver. Hive also provides a receiver manual override when thermostat control is unavailable." },
    { question: "Does receiver override regulate room temperature?", answer: "It creates a manual heating demand at the receiver. It does not restore a disconnected thermostat's automatic room-temperature feedback." },
    { question: "What if the receiver light changes but the boiler stays off?", answer: "The Hive output has responded, so wiring, valves, boiler enable, and boiler status become the next checkpoints for qualified service." },
  ],
  sourceIds: ["hive-offline-control", "hive-standalone-mode"],
  relatedContent: ["/brands/hive/", "/brands/hive/thermostat-no-signal/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["thermostat", "boiler", "control-board"],
  keywords: ["hive heating offline", "hive receiver manual override", "use hive without app", "hive standalone thermostat"],
});
