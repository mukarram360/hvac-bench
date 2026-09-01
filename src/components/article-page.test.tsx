// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { getArticleByPath } from "@/lib/content";
import { ArticlePage } from "./article-page";

afterEach(cleanup);

describe("ArticlePage", () => {
  it("renders direct evidence, safety boundaries, sources, and breadcrumbs", () => {
    const article = getArticleByPath("/brands/gree/e6-error-code/");
    expect(article).toBeDefined();

    render(<ArticlePage article={article!} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Gree E6",
    );
    expect(
      screen.getByRole("heading", { name: "Safe homeowner checks" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "When to call a technician" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Sources" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toHaveTextContent(
      "Gree",
    );
  });

  it("uses symptom specific scope language instead of an error code warning", () => {
    const article = getArticleByPath("/mini-split-remote-not-working/");
    expect(article).toBeDefined();

    render(<ArticlePage article={article!} />);

    expect(screen.queryByText(/codes can change meaning/i)).not.toBeInTheDocument();
    expect(screen.getByText(/remote layouts.*vary by model/i)).toBeInTheDocument();
  });
});
