import { publish } from "./publish";

export const rheemEconetFaultHistory = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Rheem EcoNet alarm history: the active alarm versus the last eight",
  slug: "econet-fault-history",
  path: "/brands/rheem/econet-fault-history/",
  description:
    "EcoNet separates the alarm that is active now from a time-stamped list of earlier ones. Where that list lives, how deep it goes, and what to read before clearing it.",
  articleType: "guide",
  brand: "rheem",
  equipmentType: "controls-thermostats",
  productFamily:
    "Rheem and Ruud EcoNet wall controls, covering the EcoNet smart thermostat and the earlier EcoNet control center",
  models: [
    "Rheem EcoNet smart thermostat RETST800SYS",
    "Rheem and Ruud EcoNet control center RETST600SYS and UETST600SYS",
  ],
  problemType: "fault-history-readout",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Both records sit behind one menu. Rheem states that selecting Menu then Service from the home screen displays current alarms, alarm history, service alerts, contact info and equipment info. Current shows what is active now. History shows a list of the past eight alerts and alarms with the time and date stamp, which means the record answers when as well as what, and that timing is the part a restart destroys.",
  scopeNotice:
    "The eight-entry depth and the time and date stamp are documented in the Rheem EcoNet smart thermostat user guide for the RETST800SYS. The earlier EcoNet control center guide describes the same service screen holding current alarms and alarm history without stating a depth, so confirm the model on the wall before quoting a number. A furnace or air handler board with its own display keeps a separate record that this menu does not replace.",
  symptoms: [
    "The system is running again and somebody needs to establish what interrupted it before a service visit.",
    "An alarm icon appeared in the corner of the home screen and the equipment recovered before anyone reached it.",
  ],
  causes: [
    "An alarm that has cleared itself leaves nothing on the current screen, so the only remaining account of it is the stored history.",
    "Clearing the history removes the timestamps that show whether one event led to another or the same event repeated.",
  ],
  decisionTable: {
    caption: "What each item behind Menu then Service holds",
    columns: ["Screen item", "What it answers", "What it does not establish"],
    rows: [
      ["Current", "Which alerts or alarms are active right now", "Anything that has already cleared"],
      ["History", "The past eight entries with time and date", "Events older than the eight it keeps"],
      ["Alerts", "Maintenance reminders and their timers", "Equipment faults, which are separate"],
      ["Equipment info", "What the control knows about the connected units", "A substitute for instrument tests"],
    ],
  },
  figures: [
    {
      title: "One service menu, four different records",
      description:
        "Each item behind the service menu answers a different question, and only one of them survives after an alarm clears itself. Knowing which is which decides what to photograph.",
      nodes: [
        { label: "Current", detail: "Active alerts and alarms only" },
        { label: "History", detail: "Eight entries, time and date stamped" },
        { label: "Alerts", detail: "Maintenance reminders with timers" },
        { label: "Equipment info", detail: "Connected equipment and software" },
      ],
    },
  ],
  sections: [
    {
      title: "The history is timestamped, so it answers questions the code alone cannot",
      paragraphs: [
        "Rheem describes the history entries as carrying the time and date stamp alongside the alert or alarm. Its own illustration of the screen shows two entries recorded four days apart, each pairing a code with a short plain-language description of what the control detected. That format matters for anyone trying to describe an intermittent problem, because a code with a timestamp can be lined up against weather, occupancy or a power interruption, and a code without one cannot.",
        "Depth is the other half. Eight entries is a fixed window, and a system that has been reporting for weeks will have pushed the earliest events out of it. Recording how many positions are filled is therefore worth as much as recording what they say: a single entry and a full list of eight describe different recurrence patterns even when every visible code matches.",
        "Photograph the screen rather than transcribing it. The entries carry underscores and suffix letters that are easy to lose in handwriting, and the control's own description sits beside each code where an owner can read it without interpreting anything.",
      ],
    },
    {
      title: "Alarms and maintenance alerts are different records on the same menu",
      paragraphs: [
        "The service menu carries both, and conflating them wastes a service visit. Alerts are time-based maintenance reminders that Rheem describes for a service call, a humidifier pad and UV lamp replacement, and each one shows a reset label when it is due. Tapping reset clears that reminder and starts its maintenance timer again, which affects nothing about the equipment.",
        "Equipment alarms behave differently. Rheem describes an alert or alarm icon appearing in the upper right corner of the home screen when one is present, with an audible beep when that setting is enabled, and selecting the icon shows the alarm and a brief description. On the earlier control center the same job falls to a blinking service icon with a beeper, from which Reminders and Current Alarm are separate selections.",
        "The alarm history screen carries its own clear control. Using it is an archive decision rather than a repair: it empties the record without touching whatever produced the entries, and on an intermittent fault the record is the more valuable of the two.",
      ],
    },
  ],
  faqs: [
    {
      question: "How many previous alarms does Rheem EcoNet keep?",
      answer:
        "The Rheem EcoNet smart thermostat user guide describes the history as a list of the past eight alerts and alarms, each carrying a time and date stamp. Read the model on the wall before applying that figure to an older control.",
    },
    {
      question: "Where is the EcoNet alarm history?",
      answer:
        "Behind Menu then Service from the home screen. Rheem lists that screen as holding current alarms, alarm history, service alerts, contact info and equipment info.",
    },
    {
      question: "Does clearing the history fix anything?",
      answer:
        "No. It empties the stored record and leaves the condition that produced the entries untouched. On an intermittent fault the timestamps are the most useful thing anyone has.",
    },
    {
      question: "Is a maintenance reminder the same as an alarm?",
      answer:
        "No. Reminders are time-based prompts for items such as a service call, a humidifier pad or a UV lamp, and resetting one restarts its timer. An equipment alarm is reported separately and raises an icon on the home screen.",
    },
  ],
  sourceIds: ["rheem-econet-user-guide", "ruud-econet-user-guide"],
  relatedContent: [
    "/brands/rheem/",
    "/brands/rheem/r96v-fault-57/",
    "/how-to-document-hvac-fault-for-service/",
    "/brands/rheem/econet-a006-c-odu-communication-failure/",
  ],
  glossaryTerms: ["error-code", "thermostat", "control-board"],
  keywords: [
    "rheem econet alarm history",
    "econet last eight alarms",
    "econet service menu",
    "clear rheem econet history",
  ],
});
