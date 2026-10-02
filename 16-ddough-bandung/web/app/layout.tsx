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
    default: "D.dough Dough and Coffee Bandung - Donat Pumpkin & Kopi di Pasteur",
    template: "%s | D.dough",
  },
  description: "D.dough Dough and Coffee di Jl. Prof. Eyckman No.26, Pasteur, Bandung. Pumpkin doughnut signature, croissant, cookies, egg tart & salt bread. Buka 09.00-21.00. Order via WA.",
  keywords: ["d.dough bandung", "donat bandung", "pumpkin doughnut bandung", "croissant bandung", "kopi pasteur bandung", "bakery bandung", "egg tart bandung"],
  authors: [{ name: "D.dough Dough and Coffee Bandung" }],
  creator: "D.dough",
  publisher: "D.dough Dough and Coffee Bandung",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "D.dough Dough and Coffee Bandung - Donat Pumpkin & Kopi di Pasteur",
    description: "D.dough Dough and Coffee di Jl. Prof. Eyckman No.26, Pasteur, Bandung. Pumpkin doughnut signature, croissant, cookies, egg tart & salt bread. Buka 09.00-21.00. Order via WA.",
    siteName: "D.dough Dough and Coffee Bandung",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo D.dough Dough and Coffee Bandung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D.dough Dough and Coffee Bandung - Donat Pumpkin & Kopi di Pasteur",
    description: "D.dough Dough and Coffee di Jl. Prof. Eyckman No.26, Pasteur, Bandung. Pumpkin doughnut signature, croissant, cookies, egg tart & salt bread. Buka 09.00-21.00. Order via WA.",
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
  category: "Bakery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "D.dough Dough and Coffee Bandung",
    image: "/images/logo.jpg",
    description: "D.dough Dough and Coffee di Jl. Prof. Eyckman No.26, Pasteur, Bandung. Pumpkin doughnut signature, croissant, cookies, egg tart & salt bread. Buka 09.00-21.00. Order via WA.",
    telephone: "+6287892767676",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Prof. Eyckman No.26, Pasteur, Bandung",
      addressCountry: "ID",
    },
    
        openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
    sameAs: ["https://www.instagram.com/d.dough.id/"],
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
