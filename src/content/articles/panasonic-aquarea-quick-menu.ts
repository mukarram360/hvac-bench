import { publish } from "./publish";

/**
 * Powerful mode is the interesting one. It does not increase output in the way
 * the name suggests; it drives the flow temperature to the top of whatever
 * weather compensation was set, for a fixed period. That single fact changes
 * how a reader thinks about the whole quick menu, so the page is built on it.
 */
export const panasonicAquareaQuickMenu = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Panasonic Aquarea quick menu: what Powerful and Quiet change",
  slug: "quick-menu-functions",
  path: "/brands/panasonic/quick-menu-functions/",
  description:
    "Powerful drives flow temperature to the weather compensation maximum for a set period. Quiet trades a few decibels. Force DHW and Force Heater block each other.",
  articleType: "guide",
  brand: "panasonic",
  equipmentType: "heat-pump",
  productFamily: "Aquarea bi-bloc, monobloc, and All in One systems in the H and J generation user guide",
  models: [
    "WH-ADC and WH-AXC bi-bloc systems in the cited user guide",
    "WH-SDC and WH-SXC systems in the cited user guide",
    "WH-MDC and WH-MXC monobloc systems in the cited user guide",
  ],
  problemType: "controller-functions",
  symptomFamily: "running-cost",
  directAnswer:
    "The quick menu holds four shortcuts. Powerful runs the highest flow temperature your weather compensation allows, for 30, 60, or 90 minutes. Quiet reduces noise by 4 to 6 dB(A) across three levels. Force DHW and Force Heater cannot both be on.",
  scopeNotice:
    "The quick menu described here belongs to the Aquarea controller in the Panasonic user guide covering the H and J generation bi-bloc, monobloc, and All in One systems listed above. Older Aquarea controllers arrange these functions differently, and a system with no cylinder will not show the tank entries at all.",
  layout: ["decisionTable", "figures", "sections"],
  symptoms: [
    "The house is slow to warm and somebody wants to know whether Powerful will help.",
    "The outdoor unit is close to a neighbour and quiet running matters more than the last degree of efficiency.",
    "Force Heater was left on and Force DHW now refuses to switch on.",
  ],
  causes: [
    "Powerful raises the flow temperature to the maximum the weather compensation setting allows, which is a different action from increasing capacity.",
    "Panasonic states that Force DHW is disabled while Force Heater is turned on, so the two shortcuts are mutually exclusive.",
  ],
  decisionTable: {
    caption: "The four quick menu functions and what each one costs",
    columns: ["Function", "What the manual says it does", "The condition attached to it"],
    rows: [
      [
        "Powerful",
        "Runs the highest flow temperature set on weather compensation for 30, 60, or 90 minutes",
        "Disabled when operation is turned off",
      ],
      [
        "Quiet",
        "Reduces noise between 4 and 6 dB(A) across three levels, with level 3 the quietest",
        "Can be timed with up to six patterns, and overlapping times are rejected",
      ],
      [
        "Force DHW",
        "Turns tank domestic hot water on or off",
        "Disabled while Force Heater is on, and returns to the memorised mode when switched off",
      ],
      [
        "Force Heater",
        "Forces the electric heater on",
        "Cannot be switched on while the heat pump is running",
      ],
    ],
  },
  figures: [
    {
      title: "What Powerful is actually moving",
      description:
        "The name suggests extra capacity. What the manual describes is a temporary change to the water temperature target, bounded by the compensation curve that was already configured.",
      nodes: [
        { label: "Weather compensation curve", detail: "Sets flow temperature against outdoor temperature" },
        { label: "Its highest flow temperature", detail: "The value Powerful drives the system to" },
        { label: "Timed period", detail: "30, 60, or 90 minutes, chosen when activated" },
        { label: "Return to normal", detail: "Compensation resumes when the period ends" },
      ],
    },
  ],
  sections: [
    {
      title: "Powerful is a temperature shortcut, not a capacity button",
      paragraphs: [
        "The manual is precise about this: Powerful mode activates the highest flow temperature set on the weather compensation mode, for a period of 30, 60, or 90 minutes depending on what was selected. Nothing in that sentence is about the compressor working harder than it otherwise could. It is about the water leaving the heat pump being asked for at the top of a range somebody already configured.",
        "Two things follow. The first is that Powerful is bounded by your compensation settings, so a system commissioned with a conservative maximum flow temperature has a correspondingly modest Powerful. The second is that hotter water is not free. A heat pump running to a higher flow temperature does so at a lower coefficient of performance, which is the trade the button makes on your behalf.",
        "It is also a timed function rather than a state. When the 30, 60, or 90 minutes are up, the system returns to following the compensation curve, so it suits a cold morning or an unexpected arrival rather than a permanent setting.",
      ],
    },
    {
      title: "Quiet mode is measured, and it can be scheduled",
      paragraphs: [
        "Panasonic quantifies this one: noise levels can be reduced between 4 and 6 dB(A) depending on the operating conditions, across three levels, with level 3 the quietest. Naming a range rather than a single figure is honest, because the reduction available depends on what the unit is being asked to do at the time.",
        "The scheduling is the part worth knowing about. The manual describes setting a timer for quiet operation across six selectable patterns, each with its own hour, minute, and quiet level. It warns that a time overlapping another pattern brings up a message rather than being accepted. That makes quiet running something you set once for the hours that matter rather than remember to switch on.",
      ],
    },
    {
      title: "The two Force functions get in each other's way",
      paragraphs: [
        "Force DHW turns the tank hot water demand on or off directly. Two conditions come with it. It is disabled while Force Heater is turned on, and when it is switched off the operation and mode return to the previously memorised status rather than to a default.",
        "Force Heater has the mirror restriction. The manual states it is not possible to switch the Force Heater on during operation of the heat pump, and that trying to do so produces a message on the display. So the sequence matters: these are not two independent switches that can be combined at will.",
        "For a reader troubleshooting hot water, that pair of rules explains a common dead end. A Force DHW that will not engage is not necessarily a fault. Check whether Force Heater is on first, because the manual says that alone disables it.",
      ],
    },
    {
      title: "Where the quick menu sits relative to the rest of the controller",
      paragraphs: [
        "These four are shortcuts, not settings. The weather compensation curve, the tank set temperature, and the operation mode all live elsewhere in the controller, and the quick menu borrows from them. Powerful borrows the compensation maximum. Force DHW borrows the tank arrangement, and the manual notes the quick menu screen looks different when the tank connection is off.",
        "That relationship is the reason a quick menu function can behave differently on two Aquarea systems that look identical. The shortcut is the same; what it is shortcutting to was set at commissioning.",
      ],
    },
  ],
  faqs: [
    {
      question: "Does Powerful mode make the heat pump work harder?",
      answer:
        "It asks for the highest flow temperature your weather compensation allows, for a set period of 30, 60, or 90 minutes. That is a change to the water temperature target rather than an override of capacity, and it is bounded by settings made at commissioning.",
    },
    {
      question: "How much quieter is Quiet mode?",
      answer:
        "Panasonic states a reduction of between 4 and 6 dB(A), depending on operating conditions, across three levels with level 3 the quietest. The range rather than a single number reflects that the available reduction depends on what the unit is doing.",
    },
    {
      question: "Why will Force DHW not switch on?",
      answer:
        "Check Force Heater first. The manual states Force DHW is disabled while Force Heater is turned on, so the hot water shortcut is unavailable until the heater shortcut is cleared.",
    },
    {
      question: "Can I turn on Force Heater while the system is running?",
      answer:
        "No. The manual says it is not possible to switch the Force Heater on during operation of the heat pump, and that attempting it brings up a message on the controller rather than enabling the function.",
    },
  ],
  sourceIds: ["panasonic-aquarea-user", "panasonic-aquarea-use"],
  relatedContent: [
    "/brands/panasonic/",
    "/brands/panasonic/aquarea-h62-error-code/",
    "/heat-pump-operating-temperatures/",
    "/how-heat-pump-defrost-works/",
  ],
  glossaryTerms: ["flow-temperature", "weather-compensation", "cop"],
  keywords: [
    "panasonic aquarea powerful mode",
    "aquarea quiet mode db",
    "aquarea force dhw not working",
    "panasonic aquarea force heater",
    "aquarea quick menu explained",
  ],
});
