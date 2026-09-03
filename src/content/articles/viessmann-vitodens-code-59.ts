import { publish } from "./publish";
export const viessmannVitodensCode59 = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Viessmann Vitodens 100-W fault 59: supply undervoltage",
  slug: "vitodens-100w-fault-59",
  path: "/brands/viessmann/vitodens-100w-fault-59/",
  description:
    "Decode fault 59 on the documented Vitodens 100-W heat-only boiler and separate building supply, fan, wiring, and control evidence.",
  articleType: "error-code",
  brand: "viessmann",
  equipmentType: "boiler",
  productFamily: "Vitodens 100-W heat-only boilers in the cited UK installation instructions",
  models: ["Vitodens 100-W heat-only models covered by the cited manual"],
  errorCode: "59",
  problemType: "supply-undervoltage",
  directAnswer:
    "In the cited Viessmann Vitodens 100-W heat-only instructions, fault 59 is a burner lockout associated with power-supply undervoltage. The service response is to check the mains supply and, if the fault recurs, investigate the fan path. The code does not justify an owner changing the fan or boiler electronics.",
  scopeNotice:
    "This definition is limited to the United Kingdom Vitodens 100-W heat-only manual cited below. Viessmann fault meanings differ across Vitodens generations, combination boilers, Vitocal heat pumps, and control platforms.",
  symptoms: ["The Vitodens displays 59 and the burner is locked out, leaving normal heat production unavailable."],
  causes: [
    "Incoming mains voltage or a connection can fall outside the condition required for burner operation.",
    "A recurring event can involve the fan, its supply and wiring, or control behavior identified by the model-specific service procedure.",
  ],
  diagnosticBranches: [
    {
      title: "Fault 59 coincided with a building power event",
      observation:
        "Lights dimmed, other equipment changed, a generator or backup source was active, or several circuits showed trouble when the boiler locked out.",
      action:
        "Keep the boiler off and have the property supply assessed by a qualified electrician before assuming an internal boiler part.",
    },
    {
      title: "Fault 59 recurs with no external signs",
      observation:
        "The building supply appears stable to the occupant, yet the exact Vitodens repeatedly locks out with 59 during burner startup.",
      action:
        "A heating engineer should capture voltage under load and follow the manufacturer fan, wiring, and control checks inside the sealed appliance.",
    },
  ],
  decisionTable: {
    caption: "Vitodens fault 59 source split",
    columns: ["Context", "Evidence to obtain", "Responsible trade"],
    rows: [
      [
        "Several appliances affected",
        "Supply voltage and connection condition",
        "Qualified electrician or network provider",
      ],
      ["Only boiler affected", "Voltage at boiler under operating load", "Heating engineer and electrician as needed"],
      [
        "59 returns after supply is verified",
        "Fan, harness, and control service path",
        "Viessmann-trained heating engineer",
      ],
    ],
  },
  figures: [
    {
      title: "Power path behind fault 59",
      description:
        "Burner operation depends on suitable building supply reaching the boiler and its combustion fan while the control monitors a credible operating response.",
      nodes: [
        {
          label: "Building mains",
          detail: "Provides voltage within the applicable supply standard",
        },
        {
          label: "Boiler connection",
          detail: "Protective device and wiring carry power to appliance",
        },
        {
          label: "Fan and electronics",
          detail: "Use that supply during the combustion sequence",
        },
        {
          label: "Fault 59 lockout",
          detail: "Stops burner operation when undervoltage logic is met",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Undervoltage must be measured under the right condition",
      paragraphs: [
        "A normal-looking display does not prove that voltage remains adequate when the boiler starts its combustion fan. Loose connections and weak supplies can show acceptable voltage without load and drop when current is demanded. Conversely, a supply measured correctly at the boiler moves the diagnosis inward toward the fan, its wiring, and control response. That is why the manufacturer sequence begins with mains evidence rather than replacing electronics from the number.",
        "Building-wide context helps decide who should attend. Dimming lights, generator transfer, repeated appliance resets, or a neighbourhood supply event makes the external path important. A boiler-only recurrence still requires measured voltage at the appliance before the fan is condemned. Both paths involve hazardous mains electricity, and the boiler case and combustion system remain professional boundaries.",
      ],
    },
    {
      title: "Record the lockout without manufacturing repeats",
      paragraphs: [
        "Photograph the complete fault display and Vitodens model label. Note the exact time, whether the fan was heard, whether lights or other appliances changed, which power source was in use, and whether electrical work occurred recently. Ask neighbours about a shared event only if that can be done safely; do not use another socket or extension lead to test the boiler.",
        "Do not remove the boiler case, measure live terminals, replace fuses with another rating, disturb the fan, or reset fault 59 in a loop. A burning smell, hot connection, smoke, sparking, repeated protective-device trip, gas odour, or carbon-monoxide alarm needs immediate shutdown and the relevant emergency response. Even when a single reset restores heat, recurrence means the voltage and fan path still need proof.",
      ],
    },
  ],
  safeChecks: [
    "Save fault 59 and the model label, note building-wide power symptoms and power-source changes, and leave the boiler connection untouched.",
  ],
  professionalEscalation: [
    "Live mains, boiler connection, fan, harness, control, combustion, and sealed-case checks require a qualified electrician or Viessmann heating engineer.",
  ],
  serviceHandoff:
    "Provide the exact Vitodens model, fault photo and time, fan sound, building power symptoms, generator use, recent electrical work, protective-device history, and reset count.",
  resetGuidance:
    "Avoid repeated resets of burner lockout 59; one recovery does not establish that the supply or fan path is stable.",
  faqs: [
    {
      question: "Does Vitodens fault 59 mean a bad fan?",
      answer:
        "Not immediately. The cited sequence starts with supply undervoltage and moves toward fan investigation when the fault recurs after supply evidence.",
    },
    {
      question: "Can a power cut cause Viessmann code 59?",
      answer:
        "A low or unstable supply is consistent with the code. Record whether other equipment was affected, but have actual voltage and connections professionally tested.",
    },
    {
      question: "Should an electrician or boiler engineer check 59?",
      answer:
        "Building-wide symptoms can start with an electrician. The internal fan, wiring, control, and combustion path require a qualified heating engineer.",
    },
  ],
  sourceIds: ["viessmann-vitodens100-install", "viessmann-fault-checker"],
  glossaryTerms: ["error-code", "boiler"],
  relatedContent: ["/brands/viessmann/", "/how-to-document-hvac-fault-for-service/", "/how-to-read-hvac-data-plate/"],
  keywords: [
    "viessmann fault 59",
    "vitodens 100 w code 59",
    "viessmann undervoltage fault",
    "vitodens burner lockout 59",
  ],
});
