"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Calendar, Shield, Edit2, Save, X } from "lucide-react"
import { useAuthStore } from "@/lib/auth"

export default function ProfilePage() {
  const { user, updateUser, isAuthenticated } = useAuthStore()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    location: "",
  })

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/auth"
      return
    }

    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        bio: (user as any).bio || "",
        location: (user as any).location || "",
      })
    }
  }, [user, isAuthenticated])

  const handleSave = () => {
    updateUser(formData)
    setIsEditing(false)
    console.log("[v0] Profile updated:", formData)
  }

  const handleCancel = () => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        bio: (user as any).bio || "",
        location: (user as any).location || "",
      })
    }
    setIsEditing(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-riv-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="text-riv-maroon/70">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-riv-parchment">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-riv-maroon">My Profile</h1>
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)} className="bg-riv-saffron hover:bg-riv-saffron/90 text-white">
                <Edit2 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleCancel} variant="outline" className="border-gray-300 bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-riv-olive rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {formData.name?.charAt(0) || user.phone?.charAt(-2) || "U"}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-riv-maroon mb-2">{formData.name || "User"}</h2>

                  <div className="flex justify-center mb-4">
                    <Badge
                      className={user.type === "artisan" ? "bg-riv-saffron text-white" : "bg-riv-olive text-white"}
                    >
                      {user.type === "artisan" ? "Artisan" : "Buyer"}
                    </Badge>
                  </div>

                  <div className="space-y-3 text-sm text-riv-maroon/70">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>+91 {user.phone}</span>
                    </div>

                    {formData.email && (
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>{formData.email}</span>
                      </div>
                    )}

                    {formData.location && (
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{formData.location}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {user.type === "artisan" && (
                    <div className="mt-6 pt-4 border-t border-riv-maroon/20">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {user.verificationStatus === "verified" ? "Verified Artisan" : "Verification Pending"}
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                        />
                      ) : (
                        <p className="mt-1 text-riv-maroon">{formData.name || "Not provided"}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      {isEditing ? (
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                        />
                      ) : (
                        <p className="mt-1 text-riv-maroon">{formData.email || "Not provided"}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="City, State"
                      />
                    ) : (
                      <p className="mt-1 text-riv-maroon">{formData.location || "Not provided"}</p>
                    )}
                  </div>

                  {user.type === "artisan" && (
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      {isEditing ? (
                        <Textarea
                          id="bio"
                          value={formData.bio}
                          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                          placeholder="Tell us about your craft and experience..."
                          rows={4}
                        />
                      ) : (
                        <p className="mt-1 text-riv-maroon">{formData.bio || "Not provided"}</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Account Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-riv-maroon">Phone Number</p>
                      <p className="text-sm text-riv-maroon/70">+91 {user.phone}</p>
                    </div>
                    <Badge variant="secondary">Verified</Badge>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-riv-maroon">Account Type</p>
                      <p className="text-sm text-riv-maroon/70">
                        {user.type === "artisan" ? "Artisan Account" : "Buyer Account"}
                      </p>
                    </div>
                    <Badge
                      className={user.type === "artisan" ? "bg-riv-saffron text-white" : "bg-riv-olive text-white"}
                    >
                      {user.type === "artisan" ? "Artisan" : "Buyer"}
                    </Badge>
                  </div>

                  {user.type === "artisan" && (
                    <>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-riv-maroon">Verification Status</p>
                          <p className="text-sm text-riv-maroon/70">
                            {user.verificationStatus === "verified"
                              ? "Your artisan profile is verified"
                              : "Verification in progress"}
                          </p>
                        </div>
                        <Badge
                          className={
                            user.verificationStatus === "verified"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {user.verificationStatus === "verified" ? "Verified" : "Pending"}
                        </Badge>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
