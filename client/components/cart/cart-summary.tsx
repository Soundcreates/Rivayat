"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface CartItem {
  id: string
  price: number
  mrp: number
  quantity: number
}

interface CartSummaryProps {
  items: CartItem[]
}

export function CartSummary({ items }: CartSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const originalTotal = items.reduce((sum, item) => sum + item.mrp * item.quantity, 0)
  const savings = originalTotal - subtotal
  const shippingFee = subtotal > 2000 ? 0 : 100
  const total = subtotal + shippingFee

  return (
    <div className="space-y-6">
      {/* Price Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal ({items.length} items)</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-green-600">
            <span>Savings</span>
            <span>-₹{savings.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>
              {shippingFee === 0 ? <Badge className="bg-green-100 text-green-800">FREE</Badge> : `₹${shippingFee}`}
            </span>
          </div>

          {shippingFee > 0 && (
            <p className="text-xs text-muted-foreground">
              Add ₹{(2000 - subtotal).toLocaleString()} more for free shipping
            </p>
          )}

          <Separator />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <p className="text-xs text-muted-foreground">Incl. of all taxes</p>
        </CardContent>
      </Card>

      {/* Coupon Code */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-2">
            <Input placeholder="Enter coupon code" />
            <Button variant="outline">Apply</Button>
          </div>
        </CardContent>
      </Card>

      {/* Checkout Button */}
      <Button size="lg" className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white">
        Proceed to Checkout
      </Button>

      {/* Trust Indicators */}
      <div className="text-center space-y-2">
        <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
          <span>🔒 Secure Payment</span>
          <span>📦 Easy Returns</span>
          <span>🚚 Fast Delivery</span>
        </div>
      </div>
    </div>
  )
}
