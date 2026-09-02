import { publish } from "./publish";

/**
 * "Inverter" is a marketing word that happens to also be an engineering one,
 * and the gap between the two is where the reader's confusion lives. The page
 * is organised around what the word does and does not promise, then around the
 * behaviours it produces that get reported as faults.
 */
export const inverterTechnologyExplained = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "What inverter really means on an HVAC system",
  slug: "inverter-technology-explained",
  path: "/inverter-technology-explained/",
  description:
    "How variable compressor speed changes the way a system runs, the four claims the word does not support, and which inverter behaviours look like faults but are not.",
  articleType: "guide",
  equipmentType: "heat-pump",
  problemType: "inverter-operation",
  models: [
    "Variable-capacity inverter air conditioners and heat pumps",
    "Minimum and maximum output are model-specific and published per system",
  ],
  directAnswer:
    "An inverter drives the compressor motor at a variable speed instead of one fixed speed, so the system can match its output to the load. It does not mean the compressor never stops, never fails, or runs at any output you ask for.",
  scopeNotice:
    "Modulation range, control logic, and protection behaviour belong to the exact matched system. Where this page describes a behaviour as designed, the boundary between designed and faulty comes from the manufacturer's documentation for that system, not from the word inverter.",
  layout: ["sections", "comparisonTable", "figures", "branches"],
  symptoms: [
    "What varying the compressor speed changes about how a system runs.",
    "Which claims the word inverter does not support on its own.",
    "Which running patterns are the design and which are worth reporting.",
  ],
  causes: [
    "Every inverter has a documented minimum output, and a load below it still forces cycling.",
    "Protection logic can reduce output or stop the compressor without any component having failed.",
  ],
  sections: [
    {
      title: "The thing that actually changes",
      paragraphs: [
        "A fixed-speed compressor has one output. Control is by switching it on and off, so the room temperature saws around the setpoint and the equipment absorbs a start-up surge each time it restarts.",
        "An inverter converts the incoming supply into a variable-frequency output for the compressor motor, so the motor speed and the refrigerant flow follow it. The controller reads temperatures and asks for the output the room needs, then holds it there.",
        "Two things follow from that. Room temperature can sit closer to the setting because output is trimmed rather than switched, and the system spends most of its running time below rated capacity, which is where a seasonal efficiency test procedure rewards it.",
      ],
    },
    {
      title: "Four things the word does not promise",
      paragraphs: [
        "It does not promise continuous running. Every inverter has a published minimum output, and a mild day can put the building's load below it. The compressor then stops and restarts, exactly as fixed-speed equipment does.",
        "It does not promise capacity at any condition. Available output still falls as the outdoor temperature drops in heating or rises in cooling, and the capacity table for the matched system is where that is read.",
        "It does not promise savings in a particular house. Part-load operation is what makes savings possible; sizing, climate, controls, installation quality, tariff, and the system being replaced decide whether they arrive.",
        "It does not promise reliability. Inverter equipment adds power electronics to the outdoor unit, which is why inverter-module protection codes exist as a category at all.",
      ],
    },
    {
      title: "The behaviours that get reported as faults",
      paragraphs: [
        "One is a system that runs and runs. At low output near the setpoint it is replacing heat as fast as the room loses it, which is the intended steady state and uses less energy than repeatedly restarting.",
        "The second is an outdoor unit that sounds different from week to week. Compressor and fan speeds are being varied, so the pitch changes with load and outdoor conditions rather than staying at one note.",
        "The third is capacity that seems to arrive slowly. Controls ramp output rather than jumping to maximum, and some models hold a start delay after a stop to protect the compressor. Both are documented behaviours rather than a weak system.",
      ],
    },
  ],
  figures: [
    {
      title: "What sets the compressor speed",
      description:
        "A request travels one way and a limit travels the other. Both can change the output, which is why a low or halted output is not by itself a diagnosis.",
      nodes: [
        { label: "Room sensor", detail: "Reports how far the space is from its setting" },
        { label: "Controller", detail: "Converts that gap into a requested output" },
        { label: "Inverter module", detail: "Produces the variable-frequency drive for the motor" },
        { label: "Compressor", detail: "Runs at the resulting speed within its published range" },
        { label: "Protection limits", detail: "Current, pressure, and temperature can override the request" },
      ],
    },
  ],
  comparisonTable: {
    caption: "Fixed-speed and inverter, on the points a reader can observe",
    columns: ["What you observe", "Fixed-speed", "Inverter"],
    rows: [
      [
        "Running pattern near setpoint",
        "On at full output, then off, repeatedly",
        "A long hold at reduced output",
      ],
      [
        "Room temperature",
        "Swings either side of the setting",
        "Sits closer to the setting once stable",
      ],
      [
        "Sound",
        "One note, present or absent",
        "Pitch rises and falls with the load",
      ],
      [
        "Behaviour below minimum output",
        "Cycles, by design",
        "Also cycles, once the load is under its documented minimum",
      ],
      [
        "Outdoor electronics",
        "Contactor and capacitor",
        "Adds a power module, with its own protection codes",
      ],
    ],
  },
  diagnosticBranches: [
    {
      title: "Output settles low and stays there",
      observation:
        "The system runs for hours at a quiet, steady output, and room temperature holds within a degree or so of the setting.",
      action:
        "This is the design. Nothing to record unless comfort is poor or a code appears, in which case the code is the better evidence than the running pattern.",
    },
    {
      title: "It starts and stops in short bursts",
      observation:
        "The compressor runs for a few minutes, stops, and restarts, repeatedly, and the room does not settle.",
      action:
        "Time three consecutive run and off periods and note the outdoor temperature. A load below minimum output, a control problem, and an active protection all look identical from the room.",
    },
    {
      title: "It stops and shows a protection code",
      observation:
        "Operation halts and the display or indicator lights report a protection rather than resuming on its own.",
      action:
        "Record the code exactly as displayed before restarting. Inverter protections cover current, pressure, discharge temperature, and module temperature, and the code narrows which one far faster than the symptom does.",
    },
  ],
  faqs: [
    {
      question: "Does an inverter mini-split ever turn off?",
      answer:
        "Yes. When the building's load falls below the system's documented minimum output, the compressor stops and restarts. Controls and protections can also stop it. Continuous running is common near the setpoint, not guaranteed.",
    },
    {
      question: "Is an inverter compressor the same as a variable-speed fan?",
      answer:
        "No. Both can vary speed, but they are separate motors doing separate jobs. Fan speed changes airflow across a coil; compressor speed changes how much refrigerant is circulating and therefore how much heat is moved.",
    },
    {
      question: "Will an inverter system save me money?",
      answer:
        "The technology makes part-load operation possible, which is where the saving comes from. Whether it materialises depends on sizing, climate, how the system is controlled, installation quality, the tariff, and what it replaced.",
    },
    {
      question: "Why does my inverter unit change pitch while running?",
      answer:
        "Compressor and fan speeds are being adjusted to the load and the outdoor conditions. A changing note is the control system working. A new mechanical noise, such as rattling or grinding, is a different matter.",
    },
  ],
  sourceIds: ["doe-heat-pumps", "gree-product-catalog", "trane-mini-split-modulation"],
  relatedContent: [
    "/mini-split-short-cycling/",
    "/mini-split-outdoor-unit-not-running/",
    "/how-mini-splits-work/",
    "/seer2-explained/",
  ],
  glossaryTerms: ["inverter-compressor", "inverter-module", "short-cycling", "protection-code"],
  keywords: [
    "inverter HVAC explained",
    "variable speed compressor",
    "inverter vs fixed speed",
    "does an inverter mini split turn off",
  ],
});
