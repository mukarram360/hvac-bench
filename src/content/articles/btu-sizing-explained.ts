import { publish } from "./publish";

/**
 * Everyone arrives at this page holding a square-footage chart. The job is to
 * show why the chart is the smallest input rather than the answer, without
 * pretending a web page can replace a load calculation. So it opens with the
 * unit confusion, lists what the chart leaves out, and then explains what
 * oversizing costs, which is the part nobody expects.
 */
export const btuSizingExplained = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "BTU sizing explained: why floor area is the weakest input",
  slug: "btu-sizing-explained",
  path: "/btu-sizing-explained/",
  description:
    "What a BTU rating means, what a load calculation adds that a room-size chart cannot, and why picking the next size up has a cost of its own.",
  articleType: "guide",
  equipmentType: "ductless-mini-split",
  problemType: "equipment-sizing",
  models: [
    "Residential room, zone, and whole-house heating and cooling equipment",
    "Sizing conclusions are drawn from a load calculation, not from this page",
  ],
  directAnswer:
    "Equipment is rated in BTU per hour, a rate of heat movement. The size you need comes from a heating and cooling load calculation for the actual building, because two rooms of identical floor area can differ by a factor of two in what they demand.",
  scopeNotice:
    "This explains what goes into a sizing decision and how to read the result. It is not a calculator and does not produce a number for a room. Final selection needs a recognised load method and the capacity table for the exact model at local design conditions.",
  layout: ["sections", "decisionTable", "figures"],
  symptoms: [
    "What a BTU is, and why equipment is rated per hour.",
    "The inputs a floor-area rule of thumb silently assumes.",
    "Why heating size and cooling size are calculated separately.",
  ],
  causes: [
    "Glass area, orientation, insulation, air leakage, and adjoining unconditioned space change the load without changing the floor area.",
    "Capacity that far exceeds the load shortens run times, which weakens moisture removal in cooling.",
  ],
  sections: [
    {
      title: "The unit trips people first",
      paragraphs: [
        "A BTU is a quantity of energy. A BTU per hour is a rate. Equipment is rated in the second, because what matters is whether it can move heat as fast as the building gains or loses it. In HVAC ratings, 12,000 BTU per hour equals one ton of capacity.",
        "The building has a rate too. Its load is how fast heat crosses the walls, windows, and roof, plus what people, appliances, sunlight, and outdoor air add. Sizing is the exercise of matching one rate to the other at the conditions that matter.",
      ],
    },
    {
      title: "What a square-footage chart is assuming",
      paragraphs: [
        "A chart that turns floor area into BTU per hour has to assume everything else. It assumes a climate, a ceiling height, a window area, a level of insulation and airtightness, an orientation, and that nothing unusual is happening in the room.",
        "Change any one and the answer moves. A west-facing room with a wall of glass and a room of the same size with one small north window do not have the same cooling load. A room over an unheated garage and a room between two heated rooms do not have the same heating load.",
        "The chart is still worth having. Use it to sanity-check a quotation that is wildly away from it, and to frame the questions you ask, rather than as the basis for an order.",
      ],
    },
    {
      title: "Bigger is not safer",
      paragraphs: [
        "Oversizing has a specific cost in cooling, and it is about moisture rather than temperature. A cooling coil removes humidity while air passes over it, and that takes sustained run time. Equipment far larger than the load satisfies the thermostat quickly and stops, leaving a room that is cool and damp.",
        "It also brings short cycling on fixed-capacity equipment, which is starting and stopping in quick succession. Inverter equipment tolerates oversizing better, because it can run below rated output, but each model has a documented minimum below which it still has to cycle.",
        "None of this argues for undersizing. An undersized system runs continuously and still misses the setpoint on the days it is needed most. The point is that the correct size is a target, not a floor to be exceeded for safety.",
      ],
    },
    {
      title: "Heating and cooling are two answers",
      paragraphs: [
        "Winter heat loss and summer heat gain are separate calculations with different inputs, so their results need not match. Heating load follows the temperature difference across the building fabric; cooling load adds solar gain, occupants, appliances, and moisture.",
        "Which one governs the equipment size depends on the climate and the building. A heat pump has to be checked against both, at local design temperatures, using the extended capacity table for the model rather than its nominal rating.",
      ],
    },
  ],
  decisionTable: {
    caption: "What each input changes, and where it comes from",
    columns: ["Input", "What it moves", "Where the figure comes from"],
    rows: [
      [
        "Design temperatures",
        "The temperature difference the equipment works across",
        "Published local design conditions for the site",
      ],
      [
        "Glazing area and orientation",
        "Cooling load, sharply, through solar gain",
        "Measured from the building, not estimated from its age",
      ],
      [
        "Insulation and air leakage",
        "Both loads, in the same direction",
        "Construction record, survey, or a blower-door result",
      ],
      [
        "Occupancy and appliances",
        "Cooling load, including the moisture share",
        "How the room is actually used, room by room",
      ],
      [
        "Adjoining unconditioned space",
        "Heating load through floors, party walls, and ceilings",
        "Plan of what sits above, below, and beside the room",
      ],
      [
        "Distribution losses",
        "What arrives in the room versus what the unit produces",
        "Duct design and location, where ducts exist at all",
      ],
    ],
  },
  figures: [
    {
      title: "From building to equipment, in order",
      description:
        "Each step depends on the one before it. Starting at the last step is what a floor-area rule of thumb does.",
      nodes: [
        { label: "Survey", detail: "Dimensions, construction, glazing, orientation, use" },
        { label: "Design conditions", detail: "Local winter and summer temperatures for the site" },
        { label: "Load calculation", detail: "Heating and cooling rates the building demands" },
        { label: "Capacity check", detail: "Model output at those conditions, not nominal rating" },
        { label: "Turndown check", detail: "Minimum output against the mild-weather load" },
      ],
    },
  ],
  faqs: [
    {
      question: "How many BTU do I need per square foot?",
      answer:
        "No single figure survives across climates and buildings, which is why load calculation methods exist. Floor area is one input among a dozen, and the others can move the answer further than it does.",
    },
    {
      question: "What happens if my mini-split is too big?",
      answer:
        "In cooling, the room reaches temperature before enough moisture has been removed, so it feels cool and clammy. Fixed-capacity equipment also starts and stops in short bursts. Inverter equipment copes better but still has a documented minimum output.",
    },
    {
      question: "Why is the heating size different from the cooling size?",
      answer:
        "They are separate calculations. Heating is driven by heat loss across the fabric; cooling adds solar gain, people, appliances, and humidity. Which one governs depends on the climate and the building.",
    },
    {
      question: "Is a 12,000 BTU unit the same as one ton?",
      answer:
        "Yes, as a nominal rate. One ton of refrigeration is defined as 12,000 BTU per hour. Actual output at your design conditions comes from the model's capacity table and can sit either side of the nominal figure.",
    },
  ],
  sourceIds: ["doe-hvac-sizing", "trane-mini-split-sizing", "ahri-directory"],
  relatedContent: [
    "/mini-split-short-cycling/",
    "/mini-split-not-cooling/",
    "/seer2-explained/",
    "/single-zone-vs-multi-zone-mini-split/",
  ],
  glossaryTerms: ["btu", "ton-of-refrigeration", "delta-t", "inverter-compressor"],
  keywords: [
    "mini split BTU sizing",
    "HVAC load calculation",
    "BTU per square foot",
    "oversized air conditioner humidity",
  ],
});
