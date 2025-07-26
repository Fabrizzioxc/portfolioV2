// src/components/dialog/DialogTitleSection.tsx
import type { ElementType } from "react";
import { CardInfoDialog } from "@/components/dialog/CardInfoDialog";

export interface TitleCard {
  icon: ElementType;
  label: string;
  value: string;
}

interface DialogTitleSectionProps {
  title: string;
  cards: TitleCard[];
}

export function DialogTitleSection({ title, cards }: DialogTitleSectionProps) {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-extrabold text-center pb-12 pt-4">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center pb-8">
        {cards.map((c, i) => (
          <CardInfoDialog
            key={i}
            icon={c.icon}
            label={c.label}
            value={c.value}
          />
        ))}
      </div>
    </>
  );
}
