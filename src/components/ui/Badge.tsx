  import { cn } from "@/lib/utils";
  import type { ElementType } from "react";

  interface BadgeProps {
    icon: ElementType;
    label: string;
    className?: string;
  }

  export const Badge = ({ icon: Icon, label, className }: BadgeProps) => {
    return (
      <span
        role="img"
        aria-label={label}
        className={cn(
          "inline-flex items-center gap-2 border border-border/85 px-3 py-1 text-sm font-medium rounded-md",
          className
        )}
      >
        {/* Icono decorativo */}
        <Icon className="w-4 h-4" aria-hidden="true" focusable="false" />
        {/* Texto visible para lectores de pantalla y usuarios */}
        <span className="sr-only">{label}</span>
        <span aria-hidden="true">{label}</span>
      </span>
    );
  };
