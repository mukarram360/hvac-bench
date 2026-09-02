import { publish } from "./publish";

/**
 * MRCOOL displays the same fault differently by generation, so the page turns
 * on identifying the generation from what is on the screen.
 */
export const mrcoolEl01 = publish({
  title: "MRCOOL EL01 or E1 error code: communication malfunction",
  slug: "el01-e1-error-code",
  path: "/brands/mrcool/el01-e1-error-code/",
  description:
    "Generation-aware MRCOOL EL01 and E1 guidance: what the display tells you, the one documented restart, and where owner checks have to stop.",
  articleType: "error-code",
  brand: "mrcool",
  equipmentType: "ductless-mini-split",
  productFamily: "MRCOOL generations and models identified in official support",
  models: [
    "Generation 4 indoor units",
    "Generation 5 indoor units",
    "Models identified in the official EL01/E1 guide",
  ],
  errorCode: "EL01 / E1",
  problemType: "communication-fault",
  directAnswer:
    "MRCOOL identifies EL01 or E1 on the supported mini-split families as an indoor-to-outdoor communication malfunction, which implicates the connection path without proving one component failed.",
  scopeNotice:
    "MRCOOL revises its code display between product generations, which is why the same fault reaches you as EL01 on some equipment and E1 on others. Match the characters you see and the generation of your indoor unit against the official code table before acting, because the table is the thing that resolves which entry applies.",
  symptoms: [
    "The air handler shows EL01 or E1 and the indoor and outdoor units cannot complete normal communication.",
  ],
  causes: [
    "Loose, incorrect, or damaged communication wiring can interrupt the signal.",
    "Indoor or outdoor PCB faults or shorted connected components require further isolation.",
  ],
  diagnosticBranches: [
    {
      title: "Work out which generation you are reading",
      observation:
        "The display shows either EL01 or E1, and it is not obvious which MRCOOL generation the equipment belongs to or whether the two strings mean the same thing.",
      action:
        "Find the model and serial label on the indoor unit and match it to the official code table. The two strings describe the same communication malfunction across the supported families, but confirming the generation is what lets you trust the rest of the entry.",
    },
    {
      title: "Use the documented breaker-off wait once",
      observation:
        "The code is present, the generation is confirmed, and nothing has been tried yet.",
      action:
        "Switch the dedicated breaker off, wait for the interval the official guide specifies, and restore it. Watch whether the code clears and whether it stays clear through a full run cycle.",
    },
    {
      title: "The code returns after the documented wait",
      observation:
        "The display clears on restoration and the code comes back, either immediately or once the system tries to run.",
      action:
        "Stop here and contact qualified service or MRCOOL support with the model and serial numbers. Everything past this point in the official path involves terminals, board indicators, and live measurement.",
    },
  ],
  decisionTable: {
    caption: "What the display and the restart tell you together",
    columns: ["What happens", "What you have established", "Where that leaves you"],
    rows: [
      [
        "The code clears after the documented wait and does not return",
        "The interruption was transient rather than a standing fault",
        "Note the date and watch for a pattern over the next few weeks",
      ],
      [
        "The code clears but returns as soon as the system runs",
        "Something in the path fails under normal operating conditions",
        "Report exactly that behaviour when you call, because it is more specific than the code",
      ],
      [
        "The code never clears at all",
        "The path is broken rather than intermittent",
        "Arrange service and leave the breaker off if anything looks or smells wrong",
      ],
    ],
  },
  sections: [
    {
      title: "Why MRCOOL shows two different strings",
      paragraphs: [
        "Search results for MRCOOL communication faults return both EL01 and E1, and it looks like a contradiction. It is not. MRCOOL changed how faults are displayed between product generations, so equipment of different ages reports the same underlying condition with different characters on the screen.",
        "The practical effect is that the string alone is not enough to identify your equipment. The model and serial label on the indoor unit is what tells you which generation you own, and the official code table is where the string and the generation resolve into one entry. Guessing from the string alone is how people end up following a procedure written for equipment they do not have.",
      ],
    },
    {
      title: "The one restart, and why it is only one",
      paragraphs: [
        "The official guidance opens with switching off at the breaker, waiting, and restoring power. That is a designed step with a purpose: it clears stored states and shows whether the communication failure survives a full power interruption.",
        "Doing it repeatedly does not extend the benefit. If the code comes back, you have your answer, and further cycling of the breaker only interrupts a system that is already reporting a fault. It also removes the pattern a technician would use, because a fault that returns immediately and a fault that returns after twenty minutes of running are different leads.",
        "There is also a practical reason to get the model and serial numbers written down before you call. MRCOOL support and most service companies will ask for them first, and reading them off a photograph on your phone beats standing on a chair with a torch while somebody waits on the line.",
      ],
    },
  ],
  figures: [
    {
      title: "Why the display string differs between systems",
      description:
        "The same communication malfunction reaches you through whichever display convention your generation of equipment uses, which is why identification comes before interpretation.",
      nodes: [
        { label: "Model and serial label", detail: "Identifies which generation you own" },
        { label: "Official code table", detail: "Maps that generation to its displayed strings" },
        { label: "Displayed string", detail: "EL01 or E1 depending on the generation" },
        { label: "Underlying condition", detail: "One communication malfunction behind both" },
      ],
    },
  ],
  safeChecks: [
    "Match the displayed code and model generation to MRCOOL's official code table.",
    "With power off at the breaker, wait as the official guide directs and note whether one restart clears the display.",
  ],
  professionalEscalation: [
    "Terminal access, voltage measurements, board LEDs, and component isolation expose hazardous electrical parts and are technician work.",
    "If the code returns, contact qualified service or MRCOOL support with model and serial information.",
  ],
  serviceHandoff:
    "Have the indoor and outdoor model and serial numbers ready, say whether the display reads EL01 or E1, describe what the documented breaker-off restart did, and state whether the code returns immediately or only once the system has been running.",
  resetGuidance:
    "MRCOOL's guide begins with a breaker-off wait; use that once, then escalate if the code remains or returns.",
  faqs: [
    {
      question: "Are EL01 and E1 the same fault?",
      answer:
        "On the supported mini-split families they describe the same indoor-to-outdoor communication malfunction. The difference is how the generation of equipment displays it, which is why the official code table asks you to match the generation as well as the characters.",
    },
    {
      question: "Which MRCOOL generation do I have?",
      answer:
        "The model and serial label on the indoor unit identifies it. That label is what the official code table is built around, and it is worth photographing now because you will need it again if you call support.",
    },
    {
      question: "Can I check the communication wire myself?",
      answer:
        "No. Reaching the terminals means opening an enclosure with live electrical parts, and the official path from that point involves voltage measurement and board indicators. That work belongs with a qualified technician.",
    },
    {
      question: "How long should I leave the breaker off?",
      answer:
        "Use the interval the official MRCOOL guide specifies for your equipment rather than a number from a forum. The wait exists to let stored states clear, and cutting it short makes the result of the restart unreliable.",
    },
  ],
  sourceIds: ["mrcool-code-table", "mrcool-e1-guide"],
  relatedContent: ["/brands/mrcool/", "/mini-split-not-turning-on/", "/mini-split-remote-not-working/"],
  keywords: [
    "mrcool el01 error code",
    "mrcool e1 error code",
    "mrcool communication malfunction",
    "mrcool diy el01",
    "mrcool generation 5 error",
  ],
});
