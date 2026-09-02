import { publish } from "./publish";

/**
 * The page has to do two jobs that pull against each other: give a seasonal
 * checklist, and stop people covering the outdoor unit, which is the single
 * most popular piece of winter advice on the internet and is wrong for a heat
 * pump. So the covering question is dealt with before the checklist, not after
 * it, and the checklist is split by whether the system heats at all.
 */
export const howToPrepareMiniSplitForWinter = publish({
  title: "How to prepare a mini-split for winter",
  slug: "how-to-prepare-mini-split-for-winter",
  path: "/how-to-prepare-mini-split-for-winter/",
  description:
    "Why a heat pump must stay uncovered, what to clear around and beneath the outdoor unit, and how to test heating before the weather makes it urgent.",
  articleType: "how-to",
  equipmentType: "ductless-mini-split",
  problemType: "winter-preparation",
  models: [
    "Ductless heat pumps that will run through the heating season",
    "Cooling-only ductless systems, which are shut down rather than prepared",
  ],
  directAnswer:
    "A ductless heat pump that will run through winter needs clear airflow, clear drainage beneath it, clean filters, and a heating test done early. It does not need covering, and covering it traps meltwater against the coil.",
  scopeNotice:
    "Base-pan heaters, snow-stand requirements, wind-baffle guidance, and minimum clearances differ by model and by installation. Where this page says clear the space, the dimensions come from your own installation manual.",
  layout: ["branches", "comparisonTable", "steps", "sections"],
  symptoms: [
    "The heating season is approaching and the system has been cooling all summer.",
    "Snow, leaves, or drifting has reached the outdoor unit before.",
    "You have been advised to buy a cover for the outdoor unit.",
  ],
  causes: [
    "A heat pump absorbs heat from outdoor air all winter, so it needs the same free airflow it needs in summer.",
    "Defrost meltwater has to drain and clear, or it refreezes into a mound that blocks the coil.",
  ],
  diagnosticBranches: [
    {
      title: "The system heats and will run all winter",
      observation:
        "The outdoor unit is a heat pump and heating is how the space will be conditioned through the cold months.",
      action:
        "Follow the whole procedure below. Nothing gets covered, nothing gets switched off at the isolator, and the heating test happens before the first cold snap rather than during it.",
    },
    {
      title: "The system cools only, or will not be used",
      observation:
        "The equipment has no heating mode, or heating comes from something else and the ductless system will sit idle until spring.",
      action:
        "Clean the filters, run the fan to dry the indoor coil, and follow your manual's seasonal shutdown instruction. Leave power on unless the manual says otherwise, because some models use crankcase heating during standby.",
    },
    {
      title: "Snow drifts against the unit where it stands",
      observation:
        "The outdoor unit sits at ground level in a spot where snow accumulates, or under a roofline that sheds onto it.",
      action:
        "Raise the question with the installer before winter. Stand height, a snow leg kit, and roof-drip protection are installation decisions rather than seasonal chores, and a cover is not a substitute for either.",
    },
  ],
  comparisonTable: {
    caption: "Which winter advice applies to which equipment",
    columns: ["Advice", "Heat pump that will run", "Cooling-only, idle until spring"],
    rows: [
      [
        "Cover the outdoor unit",
        "No; it needs airflow and drainage all winter",
        "Only if your own manual specifies a cover",
      ],
      [
        "Leave the power on",
        "Yes, unless the manual says otherwise",
        "Follow the manual's seasonal shutdown instruction",
      ],
      [
        "Clear beneath the unit",
        "Yes; defrost meltwater has to drain",
        "Yes, so standing water does not sit against the casing",
      ],
      [
        "Clean the filters",
        "Yes; heating is the long-running season",
        "Yes, then run the fan to dry the coil",
      ],
      [
        "Test before the cold",
        "Yes, in heating, weeks ahead",
        "Not applicable until spring",
      ],
    ],
  },
  steps: [
    {
      name: "Clean the indoor filters",
      text: "Remove, clean, and dry the owner-serviceable filters following the instruction in your operation manual. Heating season is when the indoor unit runs longest, and a restricted filter reduces delivered heat and stresses the coil.",
    },
    {
      name: "Clear the space around the outdoor unit",
      text: "Remove leaves, cuttings, stored items, and anything leaning against the cabinet. Cut back vegetation to the clearances in your installation manual rather than to what looks tidy.",
    },
    {
      name: "Clear the space beneath it",
      text: "Defrost meltwater has to get away from the base. Clear debris and standing material from under a wall-mounted unit and from around the feet of a ground-mounted one, so water drains instead of freezing into a mound.",
    },
    {
      name: "Look up",
      text: "Check what is above the unit. Water dripping from a gutter, a valley, or an unguttered roof edge refreezes on the coil faster than a defrost cycle can clear it, and ice fed that way keeps coming back after every cycle.",
    },
    {
      name: "Test heating early",
      text: "Run the system in heating for a full cycle on a cool day, well before you depend on it. Confirm warm supply air, note any code, and give yourself weeks rather than hours to get a fault attended to.",
    },
    {
      name: "Watch one defrost",
      text: "During that test, or on the first cold damp day, watch a full defrost cycle so you know what your own system looks like doing it. Recognising normal in October saves a January call-out.",
    },
  ],
  sections: [
    {
      title: "Why covering it is the wrong instinct",
      paragraphs: [
        "Winter covers come from the world of cooling-only condensers that sit unused from October to April. A heat pump is not unused in winter. It is working hardest then, and it works by moving large volumes of outdoor air across the coil.",
        "A cover restricts that airflow, and it holds defrost meltwater against the coil and the base instead of letting it drain and evaporate. Trapped moisture in freezing conditions is how ice accumulates in the places a defrost cycle cannot reach.",
        "Manufacturer-supplied wind baffles, snow hoods, and stands are a different matter. They are designed for the specific cabinet, they preserve airflow, and they are fitted as part of the installation rather than draped over it in autumn.",
      ],
    },
    {
      title: "Leaving the power on",
      paragraphs: [
        "For a system that will heat, the supply stays on. Some outdoor units warm the compressor during standby to keep refrigerant from migrating into the oil, and cutting power removes that protection.",
        "For a cooling-only system going into hibernation, follow the manual. Where it specifies a seasonal shutdown at the isolator it will also say how long to allow before restarting in spring.",
      ],
    },
  ],
  safeChecks: [
    "Clean filters, clear debris, and cut back vegetation by hand from ground level only.",
    "Check drainage beneath the outdoor unit and the roofline above it before the first freeze.",
    "Run a heating test early enough that a fault can be attended to before you need the heat.",
  ],
  professionalEscalation: [
    "Ask the installer about stands, snow legs, or baffles rather than fitting a cover yourself.",
    "Call for service if the heating test produces no warm air, a code, or ice that has not cleared by the next day.",
    "Leave coil washing, fin combing, and any panel removal to a technician.",
  ],
  serviceHandoff:
    "Tell the technician when the system last heated normally, what the heating test produced, whether any code appeared, how the outdoor unit is mounted, and what sits above and beneath it.",
  faqs: [
    {
      question: "Should I cover my mini-split outdoor unit in winter?",
      answer:
        "Not if it heats. The unit needs free airflow through the coil and free drainage beneath it all winter, and a cover works against both. Manufacturer-designed baffles or stands are the supported way to deal with wind and snow.",
    },
    {
      question: "Should I turn the outdoor unit off for winter?",
      answer:
        "Leave it powered if it will be heating. Some models warm the compressor during standby, and removing that protection is a decision the manual should be making rather than a habit.",
    },
    {
      question: "When should I test the heating?",
      answer:
        "Early enough that a fault is an inconvenience rather than an emergency. A full heating cycle on a cool autumn day gives time to arrange service before the weather turns.",
    },
    {
      question: "What about snow piling up around the outdoor unit?",
      answer:
        "Clear it away from the coil faces and from beneath the unit so meltwater can drain. If drifting reaches the cabinet every year, the mounting height is the thing to change, and that is an installer's job.",
    },
  ],
  sourceIds: ["trane-ductless-maintenance", "fujitsu-aduh-operation", "daikin-mxs-engineering"],
  relatedContent: [
    "/how-to-clean-around-outdoor-unit/",
    "/heat-pump-outdoor-unit-iced-over/",
    "/mini-split-not-heating/",
    "/how-heat-pump-defrost-works/",
  ],
  glossaryTerms: ["defrost-cycle", "heat-pump", "air-filter"],
  keywords: [
    "mini split winter preparation",
    "should I cover my heat pump",
    "heat pump winter maintenance",
    "mini split snow clearance",
  ],
});
