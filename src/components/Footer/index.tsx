import React from 'react';

const Footer: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#formulaire');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-editorial-charcoal text-editorial-cream py-16 px-6 border-t border-editorial-ink">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-3xl lg:text-4xl text-editorial-cream mb-3">
          Clim'intérieure
        </h3>

        <p className="font-body text-lg text-editorial-stone mb-8">
          Solution de climatisation 100% intérieure
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-editorial-copper mx-auto mb-8"></div>

        {/* Contact link */}
        <a
          href="#formulaire"
          onClick={scrollToForm}
          className="font-sans text-sm text-editorial-stone hover:text-editorial-copper transition-colors duration-300 uppercase tracking-wide"
        >
          Contact
        </a>

        {/* Copyright */}
        <div className="font-sans text-sm text-editorial-stone tracking-wide mt-8">
          &copy; {new Date().getFullYear()} Clim'intérieure. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
