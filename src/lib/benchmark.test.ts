import { describe, expect, it } from "vitest";

import { EVIDENCE_THRESHOLDS, scoreSubject } from "./benchmark";
import type { ExperienceSource, OwnerReport, ScorecardSubject } from "@/content/benchmark/schema";
import { getScoringProfile } from "@/content/benchmark/profiles";

/**
 * These tests exist because the failure modes of a rating system are
 * predictable and expensive: a number invented where no evidence exists, a
 * confident score built on three reviews, the same syndicated review counted
 * five times, and a family score assembled from a different family's owners.
 * Each of those has a test here that fails if the guard is removed.
 */

const subject: ScorecardSubject = {
  id: "test-family",
  brand: "gree",
  modelFamily: "Test Family",
  equipmentClass: "ductless-mini-split",
  scope: "A fixture family used only by the scoring tests in this repository.",
  oemFacts: [],
  oemSourceIds: [],
};

function source(id: string, overrides: Partial<ExperienceSource> = {}): ExperienceSource {
  return {
    id,
    platform: `Platform ${id}`,
    sourceType: "owner-forum",
    url: `https://example.com/${id}`,
    collected: "2026-09-02",
    ...overrides,
  };
}

function report(
  id: string,
  sourceId: string,
  ratings: OwnerReport["ratings"],
  overrides: Partial<OwnerReport> = {},
): OwnerReport {
  return {
    id,
    sourceId,
    brand: "gree",
    modelFamily: "Test Family",
    excerpt: `Owner observation number ${id} about this equipment in service.`,
    ratings,
    ...overrides,
  };
}

/** Enough evidence to clear every gate, so individual tests can break one. */
function sufficientEvidence() {
  const sources = ["s1", "s2", "s3", "s4", "s5"].map((id) => source(id));
  const reports: OwnerReport[] = [];
  for (let i = 0; i < 15; i += 1) {
    reports.push(
      report(`r${i}`, `s${(i % 5) + 1}`, {
        reliability: 7,
        "cooling-performance": 8,
        noise: 6,
        "build-quality": 7,
        "owner-satisfaction": 8,
      }),
    );
  }
  return { sources, reports };
}

describe("evidence gates", () => {
  it("publishes no score at all when there is no owner evidence", () => {
    const result = scoreSubject({ subject, reports: [], sources: [] });

    expect(result.published).toBe(false);
    expect(result.overall).toBeNull();
    expect(result.statement).toBe("Not enough verified owner data yet");
    for (const dimension of result.dimensions) {
      expect(dimension.score).toBeNull();
    }
  });

  it("refuses to publish below the minimum sample size", () => {
    const sources = [source("s1"), source("s2"), source("s3"), source("s4")];
    const reports = [0, 1, 2, 3].map((i) =>
      report(`r${i}`, `s${i + 1}`, { reliability: 9, "owner-satisfaction": 9 }),
    );

    const result = scoreSubject({ subject, reports, sources });

    expect(reports.length).toBeLessThan(EVIDENCE_THRESHOLDS.minReportsOverall);
    expect(result.published).toBe(false);
    expect(result.overall).toBeNull();
  });

  it("refuses to publish when every report came from one place", () => {
    const sources = [source("s1")];
    const reports = Array.from({ length: 20 }, (_, i) =>
      report(`r${i}`, "s1", { reliability: 9, "owner-satisfaction": 9, noise: 8 }),
    );

    const result = scoreSubject({ subject, reports, sources });

    expect(result.published).toBe(false);
    expect(result.reasons.join(" ")).toMatch(/independent sources/i);
  });

  it("publishes once the thresholds are genuinely met", () => {
    const { sources, reports } = sufficientEvidence();

    const result = scoreSubject({ subject, reports, sources });

    expect(result.published).toBe(true);
    expect(result.overall).toBeGreaterThan(0);
    expect(result.sampleSize).toBe(15);
    expect(result.confidence).toMatch(/^(low|moderate|high)$/);
  });
});

describe("duplicate evidence", () => {
  it("counts a syndicated review once however many sites carry it", () => {
    const sources = ["s1", "s2", "s3", "s4", "s5"].map((id) =>
      source(id, { sourceType: "retailer-reviews" }),
    );
    const shared = "Installed this myself in a weekend and it has cooled the room well since.";
    const reports = [0, 1, 2, 3, 4].map((i) =>
      report(`dup${i}`, `s${i + 1}`, { reliability: 9 }, { excerpt: shared }),
    );

    const result = scoreSubject({ subject, reports, sources });

    expect(result.sampleSize).toBe(1);
    expect(result.duplicatesRemoved).toBe(4);
    expect(result.published).toBe(false);
  });

  it("treats the same text with different spacing and case as one report", () => {
    const sources = [source("s1"), source("s2")];
    const reports = [
      report("a", "s1", { noise: 5 }, { excerpt: "Quiet indoors, louder outside than expected." }),
      report("b", "s2", { noise: 5 }, { excerpt: "quiet indoors,  LOUDER outside than expected. " }),
    ];

    const result = scoreSubject({ subject, reports, sources });

    expect(result.sampleSize).toBe(1);
  });

  it("keeps genuinely different observations from the same platform", () => {
    const sources = [source("s1")];
    const reports = [
      report("a", "s1", { noise: 5 }, { excerpt: "The outdoor unit hums at night in low speed." }),
      report("b", "s1", { noise: 7 }, { excerpt: "Indoor head is quieter than the old window unit." }),
    ];

    const result = scoreSubject({ subject, reports, sources });

    expect(result.sampleSize).toBe(2);
    expect(result.duplicatesRemoved).toBe(0);
  });
});

describe("model family contamination", () => {
  it("discards observations about a different family", () => {
    const { sources, reports } = sufficientEvidence();
    const foreign = report(
      "foreign",
      "s1",
      { reliability: 1 },
      { modelFamily: "A Completely Different Family", excerpt: "This other family failed in a year." },
    );

    const result = scoreSubject({ subject, reports: [...reports, foreign], sources });

    expect(result.sampleSize).toBe(15);
    expect(result.contaminationRemoved).toBe(1);
  });

  it("discards observations about another brand entirely", () => {
    const { sources, reports } = sufficientEvidence();
    const foreign = report(
      "other-brand",
      "s2",
      { reliability: 1 },
      { brand: "daikin", excerpt: "Different manufacturer, different equipment, same room." },
    );

    const result = scoreSubject({ subject, reports: [...reports, foreign], sources });

    expect(result.contaminationRemoved).toBe(1);
    expect(result.sampleSize).toBe(15);
  });

  it("never lets a brand-wide score stand in for a family score", () => {
    const { sources, reports } = sufficientEvidence();
    const result = scoreSubject({ subject, reports, sources });

    expect(result.subjectId).toBe(subject.id);
    expect(result.modelFamily).toBe(subject.modelFamily);
    for (const contribution of result.evidenceUsed) {
      expect(contribution.modelFamily).toBe(subject.modelFamily);
    }
  });
});

describe("dimension selection", () => {
  it("offers only the dimensions the equipment class supports", () => {
    const profile = getScoringProfile("ductless-mini-split");
    const { sources, reports } = sufficientEvidence();

    const result = scoreSubject({ subject, reports, sources });
    const offered = result.dimensions.map((dimension) => dimension.dimension).sort();

    expect(offered).toEqual(Object.keys(profile.weights).sort());
  });

  it("leaves a supported dimension unscored when nobody spoke to it", () => {
    const { sources, reports } = sufficientEvidence();

    const result = scoreSubject({ subject, reports, sources });
    const heating = result.dimensions.find((d) => d.dimension === "heating-performance");

    expect(heating).toBeDefined();
    expect(heating!.score).toBeNull();
    expect(heating!.sampleSize).toBe(0);
  });

  it("does not offer heating on a cooling-only class", () => {
    const coolingOnly = getScoringProfile("cooling-only-split");
    expect(Object.keys(coolingOnly.weights)).not.toContain("heating-performance");
  });
});

describe("the score is explainable and reproducible", () => {
  it("produces the same result for the same inputs", () => {
    const { sources, reports } = sufficientEvidence();

    const first = scoreSubject({ subject, reports, sources });
    const second = scoreSubject({ subject, reports: [...reports].reverse(), sources });

    expect(second.overall).toBe(first.overall);
    expect(second.dimensions).toEqual(first.dimensions);
  });

  it("shows the arithmetic behind every published dimension", () => {
    const { sources, reports } = sufficientEvidence();

    const result = scoreSubject({ subject, reports, sources });
    const reliability = result.dimensions.find((d) => d.dimension === "reliability")!;

    expect(reliability.score).toBe(7);
    expect(reliability.sampleSize).toBe(15);
    expect(reliability.sourceCount).toBe(5);
    expect(reliability.weight).toBeGreaterThan(0);
  });

  it("reports confidence that rises with evidence", () => {
    const small = sufficientEvidence();
    const large = sufficientEvidence();
    for (let i = 0; i < 40; i += 1) {
      large.reports.push(
        report(`extra${i}`, `s${(i % 5) + 1}`, { reliability: 7 }, {
          excerpt: `A further distinct owner observation, number ${i}, about this family.`,
        }),
      );
    }

    const smallResult = scoreSubject({ subject, ...small });
    const largeResult = scoreSubject({ subject, ...large });
    const rank = { low: 0, moderate: 1, high: 2 };

    expect(rank[largeResult.confidence]).toBeGreaterThanOrEqual(rank[smallResult.confidence]);
  });
});

describe("scores cannot be entered by hand", () => {
  it("derives the overall score from the published dimensions only", () => {
    const { sources, reports } = sufficientEvidence();
    const result = scoreSubject({ subject, reports, sources });

    const published = result.dimensions.filter((d) => d.score !== null);
    const totalWeight = published.reduce((sum, d) => sum + d.weight, 0);
    const expected =
      published.reduce((sum, d) => sum + d.score! * d.weight, 0) / totalWeight;

    expect(result.overall).toBe(Math.round(expected * 10) / 10);
  });

  it("has no field that lets a page supply its own number", () => {
    const { sources, reports } = sufficientEvidence();
    const result = scoreSubject({ subject, reports, sources });

    // The result type is the only way a score reaches a page, and every value
    // on it is computed here. A page cannot pass a score in.
    expect(Object.keys(result)).not.toContain("override");
    expect(Object.keys(subject)).not.toContain("score");
  });
});
