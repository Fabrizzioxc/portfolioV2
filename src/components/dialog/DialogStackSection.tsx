// src/components/dialog/DialogStackSection.tsx
import type { ElementType } from "react";
import { Badge } from "@/components/ui/Badge";

export interface TechItem {
  icon: ElementType;
  label: string;
}

interface DialogStackSectionProps {
  technologies: TechItem[];
}

export function DialogStackSection({ technologies }: DialogStackSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex gap-2 items-center justify-center pb-8">
        <span className="inline-block border-2 border-border px-4 py-1 text-3xl font-bold">
          Tecnologías
        </span>
        <span className="text-3xl font-bold">Usadas</span>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
  {technologies.map((t, i) => (
    <Badge
      key={i}
      icon={t.icon}
      label={t.label}
      className="px-5 py-2 gap-3 text-lg md:text-xl rounded-lg [&>svg]:w-6 [&>svg]:h-6"
    />
  ))}
</div>

    </section>
  );
}
