import Link from "next/link"
import { ShoppingBag, Sparkles, Shield, TruckIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
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
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Carrinho</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                  Elegância Atemporal em Prata
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
                  Descubra peças únicas em prata 925, onde artesanato tradicional encontra design contemporâneo.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="text-base">
                    Explorar Coleção
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="text-base">
                    Nossa História
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <h3 className="font-semibold text-lg">Prata 925 Autêntica</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Certificado de autenticidade em todas as peças
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Shield className="h-10 w-10 text-primary mb-2" />
                <h3 className="font-semibold text-lg">Garantia Vitalícia</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Proteção contra defeitos de fabricação
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <TruckIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="font-semibold text-lg">Frete Grátis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Em compras acima de R$ 299
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Destaques da Coleção
                </h2>
                <p className="max-w-[700px] text-muted-foreground text-lg leading-relaxed">
                  Nossas peças mais admiradas, criadas com paixão e precisão
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/products">
                <Button variant="outline" size="lg">
                  Ver Toda Coleção
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Artesanato que Conta Histórias
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Cada peça é cuidadosamente trabalhada por artesãos experientes, combinando técnicas tradicionais 
                  com design moderno. Nossa prata 925 é selecionada para garantir durabilidade e brilho eterno.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Acreditamos que joias são mais que acessórios - são expressões de personalidade e memórias preciosas.
                </p>
                <Link href="/about">
                  <Button size="lg" className="mt-4">
                    Conheça Nossa História
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="/artisan-crafting-silver-jewelry.jpg"
                  alt="Artesão criando joias de prata"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Explore por Categoria
                </h2>
                <p className="max-w-[700px] text-muted-foreground text-lg leading-relaxed">
                  Encontre a peça perfeita para cada momento
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Anéis", image: "silver+rings+elegant", count: "48 peças" },
                { name: "Colares", image: "silver+necklaces+elegant", count: "36 peças" },
                { name: "Brincos", image: "silver+earrings+elegant", count: "52 peças" },
                { name: "Pulseiras", image: "silver+bracelets+elegant", count: "29 peças" },
                { name: "Pingentes", image: "silver+pendants+elegant", count: "41 peças" },
                { name: "Conjuntos", image: "silver+jewelry+sets+elegant", count: "18 peças" },
              ].map((category) => (
                <Link 
                  key={category.name} 
                  href={`/categories/${category.name.toLowerCase()}`}
                  className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-muted"
                >
                  <img
                    src={`/.jpg?height=500&width=400&query=${category.image}`}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm text-white/90">{category.count}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Prata Elegante</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Joias em prata 925 com design exclusivo e qualidade excepcional.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Comprar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/products" className="hover:text-foreground transition-colors">Todas as Peças</Link></li>
                <li><Link href="/products/new" className="hover:text-foreground transition-colors">Novidades</Link></li>
                <li><Link href="/categories" className="hover:text-foreground transition-colors">Categorias</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Sobre</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">Nossa História</Link></li>
                <li><Link href="/quality" className="hover:text-foreground transition-colors">Certificação</Link></li>
                <li><Link href="/care" className="hover:text-foreground transition-colors">Cuidados</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contato</Link></li>
                <li><Link href="/shipping" className="hover:text-foreground transition-colors">Envios</Link></li>
                <li><Link href="/returns" className="hover:text-foreground transition-colors">Devoluções</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-8 border-t">
            <p className="text-sm text-muted-foreground">© 2025 Prata Elegante. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">Termos</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacidade</Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
