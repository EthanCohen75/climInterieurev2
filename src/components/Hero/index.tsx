
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src="/interior.jpg"
          alt="Intérieur d'un appartement parisien avec climatisation discrète"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay pour la lisibilité */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="text-center md:text-left bg-white/50 p-6 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Climatisation Air-Eau Discrète et 100% Intérieure
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Une technologie Air-Eau discrète, silencieuse et sans unité extérieure, idéale pour Paris.
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
