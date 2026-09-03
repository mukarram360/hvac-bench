import { publish } from "./publish";

export const traneXv20i18407And18408 = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Trane XV20i alerts 184.07 and 184.08 in cold weather: why a working heat pump stays locked out",
  slug: "xv20i-184-07-and-184-08-cold-weather-lockout",
  path: "/brands/trane/xv20i-184-07-and-184-08-cold-weather-lockout/",
  description:
    "Trane variable-speed alerts arrive as a base number plus a sub alarm. What the count-based lockout and the universal hard lockout each report, and why neither names a broken part.",
  articleType: "error-code",
  brand: "trane",
  equipmentType: "heat-pump",
  productFamily:
    "Trane TruComfort variable-speed outdoor units on ComfortLink II communicating controls, including the XV20i heat pump",
  models: [
    "Trane XV20i variable-speed heat pump",
    "Trane variable-speed outdoor units reporting through ComfortLink II wall controls",
  ],
  errorCode: "184.07 / 184.08",
  problemType: "protection-lockout",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "Both entries describe the state the outdoor control has entered, not a component it has condemned. Trane publishes its variable-speed alerts as a base code with a sub alarm, and the two lockout entries in that family behave differently from every protection alert underneath them: a protection alert shuts the compressor down for a cutout period and then releases itself, while a lockout entry stops the system until power is cycled or the alerts are reset. In cold weather the alerts that accumulate underneath include one for which Trane names low outdoor ambient temperature, below a figure printed in its table, as a possible cause.",
  scopeNotice:
    "The alert architecture and the two lockout behaviours described here are read from Trane variable-speed outdoor unit Service Facts. Pressure thresholds, cutout times and the shutdown count that triggers the lockout are model specific and are printed in the Service Facts for the exact outdoor model, so treat those figures as something to look up rather than to carry across.",
  symptoms: [
    "The compressor stops during cold weather and the wall control holds the system off until power is interrupted.",
    "Two alerts appear together, one describing a shutdown count and one describing a lockout state.",
    "The system had been running with intermittent stoppages for hours or days before the lockout latched.",
  ],
  causes: [
    "Repeated protection shutdowns accumulating until a count-based lockout latches, which Trane documents as clearable only on a power cycle.",
    "Low suction pressure protection in heating mode, for which Trane lists outdoor ambient temperature below a stated figure among the possible causes, alongside low charge, a restriction, and pressure transducer calibration.",
    "An outdoor hard lockout state entered for any underlying reason, which the control reports as a universal entry rather than as a diagnosis.",
  ],
  diagnosticBranches: [
    {
      title: "The wall control is showing Wait and the compressor is off",
      observation:
        "The system stops, the control displays a waiting message, and operation returns without anyone touching the equipment.",
      action:
        "That is the documented soft lockout behaviour: the outdoor control shuts down, sends a wait message to the thermostat, records the alert, and resumes once the compressor cutout time has elapsed. Note the time and the outdoor temperature rather than cycling power.",
    },
    {
      title: "Operation does not return without a power cycle",
      observation:
        "The compressor stays off through several thermostat calls and the alert remains on the control screen.",
      action:
        "Read the display text beside the number before doing anything else. Trane documents both lockout entries as clearable only on a power cycle, and states that after the power cycle the compressor resumes normal operation, which means a successful restart proves nothing about the cause.",
    },
    {
      title: "The alert history holds a run of earlier entries",
      observation:
        "The alert menu lists several protection entries from the hours before the lockout appeared.",
      action:
        "Photograph the list in order. Trane directs the technician to check the previous history for the faults that led to the lockout, so the entries underneath are the diagnostic material and the lockout itself is the consequence.",
    },
  ],
  decisionTable: {
    caption: "How the three alert behaviours differ on a variable-speed outdoor unit",
    columns: ["Alert behaviour", "What the control does", "How it clears"],
    rows: [
      ["Protection shutdown", "Stops the compressor and sends a wait message", "By itself once the cutout time has elapsed"],
      ["Count-based lockout", "Refuses to start and calls for service", "Only on a power cycle, after which operation resumes"],
      ["Universal hard lockout", "Holds the outdoor hard lockout state open", "Only on a power cycle, or by resetting alerts"],
    ],
  },
  figures: [
    {
      title: "How a cold night turns into a latched lockout",
      description:
        "Each stage is a state the control moved through, and only the first stage carries information about the equipment. The later stages count and hold.",
      nodes: [
        { label: "Operating limit reached", detail: "A protection algorithm trips" },
        { label: "Soft lockout", detail: "Compressor cutout period, then release" },
        { label: "Repeat occurrences", detail: "The control counts the shutdowns" },
        { label: "Latched lockout", detail: "Service call, cleared on power cycle" },
      ],
    },
  ],
  sections: [
    {
      title: "Read the sub alarm, not the number on its own",
      paragraphs: [
        "Trane prints its variable-speed alerts in a table with separate columns for the alert code, the alert group, the display text, and the sub alarm. That structure is why owners see a number with a decimal point: two entries can share a base and still describe different states. Copying the base alone throws away the half of the entry that says what happened.",
        "The display text is the part that travels safely. One entry in the lockout family reports that the maximum number of protection shutdowns has been reached. The other reports a universal hard lockout, described as occurring any time the system enters the outdoor hard lockout state. Those are two different statements, and a photograph of the screen keeps them distinguishable in a way a transcribed number does not.",
        "HVAC Bench has verified the sub alarm structure and both lockout behaviours from Trane variable-speed Service Facts. We have not verified a published table that maps those particular decimal digits, so on this page the display text is what carries the meaning, and the number is the label you use to find it.",
      ],
    },
    {
      title: "Why cold weather is where the count fills up",
      paragraphs: [
        "The protection alerts underneath the lockout describe operating limits. Trane lists low suction pressure protection in heating mode as an alert that shuts the compressor down when suction pressure falls below a published threshold, and names outdoor ambient temperature below a stated figure as one of the possible causes, alongside low charge, refrigerant pump down at the expansion valve, a restriction, and pressure transducer calibration.",
        "That list is the useful part. A heat pump can meet a documented protection limit on a cold night while every component is intact, and it can meet the same limit because the charge is low. The alert cannot separate those two on its own, which is exactly why the manual asks the technician to read what came before.",
        "The lockout is a counter, so it says nothing about which of those causes applied. It says the control reached its allowance. A system that restarts and runs after a power cycle has not been repaired, and Trane says so directly by noting that the compressor resumes normal operation after the cycle.",
      ],
    },
    {
      title: "What to capture before the record is lost",
      paragraphs: [
        "Alert history is the only place the sequence survives. Trane sends protection alerts to the wall control home screen, its alert menu, and its history, and resetting alerts is documented as clearing the outdoor hard lockout, which means a reset can remove the evidence and the symptom in the same action.",
        "Photograph the alert list in the order it is displayed, with the display text visible. Add the outdoor temperature at the time the system stopped, whether auxiliary or emergency heat carried the house, and how long the gaps between stoppages were. Those four items let a technician decide whether the visit starts at charge, at a sensor, or at the operating conditions themselves.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the alert screen and the alert history in order, with the display text beside each number.",
    "Record the outdoor temperature and the time at each stoppage, because the protection alerts underneath are tied to operating conditions.",
    "Check whether auxiliary or emergency heat is holding the house, which tells a technician what the system fell back to.",
  ],
  professionalEscalation: [
    "Charge assessment, pressure transducer checks and expansion valve diagnosis are qualified service work on a sealed refrigerant circuit.",
    "Any inspection inside the outdoor cabinet on a variable-speed unit involves stored energy in the drive and belongs to a technician.",
  ],
  serviceHandoff:
    "Hand over the outdoor model number, the alert list photographed in order with display text visible, the outdoor temperatures at each stoppage, and whether the system restarted after a power cycle. Those four items point the visit at the protection alerts underneath rather than at the lockout that latched last.",
  resetGuidance:
    "A power cycle is documented as the way both lockout entries clear, and the compressor resumes afterwards. Capture the alert history first, because resetting alerts is also documented as clearing the outdoor hard lockout.",
  faqs: [
    {
      question: "Does a hard lockout mean the compressor has failed?",
      answer:
        "No. Trane describes the universal entry as occurring any time the system enters the outdoor hard lockout state, and directs the technician to investigate the alerts that led to it. The entry reports a state, not a failed part.",
    },
    {
      question: "Why did the system run again after I cut power?",
      answer:
        "Because a power cycle is the documented way the lockout clears, and Trane states that the compressor resumes normal operation afterwards. A successful restart is not evidence that the underlying condition has gone.",
    },
    {
      question: "Can extreme cold alone cause these alerts?",
      answer:
        "Trane lists outdoor ambient temperature below a stated figure among the possible causes of low suction pressure protection in heating, alongside low charge and restrictions. Cold weather is a listed cause, so it cannot be ruled in or out from the alert alone.",
    },
    {
      question: "What is the difference between a soft and a hard lockout?",
      answer:
        "A soft lockout stops the compressor for a cutout period and releases itself, sending a wait message to the thermostat meanwhile. A hard lockout holds the system off until power is cycled or the alerts are reset.",
    },
    {
      question: "Should I clear the alerts before the technician arrives?",
      answer:
        "Photograph the history first. Resetting alerts is documented as clearing the outdoor hard lockout, so it removes both the symptom and the sequence a technician needs to work from.",
    },
  ],
  sourceIds: ["trane-variable-speed-service-facts", "trane-xl824-support"],
  relatedContent: [
    "/brands/trane/",
    "/brands/trane/xl824-thermostat-reboot/",
    "/heat-pump-operating-temperatures/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  glossaryTerms: ["protection-code", "compressor", "inverter-compressor", "error-code"],
  keywords: [
    "trane 184.07",
    "trane 184.08",
    "xv20i hard lockout",
    "trane variable speed alert codes",
    "trane heat pump cold weather lockout",
  ],
});
