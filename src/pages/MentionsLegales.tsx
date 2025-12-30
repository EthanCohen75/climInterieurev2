import React from 'react';
import { Link } from 'react-router-dom';

const MentionsLegales: React.FC = () => {
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
          Mentions Légales
        </h1>

        <div className="bg-white border border-editorial-mist p-8 lg:p-12 space-y-8">

          {/* 1. Identification de l'entreprise */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              1. Identification de l'entreprise
            </h2>
            <div className="font-body text-editorial-stone space-y-2">
              <p><strong>Raison sociale :</strong> YOSSEF AVRAHAM CAPITAL</p>
              <p><strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</p>
              <p><strong>Adresse du siège social :</strong> 15 Rue des Belles Feuilles, 75016 Paris</p>
              <p><strong>Numéro SIRET :</strong> 845 097 443 00012</p>
              <p><strong>Numéro SIREN :</strong> 845 097 443</p>
              <p><strong>Capital social :</strong> 500 euros</p>
              <p><strong>RCS :</strong> Paris</p>
              <p><strong>TVA intracommunautaire :</strong> FR43845097443</p>
              <p><strong>Code NAF/APE :</strong> 7022Z (Conseil pour les affaires et autres conseils de gestion)</p>
            </div>
          </section>

          {/* 2. Contact */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              2. Contact
            </h2>
            <div className="font-body text-editorial-stone space-y-2">
              <p><strong>Email :</strong> contact@clim-interieure.fr</p>
              <p><strong>Adresse :</strong> 15 Rue des Belles Feuilles, 75016 Paris</p>
              <p><strong>Directeur de publication :</strong> M. Charles AZRAN, Président</p>
            </div>
          </section>

          {/* 3. Hébergement */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              3. Hébergement du site
            </h2>
            <div className="font-body text-editorial-stone space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-editorial-sage hover:text-editorial-copper underline">vercel.com</a></p>
            </div>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              4. Propriété intellectuelle
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* 5. Données personnelles */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              5. Données personnelles
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné
                au traitement des demandes de devis et à la gestion de la relation client.
              </p>
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement
                Général sur la Protection des Données (RGPD), vous bénéficiez d'un droit d'accès, de rectification,
                de portabilité et d'effacement de vos données ou encore de limitation du traitement.
              </p>
              <p>
                Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
              </p>
              <p>
                Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez consulter
                notre <Link to="/politique-confidentialite" className="text-editorial-sage hover:text-editorial-copper underline">
                  Politique de confidentialité
                </Link> ou nous contacter à l'adresse : contact@clim-interieure.fr
              </p>
              <p>
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez
                adresser une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés)
                sur <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-editorial-sage hover:text-editorial-copper underline">
                  www.cnil.fr
                </a>.
              </p>
            </div>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              6. Cookies
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Ce site utilise des cookies, notamment Google Analytics, pour améliorer l'expérience utilisateur
                et analyser le trafic du site.
              </p>
              <p>
                Conformément à la réglementation, votre consentement est demandé avant l'installation de ces cookies.
                Vous pouvez à tout moment modifier vos préférences via le lien "Gérer les cookies" en bas de page.
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

export default MentionsLegales;
