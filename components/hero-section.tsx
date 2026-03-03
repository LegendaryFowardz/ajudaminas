"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToDoacao = () => {
    document.getElementById("doacao")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/disaster-1.jpg"
          alt="Enchentes em Minas Gerais"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive-foreground px-4 py-2 rounded-full mb-8 border border-destructive/30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
          </span>
          <span className="text-sm font-medium">Situação de Emergência</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
          Minas Gerais <br className="hidden md:block" />
          <span className="text-primary">Precisa de Você</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          Milhares de famílias perderam tudo. Casas destruídas, sonhos interrompidos, 
          vidas transformadas pela força da natureza. Mas juntos, podemos reconstruir 
          a esperança. Cada doação é um tijolo na reconstrução de um lar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            onClick={scrollToDoacao}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Heart className="w-5 h-5" />
            Doar Agora
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg px-8 py-6 border-foreground/20 text-foreground hover:bg-foreground/10"
          >
            Ver a Situação
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}
