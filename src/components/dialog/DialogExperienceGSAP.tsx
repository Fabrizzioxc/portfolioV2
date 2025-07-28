// src/components/dialog/DialogExperienceGSAP.tsx
"use client";

import * as React from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import { dialogExperiences } from "./ExperienceDialogData";

import { DialogTitleSection } from "./DialogTitleSection";
import { DialogDetailsSection } from "./DialogDetailsSection";
import { DialogAchievementsSection } from "./DialogAchievementsSection";
import { DialogStackSection } from "./DialogStackSection";

gsap.registerPlugin(Flip);

interface DialogExperienceGSAPProps {
  triggerLabel?: string;
  experienceId: string;
}

export default function DialogExperienceGSAP({
  triggerLabel = "Ver más",
  experienceId,
}: DialogExperienceGSAPProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const data = dialogExperiences[experienceId];
  if (!data) {
    // Si el id no existe, evita romper la UI
    return (
      <Button variant="neutral" size="lg" disabled>
        (Sin data) {triggerLabel}
      </Button>
    );
  }

const openDialog = () => {
  const dialog = dialogRef.current;
  const overlay = overlayRef.current;
  if (!dialog || !overlay) return;

  document.body.style.overflow = "hidden";

  // Reinicia cualquier transformación previa
  gsap.set(dialog, { clearProps: "transform", opacity: 1 });

  gsap.set(overlay, { backdropFilter: "blur(0px)" });
  gsap.to(overlay, {
    opacity: 1,
    backdropFilter: "blur(8px)",
    pointerEvents: "auto",
    duration: 0.35,
    ease: "power2.out",
  });

  dialog.showModal();
  gsap.fromTo(
    dialog,
    { opacity: 0, y: -50, filter: "blur(10px)" },
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.45, ease: "power2.out" }
  );
};

const closeDialog = () => {
  const dialog = dialogRef.current;
  if (!dialog) return;

  gsap.to(dialog, {
    opacity: 0,
    y: 50, // hacia abajo
    filter: "blur(10px)",
    duration: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      const content = dialog.querySelector(".dialog-content");
      if (content) (content as HTMLElement).scrollTop = 0;
      gsap.set(dialog, { clearProps: "transform", opacity: 1 });
      dialog.close();
    },
  });

  gsap.to(overlayRef.current, {
    opacity: 0,
    backdropFilter: "blur(0px)",
    pointerEvents: "none",
    duration: 0.35,
    ease: "power2.in",
  });

};



  const handleContactClick = () => {
    closeDialog();
    setTimeout(() => {
      const contactSection = document.querySelector("#contacto");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, {
        opacity: 0,
        backdropFilter: "blur(0px)",
        pointerEvents: "none",
        duration: 0.35,
        ease: "power2.in",
      });
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 opacity-0 pointer-events-none z-[90]"
      />

      {/* Trigger */}
      <Button onClick={openDialog} variant="neutral" size="lg">
        {triggerLabel}
      </Button>

      {/* Dialog */}
      <dialog
  ref={dialogRef}
  className="fixed inset-0 m-auto w-[95%] max-w-4xl max-h-[90vh] border-2 border-border bg-background shadow-shadow opacity-0 z-[100] overflow-hidden text-foreground"
>

        {/* Header */}
        <div className="sticky top-0 bg-background px-4 py-3 flex justify-end">
          <Button
          variant="neutral"
          size="icon"
          onClick={closeDialog}
          aria-label="Cerrar"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Contenido */}
        <div className="dialog-content overflow-y-auto max-h-[calc(90vh-56px)] px-6 py-10 space-y-12 scrollbar-hide">
          <DialogTitleSection title={data.title} cards={data.cards} />
          <DialogDetailsSection details={data.details} />
          <DialogAchievementsSection achievements={data.achievements} />
          <DialogStackSection technologies={data.technologies} />

          {/* CTA */}
          <section className="text-center space-y-4 pt-4 pb-12">
            <h3 className="text-2xl md:text-4xl font-extrabold pb-5">
              ¿Ves una oportunidad para colaborar?
            </h3>
            <Button variant="neutral" size="xl" onClick={handleContactClick}>
              Contáctame
            </Button>
          </section>
        </div>
      </dialog>
    </>
  );
}
