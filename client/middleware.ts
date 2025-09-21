import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const auth = req.cookies.get("riv_auth")?.value

  // Public paths that never need auth
  const publicPaths = [
    "/",
    "/home",
    "/landing",
    "/auth",
    "/products",
    "/product",
    "/blog",
    "/artisans",
    "/moodboard",
    "/_next",        // assets
    "/api/public",   // if any
  ]

  // Allow public paths
  if (publicPaths.some(p => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next()
  }

  // Protect only these paths for now
  const protectedPrefixes = ["/dashboard", "/checkout", "/profile"]

  const isProtected = protectedPrefixes.some(p => pathname === p || pathname.startsWith(p + "/"))

  if (isProtected && !auth) {
    const url = req.nextUrl.clone()
    url.pathname = "/auth"
    // keep role=artisan for dashboard attempts
    if (pathname.startsWith("/dashboard")) url.searchParams.set("role", "artisan")
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public|api/webhooks).*)",
  ],
}
