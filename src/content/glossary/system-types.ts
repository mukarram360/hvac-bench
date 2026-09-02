import type { GlossaryTermInput } from "../schema";

/**
 * What the equipment is, before anything about how it fails. A reader who
 * cannot tell a multi-zone mini-split from an air-to-water heat pump cannot
 * use a code table, because manufacturers index their tables by system type
 * long before they index them by fault.
 */
export const systemTypes = [
  {
    term: "Ductless mini-split",
    slug: "ductless-mini-split",
    question: "What is a ductless mini-split?",
    definition:
      "A heating and cooling system with one or more indoor units connected to an outdoor unit by refrigerant pipes and a control cable, with no duct network in between. Because each indoor unit conditions the space it is mounted in, a fault can affect one room while the rest of the building carries on normally.",
    category: "system-types",
    aliases: ["mini split", "ductless system", "split air conditioner"],
    related: ["multi-zone-system", "line-set", "heat-pump"],
    seeAlso: { label: "How a mini-split moves heat", path: "/how-mini-splits-work/" },
    shortAnswer:
      "A ductless mini-split is an air conditioner or heat pump that connects an outdoor compressor unit to one or more wall, floor, or ceiling indoor units through refrigerant piping instead of ducts.",
    metaTitle: "Ductless mini-split: what it is",
    metaDescription:
      "What a ductless mini-split is, how the indoor and outdoor units connect, where the term appears on a quotation, and what a per-room fault tells you.",
    keywords: [
      "ductless mini split",
      "what is a mini split",
      "mini split system",
      "ductless air conditioner",
    ],
    facts: [
      { label: "Type", value: "Split refrigerant system, no ducts" },
      { label: "Units", value: "One outdoor unit, one or more indoor heads" },
      { label: "Connection", value: "Refrigerant line set plus control cable" },
      { label: "Reports faults", value: "On the indoor display, remote, or outdoor board" },
    ],
    howItWorks:
      "The outdoor unit holds the compressor and one coil, each indoor unit holds the other coil and a fan, and refrigerant carries heat between them through the line set. Nothing but refrigerant and a control signal passes between the two, so the indoor unit blows only the air already in the room it serves.",
    whereYouMeetIt: [
      "On a quotation, where the number of indoor heads sets the price far more than the outdoor unit does.",
      "In a fault description, when one room stops working and the others do not, which points at that head or its branch rather than at the outdoor unit.",
      "In manufacturer documentation, where single-zone and multi-zone models of the same series carry different code tables.",
    ],
    howToCheck: [
      {
        title: "Count the indoor heads",
        detail:
          "One indoor unit on one outdoor unit is single-zone. Two or more is multi-zone, and the code table you need is the multi-zone one for that series.",
        performedBy: "owner",
      },
      {
        title: "Read the model number from both units",
        detail:
          "The head and the outdoor unit are separate products with separate labels. Photograph both plates before calling anyone, because which one answers a question depends on the question.",
        performedBy: "owner",
      },
    ],
    mistakes: [
      "Ductless does not mean the same as portable or window. A mini-split is a fixed installation with a sealed refrigerant circuit made at commissioning.",
      "A mini-split is not always heating capable. Cooling-only models exist, and the model number rather than the brand is what tells you.",
    ],
    faqs: [
      {
        question: "Is a ductless mini-split the same as a heat pump?",
        answer:
          "A mini-split can be a heat pump, and many are, but the two words describe different things. Ductless describes how the air is delivered. Heat pump describes whether the system can run in reverse to heat as well as cool.",
      },
      {
        question: "Why does only one room stop working?",
        answer:
          "Each indoor unit has its own fan, coil, sensors, and control board. A fault confined to one room narrows the search to that head, its wiring, and its branch of the pipework, which is the first thing a technician establishes.",
      },
      {
        question: "Can a mini-split be added to a house that already has ducts?",
        answer:
          "Yes, and it is a common way to condition an extension, a loft conversion, or a room the existing duct run never reached properly. The two systems operate independently.",
      },
    ],
    regionNotes: [
      {
        region: "us",
        note: "Sold as ductless or mini-split, sized in BTU per hour, and quoted with SEER2 and HSPF2 ratings.",
      },
      {
        region: "uk",
        note: "Called air conditioning or an air-to-air heat pump, sized in kilowatts, and quoted with SEER and SCOP.",
      },
    ],
    sourceIds: ["trane-ductless-maintenance", "fujitsu-troubleshooting"],
  },
  {
    term: "Multi-zone system",
    slug: "multi-zone-system",
    question: "What is a multi-zone system?",
    definition:
      "One outdoor unit serving several indoor units, each controlled separately. A fault reported on one indoor head can originate in the shared outdoor unit or in the branch pipework, so a multi-zone diagnosis has to establish whether other zones behave normally.",
    category: "system-types",
    aliases: ["multi split", "multi-split"],
    related: ["ductless-mini-split", "branch-box"],
    seeAlso: { label: "Single-zone or multi-zone", path: "/single-zone-vs-multi-zone-mini-split/" },
    shortAnswer:
      "A multi-zone system is one outdoor unit feeding two or more indoor units that are set and run independently, so each room holds its own temperature from shared refrigeration equipment.",
    metaTitle: "Multi-zone system in HVAC",
    metaDescription:
      "What a multi-zone mini-split is, how one outdoor unit serves several rooms, and why a fault in one zone is diagnosed differently from a fault in all of them.",
    keywords: ["multi zone system", "multi split", "multi zone mini split", "dual zone mini split"],
    facts: [
      { label: "Outdoor units", value: "One" },
      { label: "Indoor units", value: "Two or more, independently set" },
      { label: "Shared", value: "Compressor, outdoor coil, and control logic" },
      { label: "Code tables", value: "Separate from the single-zone tables of the same series" },
    ],
    howItWorks:
      "The outdoor unit varies compressor output to cover whatever the running zones together demand, and each branch of the pipework carries refrigerant to one indoor unit. Because the compressor is shared, one zone calling for heat while another calls for cooling is a design limitation on many residential systems rather than a fault.",
    whereYouMeetIt: [
      "On a code table, where the same characters can carry a different meaning on the multi-zone version of a series than on the single-zone version.",
      "In a fault report, where the question of whether other zones still run normally is what separates a head fault from an outdoor unit fault.",
      "On an installation drawing, where the branch lengths and the total pipe run are limited by the outdoor unit specification.",
    ],
    howToCheck: [
      {
        title: "Run each zone on its own",
        detail:
          "Turn every other indoor unit off and run one at a time. A zone that fails alone points at that head. Zones that all fail together point at the outdoor unit or the supply to it.",
        performedBy: "owner",
      },
      {
        title: "Note which zone the code names",
        detail:
          "Multi-zone boards report the address of the unit that raised a code. Record the address alongside the code before clearing anything.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Independent control does not mean independent equipment. Every zone depends on one compressor, so a compressor protection event stops all of them.",
      "Adding a head to an existing multi-zone outdoor unit is limited by the rated connectable capacity, not by whether a spare port exists.",
    ],
    faqs: [
      {
        question: "Can one zone heat while another cools?",
        answer:
          "On residential multi-zone systems, no. The reversing valve sits in the shared outdoor unit, so the whole system runs in one mode. Simultaneous heating and cooling needs a heat recovery VRF arrangement.",
      },
      {
        question: "Does a zone that is switched off still cost anything?",
        answer:
          "An indoor unit that is off draws only standby power, but its branch of pipework still holds refrigerant and can still hold a fault that appears when the zone is next called.",
      },
      {
        question: "Why does the code table differ from my single-zone unit?",
        answer:
          "Multi-zone boards run more sensors and more communication paths, so manufacturers publish a separate table. Read the code against the manual for the exact outdoor model, not the brand.",
      },
    ],
    sourceIds: ["gree-multi21-service", "daikin-mxs-engineering"],
  },
  {
    term: "Heat pump",
    slug: "heat-pump",
    question: "What is a heat pump?",
    definition:
      "A system that moves heat rather than creating it, and can run in both directions: taking heat out of a building in cooling and drawing heat in from outside air, ground, or water in heating. The same hardware provides both functions, which is why one fault can affect heating and cooling together.",
    category: "system-types",
    aliases: ["ASHP", "air source heat pump", "reverse cycle"],
    related: ["reversing-valve", "defrost-cycle", "balance-point"],
    shortAnswer:
      "A heat pump is a refrigeration system that moves heat instead of burning fuel to make it, and reverses its refrigerant flow so the same equipment can both heat and cool a building.",
    metaTitle: "Heat pump: how it works",
    metaDescription:
      "What a heat pump is, how moving heat differs from making it, why output falls as it gets colder outside, and where the term appears in fault diagnosis.",
    keywords: [
      "what is a heat pump",
      "how does a heat pump work",
      "air source heat pump",
      "heat pump heating and cooling",
    ],
    facts: [
      { label: "Function", value: "Moves heat, in either direction" },
      { label: "Heat source", value: "Outdoor air, ground, or water" },
      { label: "Efficiency measure", value: "COP and SCOP, or HSPF2 in the United States" },
      { label: "Direction set by", value: "The reversing valve" },
    ],
    howItWorks:
      "Refrigerant boiling at a low temperature absorbs heat from a cold source, the compressor raises its pressure so it condenses at a higher temperature, and that heat is released where it is wanted. Because the energy is moved rather than generated, output per unit of electricity is higher than direct electric heating, and it falls as the gap between source and target temperature widens.",
    whereYouMeetIt: [
      "On a grant or incentive application, where the rated efficiency and the heating capacity at a stated outdoor temperature decide eligibility.",
      "In a complaint about weak heating during a cold snap, where reduced output can be correct operation rather than a fault.",
      "In a code definition, because a heating fault and a cooling fault can involve the same hardware and therefore share codes.",
    ],
    howToCheck: [
      {
        title: "Confirm the mode the system is actually in",
        detail:
          "A heat pump paused for defrost has stopped heating on purpose. Check the display and wait for the cycle to finish before treating it as a fault.",
        performedBy: "owner",
      },
      {
        title: "Compare output against outdoor temperature",
        detail:
          "Rated capacity is published at specific outdoor conditions. Reduced output at an outdoor temperature well below the rating point is expected behaviour.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "Heat moved per unit of electricity",
        value: "Expressed as COP",
        note: "A COP of 3 means three units of heat delivered for one unit of electricity consumed",
      },
      {
        context: "Seasonal figure in Europe",
        value: "SCOP",
        note: "Averaged across a defined heating season and climate profile",
      },
      {
        context: "Seasonal figure in the United States",
        value: "HSPF2",
        note: "Not directly comparable with SCOP because the test procedures differ",
      },
    ],
    mistakes: [
      "A heat pump does not create heat from electricity the way a resistance heater does, which is why its efficiency figures exceed one.",
      "Cold weather does not stop a heat pump working. Output falls as outdoor temperature drops, and the balance point is where that fall starts to matter.",
      "Air conditioning and heat pump hardware are close relatives. The reversing valve, not the compressor, is what makes one of them reversible.",
    ],
    faqs: [
      {
        question: "Does a heat pump work below freezing?",
        answer:
          "Yes. Air below freezing still contains heat, and modern units are rated to extract it. The amount delivered and the electricity required change with temperature, which is why the balance point matters.",
      },
      {
        question: "Why does my heat pump blow cool air sometimes in heating?",
        answer:
          "During a defrost cycle the system briefly runs in reverse to clear frost from the outdoor coil, and indoor air can feel cool for a few minutes. The cycle ends on its own.",
      },
      {
        question: "Is an air conditioner a heat pump?",
        answer:
          "It uses the same refrigeration cycle but runs in one direction only. A heat pump adds a reversing valve and the controls to use it, which is what allows it to heat.",
      },
    ],
    regionNotes: [
      {
        region: "us",
        note: "A ducted or ductless air-to-air system paired with electric auxiliary heat, rated with SEER2 and HSPF2.",
      },
      {
        region: "uk",
        note: "An air-to-water system replacing a boiler and feeding radiators or underfloor loops, rated with SCOP.",
      },
    ],
    sourceIds: ["doe-heat-pumps", "trane-mini-split-not-heating"],
    seeAlso: { label: "Mini-split not heating", path: "/mini-split-not-heating/" },
  },
  {
    term: "Air-to-water heat pump",
    slug: "air-to-water-heat-pump",
    question: "What is an air-to-water heat pump?",
    definition:
      "A heat pump that transfers heat from outside air into a water circuit serving radiators, underfloor loops, or a hot water cylinder. This is the common domestic arrangement in the United Kingdom and much of Europe, where it replaces a boiler rather than a ducted system.",
    category: "system-types",
    aliases: ["hydronic heat pump", "monobloc heat pump"],
    related: ["heat-pump", "flow-temperature", "boiler"],
    seeAlso: { label: "Heat pump or furnace", path: "/heat-pump-vs-furnace/" },
    shortAnswer:
      "An air-to-water heat pump takes heat from outdoor air and puts it into a water circuit, so it heats radiators, underfloor pipes, and a hot water cylinder in place of a boiler.",
    metaTitle: "Air-to-water heat pump explained",
    metaDescription:
      "What an air-to-water heat pump does, how monobloc and split arrangements differ, and why flow temperature governs the efficiency you actually get.",
    keywords: [
      "air to water heat pump",
      "hydronic heat pump",
      "monobloc heat pump",
      "heat pump instead of boiler",
    ],
    facts: [
      { label: "Delivers heat to", value: "Water, not air" },
      { label: "Emitters", value: "Radiators, underfloor loops, hot water cylinder" },
      { label: "Arrangements", value: "Monobloc, or split with an indoor hydrobox" },
      { label: "Key setting", value: "Flow temperature, ideally weather compensated" },
    ],
    howItWorks:
      "The outdoor unit extracts heat from air and transfers it through a plate heat exchanger into the heating water. Because the efficiency of the cycle falls as the water is pushed hotter, the design aims at the lowest flow temperature the emitters can work with rather than the boiler temperatures the house may have been built around.",
    whereYouMeetIt: [
      "On a heat loss survey, where emitter sizing is recalculated because the system will run at a lower flow temperature than the boiler did.",
      "In a running cost complaint, where an immersion heater or a backup element has been doing work the heat pump was meant to do.",
      "In cylinder documentation, where a weekly high temperature cycle is specified for hot water hygiene.",
    ],
    howToCheck: [
      {
        title: "Read the flow and return temperatures",
        detail:
          "Both are shown on the controller. The difference between them, and how high the flow runs, says more about efficiency than any single reading does.",
        performedBy: "owner",
      },
      {
        title: "Establish whether weather compensation is active",
        detail:
          "A fixed flow temperature set at commissioning and never revisited is a common reason a correctly installed system costs more to run than expected.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "Design flow temperature, underfloor",
        value: "Around 35 C",
        note: "Low flow temperature suits the large surface area of an underfloor circuit",
      },
      {
        context: "Design flow temperature, radiators",
        value: "Around 45 to 55 C",
        note: "Requires radiators sized for the lower temperature rather than boiler-era sizing",
      },
      {
        context: "Boiler flow temperature for comparison",
        value: "Around 60 to 80 C",
        note: "The temperature most existing radiator systems were originally sized around",
      },
    ],
    mistakes: [
      "It is not a like-for-like boiler swap. Emitters sized for boiler temperatures may need enlarging before the system can run at its efficient flow temperature.",
      "Monobloc and split are not the same. A monobloc holds the refrigerant circuit outdoors and carries water indoors, which changes both the freeze protection and the certification a service visit needs.",
    ],
    faqs: [
      {
        question: "What is the difference between monobloc and split?",
        answer:
          "A monobloc keeps the whole refrigerant circuit in the outdoor unit and sends water indoors. A split sends refrigerant to an indoor hydrobox, which puts the refrigerant joint inside the house and brings F-Gas duties with it.",
      },
      {
        question: "Can it heat hot water as well as the rooms?",
        answer:
          "Yes, through a cylinder with a heat pump coil. The system switches between space heating and cylinder heating, and the cylinder runs a periodic higher temperature cycle for hygiene.",
      },
      {
        question: "Why is my flow temperature so much lower than my old boiler?",
        answer:
          "Efficiency falls as the water is driven hotter, so a heat pump is set to deliver the lowest flow temperature the building needs. That is why weather compensation and correctly sized emitters matter.",
      },
    ],
    regionNotes: [
      {
        region: "uk",
        note: "The standard domestic heat pump arrangement, installed under MCS or equivalent scheme rules and quoted with SCOP.",
      },
      {
        region: "eu",
        note: "Widely installed with weather compensation as standard practice, rated under the ecodesign framework.",
      },
    ],
    sourceIds: ["ec-ecodesign", "doe-heat-pumps"],
  },
  {
    term: "Boiler",
    slug: "boiler",
    question: "What is a boiler?",
    definition:
      "An appliance that heats water for radiators, underfloor circuits, or a hot water cylinder, rather than heating air directly. Boilers dominate United Kingdom and European domestic heating, and are the equipment an air-to-water heat pump replaces or works alongside.",
    category: "system-types",
    aliases: ["combi boiler", "system boiler", "condensing boiler"],
    related: ["air-to-water-heat-pump", "flow-temperature"],
    seeAlso: { label: "Comparing a heat pump with a furnace", path: "/heat-pump-vs-furnace/" },
    shortAnswer:
      "A boiler heats water for a wet central heating system rather than heating air. Combi boilers make hot water on demand, system and heat-only boilers heat a stored cylinder.",
    metaTitle: "Boiler types and terms",
    metaDescription:
      "What a boiler is, how combi, system, and heat-only types differ, why condensing operation depends on return temperature, and how boilers relate to heat pumps.",
    keywords: ["combi boiler", "system boiler", "condensing boiler", "boiler vs heat pump"],
    facts: [
      { label: "Heats", value: "Water for radiators, underfloor, or a cylinder" },
      { label: "Types", value: "Combi, system, heat-only" },
      { label: "Fuel", value: "Natural gas, LPG, oil, or electricity" },
      { label: "Efficiency depends on", value: "Return water temperature, for condensing models" },
    ],
    howItWorks:
      "A burner heats a heat exchanger, and a pump circulates water through it to the emitters. A condensing boiler adds a second exchanger to recover heat from flue gases. Condensation requires cool return water, so high-temperature operation gives up part of the available efficiency.",
    whereYouMeetIt: [
      "In a heat pump quotation, where the existing boiler flow temperature explains why radiators need resizing.",
      "In a hybrid system, where a boiler and a heat pump share the same emitters and a control decides which runs.",
      "On an energy performance assessment, where boiler type and efficiency band affect the rating.",
    ],
    howToCheck: [
      {
        title: "Identify the type from the pipework",
        detail:
          "A combi has no hot water cylinder and takes mains cold water directly. A system or heat-only boiler feeds a cylinder, which is what a heat pump conversion reuses or replaces.",
        performedBy: "owner",
      },
      {
        title: "Read the flow temperature setting",
        detail:
          "Many condensing boilers are left at a factory flow temperature higher than the system needs, which keeps return water too warm for the boiler to condense.",
        performedBy: "owner",
      },
    ],
    typicalValues: [
      {
        context: "Condensing threshold",
        value: "Return water below about 55 C",
        note: "Above this the secondary heat exchanger cannot recover latent heat from the flue gas",
      },
      {
        context: "Common factory flow setting",
        value: "70 to 80 C",
        note: "An adjustable boiler setting that may exceed the building requirement",
      },
    ],
    mistakes: [
      "A condensing boiler does not condense at every setting. Return temperature decides whether the second heat exchanger does any work.",
      "Combi is not a size or a brand. It describes a boiler that makes hot water on demand instead of storing it.",
    ],
    faqs: [
      {
        question: "Can a boiler and a heat pump share the same radiators?",
        answer:
          "Yes, in a hybrid arrangement. The control decides which appliance runs based on outdoor temperature or cost, and the emitters are shared. Sizing still has to suit the heat pump's flow temperature for it to do useful work.",
      },
      {
        question: "Why does lowering the flow temperature save gas?",
        answer:
          "Cooler return water lets a condensing boiler recover latent heat from its flue gases. The house takes longer to warm up but the boiler spends more of its running time in condensing mode.",
      },
      {
        question: "Does a boiler show error codes like a mini-split?",
        answer:
          "Yes, and they follow the same rule: the code is defined per model, and the manufacturer manual for that exact appliance is what settles the meaning.",
      },
    ],
    regionNotes: [
      {
        region: "uk",
        note: "Wet central heating with a gas combi or system boiler is the dominant existing domestic arrangement.",
      },
      {
        region: "us",
        note: "Boilers appear mainly in older hydronic and steam systems; forced air furnaces are the more common comparison point.",
      },
    ],
    sourceIds: ["ashrae-terminology", "doe-heat-pumps"],
  },
  {
    term: "Ducted split system",
    slug: "ducted-split-system",
    question: "What is a ducted split system?",
    definition:
      "A central system with an indoor air handler or furnace coil and an outdoor condensing unit, distributing conditioned air through ducts. Because the duct network sits between the equipment and the room, a ducted diagnosis has to separate what the equipment is doing from what the ducts are delivering.",
    category: "system-types",
    aliases: ["central air", "central heating and air"],
    related: ["air-handler", "static-pressure", "ductwork"],
    seeAlso: { label: "Ductless or ducted delivery", path: "/ductless-vs-ducted-heat-pump/" },
    shortAnswer:
      "A ducted split system pairs an outdoor condensing unit with an indoor air handler or furnace coil and delivers conditioned air to every room through a duct network.",
    metaTitle: "Ducted split system in HVAC",
    metaDescription:
      "What a ducted split system is, how the indoor and outdoor halves divide the work, and why duct condition changes what the equipment can deliver to a room.",
    keywords: ["ducted split system", "central air conditioning", "split system HVAC", "air handler and condenser"],
    facts: [
      { label: "Indoor half", value: "Air handler, or a coil above a furnace" },
      { label: "Outdoor half", value: "Condensing unit with compressor" },
      { label: "Delivery", value: "Supply and return ductwork" },
      { label: "Common limiting factor", value: "External static pressure across the ducts" },
    ],
    howItWorks:
      "The outdoor unit and the indoor coil form one refrigerant circuit, and a single blower pushes conditioned air through the supply ducts and pulls room air back through the returns. Because one air path serves the whole house, a restriction anywhere in that path reduces delivery everywhere on it.",
    whereYouMeetIt: [
      "On a matched system rating, where the published efficiency belongs to a specific indoor and outdoor pairing rather than to either unit alone.",
      "In a complaint about one room, where duct design rather than equipment capacity is what a technician measures first.",
      "In a replacement quotation, where changing only the outdoor unit leaves the pairing unmatched.",
    ],
    howToCheck: [
      {
        title: "Confirm the pair, not just the box outside",
        detail:
          "Efficiency and capacity are published for the indoor and outdoor combination. Record both model numbers before comparing any rating.",
        performedBy: "owner",
      },
      {
        title: "Measure external static pressure",
        detail:
          "A manometer across the air handler shows what the duct system is doing to airflow. High readings explain reduced capacity that the refrigerant circuit alone would not account for.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "The outdoor unit alone does not carry a rating. Efficiency figures belong to matched indoor and outdoor combinations.",
      "A room that never gets warm enough is not automatically an equipment fault. Duct sizing, leakage, and return path all sit between the coil and the room.",
    ],
    faqs: [
      {
        question: "Can I replace only the outdoor unit?",
        answer:
          "It is sometimes physically possible, but the published capacity and efficiency belong to the matched pair. An unmatched combination has no certified rating and may not achieve the performance either component was sold with.",
      },
      {
        question: "Why do some rooms cool better than others?",
        answer:
          "A single blower and a single thermostat condition the whole house to one setting, so a room that runs warm is a distribution problem rather than a capacity one. That distribution is measured at the registers rather than at the equipment.",
      },
      {
        question: "Is a furnace coil the same as an air handler?",
        answer:
          "They do the same job in the refrigerant circuit. A furnace coil sits above a gas furnace that supplies the blower, while an air handler contains its own blower, and electric heat where it is fitted.",
      },
    ],
    sourceIds: ["ahri-directory"],
  },
  {
    term: "VRF and VRV systems",
    slug: "vrf-system",
    question: "What is a VRF system?",
    definition:
      "Variable refrigerant flow systems, sold by Daikin under the VRV name, use one outdoor unit to serve many indoor units and vary refrigerant flow to each. They are common in commercial buildings and report faults with both a code and the address of the unit that raised it.",
    category: "system-types",
    aliases: ["VRF", "VRV", "variable refrigerant flow"],
    related: ["multi-zone-system", "error-code"],
    shortAnswer:
      "VRF, or variable refrigerant flow, is a commercial system where one outdoor unit serves many indoor units and modulates the refrigerant sent to each one according to its individual demand.",
    metaTitle: "VRF and VRV systems explained",
    metaDescription:
      "What VRF and VRV mean, how heat pump and heat recovery arrangements differ, and why every VRF fault code arrives with the address of the unit that raised it.",
    keywords: ["VRF system", "VRV system", "variable refrigerant flow", "VRF heat recovery"],
    facts: [
      { label: "Scale", value: "Many indoor units on one outdoor unit" },
      { label: "VRV", value: "Daikin's trade name for the same technology" },
      { label: "Arrangements", value: "Heat pump, or heat recovery for simultaneous modes" },
      { label: "Fault reporting", value: "Code plus the address of the reporting unit" },
    ],
    howItWorks:
      "An inverter compressor and electronic expansion valves at each indoor unit let the system deliver a different amount of refrigerant to each space at the same time. A heat recovery arrangement adds branch controllers that let one zone reject heat while another absorbs it, moving heat around the building instead of dumping it outside.",
    whereYouMeetIt: [
      "On a commercial fault log, where the code and the unit address together identify what needs attention.",
      "In a building handover pack, where the addressing scheme maps unit numbers to rooms.",
      "In refrigerant records, where a large charge and long pipe runs bring leak detection and reporting duties.",
    ],
    howToCheck: [
      {
        title: "Record the code with its address",
        detail:
          "A VRF code without the unit address is not actionable. Both are shown on the central controller or the outdoor unit display.",
        performedBy: "technician",
      },
      {
        title: "Check whether other units on the same branch are affected",
        detail:
          "Branch controllers and shared pipework mean a group of units failing together points somewhere different from a single unit failing alone.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "VRV is not a different technology from VRF. It is Daikin's trade name, and the two words describe the same approach.",
      "A large system charge is not only a performance matter. It sets the leak checking frequency and the record keeping the site owes under F-Gas rules.",
    ],
    faqs: [
      {
        question: "What is the difference between VRF heat pump and heat recovery?",
        answer:
          "A heat pump VRF runs the whole system in one mode at a time. A heat recovery VRF adds branch controllers so some zones can cool while others heat, moving rejected heat to where it is wanted.",
      },
      {
        question: "Why does a VRF code include a number after it?",
        answer:
          "The number is the address of the indoor unit or branch that raised the fault. Without it, the same code could point at any one of dozens of units on the system.",
      },
      {
        question: "Is VRF used in homes?",
        answer:
          "Occasionally in large properties, but it is designed for commercial buildings with many separately controlled spaces. Residential multi-zone mini-splits cover the smaller version of the same idea.",
      },
    ],
    sourceIds: ["daikin-u4-service"],
  },
  {
    term: "PTAC unit",
    slug: "ptac-unit",
    question: "What is a PTAC unit?",
    definition:
      "A packaged terminal air conditioner: a self-contained heating and cooling unit installed through an exterior wall, used in hotels, care homes, and apartments. All components sit in one chassis, so service means removing the unit rather than working on separate indoor and outdoor sections.",
    category: "system-types",
    aliases: ["PTAC", "through-the-wall unit"],
    related: ["air-handler", "ductless-mini-split"],
    shortAnswer:
      "A PTAC is a packaged terminal air conditioner: one self-contained chassis holding the compressor, both coils, and the controls, fitted through an exterior wall to serve a single room.",
    metaTitle: "PTAC unit: what it is",
    metaDescription:
      "What a PTAC is, how a packaged terminal air conditioner differs from a mini-split, where the sleeve and chassis split the installation, and how PTACs are serviced.",
    keywords: ["PTAC unit", "packaged terminal air conditioner", "through the wall air conditioner", "hotel air conditioner"],
    facts: [
      { label: "Form", value: "One chassis through an exterior wall" },
      { label: "Serves", value: "A single room" },
      { label: "Installed in", value: "A wall sleeve, so the chassis slides out" },
      { label: "Heating", value: "Electric resistance, or reverse cycle on PTHP models" },
    ],
    howItWorks:
      "Compressor, both coils, both fans, and the controls sit in one cabinet that spans the wall, with the outdoor half exposed to the exterior air. The sleeve stays in the wall and the chassis slides out, which is why replacement is a swap rather than a refrigerant job.",
    whereYouMeetIt: [
      "In hotel and care home maintenance, where a whole chassis is swapped and the faulty one is repaired away from the room.",
      "In a specification, where the sleeve size decides which replacement chassis will physically fit.",
      "On the model number, where PTHP marks a heat pump version and PTAC a cooling and resistance heat version.",
    ],
    howToCheck: [
      {
        title: "Read the sleeve size before ordering",
        detail:
          "Chassis are made to fit standard sleeve dimensions. A replacement that does not match the existing sleeve means rebuilding the wall opening.",
        performedBy: "technician",
      },
      {
        title: "Clear the outdoor face and the drain path",
        detail:
          "The exterior half sits in weather and collects debris, and the drainage arrangement runs through the sleeve rather than to an indoor drain line.",
        performedBy: "owner",
      },
    ],
    mistakes: [
      "A PTAC is not a window unit. It is fitted into a permanent wall sleeve and wired to a dedicated circuit.",
      "PTAC and PTHP are not interchangeable. Only the heat pump version can heat by reverse cycle rather than by resistance elements alone.",
    ],
    faqs: [
      {
        question: "What is the difference between a PTAC and a mini-split?",
        answer:
          "A PTAC puts everything in one chassis through the wall of the room it serves. A mini-split separates the compressor into an outdoor unit and connects it to a quiet indoor head by refrigerant pipes.",
      },
      {
        question: "Why is a PTAC replaced rather than repaired in place?",
        answer:
          "The chassis slides out of a fixed sleeve, so an entire working unit can be fitted in minutes and the faulty one taken to a workshop. In a hotel that keeps the room available.",
      },
      {
        question: "Do PTAC units have filters?",
        answer:
          "Yes, a washable filter behind the front grille that the room-side air passes through. Cleaning it is routine housekeeping work rather than a service visit.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
] satisfies GlossaryTermInput[];
