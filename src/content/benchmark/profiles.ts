import type { ScoringProfile } from "./schema";

/**
 * Weighting profiles by equipment class.
 *
 * Two things are configured here rather than in any page. Which dimensions an
 * equipment class can express at all, and how much each one contributes to the
 * overall figure. Changing a weight changes every scorecard of that class on
 * the next build, and changes nothing about the underlying evidence.
 *
 * Weights within a profile do not need to sum to one. The engine renormalises
 * across whichever dimensions actually cleared their evidence threshold, so a
 * family with no heating evidence is not penalised for it.
 */
export const scoringProfiles: ScoringProfile[] = [
  {
    equipmentClass: "ductless-mini-split",
    label: "Ductless mini-split (heating and cooling)",
    weights: {
      reliability: 0.25,
      "cooling-performance": 0.15,
      "heating-performance": 0.12,
      noise: 0.1,
      "efficiency-value": 0.1,
      "build-quality": 0.1,
      "controls-usability": 0.06,
      "serviceability-parts": 0.07,
      "owner-satisfaction": 0.05,
    },
    notes:
      "Reliability carries the most weight because a ductless failure removes heating or cooling from a single room with no backup, and because owner reports are more consistent about failures than about capacity.",
  },
  {
    equipmentClass: "cooling-only-split",
    label: "Cooling-only split system",
    weights: {
      reliability: 0.28,
      "cooling-performance": 0.2,
      noise: 0.12,
      "efficiency-value": 0.12,
      "build-quality": 0.1,
      "controls-usability": 0.08,
      "serviceability-parts": 0.07,
      "owner-satisfaction": 0.03,
    },
    notes:
      "Heating performance is not offered at all on this class. A cooling-only system cannot be scored on something it does not do, and an absent dimension is clearer than a dimension scored at zero.",
  },
  {
    equipmentClass: "heat-pump",
    label: "Air source heat pump",
    weights: {
      reliability: 0.24,
      "heating-performance": 0.2,
      "cooling-performance": 0.1,
      "efficiency-value": 0.14,
      noise: 0.1,
      "build-quality": 0.08,
      "serviceability-parts": 0.08,
      "controls-usability": 0.06,
    },
    notes:
      "Heating carries more weight than cooling because a heat pump is usually the primary heating system, and cold weather output is where owner experience varies most. Owner satisfaction is omitted because it duplicates the dimensions above rather than adding to them.",
  },
  {
    equipmentClass: "light-commercial",
    label: "Light commercial ducted and cassette",
    weights: {
      reliability: 0.3,
      "serviceability-parts": 0.18,
      "cooling-performance": 0.14,
      "heating-performance": 0.12,
      "efficiency-value": 0.12,
      "controls-usability": 0.08,
      noise: 0.06,
    },
    notes:
      "Serviceability weighs far more heavily here than on residential equipment, because downtime has a commercial cost and parts availability drives it. Build quality and owner satisfaction are dropped: the people reporting are rarely the people who bought it.",
  },
  {
    equipmentClass: "controls",
    label: "Thermostats and controllers",
    weights: {
      "controls-usability": 0.4,
      reliability: 0.3,
      "build-quality": 0.15,
      "owner-satisfaction": 0.15,
    },
    notes:
      "A controller has no airflow, no capacity, and no efficiency of its own, so those dimensions are not offered. Usability leads because that is what a controller is for.",
  },
];

const byClass = new Map(scoringProfiles.map((profile) => [profile.equipmentClass, profile]));

export function getScoringProfile(equipmentClass: string): ScoringProfile {
  const profile = byClass.get(equipmentClass);
  if (!profile) {
    throw new Error(
      `No scoring profile for equipment class "${equipmentClass}". Add one to profiles.ts before scoring it.`,
    );
  }
  return profile;
}

export function listScoringProfiles() {
  return scoringProfiles;
}
