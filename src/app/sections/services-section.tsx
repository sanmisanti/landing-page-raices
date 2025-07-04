'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { useMemo } from "react";

// Phase 3: Árbol Maduro - Iconos representando materiales nobles
const OakIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2c-1 0-2 1-2 2 0 2 2 4 2 4s2-2 2-4c0-1-1-2-2-2Z" className="fill-[#263311]/20" />
    <path d="M8 6c-1.5 1-2 3-1 4.5 1 1 3 .5 4.5-1" />
    <path d="M16 6c1.5 1 2 3 1 4.5-1 1-3 .5-4.5-1" />
    <path d="M12 10v12" strokeWidth="3" className="stroke-[#263311]" />
  </svg>
);

const PineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L8 8h8l-4-6Z" className="fill-emerald-600/20" />
    <path d="M12 6L7 12h10l-5-6Z" className="fill-emerald-500/20" />
    <path d="M12 10L6 16h12l-6-6Z" className="fill-emerald-400/20" />
    <path d="M12 16v6" strokeWidth="3" className="stroke-[#263311]" />
  </svg>
);

const WalnutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="3" className="fill-[#263311]/20" />
    <path d="M12 11c-2 2-4 4-4 6s2 4 4 4 4-2 4-4-2-4-4-6Z" className="fill-[#263311]/30" />
    <path d="M12 2v6" strokeWidth="2" className="stroke-[#263311]" />
  </svg>
);

export default function ServicesSection() {
  // Pre-generate stable values to avoid hydration mismatch
  const woodChips = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 10 + (i % 5) * 20,
      top: 15 + (i % 4) * 25,
      duration: 6 + (i % 3),
      delay: (i * 0.25) % 3
    })), []
  );

  return (
    <section id="materiales" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#263311]/5 via-green-50 to-[#263311]/3 relative overflow-hidden">
      {/* Wood Grain Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M0,${150 + i * 120} Q250,${100 + i * 120} 500,${150 + i * 120} Q750,${200 + i * 120} 1000,${150 + i * 120}`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-[#263311]"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Wood Chips */}
      {woodChips.map((chip) => (
        <motion.div
          key={chip.id}
          className="absolute w-3 h-1 bg-[#263311]/20 rounded-sm"
          style={{
            left: `${chip.left}%`,
            top: `${chip.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            x: [0, 20, 0],
          }}
          transition={{
            duration: chip.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: chip.delay
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#263311]">
            La Selección de Materiales Nobles
          </h2>
          <p className="max-w-[900px] mx-auto text-[#263311]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Como un árbol maduro que ha alcanzado su plenitud, seleccionamos las maderas más nobles
            y los materiales de mayor calidad para dar vida a cada pieza única.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: OakIcon,
              title: "Roble Europeo",
              description: "Madera noble de grano pronunciado, ideal para muebles de autor que perduran generaciones. Su resistencia y belleza natural la convierten en nuestra elección predilecta.",
              delay: 0
            },
            {
              icon: PineIcon,
              title: "Pino Nórdico",
              description: "Madera sostenible de crecimiento lento, perfecta para proyectos contemporáneos. Su versatilidad permite acabados desde rústicos hasta minimalistas.",
              delay: 0.2
            },
            {
              icon: WalnutIcon,
              title: "Nogal Americano",
              description: "La aristocracia de las maderas. Su veteado único y tonalidades profundas aportan elegancia y carácter a cada pieza exclusiva.",
              delay: 0.4
            }
          ].map((material) => (
            <motion.div
              key={material.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: material.delay,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center border-[#263311]/20 hover:border-[#263311]/40 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <motion.div 
                    className="mx-auto bg-gradient-to-br from-[#263311]/10 to-[#263311]/5 rounded-full p-4 w-fit"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <material.icon />
                  </motion.div>
                  <CardTitle className="mt-4 text-[#263311]">{material.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#263311]/70">
                    {material.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}