'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/app/components/ui/project-card'

const PROYECTOS_DESTACADOS = [
  {
    titulo: 'Mesa de Comedor Roble',
    descripcion: 'Mesa familiar para 8 personas con acabado natural',
    imagen: '/IMG_6362.heic',
    categoria: 'Muebles'
  },
  {
    titulo: 'Librero Modular',
    descripcion: 'Sistema de estanterías adaptable en nogal',
    imagen: '/IMG_6369.heic',
    categoria: 'Almacenamiento'
  },
  {
    titulo: 'Banco Artesanal',
    descripcion: 'Pieza única tallada a mano en cerezo',
    imagen: '/IMG_6386.heic',
    categoria: 'Asientos'
  },
  {
    titulo: 'Lámpara Colgante',
    descripcion: 'Iluminación con diseño geométrico',
    imagen: '/IMG_6391.heic',
    categoria: 'Iluminación'
  }
]

export default function GaleriaStation() {
  return (
    <section className="w-full h-full relative overflow-hidden bg-gradient-to-br from-stone-900 to-amber-900">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-3 bg-amber-400/20 text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Estación 5: Galería de Piezas
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-3">
            Nuestras creaciones
          </h2>
          
          <p className="text-base text-amber-100 max-w-2xl mx-auto">
            Cada pieza cuenta una historia. Descubrí el portfolio de nuestros trabajos más destacados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 flex-1">
          {PROYECTOS_DESTACADOS.map((proyecto, index) => (
            <motion.div
              key={proyecto.titulo}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <ProjectCard
                title={proyecto.titulo}
                imageUrl={proyecto.imagen}
                category={proyecto.categoria}
                href="#"
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Museum lighting effect */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  )
}