"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Star, ThumbsUp, Filter } from "lucide-react"

interface ProductReviewsProps {
  productId: string
  rating: number
  reviewCount: number
}

// Mock reviews data
const reviews = [
  {
    id: "1",
    user: "Priya Sharma",
    avatar: "/serene-indian-woman.png",
    rating: 5,
    date: "2024-01-10",
    comment:
      "Absolutely stunning saree! The quality is exceptional and the craftsmanship is evident in every detail. Meera Devi has created a masterpiece.",
    verified: true,
    helpful: 12,
    images: ["/saree-review-photo.jpg"],
  },
  {
    id: "2",
    user: "Anjali Gupta",
    avatar: "/indian-woman-2.jpg",
    rating: 5,
    date: "2024-01-08",
    comment:
      "Beautiful traditional work. The silk quality is premium and the zari work is intricate. Highly recommend!",
    verified: true,
    helpful: 8,
  },
  {
    id: "3",
    user: "Kavita Joshi",
    avatar: "/indian-woman-3.jpg",
    rating: 4,
    date: "2024-01-05",
    comment:
      "Good quality saree, though the color was slightly different from the photos. Overall satisfied with the purchase.",
    verified: false,
    helpful: 3,
  },
]

export function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState("")
  const [newRating, setNewRating] = useState(0)

  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 70 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 8, percentage: 6 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 2, percentage: 2 },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rating Summary */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl font-bold text-primary">{rating}</div>
                <div>
                  <div className="flex items-center mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${star <= rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on {reviewCount} reviews</p>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center space-x-2 text-sm">
                    <span className="w-8">{item.stars}★</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <span className="w-8 text-muted-foreground">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Write Review */}
            <div>
              <Button onClick={() => setShowReviewForm(!showReviewForm)} className="w-full mb-4">
                Write a Review
              </Button>

              {showReviewForm && (
                <div className="space-y-4 p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium mb-2">Your Rating</p>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} onClick={() => setNewRating(star)} className="focus:outline-none">
                          <Star
                            className={`w-6 h-6 ${
                              star <= newRating ? "text-yellow-500 fill-current" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Your Review</p>
                    <Textarea
                      placeholder="Share your experience with this product..."
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm">Submit Review</Button>
                    <Button variant="outline" size="sm" onClick={() => setShowReviewForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-semibold">Reviews ({reviewCount})</h3>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={review.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {review.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.user}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.comment}</p>

                  {review.images && (
                    <div className="flex space-x-2 mb-4">
                      {review.images.map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`Review image ${index + 1}`}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
