import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { PayoutsHeader } from "@/components/dashboard/payouts/payouts-header"
import { PayoutsTable } from "@/components/dashboard/payouts/payouts-table"
import { PayoutsSummary } from "@/components/dashboard/payouts/payouts-summary"

export default function PayoutsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PayoutsHeader />
        <div className="space-y-8">
          <PayoutsSummary />
          <PayoutsTable />
        </div>
      </main>
      <Footer />
    </div>
  )
}
