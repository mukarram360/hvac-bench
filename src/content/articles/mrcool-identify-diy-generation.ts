import { publish } from "./publish";

/**
 * MRCOOL publishes four separate code tables and files them by generation, so
 * every one of this site's three MRCOOL code pages depends on the reader
 * having answered a question none of them ask. This page answers it, and the
 * refrigerant on the outdoor plate turns out to be the shortest route.
 */
export const mrcoolIdentifyDiyGeneration = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Identify your MRCOOL DIY generation before reading a code",
  slug: "identify-diy-generation",
  path: "/brands/mrcool/identify-diy-generation/",
  description:
    "MRCOOL files error codes by DIY generation, and the generations use different refrigerants and different code formats. Here is how to tell which one you own.",
  articleType: "how-to",
  brand: "mrcool",
  equipmentType: "ductless-mini-split",
  productFamily: "DIY single-zone and DIY Multi systems, generations 1 to 5",
  models: [
    "DIY generations 1 to 3 systems",
    "DIY 4th generation systems",
    "DIY 5th generation systems",
    "DIY Multi condensers with three to six ports",
  ],
  problemType: "generation-identification",
  symptomFamily: "maintenance",
  directAnswer:
    "Read the refrigerant line on the outdoor data plate first. MRCOOL states that the 5th generation DIY moved from R-410A to R-454B, and the generation also decides which of four published code tables your display should be read against.",
  scopeNotice:
    "This covers the MRCOOL DIY line as the manufacturer documents it in its own generation and error-code articles. Advantage, Olympus, Universal, and GeoCool equipment is documented separately, and a DIY air handler paired with a condenser from a different generation is a combination the manufacturer literature does not describe.",
  layout: ["steps", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "A code lookup returned two different meanings for the characters on your display.",
    "A parts supplier has asked which generation the system is before quoting a line set or a fitting.",
    "The system was bought second hand or installed by somebody else and no paperwork came with it.",
  ],
  causes: [
    "MRCOOL publishes one code table for generations 1 to 3 and separate indoor and outdoor tables for the 4th and 5th generations.",
    "The refrigerant platform changed with the 5th generation, which changes fittings, service equipment, and the leak-detection codes an indoor unit can raise.",
  ],
  steps: [
    {
      name: "Find the refrigerant line on the outdoor plate",
      text: "The outdoor data plate carries the refrigerant designation alongside the factory charge. Nothing has to come off to read it, because the plate is on the exterior of the cabinet. R-454B places the system in the 5th generation; R-410A places it earlier.",
    },
    {
      name: "Copy the full outdoor model string",
      text: "Take the whole string including hyphens and trailing letters, not the capacity alone. Two condensers of the same nominal size from different generations are separate products with separate documentation.",
    },
    {
      name: "Count the ports if it is a DIY Multi",
      text: "MRCOOL states that 5th generation DIY Multi condensers carry additional ports, ranging from three to six. A port count above the earlier maximum is corroborating evidence, though it is the refrigerant line rather than the port count that settles the question.",
    },
    {
      name: "Note the shape of the code on the display",
      text: "Generations 1 to 3 show short codes such as E1, F5, or P4. The 4th and 5th generation tables are written with two-part codes such as EL-01, EC-51, EH-02, and PC-00. The format on the display is a check on the answer you reached from the plate.",
    },
    {
      name: "Look for refrigerant sensor codes",
      text: "The 5th generation indoor table adds codes for a refrigerant sensor, covering detection, out-of-range readings, and a multi-zone case where another indoor unit is the one detecting. Codes of that kind do not appear in the earlier tables at all.",
    },
    {
      name: "Write the answer next to the model numbers",
      text: "Record the generation with the indoor and outdoor model strings and keep them together. Every code lookup, every fitting question, and every line set decision on this equipment starts from that one answer.",
    },
  ],
  decisionTable: {
    caption: "What the generation decides on a MRCOOL DIY system",
    columns: ["Generation", "Refrigerant on the plate", "Code format you should see"],
    rows: [
      ["Generations 1 to 3", "R-410A", "Single letter and digit, such as E1, EC, F0, or P4"],
      ["4th generation", "R-410A", "Two-part codes, such as EL-01, EH-02, EC-51, PC-00"],
      ["5th generation", "R-454B", "Two-part codes plus refrigerant sensor codes such as EH-C1 or FH-CC"],
    ],
  },
  figures: [
    {
      title: "One answer, four consequences",
      description:
        "The generation is not a marketing label on this equipment. It selects the documentation, the service fittings, the code table, and whether the indoor unit carries a refrigerant sensor at all.",
      nodes: [
        { label: "Refrigerant platform", detail: "R-410A or R-454B, and the fittings that go with it" },
        { label: "Published code table", detail: "Four tables exist, split by generation and by unit" },
        { label: "Leak detection", detail: "Refrigerant sensor codes appear in the 5th generation table" },
        { label: "Multi-zone port count", detail: "Three to six ports on 5th generation DIY Multi condensers" },
      ],
    },
  ],
  sections: [
    {
      title: "Why the same characters mean different things",
      paragraphs: [
        "Look at what happens to the two letters EC across the MRCOOL tables. In the generations 1 to 3 indoor list, EC is refrigerant leak. In the 4th and 5th generation lists, EC is a prefix: EC-51 is an outdoor board memory parameter error, EC-52 to EC-56 are outdoor sensor circuits, and EC-07 is outdoor fan speed. A reader who finds EC on a 4th generation display and looks it up in the older list has been handed a refrigerant answer for a memory fault.",
        "The E1 case is gentler but still real. MRCOOL prints EL-01 and E1 together in the 4th and 5th generation indoor tables for the indoor to outdoor communication fault, so E1 survives the change. F-codes do not: in the older list F1 to F5 are outdoor sensors and fan speed, and in the multi-zone outdoor list F1 to F6 are the coil outlet sensors of indoor units A through F.",
        "None of that is a documentation error. It is what happens when a product line runs long enough that the control platform is replaced twice, and it is why the manufacturer files the tables by generation rather than merging them.",
      ],
    },
    {
      title: "The refrigerant change is a hard boundary",
      paragraphs: [
        "R-454B is not a drop-in for R-410A on this equipment, and MRCOOL has made that physical. The manufacturer states that the ACL2 fitting will not work with R-410A because the R-454B fittings use reverse threads, so an older refrigerant cylinder cannot be connected to newer equipment. The incompatibility is deliberate rather than incidental.",
        "The reasons the manufacturer gives are worth reading before anyone improvises. Different refrigerants operate at different pressures, compressors depend on specific oils, mixed refrigerant cannot be separated by recovery equipment and has to be destroyed, and some of the newer refrigerants are flammable where the ones they replace are not. This is technician territory in every case, and the point for an owner is narrower: knowing which refrigerant is in the system tells a contractor what to bring.",
      ],
    },
    {
      title: "When the plate and the display disagree",
      paragraphs: [
        "It happens on systems that have been serviced or extended. An indoor unit from one generation on a condenser from another produces a display whose code format does not match the refrigerant on the plate, and neither table can be trusted for the pair.",
        "Treat that as a finding rather than a puzzle to solve. Record both model strings, the refrigerant, and the exact characters on the display, and hand the mismatch to a technician along with the observation. A combination the manufacturer literature does not describe is precisely the case where guessing at a code table costs somebody a part.",
      ],
    },
  ],
  safeChecks: [
    "Read the refrigerant designation and the full model string from the outdoor data plate, which is on the outside of the cabinet.",
    "Photograph the indoor display while the code is showing, so the exact format is preserved rather than remembered.",
    "Count the connected indoor units and the ports in use on a multi-zone condenser without removing any cover.",
  ],
  professionalEscalation: [
    "Anything involving refrigerant, fittings, service valves, or charge belongs to a certified technician, whichever generation you have.",
    "A system whose indoor and outdoor units come from different generations needs professional assessment before any code table is applied to it.",
  ],
  serviceHandoff:
    "Give the technician the refrigerant designation, both model strings, the generation you concluded, and the exact characters on the display including any hyphen. That set lets the right table be opened before anyone drives out, and it prevents a fitting for the wrong refrigerant arriving on site.",
  faqs: [
    {
      question: "What refrigerant is in a 5th generation MRCOOL DIY?",
      answer:
        "R-454B. MRCOOL states that the refrigerant was changed from R-410A to R-454B for the 5th generation DIY systems, so the designation printed on the outdoor data plate separates that generation from everything before it.",
    },
    {
      question: "Can I use R-410A on a 5th generation system?",
      answer:
        "No. MRCOOL says the ACL2 fitting will not work with R-410A because the R-454B fittings are reverse threaded, which is a deliberate barrier to connecting the wrong cylinder. Mixing refrigerants risks the compressor and cannot be undone by recovery equipment.",
    },
    {
      question: "Why does my code have a hyphen in it?",
      answer:
        "Two-part codes such as EL-01, EH-02, and PC-00 belong to the 4th and 5th generation tables. The single letter and digit codes such as E1 and P4 belong to the table MRCOOL publishes for generations 1 to 3.",
    },
    {
      question: "Do the 5th generation refrigerant sensor codes exist on older units?",
      answer:
        "No. Codes for a refrigerant sensor detecting leakage, reading out of range, or reporting from another indoor unit on a multi-zone system appear in the 5th generation indoor table. Earlier tables have no equivalent because the equipment has no such sensor.",
    },
  ],
  sourceIds: ["mrcool-diy-generations", "mrcool-code-table", "mrcool-acl2-fitting"],
  relatedContent: [
    "/brands/mrcool/",
    "/brands/mrcool/el01-e1-error-code/",
    "/brands/mrcool/p0-pc00-error-code/",
    "/how-to-find-mini-split-model-number/",
    "/hvac-refrigerants-explained/",
  ],
  glossaryTerms: ["data-plate", "refrigerant", "error-code"],
  keywords: [
    "mrcool diy generation identify",
    "mrcool 4th gen vs 5th gen",
    "mrcool r454b refrigerant",
    "mrcool error code table generation",
    "mrcool diy multi ports",
  ],
});
