"use client"

import type React from "react"

import { useEffect } from "react"
import { useAuthStore } from "@/lib/auth"

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAuth?: boolean
  userType?: "buyer" | "artisan"
  fallback?: React.ReactNode
}

export function ProtectedRoute({ children, requireAuth = true, userType, fallback }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      window.location.href = "/auth"
      return
    }

    if (userType && user?.type !== userType) {
      window.location.href = "/"
      return
    }
  }, [isAuthenticated, user, requireAuth, userType])

  if (requireAuth && !isAuthenticated) {
    return (
      fallback || (
        <div className="min-h-screen bg-riv-parchment flex items-center justify-center">
          <div className="text-center">
            <p className="text-riv-maroon/70">Redirecting to login...</p>
          </div>
        </div>
      )
    )
  }

  if (userType && user?.type !== userType) {
    return (
      fallback || (
        <div className="min-h-screen bg-riv-parchment flex items-center justify-center">
          <div className="text-center">
            <p className="text-riv-maroon/70">Access denied. Redirecting...</p>
          </div>
        </div>
      )
    )
  }

  return <>{children}</>
}
