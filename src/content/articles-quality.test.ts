import { describe, expect, it } from "vitest";

import { articles } from "./articles";
import { articleSchema } from "./schema";

const foundingPaths = [
  "/brands/gree/e6-error-code/",
  "/brands/gree/h5-error-code/",
  "/brands/daikin/u4-error-code/",
  "/brands/daikin/a5-error-code/",
  "/brands/lg/ch05-error-code/",
  "/brands/midea/e1-error-code/",
  "/brands/mrcool/el01-e1-error-code/",
  "/brands/mrcool/p1-pc01-error-code/",
  "/brands/mrcool/p0-pc00-error-code/",
  "/brands/pioneer/e1-communication-error-code/",
  "/brands/pioneer/e1-temperature-sensor-error-code/",
  "/brands/senville/eh02-error-code/",
  "/brands/senville/pc0a-error-code/",
  "/mini-split-not-cooling/",
  "/mini-split-not-heating/",
  "/mini-split-leaking-water/",
  "/mini-split-remote-not-working/",
  "/mini-split-not-turning-on/",
  "/mini-split-frozen-coil/",
  "/heat-pump-outdoor-unit-iced-over/",
  "/mini-split-outdoor-unit-not-running/",
  "/mini-split-making-noise/",
  "/mini-split-smells-musty/",
  "/mini-split-short-cycling/",
  "/mini-split-filter-cleaning/",
] as const;

describe("published article quality", () => {
  it("keeps the complete founding route inventory in scope", () => {
    expect(articles.map((article) => article.path).sort()).toEqual([...foundingPaths].sort());
  });

  it("keeps search summaries and direct answers unique", () => {
    expect(new Set(articles.map((article) => article.description)).size).toBe(articles.length);
    expect(new Set(articles.map((article) => article.directAnswer)).size).toBe(articles.length);
  });

  it("keeps article relations unique and published prose free of prohibited dash forms", () => {
    for (const article of articles) {
      expect(new Set(article.relatedContent).size).toBe(article.relatedContent.length);
      expect(JSON.stringify(article)).not.toContain("—");
      expect(JSON.stringify(article)).not.toContain("--");
    }
  });

  it("preserves typed diagnostic content blocks during validation", () => {
    const parsed = articleSchema.parse({
      ...articles[0],
      scopeNotice:
        "This definition applies only to the product families named in the cited service literature.",
      serviceHandoff:
        "Give the technician the complete indoor and outdoor model numbers and a photo of the display.",
      diagnosticBranches: [
        {
          title: "The code appeared after a power interruption",
          observation: "The equipment had been operating normally before supply power was interrupted.",
          action: "Record whether one permitted restart clears the display or the same code returns.",
        },
      ],
      decisionTable: {
        caption: "Communication fault decision table",
        columns: ["What you observe", "What it points to", "Next safe action"],
        rows: [
          [
            "The code returns after one restart",
            "The communication fault is still active",
            "Leave electrical diagnosis to qualified service",
          ],
        ],
      },
      comparisonTable: {
        caption: "Temporary event versus persistent fault",
        columns: ["Observation", "Interpretation"],
        rows: [
          ["Code clears and operation remains normal", "Record the event and continue to observe"],
          ["Code returns", "The underlying communication path needs diagnosis"],
        ],
      },
      sections: [
        {
          title: "What to record before service",
          paragraphs: [
            "Record every connected model number, the complete code, and what the system was doing when it stopped.",
          ],
        },
      ],
      figures: [
        {
          title: "Indoor to outdoor communication path",
          description:
            "A text equivalent showing that power, the interconnect path, and both control boards participate in communication.",
          nodes: [
            { label: "Indoor unit", detail: "Sends and receives control information" },
            { label: "Interconnect", detail: "Carries the documented communication path" },
            { label: "Outdoor unit", detail: "Returns operating information" },
          ],
        },
      ],
    });

    expect(parsed).toHaveProperty("scopeNotice");
    expect(parsed).toHaveProperty("serviceHandoff");
    expect(parsed).toHaveProperty("diagnosticBranches");
    expect(parsed).toHaveProperty("decisionTable");
    expect(parsed).toHaveProperty("comparisonTable");
    expect(parsed).toHaveProperty("sections");
    expect(parsed).toHaveProperty("figures");
  });

  it("completes the remote control guide as a cross brand diagnostic path", () => {
    const article = articles.find((entry) => entry.path === "/mini-split-remote-not-working/")!;
    const copy = JSON.stringify(article).toLowerCase();

    expect(article.diagnosticBranches?.map((branch) => branch.title)).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/display.*blank/i),
        expect.stringMatching(/display.*works|screen.*works/i),
      ]),
    );
    expect(article.decisionTable?.rows.length).toBeGreaterThanOrEqual(6);
    expect(article.figures?.some((figure) => /receiver.*power path/i.test(figure.title))).toBe(true);
    expect(copy).toMatch(/matched.*batter/);
    expect(copy).toMatch(/polarity/);
    expect(copy).toMatch(/reset/);
    expect(copy).toMatch(/camera/);
    expect(copy).toMatch(/line of sight/);
    expect(copy).toMatch(/child lock/);
    expect(copy).toMatch(/manual operation/);
    expect(copy).toMatch(/part number/);
    expect(article.faqs).toHaveLength(6);
    expect(article.sourceIds).toEqual(
      expect.arrayContaining([
        "fujitsu-rls2-operation",
        "trane-mitsubishi-remote",
        "lg-console-owner",
        "daikin-mxs-engineering",
      ]),
    );
    expect(article.scopeNotice).toMatch(/controller|remote/i);
    expect(article.serviceHandoff).toMatch(/model/i);
  });

  it("gives every published guide a complete diagnostic and search journey", () => {
    for (const article of articles) {
      expect(article.scopeNotice, article.path).toBeTruthy();
      expect(article.diagnosticBranches?.length, article.path).toBeGreaterThanOrEqual(2);
      expect(article.decisionTable?.rows.length, article.path).toBeGreaterThanOrEqual(3);
      expect(article.sections?.length, article.path).toBeGreaterThanOrEqual(2);
      expect(article.figures?.length, article.path).toBeGreaterThanOrEqual(1);
      expect(article.serviceHandoff, article.path).toBeTruthy();
      expect(article.faqs.length, article.path).toBeGreaterThanOrEqual(3);
      expect(article.keywords.length, article.path).toBeGreaterThanOrEqual(4);
      expect(article.lastReviewed, article.path).toBe("2026-09-02");
    }
  });

  it("keeps the published evidence set limited to manufacturer sources", () => {
    for (const article of articles) {
      expect(article.sourceType, article.path).not.toBe("government-guidance");
    }
  });

  it("publishes filter cleaning as an ordered procedure", () => {
    const article = articles.find((entry) => entry.path === "/mini-split-filter-cleaning/")!;
    expect(article.steps?.length).toBeGreaterThanOrEqual(4);
    expect(article.steps?.map((step) => step.name).join(" ")).toMatch(/manual|instructions/i);
    expect(article.steps?.map((step) => step.text).join(" ")).toMatch(/dry/i);
  });
});
