import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
  href: string;
}

export default function ProjectCard({ imageUrl, title, category, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageUrl}
          alt={`Proyecto: ${title}`}
          width={600}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{category}</p>
      </div>
    </Link>
  );
}