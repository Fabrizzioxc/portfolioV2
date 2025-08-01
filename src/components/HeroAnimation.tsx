"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HeroAnimation() {
  useEffect(() => {
    requestAnimationFrame(() => {
      const SplitText = (window as any).SplitText;
      gsap.registerPlugin(SplitText);
  
      const tl = gsap.timeline();
      tl.set(".hero-container", { opacity: 1, visibility: "visible" });
  
      const splitTitle = new SplitText(".h1hero", { type: "words" });
      tl.from(splitTitle.words, {
        duration: 2,
        y: 20,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
        ease: "power3.out",
      });
  
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
    });
  }, []);
  

  return null;
}
