import { Button } from "@/app/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portada1.heic"
          alt="Rincón de salón moderno con sillón de madera y tapicería clara junto a una planta verde"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-6 leading-tight tracking-wide">
          La madera como raíz,
          <br />
          el diseño como lenguaje.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Transformamos espacios con muebles de autor y un diseño que cuenta tu historia.
        </p>

        {/* Call to Action Button */}
        <Button
          size="lg"
          className="bg-white hover:bg-stone-50 text-stone-800 font-medium px-8 py-4 text-base sm:text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border-0"
        >
          Explora nuestros proyectos
        </Button>
      </div>

      {/* Scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
