import { publish } from "./publish";
export const panasonicAquareaH62 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Panasonic Aquarea H62: read it as a water-flow fault",
  slug: "aquarea-h62-error-code",
  path: "/brands/panasonic/aquarea-h62-error-code/",
  description:
    "Understand Panasonic Aquarea H62, separate safe external observations from hydraulic service, and prepare the evidence an installer needs.",
  articleType: "error-code",
  brand: "panasonic",
  equipmentType: "heat-pump",
  productFamily: "Aquarea air-to-water heat pumps",
  models: ["Aquarea systems covered by the 2022 end-user manual"],
  errorCode: "H62",
  problemType: "water-flow-fault",
  directAnswer:
    "Panasonic's Aquarea end-user guidance identifies H62 as a water-flow error and directs the owner to an authorised installer. The code says required circulation was not confirmed; it does not decide whether the cause is system pressure, a closed valve, trapped air, blockage, pump operation, sensing, or wiring.",
  scopeNotice:
    "This answer applies to Panasonic Aquarea air-to-water heat pumps within the cited European end-user manual. Panasonic residential air conditioners use H codes too, but their meanings must not be transferred to Aquarea.",
  symptoms: ["The Aquarea controller shows H62 and space heating or hot-water production may stop."],
  causes: [
    "Water may not circulate at the rate the controller needs because of a hydraulic restriction, low pressure, air, or valve state.",
    "The pump, flow detection circuit, wiring, or control can fail to prove circulation even when the circuit contains water.",
  ],
  diagnosticBranches: [
    {
      title: "H62 followed hydraulic work",
      observation:
        "The alarm began after a radiator, filter, valve, pump, cylinder, or heating-water circuit was drained, isolated, or serviced.",
      action:
        "Tell the installer exactly what was changed; air, pressure, and valve position can then be checked against the commissioned design.",
    },
    {
      title: "H62 arrived without recent work",
      observation:
        "The system had been circulating normally and the alarm appeared with no known intervention on the water circuit.",
      action:
        "Record controller pressure, visible external leakage, weather, and active demand without removing covers, then arrange installer diagnosis.",
    },
  ],
  decisionTable: {
    caption: "What an H62 observation can narrow down",
    columns: ["Context", "Useful record", "Service question"],
    rows: [
      [
        "After draining or radiator work",
        "Date and affected circuit",
        "Was air removed and pressure restored correctly?",
      ],
      ["Cold-weather event", "Outdoor temperature and freeze signs", "Is the hydraulic route open and protected?"],
      ["Pressure visibly low", "Controller value and leak evidence", "Why did system pressure fall?"],
    ],
  },
  figures: [
    {
      title: "Aquarea water-flow proof chain",
      description:
        "The controller can deliver heat only when the hydraulic path permits circulation and its sensing chain confirms that circulation to the control.",
      nodes: [
        {
          label: "Heat demand",
          detail: "Calls for space heating or hot water",
        },
        {
          label: "Circulation pump",
          detail: "Attempts to move water through the selected circuit",
        },
        {
          label: "Hydraulic path",
          detail: "Valves, strainers, emitters, and pipework set resistance",
        },
        {
          label: "Flow proof",
          detail: "Reports whether circulation meets the control requirement",
        },
      ],
    },
  ],
  sections: [
    {
      title: "H62 describes a result, not a pump verdict",
      paragraphs: [
        "The controller raises H62 because the expected movement of heating water has not been established. A stationary pump is one possible route to that result, but so is a pump pushing against a closed or obstructed path. Air introduced during maintenance can interrupt circulation. Low system pressure or a leak can leave the circuit unable to carry flow. A flow sensor or its electrical path can also report no movement when the hydraulic question remains unsettled. Replacing the pump from the code alone skips these distinctions and can leave the alarm unchanged.",
        "A competent diagnosis starts with the installed hydraulic design. The installer knows which motorised valves should open for each demand, where strainers and isolation valves sit, how the system is filled and vented, and which pressure range was commissioned. Flow, pump command, sensor response, and temperature difference can then be assessed together. The correct finding is an evidence chain, not a guess based on the loudest component.",
      ],
    },
    {
      title: "Owner observations without entering the unit",
      paragraphs: [
        "Keep the display powered long enough to photograph H62 and the controller's visible pressure reading. Look only for water outside the equipment or at accessible pipework, and note whether recent work required draining. Record whether the request was for heating or domestic hot water, since that identifies the active route.",
        "Stop if water is near electrical equipment, if the property cannot maintain safe temperature, or if pipework may be frozen. Do not run the pump repeatedly against an unknown restriction, remove strainers, bleed unfamiliar pressurised components, or reset the alarm in a loop. The manufacturer directs H62 to an authorised installer because confirmation requires hydraulic and electrical access.",
      ],
    },
  ],
  safeChecks: [
    "Photograph H62 and the visible pressure value, note the active heating or hot-water demand, and check only for external water leakage.",
  ],
  professionalEscalation: [
    "Pump, flow-sensor, valve, strainer, pressure, venting, wiring, and internal hydraulic checks belong to the authorised Aquarea installer.",
  ],
  serviceHandoff:
    "Give the installer the Aquarea model, H62 photograph, pressure shown, requested operating mode, outdoor temperature, leak observations, and details of any recent draining or valve work.",
  resetGuidance:
    "Do not repeatedly clear H62; follow the model's user instruction and let the installer preserve and diagnose a returning water-flow alarm.",
  faqs: [
    {
      question: "Does Aquarea H62 mean the pump is broken?",
      answer:
        "Not by itself. H62 means circulation was not proved. Pump operation, water pressure, air, restrictions, valve position, sensing, and wiring remain separate possibilities.",
    },
    {
      question: "Can low pressure cause an H62 alarm?",
      answer:
        "Insufficient pressure can be relevant to a flow failure, but the reason for a low reading also needs attention. Record the value rather than blindly refilling the system.",
    },
    {
      question: "Is Panasonic air-conditioner H62 the same code?",
      answer:
        "Do not assume so. This definition comes from an Aquarea air-to-water manual; Panasonic wall-mounted air conditioners have different product-specific diagnostic tables.",
    },
  ],
  sourceIds: ["panasonic-aquarea-user", "panasonic-aquarea-use"],
  glossaryTerms: ["error-code", "air-to-water-heat-pump"],
  relatedContent: [
    "/brands/panasonic/",
    "/heat-pump-outdoor-unit-iced-over/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  keywords: [
    "panasonic aquarea h62",
    "aquarea h62 water flow",
    "panasonic heat pump h62 error",
    "aquarea water flow error",
  ],
});
