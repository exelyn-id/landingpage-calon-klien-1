"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Users, Clock, MapPin, Star, Truck, Coffee, ShoppingBag, Wallet, Flame, CalendarDays, UtensilsCrossed, Croissant, Soup, Shirt, Sparkles, MessageCircle } from "lucide-react";
import { highlights } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  halal: <BadgeCheck className="w-8 h-8 text-primary" />,
  users: <Users className="w-8 h-8 text-primary" />,
  clock: <Clock className="w-8 h-8 text-primary" />,
  pin: <MapPin className="w-8 h-8 text-primary" />,
  star: <Star className="w-8 h-8 text-primary" />,
  truck: <Truck className="w-8 h-8 text-primary" />,
  coffee: <Coffee className="w-8 h-8 text-primary" />,
  bag: <ShoppingBag className="w-8 h-8 text-primary" />,
  wallet: <Wallet className="w-8 h-8 text-primary" />,
  flame: <Flame className="w-8 h-8 text-primary" />,
  calendar: <CalendarDays className="w-8 h-8 text-primary" />,
  bread: <Croissant className="w-8 h-8 text-primary" />,
  soup: <Soup className="w-8 h-8 text-primary" />,
  shirt: <Shirt className="w-8 h-8 text-primary" />,
  sparkle: <Sparkles className="w-8 h-8 text-primary" />,
  chat: <MessageCircle className="w-8 h-8 text-primary" />,
  food: <UtensilsCrossed className="w-8 h-8 text-primary" />,
};

export function ServiceHighlights() {
  return (
    <section className="py-12 bg-primary-light/30 relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4 hover:-translate-y-1 transition-transform" >
              <div className="bg-primary-light p-3 rounded-xl">{iconMap[item.icon] ?? iconMap["sparkle"]}</div>
              <div>
                <h3 className="font-bold text-text text-lg mb-1">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
