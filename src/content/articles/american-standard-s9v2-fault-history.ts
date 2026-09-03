import { publish } from "./publish";

/**
 * A furnace that has locked out three times and recovered twice looks, to the
 * household, like a furnace that works. The control disagrees and keeps a list.
 * This page is about that list: what it is called, what it holds, and why
 * clearing it before a diagnosis destroys the only record of an intermittent
 * fault. The reading is technician work and the page says so.
 */
export const americanStandardS9v2FaultHistory = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "American Standard S9V2: the last six faults the control kept",
  slug: "s9v2-fault-history",
  path: "/brands/american-standard/s9v2-fault-history/",
  description:
    "The S9V2 furnace control stores a rolling record of six faults under the L6F menu. What it holds, why the order matters, and why it should not be cleared first.",
  articleType: "troubleshooting",
  brand: "american-standard",
  equipmentType: "furnace",
  productFamily: "S9V2 S-Series two-stage condensing gas furnaces",
  models: ["S9V2 S-Series models in installer guide 18-CE01D1-1E-EN"],
  problemType: "stored-fault-history",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "The integrated furnace control keeps the last six faults in a menu labelled L6F. It survives the lockout clearing itself, which makes it the record of an intermittent problem that has otherwise left no trace.",
  scopeNotice:
    "This describes the integrated furnace control on the S9V2 S-Series as documented in installer guide 18-CE01D1-1E-EN. The display sits inside the furnace cabinet, so reading it is technician work. Other American Standard furnace families use different controls with different menu structures.",
  layout: ["branches", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The furnace has stopped heating on occasion and recovered before anybody investigated.",
    "A one-hour lockout has been mentioned and nobody knows what triggered it.",
    "Heating is unreliable but everything looks normal at the time of a service visit.",
  ],
  causes: [
    "The control stores a rolling history of six faults, separate from whatever alarm is currently active.",
    "Several documented lockouts on this control clear themselves after an hour, so the live display can be blank while the history is not.",
  ],
  diagnosticBranches: [
    {
      title: "The furnace stopped and then started again on its own",
      observation:
        "Heating failed for a period, nobody did anything, and it came back before anyone arrived.",
      action:
        "Ask for the stored history to be read before anything is cleared. Two of the documented lockouts on this control release after an hour, which is exactly the behaviour that produces a fault nobody was present for.",
    },
    {
      title: "A technician has been and found nothing",
      observation:
        "The visit happened during normal operation, the live display was clear, and no cause was identified.",
      action:
        "Ask specifically whether the L6F menu was read and what it contained. A blank live display and an empty fault history are different findings, and only one of them means nothing has gone wrong.",
    },
    {
      title: "The same fault keeps returning",
      observation:
        "Heating fails repeatedly, with or without an obvious pattern in the weather or the time of day.",
      action:
        "Have the history read and recorded before it is cleared, then cleared deliberately so the next occurrence is unambiguous. A history that fills with six of the same code says something a single sighting does not.",
    },
  ],
  figures: [
    {
      title: "Three different things on the same control",
      description:
        "Readers and technicians conflate these, and they answer different questions. Knowing which one is being looked at decides whether an empty screen means anything.",
      nodes: [
        { label: "Live status code", detail: "What the furnace is doing right now" },
        { label: "Active alarm menu", detail: "Listed as err, the fault currently in force" },
        { label: "Last six faults", detail: "Listed as L6F, the rolling history" },
        { label: "Code release number", detail: "Listed as Cr, which identifies the control firmware" },
      ],
    },
  ],
  decisionTable: {
    caption: "Documented codes that clear themselves, and what the history preserves",
    columns: ["Code", "What the guide assigns it to", "Why the history matters for it"],
    rows: [
      [
        "e2.2",
        "Retry exceeded, flame never sensed, with a one hour lockout after three attempts",
        "The lockout releases after an hour, so a morning failure can be invisible by lunchtime",
      ],
      [
        "e2.3",
        "Recycles exceeded, flame sensed then lost, with a one hour lockout after ten attempts",
        "The same one hour release, and the count that produced it is not visible afterwards",
      ],
      [
        "e3.3",
        "Open pressure switch, first stage",
        "A switch that opens in certain wind or vent conditions may be closed when a technician arrives",
      ],
      [
        "e6.2",
        "Voltage reversed polarity, and bad grounding",
        "An installation condition that produces intermittent behaviour rather than a permanent stop",
      ],
      [
        "e0g",
        "Flame current is low, but still strong enough to allow operation",
        "The furnace keeps running, so nothing prompts anybody to look until it stops",
      ],
    ],
  },
  sections: [
    {
      title: "What the menu is and where it sits",
      paragraphs: [
        "The integrated furnace control on this range carries a seven segment display and a menu system reached with two buttons, Menu and Option. Alongside the operating readouts and the airflow settings sit two fault entries: err, described as the active alarm menu, and L6F, described as the last six faults.",
        "The guide gives the reading procedure as pressing Menu until the L6F entry appears and then pressing Option to enter it, at which point the six stored faults can be viewed. Clearing is a separate action: enter the same menu and hold Option for at least five seconds, after which three dashes appear three times to confirm the history has been cleared.",
        "All of that happens at the control board inside the furnace cabinet. It is described here so a householder knows what exists and what to ask for, not as something to attempt.",
      ],
    },
    {
      title: "Why clearing it first is the wrong order",
      paragraphs: [
        "The history is the only evidence an intermittent furnace fault leaves behind. A lockout that releases after an hour takes the live indication with it, and a household that was out at the time has nothing to report except that the house was cold when they got back.",
        "Read first, then clear. Reading gives the diagnosis its starting point, and clearing afterwards empties the store so a fault that reappears can be dated to the day it happened. Clearing before reading throws away the first of those and gains nothing.",
        "This is worth raising directly when service is arranged, because it takes a moment at the start of a visit and cannot be recovered later.",
      ],
    },
    {
      title: "Six entries is a sample, not a complete record",
      paragraphs: [
        "The store holds six, so a furnace that has faulted repeatedly is showing the most recent six and has discarded whatever came before. That has two consequences worth understanding.",
        "A history filled with six identical codes tells you the fault is repeating, but not how many times or over what period. And a history containing one code from months ago alongside five recent ones is telling you about two different eras of the same appliance.",
        "So the useful reading is the pattern rather than the count. Six of one code points somewhere specific. Six different codes points at something more general, such as supply, venting, or airflow, that is producing different symptoms in different conditions.",
      ],
    },
  ],
  safeChecks: [
    "Write down the dates and times heating failed and whether it recovered on its own, since that timeline is what the stored history is matched against.",
    "Note anything that changed around the furnace, such as vent work, a new appliance on the same supply, or a filter change.",
    "Ask for the fault history to be read and recorded before anything is cleared.",
  ],
  professionalEscalation: [
    "The control display sits inside the furnace cabinet, so reading and clearing the fault history is technician work rather than a householder task.",
    "Several codes on this control concern gas valves, ignition, pressure switches, and limits, and none of them should be interpreted without the guide for the exact model.",
  ],
  serviceHandoff:
    "Ask the technician for the contents of the L6F menu in the order stored, the active alarm if any, and the code release number from the Cr entry. Ask as well for the history to be cleared once it has been recorded, so the next failure can be dated rather than guessed at.",
  resetGuidance:
    "Cycling the supply to a furnace that has locked out clears the live indication. It does not clear the stored history, which is why the history is worth reading even after somebody has already tried a reset.",
  faqs: [
    {
      question: "What does L6F mean on an American Standard furnace?",
      answer:
        "It is the menu entry for the last six faults on the integrated furnace control. The guide describes reaching it with the Menu key and entering it with the Option key, and it is separate from err, which is the active alarm menu.",
    },
    {
      question: "Can I read the fault history myself?",
      answer:
        "The display is on the control board inside the furnace cabinet, which puts it behind a panel and next to gas and electrical components. Ask the technician to read it and to tell you what it contained.",
    },
    {
      question: "Does a reset erase the stored faults?",
      answer:
        "Cycling the supply clears the live indication rather than the history. The guide gives a specific action for clearing the history: entering the L6F menu and holding the Option key for at least five seconds, confirmed by three dashes shown three times.",
    },
    {
      question: "Why does the furnace work again by the time help arrives?",
      answer:
        "Two of the documented lockouts on this control release after an hour, which is long enough for a household to leave and return to a working furnace. The stored history is what survives that, which is why it is worth reading.",
    },
  ],
  sourceIds: ["american-s9v2-install", "american-standard-s9v2"],
  relatedContent: [
    "/brands/american-standard/",
    "/brands/american-standard/s9v2-e21-error-code/",
    "/how-to-document-hvac-fault-for-service/",
    "/heat-pump-vs-furnace/",
    "/brands/american-standard/platinum-18-with-honeywell-hz432-zoning/",
  ],
  glossaryTerms: ["control-board", "error-code", "service-manual"],
  keywords: [
    "american standard l6f menu",
    "s9v2 last 6 faults",
    "american standard furnace fault history",
    "s9v2 furnace error codes",
    "american standard furnace intermittent lockout",
  ],
});
