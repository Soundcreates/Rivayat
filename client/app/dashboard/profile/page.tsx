"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, Plus, X, Instagram, Facebook, Twitter, Youtube, Globe } from "lucide-react"

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("https://res.cloudinary.com/dsmxrbinn/image/upload/v1758457562/artisan-profile_zslmol.jpg")
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Instagram", url: "https://instagram.com/artisan", icon: Instagram },
    { platform: "Facebook", url: "https://facebook.com/artisan", icon: Facebook },
  ])
  const [newSocialPlatform, setNewSocialPlatform] = useState("")
  const [newSocialUrl, setNewSocialUrl] = useState("")

  const socialPlatforms = [
    { name: "Instagram", icon: Instagram },
    { name: "Facebook", icon: Facebook },
    { name: "Twitter", icon: Twitter },
    { name: "YouTube", icon: Youtube },
    { name: "Website", icon: Globe },
  ]

  const addSocialLink = () => {
    if (newSocialPlatform && newSocialUrl) {
      const platform = socialPlatforms.find((p) => p.name === newSocialPlatform)
      if (platform) {
        setSocialLinks([...socialLinks, { platform: newSocialPlatform, url: newSocialUrl, icon: platform.icon }])
        setNewSocialPlatform("")
        setNewSocialUrl("")
      }
    }
  }

  const removeSocialLink = (index: number) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground">Profile Management</h2>
        <p className="text-muted-foreground mt-2">Manage your artisan profile and showcase your story.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Profile Information</CardTitle>
            <CardDescription>Update your basic profile details and photo.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Photo */}
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={profileImage || "/placeholder.svg"} alt="Profile" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">AR</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" size="sm" className="mb-2 bg-transparent">
                  <Camera className="w-4 h-4 mr-2" />
                  Change Photo
                </Button>
                <p className="text-xs text-muted-foreground">JPG, PNG up to 5MB</p>
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Artisan Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="artisan@rivayat.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+91 98765 43210" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="Jaipur, Rajasthan" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="craft">Primary Craft</Label>
                <Input id="craft" defaultValue="Handloom Weaving" />
              </div>
            </div>

            <Button className="w-full">Save Profile Information</Button>
          </CardContent>
        </Card>

        {/* Artisan Story */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Your Story</CardTitle>
            <CardDescription>Share your journey and passion with customers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="story">About Me</Label>
              <Textarea
                id="story"
                rows={8}
                defaultValue="I am a third-generation handloom weaver from Jaipur, carrying forward the traditional art of creating exquisite textiles. My journey began at the age of 12 when my grandmother first taught me the intricate patterns that have been passed down through our family for over a century. Each piece I create tells a story of heritage, craftsmanship, and the timeless beauty of Indian textiles."
                className="resize-none"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input id="experience" defaultValue="25" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input id="specialization" defaultValue="Silk Sarees, Block Printing, Traditional Patterns" />
            </div>
            <Button className="w-full">Update Story</Button>
          </CardContent>
        </Card>
      </div>

      {/* Media Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Media Gallery</CardTitle>
          <CardDescription>Upload photos and videos showcasing your craft and workspace.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Upload Button */}
            <div className="aspect-square border-2 border-dashed border-border rounded-lg flex items-center justify-center hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="text-center">
                <Plus className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Add Media</p>
              </div>
            </div>

            {/* Sample Media Items */}
            {[
              { type: "image", src: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758457563/artisan-weaving-silk_vcafsp.jpg" },
              { type: "image", src: "/traditional-loom-workspace.jpg" },
              { type: "image", src: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758457594/handwoven-textile-patterns_ricsvv.jpg" },
              { type: "video", src: "/weaving-process-video-thumbnail.jpg" },
            ].map((item, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="destructive" size="sm" onClick={() => {}} className="absolute top-2 right-2">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                {item.type === "video" && (
                  <Badge className="absolute bottom-2 left-2 bg-black/70 text-white">Video</Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Social Media Links</CardTitle>
          <CardDescription>Connect your social media profiles to expand your reach.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Existing Links */}
          <div className="space-y-3">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{link.platform}</p>
                      <p className="text-sm text-muted-foreground">{link.url}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeSocialLink(index)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Add New Link */}
          <div className="border border-border rounded-lg p-4 space-y-3">
            <h4 className="font-medium">Add New Social Link</h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div>
                <Label htmlFor="platform">Platform</Label>
                <select
                  id="platform"
                  value={newSocialPlatform}
                  onChange={(e) => setNewSocialPlatform(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="">Select Platform</option>
                  {socialPlatforms.map((platform) => (
                    <option key={platform.name} value={platform.name}>
                      {platform.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  value={newSocialUrl}
                  onChange={(e) => setNewSocialUrl(e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <div className="flex items-end">
                <Button onClick={addSocialLink} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Link
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
