import ProjectCard from "@/app/components/ui/project-card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

// Datos de ejemplo para los proyectos. Más adelante, esto podría venir de un CMS.
const featuredProjects = [
  {
    title: "Restauración Silla Vintage",
    category: "Restauración",
    imageUrl: "/IMG_6524.HEIC",
    href: "/proyectos/silla-vintage",
  },
  {
    title: "Diseño Salón Principal",
    category: "Diseño de Interiores",
    imageUrl: "/IMG_6391.heic",
    href: "/proyectos/diseño-salon",
  },
  {
    title: "Banco de Roble a Medida",
    category: "Muebles de Autor",
    imageUrl: "/IMG_6663.heic",
    href: "/proyectos/banco-roble",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Proyectos que Cuentan una Historia</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cada pieza y espacio que diseñamos tiene un alma. Aquí tienes una selección de nuestro trabajo más reciente.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              href={project.href}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/proyectos">
            <Button variant="outline" size="lg">
              Ver todos los proyectos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}