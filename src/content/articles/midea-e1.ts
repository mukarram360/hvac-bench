import { publish } from "./publish";

/**
 * Midea assigns E1 differently across its product categories, so the honest
 * shape of this page is a model gate first and a definition second.
 */
export const mideaE1 = publish({
  title: "Midea E1 error code: Aurora Xtreme communication fault",
  slug: "e1-error-code",
  path: "/brands/midea/e1-error-code/",
  description:
    "Why Midea E1 only means a communication fault on the documented Aurora Xtreme model, how to confirm you have it, and what the service flow expects next.",
  articleType: "error-code",
  brand: "midea",
  equipmentType: "ductless-mini-split",
  productFamily: "Aurora Xtreme Inverter 36,000 BTU cooling-only 220 V",
  models: ["Aurora Xtreme Inverter 36,000 BTU cooling-only 220 V documented model"],
  errorCode: "E1",
  problemType: "communication-fault",
  directAnswer:
    "In the cited Midea Aurora Xtreme service manual, E1 means the indoor unit repeatedly failed to receive feedback from the outdoor unit; other Midea product categories can assign E1 differently.",
  scopeNotice:
    "This meaning belongs to one documented model: the Aurora Xtreme Inverter at 36,000 BTU, cooling only, 220 V. Midea builds across window units, portables, ducted equipment, and several ductless ranges, and E1 is not reserved for communication in all of them. If your model plate does not match, this page is the wrong page.",
  symptoms: [
    "The indoor unit displays E1 after repeated missing feedback from the outdoor unit.",
  ],
  causes: [
    "Indoor or outdoor wiring connections can interrupt the signal path.",
    "The documented service tree also considers the reactor and indoor or outdoor control boards.",
  ],
  diagnosticBranches: [
    {
      title: "Confirm the model before you accept the meaning",
      observation:
        "The display shows E1 and a search suggests a communication fault, but the equipment has not been matched to the documented model.",
      action:
        "Read the rating plate on the indoor unit and the outdoor unit. If it is not the Aurora Xtreme model above, stop here and find the manual for what you actually own, because a wrong definition sends the diagnosis in a wrong direction from the start.",
    },
    {
      title: "The model matches and E1 is present",
      observation:
        "The equipment is the documented Aurora Xtreme system and the indoor unit is reporting E1 rather than another code.",
      action:
        "The service flow begins with a restart after two minutes without power. Use that once. If E1 returns, the missing feedback is not transient and the remaining checks involve measurement inside the equipment.",
    },
  ],
  figures: [
    {
      title: "The feedback the indoor unit is waiting for",
      description:
        "E1 is raised after repeated failures to receive the expected answer, so the fault sits somewhere between the request and the reply rather than at a single named component.",
      nodes: [
        { label: "Indoor control", detail: "Sends the request and counts failed replies" },
        { label: "Connection path", detail: "Terminals and conductors between the units" },
        { label: "Reactor", detail: "Part of the documented outdoor diagnostic tree" },
        { label: "Outdoor control", detail: "Produces the feedback the indoor unit expects" },
      ],
    },
  ],
  decisionTable: {
    caption: "Before treating E1 as a communication fault",
    columns: ["Check", "What confirms it", "If it does not match"],
    rows: [
      [
        "Product category",
        "A wall-mounted ductless indoor unit with a separate outdoor unit",
        "A window, portable, or ducted Midea product uses a different code table entirely",
      ],
      [
        "Capacity and supply",
        "36,000 BTU, cooling only, 220 V, as shown on the rating plate",
        "Another capacity or a heat pump version may not share this service flow",
      ],
      [
        "Series name",
        "Aurora Xtreme Inverter on the plate or the original paperwork",
        "Find the manual for the series you own before interpreting any code",
      ],
    ],
  },
  sections: [
    {
      title: "Why the model gate comes first here",
      paragraphs: [
        "Most error code pages put the definition first and the scope note at the bottom. That order is wrong for this code. Midea is a very large manufacturer with product categories that do not share a code table, and E1 is a short, heavily reused string. Applying the Aurora Xtreme meaning to a Midea window unit or a ducted system is not a small inaccuracy, it is a different fault entirely.",
        "So the first job is identification, and it takes two photographs. The rating plate on the indoor unit and the rating plate on the outdoor unit together tell you the series, the capacity, and the supply voltage. If they do not match the model named above, nothing further on this page applies to your equipment.",
      ],
    },
    {
      title: "What the documented restart is for",
      paragraphs: [
        "The service flow opens with a restart after two minutes with the power off. It is worth being clear about what that step does and does not do. It establishes whether the missing feedback was a transient condition or a persistent one. That is a genuine diagnostic result either way.",
        "What it does not do is repair anything. If E1 returns after the documented restart, the remaining path runs through signal measurement, the reactor, and the control boards, and all of it happens inside enclosures with live parts. That is the point where a homeowner has taken the diagnosis as far as it safely goes.",
      ],
    },
  ],
  safeChecks: [
    "Verify the exact model family before using this meaning, because Midea E1 is not universal.",
    "Record whether the code appears after a power interruption or installation work.",
  ],
  professionalEscalation: [
    "Signal-voltage measurement, reactor inspection, and PCB replacement are technician procedures.",
    "Do not open the outdoor electrical compartment or attempt live meter tests.",
  ],
  serviceHandoff:
    "Give the technician photographs of both rating plates so the model is not in doubt, the displayed code, whether the documented two-minute restart cleared it and for how long, and any power interruption or installation work that came before it.",
  resetGuidance:
    "The cited service flow begins with a two-minute power-off restart; if E1 returns, stop at homeowner observations and obtain service.",
  faqs: [
    {
      question: "Does E1 mean the same on every Midea unit?",
      answer:
        "No, and that is the most important thing on this page. The communication meaning here comes from the service manual for one documented Aurora Xtreme model. Midea window units, portables, and ducted products maintain separate code tables where E1 can mean something else.",
    },
    {
      question: "How do I know which Midea model I have?",
      answer:
        "Read the rating plate on the indoor unit and the one on the outdoor unit. Between them you get the series name, the capacity in BTU, and the supply voltage, which is everything you need to decide whether this page applies.",
    },
    {
      question: "Why two minutes without power?",
      answer:
        "That is the interval the documented service flow specifies before restarting. Following it exactly matters, because a shorter interruption may not clear stored states and then the restart tells you nothing reliable about whether the condition persists.",
    },
    {
      question: "The restart worked. Is the fault gone?",
      answer:
        "It means the condition was transient on that occasion. Keep a note of the date. If E1 comes back, the pattern of how often it returns is useful evidence, and the fault should be diagnosed rather than managed with restarts.",
    },
  ],
  sourceIds: ["midea-aurora-service"],
  relatedContent: ["/brands/midea/", "/mini-split-not-turning-on/", "/mini-split-not-cooling/"],
  keywords: [
    "midea e1 error code",
    "midea aurora xtreme e1",
    "midea mini split e1",
    "midea communication fault",
    "midea e1 meaning",
  ],
});
