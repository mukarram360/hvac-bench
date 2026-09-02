import type { GlossaryTermInput } from "../schema";

/**
 * How the system decides what to do, and how it reports trouble.
 *
 * Two of these entries, error code and protection code, carry the rule the
 * whole library depends on: a code is a measurement, defined per product
 * family, and not the name of a broken part. They are written so a reader can
 * apply that rule before opening any brand page.
 */
export const controls = [
  {
    term: "Error code",
    slug: "error-code",
    question: "What is an HVAC error code?",
    definition:
      "A short alphanumeric message a control board shows when it detects a condition outside normal limits. Codes are defined per product family, so the same characters can mean different things on two systems from the same manufacturer.",
    category: "controls",
    aliases: ["fault code", "alarm code"],
    related: ["protection-code", "control-board", "data-plate"],
    shortAnswer:
      "An error code is a short alphanumeric message a control board displays when a measurement falls outside its expected range. Codes are defined per product family, not per brand.",
    metaTitle: "Error code: how to read one",
    metaDescription:
      "What an HVAC error code is, why the same characters mean different things across product families, why the data plate comes first, and how to record one properly.",
    keywords: [
      "hvac error code",
      "what does error code mean",
      "mini split fault code",
      "air conditioner error code",
    ],
    facts: [
      { label: "Produced by", value: "The control board" },
      { label: "Describes", value: "A measurement outside range, not a failed part" },
      { label: "Defined per", value: "Product family, not manufacturer" },
      { label: "Read against", value: "The service manual for the exact model" },
    ],
    howItWorks:
      "The board holds limits for everything it measures. When a reading falls outside one, or when an expected signal does not arrive, it stops or restricts operation and posts a code identifying which check failed. That is why the same code can point at several parts: the sensor, the wiring to it, and the board input all sit in one measurement path.",
    whereYouMeetIt: [
      "On the indoor unit display, the handheld controller, or a pattern of flashing lights.",
      "In the service manual, where a table lists each code, its meaning, and the checks in order.",
      "In a support call, where the code and the complete model number are the two things worth having ready.",
    ],
    howToCheck: [
      {
        title: "Photograph the display",
        detail:
          "Characters that look alike carry different meanings, and a photograph removes transcription error before anyone opens a manual.",
        performedBy: "owner",
      },
      {
        title: "Read the complete model number from both units",
        detail:
          "Code tables are indexed by product family. Without the full model number from the data plate the table you find may be the wrong one.",
        performedBy: "owner",
      },
      {
        title: "Note what the system was doing when it appeared",
        detail:
          "Mode, run time, outdoor temperature, and whether it had just restarted all narrow which of the possible causes fits.",
        performedBy: "owner",
      },
    ],
    mistakes: [
      "A code does not name a broken part. It names a condition the board detected, and several parts can produce that condition.",
      "The same characters do not carry the same meaning across a manufacturer's range. Product family decides the table.",
      "Clearing a code is not a repair. If the condition persists the code returns, and repeated clearing hides a developing fault.",
    ],
    faqs: [
      {
        question: "Why does the same code mean different things on two units?",
        answer:
          "Manufacturers write code tables per product family. A code on a single-zone unit and the same code on a multi-zone unit from the same brand can point at entirely different measurements, which is why the full model number comes first.",
      },
      {
        question: "Should I reset the system to clear a code?",
        answer:
          "A power cycle clears a latched code on many systems, and if it was a one-off event the system runs normally afterwards. If it returns, the condition is still present and the code is now diagnostic information rather than a nuisance.",
      },
      {
        question: "Where do I find the code table for my unit?",
        answer:
          "In the manufacturer service or installation manual for that exact model. Owner manuals list a subset, and the service manual is what settles a definition.",
      },
    ],
    sourceIds: ["mrcool-code-table", "senville-leto-codes", "gree-e6-guide"],
    seeAlso: { label: "Error code index", path: "/error-codes/" },
  },
  {
    term: "Protection code",
    slug: "protection-code",
    question: "What is a protection code?",
    definition:
      "A code that reports the system stopping itself deliberately, for example on high pressure, high current, or module temperature. It records that a limit was reached rather than that a part failed, and clearing it without finding the cause simply repeats the event.",
    category: "controls",
    aliases: ["protection fault", "limit fault"],
    related: ["error-code", "inverter-module", "compressor"],
    shortAnswer:
      "A protection code reports that the system stopped itself on purpose because a measured value reached a safety limit. It records the limit that was hit, not a component that failed.",
    metaTitle: "Protection code: the system stopping",
    metaDescription:
      "What a protection code is, how it differs from a component fault, which limits trigger one, and why clearing it repeats the event instead of fixing it.",
    keywords: ["protection code", "hvac protection fault", "high pressure protection", "current protection code"],
    facts: [
      { label: "Reports", value: "A deliberate stop at a safety limit" },
      { label: "Common limits", value: "Pressure, current, voltage, discharge or module temperature" },
      { label: "Means", value: "The condition existed, not that a part failed" },
      { label: "Recurs if", value: "The condition behind it is not addressed" },
    ],
    howItWorks:
      "Protection limits exist so the system stops before something is damaged. When a measurement reaches one, the board shuts the relevant output down and posts a code naming the limit. That makes the code a description of operating conditions, so the diagnosis works outward from the limit to whatever pushed the system toward it.",
    whereYouMeetIt: [
      "In a system that runs for a while and then stops, repeatedly, under the same conditions.",
      "In hot or cold weather specifically, where an ambient-related limit is reached only at the extremes.",
      "In an inverter module code, where current, voltage, or heat sink temperature reached the module's ceiling.",
    ],
    howToCheck: [
      {
        title: "Record how long it runs before stopping",
        detail:
          "A stop after twenty minutes points somewhere different from a stop at start-up, because the limits reached are different.",
        performedBy: "owner",
      },
      {
        title: "Note outdoor temperature and clear the outdoor unit",
        detail:
          "Pressure and module temperature limits both depend on how well the outdoor coil can reject heat, so clearances and coil condition come first.",
        performedBy: "owner",
      },
      {
        title: "Measure the limit that was reported",
        detail:
          "If the code names pressure, pressure is measured under load. Assuming the sensor is wrong before measuring is how a real condition gets missed.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A protection code is not a nuisance trip. The measurement genuinely reached the limit, and the reason it did is the finding.",
      "Repeatedly resetting a protecting system removes the protection while the condition that triggered it continues.",
    ],
    faqs: [
      {
        question: "Is a protection code a fault?",
        answer:
          "It records the protection working correctly. The fault is whatever pushed the measurement to its limit, which can be airflow, charge, supply voltage, or a genuinely failing component.",
      },
      {
        question: "Why does it only happen on hot days?",
        answer:
          "Pressure and temperature limits are tied to how well the outdoor unit sheds heat. On cooler days the same system may sit just inside the limit and never trip, which makes the weather part of the diagnosis.",
      },
      {
        question: "Can I keep resetting it until a technician arrives?",
        answer:
          "Restarting once to confirm the behaviour is reasonable. Repeatedly forcing a protecting system to run puts the component it was protecting at risk, and the pattern of when it trips is more useful information than getting it running again.",
      },
    ],
    sourceIds: ["gree-h5-guide", "mrcool-p0-guide", "senville-leto-codes"],
    seeAlso: { label: "Error code index", path: "/error-codes/" },
  },
  {
    term: "Defrost cycle",
    slug: "defrost-cycle",
    question: "What is a defrost cycle?",
    definition:
      "A normal heat-pump routine that briefly reverses operation to melt frost from the outdoor coil. Steam from the outdoor unit, a pause in heating, and a short burst of cool air from indoor units are expected behaviour, not a fault.",
    category: "controls",
    aliases: ["defrost", "defrost mode"],
    related: ["heat-pump", "reversing-valve"],
    shortAnswer:
      "A defrost cycle is a heat pump briefly running in reverse to melt frost off its outdoor coil. Steam, a pause in heating, and a few minutes of cool indoor air are all normal during it.",
    metaTitle: "Defrost cycle: normal, not a fault",
    metaDescription:
      "What a heat pump defrost cycle does, why frost forms on the outdoor coil, what steam and a heating pause mean, and when the behaviour is abnormal.",
    keywords: ["defrost cycle", "heat pump steaming", "heat pump blowing cold air", "why is my heat pump icing"],
    facts: [
      { label: "What it does", value: "Melts frost from the outdoor coil" },
      { label: "How", value: "Briefly reverses refrigerant flow" },
      { label: "Visible signs", value: "Steam, outdoor fan stopped, heating paused" },
      { label: "Duration", value: "Minutes, then heating resumes on its own" },
    ],
    howItWorks:
      "In heating the outdoor coil runs below the outdoor air temperature, so moisture in that air condenses on it and freezes. Frost insulates the coil and blocks airflow, so the control reverses the valve, sends hot gas outdoors, and stops the outdoor fan. The frost melts as water and steam, and the system returns to heating. The indoor fan is usually held off so the room does not get a blast of cold air.",
    whereYouMeetIt: [
      "In a complaint about steam pouring off the outdoor unit, which is melted frost rather than smoke.",
      "In a complaint about cool air in heating, when the pause happens to coincide with a call.",
      "In a genuine fault, where the coil stays iced across many cycles and defrost is not clearing it.",
    ],
    howToCheck: [
      {
        title: "Time the event before treating it as a fault",
        detail:
          "A cycle takes minutes and ends with heating resuming. A unit that stays iced for hours is a different problem.",
        performedBy: "owner",
      },
      {
        title: "Check the drainage under the outdoor unit",
        detail:
          "Melt water has to leave. A blocked base pan or a unit sitting in a puddle refreezes the water it just melted.",
        performedBy: "owner",
      },
      {
        title: "Confirm the coil is clear after a cycle finishes",
        detail:
          "Light frost that clears each time is normal operation. Ice that survives the cycle points at defrost control, the sensor, or the valve.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Steam from the outdoor unit is not smoke. It is melted frost evaporating off a warm coil.",
      "Cool indoor air during defrost is not a heating failure. The cycle ends by itself and heating resumes.",
      "Pouring hot water on a frozen outdoor unit refreezes at the base and blocks the drainage path.",
    ],
    faqs: [
      {
        question: "How often should a heat pump defrost?",
        answer:
          "As often as conditions put frost on the coil, which means more frequently in cold damp weather and rarely in dry cold. Controls initiate it on time, temperature, or measured coil conditions depending on the design.",
      },
      {
        question: "Is it normal for the outdoor unit to steam?",
        answer:
          "Yes. Frost melting off a warm coil produces visible vapour, sometimes a lot of it. It lasts as long as the cycle does.",
      },
      {
        question: "When is icing on the outdoor unit a real fault?",
        answer:
          "When the coil stays encased in ice across repeated cycles, when the base is frozen solid so melt water cannot drain, or when the unit never appears to defrost at all. Those point at the defrost control, its sensor, or the reversing valve.",
      },
    ],
    sourceIds: ["fujitsu-aduh-operation", "trane-mini-split-not-heating"],
    seeAlso: { label: "Outdoor unit iced over", path: "/heat-pump-outdoor-unit-iced-over/" },
  },
  {
    term: "Short cycling",
    slug: "short-cycling",
    question: "What is short cycling?",
    definition:
      "Repeatedly starting and stopping after only a few minutes of running. It wastes energy, wears the compressor, and usually points to a control, sizing, airflow, or refrigerant problem rather than to normal thermostat behaviour.",
    category: "controls",
    aliases: ["cycling on and off"],
    related: ["protection-code", "thermostat", "inverter-compressor"],
    shortAnswer:
      "Short cycling is a system repeatedly starting and stopping after only a few minutes. Each start costs energy and wear, and the pattern points at control, sizing, airflow, or refrigerant conditions.",
    metaTitle: "Short cycling: why it happens",
    metaDescription:
      "What short cycling is, why frequent starts cost more than long runs, how oversizing and thermostat placement cause it, and why inverter systems behave differently.",
    keywords: ["short cycling", "ac turns on and off repeatedly", "oversized air conditioner", "short cycle hvac"],
    facts: [
      { label: "Pattern", value: "Runs for minutes, stops, restarts soon after" },
      { label: "Costs", value: "Start-up energy and compressor wear" },
      { label: "Common drivers", value: "Oversizing, control placement, airflow, protection trips" },
      { label: "Inverter systems", value: "Modulate instead, so cycling is more notable" },
    ],
    howItWorks:
      "A system removes heat fastest at the start of a run, but it also dehumidifies and reaches steady conditions only after running for a while. Short runs never get there, and each start draws a surge of current and stresses the compressor. On a fixed-speed system, oversizing is a structural cause: the equipment satisfies the control faster than the building can even out.",
    whereYouMeetIt: [
      "In a complaint about a room that reaches temperature but never feels comfortable, because humidity is not being removed.",
      "In a protection code investigation, where a limit is being reached and reset repeatedly.",
      "In a control placement problem, where the sensor sits in a draught, in sunlight, or above a heat source.",
    ],
    howToCheck: [
      {
        title: "Time the runs and the gaps",
        detail:
          "Three minutes on and five off is a different problem from twelve on and twenty off. Write down the pattern before anyone opens anything.",
        performedBy: "owner",
      },
      {
        title: "Look at where the temperature is being sensed",
        detail:
          "Sunlight, a draught from a door, a lamp, or a television near the sensor all make the control satisfy early.",
        performedBy: "owner",
      },
      {
        title: "Check for a code that appears at each stop",
        detail:
          "If a protection limit is stopping the system rather than the control, the pattern is a symptom and the limit is the fault.",
        performedBy: "owner",
      },
    ],
    mistakes: [
      "A modulating inverter system slowing down is not short cycling. Continuous running at low output is what those systems are designed to do.",
      "Bigger equipment does not fix short cycling caused by oversizing. It makes the runs shorter still.",
    ],
    faqs: [
      {
        question: "Do mini-splits turn off when they reach the set temperature?",
        answer:
          "Inverter systems generally slow down rather than stop, holding the room steady at reduced output. A ductless system that stops and restarts repeatedly is behaving differently from its design intent.",
      },
      {
        question: "Can an oversized system cause short cycling?",
        answer:
          "Substantial oversizing on a fixed-speed system does, because it satisfies the control before the building has evened out. Manufacturers raise this specifically when discussing sizing.",
      },
      {
        question: "Why does short cycling matter if the room is at temperature?",
        answer:
          "Short runs remove less moisture, so the room can be at the right temperature and still feel clammy. Every start also costs a surge of current and adds compressor wear.",
      },
    ],
    sourceIds: ["trane-mini-split-sizing", "trane-mini-split-modulation"],
    seeAlso: { label: "Mini-split short cycling", path: "/mini-split-short-cycling/" },
  },
  {
    term: "Thermostat",
    slug: "thermostat",
    question: "What does a thermostat do?",
    definition:
      "The control that measures room temperature and calls for heating or cooling. Its wiring determines what it can control, which is why a thermostat swap can change how a heat pump stages its auxiliary heat.",
    category: "controls",
    aliases: ["room stat", "programmable thermostat"],
    related: ["c-wire", "auxiliary-heat", "short-cycling"],
    shortAnswer:
      "A thermostat measures room temperature and calls for heating or cooling. What it can actually control is set by the conductors run to it, which is why wiring decides compatibility.",
    metaTitle: "Thermostat: what the wiring decides",
    metaDescription:
      "What a thermostat does, why the wires available decide what it can control, how heat pump staging differs from a furnace, and where placement changes its behaviour.",
    keywords: ["thermostat wiring", "smart thermostat compatibility", "heat pump thermostat", "thermostat placement"],
    facts: [
      { label: "Measures", value: "Temperature at its own location, not the whole room" },
      { label: "Controls", value: "Whatever the wiring at that point allows" },
      { label: "Heat pump terminals", value: "Usually include O or B for the reversing valve" },
      { label: "Smart models need", value: "A continuous supply, commonly a C wire" },
    ],
    howItWorks:
      "The thermostat closes circuits between terminals to call for a function: cooling, heating, fan, second stage, or reversing valve position. Each function needs a conductor, so a replacement can only do what the existing cable supports. On a heat pump, the reversing valve terminal and the auxiliary heat staging are what make its wiring different from a furnace and air conditioner pair.",
    whereYouMeetIt: [
      "In a smart thermostat upgrade, where wire count is the compatibility question.",
      "In a heat pump running expensive, where auxiliary heat staging has been configured incorrectly after a swap.",
      "In a short cycling complaint, where the sensing location rather than the equipment is the cause.",
    ],
    howToCheck: [
      {
        title: "Photograph the existing wiring before removing anything",
        detail:
          "Terminal letters and wire colours do not always agree with convention, so the photograph of what was actually connected is the reference.",
        performedBy: "owner",
      },
      {
        title: "Check what is near the thermostat",
        detail:
          "Direct sun, a draught, a lamp, or an appliance nearby all change what it measures, and the equipment then behaves accordingly.",
        performedBy: "owner",
      },
      {
        title: "Confirm heat pump staging after a replacement",
        detail:
          "Auxiliary heat configured to run alongside the compressor too readily raises running cost without any fault appearing.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Wire colour is not a standard. Terminal letters are what matter, and installers do not always follow the colour convention.",
      "A thermostat measures its own location. Where it sits changes the behaviour of the whole system.",
      "Setting a higher temperature does not make a system heat faster. It only changes when the call stops.",
    ],
    faqs: [
      {
        question: "Why is my smart thermostat incompatible?",
        answer:
          "Usually because the cable run does not carry the conductors it needs, most often a common wire for continuous power. Heat pump staging terminals are the other frequent gap.",
      },
      {
        question: "Does a thermostat control a mini-split?",
        answer:
          "Ductless systems are usually controlled by their own handheld or wall controller rather than by a conventional thermostat. Interfaces exist to bridge them, and they are model specific.",
      },
      {
        question: "Where should a thermostat be installed?",
        answer:
          "On an interior wall away from direct sun, draughts, doorways, and heat-producing appliances, at a height that represents the occupied part of the room.",
      },
    ],
    sourceIds: ["trane-mitsubishi-remote"],
    seeAlso: { label: "Remote or controller not working", path: "/mini-split-remote-not-working/" },
  },
  {
    term: "C wire",
    slug: "c-wire",
    question: "What is a C wire?",
    definition:
      "The common conductor that gives a thermostat a continuous 24-volt supply. Smart thermostats need a continuous supply to run their display and radio, so an installation without a common wire has to power the thermostat some other way or it can restart or drop its connection.",
    category: "controls",
    aliases: ["common wire"],
    related: ["thermostat"],
    shortAnswer:
      "A C wire is the common conductor that completes a 24-volt circuit at the thermostat, giving it continuous power rather than only power while it is calling for heating or cooling.",
    metaTitle: "C wire: why smart stats need it",
    metaDescription:
      "What a C wire is, why continuous 24-volt power matters for a smart thermostat, and which alternatives exist when the cable run has no spare core.",
    keywords: ["c wire", "common wire thermostat", "no c wire", "smart thermostat power"],
    facts: [
      { label: "Provides", value: "Continuous 24-volt power at the thermostat" },
      { label: "Needed by", value: "Thermostats with a display, radio, or sensors" },
      { label: "Without it", value: "Power stealing, an adapter, or a new cable run" },
      { label: "Not present on", value: "Many older installations with four-core cable" },
    ],
    howItWorks:
      "A traditional thermostat only had to close a switch, so it needed no power of its own. A thermostat with a screen and a network radio needs power all the time, and the common conductor is what completes that circuit. Where no common exists, some thermostats draw a trickle through the heating or cooling circuit instead, which can chatter a relay or leave the thermostat resetting.",
    whereYouMeetIt: [
      "In a smart thermostat installation on an older property, where the cable has four cores and no spare.",
      "In a thermostat that loses its network connection or restarts intermittently.",
      "In an adapter kit, where a module at the equipment end frees a conductor for common use.",
    ],
    howToCheck: [
      {
        title: "Count the conductors at the thermostat plate",
        detail:
          "Look at how many wires are connected and how many spare cores sit unused in the back box. An unused core can sometimes be repurposed.",
        performedBy: "owner",
      },
      {
        title: "Check the other end before repurposing a spare",
        detail:
          "A core that is loose at the thermostat may be connected or cut at the equipment. Both ends have to be confirmed.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "The C wire does not carry the call. It completes the circuit so the thermostat can be powered while idle.",
      "Power stealing is not equivalent to a common wire. It can chatter relays and leave the thermostat short of power at exactly the wrong moment.",
    ],
    faqs: [
      {
        question: "Can I install a smart thermostat without a C wire?",
        answer:
          "Sometimes, using an adapter module at the equipment end or a model designed to work without one. Whether it is reliable depends on the equipment, so the manufacturer compatibility check comes before the purchase.",
      },
      {
        question: "What happens if a thermostat has no continuous power?",
        answer:
          "It can restart, lose its network connection, or drop settings when its internal reserve runs low. Power stealing designs can also make a relay chatter at the equipment.",
      },
      {
        question: "Do mini-splits need a C wire?",
        answer:
          "No. Ductless systems use their own controllers on a manufacturer communication bus rather than a 24-volt thermostat circuit, so the question does not arise on them.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Auxiliary heat",
    slug: "auxiliary-heat",
    question: "What is auxiliary heat?",
    definition:
      "Supplementary heating that runs when a heat pump alone cannot meet demand, usually electric resistance elements in North America or an immersion heater and boiler in United Kingdom hydronic systems. It costs more to run than the heat pump itself, so a change in how much it operates is worth investigating.",
    category: "controls",
    aliases: ["aux heat", "emergency heat", "backup heat"],
    related: ["heat-pump", "balance-point"],
    shortAnswer:
      "Auxiliary heat is supplementary heating that runs when a heat pump cannot meet demand on its own. It is usually electric resistance, which costs more per unit of heat than the heat pump.",
    metaTitle: "Auxiliary heat and emergency heat",
    metaDescription:
      "What auxiliary heat is, how it differs from emergency heat, why it costs more to run than the heat pump, and what makes it come on more often than it should.",
    keywords: ["auxiliary heat", "aux heat", "emergency heat", "heat pump backup heat"],
    facts: [
      { label: "Runs when", value: "The heat pump alone cannot meet demand" },
      { label: "Form", value: "Electric resistance elements, or a boiler in hydronic systems" },
      { label: "Cost", value: "Higher per unit of heat than the heat pump" },
      { label: "Emergency heat", value: "A separate setting that runs backup heat alone" },
    ],
    howItWorks:
      "Below the balance point, or during recovery from a setback, the heat pump cannot deliver everything the building is losing. Auxiliary heat makes up the shortfall. Because resistance heating delivers one unit of heat per unit of electricity while the heat pump delivers several, the same comfort costs considerably more while auxiliary is running, which is why the control logic that brings it in matters.",
    whereYouMeetIt: [
      "On a thermostat display, where an auxiliary or emergency heat indicator shows the backup is running.",
      "In a bill investigation, where a mild winter with high costs points at auxiliary running more than it needs to.",
      "In a control configuration, where a lockout temperature decides how cold it has to be before auxiliary is allowed.",
    ],
    howToCheck: [
      {
        title: "Watch when the auxiliary indicator comes on",
        detail:
          "Auxiliary during a deep cold snap is expected. Auxiliary at mild outdoor temperatures points at configuration rather than at weather.",
        performedBy: "owner",
      },
      {
        title: "Avoid large thermostat setbacks on a heat pump",
        detail:
          "Recovering several degrees quickly is exactly what brings auxiliary heat in, which can cost more than the setback saved.",
        performedBy: "owner",
      },
      {
        title: "Check the lockout and staging configuration",
        detail:
          "Manufacturers provide an outdoor lockout temperature and staging delays. Defaults left in place after a thermostat swap are a recognised cause of excess auxiliary running.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Emergency heat is not the same as auxiliary heat. Emergency heat runs the backup alone with the heat pump locked out, and it is for a broken heat pump rather than for cold weather.",
      "Auxiliary heat running does not mean the heat pump has failed. It means the demand exceeded what the heat pump was delivering at that moment.",
    ],
    faqs: [
      {
        question: "What is the difference between auxiliary and emergency heat?",
        answer:
          "Auxiliary supplements the heat pump automatically when demand exceeds its output. Emergency heat is a setting that locks the heat pump out and runs the backup alone, intended for when the heat pump itself is not working.",
      },
      {
        question: "Why does my aux heat run so often?",
        answer:
          "Common configuration reasons are a lockout temperature set too high, aggressive staging after a thermostat replacement, and large thermostat setbacks that force fast recovery. Genuinely cold weather below the balance point is the legitimate reason.",
      },
      {
        question: "Does the United Kingdom use auxiliary heat the same way?",
        answer:
          "The idea is the same but the hardware differs. Hydronic heat pumps commonly use an immersion heater in the cylinder, or a boiler in a hybrid arrangement, rather than duct-mounted resistance elements.",
      },
    ],
    sourceIds: ["doe-heat-pumps"],
  },
  {
    term: "Flow temperature",
    slug: "flow-temperature",
    question: "What is flow temperature?",
    definition:
      "The water temperature leaving a boiler or air-to-water heat pump toward the emitters, central to United Kingdom and European system design. Lower flow temperatures raise heat-pump efficiency but require emitters sized to suit them.",
    category: "controls",
    aliases: ["flow temp", "leaving water temperature"],
    related: ["air-to-water-heat-pump", "weather-compensation", "boiler"],
    shortAnswer:
      "Flow temperature is the temperature of the water leaving a boiler or heat pump toward the radiators or underfloor loops. Lowering it raises heat pump efficiency and lets a boiler condense.",
    metaTitle: "Flow temperature: the key setting",
    metaDescription:
      "What flow temperature means, why lowering it raises heat pump efficiency and lets a condensing boiler condense, and why emitter size sets how low you can go.",
    keywords: ["flow temperature", "leaving water temperature", "heat pump flow temp", "boiler flow temperature"],
    facts: [
      { label: "Measures", value: "Water temperature leaving the heat source" },
      { label: "Paired with", value: "Return temperature, which sets the delta across the system" },
      { label: "Lower is better for", value: "Heat pump efficiency and boiler condensing" },
      { label: "Limited by", value: "The heat output of the emitters at that temperature" },
    ],
    howItWorks:
      "A radiator gives out heat in proportion to how much hotter it is than the room, so a cooler flow temperature means a given radiator delivers less. A heat pump has the opposite preference: the smaller the lift between outdoor air and the water it is heating, the more heat it moves per unit of electricity. Matching the two is what emitter sizing is for.",
    whereYouMeetIt: [
      "On a heat pump controller, as the target the system is working to, either fixed or weather compensated.",
      "In a heat loss survey, where the design flow temperature decides which radiators need replacing.",
      "In a boiler efficiency discussion, where a lower flow temperature keeps return water cool enough to condense.",
    ],
    howToCheck: [
      {
        title: "Read flow and return on the controller",
        detail:
          "Both are displayed on most heat pump controllers. The difference between them shows how much heat the system is actually giving up to the building.",
        performedBy: "owner",
      },
      {
        title: "Lower the setting gradually and watch comfort",
        detail:
          "On a boiler, stepping the flow temperature down and observing whether the house still reaches temperature is a reversible change with a direct effect on gas use.",
        performedBy: "owner",
      },
      {
        title: "Check emitter output at the design temperature",
        detail:
          "Radiator output tables are published at stated temperature differences. A radiator sized for 70 C delivers substantially less at 45 C.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "Underfloor heating design",
        value: "Around 35 C",
        note: "The large emitting surface allows a low flow temperature",
      },
      {
        context: "Heat pump with sized radiators",
        value: "Around 45 to 55 C",
        note: "Requires radiators selected for that temperature rather than boiler-era sizing",
      },
      {
        context: "Condensing boiler threshold",
        value: "Return below about 55 C",
        note: "Above this, the secondary heat exchanger recovers no latent heat",
      },
    ],
    mistakes: [
      "A higher flow temperature does not heat a house faster in any useful sense. It reaches temperature sooner and costs more doing it.",
      "Flow temperature is not the same as the room set point. One is the water leaving the appliance, the other is the air in the room.",
    ],
    faqs: [
      {
        question: "What flow temperature should a heat pump run at?",
        answer:
          "The lowest the emitters can work with while still meeting the heat loss on a cold day. That figure comes from the survey and the emitter sizing rather than from a general rule.",
      },
      {
        question: "Will lowering my boiler flow temperature save money?",
        answer:
          "It lets a condensing boiler recover latent heat from its flue gases, which it cannot do while return water stays hot. The house takes longer to warm up, which is the trade-off.",
      },
      {
        question: "What is the difference between flow temperature and delta T?",
        answer:
          "Flow temperature is how hot the water leaving the appliance is. Delta T here is the difference between that and the water coming back, which shows how much heat the emitters extracted.",
      },
    ],
    sourceIds: ["ec-ecodesign"],
  },
  {
    term: "Weather compensation",
    slug: "weather-compensation",
    question: "What is weather compensation?",
    definition:
      "A control strategy that varies flow temperature according to outdoor temperature so the system delivers only the heat the building currently needs. It is standard on European heat-pump installations and materially affects running cost.",
    category: "controls",
    aliases: ["load compensation", "outdoor reset"],
    related: ["flow-temperature", "cop", "air-to-water-heat-pump"],
    shortAnswer:
      "Weather compensation varies the flow temperature according to outdoor temperature, so the system sends hotter water only when it is genuinely colder outside. In North America it is called outdoor reset.",
    metaTitle: "Weather compensation explained",
    metaDescription:
      "What weather compensation does, how a heating curve links outdoor temperature to flow temperature, why it raises heat pump efficiency, and how the curve is adjusted.",
    keywords: ["weather compensation", "outdoor reset", "heating curve", "heat pump weather compensation"],
    facts: [
      { label: "Varies", value: "Flow temperature, against outdoor temperature" },
      { label: "Also called", value: "Outdoor reset, in North American documentation" },
      { label: "Needs", value: "An outdoor sensor and a configured heating curve" },
      { label: "Improves", value: "Efficiency and comfort stability" },
    ],
    howItWorks:
      "Heat loss from a building rises roughly in proportion to how much colder it is outside, so the water temperature needed to replace that loss rises with it. A heating curve maps one to the other. The system then runs continuously at a low flow temperature in mild weather and raises it only as conditions demand, which keeps the heat pump working at the smallest lift it can.",
    whereYouMeetIt: [
      "On a heat pump controller, as a heating curve with a slope and an offset.",
      "In a running cost investigation, where a fixed flow temperature set at commissioning explains costs a correctly sized system should not have.",
      "In a comfort complaint, where a curve set too low leaves the house short on the coldest days.",
    ],
    howToCheck: [
      {
        title: "Confirm the outdoor sensor is reading sensibly",
        detail:
          "A sensor in direct sun, or one that has failed to a fixed value, feeds the curve the wrong input and the whole strategy follows it.",
        performedBy: "technician",
      },
      {
        title: "Adjust the curve one step at a time across a cold spell",
        detail:
          "Lowering the slope reduces flow temperature at low outdoor temperatures. Changing it repeatedly within a day tells you nothing, because the building responds slowly.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Weather compensation is not a thermostat replacement. It sets how hot the water is, while room controls still decide when heat is called for.",
      "A curve set too aggressively low saves nothing if the occupants respond by raising the room set point or switching on other heating.",
    ],
    faqs: [
      {
        question: "Is weather compensation the same as outdoor reset?",
        answer:
          "Yes. They are the same strategy under different regional names, and both work by mapping outdoor temperature to a target flow temperature through a curve.",
      },
      {
        question: "Why does my heat pump run constantly with it enabled?",
        answer:
          "That is the intended behaviour. Long low-output runs at a low flow temperature are more efficient than short bursts at a high one, and they hold the building steadier.",
      },
      {
        question: "How do I know if my curve is set correctly?",
        answer:
          "The house should hold temperature in cold weather without needing help, and the flow temperature should be visibly lower in mild weather. Needing to raise the room set point on cold days suggests the curve is too shallow.",
      },
    ],
    sourceIds: ["ec-ecodesign"],
  },
] satisfies GlossaryTermInput[];
