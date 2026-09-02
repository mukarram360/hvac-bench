import { publish } from "./publish";

/**
 * The two brands people shortlist against each other, and the comparison
 * where a page most easily drifts into invented specifications. So this one is
 * built around what the cited lineup documentation can actually establish,
 * with a named section for the things it cannot, and the recommendation is
 * about how to run the comparison rather than which name to pick.
 */
export const daikinVsMitsubishiMiniSplits = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "Daikin vs Mitsubishi mini-splits: how to compare",
  slug: "daikin-vs-mitsubishi-mini-splits",
  path: "/daikin-vs-mitsubishi-mini-splits/",
  description:
    "What the two lineups cover, which comparisons the published documentation supports, which ones it cannot, and the four documents that settle a real decision.",
  articleType: "comparison",
  equipmentType: "ductless-mini-split",
  problemType: "equipment-comparison",
  models: [
    "Daikin North American ductless single-zone and multi-zone ranges",
    "Mitsubishi Electric US M-Series and its ducted and multi-position products",
  ],
  directAnswer:
    "Both manufacturers publish broad ductless ranges that overlap heavily in application, so the brand name does not decide the project. The comparison that matters is between two specific matched systems, on capacity at your design temperature, certified efficiency, indoor format, and who will install and service them.",
  scopeNotice:
    "This page compares what the manufacturers' own lineup documentation establishes. It does not publish efficiency figures, low-temperature output, or sound levels for either brand, because those belong to individual matched systems and change between capacities, generations, and regions.",
  layout: ["sections", "comparisonTable", "figures", "branches"],
  symptoms: [
    "Both brands are on the quotation and the specifications look interchangeable.",
    "One installer offers one brand and a second installer offers the other.",
    "A brand-level efficiency or cold-weather claim is being used to justify a price difference.",
  ],
  causes: [
    "Series-level marketing figures describe the best case in a range, not the model on your quotation.",
    "Installation quality and local service access vary more between contractors than the ranges do between brands.",
  ],
  sections: [
    {
      title: "What each lineup covers",
      paragraphs: [
        "Daikin's North American ductless documentation covers single-zone and multi-zone systems with wall-mounted, floor-standing, cassette, and concealed-duct indoor options, alongside its ducted and light-commercial ranges.",
        "Mitsubishi Electric's US M-Series covers the same territory: single-zone and multi-zone outdoor units with wall, floor, cassette, and concealed indoor formats, plus separate ducted and multi-position products for whole-home work.",
        "The practical conclusion from the lineup documents alone is that both can serve the same building. A room that suits a wall-mounted head from one will suit a wall-mounted head from the other, and both publish multi-zone outdoor units with combination rules.",
      ],
    },
    {
      title: "Where a real difference could sit",
      paragraphs: [
        "Indoor formats. Both ranges are broad, but a specific room may need a specific answer: a low-height floor unit under a window, a one-way cassette in a narrow ceiling, a slim concealed unit in a shallow void. Check the exact format is available in the capacity you need, not just in the range.",
        "Controls. Both offer handset, wall controller, and connected options, and both have building-management paths for larger work. Where a project needs integration with something else, this is worth resolving early because it constrains the indoor unit and the accessory list.",
        "Low-temperature heating. Both publish cold-climate products. The comparison is only meaningful between extended capacity tables for the two matched systems at your design temperature, because within a brand the difference between series is larger than the difference between brands at the same tier.",
      ],
    },
    {
      title: "What this page will not tell you",
      paragraphs: [
        "It will not rank the brands on efficiency. A certified SEER2 or HSPF2 figure belongs to a named indoor and outdoor combination, and the top of a published range belongs to one capacity in one series. Comparing series maxima compares two marketing documents.",
        "It will not rank them on reliability. Neither manufacturer publishes failure-rate data, and the anecdotal evidence available in forums and reviews is not a sample that supports a conclusion.",
        "It will not rank them on sound. Sound pressure figures are published per model at stated fan speeds and measurement distances, and they are not comparable across brands unless the conditions match.",
      ],
    },
    {
      title: "The thing that actually varies most",
      paragraphs: [
        "Both brands sell through contractor networks, and the contractor is the variable with the widest range. Line-set brazing, evacuation, weighed charge, condensate fall, and commissioning determine whether either system performs to its ratings.",
        "Ask each installer the same four questions: what the load calculation says, which exact matched pair they propose, what the extended capacity is at your design temperature, and what the written warranty requires of registration and annual servicing. The answers will separate the quotations further than the badges do.",
      ],
    },
  ],
  figures: [
    {
      title: "The four documents that decide it",
      description:
        "Ask both suppliers for these, in this order. A quotation that cannot produce the first two has not been engineered yet.",
      nodes: [
        { label: "Load calculation", detail: "Room by room, for this building" },
        { label: "Matched pair", detail: "The two model numbers being proposed" },
        { label: "Extended capacity", detail: "Output for that pair at your design temperature" },
        { label: "Written warranty", detail: "Terms, registration, and servicing conditions" },
      ],
    },
  ],
  comparisonTable: {
    caption: "What the evidence supports on each point",
    columns: ["Point of comparison", "What can be established", "From what"],
    rows: [
      [
        "Application coverage",
        "Both cover single-zone and multi-zone residential ductless work",
        "Manufacturer lineup documentation",
      ],
      [
        "Indoor formats",
        "Wall, floor, cassette, and concealed available from both",
        "Manufacturer lineup documentation",
      ],
      [
        "Certified efficiency",
        "Only per matched combination, not per brand",
        "AHRI certificate for the two model numbers",
      ],
      [
        "Low-temperature capacity",
        "Only per matched system at a stated condition",
        "Extended capacity table in the engineering data",
      ],
      [
        "Sound",
        "Only per model at a stated speed and distance",
        "Product submittal sheet",
      ],
      [
        "Warranty",
        "Terms, registration conditions, and labour cover",
        "The written warranty document for your region",
      ],
      [
        "Reliability",
        "Nothing comparable is published by either",
        "No source supports a ranking",
      ],
    ],
  },
  diagnosticBranches: [
    {
      title: "You have two quotations and two brand names",
      observation:
        "Each installer proposes their own brand, the capacities look similar, and the price difference is being explained by brand quality.",
      action:
        "Ask both for the certificate reference for the exact pairing and the extended capacity at your design temperature. Compare those two documents rather than the two names.",
    },
    {
      title: "One room has an awkward constraint",
      observation:
        "A ceiling void is shallow, a wall is unavailable, or a floor unit has to fit under a specific window height.",
      action:
        "Let the constraint choose. Check which brand publishes the format you need in the capacity you need, and treat that as the deciding factor rather than a general preference.",
    },
    {
      title: "Cold-weather performance is the priority",
      observation:
        "The building is in a climate where the heating design temperature is low and backup heat is expensive or unavailable.",
      action:
        "Get extended capacity tables for both proposed systems and read them at your design temperature against the calculated load. Brand-tier labels do not survive that comparison.",
    },
  ],
  faqs: [
    {
      question: "Is Daikin better than Mitsubishi?",
      answer:
        "Not as a brand-level statement, and no source this site holds supports one. Both publish overlapping ranges. The comparison that resolves is between two specific matched systems against one building's load and one installer's scope.",
    },
    {
      question: "Which brand is better in cold weather?",
      answer:
        "Both publish cold-climate products, and the difference between series within a brand can exceed the difference between brands at the same tier. Read extended capacity tables at your design temperature.",
    },
    {
      question: "Can I compare the highest efficiency figures?",
      answer:
        "Only if they describe the same equipment class, capacity, and matched configuration under the same metric. A series maximum can belong to one capacity in the range, so it does not establish a like-for-like comparison.",
    },
    {
      question: "Does the installer matter more than the brand?",
      answer:
        "Installation quality determines whether either system reaches its ratings: pipework, evacuation, charge, drainage, and commissioning. Both manufacturers also tie warranty conditions to correct installation and registration.",
    },
  ],
  sourceIds: ["daikin-ductless-lineup", "mitsubishi-m-series", "ahri-directory"],
  relatedContent: [
    "/how-mini-splits-work/",
    "/btu-sizing-explained/",
    "/seer2-explained/",
    "/heat-pump-operating-temperatures/",
  ],
  glossaryTerms: ["seer", "hspf", "inverter-compressor"],
  relatedBrands: ["daikin", "mitsubishi"],
  keywords: [
    "Daikin vs Mitsubishi",
    "Daikin or Mitsubishi mini split",
    "compare ductless brands",
    "matched system comparison",
  ],
});
