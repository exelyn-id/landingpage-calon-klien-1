"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { Button } from "@/components/ui/Button"
import { HeroMathCanvas } from "@/components/illustrations/HeroMathCanvas"

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="beranda" className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="flex flex-col gap-6 text-center lg:text-left z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark font-bold text-sm tracking-wide uppercase border border-primary/20">
                GRAF BIMBEL ONLINE
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1]">
              Belajar Lebih <span className="text-primary-dark">Fokus.</span><br className="hidden md:block"/> Berkembang Lebih <span className="relative whitespace-nowrap"><span className="relative z-10">Terarah.</span><span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-soft -z-10 rounded-sm"></span></span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Bimbingan belajar online untuk SD, SMP, SMA, Olimpiade, hingga SNBT dengan sistem 1 guru 1 siswa dan kurikulum Nasional—Internasional.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <WhatsAppButton 
                label="Konsultasi via WhatsApp" 
                size="lg" 
                className="w-full sm:w-auto shadow-xl shadow-primary/20"
              />
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Program
              </Button>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-sm text-muted font-semibold mt-4">
              SD • SMP • SMA • Olimpiade • SNBT
            </motion.p>
          </motion.div>

          {/* Visual Canvas */}
          <motion.div 
            className="relative w-full h-full lg:h-[600px] flex items-center justify-center -order-1 lg:order-none opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <HeroMathCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
