import { describe, expect, it } from "vitest";

import { articles } from "./articles";
import { brands } from "./brands";
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
  it("publishes two distinct supporting intents for every registered brand", () => {
    for (const brand of brands) {
      const supporting = articles.filter((article) => article.brand === brand.slug);
      expect(supporting.length, `${brand.name} has fewer than two articles`).toBeGreaterThanOrEqual(2);
      expect(
        new Set(supporting.map((article) => article.problemType)).size,
        `${brand.name} repeats the same supporting intent`,
      ).toBeGreaterThanOrEqual(2);
    }
  });

  it("keeps the complete founding route inventory in scope", () => {
    const published = new Set(articles.map((article) => article.path));
    for (const path of foundingPaths) expect(published, path).toContain(path);
    expect(foundingPaths).toHaveLength(25);
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

  /**
   * This used to require a decision table and a figure on every page, which is
   * how the library ended up with one decision table repeated two dozen times.
   * The requirement now is substance, and which aids carry it is the article's
   * decision. `template-leakage.test.ts` enforces the rest.
   */
  it("gives every published page a scope, an explanation, and a search journey", () => {
    for (const article of articles) {
      expect(article.scopeNotice, article.path).toBeTruthy();
      expect(article.sections?.length, article.path).toBeGreaterThanOrEqual(2);
      expect(article.faqs.length, article.path).toBeGreaterThanOrEqual(3);
      expect(article.keywords.length, article.path).toBeGreaterThanOrEqual(4);
    }
  });

  it("keeps the current source-verified corpus explicitly dated", () => {
    for (const article of articles) {
      expect(article.reviewStatus, article.path).toBe("source-verified");
      expect(article.lastReviewed, article.path).toBeTruthy();
    }
  });

  /**
   * Branches, a stop point, and a handoff belong to a page a reader can act on
   * with the equipment in front of them. Requiring them everywhere is what put
   * a homeowner-safe checklist on a page about a laboratory efficiency metric,
   * where it had nothing to refer to and taught readers to scroll past it.
   */
  it("holds the actionable formats to the diagnostic requirements", () => {
    const actionable = ["error-code", "troubleshooting", "maintenance", "how-to"];
    for (const article of articles) {
      if (!actionable.includes(article.articleType)) continue;
      const branches = article.diagnosticBranches?.length ?? 0;
      const steps = article.steps?.length ?? 0;
      expect(
        branches >= 2 || steps >= 4,
        `${article.path} has neither branches nor a procedure`,
      ).toBe(true);
      expect(article.serviceHandoff, article.path).toBeTruthy();
      expect(article.safeChecks?.length ?? 0, article.path).toBeGreaterThanOrEqual(1);
      expect(article.professionalEscalation?.length ?? 0, article.path).toBeGreaterThanOrEqual(1);
    }
  });

  it("keeps the safety callouts off the pages with nothing to touch", () => {
    const explainers = articles.filter((article) =>
      ["guide", "comparison"].includes(article.articleType),
    );
    const withChecks = explainers.filter((article) => article.safeChecks?.length);
    expect(explainers.length, "no explainer pages published").toBeGreaterThan(10);
    expect(
      withChecks.length,
      "every explainer carries an owner checklist, which reads as boilerplate",
    ).toBeLessThan(explainers.length / 2);
  });

  it("lets the library use a range of reasoning aids rather than one shape", () => {
    const shapes = new Set(
      articles.map((article) =>
        [
          article.decisionTable ? "decision" : "",
          article.comparisonTable ? "comparison" : "",
          article.figures?.length ? "figure" : "",
          article.steps?.length ? "steps" : "",
        ]
          .filter(Boolean)
          .join("+"),
      ),
    );
    expect(shapes.size, "every article uses the same combination of aids").toBeGreaterThan(2);
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

  it("keeps cross-brand guidance free of unsupported prevalence and timing claims", () => {
    const crossBrand = articles.filter((article) => !article.brand);
    const unsupportedAbsolutes = [
      /\b(?:the )?most common\b/i,
      /\bsingle most\b/i,
      /\ba great many\b/i,
      /\bstriking number\b/i,
      /\baccount for most\b/i,
      /\bclassic cause\b/i,
      /\bsame repair again next year\b/i,
      /\bevery hour or two\b/i,
      /\bevery fifteen minutes\b/i,
      /\bten or fifteen minutes\b/i,
      /\beverything reachable\b/i,
      /\bwill grow exactly\b/i,
      /\bcomplete explanation\b/i,
      /\balmost always a characteristic\b/i,
      /\bguaranteed to see\b/i,
      /\banyone offering\b/i,
      /\bin most ductless families\b/i,
      /\bmost houses\b/i,
    ];

    for (const article of crossBrand) {
      const prose = JSON.stringify(article);
      for (const pattern of unsupportedAbsolutes) {
        expect(prose, `${article.path} contains ${pattern}`).not.toMatch(pattern);
      }
    }
  });
});
