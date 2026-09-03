import { publish } from "./publish";

export const rheemEconetServerConnectionError = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Rheem EcoNet has an IP address but reports a server connection error: which layer is actually broken",
  slug: "econet-server-connection-error",
  path: "/brands/rheem/econet-server-connection-error/",
  description:
    "An address on the home network proves one hop of four. How to tell whether the radio, the router, the internet path or the service is the layer refusing.",
  articleType: "troubleshooting",
  brand: "rheem",
  equipmentType: "controls-thermostats",
  productFamily:
    "Rheem and Ruud EcoNet smart thermostats and control centers using the built-in wireless radio for app access and notifications",
  models: [
    "Rheem EcoNet Smart Thermostat with 802.11 b/g/n 2.4 GHz radio",
    "Rheem and Ruud EcoNet Control Center paired with the EcoNet app",
  ],
  problemType: "cloud-connection-failure",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "An IP address proves the thermostat joined the wireless network and was given an address on it. That is one hop. Reaching the manufacturer service needs three more: a working route out of the home network, an internet connection that is actually passing traffic, and a service at the far end that is answering. A server connection error while the signal icon reads connected places the failure past the router rather than at the radio.",
  scopeNotice:
    "This covers the wireless connection between an EcoNet control and the manufacturer service. It does not cover the separate wired network that carries communication between the control and the HVAC equipment, where a loss of contact produces an equipment alarm instead.",
  symptoms: [
    "The thermostat shows a connected signal icon while the app reports the system as offline or unreachable.",
    "The screen names a server connection problem even though other devices in the house browse normally.",
    "The connection recovers by itself after minutes or hours with nothing changed.",
  ],
  causes: [
    "A network broadcasting only on 5 GHz, or one whose band steering keeps a 2.4 GHz-only client from associating cleanly.",
    "A router that has issued an address but is filtering outbound traffic, through guest isolation, a content filter or a firewall rule.",
    "An internet service outage that leaves the local network working normally.",
    "A manufacturer service interruption, which the thermostat can describe only from its own side.",
  ],
  diagnosticBranches: [
    {
      title: "The signal icon shows connected with a low signal",
      observation:
        "The wireless icon indicates a connection, but at the weakest of the three connected states the control displays.",
      action:
        "Treat the link as marginal rather than working. The control distinguishes strong, medium and low connected states from not connected, and a low state that drops under load looks like a service problem from the app side.",
    },
    {
      title: "Other devices work but the thermostat cannot reach the service",
      observation:
        "Phones and computers on the same network browse normally while the thermostat continues to report a server problem.",
      action:
        "Check which network the thermostat joined. The radio is specified for 802.11 b/g/n at 2.4 GHz, so a guest network, a 5 GHz-only name or an isolated band produces exactly this split.",
    },
    {
      title: "Nothing in the house can reach the internet",
      observation:
        "Every device shows a local connection and no internet access at the same time.",
      action:
        "The thermostat is reporting accurately and the fault is upstream. Local control at the wall continues to work, so nothing needs doing to the HVAC system while the line is restored.",
    },
    {
      title: "The failure clears and returns on its own schedule",
      observation:
        "Connection is lost and restored repeatedly without anyone touching the thermostat or the router.",
      action:
        "Log the times over several days. A pattern that lines up with router reboots, scheduled filtering or peak household use points at the home network, while an irregular pattern across many devices points further out.",
    },
  ],
  decisionTable: {
    caption: "Four layers between the thermostat and the service, and what each one proves",
    columns: ["Layer", "Evidence it is working", "What it still does not prove"],
    rows: [
      ["Radio association", "The wireless icon shows a connected state", "That traffic is leaving the house"],
      ["Local address", "The control holds an IP address", "That the router will route it outward"],
      ["Internet path", "Other devices reach outside sites", "That this device is permitted to"],
      ["Manufacturer service", "The app updates from another location", "That the home path is clear"],
    ],
  },
  figures: [
    {
      title: "What the thermostat can see from where it stands",
      description:
        "The device reports its own view of the connection, and that view ends at the first hop that stops answering. Everything past it is inference rather than observation.",
      nodes: [
        { label: "Signal state", detail: "Strong, medium, low, or not connected" },
        { label: "Address held", detail: "Issued by the home router" },
        { label: "Request sent", detail: "Leaves the device either way" },
        { label: "No reply", detail: "Reported as a server problem" },
      ],
    },
  ],
  sections: [
    {
      title: "The published radio specification settles most of these cases",
      paragraphs: [
        "Rheem lists the thermostat radio as 802.11 b/g/n at 2.4 GHz. That single line explains a large share of connections that look wrong. A router advertising one network name across both bands can hand a 2.4 GHz-only client an association that works at setup and behaves poorly later. A household that moved to a 5 GHz-only name leaves the thermostat with nothing to join at all.",
        "The app side has its own stated requirement: a broadband internet connection is needed, and receipt of notifications depends on how the home network is set up. Those two sentences together define the boundary of what the thermostat is responsible for. It joins a 2.4 GHz network and it talks to a service. Everything between those two points belongs to the house.",
        "The setup order is worth repeating for the same reason. The equipment is installed, the app is downloaded and an account created, the wireless icon on the thermostat is touched, and the remaining steps are followed on both the thermostat and the app. A step completed on only one of the two leaves an account and a device that have not been introduced.",
      ],
    },
    {
      title: "Why an address is weaker evidence than it looks",
      paragraphs: [
        "Address assignment happens inside the home network and asks nothing of the wider internet. A router can hand out addresses while a guest network keeps clients isolated from each other and from local services, while a content filter blocks the destination the thermostat needs, or while the broadband line itself is down.",
        "The thermostat cannot see any of that. From its position the request was sent and no answer came back, which is what a server connection message describes. Reading it as a claim about the manufacturer service is reading further than the device can see.",
        "The reverse case is worth stating too. If the app updates correctly when you are away from home but not when you are on the house network, the evidence points at the house rather than at the service.",
      ],
    },
    {
      title: "What is unaffected while the connection is down",
      paragraphs: [
        "Heating and cooling control stays at the wall. The wireless connection carries the app, notifications and weather, so a system that is losing its cloud link is not a system that is losing temperature control. That distinction is worth making early, because it changes how urgent the problem is.",
        "It also changes what to do while waiting. Schedules held on the thermostat continue to run. The away setting on the control is operated from the screen, so comfort behaviour does not depend on the phone being able to reach anything.",
        "If both the app and equipment behaviour have gone wrong at the same time, treat them as two separate investigations. The wired equipment network and the wireless service connection fail for unrelated reasons, and merging the two symptoms into one story is what turns a router problem into an unnecessary service call.",
      ],
    },
  ],
  safeChecks: [
    "Read the wireless icon on the thermostat and note which of the connected states it shows, because low is not the same as strong.",
    "Confirm the network name the thermostat joined is a 2.4 GHz network that is not a guest or isolated network.",
    "Check whether other devices in the house can reach the internet at the same moment the thermostat reports the error.",
    "Note the times the connection drops and returns across several days rather than acting on a single event.",
  ],
  professionalEscalation: [
    "Changes to router configuration, firewall rules or network segmentation belong to whoever administers the home network.",
    "If equipment operation has also changed, that is a separate HVAC question for a technician rather than a network question.",
  ],
  serviceHandoff:
    "If the connection problem persists after the network questions are settled, give the manufacturer support contact the thermostat model, the network name and band it joined, the signal state shown on the screen, and the times the connection dropped. That is what separates an account or service issue from a home network one.",
  faqs: [
    {
      question: "Does an IP address mean the thermostat is online?",
      answer:
        "It means the thermostat joined the wireless network and received an address. Reaching the manufacturer service also needs a route out of the network, a working internet connection, and a service that answers.",
    },
    {
      question: "Which wireless band does the EcoNet thermostat use?",
      answer:
        "Rheem specifies the radio as 802.11 b/g/n at 2.4 GHz. A network broadcasting only on 5 GHz gives the thermostat nothing to join.",
    },
    {
      question: "Will heating and cooling stop while the app is offline?",
      answer:
        "No. The wireless connection carries app access, notifications and weather. Setpoints, schedules and the away setting continue to run from the thermostat itself.",
    },
    {
      question: "Is a guest network suitable for the thermostat?",
      answer:
        "Guest networks are built to isolate clients and restrict outbound traffic, which is exactly the combination that allows an address to be issued while the connection to the service is refused.",
    },
    {
      question: "How do I tell a service outage from a home network problem?",
      answer:
        "Check whether the app updates from a mobile connection away from the house. If it does, the home network is the layer to investigate; if it does not, the problem sits further out.",
    },
  ],
  sourceIds: ["rheem-econet-quickstart", "ruud-econet-user-guide"],
  relatedContent: [
    "/brands/rheem/",
    "/brands/rheem/econet-a006-c-odu-communication-failure/",
    "/brands/rheem/econet-fault-history/",
    "/brands/nest/e74-no-power-rh/",
  ],
  glossaryTerms: ["thermostat", "error-code", "control-board"],
  keywords: [
    "econet server connection error",
    "rheem econet wifi problem",
    "econet thermostat offline",
    "rheem econet 2.4 ghz",
    "econet app not connecting",
  ],
});
