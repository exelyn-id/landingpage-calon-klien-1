"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
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
              CLARISSA - Fashion Wanita Solo
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-[1.15]">
              Tampil Kekinian Setiap Minggu dengan 
              <span className="bg-gradient-to-t from-primary/30 to-primary/30 bg-[length:100%_40%] bg-no-repeat bg-bottom pb-1">
                Outfit Terbaru di Solo
              </span>
              
            </h1>

            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              CLARISSA Solo Fashion Wanita menghadirkan outfit mingguan, leather jacket, sweatpants, hijab, dan tas. Buka setiap hari 08.00-21.00. Cek katalog, chat WA admin, lalu mampir ke store.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <WhatsAppButton size="lg" className="w-full sm:w-auto" label="Chat WA Admin" />
              <Button variant="outline" size="lg" as={Link} href="#program" className="w-full sm:w-auto">
                Lihat Layanan
              </Button>
            </div>

            <p className="text-sm font-medium text-muted/80 flex flex-wrap justify-center lg:justify-start items-center gap-2">
                            <span>@clarissasolo.id - 7.800+ followers</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Buka 08.00-21.00</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Solo, Jawa Tengah</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <HeroIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
