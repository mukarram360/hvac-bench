import type { GlossaryTermInput } from "../schema";

/**
 * Documents, procedures, and the certification the law requires.
 *
 * Two of these, F-Gas and EPA Section 608, are the legal reason the site
 * separates owner checks from technician work at all. They are written as
 * plainly as the regulations allow, because a reader who does not know a
 * boundary exists cannot respect it.
 */
export const service = [
  {
    term: "Evacuation",
    slug: "evacuation",
    question: "What is evacuation in refrigeration?",
    definition:
      "Pulling a deep vacuum on a system with a vacuum pump to remove air and moisture before charging, measured in microns or millibar. Air and moisture left inside react with the oil and refrigerant over time, which is why manufacturers publish a target vacuum level and a hold test as part of commissioning.",
    category: "service",
    aliases: ["vacuum", "pull down"],
    related: ["commissioning", "refrigerant-charge", "refrigerant"],
    seeAlso: { label: "Who may open the circuit", path: "/mrcool-vs-pioneer-mini-splits/" },
    shortAnswer:
      "Evacuation is pulling a deep vacuum on a refrigerant circuit to remove air and moisture before charging. It is measured with a micron gauge and confirmed by a hold test, not by time.",
    metaTitle: "Evacuation: pulling a vacuum",
    metaDescription:
      "What evacuation does, why air and moisture damage a refrigerant circuit, why a micron gauge and a hold test replace timing the pump, and what target levels mean.",
    keywords: ["evacuation hvac", "vacuum pump microns", "micron gauge", "hold test refrigeration"],
    facts: [
      { label: "Removes", value: "Air and moisture from the circuit" },
      { label: "Measured in", value: "Microns in the US, millibar in Europe" },
      { label: "Confirmed by", value: "A hold test with the pump isolated" },
      { label: "Common target", value: "500 microns, or as the manufacturer specifies" },
    ],
    howItWorks:
      "Water boils at room temperature once the pressure is low enough, so a deep vacuum turns any moisture inside the pipework into vapour the pump can remove. Air left behind is a non-condensable gas that raises head pressure and reduces capacity, and moisture reacts with the oil to form acids that attack the compressor windings. Reaching a target reading and then holding it with the pump valved off is what proves the system is both dry and tight.",
    whereYouMeetIt: [
      "In a commissioning record, where the vacuum achieved and the hold result are written down.",
      "After any repair that opened the circuit, because the system has to be evacuated again before recharging.",
      "In a premature compressor failure investigation, where acid in the oil points back at moisture never removed.",
    ],
    howToCheck: [
      {
        title: "Use a micron gauge rather than the compound gauge",
        detail:
          "A standard gauge cannot resolve the range that matters. A micron gauge is what reads the last part of the pull-down.",
        performedBy: "technician",
      },
      {
        title: "Valve the pump off and watch the reading",
        detail:
          "A reading that climbs and settles indicates remaining moisture; one that climbs without settling indicates a leak. Time on the pump proves neither.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "Specified target",
        value: "500 microns",
        note: "Manufacturers state their own figure, and the manual overrides any general value",
      },
      {
        context: "Unit conversion",
        value: "1000 microns is about 1.33 mbar",
        note: "North American documentation uses microns, European documentation uses millibar",
      },
      {
        context: "What the hold test shows",
        value: "Rise and settle, or continuous rise",
        note: "Settling indicates residual moisture, continuous rise indicates a leak",
      },
    ],
    mistakes: [
      "Running the pump for a set number of minutes proves nothing. The gauge reading and the hold test are what confirm the result.",
      "Nitrogen purging is not a substitute for evacuation. It reduces contamination during brazing, and the vacuum still has to be pulled afterwards.",
    ],
    faqs: [
      {
        question: "Why does moisture matter so much in a refrigerant circuit?",
        answer:
          "It reacts with refrigerant and oil to form acids that attack the compressor windings, and it can freeze at the metering device and block it. Neither shows up immediately, which is why the vacuum is verified rather than assumed.",
      },
      {
        question: "What does a rising micron reading mean?",
        answer:
          "A reading that rises and then settles at a higher level indicates moisture still boiling off. A reading that keeps rising indicates air getting in, which means a leak that has to be found before charging.",
      },
      {
        question: "Can I evacuate a system myself?",
        answer:
          "No. It means connecting to the sealed refrigerant circuit, which requires EPA Section 608 certification in the United States and an F-Gas qualification in the United Kingdom and Europe.",
      },
    ],
    sourceIds: ["epa-section-608", "gov-uk-f-gas"],
  },
  {
    term: "Data plate",
    slug: "data-plate",
    question: "What is a data plate?",
    definition:
      "The label on the equipment listing model number, serial number, electrical ratings, and refrigerant charge. It is the starting point for any accurate diagnosis, because code tables and service data are published per model rather than per brand.",
    category: "service",
    aliases: ["nameplate", "rating plate", "spec plate"],
    related: ["error-code", "service-manual", "refrigerant-charge"],
    shortAnswer:
      "The data plate is the label on a unit carrying its model number, serial number, electrical ratings, and refrigerant charge. It is what every code table and service document is indexed by.",
    metaTitle: "Data plate: where diagnosis starts",
    metaDescription:
      "What is printed on an HVAC data plate, why the complete model number matters more than the brand, and what to photograph before calling anyone.",
    keywords: ["hvac data plate", "nameplate", "model number location", "serial number hvac"],
    facts: [
      { label: "Carries", value: "Model, serial, electrical ratings, refrigerant and charge" },
      { label: "Indoor and outdoor", value: "Separate plates, both needed" },
      { label: "Location", value: "Side of the outdoor unit, behind the front panel indoors" },
      { label: "Used for", value: "Finding the correct code table and service data" },
    ],
    howItWorks:
      "Manufacturers publish service data by product family, and the model number is what identifies which family a unit belongs to. Two units from the same brand with similar-looking model numbers can carry different code tables, different charge figures, and different electrical ratings, so the plate rather than the badge is what the documentation is looked up against.",
    whereYouMeetIt: [
      "Before any code lookup, because the table depends on the model.",
      "In a parts order, where the model and serial determine the revision of the part fitted.",
      "In a charge calculation, where the factory charge and pre-charged line length are printed.",
    ],
    howToCheck: [
      {
        title: "Photograph both plates in full",
        detail:
          "Indoor and outdoor model numbers differ, and a service manual is indexed by the pairing. Capture the whole label rather than just the model line.",
        performedBy: "owner",
      },
      {
        title: "Record the complete string including suffixes",
        detail:
          "Trailing letters and revision codes often distinguish product families, and dropping them can lead to the wrong code table.",
        performedBy: "owner",
      },
      {
        title: "Note the serial number for date of manufacture",
        detail:
          "Manufacturers encode a date in the serial, which is what settles warranty questions and identifies which revision of a manual applies.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "The brand name is not enough to look up a code. Tables are written per product family.",
      "The indoor and outdoor model numbers are different, and both are needed rather than either one.",
      "A plate weathered to illegibility is a real problem. Photographing it while it is readable is worth doing before it is needed.",
    ],
    faqs: [
      {
        question: "Where is the data plate on a mini-split?",
        answer:
          "On the outdoor unit it is on the side or rear casing. On the indoor head it sits behind the hinged front panel, near the filters, or on the underside of the casing.",
      },
      {
        question: "What if the data plate is unreadable?",
        answer:
          "Installation paperwork, the commissioning record, and any warranty registration all carry the model number. Failing that, a technician can sometimes identify the family from board part numbers, which is slower and less certain.",
      },
      {
        question: "Why do I need both indoor and outdoor model numbers?",
        answer:
          "Because service documentation is written for the combination. Code tables, charge figures, and matched capacity ratings all depend on which indoor unit is paired with which outdoor unit.",
      },
    ],
    sourceIds: ["mrcool-code-table", "senville-leto-codes"],
    seeAlso: { label: "Error code index", path: "/error-codes/" },
  },
  {
    term: "Service manual",
    slug: "service-manual",
    question: "What is a service manual?",
    definition:
      "The manufacturer document written for technicians, containing wiring diagrams, code tables, pressure data, and diagnostic sequences. It is more specific than the owner's manual and is the source that settles what a code means on a given model.",
    category: "service",
    aliases: ["technical manual", "installation manual"],
    related: ["data-plate", "error-code"],
    seeAlso: { label: "Finding the numbers it is indexed by", path: "/how-to-find-mini-split-model-number/" },
    shortAnswer:
      "A service manual is the manufacturer document written for technicians. It carries the wiring diagrams, code tables, pressure data, and diagnostic sequences an owner manual leaves out.",
    metaTitle: "Service manual: the settling source",
    metaDescription:
      "What a service manual holds that an owner manual does not, why it settles a code definition, and how installation and engineering manuals differ.",
    keywords: ["hvac service manual", "error code table", "wiring diagram hvac", "installation manual"],
    facts: [
      { label: "Written for", value: "Technicians, not owners" },
      { label: "Contains", value: "Wiring diagrams, code tables, pressure data, diagnostic flows" },
      { label: "Indexed by", value: "Product family and model" },
      { label: "Related documents", value: "Installation manual, engineering manual, owner manual" },
    ],
    howItWorks:
      "Manufacturers split their documentation by audience. The owner manual covers operation and basic care, the installation manual covers pipe runs, clearances, and commissioning, and the service manual carries the diagnostic content. When a code definition is disputed, the service manual for that exact model is the document that resolves it, which is why the model number comes first.",
    whereYouMeetIt: [
      "In a code lookup, as the document behind the table.",
      "In a parts identification, where exploded diagrams and part numbers are published.",
      "In a commissioning check, where the target readings the system should achieve are listed.",
    ],
    howToCheck: [
      {
        title: "Match the manual to the complete model number",
        detail:
          "A manual for a neighbouring family in the same range can list the same code with a different meaning. Check the model coverage page before using a table.",
        performedBy: "owner",
      },
      {
        title: "Note the revision and date of the document",
        detail:
          "Manufacturers reissue manuals, and a code definition can be revised. Working from the current revision is part of the check.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "An owner manual is not a substitute. It lists a subset of codes and rarely explains what produced them.",
      "A manual found by searching the brand alone may cover a different product family. The coverage list at the front is what confirms it.",
    ],
    faqs: [
      {
        question: "What is the difference between an installation manual and a service manual?",
        answer:
          "The installation manual covers getting the system in and commissioned: clearances, pipe runs, wiring, and start-up. The service manual covers diagnosing it afterwards, with code tables, sequences, and component data.",
      },
      {
        question: "Are service manuals publicly available?",
        answer:
          "Some manufacturers publish them openly, others restrict them to registered dealers. Where they are restricted, the owner manual and manufacturer support articles are what remain publicly citable.",
      },
      {
        question: "Why does a manual matter more than a general code list?",
        answer:
          "General lists collapse product families together, and that is exactly the distinction that changes what a code means. The manual states which models it covers.",
      },
    ],
    sourceIds: ["gree-multi21-service", "lg-general-service", "daikin-a5-service"],
  },
  {
    term: "Commissioning",
    slug: "commissioning",
    question: "What is commissioning?",
    definition:
      "The measured handover of a new system: charge verified, airflow set, controls configured, and readings recorded. A commissioning sheet is the reference that later service visits compare against when performance is questioned.",
    category: "service",
    aliases: ["handover", "start-up"],
    related: ["evacuation", "refrigerant-charge", "superheat"],
    seeAlso: { label: "Judging a repair-or-replace call", path: "/mini-split-lifespan/" },
    shortAnswer:
      "Commissioning is the measured handover of a new system: charge verified, airflow set, controls configured, and every reading written down as the baseline later visits compare against.",
    metaTitle: "Commissioning: the measured handover",
    metaDescription:
      "What commissioning covers, why the recorded readings matter as much as the installation, and what belongs on the commissioning sheet you should be given.",
    keywords: ["hvac commissioning", "commissioning sheet", "system handover", "start up readings"],
    facts: [
      { label: "Confirms", value: "Charge, airflow, controls, and safe operation" },
      { label: "Produces", value: "A written record of the readings achieved" },
      { label: "Used later as", value: "The comparison point for any performance question" },
      { label: "Belongs to", value: "The building owner, not the installer" },
    ],
    howItWorks:
      "A system that is physically installed is not yet a system that works to specification. Commissioning is where the vacuum is verified, the charge adjusted for the actual pipe run, airflow measured and set, controls configured, and the resulting readings recorded. Without that record, a later visit has nothing to compare against and every question becomes a fresh investigation.",
    whereYouMeetIt: [
      "In a handover pack, alongside the manuals and the warranty registration.",
      "In a performance dispute, where the commissioning readings are what show whether anything has changed.",
      "In a warranty claim, where evidence of correct commissioning is frequently a condition.",
    ],
    howToCheck: [
      {
        title: "Ask for the commissioning sheet at handover",
        detail:
          "It should carry model numbers, the charge added for the pipe run, airflow or fan settings, control configuration, and the readings taken.",
        performedBy: "owner",
      },
      {
        title: "Store it with the manuals rather than with the invoice",
        detail:
          "It is a technical record that a future technician will want, and it is worth photographing so a copy survives.",
        performedBy: "owner",
      },
      {
        title: "Record readings against the manufacturer targets",
        detail:
          "A sheet of numbers with no target beside them cannot show whether the system was within specification on the day.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Commissioning is not the same as switching the system on and confirming it produces cold air. It is a set of measurements against published targets.",
      "A commissioning record kept only by the installer is of limited use. It belongs with the building.",
    ],
    faqs: [
      {
        question: "What should a commissioning sheet include?",
        answer:
          "Model and serial numbers for both units, the vacuum achieved, the charge added for the actual pipe run, airflow or fan settings, control configuration, and the operating readings taken with the conditions they were taken at.",
      },
      {
        question: "Why does it matter years later?",
        answer:
          "It is the only record of how the system performed when it was known to be correct. Comparing a current reading against it turns a vague complaint that performance has dropped into a measurable difference.",
      },
      {
        question: "What if I was never given one?",
        answer:
          "Ask the installer, since many keep records for warranty purposes. Failing that, a technician can establish a baseline at the next service visit, which is worth less than the original but better than nothing.",
      },
    ],
    sourceIds: ["gree-multi21-service"],
  },
  {
    term: "F-Gas regulation",
    slug: "f-gas-regulation",
    question: "What is F-Gas regulation?",
    definition:
      "United Kingdom and European Union rules governing fluorinated refrigerants, including who may handle them, leak checking, and record keeping. Work on the refrigerant circuit requires certification, which is why refrigerant tasks sit outside homeowner checks.",
    category: "service",
    aliases: ["F Gas", "FGas certification"],
    related: ["refrigerant", "epa-608", "refrigerant-leak"],
    seeAlso: { label: "Refrigerant handling in practice", path: "/hvac-refrigerants-explained/" },
    shortAnswer:
      "F-Gas regulation is the United Kingdom and European Union framework controlling fluorinated refrigerants: who may handle them, when systems must be leak checked, and what has to be recorded.",
    metaTitle: "F-Gas regulation: what it requires",
    metaDescription:
      "What F-Gas regulation covers, who needs certification to handle refrigerant, when leak checking applies, why records must be kept, and how the phase-down works.",
    keywords: ["F-Gas regulation", "F gas certification", "refrigerant leak checking", "F gas records"],
    facts: [
      { label: "Applies in", value: "United Kingdom and European Union" },
      { label: "Controls", value: "Who handles refrigerant, leak checking, and record keeping" },
      { label: "Certification", value: "Required for anyone working on the refrigerant circuit" },
      { label: "Phase-down", value: "Limits the quantity of high GWP refrigerant placed on the market" },
    ],
    howItWorks:
      "The regulation treats fluorinated refrigerants as controlled substances because of their global warming potential. It restricts handling to certified people, requires leak checks at intervals set by the size of the charge, requires records of the refrigerant added and recovered, and progressively reduces the quantity of high GWP refrigerant that may be placed on the market, which is what drives equipment toward lower GWP alternatives.",
    whereYouMeetIt: [
      "In any quotation for refrigerant work, where the certification of the person doing it is a legal requirement rather than a credential.",
      "In a commercial maintenance contract, where leak check intervals and records are contractual obligations.",
      "In equipment availability, where the phase-down is what moved new systems from R-410A toward R-32.",
    ],
    howToCheck: [
      {
        title: "Ask to see the certification before refrigerant work",
        detail:
          "Individual certification, and company certification where it applies, are both requirements. Asking is reasonable and normal.",
        performedBy: "owner",
      },
      {
        title: "Keep the records supplied after any refrigerant work",
        detail:
          "Quantities added and recovered belong in the system record, and for larger charges the operator carries a duty to hold them.",
        performedBy: "owner",
      },
    ],
    mistakes: [
      "F-Gas certification is not the same as being a qualified electrician or plumber. It is a separate qualification specific to refrigerant handling.",
      "Topping up a system known to be leaking, without repairing the leak, is not permitted. The repair is the requirement.",
    ],
    faqs: [
      {
        question: "Do I need F-Gas certification to work on my own system?",
        answer:
          "For anything that opens the refrigerant circuit, yes. Cleaning filters, clearing the outdoor unit, and checking drains are outside it, which is why the site separates owner checks from technician work.",
      },
      {
        question: "How often does a system need leak checking?",
        answer:
          "The interval depends on the size of the charge expressed in carbon dioxide equivalent, so it scales with both the quantity and the global warming potential of the refrigerant. A small domestic system can fall below the threshold; check the charge on the data plate against the current figure.",
      },
      {
        question: "Is F-Gas the same as EPA Section 608?",
        answer:
          "They serve the same purpose in different jurisdictions. F-Gas applies in the United Kingdom and European Union, Section 608 in the United States, and neither certification substitutes for the other.",
      },
    ],
    sourceIds: ["gov-uk-f-gas"],
  },
  {
    term: "EPA Section 608",
    slug: "epa-608",
    question: "What is EPA Section 608?",
    definition:
      "The United States certification required to handle refrigerants under the Clean Air Act. Like F-Gas in Europe, it makes opening a refrigerant circuit a licensed activity rather than a do-it-yourself task.",
    category: "service",
    aliases: ["EPA 608", "Section 608"],
    related: ["f-gas-regulation", "refrigerant"],
    seeAlso: { label: "What certification covers", path: "/hvac-refrigerants-explained/" },
    shortAnswer:
      "EPA Section 608 is the United States certification required to handle refrigerants under the Clean Air Act. It divides into type classes covering small appliances, low pressure, and high pressure equipment.",
    metaTitle: "EPA Section 608 certification",
    metaDescription:
      "What EPA Section 608 requires, how the Type I to Universal classes divide the work, why venting refrigerant is prohibited, and how it compares with F-Gas.",
    keywords: ["EPA 608", "Section 608 certification", "refrigerant certification US", "EPA 608 types"],
    facts: [
      { label: "Applies in", value: "United States" },
      { label: "Legal basis", value: "The Clean Air Act" },
      { label: "Classes", value: "Type I, Type II, Type III, and Universal" },
      { label: "Prohibits", value: "Knowingly venting refrigerant to the atmosphere" },
    ],
    howItWorks:
      "The rule requires anyone who maintains, services, repairs, or disposes of equipment that could release refrigerant to hold certification, and it divides that certification by equipment class. Type I covers small appliances, Type II high pressure equipment including most split systems, Type III low pressure equipment, and Universal covers all three. Venting refrigerant is prohibited, which is why recovery equipment is part of the job rather than an option.",
    whereYouMeetIt: [
      "In a service quotation, where recovery and recharge are carried out by a certified technician.",
      "At a supplier, where the sale of refrigerant is restricted to certified technicians.",
      "In equipment disposal, where refrigerant has to be recovered before the unit is scrapped.",
    ],
    howToCheck: [
      {
        title: "Confirm the certification type matches the equipment",
        detail:
          "Type II or Universal covers residential split systems and heat pumps. Type I alone covers small sealed appliances.",
        performedBy: "owner",
      },
      {
        title: "Expect recovery equipment on site",
        detail:
          "Refrigerant removed from a system has to be recovered rather than released, so a recovery machine and cylinder are part of the visit.",
        performedBy: "owner",
      },
    ],
    typicalValues: [
      {
        context: "Type I",
        value: "Small appliances",
        note: "Factory-sealed units holding small charges",
      },
      {
        context: "Type II",
        value: "High pressure equipment",
        note: "Covers residential split systems and heat pumps",
      },
      {
        context: "Type III",
        value: "Low pressure equipment",
        note: "Chillers operating below atmospheric pressure",
      },
      {
        context: "Universal",
        value: "All three types",
        note: "Held by technicians who work across equipment classes",
      },
    ],
    mistakes: [
      "Section 608 is not a general HVAC licence. It certifies refrigerant handling specifically, and state or local licensing sits alongside it.",
      "Buying refrigerant without certification is restricted, and the restriction applies to the purchase as well as to the work.",
    ],
    faqs: [
      {
        question: "Which Section 608 type do I need for a mini-split?",
        answer:
          "Type II covers high pressure equipment, which includes residential split systems and heat pumps. Universal certification covers it as well, along with the other classes.",
      },
      {
        question: "Can a homeowner buy refrigerant in the United States?",
        answer:
          "Sales of most refrigerants are restricted to certified technicians. That restriction exists precisely because charging a system is not a task the rule contemplates an owner performing.",
      },
      {
        question: "Is Section 608 recognised in the United Kingdom?",
        answer:
          "No. The United Kingdom and European Union operate F-Gas certification, and the two schemes are separate. Working in either jurisdiction requires that jurisdiction's qualification.",
      },
    ],
    sourceIds: ["epa-section-608"],
  },
  {
    term: "Sensor fault",
    slug: "sensor-fault",
    question: "What is a sensor fault?",
    definition:
      "A code raised when a temperature or pressure sensor reads outside its expected range. The sensor itself is only one possibility: the connector, the harness, and the board input all sit in the same measurement path.",
    category: "service",
    aliases: ["sensor error"],
    related: ["thermistor", "error-code", "control-board"],
    shortAnswer:
      "A sensor fault is a code raised when a reading falls outside the range the board expects. The sensor, its connector, the harness, and the board input all sit in the same measurement path.",
    metaTitle: "Sensor fault: what it really covers",
    metaDescription:
      "What a sensor fault code means, why it covers the connector and harness as well as the sensor, how open and short readings differ, and why some faults come and go.",
    keywords: ["sensor fault", "temperature sensor error", "hvac sensor code", "open circuit sensor"],
    facts: [
      { label: "Reports", value: "A reading outside the expected range" },
      { label: "Covers", value: "Sensor, connector, harness, and board input" },
      { label: "Common readings", value: "Open circuit, short circuit, or out of range" },
      { label: "Intermittent cause", value: "A connector making poor contact" },
    ],
    howItWorks:
      "The board applies a known excitation and measures what returns. A break anywhere in that path reads as open circuit, a short anywhere reads as shorted, and a drifted sensor reads as a plausible but wrong temperature. Because the path runs through a plug and a length of harness, a code naming the sensor is really naming the whole measurement chain.",
    whereYouMeetIt: [
      "In an intermittent fault that clears on reset and returns later, which is characteristic of a connector rather than a failed component.",
      "In a fault appearing shortly after other work, where a connector was disturbed and not fully reseated.",
      "In a coil temperature protection code, where the sensor is healthy and the temperature it reports is genuine.",
    ],
    howToCheck: [
      {
        title: "Note whether the fault is constant or intermittent",
        detail:
          "A code that appears and clears points at a connection. A code present from the moment of power-up points at an open or shorted path.",
        performedBy: "owner",
      },
      {
        title: "Measure at the board plug, not at the sensor",
        detail:
          "Reading resistance where the harness lands on the board tests the sensor and the wiring together. Repeating it at the sensor itself says which half of that path is at fault.",
        performedBy: "technician",
      },
      {
        title: "Inspect the harness route and the pins",
        detail:
          "Follow the harness for pinch points at panel edges and for a plug that has been disturbed by earlier work. Both produce a code that comes and goes.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A sensor fault does not mean the sensor failed. It means the measurement path did not return a valid value.",
      "A sensor code is an instruction to check the condition being reported, not a parts order. The extreme value may be real.",
      "Replacing a sensor without inspecting its connector can leave the same code with a new part fitted.",
    ],
    faqs: [
      {
        question: "Why does my sensor fault come and go?",
        answer:
          "Intermittent behaviour points at a connection rather than at a component. A pin making poor contact reads correctly when the plug happens to sit right and fails when vibration or temperature moves it.",
      },
      {
        question: "Can I replace a sensor myself?",
        answer:
          "It means opening the indoor or outdoor unit, working near live terminals, and identifying the correct part by model. That places it on the technician side even where the sensor itself is a low cost part.",
      },
      {
        question: "Does a sensor fault stop the system?",
        answer:
          "It depends on which sensor. A board that has lost a reading it depends on for protection stops rather than running blind, while a less critical sensor can leave the system running with reduced function.",
      },
    ],
    sourceIds: ["pioneer-quantum-e1", "daikin-a5-service", "pioneer-current-e1-e2"],
    seeAlso: {
      label: "Pioneer E1 temperature sensor code",
      path: "/brands/pioneer/e1-temperature-sensor-error-code/",
    },
  },
] satisfies GlossaryTermInput[];
