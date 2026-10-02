"use client";

import { WhatsAppButton } from "../ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";

export function Olympiad() {
  return (
    <section id="olimpiade" className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Decorative background stars */}
      <div className="absolute top-10 left-10 text-yellow-300 opacity-50"><Star className="w-12 h-12" /></div>
      <div className="absolute bottom-20 right-10 text-yellow-300 opacity-50"><Star className="w-16 h-16" /></div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-yellow-500/10"
        >
          <Trophy className="w-12 h-12" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-6">Tumbuhkan Potensi Kompetitif</h2>
        
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
          Program bimbingan untuk siswa yang mempersiapkan diri mengikuti Olimpiade.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-navy-900 mb-12">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-border">
            <Medal className="w-5 h-5 text-yellow-500" /> Dedikasi Tinggi
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-border">
            <Star className="w-5 h-5 text-yellow-500" /> Bimbingan Terarah
          </div>
        </div>

        <WhatsAppButton messageType="olimpiade" size="lg">
          Konsultasi Olimpiade
        </WhatsAppButton>
      </div>
    </section>
  );
}
