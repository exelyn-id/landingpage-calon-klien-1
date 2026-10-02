import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Kedai KopiKita - Coffee Shop Cozy di Sleman";
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
          background: "#FAF6F0",
          padding: "48px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
          <img src={logoSrc} style={{ width: "100px", height: "100px", borderRadius: "50%", border: "4px solid #8B5E34", objectFit: "cover" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#2B1D12" }}>KopiKita</span>
            <span style={{ fontSize: "20px", color: "#8B5E34", fontWeight: 600, letterSpacing: "1px" }}>COFFEE SHOP / KEDAI KOPI</span>
          </div>
        </div>
        <h1 style={{ fontSize: "44px", fontWeight: "bold", color: "#2B1D12", textAlign: "center", margin: "0 0 16px 0", lineHeight: 1.2, maxWidth: "920px" }}>Kedai KopiKita - Coffee Shop Cozy di Sleman</h1>
        <p style={{ fontSize: "24px", color: "#8A7A6B", textAlign: "center", margin: "0 0 32px 0", maxWidth: "850px" }}>Espresso - Manual Brew - Main Course - Dessert</p>
        <div style={{ background: "#8B5E34", color: "white", padding: "10px 24px", borderRadius: "9999px", fontSize: "18px", fontWeight: "bold" }}>@k.kopikita</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
