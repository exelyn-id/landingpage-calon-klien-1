import * as React from "react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Program", href: "#program" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white pt-16 pb-24 md:pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-extrabold text-2xl tracking-tight text-white">
              GRAF <span className="text-primary">BIMBEL ONLINE</span>
            </h3>
            <div className="text-muted/80 text-sm md:text-base space-y-1">
              <p>SD • SMP • SMA • Olimpiade • SNBT</p>
              <p>Kurikulum Nasional--Internasional • 1 Guru 1 Siswa</p>
            </div>
            <div className="mt-4">
              <WhatsAppButton 
                label="Hubungi via WhatsApp" 
                variant="default"
                className="shadow-none border-none hover:bg-primary-light"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:items-end gap-3">
            <h4 className="font-bold text-lg mb-2 text-white/90">Navigasi</h4>
            <nav className="flex flex-col md:items-end gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted/80 hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left text-sm text-muted/60">
          <p>© {currentYear} GRAF BIMBEL ONLINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
