import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { CatalogHeader } from "@/components/dashboard/catalog/catalog-header"
import { ProductsTable } from "@/components/dashboard/catalog/products-table"
import { BulkUpload } from "@/components/dashboard/catalog/bulk-upload"

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CatalogHeader />
        <div className="space-y-8">
          <BulkUpload />
          <ProductsTable />
        </div>
      </main>
      <Footer />
    </div>
  )
}
