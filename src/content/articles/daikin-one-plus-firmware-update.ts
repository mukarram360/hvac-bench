import { publish } from "./publish";

export const daikinOnePlusFirmwareUpdate = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Daikin One+ will not update: why a connected thermostat can sit on an older software version",
  slug: "one-plus-software-update-not-arriving",
  path: "/brands/daikin/one-plus-software-update-not-arriving/",
  description:
    "Daikin documents the One+ update as automatic once Wi-Fi is configured, with no manual trigger on the screen. What that means when the version number stays where it was.",
  articleType: "troubleshooting",
  brand: "daikin",
  equipmentType: "controls-thermostats",
  productFamily:
    "Daikin One+ smart thermostat commissioned on unitary equipment and connected to a home wireless network",
  models: [
    "Daikin One+ smart thermostat",
    "Daikin One+ paired with unitary equipment selected during commissioning",
  ],
  problemType: "software-update",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "No update button exists to press, and that is the point. Daikin describes the arrangement plainly: with Wi-Fi configured, the system can check the software version and update software to the latest version automatically. The thermostat is therefore either eligible and waiting, or it is not eligible because one of the network conditions Daikin publishes is not met. The version shown on the learn more screen is the only local evidence of which case you are in.",
  scopeNotice:
    "This covers the Daikin One+ thermostat itself, commissioned for unitary equipment. Software updates for connected HVAC equipment, and for Daikin controls sold under other names, follow their own paths and are not described here.",
  symptoms: [
    "The thermostat shows as connected in the app while its version number has not changed for a long period.",
    "A feature described in release notes is missing from the thermostat menus.",
    "The screen offers no way to check for or start an update.",
  ],
  causes: [
    "A wireless network that is not password protected, which Daikin states is a requirement.",
    "A router presenting no network the thermostat can join, since Daikin notes compatibility with routers that support 2.4 GHz alongside 5 GHz.",
    "A wireless link that associates but does not reach the internet, so the version check cannot complete.",
    "Commissioning that was never carried through all five setup steps, leaving the communication step incomplete.",
  ],
  diagnosticBranches: [
    {
      title: "The thermostat reports a network but the app is unreliable",
      observation:
        "The screen shows a wireless connection while the app loses the thermostat or shows stale information.",
      action:
        "Treat the connection as unproven rather than working. An update check needs a route to the internet, and a link that associates without passing traffic looks identical on the thermostat screen.",
    },
    {
      title: "The home network was changed after installation",
      observation:
        "The router, the network name or the security settings have changed since the thermostat was commissioned.",
      action:
        "Rejoin the network from the communication settings. Daikin requires the wireless router to be password protected, so a network rebuilt as open leaves the thermostat unable to satisfy the documented condition.",
    },
    {
      title: "The version has not moved for a long time on a healthy connection",
      observation:
        "The learn more screen shows an older version while the network is confirmed good and the app works normally.",
      action:
        "Record the exact version string and the date. Daikin publishes no user-initiated update action on the thermostat, so the useful next step is asking the installing contractor or manufacturer support whether that version is current for your model.",
    },
  ],
  decisionTable: {
    caption: "Conditions Daikin attaches to automatic updating",
    columns: ["Condition", "Where it is set", "What fails without it"],
    rows: [
      ["Wi-Fi configured on the thermostat", "Communication step during setup", "The version check cannot run"],
      ["Router protected with a password", "The router", "The documented requirement is unmet"],
      ["A 2.4 GHz network available", "The router", "The thermostat may not join at all"],
      ["Setup completed and reviewed", "The five-step commissioning flow", "Configuration may be incomplete"],
    ],
  },
  figures: [
    {
      title: "The path a software version has to travel",
      description:
        "Each stage is owned by something different, and only the last one is visible on the thermostat screen. That is why a version that has not moved is hard to interpret from the wall.",
      nodes: [
        { label: "Release", detail: "Decided by the manufacturer" },
        { label: "Internet path", detail: "Provided by the home connection" },
        { label: "Protected 2.4 GHz link", detail: "Required by the thermostat" },
        { label: "Learn more screen", detail: "Where the version is displayed" },
      ],
    },
  ],
  sections: [
    {
      title: "Where the version number lives, and why to write it down",
      paragraphs: [
        "Daikin puts the thermostat version on the learn more screen reached from the welcome flow, and the same commissioning material notes that setup options from that screen include a factory reset. Those two facts sitting together is a good reason to read carefully rather than tap experimentally.",
        "Write the version string down with the date. A single reading tells you nothing; two readings a few weeks apart tell you whether the automatic mechanism is working at all. That is the only measurement available locally, and it is worth more than any impression of whether the thermostat feels current.",
        "The equipment software version is a separate matter from the thermostat version. The commissioning flow shows the equipment type selected at start up, and equipment updates follow their own route, so a thermostat that has updated does not imply that anything else has.",
      ],
    },
    {
      title: "The network conditions are specific, and two of them are easy to break",
      paragraphs: [
        "Daikin sets out three things about the wireless connection during the communication step. The home network is selected from a search, the router must be password protected, and compatibility is described for 5 GHz routers that support 2.4 GHz. Read together, the thermostat expects a protected network with a 2.4 GHz presence.",
        "Two household changes break those conditions without anyone noticing. Replacing a router and rebuilding the network without security satisfies nobody, and moving to a name that broadcasts only on 5 GHz leaves the thermostat with nothing to join. In both cases the thermostat may still show its last known state for a while, which delays the connection between cause and symptom by days.",
        "The commissioning flow itself is the third place things stall. Daikin describes five steps covering communication, personalization, equipment setup, system optimization and preferences, and states that all steps must be completed and reviewed before setup is finished. A flow abandoned partway leaves settings in an indeterminate state.",
      ],
    },
    {
      title: "What to do when everything checks out and the version still holds",
      paragraphs: [
        "At that point the honest answer is that the release side is not visible from the thermostat. Daikin documents the update as automatic and does not document a user-facing check-now action, so a connected thermostat on an older version is consistent with waiting rather than with failing.",
        "The productive move is to stop experimenting and start asking. The installing contractor can see the system and knows which version the model should be carrying, and manufacturer support can confirm whether a version is current. Give them the model, the version string, the date you read it, and confirmation that the thermostat is on a protected network with a 2.4 GHz presence.",
        "Avoid the factory reset as an update attempt. It is offered from the same screen that shows the version, it undoes commissioning that was completed in five reviewed steps, and nothing in the published material connects it to software delivery.",
      ],
    },
  ],
  safeChecks: [
    "Read and write down the version string from the learn more screen, with the date you read it.",
    "Confirm the thermostat is joined to a password-protected network that has a 2.4 GHz presence.",
    "Check that another device on the same network can reach the internet, not only the local router.",
    "Repeat the version reading after a few weeks before concluding the update mechanism has stalled.",
  ],
  professionalEscalation: [
    "Recommissioning the thermostat, or any change to equipment configuration, belongs to the installing contractor.",
    "Confirming whether a version is current for a specific model is a question for the manufacturer or the installing contractor rather than something the thermostat can answer.",
  ],
  serviceHandoff:
    "When contacting the installing contractor or manufacturer support, supply the thermostat model, the exact version string with the date it was read, the equipment type selected during commissioning, and confirmation that the network is protected and has a 2.4 GHz band. That prevents the conversation restarting at the router.",
  faqs: [
    {
      question: "Is there a way to force a Daikin One+ update?",
      answer:
        "Daikin documents the process as automatic once Wi-Fi is configured, and publishes no user-initiated update action on the thermostat. A connected thermostat on an older version is waiting rather than failing.",
    },
    {
      question: "Does the thermostat need a 2.4 GHz network?",
      answer:
        "Daikin describes compatibility with 5 GHz routers that also support 2.4 GHz, so a network with a 2.4 GHz presence is what the thermostat expects to find.",
    },
    {
      question: "Will an open Wi-Fi network work?",
      answer:
        "The commissioning material states that the wireless router must be password protected, so an unsecured network does not meet the documented condition.",
    },
    {
      question: "Where is the software version shown?",
      answer:
        "On the learn more screen reached from the welcome flow. The same screen offers setup options including a factory reset, so read rather than tap.",
    },
    {
      question: "Will a factory reset bring the update through?",
      answer:
        "Nothing in the published material connects a factory reset to software delivery, and a reset undoes a five-step commissioning process that has to be completed and reviewed again.",
    },
  ],
  sourceIds: ["daikin-one-commissioning", "daikin-one-resources"],
  relatedContent: [
    "/brands/daikin/",
    "/brands/daikin/one-plus-geofencing-away-mode/",
    "/brands/daikin/malfunction-code-letters/",
    "/brands/nest/heat-pump-balance/",
  ],
  glossaryTerms: ["thermostat", "commissioning", "control-board"],
  keywords: [
    "daikin one+ firmware update",
    "daikin one+ software version",
    "daikin one thermostat not updating",
    "daikin one+ wifi requirements",
    "daikin one+ ota update",
  ],
});
