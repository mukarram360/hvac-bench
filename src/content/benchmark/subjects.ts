import type { ScorecardSubject } from "./schema";

/**
 * Families HVAC Bench is prepared to score.
 *
 * A subject exists where the model scope is established by manufacturer
 * documentation already held in the evidence record. That gives the reader a
 * scope card they can check their own equipment against, and it gives the
 * scoring engine a family boundary precise enough to reject observations about
 * neighbouring products.
 *
 * `oemFacts` are restricted to what the cited documents actually establish:
 * which models a definition covers, and how the equipment presents itself to
 * an owner. Performance claims, efficiency figures, and reliability statements
 * are not entered here. The first two belong to a specification record that
 * cites its own measurements; the third cannot come from a manufacturer at all.
 */
export const scorecardSubjects: ScorecardSubject[] = [
  {
    id: "gree-multi21-plus",
    brand: "gree",
    modelFamily: "Multi21+",
    equipmentClass: "ductless-mini-split",
    scope:
      "Gree Multi21+ multi-zone systems at the 30K, 36K, and 42K capacities documented in the service manual held in the evidence record.",
    oemFacts: [
      "The service manual in the evidence record covers the 30K, 36K, and 42K capacities of this family.",
      "Communication between the indoor and outdoor units is reported to the owner as an E6 display code.",
    ],
    oemSourceIds: ["gree-multi21-service", "gree-e6-guide"],
  },
  {
    id: "daikin-skyair-rzr-rzq",
    brand: "daikin",
    modelFamily: "SkyAir RZR-P and RZQ-P(9)",
    equipmentClass: "light-commercial",
    scope:
      "Daikin SkyAir RZR-P and RZQ-P(9) outdoor units with the indoor units listed alongside them in service manual SiUS281117.",
    oemFacts: [
      "One outdoor unit serves several indoor units, and the service manual treats the installation as a transmission network.",
      "Loss of expected communication for the documented interval is reported at the controller as U4.",
    ],
    oemSourceIds: ["daikin-u4-service"],
  },
  {
    id: "daikin-15-19-series",
    brand: "daikin",
    modelFamily: "15 and 19 Series",
    equipmentClass: "ductless-mini-split",
    scope:
      "Daikin 15 Series and 19 Series equipment as documented in service manual SiUS041501E.",
    oemFacts: [
      "Indoor coil temperature protection operates in both directions on this family: freeze-up protection in cooling and peak-cut control in heating.",
      "Both protections are reported to the owner using the same A5 code, distinguished by the operating mode.",
    ],
    oemSourceIds: ["daikin-a5-service"],
  },
  {
    id: "lg-single-zone",
    brand: "lg",
    modelFamily: "Single-zone systems in MFL41161610",
    equipmentClass: "ductless-mini-split",
    scope:
      "LG single-zone ductless systems covered by General Service Manual MFL41161610.",
    oemFacts: [
      "Communication conditions are grouped in the service table, with CH05 alongside the related CH53 and CH93 entries.",
      "Service procedures carry wait-time and stored-energy warnings before electrical access is permitted.",
    ],
    oemSourceIds: ["lg-general-service"],
  },
  {
    id: "midea-aurora-xtreme",
    brand: "midea",
    modelFamily: "Aurora Xtreme Inverter",
    equipmentClass: "cooling-only-split",
    scope:
      "The Midea Aurora Xtreme Inverter at 36,000 BTU, cooling only, 220 V, as documented in the service manual held in the evidence record.",
    oemFacts: [
      "The documented model is cooling only, which is why no heating dimension is offered for this family.",
      "The service flow for a missing outdoor feedback condition opens with a restart after two minutes without power.",
    ],
    oemSourceIds: ["midea-aurora-service"],
  },
  {
    id: "mrcool-diy-ductless",
    brand: "mrcool",
    modelFamily: "DIY ductless generations in official support",
    equipmentClass: "ductless-mini-split",
    scope:
      "MRCOOL ductless mini-split generations identified in the official code table and troubleshooting guides held in the evidence record.",
    oemFacts: [
      "Fault display conventions change between product generations, so one condition reaches owners as either EL01 or E1.",
      "Voltage protection and inverter module protection are separate codes: P1 or PC-01 for supply voltage, P0 or PC00 for the module and compressor.",
    ],
    oemSourceIds: ["mrcool-code-table", "mrcool-e1-guide", "mrcool-p1-guide", "mrcool-p0-guide"],
  },
  {
    id: "pioneer-current-families",
    brand: "pioneer",
    modelFamily: "Diamante, Quantum Fresh, Hyperformance, and Ultra",
    equipmentClass: "ductless-mini-split",
    scope:
      "The current Pioneer families listed in official support, including the WYT, CYT, RYT, and UYT designations.",
    oemFacts: [
      "On these current families, E1 is assigned to a room temperature sensor failure.",
      "The discontinued Quantum families assign E1 to a communication failure instead, so the code cannot be read without the model.",
    ],
    oemSourceIds: ["pioneer-current-e1-e2", "pioneer-quantum-e1"],
  },
  {
    id: "senville-leto",
    brand: "senville",
    modelFamily: "LETO Series",
    equipmentClass: "ductless-mini-split",
    scope:
      "Senville LETO Series systems as listed in the official error code reference held in the evidence record.",
    oemFacts: [
      "The protection table includes condenser high-temperature protection, reported to the owner as PC 0A.",
      "A documented restart for this family specifies a complete power removal of two minutes.",
    ],
    oemSourceIds: ["senville-leto-codes", "senville-eh02"],
  },
];

export function getScorecardSubject(id: string) {
  return scorecardSubjects.find((subject) => subject.id === id);
}

export function getScorecardSubjectsForBrand(brand: string) {
  return scorecardSubjects.filter((subject) => subject.brand === brand);
}
