import { ImageResponse } from "next/og";

export const alt = "HVAC Bench — HVAC error codes, diagnostics, and troubleshooting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          padding: "60px 68px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 54,
                height: 54,
                background: "#0b2028",
                border: "1px solid #2d5460",
                borderBottom: "4px solid #df5627",
                color: "#fff",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              HB
            </span>
            <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>HVAC Bench</span>
          </div>
          <span style={{ color: "#8fb1ac", fontSize: 18, letterSpacing: 2 }}>
            EVIDENCE-BACKED REFERENCE
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ff8f61", fontSize: 20, letterSpacing: 3, marginBottom: 20 }}>
            ERROR CODES · DIAGNOSTICS · REPAIR LIMITS
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.08, maxWidth: 940, fontWeight: 700, letterSpacing: -1.5 }}>
            Find the fault code. Then find out what it means.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #22434e",
            paddingTop: 22,
            color: "#a9c1bd",
            fontSize: 19,
          }}
        >
          <span>Model scope stated · Evidence checked · Safety line drawn</span>
          <span>hvac-bench.com</span>
        </div>
      </div>
    ),
    size,
  );
}
