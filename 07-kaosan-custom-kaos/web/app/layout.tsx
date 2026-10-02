import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { faqs, programs } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#EA580C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Kaosan - Brand Lokal & Custom Kaos DTF Mulai Rp65rb",
    template: "%s | Kaosan",
  },
  description: "Kaosan, brand lokal dan custom kaos DTF free desain mulai Rp65rb. Bahan Cotton Combed 24s, 30s dan jersey. Buka setiap hari, order via WA.",
  keywords: ["Kaosan", "custom kaos", "sablon DTF", "kaos satuan", "cotton combed 24s", "sablon kaos murah", "kaosan.co.id"],
  authors: [{ name: "Kaosan Brand dan Custom Kaos" }],
  creator: "Kaosan",
  publisher: "Kaosan Brand dan Custom Kaos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kaosan - Brand Lokal & Custom Kaos DTF Mulai Rp65rb",
    description: "Kaosan, brand lokal dan custom kaos DTF free desain mulai Rp65rb. Bahan Cotton Combed 24s, 30s dan jersey. Buka setiap hari, order via WA.",
    siteName: "Kaosan Brand dan Custom Kaos",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaosan - Brand Lokal & Custom Kaos DTF Mulai Rp65rb",
    description: "Kaosan, brand lokal dan custom kaos DTF free desain mulai Rp65rb. Bahan Cotton Combed 24s, 30s dan jersey. Buka setiap hari, order via WA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Brand Kaos / Sablon Custom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Kaosan Brand dan Custom Kaos",
    url: "https://www.instagram.com/kaosan.co.id/",
    sameAs: ["https://www.instagram.com/kaosan.co.id/"],
    description: "Kaosan, brand lokal dan custom kaos DTF free desain mulai Rp65rb. Bahan Cotton Combed 24s, 30s dan jersey. Buka setiap hari, order via WA.",
    telephone: "+6285184615282",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID"
    },
        openingHours: "Mo-Su",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Kaosan Brand dan Custom Kaos",
      itemListElement: programs.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: p.title,
          description: p.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-text selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
