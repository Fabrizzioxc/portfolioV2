"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/Toaster"

export default function EmailCopy() {
  const email = "Fabrizziozv.17@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    toast("Correo copiado", {
      description: "No dudes en escribirme, estaré encantado de conversar.",
    })
  }

  return (
    <>
      <Toaster />
      <div className="bg-secondary-background border-2 border-border p-6 rounded-md max-w-xl mx-auto flex flex-col gap-3">
        <label htmlFor="email" className="font-bold text-white text-base">
          Correo Electrónico:
        </label>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <input
            id="email"
            type="text"
            value={email}
            readOnly
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm font-mono"
          />
          <Button onClick={handleCopy} className="shrink-0">
            Copiar
          </Button>
        </div>
      </div>
    </>
  )
}
