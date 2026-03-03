"use client"

import { useEffect, useState } from "react"
import { Home, Users, MapPin, Package } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 45000,
    suffix: "+",
    label: "Pessoas Afetadas",
  },
  {
    icon: Home,
    value: 8500,
    suffix: "+",
    label: "Casas Destruídas",
  },
  {
    icon: MapPin,
    value: 120,
    suffix: "+",
    label: "Cidades Atingidas",
  },
  {
    icon: Package,
    value: 15000,
    suffix: "+",
    label: "Famílias Desabrigadas",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
