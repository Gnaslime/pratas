import Link from "next/link"
import { ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CartPage() {
  // In a real app, this would be fetched from a state management solution or API
  const cartIsEmpty = true

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

      <div className="container py-12 md:py-16">
        <h1 className="text-4xl font-bold mb-8">Seu Carrinho</h1>

        {cartIsEmpty ? (
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-muted p-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Seu carrinho está vazio</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Que tal explorar nossa coleção de joias em prata 925?
            </p>
            <Link href="/products">
              <Button size="lg">Explorar Coleção</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{/* Cart items would go here */}</TableBody>
            </Table>

            <div className="flex flex-col md:flex-row md:justify-end gap-4">
              <div className="md:w-1/3 space-y-4">
                <div className="border rounded-lg p-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">R$ 0,00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete</span>
                    <span className="font-medium">Calculado no checkout</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl border-t pt-3 mt-3">
                    <span>Total</span>
                    <span className="text-primary">R$ 0,00</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">Finalizar Compra</Button>
                <Link href="/products">
                  <Button variant="outline" className="w-full">
                    Continuar Comprando
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
