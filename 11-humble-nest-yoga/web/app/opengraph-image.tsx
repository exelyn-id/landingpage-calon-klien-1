import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Humble Nest Yoga — Home Yoga Studio di Lebak Bulus, Jakarta Selatan";
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
          background: "linear-gradient(135deg, #FDF9F1 0%, #F0E9DA 50%, #FFFFFF 100%)",
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
            background: "#7A654726",
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
              border: "4px solid #7A6547",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#2C261B" }}>
              Humble Nest Yoga
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#7A6547",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              HOME YOGA STUDIO • JAKARTA SELATAN
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "46px",
            fontWeight: "bold",
            color: "#2C261B",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Ruang Yoga Cozy untuk Memulai Perjalanan Yogamu
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#7D7462",
            textAlign: "center",
            margin: 0,
            maxWidth: "850px",
          }}
        >
          Dekat MRT Lebak Bulus, Jakarta Selatan • Jadwal mingguan (cek carousel Instagram)
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
