import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Climatisation réversible 100 % intérieure pour appartements parisiens
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Installation discrète et silencieuse
            </p>

            <a
              href="#formulaire"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Demander un devis gratuit
            </a>
          </div>

          <div className="hidden md:block">
            <img
              src="/interior.jpg"
              alt="Intérieur d'un appartement parisien avec climatisation discrète"
              className="h-full w-full rounded-xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
