import { publish } from "./publish";

/**
 * A definition page, so it is built like one: the answer, then the arithmetic,
 * then the comparison that people actually get wrong, then the worked example.
 * No diagnostic branches, no owner checks, no stop point. There is nothing on
 * this page to touch.
 */
export const seer2Explained = publish({
  title: "SEER2 explained: what the number measures",
  slug: "seer2-explained",
  path: "/seer2-explained/",
  description:
    "What SEER2 counts, why it replaced SEER, why it belongs to a matched pair rather than an outdoor unit, and how to read two ratings side by side.",
  articleType: "guide",
  equipmentType: "heat-pump",
  problemType: "efficiency-rating",
  models: [
    "AHRI-certified residential split air conditioners and heat pumps",
    "Ratings apply to a named indoor and outdoor combination, not to a series",
  ],
  directAnswer:
    "SEER2 is seasonal cooling output divided by the electricity used to produce it, in British thermal units per watt-hour, measured on a laboratory test procedure. A higher number means less electricity per unit of cooling under that test, for one certified equipment pairing.",
  scopeNotice:
    "SEER2 is a comparison tool, not a prediction. It is produced under a standard test procedure with prescribed conditions, so it holds a ranking between certified systems and says nothing directly about one building's load, tariff, installation quality, or bill.",
  layout: ["sections", "comparisonTable", "decisionTable"],
  symptoms: [
    "What the ratio is made of and which units it is expressed in.",
    "Why a SEER figure and a SEER2 figure are not interchangeable.",
    "Why the rating belongs to a pairing rather than to the outdoor unit alone.",
  ],
  causes: [
    "Two systems can share an outdoor unit and carry different ratings because the indoor unit differs.",
    "A range published for a product series is a span across capacities, not a rating for the one being bought.",
  ],
  sections: [
    {
      title: "The ratio, in plain terms",
      paragraphs: [
        "Add up the cooling a system delivers across a modelled season, in British thermal units. Add up the electricity it consumed doing so, in watt-hours. Divide the first by the second. That is SEER2, and it carries the units Btu per watt-hour even though the number is written bare.",
        "Seasonal is the word doing the work. The test procedure models a range of outdoor conditions and part-load operation rather than one steady worst case. That is why a variable-capacity system scores well on it: across the modelled season it runs gently rather than starting and stopping at full output.",
      ],
    },
    {
      title: "Why SEER became SEER2",
      paragraphs: [
        "The second-generation metrics came from a change to the test procedure, not a change to the equipment. The current procedure raises the external static pressure the equipment is tested against, which is closer to the resistance a real duct system presents.",
        "Because the test changed, the same physical unit certifies at a lower SEER2 than its old SEER. Placing a legacy SEER number beside a current SEER2 number and reading the difference as an efficiency gap compares two test procedures, not two machines.",
        "The same applies across the family. EER2, HSPF2, and SEER2 come from the current procedure; EER, HSPF, and SEER came from the previous one. Compare within a generation.",
      ],
    },
    {
      title: "The rating belongs to a pair",
      paragraphs: [
        "A split system is certified as a combination. The certificate names an outdoor model and the indoor model or air handler tested with it, and the rating is the property of that pairing. Swap the indoor unit and the certified numbers no longer describe what is installed.",
        "This is where quoted figures go wrong. A brochure range covers a series across capacities, and the top of that range belongs to one specific pairing, often the smallest capacity in the family. Ask for the certificate reference for the exact two model numbers on the quotation.",
      ],
    },
    {
      title: "Reading two numbers, worked through",
      paragraphs: [
        "Take a pairing certified at 18 SEER2 and another at 22 SEER2, both meeting the same calculated load. The ratio of the two is about 1.22, so the second is modelled to deliver the same seasonal cooling for roughly 18 per cent less electricity, under the test procedure's assumptions.",
        "That percentage is a modelled difference in cooling energy, not a difference in the bill. Cooling is one share of a household's electricity, the modelled season is not your season, and duct losses, installation quality, and how the thermostat is actually used all sit outside the test. Treat the figure as a ranking with a size, and stop there.",
      ],
    },
  ],
  comparisonTable: {
    caption: "Which metric answers which question",
    columns: ["Metric", "What it measures", "Use it for"],
    rows: [
      [
        "SEER2",
        "Seasonal cooling output per watt-hour, current test procedure",
        "Ranking certified cooling systems against each other",
      ],
      [
        "EER2",
        "Cooling efficiency at one stated rating condition",
        "Behaviour on a hot design day rather than across a season",
      ],
      [
        "HSPF2",
        "Seasonal heating output per watt-hour for a heat pump",
        "The heating side, which SEER2 says nothing about",
      ],
      [
        "SCOP",
        "Seasonal heating coefficient of performance, European procedure",
        "Reading a European energy label; not comparable to HSPF2",
      ],
      [
        "Btu per hour",
        "Rate of heat the equipment can move",
        "Meeting the calculated load, which efficiency does not address",
      ],
    ],
  },
  decisionTable: {
    caption: "Whether two ratings can be compared",
    columns: ["The two figures you have", "Comparable?", "What to do"],
    rows: [
      [
        "SEER2 for two certified pairings, same product class",
        "Yes",
        "Compare directly, then check capacity separately",
      ],
      [
        "A legacy SEER figure and a current SEER2 figure",
        "No",
        "Find a current certificate for both, or compare neither",
      ],
      [
        "Series maximum against a specific pairing",
        "No",
        "Get the certificate for the exact indoor and outdoor models",
      ],
      [
        "SEER2 against HSPF2",
        "No",
        "They answer cooling and heating; read both, separately",
      ],
      [
        "SEER2 against a European SCOP or energy label class",
        "No",
        "Different procedures and different regulatory frameworks",
      ],
    ],
  },
  faqs: [
    {
      question: "Does a higher SEER2 mean a lower electricity bill?",
      answer:
        "It means less electricity per unit of cooling under the test procedure. What lands on a bill also depends on the building's load, the weather, the tariff, how the system is run, and how well it was installed, none of which the rating measures.",
    },
    {
      question: "Can I compare a SEER rating with a SEER2 rating?",
      answer:
        "Not as like for like. The test procedure changed between them, so the difference between the two numbers includes the change in the test. Compare figures produced under the same metric.",
    },
    {
      question: "Is the outdoor unit's rating enough to go on?",
      answer:
        "No. Certification is for a matched combination of outdoor unit and indoor unit or air handler. The same outdoor model can appear on certificates with different ratings depending on what it was tested with.",
    },
    {
      question: "What does the 2 in SEER2 actually refer to?",
      answer:
        "The second-generation test procedure, which tests against a higher external static pressure than the previous one. The equipment did not change; the way its seasonal performance is measured did.",
    },
    {
      question: "Which matters more, SEER2 or capacity?",
      answer:
        "They answer different questions and both have to be right. Capacity decides whether the system can meet the load at design conditions; SEER2 ranks how much electricity it uses doing so. An efficient system of the wrong size still fails.",
    },
  ],
  sourceIds: ["doe-seer2", "ahri-directory", "doe-hvac-sizing"],
  relatedContent: [
    "/btu-sizing-explained/",
    "/inverter-technology-explained/",
    "/mini-split-vs-central-air/",
    "/how-to-read-hvac-data-plate/",
    "/daikin-vs-mitsubishi-mini-splits/",
  ],
  glossaryTerms: ["seer", "eer", "hspf", "scop"],
  keywords: [
    "SEER2 explained",
    "SEER vs SEER2",
    "what is SEER2",
    "HVAC efficiency rating",
    "AHRI certified rating",
  ],
});
