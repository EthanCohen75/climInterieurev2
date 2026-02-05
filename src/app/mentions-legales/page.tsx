import Link from 'next/link';

export default function MentionsLegales() {
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
          Mentions L&eacute;gales
        </h1>

        <div className="bg-white border border-editorial-mist p-8 lg:p-12 space-y-8">

          {/* 1. Identification de l'entreprise */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              1. Identification de l&apos;entreprise
            </h2>
            <div className="font-body text-editorial-stone space-y-2">
              <p><strong>Raison sociale :</strong> YOSSEF AVRAHAM CAPITAL</p>
              <p><strong>Forme juridique :</strong> SASU (Soci&eacute;t&eacute; par Actions Simplifi&eacute;e Unipersonnelle)</p>
              <p><strong>Adresse du si&egrave;ge social :</strong> 15 Rue des Belles Feuilles, 75016 Paris</p>
              <p><strong>Num&eacute;ro SIRET :</strong> 845 097 443 00012</p>
              <p><strong>Num&eacute;ro SIREN :</strong> 845 097 443</p>
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
              <p><strong>Directeur de publication :</strong> M. Charles AZRAN, Pr&eacute;sident</p>
            </div>
          </section>

          {/* 3. Hébergement */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              3. H&eacute;bergement du site
            </h2>
            <div className="font-body text-editorial-stone space-y-2">
              <p><strong>H&eacute;bergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, &Eacute;tats-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-editorial-sage hover:text-editorial-copper underline">vercel.com</a></p>
            </div>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              4. Propri&eacute;t&eacute; intellectuelle
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                L&apos;ensemble de ce site rel&egrave;ve de la l&eacute;gislation fran&ccedil;aise et internationale sur le droit d&apos;auteur
                et la propri&eacute;t&eacute; intellectuelle. Tous les droits de reproduction sont r&eacute;serv&eacute;s, y compris pour
                les documents t&eacute;l&eacute;chargeables et les repr&eacute;sentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support &eacute;lectronique quel qu&apos;il soit est
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* 5. Données personnelles */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              5. Donn&eacute;es personnelles
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Les informations recueillies sur ce site font l&apos;objet d&apos;un traitement informatique destin&eacute;
                au traitement des demandes de devis et &agrave; la gestion de la relation client.
              </p>
              <p>
                Conform&eacute;ment &agrave; la loi &laquo; Informatique et Libert&eacute;s &raquo; du 6 janvier 1978 modifi&eacute;e et au R&egrave;glement
                G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD), vous b&eacute;n&eacute;ficiez d&apos;un droit d&apos;acc&egrave;s, de rectification,
                de portabilit&eacute; et d&apos;effacement de vos donn&eacute;es ou encore de limitation du traitement.
              </p>
              <p>
                Vous pouvez &eacute;galement, pour des motifs l&eacute;gitimes, vous opposer au traitement des donn&eacute;es vous concernant.
              </p>
              <p>
                Pour exercer ces droits ou pour toute question sur le traitement de vos donn&eacute;es, vous pouvez consulter
                notre <Link href="/politique-confidentialite" className="text-editorial-sage hover:text-editorial-copper underline">
                  Politique de confidentialit&eacute;
                </Link> ou nous contacter &agrave; l&apos;adresse : contact@clim-interieure.fr
              </p>
              <p>
                Si vous estimez, apr&egrave;s nous avoir contact&eacute;s, que vos droits ne sont pas respect&eacute;s, vous pouvez
                adresser une r&eacute;clamation aupr&egrave;s de la CNIL (Commission Nationale de l&apos;Informatique et des Libert&eacute;s)
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
                Ce site utilise des cookies, notamment Google Analytics, pour am&eacute;liorer l&apos;exp&eacute;rience utilisateur
                et analyser le trafic du site.
              </p>
              <p>
                Conform&eacute;ment &agrave; la r&eacute;glementation, votre consentement est demand&eacute; avant l&apos;installation de ces cookies.
                Vous pouvez &agrave; tout moment modifier vos pr&eacute;f&eacute;rences via le lien &quot;G&eacute;rer les cookies&quot; en bas de page.
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
