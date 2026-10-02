"use client"

import * as React from "react"
import { MathGrid } from "./MathGrid"
import { CoordinateGraph } from "./CoordinateGraph"
import { MathEquation, FloatingMathSymbol } from "./MathEquation"
import { motion } from "framer-motion"

export function HeroMathCanvas() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-visible">
      {/* Background Grid */}
      <MathGrid opacity={0.15} className="z-0 rounded-3xl" />

      {/* Decorative large shapes */}
      <motion.div 
        className="absolute w-[300px] h-[300px] rounded-full bg-yellow-soft opacity-50 blur-3xl -top-10 -right-10 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.6, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-[250px] h-[250px] rounded-full bg-primary-light opacity-30 blur-2xl bottom-0 -left-10 z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Coordinate Graph */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
        <CoordinateGraph />
      </div>

      {/* Floating Equations & Symbols */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <MathEquation equation="x² + y² = r²" className="absolute top-10 right-10 rotate-3" delay={0.2} />
        <MathEquation equation="f(x) = mx + c" className="absolute bottom-20 left-10 -rotate-2" delay={0.5} />
        <MathEquation equation="E = mc²" className="absolute top-1/2 right-4 md:right-1/4 rotate-6 shadow-md" delay={0.8} />

        <FloatingMathSymbol symbol="π" className="top-1/4 left-1/4" delay={0} duration={5} />
        <FloatingMathSymbol symbol="Σ" className="bottom-1/3 right-1/3" delay={1.5} duration={6} />
        <FloatingMathSymbol symbol="√" className="top-2/3 left-1/2" delay={2.5} duration={4} />
        <FloatingMathSymbol symbol="θ" className="top-1/5 right-1/4" delay={3.5} duration={5.5} />
      </div>
    </div>
  )
}
