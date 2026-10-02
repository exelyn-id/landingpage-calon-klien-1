"use client";

import { curricula } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { motion } from "framer-motion";

export function Curriculum() {
  return (
    <section id="kurikulum" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Subtle academic background grid in SVG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Satu Tempat, Berbagai Kurikulum</h2>
          <p className="text-lg text-white/70">Pendampingan belajar disesuaikan dengan kebutuhan siswa dan kurikulum yang digunakan.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {curricula.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900 border border-white/10 rounded-3xl p-8 hover:bg-navy-800 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-yellow-500 rounded-sm rotate-45" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton messageType="kurikulum" variant="secondary" size="lg">
            Konsultasi Kurikulum
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
