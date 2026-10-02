import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "MathGenius Academy | Bimbel SD-SMA, Cambridge, IB & Persiapan Tes",
  description:
    "MathGenius Academy menyediakan les semua mata pelajaran SD-SMA untuk Kurikulum Nasional, Cambridge, dan IB, serta persiapan SNBT, SAT, GMAT, TPA, Olimpiade, dan TKA.",
  openGraph: {
    title: "MathGenius Academy — Bimbingan Belajar untuk Berbagai Target Akademik",
    description:
      "Les SD-SMA, Kurikulum Nasional/Cambridge/IB, persiapan SNBT, SAT, GMAT, TPA, Olimpiade, dan TKA.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MathGenius Academy",
    "description": "Bimbingan belajar untuk SD-SMA, berbagai kurikulum, persiapan tes, Olimpiade, dan TKA.",
    "telephone": "+6289523609475",
    "url": "https://mathgenius.academy", // Placeholder, adjust if true url is known
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-white text-navy-950`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {children}
      </body>
    </html>
  );
}
