import type { GlossaryTermInput } from "../schema";

/**
 * The parts a code, a manual, or a quotation will name.
 *
 * A code names what a board measured, not what failed, so the value of these
 * entries is in saying what each part does and which other parts sit in the
 * same measurement path. That is what turns a code into a shortlist.
 */
export const components = [
  {
    term: "Compressor",
    slug: "compressor",
    question: "What does a compressor do?",
    definition:
      "The pump at the centre of the refrigeration circuit. It raises the pressure and temperature of refrigerant vapour so heat can be rejected at the condenser. Protection codes exist to stop the compressor before pressure, current, or temperature moves outside its design range.",
    category: "components",
    aliases: ["compressor motor"],
    related: ["inverter-compressor", "protection-code", "capacitor"],
    shortAnswer:
      "The compressor is the pump that drives a refrigeration circuit. It raises refrigerant vapour to a high pressure and temperature so the heat it carries can be released at the condenser coil.",
    metaTitle: "Compressor: the pump of the circuit",
    metaDescription:
      "What an HVAC compressor does, why raising pressure is what makes heat move, and why protection codes stop it before a limit is reached.",
    keywords: [
      "hvac compressor",
      "what does a compressor do",
      "compressor not running",
      "compressor protection code",
    ],
    facts: [
      { label: "Job", value: "Raises refrigerant pressure and temperature" },
      { label: "Location", value: "Outdoor unit on a split system" },
      { label: "Protected against", value: "High pressure, high current, high discharge temperature" },
      { label: "Access", value: "Sealed circuit and live electrical compartment, technician only" },
    ],
    howItWorks:
      "Low-pressure vapour leaves the evaporator carrying the heat it absorbed, and the compressor squeezes it into a smaller volume. That raises its temperature above the outdoor air, which is the only reason the heat will flow out of it at the condenser. Everything else in the circuit exists to keep the compressor fed with vapour rather than liquid.",
    whereYouMeetIt: [
      "In a protection code, where the board stopped the compressor because a limit was reached rather than because the compressor failed.",
      "In a quotation, where compressor replacement approaches the cost of the outdoor unit and the age of the system becomes the decision.",
      "In a noise complaint, where a change in the sound at start-up is the observation a technician wants described.",
    ],
    howToCheck: [
      {
        title: "Note whether the outdoor fan runs without the compressor",
        detail:
          "A fan turning while the unit produces no cooling narrows the search to the compressor circuit rather than to the whole outdoor supply.",
        performedBy: "owner",
      },
      {
        title: "Record the code and the conditions it appeared under",
        detail:
          "Outdoor temperature, how long the system had run, and whether it had just restarted all change what a protection code points at.",
        performedBy: "owner",
      },
      {
        title: "Measure running current against the data plate",
        detail:
          "The plate states rated load amps. A reading well outside it, taken with the correct instrument on a live circuit, is technician work.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A compressor protection code does not mean the compressor has failed. It records that a limit was reached, and clearing it without finding the cause repeats the event.",
      "Compressors do not consume refrigerant. A circuit low on charge has lost it somewhere, and topping up without finding the loss is a temporary measure.",
    ],
    faqs: [
      {
        question: "Why does the compressor stop but the fan keeps running?",
        answer:
          "Boards commonly keep the fan running after stopping the compressor, either to cool the outdoor coil or as part of a protection routine. It tells you power reaches the unit and the control board is still awake.",
      },
      {
        question: "How long should a compressor last?",
        answer:
          "Life depends on the run conditions it has been kept in rather than on hours alone. Repeated protection events, low charge, and restricted airflow all shorten it, which is why the cause behind a code matters more than the code.",
      },
      {
        question: "Can I test the compressor myself?",
        answer:
          "No. Testing means opening a live electrical compartment that also holds charged capacitors, and any refrigerant-side measurement requires certification. Observing symptoms and recording codes is the owner-side limit.",
      },
    ],
    sourceIds: ["trane-mini-split-compressor", "gree-h5-guide"],
    seeAlso: { label: "Outdoor unit not running", path: "/mini-split-outdoor-unit-not-running/" },
  },
  {
    term: "Condenser coil",
    slug: "condenser-coil",
    question: "What does the condenser coil do?",
    definition:
      "The coil that releases heat from the refrigerant to the surrounding air. In cooling it sits in the outdoor unit. Anything that restricts air across it, or lets it draw back its own discharge air, raises operating pressure, which is the condition high-pressure protection codes are written to detect.",
    category: "components",
    aliases: ["outdoor coil"],
    related: ["evaporator-coil", "protection-code", "compressor"],
    shortAnswer:
      "The condenser coil is where refrigerant gives up its heat and turns back into liquid. In cooling it is the outdoor coil, and anything blocking airflow across it raises system pressure.",
    metaTitle: "Condenser coil: what it does",
    metaDescription:
      "What the condenser coil does, why restricted airflow across it raises pressure, how recirculated discharge air causes the same problem, and which codes result.",
    keywords: ["condenser coil", "outdoor coil", "dirty condenser coil", "high pressure protection"],
    facts: [
      { label: "Job", value: "Rejects heat, condensing vapour back to liquid" },
      { label: "Location in cooling", value: "Outdoor unit" },
      { label: "Location in heating", value: "Roles swap, the indoor coil condenses" },
      { label: "Depends on", value: "Free air across the fins and clear discharge" },
    ],
    howItWorks:
      "Hot high-pressure vapour from the compressor passes through the coil while a fan drives outdoor air across it. The refrigerant gives up heat, condenses to liquid, and leaves ready to be metered into the evaporator. The temperature it condenses at is set by how easily that heat can leave, so restricted air forces the pressure up until it can.",
    whereYouMeetIt: [
      "In a high-pressure protection code, where the board stopped the system because the condensing pressure climbed past a limit.",
      "In a maintenance recommendation, where clearing leaves, grass, and fin damage is the work being described.",
      "In a siting complaint, where a unit in a tight enclosure or a recess draws back the hot air it just discharged.",
    ],
    howToCheck: [
      {
        title: "Clear the space around the outdoor unit",
        detail:
          "Manufacturers publish minimum clearances for each face. Vegetation, fencing, and stored items inside those distances change what the coil can reject.",
        performedBy: "owner",
      },
      {
        title: "Look through the fins toward the light",
        detail:
          "A coil packed with seeds, pollen, or lint blocks light. Bent fins do the same locally. Both restrict air before anything on the refrigerant side is at fault.",
        performedBy: "owner",
      },
      {
        title: "Compare condensing temperature with outdoor air",
        detail:
          "Converting head pressure to saturation temperature and comparing it with the air entering the coil shows how much the coil is struggling to reject heat.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "The condenser is not always outdoors. In heating the roles swap and the indoor coil does the condensing, which is why one blocked coil can affect both modes differently.",
      "Washing a coil is not always harmless. High-pressure water bends fins and drives debris deeper, and some coatings and coils have manufacturer instructions that say how.",
    ],
    faqs: [
      {
        question: "Does a dirty condenser coil raise running cost?",
        answer:
          "Yes. Restricted heat rejection forces the compressor to work against a higher pressure, which raises the electricity used for the same cooling delivered, before any protection code is reached.",
      },
      {
        question: "How much clearance does an outdoor unit need?",
        answer:
          "The figure is published per model, and it differs between the intake faces and the discharge face. The installation manual for that unit is what settles it, not a general rule.",
      },
      {
        question: "Can I hose the outdoor coil down myself?",
        answer:
          "Gentle rinsing from the direction the manual specifies, with power isolated, is within owner maintenance on many units. Anything involving chemical cleaners, fin combs, or removing panels is technician work.",
      },
    ],
    sourceIds: ["trane-mini-split-not-cooling", "gree-h5-guide"],
  },
  {
    term: "Evaporator coil",
    slug: "evaporator-coil",
    question: "What does the evaporator coil do?",
    definition:
      "The coil that absorbs heat from indoor air, causing the refrigerant inside it to boil from liquid to vapour. Because it runs below room temperature, it also condenses moisture out of the air, which is why every evaporator has a drain pan beneath it.",
    category: "components",
    aliases: ["indoor coil"],
    related: ["condensate-drain", "frozen-coil", "delta-t"],
    shortAnswer:
      "The evaporator coil is where refrigerant boils and absorbs heat from indoor air. Because it runs below room temperature it also condenses water out of that air, which is what the drain pan collects.",
    metaTitle: "Evaporator coil: what it does",
    metaDescription:
      "What the evaporator coil does, why boiling refrigerant is what removes heat, how the coil dehumidifies as a side effect, and why it ices when airflow drops.",
    keywords: ["evaporator coil", "indoor coil", "coil freezing", "why does my ac drip water"],
    facts: [
      { label: "Job", value: "Absorbs heat, boiling liquid refrigerant to vapour" },
      { label: "Location in cooling", value: "Indoor unit or air handler" },
      { label: "Side effect", value: "Condenses moisture out of the air" },
      { label: "Needs", value: "Steady airflow across it and a clear drain beneath it" },
    ],
    howItWorks:
      "Cold low-pressure liquid enters the coil and boils as room air passes over the fins, and the heat that boiling absorbs is the heat removed from the room. Because the surface sits below the dew point of the air, water condenses on it and runs into the pan, which is why a working system in humid weather produces a steady trickle at the drain.",
    whereYouMeetIt: [
      "In a delta T measurement, because the temperature drop across this coil is what the reading describes.",
      "In an icing complaint, where reduced airflow or low charge has pushed the coil surface below freezing.",
      "In a musty smell complaint, where the permanently damp coil and pan are the surfaces being cleaned.",
    ],
    howToCheck: [
      {
        title: "Check the filter before the coil",
        detail:
          "Air reaches the coil through the filter. A loaded filter starves the coil, and that is visible and reversible without opening anything.",
        performedBy: "owner",
      },
      {
        title: "Look for ice or a water trail",
        detail:
          "Frost on the coil face or water dripping from the front of an indoor head both point at the coil rather than at the outdoor unit.",
        performedBy: "owner",
      },
      {
        title: "Measure air temperature in and out",
        detail:
          "A thermometer at the return and at the supply gives the split across the coil, which is compared against the range the manual publishes for that model.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Water at the indoor unit is not automatically a refrigerant leak. Condensate is a normal product of cooling, and where it ends up is a drainage question.",
      "A frozen coil is not fixed by running the system harder. Cooling has to stop so the ice can clear before anything can be measured.",
    ],
    faqs: [
      {
        question: "Why does my evaporator coil freeze?",
        answer:
          "The coil surface drops below freezing when it cannot absorb the heat it was designed to, which happens when airflow across it falls or when the refrigerant charge is low. Both push the boiling temperature down.",
      },
      {
        question: "Why does the indoor unit smell when it starts?",
        answer:
          "The coil and pan stay damp, and biological growth on those surfaces releases odour when air first moves across them. Cleaning the coil itself is a technician job on most indoor units.",
      },
      {
        question: "Should the evaporator coil be wet in cooling?",
        answer:
          "Yes. Condensation on the coil is expected in cooling and is how the system dehumidifies. What matters is that the water reaches the drain rather than the floor.",
      },
    ],
    sourceIds: ["trane-mini-split-smells", "trane-mini-split-leak"],
    seeAlso: { label: "Mini-split smells musty", path: "/mini-split-smells-musty/" },
  },
  {
    term: "Air handler",
    slug: "air-handler",
    question: "What is an air handler?",
    definition:
      "The indoor assembly containing the blower, the evaporator coil, the filter rack, and usually the drain pan. In a ducted system it moves conditioned air into the supply ducts and pulls room air back through the returns.",
    category: "components",
    aliases: ["AHU", "fan coil unit", "indoor unit"],
    related: ["blower-motor", "ductwork", "evaporator-coil"],
    shortAnswer:
      "An air handler is the indoor half of a system: a cabinet holding the blower, the evaporator coil, the filter, and the drain pan, which pushes conditioned air into the ducts.",
    metaTitle: "Air handler: what is inside it",
    metaDescription:
      "What an air handler contains, how it differs from a furnace with a coil, why the filter rack and drain pan live there, and what its faults look like.",
    keywords: ["air handler", "AHU meaning", "fan coil unit", "air handler vs furnace"],
    facts: [
      { label: "Contains", value: "Blower, evaporator coil, filter rack, drain pan" },
      { label: "Location", value: "Loft, cupboard, basement, or plant room" },
      { label: "Also called", value: "Fan coil unit, or AHU in commercial work" },
      { label: "Drives", value: "Airflow through the whole duct network" },
    ],
    howItWorks:
      "One blower inside the cabinet draws room air through the returns and the filter, across the coil, and out into the supply ducts. Everything the system does to the air happens in this box, so the cabinet is also where filter changes, condensate drainage, and airflow measurement are carried out.",
    whereYouMeetIt: [
      "On a matched system rating, where the air handler model is half of the pair the published efficiency belongs to.",
      "In an airflow measurement, where external static pressure is read across this cabinet.",
      "In a water leak, where the drain pan and its trap sit inside or below the unit.",
    ],
    howToCheck: [
      {
        title: "Find the filter rack and check the direction arrow",
        detail:
          "A filter fitted backwards restricts more than it should. The arrow points the way the air travels, which is toward the coil.",
        performedBy: "owner",
      },
      {
        title: "Look under the cabinet for staining",
        detail:
          "Rust marks or a water trail below the unit point at the drain pan or the trap rather than at the refrigerant circuit.",
        performedBy: "owner",
      },
      {
        title: "Read external static pressure across the cabinet",
        detail:
          "A manometer with probes either side of the air handler shows what the duct system is asking of the blower.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "An air handler is not the same as a furnace. A furnace burns fuel and supplies the blower for a coil above it; an air handler contains its own blower and any heat is electric.",
      "Fan coil unit and air handler are the same idea at different scales, which is worth knowing when reading commercial documentation.",
    ],
    faqs: [
      {
        question: "What is the difference between an air handler and a furnace?",
        answer:
          "A furnace generates heat by burning fuel and its blower also serves the cooling coil above it. An air handler contains the blower and coil in one cabinet and provides heat, if at all, electrically or from a heat pump.",
      },
      {
        question: "Where is the filter in an air handler?",
        answer:
          "Usually in a rack at the return side of the cabinet, sometimes in a return grille elsewhere in the house. The manual for the unit shows the location and the size the rack takes.",
      },
      {
        question: "Why does my air handler drip in the loft?",
        answer:
          "The drain pan under the coil collects condensate, and if the drain line, its trap, or the pump is obstructed, the water backs up. A secondary pan and float switch are commonly fitted for exactly this reason.",
      },
    ],
  },
  {
    term: "Blower motor",
    slug: "blower-motor",
    question: "What does the blower motor do?",
    definition:
      "The motor driving the indoor fan. Modern systems use variable-speed motors that adjust to maintain airflow, which means a failing blower may show up as reduced capacity or a protection code long before the fan stops entirely.",
    category: "components",
    aliases: ["indoor fan motor", "fan motor"],
    related: ["air-handler", "static-pressure", "frozen-coil"],
    shortAnswer:
      "The blower motor drives the indoor fan that moves air across the coil. Variable-speed types adjust output to hold airflow, so a failing one shows as lost capacity before it stops.",
    metaTitle: "Blower motor: what it does",
    metaDescription:
      "What the blower motor does, how variable-speed and fixed-speed types behave differently as they fail, and why reduced airflow is felt before the fan stops.",
    keywords: ["blower motor", "indoor fan motor", "variable speed blower", "weak airflow hvac"],
    facts: [
      { label: "Job", value: "Moves indoor air across the coil and into the room or ducts" },
      { label: "Types", value: "Fixed speed, multi-tap, and variable speed" },
      { label: "Failure signal", value: "Reduced airflow, noise, or a fan feedback code" },
      { label: "Access", value: "Live electrical compartment, technician work" },
    ],
    howItWorks:
      "A variable-speed motor is told what airflow to deliver and adjusts its own speed to achieve it, so as ducts, filters, or bearings add resistance it draws more power to keep the airflow constant. That is useful until the motor reaches its limit, at which point airflow falls and the coil begins to suffer, and the board may report the fan feedback rather than the motor.",
    whereYouMeetIt: [
      "In a fan or zero-crossing code, where the board could not confirm the fan was turning at the speed it commanded.",
      "In a coil icing complaint, where lost airflow is what pushed the coil surface below freezing.",
      "In a noise report, where a bearing or an out-of-balance wheel changes the sound the unit makes.",
    ],
    howToCheck: [
      {
        title: "Feel the air at the outlet across all fan speeds",
        detail:
          "Set the fan high and low from the controller. A unit that does not change noticeably points at the fan circuit rather than at the refrigerant side.",
        performedBy: "owner",
      },
      {
        title: "Clean the filter first",
        detail:
          "Filter restriction produces the same weak airflow as a failing motor and is the only one of the two an owner can rule out.",
        performedBy: "owner",
      },
      {
        title: "Verify commanded speed against measured speed",
        detail:
          "The board logs what it asked for. Comparing that with the actual fan feedback separates a motor fault from a control fault.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A fan that still turns is not proof the motor is healthy. Variable-speed motors mask degradation by working harder until they cannot.",
      "Weak airflow is not always the motor. Filter, coil, and duct restriction produce the same symptom and are checked first.",
    ],
    faqs: [
      {
        question: "Why does my fan run but the room stays warm?",
        answer:
          "Air movement alone is not cooling. If the fan runs while the compressor is stopped, or airflow has dropped too low to carry heat off the coil, the room barely changes even though the unit sounds like it is working.",
      },
      {
        question: "What is a zero-crossing fan code?",
        answer:
          "It reports that the board could not read the expected feedback signal from the fan circuit. The motor, its connector, and the board input all sit in that path, which is why the code names a signal rather than a part.",
      },
      {
        question: "Can a blower motor be replaced on its own?",
        answer:
          "Usually yes, though variable-speed motors are often supplied as a motor and control module pair, and the replacement has to match the airflow programming the system was commissioned with.",
      },
    ],
    sourceIds: ["senville-eh02"],
    seeAlso: { label: "Mini-split making noise", path: "/mini-split-making-noise/" },
  },
  {
    term: "Reversing valve",
    slug: "reversing-valve",
    question: "What does a reversing valve do?",
    definition:
      "The valve that redirects refrigerant flow so a heat pump can switch between heating and cooling. A valve that sticks part-way through a changeover produces the classic symptom of a system that cools when heat is called for, or the reverse.",
    category: "components",
    aliases: ["four-way valve", "changeover valve"],
    related: ["heat-pump", "defrost-cycle"],
    shortAnswer:
      "The reversing valve is the four-way valve that swaps which coil condenses and which evaporates. It is the single component that lets one heat pump both heat and cool.",
    metaTitle: "Reversing valve in a heat pump",
    metaDescription:
      "What a reversing valve does, how a four-way valve swaps the roles of the two coils, why a stuck valve gives you the wrong mode, and how defrost uses it.",
    keywords: ["reversing valve", "four way valve", "heat pump blowing cold", "changeover valve"],
    facts: [
      { label: "Job", value: "Swaps the direction of refrigerant flow" },
      { label: "Also called", value: "Four-way valve, changeover valve" },
      { label: "Operated by", value: "A solenoid coil energised by the control board" },
      { label: "Also used for", value: "The defrost cycle" },
    ],
    howItWorks:
      "A solenoid shifts an internal slide that re-routes compressor discharge to one coil or the other. Whichever coil receives hot discharge gas becomes the condenser, so the same hardware heats or cools depending only on which way the valve is set. Defrost uses the same movement briefly to send hot gas to the outdoor coil.",
    whereYouMeetIt: [
      "In a complaint of cool air on a heat call, where the valve did not complete its changeover.",
      "In a defrost sequence, where the valve shifts, the outdoor fan stops, and the indoor fan is usually held off.",
      "In a service diagnosis, where valve body temperatures across the four ports are compared to see whether the slide moved.",
    ],
    howToCheck: [
      {
        title: "Confirm the mode the controller is actually set to",
        detail:
          "Auto modes and heat pump systems paired with unfamiliar thermostats can be calling for the mode you are not expecting. Check the display before the hardware.",
        performedBy: "owner",
      },
      {
        title: "Wait out a defrost cycle before judging",
        detail:
          "Cool air during defrost is the valve working correctly. A cycle lasts minutes, not hours, and ends with heating resuming.",
        performedBy: "owner",
      },
      {
        title: "Compare port temperatures across the valve body",
        detail:
          "Discharge, suction, and the two coil ports should show a clear pattern for the commanded mode. A blurred pattern indicates a slide that has not seated.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Cool air in heating is not always the valve. Defrost, a low outdoor temperature, and a control set to the wrong mode produce the same complaint.",
      "The solenoid coil and the valve body are separate failures. An electrically dead coil and a mechanically stuck slide need different repairs.",
    ],
    faqs: [
      {
        question: "Why does my heat pump blow cold in heating?",
        answer:
          "The most direct explanations are a defrost cycle in progress, a control set to cooling, or a reversing valve that has not completed its changeover. The first two are checked from the room before anyone opens the unit.",
      },
      {
        question: "Does the reversing valve make a noise when it changes?",
        answer:
          "Yes. A distinct hiss or thump as the slide shifts and pressures equalise is normal, and hearing it confirms the valve moved when the mode changed.",
      },
      {
        question: "Can a reversing valve be replaced?",
        answer:
          "Yes, but it is a brazed component in a sealed refrigerant circuit, so it requires recovery, replacement, evacuation, and recharge by a certified technician.",
      },
    ],
    sourceIds: ["trane-mini-split-not-heating", "fujitsu-aduh-operation"],
    seeAlso: { label: "Mini-split not heating", path: "/mini-split-not-heating/" },
  },
  {
    term: "Expansion valve",
    slug: "expansion-valve",
    question: "What does an expansion valve do?",
    definition:
      "The metering device that drops refrigerant pressure before the evaporator and controls how much liquid enters it. Thermostatic expansion valves respond mechanically; electronic expansion valves are driven by the control board and report their own faults.",
    category: "components",
    aliases: ["TXV", "EEV", "metering device"],
    related: ["superheat", "control-board", "evaporator-coil"],
    shortAnswer:
      "An expansion valve is the metering device that drops refrigerant pressure before the evaporator and regulates how much liquid enters it, which is what sets superheat.",
    metaTitle: "Expansion valve: TXV and EEV",
    metaDescription:
      "What an expansion valve does, how thermostatic and electronic types differ, why it is what controls superheat, and what a metering fault looks like in service.",
    keywords: ["expansion valve", "TXV", "EEV", "metering device hvac"],
    facts: [
      { label: "Job", value: "Meters liquid refrigerant into the evaporator" },
      { label: "Types", value: "Thermostatic (TXV), electronic (EEV), fixed orifice" },
      { label: "Controls", value: "Superheat leaving the evaporator" },
      { label: "EEV faults", value: "Reported by the control board as a code" },
    ],
    howItWorks:
      "The valve holds a pressure difference between the high side and the low side, so liquid arriving under pressure flashes to a cold mixture as it passes through. A thermostatic valve senses suction line temperature through a bulb and opens or closes mechanically; an electronic valve is a stepper motor the board drives, which lets it respond faster and log what it did.",
    whereYouMeetIt: [
      "In a superheat reading, because the valve is what that number is measuring the behaviour of.",
      "In an EEV fault code, where the board could not confirm the valve reached the step position it commanded.",
      "In a capacity complaint on a system with a correct charge, where metering rather than charge is the remaining explanation.",
    ],
    howToCheck: [
      {
        title: "Measure superheat at the evaporator outlet",
        detail:
          "Superheat is the direct read on what the valve is doing. Persistently high or low readings with a correct charge point at metering.",
        performedBy: "technician",
      },
      {
        title: "Verify the sensing bulb contact and insulation on a TXV",
        detail:
          "A bulb that has slipped or lost its insulation reads the wrong temperature and drives the valve to the wrong position, which looks like a valve fault.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A metering fault is not the same as a charge fault. Both change superheat, which is why subcooling is read alongside it before anything is adjusted.",
      "Not every system has a valve. Fixed orifice and capillary systems meter by restriction alone and cannot adjust to conditions.",
    ],
    faqs: [
      {
        question: "What is the difference between a TXV and an EEV?",
        answer:
          "A TXV reacts mechanically to a temperature bulb on the suction line. An EEV is a stepper motor the control board positions, so it responds faster, holds tighter control, and can report its own position as a fault code.",
      },
      {
        question: "Can an expansion valve cause a frozen coil?",
        answer:
          "Yes. A valve that underfeeds the evaporator drops the boiling temperature inside it, and if that falls below freezing the coil ices in the same way it does when airflow is restricted.",
      },
      {
        question: "Is an expansion valve owner serviceable?",
        answer:
          "No. It sits inside the sealed refrigerant circuit, so any work on it requires recovery and recharge by a certified technician.",
      },
    ],
  },
  {
    term: "Line set",
    slug: "line-set",
    question: "What is a line set?",
    definition:
      "The pair of insulated copper pipes connecting an indoor unit to an outdoor unit: a smaller liquid line and a larger suction line. Length and insulation affect performance, and every flare connection is a mechanical joint that has to be made correctly to stay sealed.",
    category: "components",
    aliases: ["refrigerant lines", "pipe run"],
    related: ["refrigerant-leak", "ductless-mini-split", "refrigerant-charge"],
    shortAnswer:
      "A line set is the pair of insulated copper refrigerant pipes between an indoor and outdoor unit: a small liquid line and a larger suction line, joined by flare or brazed connections.",
    metaTitle: "Line set: the pipes between units",
    metaDescription:
      "What a line set is, why the two pipes differ in size, how length affects charge, and why every flare joint is a mechanical connection that has to be made to spec.",
    keywords: ["line set", "refrigerant lines", "mini split pipe run", "flare connection"],
    facts: [
      { label: "Contains", value: "Liquid line and suction line, both insulated" },
      { label: "Material", value: "Refrigeration grade copper" },
      { label: "Joints", value: "Flare fittings on ductless, brazed on most ducted" },
      { label: "Affects", value: "Charge, capacity, and oil return" },
    ],
    howItWorks:
      "The small line carries liquid to the metering device and the large line returns cold vapour to the compressor, which is why the larger one is insulated and sweats if that insulation is damaged. Length and vertical rise both matter: a longer run holds more refrigerant, adds pressure drop, and changes how compressor oil finds its way home.",
    whereYouMeetIt: [
      "In an installation specification, where a maximum pipe length and maximum height difference are stated for the model.",
      "In a charge calculation, where refrigerant is added per unit of length beyond the pre-charged run.",
      "In a leak search, where flare joints are the first mechanical connections a technician tests.",
    ],
    howToCheck: [
      {
        title: "Look at the insulation along the visible run",
        detail:
          "Split, missing, or sun-perished insulation on the larger pipe wastes capacity and produces condensation that gets mistaken for a leak.",
        performedBy: "owner",
      },
      {
        title: "Check the flare joints with an electronic detector",
        detail:
          "Flares are mechanical joints made on site, so they are tested first. Torque values are published per pipe size and per manufacturer.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Reusing an old line set is not automatically safe. Residual oil from a different refrigerant, and any moisture in the pipe, can contaminate the new system.",
      "Water dripping from the pipe run is often condensation on damaged insulation rather than refrigerant, because refrigerant leaves as gas.",
    ],
    faqs: [
      {
        question: "Why is one pipe bigger than the other?",
        answer:
          "The larger pipe carries low-pressure vapour, which takes far more volume than the same mass of liquid. The smaller pipe carries liquid to the metering device.",
      },
      {
        question: "Does line set length change the refrigerant charge?",
        answer:
          "Yes. Units are pre-charged for a stated run, and installers add a published amount per additional unit of length. The figure appears on the data plate or in the installation manual.",
      },
      {
        question: "Can a line set be lengthened later?",
        answer:
          "Only within the maximum stated for the model, and it requires recovery, new joints, evacuation, and a recalculated charge. It is not a job that can be done by adding a coupling.",
      },
    ],
    sourceIds: ["trane-mini-split-refrigerant"],
  },
  {
    term: "Condensate drain",
    slug: "condensate-drain",
    question: "What is the condensate drain?",
    definition:
      "The path that carries water from the drain pan out of the building, by gravity or with a pump. If the path is obstructed or a pump stops, water collects in the pan instead of leaving the building. Many systems include a float switch that halts operation before the pan overflows.",
    category: "components",
    aliases: ["drain line", "condensate pump", "drain pan"],
    related: ["evaporator-coil", "float-switch"],
    shortAnswer:
      "The condensate drain is the route water takes from the drain pan under the coil to the outside. It runs by gravity where the fall allows, and by a small pump where it does not.",
    metaTitle: "Condensate drain and drain pan",
    metaDescription:
      "What the condensate drain does, why a cooling system produces water at all, how blockages and failed pumps cause indoor leaks, and what a float switch does about it.",
    keywords: ["condensate drain", "drain pan", "condensate pump", "mini split dripping water"],
    facts: [
      { label: "Carries", value: "Water condensed out of indoor air" },
      { label: "Methods", value: "Gravity fall, or a condensate pump" },
      { label: "Protection", value: "Float switch that stops the call for cooling" },
      { label: "Common obstruction", value: "Biological growth, debris, or a crushed hose" },
    ],
    howItWorks:
      "Water condensing on the cold coil runs into a pan and leaves through a hose or pipe. Gravity systems rely on continuous fall and a trap that stops air being drawn back up the pipe. Where the unit sits below the discharge point, a small pump lifts the water instead, and that pump has its own float and its own failure modes.",
    whereYouMeetIt: [
      "In a water leak from an indoor head, where the drain path rather than the refrigerant circuit is the first thing checked.",
      "In a system that runs in fan mode but will not cool, where a float switch has cut the cooling call.",
      "In annual maintenance, where the pan, trap, and drain line are cleared before the cooling season.",
    ],
    howToCheck: [
      {
        title: "Find where the drain hose discharges outside",
        detail:
          "A cooling system in humid weather should discharge a steady trickle. Nothing coming out while the unit cools points at an obstruction upstream.",
        performedBy: "owner",
      },
      {
        title: "Check that the hose has continuous fall and no kinks",
        detail:
          "A hose that rises, loops, or is pinched behind furniture holds water back into the pan. The visible run is owner-checkable.",
        performedBy: "owner",
      },
      {
        title: "Clear the pan and line properly",
        detail:
          "Opening the indoor unit to reach the pan, and flushing or vacuuming the line, is technician work on most wall-mounted heads.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Water from an indoor unit is not a refrigerant leak. Refrigerant leaves as gas; the liquid you see is condensate.",
      "A pump that hums is not necessarily working. It can run without moving water if the impeller is fouled or the discharge is blocked.",
    ],
    faqs: [
      {
        question: "How much water should a mini-split produce?",
        answer:
          "Enough to be a steady drip or trickle at the outside discharge in humid weather, and very little in dry conditions. The amount tracks how much moisture the air holds, not how hard the unit is working.",
      },
      {
        question: "Why does my system cool for an hour then stop?",
        answer:
          "One explanation is a drain that cannot keep up, letting the pan fill until a float switch cuts the cooling call. The fan often keeps running, which is what makes it look like a control fault.",
      },
      {
        question: "Can I pour anything down the drain line to clear it?",
        answer:
          "Products exist, but manufacturers specify what may be used with their pans and materials. Using the wrong one can damage the pan or the pump, so check the manual before pouring anything in.",
      },
    ],
    sourceIds: ["gree-water-leak", "trane-mini-split-leak"],
    seeAlso: { label: "Mini-split leaking water", path: "/mini-split-leaking-water/" },
  },
  {
    term: "Float switch",
    slug: "float-switch",
    question: "What does a float switch do?",
    definition:
      "A safety switch in the drain pan or condensate pump that interrupts operation when water rises above a set level. Because it cuts the call for cooling rather than the whole unit, a tripped float switch shows up as a system that will run in fan mode but not cool.",
    category: "components",
    aliases: ["safety switch", "overflow switch"],
    related: ["condensate-drain"],
    shortAnswer:
      "A float switch is a water level safety in the drain pan or condensate pump. When water rises past its trip point it interrupts the cooling call, stopping the system before the pan overflows.",
    metaTitle: "Float switch: the overflow safety",
    metaDescription:
      "What a float switch does, why it stops cooling but leaves the fan running, and why resetting one without clearing the drain simply repeats the event.",
    keywords: ["float switch", "condensate overflow switch", "ac runs but wont cool", "drain pan safety switch"],
    facts: [
      { label: "Job", value: "Stops operation before the pan overflows" },
      { label: "Location", value: "Primary pan, secondary pan, or condensate pump" },
      { label: "Interrupts", value: "The cooling call, not usually the fan" },
      { label: "Resets", value: "On its own once the water level drops" },
    ],
    howItWorks:
      "A small buoyant float rides on the water in the pan and opens a set of contacts wired into the control circuit when it rises. Because it is wired into the call for cooling rather than the mains supply, the display stays lit and the fan often keeps running, which is the signature that separates it from a power fault.",
    whereYouMeetIt: [
      "In a system that blows air but produces no cooling, with no fault code shown.",
      "In an installation over a finished ceiling, where a secondary pan and switch are required for exactly this reason.",
      "In a condensate pump, where the same principle protects against the pump failing rather than the drain blocking.",
    ],
    howToCheck: [
      {
        title: "Look for standing water in the pan",
        detail:
          "Water sitting in the pan while the drain discharges nothing outside confirms the switch is doing its job and the drain is the problem.",
        performedBy: "owner",
      },
      {
        title: "Clear the drain, then let the level fall",
        detail:
          "The switch resets itself when the water goes down. Bypassing it to restore cooling removes the only thing stopping a ceiling leak.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A tripped float switch is not the fault. It is the protection working, and the drain path is where the fault actually is.",
      "Bypassing the switch to get cooling back does not fix anything and removes the protection that was preventing water damage.",
    ],
    faqs: [
      {
        question: "Why does my system run but not cool with no error code?",
        answer:
          "A float switch interrupts the cooling call directly rather than reporting to the board, so many systems show nothing. Standing water in the drain pan alongside that symptom is the confirming observation.",
      },
      {
        question: "Does a float switch reset itself?",
        answer:
          "Yes, once the water level falls back below the trip point. If cooling returns and then stops again, the drain has not actually been cleared.",
      },
      {
        question: "Do all systems have one?",
        answer:
          "Not all, though they are standard where a leak would damage a finished space, and building rules in many places require a secondary pan and switch for units above ceilings.",
      },
    ],
    sourceIds: ["trane-mini-split-leak"],
    seeAlso: { label: "Mini-split leaking water", path: "/mini-split-leaking-water/" },
  },
  {
    term: "Capacitor",
    slug: "capacitor",
    question: "What does a capacitor do in an HVAC system?",
    definition:
      "A component that stores and releases electrical energy to start and run single-phase motors. Capacitors hold a charge after power is removed, which is one reason opening an electrical compartment is technician work rather than a homeowner check.",
    category: "components",
    aliases: ["run capacitor", "start capacitor", "dual capacitor"],
    related: ["contactor", "compressor"],
    shortAnswer:
      "A capacitor stores and releases electrical energy to start and run single-phase motors. It holds a dangerous charge after the power is switched off, which is why the compartment is technician only.",
    metaTitle: "Capacitor: why motors need one",
    metaDescription:
      "What a capacitor does in an HVAC system, how start and run types differ, why a dual capacitor serves two motors, and why a stored charge makes it technician work.",
    keywords: ["hvac capacitor", "run capacitor", "dual capacitor", "start capacitor"],
    facts: [
      { label: "Job", value: "Provides the phase shift a single-phase motor needs" },
      { label: "Types", value: "Start, run, and dual (compressor plus fan)" },
      { label: "Rated in", value: "Microfarads, with a voltage rating" },
      { label: "Hazard", value: "Holds a charge after isolation" },
    ],
    howItWorks:
      "A single-phase supply cannot start a motor turning on its own, so the capacitor shifts the current in a second winding out of phase with the first and creates the rotating field the motor needs. A run capacitor stays in circuit and keeps that field efficient; a start capacitor is larger, gives a bigger kick, and drops out once the motor is turning.",
    whereYouMeetIt: [
      "In an outdoor unit that hums but does not start, which is the description a technician associates with the starting circuit.",
      "On a repair invoice, where a capacitor is a low cost part with a high safety requirement attached to fitting it.",
      "On the part itself, where the microfarad and voltage ratings printed on the case decide the replacement.",
    ],
    howToCheck: [
      {
        title: "Describe the sound rather than opening the panel",
        detail:
          "A hum with no rotation, or a fan that starts when nudged, are the observations that matter, and both can be reported without removing anything.",
        performedBy: "owner",
      },
      {
        title: "Isolate, discharge, then measure capacitance",
        detail:
          "The capacitor is discharged through a resistor before testing, and the measured microfarads are compared against the rating printed on the case.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Switching the breaker off does not make a capacitor safe. It stores energy and has to be deliberately discharged first.",
      "A capacitor that looks intact can still be out of tolerance. Bulging is a clear failure, but a flat case proves nothing without a measurement.",
    ],
    faqs: [
      {
        question: "Why did my outdoor unit hum and then stop?",
        answer:
          "A hum with no rotation describes a motor receiving power but unable to start turning, which puts the starting circuit, the capacitor within it, and the motor itself on the shortlist. Diagnosing which needs a live measurement.",
      },
      {
        question: "What is a dual run capacitor?",
        answer:
          "One case containing two capacitors, typically one for the compressor and one for the outdoor fan, sharing a common terminal. The terminals are marked HERM, FAN, and C.",
      },
      {
        question: "Can I replace a capacitor myself?",
        answer:
          "It is not an owner task. The compartment holds live mains terminals and the capacitor itself retains a charge after isolation, so discharging it safely is part of the job.",
      },
    ],
    sourceIds: ["trane-mini-split-compressor"],
    seeAlso: { label: "Outdoor unit not running", path: "/mini-split-outdoor-unit-not-running/" },
  },
  {
    term: "Contactor",
    slug: "contactor",
    question: "What does a contactor do?",
    definition:
      "An electrically operated switch that connects mains power to the compressor and outdoor fan when the control system calls for them. Its contacts carry the full load current, so when they pit or weld the outdoor unit can fail to start or fail to stop. Checking one means opening a live electrical compartment, which makes it technician work.",
    category: "components",
    aliases: ["relay"],
    related: ["capacitor", "control-board"],
    shortAnswer:
      "A contactor is a heavy duty relay that connects mains power to the compressor and outdoor fan when the controls call for them. Its contacts carry the full running current of the outdoor unit.",
    metaTitle: "Contactor: the outdoor switch",
    metaDescription:
      "What a contactor does, how a low voltage coil switches a high current load, and why pitted or welded contacts cause both no-start and no-stop faults.",
    keywords: ["hvac contactor", "contactor stuck closed", "outdoor unit wont start", "contactor vs relay"],
    facts: [
      { label: "Job", value: "Switches mains power to compressor and outdoor fan" },
      { label: "Operated by", value: "A low voltage coil energised by the controls" },
      { label: "Failure modes", value: "Pitted contacts, or contacts welded closed" },
      { label: "Access", value: "Live mains compartment, technician only" },
    ],
    howItWorks:
      "A small control voltage energises a coil, the coil pulls an armature, and the armature closes contacts carrying the full load current to the outdoor unit. Every closure draws a small arc, so contact surfaces erode over years of cycling. Eroded contacts add resistance and heat, and contacts that arc-weld together leave the unit running with no way for the controls to stop it.",
    whereYouMeetIt: [
      "In an outdoor unit that will not start even though the thermostat is calling.",
      "In an outdoor unit that will not stop, which is the signature of welded contacts.",
      "In a service report, where burnt or pitted contact faces are described alongside the replacement.",
    ],
    howToCheck: [
      {
        title: "Note whether the unit responds to the controls at all",
        detail:
          "A unit that never starts and a unit that never stops point at opposite contactor failures, and both are observations an owner can report accurately.",
        performedBy: "owner",
      },
      {
        title: "Verify control voltage at the coil before condemning it",
        detail:
          "A contactor that is not pulling in may be a healthy contactor with no signal reaching its coil, which moves the search to the control side.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A contactor that does not pull in is not proof the contactor has failed. No control signal produces the same result.",
      "The clicking sound is the coil, not the contacts. Hearing a click does not confirm that power reached the compressor.",
    ],
    faqs: [
      {
        question: "Why does my outdoor unit keep running after the thermostat is satisfied?",
        answer:
          "Contacts that have arc-welded closed keep mains power connected regardless of what the controls ask. Isolating at the breaker stops it, and the contactor is replaced rather than cleaned.",
      },
      {
        question: "What is the difference between a contactor and a relay?",
        answer:
          "They work the same way. Contactor describes the heavy duty version built for the load current of a compressor, and relay is the general term for the smaller switching devices elsewhere in the system.",
      },
      {
        question: "Can insects cause a contactor fault?",
        answer:
          "Yes. Contactors are a known nesting site, and debris between the contact faces prevents proper closure, which is one of the reasons the compartment is inspected during service.",
      },
    ],
    sourceIds: ["trane-mini-split-compressor"],
    seeAlso: { label: "Outdoor unit not running", path: "/mini-split-outdoor-unit-not-running/" },
  },
  {
    term: "Control board",
    slug: "control-board",
    question: "What does the control board do?",
    definition:
      "The printed circuit board that reads sensors, drives outputs, and decides when to run or protect the system. It is also what generates the fault code you see, which means a code describes what the board detected rather than which part has failed.",
    category: "components",
    aliases: ["PCB", "main board", "controller board"],
    related: ["error-code", "inverter-module", "thermistor"],
    shortAnswer:
      "The control board is the circuit board that reads the sensors, drives the outputs, and decides when the system runs or protects itself. Every fault code you see was generated by it.",
    metaTitle: "Control board and what codes mean",
    metaDescription:
      "What an HVAC control board does, why a fault code describes what the board measured rather than what failed, and why sensor, wiring, and board inputs share one path.",
    keywords: ["hvac control board", "PCB fault", "main board error code", "what generates error codes"],
    facts: [
      { label: "Job", value: "Reads sensors, drives outputs, enforces protection limits" },
      { label: "Produces", value: "The fault code shown on the display" },
      { label: "Reports", value: "What it measured, not which part failed" },
      { label: "Access", value: "Live compartment, technician only" },
    ],
    howItWorks:
      "Sensors feed the board a set of resistances and voltages, the board compares them against the limits its firmware holds, and it either drives the outputs or stops and posts a code. Because everything it knows arrives through a connector and a length of wire, a code identifies a measurement that fell outside range and not the component that caused it.",
    whereYouMeetIt: [
      "On every fault code, because the board is what produced it.",
      "In a communication fault, where indoor and outdoor boards could not exchange the expected signal.",
      "In a repair decision, where a board replacement on an older system is weighed against the value of the equipment.",
    ],
    howToCheck: [
      {
        title: "Photograph the code exactly as displayed",
        detail:
          "Characters that look similar carry different meanings across product families. A photograph removes the transcription error before anyone opens a manual.",
        performedBy: "owner",
      },
      {
        title: "Check the measurement path before the board",
        detail:
          "Sensor, connector, and harness sit between the board and the thing being measured. All three are tested before the board is replaced.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A code does not name a failed part. It names a condition the board detected, and the parts that could produce that condition are the shortlist.",
      "Replacing a board without checking the sensors and wiring can leave a new board reporting the same code.",
    ],
    faqs: [
      {
        question: "Does a fault code tell me which part to replace?",
        answer:
          "No. It tells you what the board measured or failed to measure. A sensor fault code, for example, covers the sensor, its connector, the harness, and the board input equally until they are tested.",
      },
      {
        question: "Can two units from one brand read the same code differently?",
        answer:
          "Yes. Code tables are written per product family rather than per brand, so the manual for the exact model is the only reliable definition. That is why the data plate comes before the code lookup.",
      },
      {
        question: "Can I reset the board by cutting the power?",
        answer:
          "Cutting power clears a latched code on many systems, but if the condition that caused it is still present the code returns. Repeated resets on a protection code hide a fault rather than fixing it.",
      },
    ],
    sourceIds: ["gree-e6-guide", "mrcool-code-table"],
    seeAlso: { label: "Gree E6 communication code", path: "/brands/gree/e6-error-code/" },
  },
  {
    term: "Inverter module",
    slug: "inverter-module",
    question: "What is an inverter module?",
    definition:
      "The power electronics that vary compressor speed, also called the IPM or intelligent power module. Inverter-module protection codes usually mean the module measured current, voltage, or temperature outside limits and stopped before damage occurred.",
    category: "components",
    aliases: ["IPM", "inverter board", "power module"],
    related: ["inverter-compressor", "protection-code", "control-board"],
    shortAnswer:
      "An inverter module, or IPM, is the power electronics stage that varies compressor speed. It monitors its own current, voltage, and temperature and stops the compressor when any of them exceeds a limit.",
    metaTitle: "Inverter module and IPM protection",
    metaDescription:
      "What an inverter module does, how an IPM varies compressor speed, why IPM protection codes report a limit rather than a failure, and what conditions trigger them.",
    keywords: ["inverter module", "IPM protection", "intelligent power module", "inverter board fault"],
    facts: [
      { label: "Job", value: "Converts and switches power to vary compressor speed" },
      { label: "Also called", value: "IPM, intelligent power module" },
      { label: "Monitors", value: "Its own current, voltage, and temperature" },
      { label: "Cooling", value: "A heat sink that depends on outdoor airflow" },
    ],
    howItWorks:
      "The module rectifies the incoming supply and then switches it back out at whatever frequency the board asks for, which is how compressor speed is varied. Doing that generates heat in the switching devices, so the module carries a heat sink and its own protection: when current, supply voltage, or its own temperature moves outside limits, it stops rather than damage itself.",
    whereYouMeetIt: [
      "In an IPM or module protection code, where the module stopped the compressor at a limit.",
      "In a fault that appears only on hot days, where module temperature rather than the compressor is what reached its ceiling.",
      "In a supply voltage complaint, where an unstable or low incoming supply triggers protection at the module.",
    ],
    howToCheck: [
      {
        title: "Record outdoor temperature and how long the unit had run",
        detail:
          "Module protection that appears after twenty minutes on a hot afternoon points somewhere different from protection at start-up on a cool morning.",
        performedBy: "owner",
      },
      {
        title: "Clear the outdoor unit and its discharge path",
        detail:
          "The module heat sink is cooled by the same airflow the condenser uses, so restricted air raises module temperature as well as head pressure.",
        performedBy: "owner",
      },
      {
        title: "Measure supply voltage under load",
        detail:
          "A supply that sags when the compressor starts can trigger module protection while reading correctly at rest.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "An IPM code does not mean the module is faulty. It records that the module reached a protection limit, and the reason for that limit can sit outside the module entirely.",
      "Repeatedly clearing the code does not address the condition. If it returns under the same conditions, the conditions are the finding.",
    ],
    faqs: [
      {
        question: "What causes IPM protection?",
        answer:
          "Anything that pushes current, supply voltage, or module temperature outside limits. Restricted outdoor airflow, a compressor drawing more than it should, and an unstable electrical supply all reach the same protection.",
      },
      {
        question: "Is the inverter module the same as the control board?",
        answer:
          "No. The control board makes decisions and the inverter module handles the power. Some units combine them on one assembly, which is why the manual for the model matters when ordering parts.",
      },
      {
        question: "Why does the fault only happen in hot weather?",
        answer:
          "Module temperature protection is directly tied to how well the heat sink can shed heat, and that depends on outdoor air temperature and on airflow through the unit. Cool weather may keep it just inside the limit.",
      },
    ],
    sourceIds: ["mrcool-p1-guide", "mrcool-p0-guide", "gree-h5-guide"],
    seeAlso: { label: "MRCOOL P1 / PC01 code", path: "/brands/mrcool/p1-pc01-error-code/" },
  },
  {
    term: "Thermistor",
    slug: "thermistor",
    question: "What is a thermistor?",
    definition:
      "A temperature sensor whose electrical resistance changes predictably with temperature. Sensor fault codes normally mean the board measured a resistance that is open, shorted, or out of range, which can be the sensor, the plug, or the wiring to it.",
    category: "components",
    aliases: ["temperature sensor", "NTC sensor"],
    related: ["sensor-fault", "control-board"],
    shortAnswer:
      "A thermistor is a temperature sensor whose resistance changes with temperature. The control board reads that resistance and converts it to a temperature using a table published for the part.",
    metaTitle: "Thermistor: how HVAC senses heat",
    metaDescription:
      "What a thermistor is, how a resistance reading becomes a temperature, why sensor codes cover the connector and harness too, and how one is tested against its table.",
    keywords: ["thermistor", "NTC sensor", "temperature sensor fault", "hvac sensor resistance"],
    facts: [
      { label: "Measures", value: "Temperature, as a change in resistance" },
      { label: "Common type", value: "NTC, where resistance falls as temperature rises" },
      { label: "Read by", value: "The control board, against a published table" },
      { label: "Failure path", value: "Sensor, connector, harness, or board input" },
    ],
    howItWorks:
      "The board applies a small voltage across the sensor and measures what comes back, then looks the resulting resistance up against a table for that part. A value outside the table at either end means open circuit or short circuit, and because the whole measurement travels through a connector and a length of wire, any break in that path produces the same reading as a failed sensor.",
    whereYouMeetIt: [
      "In a temperature sensor fault code, where the board saw a resistance outside its expected range.",
      "In a coil temperature protection code, where the sensor is working correctly and reporting a genuine condition.",
      "In a service manual appendix, where the resistance table for each sensor is published.",
    ],
    howToCheck: [
      {
        title: "Measure resistance at the plug and compare with the table",
        detail:
          "A reading taken at a known temperature and checked against the published table separates a drifted sensor from a broken connection.",
        performedBy: "technician",
      },
      {
        title: "Inspect the connector and the harness route",
        detail:
          "Corrosion at the plug, a pin backed out of its housing, or chafing where the harness passes a panel edge all read as a sensor fault.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A sensor code is not proof the sensor failed. Connector, harness, and board input sit in the same measurement path.",
      "A sensor reporting an alarming temperature may be entirely healthy. Confirm the reading is wrong before replacing the part that reported it.",
    ],
    faqs: [
      {
        question: "What is an NTC thermistor?",
        answer:
          "Negative temperature coefficient: resistance falls as temperature rises. It is the common type in HVAC sensing, and the manufacturer publishes a resistance value for each temperature.",
      },
      {
        question: "Can a thermistor drift rather than fail outright?",
        answer:
          "Yes, and that is harder to find, because the board sees a plausible value and acts on it. A reading compared against an independent thermometer at the same point is what exposes it.",
      },
      {
        question: "Why do sensor faults appear after a repair?",
        answer:
          "Connectors disturbed during other work are a recognised cause. A pin not fully seated makes intermittent contact and produces a sensor code that comes and goes.",
      },
    ],
    sourceIds: ["daikin-a5-service", "pioneer-quantum-e1"],
    seeAlso: { label: "Daikin A5 coil temperature code", path: "/brands/daikin/a5-error-code/" },
  },
  {
    term: "Branch box",
    slug: "branch-box",
    question: "What is a branch box?",
    definition:
      "A distribution unit used on some multi-zone systems to split refrigerant and control signals between indoor units. Because it sits between the outdoor unit and several heads, a branch-box fault can present as a problem in one zone only.",
    category: "components",
    aliases: ["distribution box", "branch selector"],
    related: ["multi-zone-system", "vrf-system"],
    shortAnswer:
      "A branch box is the distribution unit on some multi-zone systems that splits refrigerant and control wiring from one outdoor unit out to several indoor units.",
    metaTitle: "Branch box on multi-zone systems",
    metaDescription:
      "What a branch box does, why some multi-zone systems use one instead of individual pipe runs, and why a fault in it can look like a single-zone problem.",
    keywords: ["branch box", "branch selector", "multi zone distribution box", "mini split branch box"],
    facts: [
      { label: "Job", value: "Splits refrigerant and control signals to several heads" },
      { label: "Found on", value: "Some multi-zone and VRF arrangements" },
      { label: "Location", value: "Loft, ceiling void, or plant space" },
      { label: "Fault signature", value: "One zone affected while others run" },
    ],
    howItWorks:
      "Instead of running a separate pipe pair from the outdoor unit to every indoor head, one larger run reaches the box and the box distributes from there. That shortens installation pipework, but it puts valves, sensors, and wiring for several zones inside one enclosure that is often out of sight.",
    whereYouMeetIt: [
      "On an installation drawing, where the box position determines the pipe runs and the access needed later.",
      "In a single-zone fault on a multi-zone system, where the branch serving that head is part of the shortlist.",
      "In a service access complaint, where a box in a sealed ceiling void has no practical way to be reached.",
    ],
    howToCheck: [
      {
        title: "Establish which zones are affected",
        detail:
          "A group of zones failing together while others run normally points at the branch they share rather than at any single indoor unit.",
        performedBy: "owner",
      },
      {
        title: "Confirm the box location and access route",
        detail:
          "Handover documentation should record it. Establishing access before a service visit avoids a second appointment.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Not every multi-zone system has one. Many run individual pipe pairs from the outdoor unit to each head, so the box exists only where the design used it.",
      "A branch box is not a junction box. It carries refrigerant as well as wiring, so work inside it needs certification.",
    ],
    faqs: [
      {
        question: "Do all multi-zone mini-splits use a branch box?",
        answer:
          "No. Many connect each indoor unit directly to a port on the outdoor unit. Branch boxes appear where the design favoured one larger run into a distribution point.",
      },
      {
        question: "Can a branch box cause a fault in one room only?",
        answer:
          "Yes. Each branch has its own valve and wiring, so a fault confined to one branch presents exactly like a fault in the indoor unit it serves.",
      },
      {
        question: "Where is the branch box usually installed?",
        answer:
          "Above a ceiling, in a loft, or in a plant space near the middle of the pipe runs. Its location should be recorded at handover because service access to it is needed later.",
      },
    ],
    sourceIds: ["daikin-mxs-engineering"],
  },
] satisfies GlossaryTermInput[];
