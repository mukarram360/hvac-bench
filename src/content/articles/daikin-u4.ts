import { publish } from "./publish";

/**
 * U4 sits on multi-unit SkyAir systems, so the reasoning that matters is which
 * units report it. That pattern points at a shared segment or a single branch
 * long before anyone opens a panel.
 */
export const daikinU4 = publish({
  title: "Daikin U4 error code: indoor-outdoor transmission error",
  slug: "u4-error-code",
  path: "/brands/daikin/u4-error-code/",
  description:
    "What Daikin U4 means for the documented SkyAir families, how the pattern across connected units narrows it, and which tests belong with service.",
  articleType: "error-code",
  brand: "daikin",
  equipmentType: "light-commercial",
  productFamily: "SkyAir RZR-P and RZQ-P(9)",
  models: ["RZR-P series", "RZQ-P(9) series", "Compatible indoor units listed in SiUS281117"],
  errorCode: "U4",
  problemType: "communication-fault",
  directAnswer:
    "For the documented Daikin SkyAir RZR-P and RZQ-P(9) systems, U4 is a transmission error between indoor and outdoor units after normal communication is absent for the specified interval.",
  scopeNotice:
    "This definition is taken from the SkyAir service manual covering RZR-P and RZQ-P(9) equipment and the indoor units listed with it. Daikin uses structured code letters across several very different product lines, so a U4 on VRV, Altherma, or a residential split needs the manual for that line rather than this page.",
  symptoms: [
    "The controller displays U4 and the connected system cannot continue normal operation.",
  ],
  causes: [
    "Incorrect transmission wiring, loss of power, or a blown fuse can break communication.",
    "Indoor or outdoor control electronics, an outdoor fan fault, or electrical noise may be involved.",
  ],
  diagnosticBranches: [
    {
      title: "Every indoor unit on the system reports U4",
      observation:
        "All controllers connected to the same outdoor unit show the code at once, and none of them operate.",
      action:
        "Record that pattern before anything else. When the whole system falls silent together, attention belongs at the outdoor unit and the shared part of the transmission run, not at any individual indoor unit or its controller.",
    },
    {
      title: "One indoor unit reports U4 and the rest keep working",
      observation:
        "The remaining indoor units heat or cool normally on the same outdoor unit while a single controller shows the code.",
      action:
        "Note which unit and where it sits in the run. A fault confined to one branch is a branch problem, and telling the technician which one saves them tracing a network that is otherwise healthy.",
    },
    {
      title: "U4 followed work anywhere on the property",
      observation:
        "An electrician, a ceiling contractor, or an HVAC visit preceded the code, even if the work was not on this equipment.",
      action:
        "Say so when you book the visit. Transmission cable is routinely disturbed by trades working above ceilings, and knowing that changes where a technician starts looking.",
    },
  ],
  figures: [
    {
      title: "How a SkyAir system talks to itself",
      description:
        "Transmission runs from the outdoor unit through each connected indoor unit and its controller. Whether the failure is shared or local is the first thing the pattern of codes tells you.",
      nodes: [
        { label: "Outdoor unit", detail: "Coordinates the connected system" },
        { label: "Shared transmission run", detail: "The segment every indoor unit depends on" },
        { label: "Indoor branch", detail: "The drop to one indoor unit" },
        { label: "Remote controller", detail: "Where the code is displayed and logged" },
      ],
    },
  ],
  decisionTable: {
    caption: "Reading the pattern of U4 across the system",
    columns: ["What the system shows", "Where the fault most likely sits", "What to do before the visit"],
    rows: [
      [
        "All connected units report U4 together",
        "The outdoor unit, its supply, or the shared transmission segment",
        "Confirm the outdoor unit has power at the isolator and leave it alone",
      ],
      [
        "One unit reports U4, the others run",
        "That branch, its terminals, or that indoor control board",
        "Identify the room and the unit number for the technician",
      ],
      [
        "U4 clears and returns without a pattern",
        "An intermittent joint or noise on the transmission run",
        "Log the times it appears and what is running in the building at those times",
      ],
    ],
  },
  sections: [
    {
      title: "Why the pattern matters more than the code",
      paragraphs: [
        "U4 tells you that expected communication was absent for the interval Daikin specifies. On a single split that would be the end of the story, but SkyAir equipment usually serves several indoor units from one outdoor unit, and that turns the code into something more useful. The distribution of the fault across the system is evidence in its own right.",
        "A whole system reporting together and one room reporting alone are different problems with different costs. Establishing which one you have takes a walk around the building and costs nothing, and it is the difference between a technician tracing an entire network and going straight to a branch.",
      ],
    },
    {
      title: "What building work has to do with it",
      paragraphs: [
        "Light commercial transmission cable spends its life above ceilings, in risers, and beside power cable installed by people who are not thinking about it. Data pairs get moved by ceiling tile work, caught by a light fitting, or re-routed alongside a new supply cable that introduces noise.",
        "This is why the question of what else happened in the building is a genuine diagnostic question rather than politeness. If a shopfitter was in last week, that belongs in the first sentence you say to the technician, because it reorders the whole search.",
        "It also matters commercially. Where a transmission fault traces back to another trade disturbing the cable, that is a different conversation about who pays than a control board reaching the end of its life. Establishing the sequence of events early, while people still remember it, protects you in a way that a diagnosis three weeks later cannot.",
      ],
    },
  ],
  safeChecks: [
    "Write down the full controller code and every connected indoor and outdoor model number.",
    "Check only normal user-accessible power controls and note whether other units on the same system operate.",
  ],
  professionalEscalation: [
    "Transmission wiring, fuses, fan motors, and PCBs require qualified electrical diagnosis.",
    "Multi-unit SkyAir systems should be diagnosed as a network rather than by replacing the first board named.",
  ],
  serviceHandoff:
    "Provide the outdoor unit model, every affected indoor unit and its location, which units still run, whether the code appeared all at once or spread, and any building work, electrical work, or supply interruption in the preceding week.",
  resetGuidance:
    "A power cycle may be used only as the operating manual permits; a returning U4 indicates an unresolved transmission fault.",
  faqs: [
    {
      question: "Does U4 mean a control board has failed?",
      answer:
        "Not on its own. Daikin assigns U4 to missing transmission between indoor and outdoor units. Wiring, a lost supply, a blown fuse, an outdoor fan fault, and electrical noise can all produce it, and a board is only one candidate among them.",
    },
    {
      question: "Some rooms still work, so is U4 serious?",
      answer:
        "It is worth attention, but a fault confined to one branch is a smaller problem than a system-wide failure. Note which units run and which do not before you call, because that pattern is the most useful thing you can tell the technician.",
    },
    {
      question: "Can I use this page for my Daikin VRV?",
      answer:
        "No. This meaning comes from the SkyAir service manual for RZR-P and RZQ-P(9) equipment. Daikin runs similar code letters across product lines that are engineered differently, so a VRV, Altherma, or residential split needs its own documentation.",
    },
    {
      question: "Should I switch the power off and on?",
      answer:
        "Only if the operating manual for your installation permits it, and only once. If U4 returns, the transmission fault has not gone away and further cycling of a multi-unit system achieves nothing except downtime for the rooms that were still working.",
    },
  ],
  sourceIds: ["daikin-u4-service"],
  relatedContent: ["/brands/daikin/", "/mini-split-not-turning-on/", "/mini-split-remote-not-working/"],
  keywords: [
    "daikin u4 error code",
    "daikin u4 transmission error",
    "skyair u4 fault",
    "rzq u4 code",
    "daikin indoor outdoor communication",
  ],
});
