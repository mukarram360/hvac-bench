import { describe, expect, it } from "vitest";

import {
  emptyFormatHubs,
  getAllArticles,
  getArticlesForHub,
  formatLabel,
} from "./content";
import { footerNav, primaryNav, visibleFooterNav, visiblePrimaryNav } from "./nav";

/**
 * The site publishes four formats and calls each one by a single name. The
 * homepage used to head a row of troubleshooting articles "Guides worth
 * reading" and link it to a guides hub that read "1 published", so the same
 * page was a guide, a symptom reference, and a troubleshooting article
 * depending on where you met it. These tests hold the vocabulary and the
 * routing to one answer each.
 */

const FORMAT_HUBS = ["/guides/", "/how-to/", "/compare/", "/troubleshooting/", "/error-codes/"];

describe("format taxonomy", () => {
  it("files every published page under exactly one format hub", () => {
    for (const article of getAllArticles()) {
      const hubs = FORMAT_HUBS.filter((hub) =>
        getArticlesForHub(hub).some((listed) => listed.path === article.path),
      );
      expect(hubs, `${article.path} is listed on ${hubs.join(" and ")}`).toHaveLength(1);
    }
  });

  it("lists every published page on some hub", () => {
    const listed = new Set(FORMAT_HUBS.flatMap((hub) => getArticlesForHub(hub)).map((a) => a.path));
    for (const article of getAllArticles()) {
      expect(listed, `${article.path} is not reachable from any format hub`).toContain(
        article.path,
      );
    }
  });

  it("gives an ordered procedure the how-to label rather than the guide label", () => {
    const procedure = getAllArticles().find(
      (article) => article.path === "/mini-split-filter-cleaning/",
    );
    expect(procedure).toBeDefined();
    expect(procedure!.steps?.length ?? 0).toBeGreaterThan(0);
    expect(formatLabel(procedure!)).toBe("How-to");
    expect(getArticlesForHub("/how-to/").map((a) => a.path)).toContain(
      "/mini-split-filter-cleaning/",
    );
  });

  it("labels an error code by its code and a symptom page by its format", () => {
    for (const article of getAllArticles()) {
      if (article.errorCode) {
        expect(formatLabel(article)).toBe(article.errorCode);
      } else {
        expect(["Symptom", "How-to", "Guide", "Comparison"]).toContain(formatLabel(article));
      }
    }
  });
});

describe("menus follow published content", () => {
  const hidden = emptyFormatHubs();

  it("hides a format hub that lists nothing", () => {
    const hrefs = visiblePrimaryNav(hidden)
      .flatMap((group) => group.columns ?? [])
      .flatMap((column) => column.links)
      .map((link) => link.href);

    for (const hub of hidden) {
      expect(hrefs, `${hub} is empty but promoted in the header`).not.toContain(hub);
    }
    for (const hub of FORMAT_HUBS.filter((hub) => !hidden.includes(hub))) {
      const promoted = hrefs.includes(hub) || primaryNav.some((group) => group.href === hub);
      expect(promoted, `${hub} has content but is missing from the header`).toBe(true);
    }
  });

  it("hides the same hubs in the footer", () => {
    const hrefs = visibleFooterNav(hidden).flatMap((column) =>
      column.links.map((link) => link.href),
    );
    for (const hub of hidden) {
      expect(hrefs, `${hub} is empty but promoted in the footer`).not.toContain(hub);
    }
  });

  it("keeps every hidden hub reachable, because the site map renders the full menu", () => {
    const allFooterHrefs = footerNav.flatMap((column) => column.links.map((link) => link.href));
    for (const hub of hidden) {
      expect(allFooterHrefs, `${hub} has no route into it at all`).toContain(hub);
    }
  });

  it("drops a nav column only when every link in it is gated away", () => {
    for (const group of visiblePrimaryNav(hidden)) {
      for (const column of group.columns ?? []) {
        expect(column.links.length, `${group.label} / ${column.heading}`).toBeGreaterThan(0);
      }
    }
  });
});
