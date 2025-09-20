import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { OrdersHeader } from "@/components/dashboard/orders/orders-header"
import { OrdersTable } from "@/components/dashboard/orders/orders-table"

export default function OrdersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OrdersHeader />
        <OrdersTable />
      </main>
      <Footer />
    </div>
  )
}
