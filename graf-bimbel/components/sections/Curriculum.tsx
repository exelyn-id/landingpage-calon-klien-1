"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Globe, Book } from "lucide-react"
import { MathGrid } from "@/components/illustrations/MathGrid"

export function Curriculum() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Kurikulum Nasional—Internasional" 
          subtitle="Layanan pembelajaran GRAF mencakup kebutuhan belajar dengan pendekatan kurikulum Nasional—Internasional."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto relative">
          {/* Decorative background grid behind cards */}
          <MathGrid opacity={0.05} className="z-0" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-cream border-2 border-border p-10 rounded-[2.5rem] shadow-sm relative z-10 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Book className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-yellow flex items-center justify-center mb-6 relative z-10">
              <Book className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-3xl font-extrabold text-black mb-4 relative z-10">NASIONAL</h3>
            <p className="text-muted font-medium text-lg relative z-10">
              Materi disesuaikan dengan standar kurikulum pendidikan nasional terbaru untuk memastikan siswa unggul di sekolah.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/5 border-2 border-primary/20 p-10 rounded-[2.5rem] shadow-sm relative z-10 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Globe className="w-32 h-32 text-primary-dark" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 relative z-10">
              <Globe className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-3xl font-extrabold text-black mb-4 relative z-10">INTERNASIONAL</h3>
            <p className="text-muted font-medium text-lg relative z-10">
              Pendekatan pembelajaran global yang memperluas wawasan dan kesiapan siswa menghadapi tantangan akademik internasional.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
