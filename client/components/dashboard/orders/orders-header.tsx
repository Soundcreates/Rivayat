import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"

export function OrdersHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-primary mb-2">Orders</h1>
        <p className="text-muted-foreground">Track and manage your customer orders</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>

        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  )
}
