import Link from 'next/link';

interface FooterProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export function Footer({ theme = 'light', className = '' }: FooterProps) {
  const baseTextColor = theme === 'light' ? 'text-black' : 'text-white';
  const accentTextColor = theme === 'light' ? 'text-[#074703]' : 'text-white';
  const hoverColor = theme === 'light' ? 'hover:text-[#7FBED0]' : 'hover:text-gray-300';
  const bgColor = theme === 'light' ? 'bg-[#FAF9F6]' : 'bg-transparent';

  return (
    <footer className={`${bgColor} py-12 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className={`text-xl font-light tracking-wide mb-4 ${accentTextColor}`}>Contact</h3>
          <p className={`${baseTextColor} font-light`}>Portland, OR</p>
          <p className={`${baseTextColor} font-light`}>Twombly Avenue</p>
          <p className={`${baseTextColor} font-light`}>503-490-5874</p>
        </div>
        <div>
          <h3 className={`text-xl font-light tracking-wide mb-4 ${accentTextColor}`}>Follow Us</h3>
          <p className={`${baseTextColor} font-light`}>Stay connected on our journey</p>
          <div className="flex mt-4 space-x-4">
            <Link 
              href="#" 
              className={`${accentTextColor} ${hoverColor} font-light transition-colors hover:underline hover:underline-offset-4`}
            >
              Instagram
            </Link>
            <Link 
              href="#" 
              className={`${accentTextColor} ${hoverColor} font-light transition-colors hover:underline hover:underline-offset-4`}
            >
              Facebook
            </Link>
            <Link 
              href="#" 
              className={`${accentTextColor} ${hoverColor} font-light transition-colors hover:underline hover:underline-offset-4`}
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 