import { publish } from "./publish";

/**
 * Condensate has one intended route and several unintended ones. Following
 * the water is the diagnosis, so the page is organised around where it is
 * appearing rather than around a list of parts.
 */
export const miniSplitLeakingWater = publish({
  title: "Mini-split leaking water: shut down and inspect",
  slug: "mini-split-leaking-water",
  path: "/mini-split-leaking-water/",
  description:
    "Why an indoor mini-split can leak, which filter and drain observations are safe, and when water, ice, or a condensate pump requires service.",
  articleType: "troubleshooting",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless indoor units; drain arrangement varies by installation"],
  problemType: "water-leak",
  directAnswer:
    "Water from an indoor mini-split is not normal; condensate is likely failing to reach the drain because of dirt, a blockage, poor drainage, a frozen coil, or a condensate-pump problem.",
  scopeNotice:
    "Drain arrangements differ enormously between installations. Some run to a gravity outlet through the wall, some rely on a pump, and some join a shared waste line. The cited material covers the general principles; how yours is arranged is a question for the installer or the technician who attends.",
  symptoms: [
    "Water drips from the indoor cabinet, wall, line-cover joint, or an unexpected drain connection.",
  ],
  causes: [
    "A dirty filter or coil can disturb airflow and water tracking, while a clogged or poorly routed drain can overflow.",
    "Ice, low refrigerant, incorrect level, or a failed condensate pump can also produce leakage.",
  ],
  diagnosticBranches: [
    {
      title: "Water is running down the wall from the indoor unit",
      observation:
        "Drips or a wet trail come from the bottom edge of the cabinet while the system is cooling, and stop some time after it is switched off.",
      action:
        "Turn cooling off and protect the floor and any finishes below. The pattern is consistent with condensate not following its intended path, and continued cooling can produce more water.",
    },
    {
      title: "There is ice on the coil behind the filter",
      observation:
        "Lifting the front panel shows frost or ice on the indoor coil, and water appears once the system has been off for a while.",
      action:
        "This is a frozen coil producing meltwater rather than a drain problem, so treat it as that fault instead. Leave the system off and let it thaw on its own before anything else.",
    },
    {
      title: "Nothing comes out of the outdoor drain end",
      observation:
        "In cooling weather the drain pipe outside is dry while water is appearing indoors.",
      action:
        "That comparison is genuinely useful, so note it. Condensate that is not arriving at the outlet is being held up somewhere along the route, which points at the drain rather than at the equipment.",
    },
    {
      title: "The unit is served by a condensate pump",
      observation:
        "There is a small pump near the indoor unit, or a thin flexible tube running upwards rather than a pipe falling away, and you may hear the pump running or clicking.",
      action:
        "Tell the technician about the pump. Pumps have their own failure modes and their own safety switch behaviour, and an installation that lifts condensate cannot be diagnosed as though gravity were doing the work.",
    },
  ],
  figures: [
    {
      title: "Where the water is supposed to go",
      description:
        "In cooling, moisture can condense on the indoor coil and drain through a pan and line. Water from the indoor cabinet often indicates that this documented condensate path, airflow, mounting, or a related component needs attention.",
      nodes: [
        { label: "Indoor coil", detail: "Where moisture condenses out of room air" },
        { label: "Drain pan", detail: "Collects condensate under the coil" },
        { label: "Drain line", detail: "Carries water away by gravity or by pump" },
        { label: "Outside outlet", detail: "Where condensate should be leaving" },
      ],
    },
  ],
  sections: [
    {
      title: "A leak is a routing problem, not a leak of refrigerant",
      paragraphs: [
        "The water coming out of an indoor unit in summer is condensate, the same moisture that forms on a cold drink. Producing it is normal and unavoidable, and on a humid day a single indoor unit can generate a surprising volume. What is not normal is where it is ending up.",
        "This is worth saying because people reasonably worry that a leaking air conditioner is leaking refrigerant. Refrigerant leaves as a gas and would not pool on your floor. The liquid is water, and the question is why it stopped following the route built for it.",
      ],
    },
    {
      title: "Why the drain gets blocked",
      paragraphs: [
        "Manufacturer guidance identifies clogged drain lines and dirt on the evaporator section among causes of condensate backup. The visible symptom does not establish which part of the path is restricted.",
        "Mounting and drain arrangement can also matter. Manufacturer guidance identifies an unlevel indoor unit, damaged pan, drain-line condition, and a failed condensate pump where fitted as other possibilities that require inspection.",
      ],
    },
    {
      title: "What to do while you wait for the visit",
      paragraphs: [
        "Switch cooling off and leave it off. Continued cooling can produce more condensate. Use Fan mode only if the exact manual permits it while the unit is in this condition.",
        "Protect what is below. Water can track down a wall toward finishes or electrical items. Put something absorbent under the unit, move furniture, and photograph the staining before cleaning it up so the service technician can see the pattern.",
      ],
    },
  ],
  decisionTable: {
    caption: "Where the water appears and what it suggests",
    columns: ["Where you find it", "Possible origin", "What to report"],
    rows: [
      [
        "Dripping from the bottom of the indoor unit",
        "Condensate overflowing the pan instead of reaching the drain",
        "Mention whether it only happens while cooling is running",
      ],
      [
        "Running down the wall below the unit",
        "Water escaping at the back or the pipework entry",
        "Say whether the wall is wet inside the line cover or only below it",
      ],
      [
        "Pooling under the outdoor unit in summer",
        "Condensate drainage that may be normal for the installed system",
        "Compare the location with the manual and report unusual volume or indoor leakage",
      ],
      [
        "Appearing after the system has been off for a while",
        "A frozen coil thawing rather than a drain problem",
        "Check for frost on the indoor coil and report what you see",
      ],
    ],
  },
  safeChecks: [
    "Turn the unit off, protect finishes from water, and clean only the user-removable filter as the manual permits.",
    "Observe whether water exits the normal outdoor drain end without disconnecting or blowing through lines.",
  ],
  professionalEscalation: [
    "Ceiling or wall water, recurring leaks, frozen coils, pump faults, and drain disassembly require prompt service.",
    "Do not run a leaking unit or pressure-clean the indoor coil as a homeowner.",
  ],
  serviceHandoff:
    "Describe where the water appears and whether it only happens while cooling, say whether the outdoor drain outlet is running, mention any condensate pump, note when the filter was last cleaned, and report any frost seen on the indoor coil.",
  faqs: [
    {
      question: "Is the water from my mini split refrigerant?",
      answer:
        "Indoor dripping points at condensate rather than refrigerant. Manufacturer guidance also notes that low refrigerant can contribute indirectly by icing the coil, which then sheds water as it thaws. Do not identify the sealed-system condition from the puddle alone.",
    },
    {
      question: "Can I clear the drain myself?",
      answer:
        "Do not blow through or add chemicals to the drain unless the exact manufacturer instructions provide an owner procedure. Reaching or disassembling the drain connection is a service task.",
    },
    {
      question: "Why has it started leaking after years?",
      answer:
        "A drain can become restricted over time as debris accumulates, and a pan, line, mounting condition, or condensate pump can also change. A previously working system therefore still needs the whole documented condensate path checked.",
    },
    {
      question: "Can I keep using it if I put a towel underneath?",
      answer:
        "Stop cooling until it is fixed. A towel catches only visible water; moisture may also track behind finishes. Use Fan mode only if the exact manual permits it in this condition.",
    },
  ],
  sourceIds: ["gree-water-leak", "fujitsu-rls2-operation", "trane-mini-split-leak"],
  relatedContent: ["/troubleshooting/", "/mini-split-frozen-coil/", "/mini-split-filter-cleaning/"],
  keywords: [
    "mini split leaking water",
    "ductless unit dripping water",
    "mini split condensate drain blocked",
    "air conditioner leaking inside",
    "mini split water on wall",
  ],
});
