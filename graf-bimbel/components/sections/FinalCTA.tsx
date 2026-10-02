"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { FloatingMathSymbol } from "@/components/illustrations/MathEquation"
import { MathGrid } from "@/components/illustrations/MathGrid"

export function FinalCTA() {
  return (
    <section className="py-24 bg-yellow relative overflow-hidden">
      {/* Decorative SVG Background */}
      <MathGrid opacity={0.2} className="z-0" />
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <FloatingMathSymbol symbol="x²" className="top-10 left-10 text-primary-dark" delay={0} />
        <FloatingMathSymbol symbol="+" className="bottom-20 right-20 text-primary-dark" delay={1} />
        <FloatingMathSymbol symbol="y²" className="top-20 right-32 text-primary-dark" delay={2} />
        <FloatingMathSymbol symbol="=" className="bottom-10 left-32 text-primary-dark" delay={0.5} />
        <FloatingMathSymbol symbol="r²" className="top-1/2 left-1/4 text-primary-dark" delay={1.5} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight mb-6">
            Siap Belajar Lebih Fokus?
          </h2>
          <p className="text-xl md:text-2xl text-black/80 font-medium mb-10 max-w-2xl">
            Konsultasikan kebutuhan belajar dan temukan program GRAF yang sesuai.
          </p>
          
          <WhatsAppButton 
            label="Konsultasi via WhatsApp" 
            size="lg"
            className="shadow-xl text-lg h-16 px-10 border-2 border-black/10"
          />
          
          <p className="mt-8 text-black/70 font-bold tracking-wide">
            SD • SMP • SMA • Olimpiade • SNBT
          </p>
        </motion.div>
      </div>
    </section>
  )
}
