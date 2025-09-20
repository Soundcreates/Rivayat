import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Heart, Sparkles } from "lucide-react"

export function EmptyCart() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Card className="w-full max-w-md">
        <CardContent className="text-center p-8">
          <div className="w-20 h-20 bg-riv-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-10 w-10 text-riv-olive" />
          </div>

          <h2 className="text-2xl font-bold text-riv-maroon mb-3">Your cart is empty</h2>

          <p className="text-riv-maroon/70 mb-6 leading-relaxed">
            No items yet — start rediscovering India's crafts! Explore our collection of authentic handmade products
            from skilled artisans.
          </p>

          <div className="space-y-3">
            <Link href="/products">
              <Button className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white">
                <Sparkles className="h-4 w-4 mr-2" />
                Discover Crafts
              </Button>
            </Link>

            <Link href="/artisans">
              <Button
                variant="outline"
                className="w-full border-riv-maroon text-riv-maroon hover:bg-riv-maroon/5 bg-transparent"
              >
                <Heart className="h-4 w-4 mr-2" />
                Meet Artisans
              </Button>
            </Link>
          </div>

          <div className="mt-6 pt-4 border-t border-riv-maroon/10">
            <p className="text-xs text-riv-maroon/50">Every purchase supports artisan livelihoods directly</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
