import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  color: "red" | "green" | "blue"
}

export function ServiceCard({ icon, title, description, color }: ServiceCardProps) {
  const colorClasses = {
    red: "border-red-200 hover:border-red-300 hover:shadow-md hover:shadow-red-100",
    green: "border-green-200 hover:border-green-300 hover:shadow-md hover:shadow-green-100",
    blue: "border-blue-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100",
  }

  return (
    <Card className={cn("transition-all duration-300", colorClasses[color])}>
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="p-2 rounded-full bg-gray-50">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
