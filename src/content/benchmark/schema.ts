import { z } from "zod";

/**
 * The HVAC Bench Score keeps three things apart on purpose.
 *
 * 1. OEM facts. What a manufacturer document establishes: capacities, ratings,
 *    features, model scope. Held in `src/content/sources.ts`. These can prove
 *    what a machine is designed to do. They can never establish whether owners
 *    found it reliable, because a manufacturer is not a witness to that.
 * 2. Owner experience. Individual observations from identifiable owners or
 *    documented field experience, each stored with where it came from, when,
 *    which model, and what it actually said. This is the only class permitted
 *    to move a user-experience score.
 * 3. The calculated benchmark. A derived number, reproducible from the two
 *    classes above and the published weights, that is never entered by hand.
 *
 * A score exists only where class 2 clears the evidence threshold. Where it
 * does not, the page says so rather than showing a number.
 */

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

/** Dimensions the benchmark can express. Not every one applies to every class. */
export const BENCHMARK_DIMENSIONS = [
  "reliability",
  "cooling-performance",
  "heating-performance",
  "noise",
  "efficiency-value",
  "build-quality",
  "controls-usability",
  "serviceability-parts",
  "owner-satisfaction",
] as const;

export const dimensionSchema = z.enum(BENCHMARK_DIMENSIONS);
export type BenchmarkDimension = z.infer<typeof dimensionSchema>;

/**
 * Where an owner observation came from. The type matters to weighting and to
 * how carefully duplicates have to be checked: retailer reviews are widely
 * syndicated between sites, so the same text appears in several places.
 */
export const experienceSourceSchema = z.object({
  id: slug,
  /** Publication or platform the observation was read on. */
  platform: z.string().min(2),
  sourceType: z.enum([
    "retailer-reviews",
    "owner-forum",
    "trade-forum",
    "independent-review",
    "field-service-record",
  ]),
  url: z.url(),
  /** When the evidence was collected by HVAC Bench, not when it was written. */
  collected: isoDate,
});

/**
 * One owner observation.
 *
 * `modelFamily` is the family this observation is evidence about, and it is
 * checked against the scorecard it is aggregated into. An observation about a
 * different family in the same brand is contamination, not evidence.
 */
export const ownerReportSchema = z.object({
  id: slug,
  sourceId: slug,
  brand: slug,
  modelFamily: z.string().min(2),
  /** The specific model where the observation names one. */
  model: z.string().min(1).optional(),
  /** Date the observation itself was written, where the source states it. */
  observed: isoDate.optional(),
  /** How long the owner reports having lived with the equipment. */
  ownershipMonths: z.number().int().min(0).max(600).optional(),
  /** Verbatim or closely paraphrased text, held for deduplication and audit. */
  excerpt: z.string().min(20),
  /**
   * The dimensions this observation actually speaks to, scored 0 to 10.
   * An observation about noise does not get to vote on reliability.
   */
  ratings: z.partialRecord(dimensionSchema, z.number().min(0).max(10)),
});

export type ExperienceSource = z.infer<typeof experienceSourceSchema>;
export type OwnerReport = z.infer<typeof ownerReportSchema>;

/**
 * A weighting profile for one equipment class. Which dimensions make sense is
 * a property of the class: a cooling-only system has no heating score, and a
 * controls product has no airflow noise worth rating.
 *
 * Weights live here so they can be revised without touching a single page.
 */
export const scoringProfileSchema = z.object({
  equipmentClass: slug,
  label: z.string().min(3),
  /** Dimension weights. Only the keys present are eligible for this class. */
  weights: z.partialRecord(dimensionSchema, z.number().min(0).max(1)),
  notes: z.string().min(20),
});

export type ScoringProfile = z.infer<typeof scoringProfileSchema>;

/** A family HVAC Bench is willing to score, and the class whose weights apply. */
export const scorecardSubjectSchema = z.object({
  id: slug,
  brand: slug,
  modelFamily: z.string().min(2),
  equipmentClass: slug,
  /** What the family covers, so a reader can tell whether it is theirs. */
  scope: z.string().min(40),
  /** Facts established from OEM documentation, never from owner reports. */
  oemFacts: z.array(z.string().min(10)).default([]),
  oemSourceIds: z.array(slug).default([]),
});

export type ScorecardSubject = z.infer<typeof scorecardSubjectSchema>;
