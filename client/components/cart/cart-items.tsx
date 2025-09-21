"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, Heart, Plus, Minus } from "lucide-react"

interface CartItem {
  id: string
  productId: string
  title: string
  price: number
  mrp: number
  quantity: number
  image: string
  artisan: string
  inStock: boolean
}

interface CartItemsProps {
  items: CartItem[]
}

export function CartItems({ items }: CartItemsProps) {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {}),
  )

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantities((prev) => ({ ...prev, [itemId]: newQuantity }))
    }
  }

  const removeItem = (itemId: string) => {
    // Remove item logic
    console.log("Removing item:", itemId)
  }

  const moveToWishlist = (itemId: string) => {
    // Move to wishlist logic
    console.log("Moving to wishlist:", itemId)
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id}>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Link href={`/product/${item.productId}`} className="flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="rounded-lg object-cover"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Link
                      href={`/product/${item.productId}`}
                      className="font-medium text-primary hover:text-accent transition-colors line-clamp-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">by {item.artisan}</p>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => moveToWishlist(item.id)}>
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <span className="font-bold text-primary">₹{item.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{item.mrp.toLocaleString()}</span>
                  <Badge className="bg-green-100 text-green-800">
                    {Math.round(((item.mrp - item.price) / item.mrp) * 100)}% OFF
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium">Quantity:</span>
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.id, quantities[item.id] - 1)}
                        disabled={quantities[item.id] <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-4 py-2 font-medium">{quantities[item.id]}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.id, quantities[item.id] + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">
                      ₹{(item.price * quantities[item.id]).toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">incl. taxes</p>
                  </div>
                </div>

                {!item.inStock && (
                  <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">This item is currently out of stock</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
