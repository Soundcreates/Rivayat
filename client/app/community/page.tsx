"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share2, Play, Volume2, VolumeX } from "lucide-react"

export default function CommunityPage() {
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set())

  const toggleMute = (videoId: string) => {
    setMutedVideos((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(videoId)) {
        newSet.delete(videoId)
      } else {
        newSet.add(videoId)
      }
      return newSet
    })
  }

  const reels = [
    {
      id: "1",
      artisan: "Meera Devi",
      location: "Varanasi, UP",
      title: "Weaving magic on the loom",
      likes: 1240,
      comments: 89,
      shares: 45,
      thumbnail: "/weaving-process.jpg",
    },
    {
      id: "2",
      artisan: "Ravi Kumar",
      location: "Jaipur, Rajasthan",
      title: "Block printing techniques",
      likes: 856,
      comments: 67,
      shares: 32,
      thumbnail: "/block-printing.jpg",
    },
    {
      id: "3",
      artisan: "Lakshmi Amma",
      location: "Kanchipuram, TN",
      title: "Silk saree border work",
      likes: 2100,
      comments: 156,
      shares: 78,
      thumbnail: "/silk-border.jpg",
    },
  ]

  const moodboards = [
    {
      id: "1",
      title: "Monsoon Elegance",
      creator: "Priya Sharma",
      images: ["/mood-1a.jpg", "/mood-1b.jpg", "/mood-1c.jpg", "/mood-1d.jpg"],
      likes: 234,
      saves: 89,
    },
    {
      id: "2",
      title: "Royal Heritage",
      creator: "Arjun Patel",
      images: ["/mood-2a.jpg", "/mood-2b.jpg", "/mood-2c.jpg", "/mood-2d.jpg"],
      likes: 567,
      saves: 123,
    },
  ]

  return (
    <div className="min-h-screen bg-riv-parchment">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-riv-maroon mb-4">Community</h1>
            <p className="text-lg text-riv-maroon/80">
              Discover stories, techniques, and inspiration from our artisan community
            </p>
          </div>

          <Tabs defaultValue="reels" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="reels">Artisan Reels</TabsTrigger>
              <TabsTrigger value="moodboards">Moodboards</TabsTrigger>
            </TabsList>

            <TabsContent value="reels" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reels.map((reel) => (
                  <Card key={reel.id} className="overflow-hidden group cursor-pointer">
                    <div className="relative aspect-[9/16] bg-gray-100">
                      <img
                        src={reel.thumbnail || "/placeholder.svg?height=400&width=225"}
                        alt={reel.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                          <Play className="h-6 w-6 text-white" />
                        </Button>
                      </div>

                      {/* Mute Toggle */}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-4 right-4 text-white hover:bg-white/20"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleMute(reel.id)
                        }}
                      >
                        {mutedVideos.has(reel.id) ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </Button>

                      {/* Artisan Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-riv-olive rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{reel.artisan.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">{reel.artisan}</p>
                            <p className="text-white/80 text-xs">{reel.location}</p>
                          </div>
                        </div>
                        <p className="text-white text-sm font-medium">{reel.title}</p>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className="text-riv-maroon">
                            <Heart className="h-4 w-4 mr-1" />
                            {reel.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-riv-maroon">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {reel.comments}
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-riv-maroon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Reels
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="moodboards" className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-riv-maroon/80">Curated collections of inspiration</p>
                <Button className="bg-riv-saffron hover:bg-riv-saffron/90 text-white">Create Moodboard</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {moodboards.map((board) => (
                  <Card key={board.id} className="overflow-hidden group cursor-pointer">
                    <div className="grid grid-cols-2 gap-1 aspect-square">
                      {board.images.map((image, index) => (
                        <div key={index} className="relative overflow-hidden">
                          <img
                            src={image || `/placeholder.svg?height=200&width=200&query=mood-${index}`}
                            alt={`${board.title} ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-riv-maroon">{board.title}</h3>
                          <p className="text-sm text-riv-maroon/70">by {board.creator}</p>
                        </div>
                        <Badge variant="secondary">{board.images.length} items</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className="text-riv-maroon">
                            <Heart className="h-4 w-4 mr-1" />
                            {board.likes}
                          </Button>
                          <span className="text-sm text-riv-maroon/70">{board.saves} saves</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-riv-maroon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  Explore More Moodboards
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
