import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Hypergrafi - Fotografer Freelance Bandung";
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
          background: "#F1F1F2",
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
            background: "#27272A33",
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
            alt="Hypergrafi"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid #27272A",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#18181B" }}>
              Hypergrafi
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#27272A",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              JASA FOTOGRAFI
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#18181B",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Abadikan Momen Berharga dengan Fotografer Bandung
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#71717A",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Bandung - By appointment
        </p>

        <div
          style={{
            background: "#27272A",
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
