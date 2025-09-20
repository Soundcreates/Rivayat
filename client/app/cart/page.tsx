import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { CartItems } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"
import { EmptyCart } from "@/components/cart/empty-cart"

// Mock cart data
const cartItems = [
  {
    id: "1",
    productId: "1",
    title: "Handwoven Banarasi Silk Saree",
    price: 4500,
    mrp: 5500,
    quantity: 1,
    image: "/elegant-silk-saree.png",
    artisan: "Meera Devi",
    inStock: true,
  },
  {
    id: "2",
    productId: "2",
    title: "Block Printed Cotton Kurta",
    price: 1200,
    mrp: 1500,
    quantity: 2,
    image: "/cotton-kurta.jpg",
    artisan: "Ravi Kumar",
    inStock: true,
  },
]

export default function CartPage() {
  const isEmpty = cartItems.length === 0

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif text-3xl font-bold text-primary mb-8">Shopping Cart</h1>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems items={cartItems} />
            </div>
            <div className="lg:col-span-1">
              <CartSummary items={cartItems} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
