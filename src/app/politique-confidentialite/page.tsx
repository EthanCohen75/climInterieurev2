import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-editorial-cream min-h-screen">
      {/* Header simple */}
      <header className="bg-editorial-charcoal text-editorial-cream py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="font-display text-2xl hover:text-editorial-copper transition-colors">
            &larr; Clim&apos;int&eacute;rieure
          </Link>
        </div>
      </header>

      {/* Contenu */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl lg:text-5xl text-editorial-charcoal mb-8">
          Politique de Confidentialit&eacute;
        </h1>

        <div className="bg-white border border-editorial-mist p-8 lg:p-12 space-y-8">

          {/* Introduction */}
          <section>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                La pr&eacute;sente Politique de Confidentialit&eacute; d&eacute;crit comment Clim&apos;int&eacute;rieure collecte, utilise et prot&egrave;ge
                vos donn&eacute;es personnelles lorsque vous utilisez notre site web.
              </p>
              <p>
                Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD) et &agrave; la loi &laquo; Informatique et Libert&eacute;s &raquo;,
                nous nous engageons &agrave; prot&eacute;ger la vie priv&eacute;e de nos utilisateurs.
              </p>
            </div>
          </section>

          {/* 1. Responsable du traitement */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              1. Responsable du traitement des donn&eacute;es
            </h2>
            <div className="font-body text-editorial-stone space-y-2">
              <p><strong>Raison sociale :</strong> YOSSEF AVRAHAM CAPITAL</p>
              <p><strong>Forme juridique :</strong> SASU</p>
              <p><strong>Adresse :</strong> 15 Rue des Belles Feuilles, 75016 Paris</p>
              <p><strong>Email de contact RGPD :</strong> contact@clim-interieure.fr</p>
              <p><strong>Repr&eacute;sentant l&eacute;gal :</strong> M. Charles AZRAN, Pr&eacute;sident</p>
            </div>
          </section>

          {/* 2. Données collectées */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              2. Donn&eacute;es personnelles collect&eacute;es
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Nous collectons les donn&eacute;es personnelles suivantes lorsque vous remplissez notre formulaire de demande de devis :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Nom complet</strong></li>
                <li><strong>Adresse email</strong></li>
                <li><strong>Ville d&apos;installation</strong></li>
                <li><strong>Message / Question</strong> (optionnel)</li>
              </ul>
              <p className="mt-4">
                <strong>Base l&eacute;gale :</strong> Le traitement de vos donn&eacute;es est fond&eacute; sur votre consentement explicite,
                donn&eacute; lors de la soumission du formulaire.
              </p>
              <p>
                <strong>Finalit&eacute; :</strong> Ces donn&eacute;es sont collect&eacute;es uniquement pour traiter votre demande de devis
                et vous recontacter dans le cadre de votre projet de climatisation.
              </p>
            </div>
          </section>

          {/* 3. Utilisation des données */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              3. Utilisation de vos donn&eacute;es
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>Vos donn&eacute;es personnelles sont utilis&eacute;es pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Traiter et r&eacute;pondre &agrave; votre demande de devis</li>
                <li>Vous contacter par email ou t&eacute;l&eacute;phone concernant votre projet</li>
                <li>Assurer le suivi de votre demande</li>
              </ul>
              <p className="mt-4">
                <strong>Nous nous engageons &agrave; ne jamais :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vendre vos donn&eacute;es &agrave; des tiers</li>
                <li>Utiliser vos donn&eacute;es &agrave; des fins publicitaires sans votre consentement</li>
                <li>Partager vos donn&eacute;es avec des partenaires commerciaux sans votre accord</li>
              </ul>
            </div>
          </section>

          {/* 4. Stockage et conservation */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              4. Stockage et conservation des donn&eacute;es
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                <strong>Lieu de stockage :</strong> Vos donn&eacute;es sont stock&eacute;es de mani&egrave;re s&eacute;curis&eacute;e via Google Sheets,
                un service fourni par Google LLC.
              </p>
              <p>
                <strong>Localisation :</strong> Les serveurs peuvent &ecirc;tre situ&eacute;s dans l&apos;Union Europ&eacute;enne ou aux &Eacute;tats-Unis.
                Google LLC est certifi&eacute; sous le EU-US Data Privacy Framework.
              </p>
              <p>
                <strong>Dur&eacute;e de conservation :</strong> Vos donn&eacute;es sont conserv&eacute;es pendant une dur&eacute;e de 3 ans
                &agrave; compter de votre dernier contact avec nous. Pass&eacute; ce d&eacute;lai, vos donn&eacute;es sont automatiquement supprim&eacute;es.
              </p>
              <p>
                <strong>S&eacute;curit&eacute; :</strong> Nous mettons en oeuvre des mesures techniques et organisationnelles appropri&eacute;es
                pour prot&eacute;ger vos donn&eacute;es contre tout acc&egrave;s non autoris&eacute;, modification, divulgation ou destruction.
              </p>
            </div>
          </section>

          {/* 5. Vos droits RGPD */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              5. Vos droits (RGPD)
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>Conform&eacute;ment au RGPD, vous disposez des droits suivants concernant vos donn&eacute;es personnelles :</p>

              <div className="space-y-4 mt-4">
                <div>
                  <p className="font-semibold text-editorial-charcoal">Droit d&apos;acc&egrave;s</p>
                  <p>Vous pouvez obtenir une copie de toutes les donn&eacute;es personnelles que nous d&eacute;tenons sur vous.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">Droit de rectification</p>
                  <p>Vous pouvez demander la correction de donn&eacute;es inexactes ou incompl&egrave;tes.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">Droit &agrave; l&apos;effacement</p>
                  <p>Vous pouvez demander la suppression de vos donn&eacute;es personnelles.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">Droit &agrave; la portabilit&eacute;</p>
                  <p>Vous pouvez r&eacute;cup&eacute;rer vos donn&eacute;es dans un format structur&eacute; et r&eacute;utilisable.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">Droit d&apos;opposition</p>
                  <p>Vous pouvez vous opposer au traitement de vos donn&eacute;es pour des motifs l&eacute;gitimes.</p>
                </div>

                <div>
                  <p className="font-semibold text-editorial-charcoal">Droit &agrave; la limitation</p>
                  <p>Vous pouvez demander la limitation du traitement dans certaines conditions.</p>
                </div>
              </div>

              <div className="bg-editorial-sage/10 p-6 mt-6 rounded">
                <p className="font-semibold text-editorial-charcoal mb-2">Comment exercer vos droits ?</p>
                <p>
                  Pour exercer l&apos;un de ces droits, vous pouvez nous contacter &agrave; l&apos;adresse email suivante :
                  <strong> contact@clim-interieure.fr</strong>
                </p>
                <p className="mt-2">
                  Nous nous engageons &agrave; r&eacute;pondre &agrave; votre demande dans un d&eacute;lai maximum d&apos;un mois.
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
                Notre site utilise <strong>Google Analytics</strong> pour analyser le trafic et am&eacute;liorer l&apos;exp&eacute;rience utilisateur.
              </p>

              <p className="font-semibold text-editorial-charcoal mt-4">Types de cookies utilis&eacute;s :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies analytiques (Google Analytics) :</strong> Permettent de mesurer l&apos;audience du site,
                les pages visit&eacute;es, le temps pass&eacute;, etc.</li>
                <li><strong>Cookies de consentement :</strong> Stockent vos pr&eacute;f&eacute;rences concernant les cookies.</li>
              </ul>

              <p className="mt-4">
                <strong>Consentement :</strong> Conform&eacute;ment &agrave; la r&eacute;glementation de la CNIL, votre consentement est demand&eacute;
                avant l&apos;installation de cookies analytiques. Vous pouvez &agrave; tout moment modifier vos pr&eacute;f&eacute;rences via le
                lien &quot;G&eacute;rer les cookies&quot; en bas de page.
              </p>

              <p className="mt-4">
                <strong>Refuser les cookies :</strong> Vous pouvez &eacute;galement configurer votre navigateur pour refuser
                les cookies ou &ecirc;tre averti de leur d&eacute;p&ocirc;t. Cependant, certaines fonctionnalit&eacute;s du site pourraient ne plus
                fonctionner correctement.
              </p>
            </div>
          </section>

          {/* 7. Services tiers */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              7. Services tiers utilis&eacute;s
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>Notre site fait appel aux services tiers suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics :</strong> Analyse de trafic et statistiques d&apos;utilisation</li>
                <li><strong>Google Sheets :</strong> Stockage des demandes de devis</li>
                <li><strong>Google Fonts :</strong> Polices de caract&egrave;res pour le design du site</li>
              </ul>
              <p className="mt-4">
                Ces services peuvent avoir leurs propres politiques de confidentialit&eacute;. Nous vous encourageons
                &agrave; les consulter pour plus d&apos;informations.
              </p>
            </div>
          </section>

          {/* 8. Contact CNIL */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              8. R&eacute;clamation aupr&egrave;s de la CNIL
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Si vous estimez, apr&egrave;s nous avoir contact&eacute;s, que vos droits ne sont pas respect&eacute;s ou que le traitement
                de vos donn&eacute;es n&apos;est pas conforme &agrave; la r&eacute;glementation, vous avez le droit de d&eacute;poser une r&eacute;clamation
                aupr&egrave;s de la CNIL (Commission Nationale de l&apos;Informatique et des Libert&eacute;s) :
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
                Nous nous r&eacute;servons le droit de modifier cette Politique de Confidentialit&eacute; &agrave; tout moment.
                Les modifications entreront en vigueur d&egrave;s leur publication sur cette page.
              </p>
            </div>
          </section>

          {/* Lien retour */}
          <div className="pt-8 border-t border-editorial-mist">
            <Link
              href="/"
              className="inline-block btn-editorial"
            >
              &larr; Retour &agrave; l&apos;accueil
            </Link>
          </div>
        </div>
      </div>

      {/* Footer minimal */}
      <footer className="bg-editorial-charcoal text-editorial-cream py-8 px-6 text-center">
        <p className="font-sans text-sm">
          &copy; {new Date().getFullYear()} Clim&apos;int&eacute;rieure. Tous droits r&eacute;serv&eacute;s.
        </p>
      </footer>
    </div>
  );
}
