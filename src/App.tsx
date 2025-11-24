import { Header, Hero, WhyThisClim, Advantages, FAQ, Footer } from './components';
import QuoteForm from './components/QuoteForm';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyThisClim />
      <main>
        {/* Le reste du contenu de la page viendra ici */}
        <div id="fonctionnement" className="bg-gray-100 p-8">
          <h2 className="text-3xl font-bold">Fonctionnement</h2>
        </div>
        <div id="avantages">
          <Advantages />
        </div>
        <div id="faq" className="bg-gray-100 p-8">
          <FAQ />
        </div>
        <div id="formulaire" className="bg-white p-8">
          <h2 className="text-3xl font-bold">Formulaire de devis</h2>
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
