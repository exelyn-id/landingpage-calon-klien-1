"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { User, PenTool, CheckCircle2 } from "lucide-react"

export function LearningIllustration() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] bg-cream rounded-3xl border-2 border-border overflow-hidden p-6 flex items-center justify-center">
      {/* Decorative math whiteboard background */}
      <div className="absolute inset-0 opacity-10 font-mono text-sm sm:text-base p-4 overflow-hidden pointer-events-none">
        <div className="whitespace-pre">
          {`
  f(x) = ax² + bx + c
  Δ = b² - 4ac
  x = (-b ± √Δ) / 2a
  
  sin²θ + cos²θ = 1
  e^(iπ) + 1 = 0
  
  ∫ x² dx = (x³ / 3) + C
          `}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Progress Line */}
        <div className="absolute left-8 top-12 bottom-12 w-1 bg-border rounded-full hidden sm:block">
          <motion.div 
            className="w-full bg-primary rounded-full"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 sm:pl-16">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-4 rounded-2xl shadow-sm border border-border flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <User className="w-5 h-5 text-primary-dark" />
            </div>
            <div>
              <div className="h-4 w-24 bg-gray-200 rounded-md mb-2"></div>
              <div className="h-3 w-32 bg-gray-100 rounded-md"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-yellow-soft p-4 rounded-2xl shadow-sm border border-border flex items-center gap-4 ml-4"
          >
            <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center shrink-0">
              <PenTool className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="h-4 w-28 bg-black/20 rounded-md mb-2"></div>
              <div className="h-3 w-36 bg-black/10 rounded-md"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white p-4 rounded-2xl shadow-sm border border-border flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="h-4 w-20 bg-gray-200 rounded-md mb-2"></div>
              <div className="h-3 w-24 bg-gray-100 rounded-md"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
