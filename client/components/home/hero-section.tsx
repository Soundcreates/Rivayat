"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dsmxrbinn/image/upload/v1758456407/website_bg_ystx1d.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--riv-parchment)] mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where Tradition meets Art
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Every thread tells a tale. Every craft carries centuries of wisdom. Discover authentic Indian artistry and
          the passionate hands that create it.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--riv-parchment)] text-[var(--riv-parchment)] hover:bg-[var(--riv-parchment)] hover:text-[var(--riv-maroon)] font-semibold px-8 py-3 bg-transparent"
          >
            <Link href="/artisans">Meet the Artisans</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
