'use client'

import Link from 'next/link'

export default function ShopHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Center - Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-white hover:opacity-70 transition-opacity font-light">
              All
            </Link>
            <Link href="/shop/mercedes" className="text-white hover:opacity-70 transition-opacity font-light">
              Mercedes
            </Link>
            <Link href="/shop/snow" className="text-white hover:opacity-70 transition-opacity font-light">
              Snow
            </Link>
            <Link href="/shop/surf" className="text-white hover:opacity-70 transition-opacity font-light">
              Surf
            </Link>
          </div>

          {/* Right side - Cart */}
          <button className="text-white hover:opacity-70 transition-opacity font-light">
            Cart (0)
          </button>
        </div>
      </nav>
    </header>
  )
} 