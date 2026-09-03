import { publish } from "./publish";
export const blueridgeBmkhFilterCleaning = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Clean a Blueridge BMKH floor-ceiling unit filter safely",
  slug: "bmkh-floor-ceiling-filter-cleaning",
  path: "/brands/blueridge/bmkh-floor-ceiling-filter-cleaning/",
  description:
    "A model-scoped filter procedure for Blueridge BMKH floor-ceiling indoor units, including grille access, drying, and the stop points that prevent damage.",
  articleType: "maintenance",
  brand: "blueridge",
  equipmentType: "ductless-mini-split",
  productFamily: "BMKH floor-ceiling indoor units",
  models: ["BMKH floor-ceiling units covered by the December 2023 manual"],
  problemType: "filter-maintenance",
  directAnswer:
    "For a documented Blueridge BMKH floor-ceiling indoor unit, shut the system off and isolate its power before opening the intake grille. Release the illustrated grille fasteners, remove the filter without bending it, use the permitted mild cleaning method, dry it fully in shade, and refit every fastener before restoring power.",
  scopeNotice:
    "This procedure is limited to Blueridge BMKH floor-ceiling units in the December 2023 user and installation manual. Wall-mounted, cassette, ducted, and later BMKH indoor units can use different access points and filter materials.",
  symptoms: ["Airflow has weakened or the reusable filter shows visible dust and lint."],
  causes: [
    "Normal airborne debris accumulates on the filter surface and increases resistance.",
    "A filter can also be damaged, fitted incorrectly, or obstructed by contamination that routine washing cannot remove.",
  ],
  diagnosticBranches: [
    {
      title: "Filter is dusty but intact",
      observation:
        "The mesh has ordinary dry dust, its frame is straight, and no oily residue or damage remains after inspection.",
      action:
        "Use the manual-approved cleaning method, allow complete shaded drying, and reinstall it in the original orientation.",
    },
    {
      title: "Filter or grille is damaged",
      observation:
        "The mesh is torn, the frame is distorted, fasteners will not secure, or oily contamination cannot be removed with permitted cleaning.",
      action:
        "Stop and obtain the correct replacement or service support rather than operating with a missing or poorly retained filter.",
    },
  ],
  steps: [
    {
      name: "Match the indoor-unit manual",
      text: "Photograph the complete BMKH indoor model and confirm that the floor-ceiling manual shows the same grille and fastener arrangement before beginning.",
    },
    {
      name: "Stop and isolate operation",
      text: "Turn the unit off, wait for moving parts to stop, and disconnect its supply by the installed isolating means so the fan cannot start during access.",
    },
    {
      name: "Open the intake grille",
      text: "Support the grille, release the two documented buckles, and remove only the screws shown beneath them; do not let the panel hang from wiring or hinges.",
    },
    {
      name: "Remove and wash the filter",
      text: "Slide the filter out without creasing it, remove loose debris, and use lukewarm water with mild neutral detergent only when needed by the manual.",
    },
    {
      name: "Dry and inspect",
      text: "Let the filter air-dry completely away from heat and direct sun, then check mesh, frame, grille, and fasteners for damage before reassembly.",
    },
    {
      name: "Refit before power",
      text: "Return the dry filter in its original direction, secure the grille and both fastening points, clear tools from the unit, and only then restore supply.",
    },
  ],
  figures: [
    {
      title: "BMKH safe cleaning boundary",
      description:
        "The owner procedure stays on the removable air side; the fan, coil, drain, wiring, and electrical box remain behind the service boundary.",
      nodes: [
        {
          label: "Intake grille",
          detail: "Supported while its documented fasteners are released",
        },
        {
          label: "Reusable filter",
          detail: "Removed, gently washed, fully dried, and inspected",
        },
        {
          label: "Secured reassembly",
          detail: "All fasteners are restored before power",
        },
        {
          label: "Service interior",
          detail: "Fan, coil, drain, and electrics are not owner-cleaning steps",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Why floor-ceiling access deserves its own procedure",
      paragraphs: [
        "A floor-ceiling indoor unit does not open like a high-wall head. Its intake grille is larger, its orientation can put the panel overhead, and the documented fasteners carry the assembly while you remove the filter. Following a generic video can lead someone to pull the wrong edge, overlook screws below the buckles, or let the grille drop. Model confirmation is therefore the first maintenance step, not clerical detail.",
        "The manual warns against cleaning the air conditioner by rinsing it and against volatile liquids such as petrol or thinner. Those limits protect finishes, insulation, and electrical components. Mild neutral detergent belongs on a removable filter only when ordinary water is insufficient. Heat and direct sun can distort some filter frames, while reinstalling damp mesh carries moisture back into the air path. Shaded, complete drying closes the cleaning sequence.",
      ],
    },
    {
      title: "Use airflow after cleaning as a diagnostic result",
      paragraphs: [
        "Once reassembled, run the unit in its normal fan setting and compare airflow with the condition before cleaning. A clear improvement links the restriction to filter loading. Little or no improvement means the filter was not the whole explanation. Do not continue dismantling toward the blower or coil; internal fouling, fan faults, ice, duct restrictions, and installation conditions require different access and evidence.",
        "Stop before starting if the unit cannot be safely reached, the grille is unsupported overhead, power isolation is uncertain, or fasteners differ from the manual. Stop during the work for damaged mesh, broken retainers, water near electrics, unusual odour, visible coil ice, or a fan that rubs after reassembly. Give service the exact model and photographs rather than improvising a substitute filter.",
      ],
    },
  ],
  safeChecks: [
    "Work only with confirmed electrical isolation and safe access, and keep all water and cleaning liquid on the removed filter away from the unit.",
  ],
  professionalEscalation: [
    "Internal coil, blower, drain, wiring, damaged grille, inaccessible overhead installation, and persistent airflow problems require qualified service.",
  ],
  serviceHandoff:
    "Provide the BMKH indoor model, installation orientation, before-and-after airflow, filter and fastener photos, damage found, odour or ice observations, and cleaning products used.",
  faqs: [
    {
      question: "Can I hose down a Blueridge floor-ceiling unit?",
      answer:
        "No. The manual warns against rinsing the air conditioner. Remove only the documented filter and keep wash water away from the indoor assembly.",
    },
    {
      question: "Can I reinstall the BMKH filter while damp?",
      answer:
        "Let it dry completely in shade first. Returning moisture to the unit can create odour and contamination while heat can deform the filter frame.",
    },
    {
      question: "Why is airflow still weak after cleaning?",
      answer:
        "The filter may not be the limiting point. Internal fouling, fan operation, ice, or installation resistance needs service rather than deeper owner disassembly.",
    },
  ],
  sourceIds: ["blueridge-bmkh-docs", "blueridge-bmkh-floor-manual"],
  glossaryTerms: ["air-filter", "ductless-mini-split"],
  relatedContent: ["/brands/blueridge/", "/mini-split-filter-cleaning/", "/mini-split-frozen-coil/"],
  keywords: [
    "blueridge bmkh filter cleaning",
    "blueridge floor ceiling filter",
    "clean blueridge mini split filter",
    "bmkh air filter removal",
  ],
});
