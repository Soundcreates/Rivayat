"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ShoppingCart, User, Search, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { NAVIGATION } from "@/lib/config"
import { useAuthStore } from "@/lib/auth"
import { useCartStore } from "@/lib/store"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuthStore()
  const { getTotalItems } = useCartStore()

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  const handleSearch = () => {
    window.location.href = "/products?search=true"
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2 w-32 h-10" aria-label="Rivayat Home">
              <Image src="/brand/logo.png" alt="Rivayat" width={40} height={40} className="w-10 h-10" />
              <span className="font-serif text-xl font-bold text-primary">Rivayat</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary hover:text-accent transition-colors font-medium min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated && user?.type === "artisan" && (
                <Link
                  href="/dashboard"
                  className="text-primary hover:text-accent transition-colors font-medium min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-accent min-h-[44px] min-w-[44px]"
              onClick={handleSearch}
              aria-label="Search products"
            >
              <Search className="w-4 h-4" />
            </Button>

            <Link href="/cart" aria-label="Shopping cart">
              <Button
                variant="ghost"
                size="sm"
                className="relative text-primary hover:text-accent min-h-[44px] min-w-[44px]"
              >
                <ShoppingCart className="w-4 h-4" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center p-0">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-accent min-h-[44px]">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {user?.name?.charAt(0) || user?.phone?.charAt(-2) || "U"}
                        </span>
                      </div>
                      <span className="text-sm">{user?.name || `+91 ${user?.phone}`}</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium text-primary">{user?.name || "User"}</p>
                    <p className="text-xs text-primary/70">+91 {user?.phone}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {user?.type === "artisan" ? "Artisan" : "Buyer"}
                    </Badge>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  {user?.type === "artisan" && (
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        <Settings className="w-4 h-4 mr-2" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth" aria-label="Login">
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent min-h-[44px] min-w-[44px]">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary min-h-[44px] min-w-[44px]"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary hover:text-accent transition-colors font-medium min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated && user?.type === "artisan" && (
                <Link
                  href="/dashboard"
                  className="text-primary hover:text-accent transition-colors font-medium min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              )}

              <div className="flex items-center space-x-4 pt-4 border-t border-primary/20">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary min-h-[44px] min-w-[44px]"
                  onClick={handleSearch}
                >
                  <Search className="w-4 h-4" />
                </Button>
                <Link href="/cart">
                  <Button variant="ghost" size="sm" className="relative text-primary min-h-[44px] min-w-[44px]">
                    <ShoppingCart className="w-4 h-4" />
                    {getTotalItems() > 0 && (
                      <Badge className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center p-0">
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                </Link>
                {!isAuthenticated && (
                  <Link href="/auth">
                    <Button variant="ghost" size="sm" className="text-primary min-h-[44px] min-w-[44px]">
                      <User className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>

              {isAuthenticated && (
                <div className="pt-4 border-t border-primary/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {user?.name?.charAt(0) || user?.phone?.charAt(-2) || "U"}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{user?.name || "User"}</p>
                      <p className="text-xs text-primary/70">+91 {user?.phone}</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                    className="w-full text-red-600 border-red-200 bg-transparent"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
