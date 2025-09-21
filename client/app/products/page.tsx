import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductsFilter } from "@/components/products/products-filter"
import { ProductsHeader } from "@/components/products/products-header"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductsHeader />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <ProductsFilter />
          </aside>
          <div className="lg:col-span-3">
            <ProductsGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
