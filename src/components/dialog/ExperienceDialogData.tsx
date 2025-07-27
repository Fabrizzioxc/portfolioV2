// src/components/dialog/ExperienceDialogData.ts
import type { ElementType, ReactNode } from "react";
import {
  Calendar,
  Briefcase,
  User,
  Database,
  Server,
  Code2,
} from "lucide-react";

import AstroIcon from "@/components/icons/AstroIcon";
import TailwindCSSIcon from "@/components/icons/TailwindCSSIcon";
import PreactIcon from "@/components/icons/PreactIcon";

import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";

export interface DialogCard {
  icon: ElementType;
  label: string;
  value: string;
}

export interface DialogAchievement {
  id: number;
  content: ReactNode;
}

export interface DialogTech {
  icon: ElementType;
  label: string;
}

export interface DialogExperience {
  id: string;
  title: string;
  /** Cards (fecha, empleo, rol) */
  cards: DialogCard[];
  /** Párrafo(s) de detalles */
  details: ReactNode;
  /** Logros destacados */
  achievements: DialogAchievement[];
  /** Tecnologías usadas */
  technologies: DialogTech[];
}

export const dialogExperiences: Record<string, DialogExperience> = {
  jyj: {
    id: "jyj",
    title: "J&J Servicios Generales S.A.C",
    cards: [
      { icon: Calendar, label: "Fecha", value: "Julio 2025" },
      { icon: Briefcase, label: "Empleo", value: "Freelance" },
      { icon: User, label: "Rol", value: "Desarrollador web" },
    ],
    details: (
      <p className="text-base font-normal md:text-lg leading-relaxed text-foreground/90 pb-8">
        Durante el mes de julio de 2025, trabajé como desarrollador web
        freelance para <strong className="font-bold">J&amp;J Servicios Generales S.A.C</strong>. 
        La necesidad clave del cliente era establecer una sólida presencia digital 
        para visibilizar y promover sus servicios especializados en drywall, pintura 
        y electricidad. Mi responsabilidad abarcó el ciclo completo del proyecto, 
        desde la concepción del <strong className="font-bold">diseño en Figma</strong> 
        hasta el <strong className="font-bold">Desarrollo Frontend</strong> final de la plataforma.
      </p>
    ),
    achievements: [
      {
        id: 1,
        content: (
          <>
            <strong className="font-bold">Optimización de Rendimiento y SEO:</strong>{" "}
            La página web alcanzó métricas perfectas en PageSpeed con un
            rendimiento excepcional.
          </>
        ),
      },
      {
        id: 2,
        content: (
          <>
            <strong className="font-bold">Diseño y Desarrollo Integral:</strong>{" "}
            Creación de un sitio web moderno y responsivo que comunica eficazmente
            la oferta de servicios.
          </>
        ),
      },
      {
        id: 3,
        content: (
          <>
            <strong className="font-bold">Experiencia de Usuario Refinada:</strong>{" "}
            Implementación estratégica de animaciones sutiles para enriquecer la
            interacción.
          </>
        ),
      },
    ],
    technologies: [
      { icon: AstroIcon, label: "Astro" },
      { icon: TailwindCSSIcon, label: "Tailwind CSS" },
      { icon: PreactIcon, label: "Preact" },
    ],
  },

  matrioska: {
    id: "matrioska",
    title: "Matrioska S.A.C",
    cards: [
      { icon: Calendar, label: "Fecha", value: "Mayo 2024 – Dic 2024" },
      { icon: Briefcase, label: "Empleo", value: "Prácticas" },
      { icon: User, label: "Rol", value: "Desarrollador de software" },
    ],
    details: (
      <p className="text-base font-normal md:text-lg leading-relaxed text-foreground/90 pb-8">
        Desarrollé una aplicación web de inventario para optimizar la gestión
        operativa de <strong className="font-bold">Matrioska S.A.C</strong>. 
        El sistema mejoró el control interno, agilizó el flujo de trabajo y 
        facilitó la organización de productos mediante filtros avanzados y 
        herramientas de exportación. El enfoque en usabilidad y eficiencia 
        permitió a la empresa centralizar sus procesos de manera más efectiva.
      </p>
    ),
    achievements: [
      {
        id: 1,
        content: (
          <>
            <strong className="font-bold">Automatización de procesos:</strong>{" "}
            Reducción de tiempos de registro y consulta de inventario mediante
            flujos optimizados.
          </>
        ),
      },
      {
        id: 2,
        content: (
          <>
            <strong className="font-bold">Exportaciones y reportes:</strong>{" "}
            Implementación de herramientas de exportación (CSV/Excel) para
            facilitar el análisis y control.
          </>
        ),
      },
      {
        id: 3,
        content: (
          <>
            <strong className="font-bold">Mejor estructura de datos:</strong>{" "}
            Uso de PostgreSQL para relaciones claras y consultas eficientes.
          </>
        ),
      },
    ],
    technologies: [
      { icon: PostgreSQLIcon, label: "PostgreSQL" },
      { icon: ReactIcon, label: "React" },
      { icon: ExpressIcon, label: "Express" },
    ],
  },
};
