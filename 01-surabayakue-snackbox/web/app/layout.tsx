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
  themeColor: "#B45309",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "SurabayaKue - Snackbox & Kue Tradisional Halal di Surabaya",
    template: "%s | SurabayaKue - Kue Tradisional Bakery",
  },
  description: "SurabayaKue - Kue Tradisional Bakery di Merr, Surabaya. Snack box, nasi box, kue tampah, hantaran, dan tumpeng 100% halal. Buka 07.00-17.00. Order via WhatsApp.",
  keywords: [
    "surabayakue",
    "snackbox surabaya",
    "kue tradisional surabaya",
    "nasi box surabaya",
    "kue tampah surabaya",
    "hantaran surabaya",
    "nasi tumpeng surabaya",
    "coffee break unair",
  ],
  authors: [{ name: "SurabayaKue - Kue Tradisional Bakery" }],
  creator: "SurabayaKue - Kue Tradisional Bakery",
  publisher: "SurabayaKue - Kue Tradisional Bakery",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "SurabayaKue - Snackbox & Kue Tradisional Halal di Surabaya",
    description: "Snack box, nasi box, kue tampah, hantaran, dan tumpeng 100% halal di Merr, Surabaya. Order via WhatsApp.",
    siteName: "SurabayaKue - Kue Tradisional Bakery",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/logo.jpg", width: 800, height: 800, alt: "SurabayaKue - Kue Tradisional Bakery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SurabayaKue - Snackbox & Kue Tradisional Halal di Surabaya",
    description: "Snack box, nasi box, kue tampah, hantaran, dan tumpeng 100% halal di Merr, Surabaya. Order via WhatsApp.",
    images: ["/images/logo.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  category: "Bakery / Snackbox / Katering",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "SurabayaKue - Kue Tradisional Bakery",
    description: "SurabayaKue - Kue Tradisional Bakery di Merr, Surabaya. Snack box, nasi box, kue tampah, hantaran, dan tumpeng 100% halal. Buka 07.00-17.00. Order via WhatsApp.",
    telephone: "+6285931319252",
    address: { "@type": "PostalAddress", streetAddress: "Ruko Merr Square City 2H, Jl. Ir. Soekarno, Surabaya", addressLocality: "Surabaya", addressCountry: "ID" },
    openingHours: "07.00-17.00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan SurabayaKue - Kue Tradisional Bakery",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Snack Box",
            description: "Paket kue praktis untuk rapat, seminar, dan hajatan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nasi Box",
            description: "Nasi lengkap dengan lauk untuk acara kantor dan syukuran.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kue Tampah & Nampan",
            description: "Kue nampan isi 25 atau 90 untuk sajian acara besar.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hantaran",
            description: "Paket hantaran rapi untuk lamaran dan acara keluarga.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nasi Tumpeng",
            description: "Tumpeng isi 100 porsi untuk syukuran dan perayaan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cake & Jajan Pasar",
            description: "Aneka cake dan jajan pasar tradisional favorit.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Coffee Break Kampus",
            description: "Paket coffee break untuk acara kampus, termasuk Unair.",
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
