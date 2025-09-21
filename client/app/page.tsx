import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CitiesSlider } from "@/components/home/cities-slider"
import { AboutSection } from "@/components/about-section"
import { CraftsSlider } from "@/components/home/crafts-slider"
import { ArtisanOfWeek } from "@/components/home/artisan-of-week"
import { FAQSection } from "@/components/home/faq-section"
import { redirect } from "next/navigation"

export default function HomeRedirect() {
  redirect("/landing")
}