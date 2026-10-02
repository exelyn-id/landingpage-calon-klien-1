"use client";

import Image from "next/image";
import { WhatsAppButton } from "../ui/WhatsAppButton";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-off-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(22,137,229,0.05),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,196,0,0.08),transparent_40%)]" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 mb-6"
            >
              MATHGENIUS ACADEMY
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[38px] leading-[1.1] md:text-5xl lg:text-6xl font-extrabold text-navy-950 mb-6 tracking-tight"
            >
              Bimbingan Belajar untuk <span className="text-blue-600 relative inline-block">Setiap Target<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="#FFC400" strokeWidth="4" fill="none"/></svg></span> Akademik
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted mb-8 leading-relaxed"
            >
              Les semua mata pelajaran untuk SD–SMA dengan Kurikulum Nasional, Cambridge, atau IB, serta persiapan SNBT, SAT, GMAT, TPA, Olimpiade, dan TKA.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <WhatsAppButton size="lg" className="w-full sm:w-auto text-center" />
              <a href="#program" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-navy-900 bg-transparent text-navy-950 hover:bg-navy-950 hover:text-white focus-visible:ring-navy-900 h-14 px-8 text-lg">
                Lihat Program
              </a>
            </motion.div>
          </div>

          {/* Right: Academic Visual */}
          <div className="order-first lg:order-last w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[500px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white/50 bg-white"
            >
              <Image
                src="/images/hero-illustration.jpg"
                alt="MathGenius Academy Learning Illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
