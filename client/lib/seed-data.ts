// Mock data for development and testing
export const seedUsers = [
  {
    id: "1",
    phone: "9876543210",
    name: "Meera Devi",
    email: "meera@example.com",
    type: "artisan" as const,
    verificationStatus: "verified" as const,
    location: "Varanasi, UP",
    bio: "Master weaver specializing in Banarasi silk sarees with 30+ years of experience.",
    createdAt: "2019-03-15T00:00:00Z",
  },
  {
    id: "2",
    phone: "9876543211",
    name: "Priya Sharma",
    email: "priya@example.com",
    type: "buyer" as const,
    location: "Mumbai, MH",
    createdAt: "2023-06-20T00:00:00Z",
  },
  {
    id: "3",
    phone: "9876543212",
    name: "Ravi Kumar",
    email: "ravi@example.com",
    type: "artisan" as const,
    verificationStatus: "pending" as const,
    location: "Jaipur, RJ",
    bio: "Traditional block printer creating contemporary designs with ancient techniques.",
    createdAt: "2023-08-10T00:00:00Z",
  },
]

export const seedProducts = [
  {
    id: "1",
    artisanId: "1",
    title: "Royal Blue Banarasi Silk Saree",
    description:
      "Exquisite handwoven Banarasi silk saree with intricate gold brocade work. Perfect for weddings and special occasions.",
    categoryId: "sarees",
    price: 12500,
    mrp: 18000,
    gstPercent: 5,
    stock: 3,
    images: ["/banarasi-silk-saree.jpg"],
    tags: ["handloom", "silk", "wedding", "traditional"],
    createdAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "2",
    artisanId: "3",
    title: "Block Print Cotton Dupatta",
    description: "Beautiful hand block printed dupatta using natural dyes and traditional Rajasthani motifs.",
    categoryId: "dupatta",
    price: 1200,
    mrp: 1800,
    gstPercent: 5,
    stock: 15,
    images: ["/block-print-dupatta.jpg"],
    tags: ["block-print", "cotton", "natural-dyes"],
    createdAt: "2024-01-12T00:00:00Z",
  },
]

export const seedOrders = [
  {
    id: "1",
    userId: "2",
    status: "delivered" as const,
    totalAmount: 12500,
    items: [
      {
        productId: "1",
        quantity: 1,
        price: 12500,
      },
    ],
    shippingAddress: {
      name: "Priya Sharma",
      phone: "9876543211",
      address: "123 Marine Drive",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
    },
    createdAt: "2024-01-15T00:00:00Z",
    deliveredAt: "2024-01-20T00:00:00Z",
  },
]
