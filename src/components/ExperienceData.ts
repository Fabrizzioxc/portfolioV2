// src/components/ExperienceData.ts
export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  button: string;
  detailed?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "jyj",
    date: "Julio 2025",
    title: "Desarrollador Web Freelance",
    company: "J&J Servicios Generales S.A.C",
    description:
      "Desarrollé el sitio web corporativo de J&J Servicios Generales como desarrollador freelance, participando desde el diseño hasta la entrega final. Enfocado en mejorar la presencia digital de la empresa, implementé prácticas de optimización SEO y rendimiento, asegurando una navegación ágil y moderna.",
    button: "Ver más",
    detailed: true,
  },
  {
    id: "matrioska",
    date: "Mayo 2024 - Diciembre 2024",
    title: "Desarrollador Full Stack",
    company: "Matrioska S.A.C",
    description:
      "Desarrollé una aplicación web de inventario para optimizar la gestión operativa de Matrioska. El sistema mejoró el control interno, agilizó el flujo de trabajo y facilitó la organización de productos mediante filtros avanzados y herramientas de exportación. El enfoque en usabilidad y eficiencia permitió a la empresa centralizar sus procesos de manera más efectiva.",
    button: "Ver más",
    detailed: true, // <- ahora también abre el diálogo
  },
];
