import Link from "next/link"
import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
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
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="sr-only">Carrinho</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Nossa Coleção Completa</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore todas as nossas peças em prata 925 autêntica
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" size="sm">Todos</Button>
          <Button variant="outline" size="sm">Anéis</Button>
          <Button variant="outline" size="sm">Colares</Button>
          <Button variant="outline" size="sm">Brincos</Button>
          <Button variant="outline" size="sm">Pulseiras</Button>
          <Button variant="outline" size="sm">Pingentes</Button>
          <Button variant="outline" size="sm">Conjuntos</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
