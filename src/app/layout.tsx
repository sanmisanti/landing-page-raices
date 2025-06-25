import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raíces y Diseño - Estudio de Diseño de Interiores y Muebles",
  description: "Transformamos espacios y creamos muebles únicos con alma. Desde el diseño de interiores hasta la restauración de piezas con historia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
