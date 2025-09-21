import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Award, Users, Share2, Heart, Play } from "lucide-react"

interface ArtisanPageProps {
  params: {
    id: string
  }
}

export default function ArtisanPage({ params }: ArtisanPageProps) {
  // Mock artisan data - in real app, fetch based on params.id
  const artisan = {
    id: params.id,
    name: "Meera Devi",
    bio: "Master weaver from Varanasi with over 30 years of experience in creating exquisite Banarasi silk sarees. Meera learned the craft from her mother and grandmother, continuing a family tradition that spans four generations. She specializes in intricate brocade work and has trained over 50 young women in the art of silk weaving.",
    location: "Varanasi, Uttar Pradesh",
    specialties: ["Banarasi Silk", "Brocade Work", "Traditional Weaving"],
    verificationStatus: "verified" as const,
    certifications: ["Handloom Mark", "GI Tag", "Master Craftsperson"],
    joinedDate: "2019-03-15",
    totalProducts: 127,
    totalSales: 2840,
    rating: 4.9,
    followers: 1250,
    avatar: "/artisan-meera.jpg",
    banner: "/artisan-meera-banner.jpg",
    coordinates: { lat: 25.3176, lng: 82.9739 },
  }

  const reels = [
    {
      id: "1",
      title: "Morning loom setup",
      thumbnail: "/reel-1.jpg",
      views: 12400,
      likes: 890,
    },
    {
      id: "2",
      title: "Intricate brocade work",
      thumbnail: "/reel-2.jpg",
      views: 8900,
      likes: 650,
    },
    {
      id: "3",
      title: "Teaching young weavers",
      thumbnail: "/reel-3.jpg",
      views: 15600,
      likes: 1200,
    },
    {
      id: "4",
      title: "Finished saree showcase",
      thumbnail: "/reel-4.jpg",
      views: 22100,
      likes: 1800,
    },
  ]

  const products = [
    {
      id: "1",
      title: "Royal Blue Banarasi Silk Saree",
      price: 12500,
      mrp: 18000,
      image: "/product-1.jpg",
      rating: 4.8,
      reviews: 24,
    },
    {
      id: "2",
      title: "Golden Brocade Wedding Saree",
      price: 25000,
      mrp: 35000,
      image: "/product-2.jpg",
      rating: 5.0,
      reviews: 18,
    },
    {
      id: "3",
      title: "Traditional Red Silk Saree",
      price: 8500,
      mrp: 12000,
      image: "/product-3.jpg",
      rating: 4.9,
      reviews: 31,
    },
  ]

  return (
    <div className="min-h-screen bg-riv-parchment">
      {/* Banner Section */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={artisan.banner || "/placeholder.svg?height=320&width=1200"}
          alt={`${artisan.name} workshop`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-end space-x-6">
              <div className="relative">
                <img
                  src={artisan.avatar || "/placeholder.svg?height=120&width=120"}
                  alt={artisan.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
                />
                {artisan.verificationStatus === "verified" && (
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{artisan.name}</h1>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{artisan.followers.toLocaleString()} followers</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {artisan.specialties.map((specialty) => (
                    <Badge key={specialty} className="bg-white/20 text-white border-white/30">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="bg-riv-saffron hover:bg-riv-saffron/90 text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  Follow
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About {artisan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-riv-maroon/80 leading-relaxed mb-6">{artisan.bio}</p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-riv-maroon">{artisan.totalProducts}</div>
                    <div className="text-sm text-riv-maroon/70">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-riv-maroon">{artisan.totalSales.toLocaleString()}</div>
                    <div className="text-sm text-riv-maroon/70">Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-riv-maroon">{artisan.rating}</div>
                    <div className="text-sm text-riv-maroon/70">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reels/Stories */}
            <Card>
              <CardHeader>
                <CardTitle>Stories & Reels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {reels.map((reel) => (
                    <div key={reel.id} className="relative group cursor-pointer">
                      <div className="aspect-[9/16] rounded-lg overflow-hidden">
                        <img
                          src={reel.thumbnail || "/placeholder.svg?height=200&width=112"}
                          alt={reel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                            <Play className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs font-medium truncate">{reel.title}</p>
                          <div className="flex items-center justify-between text-xs text-white/80">
                            <span>{(reel.views / 1000).toFixed(1)}K views</span>
                            <span>{reel.likes} ❤️</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Products */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Products by {artisan.name}</CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                      <div className="aspect-square rounded-lg overflow-hidden mb-3">
                        <img
                          src={product.image || "/placeholder.svg?height=300&width=300"}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="font-medium text-riv-maroon mb-1 group-hover:text-riv-saffron transition-colors">
                        {product.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-riv-maroon">₹{product.price.toLocaleString()}</span>
                          <span className="text-sm text-riv-maroon/50 line-through">
                            ₹{product.mrp.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-riv-maroon/70">
                          <span>⭐ {product.rating}</span>
                          <span>({product.reviews})</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {artisan.certifications.map((cert) => (
                    <div key={cert} className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-riv-saffron" />
                      <span className="text-sm text-riv-maroon">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Workshop Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <div className="text-center text-riv-maroon/50">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Interactive map</p>
                    <p className="text-xs">Coming soon</p>
                  </div>
                </div>
                <p className="text-sm text-riv-maroon/80">{artisan.location}</p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white">Message Artisan</Button>
                <Button variant="outline" className="w-full border-riv-maroon text-riv-maroon bg-transparent">
                  Request Custom Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
