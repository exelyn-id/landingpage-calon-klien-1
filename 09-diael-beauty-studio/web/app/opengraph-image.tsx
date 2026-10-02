import { ImageResponse } from "next/og";

export const alt = "Diael Beauty Studio - Lash, Brow & Nail Studio di Surabaya";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Diael Beauty Studio tidak memiliki file logo: OG image memakai inisial teks,
// tanpa membaca file apa pun agar tidak crash saat build.
export default function Image() {
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
          background: "#FCE7F3",
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
            background: "#EC489933",
          }}
        />

        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "#EC4899",
            color: "white",
            fontSize: "56px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          D
        </div>

        <div
          style={{
            fontSize: "44px",
            fontWeight: "bold",
            color: "#3A1F2C",
            marginBottom: "8px",
          }}
        >
          Diael
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#EC4899",
            fontWeight: 600,
            letterSpacing: "1px",
            marginBottom: "24px",
          }}
        >
          LASH / BROW / NAIL STUDIO
        </div>

        <h1
          style={{
            fontSize: "44px",
            fontWeight: "bold",
            color: "#3A1F2C",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Lash, Brow & Nail Art Mulai Rp25rb di Surabaya
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#A07E8D",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Surabaya - 11.00-20.00
        </p>

        <div
          style={{
            background: "#EC4899",
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
