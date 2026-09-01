import type { TechnicalArticle } from "./schema";

type ArticleDraft = Omit<
  TechnicalArticle,
  | "lastReviewed"
  | "reviewStatus"
  | "sourceType"
  | "keywords"
  | "models"
  | "faqs"
  | "authorSlug"
> &
  Partial<
    Pick<
      TechnicalArticle,
      | "models"
      | "faqs"
      | "authorSlug"
      | "reviewerSlug"
      | "datePublished"
      | "symptomFamily"
      | "steps"
      | "keywords"
      | "lastReviewed"
      | "reviewStatus"
    >
  >;

const singleSourceTypes: Record<string, TechnicalArticle["sourceType"]> = {
  "gree-e6-guide": "oem-support",
  "gree-multi21-service": "oem-service-manual",
  "gree-h5-guide": "oem-support",
  "gree-water-leak": "oem-support",
  "daikin-u4-service": "oem-service-manual",
  "daikin-a5-service": "oem-service-manual",
  "lg-general-service": "oem-service-manual",
  "midea-aurora-service": "oem-service-manual",
  "mrcool-code-table": "oem-support",
  "mrcool-e1-guide": "oem-support",
  "mrcool-p1-guide": "oem-support",
  "mrcool-p0-guide": "oem-support",
  "pioneer-quantum-e1": "oem-support",
  "pioneer-current-e1-e2": "oem-support",
  "senville-eh02": "oem-support",
  "senville-leto-codes": "oem-support",
  "fujitsu-rls2-operation": "oem-operation-manual",
  "fujitsu-troubleshooting": "oem-support",
  "fujitsu-filter-manual": "oem-operation-manual",
};

function completionDefaults(draft: ArticleDraft): Partial<TechnicalArticle> {
  const subject = draft.errorCode
    ? `${draft.brand?.toUpperCase() ?? "Equipment"} ${draft.errorCode}`
    : draft.title.split(":")[0];
  const scopedProduct = draft.productFamily ?? "the exact model family named in the cited literature";
  const firstSymptom = draft.symptoms[0];
  const firstCause = draft.causes[0];
  const secondCause = draft.causes[1] ?? draft.causes[0];
  const codeScope = draft.articleType === "error-code";

  return {
    scopeNotice: codeScope
      ? `This code meaning applies to ${scopedProduct}. The same characters can mean something different on another series, product type, or control platform, so confirm both model numbers before using the diagnostic path.`
      : `This is cross brand symptom guidance based on the cited manufacturer material. Controls, clearances, delays, and owner maintenance limits vary, so the operating manual for the exact indoor and outdoor models remains controlling.`,
    diagnosticBranches: [
      {
        title: codeScope ? "The display returns after one restart" : "The symptom clears after basic checks",
        observation: firstSymptom,
        action: codeScope
          ? "Record the complete code and stop repeated resets because the documented fault is still active."
          : "Continue to observe operation and keep a note of the setting or airflow condition that changed.",
      },
      {
        title: codeScope ? "The code follows power or service work" : "The symptom remains or returns",
        observation: firstCause,
        action: codeScope
          ? "Tell the technician what changed and provide every connected model number before electrical diagnosis begins."
          : "Stop at the owner safe boundary and arrange model specific diagnosis rather than replacing parts by symptom.",
      },
      {
        title: codeScope ? "A warning sign appears with the code" : "A warning sign appears",
        observation: secondCause,
        action: "Leave the equipment off for a tripped breaker, heat, smoke, burning odor, damaged wiring, severe vibration, or continuing water exposure.",
      },
    ],
    decisionTable: {
      caption: `${subject} decision guide`,
      columns: ["What you observe", "What it means", "Safe next action"],
      rows: [
        [
          codeScope ? "The display clears and operation stays normal" : "The symptom clears after an owner safe check",
          "The event may have been temporary, but the observation is still useful",
          "Monitor normal operation and keep the model, setting, and timing notes",
        ],
        [
          codeScope ? "The same complete code returns" : "The same symptom returns under the same demand",
          "The underlying condition has not been corrected",
          "Stop repeated resets and arrange model specific diagnosis",
        ],
        [
          "A breaker trips or there is heat, smoke, damage, or burning odor",
          "There may be an electrical or mechanical safety risk",
          "Leave power off and contact qualified service",
        ],
      ],
    },
    figures: [
      {
        title: `${subject} diagnostic path`,
        description: `A three stage visual path for separating the observed ${draft.problemType.replaceAll("-", " ")} condition from owner safe checks and qualified service work.`,
        nodes: [
          { label: "Observe", detail: `Record ${subject}, operating conditions, and timing` },
          { label: "Check safely", detail: "Use only accessible controls, filters, and visual observations" },
          { label: "Escalate", detail: "Stop when covers, live power, refrigerant, or internal parts are involved" },
        ],
      },
    ],
    sections: [
      {
        title: "What the evidence supports",
        paragraphs: [
          `${draft.directAnswer} The cited source defines the diagnostic area, but it does not prove that the first possible component has failed.`,
        ],
      },
      {
        title: "What to record before service",
        paragraphs: [
          `Photograph the display and equipment labels. Record the complete indoor and outdoor model numbers, operating mode, setpoint, outdoor conditions, timing, recent power events, and exactly what changed before ${subject} appeared.`,
        ],
      },
    ],
    serviceHandoff: `Give the technician the complete indoor and outdoor model numbers, serial numbers, display photo, operating mode, timing, weather conditions, recent maintenance or power events, and the result of each owner safe check.`,
    steps:
      draft.articleType === "maintenance"
        ? [
            {
              name: "Confirm the exact filter instructions",
              text: "Read the operating manual for the indoor model and identify which filters are removable, washable, disposable, or optional.",
            },
            {
              name: "Stop operation before access",
              text: "Turn the unit off with the normal control and open only the user access panel described in the operating manual.",
            },
            {
              name: "Clean without damaging the media",
              text: "Vacuum gently or wash only when the manufacturer permits it, using the specified water and detergent limits without bending the filter.",
            },
            {
              name: "Dry and reinstall correctly",
              text: "Let washable filters dry completely away from direct heat, reinstall them in the original orientation, close the panel, and reset reminders only as documented.",
            },
          ]
        : undefined,
    faqs: [
      {
        question: `What does ${subject} mean?`,
        answer: `${draft.directAnswer} Always confirm the exact product family because similar symptoms and identical display characters do not establish the same diagnosis across every model.`,
      },
      {
        question: `Can I safely reset ${subject}?`,
        answer: `${draft.resetGuidance ?? "Use only the normal power or controller procedure allowed by the exact operating manual."} If the condition returns, repeated resets can hide useful evidence without correcting the cause.`,
      },
      {
        question: `When does ${subject} need professional service?`,
        answer: `${draft.professionalEscalation[0]} Arrange prompt help whenever the condition returns after owner safe checks or operation cannot remain normal.`,
      },
    ],
    keywords: [
      draft.title.toLowerCase(),
      `${subject.toLowerCase()} meaning`,
      `${subject.toLowerCase()} troubleshooting`,
      `${draft.problemType.replaceAll("-", " ")} diagnosis`,
      `${draft.equipmentType.replaceAll("-", " ")} repair guide`,
    ],
    lastReviewed: "2026-09-02",
  };
}

function guide(draft: ArticleDraft): TechnicalArticle {
  const completed = completionDefaults(draft);
  return {
    models: ["Cross-brand guidance; confirm the exact model manual"],
    ...completed,
    authorSlug: "hvac-bench-editorial",
    datePublished: "2026-09-01",
    lastReviewed: "2026-09-02",
    reviewStatus: "source-verified",
    sourceType:
      draft.sourceIds.length > 1
        ? "mixed-primary-sources"
        : singleSourceTypes[draft.sourceIds[0]] ?? "oem-support",
    ...draft,
    faqs: draft.faqs ?? completed.faqs ?? [],
    keywords: draft.keywords ?? completed.keywords ?? [draft.title],
  };
}

export const articles = [
  guide({ title: "Gree E6 error code: indoor-outdoor communication fault", slug: "e6-error-code", path: "/brands/gree/e6-error-code/", description: "What Gree E6 means on documented mini-split families, what you can safely check, and why wiring and control diagnosis belongs with a technician.", articleType: "error-code", brand: "gree", equipmentType: "ductless-mini-split", productFamily: "Multi21+ and documented residential mini-splits", models: ["Multi21+ 30K", "Multi21+ 36K", "Multi21+ 42K"], errorCode: "E6", problemType: "communication-fault", directAnswer: "On the documented Gree systems, E6 means the indoor and outdoor equipment are not communicating normally; it identifies a communication path fault, not a single failed part.", symptoms: ["The indoor display shows E6 while normal heating or cooling is interrupted."], causes: ["Incorrect, loose, damaged, or spliced interconnect wiring can interrupt communication.", "An indoor or outdoor control-board communication circuit may have failed."], safeChecks: ["Record the complete indoor and outdoor model numbers and photograph the E6 display.", "With the system off, confirm no recent breaker trip, outage, or visible cable damage occurred."], professionalEscalation: ["A technician should isolate power before inspecting terminals, wiring continuity, accessories, or control boards.", "Do not perform the manual's powered voltage tests unless you are qualified for live electrical diagnostics."], resetGuidance: "One power cycle may confirm whether the code was transient; repeated E6 requires diagnosis and should not be repeatedly reset.", sourceIds: ["gree-e6-guide", "gree-multi21-service"], relatedContent: ["/brands/gree/", "/mini-split-not-cooling/", "/mini-split-not-turning-on/"] }),
  guide({ title: "Gree H5 error code: intelligent power module protection", slug: "h5-error-code", path: "/brands/gree/h5-error-code/", description: "A source-qualified explanation of Gree H5 protection, observable airflow checks, and the electrical and refrigerant tests reserved for HVAC service.", articleType: "error-code", brand: "gree", equipmentType: "heat-pump", productFamily: "Gree residential inverter systems covered by the OEM guide", models: ["Gree residential inverter systems; verify the model service manual"], errorCode: "H5", problemType: "inverter-module-protection", directAnswer: "Gree identifies H5 as intelligent power module protection caused by an IPM synchronization or overcurrent condition; the protection can have airflow, refrigerant, wiring, board, or compressor causes.", symptoms: ["The indoor unit reports H5 and compressor operation may stop to protect the drive system."], causes: ["Restricted indoor or outdoor airflow can contribute to abnormal operating load.", "Refrigerant circuit, compressor, wiring, or inverter-drive faults require model-specific testing."], safeChecks: ["Turn the system off and look for a blocked return filter or obvious debris restricting the outdoor coil.", "Record whether H5 appears immediately or only after the compressor begins operating."], professionalEscalation: ["Refrigerant pressure, compressor winding, DC bus, and live-voltage tests are technician work.", "Do not replace a board or compressor until the root operating condition is confirmed."], resetGuidance: "A single restart can document recurrence, but repeated clearing does not correct an overcurrent or inverter protection condition.", sourceIds: ["gree-h5-guide"], relatedContent: ["/brands/gree/", "/mini-split-not-cooling/", "/mini-split-filter-cleaning/"] }),
  guide({ title: "Daikin U4 error code: indoor-outdoor transmission error", slug: "u4-error-code", path: "/brands/daikin/u4-error-code/", description: "What Daikin U4 means for the documented SkyAir series, likely transmission causes, safe observations, and the point to involve qualified service.", articleType: "error-code", brand: "daikin", equipmentType: "light-commercial", productFamily: "SkyAir RZR-P and RZQ-P(9)", models: ["RZR-P series", "RZQ-P(9) series", "Compatible indoor units listed in SiUS281117"], errorCode: "U4", problemType: "communication-fault", directAnswer: "For the documented Daikin SkyAir RZR-P and RZQ-P(9) systems, U4 is a transmission error between indoor and outdoor units after normal communication is absent for the specified interval.", symptoms: ["The controller displays U4 and the connected system cannot continue normal operation."], causes: ["Incorrect transmission wiring, loss of power, or a blown fuse can break communication.", "Indoor or outdoor control electronics, an outdoor fan fault, or electrical noise may be involved."], safeChecks: ["Write down the full controller code and every connected indoor and outdoor model number.", "Check only normal user-accessible power controls and note whether other units on the same system operate."], professionalEscalation: ["Transmission wiring, fuses, fan motors, and PCBs require qualified electrical diagnosis.", "Multi-unit SkyAir systems should be diagnosed as a network rather than by replacing the first board named."], resetGuidance: "A power cycle may be used only as the operating manual permits; a returning U4 indicates an unresolved transmission fault.", sourceIds: ["daikin-u4-service"], relatedContent: ["/brands/daikin/", "/mini-split-not-turning-on/", "/mini-split-remote-not-working/"] }),
  guide({ title: "Daikin A5 error code: freeze-up or heating peak-cut control", slug: "a5-error-code", path: "/brands/daikin/a5-error-code/", description: "Daikin A5 code context for 15 and 19 Series systems, including airflow checks and why thermistor or control diagnosis requires service literature.", articleType: "error-code", brand: "daikin", equipmentType: "ductless-mini-split", productFamily: "Daikin 15 and 19 Series", models: ["15 Series models in SiUS041501E", "19 Series models in SiUS041501E"], errorCode: "A5", problemType: "coil-temperature-protection", directAnswer: "On Daikin 15 and 19 Series equipment, A5 represents freeze-up protection in cooling or heating peak-cut control when the indoor heat-exchanger temperature crosses the documented limits.", symptoms: ["Cooling or heating pauses and the controller reports A5 as coil-temperature protection operates."], causes: ["A clogged indoor filter, dust on the heat exchanger, or recirculated discharge air can disturb airflow.", "An indoor heat-exchanger thermistor or indoor control board can also be defective."], safeChecks: ["Turn the unit off and inspect the user-removable filter for loading; clean it exactly as the model manual directs.", "Confirm furniture, curtains, or closed louvers are not blocking the indoor intake or outlet."], professionalEscalation: ["Persistent icing, thermistor testing, coil cleaning beyond routine maintenance, and PCB diagnosis need qualified service.", "Do not chip ice from a coil or use heat sources to force thawing."], resetGuidance: "Let visible ice thaw with the system off; if A5 returns after airflow is restored, stop cycling the unit and arrange diagnosis.", sourceIds: ["daikin-a5-service"], relatedContent: ["/brands/daikin/", "/mini-split-frozen-coil/", "/mini-split-filter-cleaning/"] }),
  guide({ title: "LG CH05 error code: indoor-outdoor communication error", slug: "ch05-error-code", path: "/brands/lg/ch05-error-code/", description: "LG CH05 meaning in the documented single-zone manual, common communication-path causes, safe observations, and technician-only electrical checks.", articleType: "error-code", brand: "lg", equipmentType: "ductless-mini-split", productFamily: "LG single-zone systems in MFL41161610", models: ["LG single-zone systems covered by General Service Manual MFL41161610"], errorCode: "CH05", problemType: "communication-fault", directAnswer: "LG's documented CH05 code indicates an indoor-to-outdoor communication error; the same service table groups related CH53 and CH93 communication conditions by system context.", symptoms: ["The indoor display reports CH05 and the indoor and outdoor units do not coordinate normal operation."], causes: ["Indoor power loss, disconnected or miswired interconnect conductors, or external electrical noise can interrupt communication.", "Indoor or outdoor control circuitry or another electrical component may be involved."], safeChecks: ["Record the complete code, model numbers, and whether either unit shows signs of power.", "Note whether the code followed an outage, installation, or other electrical work without opening a panel."], professionalEscalation: ["Terminal, grounding, resistance, motor, and PCB checks in the service manual require a qualified technician.", "Wait-time and stored-energy warnings in the service literature must be followed before electrical access."], resetGuidance: "A controlled power cycle can document recurrence; continuing CH05 should be diagnosed rather than repeatedly cleared.", sourceIds: ["lg-general-service"], relatedContent: ["/brands/lg/", "/mini-split-not-turning-on/", "/mini-split-not-cooling/"] }),
  guide({ title: "Midea E1 error code: Aurora Xtreme communication fault", slug: "e1-error-code", path: "/brands/midea/e1-error-code/", description: "A narrowly scoped Midea E1 reference for the Aurora Xtreme service manual, avoiding the false assumption that E1 has one meaning on every Midea product.", articleType: "error-code", brand: "midea", equipmentType: "ductless-mini-split", productFamily: "Aurora Xtreme Inverter 36,000 BTU cooling-only 220 V", models: ["Aurora Xtreme Inverter 36,000 BTU cooling-only 220 V documented model"], errorCode: "E1", problemType: "communication-fault", directAnswer: "In the cited Midea Aurora Xtreme service manual, E1 means the indoor unit repeatedly failed to receive feedback from the outdoor unit; other Midea product categories can assign E1 differently.", symptoms: ["The indoor unit displays E1 after repeated missing feedback from the outdoor unit."], causes: ["Indoor or outdoor wiring connections can interrupt the signal path.", "The documented service tree also considers the reactor and indoor or outdoor control boards."], safeChecks: ["Verify the exact model family before using this meaning, because Midea E1 is not universal.", "Record whether the code appears after a power interruption or installation work."], professionalEscalation: ["Signal-voltage measurement, reactor inspection, and PCB replacement are technician procedures.", "Do not open the outdoor electrical compartment or attempt live meter tests."], resetGuidance: "The cited service flow begins with a two-minute power-off restart; if E1 returns, stop at homeowner observations and obtain service.", sourceIds: ["midea-aurora-service"], relatedContent: ["/brands/midea/", "/mini-split-not-turning-on/", "/mini-split-not-cooling/"] }),
  guide({ title: "MRCOOL EL01 or E1 error code: communication malfunction", slug: "el01-e1-error-code", path: "/brands/mrcool/el01-e1-error-code/", description: "Generation-aware MRCOOL EL01 and E1 guidance, homeowner-safe checks, and a clear boundary before voltage, wiring, or board diagnosis.", articleType: "error-code", brand: "mrcool", equipmentType: "ductless-mini-split", productFamily: "MRCOOL generations and models identified in official support", models: ["Generation 4 indoor units", "Generation 5 indoor units", "Models identified in the official EL01/E1 guide"], errorCode: "EL01 / E1", problemType: "communication-fault", directAnswer: "MRCOOL identifies EL01 or E1 on the supported mini-split families as an indoor-to-outdoor communication malfunction, commonly involving the connection path but not proving one component failed.", symptoms: ["The air handler shows EL01 or E1 and the indoor and outdoor units cannot complete normal communication."], causes: ["Loose, incorrect, or damaged communication wiring can interrupt the signal.", "Indoor or outdoor PCB faults or shorted connected components require further isolation."], safeChecks: ["Match the displayed code and model generation to MRCOOL's official code table.", "With power off at the breaker, wait as the official guide directs and note whether one restart clears the display."], professionalEscalation: ["Terminal access, voltage measurements, board LEDs, and component isolation expose hazardous electrical parts and are technician work.", "If the code returns, contact qualified service or MRCOOL support with model and serial information."], resetGuidance: "MRCOOL's guide begins with a breaker-off wait; use that once, then escalate if the code remains or returns.", sourceIds: ["mrcool-code-table", "mrcool-e1-guide"], relatedContent: ["/brands/mrcool/", "/mini-split-not-turning-on/", "/mini-split-remote-not-working/"] }),
  guide({ title: "MRCOOL P1 or PC-01 error code: voltage protection", slug: "p1-pc01-error-code", path: "/brands/mrcool/p1-pc01-error-code/", description: "What MRCOOL P1 and PC-01 indicate, the safe information to collect, and why voltage measurement and correction require qualified electrical service.", articleType: "error-code", brand: "mrcool", equipmentType: "ductless-mini-split", productFamily: "MRCOOL single-zone and multi-zone families in official support", models: ["115 V single-zone systems identified by MRCOOL", "230 V single-zone systems identified by MRCOOL", "MRCOOL multi-zone systems"], errorCode: "P1 / PC-01", problemType: "voltage-protection", directAnswer: "MRCOOL describes P1 or PC-01 as a voltage-related protection condition; exact terminal layout and acceptable supply depend on whether the documented system is 115 V, 230 V, single-zone, or multi-zone.", symptoms: ["The indoor unit displays P1 or PC-01 and compressor operation may be inhibited by protection."], causes: ["Supply voltage outside the equipment's acceptable range can trigger protection.", "Loose connections or power/control electronics can require model-specific diagnosis."], safeChecks: ["Record the full indoor and outdoor model numbers, displayed code, and whether other circuits in the home lost power.", "Check only the normal breaker position and do not repeatedly reset a breaker that trips."], professionalEscalation: ["MRCOOL's voltage measurements require panel access and live electrical testing; use a qualified HVAC or electrical professional.", "A tripping breaker, heat, odor, or damaged wiring requires the equipment to remain off."], resetGuidance: "Do not use repeated resets to override voltage protection; one recurrence is enough to justify supply and equipment diagnosis.", sourceIds: ["mrcool-p1-guide", "mrcool-code-table"], relatedContent: ["/brands/mrcool/", "/mini-split-not-turning-on/"] }),
  guide({ title: "MRCOOL P0 or PC00 error code: inverter module protection", slug: "p0-pc00-error-code", path: "/brands/mrcool/p0-pc00-error-code/", description: "A safe explanation of MRCOOL P0 and PC00 inverter protection, observable checks, and why compressor and high-voltage diagnostics are professional work.", articleType: "error-code", brand: "mrcool", equipmentType: "ductless-mini-split", productFamily: "MRCOOL mini-splits covered by official P0/PC00 support", models: ["MRCOOL mini-splits displaying P0 or PC00 per official support"], errorCode: "P0 / PC00", problemType: "inverter-module-protection", directAnswer: "MRCOOL identifies P0 or PC00 as an inverter-module or compressor-protection condition associated with abnormal voltage or current, wiring, the inverter module, or the compressor.", symptoms: ["The system reports P0 or PC00 and the compressor does not run normally or stops under protection."], causes: ["Unstable supply, damaged connections, an inverter-module fault, or a compressor fault can be involved.", "The displayed protection identifies the diagnostic area but does not identify a replacement part by itself."], safeChecks: ["Turn the unit off and check for visible outdoor airflow blockage without removing covers.", "Record when the code appears and whether it followed an outage or severe weather."], professionalEscalation: ["Live supply checks, inverter-module tests, compressor tests, and internal wiring inspection require qualified service.", "Do not handle capacitors, DC bus components, or compressor terminals."], resetGuidance: "A returning P0 or PC00 should remain off pending diagnosis instead of being repeatedly restarted.", sourceIds: ["mrcool-p0-guide", "mrcool-code-table"], relatedContent: ["/brands/mrcool/", "/mini-split-not-cooling/", "/mini-split-outdoor-unit-not-running/"] }),
  guide({ title: "Pioneer E1, EL01, or EL 01: Quantum communication error", slug: "e1-communication-error-code", path: "/brands/pioneer/e1-communication-error-code/", description: "The communication meaning of Pioneer E1 and EL01 on discontinued Quantum families, with explicit model scope to prevent cross-series misdiagnosis.", articleType: "error-code", brand: "pioneer", equipmentType: "ductless-mini-split", productFamily: "Discontinued Quantum WYS, CYB, RYB, UYB, and FYB", models: ["WYS", "CYB", "RYB", "UYB", "FYB", "Additional models listed in the official guide"], errorCode: "E1 / EL01 / EL 01", problemType: "communication-fault", directAnswer: "For the discontinued Pioneer Quantum families and models listed in the official guide, E1, EL01, or EL 01 means the indoor and outdoor units cannot communicate successfully.", symptoms: ["The indoor unit displays the communication code and normal system operation is interrupted."], causes: ["Loose or incorrect interconnect wiring can prevent the indoor and outdoor units from exchanging data.", "Indoor or outdoor control boards or a shorted connected component may be involved."], safeChecks: ["Confirm the unit is one of the exact discontinued Quantum families covered by the guide.", "Record whether the code appeared after installation, service, or a power interruption."], professionalEscalation: ["The official diagnostic path includes terminal, voltage, PCB, and high-voltage component tests that require qualified service.", "Do not use this page for newer Pioneer families where E1 can mean a sensor fault."], resetGuidance: "The official guide allows a two-minute power-off restart for an existing installation; a returning code requires diagnosis.", sourceIds: ["pioneer-quantum-e1"], relatedContent: ["/brands/pioneer/", "/brands/pioneer/e1-temperature-sensor-error-code/", "/mini-split-not-turning-on/"] }),
  guide({ title: "Pioneer E1 error code: room-temperature sensor failure", slug: "e1-temperature-sensor-error-code", path: "/brands/pioneer/e1-temperature-sensor-error-code/", description: "Why E1 means a room-temperature sensor fault on specified current Pioneer families, not the communication fault assigned by older Quantum systems.", articleType: "error-code", brand: "pioneer", equipmentType: "ductless-mini-split", productFamily: "Diamante Essenza, Diamante Pro, Quantum Fresh, Hyperformance, and Ultra", models: ["WYT-17", "WYT-20", "WYT-FA", "WYT-25", "CYT-24", "RYT-24", "UYT-24", "WYT-24"], errorCode: "E1", problemType: "temperature-sensor-fault", directAnswer: "On the Pioneer families listed by the current official guide, E1 indicates an indoor room-temperature sensor failure; this differs from the communication meaning used by specified discontinued Quantum equipment.", symptoms: ["The supported indoor unit reports E1 and temperature sensing or normal operation may be affected."], causes: ["The indoor room-temperature sensor, its connection, or the indoor control board can require diagnosis."], safeChecks: ["Compare both indoor and outdoor model numbers with the guide's supported-model list before interpreting E1.", "Record the room conditions and whether the displayed temperature appears implausible."], professionalEscalation: ["Sensor resistance, connector, and PCB diagnosis requires the exact service data and qualified equipment access.", "Do not substitute the older Quantum communication procedure for these listed models."], resetGuidance: "If E1 returns after one permitted power cycle, the sensor circuit needs model-specific diagnosis.", sourceIds: ["pioneer-current-e1-e2"], relatedContent: ["/brands/pioneer/", "/brands/pioneer/e1-communication-error-code/", "/mini-split-not-cooling/"] }),
  guide({ title: "Senville EH 02 error code: zero-crossing signal fault", slug: "eh02-error-code", path: "/brands/senville/eh02-error-code/", description: "Senville EH 02 meaning for applicable LETO and AURA equipment, its AC-fan-motor scope, safe restart guidance, and service boundary.", articleType: "error-code", brand: "senville", equipmentType: "ductless-mini-split", productFamily: "LETO and AURA models using an applicable AC fan motor", models: ["Senville LETO models with the applicable AC fan design", "Senville AURA models with the applicable AC fan design"], errorCode: "EH 02", problemType: "zero-crossing-signal-fault", directAnswer: "Senville says EH 02 on applicable LETO and AURA equipment means the indoor PCB is not receiving the expected zero-crossing feedback associated with the AC fan motor; it does not apply the same way to DC-motor designs.", symptoms: ["The indoor display shows EH 02 and indoor fan operation may be interrupted."], causes: ["A wiring or power-supply issue can interrupt the expected feedback signal.", "The indoor control board may be faulty after wiring and supply are verified."], safeChecks: ["Confirm the exact series and whether the model uses the applicable AC fan motor before using this diagnosis.", "Turn off system power completely, wait two minutes as Senville directs, and observe whether the code returns."], professionalEscalation: ["If the code remains, wiring, supply, fan design, and indoor PCB checks belong with qualified service.", "Do not access the indoor electrical enclosure or test energized components."], resetGuidance: "Senville specifies one complete two-minute power-off restart; recurrence means the fault needs service.", sourceIds: ["senville-eh02"], relatedContent: ["/brands/senville/", "/mini-split-not-turning-on/", "/mini-split-making-noise/"] }),
  guide({ title: "Senville PC 0A error code: condenser high-temperature protection", slug: "pc0a-error-code", path: "/brands/senville/pc0a-error-code/", description: "A scoped LETO-series explanation of Senville PC 0A high-temperature protection, airflow observations, and the point to stop homeowner troubleshooting.", articleType: "error-code", brand: "senville", equipmentType: "ductless-mini-split", productFamily: "Senville LETO Series", models: ["Senville LETO Series models listed by official support"], errorCode: "PC 0A", problemType: "condenser-high-temperature-protection", directAnswer: "Senville's LETO reference identifies PC 0A as condenser high-temperature protection, a protective shutdown that calls for airflow inspection before deeper refrigeration or control diagnosis.", symptoms: ["The unit displays PC 0A and cooling or heating may stop while the outdoor section protects itself."], causes: ["Restricted outdoor airflow or a dirty condenser can contribute to elevated condenser temperature.", "A persistent condition may involve fan, sensor, refrigerant, installation, or control issues."], safeChecks: ["With the system off, remove loose leaves or objects blocking the outdoor unit's clear airflow area.", "Confirm the outdoor fan area is not visibly packed with debris without removing the grille or panels."], professionalEscalation: ["Coil deep-cleaning, fan diagnosis, refrigerant evaluation, sensor tests, and control checks require qualified service.", "Keep the system off if the outdoor unit is hot, damaged, or repeatedly enters protection."], resetGuidance: "Allow the unit to cool after clearing only external obstructions; repeated PC 0A should not be reset into continued operation.", sourceIds: ["senville-leto-codes"], relatedContent: ["/brands/senville/", "/mini-split-not-cooling/", "/mini-split-outdoor-unit-not-running/"] }),
  guide({ title: "Mini-split not cooling: a safe diagnostic path", slug: "mini-split-not-cooling", path: "/mini-split-not-cooling/", description: "Check mode, setpoint, filters, airflow, doors, sunlight, and visible fault codes before deciding whether a non-cooling mini-split needs service.", articleType: "troubleshooting", equipmentType: "ductless-mini-split", problemType: "not-cooling", directAnswer: "A mini-split that runs but does not cool may be in the wrong mode, have an unsuitable setpoint, restricted indoor or outdoor airflow, a high room load, or a fault that needs model-specific diagnosis.", symptoms: ["Airflow is present but the room temperature does not fall as expected.", "The unit may run quietly or intermittently without delivering normal cooling."], causes: ["Dirty filters, blocked intake or outlet, open doors, direct sun, or Quiet mode can reduce delivered capacity.", "Frozen coils, fan faults, refrigerant problems, or control faults require service."], safeChecks: ["Select Cool rather than Fan or Dry and set a temperature below the measured room temperature.", "Clean the user-serviceable filter, clear indoor and outdoor airflow space, and close exterior doors and windows.", "Record any displayed code instead of guessing from the symptom alone."], professionalEscalation: ["Call for service if a clean, unobstructed system still does not cool, if ice forms, or if a code returns.", "Refrigerant, coil, motor, and electrical diagnosis are not homeowner procedures."], sourceIds: ["fujitsu-rls2-operation", "trane-mini-split-not-cooling", "daikin-mxs-engineering"], relatedContent: ["/troubleshooting/", "/mini-split-filter-cleaning/", "/mini-split-frozen-coil/"] }),
  guide({ title: "Mini-split not heating: what to check before service", slug: "mini-split-not-heating", path: "/mini-split-not-heating/", description: "Separate normal heat-pump delays and defrost from mode, setpoint, filter, airflow, and fault conditions that require professional diagnosis.", articleType: "troubleshooting", equipmentType: "heat-pump", problemType: "not-heating", directAnswer: "A heat-pump mini-split may briefly pause or reduce indoor airflow during warm-up and defrost, but persistent no-heat can also come from settings, blocked airflow, low outdoor conditions, or an equipment fault.", symptoms: ["The indoor fan is slow or stopped, supply air is not warm, or heating pauses during cold weather."], causes: ["Normal coil warm-up and automatic defrost can temporarily interrupt warm airflow.", "Dirty filters, blocked outdoor airflow, an unsuitable setpoint, or a documented fault can prevent expected heating."], safeChecks: ["Confirm Heat mode, raise the setpoint above room temperature, and allow the model's normal start delay.", "Clean the filter, clear safe outdoor airflow space, and look for a fault code or defrost indication."], professionalEscalation: ["Arrange service when heating does not resume after normal defrost, a fault code appears, or ice does not clear.", "Do not remove outdoor ice with tools, boiling water, or improvised heaters."], sourceIds: ["fujitsu-troubleshooting", "fujitsu-aduh-operation", "trane-mini-split-not-heating"], relatedContent: ["/troubleshooting/", "/heat-pump-outdoor-unit-iced-over/", "/mini-split-filter-cleaning/"] }),
  guide({ title: "Mini-split leaking water: shut down, inspect, and escalate safely", slug: "mini-split-leaking-water", path: "/mini-split-leaking-water/", description: "Why an indoor mini-split can leak, which filter and drain observations are safe, and when water, ice, or a condensate pump requires service.", articleType: "troubleshooting", equipmentType: "ductless-mini-split", problemType: "water-leak", directAnswer: "Water from an indoor mini-split is not normal; condensate is likely failing to reach the drain because of dirt, a blockage, poor drainage, a frozen coil, or a condensate-pump problem.", symptoms: ["Water drips from the indoor cabinet, wall, line-cover joint, or an unexpected drain connection."], causes: ["A dirty filter or coil can disturb airflow and water tracking, while a clogged or poorly routed drain can overflow.", "Ice, low refrigerant, incorrect level, or a failed condensate pump can also produce leakage."], safeChecks: ["Turn the unit off, protect finishes from water, and clean only the user-removable filter as the manual permits.", "Observe whether water exits the normal outdoor drain end without disconnecting or blowing through lines."], professionalEscalation: ["Ceiling or wall water, recurring leaks, frozen coils, pump faults, and drain disassembly require prompt service.", "Do not run a leaking unit or pressure-clean the indoor coil as a homeowner."], sourceIds: ["gree-water-leak", "fujitsu-rls2-operation"], relatedContent: ["/troubleshooting/", "/mini-split-frozen-coil/", "/mini-split-filter-cleaning/"] }),
  guide({
    title: "Mini split remote not working: complete response checks",
    slug: "mini-split-remote-not-working",
    path: "/mini-split-remote-not-working/",
    description:
      "Find whether batteries, settings, the infrared path, the indoor receiver, or unit power is stopping your mini split from responding.",
    articleType: "troubleshooting",
    equipmentType: "ductless-mini-split",
    problemType: "remote-not-working",
    directAnswer:
      "Start by separating a blank remote from a remote whose screen still works. A blank screen points first to batteries, contacts, or handset damage. A working screen with no indoor unit beep points instead to weak batteries, settings, infrared transmission, the receiver, or a broader unit power problem.",
    scopeNotice:
      "Remote layouts, battery types, reset buttons, signal range, manual operation controls, and replacement part numbers vary by model. Use the exact indoor unit and controller manuals before applying a reset or buying a replacement.",
    symptoms: [
      "The remote display is blank, faded, intermittent, or visible only after a battery is moved.",
      "The remote display changes but the indoor unit does not beep or apply the command.",
      "The indoor unit beeps, yet the mode, set temperature, fan, or timer does not change as expected.",
      "The remote works only very close to the indoor unit or from one narrow angle.",
    ],
    causes: [
      "Both batteries may be exhausted, mismatched, reversed, loose against the contacts, or affected by leakage or corrosion.",
      "Weak batteries can still power the liquid crystal display while failing to send a reliable infrared command.",
      "A lock, child lock, timer, incompatible mode, or model specific reset state can prevent the expected response.",
      "Distance, angle, direct sunlight, strong light, a dirty receiver window, or another obstruction can interrupt the signal path.",
      "The handset transmitter, indoor receiver, controller pairing, or indoor unit power and control system may have a fault.",
    ],
    diagnosticBranches: [
      {
        title: "The remote display is completely blank",
        observation:
          "No digits, icons, or backlight appear when several buttons are pressed, even though the display normally shows information while idle.",
        action:
          "Remove both batteries, check the marked polarity and contacts, then install one fresh matched pair. Do not mix an old battery with a new one or mix battery types.",
      },
      {
        title: "The remote display works but the unit does not respond",
        observation:
          "The screen changes when a button is pressed, but the indoor unit gives no beep, lamp change, louver movement, or operating response.",
        action:
          "Replace both batteries anyway, then check reset requirements, locks, timers, line of sight, distance, the transmitter, the receiver window, and manual operation in that order.",
      },
    ],
    figures: [
      {
        title: "Remote, receiver, and unit power path",
        description:
          "A command must be created by the handset, travel through a clear infrared path, reach a compatible receiver, and be accepted by an indoor unit that has power and is not blocking the requested operation.",
        nodes: [
          { label: "Remote", detail: "Fresh batteries and a valid command" },
          { label: "Infrared path", detail: "Clear sight, useful range, and suitable angle" },
          { label: "Indoor receiver", detail: "Clean window and compatible controller signal" },
          { label: "Indoor unit", detail: "Power available and operation permitted" },
        ],
      },
    ],
    decisionTable: {
      caption: "Mini split remote response decision table",
      columns: ["What you observe", "Most useful interpretation", "Next safe action"],
      rows: [
        [
          "The remote screen is blank",
          "Start on the battery and handset side",
          "Fit a fresh matched pair with correct polarity and inspect the contacts without dismantling the remote",
        ],
        [
          "The screen works but the unit gives no beep",
          "The display has power, but transmission or reception is not established",
          "Use fresh batteries, complete the model reset if required, then test nearby with clear line of sight",
        ],
        [
          "Manual operation works but the remote does not",
          "The indoor unit has power, so the handset, signal path, compatibility, or receiver needs attention",
          "Confirm the exact remote part number or arrange receiver diagnosis",
        ],
        [
          "Neither remote nor manual operation works",
          "The problem is probably broader than the handset",
          "Check only normal user power controls, record any lights or code, and arrange service if supply appears normal",
        ],
        [
          "The unit beeps but does not apply the requested setting",
          "The signal arrived, but the mode, setpoint, lock, timer, or operating state may limit the command",
          "Cancel locks and timers and compare the requested mode with the exact operating manual",
        ],
        [
          "The remote works only very close or intermittently",
          "Weak batteries, angle, bright light, a dirty receiver window, or a deteriorating transmitter may reduce range",
          "Fit fresh batteries, clean only exposed surfaces with a soft dry cloth, and test away from strong light",
        ],
      ],
    },
    comparisonTable: {
      caption: "What each response does and does not prove",
      columns: ["Observation", "What it proves", "What it does not prove"],
      rows: [
        [
          "The remote screen is visible",
          "The batteries can power the display circuit",
          "It does not prove that the infrared transmitter sends a complete usable command",
        ],
        [
          "The indoor unit beeps",
          "The receiver detected a command",
          "It does not prove that the requested mode is allowed or that heating and cooling can start immediately",
        ],
        [
          "Manual operation starts the unit",
          "The indoor unit has at least basic power and local control response",
          "It does not by itself separate a failed remote from a failed or obstructed receiver",
        ],
      ],
    },
    sections: [
      {
        title: "Replace both batteries correctly",
        paragraphs: [
          "Use the battery chemistry and size printed in the controller manual. Replace both batteries at the same time with a fresh matched pair. Follow the polarity marks inside the compartment and make sure each battery is firmly against both contacts.",
          "If a battery has leaked, stop using it. Light surface contamination may prevent contact, while heavy corrosion, a loose terminal, heat damage, or liquid inside the handset is a reason to replace the correct controller rather than dismantle it casually.",
        ],
      },
      {
        title: "Reset the remote only when the manual requires it",
        paragraphs: [
          "Some Mitsubishi and Trane handheld controllers require the recessed RESET button after fresh batteries are installed. Other controllers restore operation differently. Pressing an unrelated service or test button can change configuration, so use only the reset procedure printed for the exact remote model.",
        ],
      },
      {
        title: "Check whether the remote is transmitting",
        paragraphs: [
          "A phone camera may show the infrared emitter flashing while a button is pressed, but this check has limits. Some phone cameras filter infrared light, and a visible flash does not prove that the remote sends the correct code. Compare with another known working infrared remote only as a rough check.",
          "If another identical controller is available for the same indoor unit, a successful response from that controller is stronger evidence that the original handset or its batteries are the problem. Do not assume that a remote from another model is compatible merely because it looks similar.",
        ],
      },
      {
        title: "Clear the signal path and receiver",
        paragraphs: [
          "Stand near the indoor unit and aim at its receiver window. Remove objects between the handset and unit. Try a modest change in angle and move away from direct sunlight, intense lamps, or electronic lighting that may reduce useful range. Clean only the exposed transmitter and receiver windows with a soft dry cloth.",
        ],
      },
      {
        title: "Check locks, timers, and the requested mode",
        paragraphs: [
          "A child lock or button lock can make a working controller appear unresponsive. An on timer or off timer can also delay or cancel the result the user expects. Use the exact manual to clear the lock and cancel every active timer before testing one simple command.",
          "If the indoor unit beeps but does not change temperature, confirm that the remote is in the intended Heat, Cool, Dry, Fan, or Auto mode. Multi zone systems may also restrict conflicting heating and cooling requests. A beep confirms reception, not immediate compressor operation.",
        ],
      },
      {
        title: "Use manual operation as a diagnostic fork",
        paragraphs: [
          "Many wall mounted indoor units have a model specific manual or emergency operation button behind or near the user access panel. Use it only if the operating manual identifies its location and procedure. Do not remove screws or open an electrical cover to find it.",
          "If manual operation starts the unit, power is present and the investigation stays on the remote, infrared path, compatibility, or receiver side. If manual operation also fails, the problem is probably broader and belongs with the unit power or control path.",
        ],
      },
      {
        title: "Match a replacement remote to the exact unit",
        paragraphs: [
          "Record the complete indoor unit model and the remote model or part number printed on the handset or inside its battery cover. Order through the manufacturer or an authorized parts channel where possible. A universal mini split remote may support some commands, but compatibility, special modes, timers, vane control, and fault functions are not guaranteed.",
        ],
      },
    ],
    steps: [
      {
        name: "Separate a blank screen from a working screen",
        text: "Press a normal command button and note whether the display is blank, faded, or changing normally before making another adjustment.",
      },
      {
        name: "Install a fresh matched battery pair",
        text: "Replace both batteries with the specified type, follow the polarity marks, and confirm firm contact without mixing old and new batteries.",
      },
      {
        name: "Complete the documented controller reset",
        text: "Use the recessed reset only when the exact controller manual requires it after battery replacement, then restore the intended clock or mode settings.",
      },
      {
        name: "Send one simple nearby command",
        text: "Stand near the indoor unit, aim at the receiver with clear line of sight, and press On or Off once while watching for a beep or lamp change.",
      },
      {
        name: "Remove control state conflicts",
        text: "Cancel active timers and clear the documented button or child lock, then select one definite operating mode and a useful setpoint.",
      },
      {
        name: "Check exposed transmitter and receiver surfaces",
        text: "Use a soft dry cloth on the visible windows and repeat the nearby test away from strong sunlight or intense electronic lighting.",
      },
      {
        name: "Try documented manual operation",
        text: "If the owner manual provides a user accessible manual operation control, use it without removing screws or opening an electrical compartment.",
      },
      {
        name: "Record the result before replacement or service",
        text: "Write down whether the unit beeped, whether manual operation worked, and the complete indoor unit and remote model numbers.",
      },
    ],
    safeChecks: [
      "Confirm normal building power without removing a cover. If the dedicated breaker is visibly tripped, leave the system off and arrange service rather than resetting it repeatedly.",
      "Stop using a remote with leaking batteries, severe corrosion, heat damage, a cracked case, or evidence that liquid entered the handset.",
      "Do not open the indoor electrical compartment, bypass the receiver, short terminals, or use an undocumented service test to force operation.",
    ],
    professionalEscalation: [
      "Arrange service when documented manual operation also fails even though normal supply appears available, or when the indoor unit shows a fault code or abnormal indicator pattern.",
      "If a verified compatible remote transmits but the indoor unit never receives it, the receiver, wiring, or control board needs model specific diagnosis.",
      "A breaker that trips, electrical odor, heat, smoke, water near electrical parts, or damaged wiring requires the unit to remain off.",
    ],
    serviceHandoff:
      "Give the technician the complete indoor and outdoor unit models, the remote model or part number, a photo of the display, whether the unit beeped, whether manual operation worked, and whether the problem followed battery leakage, a power outage, or other electrical work.",
    resetGuidance:
      "Reset the handset only by the exact controller procedure. A reset may be required after battery replacement on some models, but it cannot repair a damaged transmitter, incompatible remote, failed receiver, loss of unit power, or an equipment fault.",
    faqs: [
      {
        question: "Why is the mini split remote screen on but the AC is not responding?",
        answer:
          "The batteries may still have enough power for the display but not reliable transmission. Install a fresh matched pair, complete any documented reset, clear locks and timers, then test nearby with clear line of sight. No indoor beep keeps attention on transmission, compatibility, or the receiver.",
      },
      {
        question: "How do I reset a mini split remote?",
        answer:
          "Use the procedure for the exact remote model. Some Mitsubishi and Trane controllers require a recessed RESET button after new batteries, while other brands use a different sequence. Do not press an undocumented service or test control.",
      },
      {
        question: "Can I run a mini split without the remote?",
        answer:
          "Many indoor units provide limited manual or emergency operation, and some support a wired controller or manufacturer app. Availability and operation vary by model. Use only the user accessible control identified in the exact operating manual.",
      },
      {
        question: "How do I know whether the remote is transmitting?",
        answer:
          "An indoor beep is useful evidence that a command arrived. A phone camera may show an infrared flash, but some cameras filter infrared and a flash does not prove the command is correct. Testing a known compatible remote on the same unit is stronger evidence.",
      },
      {
        question: "Can I use a universal mini split remote?",
        answer:
          "Only if the universal remote explicitly supports the exact indoor unit and required functions. Basic power or temperature control may work while timers, vane positions, special modes, and diagnostics do not. An OEM part number match is the safer replacement path.",
      },
      {
        question: "Why does the unit beep but not change temperature?",
        answer:
          "A beep confirms that the receiver detected a command, not that the requested operation can start immediately. Check the selected mode, setpoint, timer, lock, multi zone mode conflict, warm up, defrost, and restart delay in the exact operating manual.",
      },
    ],
    sourceIds: [
      "fujitsu-troubleshooting",
      "fujitsu-rls2-operation",
      "trane-mitsubishi-remote",
      "lg-console-owner",
      "daikin-mxs-engineering",
    ],
    keywords: [
      "mini split remote not working",
      "mini split remote screen on but not responding",
      "reset mini split remote",
      "mini split remote batteries",
      "mini split infrared receiver",
      "universal mini split remote compatibility",
      "run mini split without remote",
    ],
    lastReviewed: "2026-09-02",
    relatedContent: [
      "/troubleshooting/",
      "/mini-split-not-turning-on/",
      "/mini-split-not-cooling/",
      "/mini-split-not-heating/",
      "/brands/fujitsu/",
      "/brands/daikin/",
    ],
  }),
  guide({ title: "Mini-split not turning on: power, timer, delay, or fault", slug: "mini-split-not-turning-on", path: "/mini-split-not-turning-on/", description: "Distinguish a normal restart delay from timer, remote, breaker, power-outage, communication, and internal fault conditions without opening equipment.", articleType: "troubleshooting", equipmentType: "ductless-mini-split", problemType: "not-turning-on", directAnswer: "A mini-split may appear dead because of a power interruption, breaker or fuse condition, timer, remote issue, normal compressor restart protection, or an equipment fault.", symptoms: ["The indoor unit shows no response, or the fan responds while the outdoor section does not start immediately."], causes: ["A power outage, open breaker, active timer, or remote battery problem can prevent a normal command.", "Many systems intentionally delay compressor restart for several minutes after power or an off-on command."], safeChecks: ["Confirm other devices have power, check the normal breaker position once, cancel the timer, and try fresh remote batteries.", "Wait at least the model manual's restart-protection interval before judging the outdoor unit."], professionalEscalation: ["Leave the system off if a breaker trips again, a fuse is blown, wiring is damaged, or there is heat, odor, or smoke.", "Persistent no-response after basic checks requires qualified electrical and control diagnosis."], sourceIds: ["fujitsu-troubleshooting", "fujitsu-rls2-operation"], relatedContent: ["/troubleshooting/", "/mini-split-remote-not-working/", "/mini-split-outdoor-unit-not-running/"] }),
  guide({ title: "Mini-split frozen coil: airflow, thawing, and service limits", slug: "mini-split-frozen-coil", path: "/mini-split-frozen-coil/", description: "What indoor coil ice can indicate, how to shut down and restore safe airflow, and why recurring ice needs refrigerant, sensor, or control diagnosis.", articleType: "troubleshooting", equipmentType: "ductless-mini-split", problemType: "frozen-indoor-coil", directAnswer: "Ice on a mini-split indoor coil means heat transfer is not staying in the normal range; restricted airflow is a common check, while low refrigerant, sensors, fan, or controls need professional diagnosis.", symptoms: ["Ice appears behind the filter, airflow weakens, cooling falls, or water leaks as the coil thaws."], causes: ["A loaded filter, blocked intake, blocked outlet, or dirty heat exchanger can restrict airflow.", "Refrigerant loss, fan faults, thermistor faults, or control problems can also drive abnormal coil temperature."], safeChecks: ["Turn cooling off and let the coil thaw naturally; protect the wall and floor from meltwater.", "Clean the user-removable filter and clear intake and outlet obstructions before one monitored restart."], professionalEscalation: ["Recurring ice, visible oil, damaged insulation, fan problems, or fault codes require service.", "Never chip ice, bend fins, add refrigerant, or open the sealed system."], sourceIds: ["daikin-a5-service", "gree-water-leak", "trane-mini-split-refrigerant"], relatedContent: ["/troubleshooting/", "/mini-split-not-cooling/", "/mini-split-leaking-water/"] }),
  guide({ title: "Heat-pump outdoor unit iced over: defrost or a real fault?", slug: "heat-pump-outdoor-unit-iced-over", path: "/heat-pump-outdoor-unit-iced-over/", description: "Recognize normal frost and automatic defrost, safely restore outdoor airflow, and know when solid ice or repeated no-heat requires professional service.", articleType: "troubleshooting", equipmentType: "heat-pump", problemType: "outdoor-unit-iced-over", directAnswer: "Light frost in heating can be normal and should clear during automatic defrost; a coil encased in persistent ice, blocked by frozen drainage, or paired with no heat indicates a problem.", symptoms: ["The outdoor coil frosts, the outdoor fan pauses, steam appears, or indoor heating temporarily stops."], causes: ["Normal defrost periodically melts outdoor frost and can produce water or steam.", "Blocked airflow, snow or drainage buildup, fan or sensor faults, or refrigeration problems can prevent normal clearing."], safeChecks: ["Keep the outdoor unit's required clearance free of loose snow, leaves, and movable objects without touching the coil.", "Observe whether the unit enters defrost and clears light frost within its normal operating cycle."], professionalEscalation: ["Call for service when solid ice persists, the fan is obstructed, heat does not return, or a fault code appears.", "Do not chip ice, pour boiling water, or bypass defrost controls."], sourceIds: ["fujitsu-troubleshooting", "fujitsu-aduh-operation", "trane-mini-split-not-heating"], relatedContent: ["/troubleshooting/", "/mini-split-not-heating/", "/mini-split-outdoor-unit-not-running/"] }),
  guide({ title: "Mini-split outdoor unit not running: delay, demand, or fault", slug: "mini-split-outdoor-unit-not-running", path: "/mini-split-outdoor-unit-not-running/", description: "Check demand, mode, restart delay, defrost, and visible blockage before escalating an outdoor unit that appears inactive or cannot start.", articleType: "troubleshooting", equipmentType: "ductless-mini-split", problemType: "outdoor-unit-not-running", directAnswer: "An outdoor mini-split unit can pause normally when demand is met, during restart protection, or during parts of defrost, but a persistent stop with unmet demand can indicate power, communication, fan, inverter, or compressor faults.", symptoms: ["The indoor unit responds while the outdoor fan and compressor appear inactive."], causes: ["The thermostat may be satisfied, the system may be in Fan mode, or restart protection may still be active.", "Power, communication, outdoor fan, inverter, compressor, or safety protection faults may prevent operation."], safeChecks: ["Choose Heat or Cool, create a clear temperature demand, and wait through the manual's restart delay.", "Look for a display code and remove only loose external airflow obstructions with the unit off."], professionalEscalation: ["A tripping breaker, fault code, stopped fan under demand, or repeated protection needs qualified diagnosis.", "Do not remove panels, spin the fan by hand, or test capacitors and inverter electronics."], sourceIds: ["fujitsu-troubleshooting", "trane-mini-split-compressor", "trane-mini-split-modulation"], relatedContent: ["/troubleshooting/", "/mini-split-not-turning-on/", "/mini-split-not-cooling/"] }),
  guide({ title: "Mini-split making noise: normal sounds versus warning signs", slug: "mini-split-making-noise", path: "/mini-split-making-noise/", description: "Identify normal refrigerant, expansion, and defrost sounds while separating rattling, grinding, arcing, or new mechanical noise that needs service.", articleType: "troubleshooting", equipmentType: "ductless-mini-split", problemType: "abnormal-noise", directAnswer: "Brief flowing, soft squeaking from panel expansion, and defrost sizzling can be normal; grinding, repeated impact, electrical buzzing, or a new loud vibration is not explained by those normal operating sounds.", symptoms: ["The indoor or outdoor unit clicks, flows, squeaks, buzzes, rattles, grinds, or changes sound during defrost."], causes: ["Refrigerant flow, thermal expansion, and automatic defrost produce documented normal sounds.", "Loose mounting, debris, fan contact, motor wear, or electrical faults can produce abnormal noise."], safeChecks: ["Note the exact sound, unit, operating mode, and timing, and compare it with the normal sounds in the model manual.", "With the system off, clear only loose objects outside the equipment and confirm furniture is not vibrating against the wall unit."], professionalEscalation: ["Stop operation for grinding, burning odor, smoke, arcing, severe vibration, or a fan striking something.", "Internal fan, motor, mounting, refrigerant, and electrical inspections require service."], sourceIds: ["fujitsu-troubleshooting", "fujitsu-rls2-operation"], relatedContent: ["/troubleshooting/", "/mini-split-outdoor-unit-not-running/", "/mini-split-smells-musty/"] }),
  guide({ title: "Mini-split smells musty: filter care and deeper cleaning", slug: "mini-split-smells-musty", path: "/mini-split-smells-musty/", description: "Separate absorbed room odors and dirty filters from persistent moisture or internal contamination that needs model-safe professional cleaning.", articleType: "troubleshooting", equipmentType: "ductless-mini-split", problemType: "musty-odor", directAnswer: "A mini-split can re-emit odors absorbed from the room, while dust and moisture on internal surfaces can sustain a musty smell; routine filter care may help, but deep cleaning is a different task.", symptoms: ["A damp, stale, smoky, or room-like odor appears when the indoor fan starts."], causes: ["The indoor unit can absorb odors from furnishings, cooking, smoke, and other room sources.", "A dirty filter or moisture and soil deeper in the coil, drain pan, or blower can require cleaning."], safeChecks: ["Clean the user-removable filter exactly as the model manual directs and remove obvious room odor sources.", "Check for water leakage and allow washable filters to dry fully before reinstalling."], professionalEscalation: ["Persistent mustiness, visible internal growth, drain problems, or odors paired with illness concerns warrant professional cleaning and moisture diagnosis.", "A burning or electrical odor is different: turn the unit off and arrange urgent service."], sourceIds: ["fujitsu-troubleshooting", "fujitsu-filter-manual"], relatedContent: ["/troubleshooting/", "/mini-split-filter-cleaning/", "/mini-split-leaking-water/"] }),
  guide({ title: "Mini-split short cycling: settings, airflow, and service clues", slug: "mini-split-short-cycling", path: "/mini-split-short-cycling/", description: "Determine whether inverter modulation is being mistaken for short cycling, then check settings, airflow, room load, and conditions that need service.", articleType: "troubleshooting", equipmentType: "ductless-mini-split", problemType: "short-cycling", directAnswer: "Variable-speed mini-splits normally modulate and may pause as demand changes; repeated hard starts and stops without maintaining temperature can point to settings, airflow, sizing, sensor location, or equipment faults.", symptoms: ["The compressor or complete system starts and stops frequently while comfort remains unstable."], causes: ["Small load changes, thermostat satisfaction, or normal inverter modulation can look like cycling.", "Dirty filters, blocked airflow, misplaced sensing, sizing issues, or electrical and refrigeration faults can cause abnormal cycling."], safeChecks: ["Hold one steady mode and setpoint, disable short timers, clean the filter, and clear indoor airflow obstructions.", "Log run and off times, outdoor temperature, room temperature, and any displayed code for the technician."], professionalEscalation: ["Frequent breaker trips, hard starts, ice, fault codes, or cycling that cannot hold temperature requires service.", "Sizing, sensor, control, electrical, and refrigerant diagnosis should use model data and qualified tools."], sourceIds: ["trane-mini-split-modulation", "trane-mini-split-sizing", "fujitsu-troubleshooting"], relatedContent: ["/troubleshooting/", "/mini-split-not-cooling/", "/mini-split-filter-cleaning/"] }),
  guide({ title: "How to clean a mini-split filter without damaging it", slug: "mini-split-filter-cleaning", path: "/mini-split-filter-cleaning/", description: "A model-first filter-cleaning routine covering safe shutdown, gentle dust removal, washing only when allowed, complete drying, and service limits.", articleType: "maintenance", equipmentType: "ductless-mini-split", problemType: "filter-maintenance", directAnswer: "Most ductless indoor filters are homeowner-serviceable, but removal, washing, drying, and reset steps vary; the exact operating manual remains the authority for your model.", symptoms: ["Reduced airflow, lower heating or cooling performance, higher operating noise, or a filter reminder can indicate maintenance is due."], causes: ["Dust loading increases airflow resistance and can reduce performance or contribute to coil-temperature problems."], safeChecks: ["Turn the unit off, open only the user-access panel, and photograph the filter orientation before removal.", "Vacuum gently or wash only if the manual identifies the filter as washable; use mild detergent when specified and dry completely out of direct heat.", "Reinstall the dry filter securely and reset a filter reminder only by the model's documented procedure."], professionalEscalation: ["Stop if access requires screws, electrical covers, coil contact, or disassembly beyond the owner manual.", "A dirty blower wheel, coil, drain pan, or damaged filter needs model-appropriate parts or professional cleaning."], sourceIds: ["fujitsu-filter-manual", "fujitsu-aduh-operation", "trane-mini-split-filters", "trane-ductless-maintenance"], relatedContent: ["/equipment/", "/mini-split-not-cooling/", "/mini-split-smells-musty/"] }),
] satisfies TechnicalArticle[];
