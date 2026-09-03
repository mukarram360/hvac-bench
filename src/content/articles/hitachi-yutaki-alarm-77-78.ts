import { publish } from "./publish";

/**
 * The manual's own footnote is the reason this page exists: the thermostat can
 * raise alarm 78 before the heat pump agrees anything is wrong, because the two
 * devices count to their alarm thresholds on different timers. That single line
 * turns a confusing pair of alarms into something a reader can act on.
 */
export const hitachiYutakiAlarm7778 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Hitachi Yutaki alarms 77 and 78: the radio link, not the heat pump",
  slug: "yutaki-alarm-77-78",
  path: "/brands/hitachi/yutaki-alarm-77-78/",
  description:
    "Alarms 77 and 78 on a Yutaki room thermostat report the wireless link to the ATW-IOT-01 interface. The heat pump can be running normally while they show.",
  articleType: "error-code",
  brand: "hitachi",
  equipmentType: "controls-thermostats",
  productFamily: "ATW-RTU room thermostats paired with ATW-IOT-01 on Yutaki systems",
  models: ["ATW-RTU-12 wireless room thermostat", "ATW-IOT-01 interface", "Yutaki systems using the ATW-RTU controls"],
  errorCode: "77 / 78",
  problemType: "wireless-link-alarm",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Both alarms are about communication rather than heating. Alarm 77 means the Yutaki unit has lost communication with the ATW-IOT-01 interface, and alarm 78 means communication between ATW-IOT-01 and the ATW-RTU-12 thermostat has failed.",
  scopeNotice:
    "These alarm numbers belong to the ATW-RTU room thermostat and the ATW-IOT-01 interface on Yutaki systems, as published in the Hitachi installation and operation manual for those controls. Yutaki units raise their own alarms in their own numbering, and a number seen on a wired controller is not necessarily the same number seen on the room thermostat.",
  layout: ["branches", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The room thermostat shows a flashing alarm icon with 77 or 78 next to it.",
    "The RUN indicator on the wired remote controller has changed from green to red.",
    "The thermostat reports a communication alarm while the heat pump appears to be running normally.",
  ],
  causes: [
    "Hitachi attributes alarm 77 to the Yutaki unit losing communication with the ATW-IOT-01 interface, and lists connection integrity, wire loops, electromagnetic noise, and the interface being powered off as the checks.",
    "For alarm 78 the manual names structural elements between the two devices as a source of disturbance, and lists a hardware issue on the ATW-RTU-12 separately as 78.1.",
  ],
  diagnosticBranches: [
    {
      title: "Alarm 77 is showing",
      observation:
        "The alarm number is 77, which the manual assigns to the Yutaki unit losing communication with the ATW-IOT-01 interface.",
      action:
        "The manual's first check is whether ATW-IOT-01 is powered on, followed by the connection itself, avoiding wire loops and electromagnetic noise. An owner can establish the power question; the wiring belongs to whoever installed it.",
    },
    {
      title: "Alarm 78 is showing",
      observation:
        "The alarm number is 78, which sits between the ATW-IOT-01 interface and the ATW-RTU-12 room thermostat rather than between the interface and the heat pump.",
      action:
        "Hitachi asks for the interface to be confirmed powered on and for structural elements disturbing the communication to be ruled out. Moving the ATW-RTU-12 closer to ATW-IOT-01 is the manufacturer's stated remedy for a marginal link.",
    },
    {
      title: "78.1 is showing rather than 78",
      observation:
        "The decimal is part of the alarm. The manual lists 78.1 separately from 78.",
      action:
        "Hitachi assigns 78.1 to an issue on the ATW-RTU-12 hardware and gives replacement as the response. Record the alarm exactly as displayed, because the decimal is the difference between a link problem and a device problem.",
    },
  ],
  figures: [
    {
      title: "Three devices, two links, two alarm numbers",
      description:
        "The alarms name the link that failed rather than a component that broke. Knowing which link each number belongs to puts the search in the right place in the house.",
      nodes: [
        { label: "Yutaki unit", detail: "The heat pump, which raises its own separate alarms" },
        { label: "First link", detail: "Yutaki to ATW-IOT-01, reported as alarm 77" },
        { label: "ATW-IOT-01", detail: "The interface both alarms have in common" },
        { label: "Second link", detail: "ATW-IOT-01 to ATW-RTU-12, reported as alarm 78" },
        { label: "ATW-RTU-12", detail: "The room thermostat, with its own hardware alarm 78.1" },
      ],
    },
  ],
  decisionTable: {
    caption: "What each Yutaki control alarm points at",
    columns: ["Alarm", "Which link or device", "The manufacturer response"],
    rows: [
      [
        "77",
        "Yutaki unit to ATW-IOT-01",
        "Verify the connection, avoid wire loops and electromagnetic noise, confirm ATW-IOT-01 is powered on",
      ],
      [
        "78",
        "ATW-IOT-01 to ATW-RTU-12",
        "Confirm ATW-IOT-01 is powered, rule out structural disturbance, move ATW-RTU-12 closer",
      ],
      [
        "78.1",
        "ATW-RTU-12 hardware",
        "Replace the ATW-RTU-12",
      ],
    ],
  },
  sections: [
    {
      title: "The alarm can lead the heat pump",
      paragraphs: [
        "Hitachi includes a note that resolves the confusion these alarms cause. Because the alarm detection timers differ between the Yutaki unit and the ATW-RTU-12, the thermostat can display alarm 78 while the Yutaki unit has not yet reached its own alarm detection conditions.",
        "So a household can be looking at an alarm on the wall while the heat pump downstairs is behaving as though nothing has happened. Both are correct. The thermostat has decided sooner because it was counting on a shorter clock, and the heat pump will either agree in due course or the link will recover before it does.",
        "The practical consequence is that a single momentary alarm 78 is not proof of a persistent fault. What matters is whether it clears and stays cleared, which is why the useful thing to record is how long the alarm lasted and how many times it has come back.",
      ],
    },
    {
      title: "Reading the display correctly",
      paragraphs: [
        "The manual describes two things happening together when an alarm is active. The RUN indicator on the wired remote controller turns from green to red, and an alarm icon is displayed and keeps flashing alongside the alarm code.",
        "Two displays are therefore in play on these systems, and they do not carry the same information. The room thermostat is configured to exhibit alarms from the indoor and outdoor units as well as the interface alarms, subject to what the Yutaki software transmits to it. Reading the number without noting which device you read it on loses that distinction.",
      ],
    },
    {
      title: "Why a wireless link alarm is worth taking seriously anyway",
      paragraphs: [
        "It is tempting to dismiss a communication alarm on the grounds that the heating is still working. That misses what the link is for. The room thermostat is how the system knows what the room is doing, so a lost link means the heat pump is running on whatever it last heard rather than on current conditions.",
        "That shows up as comfort rather than as a fault: rooms that overshoot or undershoot, and running that does not match what anybody asked for. Intermittent alarms are worth resolving before the heating behaviour is investigated as a separate problem.",
      ],
    },
  ],
  safeChecks: [
    "Record the alarm exactly, including any decimal, and note which display you read it on.",
    "Confirm the ATW-IOT-01 interface is powered, which is the first check the manual lists for both alarms.",
    "Note whether anything changed in the property recently, such as a new appliance, a partition, or a repositioned thermostat.",
  ],
  professionalEscalation: [
    "Wiring integrity, wire loops, and interference sources on the Yutaki to interface link are installer work rather than owner checks.",
    "A repeating alarm 78.1 is assigned to the room thermostat hardware and the manufacturer response is replacement, which should be arranged rather than attempted.",
  ],
  serviceHandoff:
    "Tell the installer the alarm number including any decimal, whether the wired controller indicator went red at the same time, how long each alarm lasted, and whether the heating behaviour changed while it showed. The timer difference in the manual means duration is worth more here than a single sighting.",
  resetGuidance:
    "A link alarm clears when the link recovers, so the useful measure is whether it stays cleared rather than whether it can be dismissed. Record each occurrence instead of clearing and forgetting it.",
  faqs: [
    {
      question: "Is alarm 78 a fault with the heat pump?",
      answer:
        "No. Hitachi assigns it to communication between the ATW-IOT-01 interface and the ATW-RTU-12 room thermostat. The heat pump can be running normally while it shows, and the manual notes the thermostat may raise it before the Yutaki unit reaches its own alarm conditions.",
    },
    {
      question: "What is the difference between 78 and 78.1?",
      answer:
        "The manual lists them separately. 78 is the communication link between the interface and the thermostat, while 78.1 is assigned to an issue on the ATW-RTU-12 hardware, with replacement given as the response. Record the decimal.",
    },
    {
      question: "Will moving the thermostat help?",
      answer:
        "Hitachi lists allocating the ATW-RTU-12 closer to the ATW-IOT-01 among the responses, and names structural elements creating disturbance as something to rule out. Where it is safe to reposition a battery-powered thermostat, that is a documented remedy rather than a guess.",
    },
    {
      question: "Why did the alarm clear on its own?",
      answer:
        "Because these alarms follow a link rather than a broken part. A link that recovers clears the alarm, which is exactly why the manual warns about the difference in detection timing between the thermostat and the heat pump.",
    },
  ],
  sourceIds: ["hitachi-atw-rtu-manual", "hitachi-yutaki-support"],
  relatedContent: [
    "/brands/hitachi/",
    "/brands/hitachi/yutaki-alarm-70/",
    "/how-to-document-hvac-fault-for-service/",
    "/mini-split-remote-not-working/",
  ],
  glossaryTerms: ["thermostat", "error-code", "control-board"],
  keywords: [
    "hitachi yutaki alarm 77",
    "hitachi yutaki alarm 78",
    "atw-rtu-12 communication alarm",
    "atw-iot-01 not connecting",
    "yutaki room thermostat alarm",
  ],
});
