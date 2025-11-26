import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    region: '',
    telephone: '',
    adresse: '',
    typeLogement: '',
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

  const validatePhone = (phone: string): string => {
    if (!phone) return ''; // Le téléphone n'est pas obligatoire
    const phoneRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:[\s.-]?\d{2}){4}$/;
    if (!phoneRegex.test(phone)) return 'Format de numéro de téléphone invalide.';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Valider le champ modifié en temps réel
    let error = '';
    if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'telephone') {
      error = validatePhone(value);
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    newErrors.email = validateEmail(formData.email);
    newErrors.telephone = validatePhone(formData.telephone);

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
        prenom: '',
        email: '',
        region: '',
        telephone: '',
        adresse: '',
        typeLogement: '',
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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Recevoir un devis gratuit sous 48h</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-sm text-gray-600 mb-4">Les champs marqués d'un astérisque (*) sont obligatoires.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom <span className="text-red-500">*</span></label>
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
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="prenom"
                id="prenom"
                value={formData.prenom}
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
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">Région <span className="text-red-500">*</span></label>
            <select
              name="region"
              id="region"
              value={formData.region}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Sélectionnez une région</option>
              <option value="ile-de-france">Île-de-France</option>
              <option value="nouvelle-aquitaine">Nouvelle-Aquitaine</option>
              <option value="occitanie">Occitanie</option>
              <option value="provence-alpes-cote-azur">Provence-Alpes-Côte d'Azur</option>
              <option value="auvergne-rhone-alpes">Auvergne-Rhône-Alpes</option>
              <option value="bretagne">Bretagne</option>
              <option value="centre-val-de-loire">Centre-Val de Loire</option>
              <option value="bourgogne-franche-comte">Bourgogne-Franche-Comté</option>
              <option value="grand-est">Grand Est</option>
              <option value="hauts-de-france">Hauts-de-France</option>
              <option value="normandie">Normandie</option>
              <option value="pays-de-la-loire">Pays de la Loire</option>
            </select>
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.telephone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
          </div>

          <div>
            <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">Adresse / Arrondissement</label>
            <input
              type="text"
              name="adresse"
              id="adresse"
              value={formData.adresse}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="typeLogement" className="block text-sm font-medium text-gray-700">Type de logement</label>
            <select
              name="typeLogement"
              id="typeLogement"
              value={formData.typeLogement}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Sélectionnez un type</option>
              <option value="studio">Studio</option>
              <option value="t1_t2">T1/T2</option>
              <option value="t3_t4">T3/T4</option>
              <option value="duplex">Duplex</option>
              <option value="maison">Maison</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (optionnel)</label>
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
