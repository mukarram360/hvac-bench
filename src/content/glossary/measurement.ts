import type { GlossaryTermInput } from "../schema";

/**
 * Units of capacity and the readings taken in the field.
 *
 * The site serves readers on both sides of the Atlantic, so these entries
 * carry both conventions rather than converting one into the other and
 * hoping the reader notices.
 */
export const measurement = [
  {
    term: "BTU",
    slug: "btu",
    question: "What is a BTU?",
    definition:
      "The British thermal unit, the heat needed to raise one pound of water by one degree Fahrenheit. Equipment capacity is quoted in BTU per hour in North America, while the same figure appears in kilowatts in the United Kingdom and Europe.",
    category: "measurement",
    aliases: ["BTU/h", "British thermal unit"],
    related: ["ton-of-refrigeration", "seer"],
    seeAlso: { label: "Why floor area is the weakest input", path: "/btu-sizing-explained/" },
    shortAnswer:
      "A BTU is the heat needed to raise one pound of water by one degree Fahrenheit. Equipment capacity is quoted in BTU per hour, which is a rate rather than a quantity.",
    metaTitle: "BTU: the unit of capacity",
    metaDescription:
      "What a BTU is, why capacity is quoted in BTU per hour rather than BTU, how it converts to kilowatts and tons, and where each unit is used.",
    keywords: ["what is a BTU", "BTU per hour", "BTU to kW", "how many BTU do I need"],
    facts: [
      { label: "Defines", value: "Heat to raise one pound of water by one degree Fahrenheit" },
      { label: "Capacity is quoted in", value: "BTU per hour, a rate" },
      { label: "Used in", value: "North America" },
      { label: "European equivalent", value: "Kilowatts" },
    ],
    howItWorks:
      "A BTU is a quantity of energy, so equipment is rated in BTU per hour: how much heat it can move in an hour. That distinction matters when reading a specification, because a 12,000 BTU unit is shorthand for 12,000 BTU per hour, and the same machine in a European catalogue is listed at about 3.5 kW.",
    whereYouMeetIt: [
      "On a North American model number, where the number itself may encode capacity in thousands of BTU per hour.",
      "On a sizing calculation, where the heat loss or heat gain of the space is expressed in the same units.",
      "In a cross-market comparison, where converting to kilowatts is the only way to compare like with like.",
    ],
    howToCheck: [
      {
        title: "Read the rated capacity from the data plate",
        detail:
          "Rated capacity is stated at specific test conditions, so the plate figure is a rating rather than what the unit delivers on any given day.",
        performedBy: "owner",
      },
      {
        title: "Convert before comparing across markets",
        detail:
          "A European kilowatt rating and a North American BTU per hour rating describe the same machine, but only after conversion.",
        performedBy: "owner",
      },
    ],
    typicalValues: [
      {
        context: "Conversion to kilowatts",
        value: "1 kW is about 3,412 BTU/h",
        note: "The figure used to move between North American and European specifications",
      },
      {
        context: "Conversion to tons",
        value: "12,000 BTU/h is one ton",
        note: "Ton of refrigeration is the North American shorthand for equipment size",
      },
      {
        context: "Common ductless capacities",
        value: "9,000, 12,000, 18,000, 24,000 BTU/h",
        note: "Roughly 2.6, 3.5, 5.3, and 7.0 kW respectively",
      },
    ],
    mistakes: [
      "BTU and BTU per hour are not the same. One is energy, the other is the rate a machine moves it at, and capacity always means the rate.",
      "A larger BTU rating is not automatically better. Oversized equipment on a fixed-speed system cycles more and dehumidifies less.",
    ],
    faqs: [
      {
        question: "How many BTU do I need for a room?",
        answer:
          "It comes from a heat loss and heat gain calculation for that specific space, taking in insulation, glazing, orientation, air leakage, and occupancy. Rules of thumb based on floor area alone routinely oversize equipment.",
      },
      {
        question: "How do I convert BTU to kilowatts?",
        answer:
          "Divide BTU per hour by about 3,412. A 12,000 BTU/h unit is roughly 3.5 kW, and an 18,000 BTU/h unit is roughly 5.3 kW.",
      },
      {
        question: "Why is capacity in the model number?",
        answer:
          "Many North American manufacturers encode the nominal capacity in thousands of BTU per hour into the model number, so a model ending in 12 points at a 12,000 BTU/h unit. Confirm it on the data plate rather than assuming.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Ton of refrigeration",
    slug: "ton-of-refrigeration",
    question: "What is a ton of refrigeration?",
    definition:
      "A capacity unit equal to 12,000 BTU per hour, roughly 3.5 kilowatts. It comes from the cooling once provided by melting a ton of ice in a day, and is still standard shorthand for equipment size in North America.",
    category: "measurement",
    aliases: ["ton", "tonnage"],
    related: ["btu", "ducted-split-system"],
    seeAlso: { label: "Sizing from a load calculation", path: "/btu-sizing-explained/" },
    shortAnswer:
      "A ton of refrigeration is 12,000 BTU per hour, about 3.5 kilowatts. The name comes from the cooling once produced by melting one ton of ice over twenty-four hours.",
    metaTitle: "Ton of refrigeration: the unit",
    metaDescription:
      "What a ton of refrigeration means, why cooling capacity is measured in tons of ice, how it converts to BTU and kilowatts, and where the unit is still used.",
    keywords: ["ton of refrigeration", "hvac tonnage", "how many tons is my ac", "ton to BTU"],
    facts: [
      { label: "Equals", value: "12,000 BTU per hour" },
      { label: "In kilowatts", value: "About 3.517 kW" },
      { label: "Origin", value: "Cooling from melting one ton of ice in a day" },
      { label: "Used in", value: "North America, for central and light commercial equipment" },
    ],
    howItWorks:
      "Before mechanical refrigeration, cooling was sold as ice, so the capacity of early machines was described by how much ice they replaced. Melting one ton of ice over twenty-four hours absorbs about 288,000 BTU, which is 12,000 BTU per hour, and the unit stuck long after the ice trade ended.",
    whereYouMeetIt: [
      "In a quotation for central equipment, where systems are described as three ton or four ton rather than by BTU.",
      "In a model number, where a two-digit code can encode nominal tonnage in twelfths.",
      "In a sizing conversation, where a technician will quote tonnage and a European supplier will quote kilowatts.",
    ],
    howToCheck: [
      {
        title: "Divide the BTU rating by twelve thousand",
        detail:
          "A 36,000 BTU/h system is three tons. The rating comes from the data plate rather than from the size of the cabinet.",
        performedBy: "owner",
      },
      {
        title: "Confirm nominal against rated capacity",
        detail:
          "Nominal tonnage is a size class. Actual rated capacity at test conditions can differ from the round number the class implies.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "One ton",
        value: "12,000 BTU/h",
        note: "Approximately 3.517 kW",
      },
      {
        context: "Origin figure",
        value: "288,000 BTU per day",
        note: "The heat absorbed melting one short ton of ice over twenty-four hours",
      },
    ],
    mistakes: [
      "A ton here has nothing to do with the weight of the equipment. It is a rate of heat removal.",
      "Nominal tonnage is a class rather than a measured output. Two three-ton systems can have slightly different rated capacities.",
    ],
    faqs: [
      {
        question: "How many tons is my air conditioner?",
        answer:
          "Divide the rated capacity in BTU per hour by 12,000. Many North American model numbers also encode it, as a two-digit number that is the tonnage multiplied by twelve.",
      },
      {
        question: "Is tonnage used outside North America?",
        answer:
          "Residential equipment in the United Kingdom and Europe is quoted in kilowatts, so a three ton system appears as roughly 10.5 kW.",
      },
      {
        question: "Does more tonnage mean better cooling?",
        answer:
          "Only if the building needs it. Oversized fixed-speed equipment satisfies the control quickly, removes less moisture, and cycles more, which is why sizing comes from a calculation.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Delta T",
    slug: "delta-t",
    question: "What is delta T?",
    definition:
      "The temperature difference between the air entering and leaving the indoor coil, sometimes called split. A delta T well outside the manufacturer's stated range points to an airflow or refrigerant problem, and tells you which direction to look.",
    category: "measurement",
    aliases: ["temperature split", "ΔT"],
    related: ["evaporator-coil", "return-air", "air-filter"],
    shortAnswer:
      "Delta T is the temperature difference between the air entering the indoor coil and the air leaving it. It is the quickest field indicator of whether a system is moving heat as intended.",
    metaTitle: "Delta T: the temperature split",
    metaDescription:
      "What delta T measures, how to take the reading correctly, why humidity moves the target, and how a high or low split points toward airflow or refrigerant.",
    keywords: ["delta T hvac", "temperature split", "supply return temperature difference", "how to measure delta T"],
    facts: [
      { label: "Measures", value: "Return air temperature minus supply air temperature" },
      { label: "Taken with", value: "Two thermometers, at the return and the supply" },
      { label: "Target range", value: "Published per model, and moves with indoor humidity" },
      { label: "Tells you", value: "Whether to look at airflow or at refrigerant" },
    ],
    howItWorks:
      "Air gives up heat as it crosses the coil, so the drop between return and supply reflects how much heat the coil is absorbing per unit of air. Too little air across the coil gives a large drop on a small volume; too little refrigerant gives a small drop on a normal volume. That is why the number, read against the manufacturer's range, points in one direction or the other.",
    whereYouMeetIt: [
      "As one of the first field measurements taken on a cooling complaint.",
      "On a commissioning sheet, where the split achieved at handover becomes the later comparison point.",
      "In a homeowner conversation, where a rough reading gives an early indication before a technician arrives.",
    ],
    howToCheck: [
      {
        title: "Let the system run before measuring",
        detail:
          "Readings taken in the first minutes of a run are meaningless. Give the system time to reach steady conditions.",
        performedBy: "owner",
      },
      {
        title: "Measure at the return grille and at a supply register",
        detail:
          "On a ductless head, measure at the intake at the top and the outlet at the front. Keep the probes out of direct sun and away from other heat sources.",
        performedBy: "owner",
      },
      {
        title: "Read the result against the manufacturer range",
        detail:
          "The acceptable range is published per model and it shifts with indoor humidity, so a single universal target does not exist.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Delta T is not a pass or fail number on its own. It narrows the search and is read alongside airflow and refrigerant measurements.",
      "The target moves with indoor humidity. A humid space produces a smaller air temperature drop because part of the coil's work is condensing moisture.",
      "Measuring at the wrong points, or too soon after start-up, gives a number that looks authoritative and is not.",
    ],
    faqs: [
      {
        question: "What is a good delta T?",
        answer:
          "The manufacturer publishes a range for the model, and it depends on indoor humidity as well as on the equipment. A figure well below or well above that range is what matters, not hitting a specific number.",
      },
      {
        question: "Does high delta T mean the system is working well?",
        answer:
          "Not necessarily. A large drop across a starved coil moves less total heat than a moderate drop at full airflow, and it is a signature of restricted airflow rather than of good performance.",
      },
      {
        question: "Can I measure delta T on a mini-split?",
        answer:
          "Yes, roughly, using a thermometer at the intake grille on top and another at the outlet louvre. Let it run first, and treat the result as an indication rather than a commissioning measurement.",
      },
    ],
    sourceIds: ["trane-mini-split-not-cooling"],
    seeAlso: { label: "Mini-split not cooling", path: "/mini-split-not-cooling/" },
  },
] satisfies GlossaryTermInput[];
