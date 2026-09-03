import { publish } from "./publish";

export const amanaPtacControlPaths = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Amana PTAC controls: unit keypad, wall thermostat, and app are different paths",
  slug: "ptac-control-paths",
  path: "/brands/amana/ptac-control-paths/",
  description:
    "An Amana J or K Series PTAC may take commands from its keypad, a paired wireless thermostat, a hardwired thermostat, or the app. Test one path at a time.",
  articleType: "guide",
  brand: "amana",
  equipmentType: "controls-thermostats",
  productFamily: "Amana J and K Series packaged terminal air conditioners",
  models: ["Amana J Series PTAC", "Amana K Series PTAC", "DS01G and DSA02NO thermostat installations listed by Amana"],
  problemType: "control-path-identification",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "The PTAC keypad, wall thermostat, and app are separate command paths. If one stops responding while another still changes mode or setpoint, preserve the working path and troubleshoot the failed controller instead of treating the refrigeration unit as dead.",
  scopeNotice:
    "Amana publishes separate wireless and hardwired thermostat setup material for J and K Series PTACs. Control availability and pairing steps vary by accessory and generation, so identify both the PTAC and the controller before changing configuration.",
  symptoms: ["The PTAC runs from one control surface but ignores another, or the displayed setpoint differs between them."],
  causes: [
    "A wall thermostat can lose pairing or wiring continuity while the onboard keypad still proves the PTAC has operating power.",
    "App connectivity adds a phone and network path that can fail without removing local temperature control.",
  ],
  decisionTable: {
    caption: "What each Amana PTAC control test isolates",
    columns: ["Working control", "Unresponsive control", "Boundary to investigate"],
    rows: [
      ["Unit keypad", "Wireless thermostat", "Batteries, pairing, accessory compatibility"],
      ["Unit keypad", "Hardwired thermostat", "Thermostat setup and installed low-voltage path"],
      ["Wall thermostat", "App", "App account, phone, network, or gateway path"],
      ["None", "All controls", "PTAC power, protection display, or internal control"],
    ],
  },
  figures: [{
    title: "Commands converge at the PTAC control",
    description: "The keypad begins inside the unit, the wall control arrives through its installed accessory path, and the app adds phone and network links before all three reach PTAC operating logic.",
    nodes: [
      { label: "Keypad", detail: "Direct local input" },
      { label: "Wall control", detail: "Wireless or hardwired accessory path" },
      { label: "App", detail: "Phone, account, and network path" },
      { label: "PTAC", detail: "Applies mode and protection logic" },
    ],
  }],
  sections: [
    {
      title: "A local response is a useful dividing line",
      paragraphs: [
        "Begin at the unit without opening it. Note the current mode, setpoint, and any protection code, then make one small setpoint change from the control that still works. A local response shows that the PTAC can receive at least one command. It does not prove the compressor or heater will be permitted to run, but it prevents a connectivity complaint from being merged with a power complaint.",
        "Amana's quick-start library separates DS01G wireless pairing, DSA02NO installation, hardwired thermostat installation, and app navigation. That separation matters. A pairing instruction cannot repair a hardwired circuit, and app reconnection should not rewrite a working local thermostat relationship.",
        "Make one change at a time and return it before trying the next surface. Three simultaneous setpoint changes leave no clear record of which command the PTAC accepted last. A short test log turns conflicting displays into an ordered path instead of a controller argument.",
      ],
    },
    {
      title: "Keep brownout protection outside the controller diagnosis",
      paragraphs: [
        "A continuous br display is a low-voltage protection state on the documented PTAC control. When br remains, the unit's power chain takes priority over app or thermostat troubleshooting. A brief br appearance only while power disappears is the separate shutdown behavior covered in the brownout guide.",
        "Do not remove the PTAC chassis, open the thermostat conductors, or change accessory configuration from a generic video. Record model numbers for the unit and controller, which path responds, the exact display, and whether the problem followed a router, thermostat, or building-power change. Facilities staff can then start at the correct boundary.",
      ],
    },
  ],
  faqs: [
    { question: "Can an Amana PTAC work if the app is offline?", answer: "Yes, when a local keypad or installed thermostat remains in control. App connectivity and local temperature commands travel through different paths." },
    { question: "Does keypad response prove the PTAC compressor is good?", answer: "No. It proves the local control has power and accepts a command. Protection states and the refrigeration or heating sequence remain separate." },
    { question: "Which model numbers should I collect?", answer: "Record the PTAC model and serial number plus the wall thermostat or wireless accessory model. The setup procedure depends on both ends of the control path." },
  ],
  sourceIds: ["amana-ptac-quick-start", "amana-ptac-literature"],
  relatedContent: ["/brands/amana/", "/brands/amana/ptac-br-code/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["thermostat", "control-board", "error-code"],
  keywords: ["amana ptac thermostat pairing", "amana ptac app offline", "amana ptac keypad control", "amana ds01g thermostat"],
});
