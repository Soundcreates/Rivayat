import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ArtisansGrid } from "@/components/artisans/artisans-grid"
import { ArtisansHeader } from "@/components/artisans/artisans-header"

export default function ArtisansPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ArtisansHeader />
        <ArtisansGrid />
      </main>
      <Footer />
    </div>
  )
}
