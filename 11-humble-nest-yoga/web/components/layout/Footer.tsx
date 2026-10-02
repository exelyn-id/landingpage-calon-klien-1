import React from "react";
import Link from "next/link";
import { siteInfo } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#program" },
  { name: "Cara Booking", href: "#cara-booking" },
  { name: "Galeri", href: "#galeri" },
  { name: "FAQ", href: "#faq" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-cream py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex flex-col items-center text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{siteInfo.brand}</h2>
          <p className="text-lg font-medium opacity-90">{siteInfo.category}</p>
        </div>

        <p className="max-w-md mx-auto mb-6 opacity-80 leading-relaxed">
          Home yoga studio yang cozy di dekat MRT Lebak Bulus, Jakarta Selatan.
        </p>

        <p className="mb-10 opacity-80 text-sm md:text-base">
          Instagram:{" "}
          <a
            href={siteInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {siteInfo.instagramHandle}
          </a>
          <span className="mx-2">•</span>
          WA: {siteInfo.waDisplay}
        </p>

        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-cream opacity-80 hover:opacity-100 transition-opacity text-sm md:text-base font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mb-12">
          <WhatsAppButton variant="light" label="Hubungi via WhatsApp" />
        </div>

        <div className="border-t border-cream/20 pt-8 w-full">
          <p className="text-sm opacity-60">
            © {currentYear} {siteInfo.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
