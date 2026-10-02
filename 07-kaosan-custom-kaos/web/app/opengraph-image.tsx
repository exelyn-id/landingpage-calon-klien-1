import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Kaosan - Brand Lokal & Custom Kaos DTF Mulai Rp65rb";
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
          background: "#FFEDD5",
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
            background: "#EA580C33",
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
            alt="Kaosan"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid #EA580C",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#211611" }}>
              Kaosan
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#EA580C",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              BRAND KAOS / SABLON CUSTOM
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#211611",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Bikin Kaos Custom Satuan, Free Desain Mulai Rp65rb
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#8A7364",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Indonesia - Buka setiap hari
        </p>

        <div
          style={{
            background: "#EA580C",
            color: "white",
            padding: "10px 24px",
            borderRadius: "9999px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Order via WA via WhatsApp
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
