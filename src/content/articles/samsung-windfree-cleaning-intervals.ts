import { publish } from "./publish";

/**
 * Three surfaces, three intervals, and one of them can cut you. Owners clean
 * the dust filter and stop, because that is the only part any general advice
 * mentions. The page is organised by interval rather than by component so the
 * reader leaves with a schedule instead of a list of parts.
 */
export const samsungWindfreeCleaningIntervals = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Samsung WindFree: three cleaning intervals on one indoor unit",
  slug: "windfree-cleaning-intervals",
  path: "/brands/samsung/windfree-cleaning-intervals/",
  description:
    "The dust filter, the PM 1.0 filter, and the WindFree panel each have their own documented interval, and one of the three has a sharp edge and a 12 hour dry.",
  articleType: "maintenance",
  brand: "samsung",
  equipmentType: "ductless-mini-split",
  productFamily: "WindFree 3.0 AR C indoor units",
  models: ["WindFree 3.0 AR C indoor units covered by the cited service manual"],
  problemType: "filter-maintenance",
  symptomFamily: "maintenance",
  directAnswer:
    "Three different surfaces, three different schedules. Samsung documents the air filter every two weeks or when the reminder appears, the PM 1.0 filter every three months, and the WindFree panel at least once a month.",
  scopeNotice:
    "Intervals and cautions here come from Samsung literature for WindFree indoor units carrying a PM 1.0 filter and a WindFree panel. Not every Samsung indoor unit has all three surfaces, and a model without the PM 1.0 filter has nothing to clean on the three-month schedule, so check what your own unit is fitted with before working to this list.",
  layout: ["steps", "decisionTable", "sections", "serviceHandoff"],
  symptoms: [
    "The filter reminder keeps returning even though the dust filter was washed recently.",
    "Airflow through the WindFree panel looks weaker than it did and the filter behind it is clean.",
    "The unit has been in service for a season and nobody knows what else was supposed to be cleaned.",
  ],
  causes: [
    "The air filter, the PM 1.0 filter, and the WindFree panel are separate surfaces with separate documented intervals.",
    "Cleaning one of them does not clear the reminder for another, and the reminder is reset by hand after the filter is refitted.",
  ],
  steps: [
    {
      name: "Isolate the unit before anything comes out",
      text: "Samsung says to turn the air conditioner off and disconnect the power supply before cleaning, and repeats that instruction specifically for the PM 1.0 filter. Do that first, so the same rule applies to whichever surface you reach for.",
    },
    {
      name: "Slide the air filter out and clean it",
      text: "Take the filter off the unit, lift dust with a soft brush or a vacuum cleaner, then soak it in water with a mild detergent for thirty minutes. Rinse it and let it air dry in a well ventilated place out of direct sunlight before it goes back.",
    },
    {
      name: "Reset the filter reminder after refitting",
      text: "Samsung ends the filter procedure with a reset step, selected from the unit while it is running. Skip it and the reminder returns on schedule regardless of what you have just done, which is what makes owners think the filter is dirtying in days.",
    },
    {
      name: "Clean the PM 1.0 filter every three months",
      text: "This is the separate quarterly job. Samsung warns that the inside surface of the PM 1.0 filter is sharp and to be careful not to cut your hand, and that the filter must not be disassembled while it is being cleaned.",
    },
    {
      name: "Give the PM 1.0 filter the full drying time",
      text: "If it is heavily soiled, immerse it for thirty minutes in water with a neutral detergent dissolved in it, then rinse until it is clean. Dry it completely by leaning it vertically against a wall, in the shade and away from direct sunlight, for twelve hours before refitting.",
    },
    {
      name: "Clean the WindFree panel monthly and refit it properly",
      text: "Pull the airflow blade open, release the panel from both sides, lift dust with a soft brush or vacuum, then hang it in the grooves at the bottom left and right and align the projections at the top, middle, and bottom. Press the four places along the top and the three along the bottom so no gap is left.",
    },
    {
      name: "Wipe the sensor openings, do not dust them",
      text: "Samsung's caution is to keep dust out of the sensor openings, and to wipe the sensors with a cotton swab after opening the indoor unit cover and fixing the support. A vacuum nozzle waved near an opening does the opposite of what the caution asks.",
    },
  ],
  decisionTable: {
    caption: "The documented schedule for a WindFree indoor unit",
    columns: ["Surface", "Interval", "The instruction people miss"],
    rows: [
      [
        "Air filter",
        "Every two weeks, or when the reminder appears",
        "Reset the reminder from the unit after refitting",
      ],
      [
        "PM 1.0 filter",
        "Every three months",
        "Dry it vertically in the shade for twelve hours before it goes back",
      ],
      [
        "WindFree panel",
        "At least once a month",
        "Open the airflow blade before refitting or the blade can be obstructed",
      ],
      [
        "Sensor openings",
        "When the cover is open for other work",
        "Wipe with a cotton swab and keep dust out of the openings",
      ],
    ],
  },
  sections: [
    {
      title: "Why the three-month filter is the one that gets forgotten",
      paragraphs: [
        "The air filter announces itself. A reminder appears on the display on a two-week rhythm, and the filter is the first thing behind the cover. The PM 1.0 filter has none of that: no reminder tied to it in the cleaning procedure, an interval four times longer, and a position that means nobody meets it by accident.",
        "That is worth putting in a calendar rather than trusting to memory. Four cleanings a year, on a fixed date, is a lower-effort arrangement than trying to remember which quarter the last one fell in, and it sidesteps the fact that the equipment will not prompt you.",
      ],
    },
    {
      title: "The two cautions that are specific to this filter",
      paragraphs: [
        "Samsung gives the PM 1.0 filter two warnings the air filter does not carry. The first is that the inside surface is sharp, with an explicit instruction to be careful not to cut your hand. Handle it by its frame, and do not run a hand across the inner face to check whether it is clean.",
        "The second is that it must not be disassembled during cleaning. Whatever is inside the assembly is meant to stay there, so the cleaning method is soaking, rinsing, and drying the whole thing rather than opening it up to reach the interior.",
        "The twelve-hour vertical dry belongs in the same category. It is longer than any drying instruction on the air filter and it specifies the orientation, which is a strong hint that water left in the assembly is the failure mode being guarded against.",
      ],
    },
    {
      title: "Refitting the panel is a documented sequence, not a push",
      paragraphs: [
        "The WindFree panel goes back in a stated order. Hang it in the grooves at the bottom left and right first, align the projections with the grooves at top, middle, and bottom, then press home at four points along the top and three along the bottom until no gap remains. Samsung adds that the airflow blade has to be open when the panel is attached, because a panel fitted over a closed blade can obstruct it from opening properly afterwards.",
        "A panel that is close but not seated is the quiet version of this going wrong. Air takes the gap rather than the perforations, the WindFree effect the panel exists to produce is diluted, and nothing on the display says so.",
      ],
    },
  ],
  safeChecks: [
    "Switch off and disconnect the power supply before removing any filter or panel.",
    "Handle the PM 1.0 filter by its frame, since Samsung warns the inside surface is sharp.",
    "Confirm every surface is completely dry before it is refitted, including the full twelve hours for the PM 1.0 filter.",
  ],
  professionalEscalation: [
    "Anything behind the electrical cover, including the sensors' wiring and the board, is technician work rather than owner maintenance.",
    "Airflow that stays weak after all three surfaces are clean and correctly refitted is a diagnosis rather than a cleaning problem.",
  ],
  serviceHandoff:
    "If output is still poor after the schedule has been followed, tell the technician which surfaces were cleaned and when, whether the reminder was reset, and whether the WindFree panel was refitted with the airflow blade open. That rules the cleaning out as a cause instead of leaving it as a suspicion.",
  faqs: [
    {
      question: "Does washing the filter clear the reminder?",
      answer:
        "No. Samsung lists the reset as its own step after the filter is reinstalled, chosen from the unit while it is running. Without it the reminder returns on its normal schedule whatever state the filter is in.",
    },
    {
      question: "How long does the PM 1.0 filter take to dry?",
      answer:
        "Samsung specifies drying it completely by leaning it vertically against a wall in the shade, away from direct sunlight, for twelve hours. Plan the job for a day when the unit can be out of use for that long.",
    },
    {
      question: "Can I take the PM 1.0 filter apart to clean inside it?",
      answer:
        "No. The instruction is explicit that the filter must not be disassembled when it is being cleaned. Soak, rinse, and dry the assembly whole.",
    },
    {
      question: "What happens if the WindFree panel is not clipped in fully?",
      answer:
        "Air escapes through the gap instead of passing through the panel, so the still-air effect the panel produces is reduced. Samsung's own caution covers the related case: fitting the panel without the airflow blade open can leave the blade obstructed.",
    },
  ],
  sourceIds: ["samsung-windfree-c101", "samsung-filter-cleaning"],
  relatedContent: [
    "/brands/samsung/",
    "/brands/samsung/windfree-c101-c102-error/",
    "/mini-split-filter-cleaning/",
    "/mini-split-smells-musty/",
  ],
  glossaryTerms: ["air-filter", "merv-rating", "evaporator-coil"],
  keywords: [
    "samsung windfree filter cleaning",
    "samsung pm 1.0 filter clean",
    "samsung filter reset windfree",
    "windfree panel removal cleaning",
    "samsung air conditioner cleaning schedule",
  ],
});
