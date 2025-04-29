'use client'

import { useState, useEffect } from "react"
import { Menu, Search, User, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <>
      {/* Sticky Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-16 transition-all duration-300 bg-transparent",
          isScrolled ? "bg-white shadow-sm" : "",
        )}
      >
        <button onClick={toggleMenu} className="p-2 focus:outline-none" aria-label="Toggle menu">
          <Menu className="h-5 w-5" />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-300">
          {isScrolled ? (
            <div className="w-8 h-8 relative">
              <Image
                src="/images/alboe-oval.svg"
                alt="alboe"
                fill
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <Link href="/" className="font-medium tracking-wider uppercase text-sm">
              alboe
            </Link>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-1 focus:outline-none" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-1 focus:outline-none" aria-label="Account">
            <User className="h-5 w-5" />
          </button>
          <button className="p-1 focus:outline-none" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Navigation Side Panel */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-80 bg-zinc-800/90 backdrop-blur-sm text-white transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="h-full overflow-y-auto">
          <div className="px-6 py-20">
            {/* Navigation Links */}
            <nav>
              <ul className="space-y-6">
                {[
                  { name: "SHOP", href: "/shop" },
                  { name: "SS25 LOOKBOOK", href: "/lookbook" },
                  { name: "NEWS", href: "/news" },
                  { name: "ABOUT", href: "/about" },
                  { name: "STORES", href: "/stores" },
                  { name: "CAFÉ", href: "/cafe" },
                  { name: "ART", href: "/art" },
                  { name: "SONNY", href: "/sonny" },
                  { name: "SOUND", href: "/sound" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg tracking-wider hover:text-gray-300 transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Newsletter Signup */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <div className="flex items-center border-b border-white/30 pb-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-full focus:outline-none text-white placeholder-white/70"
                />
                <button className="whitespace-nowrap ml-4 text-white">Subscribe</button>
              </div>

              {/* Footer Links */}
              <div className="mt-8 space-y-3">
                <Link href="/client-services" className="block text-sm hover:text-gray-300">
                  Client Services
                </Link>
                <Link href="/privacy-policy" className="block text-sm hover:text-gray-300">
                  Privacy Policy
                </Link>
                <Link href="/careers" className="block text-sm hover:text-gray-300">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleMenu}
      />

      {/* Page content padding to account for fixed header */}
      <div className="pt-16" />
    </>
  )
} 