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
  themeColor: "#0284C7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Zeyn Dental Care — Klinik Gigi di Depok & Bekasi",
    template: `%s | Zeyn Dental Care`,
  },
  description: "Zeyn Dental Care adalah klinik dokter gigi dengan 2 cabang: Sukmajaya Depok dan Kranggan Bekasi. Layanan scaling, bleaching, cabut gigi, gigi anak, dan lainnya. Buka 10.00–20.00 (Senin tutup). Reservasi via WhatsApp.",
  keywords: [
    "zeyn dental care",
    "dokter gigi depok",
    "klinik gigi sukmajaya",
    "dokter gigi bekasi",
    "scaling gigi depok",
    "klinik gigi kranggan",
  ],
  authors: [{ name: "Zeyn Dental Care" }],
  creator: "Zeyn Dental Care",
  publisher: "Zeyn Dental Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zeyn Dental Care — Klinik Gigi di Depok & Bekasi",
    description: "Zeyn Dental Care adalah klinik dokter gigi dengan 2 cabang: Sukmajaya Depok dan Kranggan Bekasi. Layanan scaling, bleaching, cabut gigi, gigi anak, dan lainnya. Buka 10.00–20.00 (Senin tutup). Reservasi via WhatsApp.",
    siteName: "Zeyn Dental Care",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo Zeyn Dental Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeyn Dental Care — Klinik Gigi di Depok & Bekasi",
    description: "Zeyn Dental Care adalah klinik dokter gigi dengan 2 cabang: Sukmajaya Depok dan Kranggan Bekasi. Layanan scaling, bleaching, cabut gigi, gigi anak, dan lainnya. Buka 10.00–20.00 (Senin tutup). Reservasi via WhatsApp.",
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
  category: "Klinik Gigi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Zeyn Dental Care",
    description: "Zeyn Dental Care adalah klinik dokter gigi dengan 2 cabang: Sukmajaya Depok dan Kranggan Bekasi. Layanan scaling, bleaching, cabut gigi, gigi anak, dan lainnya. Buka 10.00–20.00 (Senin tutup). Reservasi via WhatsApp.",
    url: "https://www.instagram.com/zeyndentalcare/",
    telephone: "+6282258009113",
    image: "/images/logo.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Depok & Bekasi",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "10.00–20.00, Senin tutup",
    },
    sameAs: ["https://www.instagram.com/zeyndentalcare/"],
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
