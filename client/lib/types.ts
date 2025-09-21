import { z } from "zod"

export const ArtisanSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  verificationStatus: z.enum(["pending", "verified", "rejected"]),
  avatar: z.string().optional(),
  coverImage: z.string().optional(),
  specialties: z.array(z.string()),
  joinedAt: z.date(),
  totalProducts: z.number().default(0),
  totalSales: z.number().default(0),
  rating: z.number().min(0).max(5).default(0),
  reviewCount: z.number().default(0),
})

export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Category name is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().optional(),
  image: z.string().optional(),
  parentId: z.string().uuid().optional(),
})

export const ProductSchema = z.object({
  id: z.string().uuid(),
  artisanId: z.string().uuid(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  categoryId: z.string().uuid(),
  price: z.number().positive("Price must be positive"),
  mrp: z.number().positive("MRP must be positive"),
  gstPercent: z.enum([0, 5, 12, 18, 28]),
  stock: z.number().min(0, "Stock cannot be negative"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  tags: z.array(z.string()),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
  weight: z.number().optional(),
  dimensions: z
    .object({
      length: z.number(),
      width: z.number(),
      height: z.number(),
    })
    .optional(),
  materials: z.array(z.string()),
  craftTechnique: z.string().optional(),
  isHandloom: z.boolean().default(false),
  isGITagged: z.boolean().default(false),
  isCooperative: z.boolean().default(false),
})

export const OrderSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  status: z.enum(["pending", "paid", "shipped", "delivered", "cancelled", "returned"]),
  items: z.array(
    z.object({
      productId: z.string().uuid(),
      quantity: z.number().positive(),
      price: z.number().positive(),
      artisanId: z.string().uuid(),
    }),
  ),
  totalAmount: z.number().positive(),
  shippingAddress: z.object({
    name: z.string(),
    phone: z.string(),
    addressLine1: z.string(),
    addressLine2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    pincode: z.string(),
  }),
  paymentMethod: z.enum(["razorpay", "cod"]),
  paymentId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const ReviewSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  userId: z.string().uuid(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  images: z.array(z.string()).optional(),
  createdAt: z.date(),
  isVerifiedPurchase: z.boolean().default(false),
})

export const PayoutSchema = z.object({
  id: z.string().uuid(),
  artisanId: z.string().uuid(),
  amount: z.number().positive(),
  status: z.enum(["pending", "processed", "failed"]),
  orderId: z.string().uuid(),
  processedAt: z.date().optional(),
  failureReason: z.string().optional(),
  createdAt: z.date(),
})

// Type exports
export type Artisan = z.infer<typeof ArtisanSchema>
export type Category = z.infer<typeof CategorySchema>
export type Product = z.infer<typeof ProductSchema>
export type Order = z.infer<typeof OrderSchema>
export type Review = z.infer<typeof ReviewSchema>
export type Payout = z.infer<typeof PayoutSchema>

// Feature flags
export const FeatureFlags = {
  aiChat: true,
  coupons: false,
  pwa: true,
} as const

export type FeatureFlag = keyof typeof FeatureFlags
