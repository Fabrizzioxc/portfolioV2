"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      exit={{ translateX: "100%" }}
      transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
      className="fixed top-0 right-0 h-full w-64 bg-[#000615] text-[#DDE3F0] border-l border-[#27324D] p-6 flex flex-col z-50"
      id="mobile-menu"
    >
      <div className="flex justify-end mb-4">
        <button onClick={onClose} aria-label="Cerrar menú" className="p-2">
          <X size={32} strokeWidth={3} />
        </button>
      </div>

      <div className="flex flex-col space-y-6 text-lg font-medium">
        <a href="#experience" onClick={onClose}>Experiencia</a>
        <a href="#proyectos" onClick={onClose}>Proyectos</a>
        <a href="#contacto" onClick={onClose}>Contacto</a>
      </div>

      <div className="flex flex-col space-y-4 mt-6">
        <a
          href="https://www.linkedin.com/in/fabrizzio-zambrano-602678334/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="neutral" aria-label="Ir al perfil de LinkedIn de Fabrizzio Zambrano">
            <LinkedIn className="w-5 h-5" />
          </Button>
        </a>
        <a
          href="https://github.com/Fabrizzioxc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="neutral" aria-label="Ir al perfil de GitHub de Fabrizzio Zambrano">
            <GitHub className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
}
