import { publish } from "./publish";

/**
 * Two digits on an indoor display that mean pairing rather than failure. This
 * page exists because the same characters look exactly like a fault code, and
 * a reader who searches them will find fault-code tables from other brands
 * before they find the setup guide that put them there.
 */
export const friedrichWifi77Display = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Friedrich 77 on the display is Wi-Fi pairing, not a fault",
  slug: "wifi-77-display",
  path: "/brands/friedrich/wifi-77-display/",
  description:
    "During FriedrichGo setup the indoor unit shows 77 and beeps five times to confirm pairing mode. It is a documented setup state, not an error code.",
  articleType: "how-to",
  brand: "friedrich",
  equipmentType: "ductless-mini-split",
  productFamily: "Floating Air Pro and Floating Air Premier with built-in Wi-Fi",
  models: ["Floating Air Pro indoor units", "Floating Air Premier indoor units"],
  problemType: "wifi-pairing",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Seventy-seven on the indoor display during app setup is the pairing state. Friedrich's setup guide has you press Left-Right Swing on the remote six times in a row, and confirms success by 77 appearing on the indoor unit, five short beeps, or both.",
  scopeNotice:
    "This is the sequence Friedrich publishes for Floating Air Pro and Premier indoor units with built-in Wi-Fi. Friedrich publishes separate setup guides for its Chill Premier and Unifit room products, and 77 appearing on equipment from another manufacturer has nothing to do with this.",
  layout: ["steps", "decisionTable", "figures", "sections", "serviceHandoff"],
  symptoms: [
    "The indoor display is showing 77 and nobody knows whether the unit has faulted.",
    "The FriedrichGo app will not find the unit during setup.",
    "The app was working and has stopped seeing the air conditioner.",
  ],
  causes: [
    "Friedrich uses 77 on the indoor display to confirm the unit has entered access point pairing mode during Wi-Fi setup.",
    "The app is documented as working on 2.4 gigahertz networks, so a 5 gigahertz selection will not complete setup.",
  ],
  steps: [
    {
      name: "Confirm the network before touching the unit",
      text: "Friedrich states the setup needs a 2.4 gigahertz connection and that the phone should be on that network. On a router publishing both bands under one name, the phone can sit on the 5 gigahertz side without showing it, and a setup then stalls before it has started.",
    },
    {
      name: "Create or sign in to the FriedrichGo account",
      text: "The guide has you register with an email address and sign in before adding equipment. Password recovery is by email in this guide, with a verification code sent to the registered address, so use an address you can reach from the phone you are setting up on.",
    },
    {
      name: "Add the unit by product line",
      text: "Press the plus symbol in the app and choose Floating Air Pro or Premier to match the equipment. Choosing the wrong product line offers a pairing flow that does not match the buttons on your remote.",
    },
    {
      name: "Enter the network and password in the app",
      text: "Select the 2.4 gigahertz network you confirmed in the first step, type the password, and confirm. The app then waits for the indoor unit to enter pairing mode rather than searching for it.",
    },
    {
      name: "Press Left-Right Swing six times in a row",
      text: "On the remote controller, press the left-right swing button six times consecutively. This is the step that puts the indoor unit into the pairing state, and it is done from the handset rather than from any button on the unit.",
    },
    {
      name: "Wait for 77 or five short beeps",
      text: "The guide confirms success when 77 appears on the indoor unit display, five short beeps are heard, or both. Either signal means the unit is in pairing mode and the app can continue. No signal means the six presses were not registered as a run.",
    },
  ],
  decisionTable: {
    caption: "What each signal during setup tells you",
    columns: ["What you see or hear", "What it means", "What to do next"],
    rows: [
      [
        "77 on the indoor display",
        "The unit has entered the documented pairing state",
        "Continue in the app rather than power cycling the unit",
      ],
      [
        "Five short beeps",
        "The same confirmation, delivered audibly",
        "Continue, and treat it as equivalent to the display",
      ],
      [
        "Nothing at all",
        "The six presses were not registered as a consecutive run",
        "Point the remote at the receiver and press again without pausing",
      ],
      [
        "The app cannot find the network",
        "The phone or the selection is on a band the app does not use",
        "Confirm a 2.4 gigahertz network before retrying",
      ],
    ],
  },
  figures: [
    {
      title: "Three things have to be on the same band",
      description:
        "Setup fails at whichever of these is on the wrong network, and the app cannot tell you which one. Confirming all three before starting saves repeating the pairing sequence.",
      nodes: [
        { label: "The phone", detail: "Must be on the 2.4 gigahertz network during setup" },
        { label: "The network selected in the app", detail: "The same 2.4 gigahertz network, not the 5 gigahertz one" },
        { label: "The indoor unit", detail: "Joins the network the app hands it" },
        { label: "The Wi-Fi module", detail: "Stays plugged in to keep the connection afterwards" },
      ],
    },
  ],
  sections: [
    {
      title: "Why 77 looks alarming and is not",
      paragraphs: [
        "A two-character display on a ductless indoor unit is where fault codes live. Every other time an owner sees characters there it means something has gone wrong, so 77 arriving in the middle of an app setup reads as a failure at exactly the moment somebody is already unsure whether they are doing it right.",
        "It is the opposite. The setup guide names 77 as the confirmation, alongside five short beeps, that the six button presses worked and the unit is now waiting for the app. Powering the unit off at that point undoes the state you just achieved.",
        "The practical rule is that a display code arriving as a direct result of a documented button sequence is part of that sequence. A code that arrives on its own, while the system is running, is the other kind.",
      ],
    },
    {
      title: "The network band can stop setup",
      paragraphs: [
        "Friedrich is explicit that the app works on 2.4 gigahertz networks and that 5 gigahertz networks are not compatible. Modern routers publish both bands under a single network name and move devices between them, which means a phone can be on 5 gigahertz while showing the name the owner expects.",
        "The reliable way through this is to give the 2.4 gigahertz band its own name in the router for the duration of the setup, connect the phone to that name explicitly, and complete the pairing. What the air conditioner joins afterwards is the band it was given, and it stays there.",
      ],
    },
    {
      title: "After setup, leave the module alone",
      paragraphs: [
        "Friedrich's guidance for owners is that the Wi-Fi module should not be unplugged, because keeping it plugged in is what maintains the connection between the app and the appliance. It is a small thing that gets disturbed during cleaning or a service visit and then produces a unit the app can no longer see.",
        "If an app connection is lost after work has been done on the unit, that is worth checking before anybody repeats the whole pairing sequence. The pairing is not the thing that failed if the module was disconnected.",
      ],
    },
  ],
  safeChecks: [
    "Confirm the phone is on a 2.4 gigahertz network before starting, since the app does not use the 5 gigahertz band.",
    "Use the handset for the six-press sequence rather than looking for a button on the indoor unit.",
    "Note whether 77, the five beeps, both, or neither occurred, since that separates a pairing problem from a network one.",
  ],
  professionalEscalation: [
    "The Wi-Fi module and its connection sit behind the indoor unit cover, so refitting a disconnected module is service work rather than owner maintenance.",
    "A unit that will not enter pairing mode after repeated correct sequences needs the handset and the receiver checked by a technician.",
  ],
  serviceHandoff:
    "If the unit will not pair, report which product line you selected in the app, whether the network was confirmed as 2.4 gigahertz, and whether 77 or the five beeps ever appeared. Those three answers separate an app problem, a network problem, and a receiver problem.",
  faqs: [
    {
      question: "What does 77 mean on a Friedrich display?",
      answer:
        "During FriedrichGo setup it confirms the indoor unit has entered pairing mode after the six left-right swing presses. Friedrich lists it alongside five short beeps as the signal to continue in the app.",
    },
    {
      question: "Why will the app not connect to my network?",
      answer:
        "The FriedrichGo app is documented as working on 2.4 gigahertz networks, and 5 gigahertz networks are not compatible. A router publishing both bands under one name can put the phone on the wrong side without showing it.",
    },
    {
      question: "Should I unplug the Wi-Fi module when the unit is off?",
      answer:
        "No. Friedrich's guidance is to keep it plugged in, because that is what maintains the connection between the app and the appliance. A disconnected module explains an app that has stopped seeing a unit that otherwise works.",
    },
    {
      question: "Nothing happened after six presses. What now?",
      answer:
        "The presses have to be consecutive and the remote has to be aimed at the receiver. Try again without pausing between presses. If neither 77 nor the beeps ever appear, the handset or the receiver is the next thing to check.",
    },
  ],
  sourceIds: ["friedrich-go-wifi-setup", "friedrich-ductless-faq", "friedrich-resources"],
  relatedContent: [
    "/brands/friedrich/",
    "/brands/friedrich/floating-air-code-returns-after-restart/",
    "/how-to-check-mini-split-remote/",
    "/mini-split-remote-not-working/",
  ],
  glossaryTerms: ["error-code", "thermostat", "control-board"],
  keywords: [
    "friedrich 77 on display",
    "friedrichgo app not connecting",
    "friedrich floating air wifi setup",
    "friedrich left right swing 6 times",
    "friedrich wifi module unplugged",
  ],
});
