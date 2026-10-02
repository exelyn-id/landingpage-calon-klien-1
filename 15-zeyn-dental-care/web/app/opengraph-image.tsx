import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Zeyn Dental Care — Klinik Gigi di Depok & Bekasi";
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
          background: "linear-gradient(135deg, #F7FCFF 0%, #E0F2FE 50%, #FFFFFF 100%)",
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
            background: "#0284C726",
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
              border: "4px solid #0284C7",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#0B2233" }}>
              Zeyn Dental Care
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#0284C7",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              KLINIK GIGI • DEPOK & BEKASI
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "46px",
            fontWeight: "bold",
            color: "#0B2233",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Klinik Gigi di Depok & Bekasi
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#5B7A90",
            textAlign: "center",
            margin: 0,
            maxWidth: "850px",
          }}
        >
          Sukmajaya, Depok & Kranggan, Bekasi • 10.00–20.00, Senin tutup
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
