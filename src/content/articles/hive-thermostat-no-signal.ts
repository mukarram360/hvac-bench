import { publish } from "./publish";
export const hiveThermostatNoSignal = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Hive thermostat says No Signal: identify which link is down",
  slug: "thermostat-no-signal",
  path: "/brands/hive/thermostat-no-signal/",
  description:
    "Diagnose Hive No Signal by separating thermostat-to-receiver, hub, internet, and boiler paths before using a reset that erases schedules.",
  articleType: "troubleshooting",
  brand: "hive",
  equipmentType: "controls-thermostats",
  productFamily: "Hive Thermostat and Hive Thermostat Mini systems",
  models: ["Hive Thermostat", "Hive Thermostat Mini", "Hive receiver and hub combinations in the cited support flow"],
  problemType: "wireless-connection-fault",
  directAnswer:
    "Hive No Signal means a local connection in the control system has been lost, but the words alone do not identify the thermostat, receiver, or hub link. Check the exact on-screen message and receiver lights, preserve heating response, and use Hive's reconnection sequence before any factory reset. A factory reset can erase schedules.",
  scopeNotice:
    "This guide covers United Kingdom Hive thermostat, receiver, and hub combinations in the cited support material. Receiver generations and single-channel versus dual-channel systems use different light and pairing sequences.",
  symptoms: ["The Hive thermostat shows No Signal or the app cannot control heating as expected."],
  causes: [
    "Distance, obstruction, depleted thermostat batteries, lost pairing, or interruption at the receiver can break the local control link.",
    "Hub power, broadband, account connectivity, or cloud status can affect the app while previously configured local heating behavior remains separate.",
  ],
  diagnosticBranches: [
    {
      title: "Thermostat cannot reach the receiver",
      observation:
        "The physical thermostat shows No Signal and receiver lights or manual heat response do not match a normal paired state.",
      action:
        "Fit the specified fresh batteries, bring the thermostat within the support distance for pairing, and follow the exact receiver-generation reconnection sequence.",
    },
    {
      title: "App is offline but local controls respond",
      observation:
        "The thermostat and receiver still control heating locally while only the app or hub reports disconnection.",
      action:
        "Keep the local pairing intact and troubleshoot hub power, broadband, and account connection without factory-resetting the thermostat or receiver.",
    },
  ],
  decisionTable: {
    caption: "Hive connection-path split",
    columns: ["What still works", "Likely failed link", "Avoid"],
    rows: [
      ["Receiver manual control only", "Thermostat-to-receiver link", "Changing boiler wiring"],
      ["Thermostat controls heating, app offline", "Hub, internet, or cloud path", "Re-pairing local controls"],
      ["No receiver response or lights", "Receiver supply or hardware path", "Assuming a Wi-Fi issue"],
      [
        "Receiver switches but boiler stays off",
        "Downstream boiler or zone-control path",
        "Resetting the Hive network",
      ],
    ],
  },
  figures: [
    {
      title: "Four links behind one No Signal complaint",
      description:
        "Hive remote control crosses cloud and hub links, while room heating also depends on a local thermostat-to-receiver connection and the wired boiler path.",
      nodes: [
        {
          label: "App and internet",
          detail: "Carry remote commands to the home",
        },
        {
          label: "Hive hub",
          detail: "Bridges the account and local Hive devices",
        },
        {
          label: "Thermostat and receiver",
          detail: "Exchange local temperature demand and relay state",
        },
        {
          label: "Boiler control path",
          detail: "Turns receiver demand into heat through installed wiring",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Prove local heating before rebuilding the network",
      paragraphs: [
        "A Hive system contains several communications that can fail independently. The app reaches the hub through internet services. The thermostat exchanges local radio messages with the receiver. The receiver then switches a wired demand toward the boiler or zone controls. If the app is offline while the wall thermostat still heats the property, the local path remains useful and should not be dismantled. If receiver manual control works but the thermostat says No Signal, the wireless room-control link deserves attention first.",
        "Observe receiver lights and buttons only through Hive's generation-specific instructions. Colour and flash cadence matter, and dual-channel receivers have separate heating and hot-water outputs. A generic pairing video can put the wrong product into another state. Photograph the existing pattern and identify model labels before pressing combinations.",
      ],
    },
    {
      title: "Reserve factory reset for the published last step",
      paragraphs: [
        "Start with specified fresh thermostat batteries and the normal support reconnection flow. Keep the device close enough for pairing without carrying it next to exposed boiler wiring. Allow each timed light stage to finish before another press. Record whether the receiver relay changes and whether the boiler then responds, because those are two different outcomes.",
        "Hive warns that factory reset can erase schedules. Do not use it as the first answer to a cloud outage or unknown light. Also do not remove the mains-powered receiver cover, bridge its terminals, or alter boiler wiring. A dead receiver, hot or damaged enclosure, repeated loss of pairing, relay operation without heat, or an uncertain system type requires Hive support, a qualified electrician, or heating engineer.",
      ],
    },
  ],
  safeChecks: [
    "Record the exact message and receiver light pattern, replace only thermostat batteries, and follow the matching Hive reconnection sequence without opening the receiver.",
  ],
  professionalEscalation: [
    "Mains receiver supply, internal wiring, relay output, boiler controls, repeated pairing loss, and downstream heating diagnosis require qualified support or trades.",
  ],
  serviceHandoff:
    "Provide thermostat, receiver, and hub models, No Signal photo, receiver light video, battery result, app and local-control status, manual receiver response, boiler response, and reset attempts.",
  resetGuidance:
    "Do not factory-reset first; it can erase schedules. Preserve the working local or app path and use the model-specific reconnection sequence.",
  faqs: [
    {
      question: "Will Hive heating work without internet?",
      answer:
        "Local thermostat and receiver control can remain available when only the internet or app path is down. Test local response before changing pairing.",
    },
    {
      question: "Does Hive No Signal mean the receiver is broken?",
      answer:
        "No. Batteries, distance, pairing, receiver supply, hub and internet links create different failures. The remaining working path narrows them.",
    },
    {
      question: "Does a Hive factory reset delete schedules?",
      answer:
        "Hive warns that factory reset can erase schedules. Use it only when the exact support flow requires it, after recording the current system state.",
    },
  ],
  sourceIds: ["hive-no-signal", "hive-reconnect"],
  glossaryTerms: ["thermostat", "control-board"],
  relatedContent: ["/brands/hive/", "/how-to-document-hvac-fault-for-service/", "/how-to-check-mini-split-remote/"],
  keywords: [
    "hive thermostat no signal",
    "hive receiver not connecting",
    "hive heating offline",
    "reconnect hive thermostat",
  ],
});
