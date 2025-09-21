"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, ImageIcon, Video, Sparkles, Send, Copy, Instagram, Facebook, Twitter } from "lucide-react"

export default function DigitalPresencePage() {
  const [captionText, setCaptionText] = useState("")
  const [generatedCaption, setGeneratedCaption] = useState("")
  const [generatedHashtags, setGeneratedHashtags] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [scheduledDate, setScheduledDate] = useState<Date>()
  const [scheduledTime, setScheduledTime] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const platforms = [
    { name: "Instagram", icon: Instagram, color: "bg-pink-500" },
    { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
    { name: "Twitter", icon: Twitter, color: "bg-sky-500" },
  ]

  const generateContent = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedCaption(
        "✨ Witness the magic of traditional handloom weaving! Each thread tells a story of heritage, passion, and timeless craftsmanship. This exquisite silk saree represents hours of meticulous work and generations of knowledge passed down through our family. 🧵\n\nEvery piece is a celebration of Indian artistry and the skilled hands that bring these beautiful textiles to life. #HandmadeWithLove",
      )
      setGeneratedHashtags([
        "#HandloomWeaving",
        "#SilkSaree",
        "#TraditionalCraft",
        "#IndianTextiles",
        "#ArtisanMade",
        "#HandmadeWithLove",
        "#CulturalHeritage",
        "#SustainableFashion",
        "#Rivayat",
        "#AuthenticCraft",
      ])
      setIsGenerating(false)
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  const scheduledPosts = [
    {
      id: 1,
      content: "New collection of handwoven silk sarees now available!",
      platforms: ["Instagram", "Facebook"],
      scheduledFor: "2024-01-15 10:00 AM",
      status: "scheduled",
    },
    {
      id: 2,
      content: "Behind the scenes: The intricate process of block printing",
      platforms: ["Instagram"],
      scheduledFor: "2024-01-16 2:00 PM",
      status: "scheduled",
    },
    {
      id: 3,
      content: "Customer spotlight: Beautiful testimonial from Priya",
      platforms: ["Facebook", "Twitter"],
      scheduledFor: "2024-01-17 11:00 AM",
      status: "posted",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground">Digital Presence</h2>
        <p className="text-muted-foreground mt-2">Enhance your online presence with AI-powered content tools.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* AI Caption & Hashtag Generator */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-accent" />
              AI Content Generator
            </CardTitle>
            <CardDescription>Generate engaging captions and hashtags for your social media posts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="caption-input">Describe your post</Label>
              <Textarea
                id="caption-input"
                value={captionText}
                onChange={(e) => setCaptionText(e.target.value)}
                placeholder="Tell us about your product, craft, or story..."
                rows={3}
              />
            </div>

            <Button onClick={generateContent} disabled={isGenerating || !captionText.trim()} className="w-full">
              {isGenerating ? (
                <>
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Caption & Hashtags
                </>
              )}
            </Button>

            {generatedCaption && (
              <div className="space-y-4 pt-4 border-t border-border">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Generated Caption</Label>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(generatedCaption)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-3 bg-muted rounded-lg text-sm whitespace-pre-wrap">{generatedCaption}</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Suggested Hashtags</Label>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(generatedHashtags.join(" "))}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {generatedHashtags.map((hashtag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {hashtag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Post Scheduler */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2 text-accent" />
              Schedule Posts
            </CardTitle>
            <CardDescription>Plan and schedule your social media content in advance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label>Select Platforms</Label>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform) => {
                  const IconComponent = platform.icon
                  const isSelected = selectedPlatforms.includes(platform.name)
                  return (
                    <Button
                      key={platform.name}
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      onClick={() => togglePlatform(platform.name)}
                      className={isSelected ? platform.color : ""}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {platform.name}
                    </Button>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="post-content">Post Content</Label>
              <Textarea id="post-content" placeholder="Write your post content..." rows={3} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Schedule Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {scheduledDate ? format(scheduledDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={scheduledDate} onSelect={setScheduledDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="schedule-time">Time</Label>
                <Input
                  id="schedule-time"
                  type="time"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Media</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <ImageIcon className="w-5 h-5" />
                  <Video className="w-5 h-5" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Upload images or videos</p>
              </div>
            </div>

            <Button className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Schedule Post
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Scheduled Posts</CardTitle>
          <CardDescription>Manage your upcoming and published social media posts.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground line-clamp-2">{post.content}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.scheduledFor}</span>
                    </div>
                    <div className="flex space-x-1">
                      {post.platforms.map((platform) => {
                        const platformData = platforms.find((p) => p.name === platform)
                        if (!platformData) return null
                        const IconComponent = platformData.icon
                        return (
                          <Badge key={platform} variant="outline" className="text-xs">
                            <IconComponent className="w-3 h-3 mr-1" />
                            {platform}
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={post.status === "posted" ? "default" : "secondary"}>
                    {post.status === "posted" ? "Posted" : "Scheduled"}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
