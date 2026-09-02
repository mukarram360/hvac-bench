import { publish } from "./publish";

/**
 * These two are compared by buyers who have discovered that they also build
 * equipment sold under other names, so the page leads with that: what you are
 * actually buying when a badge and a manufacturer are different companies, and
 * why the manual and the parts channel matter more than the label in that
 * situation.
 */
export const greeVsMideaMiniSplits = publish({
  title: "Gree vs Midea: badge, builder, and support",
  slug: "gree-vs-midea-mini-splits",
  path: "/gree-vs-midea-mini-splits/",
  description:
    "Why both names appear on other brands' equipment, what that means for parts and fault codes, and the documentation to secure before buying either.",
  articleType: "comparison",
  equipmentType: "ductless-mini-split",
  problemType: "equipment-comparison",
  models: [
    "Gree Comfort North American ductless, multi-zone, and light-commercial ranges",
    "Midea US split-system ranges",
  ],
  directAnswer:
    "Both are large manufacturers with broad ductless ranges, and both also build equipment sold under other brand names. The decision rests less on which name you prefer and more on which regional series you are buying, what documentation comes with it, and where parts and support come from.",
  scopeNotice:
    "Regional ranges differ. A series name seen on an international site may not be the product sold in your market, and the fault-code table, parts list, and warranty that apply are the ones for the model actually supplied to your region.",
  layout: ["sections", "figures", "comparisonTable", "branches"],
  symptoms: [
    "Both brands appear in the same price bracket for similar nominal capacity.",
    "A third brand's unit has turned out to be built by one of them.",
    "You are trying to work out where parts and technical support would come from.",
  ],
  causes: [
    "The same production platform can appear under several brand names with different documentation and support.",
    "Fault-code meanings and parts numbers follow the supplied model, not the underlying platform.",
  ],
  sections: [
    {
      title: "Badge and builder are different questions",
      paragraphs: [
        "Both Gree and Midea manufacture at scale and supply equipment that reaches buyers under other brand names. That is ordinary in this industry and is not a criticism of any party.",
        "It matters for a practical reason. When something needs a part or a code definition, the channel that answers is the one attached to the badge you bought, not the factory behind it. The support article, the code table, and the warranty all belong to the brand that sold it.",
        "So the useful question is not which company built it. It is which model number is on the plate, whose documentation covers that model number, and who answers the phone.",
      ],
    },
    {
      title: "What each publishes",
      paragraphs: [
        "Gree Comfort's North American catalogue covers single-zone, multi-zone, ducted, and light-commercial equipment, and the company publishes support articles for individual fault codes alongside service manuals for named product families.",
        "Midea's US split-system documentation covers its residential split range, with inverter operation and control modes described at product level and service manuals published per family.",
        "For either, the documents that matter to an owner are the same three: the operation manual for daily use, the fault-code reference for the family, and the warranty terms for the region.",
      ],
    },
    {
      title: "Where the risk actually sits",
      paragraphs: [
        "Not in the equipment platform. In the support chain. A system bought from a channel that cannot supply a control board in two years is a worse outcome than a small difference in rated efficiency, and that risk is not visible in a specification sheet.",
        "Before buying either, establish three things in writing: who supplies spare parts for that model in your country, which document defines its fault codes, and what the warranty requires of registration, installation, and servicing.",
        "Ask for the operation manual as a file before purchase, not after. A range that cannot produce documentation for the exact model number is telling you something about what support will look like later.",
      ],
    },
  ],
  figures: [
    {
      title: "Following a fault from the cabinet to an answer",
      description:
        "Every step here runs through the badge you bought from, not the factory behind it. That is why the plate matters more than the manufacturer.",
      nodes: [
        { label: "Data plate", detail: "The model number actually installed" },
        { label: "Badge documentation", detail: "The code table published for that model" },
        { label: "Support channel", detail: "Whoever answers for that brand in your country" },
        { label: "Parts supplier", detail: "Who stocks the board or sensor by that part number" },
      ],
    },
  ],
  comparisonTable: {
    caption: "What to establish before either goes on the wall",
    columns: ["Item", "What to ask for", "What a poor answer looks like"],
    rows: [
      [
        "Exact model numbers",
        "Indoor and outdoor, as they will appear on the plate",
        "A series name with no model numbers",
      ],
      [
        "Operation manual",
        "The PDF for those model numbers, before purchase",
        "A generic manual for the range",
      ],
      [
        "Fault-code reference",
        "The document that defines codes for that family",
        "A code list found on a retailer's site",
      ],
      [
        "Certified rating",
        "The certificate for the matched pairing",
        "A range quoted from a brochure",
      ],
      [
        "Parts channel",
        "Who supplies boards and sensors in your country",
        "Nobody named",
      ],
      [
        "Warranty terms",
        "The written document, with registration conditions",
        "A number of years with no document",
      ],
    ],
  },
  diagnosticBranches: [
    {
      title: "You are buying new and comparing quotations",
      observation:
        "Two systems of similar nominal capacity and similar price, one from each brand, both offered with installation.",
      action:
        "Run the comparison on documentation rather than badge: certificate for the pairing, extended capacity at your design temperature, and the written warranty with its conditions.",
    },
    {
      title: "You already own one and need a part",
      observation:
        "A system is installed, a component has failed, and the brand on the cabinet may not be the manufacturer.",
      action:
        "Work from the model number on the plate through the badge's own support channel. Codes and part numbers follow the supplied model, and a cross-reference to the underlying platform is a technician's judgement, not an owner's.",
    },
    {
      title: "The unit was bought as a self-install kit",
      observation:
        "The system arrived as a package with pre-charged pipework or a simplified connection method, sold direct rather than through a contractor.",
      action:
        "Check what the warranty says about installation before anything is fitted. Terms distinguish between owner installation and certified installation, and refrigerant work has legal requirements in both the United States and the United Kingdom.",
    },
  ],
  faqs: [
    {
      question: "Are Gree and Midea the same company?",
      answer:
        "No. They are separate manufacturers, both of which also build equipment that reaches buyers under other brand names. That is why the model number on the plate matters more than the badge on the cabinet.",
    },
    {
      question: "Is a rebadged unit worse than the original brand?",
      answer:
        "The question to ask is not about the platform but about the support attached to the badge: who supplies parts, whose documentation defines the codes, and what the warranty requires. Those can differ between two products built on the same line.",
    },
    {
      question: "Which is cheaper to run?",
      answer:
        "Running cost follows the certified efficiency of the specific matched pairing, the building's load, the tariff, and how the system is used. A brand-level answer would not survive any of those.",
    },
    {
      question: "Can I get parts for either in a few years?",
      answer:
        "Get the answer in writing before you buy, naming the parts supplier for your country. Parts availability is the risk that specifications do not show and that shortens a system's useful life.",
    },
  ],
  sourceIds: ["gree-product-catalog", "midea-split-lineup", "ahri-directory"],
  relatedContent: [
    "/mini-split-lifespan/",
    "/how-to-find-mini-split-model-number/",
    "/seer2-explained/",
    "/how-mini-splits-work/",
  ],
  glossaryTerms: ["data-plate", "error-code", "service-manual"],
  relatedBrands: ["gree", "midea"],
  keywords: [
    "Gree vs Midea",
    "rebadged mini split brands",
    "who makes my mini split",
    "mini split parts availability",
  ],
});
