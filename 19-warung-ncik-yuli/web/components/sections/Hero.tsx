"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, AtSign, BadgeCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { address, hours, instagramUrl, instagramHandle } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-light text-primary font-semibold text-sm">
              Warung Rumahan - Gegerkalong, Bandung
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-[1.15]">
              Lauk, Frozen Food & <span className="text-primary">Katering Harian</span> Bandung
            </h1>

            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Frozen food, katering, masakan Chinese halal, bika ambon, sop kikil, siomay & buah. Sistem PO/ready harian di Gegerkalong, Bandung.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <WhatsAppButton size="lg" className="w-full sm:w-auto" label="Chat via WhatsApp" />
              <Button variant="outline" size="lg" as={Link} href="#program" className="w-full sm:w-auto">
                Lihat Layanan
              </Button>
            </div>

            <p className="text-sm font-medium text-muted/80 flex flex-wrap justify-center lg:justify-start items-center gap-2">
              <span>PO / ready harian</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>1.700+ postingan katalog IG</span>
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md"
          >
            <div className="bg-cream border border-border rounded-3xl p-6 md:p-8 shadow-md">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold mb-6">
                <BadgeCheck className="w-4 h-4" />
                <span>Ready Harian - Tanya Stok via WA</span>
              </div>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-text font-medium text-sm leading-relaxed">{address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-text font-medium text-sm leading-relaxed">{hours}</span>
                </li>
                <li className="flex items-start gap-3">
                  <AtSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text font-medium text-sm leading-relaxed underline underline-offset-4"
                  >
                    {instagramHandle}
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppButton label="Chat via WhatsApp" className="w-full" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
