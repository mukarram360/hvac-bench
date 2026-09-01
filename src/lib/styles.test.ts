import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("responsive article layout", () => {
  it("keeps the article body before the reference rail on mobile", () => {
    const css = readFileSync("src/app/globals.css", "utf8");
    const mobile = css.slice(
      css.indexOf("@media (max-width: 760px)"),
      css.indexOf("@media (max-width: 410px)"),
    );

    expect(mobile).not.toMatch(/\.article-rail\s*\{[^}]*grid-row\s*:/);
  });

  it("uses AA-contrast text tokens and the darker signal for buttons", () => {
    const css = readFileSync("src/app/globals.css", "utf8");
    const hex = (token: string) =>
      css.match(new RegExp(`--${token}:\\s*(#[0-9a-f]{6})`, "i"))?.[1] ?? "";
    const luminance = (color: string) => {
      const channels = color.slice(1).match(/.{2}/g)!.map((value) => {
        const channel = Number.parseInt(value, 16) / 255;
        return channel <= 0.03928
          ? channel / 12.92
          : ((channel + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
    };
    const contrast = (first: string, second: string) => {
      const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
      return (values[0] + 0.05) / (values[1] + 0.05);
    };

    expect(contrast(hex("muted"), hex("paper"))).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#ffffff", hex("signal-dark"))).toBeGreaterThanOrEqual(4.5);
    expect(css).toMatch(/\.button\.primary\s*\{[^}]*background:\s*var\(--signal-dark\)/);
    expect(css).toMatch(/\.method-band \.eyebrow\s*\{\s*color:\s*#ffffff;/);
  });
});
