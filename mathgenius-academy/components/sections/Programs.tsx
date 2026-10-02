"use client";

import { programs } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { motion } from "framer-motion";
import { BookOpen, Globe, PenTool, Trophy } from "lucide-react";

export function Programs() {
  const icons = [
    <BookOpen key="1" className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    <Globe key="2" className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    <PenTool key="3" className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    <Trophy key="4" className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
  ];

  return (
    <section id="program" className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-4">Program Belajar untuk Berbagai Kebutuhan</h2>
          <p className="text-lg text-muted">Dari pelajaran sekolah hingga persiapan ujian dan kompetisi, pilih kebutuhan belajar yang sesuai.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start overflow-hidden"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                {icons[index]}
              </div>
              
              <div className="bg-yellow-100 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                {program.label}
              </div>
              
              <h3 className="text-2xl font-bold text-navy-950 mb-3">{program.title}</h3>
              
              {program.description && (
                <p className="text-muted leading-relaxed flex-grow">{program.description}</p>
              )}
              
              {program.items && (
                <div className="flex flex-wrap gap-2 mb-4 flex-grow">
                  {program.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-off-white border border-border rounded-full text-sm font-medium text-navy-900">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton messageType="program" size="lg">Tanya Program</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
