'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LookbookPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 h-8 group bg-transparent hover:bg-white transition-colors duration-300">
        <div className="flex items-center justify-between h-full px-8">
          <Link href="/" className="text-white group-hover:text-black transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </Link>

          <div className="flex-1" />

          <div className="flex items-center gap-6">
            {!isScrolled && (
              <span className="text-sm tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300 mr-6">
                a little bit of everything
              </span>
            )}
            {isScrolled && (
              <div className="h-5 w-20 relative mr-6">
                <Image
                  src="/images/alboe-oval.svg"
                  alt="alboe"
                  width={80}
                  height={20}
                  className="brightness-0 invert group-hover:invert-0 transition-[filter] duration-300"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="min-h-screen">
        {/* Lookbook Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 pt-16">
          {/* Add your lookbook images here */}
          <div className="relative aspect-square">
            <Image
              src="/images/porche.jpg"
              alt="Lookbook Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/porche-1.jpg"
              alt="Lookbook Image 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/swiss-water.png"
              alt="Lookbook Image 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-12 w-full px-8 flex justify-between">
          <Link 
            href="/" 
            className="text-black hover:text-gray-600 transition-all transform hover:scale-110 inline-block"
          >
            HOME
          </Link>
        </div>
      </main>
    </>
  )
} 