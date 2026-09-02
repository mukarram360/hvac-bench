import { ImageResponse } from "next/og";

import type { GlossaryTerm, TechnicalArticle } from "@/content/schema";
import { getBrandBySlug, glossaryCategoryLabel } from "@/lib/content";

export const ogSize = { width: 1200, height: 630 };

/**
 * Social and answer-engine preview card for a technical page, drawn as the same
 * data plate the site uses: the code large and monospaced, the scope beneath it.
 */
export function articleOgImage(article: TechnicalArticle) {
  const brand = article.brand ? getBrandBySlug(article.brand) : undefined;
  const heading = article.title.includes(":")
    ? article.title.split(":").slice(1).join(":").trim()
    : article.title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b2028",
          color: "#f6f7f4",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 46,
                height: 46,
                border: "1px solid #2d5460",
                borderBottom: "4px solid #df5627",
                fontSize: 19,
                fontWeight: 700,
              }}
            >
              HB
            </span>
            <span style={{ fontSize: 24, fontWeight: 700 }}>HVAC Bench</span>
          </div>
          <span style={{ color: "#8fb1ac", fontSize: 17, letterSpacing: 2 }}>
            {brand ? brand.name.toUpperCase() : "TROUBLESHOOTING"}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 40 }}>
          {article.errorCode && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#8fb1ac", fontSize: 16, letterSpacing: 2, marginBottom: 10 }}>
                CODE
              </span>
              <span
                style={{
                  fontSize: 96,
                  fontWeight: 700,
                  color: "#ff8f61",
                  lineHeight: 1,
                  letterSpacing: -2,
                }}
              >
                {article.errorCode}
              </span>
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
            <span style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.14, letterSpacing: -1 }}>
              {heading}
            </span>
            <span style={{ marginTop: 18, fontSize: 22, color: "#a9c1bd", lineHeight: 1.35 }}>
              {article.productFamily ?? "Cross-brand guidance. Confirm your model before applying it."}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #22434e",
            paddingTop: 20,
            color: "#a9c1bd",
            fontSize: 18,
          }}
        >
          <span>
            {article.reviewStatus === "source-verified" ? "Source verified" : "Editorial review"} ·
            Reviewed {article.lastReviewed}
          </span>
          <span>hvac-bench.com</span>
        </div>
      </div>
    ),
    ogSize,
  );
}

/**
 * Social and answer-engine card for a defined term. Same data plate, with the
 * term where the code normally sits and the first plate row beneath it, so a
 * card that appears without its page still carries the unit and the scope.
 */
export function glossaryOgImage(term: GlossaryTerm) {
  const summary = term.shortAnswer ?? term.definition;
  const strapline = summary.length > 150 ? `${summary.slice(0, 147).trimEnd()}...` : summary;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b2028",
          color: "#f6f7f4",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 46,
                height: 46,
                border: "1px solid #2d5460",
                borderBottom: "4px solid #df5627",
                fontSize: 19,
                fontWeight: 700,
              }}
            >
              HB
            </span>
            <span style={{ fontSize: 24, fontWeight: 700 }}>HVAC Bench</span>
          </div>
          <span style={{ color: "#8fb1ac", fontSize: 17, letterSpacing: 2 }}>
            {glossaryCategoryLabel(term.category).toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <span style={{ color: "#8fb1ac", fontSize: 16, letterSpacing: 2, marginBottom: 12 }}>
            GLOSSARY
          </span>
          <span
            style={{
              fontSize: term.term.length > 22 ? 62 : 82,
              fontWeight: 700,
              color: "#ff8f61",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {term.term}
          </span>
          <span style={{ marginTop: 20, fontSize: 25, color: "#d5e2df", lineHeight: 1.35 }}>
            {strapline}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #22434e",
            paddingTop: 20,
            color: "#a9c1bd",
            fontSize: 18,
          }}
        >
          <span>{term.facts[0] ? `${term.facts[0].label}: ${term.facts[0].value}` : "Defined term"}</span>
          <span>hvac-bench.com/glossary</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
