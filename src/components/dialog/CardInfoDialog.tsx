import type { ElementType } from "react";

interface CardInfoDialogProps {
  icon: ElementType;
  label: string;
  value: string;
}

export function CardInfoDialog({ icon: Icon, label, value }: CardInfoDialogProps) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center border-2 border-border bg-background shadow-shadowpx-4 py-6">
      {/* Icono sobrepuesto */}
      <div className="absolute -top-6 flex items-center justify-center w-12 h-12 border-2 border-border bg-background shadow-shadow">
        <Icon className="w-6 h-6 text-foreground" aria-hidden="true" />
      </div>
      
      {/* Contenido */}
      <div className="mt-8">
        <p className="text-sm font-medium text-foreground/70">{label}</p>
        <p className="text-lg md:text-xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
