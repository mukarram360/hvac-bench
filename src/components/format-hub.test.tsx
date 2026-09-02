// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { getArticleByPath } from "@/lib/content";
import { FormatHub } from "./format-hub";

afterEach(cleanup);

const baseProps = {
  eyebrow: "Guides",
  title: "HVAC guides",
  description: "Technical guides for understanding HVAC equipment and documented operation.",
  path: "/guides/",
  promises: [{ heading: "Scoped guidance", copy: "Each guide states the equipment it covers." }],
  emptyHeading: "Guides are in preparation",
  emptyCopy: "The first guides are being prepared.",
};

describe("FormatHub provenance", () => {
  it("only claims documentation checking when every listed article is source verified", () => {
    const verified = getArticleByPath("/how-mini-splits-work/");
    expect(verified).toBeDefined();
    const editorial = {
      ...verified!,
      path: "/editorial-guide/",
      reviewStatus: "editorial-review" as const,
      lastReviewed: undefined,
    };

    const { rerender } = render(<FormatHub {...baseProps} articles={[verified!]} />);
    expect(screen.getByText("Checked against manufacturer documentation")).toBeInTheDocument();

    rerender(<FormatHub {...baseProps} articles={[verified!, editorial]} />);
    expect(screen.getByText("Includes pages awaiting source verification")).toBeInTheDocument();
    expect(screen.queryByText("Checked against manufacturer documentation")).not.toBeInTheDocument();
  });

  it("does not imply that an empty hub already contains pages in review", () => {
    render(<FormatHub {...baseProps} articles={[]} />);

    expect(screen.getByText("Source verification pending")).toBeInTheDocument();
    expect(screen.queryByText("Includes pages awaiting source verification")).not.toBeInTheDocument();
  });
});
