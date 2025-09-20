import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CitiesSlider } from "@/components/home/cities-slider"
import { AboutSection } from "@/components/home/about-section"
import { CraftsSlider } from "@/components/home/crafts-slider"
import { ArtisanOfWeek } from "@/components/home/artisan-of-week"
import { FAQSection } from "@/components/home/faq-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CitiesSlider />
        <AboutSection />
        <CraftsSlider />
        <ArtisanOfWeek />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
