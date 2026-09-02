import type { GlossaryTermInput } from "../schema";

/**
 * The numbers on the label, and what each one was measured under.
 *
 * Every rating here is the output of a defined test procedure, so the entries
 * name the procedure. That is the whole value of the section: SEER2 and SEER
 * are not the same test, and SCOP and HSPF2 are not the same season, so
 * comparing the bare numbers across those lines produces a wrong answer.
 */
export const efficiency = [
  {
    term: "SEER and SEER2",
    slug: "seer",
    question: "What is SEER2?",
    definition:
      "Seasonal energy efficiency ratio, the cooling output over a season divided by the electricity used. SEER2 is the current United States test procedure, measured under higher external static pressure, so SEER2 figures read lower than older SEER values for the same equipment.",
    category: "efficiency",
    aliases: ["SEER", "SEER2"],
    related: ["hspf", "eer", "static-pressure"],
    seeAlso: { label: "What SEER2 measures", path: "/seer2-explained/" },
    shortAnswer:
      "SEER is seasonal cooling output divided by the electricity used to produce it. SEER2 is the current United States test, run at a higher external static pressure, so its numbers read lower than SEER.",
    metaTitle: "SEER and SEER2: what changed",
    metaDescription:
      "What SEER measures, why SEER2 replaced it, how the higher external static pressure in the new test lowers the numbers, and why SEER2 cannot be compared to SEER.",
    keywords: ["SEER2", "SEER rating", "SEER vs SEER2", "what is a good SEER rating"],
    facts: [
      { label: "Measures", value: "Seasonal cooling output per unit of electricity" },
      { label: "Current US test", value: "SEER2, in force from 2023" },
      { label: "Key change", value: "Higher external static pressure in the test" },
      { label: "Comparable with", value: "Other SEER2 figures only" },
    ],
    howItWorks:
      "The test runs equipment across a set of conditions meant to represent a cooling season and divides the total cooling delivered by the total electricity used. SEER2 keeps the idea and changes the conditions, the main change being that ducted equipment is tested against a realistic duct resistance instead of a nearly free-blowing one, which is why the same machine scores lower under the new procedure.",
    whereYouMeetIt: [
      "On a North American equipment label and in the AHRI certified ratings directory.",
      "In a minimum efficiency requirement, where regional standards set a floor for what may be installed.",
      "In a rebate or incentive programme, where a SEER2 threshold decides eligibility.",
    ],
    howToCheck: [
      {
        title: "Check whether the figure is SEER or SEER2",
        detail:
          "Marketing material sometimes still quotes the older number. The two are not interchangeable and comparing them directly overstates the older equipment.",
        performedBy: "owner",
      },
      {
        title: "Look the pairing up in the certified directory",
        detail:
          "Ratings belong to a matched indoor and outdoor combination. The AHRI directory lists the certified figure for the specific pairing.",
        performedBy: "owner",
      },
    ],
    typicalValues: [
      {
        context: "What SEER2 changed",
        value: "0.5 in. w.c. external static",
        note: "Ducted equipment is tested against realistic duct resistance rather than 0.1 in. w.c.",
      },
      {
        context: "Effect on the number",
        value: "SEER2 reads lower than SEER",
        note: "For the same equipment, because the test is harder",
      },
      {
        context: "European counterpart",
        value: "SEER under ecodesign",
        note: "Also a seasonal ratio, but a different test and climate profile, so not interchangeable",
      },
    ],
    mistakes: [
      "SEER2 and SEER are not the same scale. A SEER2 number placed beside an older SEER number makes the older equipment look better than it is.",
      "The rating belongs to a matched pair. An outdoor unit installed with a different indoor coil does not carry the certified figure.",
      "A seasonal rating is not what the system achieves in your house. It is a comparison figure produced under a defined procedure.",
    ],
    faqs: [
      {
        question: "Why is my new system's SEER2 lower than my old system's SEER?",
        answer:
          "Because the test changed rather than the equipment getting worse. SEER2 tests ducted systems against a much higher external static pressure, which reflects real duct systems and produces a lower number for the same machine.",
      },
      {
        question: "What is a good SEER2 rating?",
        answer:
          "Regional minimums set the floor and higher ratings cost more to buy. Whether the extra is worth it depends on cooling hours and electricity price, so the comparison is between certified figures for equipment you would actually install.",
      },
      {
        question: "Can I compare a US SEER2 figure with a European SEER figure?",
        answer:
          "No. Both are seasonal ratios but they use different test conditions and climate profiles, so the numbers are not on the same scale.",
      },
    ],
    sourceIds: ["ahri-directory", "ec-ecodesign"],
  },
  {
    term: "HSPF and HSPF2",
    slug: "hspf",
    question: "What is HSPF2?",
    definition:
      "Heating seasonal performance factor, the heat delivered over a season divided by the electricity used, with HSPF2 the current United States test procedure. It is the heating counterpart to SEER and is not comparable with European SCOP figures.",
    category: "efficiency",
    aliases: ["HSPF", "HSPF2"],
    related: ["seer", "scop", "heat-pump"],
    seeAlso: { label: "Which metric answers which question", path: "/seer2-explained/" },
    shortAnswer:
      "HSPF is seasonal heating output divided by the electricity used, expressed in BTU per watt-hour. HSPF2 is the current United States procedure and reads lower than HSPF for the same equipment.",
    metaTitle: "HSPF and HSPF2 for heat pumps",
    metaDescription:
      "What HSPF measures, how HSPF2 changed the test, why the units are BTU per watt-hour rather than a plain ratio, and why HSPF cannot be compared with SCOP.",
    keywords: ["HSPF2", "HSPF rating", "heat pump efficiency rating", "HSPF vs SCOP"],
    facts: [
      { label: "Measures", value: "Seasonal heating output per unit of electricity" },
      { label: "Units", value: "BTU per watt-hour, not a dimensionless ratio" },
      { label: "Current US test", value: "HSPF2, in force from 2023" },
      { label: "Not comparable with", value: "European SCOP" },
    ],
    howItWorks:
      "The procedure totals the heat delivered across a representative heating season, including the electricity used by auxiliary heat and by defrost cycles, and divides by the total electricity consumed. Because output is counted in BTU and input in watt-hours, the result is not a plain ratio, which is why an HSPF of around 8 and a COP of around 8 describe entirely different performance.",
    whereYouMeetIt: [
      "On a North American heat pump label, alongside the SEER2 cooling rating.",
      "In a minimum standard, where a heat pump has to meet an HSPF2 floor to be installed.",
      "In an incentive programme, where the threshold is set in HSPF2 rather than in COP.",
    ],
    howToCheck: [
      {
        title: "Confirm the figure is HSPF2",
        detail:
          "The older HSPF number is higher for the same equipment. Comparing across the two makes older equipment look better than it is.",
        performedBy: "owner",
      },
      {
        title: "Divide by 3.412 for a rough COP comparison",
        detail:
          "HSPF is BTU per watt-hour, so dividing by 3.412 puts it on a dimensionless footing. It remains a different test from SCOP.",
        performedBy: "owner",
      },
    ],
    typicalValues: [
      {
        context: "Units",
        value: "BTU per watt-hour",
        note: "Divide by 3.412 to express it as a dimensionless seasonal efficiency",
      },
      {
        context: "Current test procedure",
        value: "HSPF2",
        note: "Replaced HSPF for United States ratings from 2023",
      },
      {
        context: "European counterpart",
        value: "SCOP",
        note: "Dimensionless, and measured against a different climate profile",
      },
    ],
    mistakes: [
      "HSPF is not a dimensionless efficiency. Its units are BTU per watt-hour, so it cannot be read as though it were a COP.",
      "HSPF and SCOP are not the same measurement in different markets. The seasons, the climate profiles, and the treatment of auxiliary heat all differ.",
    ],
    faqs: [
      {
        question: "How does HSPF2 differ from HSPF?",
        answer:
          "It is the updated United States test, with revised conditions including the higher external static pressure used across the 2023 procedures. For the same equipment the HSPF2 figure is lower.",
      },
      {
        question: "Can I convert HSPF to COP?",
        answer:
          "Dividing by 3.412 converts the units, which gives a seasonal figure on a dimensionless scale. It still is not a COP, because COP is measured at a single operating condition rather than across a season.",
      },
      {
        question: "Why is HSPF not used in Europe?",
        answer:
          "Europe rates seasonal heating performance with SCOP under the ecodesign framework, using its own climate profiles and test conditions. Each market publishes the figure its own regulation requires.",
      },
    ],
    sourceIds: ["ahri-directory", "doe-heat-pumps"],
  },
  {
    term: "EER",
    slug: "eer",
    question: "What is EER?",
    definition:
      "Energy efficiency ratio: cooling output divided by electrical input at one fixed operating condition, rather than across a season. It is useful for comparing equipment at a specific outdoor temperature, which is why it appears alongside SEER on North American data sheets.",
    category: "efficiency",
    aliases: ["energy efficiency ratio", "EER2"],
    related: ["seer", "cop"],
    seeAlso: { label: "Rating conditions and seasonal averages", path: "/seer2-explained/" },
    shortAnswer:
      "EER is cooling output divided by electrical input at one fixed operating condition. Unlike SEER it is a single-point figure, which makes it useful for comparing performance on a hot day.",
    metaTitle: "EER: the single-point rating",
    metaDescription:
      "What EER measures, how a single-point rating differs from seasonal SEER, why it matters in hot climates, and how EER relates to COP and to EER2.",
    keywords: ["EER rating", "EER vs SEER", "energy efficiency ratio", "EER2"],
    facts: [
      { label: "Measures", value: "Cooling output per unit of input at one condition" },
      { label: "Units", value: "BTU per watt-hour" },
      { label: "Differs from SEER", value: "Single point rather than seasonal" },
      { label: "Current US variant", value: "EER2, matching the 2023 test conditions" },
    ],
    howItWorks:
      "EER fixes the operating conditions and reports the ratio at that point, which is a high outdoor temperature. Because it does not average across a season, it says how the equipment behaves when it is working hardest, which is the number that matters in a climate where the design day dominates the cooling bill.",
    whereYouMeetIt: [
      "On a North American data sheet, quoted alongside SEER2 rather than instead of it.",
      "In a hot climate specification, where performance at high outdoor temperature is what is being bought.",
      "In a commercial rating, where single-point figures at several conditions are published.",
    ],
    howToCheck: [
      {
        title: "Note the condition the figure was taken at",
        detail:
          "An EER without its operating condition is not comparable with another EER. The data sheet states the outdoor temperature used.",
        performedBy: "owner",
      },
      {
        title: "Use EER alongside SEER, not instead of it",
        detail:
          "Seasonal and single-point ratings answer different questions, and equipment can score well on one and less well on the other.",
        performedBy: "owner",
      },
    ],
    typicalValues: [
      {
        context: "Units",
        value: "BTU per watt-hour",
        note: "Divide by 3.412 to express it as a dimensionless ratio, which gives the cooling COP",
      },
      {
        context: "Nature of the figure",
        value: "Single operating point",
        note: "SEER averages across a season, EER does not",
      },
    ],
    mistakes: [
      "EER is not a worse version of SEER. It answers a different question, and both appear on a data sheet for that reason.",
      "An EER quoted without its test condition cannot be compared with another EER.",
    ],
    faqs: [
      {
        question: "What is the difference between EER and SEER?",
        answer:
          "EER is measured at one fixed condition, SEER averages across a representative cooling season. Equipment that modulates well can score highly on SEER while a system built for sustained heat scores well on EER.",
      },
      {
        question: "Is EER the same as cooling COP?",
        answer:
          "They express the same thing in different units. Dividing EER by 3.412 converts BTU per watt-hour into a dimensionless ratio, which is the cooling COP at that condition.",
      },
      {
        question: "What is EER2?",
        answer:
          "The single-point rating updated to the 2023 United States test conditions, including the higher external static pressure. Like SEER2, it reads lower than the figure it replaced.",
      },
    ],
    sourceIds: ["ahri-directory"],
  },
  {
    term: "COP",
    slug: "cop",
    question: "What is COP?",
    definition:
      "Coefficient of performance: heat delivered divided by electricity consumed at a specific operating condition. A COP of 3.5 means three and a half units of heat for each unit of electricity, and the figure falls as outdoor temperature drops.",
    category: "efficiency",
    aliases: ["coefficient of performance"],
    related: ["scop", "heat-pump", "eer"],
    seeAlso: { label: "The running-cost arithmetic", path: "/heat-pump-vs-furnace/" },
    shortAnswer:
      "COP is heat delivered divided by electricity consumed at one operating condition, as a plain ratio. A COP of 3.5 means three and a half units of heat for every unit of electricity used.",
    metaTitle: "COP: heat per unit of power",
    metaDescription:
      "What coefficient of performance means, why it exceeds one, how outdoor temperature and flow temperature move it, and how COP relates to SCOP and EER.",
    keywords: ["COP heat pump", "coefficient of performance", "what is a good COP", "COP vs SCOP"],
    facts: [
      { label: "Measures", value: "Heat out divided by electricity in" },
      { label: "Units", value: "None, it is a plain ratio" },
      { label: "Measured at", value: "One stated operating condition" },
      { label: "Falls as", value: "The gap between source and delivery temperature widens" },
    ],
    howItWorks:
      "Because a heat pump moves heat rather than generating it, the heat it delivers exceeds the electricity it consumes, and the ratio between the two is the COP. The work the compressor has to do depends on the temperature lift, so a COP quoted at 7 C outdoor air and 35 C flow will be higher than the same machine at minus 7 C outdoor air and 55 C flow.",
    whereYouMeetIt: [
      "On a heat pump data sheet, as a table of COP values at several outdoor and flow temperature combinations.",
      "In a design conversation, where lowering the flow temperature is justified by the COP it buys back.",
      "In monitoring data, where a measured in-situ COP is compared against the data sheet.",
    ],
    howToCheck: [
      {
        title: "Read the conditions beside the number",
        detail:
          "A COP is only meaningful with its outdoor temperature and its flow temperature stated. Two COPs at different conditions are not comparable.",
        performedBy: "owner",
      },
      {
        title: "Compare measured performance against the matching table entry",
        detail:
          "Monitoring gives an in-situ figure. Comparing it with the data sheet entry for the same conditions is what makes it diagnostic.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "Meaning of the number",
        value: "COP 3.0",
        note: "Three units of heat delivered for one unit of electricity consumed",
      },
      {
        context: "Direct electric heating for comparison",
        value: "COP 1.0",
        note: "One unit of heat per unit of electricity, the ceiling for resistance heating",
      },
      {
        context: "Relationship to EER",
        value: "EER divided by 3.412",
        note: "Converts the cooling rating into the same dimensionless form",
      },
    ],
    mistakes: [
      "A COP is not a fixed property of a machine. It is a reading at stated conditions, and it moves as those conditions move.",
      "A COP above one is not a violation of anything. The heat is moved from outside rather than created from the electricity.",
      "COP and SCOP are not interchangeable. One is a point, the other is a season.",
    ],
    faqs: [
      {
        question: "What is a good COP?",
        answer:
          "It depends entirely on the conditions quoted. A figure at mild outdoor temperature and low flow temperature will look strong and tell you little about performance on the coldest day, which is why data sheets publish a table.",
      },
      {
        question: "Why does COP fall in cold weather?",
        answer:
          "The compressor has to lift heat across a wider temperature gap, which takes more work per unit of heat moved. That is the same reason a lower flow temperature raises COP.",
      },
      {
        question: "How is COP different from SCOP?",
        answer:
          "COP is a single operating point. SCOP averages across a defined heating season and climate profile, which is what the European product label quotes.",
      },
    ],
    sourceIds: ["ec-ecodesign", "doe-heat-pumps"],
  },
  {
    term: "SCOP",
    slug: "scop",
    question: "What is SCOP?",
    definition:
      "Seasonal coefficient of performance, the European measure of heat-pump efficiency across a whole heating season and climate profile. It is the figure quoted on United Kingdom and European product labels and is more realistic than a single-point COP.",
    category: "efficiency",
    aliases: ["seasonal COP"],
    related: ["cop", "hspf", "air-to-water-heat-pump"],
    seeAlso: { label: "Comparing across procedures", path: "/seer2-explained/" },
    shortAnswer:
      "SCOP is the seasonal coefficient of performance: heat delivered across a whole heating season divided by the electricity used, measured against a defined European climate profile.",
    metaTitle: "SCOP: the European season rating",
    metaDescription:
      "What SCOP measures, how the climate profile and the flow temperature it is quoted at change the number, and why SCOP cannot be compared with HSPF2.",
    keywords: ["SCOP", "seasonal coefficient of performance", "heat pump SCOP", "SCOP vs COP"],
    facts: [
      { label: "Measures", value: "Whole-season heat output per unit of electricity" },
      { label: "Units", value: "None, it is a plain ratio" },
      { label: "Depends on", value: "Climate profile and the flow temperature quoted" },
      { label: "Appears on", value: "The European product energy label" },
    ],
    howItWorks:
      "The procedure runs the machine across the temperatures in a defined heating season, weights each by its share of that profile, and includes the electricity used by auxiliary heat and defrost. Because the outcome depends on the quoted climate profile and flow temperature, two SCOP figures are comparable only when both match.",
    whereYouMeetIt: [
      "On the energy label of any heat pump sold in the United Kingdom or the European Union.",
      "In a grant or incentive scheme, where a minimum SCOP is part of eligibility.",
      "In a comparison between models, where the flow temperature the SCOP was quoted at is the detail that decides whether it is a fair comparison.",
    ],
    howToCheck: [
      {
        title: "Read the flow temperature the SCOP was quoted at",
        detail:
          "The same machine publishes a higher SCOP at 35 C than at 55 C. A figure without that context is not comparable.",
        performedBy: "owner",
      },
      {
        title: "Check the climate profile used",
        detail:
          "Average, warmer, and colder profiles produce different numbers, and the label states which one applies.",
        performedBy: "owner",
      },
    ],
    typicalValues: [
      {
        context: "Quoted at low flow temperature",
        value: "Higher SCOP",
        note: "The 35 C figure, suited to underfloor heating",
      },
      {
        context: "Quoted at higher flow temperature",
        value: "Lower SCOP",
        note: "The 55 C figure, suited to radiator systems",
      },
      {
        context: "North American counterpart",
        value: "HSPF2",
        note: "Different test, different units, and not convertible",
      },
    ],
    mistakes: [
      "SCOP is not comparable with HSPF2. The seasons, the climate profiles, and the units all differ.",
      "A SCOP figure without its flow temperature and climate profile is a marketing number rather than a comparison.",
    ],
    faqs: [
      {
        question: "What is a good SCOP?",
        answer:
          "It depends on the flow temperature quoted. A figure at 55 C is a harder test than the same machine at 35 C, so compare like for like and match the figure to the flow temperature your emitters will actually need.",
      },
      {
        question: "Is SCOP what my heat pump will actually achieve?",
        answer:
          "It is a standardised comparison, not a prediction for your building. Installation quality, emitter sizing, controls, and how the system is run all move the figure you actually get.",
      },
      {
        question: "Can I compare SCOP with the HSPF2 on an American unit?",
        answer:
          "No. HSPF2 is measured in BTU per watt-hour against United States climate assumptions, while SCOP is a dimensionless ratio against European profiles.",
      },
    ],
    sourceIds: ["ec-ecodesign"],
  },
  {
    term: "Balance point",
    slug: "balance-point",
    question: "What is a heat pump balance point?",
    definition:
      "The outdoor temperature at which a heat pump's output exactly matches the building's heat loss. Below it, the system needs auxiliary heat or longer run times, so a complaint that appears during a cold snap can describe correct operation rather than a fault.",
    category: "efficiency",
    aliases: ["thermal balance point"],
    related: ["auxiliary-heat", "heat-pump"],
    shortAnswer:
      "The balance point is the outdoor temperature at which a heat pump's output exactly equals the building's heat loss. Below it, the system needs help; above it, it has capacity to spare.",
    metaTitle: "Balance point: where output meets loss",
    metaDescription:
      "What a heat pump balance point is, why output falls as heat loss rises, how the crossing temperature is found, and why complaints cluster below it.",
    keywords: ["balance point heat pump", "heat pump not keeping up", "thermal balance point", "heat pump cold weather"],
    facts: [
      { label: "Defines", value: "Where heat pump output equals building heat loss" },
      { label: "Expressed as", value: "An outdoor temperature" },
      { label: "Below it", value: "Auxiliary heat or longer run times are needed" },
      { label: "Moves with", value: "Building fabric, equipment selection, and set point" },
    ],
    howItWorks:
      "Two lines cross. A building loses more heat as it gets colder outside, while a heat pump delivers less. Plot both against outdoor temperature and the crossing point is the balance point. Above it the heat pump has spare capacity; below it there is a shortfall, and something has to make it up.",
    whereYouMeetIt: [
      "In a design calculation, where equipment is selected so the balance point sits at an acceptable temperature for the climate.",
      "In a cold snap complaint, where reduced comfort below the balance point is expected rather than faulty.",
      "In an auxiliary heat lockout setting, where the configured temperature should relate to the actual balance point.",
    ],
    howToCheck: [
      {
        title: "Note the outdoor temperature when comfort slips",
        detail:
          "A consistent temperature at which the house stops keeping up is an observation of the balance point, and it is exactly what a designer needs.",
        performedBy: "owner",
      },
      {
        title: "Compare the heat loss calculation with the capacity table",
        detail:
          "The manufacturer publishes output at several outdoor temperatures. Plotting that against the building heat loss gives the crossing point.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A balance point is not a fixed property of the equipment. It belongs to the pairing of that equipment with that building at that set point.",
      "Reaching the balance point is not a fault. It is the temperature the design accepted when the equipment was selected.",
    ],
    faqs: [
      {
        question: "Why does my heat pump keep up until a certain temperature and then stop?",
        answer:
          "That temperature is the balance point. Above it the equipment has spare capacity, below it the building loses more than the heat pump can deliver, and the difference has to come from auxiliary heat or from longer run times.",
      },
      {
        question: "Can the balance point be lowered?",
        answer:
          "Either by reducing the building's heat loss through insulation and air tightness, or by installing equipment with more output at low temperatures. Improving the fabric moves the whole loss line rather than just the crossing point.",
      },
      {
        question: "Should the auxiliary lockout be set at the balance point?",
        answer:
          "It is the sensible reference. A lockout set well above the balance point brings expensive backup heat in while the heat pump still had capacity to spare.",
      },
    ],
    sourceIds: ["doe-heat-pumps", "trane-mini-split-not-heating"],
    seeAlso: { label: "Mini-split not heating", path: "/mini-split-not-heating/" },
  },
  {
    term: "Inverter compressor",
    slug: "inverter-compressor",
    question: "What is an inverter compressor?",
    definition:
      "A compressor whose speed varies with demand instead of switching fully on and off. Inverter systems hold temperature more steadily and use less energy at part load, and they report a distinct family of drive and module fault codes.",
    category: "efficiency",
    aliases: ["variable speed compressor", "DC inverter"],
    related: ["inverter-module", "compressor", "short-cycling"],
    seeAlso: { label: "What inverter really means", path: "/inverter-technology-explained/" },
    shortAnswer:
      "An inverter compressor varies its speed to match demand instead of switching fully on and off. It holds room temperature more steadily and uses less energy at part load than a fixed-speed compressor.",
    metaTitle: "Inverter compressor: variable speed",
    metaDescription:
      "What an inverter compressor does, why part-load running is more efficient than cycling, how it changes what normal operation sounds like, and which codes it adds.",
    keywords: ["inverter compressor", "variable speed compressor", "DC inverter", "inverter vs fixed speed"],
    facts: [
      { label: "Speed", value: "Varies continuously with demand" },
      { label: "Driven by", value: "The inverter module" },
      { label: "Advantage", value: "Steadier temperature and better part-load efficiency" },
      { label: "Adds", value: "A family of drive and module fault codes" },
    ],
    howItWorks:
      "A fixed-speed compressor runs flat out or not at all, so it overshoots and then stops. An inverter drive varies the frequency supplied to the motor, letting the compressor settle at whatever output the room currently needs. Running continuously at low output means smaller temperature swings, fewer starts, and less energy for the same comfort, at the cost of more power electronics that can themselves report faults.",
    whereYouMeetIt: [
      "In a complaint that the unit never switches off, which is what continuous modulation looks like from the room.",
      "In a code table, where drive and module protection codes exist that a fixed-speed system does not have.",
      "In a sizing discussion, where a modulating system tolerates a degree of oversizing that a fixed-speed one does not.",
    ],
    howToCheck: [
      {
        title: "Listen for output changing rather than stopping",
        detail:
          "A rising and falling note from the outdoor unit is modulation. A hard stop and restart every few minutes is not what an inverter system is meant to do.",
        performedBy: "owner",
      },
      {
        title: "Read the code against the inverter section of the manual",
        detail:
          "Drive, module, and position sensing codes belong to the inverter stage rather than to the compressor mechanically.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "A unit that runs continuously is not necessarily faulty. Continuous low-output running is what an inverter system is designed to do.",
      "An inverter code is not automatically a compressor code. The drive electronics and the compressor are separate components with separate failures.",
    ],
    faqs: [
      {
        question: "Does an inverter system ever switch off completely?",
        answer:
          "It reduces output rather than stopping once the room is close to the set point, and manufacturers describe that behaviour directly. A unit that appears never to switch off is doing what it was designed to do.",
      },
      {
        question: "Why is an inverter system more efficient?",
        answer:
          "Starting a compressor costs a surge of energy, and running at full output when the room needs a quarter of it wastes the rest. Modulating to the actual demand avoids both, which is where the part-load saving comes from.",
      },
      {
        question: "Are inverter systems more expensive to repair?",
        answer:
          "They contain power electronics a fixed-speed system does not, so there are more components that can fail and boards are a significant part cost. Set against that, fewer starts reduce mechanical wear on the compressor.",
      },
    ],
    sourceIds: ["trane-mini-split-modulation", "mrcool-p1-guide"],
  },
] satisfies GlossaryTermInput[];
