"use client";

import { WhatsAppButton } from "../ui/WhatsAppButton";
import { InstagramButton } from "../ui/InstagramButton";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950 text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(22,137,229,0.2),transparent_50%),radial-gradient(ellipse_at_top_left,rgba(255,196,0,0.15),transparent_50%)]" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Mulai Perjalanan Akademik Anda Bersama <span className="text-blue-500">MathGenius</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Konsultasikan kebutuhan belajar anak Anda dengan tim kami sekarang juga. Dapatkan pendampingan belajar terbaik untuk mencapai target prestasi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton messageType="default" size="lg" className="w-full sm:w-auto shadow-xl shadow-green-900/20 text-lg px-8 py-4" />
            <InstagramButton variant="primary" className="w-full sm:w-auto text-lg px-8 py-4" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
