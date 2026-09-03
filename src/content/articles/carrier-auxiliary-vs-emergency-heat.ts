import { publish } from "./publish";

/**
 * The two settings sound like the same thing and do the opposite. Auxiliary
 * heat adds to the heat pump; emergency heat replaces it. A page that only
 * defines them is not much use, so this one is organised around the decision:
 * when the switch is right, and what it costs when it is not.
 */
export const carrierAuxiliaryVsEmergencyHeat = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Carrier heat pumps: auxiliary heat against emergency heat",
  slug: "auxiliary-versus-emergency-heat",
  path: "/brands/carrier/auxiliary-versus-emergency-heat/",
  description:
    "Auxiliary heat runs automatically alongside the heat pump. Emergency heat is a switch you throw that turns the heat pump off. Only one of them is a decision.",
  articleType: "guide",
  brand: "carrier",
  equipmentType: "heat-pump",
  productFamily: "Carrier residential heat pump systems with backup heat",
  models: ["Carrier residential heat pump systems with electric backup heat and a compatible thermostat"],
  problemType: "backup-heat-selection",
  symptomFamily: "no-heating",
  directAnswer:
    "Auxiliary heat is automatic and works alongside the heat pump when the heat pump alone cannot keep up. Emergency heat is selected by hand. It shuts the heat pump off entirely and runs on the backup source only.",
  scopeNotice:
    "This describes Carrier residential heat pump systems with a backup heat source and a thermostat that offers both settings. Systems without backup heat have neither, and how a particular thermostat labels and stages them belongs to the documentation for that control and that installation.",
  layout: ["comparisonTable", "figures", "sections"],
  symptoms: [
    "The thermostat is showing auxiliary heat and somebody wants to know whether that is a fault.",
    "A cold snap has arrived and the emergency heat setting looks like the sensible response.",
    "A heating bill has jumped and emergency heat was switched on at some point during the period.",
  ],
  causes: [
    "Carrier describes auxiliary heat as running automatically alongside the heat pump to boost heating in cold weather.",
    "Carrier describes emergency heat as a manual selection that shuts the heat pump off and uses only the backup source.",
  ],
  comparisonTable: {
    caption: "The two settings, side by side",
    columns: ["Question", "Auxiliary heat", "Emergency heat"],
    rows: [
      ["Who decides", "The system, automatically", "You, by selecting it at the thermostat"],
      ["What the heat pump does", "Keeps running and keeps contributing", "Stops entirely"],
      ["When it is right", "Whenever the control calls for it in cold weather", "When the heat pump has actually broken down"],
      ["What it costs", "The additional backup running alongside the heat pump", "Everything the heat pump would have contributed"],
      ["During defrost", "Turns on to keep supply air warm through the cycle", "Not applicable, since the heat pump is off"],
    ],
  },
  figures: [
    {
      title: "What the emergency heat switch actually disconnects",
      description:
        "It is easy to read the setting as extra heat. What it does is remove the most efficient source in the system and leave the least efficient one carrying the whole load.",
      nodes: [
        { label: "Heat pump", detail: "Moves heat rather than making it, and is switched out" },
        { label: "Backup heat", detail: "Electric resistance where fitted, and now carries everything" },
        { label: "The thermostat", detail: "Where the manual selection is made and left" },
        { label: "The bill", detail: "Reflects which of the two was doing the work" },
      ],
    },
  ],
  sections: [
    {
      title: "Auxiliary heat is not a warning light",
      paragraphs: [
        "Seeing auxiliary heat on the thermostat in cold weather can be normal system operation. Carrier describes it as automatic, running alongside the heat pump to boost heating power when the heat pump needs support. The label alone does not establish a fault or call for intervention.",
        "It also appears during a defrost cycle. When the outdoor coil frosts over, the system reverses to melt the ice, and the backup heat comes on to keep the air arriving in the house warm while that happens. That is a short, expected event, not a symptom.",
        "What is worth watching is the pattern rather than the appearance. Auxiliary heat running through a genuinely cold spell is expected. Auxiliary heat running in mild weather, or running for long stretches when it did not used to, is a change worth investigating, because something has reduced what the heat pump is contributing.",
      ],
    },
    {
      title: "Emergency heat is for a heat pump that has stopped working",
      paragraphs: [
        "Carrier's guidance is direct: emergency heat is for when the heat pump has physically broken down or malfunctioned, and it gives heavy snow or ice that will not melt as an example. It is a way to keep the house warm while a repair is arranged, not a cold weather setting.",
        "Using it while the heat pump is working takes the efficient half of the system out of service and leaves electric resistance heating carrying the whole load. Carrier is blunt about the consequence, describing it as an efficiency killer that raises energy bills.",
        "The trap is that it works. The house gets warm, nothing complains, and the setting can stay selected for weeks without anybody noticing until a bill arrives. If somebody switched it on during a cold snap, switching it back is the first thing to check when the weather turns.",
      ],
    },
    {
      title: "When auxiliary heat running a lot is telling you something",
      paragraphs: [
        "How much backup a system needs depends on the equipment. Carrier notes that system type and efficiency affect the need for auxiliary heat in cold weather. Its higher-end variable-speed heat pumps can remain effective at lower outdoor temperatures without leaning on backup.",
        "So a comparison against a neighbour's system says little. A comparison against the same system last winter says a great deal. If backup is running in conditions where it did not before, the heat pump's contribution has fallen, and airflow, the outdoor coil, defrost behaviour, and charge are the things a technician will look at.",
        "The measurement that makes this concrete is runtime rather than impression. A thermostat that reports how long auxiliary heat ran gives you a number to compare season to season, which is worth more than remembering whether it seemed to be on a lot.",
      ],
    },
  ],
  faqs: [
    {
      question: "Should I switch to emergency heat when it gets cold?",
      answer:
        "No. Carrier describes emergency heat as the setting for a heat pump that has physically broken down or malfunctioned. Cold weather on its own is what auxiliary heat exists for, and that comes on automatically without anybody selecting anything.",
    },
    {
      question: "Is auxiliary heat a sign of a problem?",
      answer:
        "Not by itself. It runs automatically alongside the heat pump in cold weather and during defrost cycles. A change in the pattern, such as backup running in mild weather or for far longer than in previous seasons, is what is worth investigating.",
    },
    {
      question: "Why does backup heat come on during defrost?",
      answer:
        "Because the system has reversed to melt ice off the outdoor coil, which means it is briefly not heating the house. Carrier describes the auxiliary heat turning on to keep the air blowing into your home warm during that short cycle.",
    },
    {
      question: "How much does emergency heat cost to run?",
      answer:
        "More than the heat pump, because it removes the heat pump from the equation and leaves the backup source carrying the full load. Where that source is electric resistance, Carrier describes using the setting unnecessarily as leading to higher energy bills.",
    },
  ],
  sourceIds: ["carrier-auxiliary-heat", "carrier-heat-pump-not-heating"],
  relatedContent: [
    "/brands/carrier/",
    "/brands/carrier/ductless-maintenance-owner-vs-technician/",
    "/how-heat-pump-defrost-works/",
    "/heat-pump-vs-furnace/",
    "/brands/carrier/infinity-code-16-with-53-55-47/",
  ],
  glossaryTerms: ["auxiliary-heat", "balance-point", "defrost-cycle"],
  keywords: [
    "carrier auxiliary heat meaning",
    "carrier emergency heat when to use",
    "heat pump aux heat vs em heat",
    "carrier thermostat emergency heat cost",
    "why is aux heat on carrier",
  ],
});
