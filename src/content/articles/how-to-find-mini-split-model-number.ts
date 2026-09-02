import { publish } from "./publish";

/**
 * Written as a collection exercise rather than a lookup. A ductless system has
 * three identities, they live in three places, and getting one of them is what
 * makes people order the wrong part. The procedure therefore goes label by
 * label, and the page ends on what a photograph must contain, because that is
 * what the reader is going to send to somebody.
 */
export const howToFindMiniSplitModelNumber = publish({
  title: "How to find every mini-split model number",
  slug: "how-to-find-mini-split-model-number",
  path: "/how-to-find-mini-split-model-number/",
  description:
    "Where the indoor, outdoor, and controller labels sit, what the strings mean, which digits matter for parts, and which covers must stay on while you look.",
  articleType: "how-to",
  equipmentType: "controls-thermostats",
  problemType: "model-identification",
  models: [
    "Wall-mounted, floor-standing, cassette, and concealed ductless indoor units",
    "Label positions vary by cabinet and series; the manual for your unit is definitive",
  ],
  directAnswer:
    "Record three numbers, not one: the indoor unit model, the outdoor unit model, and the controller model or part number. Manuals, spare parts, capacity ratings, and fault-code tables can each depend on a different one of them.",
  scopeNotice:
    "Label positions differ by cabinet style and product family. Every location described here is reachable without tools or with the owner-openable front panel that the operation manual already asks you to open for filter cleaning. Nothing behind a screwed electrical cover is in scope.",
  layout: ["steps", "sections", "decisionTable"],
  symptoms: [
    "A parts supplier, manual search, or fault-code lookup has asked for a model number.",
    "You have one number and it is not producing the right document.",
    "A quotation or warranty claim needs the system identified as a pair.",
  ],
  causes: [
    "Indoor and outdoor units are separate products with separate model numbers and separate manuals.",
    "Handsets are matched to receiver protocols, so an indoor model alone does not identify the right replacement.",
  ],
  steps: [
    {
      name: "Start at the indoor unit",
      text: "Lift the hinged front panel the way you would to reach the filters. On the ductless equipment cited here the indoor label sits on the right-hand side of the chassis behind that panel, or on the underside of the cabinet near the outlet. Read it with a torch rather than by feel.",
    },
    {
      name: "Photograph the whole indoor label",
      text: "Capture the model line and the serial line in one frame, plus the electrical rating printed under them. Serial numbers separate production runs within one model, and a parts list can differ between them.",
    },
    {
      name: "Go to the outdoor unit",
      text: "The outdoor data plate is on the exterior of the cabinet, on a side panel or beside the pipe connections. It carries the model, serial, supply voltage, refrigerant designation, and factory charge. No panel has to come off to read it.",
    },
    {
      name: "Turn over the controller",
      text: "A handset carries its model or part number on the back of the case or inside the battery compartment, on the moulding rather than on a sticker. A wall controller carries it on the rear of the faceplate, which is a technician's job to remove, so read what is printed on the front instead.",
    },
    {
      name: "Write the pair down together",
      text: "Keep indoor, outdoor, and controller numbers in one place with the installation date. Fault codes are resolved against the pair, and a spare part ordered against one half of a system is the standard way to receive the wrong component.",
    },
  ],
  sections: [
    {
      title: "What the string is telling you",
      paragraphs: [
        "A ductless model number is built from segments. One group identifies the product family, another encodes nominal capacity, and trailing letters cover voltage, revision, refrigerant, or region. Two units that look identical on a shelf can differ in the last two characters and take different boards.",
        "The capacity digits are the segment a reader can decode unaided: 09, 12, 18, and 24 correspond to nominal thousands of BTU per hour. The rest is manufacturer-specific and should be transcribed exactly rather than interpreted.",
        "Copy every character, including hyphens and trailing letters. A model search that returns nothing is more often a dropped suffix than a missing document.",
      ],
    },
    {
      title: "Which number answers which question",
      paragraphs: [
        "Fault codes belong to the indoor unit's control board in some ranges and to the outdoor unit in others, and the same displayed characters can mean different things across families. Having both numbers is what lets you confirm which code table applies.",
        "Certified capacity and efficiency belong to the pairing. A rating quoted for the outdoor model alone is a series figure, and the certificate names both halves.",
        "Replacement handsets are matched to the receiver, so the indoor model and the original controller part number are both needed. A remote that looks the same and sends a different protocol will light up and do nothing.",
      ],
    },
    {
      title: "What not to open",
      paragraphs: [
        "Electrical nameplates behind screwed covers, terminal-block labels, and anything requiring a tool to reach belong to a technician. Nothing on this list requires them.",
        "If a label has faded past reading, do not try to reach a second one inside the cabinet. The installation paperwork, the original quotation, the warranty registration, and the installer's records all carry the same numbers.",
      ],
    },
  ],
  decisionTable: {
    caption: "Where each label lives and what it settles",
    columns: ["Label", "Where to look", "What it is needed for"],
    rows: [
      [
        "Indoor unit",
        "Behind the hinged front panel, side of the chassis or under the cabinet",
        "Indoor parts, filter type, indoor fault-code table",
      ],
      [
        "Outdoor data plate",
        "Outside face of the cabinet, often near the pipe connections",
        "Refrigerant, factory charge, electrical supply, outdoor parts",
      ],
      [
        "Handset",
        "Back of the case or inside the battery compartment",
        "Ordering a compatible replacement controller",
      ],
      [
        "Wall controller",
        "Printed on the front face; the rear is a technician's access",
        "Confirming controller family before replacement",
      ],
      [
        "Installation paperwork",
        "Quotation, commissioning sheet, warranty registration",
        "Recovering numbers from an unreadable or unreachable label",
      ],
    ],
  },
  safeChecks: [
    "Open only the hinged front panel that the operation manual already asks you to open for filter access.",
    "Use a torch and a camera rather than pulling at a label edge, which destroys the print you need.",
    "Leave the system switched off at the controller while you photograph the indoor label.",
  ],
  professionalEscalation: [
    "Stop at any cover held by screws, clips, or fasteners, and at anything marked as an electrical enclosure.",
    "Ask the installer or the manufacturer's support line if every label is unreadable rather than searching inside the cabinet.",
  ],
  serviceHandoff:
    "Send the technician one message containing both model photographs, the controller number, and the installation date. It removes the first ten minutes of nearly every service call and lets parts be checked before anyone travels.",
  faqs: [
    {
      question: "Is the model number the same as the serial number?",
      answer:
        "No. The model identifies the product, and the serial identifies the individual unit and its production run. Parts lists and service bulletins can differ between serial ranges within one model, so record both.",
    },
    {
      question: "Do I really need the outdoor unit number as well?",
      answer:
        "Yes for anything to do with refrigerant, electrical supply, capacity, or certified efficiency, and often for fault codes. The two halves are separate products and the system is only identified by both.",
    },
    {
      question: "What do the numbers in the middle mean?",
      answer:
        "In most ductless families the numeric group is nominal capacity in thousands of BTU per hour, so 12 reads as 12,000. The surrounding letters cover family, voltage, revision, and region and are manufacturer-specific.",
    },
    {
      question: "My label is unreadable. What now?",
      answer:
        "Use the paperwork rather than the cabinet: the original quotation, the commissioning sheet, and the warranty registration all carry the model numbers. The installer will hold them too.",
    },
  ],
  sourceIds: ["fujitsu-product-library", "daikin-ductless-lineup", "mrcool-product-catalog"],
  relatedContent: [
    "/how-to-read-hvac-data-plate/",
    "/how-to-document-hvac-fault-for-service/",
    "/how-to-check-mini-split-remote/",
    "/error-codes/",
    "/gree-vs-midea-mini-splits/",
  ],
  glossaryTerms: ["data-plate", "service-manual", "error-code"],
  keywords: [
    "find mini split model number",
    "where is the model number on a mini split",
    "mini split serial number location",
    "ductless model number meaning",
  ],
});
