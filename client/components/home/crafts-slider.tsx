"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const craftsData = [
  { 
    name: "Clothing", 
    specialty: "Traditional Textiles & Garments", 
    slug: "clothing",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758473410/clothing_gm3mhw.jpg"
  },
  { 
    name: "Jewellery", 
    specialty: "Handcrafted Ornaments & Accessories", 
    slug: "jewellery",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758473410/jewellery_aao8pr.jpg"
  },
  { 
    name: "Home Decor", 
    specialty: "Artistic Furnishings & Decoratives", 
    slug: "home-decor",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758473409/home_decor_jsimfj.jpg"
  },
  { 
    name: "Wood Crafts", 
    specialty: "Carved Sculptures & Furniture", 
    slug: "wood-crafts",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758473449/wood_zflnus.png"
  },
  { 
    name: "Metal Work", 
    specialty: "Bronze, Brass & Silver Artistry", 
    slug: "metal-work",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758473410/metal_work_jsqalt.jpg"
  },
  { 
    name: "Textiles", 
    specialty: "Handwoven Fabrics & Weaves", 
    slug: "textiles",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758473409/Textile_bsbowq.jpg"
  },
]

export function CraftsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % craftsData.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % craftsData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + craftsData.length) % craftsData.length)
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Explore Traditional Crafts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From intricate textiles to masterful metalwork, discover the diverse world of Indian craftsmanship
          </p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {craftsData.map((craft, index) => (
                <div key={craft.name} className="w-full flex-shrink-0">
                  <Card className="mx-2 overflow-hidden shadow-lg">
                    <div className="relative h-64 md:h-80">
                      <Image
                          src={craft.image}
                          alt={`${craft.name} - ${craft.specialty}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="font-serif text-2xl font-bold mb-2">{craft.name}</h3>
                        <p className="text-secondary font-medium">{craft.specialty}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {craftsData.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
