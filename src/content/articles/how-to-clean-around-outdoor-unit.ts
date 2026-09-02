import { publish } from "./publish";

/**
 * Written as a boundary page. The useful content is short, and the value is in
 * being unambiguous about where owner work ends, because "cleaning the
 * outdoor unit" is how people end up with bent fins, water in a fan motor, and
 * a coil that has been washed the wrong way through.
 */
export const howToCleanAroundOutdoorUnit = publish({
  title: "How to clean around an outdoor unit without damaging it",
  slug: "how-to-clean-around-outdoor-unit",
  path: "/how-to-clean-around-outdoor-unit/",
  description:
    "The clearance work an owner can do by hand, why coil washing and fin combing are not on that list, and what a restricted outdoor unit does to the rest of the system.",
  articleType: "how-to",
  equipmentType: "heat-pump",
  problemType: "outdoor-clearance",
  models: [
    "Outdoor condensing units and heat-pump outdoor units at ground or wall level",
    "Roof-mounted and elevated installations need access equipment and are out of scope",
  ],
  directAnswer:
    "Owner work here is clearance work: switch the system off, remove loose debris by hand from around and beneath the cabinet, and restore the spacing in your installation manual. Coil washing, fin straightening, and any panel removal belong to a technician.",
  scopeNotice:
    "Required clearances differ by model, by mounting, and by whether the unit sits in a corner, an alcove, or open ground. Use the installation manual for your outdoor model rather than a general figure, and treat overhead and discharge-side spacing as separate requirements from the sides.",
  layout: ["sections", "steps", "decisionTable"],
  symptoms: [
    "Leaves, cuttings, or debris have built up around the outdoor unit.",
    "Planting, fencing, or stored items have closed in on the cabinet.",
    "The unit has been running harder or icing in winter.",
  ],
  causes: [
    "A restricted coil raises operating pressures in cooling and reduces available heat in heating.",
    "Discharge air that recirculates back into the inlet makes the unit fight its own exhaust.",
  ],
  sections: [
    {
      title: "What the airflow is for",
      paragraphs: [
        "An outdoor unit is a heat exchanger with a fan. In cooling it has to reject the heat taken out of the house, and in heating it has to collect heat from outdoor air. Both jobs are limited by how much air it can pull across the coil and how freely it can push that air away.",
        "Two problems show up. Restriction, where debris or planting blocks the coil faces. And recirculation, where the discharged air is caught by a wall, fence, or overhang and drawn straight back in, so the unit works against air it has already used.",
        "The symptoms are unglamorous: longer running, less capacity, higher consumption, and in winter, ice that a defrost cycle struggles to clear because the coil is not getting the airflow the cycle assumes.",
      ],
    },
    {
      title: "Where the owner boundary sits",
      paragraphs: [
        "Everything in the procedure below happens with the hands, from ground level, outside the cabinet. Nothing requires a tool, a hose, a chemical, or a panel to come off.",
        "The coil itself is the reason for that line. Aluminium fins spaced a fraction of a millimetre apart bend under a fingertip, and a bent fin blocks airflow permanently. Behind them sit the fan motor and the electrical compartment, neither of which improves for being sprayed.",
        "Coil cleaning is a legitimate maintenance task. It is a technician's task, done with the right direction of flow, the right pressure, and the power isolated.",
      ],
    },
  ],
  steps: [
    {
      name: "Switch the system off first",
      text: "Stop the system at the controller and let the fan come to rest before going near the cabinet. Working around a unit that can start on its own is the avoidable part of this job.",
    },
    {
      name: "Lift debris away by hand",
      text: "Pick out leaves, seed heads, grass cuttings, and litter from around the base and the coil faces. Use gloved hands or a soft brush against the fin surface, never a pressure washer, a garden hose, or a stiff bristle.",
    },
    {
      name: "Clear beneath the unit",
      text: "Rake or lift material out from under the cabinet so condensate and defrost meltwater can drain away. A blocked base traps water that refreezes in winter and holds damp against the casing all year.",
    },
    {
      name: "Restore the clearances",
      text: "Cut back planting and move stored items to the distances your installation manual specifies for each face, including the discharge side and the overhead space. Where a fence or wall is inside the stated distance, that is a conversation with the installer.",
    },
    {
      name: "Look for what caused it",
      text: "Note what is dropping onto the unit through the year. A tree over the cabinet, a shed roof draining onto it, or a mower throwing cuttings at it will refill the space you have just cleared, and that is the thing worth fixing.",
    },
  ],
  decisionTable: {
    caption: "Owner or technician",
    columns: ["Task", "Who", "Why"],
    rows: [
      [
        "Lifting leaves and debris away by hand",
        "Owner",
        "Outside the cabinet, no tools, no contact with the fins",
      ],
      [
        "Cutting back planting to the stated clearance",
        "Owner",
        "Restores documented airflow without touching the equipment",
      ],
      [
        "Washing the coil",
        "Technician",
        "Needs isolation, the correct direction of flow, and controlled pressure",
      ],
      [
        "Straightening bent fins",
        "Technician",
        "A fin comb of the right spacing, and knowledge of what is behind them",
      ],
      [
        "Removing the top or side panel",
        "Technician",
        "Fan and electrical compartment; not an owner-accessible space",
      ],
      [
        "Moving or re-siting the unit",
        "Installer",
        "Pipework, drainage, electrical supply, and clearance design",
      ],
    ],
  },
  safeChecks: [
    "Switch the system off at the controller and let the fan stop before approaching the cabinet.",
    "Remove debris by gloved hand or soft brush only, never with water, pressure, or a stiff brush.",
    "Restore the clearance dimensions from your own installation manual, including overhead and discharge sides.",
  ],
  professionalEscalation: [
    "Leave coil washing, fin straightening, and panel removal to a technician.",
    "Call for service if the fins are visibly flattened over an area, or the coil is coated with matter that will not lift.",
    "Ask the installer about relocation where a wall, fence, or overhang sits inside the required clearance.",
  ],
  serviceHandoff:
    "Tell the technician how close the nearest obstruction is on each face, what falls on the unit through the year, whether the coil has been washed before, and whether capacity or icing changed after the surroundings changed.",
  faqs: [
    {
      question: "Can I hose down my outdoor unit?",
      answer:
        "Not as an owner task. Water at hose pressure bends fins, drives debris further into the coil, and reaches the fan motor and electrical compartment. Coil cleaning is done by a technician with the power isolated.",
    },
    {
      question: "How much space does an outdoor unit need?",
      answer:
        "The figure comes from your own installation manual, and it differs by face: inlet sides, discharge side, and overhead are separate requirements. A general number is not safe to apply to a specific cabinet.",
    },
    {
      question: "Does a dirty outdoor coil really matter?",
      answer:
        "It restricts the airflow the unit depends on to reject or collect heat, which shows up as longer running, reduced capacity, and in winter as ice that the defrost cycle struggles to clear.",
    },
    {
      question: "Can I plant shrubs around the outdoor unit?",
      answer:
        "Only outside the clearances the manual specifies, and allowing for growth. Planting that looks fine when installed can close the gap in two seasons and drop leaves into the coil every autumn.",
    },
  ],
  sourceIds: [
    "trane-ductless-maintenance",
    "trane-mini-split-not-heating",
    "fujitsu-troubleshooting",
  ],
  relatedContent: [
    "/how-to-prepare-mini-split-for-winter/",
    "/mini-split-outdoor-unit-not-running/",
    "/heat-pump-outdoor-unit-iced-over/",
    "/mini-split-lifespan/",
  ],
  glossaryTerms: ["condenser-coil", "defrost-cycle", "heat-pump"],
  keywords: [
    "clean around outdoor AC unit",
    "heat pump clearance requirements",
    "can I hose my condenser",
    "outdoor unit debris",
  ],
});
