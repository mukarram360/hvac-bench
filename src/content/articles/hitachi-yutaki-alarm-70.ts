import { publish } from "./publish";
export const hitachiYutakiAlarm70 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Hitachi Yutaki alarm 70: no water flow detected",
  slug: "yutaki-alarm-70",
  path: "/brands/hitachi/yutaki-alarm-70/",
  description:
    "What Hitachi Yutaki alarm 70 establishes, which external details matter, and why pump, filter, valve, and flow checks need an installer.",
  articleType: "error-code",
  brand: "hitachi",
  equipmentType: "heat-pump",
  productFamily: "Yutaki hydronic heat-pump systems",
  models: ["Yutaki systems covered by Hitachi alarm 70 guidance"],
  errorCode: "70",
  problemType: "water-flow-fault",
  directAnswer:
    "Hitachi's Yutaki technical guidance ties alarm 70 to an unsuccessful water-flow check. The alarm does not prove that the circulation pump failed: a blocked hydraulic route, closed valve, clogged filter, air, low water condition, pump problem, or flow detection issue can all prevent confirmed circulation.",
  scopeNotice:
    "This definition is limited to Hitachi Yutaki heating systems covered by the cited manufacturer technical tip. A two-digit Hitachi alarm on an air-conditioning or Set Free controller may have a different scope.",
  symptoms: ["The Yutaki controller records alarm 70 and stops or limits a heating or hot-water request."],
  causes: [
    "The hydraulic circuit may be unable to pass water through its selected route.",
    "The pump or the electrical and sensing chain used to confirm flow may not perform as commanded.",
  ],
  diagnosticBranches: [
    {
      title: "Alarm 70 followed heating-system work",
      observation:
        "A filter, emitter, valve, cylinder, pump, or section of pipework was isolated, drained, or altered before the alarm.",
      action:
        "Identify the exact work and circuit for the installer because restored valve position, filling, and air removal belong near the start of diagnosis.",
    },
    {
      title: "Alarm 70 appeared during ordinary use",
      observation:
        "No work preceded the stop and the system previously completed both space-heating and hot-water requests.",
      action:
        "Save the active mode, visible system pressure, outdoor temperature, and any external leak evidence, then obtain qualified hydraulic diagnosis.",
    },
  ],
  decisionTable: {
    caption: "Alarm 70 context for the installer",
    columns: ["Observed context", "What it prioritises", "What remains open"],
    rows: [
      ["After draining or isolation", "Valve state, filling, and air", "Pump and sensing condition"],
      ["Only on hot-water demand", "The cylinder hydraulic route", "Whole-system flow capability"],
      ["Every demand produces 70", "Shared pump and flow path", "Exact hydraulic or electrical cause"],
    ],
  },
  figures: [
    {
      title: "How Yutaki confirms circulation",
      description:
        "A demand must create a pump command, an open hydraulic route, real water movement, and a credible flow report before the controller can continue heating.",
      nodes: [
        {
          label: "Demand selected",
          detail: "Chooses space heating or domestic hot water",
        },
        { label: "Pump command", detail: "Control requests circulation" },
        {
          label: "Water route",
          detail: "Valves, filters, and pipework must pass flow",
        },
        {
          label: "Flow confirmation",
          detail: "Sensing tells the controller movement is adequate",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Why a no-flow alarm has several causes",
      paragraphs: [
        "Alarm 70 states that the Yutaki did not establish the water movement it required. That outcome may occur even while a pump can be heard. A closed motorised valve can leave it pushing against a dead end. Debris at a strainer can raise resistance. Air introduced after draining can interrupt the water column. Conversely, an open circuit cannot circulate if the pump is not powered or mechanically operating. The final route is measurement: flow can exist yet remain unconfirmed because the sensor, cable, or input is not credible.",
        "These possibilities explain why sound is not a pump test and why the alarm is not a parts list. Diagnosis follows the water path selected for the active demand. The installer can compare command with pump operation, establish pressure and air removal, inspect valves and filtration, measure temperatures or flow, and prove the sensing circuit. Each result removes a branch before a component is ordered.",
      ],
    },
    {
      title: "Preserve the operating context",
      paragraphs: [
        "Photograph alarm 70, the Yutaki model label, and the system pressure visible through the normal controller interface. Note whether the request was space heating or domestic hot water. A fault limited to one demand points toward the route unique to that demand, while a fault on both raises questions about their shared path. Report any gurgling, recent draining, radiator work, filter cleaning, or visible water.",
        "Do not remove the case, force valves, open strainers, or repeatedly energise a pump against unknown resistance. Water near electrical equipment, freezing conditions, or loss of safe building temperature warrants prompt professional attention. Hitachi's technical material is aimed at the service path; the owner's contribution is accurate state and history.",
      ],
    },
  ],
  safeChecks: [
    "Record the alarm, model, requested mode, visible controller pressure, recent hydraulic work, and external leakage without opening the appliance.",
  ],
  professionalEscalation: [
    "Flow measurement, pump tests, filter access, air removal, valve diagnosis, and electrical sensing checks require the Yutaki installer or service engineer.",
  ],
  serviceHandoff:
    "Supply the complete Yutaki model, alarm photograph, demand type, pressure shown, whether either heating circuit still works, weather, noise, leaks, and recent water-side work.",
  resetGuidance:
    "Avoid repeated resets of alarm 70 because an unresolved no-flow condition can continue; follow the user manual and preserve recurrence details.",
  faqs: [
    {
      question: "Does Yutaki alarm 70 mean a failed pump?",
      answer:
        "No. Pump failure is one branch, but the hydraulic route and the flow-confirmation circuit can produce the same no-flow result.",
    },
    {
      question: "Can a dirty filter cause Hitachi alarm 70?",
      answer:
        "A restricted filter can reduce circulation enough to matter, but access and cleaning depend on the installed hydraulic design and should be handled by the installer.",
    },
    {
      question: "Why does alarm 70 occur only on hot water?",
      answer:
        "That pattern gives the engineer a useful route distinction: the domestic-hot-water path is active when the failure occurs, while common components still require testing.",
    },
  ],
  sourceIds: ["hitachi-yutaki-70", "hitachi-yutaki-support"],
  glossaryTerms: ["error-code", "air-to-water-heat-pump"],
  relatedContent: [
    "/brands/hitachi/",
    "/how-to-document-hvac-fault-for-service/",
    "/heat-pump-operating-temperatures/",
  ],
  keywords: [
    "hitachi yutaki alarm 70",
    "yutaki error code 70",
    "hitachi heat pump no water flow",
    "yutaki water flow alarm",
  ],
});
