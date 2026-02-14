import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-[#F9FAFB]/95 backdrop-blur-md z-50 border-b-2 border-[#E5E7EB] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-black tracking-tight group">
              <span className="text-[#1F2937]">SRINIVAS</span>
              <span className="text-[#EF4444]">FITNESS</span>
              <span className="block h-1 w-0 bg-gradient-to-r from-[#EF4444] to-[#3B82F6] group-hover:w-full transition-all duration-500"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#4B5563] hover:text-[#1F2937] font-semibold transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EF4444] to-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Primary CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#EF4444]/30"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#4B5563] hover:text-[#1F2937] hover:bg-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#E5E7EB] shadow-lg animate-slide-down">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-[#4B5563] hover:text-[#1F2937] hover:bg-[#F9FAFB] rounded-lg font-semibold transition-all duration-300 border-l-4 border-transparent hover:border-[#3B82F6] animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <a
              href="#contact"
              className="block px-4 py-3 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-lg font-bold text-center transition-all duration-300 mt-4 shadow-md hover:shadow-lg hover:shadow-[#EF4444]/30 animate-fade-in"
              style={{ animationDelay: '250ms' }}
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out both;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
