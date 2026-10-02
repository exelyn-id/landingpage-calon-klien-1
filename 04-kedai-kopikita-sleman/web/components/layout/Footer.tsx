import React from "react";
import Link from "next/link";
import { AtSign, MapPin } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business } from "@/lib/constants";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#program" },
  { name: "Cara Order", href: "#format-belajar" },
  { name: "Keunggulan", href: "#keunggulan" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-cream py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex flex-col items-center text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-1">{business.name}</h2>
          <p className="text-base font-medium opacity-90">{business.category}</p>
        </div>
        <p className="max-w-md mx-auto mb-6 opacity-80 leading-relaxed">{business.footerDesc}</p>
        <p className="flex items-start justify-center gap-2 max-w-md mx-auto mb-4 opacity-80 text-sm leading-relaxed">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{business.address}</span>
        </p>
        <a href={business.igUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-10 opacity-80 hover:opacity-100 transition-opacity text-sm font-medium">
          <AtSign className="w-4 h-4" />
          <span>{business.igHandle}</span>
        </a>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-cream opacity-80 hover:opacity-100 transition-opacity text-sm md:text-base font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mb-12">
          <WhatsAppButton variant="light" label="Hubungi via WhatsApp" />
        </div>
        <div className="border-t border-cream/20 pt-8 w-full">
          <p className="text-sm opacity-60">&copy; {currentYear} {business.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
