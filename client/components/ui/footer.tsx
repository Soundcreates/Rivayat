import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"
import { NAVIGATION, SITE_CONFIG } from "@/lib/config"

export function Footer() {
  return (
    <footer className="story-section mt-20">
      <div className="retro-pattern absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/brand/logo.jpg"
                alt="Rivayat"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="font-serif text-xl font-bold text-secondary">Rivayat</span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Connecting you with India's finest artisans and their timeless stories. Every purchase supports
              traditional craftsmanship and empowers communities.
            </p>
            <div className="flex space-x-4">
              <Link
                href={SITE_CONFIG.links.instagram}
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href={SITE_CONFIG.links.facebook}
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href={SITE_CONFIG.links.twitter}
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@rivayat.app"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-secondary mb-4">Support</h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.slice(3).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Rivayat. All rights reserved. Made with ❤️ for Indian artisans.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
            Empowering 10,000+ artisans across 28 states
          </p>
        </div>
      </div>
    </footer>
  )
}
