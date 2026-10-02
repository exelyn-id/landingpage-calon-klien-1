"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { siteInfo } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-light text-primary font-semibold text-sm">
              Humble Nest Yoga • Home Yoga Studio Jakarta
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-[1.15]">
              Ruang Yoga Cozy di Lebak Bulus untuk Memulai Perjalanan Yogamu
            </h1>

            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Kelas grup ramah pemula, private, prenatal, kids, senior, hingga workshop — dekat MRT Lebak Bulus, Jakarta Selatan. Daftar via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <WhatsAppButton size="lg" className="w-full sm:w-auto" />
              <Button variant="outline" size="lg" as={Link} href="#program" className="w-full sm:w-auto">
                Lihat Layanan
              </Button>
            </div>

            <p className="text-sm font-medium text-muted/80 flex flex-wrap justify-center lg:justify-start items-center gap-2">
              <span>{siteInfo.hours}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{siteInfo.location}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="bg-cream border border-border rounded-3xl p-8 md:p-10 shadow-md max-w-md mx-auto">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary text-white font-semibold text-sm mb-6">
                Dekat MRT Lebak Bulus
              </div>
              <ul className="space-y-5 text-left">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-text">Lokasi</p>
                    <p className="text-muted text-sm">{siteInfo.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-text">Jam Operasional</p>
                    <p className="text-muted text-sm">{siteInfo.hours}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-text">Instagram</p>
                    <p className="text-muted text-sm">{siteInfo.instagramHandle}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <WhatsAppButton size="lg" className="w-full" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
