'use client';

import { useEffect } from 'react';
import { initializeGA } from '../utils/analytics-init';
import { hasAnalyticsConsent } from '../utils/cookieManager';

export default function AnalyticsInit() {
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      initializeGA();
    }

    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.analytics === true) {
        initializeGA();
      }
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
    return () => window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
  }, []);

  return null;
}
