"use client";

import { tests } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { motion } from "framer-motion";
import { FileSignature } from "lucide-react";

export function TestPreparation() {
  return (
    <section id="persiapan-tes" className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-4">Persiapkan Diri untuk Berbagai Tes</h2>
          <p className="text-lg text-muted">Pendampingan belajar untuk kebutuhan tes akademik dan seleksi yang lebih spesifik.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tests.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-off-white border border-border rounded-2xl p-6 md:p-8 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1rem)] flex flex-col items-center text-center hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-blue-600">
                <FileSignature className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">{test.title}</h3>
              <p className="text-sm text-muted">{test.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <WhatsAppButton messageType="tes" size="lg">
            Tanya Persiapan Tes
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
