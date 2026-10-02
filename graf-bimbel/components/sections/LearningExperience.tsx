"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { LearningIllustration } from "@/components/illustrations/LearningIllustration"

export function LearningExperience() {
  return (
    <section id="cara-belajar" className="py-24 bg-white relative overflow-hidden border-t-2 border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <LearningIllustration />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <SectionHeading 
              title="Pengalaman Belajar yang Terarah" 
              align="left"
              className="mb-6"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted font-medium leading-relaxed">
                Metode pembelajaran dirancang agar materi tersampaikan secara jelas dan terstruktur. Interaksi langsung memastikan setiap kendala belajar dapat diatasi seketika.
              </p>
              <ul className="space-y-4">
                {[
                  "Fokus penuh pada kebutuhan belajar siswa",
                  "Materi disesuaikan dengan kurikulum",
                  "Interaksi dan diskusi langsung dengan tutor"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary-dark shrink-0" />
                    <span className="text-black font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
