import { publish } from "./publish";

export const carrierInfinityCode16With535547 = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Carrier Infinity code 16 with 53, 55 or 47: telling a communication fault from a failed sensor",
  slug: "infinity-code-16-with-53-55-47",
  path: "/brands/carrier/infinity-code-16-with-53-55-47/",
  description:
    "On current Infinity variable-speed equipment a two-digit number is half a code. What 16, 53, 55 and 47 refer to, and which of them a lost communication link can produce.",
  articleType: "error-code",
  brand: "carrier",
  equipmentType: "ducted-split",
  productFamily:
    "Carrier Infinity System Control paired with communicating equipment, with the outdoor-unit code structure documented for 24VNA6 and 25VNA4 variable-speed units",
  models: [
    "Carrier 24VNA6 variable-speed heat pump",
    "Carrier 25VNA4 variable-speed air conditioner",
    "Carrier Infinity System Control SYSTXCCITC",
  ],
  errorCode: "16",
  problemType: "communication-fault",
  symptomFamily: "communication-fault",
  directAnswer:
    "Read the number as a pair before deciding anything. On 24VNA6 and 25VNA4 equipment the outdoor board reports a base code plus an expansion code, so 16, 53 and 55 occupy different columns of one table and carry different meanings depending on the column they came from. A genuine loss of communication with the Infinity System Control sets no diagnostic fault at the outdoor unit: the service manual says the Comm light goes off and the equipment falls back to its discrete control inputs.",
  scopeNotice:
    "The code structure described here is the one published for the 24VNA6 and 25VNA4 outdoor units. Carrier furnaces, fan coils and older Infinity outdoor sections keep their own tables, and a two-digit number copied from one of those is not evidence about a variable-speed unit carrying this board.",
  symptoms: [
    "The Infinity System Control reports a malfunction and the numbers on screen do not point at one identifiable component.",
    "Heating is refused while cooling still runs, or the equipment operates normally while the control reports nothing useful.",
  ],
  causes: [
    "A two-digit number was copied without the column it came from, so a base code and an expansion code look identical once written down.",
    "An outdoor thermistor reading outside its documented resistance window sets a specific base code and changes what the equipment is allowed to do.",
    "The link between the outdoor unit and the Infinity System Control has dropped, which the outdoor board signals by turning the Comm light off rather than by storing a fault.",
  ],
  diagnosticBranches: [
    {
      title: "The outdoor Comm light is off and no code is stored",
      observation:
        "The matrix display shows nothing diagnostic, the Comm light is dark, and the equipment still answers a heating or cooling demand.",
      action:
        "Treat this as a communication condition rather than a component failure. The service manual states that no diagnostic fault is associated with lost communication and that the equipment defaults to its discrete control inputs, so photograph the light state and leave the link tracing to a technician.",
    },
    {
      title: "Heating is refused while cooling is allowed",
      observation:
        "The wall control carries a malfunction, the equipment will run in cooling, and a heating demand does not start the compressor.",
      action:
        "That division matches the documented outdoor suction thermistor fault, which locks heating out and permits cooling so the reading stays visible until the sensor is repaired. Record the exact numbers before anyone clears the display.",
    },
    {
      title: "The status or checkout display reads 47",
      observation:
        "A screen that should be showing a temperature is showing 47 while the readings around it look plausible.",
      action:
        "Check whether that 47 sits in a temperature field rather than a code field. An open outdoor suction thermistor is documented to default its value to 47 on the status or checkout display, so the number can be a substituted reading instead of a fault.",
    },
  ],
  decisionTable: {
    caption: "Where each number can appear in the published outdoor-unit table",
    columns: ["Number", "Column it can occupy", "What that entry describes"],
    rows: [
      ["16", "Expansion beside a drive base code", "A reprogramming failure recorded against the drive"],
      ["53", "Base code", "The outdoor suction thermistor open, shorted, or out of range"],
      ["55", "Expansion code", "A low-pressure, low-compression, fan or drive entry, set by its base"],
      ["47", "A value on the status or checkout screen", "The substituted reading for an open suction thermistor"],
    ],
  },
  figures: [
    {
      title: "Four surfaces that can produce a number on one Infinity system",
      description:
        "The same two digits carry different meaning depending on the surface that produced them, which is why recording the surface alongside the number is what makes an entry readable later.",
      nodes: [
        { label: "Base code", detail: "Names the subsystem that reported" },
        { label: "Expansion code", detail: "Qualifies that base entry" },
        { label: "Status value", detail: "A live or substituted reading" },
        { label: "Comm light", detail: "Link state, carrying no stored code" },
      ],
    },
  ],
  sections: [
    {
      title: "A dropped link and a failed sensor leave different traces",
      paragraphs: [
        "The clearest published separation between the two situations is what each one records. Carrier documents the outdoor thermistors as monitored continuously against a resistance threshold, with the suction thermistor fault setting once resistance stays above 465 kohm for one second and clearing once it falls back below that figure for one second. That is a fault with a number, a trigger, and a defined release.",
        "Communication works the other way around. The service manual states that when communication with the Infinity System Control is lost the Comm light is off, that no diagnostic fault is associated with the condition, and that the equipment then operates from its discrete control inputs. A search for a communication code on the outdoor board can therefore come up empty while the link really is down.",
        "That asymmetry is the working test. A stored entry with a base code points at something the board measured. An absent entry beside a dark Comm light, on equipment that still runs, points at the path between the board and the control.",
      ],
    },
    {
      title: "What a suction thermistor fault is allowed to do to the system",
      paragraphs: [
        "The suction thermistor is used to control the outdoor electronic expansion valve in heat-pump operation, so Carrier locks heating out when the reading goes open or shorted and lets cooling continue. The wall control keeps showing the malfunction through cooling weather, which the manual describes as a reminder to repair the sensor before the heating season arrives.",
        "Read without the code table, that behaviour looks like a failed heat pump. It is not. One reading has been declared untrustworthy and the control has withdrawn the mode that depends on it. Measuring resistance at the board connector separates a failed thermistor from a break in its wiring, and that measurement belongs to a technician working inside the unit.",
      ],
    },
    {
      title: "Recording the fault so the numbers survive until the visit",
      paragraphs: [
        "Carrier gives the outdoor board a recall mode that scrolls the most recent, highest-priority diagnostic code, and the manual limits that recall to codes that occurred within the last 240 hours of equipment operating time. Older entries fall out of reach, and the equipment does not run while recall is active.",
        "So the sequence carries more weight than any single screen. Photograph the outdoor display, the Comm light, the wall control message, and the outdoor conditions at the time. A picture of the surface a number came from answers the question this page exists to answer, without asking anyone to interpret the number while standing at the equipment.",
      ],
    },
  ],
  safeChecks: [
    "Photograph the wall control message, the outdoor display, and the state of the Comm light before any power is interrupted.",
    "Write down whether the number appeared in a code position or in a temperature field on a status screen.",
    "Note which modes the system still accepts, because a mode that runs is evidence about what the control is protecting.",
  ],
  professionalEscalation: [
    "Resistance measurement at the control board connector, and any inspection inside the outdoor cabinet, is qualified service work.",
    "Tracing the communication path between the outdoor board and the Infinity System Control involves energised low-voltage wiring and belongs to a technician.",
  ],
  serviceHandoff:
    "Hand over both model numbers, the number exactly as it appeared, the surface that displayed it, whether the Comm light was lit, and which modes the system would still accept. That set decides whether the visit starts at a sensor or at the communication path.",
  resetGuidance:
    "Interrupting power clears the display and can discard the sequence that explains the fault, so capture every screen first. Repeated restarts are not a repair for either condition described here.",
  faqs: [
    {
      question: "Does a missing code mean communication is fine?",
      answer:
        "No. Carrier documents lost communication with the Infinity System Control as a condition with no associated diagnostic fault, signalled by the Comm light being off. An empty code list is consistent with a dropped link.",
    },
    {
      question: "Why does cooling still work when heating is locked out?",
      answer:
        "The outdoor suction thermistor controls the outdoor expansion valve during heat-pump heating. When that sensor reads open or shorted, Carrier locks heating out and allows cooling so the fault stays visible before the heating season.",
    },
    {
      question: "Is 47 on the display always a fault code?",
      answer:
        "No. The service manual states that an open outdoor suction thermistor defaults its value to 47 on the status or checkout display, so a 47 sitting in a temperature field is a substituted reading rather than a code.",
    },
    {
      question: "How long does the outdoor unit keep a code?",
      answer:
        "Diagnostic Code Recall displays the most recent, highest-priority code only if it occurred within the last 240 hours of equipment operating time. Nothing appears once an entry falls outside that window.",
    },
    {
      question: "Can I match these numbers to my Carrier furnace?",
      answer:
        "No. The base and expansion structure described here is published for the 24VNA6 and 25VNA4 outdoor units. Carrier furnaces and fan coils carry separate tables, and merging them produces wrong answers.",
    },
  ],
  sourceIds: ["carrier-24vna6-service", "carrier-infinity-control-install"],
  relatedContent: [
    "/brands/carrier/",
    "/brands/carrier/auxiliary-versus-emergency-heat/",
    "/brands/carrier/infinity-airflow-verification-static-pressure/",
    "/how-to-read-hvac-data-plate/",
  ],
  glossaryTerms: ["error-code", "thermistor", "sensor-fault", "control-board"],
  keywords: [
    "carrier infinity code 16",
    "carrier infinity code 53",
    "carrier infinity code 47",
    "carrier infinity communication fault",
    "24VNA6 fault code",
    "carrier suction thermistor fault",
  ],
});
