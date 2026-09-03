import { publish } from "./publish";

export const goodmanComfortnetB0B1B3Cooling = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Goodman ComfortNet Eb0, Eb1 and Eb3 in cooling: why an airflow code appears while heating still works",
  slug: "comfortnet-eb0-eb1-eb3-in-cooling",
  path: "/brands/goodman/comfortnet-eb0-eb1-eb3-in-cooling/",
  description:
    "Three blower codes that arrive together describe three unrelated conditions. Only one of them is about ductwork, and it appears at the airflow the mode is asking for.",
  articleType: "error-code",
  brand: "goodman",
  equipmentType: "air-handler",
  productFamily:
    "Goodman and Amana variable-speed air handlers with an integrated control module reporting motor codes on a seven-segment display and through a ComfortNet thermostat",
  models: [
    "Goodman AVPVC series variable-speed air handlers",
    "Goodman air handlers using the PCBJA integrated control module family",
    "ComfortNet thermostats paired with those air handlers",
  ],
  errorCode: "b0, b1, b3",
  problemType: "blower-limiting-condition",
  symptomFamily: "no-cooling",
  directAnswer:
    "Read them apart. The b3 entry is the only airflow condition of the three. Goodman describes it as the circulator blower motor operating in a power, temperature or speed limiting condition, and lists blocked filters, restrictive ductwork, undersized ductwork and high ambient temperature as the causes. The b0 entry says the motor is not running when it should be, and b1 says the control module has lost communication with the motor. Neither of those is a duct problem, and grouping all three sends the diagnosis to the wrong place.",
  scopeNotice:
    "These codes belong to the air handler integrated control module, and the seven-segment display alternates characters, which is why written transcriptions vary between readers. Furnace and outdoor unit codes on the same ComfortNet system come from separate tables.",
  symptoms: [
    "Cooling airflow is weaker than expected while heating cycles feel normal.",
    "The ComfortNet thermostat shows a call for service icon and scrolls a message asking for the air handler to be checked.",
    "The blower runs at reduced output, or runs on low stage when high stage was expected.",
  ],
  causes: [
    "Filter media, return grilles or duct runs that cannot pass the airflow the cooling mode is asking for, while passing the lower airflow a heating stage asks for.",
    "A motor operating against its own power, temperature or speed limits, which Goodman treats as a reduced-performance condition rather than a shutdown.",
    "Loose or disconnected motor power leads, which stops the motor rather than restricting it.",
    "Loose motor control leads, a failed motor, or a failed integrated control module, any of which can break the link between the board and the motor.",
  ],
  diagnosticBranches: [
    {
      title: "The blower runs but delivers less air than expected",
      observation:
        "Air is moving, cooling is weak, and the display carries the limiting-condition code rather than a code about the motor not running.",
      action:
        "Start with the filter and the register positions, which are the two causes on Goodman's own list that an owner can change. A motor in a limiting condition is protecting itself, not failing.",
    },
    {
      title: "The blower does not run at all on a cooling call",
      observation:
        "A demand stands at the thermostat, the outdoor unit may start, and no air moves indoors.",
      action:
        "That matches the motor not running entry rather than an airflow restriction. Goodman lists loose or disconnected motor power leads and a failed motor as the causes, and both are inside the cabinet, so stop here and call for service.",
    },
    {
      title: "The code points at communication with the motor",
      observation:
        "The display reports that the control has lost contact with the circulator blower motor.",
      action:
        "Treat it as a control-to-motor link question. The listed causes are loose motor control leads, a failed motor and a failed control module, so the useful next step is measurement rather than duct work.",
    },
  ],
  decisionTable: {
    caption: "What each blower code reports, in Goodman terms",
    columns: ["Code", "Fault description", "Where the cause list points"],
    rows: [
      ["b0", "Motor is not running when it should be running", "Motor power leads or the motor itself"],
      ["b1", "Control module has lost communication with the motor", "Motor control leads, motor, or control module"],
      ["b3", "Motor is operating in a limiting condition", "Filters, ductwork sizing, and ambient temperature"],
    ],
  },
  comparisonTable: {
    caption: "How the thermostat message differs from the board display",
    columns: ["Surface", "What it shows"],
    rows: [
      ["Integrated control module", "A seven-segment code with the characters alternating"],
      ["ComfortNet thermostat", "A call for service icon and a scrolling message about the air handler"],
      ["Neither surface", "The airflow the system was asking for when the code appeared"],
    ],
  },
  sections: [
    {
      title: "Why a restriction can hide until cooling asks for more air",
      paragraphs: [
        "A limiting condition is defined by what is being demanded, not by a fixed threshold. Goodman describes the b3 state as the motor operating in a power, temperature or speed limiting condition, with blocked filters, restrictive ductwork, undersized ductwork and high ambient temperatures on the cause list. A motor asked for a modest airflow can meet the request inside its limits; the same motor asked for a higher airflow through the same ducts cannot.",
        "That is the mechanism behind the pattern in the title. Cooling and heating do not ask for the same airflow, and a system that stages will ask for different airflows within a single mode. So a duct system, filter and coil combination that never troubles a low heating airflow can reach the motor limits during a full cooling call, and it can do so with no change to the equipment at all.",
        "The related entry Goodman lists for airflow lower than demanded points the same way, describing a blower that operates at reduced performance or runs on low stage when high stage is expected, with the same filter and ductwork causes. Both entries describe the equipment protecting its own motor while continuing to run.",
      ],
    },
    {
      title: "Two of the three codes are about the motor connection",
      paragraphs: [
        "The distinction that matters most is between a motor that will not run and a motor that will not run hard. The b0 entry is the first case: the motor is not running when it should be running, with loose or disconnected motor power leads and a failed motor listed as the causes. The b1 entry describes the control module losing communication with the motor, and adds a failed control module to the list.",
        "Neither of those improves when filters are changed. If those codes are being read alongside b3, the reasonable interpretation is that two separate things are being reported, and the airflow entry may be the older of the two. Goodman notes elsewhere that repeated faults are stored, so the order in which codes appeared is worth capturing.",
        "Two more entries sit close by and are easy to confuse with these. One reports the motor sensing a loss of rotor control or high current, listing abnormal loading and sudden blockage of the inlet or outlet. Another reports a mismatch between the motor and the data stored in the control, which is a configuration problem after a part change rather than a fault in service.",
      ],
    },
    {
      title: "What an owner can settle before the visit",
      paragraphs: [
        "The two owner-reachable causes on Goodman's list are the filter and the openness of the duct system. Checking the filter and confirming that registers are fully open costs nothing and removes the two explanations that need no tools.",
        "Beyond that, record rather than experiment. Note whether the code appears in cooling only, in heating only, or in both. Note whether the blower ran at all. Note the indoor temperature and how hot the space around the air handler is. High ambient temperature is on the published cause list for the limiting condition, and an air handler in a hot attic is a different case from one in a conditioned closet.",
        "Those three observations decide whether the visit begins at a duct measurement or at the motor connections, and they cannot be reconstructed once the code has been cleared.",
      ],
    },
  ],
  safeChecks: [
    "Check the filter and replace or clean it according to the equipment instructions, because blocked filters are on the published cause list.",
    "Confirm that supply registers and return grilles are fully open and unobstructed.",
    "Record whether the code appears in cooling, in heating, or in both, and whether the blower ran at all.",
    "Note how warm the space around the air handler gets, since high ambient temperature is listed as a cause of the limiting condition.",
  ],
  professionalEscalation: [
    "Any work on motor power leads, motor control leads or the integrated control module is inside an energised cabinet and is service work.",
    "Duct static pressure measurement and duct sizing assessment need instruments and belong to a technician.",
  ],
  serviceHandoff:
    "Report the air handler model number, the codes in the order they appeared, whether each appeared in cooling or heating, the filter type and its condition, and where the air handler is installed. That combination separates a restriction from a motor connection before anyone opens the cabinet.",
  resetGuidance:
    "Removing power clears the display and loses the order the codes appeared in. Photograph the seven-segment display through its full alternating sequence before interrupting anything.",
  faqs: [
    {
      question: "Why does heating work when cooling reports an airflow code?",
      answer:
        "Because the code describes a motor operating at its limits for the airflow being demanded. Heating and cooling ask for different airflows, so a restriction can stay within limits in one mode and reach them in the other.",
    },
    {
      question: "Is the limiting-condition code a motor failure?",
      answer:
        "No. Goodman lists blocked filters, restrictive ductwork, undersized ductwork and high ambient temperatures as its causes, and describes the blower as running at reduced performance rather than stopping.",
    },
    {
      question: "Do these codes all point at the same repair?",
      answer:
        "No. One reports the motor not running, one reports the control losing communication with the motor, and one reports an airflow limiting condition. Only the last has ductwork and filters on its cause list.",
    },
    {
      question: "Why do written versions of the code differ?",
      answer:
        "The seven-segment display alternates its characters, so what a reader writes down depends on when they looked. Photographing the full sequence removes the ambiguity.",
    },
    {
      question: "Can a hot attic cause the limiting code?",
      answer:
        "High ambient temperature appears on Goodman's cause list for the limiting condition, so where the air handler is installed is worth recording alongside the filter and duct observations.",
    },
  ],
  sourceIds: ["goodman-avpvc-install", "goodman-comfortbridge-install"],
  relatedContent: [
    "/brands/goodman/",
    "/brands/goodman/gmvc-one-flash-lockout/",
    "/brands/goodman/comfortbridge-with-nest-or-ecobee/",
    "/mini-split-filter-cleaning/",
  ],
  glossaryTerms: ["blower-motor", "air-filter", "static-pressure", "error-code"],
  keywords: [
    "goodman eb3 code",
    "goodman comfortnet blower codes",
    "goodman b3 motor limits",
    "comfortnet check air handler",
    "goodman air handler airflow fault",
  ],
});
