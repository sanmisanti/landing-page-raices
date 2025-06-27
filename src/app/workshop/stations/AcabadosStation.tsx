'use client'

import { motion } from 'framer-motion'

const TESTIMONIOS = [
  {
    nombre: 'Maria Gonzalez',
    proyecto: 'Mesa de comedor',
    testimonio: 'Superaron todas mis expectativas. La atención al detalle es excepcional.',
    rating: 5
  },
  {
    nombre: 'Carlos Rodriguez',
    proyecto: 'Librero modular',
    testimonio: 'Calidad artesanal que se nota en cada rincón. Totalmente recomendado.',
    rating: 5
  },
  {
    nombre: 'Ana Martinez',
    proyecto: 'Restauración de sillas',
    testimonio: 'Devolvieron la vida a mis muebles heredados. Un trabajo impecable.',
    rating: 5
  }
]

export default function AcabadosStation() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-50">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='25' cy='25' r='3'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-3 bg-amber-600/20 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
            Estación 6: Mesa de Acabados
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-3">
            El toque final
          </h2>
          
          <p className="text-base text-stone-600 max-w-2xl mx-auto">
            Los acabados son el alma de cada pieza. Escuchá lo que dicen nuestros clientes 
            sobre la experiencia completa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          {TESTIMONIOS.map((testimonio, index) => (
            <motion.div
              key={testimonio.nombre}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonio.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    className="text-amber-500 text-lg"
                  >
                    ★
                  </motion.div>
                ))}
              </div>
              
              <blockquote className="text-stone-700 mb-4 italic">
                “{testimonio.testimonio}”
              </blockquote>
              
              <div className="border-t border-amber-200 pt-4">
                <div className="font-semibold text-stone-800">{testimonio.nombre}</div>
                <div className="text-sm text-stone-600">{testimonio.proyecto}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-amber-800 to-amber-700 rounded-2xl p-6 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Proceso de Acabados</h3>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {[
              { paso: 'Lijado', icono: '🧨', desc: 'Suavidad perfecta' },
              { paso: 'Tinte', icono: '🎨', desc: 'Color uniforme' },
              { paso: 'Sellado', icono: '🖒', desc: 'Protección duradera' },
              { paso: 'Pulido', icono: '✨', desc: 'Brillo final' }
            ].map((item, i) => (
              <motion.div
                key={item.paso}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icono}</div>
                <div className="font-semibold mb-2">{item.paso}</div>
                <div className="text-sm text-amber-100">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}