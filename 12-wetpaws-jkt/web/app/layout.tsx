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
  themeColor: "#E8590C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "WetPaws JKT — Pet Grooming, Dogpark & Pethotel di Cakung, Jakarta Timur",
    template: `%s | WetPaws JKT`,
  },
  description: "WetPaws JKT melayani grooming anjing dan kucing, dogpark, pethotel, dan home service di Pulo Gebang Permai, Cakung, Jakarta Timur. Buka 09.00–18.00. Reservasi via WhatsApp.",
  keywords: [
    "wetpaws jkt",
    "pet grooming cakung",
    "grooming anjing kucing jakarta timur",
    "dogpark jakarta timur",
    "pethotel jakarta timur",
    "home service grooming jakarta",
  ],
  authors: [{ name: "WetPaws JKT" }],
  creator: "WetPaws JKT",
  publisher: "WetPaws JKT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "WetPaws JKT — Pet Grooming, Dogpark & Pethotel di Cakung, Jakarta Timur",
    description: "WetPaws JKT melayani grooming anjing dan kucing, dogpark, pethotel, dan home service di Pulo Gebang Permai, Cakung, Jakarta Timur. Buka 09.00–18.00. Reservasi via WhatsApp.",
    siteName: "WetPaws JKT",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo WetPaws JKT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WetPaws JKT — Pet Grooming, Dogpark & Pethotel di Cakung, Jakarta Timur",
    description: "WetPaws JKT melayani grooming anjing dan kucing, dogpark, pethotel, dan home service di Pulo Gebang Permai, Cakung, Jakarta Timur. Buka 09.00–18.00. Reservasi via WhatsApp.",
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
  category: "Pet Grooming, Dogpark & Pethotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "PetCare",
    name: "WetPaws JKT",
    description: "WetPaws JKT melayani grooming anjing dan kucing, dogpark, pethotel, dan home service di Pulo Gebang Permai, Cakung, Jakarta Timur. Buka 09.00–18.00. Reservasi via WhatsApp.",
    url: "https://www.instagram.com/wetpaws_jkt/",
    telephone: "+6281113802040",
    image: "/images/logo.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cakung, Jaktim",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "09.00–18.00",
    },
    sameAs: ["https://www.instagram.com/wetpaws_jkt/"],
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
