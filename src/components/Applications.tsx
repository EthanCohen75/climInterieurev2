import React from 'react';

const Applications = () => {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#formulaire');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const applications = [
    {
      title: 'Pour votre Maison',
      description: 'Votre chez-vous est un havre de paix. Nous vous offrons une climatisation invisible et silencieuse, idéale pour les appartements, les résidences de prestige ou les maisons avec des exigences esthétiques. Fini le bruit et les tracas avec le voisinage : profitez d\'une sérénité absolue.',
      image: '/style-parisien-interieur-salon-mobilier-design-danois.jpg',
      alt: 'Climatisation pour appartements et résidences',
      imagePosition: 'left' as const,
    },
    {
      title: 'Pour vos Bureaux',
      description: 'L\'image de votre entreprise est essentielle. Nos systèmes s\'installent rapidement et discrètement dans vos bureaux, showrooms ou cabinets professionnels. Offrez un confort optimal à vos clients et collaborateurs, sans compromettre l\'esthétique ou l\'harmonie de vos espaces.',
      image: '/bureaux-paris-landmark-architecture-img~70e1d30007ed12cd_4-1374-1-7dd7913.jpg',
      alt: 'Climatisation pour bureaux et espaces commerciaux',
      imagePosition: 'right' as const,
    },
    {
      title: 'Cafés & Hôtels',
      description: 'Dans les cafés, hôtels, restaurants ou spas, l\'ambiance compte. Notre solution garantit une discrétion totale, un silence apaisant et une efficacité énergétique, s\'intégrant sans effort pour que vos clients profitent pleinement de leur expérience, sans aucune nuisance.',
      image: '/images_cafe_parisien.jpg',
      alt: 'Climatisation pour Cafés et Hôtels',
      imagePosition: 'left' as const,
    },
  ];

  return (
    <section className="bg-editorial-ivory py-24 lg:py-30">
      {/* Section intro */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mb-20 text-center">
        <h2 className="font-display text-5xl lg:text-6xl text-editorial-charcoal mb-6">
          Votre confort, partout et sans compromis
        </h2>
        <p className="font-body text-xl text-editorial-stone leading-relaxed">
          Imaginez une climatisation qui se fond dans votre décor, sans bruit ni unité extérieure visible. Notre solution est conçue pour s'intégrer parfaitement à votre environnement, vous offrant performance et discrétion.
        </p>
      </div>

      {/* Application categories */}
      <div className="max-w-7xl mx-auto">
        {applications.map((app, index) => (
          <div key={index} className="mb-20 last:mb-0">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${app.imagePosition === 'right' ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="relative h-96 lg:h-[600px] image-overlay">
                <img
                  src={app.image}
                  alt={app.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="px-8 lg:px-16 py-12 lg:py-16 bg-white">
                <h3 className="font-display text-4xl lg:text-5xl text-editorial-charcoal mb-6">
                  {app.title}
                </h3>
                <p className="font-body text-lg lg:text-xl text-editorial-ink leading-relaxed mb-8">
                  {app.description}
                </p>
                <a
                  href="#formulaire"
                  onClick={scrollToForm}
                  className="btn-editorial"
                >
                  Parler à un expert
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Applications;
