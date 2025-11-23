import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import hero from '@/public/hero.png';

export default function LayoutWithHeroHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuSections = [
    {
      id: 'products',
      title: 'Products',
      items: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    },
    {
      id: 'solutions',
      title: 'Solutions',
      items: ['Service 1', 'Service 2', 'Service 3', 'Service 4']
    },
    {
      id: 'resources',
      title: 'Resources',
      items: ['Resource 1', 'Resource 2', 'Resource 3', 'Resource 4']
    }
  ];

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleDropdown = (id: any) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section with white background */}
      <section
        className="w-full h-auto min-h-[600px] md:h-[913px] relative bg-white"
        aria-labelledby="main-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* LEFT TEXT CONTENT */}
          <div className="flex flex-col justify-center px-6 md:px-16 space-y-6 md:space-y-8 py-12 md:py-0 order-2 md:order-1 bg-white">
            {/* Main Heading with proper heading hierarchy */}
            <h1
              id="main-heading"
              className="font-['Roboto_Condensed'] text-3xl md:text-[42px] font-bold tracking-tighter leading-tight text-[#222222]"
            >
              Lorem ipsum dolor sit amet consectetur
            </h1>

            {/* Description */}
            <p className="font-['Inter'] text-base md:text-[20px] tracking-tighter font-semibold text-[#222222] max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis.
              Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque.
            </p>

            {/* INPUT GROUP - Responsive layout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6">
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-72 focus:outline-none focus:border-[#1959AC] focus:ring-2 focus:ring-[#1959AC] focus:ring-opacity-20 font-['Inter'] text-base"
                aria-label="Your email address"
                required
              />

              <button
                className="bg-[#1959AC] hover:bg-[#0546D2] text-white px-6 py-3 rounded-lg 
             font-['Inter'] text-base md:text-[20px] tracking-tighter font-semibold 
             transition-colors duration-200 focus:outline-none focus:ring-2 
             focus:ring-[#1959AC] focus:ring-opacity-50 w-full sm:w-auto 
             flex items-center gap-2"
              >
                Submit
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* FEATURE TEXT */}
            <div className="flex items-center space-x-3 text-[#222222] font-['Inter'] text-base md:text-[18px] tracking-tighter font-semibold mt-4">
              <span className="bg-[#1959AC] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center justify-center">
                ✓
              </span>
              <p>No credit card required!</p>
            </div>
          </div>

          {/* RIGHT IMAGE WITH DIAGONAL CUT - No overlay */}
          <div className="relative h-64 md:h-full w-full order-1 md:order-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${hero.src})`,
                clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              role="img"
              aria-label="Modern technology workspace with computers and office setup"
            />
            {/* REMOVED the overlay div: <div class="absolute inset-0 bg-black/55"></div> */}
          </div>
        </div>
      </section>

      {/* Header with mobile responsiveness */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="w-full h-16 flex items-center justify-between px-4 md:px-16 mx-auto relative">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-[#222222] font-bold hover:opacity-90 transition-opacity"
              aria-label="Homepage"
            >
              <h1 className="font-['Roboto_Condensed'] text-2xl md:text-[42px] tracking-tighter font-bold leading-none">
                LOGO
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {menuSections.map((section) => (
              <div key={section.id} className="relative">
                <button
                  className="flex items-center text-[#222222] hover:text-[#1959AC] transition-colors"
                  onClick={() => toggleDropdown(section.id)}
                  aria-expanded={openDropdown === section.id}
                  aria-haspopup="true"
                  aria-controls={`dropdown-${section.id}`}
                >
                  <span className="font-['Inter'] text-[20px] tracking-tighter font-semibold">
                    {section.title}
                  </span>
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${openDropdown === section.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === section.id && (
                  <div
                    id={`dropdown-${section.id}`}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                    role="menu"
                  >
                    {section.items.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-[#222222] hover:bg-gray-100 font-['Inter'] transition-colors"
                        role="menuitem"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Sign In Button - Hidden on mobile */}
            <div className="hidden md:flex items-center">
              <a
                href="/signin"
                className="bg-[#1959AC] hover:bg-[#0546D2] text-white px-6 py-2 rounded font-['Inter'] text-[20px] tracking-tighter font-semibold transition-colors"
                aria-label="Sign in to your account"
              >
                Sign In
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[#222222] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#222222] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#222222] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-4 px-6">
            <nav aria-label="Mobile navigation">
              {menuSections.map((section) => (
                <div key={section.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className="flex items-center justify-between w-full py-3 text-left font-['Inter'] text-lg font-semibold text-[#222222]"
                    onClick={() => toggleDropdown(section.id)}
                    aria-expanded={openDropdown === section.id}
                  >
                    {section.title}
                    <svg
                      className={`w-4 h-4 transition-transform ${openDropdown === section.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openDropdown === section.id && (
                    <div className="pl-4 pb-2">
                      {section.items.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block py-2 text-[#222222] hover:text-[#1959AC] font-['Inter'] transition-colors"
                          onClick={closeAllDropdowns}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Sign In Button */}
              <div className="pt-4 border-t border-gray-200 mt-2">
                <a
                  href="/signin"
                  className="block w-full bg-[#1959AC] hover:bg-[#0546D2] text-white text-center py-3 rounded font-['Inter'] text-lg font-semibold transition-colors"
                  onClick={closeAllDropdowns}
                >
                  Sign In
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Click outside to close dropdowns */}
      {(openDropdown || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeAllDropdowns}
          aria-hidden="true"
        />
      )}
    </div>
  );
}