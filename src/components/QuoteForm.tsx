import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    villeInstallation: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string): string => {
    if (!email) return 'L\'email est obligatoire.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Format d\'email invalide.';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = '';
    if (name === 'email') {
      error = validateEmail(value);
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    newErrors.email = validateEmail(formData.email);

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setModalContent('Veuillez corriger les erreurs dans le formulaire.');
      setShowModal(true);
      return;
    }

    setIsLoading(true);
    setShowModal(true);
    setModalContent('Envoi de votre demande en cours...');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzmsAUw7ywhITLiKB6NxJa7dsMVHIgVYk7647CO_vRYAXRtEpTDdIOskiVHJHYJ05qk/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setModalContent('Votre demande de devis a été envoyée avec succès !');
      setFormData({
        nom: '',
        email: '',
        villeInstallation: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      setModalContent('Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <section className="bg-editorial-cream py-24 lg:py-30 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto bg-white border border-editorial-mist p-10 lg:p-16">
        <h2 className="font-display text-4xl lg:text-5xl text-editorial-charcoal text-center mb-6">
          Un projet de climatisation ?
        </h2>
        <p className="font-body text-lg text-editorial-stone text-center mb-3">
          Nous sommes à votre écoute pour discuter de vos besoins, sans engagement.
        </p>
        <p className="font-body text-base text-editorial-stone text-center mb-6">
          Remplissez ce bref formulaire et un conseiller dédié vous contactera très vite.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block font-sans text-sm font-medium text-editorial-charcoal uppercase tracking-wide mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full border border-editorial-mist bg-white px-4 py-3 font-sans text-base text-editorial-ink focus:outline-none focus:border-editorial-sage focus:ring-1 focus:ring-editorial-sage transition-colors duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-sans text-sm font-medium text-editorial-charcoal uppercase tracking-wide mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-editorial-mist focus:border-editorial-sage focus:ring-editorial-sage'} bg-white px-4 py-3 font-sans text-base text-editorial-ink focus:outline-none focus:ring-1 transition-colors duration-300`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Ville d'installation */}
          <div>
            <label htmlFor="villeInstallation" className="block font-sans text-sm font-medium text-editorial-charcoal uppercase tracking-wide mb-2">
              Ville d'installation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="villeInstallation"
              id="villeInstallation"
              value={formData.villeInstallation}
              onChange={handleChange}
              required
              className="w-full border border-editorial-mist bg-white px-4 py-3 font-sans text-base text-editorial-ink focus:outline-none focus:border-editorial-sage focus:ring-1 focus:ring-editorial-sage transition-colors duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-sans text-sm font-medium text-editorial-charcoal uppercase tracking-wide mb-2">
              Votre question
            </label>
            <p className="text-sm text-editorial-stone mb-2">
              Aidez-nous à mieux comprendre vos besoins, peut-être en décrivant le type de propriété et ses caractéristiques...
            </p>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-editorial-mist bg-white px-4 py-3 font-sans text-base text-editorial-ink focus:outline-none focus:border-editorial-sage focus:ring-1 focus:ring-editorial-sage transition-colors duration-300"
            ></textarea>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full btn-editorial text-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-editorial-charcoal/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-10 max-w-md mx-4 border border-editorial-mist">
            <p className="font-body text-lg text-editorial-charcoal mb-6 text-center">
              {modalContent}
            </p>
            {!isLoading && (
              <button
                onClick={closeModal}
                className="btn-editorial w-full text-center"
              >
                Fermer
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default QuoteForm;
