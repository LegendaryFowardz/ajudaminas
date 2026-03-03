import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <span className="text-xl font-bold text-foreground">SOS Minas Gerais</span>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Uma iniciativa da comunidade para ajudar as vítimas dos desastres 
            naturais em Minas Gerais. Juntos somos mais fortes.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Transparência
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Parceiros
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Prestação de Contas
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2026 SOS Minas Gerais. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              CNPJ: 00.000.000/0001-00 • Reconhecido como Utilidade Pública
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
