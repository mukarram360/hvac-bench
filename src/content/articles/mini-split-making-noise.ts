import { publish } from "./publish";

/**
 * A noise question is answered by matching the sound, not by a procedure. The
 * comparison table is the substance of this page, and the reasoning is about
 * which sounds have a documented normal explanation.
 */
export const miniSplitMakingNoise = publish({
  title: "Mini-split noise: normal sounds and warning signs",
  slug: "mini-split-making-noise",
  path: "/mini-split-making-noise/",
  description:
    "Identify normal refrigerant, expansion, and defrost sounds while separating rattling, grinding, arcing, or new mechanical noise that needs service.",
  articleType: "troubleshooting",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless systems; normal sound lists differ between manuals"],
  problemType: "abnormal-noise",
  directAnswer:
    "Brief flowing, soft squeaking from panel expansion, and defrost sizzling can be normal; grinding, repeated impact, electrical buzzing, or a new loud vibration is not explained by those normal operating sounds.",
  scopeNotice:
    "Manufacturers document the sounds their equipment makes in normal operation, and the list differs between models. Treat the comparisons here as the general pattern and check the operating manual for your indoor and outdoor units, which will describe the specific noises it expects to make.",
  symptoms: [
    "The indoor or outdoor unit clicks, flows, squeaks, buzzes, rattles, grinds, or changes sound during defrost.",
  ],
  causes: [
    "Refrigerant flow, thermal expansion, and automatic defrost produce documented normal sounds.",
    "Loose mounting, debris, fan contact, motor wear, or electrical faults can produce abnormal noise.",
  ],
  diagnosticBranches: [
    {
      title: "The sound has always been there",
      observation:
        "The noise dates from installation or from the first time the system was used in a particular mode, and nothing about it has changed since.",
      action:
        "Compare it with the normal sounds listed in the exact operating manual before treating it as a fault. Cited manuals document refrigerant flow, temperature-related plastic movement, and valve operation on covered models, but the expected sounds are model-specific.",
    },
    {
      title: "The sound is new",
      observation:
        "The system used to be quiet, or quieter, and a distinctly different noise has appeared over days or weeks.",
      action:
        "Note when it started, which unit it comes from, and what the system is doing when it happens. A change in an established machine carries much more information than the noise itself.",
    },
    {
      title: "It is grinding, scraping, or striking something",
      observation:
        "The noise sounds mechanical and repetitive, like a blade hitting something or a bearing that has lost its smoothness.",
      action:
        "Switch the system off and leave it off. Something rotating is touching something it should not, and continuing to run it turns a small repair into a motor or fan replacement.",
    },
    {
      title: "There is buzzing, crackling, or a smell with it",
      observation:
        "The sound is electrical rather than mechanical, or comes with a hot or burning smell, or with dimming of nearby lights.",
      action:
        "Turn the system off at the breaker and arrange service straight away. This is the one category in this page where waiting is not a reasonable option.",
    },
  ],
  comparisonTable: {
    caption: "Matching the sound to an explanation",
    columns: ["What you hear", "Documented normal explanation", "When the same sound is not normal"],
    rows: [
      [
        "Water or gas flowing, gurgling, or trickling",
        "Refrigerant moving through the circuit, especially at start and stop",
        "It arrives with lost heating or cooling performance rather than on its own",
      ],
      [
        "Soft creaking or squeaking from the indoor case",
        "Plastic panels expanding and contracting as temperature changes",
        "It becomes a rattle or a buzz that shakes the mounting",
      ],
      [
        "Hissing or sizzling from the outdoor unit in winter",
        "A defrost cycle melting frost off the outdoor coil",
        "It continues while the coil stays iced and heating does not return",
      ],
      [
        "A single click at start or stop",
        "A valve or relay changing state",
        "The clicking repeats rapidly instead of happening once",
      ],
      [
        "Grinding, scraping, or knocking",
        "None; this is not a documented normal sound",
        "Stop the system and arrange service",
      ],
      [
        "Electrical buzzing or crackling",
        "None; this is not a documented normal sound",
        "Stop the system; arrange urgent service if heat or burning odor is present",
      ],
    ],
  },
  sections: [
    {
      title: "Ductless systems are not silent, and that is by design",
      paragraphs: [
        "A mini-split moves refrigerant through pipework by boiling and condensing it, and both of those are audible. So is the plastic case of the indoor unit as it changes temperature, and so are the valves that change the direction of flow. Manufacturers list these sounds in their manuals precisely because owners ring up about them.",
        "The equipment is also mounted on a wall in a quiet room, which is a different acoustic situation from a boiler in a cupboard. Sounds that would go unnoticed elsewhere are perfectly audible at two in the morning, and a system that has been running for two years without anyone noticing may simply be being heard for the first time in a newly quiet house.",
      ],
    },
    {
      title: "Change is the signal, not volume",
      paragraphs: [
        "Whether a sound is new, changing, or tied to a particular mode is useful context. An unchanged sound may match normal noises listed in the exact operating manual, while a new or worsening sound deserves comparison with that manual and the other symptoms present.",
        "Bearings do not fail silently, fan blades that have picked up debris announce it, and mountings that have worked loose produce a vibration that was not there before. In each case the useful description is comparative: what it used to sound like, what it sounds like now, and when the change happened.",
      ],
    },
    {
      title: "Recording it properly",
      paragraphs: [
        "Take a phone recording while noting which unit it comes from, the operating mode, and when it occurs. A recording can preserve an intermittent sound for comparison when it is absent during service.",
        "Also check for loose objects outside the equipment before assuming an internal fault. An object touching the cabinet or a nearby cover can vibrate, but do not remove panels or reach through a grille to investigate.",
      ],
    },
  ],
  figures: [
    {
      title: "Locating a noise before describing it",
      description:
        "Which part of the system a sound comes from narrows the explanation faster than the sound itself does.",
      nodes: [
        { label: "Indoor case", detail: "Panels and louvres moving with temperature" },
        { label: "Refrigerant pipework", detail: "Flow noise at start, stop, and mode change" },
        { label: "Outdoor fan", detail: "Air noise, debris contact, or bearing wear" },
        { label: "Compressor and valves", detail: "Starting, switching, and mechanical wear" },
      ],
    },
  ],
  safeChecks: [
    "Note the exact sound, unit, operating mode, and timing, and compare it with the normal sounds in the model manual.",
    "With the system off, clear only loose objects outside the equipment and confirm furniture is not vibrating against the wall unit.",
  ],
  professionalEscalation: [
    "Stop operation for grinding, burning odor, smoke, arcing, severe vibration, or a fan striking something.",
    "Internal fan, motor, mounting, refrigerant, and electrical inspections require service.",
  ],
  serviceHandoff:
    "Bring a recording of the noise if you can capture one, and say which unit makes it, what mode the system is in when it happens, whether it is constant or intermittent, when it started, and what the system sounded like before.",
  faqs: [
    {
      question: "Why does my mini split sound like running water?",
      answer:
        "Some manufacturer manuals list refrigerant flow among normal sounds on covered models, including around start-up or shutdown. Compare the sound with the exact manual and report it if it is new, changed, or paired with lost performance.",
    },
    {
      question: "Is a clicking noise at start-up a problem?",
      answer:
        "A single click as a valve or relay changes state is normal. Rapid repeated clicking is not, and it is worth reporting because it suggests something is trying to operate and not succeeding.",
    },
    {
      question: "The outdoor unit hisses in winter. Should I worry?",
      answer:
        "Some manufacturer manuals document hissing or sizzling during a defrost sequence. Compare the sound and the coil-clearing sequence with the exact manual; persistent ice, missing heat, or a new sound needs diagnosis.",
    },
    {
      question: "Can I stop the indoor unit rattling myself?",
      answer:
        "You can check whether something outside the unit is the source, such as a loose line cover, an object on top of the outdoor unit, or a nearby frame vibrating. Anything that requires opening the case belongs with a technician.",
    },
  ],
  sourceIds: ["fujitsu-troubleshooting", "fujitsu-rls2-operation"],
  relatedContent: [
    "/troubleshooting/",
    "/mini-split-outdoor-unit-not-running/",
    "/mini-split-smells-musty/",
  ],
  keywords: [
    "mini split making noise",
    "mini split gurgling sound",
    "ductless unit rattling",
    "mini split clicking noise",
    "heat pump grinding noise",
  ],
});
