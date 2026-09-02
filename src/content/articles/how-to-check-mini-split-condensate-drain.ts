import { publish } from "./publish";

/**
 * The drain is mostly concealed, which means the honest owner procedure is
 * short and the page's value is in explaining what the visible evidence
 * implies about the invisible pipe. Structured as: where the water comes from,
 * what you can actually see, what each observation means, and the hard stop
 * before anyone reaches for a wet vacuum or a bottle of bleach.
 */
export const howToCheckMiniSplitCondensateDrain = publish({
  title: "How to check a mini-split condensate drain",
  slug: "how-to-check-mini-split-condensate-drain",
  path: "/how-to-check-mini-split-condensate-drain/",
  description:
    "Where the water comes from, which parts of the drain an owner can actually see, what dripping or no dripping tells you, and where the procedure has to stop.",
  articleType: "how-to",
  equipmentType: "air-handler",
  problemType: "condensate-check",
  models: [
    "Ductless indoor units with gravity drains or a condensate lift pump",
    "Concealed pipework, traps, and shared drains are technician territory",
  ],
  directAnswer:
    "An owner can check the visible outlet, the external hose run, and whether water is arriving where it should. Everything upstream of that, including the pan, the trap, and any concealed pipe, needs the indoor unit opened and belongs to a technician.",
  scopeNotice:
    "Drain arrangements differ widely: gravity runs to outside, lift pumps into a ceiling void, traps, and drains shared with other appliances all exist. The installation manual for your indoor unit defines the path and the fall it requires.",
  layout: ["sections", "steps", "decisionTable"],
  symptoms: [
    "Water is dripping from the indoor unit, or staining the wall beneath it.",
    "The outdoor end of the drain hose is dry during long cooling runs.",
    "A gurgling or bubbling noise comes from the indoor unit while it cools.",
  ],
  causes: [
    "A blockage anywhere in the path backs water up until it overflows the pan.",
    "A lift pump that has stopped leaves the pan filling with nowhere to send the water.",
  ],
  sections: [
    {
      title: "Where the water comes from",
      paragraphs: [
        "Cooling removes moisture as well as heat. Room air passing over a cold coil drops below its dew point, water condenses on the fins, and it runs down into a pan under the coil. From there it has to leave the building.",
        "On a humid day this is litres, not drops. That is why a drain problem shows up as water on the floor rather than as a damp patch, and why a system that has been cooling for hours with a bone-dry outdoor drain hose is telling you something.",
        "Heating produces little or no indoor condensate, which is why a leak that only appears in cooling weather points at the drain, while one that appears in heating points elsewhere.",
      ],
    },
    {
      title: "What an owner can actually see",
      paragraphs: [
        "Three things: the point where the drain hose leaves the building or discharges, the exposed run of hose between the wall and that point, and whether a pump is audible when the system is cooling.",
        "That is a short list because the rest is inside. The pan sits under the indoor coil behind the casing, the connection between pan and hose is behind the same casing, and any concealed run is in a wall, a void, or a ceiling.",
        "The short list is still useful. A dry outlet during a long cooling run and water appearing indoors are, together, strong evidence of a blockage without anything being opened.",
      ],
    },
  ],
  steps: [
    {
      name: "Run the system in cooling",
      text: "Set cooling with a setpoint below the room temperature and let it run for a sustained period on a humid day. The drain has nothing to carry until the coil has been producing condensate for a while.",
    },
    {
      name: "Find where the hose discharges",
      text: "Follow the pipe from the indoor unit to where it leaves the building. It exits alongside the refrigerant pipes and discharges to a drain, a gully, or open ground. Note where that point is before you need it in a hurry.",
    },
    {
      name: "Check whether water is arriving",
      text: "During a sustained cooling run on a humid day, water should be arriving at the discharge point. Note whether it is dripping steadily, trickling, or not appearing at all.",
    },
    {
      name: "Look along the exposed hose",
      text: "Check the visible run for kinks, crushing where it passes a fixing, a section that rises before it falls, or an end sitting in a puddle or buried in leaves. A drain works on gravity and any of these stops it.",
    },
    {
      name: "Listen for a pump",
      text: "If your installation uses a condensate lift pump, it makes a distinct hum or buzz during cooling. Note whether it runs, runs continuously without stopping, or has gone silent while the unit is still cooling.",
    },
    {
      name: "Stop and record",
      text: "Write down what you found: dripping or dry, hose condition, pump audible or not, and where the water is appearing indoors. That set of observations is what a technician needs and is as far as the outside of the system goes.",
    },
  ],
  decisionTable: {
    caption: "What each observation points to",
    columns: ["What you found", "What it suggests", "Next"],
    rows: [
      [
        "Steady water at the outlet, dry indoors",
        "The drain path is working",
        "Nothing further; check again if indoor dripping starts",
      ],
      [
        "Dry outlet, water appearing indoors",
        "The path is blocked somewhere along its length",
        "Technician; the blockage is beyond owner access",
      ],
      [
        "Hose kinked, crushed, or rising before it falls",
        "The fall the drain needs has been lost",
        "Technician or installer to correct the routing",
      ],
      [
        "Outlet buried in soil, leaves, or standing water",
        "The discharge end is obstructed",
        "Clear around the end by hand and re-check",
      ],
      [
        "Pump silent while the unit cools",
        "The lift pump is not running",
        "Technician; pump and float switch are not owner parts",
      ],
      [
        "Water appears only in heating",
        "Condensate is unlikely to be the source",
        "Look at the leak as a separate question",
      ],
    ],
  },
  safeChecks: [
    "Look only at the exposed hose run and its discharge point, from outside the equipment.",
    "Clear soil, leaves, or debris away from the discharge end by hand.",
    "Switch the system off and place a container under the indoor unit if it is dripping onto flooring or electrics.",
  ],
  professionalEscalation: [
    "Stop before opening the indoor unit, disconnecting any pipework, or removing a cover.",
    "Do not pour bleach, tablets, or drain chemicals into a system whose path and materials you cannot see.",
    "Do not put a wet vacuum on a concealed line; suction on the wrong end can push a blockage or damage a joint.",
    "Call for service immediately if water is reaching electrical parts, and isolate the supply first.",
  ],
  serviceHandoff:
    "Tell the technician whether water reaches the outdoor discharge during a long cooling run, the condition of the visible hose, whether a pump is audible, where indoors the water appears, and whether it happens in cooling only.",
  faqs: [
    {
      question: "Why is my mini-split dripping water inside?",
      answer:
        "Condensate that cannot leave through the drain backs up and overflows the pan. A blockage, a lost fall in the pipe, or a stopped lift pump all produce that, and telling them apart needs the unit opened.",
    },
    {
      question: "Should water be coming out of the outdoor drain pipe?",
      answer:
        "During sustained cooling on a humid day, yes. A dry outlet during a long cooling run, with water appearing indoors, is one of the clearer signs available without opening anything.",
    },
    {
      question: "Can I use a wet vacuum on the drain line?",
      answer:
        "Not on a concealed line. Suction applied at the wrong point can move a blockage further in or disturb a joint you cannot see, and the pipe run and its materials are not visible from outside.",
    },
    {
      question: "Are drain cleaning tablets safe for a mini-split?",
      answer:
        "Treat them as a technician's decision. They are placed in a specific part of the system, and where they end up depends on a drain layout an owner cannot inspect.",
    },
  ],
  sourceIds: ["gree-water-leak", "trane-mini-split-leak", "fujitsu-filter-manual"],
  relatedContent: [
    "/mini-split-leaking-water/",
    "/mini-split-smells-musty/",
    "/mini-split-filter-cleaning/",
    "/mini-split-frozen-coil/",
  ],
  glossaryTerms: ["condensate-drain", "float-switch", "evaporator-coil"],
  keywords: [
    "mini split drain check",
    "condensate drain blocked",
    "mini split dripping water inside",
    "ductless drain line",
  ],
});
