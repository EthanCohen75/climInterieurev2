import React, { useState } from 'react';

const WhyThisClim: React.FC = () => {
  const features = [
    {
      icon: '🏠',
      title: 'Intégration Invisible',
      description: 'Une installation 100% intérieure sans aucune unité visible à l\'extérieur. Respecte l\'esthétique des façades et les règlements de copropriété sans effort.',
    },
    {
      icon: '💧',
      title: 'Technologie Hydro-Thermique Avancée',
      description: 'Notre système Air-Eau utilise un circuit hydraulique fermé, garantissant une efficacité énergétique maximale et un confort thermique doux et homogène sans les inconvénients des systèmes classiques Air-Air.',
    },
    {
      icon: '🤫',
      title: 'Silence et Sérénité',
      description: 'Profitez d\'un fonctionnement ultra-silencieux, sans impact sonore pour vous ou vos voisins, préservant la quiétude de votre appartement.',
    },
    {
      icon: '🌡️',
      title: 'Confort Réversible 4 Saisons',
      description: 'Un seul système couvre tous vos besoins : chauffage efficace en hiver et climatisation rafraîchissante en été, avec une performance constante toute l\'année.',
    },
    {
      icon: '⚡',
      title: 'Économies d\'Énergie Significatives',
      description: 'Bénéficiez d\'une efficacité énergétique supérieure grâce à la technologie Air-Eau, réduisant votre consommation et vos factures sur le long terme.',
    },
    {
      icon: '⚙️',
      title: 'Simplicité Technique & Administrative',
      description: 'L\'absence d\'unité extérieure simplifie grandement l\'installation et réduit les démarches administratives, pour une tranquillité d\'esprit précieuse en milieu urbain.',
    },
    {
      icon: '💎',
      title: 'Solution Haut de Gamme Durable',
      description: 'Investissez dans une solution premium pour un confort exceptionnel et une valorisation durable de votre appartement.',
    },
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState<boolean[]>(new Array(features.length).fill(false));
  const [showAllOnMobile, setShowAllOnMobile] = useState(false);
  const initialMobileDisplayCount = 4; // Nombre de cartes à afficher par défaut sur mobile

  const toggleDescription = (index: number) => {
    const newExpandedDescriptions = [...expandedDescriptions];
    newExpandedDescriptions[index] = !newExpandedDescriptions[index];
    setExpandedDescriptions(newExpandedDescriptions);
  };

  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // 640px est le breakpoint 'sm' de Tailwind par défaut
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Appel initial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedFeatures = (isMobile && !showAllOnMobile) ? features.slice(0, initialMobileDisplayCount) : features;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12">
          Pourquoi notre climatisation Air-Eau est la solution idéale pour votre appartement ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer transform transition-transform duration-200 hover:scale-105"
              onClick={() => toggleDescription(index)}
            >
              <span className="text-5xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
                {feature.title}
                <span className="ml-2 text-gray-500 text-sm">
                  {expandedDescriptions[index] ? '−' : '+'}
                </span>
              </h3>
              {expandedDescriptions[index] && (
                <p className="text-gray-600 mt-2 transition-all duration-300 ease-in-out">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {features.length > initialMobileDisplayCount && ( // Afficher le bouton seulement si nécessaire sur mobile
          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => setShowAllOnMobile(!showAllOnMobile)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              {showAllOnMobile ? 'Voir moins' : 'Voir plus'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyThisClim;
