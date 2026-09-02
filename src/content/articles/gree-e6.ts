import { publish } from "./publish";

/**
 * E6 is a path fault, so the useful reasoning for a reader is about where the
 * path runs and what the timing of the first appearance narrows down. The page
 * is built around that rather than a generic escalation ladder.
 */
export const greeE6 = publish({
  title: "Gree E6 error code: indoor-outdoor communication fault",
  slug: "e6-error-code",
  path: "/brands/gree/e6-error-code/",
  description:
    "What Gree E6 means on documented mini-split families, what you can safely check, and why wiring and control diagnosis belongs with a technician.",
  articleType: "error-code",
  brand: "gree",
  equipmentType: "ductless-mini-split",
  productFamily: "Multi21+ and documented residential mini-splits",
  models: ["Multi21+ 30K", "Multi21+ 36K", "Multi21+ 42K"],
  errorCode: "E6",
  problemType: "communication-fault",
  directAnswer:
    "On the documented Gree systems, E6 means the indoor and outdoor equipment are not communicating normally; it identifies a communication path fault, not a single failed part.",
  scopeNotice:
    "This meaning follows Gree literature for the Multi21+ capacities and the residential systems named in the manufacturer support article. Other Gree ranges, and the same characters on another brand, can be assigned to a different fault, so match the model plate before you use this page.",
  symptoms: [
    "The indoor display shows E6 while normal heating or cooling is interrupted.",
  ],
  causes: [
    "Incorrect, loose, damaged, or spliced interconnect wiring can interrupt communication.",
    "An indoor or outdoor control-board communication circuit may have failed.",
  ],
  diagnosticBranches: [
    {
      title: "E6 appeared after installation or service work",
      observation:
        "The system worked before someone connected, extended, or re-terminated the cable between the indoor and outdoor units, and E6 has been present since.",
      action:
        "Note what was done and by whom, then have the installer return. Work performed on the interconnect is the most direct explanation available, and it is the cheapest thing for a technician to confirm first.",
    },
    {
      title: "E6 appeared after a storm, outage, or breaker trip",
      observation:
        "Nothing was touched on the system, but the code followed a supply event that affected the property.",
      action:
        "Record the date and the nature of the event. One controlled restart establishes whether the fault survives the power interruption, which tells the technician whether to start at the supply or at the boards.",
    },
    {
      title: "E6 arrived with no event you can point to",
      observation:
        "Operation was normal, nothing was worked on, the weather was unremarkable, and the code appeared on its own.",
      action:
        "Leave the system off and book diagnosis. A path that degrades without an obvious trigger usually means a connection or a board circuit, and both need power isolated and continuity measured.",
    },
  ],
  figures: [
    {
      title: "Where the Gree communication path runs",
      description:
        "E6 says the two ends of this path stopped exchanging data. Every segment below can break the exchange, which is why the code cannot name a failed part on its own.",
      nodes: [
        { label: "Indoor control board", detail: "Generates and expects the data signal" },
        { label: "Indoor terminal block", detail: "First mechanical joint in the path" },
        { label: "Interconnect cable", detail: "Conductor run, joints, and any splices" },
        { label: "Outdoor terminal block", detail: "Second mechanical joint in the path" },
        { label: "Outdoor control board", detail: "Answers the indoor unit and reports back" },
      ],
    },
  ],
  comparisonTable: {
    caption: "What the timing of the first E6 narrows down",
    columns: ["When it first appeared", "What that makes more likely", "What it still does not prove"],
    rows: [
      [
        "Immediately after an install or a repair",
        "A terminal, conductor, or polarity issue in the work just completed",
        "It does not rule out a board that was damaged during the same work",
      ],
      [
        "Straight after an outage or a nearby lightning storm",
        "Supply disturbance reaching a communication circuit at one end",
        "It does not establish which end took the damage or whether either did",
      ],
      [
        "Gradually, with the code clearing and returning over weeks",
        "A joint or conductor that moves with temperature or vibration",
        "It does not separate a loose terminal from an intermittent board fault",
      ],
    ],
  },
  sections: [
    {
      title: "Why E6 cannot name the failed part",
      paragraphs: [
        "The indoor unit reports E6 when it stops receiving the answers it expects from the outdoor unit. That is a statement about a conversation, not about a component. The conversation can fail because a conductor is broken, because a terminal screw is loose, because polarity was reversed at one end, or because the circuit that talks or listens has failed on either board.",
        "This matters for cost. A homeowner who reads E6 as a board fault can buy a board, fit it, and still have E6, because the original break was a joint eight metres away. A technician working the path in order finds the break where it is. Ask for the path to be proven end to end before any part is ordered.",
      ],
    },
    {
      title: "What you can settle before the visit",
      paragraphs: [
        "Two things you can establish cost nothing and shorten the visit. The first is identity: photograph the rating plate on the indoor unit and the rating plate on the outdoor unit, because the diagnostic data differs between capacities and a technician who arrives with the wrong manual loses an hour.",
        "The second is history. Write down when E6 first appeared, what happened in the days before, whether the code clears on a restart and for how long, and whether the outdoor unit runs at all while the code shows. On a fault that comes and goes, this record is often more useful than anything a meter reads on the day, because the fault may be absent while the technician is standing there.",
      ],
    },
  ],
  safeChecks: [
    "Record the complete indoor and outdoor model numbers and photograph the E6 display.",
    "With the system off, confirm no recent breaker trip, outage, or visible cable damage occurred.",
  ],
  professionalEscalation: [
    "A technician should isolate power before inspecting terminals, wiring continuity, accessories, or control boards.",
    "Do not perform the manual's powered voltage tests unless you are qualified for live electrical diagnostics.",
  ],
  serviceHandoff:
    "Give the technician both rating plates, the date E6 first appeared, any installation or electrical work that preceded it, whether a restart clears the code and for how long, and whether the outdoor fan turns at any point while the code is displayed.",
  resetGuidance:
    "One power cycle may confirm whether the code was transient; repeated E6 requires diagnosis and should not be repeatedly reset.",
  faqs: [
    {
      question: "Is Gree E6 a wiring fault or a board fault?",
      answer:
        "The code does not separate them. Gree assigns E6 to a communication failure between the indoor and outdoor units, and every joint, conductor, and board circuit along that path can produce it. Proving the path in order is what tells you which one it is.",
    },
    {
      question: "Can I clear E6 by turning the power off?",
      answer:
        "A single controlled restart is reasonable and it tells you something useful: whether the fault survives a power interruption. Repeating it does not. If E6 returns, the path is still broken and further resets only remove evidence a technician could have used.",
    },
    {
      question: "Does E6 mean the same thing on every Gree unit?",
      answer:
        "No. This definition follows the Gree literature for the Multi21+ capacities and the residential systems named in the manufacturer support article. Gree assigns codes by product range, so check the model plate against that scope before applying this meaning.",
    },
    {
      question: "Why did E6 start right after my installer left?",
      answer:
        "Work on the interconnect cable is the most common thing to change immediately before a communication code. A reversed pair, a loose terminal, or a joint that is not tight enough will read as a failed conversation. Ask the installer to return and prove the path before anyone orders parts.",
    },
  ],
  sourceIds: ["gree-e6-guide", "gree-multi21-service"],
  relatedContent: ["/brands/gree/", "/mini-split-not-cooling/", "/mini-split-not-turning-on/"],
  keywords: [
    "gree e6 error code",
    "gree e6 communication",
    "gree mini split e6",
    "multi21 e6 fault",
    "gree indoor outdoor communication error",
  ],
});
