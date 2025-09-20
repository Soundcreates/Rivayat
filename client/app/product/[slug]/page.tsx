import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ArtisanSnippet } from "@/components/product/artisan-snippet"
import { ProductReviews } from "@/components/product/product-reviews"
import { RelatedProducts } from "@/components/product/related-products"
import { ChatDrawer } from "@/components/product/chat-drawer"

// Mock product data
const product = {
  id: "1",
  title: "Handwoven Banarasi Silk Saree",
  description:
    "Exquisite handwoven Banarasi silk saree featuring traditional motifs and intricate zari work. This masterpiece represents centuries of weaving tradition from Varanasi, crafted by skilled artisans using time-honored techniques.",
  price: 4500,
  mrp: 5500,
  images: [
    "/elegant-silk-saree.png",
    "/banarasi-silk-saree-detail.jpg",
    "/silk-saree-border-design.jpg",
    "/silk-saree-pallu-design.jpg",
  ],
  stock: 12,
  rating: 4.8,
  reviewCount: 127,
  artisan: {
    id: "1",
    name: "Meera Devi",
    location: "Varanasi, Uttar Pradesh",
    avatar: "/indian-woman-artisan.jpg",
    verified: true,
  },
  specifications: {
    material: "Pure Silk",
    technique: "Handwoven",
    origin: "Varanasi, UP",
    care: "Dry clean only",
    weight: "800g",
    dimensions: "6.5m x 1.2m",
  },
  badges: ["Handloom", "GI Tagged", "Verified"],
  isReturnable: true,
  deliveryTime: "5-7 days",
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ProductGallery images={product.images} title={product.title} />
          <ProductInfo product={product} />
        </div>

        <div className="space-y-12">
          <ArtisanSnippet artisan={product.artisan} />
          <ProductReviews productId={product.id} rating={product.rating} reviewCount={product.reviewCount} />
          <RelatedProducts currentProductId={product.id} />
        </div>
      </main>
      <Footer />
      <ChatDrawer artisan={product.artisan} />
    </div>
  )
}
