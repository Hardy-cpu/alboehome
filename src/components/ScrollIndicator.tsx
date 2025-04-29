'use client'

interface ScrollIndicatorProps {
  totalSections: number
  currentSection: number
}

export const ScrollIndicator = ({ totalSections, currentSection }: ScrollIndicatorProps) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              window.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
              })
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Scroll to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 