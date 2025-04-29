'use client'

import React, { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.style.transform = 'translateY(0)'
            section.style.opacity = '1'
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="transition-all duration-1000 ease-out transform translate-y-full opacity-0"
    >
      {children}
    </div>
  )
}

