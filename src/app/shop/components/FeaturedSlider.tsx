'use client'

import Image from 'next/image'
import { useState } from 'react'

const featuredItems = [
  {
    id: 1,
    name: 'Mercedes Collection',
    description: 'Classic elegance meets modern design',
    image: '/images/drogba-henry.jpeg'
  },
  {
    id: 2,
    name: 'Snow Collection',
    description: 'Winter essentials for your journey',
    image: '/images/IMG_1025.png'
  },
  {
    id: 3,
    name: 'Surf Collection',
    description: 'Catch the perfect wave',
    image: '/images/surf-jpg.jpg'
  }
]

export default function FeaturedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)
  }

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-light mb-8 text-center">Featured Collections</h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-light mb-4">{item.name}</h3>
                    <p className="font-light mb-6">{item.description}</p>
                    <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 hover:bg-white/70"
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 hover:bg-white/70"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
} 