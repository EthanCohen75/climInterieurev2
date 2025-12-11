import { Header, Hero, WhyThisClim, FAQ, Footer, HowItWorks, Applications, QuoteForm } from './components';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div id="fonctionnement"><HowItWorks /></div>
      <div id="avantages"><WhyThisClim /></div>
      <div id="applications"><Applications /></div>
      <main>
        {/* Le reste du contenu de la page viendra ici */}
        
        <div id="faq" className="bg-gray-100 p-8">
          <FAQ />
        </div>
        <div id="formulaire" className="bg-white p-8">
          <h2 className="text-3xl font-bold">Prenons contact</h2>
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
