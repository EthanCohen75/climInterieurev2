import React from 'react';

const features = [
  {
    icon: '🏢',
    title: 'Aucune unité extérieure',
    subtitle: 'Autorisé en copropriété.',
  },
  {
    icon: '🏠',
    title: 'Installation 100 % intérieure',
    subtitle: 'Idéal pour façades protégées.',
  },
  {
    icon: '☀️',
    title: 'Réversible (chaud + froid)',
    subtitle: 'Confort toute l’année.',
  },
  {
    icon: '🤫',
    title: 'Silencieuse & discrète',
    subtitle: 'Pas d’impact visuel.',
  },
];

const WhyThisClim: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          La solution idéale pour les propriétaires à Paris
        </h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisClim;
