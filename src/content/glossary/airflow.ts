import type { GlossaryTermInput } from "../schema";

/**
 * What moves the air, what restricts it, and what that costs.
 *
 * Airflow is where owner-checkable work and technician work meet, because a
 * filter is the one restriction anybody can look at and a duct system is one
 * nobody can judge without instruments. The entries keep that line visible.
 */
export const airflow = [
  {
    term: "Static pressure",
    slug: "static-pressure",
    question: "What is static pressure?",
    definition:
      "The resistance the duct system presents to the blower, measured in inches of water column or pascals. High static pressure reduces airflow, raises energy use, and can cause coil freezing even when the equipment itself is healthy.",
    category: "airflow",
    aliases: ["external static pressure", "ESP"],
    related: ["ductwork", "blower-motor", "frozen-coil"],
    seeAlso: { label: "What the pressure budget buys", path: "/ductless-vs-ducted-heat-pump/" },
    shortAnswer:
      "Static pressure is the resistance a duct system puts in front of the blower, measured in inches of water column or pascals. High readings mean the blower cannot move the air the equipment was rated for.",
    metaTitle: "Static pressure: what it measures",
    metaDescription:
      "What static pressure is, how external static pressure is measured across an air handler, why high readings cut capacity, and why SEER2 testing raised the test value.",
    keywords: [
      "static pressure hvac",
      "external static pressure",
      "high static pressure ductwork",
      "inches of water column",
    ],
    facts: [
      { label: "Measures", value: "Resistance the ducts present to the blower" },
      { label: "Units", value: "Inches of water column in the US, pascals in Europe" },
      { label: "Read with", value: "A manometer, across the air handler" },
      { label: "High readings mean", value: "Reduced airflow at the same fan setting" },
    ],
    howItWorks:
      "A blower is rated to deliver a certain airflow against a certain resistance. Undersized ducts, crushed flexible runs, restrictive filters, and closed registers all add resistance, and once the total exceeds what the blower was selected for, airflow falls. Less air across the coil means less heat carried away, which is why an airflow problem looks like a capacity problem.",
    whereYouMeetIt: [
      "In a capacity complaint on equipment that measures correctly on the refrigerant side.",
      "In coil icing, because resistance the blower cannot overcome is what took the airflow away.",
      "In efficiency testing, because the SEER2 procedure raised the external static pressure ducted systems are tested at.",
    ],
    howToCheck: [
      {
        title: "Open the registers and clear the returns",
        detail:
          "Closed supply registers and blocked return grilles both raise resistance, and both are reversible without tools.",
        performedBy: "owner",
      },
      {
        title: "Fit the filter the equipment was designed for",
        detail:
          "A higher MERV rating in the same slot adds resistance. Matching the filter to what the blower can handle is part of the airflow picture.",
        performedBy: "owner",
      },
      {
        title: "Measure across the air handler with a manometer",
        detail:
          "Probes either side of the cabinet give total external static pressure, which is compared with the rating for the blower in that equipment.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "SEER2 test condition for ducted systems",
        value: "0.5 in. w.c. external static",
        note: "Raised from the 0.1 in. w.c. used under the older SEER procedure",
      },
      {
        context: "Unit conversion",
        value: "1 in. w.c. is about 249 Pa",
        note: "US documentation uses inches of water column, European documentation uses pascals",
      },
    ],
    mistakes: [
      "Static pressure is not airflow. It is the resistance airflow is working against, and the two move in opposite directions.",
      "Closing registers in unused rooms does not redirect air efficiently. It raises resistance on the whole system and reduces total delivery.",
    ],
    faqs: [
      {
        question: "Why did SEER2 change the static pressure used in testing?",
        answer:
          "The older SEER test ran ducted systems against an external static pressure far below what a real duct system presents. SEER2 raised it to 0.5 in. w.c., which is why SEER2 numbers read lower than SEER for the same equipment.",
      },
      {
        question: "Can high static pressure damage the equipment?",
        answer:
          "It shortens blower life by making the motor work harder, and it reduces airflow across the coil, which can freeze the evaporator or push refrigerant pressures outside their intended range.",
      },
      {
        question: "Is a higher MERV filter always worse for static pressure?",
        answer:
          "A denser medium in the same size opening adds resistance. Larger filter area at the same rating offsets that, which is why filter grille size matters as much as the rating printed on the frame.",
      },
    ],
    sourceIds: ["ahri-directory"],
  },
  {
    term: "Ductwork",
    slug: "ductwork",
    question: "What is ductwork?",
    definition:
      "The supply and return duct network that carries air between the air handler and the rooms it serves. Undersized returns, crushed flexible duct, and leaking joints all reduce delivered capacity without producing an equipment fault code.",
    category: "airflow",
    aliases: ["ducts", "duct system"],
    related: ["static-pressure", "return-air", "air-handler"],
    seeAlso: { label: "Whether to keep using ducts", path: "/mini-split-vs-central-air/" },
    shortAnswer:
      "Ductwork is the network of supply and return ducts carrying air between the air handler and the rooms. It decides how much of the equipment's capacity actually reaches each room.",
    metaTitle: "Ductwork: what it decides",
    metaDescription:
      "What ductwork does, why leakage and undersizing cut delivered capacity without any fault code, and why the return side matters as much as the supply side.",
    keywords: ["ductwork", "duct system", "leaky ducts", "duct sizing"],
    facts: [
      { label: "Carries", value: "Supply air out, return air back" },
      { label: "Materials", value: "Rigid metal, duct board, flexible duct" },
      { label: "Common faults", value: "Leakage, crushing, undersizing, missing insulation" },
      { label: "Reports faults", value: "It does not, which is why it is measured instead" },
    ],
    howItWorks:
      "One blower pushes air through the supply branches and pulls it back through the returns, and every bend, reduction, and length of flexible duct adds resistance. Air also escapes through unsealed joints, and duct in an unconditioned loft or crawl space loses heat through its walls, so the air that reaches a register can be both less and less conditioned than what left the coil.",
    whereYouMeetIt: [
      "In a room that never reaches the set temperature while the equipment measures normally.",
      "In a static pressure reading, because the ducts are what that pressure is measuring.",
      "In an energy assessment, where duct leakage in an unconditioned space is treated as a direct loss.",
    ],
    howToCheck: [
      {
        title: "Look at any accessible flexible duct",
        detail:
          "Compressed, kinked, or sharply bent flexible duct restricts air noticeably, and an exposed loft run can be inspected without tools.",
        performedBy: "owner",
      },
      {
        title: "Feel for air at joints in an unconditioned space",
        detail:
          "Air escaping at a joint in a loft is air the room paid for. Tape that has aged and released is a recognised failure.",
        performedBy: "owner",
      },
      {
        title: "Measure airflow at the registers",
        detail:
          "A flow hood at each register shows how the total is distributed, which is what turns a comfort complaint into a measured design problem.",
        performedBy: "technician",
      },
    ],
    mistakes: [
      "Duct tape is not the product for sealing ducts. Mastic and foil tapes rated for the purpose are, and ordinary cloth tape releases as it ages.",
      "A duct problem produces no fault code. The equipment reports what it measures, and it does not measure the duct network.",
    ],
    faqs: [
      {
        question: "Why is one room always warmer than the rest?",
        answer:
          "One blower serves the whole network, so branch length, duct size, leakage, and the return path decide the share each room gets. Measuring airflow at the register is what distinguishes a distribution problem from an equipment one.",
      },
      {
        question: "Does duct leakage really matter?",
        answer:
          "Air lost in an unconditioned loft or crawl space is conditioned air the equipment paid to produce, and it also unbalances the pressure between supply and return. It is one of the losses that never shows up as a fault.",
      },
      {
        question: "Is flexible duct worse than rigid?",
        answer:
          "It is not worse when installed straight, supported, and at full stretch. It becomes worse when it sags, kinks, or is left compressed, because the inner liner ripples and adds resistance.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Return air",
    slug: "return-air",
    question: "What is return air?",
    definition:
      "Room air drawn back to the air handler to be filtered and conditioned again. Blocked returns, closed doors in single-return houses, and dirty filters all starve the system of return air and show up first as reduced capacity.",
    category: "airflow",
    aliases: ["return", "return duct"],
    related: ["air-filter", "delta-t", "ductwork"],
    seeAlso: { label: "Distribution and its losses", path: "/mini-split-vs-central-air/" },
    shortAnswer:
      "Return air is the room air drawn back to the air handler to be filtered and conditioned again. A system can only supply as much air as its returns let it draw.",
    metaTitle: "Return air: the half people forget",
    metaDescription:
      "What return air is, why supply and return have to balance, how closed doors starve a single-return house, and why the filter sits in the return path.",
    keywords: ["return air", "return duct", "blocked return vent", "why is my return vent loud"],
    facts: [
      { label: "Direction", value: "Room air back toward the air handler" },
      { label: "Holds", value: "The filter, in the grille or at the cabinet" },
      { label: "Must balance", value: "Whatever the supply side delivers" },
      { label: "Common restriction", value: "Furniture, closed doors, or a loaded filter" },
    ],
    howItWorks:
      "Air pushed into a room has to leave it, and the return path is how it gets back to the coil. In a house with one central return, closing bedroom doors cuts that path, pressurising the room and starving the system at the same time. Because the return also carries the filter, anything restricting it restricts the whole system rather than one branch.",
    whereYouMeetIt: [
      "In a house with a single central return, where closed doors change how the whole system behaves.",
      "In a delta T measurement, because the return air temperature is one of the two readings.",
      "In a noise complaint, where a whistling grille indicates too much air through too small an opening.",
    ],
    howToCheck: [
      {
        title: "Clear furniture and rugs away from return grilles",
        detail:
          "A sofa across a return grille restricts the whole system, not one room, and it is the easiest restriction to remove.",
        performedBy: "owner",
      },
      {
        title: "Try the system with interior doors open",
        detail:
          "If comfort improves noticeably with doors open, the return path is the constraint and undercut doors or transfer grilles are the fix.",
        performedBy: "owner",
      },
    ],
    mistakes: [
      "More supply registers do not help if the return cannot keep up. Supply and return have to balance.",
      "A return grille is not a decorative choice. Its free area determines how much air can pass without noise or resistance.",
    ],
    faqs: [
      {
        question: "Why does my return vent whistle?",
        answer:
          "Air moving too fast through too small a free area makes noise. It points at a return undersized for the airflow the blower is trying to move, or at something partially blocking it.",
      },
      {
        question: "Should I keep interior doors open?",
        answer:
          "In a house with one central return, yes, or provide another path such as undercut doors or transfer grilles. A closed door in that arrangement isolates the room from the return.",
      },
      {
        question: "Can I add a return?",
        answer:
          "Yes, and it is often the fix for a system that is short of return path. Sizing it means calculating the free area needed for the airflow, which is why it is designed rather than guessed.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Air filter",
    slug: "air-filter",
    question: "What does an HVAC air filter do?",
    definition:
      "The filter that protects the coil and blower from dust. In ductless systems it is a washable mesh screen behind the front panel; in ducted systems it is a replaceable panel filter. As it loads it restricts airflow across the coil, and that restriction is what connects filter condition to capacity, coil temperature, and icing.",
    category: "airflow",
    aliases: ["filter", "MERV filter"],
    related: ["merv-rating", "return-air", "frozen-coil"],
    shortAnswer:
      "An air filter protects the coil and blower from dust. Ductless units use a washable mesh screen behind the front panel; ducted systems use a replaceable panel filter in the return path.",
    metaTitle: "Air filter: the one owner check",
    metaDescription:
      "What an HVAC air filter does, how ductless mesh screens differ from ducted panel filters, why a loaded filter reduces capacity, and how often to check it.",
    keywords: ["hvac air filter", "mini split filter", "dirty filter symptoms", "how often to change filter"],
    facts: [
      { label: "Protects", value: "The coil and the blower, before the air" },
      { label: "Ductless type", value: "Washable mesh screen behind the front panel" },
      { label: "Ducted type", value: "Replaceable panel filter, sized by dimensions and MERV" },
      { label: "Owner serviceable", value: "Yes, on both types" },
    ],
    howItWorks:
      "Air passes through the filter before it reaches the coil, and dust that would otherwise settle on the fins is caught on the medium instead. A loading filter catches more but also passes less, and the airflow lost is airflow the coil needed to shed its heat, which is how a maintenance item becomes a capacity and icing question.",
    whereYouMeetIt: [
      "In routine maintenance, as the single check most manufacturers put in the owner manual.",
      "In an icing complaint, because the filter is the restriction an owner can inspect and correct.",
      "In a smell complaint, where the filter and the surfaces behind it are what get cleaned.",
    ],
    howToCheck: [
      {
        title: "Open the front panel and lift the screens out",
        detail:
          "On a wall-mounted head the panel hinges up and the screens slide free. Manufacturers publish the exact procedure for each model.",
        performedBy: "owner",
      },
      {
        title: "Wash, dry fully, and refit the right way round",
        detail:
          "Screens are rinsed in cool water and dried completely before refitting. A damp screen refitted into a warm unit encourages exactly the growth the cleaning was meant to remove.",
        performedBy: "owner",
      },
      {
        title: "Check the direction arrow on a ducted panel filter",
        detail:
          "The arrow points the way the air travels, toward the coil. Fitted backwards, the filter collapses and loads faster.",
        performedBy: "owner",
      },
    ],
    mistakes: [
      "A filter is there to protect the equipment first. Air quality filtration is a secondary benefit that depends on the rating fitted.",
      "Running without a filter is not a way to improve airflow. Dust reaches the coil directly and cleaning a fouled coil is a far larger job.",
      "A washable screen refitted while damp is worse than one refitted dry, because moisture in a warm unit encourages growth.",
    ],
    faqs: [
      {
        question: "How often should I clean a mini-split filter?",
        answer:
          "Manufacturer instructions specify a check every few weeks in heavy use, with the interval depending on the environment rather than the calendar. Pets, carpets, and building work all shorten it.",
      },
      {
        question: "Can a dirty filter freeze the coil?",
        answer:
          "Yes. Restricted airflow means less heat reaching the coil, the refrigerant inside boils at a lower temperature, and if the surface goes below freezing the condensate on it turns to ice.",
      },
      {
        question: "Do washable and disposable filters work the same?",
        answer:
          "They serve the same purpose but at different levels. A ductless mesh screen catches larger particles and is designed to be washed; a ducted panel filter is rated by MERV and is replaced rather than cleaned.",
      },
    ],
    sourceIds: ["trane-mini-split-filters", "fujitsu-filter-manual"],
    seeAlso: { label: "How to clean a mini-split filter", path: "/mini-split-filter-cleaning/" },
  },
  {
    term: "MERV rating",
    slug: "merv-rating",
    question: "What is a MERV rating?",
    definition:
      "A scale from 1 to 16 describing how effectively a filter captures particles, used mainly in North America. A higher rating traps more, but also adds resistance, so a filter must be matched to what the blower and duct system can handle.",
    category: "airflow",
    aliases: ["MERV"],
    related: ["air-filter", "static-pressure"],
    seeAlso: { label: "Cleaning a ductless filter", path: "/mini-split-filter-cleaning/" },
    shortAnswer:
      "MERV is a 1 to 16 scale rating how well a filter captures particles across defined size ranges. A higher number captures more but adds resistance the blower has to overcome.",
    metaTitle: "MERV rating: what the number means",
    metaDescription:
      "What a MERV rating measures, why higher is not automatically better, how it compares with the European ISO 16890 classes, and how to match a filter to a blower.",
    keywords: ["MERV rating", "MERV 13", "what MERV filter should I use", "MERV vs ISO 16890"],
    facts: [
      { label: "Scale", value: "1 to 16" },
      { label: "Measures", value: "Particle capture across defined size ranges" },
      { label: "Standard", value: "ASHRAE 52.2" },
      { label: "Trade-off", value: "Higher capture, higher resistance" },
    ],
    howItWorks:
      "A filter is tested against particles in three size bands and the minimum efficiency it achieves across them sets the rating. Because a denser medium catches more of the small particles, it also passes air less freely, so the same rating in a small filter slot adds far more resistance than in a large one. Increasing filter area is how higher ratings are fitted without starving the blower.",
    whereYouMeetIt: [
      "On the frame of any North American panel filter, alongside the nominal dimensions.",
      "In an airflow investigation, where a high rated filter in a small slot is the added resistance.",
      "In an air quality discussion, where MERV 13 is the level referenced for fine particles.",
    ],
    howToCheck: [
      {
        title: "Read the rating and the size off the old filter",
        detail:
          "Both are printed on the cardboard frame. Nominal size and actual size differ slightly, which is normal.",
        performedBy: "owner",
      },
      {
        title: "Check the equipment documentation before raising the rating",
        detail:
          "Manufacturers state the maximum resistance their blower is designed for, and a higher rating in the same slot can exceed it.",
        performedBy: "technician",
      },
    ],
    typicalValues: [
      {
        context: "Scale range",
        value: "MERV 1 to 16",
        note: "Ratings above 16 fall under HEPA classifications rather than MERV",
      },
      {
        context: "Standard behind the rating",
        value: "ASHRAE 52.2",
        note: "Defines the particle size bands and the test method",
      },
      {
        context: "European equivalent",
        value: "ISO 16890 classes",
        note: "Not directly convertible, so cross-market comparisons need care",
      },
    ],
    mistakes: [
      "A higher MERV is not automatically better. A filter the blower cannot pull air through reduces capacity and can freeze the coil.",
      "MERV does not convert cleanly to the European ISO 16890 classes, so a rating from one market is not a substitute for the other.",
    ],
    faqs: [
      {
        question: "What MERV rating should I use?",
        answer:
          "The highest the equipment documentation allows for the filter area available. Manufacturers state a resistance limit, and matching the filter to that rather than to the shelf label is what keeps airflow intact.",
      },
      {
        question: "Is MERV 13 worth fitting?",
        answer:
          "It captures a meaningful share of fine particles, which is why it is widely recommended for air quality. Fitting it needs enough filter area, otherwise the resistance it adds costs airflow.",
      },
      {
        question: "Do mini-splits use MERV filters?",
        answer:
          "Not as standard. Ductless indoor units use washable mesh screens rather than rated panel filters, and any additional filtration is a manufacturer accessory for that model.",
      },
    ],
    sourceIds: ["ashrae-terminology"],
  },
  {
    term: "Frozen coil",
    slug: "frozen-coil",
    question: "What is a frozen coil?",
    definition:
      "Ice forming on the indoor coil, which follows a drop in airflow or a low refrigerant charge. Running a frozen system risks liquid refrigerant reaching the compressor, so the standard response is to stop cooling and let it thaw before diagnosing.",
    category: "airflow",
    aliases: ["iced coil", "coil icing"],
    related: ["air-filter", "static-pressure", "refrigerant-charge"],
    shortAnswer:
      "A frozen coil is ice on the indoor coil, formed when its surface drops below freezing. Restricted airflow and low refrigerant charge are the two mechanisms that put it there.",
    metaTitle: "Frozen coil: why ice forms",
    metaDescription:
      "Why an indoor coil freezes, how restricted airflow and low charge each drive its surface below freezing, what to do first, and what running it frozen risks.",
    keywords: ["frozen evaporator coil", "ac coil frozen", "ice on indoor unit", "why is my ac freezing up"],
    facts: [
      { label: "What it is", value: "Ice on the indoor coil surface" },
      { label: "Two mechanisms", value: "Restricted airflow, or low refrigerant charge" },
      { label: "First action", value: "Stop cooling, run fan only, let it thaw" },
      { label: "Risk if ignored", value: "Liquid refrigerant returning to the compressor" },
    ],
    howItWorks:
      "The coil is designed to sit below room temperature but above freezing. When less heat reaches it, either because airflow dropped or because there is not enough refrigerant to absorb what arrives, the boiling temperature inside falls. Once the surface goes below freezing, the condensate that normally runs to the drain freezes on the fins instead, and the ice then blocks the remaining airflow, which makes it worse.",
    whereYouMeetIt: [
      "In a system that cooled well and then stopped, with visible frost on the indoor unit.",
      "In a water leak that appears after the system is switched off, as the ice thaws faster than the drain can carry it.",
      "In a diagnosis, where the coil has to be fully thawed before any measurement is meaningful.",
    ],
    howToCheck: [
      {
        title: "Switch cooling off and run the fan only",
        detail:
          "Fan-only operation thaws the coil faster than switching everything off, and it stops the system driving the surface colder.",
        performedBy: "owner",
      },
      {
        title: "Put a towel down before it melts",
        detail:
          "Ice thaws faster than the drain can carry it away, so water often escapes the pan during recovery.",
        performedBy: "owner",
      },
      {
        title: "Clean or replace the filter, then run again and watch",
        detail:
          "If icing returns with a clean filter and clear returns, airflow was not the whole story and the refrigerant side needs measuring.",
        performedBy: "owner",
      },
    ],
    mistakes: [
      "Chipping ice off the coil damages the fins and the tubing. It thaws on its own with the fan running.",
      "Running the system harder does not clear ice. Cooling has to stop for the coil to come back above freezing.",
      "Ice on the outdoor coil in heating is a different thing. That is what the defrost cycle exists to handle.",
    ],
    faqs: [
      {
        question: "How long does a frozen coil take to thaw?",
        answer:
          "Running the fan alone, for one to a few hours depending on how much ice formed and how warm the room is. Nothing measured before it is completely clear will be reliable.",
      },
      {
        question: "Can I just change the filter and carry on?",
        answer:
          "If a blocked filter caused it and airflow is fully restored, yes. If icing returns with a clean filter, clear returns, and open registers, the remaining explanations are on the refrigerant side and need a technician.",
      },
      {
        question: "Why does the floor get wet after the unit freezes?",
        answer:
          "Ice on the coil melts faster than the drain pan and line were sized to carry, so water overruns the pan. The leak is a consequence of the freeze rather than a separate fault.",
      },
    ],
    sourceIds: ["trane-mini-split-not-cooling", "trane-mini-split-leak"],
    seeAlso: { label: "Frozen indoor coil", path: "/mini-split-frozen-coil/" },
  },
] satisfies GlossaryTermInput[];
