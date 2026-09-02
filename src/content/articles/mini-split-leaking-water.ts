import { publish } from "./publish";

/**
 * Condensate has one intended route and several unintended ones. Following
 * the water is the diagnosis, so the page is organised around where it is
 * appearing rather than around a list of parts.
 */
export const miniSplitLeakingWater = publish({
  title: "Mini-split leaking water: shut down, inspect, and escalate safely",
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
        "Drips or a wet trail come from the bottom edge of the cabinet, usually while the system is cooling, and stop some time after it is switched off.",
      action:
        "Turn cooling off and protect the floor and any finishes below. Water is escaping the drain pan rather than leaving through the drain, and running the system for longer only adds to it.",
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
        "Mention the pump when you book service. Pumps have their own failure modes and their own safety switch behaviour, and an installation that lifts condensate cannot be diagnosed as though gravity were doing the work.",
    },
  ],
  figures: [
    {
      title: "Where the water is supposed to go",
      description:
        "In cooling, moisture condenses on the indoor coil and runs into a pan below it. Every leak is water leaving this route before the end of it.",
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
        "Condensate drains are dark, permanently damp, and carry whatever dust gets past the filter. That combination grows a biological slime that gradually narrows the pipe until water backs up into the pan and finds the front edge instead. It is the single most common reason a mini-split starts dripping after several trouble-free years.",
        "The other common cause is arrangement rather than blockage. Drains rely on a continuous fall, and a line that has been nudged by later building work, or that sags between fixings, will hold water at the low point. This is why an installation that has always been marginal can start leaking after someone else works nearby.",
      ],
    },
    {
      title: "What to do while you wait for the visit",
      paragraphs: [
        "Switch cooling off and leave it off. Every additional hour of running produces more condensate to escape into the room, and there is nothing to be gained from proving the leak twice. If the room is unbearable, run Fan mode only, which moves air without condensing moisture onto the coil.",
        "Protect what is below. Water tracking down a wall reaches skirting, flooring, and anything electrical mounted underneath, and damage from a slow leak often costs more than the repair that stops it. Put something absorbent under the unit, move furniture, and photograph the staining before you clean it up, because that record matters if the installation itself turns out to be at fault.",
      ],
    },
  ],
  decisionTable: {
    caption: "Where the water appears and what it suggests",
    columns: ["Where you find it", "Most likely origin", "What to say when booking"],
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
        "Normal condensate drainage leaving the system as designed",
        "This one is usually fine; mention it only if the volume is unusual",
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
        "No. Refrigerant escapes as a gas and would not collect as liquid in the room. Water from an indoor unit is condensate, and a leak means it is not reaching the drain rather than that the sealed system has failed.",
    },
    {
      question: "Can I clear the drain myself?",
      answer:
        "Blowing through a drain line or dosing it with chemicals can push a blockage into a worse place or damage the pan, and reaching the connection usually means disturbing the unit. Clearing it properly is a service task and it is a quick one.",
    },
    {
      question: "Why has it started leaking after years?",
      answer:
        "Drains narrow gradually as dust and biological growth accumulate in a permanently damp pipe. Nothing has to break for a system that drained fine for five summers to start backing up in the sixth.",
    },
    {
      question: "Can I keep using it if I put a towel underneath?",
      answer:
        "It is better to stop cooling until it is fixed. A towel catches what you can see, while water tracking inside the wall or across a ceiling does damage you will not notice until later. Fan mode moves air without producing condensate.",
    },
  ],
  sourceIds: ["gree-water-leak", "fujitsu-rls2-operation"],
  relatedContent: ["/troubleshooting/", "/mini-split-frozen-coil/", "/mini-split-filter-cleaning/"],
  keywords: [
    "mini split leaking water",
    "ductless unit dripping water",
    "mini split condensate drain blocked",
    "air conditioner leaking inside",
    "mini split water on wall",
  ],
});
