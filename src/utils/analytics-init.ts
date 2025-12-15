/**
 * Initialisation de Google Analytics 4 (GA4)
 *
 * Ce fichier charge et configure Google Analytics au démarrage de l'application.
 * Il doit être importé dans main.tsx avant le rendu de l'application.
 */

/**
 * Initialise Google Analytics 4
 * Charge le script gtag.js et configure le tracking avec l'ID de mesure
 */
export const initializeGA = (): void => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Si l'ID de mesure n'est pas configuré, on ne charge pas GA
  if (!measurementId) {
    console.warn(
      '⚠️ Google Analytics non initialisé: VITE_GA_MEASUREMENT_ID n\'est pas configuré dans .env'
    );
    return;
  }

  // Si GA est déjà initialisé, on ne le recharge pas
  if (window.gtag) {
    console.log('ℹ️ Google Analytics déjà initialisé');
    return;
  }

  try {
    // Créer le dataLayer si il n'existe pas
    window.dataLayer = window.dataLayer || [];

    // Fonction gtag
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };

    // Initialiser gtag avec la date actuelle
    window.gtag('js', new Date());

    // Configurer avec l'ID de mesure
    window.gtag('config', measurementId, {
      send_page_view: true, // Envoyer automatiquement les page views
    });

    // Charger le script gtag.js de manière asynchrone
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    console.log('✅ Google Analytics initialisé avec l\'ID:', measurementId);
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation de Google Analytics:', error);
  }
};

// Étendre l'interface Window pour TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
