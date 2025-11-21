import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#fonctionnement', text: 'Fonctionnement' },
    { href: '#avantages', text: 'Avantages' },
    { href: '#faq', text: 'FAQ' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Clim'Intérieure
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-700 px-4">
              {link.text}
            </a>
          ))}
          <a
            href="#formulaire"
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Demander un devis gratuit
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            className="text-gray-800 focus:outline-none"
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
        <div id="mobile-menu" className="md:hidden px-6 pb-4">
          <nav className="flex flex-col items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-700 py-2">
                {link.text}
              </a>
            ))}
            <a
              href="#formulaire"
              className="bg-blue-600 text-white font-semibold w-full text-center mt-4 px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Demander un devis gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
