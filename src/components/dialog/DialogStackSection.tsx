import AstroIcon from "@/components/icons/AstroIcon";
import TailwindCSSIcon from "@/components/icons/TailwindCSSIcon";
import PreactIcon from "@/components/icons/PreactIcon";

interface DialogBadgeProps {
  icon: React.ElementType;
  label: string;
}

const DialogBadge = ({ icon: Icon, label }: DialogBadgeProps) => {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex items-center gap-3 border-2 border-white px-4 py-2 text-lg font-semibold rounded-md"
    >
      <Icon className="w-6 h-6" aria-hidden="true" />
      <span aria-hidden="true">{label}</span>
    </span>
  );
};

export function DialogStackSection() {
  return (
    <section className="space-y-4">
      <div className="flex gap-2 items-center justify-center pb-8">
        <span className="inline-block border-2 border-border px-4 py-1 text-3xl font-bold">
          Tecnologías
        </span>
        <span className="text-3xl font-bold">Usadas</span>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        <DialogBadge icon={AstroIcon} label="Astro" />
        <DialogBadge icon={TailwindCSSIcon} label="Tailwind CSS" />
        <DialogBadge icon={PreactIcon} label="Preact" />
      </div>
    </section>
  );
}
