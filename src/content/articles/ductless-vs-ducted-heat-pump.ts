import { publish } from "./publish";

/**
 * Sits next to the mini-split versus central air page and has to not repeat
 * it. That one is about whether to use ducts at all; this one assumes a heat
 * pump has been chosen and asks how its capacity gets into the rooms. The
 * distinguishing content here is the middle ground, concealed-duct indoor
 * units, which the other page does not cover.
 */
export const ductlessVsDuctedHeatPump = publish({
  title: "Ductless or ducted: how capacity reaches the room",
  slug: "ductless-vs-ducted-heat-pump",
  path: "/ductless-vs-ducted-heat-pump/",
  description:
    "Three delivery arrangements rather than two, what static pressure does to a ducted design, and where a concealed indoor unit solves the appearance objection.",
  articleType: "comparison",
  equipmentType: "ducted-split",
  problemType: "equipment-comparison",
  models: [
    "Ductless indoor units mounted in the conditioned space",
    "Ducted air handlers and concealed indoor units serving short duct runs",
  ],
  directAnswer:
    "A heat pump can deliver its capacity through units in the room, through a whole-house duct network, or through concealed indoor units serving a few rooms each. The third arrangement is the one most comparisons leave out, and it is often the answer where appearance is the objection.",
  scopeNotice:
    "Static pressure limits, permitted duct lengths, and filter requirements are published per indoor unit and are not interchangeable. A concealed unit rated for short runs will not carry a whole-house network, and specifying it as though it will is a design error rather than a preference.",
  layout: ["comparisonTable", "figures", "sections", "branches"],
  symptoms: [
    "A heat pump has been chosen and the delivery method is still open.",
    "Wall-mounted units are unacceptable in some rooms but not others.",
    "There is a ceiling void or a loft that could carry short duct runs.",
  ],
  causes: [
    "Every metre of duct and every fitting costs static pressure the indoor fan has to overcome.",
    "Indoor units are rated for a maximum external static pressure that the duct design has to stay inside.",
  ],
  comparisonTable: {
    caption: "Three arrangements, not two",
    columns: ["Arrangement", "Where it suits", "What constrains it"],
    rows: [
      [
        "Ductless heads",
        "Room-by-room control with no distribution to build",
        "A visible unit in every conditioned room",
      ],
      [
        "Concealed indoor units",
        "Two or three rooms from one hidden unit, registers only",
        "Needs a void, and short runs within its static pressure rating",
      ],
      [
        "Whole-house air handler",
        "One system for the whole building through a full network",
        "Needs duct routes, and one zone unless zoning is added",
      ],
    ],
  },
  figures: [
    {
      title: "Where the fan's pressure budget goes",
      description:
        "An indoor unit is rated for a maximum external static pressure. Every item here spends part of that budget, and the design has to fit inside it.",
      nodes: [
        { label: "Filter", detail: "Deeper media captures more and resists more" },
        { label: "Duct length", detail: "Friction along every metre of the run" },
        { label: "Fittings", detail: "Bends, transitions, and takeoffs, each with a cost" },
        { label: "Registers", detail: "The final restriction at each outlet" },
        { label: "What remains", detail: "Whether the rated airflow can still be delivered" },
      ],
    },
  ],
  sections: [
    {
      title: "The middle option people miss",
      paragraphs: [
        "A concealed or slim-duct indoor unit sits in a ceiling void, a loft, or a bulkhead and serves a small number of rooms through short duct runs. From inside the room you see a supply register and a return grille and nothing else.",
        "It answers the objection that keeps people away from ductless without requiring a whole-house duct network. A bedroom wing can run from one concealed unit while the living space uses a wall-mounted head, on the same outdoor unit if the combination permits it.",
        "The constraint is real and worth stating plainly. These units are rated for a maximum external static pressure, and it is modest. They are designed for a few metres of duct and a handful of outlets, not for a network reaching every room in a house.",
      ],
    },
    {
      title: "What static pressure actually costs you",
      paragraphs: [
        "Every length of duct, every bend, every register, and every filter resists the airflow the indoor fan is trying to produce. That resistance is external static pressure, and each indoor unit publishes the maximum it can work against.",
        "Exceed it and the fan cannot move its rated airflow. Delivered capacity drops, some rooms get less than others, and the system runs longer to achieve less. The equipment has not failed; it is being asked to push through more resistance than it was rated for.",
        "This is why duct design is not an installation detail. It determines whether the equipment on the invoice can deliver the capacity on its specification sheet.",
      ],
    },
    {
      title: "Filtration and maintenance differ more than people expect",
      paragraphs: [
        "A ductless head carries a thin washable filter sized for that unit, cleaned by the owner, in every room. That is several filters in several places, on a schedule.",
        "A ducted arrangement concentrates filtration at one point, which can carry a deeper filter with more surface area and higher capture. It also means one location to service rather than six, which suits some households and not others.",
        "Concealed units sit in between, and the practical question to ask about them is where the filter is and whether an owner can reach it. A filter in a loft above a hatch is a maintenance task people stop doing.",
      ],
    },
  ],
  diagnosticBranches: [
    {
      title: "Appearance is the blocking objection",
      observation:
        "Ductless would work technically, but a visible unit in the main rooms is not acceptable to the household.",
      action:
        "Price a concealed indoor unit for those rooms. Check the void depth against the unit's dimensions and the proposed duct run against its external static pressure rating before assuming it fits.",
    },
    {
      title: "The rooms have different load patterns",
      observation:
        "Bedrooms, a home office, and living space are occupied at different times and want different temperatures.",
      action:
        "Ductless heads or separate concealed units per group give that control inherently. A single ducted zone does not, and adding zoning to one is a separate cost and a separate set of components.",
    },
    {
      title: "A full duct network already exists and works",
      observation:
        "Sound, well-located ducts already reach every room and deliver acceptable airflow.",
      action:
        "A ducted air handler uses infrastructure you already have. Have the network assessed against the new equipment's airflow and static pressure requirements before assuming it transfers.",
    },
  ],
  faqs: [
    {
      question: "Can a heat pump be installed without visible indoor units?",
      answer:
        "Yes, using concealed or slim-duct indoor units in a void serving registers, or a whole-house air handler. Both need somewhere for the unit and the duct runs to go, and both have published static pressure limits.",
    },
    {
      question: "How long can the ducts be on a concealed unit?",
      answer:
        "As long as the design stays within the unit's maximum external static pressure, which is a modest figure. In practice that is a few metres and a handful of outlets, and the calculation belongs to the designer.",
    },
    {
      question: "Can I mix ductless and ducted indoor units?",
      answer:
        "On a multi-zone system, yes, if the outdoor unit's approved combination includes both types. A concealed unit for bedrooms and a wall head for living space is a common arrangement.",
    },
    {
      question: "Which is more efficient, ductless or ducted?",
      answer:
        "Ductless avoids distribution losses because capacity is produced in the room it serves. A ducted arrangement inside the conditioned envelope, well sealed and correctly sized, narrows that gap.",
    },
  ],
  sourceIds: ["mitsubishi-ducted", "daikin-ductless-lineup", "doe-heat-pumps"],
  relatedContent: [
    "/mini-split-vs-central-air/",
    "/btu-sizing-explained/",
    "/single-zone-vs-multi-zone-mini-split/",
    "/heat-pump-operating-temperatures/",
  ],
  glossaryTerms: ["static-pressure", "air-handler", "ductwork"],
  keywords: [
    "ductless vs ducted heat pump",
    "concealed duct indoor unit",
    "slim duct mini split",
    "external static pressure heat pump",
  ],
});
