import { publish } from "./publish";

/**
 * Both are direct-selling ductless brands, so the interesting comparison is
 * within each range rather than between them: Senville publishes its own LETO
 * against AURA distinction, and Pioneer runs several named families. The page
 * is therefore about reading a series name correctly, and its centrepiece is
 * the list of things a series name does not tell you.
 */
export const senvilleVsPioneerMiniSplits = publish({
  title: "Senville vs Pioneer: reading the series name",
  slug: "senville-vs-pioneer-mini-splits",
  path: "/senville-vs-pioneer-mini-splits/",
  description:
    "Why the choice sits inside each range rather than between the brands, what a series name does and does not settle, and the specification to confirm before ordering.",
  articleType: "comparison",
  equipmentType: "ductless-mini-split",
  problemType: "equipment-comparison",
  models: [
    "Senville LETO, AURA, and SENA ductless families",
    "Pioneer Diamante, Diamante Pro, Quantum, Hyperformance, and Ultra families",
  ],
  directAnswer:
    "Both sell ductless systems direct with several named families in each range. The decision that matters is which family within a range suits your climate and application, because the spread inside each brand is wider than the gap between them.",
  scopeNotice:
    "Family names and their positioning change between generations and between regions. Senville publishes its own comparison of LETO and AURA; Pioneer lists its current collections. Confirm what is current for your market and for the exact model rather than relying on a family name.",
  layout: ["sections", "comparisonTable", "decisionTable", "branches"],
  symptoms: [
    "Two series names from the same brand differ in price and it is unclear why.",
    "A cold-climate claim is attached to one family and not another.",
    "The model number on the listing does not match the family described.",
  ],
  causes: [
    "A family name groups products by positioning, and members of it can differ in capacity, voltage, and operating range.",
    "The same family name can cover different generations sold at the same time.",
  ],
  sections: [
    {
      title: "What a series name does settle",
      paragraphs: [
        "It tells you the manufacturer's intended positioning, which is genuinely useful. Senville's own support documentation distinguishes LETO from AURA on application, climate scope, and warranty terms, and that distinction is the manufacturer's own rather than a reseller's.",
        "Pioneer's collections work the same way, grouping products by intended use and feature level. Knowing which family a product belongs to tells you which broad set of applications it was designed for.",
      ],
    },
    {
      title: "What a series name does not settle",
      paragraphs: [
        "Capacity at your design temperature. That is a property of the individual model and comes from its performance data, not from the family.",
        "Operating range. A family described as suited to cold climates still has a published minimum operating temperature per model, and members of the family can differ.",
        "Voltage. Ductless products are sold at more than one supply voltage, sometimes within one family, and the wrong one arrives looking identical.",
        "What is in the box. Line set, wall bracket, drain hose, and wiring are included in some listings and not others, and that difference can be a large share of the price gap between two apparently similar offers.",
      ],
    },
    {
      title: "Buying direct changes the questions",
      paragraphs: [
        "Both brands reach buyers through direct channels, which puts specification, installation arrangement, and support in the buyer's hands rather than a contractor's. That is the trade for the price.",
        "Three things are therefore worth settling before ordering. Who will install it, and are they willing to install equipment they did not supply. What the warranty requires of installation and registration. And where a control board or sensor comes from in three years.",
        "None of those questions favours one of these two brands over the other. They favour whichever purchase gives you written answers.",
      ],
    },
  ],
  comparisonTable: {
    caption: "What changes when equipment is bought direct",
    columns: ["Responsibility", "Bought direct", "Bought through a contractor"],
    rows: [
      [
        "Choosing the capacity",
        "Yours, from a load calculation you commission",
        "Theirs, and their liability if it is wrong",
      ],
      [
        "Confirming the specification",
        "Yours, against the listing and the data plate",
        "Theirs, before the order is placed",
      ],
      [
        "Finding an installer",
        "Yours, and some decline supplied equipment",
        "Included",
      ],
      [
        "Warranty registration",
        "Yours, within the stated window",
        "Often handled, but confirm it in writing",
      ],
      [
        "Who returns if it underperforms",
        "Split between supplier and installer",
        "One accountable party",
      ],
    ],
  },
  decisionTable: {
    caption: "Confirm these against the model number, not the family",
    columns: ["Specification", "Why it varies within a family", "Where to confirm it"],
    rows: [
      [
        "Supply voltage",
        "Ductless products ship at more than one voltage",
        "Data plate figure on the product listing",
      ],
      [
        "Capacity at design temperature",
        "A property of the individual model",
        "Performance data for that model",
      ],
      [
        "Minimum operating temperature",
        "Differs between members of one family",
        "Specification sheet for the model",
      ],
      [
        "Included components",
        "Line set and accessories vary by listing",
        "The listing's contents, in writing",
      ],
      [
        "Refrigerant",
        "Ranges move between refrigerants across generations",
        "Data plate designation",
      ],
      [
        "Warranty conditions",
        "Terms differ by family and by installation route",
        "The written warranty document",
      ],
    ],
  },
  diagnosticBranches: [
    {
      title: "The building is in a mild climate and cooling dominates",
      observation:
        "Heating demand is light or comes from elsewhere, and the system is mainly wanted for summer.",
      action:
        "Compare on cooling capacity, certified efficiency, sound at the speed you will actually run, and what is included in the box. Cold-climate positioning is not paying for anything you need here.",
    },
    {
      title: "Heating through a cold winter is the point",
      observation:
        "The system is expected to be the heat source through a season with sustained low temperatures.",
      action:
        "Read the minimum operating temperature and the heating capacity data for the exact model, against your local design temperature. A family described as cold-climate does not remove that check.",
    },
    {
      title: "You already own one and need support",
      observation:
        "A system is installed and a fault or a part is needed, and the family name is what you remember rather than the model.",
      action:
        "Get the model number from the plate first. Fault-code references and parts lists are published per family and per model, and both brands' support documentation is organised that way.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between Senville LETO and AURA?",
      answer:
        "Senville publishes its own comparison covering application, climate scope, and warranty terms. Use that document rather than a reseller's summary, and confirm the specification against the individual model you intend to buy.",
    },
    {
      question: "Is Pioneer or Senville better for cold weather?",
      answer:
        "Both publish families positioned for colder climates, and members within a family differ. Compare minimum operating temperature and heating capacity for the exact models at your local design temperature.",
    },
    {
      question: "Do these units come with everything needed?",
      answer:
        "It varies by listing. Line set, bracket, drain hose, and wiring are included in some and not others, so confirm the contents in writing; the difference can account for much of a price gap.",
    },
    {
      question: "Will an installer fit equipment I bought myself?",
      answer:
        "Some will and some will not, and it is worth settling before ordering. Ask about their position on supplied equipment, and check what the warranty requires of who performs the installation.",
    },
  ],
  sourceIds: ["senville-aura-leto", "pioneer-product-lineup", "senville-leto-codes"],
  relatedContent: [
    "/how-to-find-mini-split-model-number/",
    "/heat-pump-operating-temperatures/",
    "/btu-sizing-explained/",
    "/mini-split-lifespan/",
  ],
  glossaryTerms: ["data-plate", "ductless-mini-split", "balance-point"],
  relatedBrands: ["senville", "pioneer"],
  keywords: [
    "Senville vs Pioneer",
    "Senville LETO vs AURA",
    "Pioneer mini split series",
    "direct buy mini split",
  ],
});
