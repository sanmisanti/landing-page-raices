import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <Link href="/" className="flex items-center justify-center">
        <span className="text-xl font-semibold text-gray-800">Raíces y Diseño</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#proyectos" className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4">
          Proyectos
        </Link>
        <Link href="#servicios" className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4">
          Servicios
        </Link>
        <Link href="#cursos" className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4">
          Cursos
        </Link>
        <Link href="#contacto" className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4">
          Contacto
        </Link>
      </nav>
    </header>
  );
}