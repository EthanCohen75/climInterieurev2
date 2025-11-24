import { Header, Hero, WhyThisClim } from './components';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        {/* Le reste du contenu de la page viendra ici */}
        <div id="fonctionnement" className="h-screen bg-gray-100 p-8">
          <h2 className="text-3xl font-bold">Fonctionnement</h2>
        </div>
        <div id="avantages">
          <WhyThisClim />
        </div>
        <div id="faq" className="h-screen bg-gray-100 p-8">
          <h2 className="text-3xl font-bold">FAQ</h2>
        </div>
        <div id="formulaire" className="h-screen bg-white p-8">
          <h2 className="text-3xl font-bold">Formulaire de devis</h2>
        </div>
      </main>
    </>
  )
}

export default App;
