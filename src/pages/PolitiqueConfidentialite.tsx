import React from 'react';
import { Link } from 'react-router-dom';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="bg-editorial-cream min-h-screen">
      {/* Header simple */}
      <header className="bg-editorial-charcoal text-editorial-cream py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="font-display text-2xl hover:text-editorial-copper transition-colors">
            ← Clim'intérieure
          </Link>
        </div>
      </header>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl lg:text-5xl text-editorial-charcoal mb-8">
          Politique de Confidentialité
        </h1>

        <div className="bg-white border border-editorial-mist p-8 lg:p-12 space-y-8">

          {/* Introduction */}
          <section>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                La présente Politique de Confidentialité décrit comment Clim'intérieure collecte, utilise et protège
                vos données personnelles lorsque vous utilisez notre site web.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés »,
                nous nous engageons à protéger la vie privée de nos utilisateurs.
              </p>
            </div>
          </section>

          {/* 1. Responsable du traitement */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              1. Responsable du traitement des données
            </h2>
            <div className="font-body text-editorial-stone space-y-2">
              <p><strong>Raison sociale :</strong> YOSSEF AVRAHAM CAPITAL</p>
              <p><strong>Forme juridique :</strong> SASU</p>
              <p><strong>Adresse :</strong> 15 Rue des Belles Feuilles, 75016 Paris</p>
              <p><strong>Email de contact RGPD :</strong> contact@clim-interieure.fr</p>
              <p><strong>Représentant légal :</strong> M. Charles AZRAN, Président</p>
            </div>
          </section>

          {/* 2. Données collectées */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              2. Données personnelles collectées
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Nous collectons les données personnelles suivantes lorsque vous remplissez notre formulaire de demande de devis :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Nom complet</strong></li>
                <li><strong>Adresse email</strong></li>
                <li><strong>Ville d'installation</strong></li>
                <li><strong>Message / Question</strong> (optionnel)</li>
              </ul>
              <p className="mt-4">
                <strong>Base légale :</strong> Le traitement de vos données est fondé sur votre consentement explicite,
                donné lors de la soumission du formulaire.
              </p>
              <p>
                <strong>Finalité :</strong> Ces données sont collectées uniquement pour traiter votre demande de devis
                et vous recontacter dans le cadre de votre projet de climatisation.
              </p>
            </div>
          </section>

          {/* 3. Utilisation des données */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              3. Utilisation de vos données
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>Vos données personnelles sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Traiter et répondre à votre demande de devis</li>
                <li>Vous contacter par email ou téléphone concernant votre projet</li>
                <li>Assurer le suivi de votre demande</li>
              </ul>
              <p className="mt-4">
                <strong>Nous nous engageons à ne jamais :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vendre vos données à des tiers</li>
                <li>Utiliser vos données à des fins publicitaires sans votre consentement</li>
                <li>Partager vos données avec des partenaires commerciaux sans votre accord</li>
              </ul>
            </div>
          </section>

          {/* 4. Stockage et conservation */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              4. Stockage et conservation des données
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                <strong>Lieu de stockage :</strong> Vos données sont stockées de manière sécurisée via Google Sheets,
                un service fourni par Google LLC.
              </p>
              <p>
                <strong>Localisation :</strong> Les serveurs peuvent être situés dans l'Union Européenne ou aux États-Unis.
                Google LLC est certifié sous le EU-US Data Privacy Framework.
              </p>
              <p>
                <strong>Durée de conservation :</strong> Vos données sont conservées pendant une durée de 3 ans
                à compter de votre dernier contact avec nous. Passé ce délai, vos données sont automatiquement supprimées.
              </p>
              <p>
                <strong>Sécurité :</strong> Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </div>
          </section>

          {/* 5. Vos droits RGPD */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              5. Vos droits (RGPD)
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>

              <div className="space-y-4 mt-4">
                <div>
                  <p className="font-semibold text-editorial-charcoal">📋 Droit d'accès</p>
                  <p>Vous pouvez obtenir une copie de toutes les données personnelles que nous détenons sur vous.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">✏️ Droit de rectification</p>
                  <p>Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">🗑️ Droit à l'effacement</p>
                  <p>Vous pouvez demander la suppression de vos données personnelles.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">📦 Droit à la portabilité</p>
                  <p>Vous pouvez récupérer vos données dans un format structuré et réutilisable.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">🚫 Droit d'opposition</p>
                  <p>Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">⏸️ Droit à la limitation</p>
                  <p>Vous pouvez demander la limitation du traitement dans certaines conditions.</p>
                </div>
              </div>

              <div className="bg-editorial-sage/10 p-6 mt-6 rounded">
                <p className="font-semibold text-editorial-charcoal mb-2">Comment exercer vos droits ?</p>
                <p>
                  Pour exercer l'un de ces droits, vous pouvez nous contacter à l'adresse email suivante :
                  <strong> contact@clim-interieure.fr</strong>
                </p>
                <p className="mt-2">
                  Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Cookies et traceurs */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              6. Cookies et traceurs
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Notre site utilise <strong>Google Analytics</strong> pour analyser le trafic et améliorer l'expérience utilisateur.
              </p>

              <p className="font-semibold text-editorial-charcoal mt-4">Types de cookies utilisés :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies analytiques (Google Analytics) :</strong> Permettent de mesurer l'audience du site,
                les pages visitées, le temps passé, etc.</li>
                <li><strong>Cookies de consentement :</strong> Stockent vos préférences concernant les cookies.</li>
              </ul>

              <p className="mt-4">
                <strong>Consentement :</strong> Conformément à la réglementation de la CNIL, votre consentement est demandé
                avant l'installation de cookies analytiques. Vous pouvez à tout moment modifier vos préférences via le
                lien "Gérer les cookies" en bas de page.
              </p>

              <p className="mt-4">
                <strong>Refuser les cookies :</strong> Vous pouvez également configurer votre navigateur pour refuser
                les cookies ou être averti de leur dépôt. Cependant, certaines fonctionnalités du site pourraient ne plus
                fonctionner correctement.
              </p>
            </div>
          </section>

          {/* 7. Services tiers */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              7. Services tiers utilisés
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>Notre site fait appel aux services tiers suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics :</strong> Analyse de trafic et statistiques d'utilisation</li>
                <li><strong>Google Sheets :</strong> Stockage des demandes de devis</li>
                <li><strong>Google Fonts :</strong> Polices de caractères pour le design du site</li>
              </ul>
              <p className="mt-4">
                Ces services peuvent avoir leurs propres politiques de confidentialité. Nous vous encourageons
                à les consulter pour plus d'informations.
              </p>
            </div>
          </section>

          {/* 8. Contact CNIL */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              8. Réclamation auprès de la CNIL
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés ou que le traitement
                de vos données n'est pas conforme à la réglementation, vous avez le droit de déposer une réclamation
                auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
              </p>
              <div className="bg-editorial-cream p-4 rounded mt-4">
                <p className="font-semibold">CNIL</p>
                <p>3 Place de Fontenoy</p>
                <p>TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p className="mt-2">
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer"
                  className="text-editorial-sage hover:text-editorial-copper underline">www.cnil.fr</a>
                </p>
              </div>
            </div>
          </section>

          {/* 9. Modification de la politique */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              9. Modification de cette politique
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment.
                Les modifications entreront en vigueur dès leur publication sur cette page.
              </p>
              <p>
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </section>

          {/* Lien retour */}
          <div className="pt-8 border-t border-editorial-mist">
            <Link
              to="/"
              className="inline-block btn-editorial"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>

      {/* Footer minimal */}
      <footer className="bg-editorial-charcoal text-editorial-cream py-8 px-6 text-center">
        <p className="font-sans text-sm">
          © {new Date().getFullYear()} Clim'intérieure. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default PolitiqueConfidentialite;
