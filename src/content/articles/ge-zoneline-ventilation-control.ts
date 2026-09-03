import { publish } from "./publish";

/**
 * A lever nobody knows exists, behind a cover nobody opens, with two shipping
 * screws that have to come out before it can move at all. The page is written
 * for the reader wondering why a room is hard to condition, because a vent
 * door left open is one of the few explanations they can act on themselves.
 */
export const geZonelineVentilationControl = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "GE Zoneline ventilation control: the lever behind the room cover",
  slug: "zoneline-ventilation-control",
  path: "/brands/ge-appliances/zoneline-ventilation-control/",
  description:
    "The Zoneline vent door lets outdoor air into the room, and GE says to keep it closed. Two shipping screws must also come out of the door before first use.",
  articleType: "maintenance",
  brand: "ge-appliances",
  equipmentType: "light-commercial",
  productFamily: "Zoneline packaged terminal units with a ventilation control",
  models: ["Zoneline AZHS Series", "Zoneline units covered by the cited owner manual with a vent door"],
  problemType: "ventilation-damper-setting",
  symptomFamily: "running-cost",
  directAnswer:
    "The lever sits at the lower left of the unit behind the room cover, held by a wing nut. Closed, only room air is circulated and filtered. Open, some outdoor air is drawn in, and GE states this reduces heating or cooling efficiency.",
  scopeNotice:
    "This describes the ventilation control on Zoneline packaged terminal units covered by the cited owner manual. Makeup Air models work differently, providing continuous outdoor air through the vent door by design, and a unit without a vent door has no lever to set.",
  layout: ["steps", "decisionTable", "sections", "serviceHandoff"],
  symptoms: [
    "A room takes longer to reach temperature than an identical room next door.",
    "Running costs for one room are higher than the others with the same occupancy.",
    "A newly installed unit is not performing and nobody has been behind the room cover.",
  ],
  causes: [
    "The ventilation lever can be left in an open position, which draws outdoor air into the room and reduces heating or cooling efficiency.",
    "Two shipping screws hold the vent door and must be removed before use, so a unit can also be left with the door fixed in whatever position it shipped in.",
  ],
  steps: [
    {
      name: "Confirm the unit actually has a vent door",
      text: "Not every Zoneline configuration carries one, and Makeup Air models use theirs deliberately to provide continuous outdoor air. Check what you have before deciding what the right setting is.",
    },
    {
      name: "Check the shipping screws have been removed",
      text: "GE notes that two shipping screws must be removed from the vent door before use, and points to the installation instructions in the back of the manual. A unit commissioned without that step has a vent door that cannot move.",
    },
    {
      name: "Find the lever behind the room cover",
      text: "The ventilation control lever is at the lower left side of the unit, behind the room cover. Its position is adjusted with a wing nut, so it is set by hand rather than by a control on the front panel.",
    },
    {
      name: "Decide the setting for the room, not for the building",
      text: "GE's energy tip is to keep the vent control closed to prevent unconditioned air entering the room. Where a room needs outdoor air for another reason, that is a decision to make deliberately and record, not one to leave to whoever last had the cover off.",
    },
    {
      name: "Record what you set and why",
      text: "In a building with many units, a lever behind a cover is invisible to the next person. Writing the setting on the service record is what stops a room being investigated for poor performance twice.",
    },
  ],
  decisionTable: {
    caption: "What the lever position changes",
    columns: ["Position", "What GE says happens", "What it costs"],
    rows: [
      [
        "Closed",
        "Only the air inside the room is circulated and filtered",
        "Nothing, and this is the position GE's energy tip recommends",
      ],
      [
        "Open",
        "Some outdoor air is drawn into the room",
        "Reduced heating or cooling efficiency, in GE's own words",
      ],
      [
        "Shipping screws still fitted",
        "The vent door has not been freed for use",
        "The setting is whatever it shipped as, whichever way the lever is moved",
      ],
      [
        "Makeup Air model",
        "Continuous outdoor air is provided through the vent door by design",
        "A different product arrangement, not a setting left wrong",
      ],
    ],
  },
  sections: [
    {
      title: "Why an open vent door is expensive",
      paragraphs: [
        "Everything that comes through an open vent door arrives at outdoor conditions and has to be brought to room conditions by the same equipment that is already conditioning the room. In summer that means sensible heat and moisture; in winter it means air at the outdoor temperature.",
        "GE puts it plainly in the manual: an open position reduces the heating or cooling efficiency, and the energy tip is to keep the control closed to prevent unconditioned air entering the room. That is the manufacturer's own recommendation rather than a general efficiency argument.",
        "The practical shape of the problem in a hotel, a care home, or an apartment building is that nobody notices. A room takes longer to recover, the unit runs more, and the occupant assumes the equipment is tired rather than that a lever behind a panel is open.",
      ],
    },
    {
      title: "The shipping screws are a commissioning step people miss",
      paragraphs: [
        "GE's note is short and consequential: two shipping screws must be removed from the vent door before use, and the installation instructions in the back of the manual show where. They exist so the door does not rattle in transit.",
        "Left in, they fix the door. A lever that appears to move without changing anything, or a vent that is stuck open on a unit somebody has already tried to close, is worth checking against that note before anybody concludes the damper is broken.",
        "This is also why the question is worth asking on a unit that has never performed well since installation. A commissioning step missed at the start produces a permanent condition that looks like an equipment problem.",
      ],
    },
    {
      title: "Where fresh air should come from instead",
      paragraphs: [
        "A room does need outdoor air, and the vent door is one way to provide it. Whether it is the right way is a ventilation design question that depends on the building, the occupancy, and what other provision exists, and it is not answered by the setting of one lever.",
        "GE offers a different product for the case where continuous outdoor air is wanted. Makeup Air models are described as designed to provide continuous outdoor air through the vent door and into the room, with dehumidification above a stated indoor humidity. That is a specified arrangement rather than an ordinary unit left open.",
        "So the honest position for a reader is this. Closed is the manufacturer's recommendation for an ordinary unit. If a room needs outdoor air, that should be designed rather than improvised at a wing nut.",
      ],
    },
  ],
  safeChecks: [
    "Establish whether the unit is a standard model or a Makeup Air model before changing any setting.",
    "Confirm from the installation instructions whether the two shipping screws were removed at commissioning.",
    "Record the lever position you found and the position you left it in, on the unit's service record.",
  ],
  professionalEscalation: [
    "Removing the room cover exposes the chassis and its electrical connections, so this is a maintenance task for the person responsible for the equipment rather than a guest or a resident.",
    "A vent door that will not move with the shipping screws removed needs a technician rather than force at the lever.",
  ],
  serviceHandoff:
    "If a room underperforms with the vent closed and the filter clean, hand over the lever position you found, whether the shipping screws were present, and how the room compares with an identical one on the same exposure. That comparison is what separates a setting from a capacity problem.",
  faqs: [
    {
      question: "Should the Zoneline vent be open or closed?",
      answer:
        "GE's energy tip is to keep it closed, to prevent unconditioned air entering the room. Open, some outdoor air is drawn in and the manual states this reduces heating or cooling efficiency.",
    },
    {
      question: "Where is the ventilation lever?",
      answer:
        "At the lower left side of the Zoneline unit, behind the room cover, with its position adjusted by a wing nut. It is not a control on the front panel and it is not visible with the cover in place.",
    },
    {
      question: "What are the shipping screws for?",
      answer:
        "They secure the vent door in transit. GE notes that two of them must be removed from the vent door before use, with the location shown in the installation instructions at the back of the manual.",
    },
    {
      question: "What is a Makeup Air model?",
      answer:
        "A different configuration, designed to provide continuous outdoor air through the vent door into the room, with dehumidification when indoor humidity is above a stated level. It is a specified ventilation arrangement rather than a standard unit left open.",
    },
  ],
  sourceIds: ["ge-zoneline-azhs-owner", "ge-zoneline-support"],
  relatedContent: [
    "/brands/ge-appliances/",
    "/brands/ge-appliances/zoneline-azhs-filter-cleaning/",
    "/mini-split-not-cooling/",
    "/how-to-read-hvac-data-plate/",
  ],
  glossaryTerms: ["return-air", "air-filter", "ptac-unit"],
  keywords: [
    "ge zoneline vent control",
    "zoneline ventilation lever",
    "ptac fresh air vent open or closed",
    "zoneline shipping screws vent door",
    "ge zoneline makeup air",
  ],
});
