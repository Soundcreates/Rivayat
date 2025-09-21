import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rivayat | Artisan Stories & Authentic Crafts",
  description:
    "Discover authentic Indian crafts and the stories behind them. Support artisans directly through Rivayat's storytelling marketplace.",
  generator: "Rivayat",
  keywords: ["Indian crafts", "artisan marketplace", "handmade", "authentic", "storytelling", "traditional crafts"],
  authors: [{ name: "Rivayat" }],
  openGraph: {
    title: "Rivayat | Artisan Stories & Authentic Crafts",
    description: "Discover authentic Indian crafts and the stories behind them.",
    type: "website",
    locale: "en_IN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/fonts/alcazar.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/shangri-la.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
