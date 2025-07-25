//components/EmailCopy.tsx
"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/Toaster"

export default function EmailCopy() {
  const email = "Fabrizziozv.17@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    toast("Correo copiado", {
      description: "¡No dudes en escribirme, estaré encantado de conversar contigo!",
    })
  }

  return (
    <>
      <Toaster />
      <div className="bg-secondary-background border-2 border-border p-8 rounded-md max-w-2xl mx-auto flex flex-col gap-4">
        <label htmlFor="email" className="font-bold text-border text-lg">
          Correo Electrónico:
        </label>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          <input
            id="email"
            type="text"
            value={email}
            readOnly
            className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground text-base font-mono-dm"
          />
          <Button onClick={handleCopy} size="lg" className="shrink-0">
            Copiar
          </Button>
        </div>
      </div>
    </>
  )
}
