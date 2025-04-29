'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ShopHeader from '../components/ShopHeader'

const collections = [
  {
    id: 1,
    name: 'Mercedes Collection',
    description: 'Classic elegance meets modern design',
    image: '/images/car-back2.jpeg',
    link: '/shop/mercedes'
  },
  {
    id: 2,
    name: 'Snow Collection',
    description: 'Winter essentials for your journey',
    image: '/images/sno-trollly.jpeg',
    link: '/shop/snow'
  },
  {
    id: 3,
    name: 'Surf Collection',
    description: 'Catch the perfect wave',
    image: '/images/surf-jpg.jpg',
    link: '/shop/surf'
  }
]

export default function CollectionsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length)
  }

  return (
    <main className="min-h-screen bg-black">
      <ShopHeader />
      
      <section className="h-screen relative flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {collections.map((collection) => (
                <div key={collection.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[600px]">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left text-white">
                      <h2 className="text-4xl font-light mb-6">{collection.name}</h2>
                      <p className="text-xl font-light mb-8">{collection.description}</p>
                      <Link 
                        href={collection.link}
                        className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors inline-block"
                      >
                        View Collection
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-4 hover:bg-white/20"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-4 hover:bg-white/20"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </main>
  )
} 