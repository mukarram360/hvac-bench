import { publish } from "./publish";

/**
 * The bypass is the fact worth publishing. Somebody locked out of a thermostat
 * they own will otherwise pull it off the wall or cycle the breaker, and the
 * documented answer is a five-second hold on a button that is already in front
 * of them.
 */
export const traneXl824AccessRestrictions = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Trane XL824 access restrictions: four levels and a five-second hold",
  slug: "xl824-access-restrictions",
  path: "/brands/trane/xl824-access-restrictions/",
  description:
    "The XL824 locks after one minute of inactivity when a restriction is set. What each of the four levels allows, and the documented way back into the menu.",
  articleType: "how-to",
  brand: "trane",
  equipmentType: "controls-thermostats",
  productFamily: "XL824, XL850, and XL1050 wireless smart thermostats",
  models: ["XL824", "XL850", "XL1050"],
  problemType: "thermostat-access-restriction",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Hold the Menu button on the thermostat for five seconds and the menu appears, whichever restriction level is set. Restrictions re-enable after one minute of inactivity unless the level is changed to None.",
  scopeNotice:
    "Trane publishes this for the XL824, XL850, and XL1050 wireless thermostats. Restrictions set at the thermostat govern what someone standing in front of it can change; what the Trane Home account and app can do is a separate question and is not covered by these levels.",
  layout: ["steps", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The thermostat will not respond to anything except the temperature arrows, or to nothing at all.",
    "The menu was reachable a minute ago and now is not.",
    "Setpoint changes are being refused beyond a narrow band around the current setting.",
  ],
  causes: [
    "Trane locks the screen after one minute of inactivity whenever a restriction level other than None is set.",
    "Each level removes a different group of controls, so the same thermostat behaves differently depending on which was chosen.",
  ],
  steps: [
    {
      name: "Establish that it is a restriction and not a fault",
      text: "A restricted thermostat still shows the indoor temperature, the system mode, the date and time, and the network status at the highest level. A screen showing nothing at all is a different problem and belongs with the power question rather than this page.",
    },
    {
      name: "Hold the Menu button for five seconds",
      text: "Trane's documented bypass is holding Menu on the thermostat for five seconds, after which the menu appears. This is the whole of it: no code, no app, and no removing the control from the wall.",
    },
    {
      name: "Navigate to the restriction setting",
      text: "From the menu, press Settings, select Screen, then choose Access Restrictions. That is the same path used to set the level in the first place, and it is where the level is changed.",
    },
    {
      name: "Choose the level and apply it",
      text: "Select the level you want and press Apply to save. Choosing None removes the restriction and, with it, the one-minute lock, so the thermostat stops re-locking behind you.",
    },
    {
      name: "Set the setpoint band if you chose Medium",
      text: "Medium limits how far the setpoint can move, and the limit is adjustable. Trane describes a button to the left of Apply that reports the current setpoint limit; tap it to change the limit and repeat until it reads what you want.",
    },
    {
      name: "Expect the lock to return if you left a restriction on",
      text: "Unless the level is None, restrictions re-enable after one minute of inactivity. That is the documented behaviour rather than a fault, and it means any further changes need the five-second hold again.",
    },
  ],
  decisionTable: {
    caption: "What each restriction level leaves available at the thermostat",
    columns: ["Level", "What is still possible", "What is removed"],
    rows: [
      [
        "None",
        "Everything, including setpoints, settings, and schedules",
        "Nothing, and the one-minute lock does not apply",
      ],
      [
        "Low",
        "System mode, fan mode, and setpoints",
        "Menu access, system options, and adjusting or overriding schedules",
      ],
      [
        "Medium",
        "The same as Low, with setpoints limited to a band of two to five degrees",
        "Everything Low removes, plus free movement of the setpoint",
      ],
      [
        "High",
        "Viewing indoor temperature, system mode, date and time, and network status",
        "All changes at the thermostat",
      ],
    ],
  },
  figures: [
    {
      title: "Where each level draws the line",
      description:
        "The levels are cumulative, and each one takes away a further group. Knowing which group is missing is how you identify the level that was set without opening the menu.",
      nodes: [
        { label: "Schedules and menu", detail: "The first group removed, at Low" },
        { label: "Free setpoint movement", detail: "Removed at Medium, replaced by a limited band" },
        { label: "System and fan mode", detail: "Still available at Low and Medium" },
        { label: "Everything", detail: "Removed at High, leaving a display only" },
      ],
    },
  ],
  sections: [
    {
      title: "Why the thermostat keeps locking itself",
      paragraphs: [
        "The one-minute inactivity lock is what makes a restriction stick. Without it, anybody who found the menu once would keep it open for the rest of the day. With it, the control returns to its restricted state a minute after the last touch, which is why somebody who walked away mid-change comes back to find the menu gone.",
        "It also explains a particular kind of confusion. A person who has the five-second hold explained to them, uses it successfully, then takes a phone call and returns, will find the thermostat locked again and conclude the hold did not work. It did. The minute elapsed.",
      ],
    },
    {
      title: "Choosing a level for the reason you actually have",
      paragraphs: [
        "The four levels map onto different problems. Low suits a household where the schedule keeps being overridden but people should still be able to switch between heating and cooling. Medium suits a rental or a shared office where a few degrees either way is reasonable and a swing to the extremes is not. High suits a location where the thermostat should display and nothing more.",
        "Medium is the one worth thinking about, because the band is adjustable between two and five degrees. Two degrees permits less setpoint movement than five, so the chosen band should reflect how much local adjustment the site intends to allow. Trane puts that control next to the Apply button rather than in a separate menu, which is easy to miss the first time.",
      ],
    },
    {
      title: "What a restriction does not do",
      paragraphs: [
        "It does not lock the system out of the app or the Trane Home account. These levels govern what someone standing at the thermostat can change, so a restriction set for a holiday let does not stop an owner adjusting the same system remotely.",
        "It also does not survive being set to None by anyone who knows the five-second hold. This is a deterrent against casual adjustment rather than a security control, and it is worth being clear about that before relying on it in a property where the occupants have a reason to want the setting changed.",
      ],
    },
  ],
  safeChecks: [
    "Confirm the screen is showing indoor temperature and system status rather than being blank, which separates a restriction from a power problem.",
    "Hold the Menu button for the full five seconds rather than tapping it repeatedly.",
    "Note which level is selected before changing it, so it can be put back the way somebody intended.",
  ],
  professionalEscalation: [
    "A thermostat that does not respond to the documented five-second hold and shows no display is a power or wiring question for a technician rather than a settings one.",
    "Removing the control from the wall to regain access is not the documented route and risks the connection behind it.",
  ],
  serviceHandoff:
    "If the hold does not work, tell the technician exactly what the screen shows, whether the temperature reading is live, and whether the system is still heating or cooling on its own. A restricted thermostat and a failed one look similar from a distance and are separated by what remains on the display.",
  faqs: [
    {
      question: "How do I unlock a Trane XL824 thermostat?",
      answer:
        "Hold the Menu button on the thermostat for five seconds and the menu appears. Trane publishes that as the temporary bypass for every restriction level, and no code or app is involved.",
    },
    {
      question: "Why does the thermostat lock again after a minute?",
      answer:
        "Because a set restriction re-enables after one minute of inactivity. That is documented behaviour rather than a fault, and it stops unless the restriction level is changed to None.",
    },
    {
      question: "What is the setpoint limit on the Medium level?",
      answer:
        "Medium keeps the Low restrictions and limits setpoint movement to a band of two to five degrees. The limit is adjustable from a button to the left of Apply, which reports the current value when you tap it.",
    },
    {
      question: "Do restrictions stop the app changing the temperature?",
      answer:
        "These levels govern what can be changed at the thermostat itself. Control through a Trane Home account is a separate matter and is not covered by the access restriction setting.",
    },
  ],
  sourceIds: ["trane-access-restrictions", "trane-xl824-user-guide", "trane-xl824-support"],
  relatedContent: [
    "/brands/trane/",
    "/brands/trane/xl824-thermostat-reboot/",
    "/mini-split-remote-not-working/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  glossaryTerms: ["thermostat", "c-wire", "control-board"],
  keywords: [
    "trane xl824 unlock",
    "trane thermostat access restrictions",
    "xl824 screen locked",
    "trane xl850 hold menu 5 seconds",
    "trane thermostat setpoint limit",
  ],
});
