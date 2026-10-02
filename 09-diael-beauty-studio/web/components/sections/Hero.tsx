"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, AtSign } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
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
              DIAEL - Beauty Studio Surabaya
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-[1.15]">
              Lash, Brow & Nail Art 
              <span className="bg-gradient-to-t from-primary/30 to-primary/30 bg-[length:100%_40%] bg-no-repeat bg-bottom pb-1">
                Mulai Rp25rb di Surabaya
              </span>
              
            </h1>

            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Nail art, threading brow, eyelash, dan Korean lash lift. Walk-in dan booking di Jl. Dharmawangsa No.71 dan Royal Plaza Lt I. Buka 11.00-20.00.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <WhatsAppButton size="lg" className="w-full sm:w-auto" label="Booking via WA" />
              <Button variant="outline" size="lg" as={Link} href="#program" className="w-full sm:w-auto">
                Lihat Layanan
              </Button>
            </div>

            <p className="text-sm font-medium text-muted/80 flex flex-wrap justify-center lg:justify-start items-center gap-2">
                            <span>46,3rb followers</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>2 lokasi Surabaya</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>11.00-20.00</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md"
          >
            <div className="bg-cream rounded-3xl p-6 md:p-8 shadow-xl border border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Treatment Mulai 25rb</p>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <span className="bg-primary-light p-2 rounded-lg shrink-0"><AtSign className="w-5 h-5 text-primary" /></span>
                  <span className="text-sm"><span className="block font-bold text-text">Instagram</span><span className="text-muted">@diael.studio &bull; 46,3rb followers</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary-light p-2 rounded-lg shrink-0"><MapPin className="w-5 h-5 text-primary" /></span>
                  <span className="text-sm"><span className="block font-bold text-text">Lokasi</span><span className="text-muted">2 lokasi Surabaya</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary-light p-2 rounded-lg shrink-0"><Clock className="w-5 h-5 text-primary" /></span>
                  <span className="text-sm"><span className="block font-bold text-text">Jam Operasional</span><span className="text-muted">11.00-20.00</span></span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
