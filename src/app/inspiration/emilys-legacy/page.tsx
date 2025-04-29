import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function EmilysLegacy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="text-xl font-light tracking-wide">Back to Home</span>
          </Link>
          <h1 
            className="text-2xl font-bold tracking-[0.15em] uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage: `url(https://i.ibb.co/GM1ZBZW/oregon-road.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text'
            }}
          >
            alboe
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-light tracking-wide mb-8 text-black">Emily's Legacy</h2>
        
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <Image 
              src="https://i.ibb.co/YLZvCKq/Alboe-Car.jpg" 
              alt="Emily's vintage car" 
              width={1200} 
              height={800} 
              className="w-full max-w-4xl h-auto object-cover rounded-lg"
            />
          </div>
          <p className="text-center text-sm text-gray-600 mb-8">
            Emily's favorite convertible spot (Portland, OR)
          </p>
        </div>

        <div className="space-y-6 text-black font-light">
          <p>
            Emily's story began on a crisp autumn morning in the heart of Portland, Oregon. Born to a family of artists and dreamers, she was destined to leave an indelible mark on the world. From a young age, Emily's curiosity and creativity knew no bounds, often leading her on adventures through the lush forests and along the rugged coastlines of the Pacific Northwest.
          </p>
          
          <p>
            As she grew older, Emily's passion for storytelling and photography blossomed. She had an uncanny ability to capture the essence of a moment, freezing time in a single frame. Her photographs weren't just images; they were windows into the souls of her subjects, revealing the beauty in the ordinary and the extraordinary in the mundane.
          </p>
          
          <p>
            Emily's legacy truly began to take shape when she founded alboe. What started as a small blog showcasing her photographs and stories quickly grew into a movement. She created a space where people from all walks of life could share their experiences, their art, and their dreams. Emily believed that everyone had a story worth telling, and she made it her mission to give voice to the voiceless.
          </p>
          
          <p>
            Through alboe, Emily brought together a community of authentic individuals who embraced life in all its forms. She organized events, workshops, and exhibitions that celebrated creativity and human connection. Her work inspired countless others to pick up a camera, put pen to paper, or simply look at the world with fresh eyes.
          </p>
          
          <p>
            Today, Emily's spirit lives on through alboe. Her legacy is not just in the stunning images she left behind or the stories she told, but in the community she built and the lives she touched. Emily showed us that there is beauty in every moment, every person, and every story. She taught us that by embracing a little bit of everything, we can create something truly extraordinary.
          </p>
        </div>
      </main>

      <footer className="bg-[#FAF9F6] py-12 px-4 mt-12">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-light tracking-wide mb-4 text-[#074703]">Contact</h3>
            <p className="text-black font-light">Portland, OR</p>
            <p className="text-black font-light">Twombly Avenue</p>
            <p className="text-black font-light">503-490-5874</p>
          </div>
          <div>
            <h3 className="text-xl font-light tracking-wide mb-4 text-[#074703]">Follow Us</h3>
            <p className="text-black font-light">Stay connected on our journey</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-[#074703] hover:text-[#7FBED0] font-light">Instagram</a>
              <a href="#" className="text-[#074703] hover:text-[#7FBED0] font-light">Facebook</a>
              <a href="#" className="text-[#074703] hover:text-[#7FBED0] font-light">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

