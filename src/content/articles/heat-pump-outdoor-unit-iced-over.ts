import { publish } from "./publish";

/**
 * Outdoor frost in heating is expected; the question is whether it clears.
 * The page gives the reader a way to judge that over a cycle rather than a
 * snapshot, and separates snow and drainage problems from coil frost.
 */
export const heatPumpOutdoorUnitIcedOver = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "Heat pump iced over: defrost or a real fault?",
  slug: "heat-pump-outdoor-unit-iced-over",
  path: "/heat-pump-outdoor-unit-iced-over/",
  description:
    "Recognize normal frost and automatic defrost, safely restore outdoor airflow, and know when solid ice or repeated no-heat requires professional service.",
  articleType: "troubleshooting",
  equipmentType: "heat-pump",
  models: ["Cross-brand air source heat pumps; defrost intervals vary by model"],
  problemType: "outdoor-unit-iced-over",
  directAnswer:
    "Light frost in heating can be normal and should clear during automatic defrost; a coil encased in persistent ice, blocked by frozen drainage, or paired with no heat indicates a problem.",
  scopeNotice:
    "Frost on the outdoor coil during heating is normal behaviour for a heat pump and is not the same as ice on an indoor coil in cooling. Defrost intervals and the appearance of a normal cycle vary between models, so use the manual for your equipment to judge what is expected of it.",
  symptoms: [
    "The outdoor coil frosts, the outdoor fan pauses, steam appears, or indoor heating temporarily stops.",
  ],
  causes: [
    "Normal defrost periodically melts outdoor frost and can produce water or steam.",
    "Blocked airflow, snow or drainage buildup, fan or sensor faults, or refrigeration problems can prevent normal clearing.",
  ],
  diagnosticBranches: [
    {
      title: "A light white coating that disappears within the hour",
      observation:
        "The coil looks frosted rather than iced, and at some point the unit changes note, steams, and comes back with the coil clear.",
      action:
        "This is consistent with the documented defrost sequence. Note whether the frost clears and heating returns, and compare the timing with the exact operating manual.",
    },
    {
      title: "Solid ice that survives repeated defrost cycles",
      observation:
        "The coil is glazed rather than frosted, ice fills the fins or bridges across them, and it is still there after the unit has cycled several times.",
      action:
        "Arrange service and stop expecting it to recover. Ice that survives its own defrost cycle means either the cycle is not working properly or the system cannot clear what it is producing.",
    },
    {
      title: "Ice building upwards from the base of the unit",
      observation:
        "A mound of ice has formed underneath and is growing into the coil from below after repeated melting and refreezing in cold weather.",
      action:
        "This is a drainage problem rather than a coil problem. Defrost water is not getting away from the base and is freezing where it lands. Mention it specifically, because the fix involves how the unit is mounted and drained.",
    },
    {
      title: "The unit is buried in drifted snow",
      observation:
        "Snow has piled against or over the outdoor unit, covering the coil face or the fan discharge.",
      action:
        "Clear loose snow away from the unit by hand with the system off, keeping well clear of the coil surface and the fan. Restore the clearance the unit needs and let it run before judging anything else.",
    },
  ],
  comparisonTable: {
    caption: "Frost, ice, and snow are three different situations",
    columns: ["What it looks like", "What is happening", "What it needs"],
    rows: [
      [
        "Even white frost across the coil face",
        "Moisture freezing out of the air during normal heating",
        "Monitor whether documented defrost clears it and heating returns",
      ],
      [
        "Clear glazed ice filling the fin gaps",
        "More ice forming than the defrost cycle is removing",
        "Service, because the cycle or the refrigeration side is not keeping up",
      ],
      [
        "A mound of ice under and around the base",
        "Defrost meltwater freezing where it should have drained away",
        "Attention to drainage, mounting height, and where the water goes",
      ],
      [
        "Drifted snow against the casing",
        "Airflow blocked by weather rather than by a fault",
        "Clearing by hand and restoring the clearance around the unit",
      ],
    ],
  },
  sections: [
    {
      title: "Frost is part of how the machine works",
      paragraphs: [
        "When a heat pump heats your home, the outdoor coil is colder than the outside air, because that temperature difference is what lets it absorb heat. Any moisture in the air that touches a surface below freezing turns to frost. On a damp day just above freezing, which is the worst case, frost forms quickly.",
        "The equipment is designed for this and clears the coil periodically by warming it. So the presence of frost tells you almost nothing on its own. What tells you something is whether the coil is clear again a short while later, and that means watching over a cycle rather than reacting to a photograph.",
      ],
    },
    {
      title: "Watching one cycle properly",
      paragraphs: [
        "Observe from a safe distance through the defrost behaviour described in the model's operating manual. On documented systems the outdoor fan may stop, steam or water may appear, and heating may pause before returning. Record what happens rather than applying a generic time interval.",
        "If ice continues to build without the documented recovery, or a defrost event does not clear enough frost for normal operation to resume, report that sequence. A cycle that clears frost and restores heat supports normal defrost, but rapid recurrence still needs comparison with weather and the model manual.",
      ],
    },
    {
      title: "Clearing snow without causing a repair",
      paragraphs: [
        "Loose snow around the outdoor unit can be moved by hand or with a soft brush, and doing so restores the airflow the unit needs. Keep away from the coil face itself, which is soft aluminium that bends under fingertip pressure, and never put anything into the fan.",
        "The instinct to speed up thawing is where the real damage happens. Boiling water refreezes and can crack components, hot air guns melt plastic and stress the coil, and anything used as a chisel goes straight through the tubing. If the ice is beyond what the machine can clear itself, it needs a technician, not force.",
      ],
    },
  ],
  figures: [
    {
      title: "What a complete defrost cycle looks like from outside",
      description:
        "Recognising these stages is what separates a system clearing frost normally from one that cannot keep up with it.",
      nodes: [
        { label: "Frost forms", detail: "Moisture freezing on a coil below air temperature" },
        { label: "Fan stops", detail: "Outdoor fan halts as the cycle begins" },
        { label: "Steam and water", detail: "Melt running off the coil and away from the base" },
        { label: "Coil clear", detail: "Fins visible again and heating resumes" },
      ],
    },
  ],
  safeChecks: [
    "Keep the outdoor unit's required clearance free of loose snow, leaves, and movable objects without touching the coil.",
    "Observe whether the unit enters defrost and clears light frost within its normal operating cycle.",
  ],
  professionalEscalation: [
    "Call for service when solid ice persists, the fan is obstructed, heat does not return, or a fault code appears.",
    "Do not chip ice, pour boiling water, or bypass defrost controls.",
  ],
  serviceHandoff:
    "Describe whether the ice is light frost or solid glaze, the timing of each observed defrost cycle, whether ice is building up from the base, the outdoor temperature, and whether indoor heating still recovers between cycles.",
  faqs: [
    {
      question: "Should my heat pump be covered in frost in winter?",
      answer:
        "Some frost during heating is normal, because the outdoor coil runs colder than the outside air. What matters is whether the defrost cycle clears it. Frost that comes and goes is expected; ice that stays is not.",
    },
    {
      question: "Can I pour warm water over the ice?",
      answer:
        "Do not pour water on the coil or apply external heat unless the exact manufacturer procedure explicitly authorizes it. If documented defrost does not restore operation, the cause needs diagnosis rather than forced thawing.",
    },
    {
      question: "Why is ice building up underneath the unit?",
      answer:
        "That is defrost meltwater freezing where it lands instead of draining away. It points at mounting height, the base, or the drainage arrangement rather than at the coil, and it is worth reporting as its own symptom.",
    },
    {
      question: "Is it safe to run the heat pump while iced up?",
      answer:
        "Light frost is normal operation. A coil encased in ice is working against a blocked airflow path, and continuing to run it that way is hard on the system. If it does not clear through a couple of cycles, arrange service.",
    },
  ],
  sourceIds: ["fujitsu-troubleshooting", "fujitsu-aduh-operation", "trane-mini-split-not-heating"],
  relatedContent: [
    "/troubleshooting/",
    "/mini-split-not-heating/",
    "/mini-split-outdoor-unit-not-running/",
  ],
  keywords: [
    "heat pump iced over",
    "heat pump outdoor unit frozen",
    "heat pump defrost not working",
    "ice on heat pump in winter",
    "heat pump frost normal",
  ],
});
