import Link from "next/link"
import { notFound } from 'next/navigation'
import { ShoppingBag, Shield, TruckIcon, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Prata Elegante
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Início
            </Link>
            <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Coleções
            </Link>
            <Link href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
              Categorias
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              Sobre
            </Link>
          </nav>
          <Link href="/cart">
            <Button variant="outline" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Carrinho</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
              <p className="text-3xl font-semibold text-primary">R$ {product.price.toFixed(2)}</p>
            </div>

            <div className="border-t border-b py-6 space-y-4">
              <div>
                <p className="text-sm font-medium mb-3">Acabamento</p>
                <div className="flex gap-2 flex-wrap">
                  {product.finishes.map((finish) => (
                    <Button key={finish} variant="outline" size="sm">
                      {finish}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-3">Tamanho</p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <Button key={size} variant="outline" size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <Button className="w-full" size="lg">
              <ShoppingBag className="mr-2 h-5 w-5" /> Adicionar ao Carrinho
            </Button>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Prata 925</p>
                  <p className="text-xs text-muted-foreground">Autenticidade certificada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Garantia</p>
                  <p className="text-xs text-muted-foreground">Vitalícia contra defeitos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TruckIcon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Frete Grátis</p>
                  <p className="text-xs text-muted-foreground">Acima de R$ 299</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium">Troca Fácil</p>
                  <p className="text-xs text-muted-foreground">30 dias para trocar</p>
                </div>
              </div>
            </div>

            <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-4">
              ← Voltar para Coleções
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
