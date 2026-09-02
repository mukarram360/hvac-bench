// @vitest-environment jsdom

import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { getArticleByPath } from "@/lib/content";
import { ArticleContentBlocks } from "./article-content-blocks";

const baseArticle = getArticleByPath("/mini-split-remote-not-working/")!;

afterEach(cleanup);

const completeArticle = {
  ...baseArticle,
  serviceHandoff:
    "Give the technician the complete indoor unit model, the remote model or part number, and the result of the manual operation check.",
  diagnosticBranches: [
    {
      title: "The remote display is completely blank",
      observation:
        "No numbers, icons, or backlight appear when a button is pressed on the remote control.",
      action:
        "Start with a fresh matched battery pair, correct polarity, and clean undamaged battery contacts.",
    },
  ],
  decisionTable: {
    caption: "Remote response decision table",
    columns: ["What you observe", "What it points to", "Next safe action"],
    rows: [
      [
        "Manual operation works but the remote does not",
        "The unit has power, so investigate the handset, signal path, or receiver",
        "Confirm the exact replacement remote before ordering",
      ],
    ],
  },
  comparisonTable: {
    caption: "Remote display and transmission are different checks",
    columns: ["Observation", "What it establishes"],
    rows: [
      [
        "The liquid crystal display is visible",
        "The batteries can power the display, but transmission is not proven",
      ],
    ],
  },
  sections: [
    {
      title: "Check replacement compatibility",
      paragraphs: [
        "Match the indoor unit model and the original controller part number before buying a replacement.",
      ],
    },
  ],
  figures: [
    {
      title: "Remote, receiver, and unit power path",
      description:
        "Follow the command from the handset through the infrared path to the indoor receiver, then confirm whether the unit itself can respond.",
      nodes: [
        { label: "Remote", detail: "Creates and sends the command" },
        { label: "Signal path", detail: "Needs range and clear line of sight" },
        { label: "Indoor receiver", detail: "Accepts a compatible command" },
        { label: "Indoor unit", detail: "Needs power and a normal operating state" },
      ],
    },
  ],
};

describe("ArticleContentBlocks", () => {
  it("renders diagnostic branches, tables, sections, and an accessible signal path", () => {
    render(<ArticleContentBlocks article={completeArticle} />);

    expect(
      screen.getByRole("heading", { name: "The remote display is completely blank" }),
    ).toBeInTheDocument();
    const branch = screen
      .getByRole("heading", { name: "The remote display is completely blank" })
      .closest("article")!;
    expect(within(branch).getByText(/fresh matched battery pair/i)).toBeInTheDocument();

    const decisionTable = screen.getByRole("table", {
      name: "Remote response decision table",
    });
    expect(within(decisionTable).getAllByRole("columnheader")).toHaveLength(3);
    expect(within(decisionTable).getByText(/manual operation works/i)).toBeInTheDocument();
    expect(decisionTable.parentElement).toMatchObject({ tabIndex: 0 });
    expect(decisionTable.parentElement).toHaveAttribute("role", "region");
    expect(decisionTable.parentElement).toHaveAttribute(
      "aria-label",
      "Remote response decision table",
    );

    expect(
      screen.getByRole("figure", { name: "Remote, receiver, and unit power path" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/follow the command from the handset/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Check replacement compatibility" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What to give the technician" })).toBeInTheDocument();
    expect(screen.getByText(/result of the manual operation check/i)).toBeInTheDocument();
  });

  it("does not render empty optional sections", () => {
    const articleWithoutOptionalBlocks = {
      ...baseArticle,
      diagnosticBranches: undefined,
      decisionTable: undefined,
      comparisonTable: undefined,
      sections: undefined,
      figures: undefined,
      serviceHandoff: undefined,
    };
    render(<ArticleContentBlocks article={articleWithoutOptionalBlocks} />);

    expect(screen.queryByRole("heading", { name: "Diagnostic paths" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Decision table" })).not.toBeInTheDocument();
    expect(screen.queryByRole("figure")).not.toBeInTheDocument();
  });

  it("renders the blocks in the order the page asked for", () => {
    const { container } = render(
      <ArticleContentBlocks
        article={{
          ...completeArticle,
          steps: undefined,
          layout: ["sections", "decisionTable", "branches"],
        }}
      />,
    );

    const headings = [...container.querySelectorAll("h2")].map((node) => node.textContent);
    expect(headings.indexOf("Check replacement compatibility")).toBeLessThan(
      headings.indexOf("Diagnostic paths"),
    );
  });
});
