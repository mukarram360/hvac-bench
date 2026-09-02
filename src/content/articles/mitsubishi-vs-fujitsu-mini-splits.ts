import { publish } from "./publish";

/**
 * Deliberately not a mirror of the Daikin page. This pairing turns up most
 * often on multi-zone projects, so the page is organised around the multi-zone
 * question: combination rules, what one outdoor unit can carry, and why a
 * shared condenser changes the failure consequences. The decision table is
 * about questions to ask a supplier, not about brand attributes.
 */
export const mitsubishiVsFujitsuMiniSplits = publish({
  title: "Mitsubishi vs Fujitsu: the multi-zone questions",
  slug: "mitsubishi-vs-fujitsu-mini-splits",
  path: "/mitsubishi-vs-fujitsu-mini-splits/",
  description:
    "Where the two ranges overlap, why multi-zone combination rules decide more than brand preference, and the six questions that separate two real quotations.",
  articleType: "comparison",
  equipmentType: "ductless-mini-split",
  problemType: "equipment-comparison",
  models: [
    "Mitsubishi Electric US M-Series single-zone and multi-zone products",
    "Fujitsu AIRSTAGE single-zone and multi-zone ductless products",
  ],
  directAnswer:
    "Both publish single-zone and multi-zone ductless ranges covering the same residential applications. On a multi-zone project the decision is driven by the combination table for the specific outdoor unit, not by which badge is on the cabinet.",
  scopeNotice:
    "Product families, permitted combinations, and available formats change between generations and between regions. Every figure that matters here comes from the current submittal and engineering documentation for the exact models quoted, not from a brand comparison.",
  layout: ["branches", "sections", "comparisonTable", "decisionTable"],
  symptoms: [
    "A multi-zone system is proposed and two brands are being quoted for it.",
    "The number of indoor units has changed since the first quotation.",
    "One quotation lists a smaller outdoor unit than the other for the same rooms.",
  ],
  causes: [
    "Multi-zone outdoor units publish limits on head count, individual head capacity, and total connected capacity.",
    "One shared compressor means a single outdoor fault affects every room it serves.",
  ],
  diagnosticBranches: [
    {
      title: "The project is one room, one head",
      observation:
        "A single indoor unit is being added to a single outdoor unit, and the room's load is straightforward.",
      action:
        "The brand comparison is thin here. Compare the two matched pairs on certified rating, indoor format, sound at the speed you will run it, warranty terms, and installer scope.",
    },
    {
      title: "The project runs several heads off one outdoor unit",
      observation:
        "Three or more indoor units are proposed on one condenser, with different capacities in different rooms.",
      action:
        "Ask for the combination table for each proposed outdoor unit. Head count, permitted capacities, and total connected capacity are published limits, and they differ between models within each brand.",
    },
    {
      title: "The rooms will be used at different times",
      observation:
        "Bedrooms run at night, a home office runs in the day, and the whole system is rarely called on at once.",
      action:
        "Ask what each system delivers when only one head is calling, and what happens when all of them are. Simultaneous and diversified demand are different operating points, and the answer comes from the engineering data.",
    },
  ],
  sections: [
    {
      title: "Where the ranges sit relative to each other",
      paragraphs: [
        "Mitsubishi Electric's US documentation covers the M-Series for residential ductless work, with wall, floor, cassette, and concealed indoor formats and separate ducted and multi-position products.",
        "Fujitsu's AIRSTAGE documentation covers an equivalent spread of single-zone and multi-zone products with the same indoor formats. Its downloads library also carries documentation for retired series, which is worth knowing when working on an existing installation rather than specifying a new one.",
        "For a new project the honest summary is that both can do the job. The interesting differences are at the level of specific outdoor units and their published combination rules.",
      ],
    },
    {
      title: "Why the combination table decides so much",
      paragraphs: [
        "A multi-zone outdoor unit is one compressor serving several indoor units. The manufacturer publishes what it is approved to carry: how many heads, which capacities, and what total connected capacity across them.",
        "Total connected capacity can exceed the outdoor unit's rated output, on the assumption that not every room calls at once. That assumption is reasonable in a house where bedrooms and living space are used at different times, and less so in a building where everything runs together on a hot afternoon.",
        "So the question to ask is not which brand handles multi-zone better. It is what each proposed outdoor unit is approved to carry, and what it delivers per head when all of them call at once.",
      ],
    },
    {
      title: "What a shared compressor costs you",
      paragraphs: [
        "Multi-zone reduces the number of outdoor units, the pipe penetrations, and the outdoor space required. That is the reason to do it and it is a real one.",
        "The trade is concentration. One compressor fault takes out heating or cooling in every room it serves, where the same fault on a single-zone installation takes out one room. On a project where one room must keep working, that argues for a separate system for that room regardless of brand.",
        "Piping is also less forgiving. Line lengths, height differences, and branch arrangements are constrained by the outdoor unit's documentation, and those constraints shape where indoor units can go.",
      ],
    },
  ],
  comparisonTable: {
    caption: "One worked multi-zone example, at three operating points",
    columns: ["Condition", "What the outdoor unit is asked for", "What decides the answer"],
    rows: [
      [
        "One bedroom calling on a mild night",
        "Less than the compressor's minimum output",
        "Published minimum output for the outdoor unit",
      ],
      [
        "Bedrooms overnight, living space idle",
        "Part of the connected capacity",
        "Combination table plus the room-by-room load",
      ],
      [
        "Every head calling on the design day",
        "More than the rated output, where diversity was assumed",
        "Simultaneous-demand data in the engineering manual",
      ],
    ],
  },
  decisionTable: {
    caption: "Six questions to put to both suppliers",
    columns: ["Question", "Why it separates quotations", "Where the answer lives"],
    rows: [
      [
        "What is the room-by-room load?",
        "Head sizes should follow it, not the room count",
        "The load calculation, which both should have done",
      ],
      [
        "What is the approved combination?",
        "Head count and connected capacity are published limits",
        "Combination table for the outdoor model",
      ],
      [
        "What is delivered per head with all heads calling?",
        "This is where an undersized condenser shows up",
        "Engineering data for the outdoor unit",
      ],
      [
        "What is the capacity at my design temperature?",
        "Nominal ratings do not describe a cold morning",
        "Extended capacity table",
      ],
      [
        "What are the pipe length and height limits?",
        "They constrain where indoor units can be placed",
        "Installation manual for the outdoor unit",
      ],
      [
        "What does the warranty require of me?",
        "Registration and servicing conditions differ",
        "The written warranty for your region",
      ],
    ],
  },
  faqs: [
    {
      question: "Is Mitsubishi or Fujitsu better for multi-zone?",
      answer:
        "No source supports a brand-level answer. Both publish multi-zone ranges, and the decision turns on the combination table for the specific outdoor unit proposed and what it delivers when every head is calling.",
    },
    {
      question: "Can I add another indoor unit later?",
      answer:
        "Only within the outdoor unit's approved combination. Head count, individual capacities, and total connected capacity are published limits, so a system chosen for three heads may not accept a fourth.",
    },
    {
      question: "What happens if the outdoor unit fails on a multi-zone system?",
      answer:
        "Every indoor unit it serves stops. That concentration is the trade for one compressor and one set of penetrations, and it argues for a separate system for any room that has to keep working.",
    },
    {
      question: "Why is one quotation's outdoor unit smaller?",
      answer:
        "Multi-zone sizing often relies on diversity, meaning not every room calling at once. Ask what each system delivers per head under simultaneous demand, and compare that against the room-by-room load.",
    },
  ],
  sourceIds: ["mitsubishi-m-series", "fujitsu-product-library", "ahri-directory"],
  relatedContent: [
    "/single-zone-vs-multi-zone-mini-split/",
    "/btu-sizing-explained/",
    "/how-mini-splits-work/",
    "/seer2-explained/",
  ],
  glossaryTerms: ["multi-zone-system", "branch-box", "inverter-compressor"],
  relatedBrands: ["mitsubishi", "fujitsu"],
  keywords: [
    "Mitsubishi vs Fujitsu",
    "multi zone mini split comparison",
    "AIRSTAGE vs M-Series",
    "multi zone combination table",
  ],
});
