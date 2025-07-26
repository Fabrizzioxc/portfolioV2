"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HeroAnimation() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).SplitText) {
      const SplitText = (window as any).SplitText;
      gsap.registerPlugin(SplitText);

      const tl = gsap.timeline();

      // Mostramos el contenedor al iniciar
      tl.set(".hero-container", { opacity: 1, visibility: "visible" });

      // 1. Animación del título
      const splitTitle = new SplitText(".h1hero", { type: "words" });
      tl.from(splitTitle.words, {
        duration: 2,
        y: 20,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
        ease: "power3.out",
      });

      // 2. Animación del párrafo + botón "Curriculum" juntos
      tl.from(
        [".hero-desc", ".hero-buttons a:first-child"],
        {
          duration: 2,
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
          ease: "power3.out",
        },
        "<0.4"
      );

      // 3. Botón "Contáctame" con un pequeño retraso
      tl.from(
        ".hero-buttons a:last-child",
        {
          duration: 2.5,
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
          ease: "power3.out",
        },
        "<0.3"
      );
    }
  }, []);

  return null;
}
