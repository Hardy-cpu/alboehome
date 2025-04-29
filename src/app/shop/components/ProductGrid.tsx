'use client'

import Image from 'next/image'

// Temporary mock data
const products = [
  {
    id: 1,
    name: 'World Cup Collection',
    price: '$45',
    image: '/images/dona.jpeg'
  },
  {
    id: 2,
    name: 'Manchester United Collection',
    price: '$75',
    image: '/images/gaffa-becks.jpg'
  },
  {
    id: 3,
    name: 'Brazil Collection',
    price: '$60',
    image: '/images/brazil.jpeg'
  }
]

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-light text-black mb-4">Our Collections</h2>
        <p className="text-gray-600 font-light">Discover our latest photography collections</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-square overflow-hidden bg-neutral-200 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 object-top"
              />
            </div>
            <h3 className="text-lg font-light text-black">{product.name}</h3>
            <p className="text-gray-600 font-light">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 