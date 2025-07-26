// src/components/dialog/DialogDetailsSection.tsx
import type { ReactNode } from "react";

interface DialogDetailsSectionProps {
  details: ReactNode;
}

export function DialogDetailsSection({ details }: DialogDetailsSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex justify-center pb-4">
        <span className="inline-block border-2 border-border px-4 py-1 text-3xl font-bold">
          Detalles
        </span>
      </div>
      {details}
    </section>
  );
}
