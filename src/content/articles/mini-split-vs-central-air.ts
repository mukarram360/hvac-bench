import { publish } from "./publish";

/**
 * Not a brand comparison, so it should not read like one. The decision is
 * driven almost entirely by the building, so the page starts from the building
 * and works outward: what ducts you have, what condition they are in, and what
 * each option costs you in the rooms rather than on the invoice.
 */
export const miniSplitVsCentralAir = publish({
  title: "Mini-split or central air: what the building decides",
  slug: "mini-split-vs-central-air",
  path: "/mini-split-vs-central-air/",
  description:
    "Why existing ductwork is the first question, what duct losses do to a central system, and where zoning, filtration, and appearance push the answer either way.",
  articleType: "comparison",
  equipmentType: "ducted-split",
  problemType: "equipment-comparison",
  models: [
    "Ductless systems delivering capacity through room units",
    "Ducted systems delivering capacity through an air handler and distribution network",
  ],
  directAnswer:
    "The building decides this more than the equipment does. Where sound ducts already run to every room, a central system uses infrastructure you have paid for. Where they do not, or where they leak into unconditioned space, ductless avoids building a distribution network to serve it.",
  scopeNotice:
    "This compares two delivery methods, not two products. Both can be efficient and both can be poor, and installed design determines which happens. Nothing here substitutes for a load calculation and a survey of the existing distribution.",
  layout: ["branches", "comparisonTable", "figures", "sections"],
  symptoms: [
    "The house has ducts and you are deciding whether to keep using them.",
    "The house has no ducts and adding them would mean structural work.",
    "One or two rooms are the problem rather than the whole house.",
  ],
  causes: [
    "Ducts in unconditioned space lose capacity before it reaches a room.",
    "A single ducted zone conditions the whole house to one setpoint whether or not rooms are occupied.",
  ],
  diagnosticBranches: [
    {
      title: "Sound ducts already reach every room",
      observation:
        "The distribution network runs within conditioned space, is sealed, and delivers acceptable airflow to each room today.",
      action:
        "A central system uses infrastructure that already exists, and replacing equipment is cheaper than building a new delivery path. Have the ducts inspected for leakage and sizing rather than assumed to be adequate.",
    },
    {
      title: "There are no ducts, or adding them means structural work",
      observation:
        "The building has no distribution network, or fitting one would mean soffits, dropped ceilings, or losing cupboard space.",
      action:
        "Ductless avoids the cost and the disruption of building a network. Compare the installed cost of heads and line sets against duct installation plus the space it consumes.",
    },
    {
      title: "Ducts exist but run through a hot attic or cold crawl space",
      observation:
        "The distribution is outside the conditioned envelope, and rooms at the end of long runs never perform as well as those near the air handler.",
      action:
        "Get the losses assessed before choosing. Sealing and insulating existing ducts can be the cheaper improvement, and it changes the sizing of whatever equipment is chosen afterwards.",
    },
    {
      title: "One or two rooms are the problem",
      observation:
        "The rest of the house is comfortable and the trouble is confined to a conversion, an extension, or a room over a garage.",
      action:
        "A single ductless head for that space is a smaller intervention than resizing a central system for a load it was never designed to carry.",
    },
  ],
  comparisonTable: {
    caption: "Where each approach is stronger",
    columns: ["Consideration", "Ductless", "Ducted central"],
    rows: [
      [
        "Distribution losses",
        "Capacity is delivered in the room it was made for",
        "Depends on duct sealing, insulation, and location",
      ],
      [
        "Zoning",
        "Room-by-room control is inherent",
        "One zone unless zoning hardware is added",
      ],
      [
        "Retrofit disruption",
        "Line set and a wall penetration per head",
        "Space for ducts, plus the routes to reach it",
      ],
      [
        "Appearance",
        "A visible unit in each conditioned room",
        "Registers only, with equipment out of sight",
      ],
      [
        "Filtration",
        "Per-unit filters sized for that head",
        "One filter location, easier to upgrade in depth",
      ],
      [
        "Ventilation",
        "Not provided; needs a separate strategy",
        "Can carry ducted ventilation where designed to",
      ],
      [
        "Maintenance access",
        "Filters at each head, several locations",
        "One equipment location for most tasks",
      ],
      [
        "Failure consequence",
        "One head or one system affects one area",
        "Loss of the air handler affects the whole house",
      ],
    ],
  },
  figures: [
    {
      title: "What a ducted system loses on the way to the room",
      description:
        "Rated capacity is measured at the equipment. Each stage after that can subtract from it, and a ductless head skips the middle three.",
      nodes: [
        { label: "Equipment output", detail: "The rated capacity at the air handler" },
        { label: "Leakage", detail: "Air escaping the network before it reaches a register" },
        { label: "Conduction", detail: "Heat gained or lost through uninsulated duct walls" },
        { label: "Balance", detail: "How the surviving airflow is divided between rooms" },
        { label: "Delivered", detail: "What actually arrives in the room being conditioned" },
      ],
    },
  ],
  sections: [
    {
      title: "Duct losses are the number people leave out",
      paragraphs: [
        "A ducted system's rating is measured at the equipment. What arrives in a bedroom is what survives the journey, and a network that leaks into an attic or loses heat through uninsulated runs delivers less than the nameplate suggests.",
        "Where the ducts already sit inside the conditioned envelope, that loss is small and the comparison is straightforward. Where they run through a roof space that reaches high temperatures in summer, it is not, and the honest comparison prices duct remediation as part of the ducted option.",
      ],
    },
    {
      title: "Zoning is the ductless advantage that survives scrutiny",
      paragraphs: [
        "A ductless system conditions each room to its own setting because each room has its own unit. A single-zone ducted system runs the whole house to one thermostat, in one place, regardless of which rooms are occupied.",
        "That difference is worth more in some buildings than others. A house where the family occupies two rooms in the evening and four bedrooms at night benefits. An open-plan house on one floor benefits less, and there the ducted option's single-equipment simplicity may win.",
      ],
    },
    {
      title: "The trade-offs that are not about efficiency",
      paragraphs: [
        "Appearance is a real objection and worth naming. A ductless head is visible in every room it serves, and concealed-duct indoor units exist partly to answer that, at the cost of needing a void to sit in.",
        "Filtration and ventilation favour a ducted arrangement. One filter location can carry a deeper filter more easily than a slim head can, and a duct network can distribute mechanical ventilation where a ductless system cannot.",
        "Maintenance cuts both ways. Ductless spreads filter cleaning across every room; ducted concentrates it in one place but puts every room behind one air handler when that fails.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is a mini-split cheaper than central air?",
      answer:
        "It depends on what distribution already exists. Replacing equipment on sound ducts is the cheaper route; building a duct network from nothing is not. Compare installed cost for the actual building rather than equipment prices.",
    },
    {
      question: "Can I use my existing ducts with a heat pump?",
      answer:
        "Often, but the ducts should be assessed for sizing, sealing, and location first. A network designed around different airflow can limit what the new equipment delivers, and leakage into unconditioned space costs capacity.",
    },
    {
      question: "Can I mix the two approaches?",
      answer:
        "Yes, and it is common. A ducted system for the main house with a ductless head for a conversion or an extension is often smaller and cheaper than resizing the central system for a load it was not designed for.",
    },
    {
      question: "Do mini-splits provide ventilation?",
      answer:
        "A standard ductless head recirculates room air and adds none from outside. Where ventilation is required, it has to be designed separately, which is one thing a ducted system can be arranged to carry.",
    },
  ],
  sourceIds: ["daikin-ductless-lineup", "mitsubishi-ducted", "doe-hvac-sizing"],
  relatedContent: [
    "/ductless-vs-ducted-heat-pump/",
    "/btu-sizing-explained/",
    "/single-zone-vs-multi-zone-mini-split/",
    "/seer2-explained/",
  ],
  glossaryTerms: ["ductwork", "air-handler", "static-pressure"],
  keywords: [
    "mini split vs central air",
    "ductless or central AC",
    "duct losses attic",
    "zoning ductless",
  ],
});
