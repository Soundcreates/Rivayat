import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get auth token from cookies or headers
  const authCookie = request.cookies.get("rivayat-auth")
  const isAuthenticated = authCookie?.value ? true : false

  // Protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/profile"]
  const artisanOnlyRoutes = ["/dashboard"]

  const { pathname } = request.nextUrl

  // Check if route requires authentication
  const requiresAuth = protectedRoutes.some((route) => pathname.startsWith(route))

  if (requiresAuth && !isAuthenticated) {
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  // Check artisan-only routes
  const requiresArtisan = artisanOnlyRoutes.some((route) => pathname.startsWith(route))

  if (requiresArtisan && isAuthenticated) {
    // In a real app, you'd decode the auth token to check user type
    // For now, we'll let the client-side handle this
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}
