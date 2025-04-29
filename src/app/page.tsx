'use client'

import { useSnapScroll } from '@/hooks/useSnapScroll'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { Menu, Search, User, ShoppingBag } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { CurtainEffect } from '@/components/CurtainEffect'
import { LatestCollection } from '@/components/LatestCollection'
import { Caveat } from 'next/font/google'
import { useState, useEffect } from 'react'

const caveat = Caveat({ subsets: ['latin'] })

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
          <button
            className="text-white group-hover:text-black transition-colors duration-300"
            onMouseEnter={() => setIsMenuOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>

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
            
            <button className="text-white group-hover:text-black transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <button className="text-white group-hover:text-black transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <button className="text-white group-hover:text-black transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Panel */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-80 bg-[#1C1C1C] text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div className="h-full overflow-y-auto px-8 py-20">
          <nav>
            <ul className="space-y-8">
              {[
                { name: "SS25 LOOKBOOK", href: "/lookbook" },
                { name: "SHOP", href: "/shop" },
                { name: "ABOUT", href: "/about" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xl tracking-wider hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter Signup */}
          <div className="mt-auto pt-20">
            <div className="border-b border-white/30 pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent focus:outline-none text-white placeholder-white/70 text-lg"
              />
            </div>
            <button className="mt-4 text-white text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </aside>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <main className="snap-container">
        {/* SECTION 1: Hero/Landing Page */}
        <section className="snap-section relative">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 relative">
              <Image
                src="/images/porche.jpg"
                alt="Vintage Porsche on coastal road"
                fill
                quality={100}
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
            <div className="w-1/2 relative">
              <Image
                src="/images/porche-1.jpg"
                alt="Vintage Porsche on mountain road"
                fill
                quality={100}
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Trademark */}
          <div className="absolute bottom-8 left-8">
            <p className="text-white text-sm tracking-[0.2em]">alboe™</p>
            <p className="text-white text-xs tracking-wider mt-1"></p>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '35%' }}>
            <Image
              src="/images/alboe-oval.svg"
              alt="alboe"
              width={800}
              height={320}
              className="w-auto h-44 opacity-90"
              quality={100}
              priority
            />
          </div>

          {/* Bottom Right Button */}
          <div className="absolute bottom-12 right-8">
            <Link 
              href="/lookbook" 
              className="text-white hover:text-gray-300 transition-all transform hover:scale-110 inline-block"
            >
              LOOKBOOK
            </Link>
          </div>
        </section>

        {/* SECTION 2: Featured Stories */}
        <section className="snap-section relative">
          <div className="absolute inset-0">
            <Image
              src="/images/swiss-water.png"
              alt="Swiss lake with mountains"
              fill
              quality={100}
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Top Left Description */}
          <div className="absolute top-12 left-8 max-w-md">
            <p className="text-white text-sm tracking-wider leading-relaxed">
              Inspired by the pristine landscapes of Switzerland.
              
            </p>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '35%' }}>
            <Image
              src="/images/alboe-oval.svg"
              alt="alboe"
              width={800}
              height={320}
              className="w-auto h-44 opacity-90"
              quality={100}
              priority
            />
          </div>

          {/* Bottom Left Text - Updated to match image */}
          <div className="absolute bottom-12 left-8">
            <p className="text-white text-sm tracking-[0.2em]">
              alboe<sup className="text-xs">TM</sup> 
            </p>
          </div>

          {/* Bottom Right Button */}
          <div className="absolute bottom-12 right-8">
            <Link 
              href="/non-existent-route" 
              className="text-white hover:text-gray-300 transition-all transform hover:scale-110 inline-block"
            >
              EVERYTHING
            </Link>
          </div>
        </section>

        {/* SECTION 3: Community */}
        <section className="snap-section relative">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 relative">
              <Image
                src="/images/mountain-range.jpeg"
                alt="Mountain range landscape"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="w-1/2 relative">
              <Image
                src="/images/green-forest.jpeg"
                alt="Forest landscape with lake"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Top Right Text */}
          <div className="absolute top-12 left-8 max-w-md">
            <p className="text-white text-sm tracking-wider leading-relaxed">
              Embrace the freedom of the mountains. 
            
            </p>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '35%' }}>
            <Image
              src="/images/alboe-oval.svg"
              alt="alboe"
              width={800}
              height={320}
              className="w-auto h-44 opacity-90"
              quality={100}
              priority
            />
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-12 left-8">
            <p className="text-white text-sm tracking-[0.2em]">
              alboe<sup className="text-xs">TM</sup> | Ride the Wave of Coastal Living
            </p>
          </div>

          {/* Bottom Right Button */}
          <div className="absolute bottom-12 right-8">
            <Link 
              href="/about" 
              className="text-white hover:text-gray-300 transition-all transform hover:scale-110 inline-block"
            >
              ABOUT
            </Link>
          </div>
        </section>

        {/* SECTION 4: Shop & Futbol */}
        <section id="shop-futbol" className="snap-section relative">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 relative overflow-hidden">
              <Image
                src="/images/arsenal.jpeg"
                alt="Arsenal team moment"
                fill
                quality={100}
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
            <div className="w-1/2 relative overflow-hidden">
              <Image
                src="/images/zidane.jpeg"
                alt="Zidane on pitch"
                fill
                quality={100}
                className="object-cover"
                style={{ objectPosition: "center -250px" }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '35%' }}>
            <Image
              src="/images/alboe-oval.svg"
              alt="alboe"
              width={800}
              height={320}
              className="w-auto h-44 opacity-90"
              quality={100}
              priority
            />
          </div>

          {/* Top Left Text */}
          <div className="absolute top-12 left-8 max-w-md">
            <p className="text-white text-sm tracking-wider leading-relaxed">
              Embodying the unrelenting passion of world fútbol - For those who live and breathe the game.
            </p>
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-12 left-8">
            <p className="text-white text-sm tracking-[0.2em]">
              alboe<sup className="text-xs">TM</sup> 
            </p>
          </div>

          {/* Bottom Right Button */}
          <div className="absolute bottom-12 right-8">
            <Link 
              href="/shop" 
              className="text-white hover:text-gray-300 transition-all transform hover:scale-110 inline-block"
            >
              SHOP
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
