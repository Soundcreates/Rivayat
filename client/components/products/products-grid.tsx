import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

// Mock product data
const products = Array.from({ length: 24 }, (_, i) => ({
  id: `product-${i + 1}`,
  title: [
    "Handwoven Banarasi Silk Saree",
    "Block Printed Cotton Kurta",
    "Brass Decorative Bowl",
    "Embroidered Wall Hanging",
    "Wooden Jewelry Box",
    "Silver Filigree Earrings",
  ][i % 6],
  artisan: {
    name: ["Meera Devi", "Ravi Kumar", "Sunita Sharma", "Arjun Singh"][i % 4],
    location: ["Jaipur", "Varanasi", "Lucknow", "Mysore"][i % 4],
  },
  price: Math.floor(Math.random() * 5000) + 500,
  mrp: Math.floor(Math.random() * 7000) + 1000,
  rating: 4 + Math.random(),
  reviewCount: Math.floor(Math.random() * 100) + 10,
  image: `/placeholder.svg?height=400&width=400&query=Indian handicraft ${["textile", "pottery", "jewelry", "wood", "metal", "embroidery"][i % 6]}`,
  badges: [["Handloom"], ["GI Tagged", "Verified"], ["Cooperative"], ["Handloom", "Verified"], [], ["GI Tagged"]][
    i % 6
  ],
  inStock: Math.random() > 0.1,
}))

export function ProductsGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
                {product.badges.length > 0 && (
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {product.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs bg-background/90 text-foreground">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-medium text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>

                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="font-medium">{product.artisan.name}</span>
                  <span className="mx-1">•</span>
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{product.artisan.location}</span>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground ml-1">({product.reviewCount})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-primary">₹{product.price.toLocaleString()}</span>
                    {product.mrp > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.mrp.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">incl. taxes</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <button className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
          Load More Products
        </button>
      </div>
    </div>
  )
}
