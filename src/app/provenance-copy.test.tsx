// @vitest-environment jsdom

import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import EditorialPolicyPage from "./editorial-policy/page";
import { GET as getLlmsText } from "./llms.txt/route";
import HomePage from "./page";
import SourcesMethodologyPage from "./sources-methodology/page";

afterEach(cleanup);

describe("review-status policy copy", () => {
  it("qualifies source-check claims on the homepage", () => {
    render(<HomePage />);
    const copy = document.body.textContent ?? "";

    expect(copy).toMatch(/source-verified references.*checked against manufacturer literature/i);
    expect(copy).not.toMatch(/heat pumps, checked against manufacturer literature/i);
  });

  it("qualifies review dates on the editorial policy", () => {
    render(<EditorialPolicyPage />);
    const copy = document.body.textContent ?? "";

    expect(copy).toMatch(/source verified pages.*review date/i);
    expect(copy).toMatch(/editorial review pages.*awaiting.*verification/i);
    expect(copy).not.toMatch(/Every technical page shows when it was last reviewed/i);
  });

  it("qualifies source-check dates in the methodology", () => {
    render(<SourcesMethodologyPage />);
    const copy = document.body.textContent ?? "";

    expect(copy).toMatch(/source verified pages.*sources were last checked/i);
    expect(copy).toMatch(/editorial review pages.*awaiting.*verification/i);
    expect(copy).not.toMatch(/Each page records the date its sources were last checked/i);
  });

  it("qualifies review dates in the language-model index", async () => {
    const copy = await (await getLlmsText()).text();

    expect(copy).toMatch(/source-verified technical claims.*manufacturer service documentation/i);
    expect(copy).not.toMatch(/Every technical claim is traced/i);
    expect(copy).toMatch(/source verified pages.*last reviewed date/i);
    expect(copy).toMatch(/editorial review pages.*awaiting.*verification/i);
    expect(copy).not.toMatch(/Last reviewed dates are on every technical page/i);
  });
});
