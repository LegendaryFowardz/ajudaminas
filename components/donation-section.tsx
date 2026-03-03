"use client"

import { Card } from "@/components/ui/card"

const donationAmounts = [
  { value: 25, label: "R$ 25", link: "https://checkout.minaspayments.fun/VCCL1O8SCU4V" },
  { value: 50, label: "R$ 50", link: "https://checkout.minaspayments.fun/VCCL1O8SCU57" },
  { value: 100, label: "R$ 100", link: "https://checkout.minaspayments.fun/VCCL1O8SCU58" },
  { value: 250, label: "R$ 250", link: "https://checkout.minaspayments.fun/VCCL1O8SCU59" },
  { value: 500, label: "R$ 500", link: "https://checkout.minaspayments.fun/VCCL1O8SCU5A" },
]

export function DonationSection() {
  const handleDonation = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <section id="doacao" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Faça Sua <span className="text-primary">Doação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Cada centavo conta. Escolha um valor e ajude as famílias afetadas. 
            100% das doações vão diretamente para quem precisa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-secondary/50 border-border">
            {/* Donation Amounts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Escolha um valor para doar via PIX:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => handleDonation(amount.link)}
                    className="p-4 rounded-lg border border-border hover:border-primary bg-background hover:bg-primary hover:text-primary-foreground text-foreground font-bold text-xl transition-all duration-200"
                  >
                    {amount.label}
                  </button>
                ))}
              </div>
            </div>

          </Card>
        </div>
      </div>
    </section>
  )
}
