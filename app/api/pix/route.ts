import { NextRequest, NextResponse } from "next/server"

// Configurações - Use variáveis de ambiente em produção
const API_KEY = process.env.PARADISE_API_KEY || ""
const PRODUCT_HASH = process.env.PARADISE_PRODUCT_HASH || ""
const UPSELL_URL = process.env.PARADISE_UPSELL_URL || "/obrigado"

// Gera CPF válido (algoritmo mod11)
function generateValidCPF(): string {
  const randomDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10))
  
  // Calcula primeiro dígito verificador
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += randomDigits[i] * (10 - i)
  }
  let remainder = sum % 11
  const digit1 = remainder < 2 ? 0 : 11 - remainder
  
  // Calcula segundo dígito verificador
  sum = 0
  for (let i = 0; i < 9; i++) {
    sum += randomDigits[i] * (11 - i)
  }
  sum += digit1 * 2
  remainder = sum % 11
  const digit2 = remainder < 2 ? 0 : 11 - remainder
  
  return [...randomDigits, digit1, digit2].join("")
}

// Gera email único
function generateUniqueEmail(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(7)
  return `doador_${timestamp}_${random}@doacao.com`
}

export async function POST(request: NextRequest) {
  try {
    const { action, amount, externalId } = await request.json()

    if (action === "create_pix") {
      // Gera dados do cliente
      const customerData = {
        name: "Doador Solidário",
        email: generateUniqueEmail(),
        document: generateValidCPF(),
        phone: "11999999999"
      }

      // Valor em centavos
      const amountCents = Math.round(amount * 100)

      const response = await fetch("https://multi.paradisepags.com/api/v1/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY
        },
        body: JSON.stringify({
          amount: amountCents,
          productHash: PRODUCT_HASH,
          customer: customerData
        })
      })

      const data = await response.json()

      if (!response.ok) {
        return NextResponse.json(
          { error: "Erro ao gerar PIX", details: data },
          { status: response.status }
        )
      }

      return NextResponse.json({
        success: true,
        qrCode: data.qr_code || data.qrCode,
        qrCodeImage: data.qr_code_image || data.qrCodeImage || data.qr_code_base64,
        copyPaste: data.copy_paste || data.copyPaste || data.pix_code,
        externalId: data.external_id || data.externalId || data.id
      })
    }

    if (action === "check_status") {
      if (!externalId) {
        return NextResponse.json(
          { error: "externalId é obrigatório" },
          { status: 400 }
        )
      }

      const response = await fetch(
        `https://multi.paradisepags.com/api/v1/check_status.php?hash=${externalId}`,
        {
          headers: {
            "X-API-Key": API_KEY
          }
        }
      )

      const data = await response.json()

      if (data.status === "paid" || data.paid === true) {
        return NextResponse.json({
          status: "paid",
          redirectUrl: UPSELL_URL
        })
      }

      return NextResponse.json({
        status: "pending"
      })
    }

    return NextResponse.json(
      { error: "Ação inválida" },
      { status: 400 }
    )
  } catch (error) {
    console.error("Erro na API PIX:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
