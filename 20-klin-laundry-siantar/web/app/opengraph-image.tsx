import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Mr Klin Laundry Siantar";
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
          background: "linear-gradient(135deg, #F4FAFF 0%, #E3F3FD 50%, #FFFFFF 100%)",
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
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#0B2533" }}>
              Mr Klin
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#0284C7",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              LAUNDRY
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#0B2533",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Mr Klin Laundry - Pematangsiantar
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#5B7A8C",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Paket Bulanan 30-75 Kg - Antar-Jemput Gratis
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
              background: "#0284C7",
              color: "white",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Paket Bulanan
          </div>
          <div
            style={{
              background: "#E3F3FD",
              color: "#0C4A6E",
              border: "2px solid #0284C7",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Antar Gratis
          </div>
          <div
            style={{
              background: "#E3F3FD",
              color: "#0C4A6E",
              border: "2px solid #0284C7",
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
