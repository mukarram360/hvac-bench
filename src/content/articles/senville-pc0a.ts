import { publish } from "./publish";

/**
 * PC 0A is a heat rejection problem, so the reasoning is about what the
 * outdoor unit needs in order to dump heat and what the weather at the time
 * of the trip tells you.
 */
export const senvillePc0a = publish({
  title: "Senville PC 0A error code: condenser high-temperature protection",
  slug: "pc0a-error-code",
  path: "/brands/senville/pc0a-error-code/",
  description:
    "Why Senville PC 0A points at heat rejection, which outdoor clearances are safe to restore, and when repeated protection needs refrigeration diagnosis.",
  articleType: "error-code",
  brand: "senville",
  equipmentType: "ductless-mini-split",
  productFamily: "Senville LETO Series",
  models: ["Senville LETO Series models listed by official support"],
  errorCode: "PC 0A",
  problemType: "condenser-high-temperature-protection",
  directAnswer:
    "Senville's LETO reference identifies PC 0A as condenser high-temperature protection, a protective shutdown that calls for airflow inspection before deeper refrigeration or control diagnosis.",
  scopeNotice:
    "This entry comes from the Senville LETO series code reference. Protection thresholds are set for a specific outdoor design, so a code that looks similar on another Senville series or another brand needs its own documentation rather than this definition.",
  symptoms: [
    "The unit displays PC 0A and cooling or heating may stop while the outdoor section protects itself.",
  ],
  causes: [
    "Restricted outdoor airflow or a dirty condenser can contribute to elevated condenser temperature.",
    "A persistent condition may involve fan, sensor, refrigerant, installation, or control issues.",
  ],
  diagnosticBranches: [
    {
      title: "The protection appears on the hottest part of the day only",
      observation:
        "Cooling runs normally in the morning and evening, and the code appears during the afternoon peak or during a heatwave.",
      action:
        "Record the outdoor temperature at the time it trips. A system that only reaches its protection limit at the extreme of the season is behaving differently from one that trips in mild weather, and that difference guides where a technician looks.",
    },
    {
      title: "The outdoor unit is boxed in or obstructed",
      observation:
        "Fencing, decking, planting, stored items, or a recent extension has reduced the clear space around the outdoor unit, or debris has packed against it.",
      action:
        "With the system off, remove loose material and movable obstructions. If a permanent structure now sits close to the unit, report it to the technician, because installed clearance is a genuine cause rather than an excuse.",
    },
    {
      title: "The protection appears in mild weather",
      observation:
        "The code shows up on a day when heat rejection should be easy, with the outdoor unit clear.",
      action:
        "Leave the system off and arrange diagnosis. Reaching a condenser temperature limit when conditions are mild points inside the system rather than at the environment.",
    },
  ],
  decisionTable: {
    caption: "What the conditions at the time of the trip tell you",
    columns: ["Conditions when PC 0A appears", "What that suggests", "Reasonable next step"],
    rows: [
      [
        "Peak afternoon heat, unit clear and clean",
        "The system is at the edge of its capability in extreme conditions",
        "Record temperatures and run times, then have the charge and coil condition assessed",
      ],
      [
        "Any weather, with debris or obstruction present",
        "Heat rejection is being restricted by something you can see",
        "Clear loose material with the power off and watch whether the protection stops",
      ],
      [
        "Mild weather, unit clear and clean",
        "Something inside the system is limiting heat rejection",
        "Stop running it; refrigeration and controls diagnosis is required",
      ],
    ],
  },
  sections: [
    {
      title: "What the outdoor unit is trying to do",
      paragraphs: [
        "In cooling, the outdoor unit exists to get heat out of the refrigerant and into the outside air. Everything about that depends on air moving freely across the coil. Condenser temperature climbing to a protection threshold is the equipment reporting that heat is not leaving fast enough.",
        "The environment is part of the system, which is why clearance is not cosmetic. A unit tucked behind a new fence, screened by planting that has grown in, or sharing a narrow side passage with a wall is being asked to reject heat into air it has already heated. The manufacturer clearance figures exist to prevent exactly that.",
      ],
    },
    {
      title: "Where the homeowner boundary sits",
      paragraphs: [
        "Removing leaves, cut grass, cottonwood, and stacked objects from around the unit with the power off is reasonable and often effective. Rinsing loose surface debris from the outside of the casing is not the same thing as cleaning a coil, and it is worth being clear about the difference.",
        "A condenser coil that has been fouled over several seasons is cleaned with the correct chemistry, controlled water pressure, and the fins protected from damage. Pressure washing it is a common way to flatten fins and make heat rejection permanently worse, which turns an occasional protection trip into a standing problem. That job belongs with a technician.",
        "Clearance is also worth checking against the documentation rather than by eye. Units frequently look like they have plenty of room while sitting well inside the figures the manufacturer specifies, particularly where a fence, a wall, or planting has arrived since the installation and nobody thought to measure afterwards.",
      ],
    },
  ],
  figures: [
    {
      title: "The heat rejection path the protection guards",
      description:
        "Condenser temperature climbs when heat cannot leave fast enough. Each stage below has to work for the previous one to succeed.",
      nodes: [
        { label: "Refrigerant", detail: "Arrives carrying heat from indoors" },
        { label: "Condenser coil", detail: "Gives that heat up to passing air" },
        { label: "Airflow", detail: "Fan drawing outside air across the coil" },
        { label: "Surroundings", detail: "Space for warmed air to leave rather than recirculate" },
      ],
    },
  ],
  safeChecks: [
    "With the system off, remove loose leaves or objects blocking the outdoor unit's clear airflow area.",
    "Confirm the outdoor fan area is not visibly packed with debris without removing the grille or panels.",
  ],
  professionalEscalation: [
    "Coil deep-cleaning, fan diagnosis, refrigerant evaluation, sensor tests, and control checks require qualified service.",
    "Keep the system off if the outdoor unit is hot, damaged, or repeatedly enters protection.",
  ],
  serviceHandoff:
    "Report the outdoor temperature and time of day when the protection appears, how long the system runs beforehand, what clearance the outdoor unit has on each side, when the coil was last professionally cleaned, and whether the outdoor fan was turning at the moment it stopped.",
  resetGuidance:
    "Allow the unit to cool after clearing only external obstructions; repeated PC 0A should not be reset into continued operation.",
  faqs: [
    {
      question: "Can I hose down the outdoor coil?",
      answer:
        "Rinsing loose surface debris from the casing is different from cleaning a coil. Pressure washing flattens fins and permanently reduces heat rejection, which makes the protection more likely, not less. Coil cleaning is a technician job with the right chemistry and pressure.",
    },
    {
      question: "How much space does the outdoor unit need?",
      answer:
        "Use the clearance figures in the documentation for your model rather than a general rule. What matters is that air can reach the coil and leave without being drawn straight back in, which is why fences, planting, and narrow passages cause real problems.",
    },
    {
      question: "Is PC 0A dangerous?",
      answer:
        "The protection is the equipment stopping before damage occurs, so it is doing its job. Running the system repeatedly into that limit is what causes harm, particularly to the compressor. If the code returns, leave it off until it has been diagnosed.",
    },
    {
      question: "Could low refrigerant cause PC 0A?",
      answer:
        "Refrigerant condition is one of the things a technician assesses when the protection persists with clear airflow. It is not something to assume, and adding refrigerant without a diagnosis is how a small fault becomes an expensive one.",
    },
  ],
  sourceIds: ["senville-leto-codes"],
  relatedContent: [
    "/brands/senville/",
    "/mini-split-not-cooling/",
    "/mini-split-outdoor-unit-not-running/",
  ],
  keywords: [
    "senville pc 0a error code",
    "senville pc0a fault",
    "condenser high temperature protection",
    "senville leto pc0a",
    "senville outdoor unit protection",
  ],
});
