import React from 'react';

const WhyThisClim: React.FC = () => {
  const features = [
    {
      icon: '🚫',
      title: 'Aucune unité extérieure',
      subtitle: 'Autorisé en copropriété.',
    },
    {
      icon: '🏠',
      title: 'Installation 100 % intérieure',
      subtitle: 'Idéal pour façades protégées.',
    },
    {
      icon: '🌡️',
      title: 'Réversible (chaud + froid)',
      subtitle: 'Confort toute l’année.',
    },
    {
      icon: '🤫',
      title: 'Silencieuse & discrète',
      subtitle: 'Pas d’impact visuel.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12">
          La solution idéale pour les propriétaires à Paris
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center"
            >
              <span className="text-5xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisClim;
