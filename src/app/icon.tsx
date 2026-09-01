import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b2028",
          borderBottom: "7px solid #df5627",
          color: "#ffffff",
          fontSize: 26,
          fontWeight: 700,
          fontFamily: "Arial",
          letterSpacing: -1,
        }}
      >
        HB
      </div>
    ),
    size,
  );
}
