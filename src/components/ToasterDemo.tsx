// src/components/ToasterDemo.tsx
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/Toaster"

export default function ToasterDemo() {
  return (
    <>
      <Toaster />
      <h1 className="text-3xl font-bold underline text-red-500 mb-4">
        Astro con Tailwind v4
      </h1>
      <Button
        onClick={() =>
          toast("Evento creado", {
            description: "Domingo 3 de diciembre a las 9:00 AM",
            action: {
              label: "Deshacer",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Mostrar Toast
      </Button>
    </>
  )
}
