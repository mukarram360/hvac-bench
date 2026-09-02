import { publish } from "./publish";

/**
 * Most "dead" mini-splits are not dead. The page is built around the restart
 * protection interval, because that single piece of knowledge resolves a large
 * share of these calls before anyone is dispatched.
 */
export const miniSplitNotTurningOn = publish({
  title: "Mini-split not turning on: power, timer, delay, or fault",
  slug: "mini-split-not-turning-on",
  path: "/mini-split-not-turning-on/",
  description:
    "Distinguish a normal restart delay from timer, remote, breaker, power-outage, communication, and internal fault conditions without opening equipment.",
  articleType: "troubleshooting",
  equipmentType: "ductless-mini-split",
  models: ["Cross-brand ductless systems; restart protection intervals vary by model"],
  problemType: "not-turning-on",
  directAnswer:
    "A mini-split may appear dead because of a power interruption, breaker or fuse condition, timer, remote issue, normal compressor restart protection, or an equipment fault.",
  scopeNotice:
    "Restart protection intervals differ by model and are typically a few minutes. Use the figure in your operating manual rather than a general number, and remember that a system with no display at all is a different problem from one that displays but will not start.",
  symptoms: [
    "The indoor unit shows no response, or the fan responds while the outdoor section does not start immediately.",
  ],
  causes: [
    "A power outage, open breaker, active timer, or remote battery problem can prevent a normal command.",
    "Many systems intentionally delay compressor restart for several minutes after power or an off-on command.",
  ],
  diagnosticBranches: [
    {
      title: "Nothing on the indoor unit responds at all",
      observation:
        "No display, no beep, no lamp, and no fan movement when a command is sent or the manual control is used.",
      action:
        "Establish whether power is reaching it. Check that other things on the same part of the property work, look at the dedicated breaker once, and try fresh batteries in the handset before concluding the unit itself is at fault.",
    },
    {
      title: "The indoor unit responds but nothing happens outside",
      observation:
        "The display changes, the unit beeps, the indoor fan may run, but the outdoor unit stays silent.",
      action:
        "Wait out the restart protection interval before doing anything else. Most systems refuse to restart the compressor for several minutes after being switched off, and a great many service calls are cancelled by simply waiting.",
    },
    {
      title: "The breaker keeps tripping",
      observation:
        "The dedicated breaker is found in the tripped position, and resetting it works briefly or trips again straight away.",
      action:
        "Leave it off after one reset attempt and arrange service. A breaker that trips repeatedly is detecting a real electrical fault, and forcing it back on is genuinely hazardous rather than merely inadvisable.",
    },
    {
      title: "A timer or a lock is holding it off",
      observation:
        "The handset shows a timer icon, a lock symbol, or a schedule that nobody set deliberately.",
      action:
        "Cancel every active timer and clear the lock using the controller manual, then send a simple on command. Timers set by accident are common, particularly on handsets that are shared or that children can reach.",
    },
  ],
  decisionTable: {
    caption: "Working out how dead it really is",
    columns: ["What responds", "What that establishes", "Reasonable next step"],
    rows: [
      [
        "Display and beep, but no outdoor operation",
        "The indoor unit has power and is receiving commands",
        "Wait out the restart delay, then look at demand, mode, and any code",
      ],
      [
        "Nothing at all, other circuits fine",
        "The problem is confined to this circuit or this equipment",
        "Check the dedicated breaker once, then arrange diagnosis",
      ],
      [
        "Nothing at all, other things also off",
        "A wider supply interruption rather than an equipment fault",
        "Restore the supply and give the system its restart interval afterwards",
      ],
    ],
  },
  sections: [
    {
      title: "The delay that gets mistaken for a breakdown",
      paragraphs: [
        "Compressors do not tolerate being restarted against a pressure imbalance, so systems build in a protection period that refuses to restart for several minutes after being switched off or after power returns. This is a deliberate design feature that protects an expensive component.",
        "From outside it is indistinguishable from failure. Someone switches the unit off and straight back on, hears nothing from the outdoor unit, and concludes it has broken. Setting a timer for the interval in the manual and simply waiting resolves a striking number of these situations at no cost.",
      ],
    },
    {
      title: "After a power cut, expect a pause",
      paragraphs: [
        "Power interruptions produce this call more than anything else. When supply returns, the system runs its restart protection, and some models also return to a default state rather than the settings they were using, so the unit may sit there apparently ignoring the room.",
        "Give it the protection interval, then send a fresh command with a clear demand: Cool with a setpoint well below the room, or Heat with one well above. If it responds normally after that, nothing is wrong. If the display is dark and the rest of the property has power, the interruption may have affected this circuit specifically, and that is worth checking at the consumer unit before calling anyone.",
      ],
    },
    {
      title: "Where checking stops being sensible",
      paragraphs: [
        "There is a clear line in this diagnosis. Looking at a breaker position, cancelling a timer, changing batteries, and waiting are all things anyone can do safely. Opening the indoor unit, removing an electrical cover, or resetting a breaker repeatedly to see what happens are not.",
        "A breaker that trips again after one reset has found a fault, and the whole point of the device is that it operates before something worse does. Heat, a burning smell, scorch marks, or damaged cable mean the system stays off until a technician has seen it, regardless of how inconvenient the weather is.",
      ],
    },
  ],
  figures: [
    {
      title: "Everything that has to happen before the compressor runs",
      description:
        "A command passes through several gates, and any one of them will produce a system that looks dead from the sofa.",
      nodes: [
        { label: "Handset command", detail: "Batteries, lock, and timer all permit it" },
        { label: "Indoor unit", detail: "Has power and accepts the request" },
        { label: "Restart protection", detail: "Holds the compressor off for its interval" },
        { label: "Outdoor unit", detail: "Starts once the interval has elapsed" },
      ],
    },
  ],
  safeChecks: [
    "Confirm other devices have power, check the normal breaker position once, cancel the timer, and try fresh remote batteries.",
    "Wait at least the model manual's restart-protection interval before judging the outdoor unit.",
  ],
  professionalEscalation: [
    "Leave the system off if a breaker trips again, a fuse is blown, wiring is damaged, or there is heat, odor, or smoke.",
    "Persistent no-response after basic checks requires qualified electrical and control diagnosis.",
  ],
  serviceHandoff:
    "State whether the indoor display works, whether the unit beeps when commanded, whether the dedicated breaker has tripped and how often, whether a power cut preceded the problem, and how long you waited before deciding the outdoor unit was not starting.",
  faqs: [
    {
      question: "Why will my mini split not restart straight away?",
      answer:
        "Most systems hold the compressor off for several minutes after being switched off or after power returns, to avoid restarting against a pressure imbalance. Check the interval in your manual and wait it out before assuming a fault.",
    },
    {
      question: "My mini split died after a power cut. What now?",
      answer:
        "Give it the restart protection interval, then send a fresh command with a clear demand. If the display is completely dark while the rest of the property has power, check the dedicated breaker once and arrange service if it has tripped or if nothing changes.",
    },
    {
      question: "Is it safe to keep resetting a tripped breaker?",
      answer:
        "No. Reset it once. If it trips again it has detected a genuine fault, and repeatedly forcing it back on removes the protection that is standing between that fault and a fire.",
    },
    {
      question: "Could the remote be the whole problem?",
      answer:
        "Often, yes. Flat batteries, an accidental timer, or a child lock will all make a healthy system look dead. Fresh batteries and a cleared timer are worth trying before anything else.",
    },
  ],
  sourceIds: ["fujitsu-troubleshooting", "fujitsu-rls2-operation"],
  relatedContent: [
    "/troubleshooting/",
    "/mini-split-remote-not-working/",
    "/mini-split-outdoor-unit-not-running/",
  ],
  keywords: [
    "mini split not turning on",
    "mini split wont start",
    "mini split no power",
    "mini split restart delay",
    "mini split dead after power cut",
  ],
});
