'use client'

import ProjectCard from "@/app/components/ui/project-card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";

// Phase 2: Árbol Joven - Bocetos y conceptos iniciales
const conceptualProjects = [
  {
    title: "Del Boceto al Banco",
    category: "Proceso Creativo",
    imageUrl: "/IMG_6663.heic",
    href: "/proyectos/banco-roble",
  },
  {
    title: "Sketches de Restauración",
    category: "Desarrollo de Ideas",
    imageUrl: "/IMG_6524.HEIC",
    href: "/proyectos/silla-vintage",
  },
  {
    title: "Conceptos de Espacio",
    category: "Diseño Conceptual",
    imageUrl: "/IMG_6391.heic",
    href: "/proyectos/diseño-salon",
  },
];

export default function FeaturedProjects() {
  // Pre-generate stable values to avoid hydration mismatch
  const leaves = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 20 + (i % 4) * 20,
      top: 10 + (i % 3) * 30,
      duration: 4 + (i % 2),
      delay: (i * 0.25) % 2
    })), []
  );

  return (
    <section id="conceptos" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-green-100 to-lime-50 relative overflow-hidden">
      {/* Growing Branch Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <motion.path
            d="M200,800 Q300,600 400,400 Q500,200 600,100"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-green-800"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M400,400 Q500,350 600,300"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-green-700"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M500,200 Q550,150 600,100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-green-600"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>
      </div>

      {/* Floating Leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute w-4 h-4 bg-green-600/20 rounded-full"
          style={{
            left: `${leaf.left}%`,
            top: `${leaf.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: leaf.delay
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-900">
              Ideas que Toman Forma
            </h2>
            <p className="max-w-[900px] text-green-800/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Como un árbol joven que despliega sus primeras hojas, cada proyecto nace de bocetos, 
              conceptos e ideas que van creciendo hasta convertirse en realidad tangible.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {conceptualProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                href={project.href}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/proyectos">
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              Descubre el proceso completo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}