'use client'

import { motion } from "framer-motion"
import Navbar from "@/app/sections/navbar-section"
import { Button } from "@/app/components/ui/button"
import { useState, useEffect } from "react"

// Museum Hall Component
function MuseumHall() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [spotlightActive, setSpotlightActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-stone-900 to-slate-800 relative overflow-hidden">
      <Navbar />
      
      {/* Museum Lighting Ambiance */}
      <div className="absolute inset-0">
        {/* Ceiling Spotlights */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-radial from-amber-200/20 via-amber-100/10 to-transparent rounded-full blur-xl"
            style={{
              left: `${20 + (i % 3) * 30}%`,
              top: `${10 + Math.floor(i / 3) * 40}%`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Interactive Cursor Spotlight */}
        <motion.div
          className="fixed w-40 h-40 bg-gradient-radial from-amber-300/30 via-amber-200/15 to-transparent rounded-full pointer-events-none z-10 blur-lg"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
          }}
          animate={{
            scale: spotlightActive ? 1.5 : 1,
            opacity: spotlightActive ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hall de Entrada Content */}
      <div className="relative z-20 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Museum Entrance */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
              onHoverStart={() => setSpotlightActive(true)}
              onHoverEnd={() => setSpotlightActive(false)}
            >
              Galería
              <br />
              <span className="text-amber-300">Raíces y Diseño</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Bienvenido a nuestra galería interactiva. Cada pieza cobra vida al acercarte, 
              revelando la historia y el proceso detrás de cada creación artesanal.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Iniciar Visita Guiada
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-slate-900 font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300"
              >
                Explorar Libremente
              </Button>
            </motion.div>
          </motion.div>

          {/* Gallery Rooms Preview */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              {
                title: "Sala de Procesos",
                description: "Behind the scenes del taller",
                image: "🔨",
                spotlight: "from-blue-400/20",
              },
              {
                title: "Galería Principal", 
                description: "Portfolio de proyectos",
                image: "🖼️",
                spotlight: "from-emerald-400/20",
              },
              {
                title: "Sala de Materiales",
                description: "Texturas y acabados",
                image: "🌳",
                spotlight: "from-amber-400/20",
              },
            ].map((room, index) => (
              <motion.div
                key={room.title}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-amber-400/50 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setSpotlightActive(true)}
                onHoverEnd={() => setSpotlightActive(false)}
              >
                {/* Room Spotlight Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-radial ${room.spotlight} via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4">{room.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{room.title}</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {room.description}
                  </p>
                </div>

                {/* Entry Arrow */}
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Museum Info */}
          <motion.div 
            className="text-center mt-16 pt-8 border-t border-slate-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <p className="text-slate-400 italic">
              &ldquo;En este museo, cada pieza susurra los secretos de su creación al visitante atento.&rdquo;
            </p>
            <p className="text-amber-300 mt-2 text-sm">— Curador Digital</p>
          </motion.div>
        </div>
      </div>

      {/* Ambient Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </main>
  )
}

export default function Home() {
  return <MuseumHall />
}