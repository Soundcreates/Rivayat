import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KPICards } from "@/components/dashboard/kpi-cards"
import { AnalyticsCharts } from "@/components/dashboard/analytics-charts"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        <div className="space-y-8">
          <KPICards />
          <AnalyticsCharts />
          <RecentActivity />
        </div>
      </main>
      <Footer />
    </div>
  )
}
