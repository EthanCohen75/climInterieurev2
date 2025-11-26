
const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Le Fonctionnement du Système Air-Eau</h2>
        <div className="flex flex-wrap justify-center items-stretch text-center">
          {/* Étape 1 */}
          <div className="w-full md:w-1/3 p-4 flex flex-col">
            <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02A.75.75 0 0112 11.25h.008c.074 0 .15-.027.20-.077l.07-.07a.75.75 0 011.06 0l.33.329c.353.353.158.682-.164 1.054l-.404.425a.75.75 0 01-1.06 0l-.33-.329a.75.75 0 010-1.06l.07-.07c.05-.05.126-.077.20-.077h.008c.074 0 .15.027.20-.077l.07-.07zM12 21a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Source d'Énergie (Air Extérieur)</h3>
            <p className="text-gray-700 flex-grow">Le système extrait les calories présentes dans l'air extérieur via l'unité dédiée.</p>
          </div>

          {/* Étape 2 (précédemment Étape 1 du processus de contact) */}
          <div className="w-full md:w-1/3 p-4 flex flex-col">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.011-.122 1.996-.34 2.943m-2.529-1.943c-.45-.45-1.026-.689-1.636-.717M12 21a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Échange et Distribution d'Eau</h3>
            <p className="text-gray-700 flex-grow">Ces calories sont transférées à l'eau du système, qui circule ensuite pour le chauffage ou le refroidissement.</p>
          </div>

          {/* Étape 3 */}
          <div className="w-full md:w-1/3 p-4 flex flex-col">
            <div className="bg-yellow-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-yellow-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Confort Thermique Intérieur</h3>
            <p className="text-gray-700 flex-grow">L'eau traitée est diffusée via vos émetteurs (radiateurs, plancher) pour un confort optimal et constant.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
