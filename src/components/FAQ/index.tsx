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
    <div className="border-b border-gray-200 py-4 last:border-b-0">
      <button
        className="flex justify-between items-center w-full text-left text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
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
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p className="mt-3 text-gray-700 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'Le système nécessite-t-il une unité extérieure ?',
      answer: 'Non. La solution fonctionne entièrement à l’intérieur, sans impact sur les façades ou l’environnement.',
    },
    {
      question: 'Faut-il une autorisation du syndic ?',
      answer:
        'Dans la majorité des cas, non. Comme aucune façade n’est modifiée et qu’aucun moteur n’est visible, l’installation est souvent considérée comme « non modifiante ». Il est toutefois conseillé de vérifier les règles locales ou de consulter le syndic.',
    },
    {
      question: 'Le système est-il silencieux ?',
      answer:
        'Oui. Le fonctionnement est extrêmement discret, tant à l’intérieur qu’à l’extérieur. Il n’y a pas de nuisances sonores pour les voisins, et les vibrations sont quasi inexistantes.',
    },
    {
      question: 'Peut-on l’installer en appartement ?',
      answer:
        'Oui. Le système est spécialement conçu pour les appartements, même en copropriété, grâce à l’absence de contraintes extérieures et à sa compacité.',
    },
    {
      question: 'Est-ce réversible ?',
      answer:
        'Oui. Le système permet à la fois le chauffage et la climatisation pour un confort toute l’année.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        Questions fréquentes
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {faqs.map((faq, index) => {
          const highlightKeywords = (text: string) => {
            const specificRegex = /^(Dans la majorité des cas, non)(.*)/;
            const generalRegex = /^(Oui\.|Non\.)(.*)/;

            let match = text.match(specificRegex);
            if (match) {
              return (
                <>
                  <span className="font-bold text-blue-600">{match[1]}</span>
                  {match[2]}
                </>
              );
            }

            match = text.match(generalRegex);
            if (match) {
              return (
                <>
                  <span className="font-bold text-blue-600">{match[1]}</span>
                  {match[2]}
                </>
              );
            }
            return text;
          };

          return (
            <FAQItem
              key={index}
              question={faq.question}
              answer={highlightKeywords(faq.answer)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
