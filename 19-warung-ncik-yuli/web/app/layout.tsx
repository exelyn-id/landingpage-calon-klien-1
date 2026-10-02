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
  themeColor: "#C2410C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Warung Ncik Yuli Bandung - Frozen Food, Katering & Jajanan Harian",
    template: "%s | Ncik Yuli",
  },
  description: "Warung Ncik Yuli di Gegerkalong, Bandung. Frozen food, katering, masakan Chinese halal, bika ambon, sop kikil, siomay & buah. Sistem PO/ready harian. Chat WA.",
  keywords: ["warung bandung", "frozen food bandung", "katering bandung", "bika ambon bandung", "sop kikil bandung", "jajanan bandung gegerkalong"],
  authors: [{ name: "Warung Ncik Yuli Bandung" }],
  creator: "Ncik Yuli",
  publisher: "Warung Ncik Yuli Bandung",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Warung Ncik Yuli Bandung - Frozen Food, Katering & Jajanan Harian",
    description: "Warung Ncik Yuli di Gegerkalong, Bandung. Frozen food, katering, masakan Chinese halal, bika ambon, sop kikil, siomay & buah. Sistem PO/ready harian. Chat WA.",
    siteName: "Warung Ncik Yuli Bandung",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo Warung Ncik Yuli Bandung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warung Ncik Yuli Bandung - Frozen Food, Katering & Jajanan Harian",
    description: "Warung Ncik Yuli di Gegerkalong, Bandung. Frozen food, katering, masakan Chinese halal, bika ambon, sop kikil, siomay & buah. Sistem PO/ready harian. Chat WA.",
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
    name: "Warung Ncik Yuli Bandung",
    image: "/images/logo.jpg",
    description: "Warung Ncik Yuli di Gegerkalong, Bandung. Frozen food, katering, masakan Chinese halal, bika ambon, sop kikil, siomay & buah. Sistem PO/ready harian. Chat WA.",
    telephone: "+628122333005",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bandung (Gegerkalong)",
      addressCountry: "ID",
    },
    
    
    sameAs: ["https://www.instagram.com/warungnyancikyuli/"],
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
