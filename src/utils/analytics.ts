/**
 * Utilitaires Google Analytics 4 (GA4)
 *
 * Ce fichier contient des fonctions helpers pour interagir avec Google Analytics
 * de manière sécurisée et type-safe.
 */

// Étendre l'interface Window pour inclure gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Vérifie si Google Analytics est chargé et disponible
 */
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Track un événement custom dans Google Analytics
 *
 * @param eventName - Nom de l'événement (ex: 'form_submit', 'button_click')
 * @param eventParams - Paramètres additionnels de l'événement
 *
 * @example
 * trackEvent('generate_lead', {
 *   form_type: 'quote_request',
 *   success: true
 * });
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
): void => {
  if (!isGALoaded()) {
    console.warn('Google Analytics n\'est pas chargé. Événement non tracké:', eventName);
    return;
  }

  try {
    window.gtag!('event', eventName, eventParams);
    console.log('✅ Événement GA4 tracké:', eventName, eventParams);
  } catch (error) {
    console.error('❌ Erreur lors du tracking de l\'événement:', error);
  }
};

/**
 * Track une page vue
 * Utile pour les applications single-page (SPA) avec routing
 *
 * @param pageTitle - Titre de la page
 * @param pagePath - Chemin de la page (ex: '/about')
 */
export const trackPageView = (pageTitle: string, pagePath?: string): void => {
  if (!isGALoaded()) {
    console.warn('Google Analytics n\'est pas chargé. Page vue non trackée:', pageTitle);
    return;
  }

  try {
    window.gtag!('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath || window.location.pathname,
    });
    console.log('✅ Page vue trackée:', pageTitle, pagePath);
  } catch (error) {
    console.error('❌ Erreur lors du tracking de la page vue:', error);
  }
};

/**
 * Track une conversion / lead
 * Événement spécial pour les formulaires de contact / devis
 *
 * @param formType - Type de formulaire (ex: 'quote_request', 'contact')
 * @param additionalData - Données additionnelles (optionnel)
 */
export const trackLead = (
  formType: string = 'quote_request',
  additionalData?: Record<string, any>
): void => {
  trackEvent('generate_lead', {
    form_type: formType,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

/**
 * Track une erreur
 * Utile pour monitorer les erreurs côté client
 *
 * @param errorDescription - Description de l'erreur
 * @param errorFatal - Si l'erreur est fatale (bloque l'app)
 */
export const trackError = (
  errorDescription: string,
  errorFatal: boolean = false
): void => {
  trackEvent('exception', {
    description: errorDescription,
    fatal: errorFatal,
  });
};

/**
 * Track un clic sur un bouton CTA
 *
 * @param ctaName - Nom du bouton CTA
 * @param ctaLocation - Emplacement du bouton (ex: 'hero', 'footer')
 */
export const trackCTAClick = (ctaName: string, ctaLocation?: string): void => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
};
