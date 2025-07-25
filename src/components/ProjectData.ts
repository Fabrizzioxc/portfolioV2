// components/ProjectData.ts
import ReactIcon from "@/components/icons/ReactIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon";
import AstroIcon from "@/components/icons/AstroIcon";
import TailwindCSSIcon from "@/components/icons/TailwindCSSIcon";
import PreactIcon from "@/components/icons/PreactIcon";

export interface Project {
  title: string;
  description: string;
  stack: { icon: React.ComponentType<any>; name: string }[];
  repo?: string;
  preview?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Inventario Web - Matrioska",
    description:
      "Aplicación para la gestión interna de inventarios con funcionalidades CRUD, filtros avanzados y exportación de datos. Presenta una interfaz moderna, fluida y optimizada para dispositivos móviles.",
    stack: [
      { icon: ReactIcon, name: "React" },
      { icon: ExpressIcon, name: "Express" },
      { icon: PostgreSQLIcon, name: "PostgreSQL" },
    ],
    repo: "https://github.com/usuario/matrioska-inventario",
    preview: "https://matrioska-inventario.vercel.app",
    image: "/images/matrioska.png",
  },
  {
    title: "Sitio Web Corporativo",
    description:
      "Sitio web corporativo enfocado en velocidad de carga, SEO técnico y diseño responsive. Ofrece una experiencia de usuario clara y profesional, fortaleciendo la presencia digital de la empresa.",
    stack: [
      { icon: AstroIcon, name: "Astro" },
      { icon: TailwindCSSIcon, name: "Tailwind CSS" },
      { icon: PreactIcon, name: "Preact" },
    ],
    repo: "https://github.com/Fabrizzioxc/J-J",
    preview: "https://jyj-two.vercel.app",
    image: "/images/jyj.png",
  },
];
