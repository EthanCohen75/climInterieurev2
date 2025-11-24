import React from 'react';

const advantagesList = [
  "Aucune unité extérieure",
  "Pas d’autorisation complexe",
  "Idéal en appartement",
  "Très silencieux",
  "Réversible (chaud/froid)",
  "Consommation optimisée",
  "Installation maîtrisée",
  "Solution haut de gamme",
];

const Advantages = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-14 tracking-tight leading-tight">
          Les avantages par rapport à une clim classique
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantagesList.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 flex items-start space-x-4"
            >
              <svg
                className="flex-shrink-0 h-8 w-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-gray-800">{advantage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
