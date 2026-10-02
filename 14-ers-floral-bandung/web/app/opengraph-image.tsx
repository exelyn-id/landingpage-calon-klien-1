import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "ers.floral — Florist Buket Bunga Handcrafted di Bandung, Mulai Rp30 Ribu";
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
          background: "linear-gradient(135deg, #FFFAFB 0%, #FBE9EF 50%, #FFFFFF 100%)",
          padding: "48px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "#C4839B26",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <img
            src={logoSrc}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid #C4839B",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#462832" }}>
              ers.floral
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#C4839B",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              FLORIST • HANDCRAFTED BLOOMS • BANDUNG
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "46px",
            fontWeight: "bold",
            color: "#462832",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Buket Bunga Handcrafted di Bandung, Mulai Rp30 Ribu
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#96707D",
            textAlign: "center",
            margin: 0,
            maxWidth: "850px",
          }}
        >
          Bandung • Order H-3 (pre-order 3 hari sebelumnya)
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
