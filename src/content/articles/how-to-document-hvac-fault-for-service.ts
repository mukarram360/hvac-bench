import { publish } from "./publish";

/**
 * The only page on the site whose output is a message rather than a diagnosis.
 * It is organised around what a technician can and cannot reconstruct after
 * the fact: a code that has been cleared is gone, an intermittent fault that
 * is not running during the visit is invisible, and a photograph taken now
 * costs nothing. Safety comes first because documentation must never delay a
 * shutdown.
 */
export const howToDocumentHvacFaultForService = publish({
  title: "How to document an HVAC fault for a technician",
  slug: "how-to-document-hvac-fault-for-service",
  path: "/how-to-document-hvac-fault-for-service/",
  description:
    "What a technician cannot reconstruct after the fact, the seven things worth capturing while the fault is live, and when to stop documenting and switch the system off.",
  articleType: "how-to",
  equipmentType: "controls-thermostats",
  problemType: "fault-documentation",
  models: [
    "Any residential heating or cooling system with a fault to report",
    "Observation only; nothing here involves opening equipment",
  ],
  directAnswer:
    "Capture the things that disappear: the code as displayed, the sequence of what happened, the conditions at the time, and the result of any restart. Model numbers and photographs can be gathered later; a cleared code and an unwitnessed sequence cannot.",
  scopeNotice:
    "Documentation never comes before safety. Smoke, burning smells, sparking, scorching, a tripped breaker, water reaching electrical parts, or a suspected refrigerant release mean isolating the system and calling immediately, with no further observation.",
  layout: ["branches", "steps", "decisionTable", "sections"],
  symptoms: [
    "The system has faulted and you are about to call somebody about it.",
    "The fault comes and goes, and has never happened while anyone was looking.",
    "A previous visit ended with nothing found.",
  ],
  causes: [
    "Fault memory is cleared by power interruptions, so a code survives only until somebody resets it.",
    "An intermittent fault that is not present during the visit leaves a technician with no measurement to take.",
  ],
  diagnosticBranches: [
    {
      title: "Something is burning, sparking, or wet",
      observation:
        "There is smoke, a burning or electrical smell, scorching, sparking, a breaker that has tripped, or water reaching electrical parts.",
      action:
        "Stop. Isolate the system at the breaker or isolator and call for service now. Nothing below applies, and no photograph is worth the delay.",
    },
    {
      title: "The fault is showing right now",
      observation:
        "A code, an indicator pattern, or abnormal behaviour is present while you are standing there.",
      action:
        "Photograph the display before anything else, then work through the steps below while the evidence is live. This is the best position you will be in.",
    },
    {
      title: "It happens and then stops",
      observation:
        "The system misbehaves and recovers, and it has never done it while a technician was present.",
      action:
        "Keep a short log over a few days: date, time, outdoor conditions, what the system was doing, what you saw. A pattern across five entries is worth more than one detailed description.",
    },
  ],
  steps: [
    {
      name: "Photograph the display first",
      text: "Capture the code or indicator exactly as it appears, before pressing anything. Where the unit signals with flashing lights, film a few seconds of it rather than counting, because the grouping matters and is easy to miscount.",
    },
    {
      name: "Write the sequence",
      text: "Note what the system did in order: what it was doing, what changed, what it did next, and whether it stopped by itself. Start to stop, in the order it happened, in plain words.",
    },
    {
      name: "Record the conditions",
      text: "Indoor temperature, outdoor temperature, the mode and setpoint, and how long the system had been running. A fault that only appears above thirty degrees outside is a different fault from one that appears at any temperature.",
    },
    {
      name: "Note the sounds and the smells",
      text: "Describe them by character and by when they occur: a click at startup, a hum that rises and falls, a rattle only in high fan, a musty smell in the first minutes of cooling. Timing narrows a noise faster than volume does.",
    },
    {
      name: "Locate any water or ice",
      text: "Photograph where it is rather than describing it. Water at the left end of an indoor unit, at the wall penetration, and at the outdoor base are three different problems, and a photograph settles which one you have.",
    },
    {
      name: "Do one permitted restart, and only one",
      text: "If your manual documents a restart and none of the emergency conditions apply, do it once and record what happened: cleared and stayed clear, cleared and returned after a time, or never cleared. That result is diagnostic information.",
    },
    {
      name: "Collect the identifiers",
      text: "Add the indoor and outdoor model numbers, the installation date, and any relevant service history. This part can be done at leisure; the observations above cannot.",
    },
  ],
  decisionTable: {
    caption: "What survives until the visit, and what does not",
    columns: ["Evidence", "Still available later?", "What that means"],
    rows: [
      [
        "Displayed code",
        "No, once cleared or power cycled",
        "Photograph it before touching anything",
      ],
      [
        "Flashing indicator pattern",
        "No",
        "Film a few seconds rather than counting",
      ],
      [
        "Sequence of events",
        "No, beyond memory",
        "Write it down the same day",
      ],
      [
        "Conditions at the time",
        "No",
        "Record indoor, outdoor, mode, setpoint, and run time",
      ],
      [
        "Location of water or ice",
        "Sometimes; it can drain or melt",
        "Photograph it where it is",
      ],
      [
        "Model and serial numbers",
        "Yes",
        "Collect afterwards, without hurrying",
      ],
      [
        "Service history",
        "Yes",
        "Gather from paperwork before the visit",
      ],
    ],
  },
  sections: [
    {
      title: "What a good message looks like",
      paragraphs: [
        "Send one message with the photographs attached rather than a description in five parts. Lead with the code and the sequence, then the conditions, then the identifiers, and say plainly what you have already tried.",
        "Say what you did not do, too. A technician who knows you have not cycled the breaker reads a persistent code differently from one who has to assume you might have.",
      ],
    },
    {
      title: "Why the log beats the description",
      paragraphs: [
        "For anything intermittent, a short log with five dated entries is more useful than a paragraph of careful prose about one occurrence. Patterns are what the log reveals: only in the afternoon, only when it is humid, only after a long run, only in heating.",
        "Keep each entry to a line. Date, time, outdoor conditions, mode, what happened. The value is in the comparison across entries, not the detail within one.",
      ],
    },
  ],
  safeChecks: [
    "Observe and photograph from where you normally stand; nothing here needs a cover removed.",
    "Perform at most one restart, and only where your own manual documents it.",
    "Keep the photographs and the log together so they can be sent as one message.",
  ],
  professionalEscalation: [
    "Isolate the system and call immediately for smoke, burning smells, scorching, sparking, or a breaker that has tripped.",
    "Isolate first where water is reaching electrical parts, then call.",
    "Leave the room and ventilate it if you suspect a refrigerant release, and call from outside.",
  ],
  serviceHandoff:
    "One message: photograph of the code, the sequence in order, conditions at the time, sounds and smells with their timing, photographs of any water or ice, the result of one restart, and both model numbers.",
  faqs: [
    {
      question: "What information does an HVAC technician need from me?",
      answer:
        "The code as displayed, what happened in what order, the conditions at the time, any sounds or smells and when they occur, where water or ice appeared, the result of any restart, and both model numbers.",
    },
    {
      question: "Should I reset the system before calling?",
      answer:
        "Photograph the code first. One documented restart afterwards is useful diagnostic information. Repeated resets clear the fault history and can turn a specific fault into an intermittent one.",
    },
    {
      question: "My fault is intermittent. What do I do?",
      answer:
        "Keep a short log with a line per occurrence: date, time, outdoor conditions, mode, and what you saw. Five entries showing a pattern are worth more to a technician than one detailed account.",
    },
    {
      question: "Is a photo of the display really necessary?",
      answer:
        "It removes the largest source of error in a service call. Codes are easy to mis-transcribe, indicator patterns are easy to miscount, and the display is gone the moment somebody resets the system.",
    },
  ],
  sourceIds: ["gree-e6-guide", "mrcool-code-table", "fujitsu-troubleshooting"],
  relatedContent: [
    "/how-to-reset-mini-split-safely/",
    "/how-to-find-mini-split-model-number/",
    "/error-codes/",
    "/troubleshooting/",
  ],
  glossaryTerms: ["error-code", "data-plate", "service-manual"],
  keywords: [
    "document HVAC fault",
    "what to tell HVAC technician",
    "record air conditioner error code",
    "intermittent HVAC fault log",
  ],
});
