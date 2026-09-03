import { publish } from "./publish";

/**
 * One manual, two instructions that point in opposite directions. Rather than
 * choose the convenient one, this page reports both, explains what makes a
 * ceiling cassette different from the wall unit the general advice was written
 * for, and lets the warning stand as the operative instruction for an owner.
 */
export const cooperHunterCassetteFilterBoundary = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Cooper & Hunter cassette filters: the manual says do not, then how",
  slug: "cassette-filter-owner-boundary",
  path: "/brands/cooper-and-hunter/cassette-filter-owner-boundary/",
  description:
    "The Sophia cassette manual warns that filter removal is dangerous and must be done by a certified technician, then prints the procedure anyway. Both appear in one document.",
  articleType: "maintenance",
  brand: "cooper-and-hunter",
  equipmentType: "ductless-mini-split",
  productFamily: "Sophia cassette indoor units",
  models: ["Sophia cassette indoor units covered by the cited owner's manual"],
  problemType: "cassette-filter-access",
  symptomFamily: "maintenance",
  directAnswer:
    "The owner's manual warns that removing and cleaning the filter can be dangerous, and that removal and maintenance must be performed by a certified technician. It then prints the procedure and a two-week interval. Treat the warning as the instruction that applies to you.",
  scopeNotice:
    "This concerns Sophia cassette indoor units, which are mounted in a ceiling. Cooper and Hunter publishes different literature for wall-mounted, floor, and ducted indoor units, and general ductless filter advice is written for a wall unit you can reach from standing height.",
  layout: ["decisionTable", "figures", "sections", "steps", "serviceHandoff"],
  symptoms: [
    "A ceiling cassette needs its filter cleaned and nobody is sure who is supposed to do it.",
    "Airflow from the cassette has dropped and the filter is the obvious suspect.",
    "The household has pets and the grille is visibly collecting hair.",
  ],
  causes: [
    "Cooper and Hunter prints both a technician-only warning and an owner-facing procedure for the same task in the same manual.",
    "A ceiling cassette places the filter overhead behind a grille that unlocks and hangs, which is a different physical task from sliding a filter out of a wall unit.",
  ],
  decisionTable: {
    caption: "What the manual states about the cassette filter",
    columns: ["Statement in the manual", "What it says", "Who it is addressed to"],
    rows: [
      [
        "The warning",
        "Removing and cleaning the filter can be dangerous, and removal and maintenance must be performed by a certified technician",
        "The owner reading the maintenance section",
      ],
      [
        "The interval",
        "Clean the air filter every two weeks, or more frequently in a dusty area",
        "Whoever is carrying the task out",
      ],
      [
        "The procedure",
        "Unlock the grille, unplug the display panel cable, detach at 45 degrees, remove and clean the filter, refit and reconnect",
        "Whoever is carrying the task out",
      ],
      [
        "The pet note",
        "In households with animals, periodically wipe down the grille to prevent animal hair blocking airflow",
        "The owner, and it needs no removal at all",
      ],
    ],
  },
  figures: [
    {
      title: "What makes a cassette different from a wall unit",
      description:
        "Each of these is a step the wall-unit procedure does not have. Together they explain why the same manufacturer writes a warning here that it does not write for a wall-mounted head.",
      nodes: [
        { label: "Overhead position", detail: "The work happens above you at ceiling height" },
        { label: "Grille tabs", detail: "Two tabs pushed toward the middle at the same time" },
        { label: "Display panel cable", detail: "Unplugged from the control box before the grille comes away" },
        { label: "Hanging grille", detail: "Held at 45 degrees, lifted, then pulled forward" },
      ],
    },
  ],
  steps: [
    {
      name: "Read your own manual before deciding",
      text: "The warning and the procedure both appear in the Sophia cassette literature. Whichever you act on, the decision should be made after reading the copy that came with your unit rather than from general ductless advice written for a wall-mounted head.",
    },
    {
      name: "Do the part that needs no removal",
      text: "Cooper and Hunter asks owners in households with animals to wipe down the grille periodically to prevent animal hair blocking airflow. That is a cloth on a visible surface, nothing is unlocked, and it addresses the most visible part of the problem.",
    },
    {
      name: "Add the filter to a service visit",
      text: "The manual assigns removal and maintenance to a certified technician. Pairing it with an existing service visit is the arrangement that follows the warning without leaving the filter uncleaned for a season.",
    },
    {
      name: "Ask what the technician found",
      text: "A filter that was heavily loaded after two months says something about the room. Ask whether the interval should be shorter, and whether the grille wipe you can do yourself would extend it.",
    },
  ],
  sections: [
    {
      title: "Why the same manual says both things",
      paragraphs: [
        "A manual for a ceiling cassette has two audiences. The procedure exists because somebody has to be able to carry it out and needs the steps, the interval, and the reassembly detail. The warning exists because the manufacturer is not prepared to assume the person reading it is standing on suitable access equipment with the supply isolated.",
        "Neither statement is a mistake. What they mean together is that the task is documented but not delegated, and when a manufacturer says removal and maintenance must be performed by a certified technician, that sentence is written for the reader who is not one.",
        "This site's position is to report both and to let the warning govern. A page that reprinted the eight steps and quietly dropped the warning would be more convenient and less honest.",
      ],
    },
    {
      title: "What the procedure actually involves",
      paragraphs: [
        "It is not a filter that slides out. The grille is unlocked by pushing two tabs toward the middle together. The display-panel cable is then unplugged from the control box. Detaching the grille requires holding it at 45 degrees, lifting slightly, and pulling forward. Refitting reverses those actions and reconnects the cable.",
        "Every one of those steps happens above head height with a panel that is now hanging or being supported. The electrical connection in the middle of it is the part general filter advice never mentions, because a wall unit has nothing equivalent.",
        "Some Sophia models include an auto-lifting panel function, which the manual says allows the grille to move vertically and simplifies the filter cleaning process. Whether your unit has it changes the physical task, and it is worth establishing before anybody plans anything.",
      ],
    },
    {
      title: "What you can still do about airflow",
      paragraphs: [
        "The grille wipe is the piece of this that is unambiguously yours, and in a household with animals the manual asks for it directly. Hair collecting on the face of the grille restricts airflow before it ever reaches the filter, so the visible surface is worth keeping clear whatever is happening behind it.",
        "Beyond that, keep the throw pattern clear. A cassette pushes air across a ceiling, and furniture, shelving, or a partition placed under it changes where that air goes. That is an arrangement question rather than a maintenance one, and it costs nothing to check.",
      ],
    },
  ],
  safeChecks: [
    "Wipe the visible face of the grille, which the manual asks owners in households with animals to do periodically.",
    "Note the date airflow changed and whether it changed suddenly or over weeks, before anything is opened.",
    "Confirm from your own manual whether your Sophia cassette has the auto-lifting panel function.",
  ],
  professionalEscalation: [
    "Cooper and Hunter states that removal and maintenance of this filter must be performed by a certified technician, and that unplugging the display panel cable is part of it.",
    "Any work at ceiling height on this cassette needs proper access equipment and the supply isolated, which is not an owner arrangement.",
  ],
  serviceHandoff:
    "Ask the technician to record how loaded the filter was and to recommend an interval for your room rather than repeating the printed two weeks. Ask as well whether your unit has the auto-lifting panel, since that decides what any future arrangement looks like.",
  faqs: [
    {
      question: "Can I clean a Cooper and Hunter cassette filter myself?",
      answer:
        "The manual carries a warning that removing and cleaning the filter can be dangerous and that removal and maintenance must be performed by a certified technician. It prints the procedure as well, but the warning is the sentence written for an owner.",
    },
    {
      question: "How often should the cassette filter be cleaned?",
      answer:
        "The manual gives every two weeks, with a shorter interval in a dusty area, and says to replace the filter if it is heavily clogged and cannot be cleaned. Ask a technician to set an interval for your room once they have seen how loaded it gets.",
    },
    {
      question: "What is the auto-lifting panel?",
      answer:
        "Cooper and Hunter notes that some models include a function allowing the grille to move vertically, which it says simplifies the filter cleaning process. Whether your cassette has it changes the physical task, so establish it from your own manual.",
    },
    {
      question: "Is there anything I can do about airflow without opening it?",
      answer:
        "Yes. The manual asks owners in households with animals to wipe down the grille periodically to prevent animal hair blocking airflow, and keeping furniture and partitions out of the cassette's throw path costs nothing.",
    },
  ],
  sourceIds: ["cooper-hunter-sophia", "cooper-hunter-sophia-support"],
  relatedContent: [
    "/brands/cooper-and-hunter/",
    "/brands/cooper-and-hunter/sophia-cassette-e1-error/",
    "/mini-split-filter-cleaning/",
    "/mini-split-not-cooling/",
  ],
  glossaryTerms: ["air-filter", "return-air", "static-pressure"],
  keywords: [
    "cooper and hunter cassette filter cleaning",
    "sophia cassette filter removal",
    "ceiling cassette filter technician",
    "c&h cassette grille wipe",
    "cooper hunter auto lifting panel",
  ],
});
