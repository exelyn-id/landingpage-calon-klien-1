"use client";

import { motion } from "framer-motion";

export function AcademicHeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Decorative Orbits */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[80%] h-[80%] rounded-full border border-blue-500/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[100%] h-[100%] rounded-full border border-yellow-500/20"
        />
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-[70%] h-[70%] bg-gradient-to-br from-navy-900 to-navy-950 rounded-[40px] border border-blue-500/30 shadow-2xl shadow-blue-900/20 flex flex-col items-center justify-center p-8 overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />

        {/* Cap */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -top-8 z-20"
        >
          <svg width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 5L110 30L60 55L10 30L60 5Z" fill="#123A72" stroke="#FFC400" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M25 38V55C25 60 40 65 60 65C80 65 95 60 95 55V38" stroke="#1689E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M100 35V55" stroke="#FFC400" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="100" cy="55" r="3" fill="#FFC400"/>
          </svg>
        </motion.div>

        {/* Lightbulb / Brain */}
        <div className="relative z-10">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M30 40C30 25 40 15 50 15C60 15 70 25 70 40C70 50 60 60 60 70V80H40V70C40 60 30 50 30 40Z"
              stroke="#FFF7C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              d="M45 85H55M45 90H55M48 95H52"
              stroke="#FFC400" strokeWidth="3" strokeLinecap="round"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              d="M50 35V50M40 45L45 40M60 45L55 40"
              stroke="#FFC400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] bg-white rounded-xl shadow-lg p-3 text-blue-600 font-bold font-mono border border-border"
      >
        ∑ x²
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[15%] right-[5%] bg-white rounded-xl shadow-lg p-3 text-yellow-500 font-bold font-mono border border-border"
      >
        f(x)
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="#FFC400"/>
        </svg>
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[15%]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="#2B9AF0"/>
        </svg>
      </motion.div>
    </div>
  );
}
