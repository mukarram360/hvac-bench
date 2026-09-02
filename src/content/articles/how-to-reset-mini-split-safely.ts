import { publish } from "./publish";

/**
 * The honest version of this page has to start by talking the reader out of
 * the thing they came to do. Breaker cycling is the default folk remedy, it
 * destroys the evidence a technician needs, and it fixes nothing that was
 * actually broken. So: what a reset is, what to record first, then the
 * procedure, then the one-restart rule.
 */
export const howToResetMiniSplitSafely = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "How to reset a mini-split safely, and when not to bother",
  slug: "how-to-reset-mini-split-safely",
  path: "/how-to-reset-mini-split-safely/",
  description:
    "What a reset actually clears, why to photograph the code first, the one-restart rule, and why repeated breaker cycling makes the next service visit harder.",
  articleType: "how-to",
  equipmentType: "ductless-mini-split",
  problemType: "safe-reset",
  models: [
    "Ductless systems with a handset, wall controller, or documented supply-power restart",
    "The permitted method is the one in your model's manual, and only that one",
  ],
  directAnswer:
    "A reset restarts control logic and clears a stored state. Record the code first, perform the restart your manual documents once, and treat a code that returns as a fault to be diagnosed rather than a reset to be repeated.",
  scopeNotice:
    "Reset means different actions on different equipment: a handset button, a controller command, a filter-indicator clear, or a documented supply interruption. These are not interchangeable, and a sequence found for another brand can put a unit into a service mode that an owner cannot exit.",
  layout: ["sections", "steps", "decisionTable"],
  symptoms: [
    "A code or indicator is showing and the system has stopped or is behaving abnormally.",
    "The system was working before a power cut, a storm, or an electrical event.",
    "Somebody has suggested turning it off at the breaker.",
  ],
  causes: [
    "Control logic can hold a latched state after a supply interruption that a documented restart clears.",
    "A fault that is still present will re-latch immediately, which is information rather than a failed reset.",
  ],
  sections: [
    {
      title: "What a reset can and cannot do",
      paragraphs: [
        "A reset restarts the controller and clears states it is holding in volatile memory. Where a protection latched because of a transient condition that has passed, that is genuinely all it takes.",
        "It cannot repair anything physical. Damaged wiring, a failed sensor, a blocked coil, a leak, a seized fan, or a supply problem will all be found again by the controller within seconds or minutes of restarting. A code that comes straight back has told you the condition is live.",
        "This is why the code matters more than the reset. A displayed code narrows the problem to a subsystem; a cleared display narrows nothing and has thrown away what you knew.",
      ],
    },
    {
      title: "Why repeated breaker cycling costs you",
      paragraphs: [
        "Cycling the supply repeatedly clears fault memory, so a technician arrives with no code, no history, and a system that may run normally for the length of the visit. The diagnosis then starts from nothing.",
        "It also puts the compressor through repeated restarts. Manufacturers publish minimum off-times and start delays for a reason, and forcing restarts inside them stresses the component that is most expensive to replace.",
        "One documented restart, after recording the evidence, is a legitimate diagnostic step. Five is a way of turning a specific fault into an intermittent one.",
      ],
    },
    {
      title: "Faults where a reset is the wrong move entirely",
      paragraphs: [
        "Burning smells, visible smoke, scorch marks, sparking, a tripped breaker, water reaching electrical parts, or a fan striking something are all signals to isolate the system and stop. Restarting a system in that state can turn a repair into a replacement, or worse.",
        "A breaker that has tripped is a protective device that has done its job. Resetting it once to confirm is a judgement call; resetting it a second time when it trips again is not.",
      ],
    },
  ],
  steps: [
    {
      name: "Photograph the display",
      text: "Capture the code or indicator pattern exactly as shown, including any flashing sequence, before touching anything. Count the flashes if the unit signals with lights rather than characters, and write down how many and in what grouping.",
    },
    {
      name: "Write down what was happening",
      text: "Note the mode, the setpoint, the room and outdoor temperature, how long the system had been running, and what changed just before it stopped. Ten seconds of notes here is what makes the code interpretable later.",
    },
    {
      name: "Look up the documented method",
      text: "Find the reset, restart, or error-clearing instruction in the operation manual for your indoor unit and controller. Use that instruction only. Sequences found for other brands can enter test or service modes with no owner exit.",
    },
    {
      name: "Perform it once",
      text: "Carry out the documented action a single time. Where the manual specifies a supply-off interval, wait the full stated time before restoring power, then leave the system alone through any start delay it applies.",
    },
    {
      name: "Watch what happens next",
      text: "Give the system the start delay its manual describes, then observe. Normal operation that continues is a resolved transient. The same code returning is a live fault, and that is the point to stop and call for service.",
    },
  ],
  decisionTable: {
    caption: "Whether to reset at all",
    columns: ["Situation", "Reset?", "Reason"],
    rows: [
      [
        "Code appeared after a power cut, nothing else wrong",
        "Once, after recording it",
        "A latched state from the interruption may be all that is held",
      ],
      [
        "Same code has returned after a previous reset",
        "No",
        "The condition is live; repeating clears evidence rather than the fault",
      ],
      [
        "Burning smell, smoke, scorching, or sparking",
        "No",
        "Isolate the system and call for service without restarting",
      ],
      [
        "Breaker has tripped and trips again on reset",
        "No",
        "The protective device is responding to a real electrical fault",
      ],
      [
        "Water is reaching electrical parts",
        "No",
        "Isolate at the breaker and treat it as an emergency stop",
      ],
      [
        "Filter indicator is lit and airflow is fine",
        "Yes, after cleaning",
        "That indicator is a service reminder with its own documented clear",
      ],
    ],
  },
  safeChecks: [
    "Record the code, the indicator pattern, and the operating conditions before any restart.",
    "Use only the restart procedure printed in your own model's manual, once.",
    "Wait out the manufacturer's stated off-time and start delay rather than switching back immediately.",
  ],
  professionalEscalation: [
    "Stop and call for service if the same code returns after one documented restart.",
    "Isolate the system and do not restart it for smoke, burning smells, scorching, sparking, or water near electrical parts.",
    "Do not reset a breaker a second time after it has tripped again.",
  ],
  serviceHandoff:
    "Give the technician the photograph of the original code, the conditions when it appeared, the exact restart you performed, how long the system ran afterwards, and whether the same code or a different one came back.",
  faqs: [
    {
      question: "Will turning the breaker off and on fix my mini-split?",
      answer:
        "It can clear a latched state left by a supply interruption. It repairs nothing physical, and repeating it erases the fault history a technician would use. Record the code first and do it once.",
    },
    {
      question: "How long should I leave the power off?",
      answer:
        "For whatever interval your model's manual states. Where no interval is given, the manual's own restart instruction is the authority, and guessing risks interrupting a controlled shutdown partway through.",
    },
    {
      question: "The code came back straight away. What does that mean?",
      answer:
        "That the condition causing it is still present. The reset worked and the fault is live. Stop resetting and pass the code and the conditions to a technician.",
    },
    {
      question: "Is there a reset button on a mini-split?",
      answer:
        "Some models have a small recessed button on the indoor unit or handset, some clear faults through a controller menu, and some use only a documented supply restart. Which one applies is in your manual, not in a general answer.",
    },
  ],
  sourceIds: ["fujitsu-rls2-operation", "mrcool-code-table", "gree-e6-guide"],
  relatedContent: [
    "/mini-split-not-turning-on/",
    "/how-to-document-hvac-fault-for-service/",
    "/error-codes/",
    "/how-to-find-mini-split-model-number/",
  ],
  glossaryTerms: ["error-code", "protection-code", "control-board"],
  keywords: [
    "how to reset a mini split",
    "mini split reset button",
    "mini split breaker reset",
    "clear mini split error code",
  ],
});
