import { Button } from "@/components/ui/button"
import { Download, DollarSign } from "lucide-react"

export function PayoutsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-primary mb-2">Payouts</h1>
        <p className="text-muted-foreground">Track your earnings and payout history</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>

        <Button size="sm" className="bg-accent hover:bg-accent/90">
          <DollarSign className="w-4 h-4 mr-2" />
          Request Payout
        </Button>
      </div>
    </div>
  )
}
