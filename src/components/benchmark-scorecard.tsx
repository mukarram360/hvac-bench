import { getScoringProfile } from "@/content/benchmark/profiles";
import type { ScorecardSubject } from "@/content/benchmark/schema";
import type { BenchmarkResult } from "@/lib/benchmark";

/**
 * The HVAC Bench Score card.
 *
 * The card is designed around the state it is actually in most of the time.
 * A family with no published score still gets a useful page element: what the
 * family covers, what manufacturer documentation establishes about it, which
 * dimensions would be scored for equipment of this class, and a plain
 * statement that owner evidence has not reached the bar. That is more honest
 * than a greyed-out five stars, and more useful than hiding the card.
 */

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

function ScoreMeter({ score }: { score: number }) {
  const percent = Math.max(0, Math.min(100, score * 10));
  return (
    <div className="score-meter" role="img" aria-label={`${score} out of 10`}>
      <span className="score-meter-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}

export function BenchmarkScorecard({
  subject,
  result,
}: {
  subject: ScorecardSubject;
  result: BenchmarkResult;
}) {
  const profile = getScoringProfile(subject.equipmentClass);

  return (
    <section className="scorecard plate" aria-labelledby={`score-${subject.id}`}>
      <div className="plate-head">
        <span id={`score-${subject.id}`}>HVAC Bench Score</span>
        <span>{profile.label}</span>
      </div>

      <div className="scorecard-headline">
        {result.published ? (
          <>
            <p className="scorecard-figure">
              <strong>{result.overall}</strong>
              <span>out of 10</span>
            </p>
            <p className="scorecard-sample">
              {result.sampleSize} owner observations across {result.sourceCount} independent
              sources. Confidence: {result.confidence}.
            </p>
          </>
        ) : (
          <>
            <p className="scorecard-pending">{result.statement}</p>
            <p className="scorecard-sample">
              {result.sampleSize === 0
                ? "No owner observation for this family has been collected and verified yet, so there is nothing to average."
                : `${result.sampleSize} verified observations on file from ${result.sourceCount} sources, which is below the threshold this site publishes at.`}
            </p>
          </>
        )}
      </div>

      <div className="scorecard-body">
        <div className="scorecard-scope">
          <h3>What this covers</h3>
          <p>{subject.scope}</p>
          {subject.oemFacts.length > 0 && (
            <ul>
              {subject.oemFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          )}
          <p className="scorecard-note">
            The statements above come from manufacturer documentation. Manufacturer material can
            establish what equipment is built to do; it is never used to score what owners
            experienced.
          </p>
        </div>

        <div className="scorecard-dimensions">
          <h3>{result.published ? "By dimension" : "What would be scored"}</h3>
          <dl>
            {result.dimensions.map((dimension) => (
              <div key={dimension.dimension}>
                <dt>{DIMENSION_LABELS[dimension.dimension] ?? dimension.dimension}</dt>
                <dd>
                  {dimension.score === null ? (
                    <span className="scorecard-unscored">
                      Not scored
                      <small>
                        {dimension.sampleSize === 0
                          ? "no owner evidence"
                          : `${dimension.sampleSize} observations, below threshold`}
                      </small>
                    </span>
                  ) : (
                    <span className="scorecard-scored">
                      <ScoreMeter score={dimension.score} />
                      <b>{dimension.score}</b>
                      <small>
                        {dimension.sampleSize} observations · {dimension.sourceCount} sources
                      </small>
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
