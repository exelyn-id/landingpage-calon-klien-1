"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function CoordinateGraph({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-full min-h-[300px]", className)}>
      <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        <path d="M 0 150 L 400 150" stroke="#E8D99A" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 200 0 L 200 300" stroke="#E8D99A" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Sine Wave */}
        <motion.path
          d="M 0 150 Q 50 50, 100 150 T 200 150 T 300 150 T 400 150"
          stroke="var(--color-primary)"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Points */}
        {[0, 100, 200, 300, 400].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy="150"
            r="6"
            fill="var(--color-black)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
          />
        ))}
      </svg>
    </div>
  )
}
