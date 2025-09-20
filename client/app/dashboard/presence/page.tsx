import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { PresenceHeader } from "@/components/dashboard/presence/presence-header"
import { ContentScheduler } from "@/components/dashboard/presence/content-scheduler"
import { ContentPreview } from "@/components/dashboard/presence/content-preview"

export default function PresencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PresenceHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentScheduler />
          <ContentPreview />
        </div>
      </main>
      <Footer />
    </div>
  )
}
