import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "JS Store - Preloved Thrift Branded di Jakarta";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const imagePath = join(process.cwd(), "public", "images", "logo.jpg");
  const imageData = readFileSync(imagePath).toString("base64");
  const logoSrc = `data:image/jpeg;base64,${imageData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAF9",
          padding: "48px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
          <img src={logoSrc} style={{ width: "100px", height: "100px", borderRadius: "50%", border: "4px solid #27272A", objectFit: "cover" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#18181B" }}>JS Store</span>
            <span style={{ fontSize: "20px", color: "#27272A", fontWeight: 600, letterSpacing: "1px" }}>FASHION / THRIFT PRELOVED</span>
          </div>
        </div>
        <h1 style={{ fontSize: "44px", fontWeight: "bold", color: "#18181B", textAlign: "center", margin: "0 0 16px 0", lineHeight: 1.2, maxWidth: "920px" }}>JS Store - Preloved Thrift Branded di Jakarta</h1>
        <p style={{ fontSize: "24px", color: "#71717A", textAlign: "center", margin: "0 0 32px 0", maxWidth: "850px" }}>Preloved - Luxury - Casual - Vintage</p>
        <div style={{ background: "#27272A", color: "white", padding: "10px 24px", borderRadius: "9999px", fontSize: "18px", fontWeight: "bold" }}>@jsstore_2nd</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
