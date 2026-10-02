import React from "react";
import Link from "next/link";
import { MapPin, Clock, AtSign } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { address, hours, instagramUrl, instagramHandle } from "@/lib/constants";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#program" },
  { name: "Keunggulan", href: "#keunggulan" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-cream py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex flex-col items-center text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">D.dough</h2>
          <p className="text-lg font-medium opacity-90">D.dough Dough and Coffee Bandung</p>
        </div>

        <p className="max-w-md mx-auto mb-6 opacity-80 leading-relaxed">
          Bakery & kopi di Pasteur, Bandung. Pumpkin doughnut signature, croissant, cookies, egg tart & salt bread.
        </p>

        <div className="flex flex-col items-center gap-2 mb-10 text-sm opacity-80">
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {address}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> {hours}
          </span>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline underline-offset-4 hover:opacity-100"
          >
            <AtSign className="w-4 h-4" /> {instagramHandle}
          </a>
        </div>

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
          <WhatsAppButton variant="light" label="Order via WhatsApp" />
        </div>

        <div className="border-t border-cream/20 pt-8 w-full">
          <p className="text-sm opacity-60">
            &copy; {currentYear} D.dough Dough and Coffee Bandung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
