
const advantagesList = [
  {
    title: "Discrétion Absolue & Installation Intérieure",
    description: "Plus d'unité extérieure disgracieuse. Notre système Air-Eau s'intègre entièrement dans votre appartement, respectant l'esthétique des façades et les règlements de copropriété sans effort.",
  },
  {
    title: "Confort Thermique Supérieur et Homogène",
    description: "Contrairement à l'Air-Air, notre technologie utilise un circuit hydraulique pour une diffusion de chaleur et de fraîcheur douce, sans courants d'air désagréables et avec un silence de fonctionnement inégalé.",
  },
  {
    title: "Efficacité Énergétique Optimisée",
    description: "Profitez d'une consommation d'énergie réduite grâce à un transfert thermique plus performant. Le système Air-Eau est une solution d'avenir pour des économies durables.",
  },
  {
    title: "Réversibilité Complète (Chauffage & Climatisation)",
    description: "Un seul système couvre tous vos besoins, du chauffage doux en hiver à la climatisation rafraîchissante en été, avec une performance constante et fiable toute l'année.",
  },
  {
    title: "Moins de Contraintes Techniques et Administratives",
    description: "L'absence d'unité extérieure simplifie grandement l'installation et réduit les démarches administratives, vous offrant une tranquillité d'esprit précieuse, surtout en milieu urbain.",
  },
];

const Advantages = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-14 tracking-tight leading-tight">
          Les avantages de notre climatisation Air-Eau par rapport aux systèmes Air-Air classiques
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
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
