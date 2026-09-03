import { publish } from "./publish";

export const lennoxIcomfortAlerts103139 = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Lennox iComfort alerts 10, 31 and 39 that keep coming back: tracing intermittent faults without swapping parts",
  slug: "icomfort-alerts-10-31-39",
  path: "/brands/lennox/icomfort-alerts-10-31-39/",
  description:
    "Three Lennox alert codes that arrive together describe three different things. What each reports, why two clear themselves, and where the intermittent cause hides.",
  articleType: "error-code",
  brand: "lennox",
  equipmentType: "controls-thermostats",
  productFamily:
    "Lennox communicating systems on iComfort S30, E30 and compatible displays, covering furnaces, air handlers, outdoor units, equipment interface modules and iHarmony zoning",
  models: [
    "Lennox iComfort S30 and E30 communicating thermostats",
    "Lennox communicating furnaces, air handlers and outdoor units on the same bus",
    "Lennox iHarmony damper control module and equipment interface module",
  ],
  errorCode: "10, 31, 39",
  problemType: "intermittent-communication",
  symptomFamily: "communication-fault",
  directAnswer:
    "Only one of the three is a communication code. Alert 31 reports that a component has not communicated with the thermostat for more than three minutes, and Lennox documents it as clearing once communication is restored. Alert 10 reports that an unknown device was found on the bus and needs configuring, not repairing. Alert 39 is a consequence: the system could not turn cooling on for more than 45 minutes, so it takes itself off-line for 60 minutes and retries. Replacing a control to chase 39 replaces the wrong thing.",
  scopeNotice:
    "These entries come from the Lennox residential communicating systems alert table used with iComfort S30 and E30 displays. Lennox equipment running on a conventional 24 volt thermostat does not use this table, and legacy control-board flash patterns on the same appliance carry unrelated meanings.",
  symptoms: [
    "The same alert numbers reappear after each reset, sometimes days apart, with the system running normally in between.",
    "A seven-segment display on the furnace, air handler or outdoor control is showing two horizontal lines instead of a code.",
    "Cooling stops for around an hour and then returns without anyone touching the thermostat.",
  ],
  causes: [
    "A communicating component dropping off the bus for longer than the documented three-minute window, then rejoining before anyone reaches the equipment.",
    "A float switch wired in series with the R terminal opening on a slow condensate drain, which interrupts the component rather than the drain.",
    "A device added or replaced since the original configuration, which the thermostat treats as unknown and places into soft disable.",
    "Supply voltage dips or an overloaded transformer, which Lennox associates with components resetting themselves.",
  ],
  diagnosticBranches: [
    {
      title: "Alert 31 is present and the equipment now works",
      observation:
        "The alert list holds a lost communication entry, but every component responds and the system is running when you look at it.",
      action:
        "This is the documented behaviour rather than a stale message. Lennox clears alert 31 once communication is restored, so the entry is a record that a component was absent for over three minutes. Log the timestamp and outdoor conditions instead of resetting.",
    },
    {
      title: "A control shows two horizontal lines on its display",
      observation:
        "The furnace, air handler or outdoor control shows a double horizontal line where a code or status character would normally sit.",
      action:
        "Lennox uses that pattern to indicate the soft disable state, which the thermostat commands when it finds a control it does not recognise. The fix is reconfiguration through the installer control center reached from advanced settings, not a replacement control.",
    },
    {
      title: "Cooling drops out for about an hour at a time",
      observation:
        "The system stops cooling, stays off for roughly an hour, and then restarts by itself with no intervention.",
      action:
        "That interval matches alert 39, which Lennox raises when cooling has not started for more than 45 minutes and which takes the system off-line for 60 minutes before retrying. Look for the alert that prevented cooling from starting rather than at the timer.",
    },
  ],
  decisionTable: {
    caption: "What each alert reports and how Lennox clears it",
    columns: ["Alert", "What the control is reporting", "How it clears"],
    rows: [
      ["10", "An unknown device was found on the communication bus", "By reconfiguring the system from the installer control center"],
      ["31", "A component was silent for more than three minutes", "By itself once communication is restored"],
      ["39", "Cooling did not start within 45 minutes of the demand", "By itself once the underlying issue is gone"],
    ],
  },
  figures: [
    {
      title: "Where an intermittent fault leaves its marks",
      description:
        "Four surfaces record something during one episode, and only two of them survive until a technician arrives. Knowing which is which decides what to photograph first.",
      nodes: [
        { label: "Home screen", detail: "Shows critical alerts as they happen" },
        { label: "Notification menu", detail: "Holds moderate entries as well" },
        { label: "Equipment display", detail: "Carries the soft disable indication" },
        { label: "Nothing at all", detail: "Where a self-cleared alert leaves no trace" },
      ],
    },
  ],
  sections: [
    {
      title: "Two of these are records, and one is a configuration instruction",
      paragraphs: [
        "Lennox splits its alerts by priority as well as by subject. Critical entries reach the home screen and both alert buttons, moderate entries appear only under the installer alert button, and minor entries are described as internal and are not sent to the homeowner or the installing contractor. All three codes on this page are critical, which is why they surface together and read as one event even though they are not.",
        "Alert 31 names the component that went quiet, because the table substitutes the real device name wherever the placeholder appears. The troubleshooting text asks for connections and voltages to be checked and for wires to be checked for continuity, which is service work. What it also asks for is easy to skim past and matters more for an intermittent fault: check the condensate line if a float switch is fitted to the air handler drain pan, because that switch is wired in series with the R terminal, and check whether a freezestat is installed.",
        "That last instruction explains a whole class of faults that look electrical and are not. A drain that empties slowly lifts the float, the switch opens the circuit, the component stops talking, and by the time anyone arrives the pan has drained and everything works. The alert history holds a communication entry and the wiring is intact.",
      ],
    },
    {
      title: "Alert 39 is an outcome, so it cannot be repaired directly",
      paragraphs: [
        "The entry states its own logic. The system has not been able to turn cooling on for more than 45 minutes, so it goes off-line for 60 minutes and attempts to restart itself. Lennox tells the technician to run diagnostics from the installer control center, verify that the reported operation matches what the equipment is actually doing, and check for other alert codes preventing the system from operating.",
        "The heating side carries its own equivalent entry, which is worth knowing because a house that loses both modes intermittently produces two outcome codes and no additional information. Neither one identifies the component that failed to respond.",
        "So the order of reading matters. Work from the entries that name a device to the entries that describe a result, and treat a self-clearing outcome code as confirmation that something upstream stopped answering.",
      ],
    },
    {
      title: "Why parts-swapping keeps failing on this pattern",
      paragraphs: [
        "Every code here is documented as self-clearing or as requiring a configuration step. Swapping a control removes the symptom for as long as the intermittent cause stays quiet, and Lennox then raises alert 10 against the new device until the system is reconfigured, which reads to an owner as a new fault caused by the repair.",
        "The nearby entries point at the conditions worth measuring first. Lennox associates a component resetting itself with power connections, transformer amperage draw and the 24 volt supply at the device, and its subnet controller entry warns that a miswired component can display a false component code, recommending that wiring be disconnected and communication checked one device at a time.",
        "Between those two notes lies the honest position for an intermittent fault: the alert history tells you which device went quiet and when, and only measurement at the device tells you why. Collecting timestamps across several occurrences is worth more than any single screenshot, because a pattern tied to weather, to condensate, or to a particular time of day is the thing a technician cannot recover after the fact.",
      ],
    },
  ],
  safeChecks: [
    "Record the date, time and outdoor conditions each time an alert appears, and keep the list rather than clearing it.",
    "Look for standing water or a slow drain at the indoor unit, because a float switch in series with the R terminal interrupts communication when it lifts.",
    "Photograph any seven-segment display on the equipment, including a double horizontal line, before power is interrupted.",
  ],
  professionalEscalation: [
    "Voltage and continuity measurement at a communicating control is energised low-voltage work for a qualified technician.",
    "Reconfiguration through the installer control center, and any isolation of devices on the bus one at a time, belongs to the installing contractor.",
  ],
  serviceHandoff:
    "Provide the model numbers of every communicating component, the alert list with the device names Lennox substitutes into each entry, the timestamps for at least two occurrences, and whether the indoor drain has ever backed up. That combination separates a wiring fault from a float switch doing its job.",
  resetGuidance:
    "Lennox documents a power cycle only if alert 31 persists. Cycling power on a fault that has already self-cleared removes the timestamps that make an intermittent pattern visible.",
  faqs: [
    {
      question: "Why does alert 31 disappear before the technician arrives?",
      answer:
        "Because Lennox clears it once communication is restored. The entry records that a component stayed silent for more than three minutes, so a system that is working when inspected is consistent with the alert being genuine.",
    },
    {
      question: "What do two horizontal lines on the equipment display mean?",
      answer:
        "That is the soft disable indication. The thermostat sends an unrecognised control into soft disable until it is configured or removed, and the state is cleared by reconfiguring the system rather than by replacing hardware.",
    },
    {
      question: "How long does the system stay off after a no cooling alert?",
      answer:
        "Lennox states the system goes off-line for 60 minutes and then attempts to restart itself, after cooling has failed to start for more than 45 minutes.",
    },
    {
      question: "Can a blocked condensate drain cause a communication alert?",
      answer:
        "It can when a float switch is fitted to the air handler drain pan, because that switch is wired in series with the R terminal. Lennox lists checking the condensate line among the troubleshooting steps for the lost communication alert.",
    },
    {
      question: "Does a new alert 10 mean the replacement control is faulty?",
      answer:
        "No. Alert 10 reports that the thermostat found a device it does not recognise, which is expected after a component is added or replaced. It clears by reconfiguring the system.",
    },
  ],
  sourceIds: ["lennox-communicating-service", "lennox-slp98-service"],
  relatedContent: [
    "/brands/lennox/",
    "/brands/lennox/xp17-icomfort-alert-411/",
    "/brands/lennox/icomfort-replaced-with-ecobee-or-nest/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  glossaryTerms: ["error-code", "control-board", "thermostat", "float-switch"],
  keywords: [
    "lennox icomfort alert 31",
    "lennox alert code 10",
    "lennox alert code 39",
    "icomfort lost communication",
    "lennox intermittent communication fault",
  ],
});
