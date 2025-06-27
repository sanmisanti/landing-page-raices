'use client'

import { motion } from 'framer-motion'
import { Button } from '@/app/components/ui/button'

export default function BancoStation() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center py-8">
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23663300' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-3 bg-stone-800/10 text-stone-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-stone-600 rounded-full animate-pulse" />
            Estación 3: Banco de Trabajo
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-4">
            El corazón del taller
          </h2>
          
          <p className="text-base text-stone-600 max-w-2xl mx-auto mb-6">
            Aquí es donde la visión se convierte en realidad. Cada corte, cada lijada, 
            cada detalle está pensado para crear piezas únicas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-stone-200/50 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-800">Proceso de Diseño</h3>
              
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Boceto inicial', desc: 'Plasmamos tu visión en papel' },
                  { step: '02', title: 'Medidas precisas', desc: 'Cada milímetro cuenta' },
                  { step: '03', title: 'Selección de técnicas', desc: 'Ensambles tradicionales' },
                  { step: '04', title: 'Planificación', desc: 'Orden de construcción' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-amber-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-stone-800">{item.title}</div>
                      <div className="text-sm text-stone-600">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-200 to-stone-300 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-700/80 rounded-full shadow-lg flex items-center justify-center"
                >
                  <div className="text-white text-3xl">🔨</div>
                </motion.div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-center">
                    <div className="text-sm font-medium">Banco de Trabajo Tradicional</div>
                    <div className="text-xs text-white/70">Roble macizo, 150 años</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-6"
        >
          <Button
            size="lg"
            className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Ver Proceso Completo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}