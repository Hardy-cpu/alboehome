'use client'

import React, { useEffect, useRef } from 'react'

interface CurtainEffectProps {
  children: React.ReactNode
}

export const CurtainEffect: React.FC<CurtainEffectProps> = ({ children }) => {
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = sectionsRef.current?.children
    if (!sections) return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    Array.from(sections).forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionsRef}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={`curtain-section ${index === 0 ? 'reveal' : ''}`}>
          {child}
        </div>
      ))}
    </div>
  )
}
