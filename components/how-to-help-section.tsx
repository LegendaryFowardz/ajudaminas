import { Card } from "@/components/ui/card"
import { Package, Truck, Users, Phone } from "lucide-react"

const helpOptions = [
  {
    icon: Package,
    title: "Doação de Itens",
    description:
      "Roupas, alimentos não perecíveis, cobertores, colchões e produtos de higiene são muito necessários.",
    action: "Veja os pontos de coleta",
  },
  {
    icon: Truck,
    title: "Voluntariado",
    description:
      "Ajude na distribuição de doações, limpeza de áreas afetadas ou apoio psicológico às vítimas.",
    action: "Cadastre-se como voluntário",
  },
  {
    icon: Users,
    title: "Abrigue uma Família",
    description:
      "Se você tem espaço, pode temporariamente abrigar uma família desabrigada enquanto reconstruímos.",
    action: "Saiba como participar",
  },
  {
    icon: Phone,
    title: "Divulgue",
    description:
      "Compartilhe esta campanha nas redes sociais. Quanto mais pessoas souberem, mais ajuda chegará.",
    action: "Compartilhar agora",
  },
]

export function HowToHelpSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Outras Formas de <span className="text-primary">Ajudar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nem toda ajuda precisa ser financeira. Existem muitas maneiras de 
            fazer a diferença na vida de quem perdeu tudo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpOptions.map((option, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <option.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {option.description}
              </p>
              <button className="text-primary text-sm font-medium hover:underline">
                {option.action} →
              </button>
            </Card>
          ))}
        </div>

        {/* Emotional Call to Action */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-serif text-foreground italic leading-relaxed">
            "Perdi minha casa, mas não perdi a esperança. Cada gesto de solidariedade 
            me lembra que não estou sozinho."
          </blockquote>
          <p className="mt-4 text-muted-foreground">
            — Maria Silva, moradora de Brumadinho
          </p>
        </div>
      </div>
    </section>
  )
}
