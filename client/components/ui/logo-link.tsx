"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

export function LogoLink() {
  const router = useRouter()
  const [animating, setAnimating] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setAnimating(true)
    setTimeout(() => {
      router.push("/home")
    }, 500) // match the animation duration
  }

  return (
    <div
      onClick={handleClick}
      className={`flex items-center space-x-2 mb-4 cursor-pointer transition-transform duration-500 ${
        animating ? "translate-y-[-20px] opacity-0" : ""
      }`}
    >
      <Image
        src="https://res.cloudinary.com/dsmxrbinn/image/upload/v1758380091/logo_hng7q9.png"
        alt="Rivayat"
        width={40}
        height={40}
        className="w-10 h-10 brightness-0 invert"
      />
      <span className="font-serif text-xl font-bold text-[var(--riv-sand)]">
        Rivayat
      </span>
    </div>
  )
}
