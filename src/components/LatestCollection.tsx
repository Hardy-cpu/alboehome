'use client'

import { useState } from 'react'
import Image from "next/image"

export function LatestCollection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="relative h-[400px]"> {/* Updated to match alboe inspiration height */}
      <Image
        src= "/images/car-back2.jpeg"
        alt="Vintage car in a scenic landscape"
        layout="fill"
        quality={100}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16"> {/* Changed justify-center to justify-end and added pb-16 */}
        <h2 className="inline-block text-2xl font-light tracking-wide text-white border border-white px-5 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125 cursor-pointer">
          Latest Collection
        </h2>
        <p className="text-white text-lg mt-3 font-light">Discover our newest creations</p>
        <div className="mt-6">
          <button 
            className="bg-white text-black px-6 py-2 rounded-full text-base font-light transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            Shop All Collections
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="absolute bottom-16 left-0 right-0 bg-black/70 p-4 transition-all duration-300 ease-in-out"> {/* Changed bottom-0 to bottom-16 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-white">
              <h3 className="text-2xl font-light mb-2">alboe | Mercedes Cream</h3>
              <p className="font-light mb-4">Shop our Classic Mercedes Cream Collection</p>
              <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors text-sm">
                Explore
              </button>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-light mb-2">alboe | Mercedes Red</h3>
              <p className="font-light mb-4">Shop our Elegant Mercedes Red Collection</p>
              <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors text-sm">
                Discover
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

