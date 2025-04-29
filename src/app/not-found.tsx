'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#2a3a2a]">
        <div className="absolute inset-0 backdrop-blur-[3px] bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#1a2f1a]/50 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        {/* Centered Logo */}
        <div className="mb-12">
          <Image
            src="/images/alboe-oval.svg"
            alt="alboe"
            width={800}
            height={320}
            className="w-auto h-44 opacity-90 brightness-110"
            quality={100}
            priority
          />
        </div>

        {/* Error Message */}
        <div className="text-center text-white/90 mb-12">
          <h1 className="text-6xl font-light tracking-wider mb-4">404</h1>
          <p className="text-xl tracking-wider mb-2">Page Not Found</p>
          <p className="text-sm tracking-wider opacity-80">This page is currently under construction</p>
        </div>

        {/* Home Button */}
        <Link 
          href="/" 
          className="text-white/90 hover:text-white transition-all transform hover:scale-110 inline-block text-sm tracking-wider"
        >
          RETURN HOME
        </Link>
      </div>
    </main>
  )
} 