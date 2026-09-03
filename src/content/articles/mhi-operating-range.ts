import { publish } from "./publish";

/**
 * The outdoor limits are the ones everybody quotes. The indoor limits are the
 * ones that actually explain the complaints: a room already at 8 degrees is
 * below the heating range, and a room held above 80 percent humidity is where
 * the condensation warning comes from. Both live in the same small table.
 */
export const mhiOperatingRange = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "MHI room air conditioners: the published operating range",
  slug: "operating-temperature-range",
  path: "/brands/mitsubishi-heavy-industries/operating-temperature-range/",
  description:
    "MHI publishes indoor limits as well as outdoor ones, plus a humidity ceiling. Running outside them can activate protection devices and stop the unit working.",
  articleType: "guide",
  brand: "mitsubishi-heavy-industries",
  equipmentType: "ductless-mini-split",
  productFamily: "MHI wall-mounted room air conditioners in user manual RLC012A102A",
  models: ["Models covered by Mitsubishi Heavy Industries user manual RLC012A102A"],
  problemType: "documented-operating-limits",
  symptomFamily: "running-cost",
  directAnswer:
    "For the documented models, cooling is specified from minus 15 to 46 degrees Celsius outside and 18 to 32 inside, and heating from minus 15 to 24 outside and 10 to 30 inside. Indoor humidity is specified below approximately 80 percent.",
  scopeNotice:
    "These figures come from the Mitsubishi Heavy Industries user manual RLC012A102A for wall-mounted room air conditioners. MHI publishes different ranges for other product families, and an air-to-water or light commercial system is documented separately, so read the manual that came with your own indoor and outdoor pair.",
  layout: ["decisionTable", "figures", "sections"],
  symptoms: [
    "A room has been left unheated over a cold snap and the system will not bring it back.",
    "Somebody wants to use the unit in a space that runs colder or warmer than a living room.",
    "Water is forming on the surface of the indoor unit in a humid room.",
  ],
  causes: [
    "MHI states that operating outside the specified range may result in the protection devices being activated, preventing the unit from working.",
    "The manual notes that long-term use above approximately 80 percent indoor humidity may result in condensation forming on the surface of the indoor unit.",
  ],
  decisionTable: {
    caption: "Operating range published for the documented MHI room air conditioners",
    columns: ["Condition", "Cooling mode", "Heating mode"],
    rows: [
      ["Outside temperature", "Approximately minus 15 to 46 degrees Celsius", "Approximately minus 15 to 24 degrees Celsius"],
      ["Inside temperature", "Approximately 18 to 32 degrees Celsius", "Approximately 10 to 30 degrees Celsius"],
      ["Inside humidity", "Below approximately 80 percent", "Below approximately 80 percent"],
    ],
  },
  figures: [
    {
      title: "What sits at each end of the heating range",
      description:
        "The heating range is narrower than the cooling range at the top and identical at the bottom. Each boundary exists for a different reason, which is why they are not symmetrical.",
      nodes: [
        { label: "Minus 15 outside", detail: "The published floor for both cooling and heating" },
        { label: "24 outside in heating", detail: "Above this the system is outside the heating specification" },
        { label: "10 inside in heating", detail: "A room colder than this is below the specified range" },
        { label: "80 percent humidity", detail: "Above this, condensation on the indoor unit is described" },
      ],
    },
  ],
  sections: [
    {
      title: "The indoor limits are the ones people trip over",
      paragraphs: [
        "Everybody quotes outdoor limits, because that is the number in the brochure. MHI publishes indoor limits too, and they explain more complaints. Heating is specified for an inside temperature of approximately 10 to 30 degrees Celsius. A holiday property, an unheated garage conversion, or a room shut up through a cold week can easily be below that when somebody switches the system on and asks it to recover.",
        "Cooling has the mirror problem at the other end, specified for an inside temperature of approximately 18 to 32 degrees. A conservatory or a loft that has been baking all afternoon can be above 32 when the system is asked to start, which places it outside the specified range at exactly the moment it is most wanted.",
        "Neither of these is a fault in the equipment. It is a system being asked to work outside the conditions its manufacturer documented, and MHI is explicit about the consequence: operating outside the range may result in the protection devices being activated, which prevents the unit from working.",
      ],
    },
    {
      title: "Why the heating range narrows at the top",
      paragraphs: [
        "Cooling is specified up to 46 degrees Celsius outside and heating only to 24. That asymmetry is not a limitation on the hardware so much as a statement about what the mode is for. Above 24 outside there is no heating demand worth serving, and a heat pump asked to heat into that condition is working against a temperature difference that makes no sense.",
        "The shared floor of approximately minus 15 is the more interesting end. It is the point below which MHI stops specifying behaviour for this equipment, and it applies to cooling and heating alike on the documented models. Capacity has been falling well before that, which the manual says plainly: as a characteristic of the heat pump system, heating capacity reduces when the outside air temperature gets colder.",
      ],
    },
    {
      title: "The humidity clause explains the drips",
      paragraphs: [
        "MHI specifies indoor humidity below approximately 80 percent and states what happens above it: long-term use may result in condensation forming on the surface of the indoor unit, leading to water drops. That is a different mechanism from a blocked condensate drain, and it produces a different pattern.",
        "Water from a blocked drain comes from the drain pan and appears where the pipe leaves. Water from the condition described here forms on the outside of the cabinet, on the louvres and the front panel, because the surface is below the dew point of the air in the room. If the drips are on the outside of the unit in a humid room, the drain is not the place to start.",
      ],
    },
    {
      title: "What to do with a room outside the range",
      paragraphs: [
        "The manual gives a direct answer for the cold end. Once the outside temperature has fallen far enough, MHI advises that it would be better to use an additional source of heating. Adding heat rather than demanding more from the heat pump is the manufacturer's own recommendation, not a compromise.",
        "For a room starting far below the heating range, the sensible sequence is to raise the space with another source until it is inside the documented range and then let the system take over. For a humid room, addressing the humidity is what removes the condensation, and running the system in dry mode is one route to that rather than a fix for a fault.",
      ],
    },
  ],
  faqs: [
    {
      question: "What happens if I run the unit outside these limits?",
      answer:
        "MHI states that operating outside the range may result in the protection devices being activated, preventing the unit from working. That is a protective stop rather than damage, and it explains equipment that refuses to run in conditions well outside the specification.",
    },
    {
      question: "Why is there an indoor temperature limit at all?",
      answer:
        "Because the indoor conditions are part of what the equipment was specified against. Heating is documented for an inside temperature of approximately 10 to 30 degrees Celsius, so a room that has fallen below 10 is outside the range before the system is even asked to start.",
    },
    {
      question: "Why is water forming on the outside of the indoor unit?",
      answer:
        "The manual describes exactly this for long-term use above approximately 80 percent indoor humidity: condensation forms on the surface of the indoor unit and leads to water drops. It is a surface condensation effect rather than a drainage fault.",
    },
    {
      question: "Do these figures apply to every MHI system?",
      answer:
        "No. They come from the user manual for the wall-mounted room air conditioners it covers. Other MHI families, including hydronic and light commercial equipment, publish their own ranges, so use the manual supplied with your own system.",
    },
  ],
  sourceIds: ["mhi-room-air-user", "mhi-user-manual-index"],
  relatedContent: [
    "/brands/mitsubishi-heavy-industries/",
    "/brands/mitsubishi-heavy-industries/run-light-blinking/",
    "/heat-pump-operating-temperatures/",
    "/mini-split-leaking-water/",
  ],
  glossaryTerms: ["heat-pump", "balance-point", "delta-t"],
  keywords: [
    "mitsubishi heavy industries operating temperature range",
    "mhi air conditioner minimum temperature",
    "mhi indoor humidity limit",
    "mhi condensation on indoor unit",
    "mhi heating range outdoor temperature",
  ],
});
