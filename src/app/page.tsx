import { Header, Hero, WhyThisClim, FAQ, Footer, Applications, QuoteForm } from '../components';
import CookieConsent from '../components/CookieConsent';
import StructuredData from '../components/SEO/StructuredData';

export default function Home() {
  return (
    <div className="bg-editorial-cream">
      <StructuredData />
      <Header />
      <Hero />
      <div id="avantages"><WhyThisClim /></div>
      <div id="applications"><Applications /></div>
      <div id="faq"><FAQ /></div>
      <div id="formulaire"><QuoteForm /></div>
      <Footer />
      <CookieConsent />
    </div>
  );
}
