import type { Metadata } from 'next';
import './globals.css';
import AnalyticsInit from '../components/AnalyticsInit';

export const metadata: Metadata = {
  icons: {
    icon: '/logo.jpg',
  },
  title: "Clim'intérieure - Climatisation Air-Eau Discrète pour Paris",
  description: "Climatisation Air-Eau discrète et 100% intérieure pour appartements parisiens. Sans unité extérieure, silencieuse et élégante.",
  keywords: "climatisation paris, climatisation intérieure, air-eau, sans unité extérieure, climatisation appartement parisien, clim discrète, climatisation silencieuse, climatisation réversible",
  metadataBase: new URL('https://www.clim-interieure.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.clim-interieure.fr/',
    title: "Clim'intérieure - Climatisation Air-Eau Discrète pour Paris",
    description: "Climatisation Air-Eau discrète et 100% intérieure pour appartements parisiens. Sans unité extérieure, silencieuse et élégante. À partir de 9 850€ HT.",
    images: [{ url: 'https://www.clim-interieure.fr/og-image.jpg' }],
    locale: 'fr_FR',
    siteName: "Clim'intérieure",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Clim'intérieure - Climatisation Air-Eau Discrète pour Paris",
    description: "Climatisation Air-Eau discrète et 100% intérieure pour appartements parisiens. Sans unité extérieure, silencieuse et élégante.",
    images: ['https://www.clim-interieure.fr/twitter-card.jpg'],
  },
  other: {
    'geo.region': 'FR-75',
    'geo.placename': 'Paris',
    'geo.position': '48.8566;2.3522',
    'ICBM': '48.8566, 2.3522',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500;6..72,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AnalyticsInit />
        {children}
      </body>
    </html>
  );
}
