"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { BookOpen, GraduationCap, School, Target, Award } from "lucide-react"

const PROGRAMS = [
  {
    id: "sd",
    title: "SD",
    description: "Pendampingan belajar untuk membantu siswa memahami materi dan membangun fondasi belajar.",
    icon: <BookOpen className="w-8 h-8 text-primary-dark" />,
    color: "bg-yellow-soft"
  },
  {
    id: "smp",
    title: "SMP",
    description: "Pembelajaran yang lebih terarah untuk memahami materi dan menghadapi kebutuhan akademik.",
    icon: <School className="w-8 h-8 text-primary-dark" />,
    color: "bg-yellow-soft"
  },
  {
    id: "sma",
    title: "SMA",
    description: "Pendampingan belajar untuk berbagai kebutuhan akademik di tingkat SMA.",
    icon: <GraduationCap className="w-8 h-8 text-primary-dark" />,
    color: "bg-yellow-soft"
  },
  {
    id: "olimpiade",
    title: "Olimpiade",
    description: "Program belajar untuk siswa yang ingin mempersiapkan kebutuhan belajar terkait Olimpiade.",
    icon: <Award className="w-8 h-8 text-primary-dark" />,
    color: "bg-yellow-soft"
  },
  {
    id: "snbt",
    title: "SNBT",
    description: "Pendampingan belajar untuk kebutuhan persiapan materi SNBT.",
    icon: <Target className="w-8 h-8 text-primary-dark" />,
    color: "bg-yellow-soft"
  }
]

export function Programs() {
  return (
    <section id="program" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Pilih Program Sesuai Kebutuhan Belajar" 
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border-2 border-border p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${program.color} group-hover:scale-110 transition-transform duration-300`}>
                {program.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-3">{program.title}</h3>
              <p className="text-muted font-medium leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
