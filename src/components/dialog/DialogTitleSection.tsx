import { CardInfoDialog } from "@/components/dialog/CardInfoDialog";
import { Calendar, Briefcase, User } from "lucide-react";

export function DialogTitleSection() {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-extrabold text-center pb-12 pt-4">
        J&amp;J Servicios Generales S.A.C
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center pb-8">
        <CardInfoDialog icon={Calendar} label="Fecha" value="Julio 2025" />
        <CardInfoDialog icon={Briefcase} label="Empleo" value="Freelance" />
        <CardInfoDialog icon={User} label="Rol" value="Desarrollador web" />
      </div>
    </>
  );
}
