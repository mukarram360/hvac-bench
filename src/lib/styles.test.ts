import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync("src/app/globals.css", "utf8");

function hex(token: string) {
  return css.match(new RegExp(`--${token}:\\s*(#[0-9a-f]{6})`, "i"))?.[1] ?? "";
}

function luminance(color: string) {
  const channels = color
    .slice(1)
    .match(/.{2}/g)!
    .map((value) => {
      const channel = Number.parseInt(value, 16) / 255;
      return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(first: string, second: string) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

describe("colour system", () => {
  it("meets AA contrast for body, secondary, and link text on paper", () => {
    expect(contrast(hex("ink"), hex("paper"))).toBeGreaterThanOrEqual(4.5);
    expect(contrast(hex("muted"), hex("paper"))).toBeGreaterThanOrEqual(4.5);
    expect(contrast(hex("signal-dark"), hex("paper"))).toBeGreaterThanOrEqual(4.5);
    expect(contrast(hex("verify"), hex("paper"))).toBeGreaterThanOrEqual(4.5);
    expect(contrast(hex("caution"), hex("caution-soft"))).toBeGreaterThanOrEqual(4.5);
  });

  it("meets AA contrast for text on ink and on the primary button", () => {
    expect(contrast("#ffffff", hex("ink"))).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#ffffff", hex("signal-dark"))).toBeGreaterThanOrEqual(4.5);
    expect(contrast(hex("signal-bright"), hex("ink"))).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#ffffff", hex("verify"))).toBeGreaterThanOrEqual(4.5);
  });

  it("uses the darker signal for primary buttons rather than the graphic accent", () => {
    expect(css).toMatch(/\.btn-primary\s*\{[^}]*background:\s*var\(--signal-dark\)/);
  });
});

describe("layout contract", () => {
  it("keeps the reference rail after the article body until the desktop breakpoint", () => {
    const desktop = css.slice(css.indexOf("@media (min-width: 1024px)"));
    expect(desktop).toMatch(/\.article-layout\s*\{[^}]*grid-template-columns/);
    expect(css).not.toMatch(/\.rail\s*\{[^}]*grid-row\s*:/);
  });

  it("gives interactive controls a touch-sized target", () => {
    expect(css).toMatch(/\.btn\s*\{[^}]*min-height:\s*4[4-9]px/);
    expect(css).toMatch(/\.drawer-group\s*>\s*summary\s*\{[^}]*min-height:\s*5\dpx/);
    expect(css).toMatch(/\.drawer-links a\s*\{[^}]*min-height:\s*4[4-9]px/);
  });

  it("respects reduced motion and keeps a visible focus ring", () => {
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toMatch(/:focus-visible\s*\{[^}]*outline:\s*3px solid/);
  });

  it("sets a readable base size and measure for long-form reading", () => {
    expect(css).toMatch(/--fs-base:\s*1\.0625rem/);
    expect(css).toMatch(/--w-prose:\s*7\dch/);
    expect(css).toMatch(/\.prose\s*\{[^}]*line-height:\s*1\.7/);
  });

  it("keeps diagnostic tables and signal paths usable on narrow screens", () => {
    expect(css).toMatch(/\.diagnostic-table-wrap\s*\{[^}]*overflow-x:\s*auto/);
    expect(css).toMatch(/\.diagnostic-table\s*\{[^}]*min-width:\s*6\d{2}px/);
    expect(css).toMatch(/\.signal-path\s*\{[^}]*grid-template-columns:\s*1fr/);

    const wideSignalPath = css.match(
      /@media \(min-width: 700px\)\s*\{[\s\S]*?\.signal-path\s*\{[^}]*grid-template-columns:\s*repeat\(auto-fit,/,
    );
    expect(wideSignalPath).not.toBeNull();
  });
});
