import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "WetPaws JKT — Pet Grooming, Dogpark & Pethotel di Cakung, Jakarta Timur";
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
          background: "linear-gradient(135deg, #FFFBEB 0%, #FFEDD5 50%, #FFFFFF 100%)",
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
            background: "#E8590C26",
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
              border: "4px solid #E8590C",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#292524" }}>
              WetPaws JKT
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#E8590C",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              PET GROOMING • DOGPARK • PETHOTEL
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "46px",
            fontWeight: "bold",
            color: "#292524",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Grooming, Dogpark & Pethotel di Cakung, Jakarta Timur
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#8A7A70",
            textAlign: "center",
            margin: 0,
            maxWidth: "850px",
          }}
        >
          Pulo Gebang Permai, Cakung, Jakarta Timur • 09.00–18.00
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
