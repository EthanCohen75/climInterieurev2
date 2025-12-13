import { Header, Hero, WhyThisClim, FAQ, Footer, Applications, QuoteForm } from './components';

function App() {
  return (
    <div className="bg-editorial-cream">
      <Header />
      <Hero />
      <div id="avantages"><WhyThisClim /></div>
      <div id="applications"><Applications /></div>
      <div id="faq"><FAQ /></div>
      <div id="formulaire"><QuoteForm /></div>
      <Footer />
    </div>
  )
}

export default App;
