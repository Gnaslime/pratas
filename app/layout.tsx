import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from 'next/font/google'
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prata Elegante - Joias de Prata Autênticas",
  description: "Descubra nossa coleção exclusiva de joias de prata. Peças artesanais com design contemporâneo e qualidade excepcional.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
