'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const WOOD_TYPES = [
  {
    name: 'Roble',
    color: '#D4B896',
    texture: 'Veta pronunciada',
    origin: 'Europeo',
    characteristics: ['Resistente', 'Duradero', 'Veta hermosa'],
    uses: ['Muebles premium', 'Pisos', 'Barriles']
  },
  {
    name: 'Nogal',
    color: '#8B4513',
    texture: 'Veta ondulada',
    origin: 'Americano',
    characteristics: ['Elegante', 'Trabajable', 'Color rico'],
    uses: ['Muebles finos', 'Instrumentos', 'Decoración']
  },
  {
    name: 'Cerezo',
    color: '#CD853F',
    texture: 'Veta suave',
    origin: 'Nacional',
    characteristics: ['Cálido', 'Uniforme', 'Envejecimiento noble'],
    uses: ['Gabinetes', 'Molduras', 'Torneado']
  },
  {
    name: 'Pino',
    color: '#F4E4BC',
    texture: 'Veta recta',
    origin: 'Local',
    characteristics: ['Aromático', 'Liviano', 'Económico'],
    uses: ['Construcción', 'Muebles rústicos', 'Artesanías']
  }
]

export default function MaderaStation() {
  const [selectedWood, setSelectedWood] = useState<number | null>(null)
  const [isInspecting, setIsInspecting] = useState(false)

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Workshop lumber yard background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23663300' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-11a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
        {/* Station Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-3 bg-amber-800/10 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
            Estación 2: Selección de Madera
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-3">
            El alma de cada pieza
          </h2>
          
          <p className="text-base text-stone-600 max-w-2xl mx-auto">
            Cada madera tiene su personalidad. Explorá nuestras especies seleccionadas 
            y descubrí cuál cuenta mejor tu historia.
          </p>
        </motion.div>

        {/* Wood Selection Interface */}
        <div className="grid lg:grid-cols-3 gap-4 flex-1">
          {/* Wood Types Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {WOOD_TYPES.map((wood, index) => (
              <motion.div
                key={wood.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
                  selectedWood === index
                    ? 'ring-2 ring-amber-500 shadow-xl scale-105'
                    : 'hover:shadow-lg hover:scale-102'
                }`}
                style={{ 
                  backgroundColor: wood.color + '40',
                  border: `2px solid ${wood.color}60`
                }}
                onClick={() => setSelectedWood(selectedWood === index ? null : index)}
              >
                {/* Wood Grain Simulation */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: `repeating-linear-gradient(
                      90deg,
                      ${wood.color}20 0px,
                      ${wood.color}40 2px,
                      ${wood.color}20 4px
                    )`
                  }}
                />

                <div className="relative z-10">
                  {/* Wood Sample */}
                  <div 
                    className="w-full h-16 rounded-lg mb-3 shadow-inner"
                    style={{ 
                      backgroundColor: wood.color,
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          transparent,
                          transparent 2px,
                          ${wood.color}40 2px,
                          ${wood.color}40 4px
                        )
                      `
                    }}
                  />

                  <h3 className="text-xl font-bold text-stone-800 mb-2">{wood.name}</h3>
                  <p className="text-sm text-stone-600 mb-2">{wood.texture}</p>
                  <p className="text-xs text-stone-500">{wood.origin}</p>

                  {/* Selection Indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white/80 bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    animate={{
                      scale: selectedWood === index ? 1.2 : 1,
                      backgroundColor: selectedWood === index ? '#f59e0b' : 'rgba(255,255,255,0.2)'
                    }}
                  >
                    {selectedWood === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                    )}
                  </motion.div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wood Details Panel */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-amber-200/50"
            >
              <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                Inspector de Madera
              </h3>

              {selectedWood !== null ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-2">
                        {WOOD_TYPES[selectedWood].name}
                      </h4>
                      <div className="text-sm text-stone-600 space-y-1">
                        <p><strong>Origen:</strong> {WOOD_TYPES[selectedWood].origin}</p>
                        <p><strong>Textura:</strong> {WOOD_TYPES[selectedWood].texture}</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-stone-800 mb-2">Características:</h5>
                      <div className="flex flex-wrap gap-1">
                        {WOOD_TYPES[selectedWood].characteristics.map((char, i) => (
                          <span
                            key={i}
                            className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-stone-800 mb-2">Usos ideales:</h5>
                      <ul className="text-sm text-stone-600 space-y-1">
                        {WOOD_TYPES[selectedWood].uses.map((use, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-amber-600 rounded-full" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-amber-800 text-white py-3 rounded-lg font-medium hover:bg-amber-900 transition-colors"
                      onClick={() => setIsInspecting(!isInspecting)}
                    >
                      {isInspecting ? 'Finalizar Inspección' : 'Inspeccionar de Cerca'}
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-8 text-stone-500">
                  <div className="text-4xl mb-4">👆</div>
                  <p>Selecciona una madera para ver sus detalles</p>
                </div>
              )}
            </motion.div>

            {/* Tools Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-stone-800 text-white rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span>📏</span>
                Herramientas del Oficio
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-xl">📐</span>
                  <div>
                    <div className="font-medium">Regla de Carpintero</div>
                    <div className="text-white/70 text-xs">Para medidas precisas</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <span className="text-xl">🔍</span>
                  <div>
                    <div className="font-medium">Lupa de Vetas</div>
                    <div className="text-white/70 text-xs">Inspección detallada</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Inspection Overlay */}
      {isInspecting && selectedWood !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setIsInspecting(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white rounded-2xl p-8 max-w-md mx-4"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">
              Inspección: {WOOD_TYPES[selectedWood].name}
            </h3>
            
            <div 
              className="w-full h-48 rounded-lg mb-4"
              style={{ 
                backgroundColor: WOOD_TYPES[selectedWood].color,
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    ${WOOD_TYPES[selectedWood].color}40 0px,
                    ${WOOD_TYPES[selectedWood].color}80 2px,
                    ${WOOD_TYPES[selectedWood].color}40 4px,
                    ${WOOD_TYPES[selectedWood].color}20 6px
                  )
                `
              }}
            />
            
            <p className="text-stone-600 mb-4">
              Vista microscópica de la veta y textura. Perfecta para entender 
              cómo se comportará durante el trabajo.
            </p>
            
            <button
              onClick={() => setIsInspecting(false)}
              className="w-full bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-900 transition-colors"
            >
              Cerrar Inspección
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}