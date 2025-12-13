import { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#formulaire');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-editorial-cream editorial-grain overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-screen">
        {/* Text Column (60% width on desktop) */}
        <div className="lg:col-span-3 flex items-center justify-center px-8 lg:px-16 py-20 lg:py-30 relative z-10 order-2 lg:order-1">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl sm:text-display-sm lg:text-display-md text-editorial-charcoal leading-none mb-6 animate-fade-in">
              Climatisation Air-Eau Discrète et 100% Intérieure
            </h1>

            <p className="font-body text-xl lg:text-2xl text-editorial-stone leading-relaxed mb-10 max-w-xl animate-fade-in delay-200">
              Une technologie Air-Eau discrète, silencieuse et sans unité extérieure, idéale pour Paris.
            </p>

            <a
              href="#formulaire"
              onClick={scrollToForm}
              className="btn-editorial animate-fade-in delay-300"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>

        {/* Image Column (40% width on desktop) */}
        <div className="lg:col-span-2 relative image-overlay order-1 lg:order-2 h-[50vh] lg:h-auto">
          <div
            className="absolute inset-0"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <img
              src="/interior.jpg"
              alt="Intérieur d'un appartement parisien avec climatisation discrète"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
