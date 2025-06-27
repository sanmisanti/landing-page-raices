'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/app/components/ui/button'

// Hook personalizado para manejar dimensiones de ventana de forma segura
function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return { ...dimensions, isClient }
}

export default function EntradaStation() {
  const { width, height, isClient } = useWindowDimensions()

  return (
    <section className="w-full h-full relative overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Workshop Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-amber-800/90 text-amber-100 px-6 py-3 rounded-full text-sm font-medium"
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Bienvenido al Taller Digital
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl lg:text-6xl font-serif text-amber-100 leading-tight"
            >
              Donde la madera 
              <span className="block text-amber-300">
                cobra vida
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-amber-200 leading-relaxed max-w-md"
            >
              Cada pieza cuenta una historia. Te invitamos a recorrer nuestro taller 
              y descubrir el proceso artesanal detrás de cada creación.
            </motion.p>
          </div>

          {/* Master Craftsman Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center gap-4 p-4 bg-amber-900/50 backdrop-blur-sm rounded-xl border border-amber-400/50"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R&D</span>
            </div>
            <div>
              <div className="font-semibold text-amber-100">Maestro Artesano</div>
              <div className="text-sm text-amber-200">25+ años de experiencia</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-4"
          >
            <Button
              size="lg"
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Comenzar el Recorrido
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-800 text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-lg"
            >
              Ver Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Redesigned Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative space-y-6"
        >
          {/* Workshop Stats Card - Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-amber-200/30 shadow-lg"
          >
            <h3 className="text-xl font-bold text-amber-100 mb-4">Nuestro Taller</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-300">15+</div>
                <div className="text-sm text-amber-200">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-300">200+</div>
                <div className="text-sm text-amber-200">Piezas creadas</div>
              </div>
            </div>
          </motion.div>

          {/* Wood Types Preview - Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-amber-200/30 shadow-lg"
          >
            <h3 className="text-lg font-bold text-amber-100 mb-4">Maderas Disponibles</h3>
            
            <div className="space-y-3">
              {['Roble Europeo', 'Nogal Americano', 'Cerezo Nacional'].map((wood, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-amber-200/20"
                >
                  <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full"></div>
                  <span className="text-amber-200 text-sm font-medium">{wood}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-4 pt-4 border-t border-amber-200/20"
            >
              <div className="text-xs text-amber-300 text-center">
                Próxima estación: Selección de Materiales
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Hint - Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-amber-200/30 shadow-lg text-center"
          >
            <div className="text-amber-200 text-sm mb-2">Continuar recorrido</div>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-amber-400 text-xs"
            >
              ↓ Scroll para avanzar
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Workshop Ambiance Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800" />
      
      {/* Floating sawdust particles */}
      {isClient && Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-800/20 rounded-full"
          initial={{ 
            x: Math.random() * width,
            y: height + 10
          }}
          animate={{
            y: -50,
            x: Math.random() * width
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 3
          }}
        />
      ))}
    </section>
  )
}