import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#avantages', text: 'Avantages' },
    { href: '#applications', text: 'Applications' },
    { href: '#faq', text: 'FAQ' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-editorial-mist">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="text-2xl font-display font-bold text-editorial-charcoal tracking-tight hover:text-editorial-copper transition-colors duration-300 cursor-pointer"
        >
          Clim'intérieure
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleSmoothScroll}
              className="text-editorial-stone hover:text-editorial-charcoal font-sans text-sm tracking-wide transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-editorial-copper after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.text}
            </a>
          ))}
          <a
            href="#formulaire"
            onClick={handleSmoothScroll}
            className="btn-editorial"
          >
            Prenons contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            className="text-editorial-charcoal focus:outline-none"
            aria-label="Ouvrir le menu de navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden fixed inset-0 top-16 bg-editorial-mist/95 backdrop-blur-md z-[60] px-6 py-8 shadow-2xl border-t border-editorial-mist">
          <nav className="relative z-10 flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleSmoothScroll}
                className="text-editorial-charcoal hover:text-editorial-copper font-display text-2xl transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#formulaire"
              onClick={handleSmoothScroll}
              className="btn-editorial w-full text-center mt-4"
            >
              Prenons contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
