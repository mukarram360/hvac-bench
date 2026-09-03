import { publish } from "./publish";

export const rheemEconetFaultHistory = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Rheem EcoNet fault history: active fault versus the last five",
  slug: "econet-fault-history",
  path: "/brands/rheem/econet-fault-history/",
  description:
    "Rheem EcoNet keeps the active fault and five earlier faults in its Service Information screen. Read the sequence before anyone clears it.",
  articleType: "guide",
  brand: "rheem",
  equipmentType: "controls-thermostats",
  productFamily: "Rheem EcoNet communicating controls paired with compatible HVAC equipment",
  models: ["Rheem EcoNet control covered by user manual 7086040", "Compatible communicating Rheem furnace and outdoor equipment"],
  problemType: "fault-history-readout",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "The EcoNet Service Information screen separates the fault that is active now from the five most recent stored faults. Read both before using Clear Fault History, because the order can show whether one event led to another across the communicating system.",
  scopeNotice:
    "This menu belongs to the Rheem EcoNet control documented in user manual 7086040. A seven-segment display on an R96V furnace uses its own navigation, so do not transfer these screen instructions to the furnace board.",
  symptoms: ["The system is working again, but an earlier interruption needs to be identified before a service visit."],
  causes: [
    "EcoNet stores a current fault separately from a short history, so the code visible during recovery may not be the event that started the sequence.",
    "Clearing history removes timing context that a technician can compare with compressor, outdoor-fan, indoor-fan, and temperature status.",
  ],
  decisionTable: {
    caption: "What the EcoNet service screen preserves",
    columns: ["Screen item", "What it answers", "What it does not establish"],
    rows: [
      ["Fault Status", "Which fault is active now", "Which part has failed"],
      ["Last five faults", "What the control recorded before now", "Exact duration without other records"],
      ["Component Status", "Reported operating state and temperatures", "A substitute for instrument tests"],
      ["Clear Fault History", "Removes stored entries", "Repairs the reason they appeared"],
    ],
  },
  figures: [{
    title: "Two fault records on one EcoNet control",
    description: "The current entry answers what the control sees now. The five stored positions preserve what it saw before, while component-status pages describe the operating snapshot around those records.",
    nodes: [
      { label: "Active fault", detail: "Present control condition" },
      { label: "Five stored faults", detail: "Earlier entries in sequence" },
      { label: "Status screens", detail: "Reported equipment state and temperatures" },
    ],
  }],
  sections: [
    {
      title: "A fault sequence carries more evidence than one code",
      paragraphs: [
        "Open Service Information and copy the active entry first, then scroll through the five stored entries in the order shown. The same screen family exposes compressor, outdoor-fan, indoor-fan, and temperature status. A photograph of each page preserves spelling, numbering, and the control's own labels without asking an owner to interpret them.",
        "A furnace pressure-proof event followed by a thermostat communication message is a different service story from five repetitions of the same pressure event. The list cannot diagnose either case, but it tells the technician which equipment reported first and whether the control saw a cluster or a single interruption.",
        "Write down an empty position as empty instead of skipping it. A history with one entry carries a different recurrence pattern from a full five-entry list, even when every visible code matches. The storage limit means older events may have already rolled out of view.",
      ],
    },
    {
      title: "Clear history only after the record has served its purpose",
      paragraphs: [
        "Clear Fault History is an archive control, not a reset for the equipment. Using it before service can erase the only readily available account of an intermittent problem. Capture the list, current operating mode, setpoint, outdoor conditions, and the time the symptom occurred before clearing anything.",
        "The control also performs a fan calibration weekly and after a power loss longer than eight hours. If blower operation appears after an outage, record the timing rather than assigning it to a stored fault. The user manual identifies that calibration as scheduled control behavior.",
      ],
    },
  ],
  faqs: [
    { question: "How many previous faults does Rheem EcoNet show?", answer: "The documented Service Information screen shows the active fault and the last five faults. Copy every entry before clearing the history." },
    { question: "Does clearing EcoNet fault history reset the furnace?", answer: "No. It removes the stored record. It does not correct the condition that made the furnace, outdoor unit, or control report a fault." },
    { question: "Why photograph the component status screens too?", answer: "They preserve the control's reported compressor, fan, and temperature states at the same visit. Those states give a technician context for the fault sequence." },
  ],
  sourceIds: ["rheem-econet-user", "rheem-r96v-service"],
  relatedContent: ["/brands/rheem/", "/brands/rheem/r96v-fault-57/", "/how-to-document-hvac-fault-for-service/", "/brands/rheem/econet-a006-c-odu-communication-failure/"],
  glossaryTerms: ["error-code", "thermostat", "control-board"],
  keywords: ["rheem econet fault history", "rheem last five faults", "econet service information", "clear rheem fault history"],
});
