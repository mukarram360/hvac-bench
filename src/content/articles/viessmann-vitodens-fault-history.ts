import { publish } from "./publish";

export const viessmannVitodensFaultHistory = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Viessmann Vitodens 100-W fault history: stored does not mean active",
  slug: "vitodens-100w-fault-history",
  path: "/brands/viessmann/vitodens-100w-fault-history/",
  description:
    "The Vitodens 100-W keeps five recent faults, including ones already remedied. Read the active list and message history as two different records.",
  articleType: "guide",
  brand: "viessmann",
  equipmentType: "boiler",
  productFamily: "Vitodens 100-W boilers using the documented programming unit",
  models: ["Vitodens 100-W models covered by installation instructions 6167586"],
  problemType: "fault-memory-interpretation",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "The Er list is for fault messages, while b.4 opens message history. Viessmann states that the five most recent faults are saved, including faults that have been remedied, so an entry in history is not proof that the condition is present now.",
  scopeNotice:
    "The menu labels and button sequence here apply to the Vitodens 100-W programming unit in the cited United Kingdom installation instructions. Other Vitodens displays and North American B1HE/B1KE controls use different navigation.",
  symptoms: ["A fault code is visible in message history after the boiler has resumed normal operation."],
  causes: [
    "The control retains resolved entries so a technician can reconstruct intermittent events.",
    "Opening an active fault in the Er menu acknowledges its display but does not repair the underlying condition.",
  ],
  decisionTable: {
    caption: "Vitodens fault records are separate",
    columns: ["Record", "Contents", "Safe interpretation"],
    rows: [
      ["Fault display", "A condition the control is presenting now", "Record before attempting a permitted reset"],
      ["Er message list", "Fault entries available through the service menu", "Viewing acknowledges the display"],
      ["b.4 message history", "Five recent faults, including remedied entries", "Use order as service context"],
    ],
  },
  figures: [{
    title: "A present message and a retained message have different status",
    description: "The home display presents the current condition. The Er menu exposes fault entries and acknowledges their display, while b.4 retains up to five past records for later diagnosis.",
    nodes: [
      { label: "Home display", detail: "Current message shown to the user" },
      { label: "Er list", detail: "Fault entry and acknowledgement path" },
      { label: "b.4 history", detail: "Five retained fault positions" },
    ],
  }],
  sections: [
    {
      title: "Copy the entry before acknowledgement changes the screen",
      paragraphs: [
        "Photograph the home display first. Then note whether the code is found in the current Er list or only under b.4 history. The installation instructions explain that calling up the Er fault automatically acknowledges the fault display. That screen change can look like a repair even though only the message presentation changed.",
        "For each stored position, copy the complete code and its order. Pair the list with the time heat or hot water stopped, system pressure, burner status, and any recent power interruption. The archive gives sequence, while those observations give operating context.",
        "Do not reorder the entries into numerical order when transcribing them. Their value lies in chronology. A later service note can then distinguish one event followed by recovery from a repeated condition that displaced older messages as the five-position memory filled.",
      ],
    },
    {
      title: "History is useful precisely because it outlives the fault",
      paragraphs: [
        "An intermittent flame, fan, sensor, or communication condition may clear before service arrives. If the boiler is then operating, a stored entry shows that the control saw something without claiming it remains present. Repeated instances of one code and a chain of different codes are different diagnostic starting points.",
        "Do not enter deeper commissioning parameters, remove the case, or treat the menu as a component test. Hand the record to a qualified engineer. Fault 59 on the documented 100-W heat-only family has its own burner-sequence meaning and should be read through the model-specific fault guide.",
      ],
    },
  ],
  faqs: [
    { question: "How many faults does a Vitodens 100-W store?", answer: "The cited instructions state that the five most recent faults are saved, including entries for conditions that have already been remedied." },
    { question: "Does a code in b.4 mean the boiler is still faulty?", answer: "No. b.4 is history. Compare it with the active display and present operation before deciding whether the condition remains." },
    { question: "Does acknowledging a Viessmann fault fix it?", answer: "No. Opening the fault in the Er menu acknowledges the display. It does not prove that the cause has cleared or been repaired." },
  ],
  sourceIds: ["viessmann-vitodens100-install", "viessmann-vitodens-quickstart"],
  relatedContent: ["/brands/viessmann/", "/brands/viessmann/vitodens-100w-fault-59/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["error-code", "boiler", "control-board"],
  keywords: ["vitodens 100 fault history", "viessmann b.4 message history", "viessmann er fault list", "vitodens stored fault code"],
});
