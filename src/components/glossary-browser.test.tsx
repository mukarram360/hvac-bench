// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { getGlossary, getGlossaryByCategory } from "@/lib/content";
import { GlossaryBrowser } from "./glossary-browser";

afterEach(cleanup);

const terms = getGlossary();
const subjects = getGlossaryByCategory().map((category) => ({
  slug: category.slug,
  label: category.label,
  count: category.terms.length,
}));

describe("GlossaryBrowser", () => {
  it("renders an alphabet window and the complete initial term count", () => {
    render(<GlossaryBrowser terms={terms} subjects={subjects} />);

    expect(screen.getByRole("search", { name: "Search HVAC terms" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Browse glossary by letter" })).toBeInTheDocument();
    expect(screen.getByText(`${terms.length} terms`)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Air filter" })).toBeInTheDocument();
  });

  it("filters by term aliases and gives a useful empty state", () => {
    render(<GlossaryBrowser terms={terms} subjects={subjects} />);
    const search = screen.getByRole("searchbox", { name: "Search glossary terms" });

    fireEvent.change(search, { target: { value: "room stat" } });
    expect(screen.getByRole("link", { name: "Thermostat" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Air filter" })).not.toBeInTheDocument();

    fireEvent.change(search, { target: { value: "definitely-not-an-hvac-term" } });
    expect(screen.getByText("No glossary terms match that search.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Clear search" })).toBeInTheDocument();
  });
});
