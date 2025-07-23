// components/ProjectData.ts

export interface Project {
  title: string
  description: string
  stack: { icon: string; name: string }[]
  repo?: string
  preview?: string
  image: string
}

export const projects: Project[] = [
  {
    title: "Inventario Web - Matrioska",
    description:
      "Aplicación web desarrollada con React, Express y PostgreSQL para gestionar el inventario interno de Matrioska. Incluye funcionalidades CRUD, filtros avanzados y exportación de datos, con una interfaz moderna y fluida adaptada a dispositivos móviles.",
    stack: [
      { icon: "ReactIcon", name: "React" },
      { icon: "ExpressIcon", name: "Express" },
      { icon: "PostgreSQLIcon", name: "PostgreSQL" },
    ],
    repo: "https://github.com/usuario/matrioska-inventario",
    preview: "https://matrioska-inventario.vercel.app",
    image: "/images/matrioska.png",
  },
  {
    title: "Sitio Web Corporativo - JYJ Servicios Generales S.A.C",
    description:
      "Sitio web desarrollado con Astro, Tailwind CSS y Preact, diseñado previamente en Figma. El enfoque estuvo en la velocidad de carga, el SEO técnico y una experiencia de usuario limpia, optimizada para diferentes dispositivos. Representa la presencia digital de la empresa con un diseño moderno y profesional.",
    stack: [
      { icon: "AstroIcon", name: "Astro" },
      { icon: "TailwindCSSIcon", name: "Tailwind CSS" },
      { icon: "PreactIcon", name: "Preact" },
    ],
    preview: "https://jyj-servicios.vercel.app",
    image: "/images/jyj.png",
  },
]
