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
  themeColor: "#D92B1F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Seblak Teh Wie 2 Palembang - Seblak Prasmanan di Jl. Cipto",
    template: "%s | Seblak Teh Wie 2",
  },
  description: "Seblak Teh Wie 2 di Jln. Dokter Cipto No.2, Palembang. Seblak prasmanan racik sendiri, Baso Aci 20K, Tahu Kocek 15K & Mie Ayam Bandung. Buka tiap hari. Order via WA.",
  keywords: ["seblak palembang", "seblak teh wie", "seblak prasmanan palembang", "seblak baso aci", "mie ayam bandung palembang", "kuliner palembang"],
  authors: [{ name: "Seblak Teh Wie 2 Palembang" }],
  creator: "Seblak Teh Wie 2",
  publisher: "Seblak Teh Wie 2 Palembang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Seblak Teh Wie 2 Palembang - Seblak Prasmanan di Jl. Cipto",
    description: "Seblak Teh Wie 2 di Jln. Dokter Cipto No.2, Palembang. Seblak prasmanan racik sendiri, Baso Aci 20K, Tahu Kocek 15K & Mie Ayam Bandung. Buka tiap hari. Order via WA.",
    siteName: "Seblak Teh Wie 2 Palembang",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo Seblak Teh Wie 2 Palembang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seblak Teh Wie 2 Palembang - Seblak Prasmanan di Jl. Cipto",
    description: "Seblak Teh Wie 2 di Jln. Dokter Cipto No.2, Palembang. Seblak prasmanan racik sendiri, Baso Aci 20K, Tahu Kocek 15K & Mie Ayam Bandung. Buka tiap hari. Order via WA.",
    images: ["/images/logo.jpg"],
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
  category: "Kuliner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Seblak Teh Wie 2 Palembang",
    image: "/images/logo.jpg",
    description: "Seblak Teh Wie 2 di Jln. Dokter Cipto No.2, Palembang. Seblak prasmanan racik sendiri, Baso Aci 20K, Tahu Kocek 15K & Mie Ayam Bandung. Buka tiap hari. Order via WA.",
    telephone: "+6282190493545",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jln. Dokter Cipto No.2, Palembang",
      addressCountry: "ID",
    },
    priceRange: "Rp15.000+",
    
    sameAs: ["https://www.instagram.com/seblak_teh_wie2/"],
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
