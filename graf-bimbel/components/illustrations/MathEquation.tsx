"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function MathEquation({ 
  equation, 
  className,
  delay = 0 
}: { 
  equation: string
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={cn(
        "px-4 py-2 bg-white rounded-lg shadow-sm border border-border inline-block font-mono font-bold text-lg text-primary-dark",
        className
      )}
    >
      {equation}
    </motion.div>
  )
}

export function FloatingMathSymbol({ 
  symbol, 
  className,
  delay = 0,
  duration = 4
}: { 
  symbol: string
  className?: string
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [10, -10, -20, -30],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration, 
        delay, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
      className={cn(
        "absolute text-2xl md:text-3xl font-extrabold text-primary opacity-60 pointer-events-none select-none",
        className
      )}
    >
      {symbol}
    </motion.div>
  )
}
