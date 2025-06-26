import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

// Iconos (idealmente serían componentes SVG importados)
const InteriorDesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 22v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
    <path d="M2 18v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
    <path d="M4 14V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
    <path d="M12 14v-2" />
    <path d="M12 7V5" />
  </svg>
);
const CustomFurnitureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 12v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
    <path d="M20 12V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
    <path d="M4 12H2" />
    <path d="M22 12h-2" />
    <path d="M12 12v8" />
    <path d="M12 2v4" />
  </svg>
);
const RestorationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 14.66V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5.34" />
    <path d="M18 2H6a2 2 0 0 0-2 2v4h16V4a2 2 0 0 0-2-2Z" />
    <path d="M12 14v-4" />
    <path d="M12 6v-2" />
  </svg>
);

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Tu Visión, Nuestro Taller
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Ofrecemos una gama completa de servicios para dar vida a tus ideas,
            desde el concepto inicial hasta el último detalle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-stone-100 rounded-full p-4 w-fit">
                <InteriorDesignIcon />
              </div>
              <CardTitle className="mt-4">Diseño de Interiores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Creamos espacios cohesivos y funcionales que reflejan tu
                personalidad y estilo de vida.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-stone-100 rounded-full p-4 w-fit">
                <CustomFurnitureIcon />
              </div>
              <CardTitle className="mt-4">Muebles a Medida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Diseñamos y construimos piezas únicas de mobiliario que se
                adaptan perfectamente a tu espacio y necesidades.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-stone-100 rounded-full p-4 w-fit">
                <RestorationIcon />
              </div>
              <CardTitle className="mt-4">Restauración y Lavado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Devolvemos la vida a tus muebles más queridos, preservando su
                historia y renovando su belleza.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
