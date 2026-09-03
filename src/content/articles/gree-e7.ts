import { publish } from "./publish";

/**
 * E7 is a Gree code that a homeowner can resolve without a visit when the
 * displayed condition is a mode conflict, so the page is built around the
 * arbitration rule rather than around a fault ladder. The Multi21+ service
 * manual states which indoor unit wins, and that rule is what the reader
 * actually needs.
 */
export const greeE7 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Gree E7 error code: two indoor units asking for different modes",
  slug: "e7-error-code",
  path: "/brands/gree/e7-error-code/",
  description:
    "Gree assigns E7 to a mode conflict between indoor units. Which head wins, why dry counts as cooling, and how to clear it without a service visit.",
  articleType: "error-code",
  brand: "gree",
  equipmentType: "multi-zone",
  productFamily: "Multi21+ and the residential ranges in the Gree code overview",
  models: ["MULTI30HP230V1BO", "MULTI36HP230V1BO", "MULTI42HP230V1BO"],
  errorCode: "E7",
  problemType: "mode-conflict",
  symptomFamily: "no-heating",
  directAnswer:
    "Gree assigns E7 to a mode conflict: two or more indoor units on the same outdoor unit have been set to modes the system cannot run at once. Nothing has failed, and setting the heads to one agreed mode clears it.",
  scopeNotice:
    "This meaning follows the Gree manufacturer code overview and the Multi21+ 30K, 36K, and 42K service manual. A single-zone Gree system has no second head to disagree with, and other manufacturers assign E7 to unrelated faults, so read the plate before applying anything here.",
  layout: ["branches", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "One head displays E7 while another head in the house keeps running normally.",
    "A room stays cold after heating is selected, and the display shows E7 rather than starting.",
    "The code appeared the first cold morning of the season, when somebody switched from cooling to heating.",
  ],
  causes: [
    "One indoor unit has been set to cooling or dry while another has been set to heating on the same outdoor unit.",
    "A head was left on a mode from the previous season and nobody noticed it was still enabled.",
  ],
  diagnosticBranches: [
    {
      title: "E7 arrived when a second room was switched on",
      observation:
        "One head had been running for a while, someone started a second head, and E7 came up on the head that started last.",
      action:
        "Look at what the running head is set to. The head that started first holds the mode, so the newcomer is the one being refused. Match it to the running mode, or stop the first head and let the room you actually want to condition set the mode.",
    },
    {
      title: "E7 arrived at a seasonal changeover",
      observation:
        "Heating was selected in one room after months of cooling, and a head somewhere else in the house is still enabled on cool or dry.",
      action:
        "Walk the house and stop every head, including any in a spare room or a hallway. Start the heads again in heating, beginning with the room that matters most. The conflict cannot survive a set of heads that all ask for the same thing.",
    },
    {
      title: "E7 persists with every head set to the same mode",
      observation:
        "You have confirmed at each display that no head is on a conflicting mode, all handsets agree, and the code still shows.",
      action:
        "Stop here and arrange service. A conflict signal that survives agreement between the heads points at the mode a board believes it has been given, and reading that belief means opening the electrical compartment.",
    },
  ],
  figures: [
    {
      title: "How a Multi21+ picks the mode it will run",
      description:
        "The outdoor unit runs one refrigeration direction at a time. This is the arbitration order the service manual describes, and it explains why the room that complains is not always the room at fault.",
      nodes: [
        { label: "First head switched on", detail: "Sets the mode for the whole system" },
        { label: "Fan-only head", detail: "Takes no part, so it never sets the mode" },
        { label: "Second head, same mode", detail: "Joins and runs normally" },
        { label: "Second head, opposite mode", detail: "Refused, and E7 is displayed" },
      ],
    },
  ],
  decisionTable: {
    caption: "Which head sets the mode on a documented Multi21+ system",
    columns: ["First head switched on", "Second head asks for", "Documented result"],
    rows: [
      [
        "Cooling",
        "Heating",
        "Conflict. Cooling and dry are in conflict with heating, so the second request is refused",
      ],
      [
        "Fan only",
        "Cooling or heating",
        "No conflict. The system runs in the mode the second head asked for",
      ],
      [
        "Dry",
        "Heating",
        "Conflict. Dry runs the same cycle as cooling, so it behaves as cooling for arbitration",
      ],
      [
        "Heating",
        "Heating",
        "No conflict. Compressor frequency follows the combined demand of the running heads",
      ],
    ],
  },
  sections: [
    {
      title: "One compressor, one direction",
      paragraphs: [
        "A Multi21+ outdoor unit serves several rooms from a single refrigerant circuit with a single four-way valve. That valve decides which end of the circuit rejects heat. Point it one way and every indoor coil in the house is an evaporator; point it the other way and every indoor coil is a condenser. No valve position leaves one bedroom cooling while the room next door is heated.",
        "So the control has to arbitrate, and the manual states the rule it uses. The system mode is set by the first indoor unit turned on, with fan mode excluded from the decision. Cooling and dry sit on the same side of that rule, heating on the other. A head that asks for the losing side is refused and shows the conflict rather than pretending to work.",
        "Changing the whole system across is a stop and restart, not a switch. The manual describes the system halting first when the mode changes, then restarting in the new mode once the compressor has come to rest. A pause of a minute or two after a mode change is the equipment following that sequence.",
      ],
    },
    {
      title: "The room showing the code is not the room at fault",
      paragraphs: [
        "E7 appears on the head that lost the arbitration, which is the head somebody just tried to use. The head that caused the conflict is elsewhere, running quietly and correctly in the mode it claimed first. Readers who chase the fault at the displaying unit find nothing wrong with it, because there is nothing wrong with it.",
        "This is worth knowing before anyone is called out. A conflict that clears when the heads are set to one mode is a settings result, and a technician invoiced for confirming it has been paid to read a display you can read yourself.",
      ],
    },
    {
      title: "What E7 rules out",
      paragraphs: [
        "The code says the control received two incompatible requests. It says nothing about refrigerant charge, compressor condition, board health, or wiring, and it is not a protection shutdown in the sense that a pressure or current code is. Equipment that shows E7 has not been stressed by anything.",
        "That distinction matters when the code sits alongside another symptom. If a head shows E7 and the same system also runs a room warm in cooling, the two are separate questions. Clear the conflict first so the system is allowed to run, then judge the performance complaint with every head pointing the same way.",
      ],
    },
  ],
  safeChecks: [
    "Read the mode symbol on every indoor unit in the property, including heads in rooms nobody is using.",
    "Stop every head from its own handset, then start only the room you want, and note whether E7 returns.",
    "Photograph both rating plates and the E7 display before contacting service, in case the code survives the checks above.",
  ],
  professionalEscalation: [
    "A conflict code that remains after every head has been set to one mode needs a technician with the wiring diagram for your capacity.",
    "Do not remove indoor or outdoor electrical covers to look for a stuck mode signal; that work belongs behind an isolated supply.",
  ],
  serviceHandoff:
    "Tell the technician how many heads are connected, what each one was set to when E7 appeared, and whether stopping all of them and restarting in one mode changed anything. That single fact separates a settings conflict from a control fault and saves the first half hour of the visit.",
  resetGuidance:
    "Setting every indoor unit to one mode is the documented way to clear a mode conflict. Cutting the supply to force a restart does not resolve a disagreement the heads will have again the moment they are switched back on.",
  faqs: [
    {
      question: "Can one Gree head cool while another heats?",
      answer:
        "Not on this equipment. A Multi21+ runs one refrigerant direction for every indoor unit connected to it, so the choice is cooling and dry for the whole system or heating for the whole system. Simultaneous cooling and heating needs heat-recovery equipment, which these residential systems are not.",
    },
    {
      question: "Why does fan mode not cause E7?",
      answer:
        "Fan mode runs the indoor blower and leaves the compressor, outdoor fan, and four-way valve alone. Because it makes no claim on the refrigerant circuit, the manual excludes it from the arbitration. A head left on fan can sit there all day without blocking heating in another room.",
    },
    {
      question: "Does dry mode count as cooling for E7?",
      answer:
        "Yes. The Multi21+ manual describes dry as running the same cycle as cooling, which puts it on the cooling side of the conflict rule. A dehumidifying bedroom will refuse a heating request from the living room exactly as a cooling bedroom would.",
    },
    {
      question: "Is E7 the same on every Gree unit?",
      answer:
        "No. This meaning comes from the Gree code overview and the Multi21+ service literature. Gree assigns codes by product range, and a single-zone system has no second head to conflict with, so check your model plate against that scope before acting on this page.",
    },
    {
      question: "How long should I wait after changing the mode?",
      answer:
        "Give it a couple of minutes. A documented mode change stops the whole system, waits for the compressor to come to rest, and then restarts in the new direction. A head that is quiet immediately after the change is following that sequence rather than ignoring you.",
    },
  ],
  sourceIds: ["gree-code-overview", "gree-multi21-service"],
  relatedContent: [
    "/brands/gree/",
    "/brands/gree/e6-error-code/",
    "/single-zone-vs-multi-zone-mini-split/",
    "/mini-split-not-heating/",
  ],
  glossaryTerms: ["error-code", "multi-zone-system", "reversing-valve"],
  keywords: [
    "gree e7 error code",
    "gree mode conflict",
    "gree multi zone e7",
    "gree mini split e7 heating",
    "gree multi21 mode conflict",
  ],
});
