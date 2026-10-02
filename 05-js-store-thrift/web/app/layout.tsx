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
  themeColor: "#27272A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "JS Store - Preloved Thrift Branded di Jakarta",
    template: "%s | JS Store Preloved Thrift",
  },
  description: "JS Store Preloved Thrift di Jakarta sejak 2022. Fred Perry, casual luxury, dan vintage. Drop harian, bayar BCA/DANA, gratis ongkir Jabodetabek. Order via WA.",
  keywords: [
    "js store",
    "thrift jakarta",
    "preloved jakarta",
    "fred perry preloved",
    "thrift branded jakarta",
    "vintage thrift jakarta",
  ],
  authors: [{ name: "JS Store Preloved Thrift" }],
  creator: "JS Store Preloved Thrift",
  publisher: "JS Store Preloved Thrift",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "JS Store - Preloved Thrift Branded di Jakarta",
    description: "Fred Perry, casual luxury, dan vintage sejak 2022. Drop harian, gratis ongkir Jabodetabek.",
    siteName: "JS Store Preloved Thrift",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/logo.jpg", width: 800, height: 800, alt: "JS Store Preloved Thrift" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JS Store - Preloved Thrift Branded di Jakarta",
    description: "Fred Perry, casual luxury, dan vintage sejak 2022. Drop harian, gratis ongkir Jabodetabek.",
    images: ["/images/logo.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  category: "Fashion / Thrift Preloved",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "JS Store Preloved Thrift",
    description: "JS Store Preloved Thrift di Jakarta sejak 2022. Fred Perry, casual luxury, dan vintage. Drop harian, bayar BCA/DANA, gratis ongkir Jabodetabek. Order via WA.",
    telephone: "+6281398869711",
    address: { "@type": "PostalAddress", streetAddress: "Jakarta (toko online)", addressLocality: "Jakarta", addressCountry: "ID" },
    openingHours: "Online",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan JS Store Preloved Thrift",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Preloved Luxury",
            description: "Koleksi preloved branded pilihan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Casual Favorit",
            description: "Casual wear termasuk Fred Perry dan sejenisnya.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vintage & Rare",
            description: "Item vintage dan rare untuk kolektor.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drop Harian",
            description: "Stok baru hampir tiap hari, pantau highlight IG.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sold Proof & Testimoni",
            description: "Bukti sold dan testimoni transparan di highlight.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Request / Tanya Stok",
            description: "Cari item tertentu? Tanya langsung ke admin.",
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
