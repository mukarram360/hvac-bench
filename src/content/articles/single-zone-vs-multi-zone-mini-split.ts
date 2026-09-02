import { publish } from "./publish";

/**
 * The decision people make on outdoor-unit count and later regret on
 * turndown. The page is organised around the two things that actually change:
 * what one compressor can do at the bottom of its range when only one room is
 * calling, and what a shared outdoor unit means when it fails. The arithmetic
 * example does more work here than any amount of prose.
 */
export const singleZoneVsMultiZoneMiniSplit = publish({
  title: "Single-zone or multi-zone: the real trade",
  slug: "single-zone-vs-multi-zone-mini-split",
  path: "/single-zone-vs-multi-zone-mini-split/",
  description:
    "What combination rules permit, why minimum output matters when one room calls, and the failure and cost consequences of putting every room on one outdoor unit.",
  articleType: "comparison",
  equipmentType: "multi-zone",
  problemType: "equipment-comparison",
  models: [
    "Single-zone systems pairing one outdoor unit with one indoor unit",
    "Multi-zone outdoor units serving approved combinations of indoor units",
  ],
  directAnswer:
    "A single-zone system gives each room its own compressor and its own full modulation range. A multi-zone system trades that for fewer outdoor units and fewer penetrations, and the cost appears at low load and at failure.",
  scopeNotice:
    "Approved combinations, minimum output, and behaviour when one head calls are published per outdoor unit and differ between models within one brand. Nothing here replaces the combination table and engineering data for the exact system quoted.",
  layout: ["sections", "comparisonTable", "decisionTable", "branches"],
  symptoms: [
    "A quotation offers one outdoor unit for four rooms and another offers four.",
    "Outdoor space or wall area for equipment is limited.",
    "One room needs to keep working independently of the others.",
  ],
  causes: [
    "One compressor has one minimum output, and a single small room calling can sit below it.",
    "Every indoor unit on a shared outdoor unit stops when that outdoor unit does.",
  ],
  sections: [
    {
      title: "What multi-zone buys you",
      paragraphs: [
        "One outdoor unit instead of four. One set of wall penetrations, one electrical supply, one drain arrangement outside, and one cabinet to find space for. On a terraced house with a small yard or a flat with limited external wall, that can be the difference between a scheme that works and one that does not.",
        "It also reduces the outdoor footprint and, in some installations, the visual impact, which matters where planning or a freeholder's consent is involved.",
      ],
    },
    {
      title: "The turndown problem, with numbers",
      paragraphs: [
        "Take a multi-zone outdoor unit rated at 36,000 BTU per hour serving four heads. Its minimum output is a published figure, and suppose it is 6,000. On a mild evening one bedroom is calling and wants perhaps 2,000.",
        "The compressor cannot run at 2,000. It runs at its minimum and cycles, or it overshoots, and the room gets a saw-tooth temperature and a noisier unit than it would have had on its own. A single-zone system sized for that bedroom would have had a minimum output far below the same load.",
        "This is why the interesting question about a multi-zone quotation is not its maximum but its minimum. Ask what the outdoor unit's minimum output is and compare it against the smallest load that will call on its own.",
      ],
    },
    {
      title: "Connected capacity and diversity",
      paragraphs: [
        "The total capacity of the heads on a multi-zone system can exceed the outdoor unit's rating. Manufacturers permit that on the assumption that not every room calls at full output at the same time, which is a reasonable assumption in a house used the way most houses are used.",
        "It stops being reasonable when the building's use is synchronised: an office where every room fills at nine, or a house where the whole family is home on the hottest afternoon of the year. That is the condition to ask about, because it is the one where a diversified system disappoints.",
      ],
    },
    {
      title: "What happens when it fails",
      paragraphs: [
        "A single-zone failure takes out one room. A multi-zone failure takes out every room served by that outdoor unit, and in winter that can be the whole heating system at once.",
        "The design answer is not to abandon multi-zone. It is to decide which rooms must keep working, and give those a separate system. A nursery, a home office, or a room with a vulnerable occupant is a reasonable candidate for its own outdoor unit even when everything else shares one.",
      ],
    },
  ],
  comparisonTable: {
    caption: "The trade, point by point",
    columns: ["Consideration", "Single-zone", "Multi-zone"],
    rows: [
      [
        "Outdoor units",
        "One per room",
        "One for the approved combination",
      ],
      [
        "Behaviour at low load",
        "Full modulation range matched to that room",
        "Limited by the shared compressor's minimum output",
      ],
      [
        "Wall penetrations and pipe runs",
        "One set per room",
        "One set outdoors, distributed indoors",
      ],
      [
        "Failure consequence",
        "One room affected",
        "Every room on that outdoor unit affected",
      ],
      [
        "Expansion",
        "Add another independent system",
        "Only within the approved combination",
      ],
      [
        "Rating to compare",
        "The pairing's certificate",
        "The combination, plus per-head delivery",
      ],
      [
        "Outdoor space and appearance",
        "More cabinets to site",
        "One cabinet, larger",
      ],
    ],
  },
  decisionTable: {
    caption: "The turndown question, worked through",
    columns: ["Figure", "Where it comes from", "What it tells you"],
    rows: [
      [
        "Smallest single-room load",
        "The room-by-room load calculation",
        "The lowest output the system will ever be asked for",
      ],
      [
        "Outdoor unit minimum output",
        "Engineering data for that outdoor model",
        "The lowest output it can actually hold",
      ],
      [
        "Gap between the two",
        "Subtraction",
        "How far the compressor overshoots a lone small room",
      ],
      [
        "Total connected capacity",
        "Combination table",
        "Whether the proposed heads are an approved set",
      ],
      [
        "Output under simultaneous demand",
        "Engineering data for the outdoor model",
        "What each room receives when everything calls at once",
      ],
    ],
  },
  diagnosticBranches: [
    {
      title: "Rooms are used at different times of day",
      observation:
        "Bedrooms run overnight, living space runs in the evening, and a home office runs in the day, so simultaneous full demand is rare.",
      action:
        "Multi-zone suits this pattern, which is what diversity assumes. Still ask for the outdoor unit's minimum output against the smallest single-room load.",
    },
    {
      title: "Everything is called on at once",
      observation:
        "The building fills and empties together, so every head is likely to be running at full demand on the design day.",
      action:
        "Size on simultaneous demand rather than connected capacity, or split the load across more than one outdoor unit. Diversity is not available here.",
    },
    {
      title: "One room cannot be allowed to fail",
      observation:
        "A room houses equipment, work, or a person whose comfort is not negotiable if the rest of the system stops.",
      action:
        "Give that room its own single-zone system regardless of what the rest of the building uses. The cost is one more outdoor unit; the alternative is one fault taking everything.",
    },
    {
      title: "More rooms may be added later",
      observation:
        "A loft conversion, an extension, or a garden room is planned but not built.",
      action:
        "Decide now. Multi-zone expansion is limited by the outdoor unit's approved combination, so a system chosen for today's rooms may not accept tomorrow's head.",
    },
  ],
  faqs: [
    {
      question: "Is multi-zone cheaper than several single-zone systems?",
      answer:
        "Often on installed cost, because there is one outdoor unit, one supply, and fewer penetrations. Compare that against the low-load behaviour and the consequence of a single outdoor failure before treating it as settled.",
    },
    {
      question: "Can I add a fifth head to a four-zone system?",
      answer:
        "Only if the outdoor unit's approved combination permits it. Head count, individual capacities, and total connected capacity are published limits, and exceeding them is not a matter of judgement.",
    },
    {
      question: "Why does one room feel weaker on a multi-zone system?",
      answer:
        "Heads share one compressor's output. When several call at once each receives a share, and when one small room calls alone the compressor may be running above the output that room wants. The engineering data describes both conditions.",
    },
    {
      question: "Do all the heads have to be the same size?",
      answer:
        "No. Combination tables list permitted capacities, and mixing sizes to match room loads is the normal approach. The constraint is which mixes the outdoor unit is approved for.",
    },
  ],
  sourceIds: ["gree-product-catalog", "daikin-ductless-lineup", "doe-hvac-sizing"],
  relatedContent: [
    "/how-mini-splits-work/",
    "/btu-sizing-explained/",
    "/mini-split-short-cycling/",
    "/mitsubishi-vs-fujitsu-mini-splits/",
  ],
  glossaryTerms: ["multi-zone-system", "branch-box", "inverter-compressor"],
  keywords: [
    "single zone vs multi zone mini split",
    "multi zone minimum output",
    "connected capacity mini split",
    "how many heads on one condenser",
  ],
});
