import React from 'react';
import { Link } from 'react-router-dom';

const ConditionsGenerales: React.FC = () => {
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
          Conditions Générales d'Utilisation
        </h1>

        <div className="bg-white border border-editorial-mist p-8 lg:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web Clim'intérieure.
              </p>
              <p>
                En accédant et en utilisant ce site, vous acceptez sans réserve les présentes CGU.
                Si vous n'acceptez pas ces conditions, nous vous prions de ne pas utiliser ce site.
              </p>
            </div>
          </section>

          {/* 1. Objet du site */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              1. Objet du site
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Le site <strong>Clim'intérieure</strong> a pour objet de présenter notre solution de climatisation air-eau
                100% intérieure et de permettre aux visiteurs de demander un devis gratuit pour leur projet.
              </p>
              <p>
                <strong>Important :</strong> Ce site est un site informatif et de génération de leads. Il ne s'agit pas
                d'un site de vente en ligne. Aucune transaction commerciale n'est réalisée directement sur le site.
              </p>
            </div>
          </section>

          {/* 2. Accès au site */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              2. Accès au site
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
                Tous les coûts liés à l'accès au site, que ce soient les frais matériels, logiciels ou d'accès
                à Internet, sont exclusivement à la charge de l'utilisateur.
              </p>
              <p>
                Nous nous réservons le droit de modifier, interrompre, suspendre ou supprimer l'accès au site,
                à tout moment et sans préavis, notamment pour des raisons de maintenance ou de mise à jour.
              </p>
            </div>
          </section>

          {/* 3. Obligations de l'utilisateur */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              3. Obligations de l'utilisateur
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>En utilisant ce site, vous vous engagez à :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir des informations exactes, à jour et complètes dans le formulaire de contact</li>
                <li>Ne pas utiliser le site à des fins illégales ou frauduleuses</li>
                <li>Ne pas tenter de perturber le fonctionnement du site ou d'accéder de manière non autorisée à ses systèmes</li>
                <li>Respecter les droits de propriété intellectuelle de Clim'intérieure</li>
                <li>Ne pas collecter ou stocker des données personnelles d'autres utilisateurs</li>
              </ul>
            </div>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              4. Propriété intellectuelle
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                L'ensemble des éléments de ce site (textes, images, graphismes, logo, icônes, sons, vidéos, logiciels, etc.)
                est la propriété exclusive de Clim'intérieure ou de ses partenaires.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de
                Clim'intérieure.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée
                comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et
                suivants du Code de Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* 5. Limitation de responsabilité */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              5. Limitation de responsabilité
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                <strong>Exactitude des informations :</strong> Les informations fournies sur ce site le sont à titre indicatif.
                Nous nous efforçons de maintenir ces informations aussi exactes et à jour que possible, mais ne pouvons garantir
                leur exactitude, leur exhaustivité ou leur actualité.
              </p>
              <p>
                <strong>Disponibilité du site :</strong> Nous ne garantissons pas que le site sera disponible de manière
                ininterrompue. Le site peut être temporairement indisponible en raison de maintenance, de mises à jour ou
                de circonstances indépendantes de notre volonté.
              </p>
              <p>
                <strong>Liens externes :</strong> Le site peut contenir des liens vers des sites tiers. Nous n'avons aucun
                contrôle sur ces sites et déclinons toute responsabilité quant à leur contenu ou à leurs pratiques.
              </p>
              <p>
                <strong>Dommages :</strong> Clim'intérieure ne pourra être tenue responsable des dommages directs ou indirects
                résultant de l'utilisation du site, y compris la perte de données, la perte de profits, ou tout autre préjudice.
              </p>
            </div>
          </section>

          {/* 6. Données personnelles */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              6. Données personnelles
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Le traitement de vos données personnelles est décrit dans notre{' '}
                <Link to="/politique-confidentialite" className="text-editorial-sage hover:text-editorial-copper underline">
                  Politique de Confidentialité
                </Link>.
              </p>
              <p>
                En utilisant ce site et en remplissant le formulaire de contact, vous consentez au traitement de vos
                données personnelles conformément à cette politique.
              </p>
            </div>
          </section>

          {/* 7. Cookies */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              7. Cookies
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Le site utilise des cookies, notamment pour l'analyse du trafic via Google Analytics.
                Votre consentement est demandé avant l'installation de ces cookies.
              </p>
              <p>
                Pour plus d'informations, consultez notre{' '}
                <Link to="/politique-confidentialite" className="text-editorial-sage hover:text-editorial-copper underline">
                  Politique de Confidentialité
                </Link> ou gérez vos préférences via le lien "Gérer les cookies" en bas de page.
              </p>
            </div>
          </section>

          {/* 8. Modifications des CGU */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              8. Modification des Conditions Générales
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Nous nous réservons le droit de modifier les présentes CGU à tout moment. Les modifications entreront
                en vigueur dès leur publication sur cette page.
              </p>
              <p>
                Il est de votre responsabilité de consulter régulièrement cette page pour prendre connaissance des
                éventuelles modifications.
              </p>
              <p>
                Votre utilisation continue du site après la publication de modifications constitue votre acceptation
                de ces modifications.
              </p>
            </div>
          </section>

          {/* 9. Loi applicable et juridiction */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              9. Loi applicable et juridiction compétente
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Les présentes Conditions Générales d'Utilisation sont régies par le droit français.
              </p>
              <p>
                En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, et à défaut de
                résolution amiable, les tribunaux français seront seuls compétents.
              </p>
              <p>
                <strong>Juridiction compétente :</strong> Tribunaux de Paris (conformément au siège social de la société).
              </p>
            </div>
          </section>

          {/* 10. Contact */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              10. Contact
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Pour toute question relative aux présentes Conditions Générales d'Utilisation, vous pouvez nous contacter :
              </p>
              <div className="bg-editorial-cream p-4 rounded mt-4">
                <p><strong>Raison sociale :</strong> YOSSEF AVRAHAM CAPITAL</p>
                <p><strong>Email :</strong> contact@clim-interieure.fr</p>
                <p><strong>Adresse :</strong> 15 Rue des Belles Feuilles, 75016 Paris</p>
              </div>
            </div>
          </section>

          {/* Date de mise à jour */}
          <section className="bg-editorial-sage/10 p-6 rounded">
            <p className="font-body text-editorial-charcoal">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
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

export default ConditionsGenerales;
