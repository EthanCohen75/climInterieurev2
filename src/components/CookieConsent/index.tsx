import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  hasGivenConsent,
  acceptAllCookies,
  rejectAllCookies,
  saveConsent
} from '../../utils/cookieManager';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné
    if (!hasGivenConsent()) {
      // Petite temporisation pour éviter l'affichage immédiat
      setTimeout(() => setIsVisible(true), 1000);
    }

    // Écouter l'événement pour rouvrir la bannière (via "Gérer les cookies")
    const handleOpenSettings = () => {
      setIsVisible(true);
      setShowDetails(true);
    };

    window.addEventListener('openCookieSettings', handleOpenSettings);

    return () => {
      window.removeEventListener('openCookieSettings', handleOpenSettings);
    };
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);

    // Recharger la page pour initialiser Google Analytics
    window.location.reload();
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent({ analytics: analyticsEnabled });
    setIsVisible(false);

    // Recharger si analytics activé
    if (analyticsEnabled) {
      window.location.reload();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay semi-transparent */}
      <div
        className="fixed inset-0 bg-editorial-charcoal/60 backdrop-blur-sm z-40"
        onClick={() => {
          if (!showDetails) {
            setIsVisible(false);
          }
        }}
      />

      {/* Bannière de consentement */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          <div className="bg-white border-2 border-editorial-charcoal shadow-2xl rounded-lg overflow-hidden">
            {!showDetails ? (
              // Vue simple
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  {/* Icône cookie */}
                  <div className="flex-shrink-0 text-4xl">
                    🍪
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-editorial-charcoal mb-3">
                      Respect de votre vie privée
                    </h3>
                    <p className="font-body text-editorial-stone mb-4">
                      Ce site utilise des cookies, notamment <strong>Google Analytics</strong>, pour améliorer
                      votre expérience et analyser notre trafic. Vos données ne sont jamais vendues à des tiers.
                    </p>
                    <p className="font-body text-sm text-editorial-stone">
                      En savoir plus sur notre{' '}
                      <Link
                        to="/politique-confidentialite"
                        className="text-editorial-sage hover:text-editorial-copper underline"
                      >
                        Politique de confidentialité
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-editorial-sage text-white px-6 py-3 rounded font-sans font-medium
                             hover:bg-editorial-copper hover:shadow-lg transition-all duration-300"
                  >
                    Accepter tous les cookies
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 bg-editorial-stone text-white px-6 py-3 rounded font-sans font-medium
                             hover:bg-editorial-charcoal hover:shadow-lg transition-all duration-300"
                  >
                    Refuser
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 border-2 border-editorial-charcoal text-editorial-charcoal px-6 py-3
                             rounded font-sans font-medium hover:bg-editorial-charcoal hover:text-white
                             transition-all duration-300"
                  >
                    Personnaliser
                  </button>
                </div>
              </div>
            ) : (
              // Vue détaillée avec options
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl text-editorial-charcoal mb-4">
                  Gestion des cookies
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Cookies essentiels (toujours actifs) */}
                  <div className="border border-editorial-mist rounded-lg p-4 bg-editorial-cream/30">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-sans font-semibold text-editorial-charcoal mb-1">
                          Cookies essentiels
                        </h4>
                        <p className="font-body text-sm text-editorial-stone">
                          Nécessaires au fonctionnement du site. Incluent le stockage de vos préférences de cookies.
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <div className="bg-editorial-sage text-white px-3 py-1 rounded text-sm font-sans">
                          Toujours actif
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cookies analytics */}
                  <div className="border border-editorial-mist rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-sans font-semibold text-editorial-charcoal mb-1">
                          Cookies analytiques (Google Analytics)
                        </h4>
                        <p className="font-body text-sm text-editorial-stone">
                          Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                          Aucune donnée personnelle n'est vendue.
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <label className="relative inline-block w-14 h-8">
                          <input
                            type="checkbox"
                            checked={analyticsEnabled}
                            onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-full h-full bg-editorial-stone rounded-full peer
                                        peer-checked:bg-editorial-sage peer-focus:ring-2
                                        peer-focus:ring-editorial-sage transition-colors cursor-pointer">
                            <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full
                                          peer-checked:translate-x-6 transition-transform"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-editorial-sage text-white px-6 py-3 rounded font-sans font-medium
                             hover:bg-editorial-copper hover:shadow-lg transition-all duration-300"
                  >
                    Enregistrer mes préférences
                  </button>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="flex-1 border-2 border-editorial-charcoal text-editorial-charcoal px-6 py-3
                             rounded font-sans font-medium hover:bg-editorial-charcoal hover:text-white
                             transition-all duration-300"
                  >
                    Retour
                  </button>
                </div>

                <p className="font-body text-xs text-editorial-stone mt-4 text-center">
                  Votre choix sera conservé pendant 13 mois. Vous pouvez modifier vos préférences à tout moment
                  via le lien "Gérer les cookies" en bas de page.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ajout d'une animation pour le slide-up */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CookieConsent;
