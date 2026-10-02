import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { faqs } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#A16207",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Amar Bakery - Toko Roti Rumahan di Surabaya",
    template: "%s | Amar Bakery Surabaya",
  },
  description: "Amar Bakery Surabaya, toko roti rumahan di Sememi. Roti harian, brownie, pie, oatmeal cookies, Royal series. Terima pesanan, bisa via Gosend. Order via WA.",
  keywords: [
    "amar bakery",
    "toko roti surabaya",
    "roti rumahan surabaya",
    "brownie surabaya",
    "oatmeal cookies surabaya",
    "royal series bakery",
  ],
  authors: [{ name: "Amar Bakery Surabaya" }],
  creator: "Amar Bakery Surabaya",
  publisher: "Amar Bakery Surabaya",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Amar Bakery - Toko Roti Rumahan di Surabaya",
    description: "Roti harian, brownie, pie, oatmeal cookies, Royal series. Terima pesanan, bisa via Gosend.",
    siteName: "Amar Bakery Surabaya",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/logo.jpg", width: 800, height: 800, alt: "Amar Bakery Surabaya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amar Bakery - Toko Roti Rumahan di Surabaya",
    description: "Roti harian, brownie, pie, oatmeal cookies, Royal series. Terima pesanan, bisa via Gosend.",
    images: ["/images/logo.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  category: "Bakery Rumahan / Toko Roti",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Amar Bakery Surabaya",
    description: "Amar Bakery Surabaya, toko roti rumahan di Sememi. Roti harian, brownie, pie, oatmeal cookies, Royal series. Terima pesanan, bisa via Gosend. Order via WA.",
    telephone: "+628812537786",
    address: { "@type": "PostalAddress", streetAddress: "Griya Citra Asri RM 15 No.17, Sememi, Surabaya", addressLocality: "Surabaya", addressCountry: "ID" },
    openingHours: "05.30-14.00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Amar Bakery Surabaya",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roti Rumahan Harian",
            description: "Roti fresh untuk konsumsi harian keluarga.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brownie",
            description: "Brownie padat dan nyokelat favorit pelanggan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pie",
            description: "Aneka pie manis untuk camilan dan bingkisan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Oatmeal Cookies",
            description: "Cookies renyah dengan oatmeal, cocok untuk stok camilan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Royal Series",
            description: "Varian premium Royal series dari Amar Bakery.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pesan Antar Gosend",
            description: "Tidak sempat datang? Pesanan bisa dikirim via Gosend.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <html lang="id" className={`${plusJakarta.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-text selection:bg-primary selection:text-white">{children}</body>
    </html>
  );
}
