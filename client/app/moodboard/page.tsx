"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, Search, Palette, Sparkles } from "lucide-react"

export default function MoodboardPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        analyzeImage()
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const analyzeImage = () => {
    setIsAnalyzing(true)
    // Mock analysis - in real app, this would call an AI service
    setTimeout(() => {
      setResults({
        colors: ["#8B4513", "#D2691E", "#F4A460", "#DEB887"],
        textures: ["Woven", "Silk", "Handloom"],
        categories: ["Traditional Wear", "Sarees", "Ethnic Fashion"],
        matchedProducts: [
          {
            id: "1",
            title: "Handwoven Silk Saree",
            artisan: "Meera Devi",
            price: 8500,
            image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758376863/banarasi-silk-saree_wjveka.jpg",
            similarity: 92,
          },
          {
            id: "2",
            title: "Block Print Dupatta",
            artisan: "Ravi Kumar",
            price: 1200,
            image: "/block-print-dupatta.jpg",
            similarity: 87,
          },
          {
            id: "3",
            title: "Embroidered Kurta",
            artisan: "Sunita Sharma",
            price: 2800,
            image: "/embroidered-kurta.jpg",
            similarity: 84,
          },
        ],
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        analyzeImage()
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }, [])

  return (
    <div className="min-h-screen bg-riv-parchment">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-riv-maroon mb-4">Find by Image</h1>
            <p className="text-lg text-riv-maroon/80 mb-2">Upload an image to discover similar crafts and products</p>
            <Badge variant="outline" className="text-riv-saffron border-riv-saffron">
              Preview / Beta — Results may vary
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="border-2 border-dashed border-riv-olive/30 rounded-lg p-8 text-center hover:border-riv-olive/50 transition-colors cursor-pointer"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    {uploadedImage ? (
                      <div className="space-y-4">
                        <img
                          src={uploadedImage || "/placeholder.svg"}
                          alt="Uploaded"
                          className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
                        />
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation()
                            setUploadedImage(null)
                            setResults(null)
                          }}
                        >
                          Upload Different Image
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-riv-olive/10 rounded-full flex items-center justify-center mx-auto">
                          <Upload className="h-8 w-8 text-riv-olive" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-riv-maroon">Drop your image here</p>
                          <p className="text-sm text-riv-maroon/70">or click to browse</p>
                        </div>
                        <p className="text-xs text-riv-maroon/50">Supports JPG, PNG up to 5MB</p>
                      </div>
                    )}
                  </div>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </CardContent>
              </Card>

              {/* Analysis Results */}
              {(isAnalyzing || results) && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Analysis Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isAnalyzing ? (
                      <div className="text-center py-8">
                        <div className="animate-spin w-8 h-8 border-2 border-riv-saffron border-t-transparent rounded-full mx-auto mb-4" />
                        <p className="text-riv-maroon/70">Analyzing your image...</p>
                      </div>
                    ) : (
                      results && (
                        <div className="space-y-6">
                          {/* Colors */}
                          <div>
                            <h4 className="font-medium text-riv-maroon mb-2 flex items-center gap-2">
                              <Palette className="h-4 w-4" />
                              Dominant Colors
                            </h4>
                            <div className="flex gap-2">
                              {results.colors.map((color: string, index: number) => (
                                <div
                                  key={index}
                                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                                  style={{ backgroundColor: color }}
                                  title={color}
                                />
                              ))}
                            </div>
                          </div>

                          {/* Textures */}
                          <div>
                            <h4 className="font-medium text-riv-maroon mb-2">Detected Textures</h4>
                            <div className="flex gap-2 flex-wrap">
                              {results.textures.map((texture: string, index: number) => (
                                <Badge key={index} variant="secondary">
                                  {texture}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Categories */}
                          <div>
                            <h4 className="font-medium text-riv-maroon mb-2">Suggested Categories</h4>
                            <div className="flex gap-2 flex-wrap">
                              {results.categories.map((category: string, index: number) => (
                                <Badge key={index} className="bg-riv-saffron/10 text-riv-saffron">
                                  {category}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Matched Products */}
            <div className="space-y-6">
              {results && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      Similar Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {results.matchedProducts.map((product: any) => (
                      <div
                        key={product.id}
                        className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-riv-parchment/50 transition-colors cursor-pointer"
                      >
                        <img
                          src={product.image || "/placeholder.svg?height=80&width=80"}
                          alt={product.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-riv-maroon">{product.title}</h4>
                          <p className="text-sm text-riv-maroon/70">by {product.artisan}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold text-riv-maroon">₹{product.price.toLocaleString()}</span>
                            <Badge className="bg-green-100 text-green-800">{product.similarity}% match</Badge>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button className="w-full bg-riv-saffron hover:bg-riv-saffron/90 text-white">
                      View All Similar Products
                    </Button>
                  </CardContent>
                </Card>
              )}

              {!results && !isAnalyzing && (
                <Card>
                  <CardContent className="text-center py-12">
                    <Search className="h-12 w-12 text-riv-olive/30 mx-auto mb-4" />
                    <p className="text-riv-maroon/70">
                      Upload an image to see similar products and discover new crafts
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
