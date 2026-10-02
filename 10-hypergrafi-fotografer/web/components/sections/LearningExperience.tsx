"use client";

import React from "react";
import { motion } from "framer-motion";
import { LearningIllustration } from "@/components/illustrations/LearningIllustration";

export function LearningExperience() {
  return (
    <section id="cara-belajar" className="py-20 md:py-28 bg-primary-light/40 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <LearningIllustration />
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text">
                Sesi Foto yang Santai & Natural
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Tidak perlu kaku depan kamera. Diskusikan konsep dulu, lalu nikmati sesi yang santai dan natural.
              </p>

              <ul className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
                {["Diskusi konsep sebelum hari-H", "Jadwal fleksibel by appointment", "Berbagai jenis sesi dalam satu vendor", "Koordinasi mudah via WA/DM"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-text font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
