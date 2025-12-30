import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHomePage) {
      const targetElement = document.querySelector('#formulaire');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si on n'est pas sur la page d'accueil, rediriger vers la home avec le hash
      window.location.href = '/#formulaire';
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

        {/* Liens légaux */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-sm mt-6">
          <Link
            to="/mentions-legales"
            className="text-editorial-stone hover:text-editorial-copper transition-colors duration-300"
          >
            Mentions légales
          </Link>
          <span className="text-editorial-stone">•</span>
          <Link
            to="/politique-confidentialite"
            className="text-editorial-stone hover:text-editorial-copper transition-colors duration-300"
          >
            Politique de confidentialité
          </Link>
          <span className="text-editorial-stone">•</span>
          <Link
            to="/conditions-generales"
            className="text-editorial-stone hover:text-editorial-copper transition-colors duration-300"
          >
            Conditions générales
          </Link>
          <span className="text-editorial-stone">•</span>
          <button
            onClick={() => {
              // Cette fonction sera connectée au gestionnaire de cookies plus tard
              const event = new CustomEvent('openCookieSettings');
              window.dispatchEvent(event);
            }}
            className="text-editorial-stone hover:text-editorial-copper transition-colors duration-300"
          >
            Gérer les cookies
          </button>
        </div>

        {/* Copyright */}
        <div className="font-sans text-sm text-editorial-stone tracking-wide mt-8">
          &copy; {new Date().getFullYear()} Clim'intérieure. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
