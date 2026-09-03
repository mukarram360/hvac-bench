import { publish } from "./publish";

export const yorkYp9cThreeRedFlashesLowFire = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "York YP9C three red flashes at low fire only: pressure switch, pressure sensor, or the vent",
  slug: "yp9c-three-red-flashes-at-low-fire",
  path: "/brands/york/yp9c-three-red-flashes-at-low-fire/",
  description:
    "This furnace carries two combustion airflow devices and the manual says which is primary. That sentence explains why the fault appears at minimum input.",
  articleType: "error-code",
  brand: "york",
  equipmentType: "furnace",
  productFamily:
    "York Affinity YP9C modulating condensing furnaces and the TP9C, CP9C and LP9C models sharing the same installation manual",
  models: [
    "York YP9C*C modulating multi-position gas furnace",
    "TP9C*C, CP9C*C and LP9C*C models covered by the same manual",
  ],
  errorCode: "3 red flashes",
  problemType: "pressure-switch-open",
  symptomFamily: "no-heating",
  directAnswer:
    "Three red flashes reports the pressure switch open with inducer pressure above the switch setpoint, meaning the switch is open when it should be closed. The reason this shows up at low fire is written into the same manual: the switch is mounted on the draft inducer and proves flow at the start of each cycle, and the manual then states that it may be open under certain conditions when the burners are lit, because the pressure sensor on the control board is the primary flow sensor. Minimum firing rate is where inducer speed and the pressure the switch sees are both lowest.",
  scopeNotice:
    "This applies to the modulating YP9C family and the models sharing its installation manual, which use both a pressure switch on the inducer and a separate pressure sensor on the control board. Single and two-stage York furnaces without that pressure sensor read a pressure switch fault differently.",
  symptoms: [
    "The furnace lights, runs for under a minute, and then reports three red flashes.",
    "Heating works during a call that stays at higher input and fails once the burner settles to minimum.",
    "Amber flash codes about reduced capacity appear in the stored error history alongside the red code.",
  ],
  causes: [
    "A pressure switch sitting close to its setpoint at minimum firing rate, so the margin that exists at higher input disappears.",
    "Condensate or a hose routing fault at the switch, which the manual addresses by specifying how the hoses are looped and routed.",
    "A combustion air or vent restriction, which this furnace responds to through the pressure sensor before the switch ever opens.",
    "A combustion blower whose speed no longer produces the pressure the switch expects at low input.",
  ],
  diagnosticBranches: [
    {
      title: "The fault appears about a minute into the cycle",
      observation:
        "Ignition succeeds, the burner runs, and the code arrives shortly after the firing rate settles down.",
      action:
        "Note the timing precisely against the published sequence, in which the furnace fires at 70 percent for 30 to 45 seconds and then drops to the minimum 35 percent rate. A fault that lands at that transition is a low-fire fault rather than an ignition fault.",
    },
    {
      title: "Stored history also contains amber capacity codes",
      observation:
        "Retrieving the error history shows amber codes about reduced heating capacity alongside the red pressure switch code.",
      action:
        "Read them together. Five amber flashes reports capacity reduced by a restriction in the combustion air or vent system, which points at the vent rather than at the switch, and above 4,000 feet the manual notes it can also indicate normal altitude derating.",
    },
    {
      title: "The furnace never reaches high fire before failing",
      observation:
        "Every cycle ends at or shortly after the drop to minimum input, and the furnace never ramps upward.",
      action:
        "Record the pattern and stop there. Whether the switch, its hose, or the airflow behind it is at fault requires measurement inside the burner compartment, which is service work.",
    },
  ],
  decisionTable: {
    caption: "Two flash codes about one switch, and what each one states",
    columns: ["Flash code", "Condition reported", "Switch state versus expectation"],
    rows: [
      ["Two red flashes", "Pressure switch closed with inducer pressure below setpoint", "Closed when it should be open"],
      ["Three red flashes", "Pressure switch open with inducer pressure above setpoint", "Open when it should be closed"],
      ["Five red flashes", "Rollout switch or condensate pressure switch open", "A different switch entirely"],
      ["Five amber flashes", "Capacity reduced by a combustion air or vent restriction", "Reported by the sensor, not the switch"],
    ],
  },
  figures: [
    {
      title: "Two devices watching the same airflow",
      description:
        "The furnace proves combustion airflow twice at the start of a cycle and then relies on one of them. Knowing which is primary is what makes the low-fire pattern readable.",
      nodes: [
        { label: "Pressure switch", detail: "On the inducer, proves flow at start" },
        { label: "Pressure sensor", detail: "On the board, the primary flow sensor" },
        { label: "Inducer response", detail: "Speeds up to hold combustion airflow" },
        { label: "Input derate", detail: "Reduces firing rate, then shuts off at minimum" },
      ],
    },
  ],
  sections: [
    {
      title: "The manual states which device is in charge",
      paragraphs: [
        "York describes the pressure switch as mounted on the draft inducer and monitoring flow through the vent system, closing at the beginning of each cycle once adequate combustion airflow is established. Then comes the sentence that makes this fault legible: this switch may be open under certain conditions when the burners are lit, and the pressure sensor is the primary flow sensor.",
        "That is an unusual thing for a manual to say, and it changes what an open switch during a burn actually means. The switch is a start-of-cycle proof, and the board watches airflow continuously through a separate sensor in the burner compartment near the combustion blower. A switch that opens at low fire is reporting the pressure it sees at that moment, not necessarily a failure of combustion airflow.",
        "The published ignition sequence puts a number on when that moment arrives. The inducer ramps up until airflow is proven by the pressure switch and by the pressure sensor, the ignitor heats for 17 to 20 seconds, the gas valve opens, the circulating blower starts on flame, and the furnace fires at 70 percent for 30 to 45 seconds before dropping to the minimum 35 percent rate. Low fire is where the cycle is heading, and it arrives less than a minute in.",
      ],
    },
    {
      title: "What a real vent restriction looks like on this furnace",
      paragraphs: [
        "The pressure sensor has its own escalating response, and it is worth knowing because it does not look like a pressure switch fault. York states that when the sensor detects a problem, the control speeds the combustion blower up to maintain adequate combustion airflow. If the blower is already at full speed, the control starts reducing the input to the furnace to keep combustion proper with the air available. If there is still not enough combustion air at the minimum 35 percent input rate, the control closes the gas valve and shuts the burners off.",
        "The conditions that sensor is watching for are listed: blockage of vent piping or the vent terminal, failure of the combustion air blower motor or wheel, and blockage of the combustion air piping or terminals. A furnace working through that sequence reports reduced capacity through the amber codes rather than the red pressure switch code.",
        "So a system that flashes five amber and then three red is telling a different story from one that flashes three red alone. The first has been managing an airflow restriction; the second has a switch that opened where the board expected it closed.",
      ],
    },
    {
      title: "Condensate and hose routing sit behind more of these than the switch itself",
      paragraphs: [
        "The installation manual pays specific attention to how the pressure switch hoses are handled. A loop is added to the vacuum hose, and the instruction is that all pressure switch hoses are routed so they prevent condensate entering the switch. Several of the cabinet configuration steps involve moving a pressure switch hose to a different position.",
        "That level of instruction exists because the failure it prevents is common enough to design around. Liquid in a hose changes what the switch senses without anything being wrong with the switch, the inducer or the vent, and the effect is largest where the pressure margin is smallest, which is low fire.",
        "The furnace also has a separate condensate pressure switch that shuts the burners off when the drain is blocked, and that one reports through five red flashes with the rollout switch. Keeping the two condensate-related paths distinct is part of reading this code correctly.",
      ],
    },
    {
      title: "Getting the stored history out before the visit",
      paragraphs: [
        "The control stores up to five error codes and keeps them through a power loss. Retrieval is through the button labelled LAST ERROR, and York notes that this function works only when there are no active thermostat signals, so any call for heating, cooling or continuous fan must be ended first. The codes replay from the most recent, with a two-second pause between each.",
        "Two green flashes means the memory holds nothing. Holding the button for more than five seconds clears the memory and the control confirms with three green flashes, which is worth knowing so nobody clears the record by holding the button a moment too long.",
        "Record the sequence and the timing before service arrives. The order in which amber capacity codes and the red pressure switch code appear is the difference between a vent conversation and a switch conversation, and it cannot be reconstructed afterwards.",
      ],
    },
  ],
  safeChecks: [
    "Watch a full cycle through the door view port and note how many seconds pass between ignition and the fault.",
    "Retrieve the stored error codes with no thermostat call active, and write them down in the order they replay.",
    "Check that the outdoor vent and combustion air terminals are clear of snow, leaves and nests from outside the building.",
    "Confirm the condensate drain is running freely, since a separate condensate pressure switch can shut the burners off.",
  ],
  professionalEscalation: [
    "Testing the pressure switch, its hoses and the pressure sensor means working inside the burner compartment on an energised appliance, which is service work.",
    "Any assessment of the vent system, combustion air piping or the inducer belongs to a qualified technician, and pressure switches must never be adjusted to allow operation.",
  ],
  serviceHandoff:
    "Report the full model and serial number, the stored error codes in replay order, the number of seconds from ignition to the fault, whether the furnace ever reaches higher firing rates, and the installation altitude. The altitude matters because the manual ties one amber capacity code to normal derating above 4,000 feet.",
  resetGuidance:
    "Do not clear the stored codes before the visit. Holding the retrieval button for more than five seconds erases the history, and that history is what separates a switch fault from a vent restriction on this furnace.",
  faqs: [
    {
      question: "Why does the fault only appear at low fire?",
      answer:
        "Minimum firing rate is where inducer speed and the pressure at the switch are lowest. York states that this switch may be open under certain conditions when the burners are lit, and that the board pressure sensor is the primary flow sensor.",
    },
    {
      question: "What is the difference between two and three red flashes?",
      answer:
        "Two red flashes reports the switch closed with inducer pressure below its setpoint, closed when it should be open. Three red flashes reports the switch open with pressure above the setpoint, open when it should be closed.",
    },
    {
      question: "Does this furnace have a pressure transducer?",
      answer:
        "It has a pressure sensor on the control board, in the burner compartment near the combustion blower, described as the primary flow sensor. It works alongside the pressure switch on the inducer rather than replacing it.",
    },
    {
      question: "How would a blocked vent show itself instead?",
      answer:
        "Through the sensor response: the control speeds the combustion blower, then reduces input, then closes the gas valve at the minimum rate. Reduced capacity from a vent or combustion air restriction is reported by an amber code.",
    },
    {
      question: "How do I read the stored error codes?",
      answer:
        "Press the LAST ERROR button with no thermostat call active. The control replays up to five codes from the most recent, and two green flashes means the memory is empty.",
    },
  ],
  sourceIds: ["york-yp9c-install", "york-affinity-furnaces"],
  relatedContent: [
    "/brands/york/",
    "/brands/york/yp9c-seven-red-flashes/",
    "/brands/york/yp9c-twelve-red-flashes/",
    "/brands/bryant/furnace-limit-switch-keeps-tripping/",
  ],
  glossaryTerms: ["error-code", "control-board", "static-pressure", "condensate-drain"],
  keywords: [
    "york yp9c 3 red flashes",
    "yp9c pressure switch open",
    "york furnace low fire fault",
    "yp9c pressure sensor",
    "york modulating furnace flash codes",
  ],
});
