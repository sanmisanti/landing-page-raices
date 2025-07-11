'use client'

import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function CtaSection() {
  // Pre-generate stable random values to avoid hydration mismatch
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: 10 + (i * 6) % 80, // Deterministic positioning
      top: 15 + (i * 7) % 70,
      duration: 6 + (i % 4),
      delay: (i * 0.3) % 3
    })), []
  );
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-stone-800 via-[#263311] to-stone-900 relative overflow-hidden">
      {/* Elegant wood grain texture */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M0,${50 + i * 80} Q250,${30 + i * 80} 500,${50 + i * 80} Q750,${70 + i * 80} 1000,${50 + i * 80}`}
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-[#263311]"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: i * 0.1, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          ))}
        </svg>
      </div>

      {/* Floating golden particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-[#263311]/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Tu Pieza Única te Está Esperando
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            El viaje de transformación ha terminado. Desde la semilla de una idea hasta la pieza maestra que embellecerá tu hogar. 
            <span className="text-[#9acd32] font-medium"> ¿Comenzamos el tuyo?</span>
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[#263311] hover:bg-[#1a2509] text-white font-medium px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 min-w-[200px]"
            >
              Inicia tu Proyecto
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#263311] text-[#9acd32] hover:bg-[#263311] hover:text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 min-w-[200px]"
            >
              Ver el Workshop
            </Button>
          </motion.div>

          {/* Signature flourish */}
          <motion.div 
            className="mt-12 pt-8 border-t border-[#263311]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 italic text-sm">
              &ldquo;Cada mueble cuenta una historia. La tuya comienza aquí.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}