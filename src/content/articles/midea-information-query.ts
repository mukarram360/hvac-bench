import { publish } from "./publish";

/**
 * The value of this page is the encoding, not the button sequence. Anyone can
 * repeat six button presses; almost nobody can read "b2" off a mini-split
 * display and know it means 112 degrees. The conversion table is therefore the
 * centre of the page and the steps exist to get the reader to it.
 */
export const mideaInformationQuery = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Read live operating data from a Midea indoor display",
  slug: "information-query-mode",
  path: "/brands/midea/information-query-mode/",
  description:
    "Midea documents a query mode that shows coil, ambient, and discharge temperatures on the indoor display, with values above 99 encoded as letters.",
  articleType: "how-to",
  brand: "midea",
  equipmentType: "ductless-mini-split",
  productFamily: "Aurora Xtreme Inverter 36,000 BTU cooling-only 220 V",
  models: ["Aurora Xtreme Inverter 36,000 BTU cooling-only 220 V documented model"],
  problemType: "operating-data-readout",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Press LED three times and SWING three times within ten seconds. The indoor display then cycles through stored operating values, showing each code for two seconds and its value for twenty-five, with anything above 99 written as a letter and a digit.",
  scopeNotice:
    "The sequence, the value list, and the encoding below are documented for the Midea Aurora Xtreme Inverter 36,000 BTU cooling-only 220 V model. Midea sells many families and builds systems that carry other brand names, so check your own manual before assuming the same handset buttons open the same mode.",
  layout: ["steps", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "A technician has asked what the system is doing while it runs, and there is no wired controller to read.",
    "Cooling performance is being questioned and nobody has a measurement to argue from.",
    "The indoor display has shown a two-character value such as A6 or b2 and it does not look like an error code.",
  ],
  causes: [
    "Midea stores sensor and drive values behind a handset key sequence rather than printing them on the display during normal operation.",
    "The display carries two characters, so values of 100 and above are written with a leading letter instead of a third digit.",
  ],
  steps: [
    {
      name: "Check the handset has the two buttons",
      text: "The documented sequence uses the LED button and the SWING button. If your handset carries different labels, this sequence is not the one for your model and the manual supplied with the unit is the place to look.",
    },
    {
      name: "Press the sequence inside ten seconds",
      text: "Press LED three times, then press SWING three times. The whole sequence has to be completed within ten seconds, so press deliberately rather than pausing between the two groups.",
    },
    {
      name: "Wait for the confirmation",
      text: "The unit beeps for about two seconds when the mode has opened. No beep means the sequence timed out or the button presses were not registered, and the sequence can be started again from the beginning.",
    },
    {
      name: "Step through the values",
      text: "LED moves forward to the next code in the sequence and SWING moves back to the previous one. The display shows the code itself for two seconds and then the value for twenty-five seconds, so let each entry finish rather than pressing again while a code is on screen.",
    },
    {
      name: "Write down the pair, not the number",
      text: "Record the code and its value together, as T2 followed by its reading rather than a bare figure. A list of numbers with no codes against them is unusable once you have left the room.",
    },
    {
      name: "Convert anything with a letter",
      text: "Values from 100 upward are written as a letter and a digit. Convert them using the table below before you record them, and note the unit: temperatures are reported in degrees Celsius whatever the handset is set to display.",
    },
  ],
  decisionTable: {
    caption: "Reading a two-character value on the documented Midea display",
    columns: ["What the display shows", "What it represents", "Note"],
    rows: [
      ["-19 to -99", "The negative temperature as written", "Read directly, no conversion"],
      ["-1A to -1F", "Minus 20 down to minus 25", "A is 20, b is 21, c is 22, d is 23, E is 24, F is 25"],
      ["A0 to A9", "100 to 109", "The letter carries the hundreds and tens"],
      ["b0 to b9", "110 to 119", "Continues the same pattern upward"],
      ["c0 to c9, d0 to d9", "120 to 129, 130 to 139", "Discharge temperature reaches this band in normal running"],
      ["E0 to E9, F0 to F9", "140 to 149, 150 to 159", "Frequency values run to 159 hertz"],
    ],
  },
  figures: [
    {
      title: "What the query mode will show you",
      description:
        "The documented list covers the refrigeration circuit end to end, plus the two drive values that say how hard the system is working. Grouping them this way makes it obvious which readings belong together when you write them down.",
      nodes: [
        { label: "T1, T4", detail: "Room air and outdoor air temperature" },
        { label: "T2, Tb, T3", detail: "Indoor coil, indoor coil outlet, outdoor coil" },
        { label: "TP, TH", detail: "Compressor discharge and suction temperature" },
        { label: "FT, Fr", detail: "Target frequency and actual frequency" },
        { label: "IF, OF, LA", detail: "Indoor fan, outdoor fan, expansion valve opening" },
        { label: "CT, ST", detail: "Compressor run minutes and the stop cause code" },
      ],
    },
  ],
  sections: [
    {
      title: "The ranges the display can show, and what happens outside them",
      paragraphs: [
        "T1, T2, T3, T4, and the coil outlet reading are documented over a range of minus 25 to 70 degrees Celsius. Discharge temperature runs from minus 20 to 130. Frequency runs from zero to 159 hertz. Those ceilings and floors matter, because the manual states that a real value beyond the range is displayed as the nearest limit rather than as itself.",
        "So a discharge reading sitting exactly at 130 is not a measurement of 130. It is the display saying the true value is at or above the top of what it can print. Treat a value pinned to a limit as a flag rather than as a number, and say so when you pass it on.",
        "The outdoor fan and valve readings need arithmetic rather than a lookup. Outdoor fan speed is shown as a hexadecimal value which is converted to decimal and multiplied by ten to give revolutions per minute, covering roughly 200 to 2550. The expansion valve angle is converted to decimal and multiplied by two. Compressor continuous run time runs from zero to 255 minutes.",
      ],
    },
    {
      title: "What this is worth to an owner",
      paragraphs: [
        "It converts an argument into evidence. A complaint that a room is not getting cold enough gives a technician nothing to work with. The same complaint carrying T1, T2, Fr, and CT read off the display while the room was uncomfortable gives them the coil temperature, the room temperature, the speed the compressor was holding, and how long it had been holding it. Those numbers survive the visit, because they were captured while the fault was present.",
        "Values read on a good day have a second use as a baseline. If you record the set once while the system is behaving, the same six readings taken during a complaint tell you what changed, and that comparison is worth more than either set on its own.",
      ],
    },
    {
      title: "Where reading stops and diagnosis starts",
      paragraphs: [
        "Every step above is a handset press and a display reading, so nothing here asks an owner near an electrical part. Interpreting the numbers is a different job. The relationship between coil temperature, suction temperature, and valve opening is a refrigeration judgement, and it depends on ambient conditions, the mode running, and how long the system has been at that condition.",
        "The stop cause code deserves its own caution. The manual lists ST as a value from zero to 99 and directs the reader to manufacturer technical support for what any given number means. A stop cause read from the display is therefore a fact to hand over rather than a conclusion to draw.",
      ],
    },
  ],
  safeChecks: [
    "Use only the handset to enter and leave the query mode; nothing on this page requires a panel to be opened.",
    "Let the system run in a steady state for several minutes before recording values, and note the mode and the setpoint alongside them.",
    "Photograph the display for each reading rather than relying on memory, since each value holds for twenty-five seconds.",
  ],
  professionalEscalation: [
    "Interpreting suction, discharge, and expansion valve readings against ambient conditions is refrigeration diagnosis and belongs with a qualified technician.",
    "The compressor stop cause value is directed to manufacturer technical support in the documentation, so pass the number on rather than acting on it.",
  ],
  serviceHandoff:
    "Send the technician the code and value pairs, the mode and setpoint the system was running, the outdoor conditions at the time, and how long the compressor had been running. Readings without those four qualifiers cannot be compared against anything.",
  faqs: [
    {
      question: "What does b2 mean on a Midea display?",
      answer:
        "In query mode it is 112. The display holds two characters, so values of 100 and above are written with a leading letter carrying the hundreds and tens. A is the 100s band, b the 110s, c the 120s, d the 130s, E the 140s, and F the 150s.",
    },
    {
      question: "Are the temperatures in Celsius or Fahrenheit?",
      answer:
        "Celsius. The manual states that all temperatures in this mode are shown in degrees Celsius regardless of what the remote controller is set to display, so a reading of 27 while the handset shows Fahrenheit is still 27 degrees Celsius.",
    },
    {
      question: "How do I leave the query mode?",
      answer:
        "Stop cycling and let the display return to normal operation. The mode reports values and changes nothing about how the system runs, so there is no setting left behind to undo.",
    },
    {
      question: "Will this sequence work on any Midea unit?",
      answer:
        "It is documented for the Aurora Xtreme Inverter model named above. Midea publishes different literature by family and supplies equipment sold under other brand names, so confirm against the manual for your own indoor and outdoor pair before relying on it.",
    },
  ],
  sourceIds: ["midea-aurora-service", "midea-us-support"],
  relatedContent: [
    "/brands/midea/",
    "/brands/midea/e1-error-code/",
    "/how-to-document-hvac-fault-for-service/",
    "/how-to-read-hvac-data-plate/",
  ],
  glossaryTerms: ["thermistor", "inverter-compressor", "expansion-valve"],
  keywords: [
    "midea information query mode",
    "midea mini split display codes t1 t2",
    "midea check operating temperature",
    "midea led swing button sequence",
    "midea discharge temperature reading",
  ],
});
