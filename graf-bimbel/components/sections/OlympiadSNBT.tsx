"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Target, Award } from "lucide-react"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

export function OlympiadSNBT() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-grid" width="60" height="103.923" patternUnits="userSpaceOnUse">
              <path d="M30 0L60 17.32v34.64L30 69.28 0 51.96V17.32z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Untuk Tantangan Akademik yang Lebih Spesifik" 
          align="center"
          className="[&_h2]:text-white"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Olimpiade */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-[2rem] flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
              <Award className="w-24 h-24 text-yellow" />
            </div>
            <div className="w-14 h-14 bg-yellow text-black rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow/20">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">Olimpiade</h3>
            <p className="text-white/80 font-medium leading-relaxed">
              Pendampingan belajar untuk kebutuhan persiapan Olimpiade.
            </p>
          </motion.div>

          {/* SNBT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-[2rem] flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
              <Target className="w-24 h-24 text-primary" />
            </div>
            <div className="w-14 h-14 bg-primary text-black rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">SNBT</h3>
            <p className="text-white/80 font-medium leading-relaxed">
              Pendampingan belajar untuk kebutuhan persiapan SNBT.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton 
            label="Konsultasikan Kebutuhan Belajar" 
            size="lg"
            variant="secondary"
            className="text-black font-extrabold"
          />
        </div>
      </div>
    </section>
  )
}
