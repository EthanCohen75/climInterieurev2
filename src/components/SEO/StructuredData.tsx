import React from 'react';

/**
 * Composant pour les données structurées JSON-LD
 * Améliore le SEO et permet l'affichage d'extraits enrichis dans Google
 */
const StructuredData: React.FC = () => {
  // Schema Organization - Informations sur l'entreprise
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clim'intérieure",
    "legalName": "YOSSEF AVRAHAM CAPITAL",
    "description": "Solution de climatisation air-eau 100% intérieure pour Paris",
    "url": "https://www.clim-interieure.fr",
    "logo": "https://www.clim-interieure.fr/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Service Client",
      "email": "contact@clim-interieure.fr",
      "areaServed": "FR",
      "availableLanguage": ["French"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Rue des Belles Feuilles",
      "addressLocality": "Paris",
      "postalCode": "75016",
      "addressCountry": "FR"
    },
    "taxID": "FR43845097443"
  };

  // Schema LocalBusiness - Référencement local Paris
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Clim'intérieure",
    "image": "https://www.clim-interieure.fr/logo.png",
    "description": "Climatisation air-eau 100% intérieure sans unité extérieure pour appartements parisiens",
    "@id": "https://www.clim-interieure.fr",
    "url": "https://www.clim-interieure.fr",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Rue des Belles Feuilles",
      "addressLocality": "Paris",
      "postalCode": "75016",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8656,
      "longitude": 2.2833
    },
    "areaServed": {
      "@type": "City",
      "name": "Paris"
    }
  };

  // Schema Product - Produit climatisation
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Climatisation Air-Eau Intérieure",
    "description": "Solution de climatisation 100% intérieure, sans unité extérieure, silencieuse et réversible. Idéale pour appartements parisiens.",
    "brand": {
      "@type": "Brand",
      "name": "Clim'intérieure"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.clim-interieure.fr",
      "priceCurrency": "EUR",
      "price": "5500",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Clim'intérieure",
        "legalName": "YOSSEF AVRAHAM CAPITAL"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47"
    }
  };

  // Schema FAQPage - Questions fréquentes
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Faut-il une unité extérieure ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non. Notre système est 100% intérieur, utilisant une technologie air-eau révolutionnaire qui ne nécessite aucune installation extérieure. Contrairement aux climatisations classiques, aucune unité n'est visible sur votre façade ou balcon."
        }
      },
      {
        "@type": "Question",
        "name": "Ai-je besoin d'une autorisation du syndic ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, aucune modification de façade n'est requise. Le système étant entièrement intérieur, vous n'avez pas besoin de l'accord de votre syndic ou de demander une autorisation à la copropriété. C'est l'un des principaux avantages de notre solution."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce bruyant ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, le système est extrêmement silencieux. Sans compresseur extérieur, le bruit est quasi imperceptible. Votre confort acoustique est préservé, aussi bien à l'intérieur qu'à l'extérieur de votre appartement."
        }
      },
      {
        "@type": "Question",
        "name": "Cela fonctionne-t-il dans un vieil appartement parisien ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, parfaitement. La solution est particulièrement adaptée aux appartements haussmanniens et aux immeubles anciens où les installations extérieures sont interdites ou impossibles. Notre système s'intègre discrètement dans tous types d'appartements."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce réversible (chaud et froid) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, absolument. Notre système est réversible et fonctionne toute l'année : rafraîchissement l'été, chauffage l'hiver. Une solution 4 saisons pour un confort optimal tout au long de l'année."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le budget ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le budget dépend du nombre de pièces à équiper et de leur volume. La solution clé en main est à partir de 5 500€ TTC pour une pièce de vie. Pour 5 pièces à équiper, comptez à partir de 15 950€ TTC. Nos équipes vous proposeront la solution adaptée à vos besoins et à votre budget. Des solutions de financement sur 48 mois existent auprès de votre établissement bancaire."
        }
      }
    ]
  };

  // Schema WebSite - Pour le site web
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Clim'intérieure",
    "url": "https://www.clim-interieure.fr",
    "description": "Climatisation air-eau discrète et 100% intérieure pour appartements parisiens",
    "inLanguage": "fr-FR"
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </>
  );
};

export default StructuredData;
