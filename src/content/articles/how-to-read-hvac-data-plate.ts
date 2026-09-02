import { publish } from "./publish";

/**
 * Field-by-field reference rather than a narrative. The reader is standing at
 * a unit with a label in front of them and wants to know what each line is
 * for. So the decision table carries the weight, the prose is short, and the
 * one thing worth arguing about, nameplate capacity being read as a sizing
 * answer, gets its own section.
 */
export const howToReadHvacDataPlate = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "How to read an HVAC data plate, field by field",
  slug: "how-to-read-hvac-data-plate",
  path: "/how-to-read-hvac-data-plate/",
  description:
    "What each line on the nameplate is for, which fields matter for parts, service, and safety, and why the capacity printed there is not a sizing answer.",
  articleType: "how-to",
  equipmentType: "heat-pump",
  problemType: "data-plate-reading",
  models: [
    "Outdoor units, indoor units, and air handlers with an externally visible plate",
    "Fields present vary by equipment class and region",
  ],
  directAnswer:
    "The data plate ties the physical unit to its manuals, parts, ratings, and safety requirements. Read it as identity plus limits: model and serial identify it, and the electrical, refrigerant, and pressure figures state what it was built to work within.",
  scopeNotice:
    "Which fields appear differs by equipment class and by region, and a split system has at least two plates that do not carry the same information. Read only a plate on an exposed surface; anything behind a screwed electrical cover belongs to a technician.",
  layout: ["decisionTable", "steps", "sections"],
  symptoms: [
    "A technician, parts supplier, or insurer has asked for information from the plate.",
    "You need the refrigerant type or the electrical supply for the installed unit.",
    "A quotation refers to a capacity and you want to see what the equipment says.",
  ],
  causes: [
    "Model and serial together identify the production run a parts list is written against.",
    "Electrical and pressure figures are design limits, not performance the unit will produce.",
  ],
  decisionTable: {
    caption: "What each field is actually for",
    columns: ["Field", "What it tells you", "Who uses it"],
    rows: [
      [
        "Model number",
        "The product, including capacity, voltage, and revision suffixes",
        "Manuals, parts, code tables, ratings",
      ],
      [
        "Serial number",
        "The individual unit and its production run",
        "Warranty, service bulletins, run-specific parts",
      ],
      [
        "Voltage, phase, frequency",
        "The supply the unit was built for",
        "Electrical work and fault diagnosis",
      ],
      [
        "Minimum circuit ampacity",
        "The conductor size the circuit has to support",
        "Electrician sizing the supply",
      ],
      [
        "Maximum overcurrent protection",
        "The largest breaker or fuse permitted",
        "Electrician selecting protection",
      ],
      [
        "Refrigerant designation",
        "Which fluid the sealed circuit holds",
        "Any service on the circuit, and regulatory duties",
      ],
      [
        "Factory charge",
        "What the unit left the plant holding",
        "Technician calculating the installed charge",
      ],
      [
        "Design pressures",
        "High and low side limits the circuit is rated to",
        "Technician working on the circuit",
      ],
      [
        "Certification marks",
        "Which safety approvals the unit carries",
        "Inspection, insurance, and compliance",
      ],
    ],
  },
  steps: [
    {
      name: "Find the exposed plate",
      text: "On an outdoor unit, inspect the outer faces of the cabinet and the area near the pipe connections. On an indoor unit, look behind the hinged panel opened for filter access. Neither location needs a tool.",
    },
    {
      name: "Photograph it whole",
      text: "Take one frame containing every line, straight on rather than at an angle, with enough light to read the small print. Add a second close-up of the model and serial lines if the first is not crisp.",
    },
    {
      name: "Transcribe model and serial exactly",
      text: "Copy every character including hyphens and trailing letters. A suffix that looks decorative can be the difference between two revisions with different boards.",
    },
    {
      name: "Note the electrical trio",
      text: "Record voltage and phase, minimum circuit ampacity, and maximum overcurrent protection together. These three are what an electrician needs and what a mismatched supply shows up against.",
    },
    {
      name: "Record refrigerant and charge",
      text: "Note the refrigerant designation and the factory charge. Both are needed before any service on the circuit, and the designation carries regulatory consequences in both the United States and the United Kingdom.",
    },
    {
      name: "Do the same at the other unit",
      text: "Repeat at the second half of the system. Indoor and outdoor plates carry different fields, and a split system is not identified by either one alone.",
    },
  ],
  sections: [
    {
      title: "Nameplate capacity is not a load calculation",
      paragraphs: [
        "Where a capacity appears on a plate, it is a rating at a stated test condition. It says what the equipment can move under those conditions, not what your building needs, and not what the unit will deliver on a cold January morning.",
        "Nominal and rated capacity describe different things. Nominal capacity is a family designation, such as 12 in a model number for 12,000 BTU per hour. Rated capacity is measured at a stated condition. Neither replaces a load calculation or the extended-capacity output at the design temperature.",
      ],
    },
    {
      title: "Limits, not performance",
      paragraphs: [
        "Minimum circuit ampacity, maximum overcurrent protection, and design pressures are all boundaries. They describe what the unit was built to tolerate, and they exist so that supply and protection are chosen correctly.",
        "Reading a maximum overcurrent figure as a recommended breaker size, or a design pressure as a normal operating pressure, are two ways the same mistake gets made. A limit tells you where the equipment stops being within specification, and nothing about where it normally sits.",
      ],
    },
    {
      title: "When the plate is unreadable",
      paragraphs: [
        "Sun and weather fade outdoor plates, and a decade of that can leave a label that photographs as a blank. Do not go looking for a second plate inside the cabinet.",
        "The same numbers exist elsewhere: the installation paperwork, the commissioning record, the warranty registration, and the installer's own records. Any of those is a safer route than a screwdriver.",
      ],
    },
  ],
  safeChecks: [
    "Read only a plate on an exposed surface or behind the owner-openable indoor panel.",
    "Photograph the whole plate rather than transcribing from memory, and keep the image with your records.",
    "Record both the indoor and outdoor plates, because they carry different fields.",
  ],
  professionalEscalation: [
    "Stop at any label behind a screwed or clipped electrical cover.",
    "Ask an electrician to confirm the installed supply against the ampacity and overcurrent figures rather than comparing them yourself.",
    "Use the installation paperwork if a plate is unreadable, rather than opening the cabinet.",
  ],
  serviceHandoff:
    "Send photographs of both plates before the visit, along with the installation date and the paperwork if you have it. Refrigerant type, factory charge, and electrical figures decide what a technician brings with them.",
  faqs: [
    {
      question: "Where is the data plate on an outdoor unit?",
      answer:
        "On an outer face of the cabinet, on a side panel near the pipe and cable connections. It is readable from outside, so no cover needs to be removed to photograph it.",
    },
    {
      question: "What does MCA mean on a nameplate?",
      answer:
        "Minimum circuit ampacity: the current-carrying capability the supply conductors have to have for this unit. It sits alongside the maximum overcurrent protection figure, which caps the breaker or fuse size.",
    },
    {
      question: "Does the plate tell me what size unit I need?",
      answer:
        "No. It states what this unit is rated to move at a test condition. Whether that suits a building comes from a load calculation and from the model's capacity at your local design temperatures.",
    },
    {
      question: "Why do the indoor and outdoor plates say different things?",
      answer:
        "They are separate products with separate requirements. The outdoor plate carries refrigerant, charge, and the heavier electrical figures; the indoor plate identifies the head and its own supply and parts.",
    },
  ],
  sourceIds: ["ahri-directory", "epa-section-608", "doe-seer2"],
  relatedContent: [
    "/how-to-find-mini-split-model-number/",
    "/hvac-refrigerants-explained/",
    "/btu-sizing-explained/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  glossaryTerms: ["data-plate", "btu", "refrigerant"],
  keywords: [
    "read HVAC data plate",
    "air conditioner nameplate",
    "what does MCA mean HVAC",
    "find refrigerant type on unit",
  ],
});
