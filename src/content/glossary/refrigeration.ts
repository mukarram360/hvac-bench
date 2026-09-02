import type { GlossaryTermInput } from "../schema";

/**
 * The circuit, the fluid in it, and the readings taken from it.
 *
 * Almost everything here is behind a certification boundary, so the entries
 * are written to let a reader understand a technician's findings rather than
 * to help anyone open a circuit. Where a figure is given it is a property of
 * the refrigerant or a regulatory value, not a diagnostic target.
 */
export const refrigeration = [
  {
    term: "Refrigerant",
    slug: "refrigerant",
    question: "What is refrigerant?",
    definition:
      "The working fluid that carries heat around the circuit by evaporating and condensing at useful temperatures. It is not consumed in normal operation, so a system that is low on refrigerant has a leak rather than a need for a routine top-up.",
    category: "refrigeration",
    aliases: ["gas", "coolant"],
    related: ["refrigerant-leak", "r410a", "r32"],
    shortAnswer:
      "Refrigerant is the fluid that carries heat around a system by boiling at low pressure and condensing at high pressure. It circulates in a sealed loop and is not used up in normal operation.",
    metaTitle: "Refrigerant: what it actually does",
    metaDescription:
      "What refrigerant is, why boiling and condensing is what moves heat, why a sealed system never needs topping up, and how safety classes and GWP are labelled.",
    keywords: [
      "what is refrigerant",
      "hvac refrigerant",
      "does refrigerant get used up",
      "refrigerant top up",
    ],
    facts: [
      { label: "Job", value: "Carries heat by changing state" },
      { label: "Consumed?", value: "No, it circulates in a sealed loop" },
      { label: "Identified by", value: "An R number on the data plate" },
      { label: "Handled by", value: "Certified technicians only" },
    ],
    howItWorks:
      "A refrigerant is chosen because it boils at a temperature that is useful at the pressures the equipment runs at. Boiling absorbs a large amount of heat without the fluid getting hotter, and condensing releases it again, so the circuit moves heat by changing the fluid between liquid and vapour rather than by warming and cooling it.",
    whereYouMeetIt: [
      "On the data plate, where the refrigerant type and the factory charge are printed.",
      "In a service quotation, where recovery, leak repair, evacuation, and recharge are separate lines because they are separate operations.",
      "In regulation, where the refrigerant type determines the certification and the record keeping the work requires.",
    ],
    howToCheck: [
      {
        title: "Read the refrigerant type from the data plate",
        detail:
          "Equipment, gauges, and recovery apparatus are rated per refrigerant, and mixing types is not an option. The plate is the reference.",
        performedBy: "owner",
      },
      {
        title: "Treat repeated loss as a leak, not a top-up",
        detail:
          "A sealed circuit that has lost charge has lost it somewhere. Recharging without finding that point returns the same fault later.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Refrigerant is not a consumable like fuel or engine oil. A system that needs topping up has a leak that has not been found.",
      "Coolant is the wrong word for it, even though it is used casually. Coolant describes the water and glycol mixture in a hydronic circuit or a vehicle engine.",
    ],
    faqs: [
      {
        question: "Does refrigerant need topping up regularly?",
        answer:
          "No. The circuit is sealed, so refrigerant is not consumed. Repeated loss of capacity between seasons points at a leak, and finding the leak is the repair rather than adding more gas.",
      },
      {
        question: "Can I buy refrigerant and add it myself?",
        answer:
          "Handling refrigerant requires certification: EPA Section 608 in the United States and an F-Gas qualification in the United Kingdom and Europe. It is a legal requirement rather than a manufacturer preference.",
      },
      {
        question: "What do the letters after a refrigerant number mean?",
        answer:
          "They belong to the safety classification. A1 means lower toxicity and no flame propagation, A2L means lower toxicity and mild flammability, which changes installation and service requirements.",
      },
    ],
    sourceIds: ["epa-section-608", "gov-uk-f-gas", "ashrae-terminology"],
  },
  {
    term: "R-410A",
    slug: "r410a",
    question: "What is R-410A?",
    definition:
      "A refrigerant blend widely used in split systems and heat pumps from the 2000s onward. It operates at higher pressures than the R-22 it replaced, and equipment, gauges, and recovery equipment must be rated for it.",
    category: "refrigeration",
    aliases: ["410A", "Puron"],
    related: ["refrigerant", "r32", "f-gas-regulation"],
    shortAnswer:
      "R-410A is a near-azeotropic blend of R-32 and R-125 used in split systems and heat pumps since the 2000s. It runs at higher pressures than the R-22 it replaced and is classified A1.",
    metaTitle: "R-410A refrigerant explained",
    metaDescription:
      "What R-410A is, why it runs at higher pressure than R-22, what its A1 classification and high GWP mean, and why it is being replaced on new equipment.",
    keywords: ["R-410A", "410A refrigerant", "Puron", "R410A vs R32"],
    facts: [
      { label: "Composition", value: "Blend of R-32 and R-125" },
      { label: "Safety class", value: "A1, lower toxicity, no flame propagation" },
      { label: "Operating pressure", value: "Higher than the R-22 it replaced" },
      { label: "Status", value: "Being phased down in favour of lower GWP options" },
    ],
    howItWorks:
      "R-410A was introduced as a replacement for R-22, which damaged the ozone layer. It carries heat well but at higher pressures, so compressors, coils, service valves, gauges, hoses, and recovery equipment all had to be rated for it. Its global warming potential is high, which is why regulators are now phasing it down in turn.",
    whereYouMeetIt: [
      "On the data plate of equipment installed roughly between the mid 2000s and the current changeover to lower GWP refrigerants.",
      "In a repair decision on older equipment, where refrigerant availability and cost affect whether a repair is worth making.",
      "In a service kit, where gauges and hoses rated for R-410A pressures are required.",
    ],
    howToCheck: [
      {
        title: "Read the refrigerant type before ordering anything",
        detail:
          "The data plate states it. R-410A and R-32 systems are not interchangeable and their service equipment is not either.",
        performedBy: "owner",
      },
      {
        title: "Charge as liquid, not vapour",
        detail:
          "As a blend, R-410A can fractionate if it is charged as vapour, changing the composition left in the cylinder and in the system.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "Safety classification",
        value: "A1",
        note: "Lower toxicity with no flame propagation under test conditions",
      },
      {
        context: "Global warming potential",
        value: "Around 2,088",
        note: "AR4 hundred-year figure used in most current regulation",
      },
      {
        context: "Replaced",
        value: "R-22",
        note: "R-22 was withdrawn because it depletes stratospheric ozone",
      },
    ],
    mistakes: [
      "R-410A cannot be added to an R-22 system, and the reverse is equally true. The pressures, the oils, and the component ratings differ.",
      "Puron is a trade name for R-410A rather than a separate refrigerant.",
    ],
    faqs: [
      {
        question: "Is R-410A being banned?",
        answer:
          "It is being phased down rather than switched off. Regulation in Europe and North America restricts the quantity placed on the market and limits its use in new equipment, so existing systems can still be serviced while supply tightens.",
      },
      {
        question: "Can an R-410A system be converted to R-32?",
        answer:
          "Not as a field conversion. The components, the oil, and the safety requirements differ, and equipment is certified for the refrigerant it was designed around.",
      },
      {
        question: "Why does R-410A have to be charged as liquid?",
        answer:
          "It is a blend of two refrigerants with different boiling points. Drawing vapour from the cylinder removes them at different rates, which changes the composition of what remains.",
      },
    ],
    sourceIds: ["gov-uk-f-gas", "ashrae-terminology"],
  },
  {
    term: "R-32",
    slug: "r32",
    question: "What is R-32?",
    definition:
      "A single-component refrigerant with a lower global warming potential than R-410A, now standard on many new systems in Europe and increasingly in North America. It is mildly flammable, classified A2L, which changes installation and service requirements.",
    category: "refrigeration",
    aliases: ["R32", "A2L refrigerant"],
    related: ["refrigerant", "r410a", "f-gas-regulation"],
    shortAnswer:
      "R-32 is a single-component refrigerant with roughly a third of the global warming potential of R-410A. It is classified A2L, meaning mildly flammable, which changes how it is installed and serviced.",
    metaTitle: "R-32 refrigerant and A2L rules",
    metaDescription:
      "What R-32 is, why its lower GWP is replacing R-410A, what the A2L mild flammability class changes about installation and charge limits, and how it is serviced.",
    keywords: ["R-32 refrigerant", "A2L refrigerant", "R32 vs R410A", "is R32 flammable"],
    facts: [
      { label: "Composition", value: "Single component, difluoromethane" },
      { label: "Safety class", value: "A2L, lower toxicity, mildly flammable" },
      { label: "Charging", value: "Can be charged as liquid or vapour without fractionating" },
      { label: "Why adopted", value: "Lower global warming potential than R-410A" },
    ],
    howItWorks:
      "R-32 is one of the two components of R-410A used on its own, which is why it behaves similarly in the circuit but does not fractionate when charged. It carries more heat per unit of mass, so systems use a smaller charge. Its A2L classification brings requirements around minimum room area for a given charge, leak detection, and the tools used during service.",
    whereYouMeetIt: [
      "On new equipment data plates across Europe and increasingly in North America.",
      "In an installation calculation, where the charge size is checked against the floor area of the smallest room served.",
      "In service documentation, where A2L-rated recovery equipment and tools are specified.",
    ],
    howToCheck: [
      {
        title: "Confirm A2L before any service work",
        detail:
          "The data plate states the refrigerant, and A2L systems are usually labelled. Tools, recovery equipment, and procedures differ from A1.",
        performedBy: "technician",
      },
      {
        title: "Check room area against the charge",
        detail:
          "Standards set a minimum floor area for a given A2L charge in an occupied space, which affects where an indoor unit may be installed.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "Safety classification",
        value: "A2L",
        note: "Lower toxicity with lower flammability, below the A2 threshold for burning velocity",
      },
      {
        context: "Global warming potential",
        value: "Around 675",
        note: "AR4 hundred-year figure, roughly a third of R-410A",
      },
      {
        context: "Relationship to R-410A",
        value: "One of its two components",
        note: "R-410A is a blend of R-32 and R-125",
      },
    ],
    mistakes: [
      "Mildly flammable is not the same as explosive. A2L refrigerants need an ignition source and a specific concentration to burn, which is what the charge and room area rules address.",
      "R-32 and R-410A are not interchangeable in the field even though R-32 is part of the blend.",
    ],
    faqs: [
      {
        question: "Is R-32 dangerous in a home?",
        answer:
          "It is classified A2L, which means it can burn under specific conditions but does not ignite easily. Standards set charge limits by room area precisely so a leak in an occupied space stays below a flammable concentration.",
      },
      {
        question: "Why are manufacturers moving to R-32?",
        answer:
          "Its global warming potential is around a third of R-410A, systems need a smaller charge, and it does not fractionate as a blend does. Regulation phasing down high GWP refrigerants is what set the timetable.",
      },
      {
        question: "Does an R-32 system need special tools?",
        answer:
          "Yes. Recovery machines, vacuum pumps, and leak detectors have to be rated for A2L use, and manufacturers specify the procedures around brazing and ventilation.",
      },
    ],
    sourceIds: ["gov-uk-f-gas", "ec-ecodesign", "ashrae-terminology"],
  },
  {
    term: "Superheat",
    slug: "superheat",
    question: "What is superheat?",
    definition:
      "How many degrees the refrigerant vapour has risen above its boiling point at the measured pressure. Technicians use it to judge whether the evaporator is being fed correctly, since too little superheat risks liquid returning to the compressor.",
    category: "refrigeration",
    aliases: [],
    related: ["subcooling", "expansion-valve", "saturation-temperature"],
    shortAnswer:
      "Superheat is how many degrees the refrigerant vapour has risen above its boiling temperature at the pressure it is at. It shows whether the evaporator is being fed the right amount of liquid.",
    metaTitle: "Superheat: what the number means",
    metaDescription:
      "What superheat is, how a pressure and a temperature give you the number, why low superheat threatens the compressor, and why the target comes from the manual.",
    keywords: ["what is superheat", "superheat hvac", "how to measure superheat", "low superheat"],
    facts: [
      { label: "Measures", value: "Degrees of vapour above its boiling point" },
      { label: "Needs", value: "A pressure reading and a temperature reading" },
      { label: "Tells you about", value: "How the evaporator is being fed" },
      { label: "Target value", value: "Published per model in the service manual" },
    ],
    howItWorks:
      "Refrigerant boils at a temperature fixed by its pressure. Once all the liquid in the evaporator has boiled, any further heat picked up raises the vapour temperature above that boiling point, and the difference is superheat. Measure the suction pressure, convert it to saturation temperature, measure the actual line temperature, and subtract.",
    whereYouMeetIt: [
      "On a commissioning sheet, where the superheat achieved at handover is recorded as the baseline for later visits.",
      "In a diagnosis, where superheat and subcooling read together separate a charge problem from a metering problem.",
      "In an expansion valve fault, because superheat is the value the valve exists to control.",
    ],
    howToCheck: [
      {
        title: "Take suction pressure and convert it",
        detail:
          "A pressure and temperature chart, or a gauge set that does the conversion, gives the saturation temperature for that refrigerant at that pressure.",
        performedBy: "technician",
      },
      {
        title: "Measure line temperature at the correct point",
        detail:
          "The clamp goes on the suction line where the manual specifies, with good contact and insulation over the probe, or the reading is worthless.",
        performedBy: "technician",
      },
      {
        title: "Compare against the published target for the model",
        detail:
          "Targets differ between refrigerants, metering devices, and operating conditions, so the manual for that unit is the reference and not a general figure.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Superheat is not a temperature. It is a difference between two temperatures, one of them derived from pressure.",
      "There is no universal correct value. The manufacturer publishes a target for the model at stated conditions, and outdoor and indoor conditions move it.",
      "Superheat alone does not identify a fault. It is read alongside subcooling, because the pair separates charge from metering.",
    ],
    faqs: [
      {
        question: "Why does low superheat matter?",
        answer:
          "It means liquid refrigerant may not have fully boiled by the time it leaves the evaporator. Liquid reaching the compressor is what damages it, which is why low superheat is treated as urgent rather than as a small deviation.",
      },
      {
        question: "What does high superheat indicate?",
        answer:
          "That the evaporator is being underfed, so the refrigerant finishes boiling early and the vapour keeps warming. Low charge and a restricted metering device both produce it, and subcooling is what tells them apart.",
      },
      {
        question: "Can I measure superheat myself?",
        answer:
          "No. It requires connecting gauges to the sealed refrigerant circuit, which needs certification in both the United States and the United Kingdom.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Subcooling",
    slug: "subcooling",
    question: "What is subcooling?",
    definition:
      "How many degrees the liquid refrigerant has been cooled below its condensing temperature. Together with superheat it indicates whether the charge and the metering device are working as designed, which is why both are recorded during commissioning.",
    category: "refrigeration",
    aliases: [],
    related: ["superheat", "refrigerant-charge", "saturation-temperature"],
    shortAnswer:
      "Subcooling is how many degrees the liquid refrigerant has been cooled below its condensing temperature. It indicates how much liquid the condenser is holding, which is closely tied to charge.",
    metaTitle: "Subcooling: what the number means",
    metaDescription:
      "What subcooling is, how it is measured on the liquid line, why it tracks refrigerant charge, and why it is always read alongside superheat rather than alone.",
    keywords: ["what is subcooling", "subcooling hvac", "how to measure subcooling", "subcooling vs superheat"],
    facts: [
      { label: "Measures", value: "Degrees of liquid below its condensing point" },
      { label: "Measured on", value: "The liquid line leaving the condenser" },
      { label: "Tracks", value: "Refrigerant charge, on a valve-metered system" },
      { label: "Target value", value: "Published per model in the service manual" },
    ],
    howItWorks:
      "Once vapour has fully condensed in the condenser, any further heat removal cools the liquid below the temperature it condensed at, and that difference is subcooling. Because it depends on how much liquid is backed up in the condenser, it responds directly to how much refrigerant is in the system, which is what makes it the charge indicator on systems with an expansion valve.",
    whereYouMeetIt: [
      "On a commissioning sheet, alongside superheat, as the pair of readings the system was handed over at.",
      "In a charge adjustment, where subcooling rather than pressure alone is what the technician is targeting.",
      "In a diagnosis of a system with correct charge but poor capacity, where normal subcooling shifts attention to metering or airflow.",
    ],
    howToCheck: [
      {
        title: "Read liquid line pressure and convert it",
        detail:
          "The saturation temperature at that pressure is the condensing temperature the measurement is taken against.",
        performedBy: "technician",
      },
      {
        title: "Measure liquid line temperature at the specified point",
        detail:
          "Clamp position matters, and the probe is insulated from ambient air so it reads the pipe rather than the surroundings.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Subcooling is not interchangeable with superheat. One looks at the liquid leaving the condenser, the other at the vapour leaving the evaporator.",
      "A fixed orifice system does not read charge the same way. Subcooling is the charging method on valve-metered systems, and manufacturers state which method applies.",
    ],
    faqs: [
      {
        question: "What does low subcooling mean?",
        answer:
          "That little liquid is backed up in the condenser, which points at an undercharge or at refrigerant being pulled through faster than the condenser can fully condense it. Superheat read at the same time narrows it.",
      },
      {
        question: "What does high subcooling mean?",
        answer:
          "That liquid is accumulating in the condenser, which points at an overcharge or at a restriction downstream holding refrigerant back. Overcharge raises pressure and can reach protection limits.",
      },
      {
        question: "Why are superheat and subcooling always quoted together?",
        answer:
          "Each on its own has several explanations. Together they separate a charge problem from a metering problem, which is the distinction that decides what gets adjusted or replaced.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Saturation temperature",
    slug: "saturation-temperature",
    question: "What is saturation temperature?",
    definition:
      "The temperature at which a refrigerant changes between liquid and vapour at a given pressure. Because the relationship is fixed for each refrigerant, a pressure reading can be converted into a temperature and compared with what the system is actually doing.",
    category: "refrigeration",
    aliases: ["sat temp"],
    related: ["superheat", "subcooling", "refrigerant"],
    shortAnswer:
      "Saturation temperature is the temperature at which a refrigerant boils or condenses at a given pressure. The relationship is fixed per refrigerant, so a pressure reading converts directly to a temperature.",
    metaTitle: "Saturation temperature in HVAC",
    metaDescription:
      "What saturation temperature is, why a pressure reading can be converted to a temperature, how the pressure temperature chart is used, and where glide complicates it.",
    keywords: ["saturation temperature", "pressure temperature chart", "PT chart", "saturation temp refrigerant"],
    facts: [
      { label: "Definition", value: "Boiling and condensing temperature at a given pressure" },
      { label: "Fixed by", value: "The refrigerant, not the equipment" },
      { label: "Read from", value: "A pressure temperature chart, or a digital gauge set" },
      { label: "Used for", value: "Calculating superheat and subcooling" },
    ],
    howItWorks:
      "While a refrigerant is changing state, its temperature stays fixed for a given pressure regardless of how much heat is going in or out. That fixed relationship is what a pressure temperature chart lists. Measuring a pressure therefore tells you the temperature at which the fluid is boiling or condensing at that point in the circuit, which is the baseline both superheat and subcooling are measured from.",
    whereYouMeetIt: [
      "In every superheat and subcooling calculation, as the converted value the actual temperature is compared against.",
      "On a gauge set, where the scales around the dial or the digital readout do the conversion for the selected refrigerant.",
      "In a coil condition assessment, where the saturation temperature is compared with the air temperature entering that coil.",
    ],
    howToCheck: [
      {
        title: "Select the correct refrigerant on the gauge",
        detail:
          "Each refrigerant has its own relationship. A conversion made against the wrong one produces a plausible number and a wrong diagnosis.",
        performedBy: "technician",
      },
      {
        title: "Note whether the blend has glide",
        detail:
          "Blends boil across a range rather than at one point, so the chart lists bubble and dew values and the manual states which one to use.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Saturation temperature is not the temperature of the pipe. It is what the refrigerant would be at while changing state, and the difference between the two is superheat or subcooling.",
      "One chart does not cover all refrigerants. Each has its own pressure temperature relationship.",
    ],
    faqs: [
      {
        question: "What is a PT chart?",
        answer:
          "A pressure temperature chart lists, for one refrigerant, the temperature at which it boils or condenses at each pressure. Digital gauge sets hold the same data and apply it once you select the refrigerant.",
      },
      {
        question: "What is temperature glide?",
        answer:
          "Some blends do not change state at a single temperature but across a range, because their components boil at different points. Charts for those refrigerants list a bubble point and a dew point rather than one figure.",
      },
      {
        question: "Why convert pressure to temperature at all?",
        answer:
          "Because temperature is what the rest of the diagnosis is in. Comparing the saturation temperature with the actual pipe temperature gives superheat and subcooling, and comparing it with air temperature shows how the coil is performing.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Refrigerant charge",
    slug: "refrigerant-charge",
    question: "What is refrigerant charge?",
    definition:
      "The mass of refrigerant a system is designed to hold, stated on the data plate and adjusted for pipe length at installation. Both undercharge and overcharge reduce capacity and can trigger protection codes rather than an obvious fault.",
    category: "refrigeration",
    aliases: ["charge", "gas charge"],
    related: ["subcooling", "data-plate", "line-set"],
    shortAnswer:
      "Refrigerant charge is the mass of refrigerant a system is designed to hold, given on the data plate and adjusted at installation for the actual length of the pipe run.",
    metaTitle: "Refrigerant charge and pipe length",
    metaDescription:
      "What refrigerant charge means, why it is measured by weight, how installers adjust it for line set length, and why both undercharge and overcharge reduce capacity.",
    keywords: ["refrigerant charge", "how much refrigerant", "overcharged air conditioner", "undercharged system"],
    facts: [
      { label: "Measured in", value: "Mass: pounds and ounces, or kilograms and grams" },
      { label: "Stated on", value: "The data plate, for a stated pipe length" },
      { label: "Adjusted for", value: "Line set length beyond the pre-charged run" },
      { label: "Verified by", value: "Subcooling, superheat, or a weighed charge" },
    ],
    howItWorks:
      "Manufacturers pre-charge the outdoor unit for a stated line length and publish an amount to add per unit of length beyond it. Charge is a mass rather than a pressure, because pressure changes with temperature and load while the amount of refrigatant in the circuit does not. Getting it wrong in either direction changes how the coils behave: too little starves the evaporator, too much backs liquid up in the condenser.",
    whereYouMeetIt: [
      "On the data plate, where the factory charge and the pre-charged line length are printed.",
      "On a commissioning record, where the added charge for the actual pipe run should be written down.",
      "In a protection code investigation, where an overcharge raises head pressure toward the limit that stopped the system.",
    ],
    howToCheck: [
      {
        title: "Find the factory charge and pre-charged length on the plate",
        detail:
          "That figure plus any addition for the pipe run is what the system should hold. Both belong in the commissioning record.",
        performedBy: "owner",
      },
      {
        title: "Verify by the method the manufacturer specifies",
        detail:
          "Subcooling, superheat, or weighing in a recovered and evacuated system are different methods, and the manual states which applies to that model.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Charge is not set by pressure alone. Pressures shift with indoor and outdoor conditions, which is why weight or a subcooling target is used.",
      "More refrigerant does not mean more cooling. Overcharge raises head pressure, reduces capacity, and can reach protection limits.",
    ],
    faqs: [
      {
        question: "How do I know if my system is low on refrigerant?",
        answer:
          "From the outside you cannot, and the symptoms overlap with airflow problems. A technician establishes it by measuring, and a genuinely low charge means a leak that also needs finding.",
      },
      {
        question: "Why does pipe length change the charge?",
        answer:
          "A longer line set holds more refrigerant, so the pre-charged amount is no longer enough to fill the circuit correctly. Manufacturers publish an addition per unit of length beyond the pre-charged run.",
      },
      {
        question: "Is an overcharged system worse than an undercharged one?",
        answer:
          "Both reduce capacity by different mechanisms. Overcharge raises head pressure and can flood the compressor with liquid on shutdown; undercharge starves the evaporator and can freeze it. Neither is acceptable.",
      },
    ],
    sourceIds: ["trane-mini-split-refrigerant"],
  },
  {
    term: "Refrigerant leak",
    slug: "refrigerant-leak",
    question: "What is a refrigerant leak?",
    definition:
      "A loss of refrigerant through a joint, a corroded coil, or damaged pipework. Because refrigerant is not consumed, repeated loss of capacity between seasons points to a leak that needs finding rather than a system that needs recharging.",
    category: "refrigeration",
    aliases: ["gas leak"],
    related: ["refrigerant", "line-set", "f-gas-regulation"],
    shortAnswer:
      "A refrigerant leak is any loss of refrigerant from the sealed circuit, through a joint, a corroded coil, or damaged pipe. Because refrigerant is not consumed, lost charge always means a leak.",
    metaTitle: "Refrigerant leak: signs and rules",
    metaDescription:
      "What a refrigerant leak is, why lost charge always means a leak, how technicians locate one, and what the law requires when a leak is found on an F-Gas system.",
    keywords: ["refrigerant leak", "air conditioner losing gas", "freon leak", "leak detection hvac"],
    facts: [
      { label: "Cause of lost charge", value: "Always a leak, since refrigerant is not consumed" },
      { label: "Common points", value: "Flare joints, brazed joints, coil corrosion, damaged pipe" },
      { label: "Located with", value: "Electronic detector, bubble solution, or dye" },
      { label: "Legal duty", value: "Repair and record, under F-Gas or EPA rules" },
    ],
    howItWorks:
      "Refrigerant escapes as gas, so a leak leaves no puddle and often no visible sign. Capacity falls gradually as charge is lost, which is why the complaint is usually that the system is not as strong as last year rather than that it stopped. Oil carried with the refrigerant sometimes stains around the leak point, which is one of the clues a technician looks for.",
    whereYouMeetIt: [
      "In a season-on-season capacity complaint, where the system worked and now does not quite.",
      "In an icing complaint, where a low charge drove the coil surface below freezing.",
      "In a compliance record, where the leak, its repair, and the recharged quantity all have to be logged.",
    ],
    howToCheck: [
      {
        title: "Describe the change over time rather than the symptom alone",
        detail:
          "Gradual loss of capacity across a season points somewhere different from a system that stopped overnight, and that history is what an owner can supply.",
        performedBy: "owner",
      },
      {
        title: "Test the mechanical joints first",
        detail:
          "Flare connections and service ports are made on site and are checked before coils and buried pipework.",
        performedBy: "technician",
      },
      {
        title: "Pressure test and hold before recharging",
        detail:
          "A nitrogen pressure test with a held reading confirms the repair before refrigerant goes back in.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Water dripping from an indoor unit is condensate, not refrigerant. Refrigerant leaves as gas.",
      "A recharge without a leak search is not a repair. The same loss returns, and in Europe topping up a known leaking system without repairing it is not permitted.",
    ],
    faqs: [
      {
        question: "Can I smell or see a refrigerant leak?",
        answer:
          "Rarely. Refrigerant escapes as an odourless gas. Oil staining around a joint, ice on the coil, and falling capacity are the indirect signs, and detection instruments are what confirm the point.",
      },
      {
        question: "Is a small leak worth fixing?",
        answer:
          "Yes. Capacity keeps falling, the compressor runs in worse conditions, and both F-Gas and EPA rules place duties on repairing rather than repeatedly topping up.",
      },
      {
        question: "How long should a repaired system hold its charge?",
        answer:
          "Indefinitely. A correctly sealed circuit does not lose refrigerant, so returning within a season means the leak was not found or a second one exists.",
      },
    ],
    sourceIds: ["trane-mini-split-refrigerant", "gov-uk-f-gas", "epa-section-608"],
    seeAlso: { label: "Mini-split not cooling", path: "/mini-split-not-cooling/" },
  },
] satisfies GlossaryTermInput[];
