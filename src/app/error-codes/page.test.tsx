// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/content", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/content")>();

  return {
    ...actual,
    getErrorCodeArticles: () => {
      const articles = actual.getErrorCodeArticles();
      return [
        {
          ...articles[0],
          reviewStatus: "editorial-review" as const,
          lastReviewed: undefined,
        },
        ...articles.slice(1),
      ];
    },
  };
});

import ErrorCodesPage from "./page";

afterEach(cleanup);

describe("ErrorCodesPage provenance", () => {
  it("does not label a mixed-status index as source verified", () => {
    render(<ErrorCodesPage />);

    expect(screen.getByText("Includes pages awaiting source verification")).toBeInTheDocument();
    expect(screen.queryByText("Source verified")).not.toBeInTheDocument();
  });
});
