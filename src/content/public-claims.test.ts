import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { articles } from "./articles";
import { sources } from "./sources";
import { articleJsonLd } from "@/lib/seo";

/**
 * HVAC Bench keeps every OEM URL in the repository so a claim can be traced
 * internally, but the published pages do not send a reader out to the
 * manufacturer. These tests hold both halves of that rule at once: the
 * evidence must stay complete, and no public surface may leak a source URL or
 * promise a link that no longer exists.
 */

const projectRoot = path.join(import.meta.dirname, "..", "..");

function readProjectFile(relativePath: string) {
  return readFileSync(path.join(projectRoot, relativePath), "utf8");
}

const publicSurfaces = [
  "src/components/article-page.tsx",
  "src/components/article-content-blocks.tsx",
  "src/components/trust-page.tsx",
  "src/components/format-hub.tsx",
  "src/components/site-footer.tsx",
  "src/app/page.tsx",
  "src/app/guides/page.tsx",
  "src/app/sources-methodology/page.tsx",
  "src/app/editorial-policy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/llms.txt/route.ts",
  "src/app/faq/page.tsx",
  "src/app/about/page.tsx",
  "src/app/opengraph-image.tsx",
  "src/lib/seo.ts",
];

describe("evidence stays internal and complete", () => {
  it("keeps a resolvable OEM URL for every cited source", () => {
    for (const source of sources) {
      expect(source.url, `${source.id} must keep its evidence URL`).toMatch(
        /^https:\/\//,
      );
    }
  });

  it("keeps every article mapped to stored evidence", () => {
    const known = new Set(sources.map((source) => source.id));
    for (const article of articles) {
      expect(article.sourceIds.length).toBeGreaterThan(0);
      for (const id of article.sourceIds) {
        expect(known, `${article.slug} cites unknown evidence ${id}`).toContain(id);
      }
    }
  });
});

describe("public pages do not publish an outbound source journey", () => {
  it("renders no manufacturer URL on any public surface", () => {
    const publisherHosts = Array.from(
      new Set(
        sources.map((source) => new URL(source.url).hostname.replace(/^www\./, "")),
      ),
    );

    for (const surface of publicSurfaces) {
      const contents = readProjectFile(surface);
      for (const host of publisherHosts) {
        expect(contents, `${surface} must not link to ${host}`).not.toContain(host);
      }
    }
  });

  it("keeps internal evidence URLs out of published article schema", () => {
    const evidenceUrls = new Set(sources.map((source) => source.url));

    for (const article of articles) {
      const publishedSchema = JSON.stringify(articleJsonLd(article));
      for (const url of evidenceUrls) {
        expect(publishedSchema, `${article.path} publishes ${url}`).not.toContain(url);
      }
    }
  });

  it("does not promise visible source links in public copy", () => {
    const forbidden = [
      /listed at the foot of the page/i,
      /listed at the foot of every technical page/i,
      /sources listed on every page/i,
      /sources listed/i,
      /links to the manufacturer/i,
      /source links/i,
      /link the documentation/i,
      /documentation .* cited on the page/i,
      /pages link to manufacturer manuals/i,
      /external links to manufacturer documentation/i,
      /each page names its sources at the foot/i,
    ];

    for (const surface of publicSurfaces) {
      const contents = readProjectFile(surface);
      for (const pattern of forbidden) {
        expect(
          pattern.test(contents),
          `${surface} promises a public source link (${pattern})`,
        ).toBe(false);
      }
    }
  });

  it("states consistently that OEM evidence is retained internally and not publicly linked", () => {
    const policySurfaces = [
      "src/app/page.tsx",
      "src/app/guides/page.tsx",
      "src/app/editorial-policy/page.tsx",
      "src/app/sources-methodology/page.tsx",
    ];

    for (const surface of policySurfaces) {
      const contents = readProjectFile(surface);
      expect(contents, `${surface} must state that evidence is retained internally`).toMatch(
        /retained internally/i,
      );
      expect(contents, `${surface} must state that evidence is not publicly linked`).toMatch(
        /not publicly linked/i,
      );
    }
  });

  it("publishes no dealer, booking, or local-pro claims", () => {
    const forbidden = [
      /\bdealer\b/i,
      /\bbooking\b/i,
      /\blocal[- ]pro\b/i,
      /find (?:a|an) (?:local )?(?:dealer|installer|contractor)/i,
      /(?:book|schedule) (?:a|an|your) (?:visit|appointment|service)/i,
      /get (?:a|your) quote/i,
    ];

    for (const surface of publicSurfaces) {
      const contents = readProjectFile(surface);
      for (const pattern of forbidden) {
        expect(
          pattern.test(contents),
          `${surface} contains a public service-marketplace claim (${pattern})`,
        ).toBe(false);
      }
    }
  });

  it("keeps no target=_blank source escape hatch on the article template", () => {
    const template = readProjectFile("src/components/article-page.tsx");
    expect(template).not.toContain("source.url");
    expect(template).not.toContain('target="_blank"');
  });
});
