import { publish } from "./publish";

/**
 * Indoor coil ice has two families of cause that behave differently over
 * time. The page teaches the reader to tell them apart by watching how the
 * ice returns, because that is the observation a technician cannot make.
 */
export const miniSplitFrozenCoil = publish({
  title: "Mini-split frozen coil: airflow, thawing, and service limits",
  slug: "mini-split-frozen-coil",
  path: "/mini-split-frozen-coil/",
  description:
    "What indoor coil ice can indicate, how to shut down and restore safe airflow, and why recurring ice needs refrigerant, sensor, or control diagnosis.",
  articleType: "troubleshooting",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless indoor units; filter access varies by model"],
  problemType: "frozen-indoor-coil",
  directAnswer:
    "Ice on a mini-split indoor coil means heat transfer is not staying in the normal range; restricted airflow is a common check, while low refrigerant, sensors, fan, or controls need professional diagnosis.",
  scopeNotice:
    "Ice on an indoor coil in cooling is a different condition from frost on an outdoor coil in heating, which is normal and handled by defrost. This page covers the indoor coil. Filter construction and what an owner may clean vary by model, so follow the operating manual for yours.",
  symptoms: [
    "Ice appears behind the filter, airflow weakens, cooling falls, or water leaks as the coil thaws.",
  ],
  causes: [
    "A loaded filter, blocked intake, blocked outlet, or dirty heat exchanger can restrict airflow.",
    "Refrigerant loss, fan faults, thermistor faults, or control problems can also drive abnormal coil temperature.",
  ],
  diagnosticBranches: [
    {
      title: "The filter is visibly loaded and the ice is recent",
      observation:
        "Lifting the panel shows a filter matted with dust, and cooling performance has been fading for weeks rather than failing suddenly.",
      action:
        "Switch cooling off, let the ice melt on its own, clean the filter as the manual directs, and restart once while watching. If ice does not return over the following days, airflow was the constraint.",
    },
    {
      title: "Ice returns even with a clean filter and clear airflow",
      observation:
        "The filter has been cleaned, nothing blocks the intake or the outlet, and the coil ices up again within a day or two of restarting.",
      action:
        "Stop running it in cooling; the remaining diagnosis needs a qualified technician. Once airflow is genuinely eliminated, the remaining causes are refrigerant charge, the coil sensor, the indoor fan, and the control, and none of them are owner-serviceable.",
    },
    {
      title: "There is oily residue near the coil or pipework",
      observation:
        "A damp oily film or dirt sticking to one spot on the pipework or coil, often with the icing.",
      action:
        "Report this specifically to the technician. Refrigerant oil traces at a joint are a meaningful pointer to a leak and change what should be tested first.",
    },
    {
      title: "The system was run hard in cool weather",
      observation:
        "Cooling was left running with a very low setpoint on a mild evening, or overnight with windows open.",
      action:
        "Note the conditions, thaw the coil, and use a more moderate setpoint. Cooling operation at low outdoor and indoor temperatures brings coil temperature closer to freezing before any fault is involved.",
    },
  ],
  decisionTable: {
    caption: "How the ice returns tells you where to look",
    columns: ["Pattern after thawing", "What it points at", "What to do"],
    rows: [
      [
        "Ice does not come back after cleaning the filter",
        "Airflow restriction was the cause and it has been corrected",
        "Set a filter cleaning reminder and treat it as maintenance",
      ],
      [
        "Ice returns within a day or two with airflow clear",
        "Refrigerant, sensing, fan, or control conditions inside the system",
        "Leave cooling off and arrange diagnosis rather than repeating the thaw",
      ],
      [
        "Ice only forms in unusually cool conditions",
        "Operating conditions pushing coil temperature down",
        "Use a moderate setpoint and mention the pattern to the technician",
      ],
    ],
  },
  sections: [
    {
      title: "Why a coil freezes at all",
      paragraphs: [
        "The indoor coil is cold because refrigerant is absorbing heat from the room air passing over it. That balance depends on enough air arriving. When airflow falls, the coil has less heat to absorb, its temperature drops below freezing, and the moisture condensing on it turns to ice instead of running into the drain pan.",
        "The ice then makes everything worse, because it blocks the very airflow that was already short. This is why a coil goes from slightly reduced performance to a solid block of ice quickly once it starts. It is a runaway condition rather than a gradual one.",
      ],
    },
    {
      title: "Low charge produces the same symptom",
      paragraphs: [
        "A system low on refrigerant ices up too, and it looks identical from the room. The mechanism differs: with less refrigerant in the circuit, the pressure in the coil falls, and a lower pressure means a lower boiling temperature, so the coil runs colder than it should even with perfect airflow.",
        "The distinction matters because the responses are opposite. An airflow problem is fixed by cleaning something and stays fixed. A low charge means refrigerant has escaped, because it is not consumed in normal operation, and adding more without finding the leak means paying for the same repair again. This is the single most useful thing to understand before agreeing to a top-up.",
      ],
    },
    {
      title: "Thawing without causing damage",
      paragraphs: [
        "Switch cooling off and leave the system alone. Running the fan alone will speed it up on many models and is safe, since it moves room air over the coil without cooling it. What you must not do is help it along physically.",
        "Ice bonds to the fins, and chipping, scraping, or levering at it bends them or punctures the tubing behind. A puncture turns a service call into a sealed system repair. Heat guns and boiling water are the other route to the same outcome. Put a towel down for the meltwater, be patient, and let it come off by itself.",
      ],
    },
  ],
  figures: [
    {
      title: "The balance that keeps an indoor coil above freezing",
      description:
        "Coil temperature is the result of heat arriving and heat being absorbed. Ice means those two have moved apart, and either side can be the reason.",
      nodes: [
        { label: "Room air arriving", detail: "Volume of warm air crossing the coil" },
        { label: "Refrigerant absorbing", detail: "Pressure and charge setting coil temperature" },
        { label: "Coil surface", detail: "Where the two meet and where ice forms" },
        { label: "Condensate", detail: "Water running to the drain, or freezing in place" },
      ],
    },
  ],
  safeChecks: [
    "Turn cooling off and let the coil thaw naturally; protect the wall and floor from meltwater.",
    "Clean the user-removable filter and clear intake and outlet obstructions before one monitored restart.",
  ],
  professionalEscalation: [
    "Recurring ice, visible oil, damaged insulation, fan problems, or fault codes require service.",
    "Never chip ice, bend fins, add refrigerant, or open the sealed system.",
  ],
  serviceHandoff:
    "Say how quickly ice returns after a thaw, whether the filter was clean when it happened, whether any oily residue is visible near the pipework, what setpoint and outdoor conditions were in use, and whether cooling performance had been declining beforehand.",
  faqs: [
    {
      question: "How long does a frozen coil take to thaw?",
      answer:
        "Usually a few hours with the system off, and faster if the manual permits running the fan alone. Do not try to speed it up with heat or by breaking the ice away, because both damage the fins and the tubing behind them.",
    },
    {
      question: "Can I just add refrigerant?",
      answer:
        "No. Refrigerant is not consumed, so a system that is low has leaked, and adding more without finding and repairing the leak means the fault returns. Handling refrigerant is also regulated work in both the United States and the United Kingdom.",
    },
    {
      question: "Why did the coil freeze right after I cleaned the filter?",
      answer:
        "Cleaning removes the restriction but not the ice already formed, and ice blocks airflow all by itself. Let it thaw completely with the system off before you judge whether the filter was the cause.",
    },
    {
      question: "Is a frozen coil dangerous?",
      answer:
        "Not to you directly, but it is hard on the equipment and it produces meltwater that can damage the wall and anything below. Running a system that keeps icing risks liquid returning to the compressor, which is an expensive way to find out.",
    },
  ],
  sourceIds: ["daikin-a5-service", "gree-water-leak", "trane-mini-split-refrigerant"],
  relatedContent: ["/troubleshooting/", "/mini-split-not-cooling/", "/mini-split-leaking-water/"],
  keywords: [
    "mini split frozen coil",
    "ice on mini split indoor unit",
    "mini split freezing up",
    "ductless coil iced over",
    "mini split ice behind filter",
  ],
});
