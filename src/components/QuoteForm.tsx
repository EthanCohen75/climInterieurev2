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
  const [isLoading, setIsLoading] = useState(false); // Nouvel état pour le chargement
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Nouvel état pour les erreurs

  const validateEmail = (email: string): string => {
    if (!email) return 'L\'email est obligatoire.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Format d\'email invalide.';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Valider le champ modifié en temps réel
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
      setErrors({}); // Réinitialiser les erreurs après un envoi réussi
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Un projet de climatisation ? Échangeons !</h2>
        <p className="text-lg text-center text-gray-600 mb-2">Nous sommes à votre écoute pour discuter de vos besoins, sans engagement.</p>
        <p className="text-md text-center text-gray-600 mb-6">Que ce soit pour une rénovation ou l'intégration discrète d'une solution de climatisation, nous avons des options élégantes pour vous.</p>
        <p className="text-md text-center text-gray-600 mb-6">Remplissez ce bref formulaire et un conseiller dédié vous contactera très vite.</p>
        <p className="text-sm text-gray-600 mb-4">Les champs marqués d'un astérisque (*) sont obligatoires.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Votre nom <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="nom"
                id="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="villeInstallation" className="block text-sm font-medium text-gray-700">Ville d'installation <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="villeInstallation"
              id="villeInstallation"
              value={formData.villeInstallation}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Votre question</label>
            <p className="text-xs text-gray-500 mb-2">Aidez-nous à mieux comprendre vos besoins, peut-être en décrivant le type de propriété et ses caractéristiques...</p>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-4">{modalContent}</p>
            {!isLoading && (
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
