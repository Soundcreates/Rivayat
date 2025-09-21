import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Award, Heart } from "lucide-react"

const stats = [
  { icon: Users, label: "Artisans Supported", value: "10,000+" },
  { icon: MapPin, label: "States Covered", value: "28" },
  { icon: Award, label: "Verified Crafts", value: "500+" },
  { icon: Heart, label: "Happy Customers", value: "50,000+" },
]

export function AboutSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="retro-pattern absolute inset-0 opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Empowering Artisan Communities
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            Rivayat bridges the gap between India's master craftspeople and conscious consumers worldwide. Every
            purchase directly supports artisan families and preserves traditional techniques for future generations.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center shadow-sm">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-serif text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Tracker CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Track our collective impact on artisan communities</p>
          <a
            href="/impact"
            className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View Impact Tracker →
          </a>
        </div>
      </div>
    </section>
  )
}
