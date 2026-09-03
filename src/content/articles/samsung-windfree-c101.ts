import { publish } from "./publish";
export const samsungWindfreeC101 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Samsung WindFree C101 and C102 communication errors",
  slug: "windfree-c101-c102-error",
  path: "/brands/samsung/windfree-c101-c102-error/",
  description:
    "What C101 and C102 mean on Samsung WindFree 3.0 systems, why the codes do not prove a bad board, and what evidence to save for service.",
  articleType: "error-code",
  brand: "samsung",
  equipmentType: "ductless-mini-split",
  productFamily: "WindFree 3.0 AR C",
  models: ["WindFree 3.0 AR C indoor and outdoor combinations"],
  errorCode: "C101/C102",
  problemType: "communication-fault",
  directAnswer:
    "On Samsung WindFree 3.0 AR C systems, C101 and C102 identify failed communication between indoor and outdoor equipment. The service path includes the interconnect cable, its terminal order and continuity, supply conditions, and control boards; the display alone cannot select a part.",
  scopeNotice:
    "Use this definition only for WindFree 3.0 AR C combinations covered by the cited Samsung service manual. Samsung assigns similar-looking codes differently across RAC, FJM, VRF, and appliance products.",
  symptoms: ["The indoor unit displays C101 or C102 and heating or cooling is unavailable."],
  causes: [
    "The indoor-outdoor cable can be open, mis-terminated, crossed, or electrically unsuitable.",
    "A supply or communication circuit on either control board can stop the data exchange.",
  ],
  diagnosticBranches: [
    {
      title: "Code began during commissioning",
      observation:
        "C101 or C102 was present from first startup or followed replacement of an indoor unit, outdoor unit, cable, or board.",
      action:
        "Return the job to the installer with the exact pairing and work history; terminal sequence and compatible components should be proved before parts are condemned.",
    },
    {
      title: "Code followed previously normal operation",
      observation:
        "The matched WindFree system had communicated normally until an outage, storm, building work, or an unexplained interruption.",
      action:
        "Preserve the event timing and whether one authorised restart changes the code, then leave cable and live-board tests to qualified service.",
    },
  ],
  decisionTable: {
    caption: "WindFree communication evidence map",
    columns: ["Finding", "Where diagnosis starts", "What it does not prove"],
    rows: [
      ["Fault from first startup", "Pairing, terminal order, and cable", "Both boards are defective"],
      ["Fault after electrical event", "Supply and surge evidence", "A replacement board is required"],
      ["Cable path tests correctly", "Powered signal and board diagnosis", "The cable was never intermittent"],
    ],
  },
  figures: [
    {
      title: "C101 and C102 signal path",
      description:
        "Communication succeeds only when both powered controls and every connection between them participate, so either end or the path can explain the same display.",
      nodes: [
        {
          label: "Indoor PCB",
          detail: "Sends and receives the serial message",
        },
        {
          label: "Terminal sequence",
          detail: "Must match Samsung's documented conductor order",
        },
        {
          label: "Interconnect cable",
          detail: "Carries the data path between assemblies",
        },
        {
          label: "Outdoor PCB",
          detail: "Replies while supplied within its operating conditions",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Treat the code as a failed conversation",
      paragraphs: [
        "C101 and C102 are valuable because they locate the problem between the indoor and outdoor control systems. They are not component tests. A conductor landed on the wrong terminal can prevent the first message. A damaged cable can pass visually yet fail continuity or insulation testing. Correct wiring can still be unable to communicate if one control lacks proper supply or its sending circuit has failed. Samsung's service sequence therefore checks the installed path and electrical facts before deciding that a board is responsible. That order prevents a costly board swap from hiding a commissioning error.",
        "The distinction between C101 and C102 should be preserved exactly as displayed, including spaces or prefixes shown by the controller. Do not rely on a generic Samsung list from another product category. Room air conditioners, multi-splits, commercial systems, refrigerators, and washers share letter-number formats without sharing definitions. The indoor and outdoor model labels determine which table is authoritative.",
      ],
    },
    {
      title: "Information that shortens the electrical diagnosis",
      paragraphs: [
        "Photograph the code and both rating plates before power is interrupted. Write down whether the system ever operated, which component was most recently changed, and whether the event followed an outage or nearby work. For a multi-unit installation, identify which indoor unit reports the code and whether other zones operate.",
        "Do not open the outdoor enclosure, move terminal conductors, or probe a live communication circuit. Samsung's checks require electrical isolation for some steps and powered measurements for others. A qualified technician should verify the manual, conductor order, cable integrity, supply, and signal before naming a board. One controlled restart can establish persistence, but repeated cycling supplies no additional diagnosis.",
      ],
    },
  ],
  safeChecks: [
    "Save the exact display, both model plates, first-occurrence timing, and the operating status of any other connected indoor units.",
  ],
  professionalEscalation: [
    "Cable continuity, terminal correction, live communication measurements, and control-board work require a qualified air-conditioning technician.",
  ],
  serviceHandoff:
    "Provide the indoor and outdoor model numbers, exact C101 or C102 display, installation or repair history, outage history, and whether the system ever completed a normal run.",
  resetGuidance:
    "Use one restart only when the operating instructions permit it; if the same code returns, keep the display available for measured diagnosis.",
  faqs: [
    {
      question: "Does C101 mean the outdoor board has failed?",
      answer:
        "No. The Samsung path includes wiring, terminal order, electrical supply, and both communication circuits. Board replacement needs measurements that eliminate the other parts of that path.",
    },
    {
      question: "Can reversed wires cause a WindFree communication code?",
      answer:
        "Incorrect terminal order is a commissioning possibility addressed by the service path. Do not move conductors yourself; give the installer the code and first-start history.",
    },
    {
      question: "Are C101 and C102 universal Samsung codes?",
      answer:
        "No. This page is scoped to WindFree 3.0 AR C systems. Samsung product families use overlapping code formats, so both model numbers must select the reference.",
    },
  ],
  sourceIds: ["samsung-windfree-c101", "samsung-windfree-model-support"],
  glossaryTerms: ["error-code", "control-board"],
  relatedContent: [
    "/brands/samsung/",
    "/how-to-document-hvac-fault-for-service/",
    "/how-to-find-mini-split-model-number/",
  ],
  keywords: [
    "samsung c101 error code",
    "samsung c102 error code",
    "windfree communication error",
    "samsung mini split c101",
  ],
});
