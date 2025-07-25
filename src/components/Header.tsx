"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";
import DeveloperIcon from '@/components/icons/DeveloperIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && navMenuRef.current && !navMenuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
  {/* Navbar principal */}
  <nav className="fixed top-0 left-0 z-50 w-full bg-[#000615]/70 backdrop-blur-md  text-[#DDE3F0]">
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
          href="https://www.linkedin.com/in/fabrizzio-zambrano-602678334/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="neutral">
            <LinkedIn className="w-5 h-5" />
          </Button>
        </a>
        <a
          href="https://github.com/Fabrizzioxc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="neutral">
            <GitHub className="w-5 h-5" />
          </Button>
        </a>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={handleToggle}>
          {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
        </button>
      </div>
    </div>
  </nav>

  {/* Mobile Sidebar - fuera del nav */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        ref={navMenuRef}
        initial={{ translateX: "100%" }}
        animate={{ translateX: "0%" }}
        exit={{ translateX: "100%" }}
        transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-64 bg-[#000615] text-[#DDE3F0] border-l border-[#27324D] p-6 flex flex-col z-50"
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)} className="p-2">
            <X size={32} strokeWidth={3} />
          </button>
        </div>

        <div className="flex flex-col space-y-6 text-lg font-medium">
          <a href="#experience" onClick={() => setIsOpen(false)}>Experiencia</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </div>

        <div className="flex flex-col space-y-4 mt-6">
          <a href="https://www.linkedin.com/in/fabrizzio-zambrano-602678334/" target="_blank" rel="noopener noreferrer">
            <Button variant="neutral">
              <LinkedIn className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://github.com/Fabrizzioxc" target="_blank" rel="noopener noreferrer">
            <Button variant="neutral">
              <GitHub className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</>

  );
}
