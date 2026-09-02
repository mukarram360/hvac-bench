import { experienceSources, ownerReports } from "@/content/benchmark/experience";
import { listScoringProfiles } from "@/content/benchmark/profiles";
import { scorecardSubjects } from "@/content/benchmark/subjects";
import { scoreSubject, type BenchmarkResult } from "./benchmark";

/**
 * Binds the scoring engine to the stored evidence. Pages call these rather
 * than the engine directly, so no page can supply its own evidence set.
 */

export function getBenchmark(subjectId: string): BenchmarkResult | undefined {
  const subject = scorecardSubjects.find((entry) => entry.id === subjectId);
  if (!subject) return undefined;
  return scoreSubject({ subject, reports: ownerReports, sources: experienceSources });
}

export function getAllBenchmarks(): BenchmarkResult[] {
  return scorecardSubjects.map((subject) =>
    scoreSubject({ subject, reports: ownerReports, sources: experienceSources }),
  );
}

export function getBenchmarksForBrand(brand: string): BenchmarkResult[] {
  return getAllBenchmarks().filter((result) => result.brand === brand);
}

/** Families whose evidence has cleared every gate. May legitimately be empty. */
export function getPublishedBenchmarks(): BenchmarkResult[] {
  return getAllBenchmarks().filter((result) => result.published);
}

export function benchmarkCoverage() {
  const all = getAllBenchmarks();
  return {
    familiesTracked: all.length,
    familiesScored: all.filter((result) => result.published).length,
    ownerObservations: ownerReports.length,
    experienceSources: experienceSources.length,
    profiles: listScoringProfiles().length,
  };
}
