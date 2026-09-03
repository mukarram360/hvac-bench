import { publish } from "./publish";
export const bryantLimitSwitchTripping = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Bryant furnace limit switch keeps tripping",
  slug: "furnace-limit-switch-keeps-tripping",
  path: "/brands/bryant/furnace-limit-switch-keeps-tripping/",
  description:
    "Why a Bryant limit opening calls for airflow and temperature evidence before anyone replaces or bypasses the furnace safety switch.",
  articleType: "troubleshooting",
  brand: "bryant",
  equipmentType: "furnace",
  productFamily: "Bryant residential gas furnaces covered by the manufacturer limit-switch guide",
  models: ["Bryant residential gas furnaces with a high-temperature limit circuit"],
  problemType: "high-limit-trip",
  directAnswer:
    "A Bryant furnace limit switch opens to stop burner operation when internal temperature exceeds its threshold. Repeated opening can follow a loaded filter, blocked return or supply path, blower or duct problem, dirty heat-transfer surface, incorrect setup, or a faulty switch. The trip is evidence of overheating until measurements prove otherwise.",
  scopeNotice:
    "This explanation covers the high-temperature limit function described by Bryant, not every rollout, pressure, or auxiliary limit in every model. The furnace code and wiring diagram must identify which safety input opened.",
  symptoms: ["Burners stop before the thermostat is satisfied while the blower may continue moving air."],
  causes: [
    "Insufficient airflow can let furnace temperature rise faster than delivered air removes heat.",
    "Incorrect firing or setup, internal restriction, blower failure, duct conditions, or a degraded limit device can produce repeated openings.",
  ],
  diagnosticBranches: [
    {
      title: "Airflow changed before the trips",
      observation:
        "A new or dirty filter, closed registers, covered return, duct work, zoning change, or weak blower sound preceded the overheating behavior.",
      action:
        "Restore only normal accessible airflow, install the correct filter specified for the system, and leave a recurring trip off for technician measurement.",
    },
    {
      title: "Airflow appears unchanged",
      observation:
        "Accessible returns, supplies, and the correct clean filter are open, yet burner cycles remain short or a limit code returns.",
      action:
        "Do not assume the switch is defective; request temperature-rise, static-pressure, blower, firing, and safety-circuit diagnosis.",
    },
  ],
  decisionTable: {
    caption: "Limit-trip evidence hierarchy",
    columns: ["Observation", "Question raised", "Measurement needed"],
    rows: [
      ["Filter visibly loaded", "Return airflow may be restricted", "Temperature rise after correct filter"],
      ["Several registers closed", "Supply path may be restricted", "Static pressure and delivered airflow"],
      ["Blower sounds weak or stops", "Heat removal may be inadequate", "Motor command and airflow"],
      [
        "Normal airflow with repeated trip",
        "Setup, internal restriction, or switch remains",
        "Firing rate and switch-temperature test",
      ],
    ],
  },
  figures: [
    {
      title: "Why the burner stops but the blower may continue",
      description:
        "The limit interrupts heat production to protect the furnace while airflow can remain active to remove stored heat from the exchanger.",
      nodes: [
        {
          label: "Burners add heat",
          detail: "Combustion raises heat-exchanger temperature",
        },
        {
          label: "Blower removes heat",
          detail: "Return air carries useful heat into the ducts",
        },
        {
          label: "Limit threshold",
          detail: "Safety opens when internal temperature is excessive",
        },
        {
          label: "Protective response",
          detail: "Fuel stops while cooling airflow may continue",
        },
      ],
    },
  ],
  sections: [
    {
      title: "The limit is a safety reporter",
      paragraphs: [
        "Bryant describes the limit switch as both an operating and safety control that responds to furnace temperature. When it opens during a heating cycle, the important fact is excessive temperature at its location or an incorrect electrical report of that temperature. Replacing the switch first can silence a worn device, but it can also leave restricted airflow or excessive heat input untouched. A new switch then opens for the same valid reason.",
        "Airflow is a system quantity, not a visual guess. A clean filter can still be too restrictive for the installed return. Open registers do not prove that ducts, evaporator coil, blower wheel, motor command, zoning dampers, and setup deliver the required volume. A technician measures static pressure, airflow or blower performance, and temperature rise, then compares them with the furnace rating plate and installation data.",
      ],
    },
    {
      title: "What an owner can correct without touching the safety",
      paragraphs: [
        "Confirm the thermostat is in HEAT, inspect the user-accessible filter, use the correct size and type, and uncover return and supply grilles. Do not remove the filter and run the furnace as a test. Record burner run time, blower behavior, which registers are open, recent filter changes, renovations, duct work, and any displayed or flashing code.",
        "Never bypass, hold, or jumper a limit switch. Do not reach into the burner compartment, change blower settings, adjust gas pressure, or perform continuity tests. Leave the appliance off and seek urgent help for gas odour, soot, rollout, unusual hot surfaces, a carbon-monoxide alarm, or repeated electrical trips. Recurring limit operation after accessible airflow is restored requires licensed service before more heating cycles.",
      ],
    },
  ],
  safeChecks: [
    "Use only the specified clean filter, uncover all normal return and supply grilles, keep panels installed, and record burner and blower timing.",
  ],
  professionalEscalation: [
    "Static pressure, temperature rise, blower setup, firing rate, exchanger, duct, internal coil, and limit-circuit tests require licensed furnace service.",
  ],
  serviceHandoff:
    "Provide the Bryant model, exact code, filter specification and change date, open-register count, recent duct or zoning work, burner run time, blower behavior, and emergency symptoms.",
  resetGuidance:
    "Do not reset recurring limit trips or bypass the switch; repeated overheating needs airflow, firing, and temperature evidence.",
  faqs: [
    {
      question: "Should I replace a Bryant limit switch that trips?",
      answer:
        "Not from the trip alone. The switch may be responding correctly to overheating, so airflow, temperature rise, firing, and switch operation must be separated.",
    },
    {
      question: "Can a restrictive filter open the furnace limit?",
      answer:
        "Yes. Reduced return airflow can raise furnace temperature. Use the specified filter and still have a technician measure the whole air path if trips recur.",
    },
    {
      question: "Why does the fan run after the burners stop?",
      answer:
        "Continuing blower operation can remove stored heat after the limit stops fuel. That protective response does not mean the underlying overheating is repaired.",
    },
  ],
  sourceIds: ["bryant-limit-switch", "bryant-furnace-support"],
  glossaryTerms: ["air-filter", "static-pressure"],
  relatedContent: ["/brands/bryant/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: [
    "bryant furnace limit switch tripping",
    "bryant furnace overheating",
    "bryant high limit fault",
    "bryant burner shuts off blower runs",
  ],
});
