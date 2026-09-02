import type { GlossaryTerm } from "./schema";

/**
 * Reference vocabulary used across the site.
 *
 * Definitions are written for someone reading a manual for the first time, and
 * cover both United States and United Kingdom usage where the two differ.
 */
export const glossary = [
  /* ------------------------------------------------------- system types -- */
  {
    term: "Ductless mini-split",
    slug: "ductless-mini-split",
    definition:
      "A heating and cooling system with one or more indoor units connected to an outdoor unit by refrigerant pipes and a control cable, with no duct network in between. Because each indoor unit conditions the space it is mounted in, a fault can affect one room while the rest of the building carries on normally.",
    category: "system-types",
    aliases: ["mini split", "ductless system", "split air conditioner"],
    related: ["multi-zone-system", "line-set", "heat-pump"],
  },
  {
    term: "Multi-zone system",
    slug: "multi-zone-system",
    definition:
      "One outdoor unit serving several indoor units, each controlled separately. A fault reported on one indoor head can originate in the shared outdoor unit or in the branch pipework, so a multi-zone diagnosis has to establish whether other zones behave normally.",
    category: "system-types",
    aliases: ["multi split", "multi-split"],
    related: ["ductless-mini-split", "branch-box"],
  },
  {
    term: "Heat pump",
    slug: "heat-pump",
    definition:
      "A system that moves heat rather than creating it, and can run in both directions: taking heat out of a building in cooling and drawing heat in from outside air, ground, or water in heating. The same hardware provides both functions, which is why one fault can affect heating and cooling together.",
    category: "system-types",
    aliases: ["ASHP", "air source heat pump", "reverse cycle"],
    related: ["reversing-valve", "defrost-cycle", "balance-point"],
  },
  {
    term: "Air-to-water heat pump",
    slug: "air-to-water-heat-pump",
    definition:
      "A heat pump that transfers heat from outside air into a water circuit serving radiators, underfloor loops, or a hot water cylinder. This is the common domestic arrangement in the United Kingdom and much of Europe, where it usually replaces a boiler rather than a ducted system.",
    category: "system-types",
    aliases: ["hydronic heat pump", "monobloc heat pump"],
    related: ["heat-pump", "flow-temperature", "boiler"],
  },
  {
    term: "Boiler",
    slug: "boiler",
    definition:
      "An appliance that heats water for radiators, underfloor circuits, or a hot water cylinder, rather than heating air directly. Boilers dominate United Kingdom and European domestic heating, and are the equipment an air-to-water heat pump usually replaces or works alongside.",
    category: "system-types",
    aliases: ["combi boiler", "system boiler", "condensing boiler"],
    related: ["air-to-water-heat-pump", "flow-temperature"],
  },
  {
    term: "Ducted split system",
    slug: "ducted-split-system",
    definition:
      "A central system with an indoor air handler or furnace coil and an outdoor condensing unit, distributing conditioned air through ducts. Because the duct network sits between the equipment and the room, a ducted diagnosis has to separate what the equipment is doing from what the ducts are delivering.",
    category: "system-types",
    aliases: ["central air", "central heating and air"],
    related: ["air-handler", "static-pressure", "ductwork"],
  },
  {
    term: "VRF and VRV systems",
    slug: "vrf-system",
    definition:
      "Variable refrigerant flow systems, sold by Daikin under the VRV name, use one outdoor unit to serve many indoor units and vary refrigerant flow to each. They are common in commercial buildings and report faults with both a code and the address of the unit that raised it.",
    category: "system-types",
    aliases: ["VRF", "VRV", "variable refrigerant flow"],
    related: ["multi-zone-system", "error-code"],
  },
  {
    term: "PTAC unit",
    slug: "ptac-unit",
    definition:
      "A packaged terminal air conditioner: a self-contained heating and cooling unit installed through an exterior wall, used in hotels, care homes, and apartments. All components sit in one chassis, so service usually means removing the unit rather than working on separate indoor and outdoor sections.",
    category: "system-types",
    aliases: ["PTAC", "through-the-wall unit"],
    related: ["air-handler"],
  },

  /* --------------------------------------------------------- components -- */
  {
    term: "Compressor",
    slug: "compressor",
    definition:
      "The pump at the centre of the refrigeration circuit. It raises the pressure and temperature of refrigerant vapour so heat can be rejected at the condenser. Protection codes exist to stop the compressor before pressure, current, or temperature moves outside its design range.",
    category: "components",
    aliases: ["compressor motor"],
    related: ["inverter-compressor", "protection-code", "capacitor"],
  },
  {
    term: "Condenser coil",
    slug: "condenser-coil",
    definition:
      "The coil that releases heat from the refrigerant to the surrounding air. In cooling it sits in the outdoor unit. Anything that restricts air across it, or lets it draw back its own discharge air, raises operating pressure, which is the condition high-pressure protection codes are written to detect.",
    category: "components",
    aliases: ["outdoor coil"],
    related: ["evaporator-coil", "protection-code"],
  },
  {
    term: "Evaporator coil",
    slug: "evaporator-coil",
    definition:
      "The coil that absorbs heat from indoor air, causing the refrigerant inside it to boil from liquid to vapour. Because it runs below room temperature, it also condenses moisture out of the air, which is why every evaporator has a drain pan beneath it.",
    category: "components",
    aliases: ["indoor coil"],
    related: ["condensate-drain", "frozen-coil", "delta-t"],
    seeAlso: { label: "Mini-split smells musty", path: "/mini-split-smells-musty/" },
  },
  {
    term: "Air handler",
    slug: "air-handler",
    definition:
      "The indoor assembly containing the blower, the evaporator coil, the filter rack, and usually the drain pan. In a ducted system it moves conditioned air into the supply ducts and pulls room air back through the returns.",
    category: "components",
    aliases: ["AHU", "fan coil unit", "indoor unit"],
    related: ["blower-motor", "ductwork", "evaporator-coil"],
  },
  {
    term: "Blower motor",
    slug: "blower-motor",
    definition:
      "The motor driving the indoor fan. Modern systems use variable-speed motors that adjust to maintain airflow, which means a failing blower may show up as reduced capacity or a protection code long before the fan stops entirely.",
    category: "components",
    aliases: ["indoor fan motor", "fan motor"],
    related: ["air-handler", "static-pressure"],
    seeAlso: { label: "Mini-split making noise", path: "/mini-split-making-noise/" },
  },
  {
    term: "Reversing valve",
    slug: "reversing-valve",
    definition:
      "The valve that redirects refrigerant flow so a heat pump can switch between heating and cooling. A valve that sticks part-way through a changeover produces the classic symptom of a system that cools when heat is called for, or the reverse.",
    category: "components",
    aliases: ["four-way valve", "changeover valve"],
    related: ["heat-pump", "defrost-cycle"],
    seeAlso: { label: "Mini-split not heating", path: "/mini-split-not-heating/" },
  },
  {
    term: "Expansion valve",
    slug: "expansion-valve",
    definition:
      "The metering device that drops refrigerant pressure before the evaporator and controls how much liquid enters it. Thermostatic expansion valves respond mechanically; electronic expansion valves are driven by the control board and report their own faults.",
    category: "components",
    aliases: ["TXV", "EEV", "metering device"],
    related: ["superheat", "control-board"],
  },
  {
    term: "Line set",
    slug: "line-set",
    definition:
      "The pair of insulated copper pipes connecting an indoor unit to an outdoor unit: a smaller liquid line and a larger suction line. Length and insulation affect performance, and every flare connection is a mechanical joint that has to be made correctly to stay sealed.",
    category: "components",
    aliases: ["refrigerant lines", "pipe run"],
    related: ["refrigerant-leak", "ductless-mini-split"],
  },
  {
    term: "Condensate drain",
    slug: "condensate-drain",
    definition:
      "The path that carries water from the drain pan out of the building, by gravity or with a pump. If the path is obstructed or a pump stops, water collects in the pan instead of leaving the building. Many systems include a float switch that halts operation before the pan overflows.",
    category: "components",
    aliases: ["drain line", "condensate pump", "drain pan"],
    related: ["evaporator-coil", "float-switch"],
    seeAlso: { label: "Mini-split leaking water", path: "/mini-split-leaking-water/" },
  },
  {
    term: "Float switch",
    slug: "float-switch",
    definition:
      "A safety switch in the drain pan or condensate pump that interrupts operation when water rises above a set level. Because it cuts the call for cooling rather than the whole unit, a tripped float switch shows up as a system that will run in fan mode but not cool.",
    category: "components",
    aliases: ["safety switch", "overflow switch"],
    related: ["condensate-drain"],
    seeAlso: { label: "Mini-split leaking water", path: "/mini-split-leaking-water/" },
  },
  {
    term: "Capacitor",
    slug: "capacitor",
    definition:
      "A component that stores and releases electrical energy to start and run single-phase motors. Capacitors hold a charge after power is removed, which is one reason opening an electrical compartment is technician work rather than a homeowner check.",
    category: "components",
    aliases: ["run capacitor", "start capacitor", "dual capacitor"],
    related: ["contactor", "compressor"],
    seeAlso: { label: "Outdoor unit not running", path: "/mini-split-outdoor-unit-not-running/" },
  },
  {
    term: "Contactor",
    slug: "contactor",
    definition:
      "An electrically operated switch that connects mains power to the compressor and outdoor fan when the control system calls for them. Its contacts carry the full load current, so when they pit or weld the outdoor unit can fail to start or fail to stop. Checking one means opening a live electrical compartment, which makes it technician work.",
    category: "components",
    aliases: ["relay"],
    related: ["capacitor", "control-board"],
    seeAlso: { label: "Outdoor unit not running", path: "/mini-split-outdoor-unit-not-running/" },
  },
  {
    term: "Control board",
    slug: "control-board",
    definition:
      "The printed circuit board that reads sensors, drives outputs, and decides when to run or protect the system. It is also what generates the fault code you see, which means a code describes what the board detected rather than which part has failed.",
    category: "components",
    aliases: ["PCB", "main board", "controller board"],
    related: ["error-code", "inverter-module"],
    seeAlso: { label: "Gree E6 communication code", path: "/brands/gree/e6-error-code/" },
  },
  {
    term: "Inverter module",
    slug: "inverter-module",
    definition:
      "The power electronics that vary compressor speed, also called the IPM or intelligent power module. Inverter-module protection codes usually mean the module measured current, voltage, or temperature outside limits and stopped before damage occurred.",
    category: "components",
    aliases: ["IPM", "inverter board", "power module"],
    related: ["inverter-compressor", "protection-code"],
    seeAlso: { label: "MRCOOL P1 / PC01 code", path: "/brands/mrcool/p1-pc01-error-code/" },
  },
  {
    term: "Thermistor",
    slug: "thermistor",
    definition:
      "A temperature sensor whose electrical resistance changes predictably with temperature. Sensor fault codes normally mean the board measured a resistance that is open, shorted, or out of range, which can be the sensor, the plug, or the wiring to it.",
    category: "components",
    aliases: ["temperature sensor", "NTC sensor"],
    related: ["sensor-fault", "control-board"],
    seeAlso: { label: "Daikin A5 coil temperature code", path: "/brands/daikin/a5-error-code/" },
  },
  {
    term: "Branch box",
    slug: "branch-box",
    definition:
      "A distribution unit used on some multi-zone systems to split refrigerant and control signals between indoor units. Because it sits between the outdoor unit and several heads, a branch-box fault can present as a problem in one zone only.",
    category: "components",
    aliases: ["distribution box", "branch selector"],
    related: ["multi-zone-system"],
  },

  /* ------------------------------------------------------- refrigeration -- */
  {
    term: "Refrigerant",
    slug: "refrigerant",
    definition:
      "The working fluid that carries heat around the circuit by evaporating and condensing at useful temperatures. It is not consumed in normal operation, so a system that is low on refrigerant has a leak rather than a need for a routine top-up.",
    category: "refrigeration",
    aliases: ["gas", "coolant"],
    related: ["refrigerant-leak", "r410a", "r32"],
  },
  {
    term: "R-410A",
    slug: "r410a",
    definition:
      "A refrigerant blend widely used in split systems and heat pumps from the 2000s onward. It operates at higher pressures than the R-22 it replaced, and equipment, gauges, and recovery equipment must be rated for it.",
    category: "refrigeration",
    aliases: ["410A", "Puron"],
    related: ["refrigerant", "r32"],
  },
  {
    term: "R-32",
    slug: "r32",
    definition:
      "A single-component refrigerant with a lower global warming potential than R-410A, now standard on many new systems in Europe and increasingly in North America. It is mildly flammable, classified A2L, which changes installation and service requirements.",
    category: "refrigeration",
    aliases: ["R32", "A2L refrigerant"],
    related: ["refrigerant", "f-gas-regulation"],
  },
  {
    term: "Superheat",
    slug: "superheat",
    definition:
      "How many degrees the refrigerant vapour has risen above its boiling point at the measured pressure. Technicians use it to judge whether the evaporator is being fed correctly, since too little superheat risks liquid returning to the compressor.",
    category: "refrigeration",
    aliases: [],
    related: ["subcooling", "expansion-valve", "saturation-temperature"],
  },
  {
    term: "Subcooling",
    slug: "subcooling",
    definition:
      "How many degrees the liquid refrigerant has been cooled below its condensing temperature. Together with superheat it indicates whether the charge and the metering device are working as designed, which is why both are recorded during commissioning.",
    category: "refrigeration",
    aliases: [],
    related: ["superheat", "refrigerant-charge"],
  },
  {
    term: "Saturation temperature",
    slug: "saturation-temperature",
    definition:
      "The temperature at which a refrigerant changes between liquid and vapour at a given pressure. Because the relationship is fixed for each refrigerant, a pressure reading can be converted into a temperature and compared with what the system is actually doing.",
    category: "refrigeration",
    aliases: ["sat temp"],
    related: ["superheat", "subcooling"],
  },
  {
    term: "Refrigerant charge",
    slug: "refrigerant-charge",
    definition:
      "The mass of refrigerant a system is designed to hold, stated on the data plate and adjusted for pipe length at installation. Both undercharge and overcharge reduce capacity and can trigger protection codes rather than an obvious fault.",
    category: "refrigeration",
    aliases: ["charge", "gas charge"],
    related: ["subcooling", "data-plate"],
  },
  {
    term: "Refrigerant leak",
    slug: "refrigerant-leak",
    definition:
      "A loss of refrigerant through a joint, a corroded coil, or damaged pipework. Because refrigerant is not consumed, repeated loss of capacity between seasons points to a leak that needs finding rather than a system that needs recharging.",
    category: "refrigeration",
    aliases: ["gas leak"],
    related: ["refrigerant", "line-set", "f-gas-regulation"],
    seeAlso: { label: "Mini-split not cooling", path: "/mini-split-not-cooling/" },
  },
  {
    term: "Evacuation",
    slug: "evacuation",
    definition:
      "Pulling a deep vacuum on a system with a vacuum pump to remove air and moisture before charging, measured in microns or millibar. Air and moisture left inside react with the oil and refrigerant over time, which is why manufacturers publish a target vacuum level and a hold test as part of commissioning.",
    category: "service",
    aliases: ["vacuum", "pull down"],
    related: ["commissioning", "refrigerant-charge"],
  },

  /* ------------------------------------------------------------ airflow -- */
  {
    term: "Static pressure",
    slug: "static-pressure",
    definition:
      "The resistance the duct system presents to the blower, measured in inches of water column or pascals. High static pressure reduces airflow, raises energy use, and can cause coil freezing even when the equipment itself is healthy.",
    category: "airflow",
    aliases: ["external static pressure", "ESP"],
    related: ["ductwork", "blower-motor", "frozen-coil"],
  },
  {
    term: "Ductwork",
    slug: "ductwork",
    definition:
      "The supply and return duct network that carries air between the air handler and the rooms it serves. Undersized returns, crushed flexible duct, and leaking joints all reduce delivered capacity without producing an equipment fault code.",
    category: "airflow",
    aliases: ["ducts", "duct system"],
    related: ["static-pressure", "return-air"],
  },
  {
    term: "Return air",
    slug: "return-air",
    definition:
      "Room air drawn back to the air handler to be filtered and conditioned again. Blocked returns, closed doors in single-return houses, and dirty filters all starve the system of return air and show up first as reduced capacity.",
    category: "airflow",
    aliases: ["return", "return duct"],
    related: ["air-filter", "delta-t"],
  },
  {
    term: "Air filter",
    slug: "air-filter",
    definition:
      "The filter that protects the coil and blower from dust. In ductless systems it is a washable mesh screen behind the front panel; in ducted systems it is a replaceable panel filter. As it loads it restricts airflow across the coil, and that restriction is what connects filter condition to capacity, coil temperature, and icing.",
    category: "airflow",
    aliases: ["filter", "MERV filter"],
    related: ["merv-rating", "return-air", "frozen-coil"],
    seeAlso: { label: "How to clean a mini-split filter", path: "/mini-split-filter-cleaning/" },
  },
  {
    term: "MERV rating",
    slug: "merv-rating",
    definition:
      "A scale from 1 to 16 describing how effectively a filter captures particles, used mainly in North America. A higher rating traps more, but also adds resistance, so a filter must be matched to what the blower and duct system can handle.",
    category: "airflow",
    aliases: ["MERV"],
    related: ["air-filter", "static-pressure"],
  },
  {
    term: "Delta T",
    slug: "delta-t",
    definition:
      "The temperature difference between the air entering and leaving the indoor coil, sometimes called split. A delta T well outside the manufacturer's stated range points to an airflow or refrigerant problem, and tells you which direction to look.",
    category: "measurement",
    aliases: ["temperature split", "ΔT"],
    related: ["evaporator-coil", "return-air"],
    seeAlso: { label: "Mini-split not cooling", path: "/mini-split-not-cooling/" },
  },
  {
    term: "Frozen coil",
    slug: "frozen-coil",
    definition:
      "Ice forming on the indoor coil, usually because airflow has dropped or the refrigerant charge is low. Running a frozen system risks liquid refrigerant reaching the compressor, so the standard response is to stop cooling and let it thaw before diagnosing.",
    category: "airflow",
    aliases: ["iced coil", "coil icing"],
    related: ["air-filter", "static-pressure", "refrigerant-charge"],
    seeAlso: { label: "Frozen indoor coil", path: "/mini-split-frozen-coil/" },
  },

  /* ----------------------------------------------------------- controls -- */
  {
    term: "Error code",
    slug: "error-code",
    definition:
      "A short alphanumeric message a control board shows when it detects a condition outside normal limits. Codes are defined per product family, so the same characters can mean different things on two systems from the same manufacturer.",
    category: "controls",
    aliases: ["fault code", "alarm code"],
    related: ["protection-code", "control-board", "data-plate"],
    seeAlso: { label: "Error code index", path: "/error-codes/" },
  },
  {
    term: "Protection code",
    slug: "protection-code",
    definition:
      "A code that reports the system stopping itself deliberately, for example on high pressure, high current, or module temperature. It records that a limit was reached rather than that a part failed, and clearing it without finding the cause simply repeats the event.",
    category: "controls",
    aliases: ["protection fault", "limit fault"],
    related: ["error-code", "inverter-module"],
    seeAlso: { label: "Error code index", path: "/error-codes/" },
  },
  {
    term: "Defrost cycle",
    slug: "defrost-cycle",
    definition:
      "A normal heat-pump routine that briefly reverses operation to melt frost from the outdoor coil. Steam from the outdoor unit, a pause in heating, and a short burst of cool air from indoor units are expected behaviour, not a fault.",
    category: "controls",
    aliases: ["defrost", "defrost mode"],
    related: ["heat-pump", "reversing-valve"],
    seeAlso: { label: "Outdoor unit iced over", path: "/heat-pump-outdoor-unit-iced-over/" },
  },
  {
    term: "Short cycling",
    slug: "short-cycling",
    definition:
      "Repeatedly starting and stopping after only a few minutes of running. It wastes energy, wears the compressor, and usually points to a control, sizing, airflow, or refrigerant problem rather than to normal thermostat behaviour.",
    category: "controls",
    aliases: ["cycling on and off"],
    related: ["protection-code", "thermostat"],
    seeAlso: { label: "Mini-split short cycling", path: "/mini-split-short-cycling/" },
  },
  {
    term: "Thermostat",
    slug: "thermostat",
    definition:
      "The control that measures room temperature and calls for heating or cooling. Its wiring determines what it can control, which is why a thermostat swap can change how a heat pump stages its auxiliary heat.",
    category: "controls",
    aliases: ["room stat", "programmable thermostat"],
    related: ["c-wire", "auxiliary-heat", "short-cycling"],
    seeAlso: { label: "Remote or controller not working", path: "/mini-split-remote-not-working/" },
  },
  {
    term: "C wire",
    slug: "c-wire",
    definition:
      "The common conductor that gives a thermostat a continuous 24-volt supply. Smart thermostats need a continuous supply to run their display and radio, so an installation without a common wire has to power the thermostat some other way or it can restart or drop its connection.",
    category: "controls",
    aliases: ["common wire"],
    related: ["thermostat"],
  },
  {
    term: "Auxiliary heat",
    slug: "auxiliary-heat",
    definition:
      "Supplementary heating that runs when a heat pump alone cannot meet demand, usually electric resistance elements in North America or an immersion heater and boiler in United Kingdom hydronic systems. It costs more to run than the heat pump itself, so a change in how much it operates is worth investigating.",
    category: "controls",
    aliases: ["aux heat", "emergency heat", "backup heat"],
    related: ["heat-pump", "balance-point"],
  },
  {
    term: "Flow temperature",
    slug: "flow-temperature",
    definition:
      "The water temperature leaving a boiler or air-to-water heat pump toward the emitters, central to United Kingdom and European system design. Lower flow temperatures raise heat-pump efficiency but require emitters sized to suit them.",
    category: "controls",
    aliases: ["flow temp", "leaving water temperature"],
    related: ["air-to-water-heat-pump", "weather-compensation"],
  },
  {
    term: "Weather compensation",
    slug: "weather-compensation",
    definition:
      "A control strategy that varies flow temperature according to outdoor temperature so the system delivers only the heat the building currently needs. It is standard on European heat-pump installations and materially affects running cost.",
    category: "controls",
    aliases: ["load compensation", "outdoor reset"],
    related: ["flow-temperature", "cop"],
  },

  /* -------------------------------------------------------- measurement -- */
  {
    term: "BTU",
    slug: "btu",
    definition:
      "The British thermal unit, the heat needed to raise one pound of water by one degree Fahrenheit. Equipment capacity is usually quoted in BTU per hour in North America, while the same figure appears in kilowatts in the United Kingdom and Europe.",
    category: "measurement",
    aliases: ["BTU/h", "British thermal unit"],
    related: ["ton-of-refrigeration"],
  },
  {
    term: "Ton of refrigeration",
    slug: "ton-of-refrigeration",
    definition:
      "A capacity unit equal to 12,000 BTU per hour, roughly 3.5 kilowatts. It comes from the cooling once provided by melting a ton of ice in a day, and is still standard shorthand for equipment size in North America.",
    category: "measurement",
    aliases: ["ton", "tonnage"],
    related: ["btu"],
  },
  {
    term: "SEER and SEER2",
    slug: "seer",
    definition:
      "Seasonal energy efficiency ratio, the cooling output over a season divided by the electricity used. SEER2 is the current United States test procedure, measured under higher external static pressure, so SEER2 figures read lower than older SEER values for the same equipment.",
    category: "efficiency",
    aliases: ["SEER", "SEER2"],
    related: ["hspf", "eer"],
  },
  {
    term: "HSPF and HSPF2",
    slug: "hspf",
    definition:
      "Heating seasonal performance factor, the heat delivered over a season divided by the electricity used, with HSPF2 the current United States test procedure. It is the heating counterpart to SEER and is not comparable with European SCOP figures.",
    category: "efficiency",
    aliases: ["HSPF", "HSPF2"],
    related: ["seer", "scop"],
  },
  {
    term: "EER",
    slug: "eer",
    definition:
      "Energy efficiency ratio: cooling output divided by electrical input at one fixed operating condition, rather than across a season. It is useful for comparing equipment at a specific outdoor temperature, which is why it appears alongside SEER on North American data sheets.",
    category: "efficiency",
    aliases: ["energy efficiency ratio"],
    related: ["seer", "cop"],
  },
  {
    term: "COP",
    slug: "cop",
    definition:
      "Coefficient of performance: heat delivered divided by electricity consumed at a specific operating condition. A COP of 3.5 means three and a half units of heat for each unit of electricity, and the figure falls as outdoor temperature drops.",
    category: "efficiency",
    aliases: ["coefficient of performance"],
    related: ["scop", "heat-pump"],
  },
  {
    term: "SCOP",
    slug: "scop",
    definition:
      "Seasonal coefficient of performance, the European measure of heat-pump efficiency across a whole heating season and climate profile. It is the figure quoted on United Kingdom and European product labels and is more realistic than a single-point COP.",
    category: "efficiency",
    aliases: ["seasonal COP"],
    related: ["cop", "hspf"],
  },
  {
    term: "Balance point",
    slug: "balance-point",
    definition:
      "The outdoor temperature at which a heat pump's output exactly matches the building's heat loss. Below it, the system needs auxiliary heat or longer run times, so a complaint that appears during a cold snap can describe correct operation rather than a fault.",
    category: "efficiency",
    aliases: ["thermal balance point"],
    related: ["auxiliary-heat", "heat-pump"],
    seeAlso: { label: "Mini-split not heating", path: "/mini-split-not-heating/" },
  },
  {
    term: "Inverter compressor",
    slug: "inverter-compressor",
    definition:
      "A compressor whose speed varies with demand instead of switching fully on and off. Inverter systems hold temperature more steadily and use less energy at part load, and they report a distinct family of drive and module fault codes.",
    category: "efficiency",
    aliases: ["variable speed compressor", "DC inverter"],
    related: ["inverter-module", "compressor"],
  },

  /* ------------------------------------------------------------ service -- */
  {
    term: "Data plate",
    slug: "data-plate",
    definition:
      "The label on the equipment listing model number, serial number, electrical ratings, and refrigerant charge. It is the starting point for any accurate diagnosis, because code tables and service data are published per model rather than per brand.",
    category: "service",
    aliases: ["nameplate", "rating plate", "spec plate"],
    related: ["error-code", "service-manual"],
    seeAlso: { label: "Error code index", path: "/error-codes/" },
  },
  {
    term: "Service manual",
    slug: "service-manual",
    definition:
      "The manufacturer document written for technicians, containing wiring diagrams, code tables, pressure data, and diagnostic sequences. It is more specific than the owner's manual and is the source that settles what a code means on a given model.",
    category: "service",
    aliases: ["technical manual", "installation manual"],
    related: ["data-plate", "error-code"],
  },
  {
    term: "Commissioning",
    slug: "commissioning",
    definition:
      "The measured handover of a new system: charge verified, airflow set, controls configured, and readings recorded. A commissioning sheet is the reference that later service visits compare against when performance is questioned.",
    category: "service",
    aliases: ["handover", "start-up"],
    related: ["evacuation", "refrigerant-charge"],
  },
  {
    term: "F-Gas regulation",
    slug: "f-gas-regulation",
    definition:
      "United Kingdom and European Union rules governing fluorinated refrigerants, including who may handle them, leak checking, and record keeping. Work on the refrigerant circuit requires certification, which is why refrigerant tasks sit outside homeowner checks.",
    category: "service",
    aliases: ["F Gas", "FGas certification"],
    related: ["refrigerant", "epa-608"],
  },
  {
    term: "EPA Section 608",
    slug: "epa-608",
    definition:
      "The United States certification required to handle refrigerants under the Clean Air Act. Like F-Gas in Europe, it makes opening a refrigerant circuit a licensed activity rather than a do-it-yourself task.",
    category: "service",
    aliases: ["EPA 608", "Section 608"],
    related: ["f-gas-regulation", "refrigerant"],
  },
  {
    term: "Sensor fault",
    slug: "sensor-fault",
    definition:
      "A code raised when a temperature or pressure sensor reads outside its expected range. The sensor itself is only one possibility: the connector, the harness, and the board input all sit in the same measurement path.",
    category: "service",
    aliases: ["sensor error"],
    related: ["thermistor", "error-code"],
    seeAlso: { label: "Pioneer E1 temperature sensor code", path: "/brands/pioneer/e1-temperature-sensor-error-code/" },
  },
] satisfies GlossaryTerm[];
