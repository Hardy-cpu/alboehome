'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[80vh] bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src="/images/car-back2.jpeg"
          alt="Mercedes Benz rear view"
          fill
          className="object-cover blur-[2px]"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </section>
  )
} 