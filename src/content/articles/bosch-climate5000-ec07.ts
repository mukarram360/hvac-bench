import { publish } from "./publish";
export const boschClimate5000Ec07 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Bosch Climate 5000 EC 07 outdoor fan speed fault",
  slug: "climate-5000-ec07-error",
  path: "/brands/bosch/climate-5000-ec07-error/",
  description:
    "Decode EC 07 on Bosch Climate 5000 Gen 3 R-454B multi-zone systems and separate visible fan obstruction from powered motor and board testing.",
  articleType: "error-code",
  brand: "bosch",
  equipmentType: "ductless-mini-split",
  productFamily: "Climate 5000 Generation 3 R-454B multi-zone",
  models: ["Climate 5000 Gen 3 R-454B multi-zone outdoor units in the May 2025 service manual"],
  errorCode: "EC 07",
  problemType: "outdoor-fan-speed-fault",
  directAnswer:
    "On Bosch Climate 5000 Generation 3 R-454B multi-zone equipment, EC 07 means the outdoor fan speed is outside the control's expected range. The service procedure considers fan obstruction and assembly, motor wiring and feedback, the motor itself, and the outdoor PCB; the code does not select one of them.",
  scopeNotice:
    "This code definition applies only to the May 2025 Climate 5000 Gen 3 R-454B multi-zone manual. Earlier R-410A Climate 5000, single-zone, IDS, boiler, and Compress products use different references.",
  symptoms: ["The indoor control reports EC 07 while the outdoor fan fails to establish normal speed."],
  causes: [
    "Ice, debris, physical interference, or a damaged fan assembly can prevent commanded rotation.",
    "Motor power or feedback wiring, the outdoor fan motor, or the outdoor control board can produce an implausible speed signal.",
  ],
  diagnosticBranches: [
    {
      title: "Fan is visibly obstructed while power is off",
      observation:
        "From outside the cabinet, debris, severe ice, or displaced material is touching or blocking the fan area.",
      action:
        "Keep the unit off, remove only loose material outside the guard if safely reachable, and never reach through the grille or force the blade.",
    },
    {
      title: "Fan area looks clear but EC 07 returns",
      observation:
        "The guard and clearance are unobstructed, yet the fan does not start correctly, surges, stops, or the same code reappears.",
      action:
        "Preserve a video from a safe distance and request Bosch service for motor, feedback, harness, and board measurements.",
    },
  ],
  decisionTable: {
    caption: "Climate 5000 EC 07 observation split",
    columns: ["Outdoor observation", "Useful direction", "Not safe to infer"],
    rows: [
      ["Fan never moves", "Command, power, motor, harness, or obstruction", "Outdoor PCB is definitely bad"],
      ["Fan starts then stops", "Speed feedback or operating load needs testing", "Motor is the only cause"],
      ["Heavy ice at guard", "Physical interference may contribute", "Manual de-icing is safe"],
      [
        "Fan spins freely when de-energised by technician",
        "Mechanical seizure less likely",
        "Electrical path is healthy",
      ],
    ],
  },
  figures: [
    {
      title: "Outdoor fan command and feedback loop",
      description:
        "The board commands fan rotation and expects speed feedback inside a valid range, so mechanical motion and electrical reporting must agree.",
      nodes: [
        {
          label: "Outdoor PCB command",
          detail: "Requests a fan speed for current load",
        },
        {
          label: "Harness and motor",
          detail: "Deliver power and create rotation",
        },
        {
          label: "Fan assembly",
          detail: "Must turn without ice or physical interference",
        },
        {
          label: "Speed feedback",
          detail: "Returns actual movement for the EC 07 decision",
        },
      ],
    },
  ],
  sections: [
    {
      title: "EC 07 is about disagreement in a control loop",
      paragraphs: [
        "The outdoor fan is not simply on or off. Its speed is commanded as operating conditions change, and the control expects feedback that confirms plausible rotation. Bosch's EC 07 criteria include operation outside a lower and upper speed boundary. A seized or obstructed assembly can fail physically. A motor can fail to respond. A damaged connector can interrupt power or feedback. The board can also issue or interpret the signals incorrectly. All produce disagreement between requested and reported movement.",
        "A video has diagnostic value because it separates no motion, hesitant starting, repeated surging, and apparently steady rotation before shutdown. It still does not replace electrical measurements. A fan that looks normal can return invalid feedback, while a stationary fan may be correctly unpowered because another protection is active. The technician must follow the exact Gen 3 R-454B flow rather than jump from appearance to part.",
      ],
    },
    {
      title: "Keep hands outside the fan guard",
      paragraphs: [
        "Turn the system off using normal controls and isolate the known equipment disconnect if Bosch instructions and site access allow. From a safe position, photograph EC 07, the outdoor model label, fan guard, frost, and surrounding clearance. Do not reach through the grille, spin the blade, chip ice, or remove the top or service panel. An inverter outdoor unit contains hazardous voltage even after apparent shutdown.",
        "Report whether the fan never moved, attempted to start, changed speed, rubbed, or stopped before the code. Include wind, snow, icing, recent cleaning, electrical work, and any other codes. R-454B service also requires trained refrigerant handling and ignition-source controls. Smoke, burning odour, damaged wiring, or repeated breaker trips calls for continued isolation and prompt professional attention.",
      ],
    },
  ],
  safeChecks: [
    "With the unit off, document EC 07, the exact outdoor model, guard and clearance condition, ice, and fan behavior from outside the cabinet.",
  ],
  professionalEscalation: [
    "Fan access, motor resistance and feedback, harness, live inverter-board, refrigerant, and R-454B safety checks require qualified Bosch service.",
  ],
  serviceHandoff:
    "Provide both Climate 5000 models, code photo, fan video, startup behavior, outdoor weather, ice and obstruction photos, recent cleaning or wiring work, and breaker history.",
  resetGuidance:
    "One model-approved restart can show whether EC 07 persists; do not repeatedly energise a fan that is stalled, rubbing, iced, or faulting.",
  faqs: [
    {
      question: "Does Bosch EC 07 mean a bad fan motor?",
      answer:
        "Not by itself. Obstruction, fan assembly, harness, motor command or feedback, and the outdoor PCB all participate in the documented speed loop.",
    },
    {
      question: "Can ice cause Climate 5000 EC 07?",
      answer:
        "Severe ice can interfere with movement, but do not chip or heat the fan and coil. Document it and let qualified service address recurring buildup.",
    },
    {
      question: "Can I spin the outdoor fan to test it?",
      answer:
        "Do not reach through the guard or move the blade. Unexpected startup, sharp edges, and stored inverter voltage make internal fan checks technician work.",
    },
  ],
  sourceIds: ["bosch-climate5000-service", "bosch-ductless-manuals"],
  glossaryTerms: ["error-code", "refrigerant-leak"],
  relatedContent: [
    "/brands/bosch/",
    "/mini-split-outdoor-unit-not-running/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  keywords: ["bosch ec 07", "climate 5000 ec07", "bosch outdoor fan speed fault", "bosch mini split ec 07"],
});
