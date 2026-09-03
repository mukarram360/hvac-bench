import { publish } from "./publish";

export const daikinOnePlusGeofencingAwayMode = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Daikin One+ geofencing sees you leave but away mode never starts: separating detection from action",
  slug: "one-plus-geofencing-away-mode",
  path: "/brands/daikin/one-plus-geofencing-away-mode/",
  description:
    "Crossing the radius is one event and away mode starting is another. What Daikin puts in the app, what stays on the thermostat, and why a correct departure can still change nothing.",
  articleType: "troubleshooting",
  brand: "daikin",
  equipmentType: "controls-thermostats",
  productFamily:
    "Daikin One+ smart thermostat with geofencing enabled through the paired mobile application",
  models: [
    "Daikin One+ smart thermostat",
    "Daikin One+ paired with the mobile application on a phone carrying the geofence",
  ],
  problemType: "geofencing-away",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Two different things have to happen, and they live in two different places. The phone leaving the radius is a mobile application event, because Daikin states that geofencing is enabled there and that its settings must be configured in the mobile application. Away mode is a thermostat state with its own on and off selection and its own heating and cooling setpoints. If the departure is detected but nothing changes at the equipment, the failure is between those two, or the away setpoints are not far enough from the current ones to produce any visible action.",
  scopeNotice:
    "This describes the Daikin One+ away screen and the geofencing feature offered through its mobile application. Away behaviour on other Daikin controls, and third-party home automation that also sets the thermostat back, work differently and are outside this page.",
  symptoms: [
    "The phone application shows the home as left while the thermostat holds its normal setpoints.",
    "Away mode activates on some departures and not on others.",
    "Away appears to activate but room temperature does not drift, so nothing seems to have happened.",
  ],
  causes: [
    "Away left in the off state on the thermostat, so there is no mode for a geofence event to switch into.",
    "Away setpoints set close to the comfort setpoints, which makes a correct switch produce no equipment change.",
    "Geofence settings that were never completed in the mobile application, which Daikin identifies as where they must be configured.",
    "Location permission or background activity on the phone that stops the application seeing the boundary crossing in time.",
  ],
  diagnosticBranches: [
    {
      title: "The thermostat away screen shows the state as off",
      observation:
        "The away screen displays its current state, and the drop-down selection is set to off.",
      action:
        "Set that selection before troubleshooting the geofence. The away screen carries its own on and off state, so a departure has nothing to switch into while it is off.",
    },
    {
      title: "Away is on and the setpoints look close to normal",
      observation:
        "Away shows as active but the heating and cooling values on the away screen are within a degree or two of the comfort settings.",
      action:
        "Widen the away comfort range on that screen and watch a full departure again. A mode that shifts the setpoint by a degree or two is indistinguishable from a mode that never started.",
    },
    {
      title: "Away works on long trips but not short ones",
      observation:
        "Away engages when the household is gone for hours, and does not engage on shorter absences.",
      action:
        "Look at the radius and at the phone rather than at the thermostat. Detection depends on the boundary in the mobile application and on the phone reporting its position, so a short trip inside the radius is a correct non-event.",
    },
    {
      title: "One person triggers it and another does not",
      observation:
        "Departures by one household member change the thermostat while departures by another do not.",
      action:
        "Compare the mobile application setup on each phone, including location permission. The geofence lives on the phone side, so different phones can behave differently with identical thermostat settings.",
    },
  ],
  decisionTable: {
    caption: "Which side of the system owns each part of the behaviour",
    columns: ["Element", "Owned by", "How it is checked"],
    rows: [
      ["The radius around the home", "The mobile application", "Open the geofence settings on the phone"],
      ["Detection of the boundary crossing", "The phone and its permissions", "Check location access and background activity"],
      ["Away on or off", "The thermostat away screen", "Read the state shown on that screen"],
      ["Away heating and cooling setpoints", "The thermostat away screen", "Read the values and the comfort range"],
    ],
  },
  figures: [
    {
      title: "Four things that all have to line up",
      description:
        "A departure only changes the temperature when every stage holds. Testing them separately is what turns a vague report into something a support contact can act on.",
      nodes: [
        { label: "Phone crosses the radius", detail: "Detected by the application" },
        { label: "Application signals away", detail: "Requires permission and background use" },
        { label: "Away state is on", detail: "Selected on the thermostat screen" },
        { label: "Away setpoints differ", detail: "Otherwise nothing at the equipment moves" },
      ],
    },
  ],
  sections: [
    {
      title: "Away is a mode with its own numbers, not a switch",
      paragraphs: [
        "The away screen on the One+ shows the current state and the away cooling and heating setpoints used when away is on. The state is selected from a drop-down, and the setpoints are adjusted by dragging the numbers or the comfort range up and down. Both halves are editable and both matter.",
        "That structure explains a common false negative. Somebody enables geofencing, leaves, and comes back to a house at the same temperature, and concludes the feature is broken. If the away setpoints were left near the comfort setpoints, the mode may have engaged exactly as intended and simply had nothing to do.",
        "Checking the state and the numbers on that one screen resolves more of these reports than anything on the phone does, and it takes less time.",
      ],
    },
    {
      title: "The geofence lives on the phone, so it fails like phone software",
      paragraphs: [
        "Daikin states that enabling geofencing in the mobile application will automatically switch to away mode when outside the radius, and adds that the settings must be configured in the mobile application. The thermostat is the thing being switched, not the thing doing the detecting.",
        "Everything that governs whether a phone notices a boundary crossing therefore applies: whether location access is granted, whether the application is allowed to work in the background, and whether the phone was asleep at the moment of crossing. None of that is visible from the thermostat, which is why the wall control cannot tell you why nothing happened.",
        "It also explains inconsistency between household members. Each phone carries its own permissions, so one person can trigger away reliably while another never does, with the thermostat configured identically throughout.",
      ],
    },
    {
      title: "Testing it in a way that produces an answer",
      paragraphs: [
        "Run the test in two halves rather than one. First set away on manually at the thermostat and confirm that the equipment responds and the temperature moves, which proves the mode does something. Then leave the house and watch whether the state changes on its own, which tests only the detection.",
        "Separating the halves is what turns a vague report into a repairable one. A manual test that changes nothing points at the setpoints. A manual test that works while departures do nothing points at the mobile application and the phone.",
        "Keep the schedule in view while doing this. The thermostat also runs scheduled setpoints, and a schedule change arriving near the same time as a departure makes the two hard to tell apart from the temperature alone.",
      ],
    },
  ],
  safeChecks: [
    "Open the away screen and read both the on and off state and the away heating and cooling setpoints.",
    "Set away on manually and confirm the equipment responds, before testing any departure.",
    "Check that the mobile application has location access and is permitted to run in the background on each phone.",
    "Note whether a scheduled setpoint change falls near the time of departure, since that can mask or mimic away.",
  ],
  professionalEscalation: [
    "If away works manually and the geofence still does nothing after the phone settings are confirmed, that is an application question for manufacturer support rather than an equipment fault.",
    "Changes to thermostat commissioning or equipment configuration belong to the installing contractor.",
  ],
  serviceHandoff:
    "For a support contact, describe the result of the manual away test, the away setpoints in use, which phones are configured for geofencing, and whether the state changes on the thermostat screen when a departure is detected. Those four answers separate a thermostat setting from an application problem.",
  faqs: [
    {
      question: "Where is Daikin One+ geofencing configured?",
      answer:
        "In the mobile application. Daikin states that enabling geofencing there switches the thermostat to away mode when outside the radius, and that the settings must be configured in the application.",
    },
    {
      question: "Why did nothing change when away engaged?",
      answer:
        "Away has its own heating and cooling setpoints on the thermostat away screen. If those sit close to the comfort setpoints, the mode can engage correctly and still call for no change.",
    },
    {
      question: "Can away be turned on without leaving the house?",
      answer:
        "Yes. The away screen carries an on and off selection, which makes a manual test possible and separates the mode itself from the detection that triggers it.",
    },
    {
      question: "Why does it work for one phone and not another?",
      answer:
        "The geofence is held by the mobile application on each phone, so location permission and background activity differ between devices even when the thermostat is configured identically.",
    },
    {
      question: "Does the schedule override away mode?",
      answer:
        "The thermostat runs scheduled setpoints as well as away, so a schedule change close to a departure can make it difficult to tell which one moved the temperature. Check the timing of both.",
    },
  ],
  sourceIds: ["daikin-one-commissioning", "daikin-one-resources"],
  relatedContent: [
    "/brands/daikin/",
    "/brands/daikin/one-plus-software-update-not-arriving/",
    "/brands/ecobee/calibrating-heat-cool-disabled/",
    "/brands/honeywell-home/t6-pro-wait-message/",
  ],
  glossaryTerms: ["thermostat", "commissioning", "delta-t"],
  keywords: [
    "daikin one+ geofencing",
    "daikin one away mode",
    "daikin thermostat geofence not working",
    "daikin one+ away setpoints",
    "daikin one app geofencing",
  ],
});
