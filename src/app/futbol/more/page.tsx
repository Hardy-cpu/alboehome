'use client'

import Image from "next/image"
import Link from "next/link"

export default function FutbolMorePage() {
  return (
    <main className="snap-container">
      <section className="snap-section relative">
        {/* Grid of three overlapping images */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          <div className="relative overflow-hidden">
            <Image
              src="/images/zidane.jpeg"
              alt="Soccer moment"
              fill
              quality={100}
              className="object-cover"
              style={{ objectPosition: "center 100%" }}
            />
          </div>
          <div className="relative overflow-hidden -ml-10">
            <Image
              src="/images/arsenal.jpeg"
              alt="Arsenal team moment"
              fill
              quality={100}
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
          <div className="relative overflow-hidden -ml-10">
            <Image
              src="/images/zidane.jpeg"
              alt="Soccer moment"
              fill
              quality={100}
              className="object-cover"
              style={{ objectPosition: "center 100%" }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Centered Logo with Link */}
        <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '35%' }}>
          <Link href="/">
            <Image
              src="/images/raw-logo.png"
              alt="alboe"
              width={800}
              height={320}
              className="w-auto h-56 mix-blend-screen hover:opacity-75 transition-opacity"
              quality={100}
              priority
            />
          </Link>
        </div>
        
        {/* Bottom Left Text */}
        <div className="absolute bottom-12 left-8">
          <p className="text-white text-xl font-light tracking-wide">
            A life with <i>a little bit of the beautiful game</i>
          </p>
        </div>

        {/* Bottom Right Button */}
        <div className="absolute bottom-12 right-8">
          <Link 
            href="/futbol" 
            className="border border-white text-white px-8 py-2 hover:bg-white hover:text-black transition-colors"
          >
            BACK
          </Link>
        </div>
      </section>
    </main>
  )
} 