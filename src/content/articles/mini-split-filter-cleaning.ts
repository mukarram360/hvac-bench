import { publish } from "./publish";

/**
 * A procedure page, so the steps carry the weight. The FAQs here were the
 * worst of the generated artifacts on the old site ("What does How to clean a
 * mini-split filter without damaging it mean?"); they are now the questions
 * people actually ask while standing in front of an open unit.
 */
export const miniSplitFilterCleaning = publish({
  title: "How to clean a mini-split filter without damaging it",
  slug: "mini-split-filter-cleaning",
  path: "/mini-split-filter-cleaning/",
  description:
    "A model-first filter-cleaning routine covering safe shutdown, gentle dust removal, washing only when allowed, complete drying, and service limits.",
  articleType: "maintenance",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless indoor units; filter type and washability vary by model"],
  problemType: "filter-maintenance",
  directAnswer:
    "Most ductless indoor filters are homeowner-serviceable, but removal, washing, drying, and reset steps vary; the exact operating manual remains the authority for your model.",
  scopeNotice:
    "Ductless indoor units carry different filter types, and some hold additional catalytic, carbon, or electrostatic elements alongside the main mesh. Those extra filters usually must not be washed at all and are replaced on their own schedule, so check what your unit contains before treating everything behind the panel the same way.",
  symptoms: [
    "Reduced airflow, lower heating or cooling performance, higher operating noise, or a filter reminder can indicate maintenance is due.",
  ],
  causes: [
    "Dust loading increases airflow resistance and can reduce performance or contribute to coil-temperature problems.",
  ],
  diagnosticBranches: [
    {
      title: "Work out what is actually behind the panel",
      observation:
        "Lifting the front panel reveals one or more mesh filters, and possibly smaller coloured or framed elements clipped to them.",
      action:
        "Identify each one against the operating manual before removing anything. The main mesh is usually washable; additional elements often are not, and washing one of those ruins it.",
    },
    {
      title: "Decide whether it can be washed or only vacuumed",
      observation:
        "The manual states whether the filter is washable and, if so, what water temperature and detergent are permitted.",
      action:
        "Follow it exactly rather than improvising. Hot water distorts plastic mesh permanently, and a distorted filter will not seat properly afterwards, which lets dust past it into the coil.",
    },
  ],
  steps: [
    {
      name: "Switch the unit off before opening it",
      text: "Turn the system off with the normal control rather than at the breaker, and wait for the fan to stop completely so nothing is moving when the panel is opened.",
    },
    {
      name: "Photograph the filters in place",
      text: "Take a photograph before removing anything, showing how each filter sits and which way round it faces. Reassembly is far easier with a picture than with memory.",
    },
    {
      name: "Release the panel and lift the filters out",
      text: "Open the front panel to the position the manual describes and slide the filters out gently. If anything needs force or a screwdriver, stop and check the manual, because you are past the owner boundary.",
    },
    {
      name: "Separate any additional elements",
      text: "Unclip any catalytic, carbon, or electrostatic elements from the main mesh and set them aside. These are usually replaced rather than washed, and water will destroy them.",
    },
    {
      name: "Vacuum the loose dust first",
      text: "Use a soft brush attachment on the dirty face of the mesh to lift loose dust before any water is involved. On a lightly loaded filter this may be all that is needed.",
    },
    {
      name: "Wash only if the manual permits it",
      text: "Rinse from the clean side towards the dirty side so debris is pushed out rather than driven deeper, using lukewarm water and only the detergent the manual allows. Do not use hot water, which distorts the mesh.",
    },
    {
      name: "Dry completely away from direct heat",
      text: "Shake off excess water and leave the filter to dry fully in the shade. A radiator, direct sun, or a hairdryer will warp the frame, and a filter refitted damp will grow exactly the smell you were trying to avoid.",
    },
    {
      name: "Refit in the original orientation and close up",
      text: "Use your photograph to refit each filter the right way round and fully seated, reattach any additional elements, and close the panel until it latches properly.",
    },
    {
      name: "Reset the reminder only as documented",
      text: "If the unit shows a filter reminder, clear it using the procedure in the manual. Do not press unfamiliar buttons to make an indicator disappear, because some of them change configuration.",
    },
  ],
  decisionTable: {
    caption: "How often, and what to expect",
    columns: ["Situation", "Practical interval", "What to watch for"],
    rows: [
      [
        "Ordinary domestic room, moderate use",
        "Check monthly during the season it runs most",
        "Visible grey loading across the mesh is the signal, not the calendar",
      ],
      [
        "Pets, smokers, or heavy dust",
        "Check every two to three weeks in the running season",
        "Loading concentrated in one area can indicate an airflow pattern worth mentioning",
      ],
      [
        "Cleaning makes no difference to performance",
        "Stop repeating it and look further",
        "The coil behind the filter may be fouled, which is a professional clean",
      ],
    ],
  },
  sections: [
    {
      title: "Why this is the one job worth doing yourself",
      paragraphs: [
        "Filter loading is the most common cause of reduced performance in ductless equipment, and it is the only part of the airflow path the manufacturer intends an owner to touch. A blocked filter reduces the air crossing the indoor coil, which cuts delivered capacity, raises running cost, and in cooling can take the coil down towards freezing.",
        "It also costs nothing and takes about ten minutes. A great many service calls that end with a technician cleaning a filter and charging for the visit could have ended differently, which is a strong argument for putting a monthly reminder in your phone during the season the system works hardest.",
      ],
    },
    {
      title: "The mistakes that cost money",
      paragraphs: [
        "Hot water is the most common one. Mesh filters are plastic, and hot water distorts the frame permanently. A warped filter no longer seats against its guides, so air bypasses it and carries dust straight onto the coil, which is the expensive thing you were protecting.",
        "Refitting a damp filter is the second. Moisture in the airstream on a dusty coil is how a musty smell establishes itself, so a filter that is put back wet undoes the point of cleaning it. The third is washing an element that was never meant to be washed, which usually means an additional catalytic or carbon filter that should have been replaced instead.",
      ],
    },
    {
      title: "Where the owner boundary sits",
      paragraphs: [
        "Everything reachable by opening the front panel by hand is yours to clean. That is the filter and the surfaces you can see without disturbing anything. If a step requires a screwdriver, removes a cover with electrical warnings on it, or means touching the coil fins or the blower wheel, it belongs with a technician.",
        "The coil behind the filter is a good illustration. It looks accessible and it is often visibly dirty, and it is also soft aluminium with sharp edges and live parts nearby. Cleaning it properly means dismantling part of the unit and protecting the electrics, which is a service task rather than an ambitious afternoon.",
      ],
    },
  ],
  safeChecks: [
    "Turn the unit off, open only the user-access panel, and photograph the filter orientation before removal.",
    "Vacuum gently or wash only if the manual identifies the filter as washable; use mild detergent when specified and dry completely out of direct heat.",
    "Reinstall the dry filter securely and reset a filter reminder only by the model's documented procedure.",
  ],
  professionalEscalation: [
    "Stop if access requires screws, electrical covers, coil contact, or disassembly beyond the owner manual.",
    "A dirty blower wheel, coil, drain pan, or damaged filter needs model-appropriate parts or professional cleaning.",
  ],
  serviceHandoff:
    "If cleaning has not restored performance, tell the technician how often you clean the filters, how loaded they were, whether any additional elements are fitted and when they were last replaced, and whether the coil behind the filter looks dirty.",
  faqs: [
    {
      question: "How often should I clean a mini split filter?",
      answer:
        "Check monthly during the season the system runs hardest, and every two to three weeks with pets, smokers, or heavy dust. Go by how the mesh looks rather than the calendar, since rooms load filters at very different rates.",
    },
    {
      question: "Can I wash the filter in hot water?",
      answer:
        "No. Use lukewarm water only. Hot water distorts the plastic mesh permanently, and a warped filter no longer seats properly, which lets dust bypass it and settle on the coil instead.",
    },
    {
      question: "How long does a washed filter take to dry?",
      answer:
        "Give it several hours in the shade, and confirm it is dry to the touch across the whole mesh before refitting. Never use a radiator, direct sun, or a hairdryer, and never refit it damp.",
    },
    {
      question: "Do I need to replace the filter or just clean it?",
      answer:
        "The main mesh is normally cleaned and reused for the life of the unit unless it is torn or distorted. Additional catalytic, carbon, or electrostatic elements are consumables and are replaced on the schedule in the manual.",
    },
    {
      question: "Cleaning the filter did not help. What now?",
      answer:
        "Look past the filter. A coil that has been collecting dust for years, a fouled blower wheel, or a fault unrelated to airflow will not respond to filter cleaning, and repeating it is not going to change that.",
    },
  ],
  sourceIds: [
    "fujitsu-filter-manual",
    "fujitsu-aduh-operation",
    "trane-mini-split-filters",
    "trane-ductless-maintenance",
  ],
  relatedContent: ["/equipment/", "/mini-split-not-cooling/", "/mini-split-smells-musty/"],
  keywords: [
    "clean mini split filter",
    "mini split filter cleaning",
    "how to wash ductless filter",
    "mini split filter maintenance",
    "mini split filter reset",
  ],
});
