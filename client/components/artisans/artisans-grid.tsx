import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Package } from "lucide-react"

// Mock artisan data
const artisans = Array.from({ length: 12 }, (_, i) => ({
  id: `artisan-${i + 1}`,
  name: [
    "Meera Devi",
    "Ravi Kumar",
    "Sunita Sharma",
    "Arjun Singh",
    "Kamala Bai",
    "Deepak Joshi",
    "Priya Nair",
    "Vikram Yadav",
    "Lakshmi Devi",
    "Suresh Patel",
    "Anita Roy",
    "Manoj Gupta",
  ][i],
  location: [
    "Jaipur, Rajasthan",
    "Varanasi, UP",
    "Lucknow, UP",
    "Mysore, Karnataka",
    "Kanchipuram, TN",
    "Jodhpur, Rajasthan",
    "Kochi, Kerala",
    "Agra, UP",
    "Bhopal, MP",
    "Ahmedabad, Gujarat",
    "Kolkata, WB",
    "Chandigarh, Punjab",
  ][i],
  specialty: [
    "Block Printing",
    "Silk Weaving",
    "Chikankari",
    "Sandalwood Carving",
    "Silk Sarees",
    "Leather Craft",
    "Coir Products",
    "Marble Inlay",
    "Batik Printing",
    "Bandhani",
    "Kantha Embroidery",
    "Phulkari",
  ][i],
  rating: 4 + Math.random(),
  reviewCount: Math.floor(Math.random() * 200) + 20,
  totalProducts: Math.floor(Math.random() * 50) + 10,
  yearsExperience: Math.floor(Math.random() * 30) + 5,
  image: `/placeholder.svg?height=300&width=300&query=Indian artisan craftsperson ${["textile", "pottery", "jewelry", "wood", "metal", "embroidery"][i % 6]}`,
  verified: Math.random() > 0.3,
  story: [
    "Third-generation block printer preserving traditional Rajasthani techniques",
    "Master weaver creating exquisite Banarasi silk sarees for over 25 years",
    "Expert in delicate Chikankari embroidery, trained by her grandmother",
    "Skilled sandalwood carver continuing his family's 200-year legacy",
  ][i % 4],
}))

export function ArtisansGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artisans.map((artisan) => (
        <Link key={artisan.id} href={`/artisan/${artisan.id}`}>
          <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={artisan.image || "/placeholder.svg"}
                alt={artisan.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {artisan.verified && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-accent text-accent-foreground">Verified</Badge>
                </div>
              )}
            </div>

            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    {artisan.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{artisan.location}</span>
                  </div>
                </div>
              </div>

              <Badge variant="outline" className="mb-3">
                {artisan.specialty}
              </Badge>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{artisan.story}</p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="font-medium">{artisan.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground ml-1">({artisan.reviewCount})</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Package className="w-4 h-4 mr-1" />
                  <span>{artisan.totalProducts} products</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">{artisan.yearsExperience} years of experience</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
