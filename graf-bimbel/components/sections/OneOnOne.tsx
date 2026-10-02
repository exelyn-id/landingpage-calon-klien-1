"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { User, GraduationCap, Focus } from "lucide-react"

export function OneOnOne() {
  return (
    <section id="keunggulan" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="1 Guru. 1 Siswa. Lebih Fokus." 
          subtitle="Dengan sistem 1 guru 1 siswa, proses belajar dapat berlangsung secara lebih personal dan interaktif sesuai kebutuhan siswa."
          align="center"
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-1 bg-border -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary-dark"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            {/* Teacher Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border-2 border-border p-6 rounded-3xl shadow-md flex flex-col items-center gap-4 w-64 text-center z-20"
            >
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-10 h-10 text-primary-dark" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-black">1 Guru</h4>
                <p className="text-sm text-muted">Pendampingan penuh</p>
              </div>
            </motion.div>

            {/* Focus Indicator */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-yellow-soft border-4 border-white shadow-xl rounded-full p-4 z-30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Focus className="w-8 h-8 text-primary-dark" />
              </motion.div>
            </motion.div>

            {/* Student Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-2 border-border p-6 rounded-3xl shadow-md flex flex-col items-center gap-4 w-64 text-center z-20"
            >
              <div className="w-20 h-20 rounded-full bg-yellow/30 flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-primary-dark" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-black">1 Siswa</h4>
                <p className="text-sm text-muted">Fokus belajar maksimal</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Mathematical elements */}
          <motion.div 
            className="absolute top-0 left-10 text-primary opacity-30 text-2xl font-bold"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            x = y
          </motion.div>
          <motion.div 
            className="absolute bottom-0 right-10 text-primary opacity-30 text-2xl font-bold"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            f(x)
          </motion.div>
        </div>
      </div>
    </section>
  )
}
