import { publish } from "./publish";

/** Separates documented delay and control states from a persistent no-start. */
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
    "Restart protection intervals and post-outage behaviour differ by model. Use the interval and restart instructions in your operating manual rather than a general number, and separate a system with no display from one that responds but will not start.",
  symptoms: [
    "The indoor unit shows no response, or the fan responds while the outdoor section does not start immediately.",
  ],
  causes: [
    "A power outage, open breaker, active timer, or remote battery problem can prevent a normal command.",
    "Manufacturer manuals document intentional compressor restart delays after power or an off-on command on covered models.",
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
        "Wait through the restart protection interval stated in the exact operating manual before treating the outdoor silence as a fault.",
    },
    {
      title: "The breaker keeps tripping",
      observation:
        "The dedicated breaker is found in the tripped position, and resetting it works briefly or trips again straight away.",
      action:
        "Leave it off and arrange service. Manufacturer guidance warns that resetting and restarting after a heat-pump breaker trip can cause further damage.",
    },
    {
      title: "A timer or a lock is holding it off",
      observation:
        "The handset shows a timer icon, a lock symbol, or a schedule that nobody set deliberately.",
      action:
        "Cancel active timers and clear the lock using the controller manual, then send a simple on command. An enabled timer or lock can explain a unit that receives commands but does not start as expected.",
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
        "Operating manuals for documented systems specify a protection delay before compressor operation resumes after shutdown or a power interruption. The duration and restart behaviour are model specific.",
        "From outside, restart protection can look like failure. After an interruption, wait for the interval stated in the operating manual before deciding that the outdoor unit did not respond. Record any indicator or display change during that documented interval for the service handoff.",
      ],
    },
    {
      title: "After a power cut, expect a pause",
      paragraphs: [
        "A power interruption can leave a documented system in restart protection, and some models restore settings differently after supply returns. Check the exact manual before assuming the pre-outage command resumed unchanged.",
        "Give it the documented protection interval, then send a fresh command with a clear demand: Cool with a setpoint below the room, or Heat with one above. A normal response supports restart protection as the explanation, but monitor for recurrence. If the display is dark while other circuits have power, inspect the dedicated breaker position once without repeatedly resetting it.",
      ],
    },
    {
      title: "Where checking stops being sensible",
      paragraphs: [
        "Keep owner checks to normal controls, remote batteries, timer or lock settings, the visible breaker position, and the documented wait. Do not open the unit, remove an electrical cover, or repeatedly reset a breaker.",
        "A tripped breaker can indicate a condition that requires electrical diagnosis. Leave the system off when the breaker has tripped or when there is heat, a burning smell, scorch marking, smoke, or damaged cable.",
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
    "Leave the system off if its breaker is tripped, a fuse is blown, wiring is damaged, or there is heat, odor, or smoke.",
    "Persistent no-response after basic checks requires qualified electrical and control diagnosis.",
  ],
  serviceHandoff:
    "State whether the indoor display works, whether the unit beeps when commanded, whether the dedicated breaker has tripped and how often, whether a power cut preceded the problem, and how long you waited before deciding the outdoor unit was not starting.",
  faqs: [
    {
      question: "Why will my mini split not restart straight away?",
      answer:
        "Many operating manuals document a compressor restart delay after shutdown or power restoration. Check the interval for the exact model and wait through it before assuming a fault.",
    },
    {
      question: "My mini split died after a power cut. What now?",
      answer:
        "Give it the restart protection interval, then send a fresh command with a clear demand. If the display is completely dark while the rest of the property has power, check the dedicated breaker once and arrange service if it has tripped or if nothing changes.",
    },
    {
      question: "Is it safe to keep resetting a tripped breaker?",
      answer:
        "No. If the heat-pump breaker is tripped, leave the system off and arrange qualified diagnosis. Repeated resetting is not a troubleshooting procedure and can cause further damage.",
    },
    {
      question: "Could the remote be the whole problem?",
      answer:
        "It can be. Flat batteries, an active timer, or a controller lock can prevent the expected command. Follow the exact controller manual for batteries, timer cancellation, and lock removal before assuming an equipment fault.",
    },
  ],
  sourceIds: [
    "fujitsu-troubleshooting",
    "fujitsu-rls2-operation",
    "trane-mini-split-compressor",
  ],
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
