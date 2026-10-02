import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Dimsum Sembilan Ayam - Dimsum Halal di Bandung";
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
          background: "#FFF8F5",
          padding: "48px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
          <img src={logoSrc} style={{ width: "100px", height: "100px", borderRadius: "50%", border: "4px solid #B91C1C", objectFit: "cover" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#450A0A" }}>Dimsum 9 Ayam</span>
            <span style={{ fontSize: "20px", color: "#B91C1C", fontWeight: 600, letterSpacing: "1px" }}>RESTO DIMSUM HALAL</span>
          </div>
        </div>
        <h1 style={{ fontSize: "44px", fontWeight: "bold", color: "#450A0A", textAlign: "center", margin: "0 0 16px 0", lineHeight: 1.2, maxWidth: "920px" }}>Dimsum Sembilan Ayam - Dimsum Halal di Bandung</h1>
        <p style={{ fontSize: "24px", color: "#8A6B6B", textAlign: "center", margin: "0 0 32px 0", maxWidth: "850px" }}>Dimsum - Bakmie - Bubur - Halal</p>
        <div style={{ background: "#B91C1C", color: "white", padding: "10px 24px", borderRadius: "9999px", fontSize: "18px", fontWeight: "bold" }}>@dimsum9ayam</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
