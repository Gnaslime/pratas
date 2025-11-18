export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  finishes: string[]
  sizes: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Anel Solitário Elegante",
    price: 289.90,
    description: "Anel em prata 925 com design minimalista e acabamento polido. Perfeito para uso diário ou ocasiões especiais.",
    image: "/elegant-silver-solitaire-ring.jpg",
    category: "Anéis",
    finishes: ["Polido", "Fosco"],
    sizes: ["14", "16", "18", "20", "22"],
  },
  {
    id: "2",
    name: "Colar Corrente Veneziana",
    price: 349.90,
    description: "Colar em prata 925 com corrente veneziana delicada. Elegante e versátil para qualquer ocasião.",
    image: "/silver-venetian-chain-necklace.jpg",
    category: "Colares",
    finishes: ["Polido", "Ródio"],
    sizes: ["40cm", "45cm", "50cm"],
  },
  {
    id: "3",
    name: "Brincos Argola Média",
    price: 189.90,
    description: "Par de argolas em prata 925 com fecho de trava. Design clássico que nunca sai de moda.",
    image: "/silver-hoop-earrings.jpg",
    category: "Brincos",
    finishes: ["Polido", "Fosco", "Texturizado"],
    sizes: ["2cm", "3cm", "4cm"],
  },
  {
    id: "4",
    name: "Pingente Coração",
    price: 159.90,
    description: "Pingente em prata 925 em formato de coração com detalhes vazados. Inclui corrente de 45cm.",
    image: "/silver-heart-pendant.jpg",
    category: "Pingentes",
    finishes: ["Polido", "Ródio Negro"],
    sizes: ["Único"],
  },
  {
    id: "5",
    name: "Pulseira Elo Português",
    price: 399.90,
    description: "Pulseira em prata 925 com elos portugueses e fecho lagosta. Robusta e elegante.",
    image: "/silver-portuguese-link-bracelet.jpg",
    category: "Pulseiras",
    finishes: ["Polido", "Diamantado"],
    sizes: ["18cm", "20cm", "22cm"],
  },
  {
    id: "6",
    name: "Anel Trançado",
    price: 249.90,
    description: "Anel em prata 925 com design trançado único. Artesanato tradicional com toque contemporâneo.",
    image: "/braided-silver-ring.jpg",
    category: "Anéis",
    finishes: ["Polido", "Fosco", "Oxidado"],
    sizes: ["14", "16", "18", "20", "22"],
  },
  {
    id: "7",
    name: "Conjunto Gota",
    price: 449.90,
    description: "Conjunto em prata 925 com colar e brincos em formato de gota. Perfeito para eventos especiais.",
    image: "/silver-teardrop-jewelry-set.jpg",
    category: "Conjuntos",
    finishes: ["Polido", "Ródio"],
    sizes: ["Único"],
  },
  {
    id: "8",
    name: "Piercing Helix",
    price: 129.90,
    description: "Piercing em prata 925 com design delicado para helix. Hipoalergênico e confortável.",
    image: "/silver-helix-piercing.jpg",
    category: "Piercings",
    finishes: ["Polido", "Ródio"],
    sizes: ["6mm", "8mm", "10mm"],
  },
]
