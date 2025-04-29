import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function InspirationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen">
        <Image
          src="/images/emilys-legacy.jpg"
          alt="Emily's Legacy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl mb-4">Emily's Legacy</h1>
          <p className="text-xl max-w-2xl text-center px-4">
            {/* Add Emily's Legacy content */}
          </p>
        </div>
      </section>
    </main>
  )
}

