import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface RelatedProductsProps {
  currentProductId: string
}

// Mock related products
const relatedProducts = [
  {
    id: "2",
    title: "Block Printed Cotton Kurta",
    price: 1200,
    mrp: 1500,
    rating: 4.6,
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758376866/cotton-kurta_iccoxh.jpg",
    artisan: "Ravi Kumar",
  },
  {
    id: "3",
    title: "Embroidered Silk Dupatta",
    price: 850,
    mrp: 1000,
    rating: 4.8,
    image: "/silk-dupatta-embroidered.jpg",
    artisan: "Sunita Sharma",
  },
  {
    id: "4",
    title: "Handwoven Cotton Saree",
    price: 2200,
    mrp: 2800,
    rating: 4.7,
    image: "/cotton-saree-handwoven.jpg",
    artisan: "Kamala Bai",
  },
  {
    id: "5",
    title: "Traditional Silk Blouse",
    price: 950,
    mrp: 1200,
    rating: 4.5,
    image: "/silk-blouse-traditional.jpg",
    artisan: "Priya Nair",
  },
]

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-primary mb-6">You Might Also Like</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <CardContent className="p-4">
                <h3 className="font-medium text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-2">by {product.artisan}</p>

                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-bold text-primary">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.mrp.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
