"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Share2, ShoppingCart, MessageCircle, Shield, Truck, RotateCcw } from "lucide-react"

interface ProductInfoProps {
  product: any
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <div className="space-y-6">
      {/* Title and Rating */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-primary mb-3 text-balance">{product.title}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground ml-1">({product.reviewCount} reviews)</span>
          </div>
          <div className="flex space-x-2">
            {product.badges.map((badge: string) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
          <span className="text-xl text-muted-foreground line-through">₹{product.mrp.toLocaleString()}</span>
          <Badge className="bg-green-100 text-green-800">{discountPercent}% OFF</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Incl. of all taxes</p>
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        {product.stock > 0 ? (
          <>
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-green-600 font-medium">In Stock ({product.stock} available)</span>
          </>
        ) : (
          <>
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-sm text-red-600 font-medium">Out of Stock</span>
          </>
        )}
      </div>

      {/* Quantity and Actions */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              disabled={quantity >= product.stock}
            >
              +
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">Max {product.stock} items</span>
        </div>

        <div className="flex space-x-4">
          <Button size="lg" className="flex-1 bg-accent hover:bg-accent/90" disabled={product.stock === 0}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          <Button variant="outline" size="lg" onClick={() => setIsWishlisted(!isWishlisted)}>
            <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
          </Button>
          <Button variant="outline" size="lg">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        <Button variant="outline" size="lg" className="w-full bg-transparent">
          <MessageCircle className="w-5 h-5 mr-2" />
          Chat with Artisan
        </Button>
      </div>

      {/* Features */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium text-sm">Authentic</p>
                <p className="text-xs text-muted-foreground">Verified artisan</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium text-sm">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">{product.deliveryTime}</p>
              </div>
            </div>
            {product.isReturnable && (
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium text-sm">Returnable</p>
                  <p className="text-xs text-muted-foreground">7 days return</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <div>
        <h3 className="font-serif text-lg font-semibold mb-3">Description</h3>
        <p className="text-muted-foreground leading-relaxed text-pretty">{product.description}</p>
      </div>

      {/* Specifications */}
      <div>
        <h3 className="font-serif text-lg font-semibold mb-3">Specifications</h3>
        <div className="space-y-2">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
              <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
              <span className="font-medium">{value as string}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
