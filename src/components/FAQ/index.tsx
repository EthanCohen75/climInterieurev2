import React, { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="border-b border-editorial-mist py-8 last:border-b-0">
      <button
        className="w-full flex justify-between items-start text-left group focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-display text-2xl lg:text-3xl text-editorial-charcoal group-hover:text-editorial-copper transition-colors duration-300 pr-4">
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-editorial-sage transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-45' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p className="font-body text-lg text-editorial-ink leading-relaxed pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Le système nécessite-t-il une unité extérieure ?",
      answer: "Non. La solution fonctionne entièrement à l'intérieur, sans impact sur les façades ou l'environnement.",
    },
    {
      question: "Faut-il une autorisation du syndic ?",
      answer:
        "Dans la majorité des cas, non. Comme aucune façade n'est modifiée et qu'aucun moteur n'est visible, l'installation est souvent considérée comme « non modifiante ». Il est toutefois conseillé de vérifier les règles locales ou de consulter le syndic.",
    },
    {
      question: "Le système est-il silencieux ?",
      answer:
        "Oui. Le fonctionnement est extrêmement discret, tant à l'intérieur qu'à l'extérieur. Il n'y a pas de nuisances sonores pour les voisins, et les vibrations sont quasi inexistantes.",
    },
    {
      question: "Peut-on l'installer en appartement ?",
      answer:
        "Oui. Le système est spécialement conçu pour les appartements, même en copropriété, grâce à l'absence de contraintes extérieures et à sa compacité.",
    },
    {
      question: "Est-ce réversible ?",
      answer:
        "Oui. Le système permet à la fois le chauffage et la climatisation pour un confort toute l'année.",
    },
    {
      question: "Quel est le prix de l'installation ?",
      answer:
        "À partir de 9850€ HT. Le coût final dépend de la taille de votre espace, de la configuration choisie et des spécificités de l'installation. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins.",
    },
  ];

  const highlightKeywords = (text: string) => {
    const specificRegex = /^(Dans la majorité des cas, non)(.*)/;
    const generalRegex = /^(Oui\.|Non\.)(.*)/;

    let match = text.match(specificRegex);
    if (match) {
      return (
        <>
          <span className="font-semibold text-editorial-sage">{match[1]}</span>
          {match[2]}
        </>
      );
    }

    match = text.match(generalRegex);
    if (match) {
      return (
        <>
          <span className="font-semibold text-editorial-sage">{match[1]}</span>
          {match[2]}
        </>
      );
    }
    return text;
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
      <h2 className="font-display text-5xl lg:text-6xl text-editorial-charcoal text-center mb-16">
        Questions fréquentes
      </h2>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={highlightKeywords(faq.answer)}
          />
        ))}
      </div>

      {/* Optional CTA */}
      <div className="mt-16 text-center">
        <a
          href="#formulaire"
          onClick={scrollToForm}
          className="btn-editorial"
        >
          Obtenir mon devis
        </a>
      </div>
    </section>
  );
};

export default FAQ;
