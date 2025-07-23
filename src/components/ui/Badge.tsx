import { cn } from "@/lib/utils"
import type { ElementType } from "react"

interface BadgeProps {
  icon: ElementType
  label: string
  className?: string
}

export const Badge = ({ icon: Icon, label, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-white px-3 py-1 text-sm font-medium rounded-md",
        className
      )}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </span>
  )
}
