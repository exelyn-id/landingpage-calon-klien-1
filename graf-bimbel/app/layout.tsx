import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRAF Bimbel Online - SD, SMP, SMA, Olimpiade & SNBT",
  description: "GRAF Bimbel Online menyediakan bimbingan belajar online untuk SD, SMP, SMA, Olimpiade, dan SNBT dengan sistem 1 guru 1 siswa dan kurikulum Nasional--Internasional.",
  openGraph: {
    title: "GRAF Bimbel Online - SD, SMP, SMA, Olimpiade & SNBT",
    description: "GRAF Bimbel Online menyediakan bimbingan belajar online untuk SD, SMP, SMA, Olimpiade, dan SNBT dengan sistem 1 guru 1 siswa dan kurikulum Nasional--Internasional.",
    siteName: "GRAF Bimbel Online",
    locale: "id_ID",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-cream text-text">
        {children}
      </body>
    </html>
  );
}
