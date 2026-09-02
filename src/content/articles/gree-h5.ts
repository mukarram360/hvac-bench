import { publish } from "./publish";

/**
 * H5 is a protection, not a diagnosis. The page is organised around the one
 * distinction a homeowner can actually make from outside the equipment: when
 * in the run cycle the protection trips.
 */
export const greeH5 = publish({
  title: "Gree H5 error code: intelligent power module protection",
  slug: "h5-error-code",
  path: "/brands/gree/h5-error-code/",
  description:
    "A source-qualified explanation of Gree H5 protection, observable airflow checks, and the electrical and refrigerant tests reserved for HVAC service.",
  articleType: "error-code",
  brand: "gree",
  equipmentType: "heat-pump",
  productFamily: "Gree residential inverter systems covered by the OEM guide",
  models: ["Gree residential inverter systems; verify the model service manual"],
  errorCode: "H5",
  problemType: "inverter-module-protection",
  directAnswer:
    "Gree identifies H5 as intelligent power module protection caused by an IPM synchronization or overcurrent condition; the protection can have airflow, refrigerant, wiring, board, or compressor causes.",
  scopeNotice:
    "H5 as described here follows the Gree technical guide for residential inverter systems. Protection codes are tied to a specific drive design, so confirm the service manual for your model before treating this as the definition, and never assume a Gree code carries across to another manufacturer.",
  symptoms: [
    "The indoor unit reports H5 and compressor operation may stop to protect the drive system.",
  ],
  causes: [
    "Restricted indoor or outdoor airflow can contribute to abnormal operating load.",
    "Refrigerant circuit, compressor, wiring, or inverter-drive faults require model-specific testing.",
  ],
  diagnosticBranches: [
    {
      title: "H5 appears within seconds of the compressor starting",
      observation:
        "The system attempts to start, the outdoor unit runs briefly or not at all, and the protection is reported almost immediately every time.",
      action:
        "Stop restarting it. A protection that trips before the system has done any work points at the electrical side of the drive rather than at anything you can improve from outside, and repeated attempts put the module through the same stress each time.",
    },
    {
      title: "H5 appears only after the system has been running a while",
      observation:
        "Cooling or heating is delivered normally for some minutes, then the compressor stops and the protection is reported, often on the hottest or coldest part of the day.",
      action:
        "Note the outdoor conditions and the run time before the trip, then check for the airflow restrictions listed below. A drive that trips under sustained load is worth checking on the load side before any part is condemned.",
    },
  ],
  figures: [
    {
      title: "What the drive is protecting itself against",
      description:
        "The intelligent power module sits between the supply and the compressor. It stops when current or synchronisation leaves its safe window, and conditions on either side of it can push it there.",
      nodes: [
        { label: "Incoming supply", detail: "Voltage and stability arriving at the drive" },
        { label: "Power module", detail: "Switches current to the compressor and monitors it" },
        { label: "Compressor", detail: "Electrical condition and mechanical load" },
        { label: "Operating load", detail: "Airflow and heat rejection the system works against" },
      ],
    },
  ],
  comparisonTable: {
    caption: "What airflow can and cannot explain about H5",
    columns: ["Observation", "Worth acting on", "Why it is not the whole answer"],
    rows: [
      [
        "The return filter is visibly loaded with dust",
        "Clean it as the operating manual for your model directs",
        "Restricted indoor airflow raises operating load, but a clean filter alone has never been a diagnosis",
      ],
      [
        "The outdoor coil is packed with leaves or cottonwood",
        "Clear loose debris from around the unit with the power off",
        "Heat rejection improves, yet a module that trips instantly was probably never load limited",
      ],
      [
        "Everything is clean and H5 still returns",
        "Leave the system off for professional diagnosis",
        "The remaining causes sit inside the sealed system and the drive, where measurement is the only way forward",
      ],
    ],
  },
  sections: [
    {
      title: "A protection code is a decision the equipment made",
      paragraphs: [
        "H5 does not mean a component has failed. It means the drive detected a current or synchronisation condition outside the window it will operate in, and shut down rather than continue. That distinction changes what you should do next. A fault report invites a repair; a protection report invites a question about what conditions pushed the equipment there.",
        "Some of those conditions are ordinary and improvable, such as a filter that has not been cleaned in two summers. Others are electrical and internal. The code itself does not rank them, which is why a shop that replaces the board on the strength of H5 alone is guessing with your money.",
      ],
    },
    {
      title: "Why repeated restarts are the wrong instinct",
      paragraphs: [
        "The temptation with a protection code is to clear it and see. It is worth understanding what that does. Each restart puts the same start current through the same module under the same conditions, and if the underlying condition is electrical, every attempt is another stress cycle on the part you are hoping is healthy.",
        "One restart is diagnostic: it tells you whether the protection is immediate or delayed, and that single observation is the most useful thing you can hand a technician. Beyond that, restarts stop producing information and start producing wear.",
        "There is a second cost that is easy to miss. Inverter systems record what they see, and a fault that has been cleared repeatedly leaves a muddier picture than one that was left alone after it appeared. Switching the system off and calling gives a technician a system in the state that produced the code, which is worth more than a system that has been persuaded to run one more time.",
      ],
    },
  ],
  safeChecks: [
    "Turn the system off and look for a blocked return filter or obvious debris restricting the outdoor coil.",
    "Record whether H5 appears immediately or only after the compressor begins operating.",
  ],
  professionalEscalation: [
    "Refrigerant pressure, compressor winding, DC bus, and live-voltage tests are technician work.",
    "Do not replace a board or compressor until the root operating condition is confirmed.",
  ],
  serviceHandoff:
    "Tell the technician how long the system runs before H5 appears, what the outdoor temperature was, whether the outdoor fan was turning at the moment it stopped, when the filter and outdoor coil were last cleaned, and whether the code has ever cleared on its own.",
  resetGuidance:
    "A single restart can document recurrence, but repeated clearing does not correct an overcurrent or inverter protection condition.",
  faqs: [
    {
      question: "Does H5 mean my compressor is dead?",
      answer:
        "Not by itself. H5 reports that the power module stopped on a current or synchronisation condition. A failing compressor is one thing that can produce it, but so can supply problems, drive faults, wiring, and sustained operating load. Testing separates them; the code does not.",
    },
    {
      question: "Will cleaning the filter fix H5?",
      answer:
        "It can help if the protection only trips after long runs in extreme weather, because restricted airflow raises the load the drive works against. It will not help a protection that trips within seconds of starting, and it is worth doing regardless as basic maintenance.",
    },
    {
      question: "How many times can I safely restart it?",
      answer:
        "Once, to learn whether the protection is immediate or delayed. After that you are repeating the same electrical stress without gaining information. If H5 returns, leave the system off and arrange diagnosis.",
    },
    {
      question: "Why does H5 only happen on hot afternoons?",
      answer:
        "Heat rejection is hardest when the outdoor temperature is highest, so a system that is marginal on airflow, refrigerant charge, or drive condition will reach its protection limit then and nowhere else. The pattern is genuinely useful evidence, so record it.",
    },
  ],
  sourceIds: ["gree-h5-guide"],
  relatedContent: ["/brands/gree/", "/mini-split-not-cooling/", "/mini-split-filter-cleaning/"],
  keywords: [
    "gree h5 error code",
    "gree h5 ipm protection",
    "gree inverter module protection",
    "gree h5 keeps coming back",
    "gree mini split h5",
  ],
});
