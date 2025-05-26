import type { LucideIcon } from "lucide-react"

export type SimpleCard = {
  icon: LucideIcon
  title: string
  description: string
}

export type CreditCard = {
  icon: LucideIcon
  title: string
  description: string[]
}
