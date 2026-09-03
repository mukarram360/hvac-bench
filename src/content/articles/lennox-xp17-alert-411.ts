import { publish } from "./publish";
export const lennoxXp17Alert411 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Lennox XP17 iComfort Critical Alert 411",
  slug: "xp17-icomfort-alert-411",
  path: "/brands/lennox/xp17-icomfort-alert-411/",
  description:
    "Interpret iComfort Alert 411 on a Lennox XP17 as repeated low-pressure protection, not automatic proof of low refrigerant.",
  articleType: "error-code",
  brand: "lennox",
  equipmentType: "heat-pump",
  productFamily: "XP17 heat pumps with iComfort communicating controls",
  models: ["XP17-024", "XP17-030", "XP17-036", "XP17-042", "XP17-048", "XP17-060"],
  errorCode: "411",
  problemType: "low-pressure-lockout",
  directAnswer:
    "For the Lennox XP17, Critical Alert 411 records repeated low-pressure-switch events that reached a lockout threshold. It does not prove low refrigerant charge: airflow, outdoor conditions, restriction, switch or wiring faults, and the refrigerant circuit all require operating measurements.",
  scopeNotice:
    "This meaning follows the XP17 installation and service procedure cited here. Lennox alert numbers depend on the communicating equipment and control generation, so confirm the outdoor model and alert text together.",
  symptoms: ["The iComfort control shows Critical Alert 411 and the XP17 compressor is locked out or unavailable."],
  causes: [
    "A genuine low-suction condition can open the protection during cooling or heating operation.",
    "The pressure switch, wiring, airflow, control inputs, or environmental conditions can create or contribute to repeated openings.",
  ],
  diagnosticBranches: [
    {
      title: "Alert followed airflow or weather change",
      observation:
        "The event coincided with a loaded filter, blocked coil, snow, severe outdoor conditions, or a recently changed airflow component.",
      action:
        "Record the condition, remove only safe external obstruction, and leave operation off for service if the critical alert remains.",
    },
    {
      title: "Alert followed refrigerant or electrical work",
      observation:
        "A leak repair, line-set change, charge adjustment, switch replacement, or control work occurred before 411 appeared.",
      action:
        "Give the service company the work order and alert history so measured commissioning data can be checked before more parts or refrigerant are added.",
    },
  ],
  decisionTable: {
    caption: "What XP17 Alert 411 can and cannot establish",
    columns: ["Evidence", "Supported conclusion", "Unsupported shortcut"],
    rows: [
      [
        "Critical Alert 411",
        "Low-pressure events reached the documented lockout logic",
        "The system is simply low on refrigerant",
      ],
      ["Visible outdoor obstruction", "Heat transfer may be impaired", "Clearing it has repaired every cause"],
      ["Recent sealed-system work", "Commissioning data deserves review", "More refrigerant is automatically needed"],
    ],
  },
  figures: [
    {
      title: "From pressure event to Alert 411",
      description:
        "The controller moves from an individual protection opening to a critical lockout only after the documented event logic, while the physical cause remains a separate diagnosis.",
      nodes: [
        {
          label: "Operating conditions",
          detail: "Airflow, load, weather, and circuit state affect suction",
        },
        {
          label: "Low-pressure input",
          detail: "Switch and wiring report the protection state",
        },
        {
          label: "Repeated events",
          detail: "Control counts qualifying openings over its logic window",
        },
        {
          label: "Alert 411",
          detail: "Communicating thermostat reports the resulting lockout",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Critical describes the response, not certainty about cause",
      paragraphs: [
        "iComfort labels 411 critical because the XP17 has reached lockout logic after repeated low-pressure events. That severity tells the owner not to expect normal compressor operation. It does not convert a pressure-switch input into a refrigerant leak detector. Suction pressure responds to indoor airflow, outdoor heat exchange, metering, restrictions, charge, operating mode, and weather. The electrical input can also be affected by its switch and wiring. A correct diagnosis must connect the alert history to measured system behavior.",
        "This distinction prevents two bad shortcuts. Adding refrigerant without proving charge can overcharge a system whose true problem is airflow or restriction. Replacing a switch without measuring the pressure at which it changes state can remove a safety device that was reporting correctly. Lennox's service procedure belongs with trained personnel because pressure, temperature, control history, and circuit evidence must be read together.",
      ],
    },
    {
      title: "Preserve iComfort history before clearing it",
      paragraphs: [
        "Photograph the alert number, full wording, time, and any associated alerts. Record whether the XP17 was cooling or heating, indoor filter condition, outdoor temperature, snow or debris near the unit, and recent maintenance. Note whether indoor airflow continued and whether auxiliary heat operated. The alert log can show sequence that a later reset removes from view.",
        "Do not bypass the low-pressure switch, force compressor operation, connect gauges, or add refrigerant. If external clearance can be restored without touching the unit, document before and after. A critical alert that returns needs Lennox service. Smoke, burning odour, damaged wiring, or repeated breaker trips requires shutdown at the identified disconnect and urgent assistance.",
      ],
    },
  ],
  safeChecks: [
    "Save the complete iComfort alert history, operating mode, filter condition, weather, visible outdoor clearance, and recent service without opening equipment.",
  ],
  professionalEscalation: [
    "Pressure-switch, wiring, refrigerant, airflow commissioning, control-log, and live electrical diagnosis require a Lennox-qualified technician.",
  ],
  serviceHandoff:
    "Provide XP17 and indoor model numbers, Alert 411 screenshots, associated alerts, mode, weather, airflow and filter observations, outdoor condition, and sealed-system work history.",
  resetGuidance:
    "Do not repeatedly clear a critical 411 lockout; preserve its history and allow service to test the conditions that opened the protection.",
  faqs: [
    {
      question: "Does Lennox Alert 411 mean low refrigerant?",
      answer:
        "It means repeated low-pressure protection events, not a proven charge shortage. Airflow, weather, restriction, sensing, wiring, and charge remain distinct checks.",
    },
    {
      question: "What makes iComfort call 411 critical?",
      answer:
        "The XP17 procedure links 411 to a lockout reached after qualifying pressure events. Critical describes the control response and loss of compressor operation.",
    },
    {
      question: "Can I reset Lennox Alert 411?",
      answer:
        "A reset does not identify why the protection opened and can erase useful sequence data. Save the history and arrange measured service for a returning alert.",
    },
  ],
  sourceIds: ["lennox-xp17-install", "lennox-icomfort-alerts"],
  glossaryTerms: ["protection-code", "refrigerant-charge"],
  relatedContent: ["/brands/lennox/", "/how-to-document-hvac-fault-for-service/", "/hvac-refrigerants-explained/"],
  keywords: ["lennox alert 411", "xp17 critical alert 411", "icomfort code 411", "lennox low pressure lockout"],
});
