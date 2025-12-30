import { Header, Hero, WhyThisClim, FAQ, Footer, Applications, QuoteForm } from '../components';
import CookieConsent from '../components/CookieConsent';
import StructuredData from '../components/SEO/StructuredData';

function HomePage() {
  return (
    <div className="bg-editorial-cream">
      {/* Données structurées pour le SEO */}
      <StructuredData />

      <Header />
      <Hero />
      <div id="avantages"><WhyThisClim /></div>
      <div id="applications"><Applications /></div>
      <div id="faq"><FAQ /></div>
      <div id="formulaire"><QuoteForm /></div>
      <Footer />

      {/* Bannière de consentement aux cookies */}
      <CookieConsent />
    </div>
  );
}

export default HomePage;
