import { publish } from "./publish";

/**
 * Pioneer publishes three separate codes for one subsystem, and the difference
 * between them is the whole article: one says the detector has failed, one
 * says the system decided there is a leak, one says the detector itself is
 * reading refrigerant. Collapsing them into "leak" loses the distinction that
 * decides what happens next.
 */
export const pioneerRefrigerantDetectorCodes = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Pioneer Fd, Fy, and Hd: three codes from the leak detector",
  slug: "refrigerant-detector-codes",
  path: "/brands/pioneer/refrigerant-detector-codes/",
  description:
    "Pioneer separates a failed refrigerant detector from a detected leak. What Fd, Fy, and Hd each state on Diamante and Quantum systems, and what none of them prove.",
  articleType: "error-code",
  brand: "pioneer",
  equipmentType: "ductless-mini-split",
  productFamily: "Diamante and Quantum systems in the manufacturer code list",
  models: [
    "Diamante systems covered by the Pioneer code list",
    "Quantum systems covered by the Pioneer code list",
    "Multi-Zone Quantum Ultra systems where the same list applies",
  ],
  errorCode: "Fd / Fy / Hd",
  problemType: "refrigerant-detection",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "Pioneer assigns three different codes to the refrigerant detector. Fd reports a detector fault, Fy reports refrigerant leakage detected, and Hd reports that the leak detector is detecting refrigerant. Only two of the three say anything about refrigerant being present.",
  scopeNotice:
    "These meanings come from the Pioneer code list published for Diamante and Quantum systems. Pioneer maintains separate code documentation for its dehumidifiers, its recreational vehicle systems, and the Vertex ducted central split range, and the same characters on another manufacturer's equipment mean something else entirely.",
  layout: ["branches", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The indoor display shows Fd, Fy, or Hd and the system has stopped or is refusing to start.",
    "The code appeared shortly after work was carried out near the indoor unit.",
    "Cooling had been getting weaker before a detector code appeared.",
  ],
  causes: [
    "Pioneer documents Fd as a fault in the refrigerant detector itself rather than as a report about refrigerant.",
    "Pioneer documents Fy as refrigerant leakage detected by the system and Hd as the leak detector detecting refrigerant.",
  ],
  diagnosticBranches: [
    {
      title: "The code is Fd",
      observation:
        "The display shows Fd, and no smell, no ice, and no loss of cooling has been noticed alongside it.",
      action:
        "Treat this as a report about the detector, not about the refrigerant circuit. The system is saying its sensing element is not working correctly, so the honest position is that leak detection is unavailable until it is repaired. Arrange service and say which of the three codes you saw.",
    },
    {
      title: "The code is Fy or Hd",
      observation:
        "The display shows one of the two codes Pioneer assigns to refrigerant actually being detected.",
      action:
        "Stop using the system and ventilate the room by opening a window or a door. Keep ignition sources away, do not run fans or appliances that could concentrate air movement around the unit, and call for service. A detected refrigerant condition is not a code to reset past.",
    },
    {
      title: "A detector code followed recent work in the room",
      observation:
        "Decorating, sealing, spray foam, aerosol use, or another trade's work happened near the indoor unit shortly before the code appeared.",
      action:
        "Record what was used and when, then still arrange service. Solvent vapours can reach a sensing element, so the history is genuinely useful to the technician, but the reader is not in a position to decide that a detection was spurious.",
    },
  ],
  figures: [
    {
      title: "Which part of the chain each code is about",
      description:
        "Three codes, three different subjects. Reading them as one message is what makes people reset a detector fault and assume the system is now safe.",
      nodes: [
        { label: "Code Fd", detail: "The detector itself is reported as faulty" },
        { label: "Code Fy", detail: "The system reports refrigerant leakage detected" },
        { label: "Code Hd", detail: "The leak detector is detecting refrigerant" },
        { label: "Code F4", detail: "Cooling system gas flow abnormal protection, a separate signal" },
      ],
    },
  ],
  decisionTable: {
    caption: "What each Pioneer detector code proves and does not prove",
    columns: ["Code", "What it establishes", "What it does not establish"],
    rows: [
      [
        "Fd",
        "The refrigerant detector is reported faulty",
        "It says nothing about whether refrigerant has escaped",
      ],
      [
        "Fy",
        "The system has detected refrigerant leakage",
        "It does not locate the leak or say how much has been lost",
      ],
      [
        "Hd",
        "The leak detector is reading refrigerant present",
        "It does not separate a circuit leak from refrigerant reaching the sensor another way",
      ],
      [
        "F4",
        "The system is in cooling gas flow abnormal protection",
        "It is a flow protection rather than a detector reading, so it is not a leak confirmation",
      ],
    ],
  },
  sections: [
    {
      title: "Why a detector fault is not good news",
      paragraphs: [
        "Readers who see Fd and no other symptom sometimes take it as the harmless one of the three. In one sense it is: nothing has been detected. In another it is the one that leaves you least informed, because the equipment has just told you that the thing which would have detected a leak is not working.",
        "So the sensible reading of Fd is neither alarm nor relief. It is the loss of a safety function, which is why it belongs with a technician rather than in a reset cycle. A system running with a faulty detector is running without the monitoring it was designed to have.",
      ],
    },
    {
      title: "What a detection code does not tell you",
      paragraphs: [
        "None of these codes locates anything. A detector sits where it can sample air near the indoor unit, so a reading tells you refrigerant reached that point. It does not say whether the source is a joint at the indoor coil, a flare a metre away, a line set run inside the wall, or something entirely outside the system.",
        "Nor does a detection code quantify. The code carries no reading, no rate, and no duration. A technician establishes those with a leak detector and pressure measurement, and any statement about how much refrigerant has gone is a measurement rather than an inference from a display.",
        "The corollary is worth stating plainly. A system that has not shown a detector code has not been certified leak free by anything. Detection is a threshold function, and a slow loss can reduce performance for a long time without crossing it.",
      ],
    },
    {
      title: "Where the owner-safe boundary sits",
      paragraphs: [
        "Ventilating a room, keeping ignition sources away, stopping the system, and writing down what happened are all within reach of an owner and all useful. Everything past that point is not. Refrigerant work requires certification, recovery equipment, and leak detection instruments, and the specific handling requirements depend on the refrigerant in your system.",
        "Do not attempt to clear a detector code by cycling the supply and continuing to run the system. On a code that reports detection, the reset removes the message and leaves the condition, and it also removes the evidence a technician would have used to establish when it started.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the exact characters on the display, since Fd, Fy, and Hd are three different messages.",
    "Ventilate the room and stop the system if the code is one of the two that report refrigerant present.",
    "Write down any recent work, decorating, or aerosol use near the indoor unit and the date the code first appeared.",
  ],
  professionalEscalation: [
    "Refrigerant detection, recovery, leak location, and recharging require a certified technician with the correct equipment for the refrigerant in the system.",
    "A faulty detector reported by Fd should be repaired rather than bypassed, because the system is running without the monitoring it was built with.",
  ],
  serviceHandoff:
    "Tell the technician which of the three codes appeared, whether it repeats after the system has been off, what work had been done near the indoor unit recently, and whether cooling performance had changed before the code. Those answers separate a sensing fault from a genuine loss of charge before anyone opens the system.",
  resetGuidance:
    "A code reporting detected refrigerant is not one to clear and carry on with. Leave the system off and arrange service, because a reset removes the message rather than the condition that produced it.",
  faqs: [
    {
      question: "What is the difference between Fy and Hd?",
      answer:
        "Pioneer lists Fy as refrigerant leakage detected and Hd as the leak detector detecting refrigerant. Both report refrigerant present rather than a sensor problem, and both belong with a technician. Record which one you saw, because the manufacturer separates them and your technician will want the exact code.",
    },
    {
      question: "Can I keep using the system with an Fd code?",
      answer:
        "The code reports the detector as faulty, which means the function that would warn you about refrigerant is not available. That is a reason to arrange repair rather than a reason to continue, and it is not a code that a power cycle resolves.",
    },
    {
      question: "Does a detector code mean my system is empty?",
      answer:
        "No. Detection says refrigerant reached the sensing point. It carries no quantity, no rate, and no location, so how much charge remains is something a technician measures rather than something the display implies.",
    },
    {
      question: "Do these codes appear on every Pioneer product?",
      answer:
        "They are published in the Pioneer code list for Diamante and Quantum systems. The manufacturer keeps separate code documentation for its dehumidifiers, recreational vehicle systems, and the Vertex ducted central split range, so match your product line before applying these meanings.",
    },
  ],
  sourceIds: ["pioneer-diamante-quantum-codes", "pioneer-product-lineup"],
  relatedContent: [
    "/brands/pioneer/",
    "/brands/pioneer/e1-communication-error-code/",
    "/hvac-refrigerants-explained/",
    "/mini-split-not-cooling/",
  ],
  glossaryTerms: ["refrigerant-leak", "refrigerant", "protection-code"],
  keywords: [
    "pioneer fy error code",
    "pioneer fd refrigerant detector",
    "pioneer hd leak detector code",
    "pioneer mini split refrigerant leak code",
    "pioneer diamante detector fault",
  ],
});
