import { publish } from "./publish";

/**
 * Two facts make this page worth writing. The lamp that lights for MIN HEAT is
 * the ECONOMY lamp, which is why owners think they pressed the wrong button;
 * and on a multi-type system a neighbouring head in normal heating overrides
 * what MIN HEAT was set up to do. Neither is obvious from the button.
 */
export const fujitsuMinHeatOperation = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Fujitsu MIN HEAT operation: what the 50 degree setting holds",
  slug: "min-heat-operation",
  path: "/brands/fujitsu/min-heat-operation/",
  description:
    "Fujitsu MIN HEAT maintains 50 degrees Fahrenheit to stop a room falling too far. What lights up, what it will not do, and how multi-type systems change it.",
  articleType: "guide",
  brand: "fujitsu",
  equipmentType: "ductless-mini-split",
  productFamily: "RLS2 compact wall mounted systems in operating manual 9319356075",
  models: ["AOU9RLS2", "AOU12RLS2", "AOU15RLS2"],
  problemType: "minimum-heat-setting",
  symptomFamily: "no-heating",
  directAnswer:
    "MIN HEAT holds the room at 50 degrees Fahrenheit, or 10 degrees Celsius, so it does not fall further. It is a floor, not a comfort setting, and the manual notes that heating will not run at all while the room is already warm enough.",
  scopeNotice:
    "The behaviour described here is documented in the Fujitsu General operating manual for the RLS2 compact wall mounted range. Other Fujitsu ranges label the same idea differently, and some markets print it as a 10 degree Celsius setting on the handset, so check the button legend and the manual that came with your indoor unit.",
  layout: ["comparisonTable", "figures", "sections"],
  symptoms: [
    "A room needs protecting from the cold while nobody is using it, and running normal heating there is wasteful.",
    "The MIN HEAT button was pressed and the light that came on says ECONOMY, which looks like the wrong function.",
    "MIN HEAT is set in one room of a multi-head system and that room is warmer than expected.",
  ],
  causes: [
    "MIN HEAT and ECONOMY share one indicator lamp on the documented indoor units, so the lamp does not identify which of the two is running.",
    "A multi-type system runs one mode for every connected head, so a head in normal heating raises the temperature in a room set to MIN HEAT.",
  ],
  comparisonTable: {
    caption: "MIN HEAT against the two settings it gets confused with",
    columns: ["Setting", "What the manual says it does", "What the indicator shows"],
    rows: [
      [
        "MIN HEAT",
        "Maintains the room at 50 degrees Fahrenheit so it does not fall too far",
        "ECONOMY lamp lights green",
      ],
      [
        "ECONOMY",
        "Runs the selected mode at reduced output, and on a multi-type system applies to the set indoor unit only",
        "ECONOMY lamp lights green",
      ],
      [
        "Heating at the lowest setpoint",
        "Normal heating with the setpoint at the bottom of the range the handset allows",
        "OPERATION lamp behaves as it does in any heating cycle",
      ],
    ],
  },
  figures: [
    {
      title: "What is available while MIN HEAT runs",
      description:
        "The manual restricts the handset while this mode is active. Knowing what still responds saves a reader concluding that the remote has failed.",
      nodes: [
        { label: "SET", detail: "Remains available while MIN HEAT is running" },
        { label: "Timer functions", detail: "Indicated alongside operation and economy" },
        { label: "START and STOP", detail: "Pressing STOP ends MIN HEAT and stops the unit" },
        { label: "Energy saving", detail: "Will not change the set temperature during MIN HEAT" },
      ],
    },
  ],
  sections: [
    {
      title: "A floor, not a temperature you live at",
      paragraphs: [
        "Fifty degrees Fahrenheit is well below the temperature anybody sets a room to occupy. The purpose is different. It keeps a space from falling far enough for the contents to suffer, in a room that is closed up, a holiday property between visits, or a garage conversion nobody uses in January. Fujitsu describes it as preventing the room temperature from falling too far, and that phrasing is exact.",
        "The manual also notes that heating mode will not operate if the room temperature is high enough. That is not a fault. A room sitting at 60 with MIN HEAT selected is above the floor, so there is nothing for the equipment to do, and it will do nothing until the room drops. A reader expecting warm air on demand from this mode has selected the wrong one.",
      ],
    },
    {
      title: "The lamp is shared, so it identifies nothing",
      paragraphs: [
        "On these indoor units the green ECONOMY indicator lights for ECONOMY operation and for MIN HEAT operation. One lamp, two functions. Someone who presses MIN HEAT and sees ECONOMY appear reasonably concludes they hit the wrong button, and someone checking a holiday property from the doorway cannot tell which of the two was left running.",
        "The way to establish which mode is active is the handset display rather than the lamp. That matters for a property left unattended, because ECONOMY at a summer cooling setpoint and MIN HEAT protect against completely different things while lighting the same indicator.",
      ],
    },
    {
      title: "On a multi-type system, one head does not decide",
      paragraphs: [
        "Fujitsu is direct about this. On a multi-type air conditioner, if another indoor unit is used for heating, the temperature of the room where MIN HEAT is applied will rise. The manufacturer recommendation that follows is to run all indoor units in MIN HEAT when the function is being used.",
        "The reason is the shared circuit. Heads on one outdoor unit run one mode between them, so a living room calling for normal heating puts the whole system into heating, and the head set to MIN HEAT is part of that system. The room protected at 50 does not stay at 50 while its neighbour is being warmed to 70.",
        "This makes MIN HEAT a whole-property setting rather than a per-room one on multi-head installations. Setting it in the spare bedroom alone and heating the rest of the house normally does not do what the button suggests.",
      ],
    },
    {
      title: "How energy saving interacts with it",
      paragraphs: [
        "The RLS2 range carries an occupancy-based energy saving program that adjusts the setpoint when nobody has entered a room for about twenty minutes. In cooling it raises the setting by up to about 4 degrees Fahrenheit, and in heating it lowers it by up to about 8.",
        "During MIN HEAT that adjustment does not happen. The manual states that if there is no one in the room the set temperature will not be changed while MIN HEAT is running. That is the sensible behaviour for a low-temperature floor, since a mode whose whole purpose is an empty room would defeat itself if an empty room lowered it further.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is MIN HEAT the same as frost protection?",
      answer:
        "It behaves as a low-temperature floor, holding the room at 50 degrees Fahrenheit so it does not fall further. Fujitsu describes the purpose rather than certifying it against any frost-protection standard, so treat it as what the manual says it is and not as a guarantee for pipework or stored goods.",
    },
    {
      question: "Why did the ECONOMY light come on when I pressed MIN HEAT?",
      answer:
        "Because the documented indoor units use one green ECONOMY indicator for both ECONOMY operation and MIN HEAT operation. The lamp confirms that one of the two is running and does not say which, so read the handset display to tell them apart.",
    },
    {
      question: "How do I turn MIN HEAT off?",
      answer:
        "Press the START and STOP button. The ECONOMY indicator goes out and operation stops, which is the documented way out of the mode rather than pressing the MIN HEAT button a second time.",
    },
    {
      question: "Can I set MIN HEAT in one room only?",
      answer:
        "You can, but on a multi-type system the result is not what the button implies. Fujitsu states that another indoor unit running heating will raise the temperature in the MIN HEAT room, and recommends running all indoor units in that mode when the function is used.",
    },
  ],
  sourceIds: ["fujitsu-rls2-operation", "fujitsu-troubleshooting"],
  relatedContent: [
    "/brands/fujitsu/",
    "/brands/fujitsu/rls2-operation-light-blinking/",
    "/heat-pump-operating-temperatures/",
    "/how-to-prepare-mini-split-for-winter/",
  ],
  glossaryTerms: ["heat-pump", "thermostat", "multi-zone-system"],
  keywords: [
    "fujitsu min heat operation",
    "fujitsu 10c heat mode",
    "fujitsu economy light meaning",
    "fujitsu rls2 minimum heat",
    "fujitsu frost setting mini split",
  ],
});
