export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="relative">
          {/* Aquí se podría implementar un carrusel de testimonios */}
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl italic font-serif text-gray-700">
              “El equipo de Raíces y Diseño no solo transformó nuestro salón, sino que entendió a la perfección la calidez y funcionalidad que buscábamos. Cada detalle fue pensado. ¡No podríamos estar más felices!”
            </blockquote>
            <p className="mt-6 font-semibold text-gray-800">- Familia García</p>
            <p className="text-sm text-gray-500">Clientes de Diseño de Interiores</p>
          </div>
        </div>
      </div>
    </section>
  );
}