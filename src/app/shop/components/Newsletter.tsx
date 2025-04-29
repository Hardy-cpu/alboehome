'use client'

export default function Newsletter() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-light mb-4">Join the alboe Newsletter</h2>
        <p className="font-light mb-8">Stay updated with our latest collections and stories</p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none font-light"
          />
          <button 
            type="submit"
            className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors font-light"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
} 