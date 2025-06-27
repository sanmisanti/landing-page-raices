'use client'

import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"
import { useMemo } from "react"

export default function HeroSection() {
  // Pre-generate stable positions to avoid hydration mismatch
  const seeds = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 100 + (i * 73) % 1000,
      y: 50 + (i * 67) % 700,
      duration: 15 + (i % 8) * 2,
      delay: (i * 0.4) % 5
    })), []
  );
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Organic Growing Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-100 to-green-200" />
        
        {/* Floating Seeds/Spores */}
        {seeds.map((seed) => (
          <motion.div
            key={seed.id}
            className="absolute w-2 h-2 bg-green-800/30 rounded-full"
            initial={{ 
              x: seed.x,
              y: seed.y,
              scale: 0
            }}
            animate={{
              x: seed.x + 100,
              y: seed.y - 50,
              scale: [0, 1, 0.5, 1],
            }}
            transition={{
              duration: seed.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: seed.delay
            }}
          />
        ))}
        
        {/* Growing Roots Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <motion.path
              d="M500,900 Q400,800 300,700 Q200,600 100,500"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-green-900"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M500,900 Q600,800 700,700 Q800,600 900,500"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-green-900"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title - Phase 1: Semilla */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-green-900 mb-6 leading-tight tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          De la semilla
          <br />
          <span className="text-emerald-700">a la obra maestra.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-green-800/80 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          Cada proyecto nace de una idea. Acompáñanos en el proceso de transformación 
          desde el concepto hasta el mueble que transformará tu espacio.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
          >
            Inicia tu transformación
          </Button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-green-700/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-emerald-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}