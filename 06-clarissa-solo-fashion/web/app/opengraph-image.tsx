import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "CLARISSA Solo Fashion Wanita - Boutique Fashion Wanita di Solo";
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
          background: "#FCE8EF",
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
            background: "#C1355E33",
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
            alt="CLARISSA"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid #C1355E",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#33202A" }}>
              CLARISSA
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#C1355E",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              BOUTIQUE / FASHION WANITA
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#33202A",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Tampil Kekinian Setiap Minggu dengan Outfit Terbaru di Solo
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#96707E",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Solo, Jawa Tengah - 08.00-21.00 setiap hari
        </p>

        <div
          style={{
            background: "#C1355E",
            color: "white",
            padding: "10px 24px",
            borderRadius: "9999px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Chat WA Admin via WhatsApp
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
