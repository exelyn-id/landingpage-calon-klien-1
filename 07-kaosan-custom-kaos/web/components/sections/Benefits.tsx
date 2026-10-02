"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { benefits } from "@/lib/constants";
import { motion } from "framer-motion";
import { Shirt, Palette, Wallet, Clock } from "lucide-react";

const icons = [
  <Shirt className="w-8 h-8" />,
  <Palette className="w-8 h-8" />,
  <Wallet className="w-8 h-8" />,
  <Clock className="w-8 h-8" />,
];

export function Benefits() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Custom kaos tanpa minimal order, harga transparan, dan free desain.">
          Kenapa Order di Kaosan?
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                icon={icons[i % icons.length]}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
