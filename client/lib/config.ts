export const SITE_CONFIG = {
  name: "Rivayat",
  description: "Discover authentic Indian crafts and the stories behind them",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rivayat.app",
  ogImage: "/brand/og-image.jpg",
  links: {
    twitter: "https://twitter.com/rivayat",
    instagram: "https://instagram.com/rivayat",
    facebook: "https://facebook.com/rivayat",
  },
} as const

export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "Artisans", href: "/artisans" },
    { name: "Products", href: "/products" },
    { name: "Community", href: "/community" },
    { name: "Blog", href: "/blog" },
  ],
  secondary: [
    { name: "Cart", href: "/cart" },
    { name: "Profile", href: "/profile" },
  ],
  footer: [
    { name: "About", href: "/about" },
    { name: "Impact Tracker", href: "/impact" },
    { name: "Help Center", href: "/help" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ],
} as const

export const CITIES = [
  { 
    name: "Jaipur", 
    state: "Rajasthan", 
    specialty: "Block Printing & Jewelry",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758461472/jaipur_fd8eps.png"
  },
  { 
    name: "Varanasi", 
    state: "Uttar Pradesh", 
    specialty: "Silk Weaving",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758461248/varanasi_e2fbb8.jpg"
  },
  { 
    name: "Kanchipuram", 
    state: "Tamil Nadu", 
    specialty: "Silk Sarees",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758461248/kachipuram_ismp4d.jpg"
  },
  { 
    name: "Mysore", 
    state: "Karnataka", 
    specialty: "Silk & Sandalwood",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758461529/mysore_pukrfn.png"
  },
  { 
    name: "Lucknow", 
    state: "Uttar Pradesh", 
    specialty: "Chikankari Embroidery",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758461248/iko_ozyr9a.jpg"
  },
  { 
    name: "Jodhpur", 
    state: "Rajasthan", 
    specialty: "Leather & Textiles",
    image: "https://res.cloudinary.com/dsmxrbinn/image/upload/v1758461248/jodhpur_rab9wm.jpg"
  },
] as const


export const CRAFT_CATEGORIES = [
  { name: "Clothing", icon: "👘", slug: "clothing" },
  { name: "Jewellery", icon: "💍", slug: "jewellery" },
  { name: "Home Decor", icon: "🏺", slug: "home-decor" },
  { name: "Wood Crafts", icon: "🪵", slug: "wood-crafts" },
  { name: "Metal Work", icon: "⚒️", slug: "metal-work" },
  { name: "Textiles", icon: "🧵", slug: "textiles" },
] as const

export const SHIPPING_ZONES = {
  local: { name: "Local", sla: "2-3 days", fee: 50 },
  regional: { name: "Regional", sla: "3-5 days", fee: 100 },
  national: { name: "National", sla: "5-7 days", fee: 150 },
} as const

export const GST_RATES = [0, 5, 12, 18, 28] as const

export const IMAGE_SIZES = {
  thumb: { width: 150, height: 150 },
  card: { width: 400, height: 400 },
  hero: { width: 1200, height: 800 },
  og: { width: 1200, height: 630 },
} as const
