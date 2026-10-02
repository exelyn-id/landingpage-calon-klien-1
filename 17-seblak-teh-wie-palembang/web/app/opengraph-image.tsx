import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Seblak Teh Wie 2 Palembang";
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
          background: "linear-gradient(135deg, #FFF7ED 0%, #FDECEA 50%, #FFFFFF 100%)",
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
            background: "rgba(0, 0, 0, 0.06)",
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
              border: "4px solid #D92B1F",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#2A1210" }}>
              Seblak Teh Wie 2
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#D92B1F",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              KULINER
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#2A1210",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Seblak Prasmanan Racik Sendiri di Palembang
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#8A5A54",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Baso Aci 20K - Tahu Kocek 15K - Buka Tiap Hari 11.30-Malam
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#D92B1F",
              color: "white",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Racik Sendiri
          </div>
          <div
            style={{
              background: "#FDECEA",
              color: "#7F1D1D",
              border: "2px solid #D92B1F",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Mulai Rp15rb
          </div>
          <div
            style={{
              background: "#FDECEA",
              color: "#7F1D1D",
              border: "2px solid #D92B1F",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Order via WA
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
