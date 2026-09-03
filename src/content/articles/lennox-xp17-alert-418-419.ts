import { publish } from "./publish";

/**
 * These two alerts are unusual because the equipment is fine and the wiring is
 * not. A page that treated 418 as a component fault would send somebody to buy
 * a part for a miswire, so the whole structure here is about establishing that
 * the heat pump control is reporting something it was told rather than something
 * it measured.
 */
export const lennoxXp17Alert418419 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Lennox XP17 alerts 418 and 419: a W input fault or a miswire",
  slug: "xp17-alert-418-419",
  path: "/brands/lennox/xp17-alert-418-419/",
  description:
    "The XP17 control raises 418 when the W output is active during a compressor call. Five strikes in one demand escalate it to 419 and a lockout.",
  articleType: "error-code",
  brand: "lennox",
  equipmentType: "heat-pump",
  productFamily: "XP17 heat pumps with iComfort communicating controls",
  models: ["XP17-024", "XP17-030", "XP17-036", "XP17-042", "XP17-048", "XP17-060"],
  errorCode: "418 / 419",
  problemType: "control-input-fault",
  symptomFamily: "no-heating",
  directAnswer:
    "Alert 418 is raised when the heat pump control sees the W output active while a compressor demand is running, which the installation manual describes as a W input fault or a miswire. Five occurrences within a single demand escalate it to a hardware fault lockout and alert 419.",
  scopeNotice:
    "These alert numbers and the strike behaviour come from the Lennox XP17 installation and service procedure for the models listed. Lennox uses the same numbering family across several iComfort products, and the sequence a given alert follows belongs to the equipment it was published for.",
  layout: ["branches", "figures", "decisionTable", "sections", "serviceHandoff"],
  symptoms: [
    "The thermostat or the outdoor control reports alert 418, and heating behaves oddly rather than stopping outright.",
    "Alert 419 has appeared and the system has locked out.",
    "The complaints started after a thermostat was replaced, a system was converted, or wiring was worked on.",
  ],
  causes: [
    "The heat pump control detected the W output active at a point in the sequence where it should not be, which the manual attributes to a W input fault or a miswire.",
    "A repeated occurrence within one demand increments a five-strike counter, and reaching five is what produces the lockout.",
  ],
  diagnosticBranches: [
    {
      title: "418 followed a thermostat change or a system conversion",
      observation:
        "A control was swapped, a dual fuel arrangement was set up, or somebody rewired at the indoor unit shortly before the alert appeared.",
      action:
        "Tell the installer exactly what changed. The manual names miswiring as one of the two conditions behind this alert, and recent work on the control wiring is where a technician should start rather than at the heat pump itself.",
    },
    {
      title: "418 appears and clears without anybody doing anything",
      observation:
        "The alert comes and goes, the strike counter has apparently not reached five, and heating continues in between.",
      action:
        "Record each appearance. The manual describes 418 clearing when the W output is no longer active. An alert that comes and goes is therefore reporting an intermittent signal, which points the diagnostic sequence toward control and wiring evidence before component replacement.",
    },
    {
      title: "419 has appeared and the system has stopped",
      observation:
        "The alert has escalated and the equipment is locked out rather than continuing.",
      action:
        "Arrange service. The manual gives the lockout reset as either cycling power to the heat pump control's R terminal or briefly jumpering the field test pins, both of which are inside the outdoor unit and belong to a technician.",
    },
  ],
  figures: [
    {
      title: "How 418 becomes 419",
      description:
        "The escalation is a counter rather than a separate fault. Understanding that is what tells you a single 418 and a locked out 419 are the same condition seen at different stages.",
      nodes: [
        { label: "Compressor demand starts", detail: "The control energises the contactor" },
        { label: "W output seen active", detail: "Alert 418 is displayed and the compressor is de-energised" },
        { label: "Strike counter increments", detail: "It resets if the demand ends with four or fewer" },
        { label: "Five strikes in one demand", detail: "Hardware fault lockout, and alert 419" },
      ],
    },
  ],
  decisionTable: {
    caption: "The XP17 alerts on this site, and what separates them",
    columns: ["Alert", "What the control is reporting", "Where the answer lives"],
    rows: [
      [
        "411",
        "Low pressure switch lockout after repeated openings",
        "The refrigerant circuit and the conditions around the coil",
      ],
      [
        "412 and 413",
        "High pressure switch activity, escalating to a lockout",
        "Heat rejection at the condensing side",
      ],
      [
        "418",
        "The W output active during a compressor demand",
        "Control wiring and the thermostat configuration",
      ],
      [
        "419",
        "The hardware fault lockout that follows five strikes of 418",
        "The same wiring question, now with the system stopped",
      ],
    ],
  },
  sections: [
    {
      title: "Why a wiring alert exists on a heat pump control",
      paragraphs: [
        "On a heat pump, W is the call for auxiliary or backup heat. The control expects it in some circumstances and not in others, and one of the circumstances where it does not expect it is in the middle of a compressor demand it is running itself. Seeing it there means the control is being told two things that do not fit together.",
        "That can happen for mundane reasons. A thermostat configured as a conventional system rather than a heat pump will energise W where a heat pump control expects O or B. A dual fuel arrangement wired without the interlock the equipment expects can do the same. So can a wire landed on the wrong terminal during a replacement.",
        "None of those is a component failure, which is the practical point. The alert is not evidence that anything in the outdoor unit has broken, and the sequence of operation it appears in points at the low voltage wiring rather than at the refrigerant circuit.",
      ],
    },
    {
      title: "The five-strike counter and why it matters",
      paragraphs: [
        "The manual describes a counter that increments each time the condition occurs, and that resets to zero if the demand ends or is satisfied with four or fewer strikes recorded. It also notes that on an iComfort thermostat enabled setup, the thermostat terminates demand when the compressor contactor is de-energised.",
        "So the alert can appear repeatedly for weeks without a lockout, because each demand ends before the counter reaches five. That is why a household can have intermittent heating complaints and an alert history without the system ever visibly locking out, and it is why the alert history is worth reading rather than waiting for a hard stop.",
      ],
    },
    {
      title: "What the reset does not do",
      paragraphs: [
        "The manual gives two ways to clear a lockout: cycling power off to the heat pump control's R terminal, or placing a jumper on the field test pins for between one and two seconds. Both restore operation. Neither addresses a miswire.",
        "That is worth being clear about with whoever attends. A lockout cleared without the wiring being checked will lock out again, and each round trip through five strikes is another set of compressor starts and stops that nobody wanted.",
      ],
    },
  ],
  safeChecks: [
    "Record the alert number, whether it was 418 or 419, and whether the system was still heating when it appeared.",
    "Note any thermostat replacement, system conversion, or wiring work carried out before the alert started.",
    "Note whether the property has a backup or auxiliary heat source and how it is meant to be controlled.",
  ],
  professionalEscalation: [
    "Low voltage wiring, thermostat configuration, and the field test pins are all inside equipment covers and belong to a qualified technician.",
    "Ask for the wiring and the thermostat configuration to be verified before any part is quoted, since the manual attributes this alert to an input fault or a miswire.",
  ],
  serviceHandoff:
    "Give the technician the alert numbers seen, the dates, whether the system locked out, what thermostat is fitted and how it is configured, and what work preceded the first occurrence. That set points the visit at the control wiring instead of the refrigerant circuit.",
  resetGuidance:
    "Clearing the lockout restores operation without changing the condition that produced it. If 418 returns after a reset, the wiring or the configuration is still telling the control the same contradictory thing.",
  faqs: [
    {
      question: "Does alert 418 mean my heat pump is broken?",
      answer:
        "The manual attributes it to a W input fault or a miswire, which is a control wiring condition rather than a mechanical failure. It is raised when the W output is active during a compressor demand, and that is something the control was told rather than something it measured in the refrigerant circuit.",
    },
    {
      question: "What is the difference between 418 and 419?",
      answer:
        "They are stages of the same thing. 418 is displayed each time the condition occurs. Five occurrences within a single demand trigger a hardware fault lockout, which is reported as 419.",
    },
    {
      question: "Why does the alert keep clearing itself?",
      answer:
        "The manual describes 418 clearing when the W output is no longer active, and the strike counter resetting if a demand ends with four or fewer strikes. A condition that comes and goes can therefore produce a repeating alert without ever reaching the lockout.",
    },
    {
      question: "Can I reset the lockout myself?",
      answer:
        "The documented methods are cycling power to the heat pump control's R terminal or jumpering the field test pins briefly, and both are inside the equipment. They also restore operation without correcting a miswire, so the wiring check is the part that matters.",
    },
  ],
  sourceIds: ["lennox-xp17-install", "lennox-icomfort-alerts"],
  relatedContent: [
    "/brands/lennox/",
    "/brands/lennox/xp17-icomfort-alert-411/",
    "/mini-split-not-heating/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  glossaryTerms: ["auxiliary-heat", "control-board", "error-code"],
  keywords: [
    "lennox alert 418",
    "lennox alert 419",
    "xp17 w input fault",
    "lennox heat pump miswire alert",
    "icomfort 418 lockout",
  ],
});
