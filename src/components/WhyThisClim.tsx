import React, { useState, useEffect } from 'react';

const WhyThisClim: React.FC = () => {
  const features = [
    {
      title: 'Intégration Invisible',
      description: 'Une installation 100% intérieure sans aucune unité visible à l\'extérieur. Respecte l\'esthétique des façades et les règlements de copropriété sans effort.',
    },
    {
      title: 'Technologie Hydro-Thermique Avancée',
      description: 'Notre système Air-Eau utilise un circuit hydraulique fermé, garantissant une efficacité énergétique maximale et un confort thermique doux et homogène sans les inconvénients des systèmes classiques Air-Air.',
    },
    {
      title: 'Silence et Sérénité',
      description: 'Profitez d\'un fonctionnement ultra-silencieux, sans impact sonore pour vous ou vos voisins, préservant la quiétude de votre appartement.',
    },
    {
      title: 'Confort Réversible 4 Saisons',
      description: 'Un seul système couvre tous vos besoins : chauffage efficace en hiver et climatisation rafraîchissante en été, avec une performance constante toute l\'année.',
    },
    {
      title: 'Économies d\'Énergie Significatives',
      description: 'Bénéficiez d\'une efficacité énergétique supérieure grâce à la technologie Air-Eau, réduisant votre consommation et vos factures sur le long terme.',
    },
    {
      title: 'Simplicité Technique & Administrative',
      description: 'L\'absence d\'unité extérieure simplifie grandement l\'installation et réduit les démarches administratives, pour une tranquillité d\'esprit précieuse en milieu urbain.',
    },
    {
      title: 'Solution Haut de Gamme Durable',
      description: 'Investissez dans une solution premium pour un confort exceptionnel et une valorisation durable de votre appartement.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDescription = (index: number) => {
    if (isMobile) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const getDelayClass = (index: number) => {
    const delays = ['', 'delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-400', 'delay-400'];
    return delays[index] || '';
  };

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#formulaire');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-24 lg:py-30 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="font-display text-5xl lg:text-6xl text-editorial-charcoal mb-6 opacity-0 animate-fade-in">
          Pourquoi notre climatisation Air-Eau est la solution idéale ?
        </h2>
        <p className="font-body text-xl text-editorial-stone leading-relaxed opacity-0 animate-fade-in delay-100">
          Une technologie révolutionnaire pensée pour le confort et l'élégance de votre intérieur parisien.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group border border-editorial-mist bg-white hover:bg-editorial-ivory transition-all duration-400 p-8 lg:p-10 cursor-pointer hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in ${getDelayClass(index)}`}
            onClick={() => toggleDescription(index)}
          >
            <div className="flex items-start gap-6">
              {/* Decorative number */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-editorial-copper text-editorial-copper font-display text-xl">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="flex-1">
                <h3 className="font-display text-2xl lg:text-3xl text-editorial-charcoal mb-4 group-hover:text-editorial-copper transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Desktop: Always show description */}
                {/* Mobile: Show only if expanded */}
                {(!isMobile || expandedIndex === index) && (
                  <p className="font-body text-lg text-editorial-ink leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="mt-16 text-center">
        <a
          href="#formulaire"
          onClick={scrollToForm}
          className="btn-editorial"
        >
          Découvrir nos solutions
        </a>
      </div>
    </section>
  );
};

export default WhyThisClim;
