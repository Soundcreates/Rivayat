import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"

// Mock data for artisan of the week
const featuredArtisan = {
  id: "1",
  name: "Meera Devi",
  location: "Jaipur, Rajasthan",
  specialty: "Block Printing",
  rating: 4.9,
  reviewCount: 127,
  story:
    "Third-generation block printer preserving 200-year-old family techniques. Meera creates intricate patterns using hand-carved wooden blocks, each design telling stories of Rajasthani heritage.",
  image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758376868/indian-woman-artisan-block-printing-traditional-cr_vnejib.jpg",
  verified: true,
  totalProducts: 45,
}

export function ArtisanOfWeek() {
  return (
    <section className="py-16 story-section">
      <div className="retro-pattern absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Artisan of the Week</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Meet the talented hands behind extraordinary crafts
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl bg-background/95 backdrop-blur">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-96">
                <Image
                  src={featuredArtisan.image || "/placeholder.svg"}
                  alt={featuredArtisan.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-serif text-2xl font-bold text-primary">{featuredArtisan.name}</h3>
                  {featuredArtisan.verified && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{featuredArtisan.location}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-medium">{featuredArtisan.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">({featuredArtisan.reviewCount} reviews)</span>
                  </div>
                  <Badge variant="outline">{featuredArtisan.specialty}</Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{featuredArtisan.story}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {featuredArtisan.totalProducts} products available
                  </span>
                  <Link
                    href={`/artisan/${featuredArtisan.id}`}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
