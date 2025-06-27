'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const HERRAMIENTAS = [
  { nombre: 'Formón', emoji: '🔨', uso: 'Tallado de precisión', experiencia: 'Artesanal' },
  { nombre: 'Sierra Japonesa', emoji: '🪚', uso: 'Cortes finos', experiencia: 'Tradicional' },
  { nombre: 'Cepillo de Mano', emoji: '🛠️', uso: 'Alisado perfecto', experiencia: 'Maestría' },
  { nombre: 'Escofina', emoji: '⚒️', uso: 'Forma y textura', experiencia: 'Detalle' },
  { nombre: 'Berbiquí', emoji: '🔧', uso: 'Agujeros precisos', experiencia: 'Clásico' },
  { nombre: 'Gramil', emoji: '📏', uso: 'Marcado exacto', experiencia: 'Precisión' }
]

export default function HerramientasStation() {
  const [selectedTool, setSelectedTool] = useState<number | null>(null)

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-100 to-stone-200">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M15 0l15 15-15 15L0 15z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-3 bg-gray-800/10 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-3">
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" />
            Estación 4: Caja de Herramientas
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-3">
            Extensiones del artesano
          </h2>
          
          <p className="text-base text-stone-600 max-w-2xl mx-auto">
            Cada herramienta tiene su propósito. Conocé los instrumentos que dan vida a nuestras creaciones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 flex-1">
          {HERRAMIENTAS.map((herramienta, index) => (
            <motion.div
              key={herramienta.nombre}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
                selectedTool === index
                  ? 'bg-gray-800 text-white ring-2 ring-gray-600 shadow-2xl scale-105'
                  : 'bg-white/80 hover:bg-white hover:shadow-xl hover:scale-102'
              }`}
              onClick={() => setSelectedTool(selectedTool === index ? null : index)}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: selectedTool === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl mb-4"
                >
                  {herramienta.emoji}
                </motion.div>
                
                <h3 className="text-lg font-bold mb-2">{herramienta.nombre}</h3>
                <p className="text-sm opacity-80 mb-3">{herramienta.uso}</p>
                
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                  {herramienta.experiencia}
                </div>
              </div>

              {selectedTool === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {selectedTool !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 max-w-2xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200/50">
              <div className="text-center">
                <div className="text-3xl mb-2">{HERRAMIENTAS[selectedTool].emoji}</div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">
                  {HERRAMIENTAS[selectedTool].nombre}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">{HERRAMIENTAS[selectedTool].uso}</p>
                
                <div className="bg-gray-100 rounded-lg p-3 text-left">
                  <h4 className="font-semibold text-stone-800 mb-1 text-sm">Historia de la herramienta:</h4>
                  <p className="text-xs text-gray-600">
                    Una herramienta tradicional que ha sido perfeccionada durante generaciones. 
                    Cada {HERRAMIENTAS[selectedTool].nombre.toLowerCase()} en nuestro taller tiene su propia 
                    historia y ha contribuido a crear innumerables piezas únicas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}