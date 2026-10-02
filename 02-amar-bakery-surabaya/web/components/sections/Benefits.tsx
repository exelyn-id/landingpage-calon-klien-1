"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { business, benefits } from "@/lib/constants";
import { motion } from "framer-motion";
import { Award, BadgeCheck, MapPin, Clock, Star, Users, Truck, HeartHandshake } from "lucide-react";

const iconPool = [
  <BadgeCheck key={0} className="w-8 h-8" />,
  <Award key={1} className="w-8 h-8" />,
  <MapPin key={2} className="w-8 h-8" />,
  <Clock key={3} className="w-8 h-8" />,
  <Star key={4} className="w-8 h-8" />,
  <Users key={5} className="w-8 h-8" />,
  <Truck key={6} className="w-8 h-8" />,
  <HeartHandshake key={7} className="w-8 h-8" />,
];

export function Benefits() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle={"Alasan pelanggan mempercayakan kebutuhannya kepada " + business.name + "."}>
          {"Kenapa Pilih " + business.name + "?"}
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {benefits.map((benefit, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}>
              <BenefitCard title={benefit.title} description={benefit.description} icon={iconPool[i % iconPool.length]} className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
