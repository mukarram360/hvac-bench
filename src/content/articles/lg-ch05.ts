import { publish } from "./publish";

/**
 * CH05 has neighbours in the same table. What a reader needs is help telling
 * the codes apart and a clear statement of why the service literature carries
 * a stored-energy warning.
 */
export const lgCh05 = publish({
  title: "LG CH05 error code: indoor-outdoor communication error",
  slug: "ch05-error-code",
  path: "/brands/lg/ch05-error-code/",
  description:
    "What LG CH05 means on documented single-zone systems, how it differs from neighbouring CH53 and CH93, and why the service tests are not homeowner work.",
  articleType: "error-code",
  brand: "lg",
  equipmentType: "ductless-mini-split",
  productFamily: "LG single-zone systems in MFL41161610",
  models: ["LG single-zone systems covered by General Service Manual MFL41161610"],
  errorCode: "CH05",
  problemType: "communication-fault",
  directAnswer:
    "LG's documented CH05 code indicates an indoor-to-outdoor communication error; the same service table groups related CH53 and CH93 communication conditions by system context.",
  scopeNotice:
    "This page follows the LG general service manual for single-zone ductless systems. LG multi-zone and ducted ranges maintain their own code tables, and a CH number read from a different manual is not interchangeable, so confirm the model against the manual before relying on this definition.",
  symptoms: [
    "The indoor display reports CH05 and the indoor and outdoor units do not coordinate normal operation.",
  ],
  causes: [
    "Indoor power loss, disconnected or miswired interconnect conductors, or external electrical noise can interrupt communication.",
    "Indoor or outdoor control circuitry or another electrical component may be involved.",
  ],
  diagnosticBranches: [
    {
      title: "Read the whole code before you look it up",
      observation:
        "The display shows a CH prefix followed by digits, and the digits are easy to misread on a small illuminated panel or in a photograph taken at an angle.",
      action:
        "Photograph the display straight on and confirm you have CH05 rather than CH53 or CH93. The LG table groups these as related communication conditions, but they are separate entries and lead to different checks.",
    },
    {
      title: "The code followed electrical work or an outage",
      observation:
        "A power interruption, a new circuit, an inverter or solar installation, or work by an electrician preceded the first CH05.",
      action:
        "Record what changed and when. Communication faults that follow supply work often trace back to it, and a technician who knows this starts at the supply and the terminals rather than at the boards.",
    },
    {
      title: "The indoor unit shows no sign of power at all",
      observation:
        "There is no display, no beep, and no response from the indoor unit rather than a displayed code.",
      action:
        "This is a different problem from CH05. Check the normal breaker position once, and if the supply is present but the unit is dead, arrange diagnosis instead of working through communication checks.",
    },
  ],
  figures: [
    {
      title: "What has to be true for the units to agree",
      description:
        "A communication code means one of these conditions is not being met. None of them can be confirmed from the display alone, which is why the code names a subject rather than a part.",
      nodes: [
        { label: "Indoor power", detail: "The indoor unit is energised and awake" },
        { label: "Conductors", detail: "Correct connections carrying the signal between units" },
        { label: "Signal quality", detail: "Free enough of electrical noise to be read" },
        { label: "Outdoor control", detail: "Powered and able to answer the indoor unit" },
      ],
    },
  ],
  decisionTable: {
    caption: "What you can establish about CH05 without opening anything",
    columns: ["Observation", "What it contributes", "Next step"],
    rows: [
      [
        "The exact characters on the display, photographed",
        "Confirms which entry in the LG table applies",
        "Keep the photograph for the technician rather than relying on memory",
      ],
      [
        "Whether the outdoor unit shows any sign of running",
        "Separates a system with one live end from a system with neither",
        "Note it and stop; do not open the outdoor unit to look",
      ],
      [
        "What electrical events preceded the code",
        "Points at supply and terminals rather than at control boards",
        "Tell the technician before diagnosis begins",
      ],
    ],
  },
  sections: [
    {
      title: "Why LG groups these codes together",
      paragraphs: [
        "The service literature places CH05 alongside CH53 and CH93 because they describe communication conditions in different parts of the system rather than unrelated faults. That grouping is useful context, but it is not permission to treat them as the same code. Each entry has its own conditions attached, and the digits are the only thing separating them on the display.",
        "This is worth saying because misread codes are common. A photograph taken square to the display, in a room dim enough that the panel is not washed out, settles it. Working from a half-remembered number is how a diagnosis starts in the wrong place.",
      ],
    },
    {
      title: "The warning in the service manual is not boilerplate",
      paragraphs: [
        "LG service procedures for these systems carry wait-time and stored-energy warnings before electrical access. That is not generic caution. Inverter equipment holds a charge after the supply is removed, and the interval specified in the manual exists because the stored energy takes time to decay to a safe level.",
        "The practical consequence for a homeowner is simple. There is no version of the CH05 diagnostic path that is safe to attempt with the covers off, including the parts that look like nothing more than checking a screw is tight. Every check past reading the display belongs with someone who has the manual, the meter, and the training to use the isolation procedure correctly.",
        "There is a reasonable question hiding here, which is what a homeowner is actually for in this diagnosis. The answer is evidence. You can photograph the display, note whether the outdoor unit shows any sign of life, and record what electrical work or interruption came before the code, and none of that requires opening anything.",
      ],
    },
  ],
  safeChecks: [
    "Record the complete code, model numbers, and whether either unit shows signs of power.",
    "Note whether the code followed an outage, installation, or other electrical work without opening a panel.",
  ],
  professionalEscalation: [
    "Terminal, grounding, resistance, motor, and PCB checks in the service manual require a qualified technician.",
    "Wait-time and stored-energy warnings in the service literature must be followed before electrical access.",
  ],
  serviceHandoff:
    "Send the technician a straight-on photograph of the display, the indoor and outdoor model numbers from the rating plates, the date the code first appeared, any electrical work or outage before it, and whether the outdoor unit shows any sign of operating.",
  resetGuidance:
    "A controlled power cycle can document recurrence; continuing CH05 should be diagnosed rather than repeatedly cleared.",
  faqs: [
    {
      question: "What is the difference between CH05 and CH53?",
      answer:
        "They are separate entries in the LG table describing communication conditions in different parts of the system. Because they look similar on a small display, photograph the panel straight on and confirm the digits before you act on either meaning.",
    },
    {
      question: "Can I check the terminal connections myself?",
      answer:
        "No. The LG service literature attaches wait-time and stored-energy warnings to electrical access on this equipment, because inverter circuits hold a charge after the supply is removed. Checking a terminal means opening the enclosure, and that is technician work.",
    },
    {
      question: "Does CH05 mean the outdoor unit has failed?",
      answer:
        "It does not. CH05 reports that the indoor and outdoor units are not communicating. Lost power at one end, interconnect wiring, electrical noise, and control circuitry at either end can all produce it, and the code does not choose between them.",
    },
    {
      question: "Is one power cycle worth trying?",
      answer:
        "One is reasonable and it tells you whether the fault survives an interruption. If CH05 comes back, the condition is still there, and repeated cycling only delays the diagnosis while removing information about how the fault behaves.",
    },
  ],
  sourceIds: ["lg-general-service"],
  relatedContent: ["/brands/lg/", "/mini-split-not-turning-on/", "/mini-split-not-cooling/"],
  keywords: [
    "lg ch05 error code",
    "lg ch05 communication error",
    "lg mini split ch05",
    "lg ch53 ch93 difference",
    "lg single zone error code",
  ],
});
