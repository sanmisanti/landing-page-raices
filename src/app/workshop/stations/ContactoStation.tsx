'use client'

import { motion } from 'framer-motion'
import { Button } from '@/app/components/ui/button'

export default function ContactoStation() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-800 to-amber-900">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 text-white min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-3 bg-amber-400/20 text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Estación 7: Zona de Entrega
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-3">
            Tu proyecto nos espera
          </h2>
          
          <p className="text-base text-amber-100 max-w-2xl mx-auto">
            Listo para crear algo único? Contáctanos y empecemos a diseñar tu próxima pieza especial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-center flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Empezá tu proyecto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-amber-200 text-sm">+54 9 11 1234-5678</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-amber-200 text-sm">info@raicesydiseno.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold">Taller</div>
                    <div className="text-amber-200 text-sm">Buenos Aires, Argentina</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Empezar Proyecto
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-400 text-amber-400 hover:bg-amber-400/10 px-8 py-4 rounded-lg"
              >
                Ver Más Trabajos
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-6">Proceso de Trabajo</h3>
              
              <div className="space-y-4">
                {[
                  { paso: '1', titulo: 'Consulta inicial', desc: 'Hablamos de tu visión' },
                  { paso: '2', titulo: 'Diseño y presupuesto', desc: 'Creamos tu propuesta' },
                  { paso: '3', titulo: 'Construcción', desc: 'Magia en el taller' },
                  { paso: '4', titulo: 'Entrega', desc: 'Tu pieza única lista' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.paso}
                    </div>
                    <div>
                      <div className="font-semibold">{item.titulo}</div>
                      <div className="text-amber-200 text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500/20 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>

        {/* Workshop completion message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-8 p-6 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-3xl border border-amber-500/30"
        >
          <h3 className="text-xl font-bold mb-3">🎉 Gracias por recorrer nuestro taller</h3>
          <p className="text-amber-200 mb-4">
            Esperamos que hayas disfrutado esta experiencia inmersiva. 
            Cada rincón de nuestro taller está pensado para crear piezas únicas que cuenten tu historia.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-amber-300">
            <span>Presioná</span>
            <div className="px-3 py-1 bg-white/20 rounded-full font-mono">Home</div>
            <span>para volver al inicio del recorrido</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}