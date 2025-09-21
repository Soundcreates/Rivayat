import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ExternalLink } from "lucide-react"

interface ArtisanSnippetProps {
  artisan: {
    id: string
    name: string
    location: string
    avatar: string
    verified: boolean
  }
}

export function ArtisanSnippet({ artisan }: ArtisanSnippetProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Image
              src={artisan.avatar || "/placeholder.svg"}
              alt={artisan.name}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            {artisan.verified && (
              <div className="absolute -bottom-1 -right-1">
                <Badge className="bg-accent text-accent-foreground text-xs px-1">✓</Badge>
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-xl font-semibold text-primary">{artisan.name}</h3>
              <Button asChild variant="outline" size="sm">
                <Link href={`/artisan/${artisan.id}`}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Profile
                </Link>
              </Button>
            </div>

            <div className="flex items-center text-muted-foreground mb-3">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{artisan.location}</span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Master craftsperson specializing in traditional handwoven textiles. Third-generation weaver preserving
              centuries-old techniques passed down through family traditions.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span>4.9 (127 reviews)</span>
                </div>
                <span>45 products</span>
              </div>

              <Button variant="outline" size="sm">
                Follow Artisan
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
