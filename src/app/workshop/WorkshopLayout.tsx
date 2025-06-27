'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DynamicCursor from './DynamicCursor'

// Workshop Station Components
import EntradaStation from './stations/EntradaStation'
import MaderaStation from './stations/MaderaStation' 
import BancoStation from './stations/BancoStation'
import HerramientasStation from './stations/HerramientasStation'
import GaleriaStation from './stations/GaleriaStation'
import AcabadosStation from './stations/AcabadosStation'
import ContactoStation from './stations/ContactoStation'

interface WorkshopStation {
  id: string
  name: string
  component: React.ComponentType
  audioFile?: string
  lighting: 'warm' | 'bright' | 'focused' | 'ambient'
  cursorTool: 'hammer' | 'saw' | 'brush' | 'ruler' | 'chisel' | 'sandpaper' | 'default'
}

const WORKSHOP_STATIONS: WorkshopStation[] = [
  {
    id: 'entrada',
    name: 'Recepción del Taller',
    component: EntradaStation,
    lighting: 'warm',
    cursorTool: 'default'
  },
  {
    id: 'madera',
    name: 'Selección de Madera',
    component: MaderaStation,
    lighting: 'bright',
    cursorTool: 'ruler'
  },
  {
    id: 'banco',
    name: 'Banco de Trabajo',
    component: BancoStation,
    lighting: 'focused',
    cursorTool: 'chisel'
  },
  {
    id: 'herramientas',
    name: 'Caja de Herramientas',
    component: HerramientasStation,
    lighting: 'bright',
    cursorTool: 'hammer'
  },
  {
    id: 'galeria',
    name: 'Galería de Piezas',
    component: GaleriaStation,
    lighting: 'ambient',
    cursorTool: 'default'
  },
  {
    id: 'acabados',
    name: 'Mesa de Acabados',
    component: AcabadosStation,
    lighting: 'focused',
    cursorTool: 'brush'
  },
  {
    id: 'contacto',
    name: 'Zona de Entrega',
    component: ContactoStation,
    lighting: 'warm',
    cursorTool: 'default'
  }
]

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

export default function WorkshopLayout() {
  const [currentStation, setCurrentStation] = useState(0)
  const { width, height, isClient } = useWindowDimensions()

  const currentStationData = WORKSHOP_STATIONS[currentStation]
  const CurrentStationComponent = currentStationData.component

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Dynamic Cursor */}
      <DynamicCursor tool={currentStationData.cursorTool} />
      
      {/* Workshop Lighting Effect */}
      <div 
        className={`fixed inset-0 transition-all duration-1000 pointer-events-none ${
          currentStationData.lighting === 'warm' ? 'bg-gradient-to-br from-amber-100/30 to-orange-200/20' :
          currentStationData.lighting === 'bright' ? 'bg-gradient-to-br from-yellow-100/40 to-amber-100/30' :
          currentStationData.lighting === 'focused' ? 'bg-gradient-to-r from-gray-100/20 via-white/40 to-gray-100/20' :
          'bg-gradient-to-br from-stone-100/30 to-amber-50/20'
        }`}
      />

      {/* Workshop Navigation - Vertical Right */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center gap-3 bg-black/80 backdrop-blur-md rounded-full px-3 py-6">
          {WORKSHOP_STATIONS.map((station, index) => (
            <button
              key={station.id}
              onClick={() => setCurrentStation(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStation 
                  ? 'bg-amber-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              title={station.name}
            >
              {index === currentStation && (
                <motion.div
                  className="absolute -inset-2 border-2 border-amber-400/50 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Station Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="flex flex-col items-start gap-2 bg-black/80 backdrop-blur-md rounded-lg px-4 py-3 text-white">
          <div className="text-xs text-amber-400 font-medium">
            {currentStation + 1} / {WORKSHOP_STATIONS.length}
          </div>
          <div className="text-sm font-medium">
            {currentStationData.name}
          </div>
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-400"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStation + 1) / WORKSHOP_STATIONS.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Hints */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col gap-2 text-black/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 border border-black/30 rounded flex items-center justify-center text-xs">↑↓</div>
            <span>Scroll entre estaciones</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 border border-black/30 rounded flex items-center justify-center text-xs">•</div>
            <span>Click navegación</span>
          </div>
        </div>
      </div>

      {/* Main Workshop Content - Vertical Scroll */}
      <main className="relative z-10">
        {WORKSHOP_STATIONS.map((station, index) => {
          const StationComponent = station.component
          return (
            <motion.section
              key={station.id}
              className="h-screen flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => setCurrentStation(index)}
            >
              <StationComponent />
            </motion.section>
          )
        })}
      </main>

      {/* Wood Particles Effect */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-5">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-800/20 rounded-full"
              initial={{ 
                x: Math.random() * width,
                y: height + 10
              }}
              animate={{
                y: -10,
                x: Math.random() * width
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}