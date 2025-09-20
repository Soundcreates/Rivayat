import { Button } from "@/components/ui/button"
import { Plus, Upload, Download } from "lucide-react"

export function CatalogHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-primary mb-2">Product Catalog</h1>
        <p className="text-muted-foreground">Manage your products, inventory, and pricing</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>

        <Button variant="outline" size="sm">
          <Upload className="w-4 h-4 mr-2" />
          Bulk Upload
        </Button>

        <Button size="sm" className="bg-accent hover:bg-accent/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>
    </div>
  )
}
