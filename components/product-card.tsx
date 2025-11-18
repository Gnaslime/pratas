import Link from "next/link"
import type { Product } from "@/lib/products"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg border-border/50">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="pt-5 pb-3">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-semibold text-base mb-2 leading-snug">{product.name}</h3>
          <p className="text-xs text-muted-foreground">
            {product.finishes.length} acabamento{product.finishes.length > 1 ? 's' : ''} disponível{product.finishes.length > 1 ? 'is' : ''}
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <p className="font-semibold text-lg text-primary">R$ {product.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
