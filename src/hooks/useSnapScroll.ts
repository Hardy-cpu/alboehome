'use client'

import { useEffect, useState } from 'react'

export const useSnapScroll = (totalSections: number) => {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = Math.round(window.scrollY / window.innerHeight)
      setCurrentSection(section)
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
        window.scrollTo({
          top: (currentSection + 1) * window.innerHeight,
          behavior: 'smooth'
        })
      }
      if (e.key === 'ArrowUp' && currentSection > 0) {
        window.scrollTo({
          top: (currentSection - 1) * window.innerHeight,
          behavior: 'smooth'
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [currentSection, totalSections])

  return currentSection
} 