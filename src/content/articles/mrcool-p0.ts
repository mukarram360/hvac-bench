import { publish } from "./publish";

/**
 * The reader arriving here has usually also seen P1 in search results. The
 * page earns its place by separating the two rather than repeating a generic
 * protection explanation.
 */
export const mrcoolP0 = publish({
  title: "MRCOOL P0 or PC00 error code: inverter module protection",
  slug: "p0-pc00-error-code",
  path: "/brands/mrcool/p0-pc00-error-code/",
  description:
    "What MRCOOL P0 and PC00 inverter module protection covers, how it differs from P1 voltage protection, and which observations are safe to make.",
  articleType: "error-code",
  brand: "mrcool",
  equipmentType: "ductless-mini-split",
  productFamily: "MRCOOL mini-splits covered by official P0/PC00 support",
  models: ["MRCOOL mini-splits displaying P0 or PC00 per official support"],
  errorCode: "P0 / PC00",
  problemType: "inverter-module-protection",
  directAnswer:
    "MRCOOL identifies P0 or PC00 as an inverter-module or compressor-protection condition associated with abnormal voltage or current, wiring, the inverter module, or the compressor.",
  scopeNotice:
    "P0 and PC00 are the same protection shown by different display generations, in the same way MRCOOL communication faults appear as EL01 or E1. Confirm the characters and the model against the official code table, and do not carry a P code from another brand into MRCOOL equipment, because the letter and number pairings are not an industry standard.",
  symptoms: [
    "The system reports P0 or PC00 and the compressor does not run normally or stops under protection.",
  ],
  causes: [
    "Unstable supply, damaged connections, an inverter-module fault, or a compressor fault can be involved.",
    "The displayed protection identifies the diagnostic area but does not identify a replacement part by itself.",
  ],
  diagnosticBranches: [
    {
      title: "Check which P code you actually have",
      observation:
        "Search results mix P0, PC00, P1, and PC-01 together, and the difference is a single character on a display that may be small or partly obscured.",
      action:
        "Photograph the display and read it carefully. P0 and PC00 concern the inverter module and the compressor. P1 and PC-01 concern the supply voltage. Acting on the wrong one wastes the visit.",
    },
    {
      title: "The protection followed severe weather or an outage",
      observation:
        "A storm, a power cut, a surge, or a period of unstable supply preceded the first appearance of the code.",
      action:
        "Write down what happened and when. Supply events are relevant to this protection, and a technician who knows one occurred will check for damage rather than assuming wear.",
    },
    {
      title: "Outdoor airflow is visibly obstructed",
      observation:
        "The outdoor unit is packed with leaves, snow drifted against it, or something has been stacked around it since the code appeared.",
      action:
        "With the system off, clear only loose material from around the unit. Do not remove the grille or any panel. This is worth doing on its own merits, but treat it as housekeeping rather than as a repair.",
    },
  ],
  comparisonTable: {
    caption: "P0 and P1 are neighbouring codes with different meanings",
    columns: ["Code", "What the equipment is protecting", "What is worth telling a technician"],
    rows: [
      [
        "P0 or PC00",
        "The inverter module and compressor against abnormal current conditions",
        "Whether the compressor ever starts, and how long it runs before stopping",
      ],
      [
        "P1 or PC-01",
        "The equipment against a supply voltage outside its acceptable range",
        "Whether anything else in the property shows a supply symptom at the same time",
      ],
    ],
  },
  sections: [
    {
      title: "Why this code cannot name the part",
      paragraphs: [
        "P0 and PC00 sit at the end of a chain that includes the supply arriving at the outdoor unit, the connections carrying it, the inverter module switching it, and the compressor drawing it. An abnormal current condition anywhere along that chain reaches the same protection, and the protection reports what it saw rather than where it started.",
        "This is why an estimate that names a compressor on the strength of the code alone deserves a question. The compressor is the most expensive candidate on the list and it is not the only one. Ask what measurement separated it from the module and the wiring, and expect a specific answer.",
      ],
    },
    {
      title: "The observations that are worth making",
      paragraphs: [
        "Almost everything in the P0 diagnostic path involves the outdoor electrical compartment, where capacitors and DC bus components hold energy after the supply is removed. There is no useful homeowner version of those checks, and improvising one is how people get hurt.",
        "What you can do is watch and record. Does the compressor start at all, or is the protection immediate? Does the outdoor fan turn? How long does operation last before the code appears? Did this begin after a storm? Those answers cost nothing, cannot hurt anyone, and materially shorten a diagnosis that would otherwise start from zero.",
        "One more thing is worth writing down: whether anything changed in the property before it started. New circuits, a car charger, solar, a generator, or work by an electrician are all relevant to a protection that responds to electrical conditions, and they are exactly the details people forget to mention because they seem unrelated to the air conditioning.",
      ],
    },
  ],
  decisionTable: {
    caption: "Observations worth making before the visit",
    columns: ["What to watch", "How to watch it safely", "Why it matters"],
    rows: [
      [
        "Whether the compressor starts at all",
        "Listen and feel for air movement at the outdoor unit from a normal standing distance",
        "An immediate protection and a delayed one point at different parts of the path",
      ],
      [
        "How long operation lasts",
        "Time it from the command to the moment the code appears",
        "Run time before a trip is the most specific evidence a homeowner can produce",
      ],
      [
        "Whether the outdoor fan turns",
        "Observe from outside the unit without opening or reaching into anything",
        "Separates a system that cannot start from one that starts and then stops",
      ],
    ],
  },
  safeChecks: [
    "Turn the unit off and check for visible outdoor airflow blockage without removing covers.",
    "Record when the code appears and whether it followed an outage or severe weather.",
  ],
  professionalEscalation: [
    "Live supply checks, inverter-module tests, compressor tests, and internal wiring inspection require qualified service.",
    "Do not handle capacitors, DC bus components, or compressor terminals.",
  ],
  serviceHandoff:
    "State whether the display reads P0 or PC00, whether the compressor starts at all before the protection operates, how long any operation lasts, whether the outdoor fan turns, and whether a storm or outage preceded the first occurrence.",
  resetGuidance:
    "A returning P0 or PC00 should remain off pending diagnosis instead of being repeatedly restarted.",
  faqs: [
    {
      question: "Is P0 telling me the compressor needs replacing?",
      answer:
        "It is not. P0 and PC00 report a protection triggered by abnormal current conditions, and the supply, the connections, the inverter module, and the compressor are all on that path. A compressor diagnosis needs measurement behind it, not just the code.",
    },
    {
      question: "What is the difference between P0 and PC00?",
      answer:
        "They are the same protection displayed by different generations of MRCOOL equipment, in the same way communication faults appear as either EL01 or E1. Match the characters and your model against the official code table.",
    },
    {
      question: "Can clearing leaves from the outdoor unit help?",
      answer:
        "Clearing loose debris with the system off is sensible maintenance and worth doing. Treat it as housekeeping rather than a repair, because a protection driven by an electrical condition will return regardless of how tidy the unit looks.",
    },
    {
      question: "Is it safe to keep the system running with P0?",
      answer:
        "No. The equipment stopped itself for a reason, and repeated restarts put the same abnormal conditions through the same components. Leave it off and arrange diagnosis rather than trying to get another cycle out of it.",
    },
  ],
  sourceIds: ["mrcool-p0-guide", "mrcool-code-table"],
  relatedContent: [
    "/brands/mrcool/",
    "/mini-split-not-cooling/",
    "/mini-split-outdoor-unit-not-running/",
  ],
  keywords: [
    "mrcool p0 error code",
    "mrcool pc00 error",
    "mrcool inverter module protection",
    "mrcool p0 vs p1",
    "mrcool compressor protection",
  ],
});
