import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { listScoringProfiles } from "@/content/benchmark/profiles";
import { scorecardSubjects } from "@/content/benchmark/subjects";
import { EVIDENCE_THRESHOLDS } from "@/lib/benchmark";
import { benchmarkCoverage, getAllBenchmarks } from "@/lib/benchmark-content";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const PATH = "/benchmark/";

export const metadata: Metadata = pageMetadata({
  title: "The HVAC Bench Score: how equipment gets rated",
  description:
    "How HVAC Bench rates equipment families: separated evidence classes, per-class weightings, sample size thresholds, and why a family shows no score at all.",
  path: PATH,
  keywords: ["hvac bench score", "mini split ratings", "heat pump reliability rating"],
});

const DIMENSION_LABELS: Record<string, string> = {
  reliability: "Reliability",
  "cooling-performance": "Cooling performance",
  "heating-performance": "Heating performance",
  noise: "Noise",
  "efficiency-value": "Efficiency and value",
  "build-quality": "Build quality",
  "controls-usability": "Controls and usability",
  "serviceability-parts": "Serviceability and parts",
  "owner-satisfaction": "Owner satisfaction",
};

export default function BenchmarkPage() {
  const coverage = benchmarkCoverage();
  const results = getAllBenchmarks();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "HVAC Bench Score", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          webPageJsonLd({
            title: "The HVAC Bench Score",
            description:
              "The rating method HVAC Bench uses for equipment families, including its evidence rules and publication thresholds.",
            path: PATH,
            breadcrumbs,
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <PageHead
        eyebrow="Rating method"
        title="The HVAC Bench Score"
        description="A rating for an equipment family is only worth reading if you know what went into it. This page describes exactly that, including the conditions under which we publish no number at all."
        breadcrumbs={breadcrumbs}
        meta={[
          `${coverage.familiesTracked} families tracked`,
          `${coverage.familiesScored} currently scored`,
          `${coverage.profiles} weighting profiles`,
        ]}
      />

      <section className="band">
        <div className="container prose">
          <h2>Three kinds of evidence, kept apart</h2>
          <p>
            Most equipment ratings online blend two things that should never be mixed: what a
            manufacturer says a machine does, and what the people who bought it found. The first is
            documentation and the second is testimony, and treating them as one number is how a
            specification sheet ends up looking like a reliability record.
          </p>
          <ol className="numbered-list">
            <li>
              <strong>Manufacturer facts.</strong> Model scope, features, and documented behaviour,
              taken from service and operation manuals. These establish what a system is built to
              do. They are never used to score how it was found in service, because a manufacturer
              is not a witness to that.
            </li>
            <li>
              <strong>Owner experience.</strong> First-hand accounts from identifiable owners,
              documented field experience, and independent testing. Each observation is stored with
              where it was read, when it was collected, which model family it concerns, and what it
              actually said. This is the only class that can move a score.
            </li>
            <li>
              <strong>The calculated score.</strong> Derived from the observations above and the
              published weights for that equipment class. There is no field anywhere in the system
              that lets anyone type a score in by hand.
            </li>
          </ol>

          <h2>When a family gets a number</h2>
          <p>
            A score publishes only when the evidence behind it clears every one of these. A near
            miss is still a miss, and the card says so instead of showing a hedged figure.
          </p>
          <ul className="check-list">
            <li>
              At least {EVIDENCE_THRESHOLDS.minReportsOverall} distinct owner observations about
              that family, after duplicates are removed.
            </li>
            <li>
              Observations from at least {EVIDENCE_THRESHOLDS.minSourcesOverall} independent
              sources, so one forum thread or one retailer page cannot carry a rating.
            </li>
            <li>
              At least {EVIDENCE_THRESHOLDS.minReportsPerDimension} observations from{" "}
              {EVIDENCE_THRESHOLDS.minSourcesPerDimension} sources before any single dimension is
              scored. Dimensions nobody spoke to stay blank rather than being filled in.
            </li>
            <li>
              Enough scored dimensions to cover at least{" "}
              {Math.round(EVIDENCE_THRESHOLDS.minWeightCoverage * 100)}% of what matters for that
              equipment class.
            </li>
          </ul>

          <h2>Rules the system enforces on itself</h2>
          <ul className="check-list">
            <li>
              An observation about one family is not evidence about another, even within a brand. A
              brand-wide impression never substitutes for a specific family rating.
            </li>
            <li>
              Syndicated reviews are collapsed to one observation. The same retailer text appears
              across several sites, and counting it repeatedly would manufacture a sample.
            </li>
            <li>
              An observation votes only on the dimensions it actually addresses. Somebody
              complaining about noise does not get a reliability vote.
            </li>
            <li>
              Sample size and confidence are shown next to the number. Confidence describes how much
              evidence stands behind a score, not whether the score is good.
            </li>
          </ul>

          <h2>Weighting by equipment class</h2>
          <p>
            What matters depends on the machine. Serviceability weighs heavily on light commercial
            equipment because downtime costs money; heating output weighs more on a heat pump than
            on a cooling-only split, which is not offered a heating score at all. The weights below
            are configuration rather than code, and revising them changes every card of that class
            without touching a single page.
          </p>
          <div className="profile-grid">
            {listScoringProfiles().map((profile) => (
              <div key={profile.equipmentClass} className="plate">
                <div className="plate-head">
                  <span>{profile.label}</span>
                </div>
                <div className="plate-body">
                  <dl className="weight-list">
                    {Object.entries(profile.weights)
                      .sort((a, b) => b[1] - a[1])
                      .map(([dimension, weight]) => (
                        <div key={dimension}>
                          <dt>{DIMENSION_LABELS[dimension] ?? dimension}</dt>
                          <dd>{Math.round(weight * 100)}%</dd>
                        </div>
                      ))}
                  </dl>
                  <p className="scorecard-note">{profile.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-alt page-tail">
        <div className="container prose">
          <h2>Families being tracked</h2>
          <p>
            Each of these has its model scope established from manufacturer documentation, which is
            what a score would be attached to. Where a family shows no score, the owner evidence has
            not reached the threshold above.
          </p>
          <ul className="plate-list tracked-families">
            {results.map((result) => {
              const subject = scorecardSubjects.find((entry) => entry.id === result.subjectId)!;
              return (
                <li key={result.subjectId}>
                  <Link href={`/brands/${result.brand}/`}>
                    {subject.modelFamily}
                    <span>{result.published ? `${result.overall} / 10` : "No score yet"}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {coverage.familiesScored === 0 && (
            <p className="scorecard-note">
              No family currently carries a score. The owner evidence record holds{" "}
              {coverage.ownerObservations} verified observations, which is short of what any family
              needs. That is a statement about our evidence, not about the equipment.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
