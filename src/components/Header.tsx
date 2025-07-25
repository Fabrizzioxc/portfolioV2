"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";
import DeveloperIcon from "@/components/icons/DeveloperIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [MobileMenu, setMobileMenu] = useState<React.ComponentType<any> | null>(null);

  const handleToggle = async () => {
    if (!MobileMenu) {
      const module = await import("./MobileMenu");
      setMobileMenu(() => module.default);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar principal */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#000615]/70 backdrop-blur-md text-[#DDE3F0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 border-b border-[#27324D]">
          {/* Logo */}
          <a href="#" className="flex items-center font-bold text-2xl transition-colors">
            <DeveloperIcon className="w-6 h-6 mr-2" />
            <span className="mr-2">Fabrizzio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <a href="#experience" className="hover:-translate-y-1 transition-transform">Experiencia</a>
            <a href="#proyectos" className="hover:-translate-y-1 transition-transform">Proyectos</a>
            <a href="#sobremi" className="hover:-translate-y-1 transition-transform">Sobre mí</a>
            <a href="#contacto" className="hover:-translate-y-1 transition-transform">Contacto</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.linkedin.com/in/fabrizziozambrano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de LinkedIn de Fabrizzio Zambrano"
            >
              <Button variant="neutral">
                <LinkedIn className="w-5 h-5" aria-hidden="true" />
              </Button>
            </a>
            <a
              href="https://github.com/Fabrizzioxc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de GitHub de Fabrizzio Zambrano"
            >
              <Button variant="neutral">
                <GitHub className="w-5 h-5" aria-hidden="true" />
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-border"
            >
              <Menu size={32} strokeWidth={3} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar dinámico */}
      {isOpen && MobileMenu && <MobileMenu onClose={() => setIsOpen(false)} />}
    </>
  );
}
