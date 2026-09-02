import { describe, expect, it } from "vitest";

import { INSUFFICIENT_EVIDENCE_STATEMENT } from "@/lib/benchmark";
import { getAllBenchmarks, getPublishedBenchmarks } from "@/lib/benchmark-content";
import { sources as oemSources } from "../sources";
import { experienceSources, ownerReports } from "./experience";
import { getScoringProfile, listScoringProfiles } from "./profiles";
import { experienceSourceSchema, ownerReportSchema, scorecardSubjectSchema, scoringProfileSchema } from "./schema";
import { scorecardSubjects } from "./subjects";

/**
 * Integrity checks on the evidence itself, as distinct from the arithmetic
 * tested in `src/lib/benchmark.test.ts`. The rule these enforce is that the
 * two evidence classes never merge: an OEM document can describe a machine,
 * and only an owner can report living with one.
 */

describe("the two evidence classes stay separate", () => {
  it("shares no identifier between OEM sources and experience sources", () => {
    const oemIds = new Set(oemSources.map((source) => source.id));
    for (const source of experienceSources) {
      expect(oemIds.has(source.id), `${source.id} appears in both evidence classes`).toBe(false);
    }
  });

  it("never cites an OEM document as an owner observation", () => {
    const oemIds = new Set(oemSources.map((source) => source.id));
    const experienceIds = new Set(experienceSources.map((source) => source.id));
    for (const report of ownerReports) {
      expect(oemIds.has(report.sourceId), `${report.id} cites OEM material as owner evidence`).toBe(
        false,
      );
      expect(experienceIds.has(report.sourceId), `${report.id} cites an unknown source`).toBe(true);
    }
  });

  it("keeps OEM facts on a scorecard free of experience claims", () => {
    // OEM literature cannot establish sentiment. These words in an oemFact
    // would mean a manufacturer statement had been read as owner experience.
    const sentiment =
      /\b(reliable|unreliable|owners? (say|report|found)|customers?|satisfied|popular|best|worst|highly rated)\b/i;
    for (const subject of scorecardSubjects) {
      for (const fact of subject.oemFacts) {
        expect(sentiment.test(fact), `${subject.id} states sentiment as an OEM fact: ${fact}`).toBe(
          false,
        );
      }
    }
  });

  it("maps every scorecard to OEM evidence that actually exists", () => {
    const known = new Set(oemSources.map((source) => source.id));
    for (const subject of scorecardSubjects) {
      for (const id of subject.oemSourceIds) {
        expect(known, `${subject.id} cites unknown OEM evidence ${id}`).toContain(id);
      }
    }
  });
});

describe("stored evidence matches its schema", () => {
  it("validates every profile, subject, source, and report", () => {
    for (const profile of listScoringProfiles()) {
      expect(() => scoringProfileSchema.parse(profile)).not.toThrow();
    }
    for (const subject of scorecardSubjects) {
      expect(() => scorecardSubjectSchema.parse(subject)).not.toThrow();
    }
    for (const source of experienceSources) {
      expect(() => experienceSourceSchema.parse(source)).not.toThrow();
    }
    for (const report of ownerReports) {
      expect(() => ownerReportSchema.parse(report)).not.toThrow();
    }
  });

  it("gives every scorecard a profile that supports its class", () => {
    for (const subject of scorecardSubjects) {
      expect(() => getScoringProfile(subject.equipmentClass)).not.toThrow();
    }
  });

  it("keeps a resolvable URL and collection date on every experience source", () => {
    for (const source of experienceSources) {
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.collected).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

describe("what the live site is allowed to show today", () => {
  it("shows a number only where the evidence cleared every gate", () => {
    for (const result of getAllBenchmarks()) {
      if (result.published) {
        expect(result.overall).not.toBeNull();
        expect(result.sampleSize).toBeGreaterThanOrEqual(12);
      } else {
        expect(result.overall).toBeNull();
        expect(result.statement).toBe(INSUFFICIENT_EVIDENCE_STATEMENT);
        expect(result.reasons.length).toBeGreaterThan(0);
      }
    }
  });

  it("publishes nothing while the owner evidence store is empty", () => {
    if (ownerReports.length === 0) {
      expect(getPublishedBenchmarks()).toEqual([]);
    }
  });

  it("still describes every tracked family so the scope card is useful", () => {
    for (const subject of scorecardSubjects) {
      expect(subject.scope.length).toBeGreaterThan(40);
      expect(subject.oemSourceIds.length).toBeGreaterThan(0);
    }
  });
});
