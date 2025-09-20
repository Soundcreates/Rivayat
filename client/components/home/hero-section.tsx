import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brand/hero-weaver.jpg"
          alt="A Weaver's Story"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 text-balance">
          A Weaver's Story
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          Every thread tells a tale. Every craft carries centuries of wisdom. Discover authentic Indian artistry and the
          passionate hands that create it.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold px-8 py-3 bg-transparent"
          >
            <Link href="/artisans">Meet the Artisans</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
