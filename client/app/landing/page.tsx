"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { User, Hammer } from "lucide-react"

export default function LandingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState<null | "buyer" | "artisan">(null)

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        router.push(`/auth?role=${loading}`)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--riv-maroon)] text-[var(--riv-parchment)]">
        <div className="text-3xl font-bold mb-6">Loading...</div>
        <div className="flex gap-6 animate-pulse">
          <User className="w-10 h-10" />
          <Hammer className="w-10 h-10" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--riv-maroon)] text-[var(--riv-parchment)] p-6">
      <img
        src="https://res.cloudinary.com/dsmxrbinn/image/upload/v1758380091/logo_hng7q9.png"
        alt="Rivayat Logo"
        className="w-128 h-128 object-contain"
      />
      <div className="flex flex-col gap-6 w-full max-w-xs">
        <Button
          size="lg"
          className="bg-[#f3efe6] text-[#480903] px-10 py-6 text-lg font-semibold transition-all duration-200 shadow-md hover:scale-105 hover:shadow-lg hover:bg-[#e8e2d1] focus:outline-none focus:ring-2 focus:ring-[#480903] focus:ring-offset-2"
          onClick={() => setLoading("buyer")}
        >
          Sign in as Buyer
        </Button>
        <Button
          size="lg"
          className="bg-[#f3efe6] text-[#480903] px-10 py-6 text-lg font-semibold transition-all duration-200 shadow-md hover:scale-105 hover:shadow-lg hover:bg-[#e8e2d1] focus:outline-none focus:ring-2 focus:ring-[#480903] focus:ring-offset-2"
          onClick={() => setLoading("artisan")}
        >
          Sign in as Artisan
        </Button>
      </div>
    </div>
  )
}
