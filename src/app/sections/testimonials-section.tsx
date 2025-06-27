'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { useMemo } from "react";

// Phase 4: Tala Selectiva - Proceso artesanal y testimonios del craft
const craftStories = [
  {
    name: "El Proceso de Talla",
    role: "Técnica Tradicional",
    content:
      "Cada corte es deliberado, cada ángulo calculado. La tala selectiva respeta la naturaleza de la madera, aprovechando sus fortalezas y respetando su historia natural.",
    tool: "🪚",
  },
  {
    name: "Secado y Curado",
    role: "Paciencia Artesanal",
    content:
      "Tiempo y paciencia son nuestros aliados. El curado natural permite que la madera alcance su punto óptimo, eliminando tensiones y garantizando durabilidad.",
    tool: "⏰",
  },
  {
    name: "Ensamblaje Preciso",
    role: "Maestría Técnica",
    content:
      "Las uniones tradicionales sin clavos ni tornillos. Cada encaje es una obra de ingeniería que permite que la pieza respire y se adapte al tiempo.",
    tool: "🔨",
  },
];

export default function TestimonialsSection() {
  // Pre-generate stable values to avoid hydration mismatch
  const sawdust = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: 5 + (i * 4.75) % 90,
      top: 10 + (i * 4.5) % 80,
      xMovement: (i % 5 - 2) * 12.5,
      duration: 8 + (i % 4),
      delay: (i * 0.25) % 5
    })), []
  );

  return (
    <section id="proceso" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 relative overflow-hidden">
      {/* Sawdust Particles */}
      {sawdust.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xMovement, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Tool Marks Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.g key={i}>
              <motion.path
                d={`M${100 + i * 120},100 L${150 + i * 120},900`}
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-orange-800"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
              <motion.path
                d={`M${150 + i * 120},100 L${100 + i * 120},900`}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-orange-700"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 + 0.3, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-900">
            El Arte de la Talla Selectiva
          </h2>
          <p className="max-w-[900px] mx-auto text-orange-800/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Como el artesano que selecciona cada corte con precisión, respetamos cada fibra de madera.
            Aquí comienza la verdadera transformación: de material noble a obra maestra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {craftStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center border-orange-200 hover:border-orange-400 transition-all duration-300 bg-white/90 backdrop-blur-sm h-full">
                <CardHeader>
                  <motion.div 
                    className="mx-auto text-4xl mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {story.tool}
                  </motion.div>
                  <CardTitle className="text-lg text-orange-900">{story.name}</CardTitle>
                  <p className="text-sm text-orange-700/70 font-medium">{story.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-800/80 italic leading-relaxed">
                    &ldquo;{story.content}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Artisan Quote */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl md:text-2xl italic text-orange-900/90 max-w-4xl mx-auto">
            &ldquo;No cortamos madera, liberamos la forma que ya existe dentro de ella.&rdquo;
          </blockquote>
          <p className="text-orange-700 mt-4 font-medium">— Filosofía del Taller Raíces y Diseño</p>
        </motion.div>
      </div>
    </section>
  );
}