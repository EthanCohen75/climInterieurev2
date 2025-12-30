// Gestionnaire de consentement aux cookies (RGPD/CNIL)

export interface CookieConsent {
  analytics: boolean;
  timestamp: number;
}

const CONSENT_KEY = 'climinterieure_cookie_consent';

/**
 * Récupère le consentement stocké dans localStorage
 */
export const getStoredConsent = (): CookieConsent | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored);

    // Vérifier que le consentement n'est pas trop ancien (13 mois selon CNIL)
    const thirteenMonthsAgo = Date.now() - (13 * 30 * 24 * 60 * 60 * 1000);
    if (data.timestamp < thirteenMonthsAgo) {
      // Consentement expiré
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Erreur lors de la lecture du consentement:', error);
    return null;
  }
};

/**
 * Sauvegarde le consentement dans localStorage
 */
export const saveConsent = (consent: Omit<CookieConsent, 'timestamp'>): void => {
  try {
    const consentData: CookieConsent = {
      ...consent,
      timestamp: Date.now(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));

    // Dispatcher un événement pour notifier les composants
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: consentData }));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du consentement:', error);
  }
};

/**
 * Vérifie si l'utilisateur a consenti aux cookies analytics
 */
export const hasAnalyticsConsent = (): boolean => {
  const consent = getStoredConsent();
  return consent?.analytics === true;
};

/**
 * Vérifie si le consentement a déjà été donné (quel que soit le choix)
 */
export const hasGivenConsent = (): boolean => {
  return getStoredConsent() !== null;
};

/**
 * Accepter tous les cookies
 */
export const acceptAllCookies = (): void => {
  saveConsent({ analytics: true });
};

/**
 * Refuser tous les cookies (sauf essentiels)
 */
export const rejectAllCookies = (): void => {
  saveConsent({ analytics: false });
};

/**
 * Réinitialiser le consentement (pour rouvrir la bannière)
 */
export const resetConsent = (): void => {
  try {
    localStorage.removeItem(CONSENT_KEY);
    window.dispatchEvent(new CustomEvent('cookieConsentReset'));
  } catch (error) {
    console.error('Erreur lors de la réinitialisation du consentement:', error);
  }
};
