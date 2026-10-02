import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Blade House Barbershop Jakarta";
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
          background: "linear-gradient(135deg, #F7F7F5 0%, #ECECEC 50%, #FFFFFF 100%)",
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
              border: "4px solid #262626",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#141414" }}>
              Blade House
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#262626",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              BARBERSHOP
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#141414",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Blade House Barbershop - Kebayoran Baru Jaksel
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#6E6E6E",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Cut - Fade - Beard Trim - Buka Sen-Min 11.00-22.00
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
              background: "#262626",
              color: "white",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Walk In Bisa
          </div>
          <div
            style={{
              background: "#ECECEC",
              color: "#0A0A0A",
              border: "2px solid #262626",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Buka Tiap Hari
          </div>
          <div
            style={{
              background: "#ECECEC",
              color: "#0A0A0A",
              border: "2px solid #262626",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Reservasi WA
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
