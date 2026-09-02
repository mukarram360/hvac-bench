import { getScoringProfile } from "@/content/benchmark/profiles";
import type {
  BenchmarkDimension,
  ExperienceSource,
  OwnerReport,
  ScorecardSubject,
} from "@/content/benchmark/schema";

/**
 * The HVAC Bench Score engine.
 *
 * Everything a page can display about a family comes out of this function, and
 * every number in it is computed from stored owner evidence. There is no field
 * anywhere that lets an editor type a score, which is deliberate: the way
 * rating systems lose their meaning is by acquiring an override for the cases
 * where the evidence is inconvenient.
 *
 * The engine is pure. Same evidence in, same score out, in any order.
 */

export const EVIDENCE_THRESHOLDS = {
  /** Distinct owner observations needed before any overall score publishes. */
  minReportsOverall: 12,
  /** Independent sources needed overall, so one forum thread cannot carry it. */
  minSourcesOverall: 3,
  /** Observations speaking to one dimension before that dimension publishes. */
  minReportsPerDimension: 5,
  /** Independent sources per dimension, for the same reason as above. */
  minSourcesPerDimension: 2,
  /** Share of the class weighting that must be covered by scored dimensions. */
  minWeightCoverage: 0.5,
} as const;

export const INSUFFICIENT_EVIDENCE_STATEMENT = "Not enough verified owner data yet";

export type DimensionResult = {
  dimension: BenchmarkDimension;
  /** Null where the evidence for this dimension did not clear the threshold. */
  score: number | null;
  weight: number;
  sampleSize: number;
  sourceCount: number;
  /** Why a dimension is unscored, for the internal audit view. */
  note?: string;
};

export type EvidenceContribution = {
  reportId: string;
  sourceId: string;
  modelFamily: string;
  dimensions: BenchmarkDimension[];
};

export type BenchmarkResult = {
  subjectId: string;
  brand: string;
  modelFamily: string;
  equipmentClass: string;
  published: boolean;
  /** The overall figure, or null when the family cannot be scored yet. */
  overall: number | null;
  statement: string;
  confidence: "low" | "moderate" | "high";
  sampleSize: number;
  sourceCount: number;
  duplicatesRemoved: number;
  contaminationRemoved: number;
  dimensions: DimensionResult[];
  evidenceUsed: EvidenceContribution[];
  reasons: string[];
};

/**
 * Normalises text for duplicate detection. Retailer reviews are syndicated
 * across sites with different spacing, casing, and punctuation, so a plain
 * equality check misses most of the duplication that actually occurs.
 */
function fingerprint(excerpt: string) {
  return excerpt
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function round(value: number) {
  return Math.round(value * 10) / 10;
}

export function scoreSubject({
  subject,
  reports,
  sources,
}: {
  subject: ScorecardSubject;
  reports: OwnerReport[];
  sources: ExperienceSource[];
}): BenchmarkResult {
  const profile = getScoringProfile(subject.equipmentClass);
  const knownSources = new Set(sources.map((source) => source.id));
  const reasons: string[] = [];

  // 1. Contamination. An observation is evidence about the family it names and
  //    nothing else. A different family, or a different brand, is discarded
  //    rather than diluted in, and the count is reported so the removal is
  //    visible in the internal audit rather than silent.
  const onFamily: OwnerReport[] = [];
  let contaminationRemoved = 0;
  for (const report of reports) {
    const sameBrand = report.brand === subject.brand;
    const sameFamily = report.modelFamily === subject.modelFamily;
    if (sameBrand && sameFamily && knownSources.has(report.sourceId)) {
      onFamily.push(report);
    } else {
      contaminationRemoved += 1;
    }
  }

  // 2. Duplicates. Sorting by id first keeps the survivor deterministic
  //    regardless of the order the evidence file happens to be in.
  const seen = new Map<string, OwnerReport>();
  let duplicatesRemoved = 0;
  for (const report of [...onFamily].sort((a, b) => a.id.localeCompare(b.id))) {
    const key = fingerprint(report.excerpt);
    if (seen.has(key)) {
      duplicatesRemoved += 1;
      continue;
    }
    seen.set(key, report);
  }
  const usable = [...seen.values()];

  const sampleSize = usable.length;
  const sourceCount = new Set(usable.map((report) => report.sourceId)).size;

  // 3. Dimensions. A dimension is only offered if the class supports it, and
  //    only scored if enough independent owners actually spoke to it.
  const dimensions: DimensionResult[] = [];
  for (const [dimension, weight] of Object.entries(profile.weights) as [
    BenchmarkDimension,
    number,
  ][]) {
    const speaking = usable.filter((report) => report.ratings[dimension] !== undefined);
    const dimensionSources = new Set(speaking.map((report) => report.sourceId)).size;
    const enough =
      speaking.length >= EVIDENCE_THRESHOLDS.minReportsPerDimension &&
      dimensionSources >= EVIDENCE_THRESHOLDS.minSourcesPerDimension;

    dimensions.push({
      dimension,
      weight,
      sampleSize: speaking.length,
      sourceCount: dimensionSources,
      score: enough
        ? round(
            speaking.reduce((sum, report) => sum + (report.ratings[dimension] ?? 0), 0) /
              speaking.length,
          )
        : null,
      note: enough
        ? undefined
        : speaking.length === 0
          ? "No owner observation in the record speaks to this."
          : `Held back: ${speaking.length} observations from ${dimensionSources} sources, below the threshold.`,
    });
  }

  const scored = dimensions.filter((entry) => entry.score !== null);
  const totalWeight = Object.values(profile.weights).reduce((sum, weight) => sum + weight, 0);
  const coveredWeight = scored.reduce((sum, entry) => sum + entry.weight, 0);
  const coverage = totalWeight === 0 ? 0 : coveredWeight / totalWeight;

  // 4. Publication gates. Every one of these has to pass. A near miss is still
  //    a miss, and the page says so rather than showing a hedged number.
  if (sampleSize < EVIDENCE_THRESHOLDS.minReportsOverall) {
    reasons.push(
      `${sampleSize} distinct owner observations on file, ${EVIDENCE_THRESHOLDS.minReportsOverall} needed.`,
    );
  }
  if (sourceCount < EVIDENCE_THRESHOLDS.minSourcesOverall) {
    reasons.push(
      `Evidence comes from ${sourceCount} independent sources, ${EVIDENCE_THRESHOLDS.minSourcesOverall} needed.`,
    );
  }
  if (scored.length === 0) {
    reasons.push("No individual dimension has enough evidence to score.");
  } else if (coverage < EVIDENCE_THRESHOLDS.minWeightCoverage) {
    reasons.push(
      `Scored dimensions cover ${Math.round(coverage * 100)}% of what matters for this equipment class, ${Math.round(
        EVIDENCE_THRESHOLDS.minWeightCoverage * 100,
      )}% needed.`,
    );
  }

  const published = reasons.length === 0;
  const overall = published
    ? round(
        scored.reduce((sum, entry) => sum + entry.score! * entry.weight, 0) / coveredWeight,
      )
    : null;

  // Confidence describes how much evidence stands behind a published score. It
  // is not a second opinion on the number; a high confidence poor score is a
  // well evidenced poor score.
  const confidence: BenchmarkResult["confidence"] =
    !published || sampleSize < 20 || sourceCount < 4
      ? "low"
      : sampleSize >= 40 && sourceCount >= 5
        ? "high"
        : "moderate";

  return {
    subjectId: subject.id,
    brand: subject.brand,
    modelFamily: subject.modelFamily,
    equipmentClass: subject.equipmentClass,
    published,
    overall,
    statement: published
      ? `${overall} out of 10 from ${sampleSize} owner observations`
      : INSUFFICIENT_EVIDENCE_STATEMENT,
    confidence,
    sampleSize,
    sourceCount,
    duplicatesRemoved,
    contaminationRemoved,
    dimensions,
    evidenceUsed: usable.map((report) => ({
      reportId: report.id,
      sourceId: report.sourceId,
      modelFamily: report.modelFamily,
      dimensions: Object.keys(report.ratings) as BenchmarkDimension[],
    })),
    reasons,
  };
}
