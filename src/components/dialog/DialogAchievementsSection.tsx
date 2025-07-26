// src/components/dialog/DialogAchievementsSection.tsx
import type { ReactNode } from "react";

export interface Achievement {
  id: number;
  content: ReactNode;
}

interface DialogAchievementsSectionProps {
  achievements: Achievement[];
}

export function DialogAchievementsSection({
  achievements,
}: DialogAchievementsSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex gap-2 items-center justify-center pb-4">
        <span className="inline-block border-2 border-border px-4 py-1 text-3xl font-bold">
          Logros
        </span>
        <span className="text-3xl font-bold">Destacados</span>
      </div>

      <ol className="space-y-6">
        {achievements.map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-border font-bold text-2xl flex-shrink-0">
              {item.id}
            </div>
            <p className="text-base md:text-lg leading-relaxed flex-1 font-normal">
              {item.content}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
