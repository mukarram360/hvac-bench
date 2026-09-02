import { publish } from "./publish";

/**
 * P1 is about the supply, and the useful homeowner evidence is whether the
 * rest of the property saw the same disturbance. That is observable without
 * touching anything electrical.
 */
export const mrcoolP1 = publish({
  title: "MRCOOL P1 or PC-01 error code: voltage protection",
  slug: "p1-pc01-error-code",
  path: "/brands/mrcool/p1-pc01-error-code/",
  description:
    "What MRCOOL P1 and PC-01 voltage protection means, how to tell a supply problem from an equipment problem, and why measurement is technician work.",
  articleType: "error-code",
  brand: "mrcool",
  equipmentType: "ductless-mini-split",
  productFamily: "MRCOOL single-zone and multi-zone families in official support",
  models: [
    "115 V single-zone systems identified by MRCOOL",
    "230 V single-zone systems identified by MRCOOL",
    "MRCOOL multi-zone systems",
  ],
  errorCode: "P1 / PC-01",
  problemType: "voltage-protection",
  directAnswer:
    "MRCOOL describes P1 or PC-01 as a voltage-related protection condition; exact terminal layout and acceptable supply depend on whether the documented system is 115 V, 230 V, single-zone, or multi-zone.",
  scopeNotice:
    "What counts as an acceptable supply is not one number across the MRCOOL range. A 115 V single-zone system, a 230 V single-zone system, and a multi-zone system have different expectations and different terminal arrangements, so the official material for your configuration governs, not a figure quoted for a different one.",
  symptoms: [
    "The indoor unit displays P1 or PC-01 and compressor operation may be inhibited by protection.",
  ],
  causes: [
    "Supply voltage outside the equipment's acceptable range can trigger protection.",
    "Loose connections or power/control electronics can require model-specific diagnosis.",
  ],
  diagnosticBranches: [
    {
      title: "The whole property shows signs of a supply problem",
      observation:
        "Lights dim when large appliances start, other equipment has been misbehaving, or the code appears during periods of heavy demand in the neighbourhood.",
      action:
        "Record when it happens and what else is affected. A supply issue that reaches beyond this one appliance is a question for the utility or an electrician, and the mini-split is reporting the symptom rather than causing it.",
    },
    {
      title: "Only the mini-split is affected",
      observation:
        "Everything else in the property behaves normally, and the protection appears on this equipment alone.",
      action:
        "Note that clearly, because it narrows the search to this circuit and this equipment: the dedicated breaker, the run to the unit, the terminals, and the power electronics. All of that requires a qualified visit.",
    },
    {
      title: "The breaker has tripped rather than the unit reporting",
      observation:
        "There is no display at all because the dedicated breaker is in the tripped position.",
      action:
        "Reset it once. If it trips again, leave it off and arrange service. A breaker that keeps tripping is protecting the circuit from something real, and repeated resetting is genuinely dangerous.",
    },
  ],
  comparisonTable: {
    caption: "Telling a supply problem from an equipment problem",
    columns: ["What you notice", "Points towards", "What it does not settle"],
    rows: [
      [
        "Lights across the property dim under load",
        "A supply or service condition affecting more than the mini-split",
        "It does not rule out the equipment also having a loose connection",
      ],
      [
        "Only this circuit is involved and everything else is fine",
        "The dedicated circuit, its terminals, or the power electronics",
        "It does not identify which of those, because they are only separated by measurement",
      ],
      [
        "The code appears during hot weather at peak times",
        "Voltage sag under regional demand rather than a fault in the unit",
        "It does not prove the supply left the acceptable range, which needs a meter",
      ],
    ],
  },
  sections: [
    {
      title: "Protection is the equipment defending itself",
      paragraphs: [
        "A voltage protection code is not a report that a part has broken. It says conditions on the supply side reached a point where the equipment would rather stop than continue, because running inverter electronics and a compressor on a supply outside their design window is what damages them.",
        "That framing changes what a good outcome looks like. If the supply really is sagging, replacing parts in the mini-split fixes nothing and the protection will operate again. The question worth answering is what the supply is actually doing at the moment the code appears, and that is a measurement over time rather than a single reading.",
      ],
    },
    {
      title: "What you can contribute without a meter",
      paragraphs: [
        "You cannot measure the supply safely, but you can characterise the pattern, and that is genuinely valuable. Note the time of day the code appears, the outdoor temperature, what else in the property was running, and whether anything else in the house showed a symptom at the same moment.",
        "A pattern that clusters on hot afternoons when air conditioning demand across a neighbourhood peaks tells a different story from a code that appears at three in the morning with nothing else running. Both are worth writing down, and either will shorten the visit.",
        "It is worth being clear about what a technician will do with that pattern. Supply problems are diagnosed by measuring over time rather than by a single reading at the terminals, because a supply that sags for two seconds under a starting load looks perfectly healthy the moment anyone puts a meter on it. Knowing when to watch is most of the work.",
      ],
    },
  ],
  figures: [
    {
      title: "The supply path a voltage protection is watching",
      description:
        "Protection responds to what arrives at the equipment, and the supply crosses several stages before it gets there. A disturbance at any of them reaches the same code.",
      nodes: [
        { label: "Utility supply", detail: "What is delivered to the property" },
        { label: "Consumer unit or panel", detail: "Where the dedicated circuit begins" },
        { label: "Circuit run", detail: "Cable and connections to the equipment" },
        { label: "Equipment terminals", detail: "The last joint before the power electronics" },
      ],
    },
  ],
  safeChecks: [
    "Record the full indoor and outdoor model numbers, displayed code, and whether other circuits in the home lost power.",
    "Check only the normal breaker position and do not repeatedly reset a breaker that trips.",
  ],
  professionalEscalation: [
    "MRCOOL's voltage measurements require panel access and live electrical testing; use a qualified HVAC or electrical professional.",
    "A tripping breaker, heat, odor, or damaged wiring requires the equipment to remain off.",
  ],
  serviceHandoff:
    "Report the system configuration and its supply voltage, the times of day the protection appears, the outdoor conditions at those times, whether anything else in the property is affected, and whether the dedicated breaker has tripped.",
  resetGuidance:
    "Do not use repeated resets to override voltage protection; one recurrence is enough to justify supply and equipment diagnosis.",
  faqs: [
    {
      question: "Is P1 the same as P0 on a MRCOOL?",
      answer:
        "No. P1 or PC-01 is a voltage-related protection concerned with the supply the equipment is receiving. P0 or PC00 is inverter module and compressor protection concerned with current and the drive. They are neighbouring codes with genuinely different meanings.",
    },
    {
      question: "Can a generator or inverter supply cause P1?",
      answer:
        "Supply outside the acceptable range for your configuration is what the protection responds to, so any supply arrangement is worth mentioning when you book service. Confirm what your specific system accepts from the official material rather than assuming.",
    },
    {
      question: "Should I keep resetting the breaker?",
      answer:
        "No. Reset it once. A breaker that trips again is doing its job, and repeated resetting exposes the circuit and you to whatever caused the trip. Leave it off and get the system looked at.",
    },
    {
      question: "Why does it only happen in the afternoon?",
      answer:
        "Regional electrical demand peaks when cooling load peaks, and supply voltage can sag at those times. That pattern is useful evidence, though only measurement at the equipment can confirm the supply actually left the acceptable range.",
    },
  ],
  sourceIds: ["mrcool-p1-guide", "mrcool-code-table"],
  relatedContent: ["/brands/mrcool/", "/mini-split-not-turning-on/"],
  keywords: [
    "mrcool p1 error code",
    "mrcool pc-01 error",
    "mrcool voltage protection",
    "mrcool mini split p1",
    "mrcool low voltage fault",
  ],
});
