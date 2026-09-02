// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { scorecardSubjects } from "@/content/benchmark/subjects";
import { getBenchmark } from "@/lib/benchmark-content";
import { BenchmarkScorecard } from "./benchmark-scorecard";

afterEach(cleanup);

describe("BenchmarkScorecard", () => {
  it("shows the evidence-gated empty state without implying a score", () => {
    const subject = scorecardSubjects[0];
    const result = getBenchmark(subject.id)!;

    render(<BenchmarkScorecard subject={subject} result={result} />);

    expect(screen.getByText("Not enough verified owner data yet")).toBeInTheDocument();
    expect(
      screen.getByText(/No owner observation for this family has been collected and verified yet/i),
    ).toBeInTheDocument();
    expect(screen.queryByText("out of 10")).not.toBeInTheDocument();
    expect(screen.queryByRole("img", { name: /out of 10/i })).not.toBeInTheDocument();
  });

  it("keeps manufacturer facts visibly separate from owner scoring", () => {
    const subject = scorecardSubjects[0];
    const result = getBenchmark(subject.id)!;

    render(<BenchmarkScorecard subject={subject} result={result} />);

    expect(screen.getByText("What this covers")).toBeInTheDocument();
    expect(
      screen.getByText(/Manufacturer material can establish what equipment is built to do/i),
    ).toBeInTheDocument();
    expect(screen.getByText("What would be scored")).toBeInTheDocument();
  });
});
