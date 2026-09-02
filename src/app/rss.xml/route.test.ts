import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/content", () => ({
  getAllArticles: () => [
    {
      title: "Undated editorial reference",
      path: "/undated-editorial-reference/",
      description: "An editorial reference awaiting source verification.",
      articleType: "guide",
      reviewStatus: "editorial-review",
      datePublished: undefined,
      lastReviewed: undefined,
    },
    {
      title: "Dated verified reference",
      path: "/dated-verified-reference/",
      description: "A source-verified reference with an explicit review date.",
      articleType: "guide",
      reviewStatus: "source-verified",
      datePublished: "2026-09-01",
      lastReviewed: "2026-09-02",
    },
  ],
}));

import { GET } from "./route";

describe("RSS provenance dates", () => {
  it("emits dates for dated articles without inventing one for an undated article", async () => {
    const xml = await (await GET()).text();
    const undatedItem = xml.match(
      /<item>\s*<title>Undated editorial reference<\/title>([\s\S]*?)<\/item>/,
    )?.[1];
    const datedItem = xml.match(
      /<item>\s*<title>Dated verified reference<\/title>([\s\S]*?)<\/item>/,
    )?.[1];

    expect(undatedItem).toBeDefined();
    expect(undatedItem).not.toContain("<pubDate>");
    expect(undatedItem).not.toContain("Invalid Date");
    expect(datedItem).toContain("<pubDate>Tue, 01 Sep 2026 00:00:00 GMT</pubDate>");
  });
});
