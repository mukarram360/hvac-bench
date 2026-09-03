import { publish } from "./publish";

/**
 * High pressure protection is the one code on this equipment where the owner
 * genuinely holds part of the answer, because the conditions that raise head
 * pressure are mostly about airflow and obstruction rather than about the
 * refrigerant circuit. The page is arranged around that division.
 */
export const blueridgeBmkhE1 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Blueridge BMKH E1: compressor high pressure protection",
  slug: "bmkh-e1-error-code",
  path: "/brands/blueridge/bmkh-e1-error-code/",
  description:
    "E1 on a documented Blueridge floor-ceiling unit is high pressure protection. What raises head pressure, what you can look at, and where the checking stops.",
  articleType: "error-code",
  brand: "blueridge",
  equipmentType: "ductless-mini-split",
  productFamily: "BMKH floor-ceiling indoor units",
  models: ["BMKH floor-ceiling units covered by the December 2023 manual"],
  errorCode: "E1",
  problemType: "high-pressure-protection",
  symptomFamily: "protection-shutdown",
  directAnswer:
    "Blueridge assigns E1 on this range to compressor high pressure protection. The control has stopped the compressor because pressure on the high side reached a limit, which is a protective action rather than a component failure.",
  scopeNotice:
    "This meaning comes from the code table in the Blueridge BMKH floor-ceiling manual dated December 2023. Blueridge publishes different tables for its other indoor styles, and E1 on another manufacturer's ductless equipment routinely means something unrelated, so match the model plate before using this page.",
  layout: ["branches", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The unit runs for a while, then stops with E1 on the display, and the pattern repeats.",
    "E1 appears in cooling on hot days and not at other times.",
    "E1 appears in heating during cold weather and clears when the weather changes.",
  ],
  causes: [
    "The high side of the refrigerant circuit reached the pressure at which the control stops the compressor.",
    "Heat rejection from the condensing side has been restricted, which raises pressure without anything having failed.",
  ],
  diagnosticBranches: [
    {
      title: "E1 appears in cooling on the hottest days",
      observation:
        "The code shows up during afternoon heat and the system runs normally in milder weather.",
      action:
        "Look at the outdoor unit. Heat rejection in cooling happens at the outdoor coil, so restricted airflow through it, a coil surface loaded with debris, or a unit boxed in by planting or stored items all push pressure up. Clearing space and clearing the coil surface are within reach.",
    },
    {
      title: "E1 appears in heating during cold weather",
      observation:
        "The code shows in heating mode and the indoor unit is the one working hardest.",
      action:
        "In heating the indoor coil is the condensing side, so the restriction to look for is indoors. Blocked return airflow, a loaded filter, furniture in front of the unit, or an indoor fan running at a low setting all reduce how fast heat leaves the coil.",
    },
    {
      title: "E1 appears regardless of weather or mode",
      observation:
        "The code arrives in mild conditions, in both modes, or immediately on starting.",
      action:
        "Stop here and arrange service. High pressure that appears without a heat rejection explanation points at the refrigerant circuit, the charge, or the switch itself, and none of those can be established without gauges on a system that has been isolated correctly.",
    },
  ],
  figures: [
    {
      title: "Which coil is the condenser depends on the mode",
      description:
        "High pressure builds where heat is being rejected, and that is not always outside. Working out which end of the system is the condenser at the moment the code appears is what makes the check list short instead of long.",
      nodes: [
        { label: "Cooling mode", detail: "Outdoor coil rejects heat, so pressure builds there" },
        { label: "Heating mode", detail: "Indoor coil rejects heat, so the restriction is indoors" },
        { label: "Airflow across that coil", detail: "The main variable an owner can influence" },
        { label: "High pressure switch", detail: "Stops the compressor when the limit is reached" },
      ],
    },
  ],
  decisionTable: {
    caption: "E1 against the codes it sits next to on the same table",
    columns: ["Code", "What Blueridge assigns it to", "How it differs from E1"],
    rows: [
      [
        "E1",
        "Compressor high pressure protection",
        "The reference point for this page",
      ],
      [
        "E3",
        "Compressor low pressure protection, refrigerant lack protection, and refrigerant collecting mode",
        "The opposite end of the circuit, and it includes a deliberate service mode",
      ],
      [
        "E4",
        "Compressor high discharge temperature protection",
        "A temperature limit at the compressor rather than a pressure limit",
      ],
      [
        "E2",
        "Indoor anti-freeze protection",
        "A cold indoor coil in cooling, which is the low side rather than the high side",
      ],
      [
        "E8",
        "Anti-high temperature protection",
        "Listed separately from both the pressure and the discharge protections",
      ],
    ],
  },
  sections: [
    {
      title: "A protection is the system defending itself",
      paragraphs: [
        "It helps to read E1 as an action rather than a failure. Something raised pressure on the high side of the circuit, and the control stopped the compressor before that pressure did any damage. The stop is the equipment working correctly. The question worth asking is what raised the pressure.",
        "That distinction changes what a reasonable response looks like. Repeatedly restarting a system that keeps reaching a protection limit is asking it to approach the same limit again, and the protection exists because approaching it is not good for the compressor.",
      ],
    },
    {
      title: "Why the mode decides where to look",
      paragraphs: [
        "A heat pump reverses. In cooling the outdoor coil is the condenser and rejects heat to outside air; in heating the indoor coil is the condenser and rejects heat into the room. High pressure builds on whichever coil is doing that job, so the same code sends you to opposite ends of the house depending on which mode it appeared in.",
        "This is why the first useful thing to record is not the code but the mode. A household that reports E1 without saying whether they were heating or cooling has given a technician half the information, and the half they kept back is the half that shortens the visit.",
        "Outdoor restrictions tend to be visible ones: growth against the cabinet, stored items, a coil face packed with seed or leaf litter, or a fence added since installation. Indoor restrictions are visible too, in the form of a loaded filter, furniture across the return, or a fan speed setting somebody dropped for quietness and forgot about.",
      ],
    },
    {
      title: "Where the reading stops",
      paragraphs: [
        "You can look at airflow. You cannot look at pressure. Establishing what the high side actually reached needs gauges on service ports, which requires certification and equipment, and connecting anything to a sealed circuit is not an owner task under any circumstance.",
        "So the honest division on E1 is this: clear what restricts heat rejection, note whether the code still appears, and hand over the mode, the weather, and what you cleared. If a clear coil and a clear return in the right mode still produce E1, the answer is inside the circuit and belongs with somebody who can measure it.",
      ],
    },
  ],
  safeChecks: [
    "Record whether the code appeared in cooling or in heating, and the outdoor conditions at the time.",
    "Clear stored items, planting, and debris away from the outdoor cabinet so air can reach and leave the coil.",
    "Check the indoor filter and the space in front of the unit, and confirm the fan is not left on its lowest setting.",
  ],
  professionalEscalation: [
    "Pressure measurement requires gauges on service ports and belongs to a certified technician.",
    "Do not restart repeatedly against a protection code, because each attempt drives the system back toward the limit that stopped it.",
  ],
  serviceHandoff:
    "Tell the technician the mode the system was in, the outdoor temperature, how long it ran before stopping, whether it repeats, and what obstructions you cleared. Those five answers decide whether the visit starts at the coil or at the gauges.",
  resetGuidance:
    "Clearing a restriction and trying again is a legitimate test and worth doing once. Cycling the supply to clear the display without changing anything else repeats the condition rather than resolving it.",
  faqs: [
    {
      question: "Is E1 a refrigerant leak?",
      answer:
        "No. Blueridge lists low pressure and refrigerant lack protection separately as E3 on the same table. E1 is the high pressure end, which is what happens when heat cannot leave the condensing coil quickly enough.",
    },
    {
      question: "Why does E1 only happen on hot days?",
      answer:
        "In cooling the outdoor coil rejects heat to outdoor air, and a smaller temperature difference on a hot day means heat leaves more slowly and pressure runs higher. A restriction that is tolerable in mild weather can reach the limit in the afternoon.",
    },
    {
      question: "Can a dirty filter cause a high pressure code?",
      answer:
        "In heating it can contribute, because the indoor coil is the condenser then and airflow across it is what carries heat away. In cooling, a loaded filter restricts airflow across the cold indoor coil and can present as frost or freezing there.",
    },
    {
      question: "Should I keep restarting the unit?",
      answer:
        "No. A protection code means the control stopped the compressor at a limit. Restarting without changing anything sends it back toward that limit, which is the condition the protection exists to prevent.",
    },
  ],
  sourceIds: ["blueridge-bmkh-floor-manual", "blueridge-bmkh-docs"],
  relatedContent: [
    "/brands/blueridge/",
    "/brands/blueridge/bmkh-floor-ceiling-filter-cleaning/",
    "/how-to-clean-around-outdoor-unit/",
    "/mini-split-not-cooling/",
  ],
  glossaryTerms: ["protection-code", "condenser-coil", "compressor"],
  keywords: [
    "blueridge e1 error code",
    "blueridge bmkh high pressure",
    "blueridge mini split e1",
    "bmkh floor ceiling error code",
    "blueridge compressor protection",
  ],
});
