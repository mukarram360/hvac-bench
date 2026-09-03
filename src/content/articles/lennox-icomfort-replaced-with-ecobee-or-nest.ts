import { publish } from "./publish";

export const lennoxIcomfortReplacedWithEcobeeOrNest = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Replacing a Lennox iComfort thermostat with an ecobee or Nest: what an SLP98 or SL280 gives up",
  slug: "icomfort-replaced-with-ecobee-or-nest",
  path: "/brands/lennox/icomfort-replaced-with-ecobee-or-nest/",
  description:
    "Lennox publishes different firing profiles for communicating, two-stage and single-stage thermostats. What a modulating SLP98 gives up, and what an SL280 keeps.",
  articleType: "guide",
  brand: "lennox",
  equipmentType: "controls-thermostats",
  productFamily:
    "Lennox communicating-enabled furnaces operated on a conventional 24 volt thermostat, using the SLP98 modulating and SL280 two-stage variable-speed series as the worked examples",
  models: [
    "Lennox SLP98UHV modulating variable-speed furnace",
    "Lennox SL280UHNV two-stage variable-speed furnace",
    "Lennox iComfort S30 and E30 communicating thermostats",
  ],
  problemType: "control-compatibility",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "The swap is supported and the loss is specific rather than general. Lennox publishes a separate list of available heat modes for each class of thermostat, and the communicating list is the longest one. A modulating SLP98 running on an iComfort Touch control has a four-step firing profile available to it. On a two-stage 24 volt thermostat that becomes a variable rate capacity mode or a plain low and high call, and on a single-stage thermostat it becomes three steps on timers. A two-stage SL280 loses far less, because its control can stage itself.",
  scopeNotice:
    "Figures here are read from Lennox service literature for the SLP98UHV and SL280UHNV series. Other Lennox furnaces publish their own control configuration lists, and a heat pump or air conditioner on the same bus has its own separate consequences that this page does not cover.",
  symptoms: [
    "The furnace still heats after the thermostat change but holds a lower or less steady output than it did before.",
    "Settings that used to be made on the thermostat screen no longer appear anywhere in the new thermostat menus.",
    "Equipment alerts that once reached the wall control now appear only as characters on the furnace display.",
  ],
  causes: [
    "The replacement thermostat is a conventional 24 volt control, so the furnace runs from the mode list Lennox publishes for that thermostat class.",
    "DIP switches and clippable links that a communicating system ignores become active again once the system is conventional, and they retain whatever position they were left in.",
    "Configuration and alert reporting that lived in the communicating control have no equivalent surface on a third-party thermostat.",
  ],
  comparisonTable: {
    caption: "Published heat modes for one modulating furnace by thermostat class",
    columns: ["Thermostat class", "Heat modes Lennox lists for the SLP98"],
    rows: [
      ["Single-stage thermostat", "35, 70 and 100 percent input as three steps, with time delays between them"],
      ["Two-stage thermostat", "Variable rate capacity mode, or W1 at 70 percent and W2 at 100 percent with no delay between stages"],
      ["iComfort Touch communicating", "Variable rate capacity mode, or 35, 60, 80 and 100 percent as four steps with time delays"],
    ],
  },
  decisionTable: {
    caption: "What changes, what has to be set, and what carries over",
    columns: ["Item", "After the change to a 24 volt thermostat"],
    rows: [
      ["Modulating firing steps", "Reduced to the published two-stage or single-stage list for that furnace"],
      ["DIP switches and links", "Active again, so each one has to be set for the new thermostat"],
      ["Equipment alert display", "Read from the seven-segment control display rather than the wall control"],
      ["Second heating stage on a two-stage furnace", "Still available, by thermostat call or by the control timer"],
    ],
  },
  sections: [
    {
      title: "The furnace was never taking orders from jumpers, and now it is",
      paragraphs: [
        "Lennox states the rule directly in its communicating systems service manual. While communicating controls are operating in a communication system, all jumper and link settings on the controls are ignored, treated as defaults, and become active only if the system is converted to a non-communicating one. Converting is exactly what fitting an ecobee or a Nest does.",
        "So the switch positions on the furnace board have been dormant, possibly since installation, and they now govern behaviour. On the SL280UHNV the first switch is labelled for thermostat heat stage selection and ships in the position for a two-stage thermostat, which means a single-stage replacement thermostat requires that switch to be moved. Blower-off delay sits on two more switches with published options of 60, 90, 120 and 180 seconds, and cooling blower speed sits on two others.",
        "None of that is difficult work for the installer, and all of it is invisible from the thermostat. A system that heats but feels different after a swap is worth checking against the switch tables in the furnace literature before anything else is suspected.",
      ],
    },
    {
      title: "A two-stage furnace can still stage itself, so the loss is smaller",
      paragraphs: [
        "The SL280UHNV control is described as communicating-enabled and as able to operate with a non-communicating conventional single or two-stage thermostat. In two-stage thermostat mode the burners start on first stage and move to second stage when the thermostat calls for it. Lennox adds that a simultaneous call for both stages fires first stage and switches to second after 30 seconds.",
        "In single-stage mode the furnace supplies the second stage on its own clock. The burners always fire on first-stage heat with the inducer on low and the blower on low heat speed. The control then moves to second-stage heat after a recognition period that a second switch sets to either 7 or 12 minutes.",
        "That is why the answer differs by appliance rather than by brand. Both heat stages remain reachable on this furnace under either thermostat class. What changes is who decides when the second stage arrives, and a fixed 7-minute recognition period behaves differently on a mild day than a thermostat that never asks for the second stage at all.",
      ],
    },
    {
      title: "What the modulating furnace actually gives up",
      paragraphs: [
        "The SLP98 is where the difference is worth counting. Its published mode list gives the communicating control both a variable rate capacity mode and a four-step profile at 35, 60, 80 and 100 percent input with time delays between the steps. The two-stage thermostat list keeps the variable rate capacity mode, in which the furnace adjusts its firing rate from first and second-stage cycle times, or offers a simple 70 and 100 percent split with no delay between stages. The single-stage list drops to 35, 70 and 100 percent on timers.",
        "Read as comfort rather than as a specification, the four-step profile is the furnace spending more of the cycle at a low firing rate. Losing the 60 and 80 percent steps means the same heat is delivered in fewer, larger moves. Whether that is noticeable depends on the house, and it is a reasonable trade for a thermostat somebody prefers to use.",
        "The other loss is reporting. Lennox routes equipment alerts to the communicating display with priorities that decide whether a homeowner or only the installing contractor sees them. On a conventional thermostat those alerts stay on the furnace board, which the SL280 literature describes as a seven-segment display that flashes codes in single digits. Nothing is hidden; it is just no longer on the wall.",
      ],
    },
    {
      title: "Deciding before the old thermostat comes off the wall",
      paragraphs: [
        "Two questions settle most of it. Is the appliance modulating or two-stage, and will the replacement thermostat be wired and configured as two-stage rather than single-stage? A two-stage replacement on a two-stage furnace keeps close to the original behaviour. A single-stage replacement on a modulating furnace is the largest step down in the published lists.",
        "The third question is what else is on the communicating bus. Zoning, an equipment interface module or a communicating outdoor unit are configured through the same system, and removing the communicating thermostat removes the surface where that configuration lives. Where those are present, the change is a system conversion rather than a thermostat swap, and the installing contractor should scope it as one.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is a Nest or ecobee compatible with a Lennox communicating furnace?",
      answer:
        "Lennox documents its communicating-enabled controls as able to operate with a conventional single or two-stage thermostat, so the furnace supports the arrangement. The furnace then runs from the mode list published for that thermostat class.",
    },
    {
      question: "Do I lose the second heating stage on an SL280?",
      answer:
        "No. In two-stage thermostat mode the control follows the thermostat call, and in single-stage mode it moves to second-stage heat after a recognition period set by a switch to 7 or 12 minutes.",
    },
    {
      question: "Why did the furnace behave differently right after the swap?",
      answer:
        "Jumper and link settings are ignored while a system is communicating and become active once it is conventional. The switches keep whatever position they were left in, so they need setting for the new thermostat.",
    },
    {
      question: "Where do equipment fault codes appear afterwards?",
      answer:
        "On the furnace control itself. Lennox describes a seven-segment display that flashes codes in single digits, so a code is read from the board rather than from the wall control.",
    },
    {
      question: "Does the modulating furnace still modulate?",
      answer:
        "With a two-stage thermostat it can still use variable rate capacity mode, in which the furnace sets its firing rate from first and second-stage cycle times. The four-step profile is listed only for the communicating control.",
    },
  ],
  sourceIds: ["lennox-slp98-service", "lennox-sl280-service", "lennox-communicating-service"],
  relatedContent: [
    "/brands/lennox/",
    "/brands/lennox/icomfort-alerts-10-31-39/",
    "/brands/ecobee/calibrating-heat-cool-disabled/",
    "/brands/nest/heat-pump-balance/",
  ],
  glossaryTerms: ["thermostat", "c-wire", "control-board", "commissioning"],
  keywords: [
    "lennox icomfort replace with nest",
    "ecobee lennox slp98",
    "lennox communicating thermostat replacement",
    "sl280 two stage thermostat",
    "icomfort to ecobee",
  ],
});
