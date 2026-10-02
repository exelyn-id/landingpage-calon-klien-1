import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Cielo Nail Studio - Nail Art Studio di Cipete, Jakarta Selatan";
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
          background: "#FAEBED",
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
            background: "#BE7E8A33",
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
            alt="Cielo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid #BE7E8A",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#3A2A2E" }}>
              Cielo
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#BE7E8A",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              NAIL ART STUDIO
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#3A2A2E",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Kuku Cantik & Rapi di Nail Studio Cipete Jakarta Selatan
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#9A7F85",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Cipete, Jakarta Selatan - 10.00-21.00 Senin-Minggu
        </p>

        <div
          style={{
            background: "#BE7E8A",
            color: "white",
            padding: "10px 24px",
            borderRadius: "9999px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Booking via WA via WhatsApp
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
