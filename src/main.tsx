import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initializeGA } from './utils/analytics-init'
import { hasAnalyticsConsent } from './utils/cookieManager'

// Initialiser Google Analytics UNIQUEMENT si l'utilisateur a donné son consentement
// Conformité RGPD/CNIL : les cookies analytics nécessitent un consentement explicite
if (hasAnalyticsConsent()) {
  initializeGA();
  console.log('✅ Google Analytics initialisé (consentement donné)');
} else {
  console.log('⏸️ Google Analytics non initialisé (en attente de consentement)');
}

// Écouter les changements de consentement pour initialiser GA si accepté
window.addEventListener('cookieConsentUpdated', (event: Event) => {
  const customEvent = event as CustomEvent;
  if (customEvent.detail?.analytics === true && !hasAnalyticsConsent()) {
    // L'utilisateur vient d'accepter les cookies analytics
    initializeGA();
    console.log('✅ Google Analytics initialisé suite au consentement');
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
