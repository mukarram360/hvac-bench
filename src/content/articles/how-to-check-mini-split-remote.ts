import { publish } from "./publish";

/**
 * A handset has to do four separate things, and the popular camera test only
 * proves one of them. The page is built around that gap: separate the four,
 * test them in the order that eliminates most possibilities first, and be
 * explicit that manual operation is the check that decides whether the
 * problem is the remote at all.
 */
export const howToCheckMiniSplitRemote = publish({
  lastReviewed: "2026-09-02",
  reviewStatus: "source-verified",
  title: "How to check a mini-split remote before replacing it",
  slug: "how-to-check-mini-split-remote",
  path: "/how-to-check-mini-split-remote/",
  description:
    "The four jobs a handset does, why the phone-camera test proves only one of them, and the manual-operation check that shows whether the remote is the problem.",
  articleType: "how-to",
  equipmentType: "controls-thermostats",
  problemType: "remote-check",
  models: [
    "Infrared handsets supplied with ductless indoor units",
    "Wired wall controllers behave differently and are outside this procedure",
  ],
  directAnswer:
    "Work through the handset in four stages: it must power its display, build a valid command, transmit it, and be received by a unit that is able to act. Manual operation on the indoor unit separates the last stage from the first three.",
  scopeNotice:
    "Range, receiver position, lock and timer symbols, emergency operation, reset holes, and compatible replacement part numbers are all model-specific. Read the operation manual for your indoor unit before deciding a handset has failed.",
  layout: ["figures", "steps", "decisionTable", "sections"],
  symptoms: [
    "Buttons produce no response from the indoor unit.",
    "The display is blank, faint, or showing symbols nobody recognises.",
    "The unit responds from close range but not from across the room.",
  ],
  causes: [
    "A lock, timer, or sleep symbol can suppress the command the handset is sending.",
    "The indoor unit may be unable to act on a valid command it did receive.",
  ],
  figures: [
    {
      title: "Four things that all have to work",
      description:
        "A failure at any one of these looks identical from the sofa. Testing them in order is what separates them.",
      nodes: [
        { label: "Power", detail: "Batteries drive the display and the emitter" },
        { label: "Command", detail: "Mode, temperature, and no active lock or timer" },
        { label: "Transmission", detail: "Infrared leaves the emitter and reaches the receiver" },
        { label: "Reception", detail: "The indoor unit accepts it and is able to respond" },
      ],
    },
  ],
  steps: [
    {
      name: "Prove the unit itself can run",
      text: "Find the manual or emergency operation control on the indoor unit, which the operation manual locates for your model, and use it. If the unit starts and runs, power and the indoor unit are fine and the problem is on the handset side. If nothing happens, stop here; this is not a remote fault.",
    },
    {
      name: "Fit a matched pair of new batteries",
      text: "Replace both cells with new ones of the same type and brand, checking the polarity marks in the compartment. Mixed or partly discharged cells can light a display while failing to drive the infrared emitter, which is the failure that wastes the most time.",
    },
    {
      name: "Read the display for suppressors",
      text: "Look for a lock, key, timer, sleep, or child-lock symbol. Any of these can be doing exactly what it was set to do while appearing to the reader as a dead remote. Clear them using the manual's instructions.",
    },
    {
      name: "Test transmission with a camera",
      text: "Point the emitter at a phone camera and press a button. A flash on screen shows the emitter is firing. This proves transmission only; it does not prove the code sent is one your unit accepts, so a visible flash with no response still leaves work to do.",
    },
    {
      name: "Test the signal path",
      text: "Stand within a couple of metres, in clear line of sight, and aim at the receiver window rather than at the middle of the cabinet. Turn off nearby bright light or direct sunlight on the receiver, which can swamp an infrared signal.",
    },
    {
      name: "Listen for the acknowledgement",
      text: "Most ductless indoor units answer an accepted command with a beep or a lamp change. Getting that response means the command arrived and was understood, which moves the question away from the handset entirely.",
    },
  ],
  decisionTable: {
    caption: "What each result rules in or out",
    columns: ["Result", "Rules out", "Next step"],
    rows: [
      [
        "Manual operation runs the unit",
        "Power supply and indoor unit failure",
        "Work through the handset and the signal path",
      ],
      [
        "Manual operation does nothing",
        "The remote as the cause",
        "Treat it as a unit that will not start, not a remote fault",
      ],
      [
        "Display blank with new matched batteries",
        "Flat cells",
        "Check contacts for corrosion, then treat the handset as failed",
      ],
      [
        "Camera flash present, no response",
        "A dead emitter",
        "Check line of sight, distance, sunlight, and the acknowledgement beep",
      ],
      [
        "No camera flash, display works",
        "Battery power",
        "Emitter or drive circuit; the handset needs replacing",
      ],
      [
        "Works close, fails across the room",
        "A wholly failed handset",
        "Weak cells, a dirty emitter window, or light falling on the receiver",
      ],
    ],
  },
  sections: [
    {
      title: "Why the camera test is not conclusive",
      paragraphs: [
        "A phone camera sees infrared, so it shows whether the emitter is firing. That is one of the four requirements. It says nothing about whether the command carries the right protocol, whether a lock is suppressing it, or whether the indoor unit is in a state where it can act.",
        "This is why a reader can get a clear flash on camera and still have a system that ignores every press. The test eliminates one failure mode and should be treated as such rather than as a verdict.",
      ],
    },
    {
      title: "Ordering a replacement that works",
      paragraphs: [
        "Handsets are matched to receiver protocols, not just to physical shape. A visually identical remote from another range will light up, send commands, and be ignored.",
        "Order against two things: the indoor unit model number and the original controller part number from the back of the case or the battery compartment. Where the original is lost, the indoor unit's manual or the manufacturer's support line will name the compatible part.",
        "Where the handset is genuinely unavailable, ask about a wired controller or a manufacturer-approved alternative rather than a generic universal remote, which may support only a reduced command set.",
      ],
    },
  ],
  safeChecks: [
    "Use the manual or emergency operation control the operation manual identifies, and nothing else on the indoor unit.",
    "Replace both batteries together with the same type, and check polarity against the moulded marks.",
    "Clean the emitter window and the receiver window with a dry cloth; no fluids, no covers removed.",
  ],
  professionalEscalation: [
    "Call for service if manual operation does not start the unit, because the fault is not in the handset.",
    "Stop if the indoor unit responds to commands but then shows a code or stops on its own.",
    "Leave receiver, board, and wiring checks to a technician; they sit behind the front panel.",
  ],
  serviceHandoff:
    "Tell the technician whether manual operation runs the unit, whether the camera test shows a flash, whether the unit beeps when a button is pressed, and the model numbers of both the indoor unit and the handset.",
  faqs: [
    {
      question: "How do I know if my mini-split remote is broken?",
      answer:
        "Test the handset and the unit separately. If manual operation starts the unit but a handset with fresh matched batteries produces no beep and no response at short range in clear line of sight, the handset is the remaining candidate.",
    },
    {
      question: "Does the phone camera test prove the remote works?",
      answer:
        "It proves the infrared emitter is firing. It does not prove the command is one your unit accepts or that no lock or timer is suppressing it, so a visible flash with no response is a normal result rather than a contradiction.",
    },
    {
      question: "Can I use a universal remote on a mini-split?",
      answer:
        "Some support common ductless protocols, but coverage of mode, fan, swing, and timer commands varies. A manufacturer-specified replacement matched to the indoor unit model is the option that keeps the full command set.",
    },
    {
      question: "Why does my remote only work up close?",
      answer:
        "Weak cells, a dirty emitter window, an off-axis aim, or bright light on the receiver all reduce effective range before they stop it entirely. Fresh matched batteries and a clean, direct line of sight separate those.",
    },
  ],
  sourceIds: ["fujitsu-rls2-operation", "trane-mitsubishi-remote", "lg-console-owner"],
  relatedContent: [
    "/mini-split-remote-not-working/",
    "/how-to-find-mini-split-model-number/",
    "/mini-split-not-turning-on/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  glossaryTerms: ["thermostat", "control-board", "data-plate"],
  keywords: [
    "mini split remote not working",
    "test mini split remote",
    "mini split manual operation button",
    "replace ductless remote control",
  ],
});
