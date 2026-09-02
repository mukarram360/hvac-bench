// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { getArticleByPath } from "@/lib/content";
import { ArticlePage } from "./article-page";

afterEach(cleanup);

describe("ArticlePage", () => {
  it("renders direct evidence, safety boundaries, verification, and breadcrumbs", () => {
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
    expect(
      screen.getByRole("heading", { name: "How this page was checked" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Gree Comfort technical literature/)).toBeInTheDocument();
    expect(document.querySelectorAll('a[target="_blank"]')).toHaveLength(0);
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

  it("presents an undated editorial review without verified claims or styling", () => {
    const verifiedArticle = getArticleByPath("/brands/gree/e6-error-code/");
    expect(verifiedArticle).toBeDefined();
    const article = {
      ...verifiedArticle!,
      reviewStatus: "editorial-review" as const,
      lastReviewed: undefined,
    };

    render(<ArticlePage article={article} />);

    const badge = screen.getByText("Editorial review", { selector: ".badge" });
    expect(badge).not.toHaveClass("badge-verified");
    expect(screen.getByRole("heading", { name: "Source verification pending" })).toBeInTheDocument();
    expect(screen.getByText(/awaiting source verification/i)).toBeInTheDocument();
    expect(screen.queryByText("Source verified")).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "How this page was checked" })).not.toBeInTheDocument();
    expect(screen.queryByText(/Last reviewed/i)).not.toBeInTheDocument();
    expect(screen.queryByText(verifiedArticle!.lastReviewed!)).not.toBeInTheDocument();
    expect(document.body).not.toHaveTextContent("Every technical claim above was written");
  });

  it("uses format-aware navigation and links educational pages into the taxonomy", () => {
    const article = getArticleByPath("/how-mini-splits-work/");
    expect(article).toBeDefined();

    render(<ArticlePage article={article!} />);

    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toHaveTextContent("Guides");
    expect(screen.getByRole("heading", { name: "What this guide covers" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Ductless mini-split" })[0]).toHaveAttribute(
      "href",
      "/equipment/ductless-mini-split",
    );
    expect(screen.getAllByRole("link", { name: "Ductless mini-split" })[1]).toHaveAttribute(
      "href",
      "/glossary/ductless-mini-split",
    );
    expect(screen.getAllByRole("link", { name: "Guides" })[0]).toHaveAttribute("href", "/guides");
  });

  it("links both manufacturers from a brand comparison", () => {
    const article = getArticleByPath("/daikin-vs-mitsubishi-mini-splits/");
    expect(article).toBeDefined();

    render(<ArticlePage article={article!} />);

    expect(screen.getByRole("link", { name: "Daikin references" })).toHaveAttribute(
      "href",
      "/brands/daikin",
    );
    expect(screen.getByRole("link", { name: "Mitsubishi Electric references" })).toHaveAttribute(
      "href",
      "/brands/mitsubishi",
    );
  });
});
