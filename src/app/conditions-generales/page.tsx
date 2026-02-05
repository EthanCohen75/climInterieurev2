import Link from 'next/link';

export default function ConditionsGenerales() {
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
          Conditions G&eacute;n&eacute;rales d&apos;Utilisation
        </h1>

        <div className="bg-white border border-editorial-mist p-8 lg:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Les pr&eacute;sentes Conditions G&eacute;n&eacute;rales d&apos;Utilisation (CGU) r&eacute;gissent l&apos;utilisation du site web Clim&apos;int&eacute;rieure.
              </p>
              <p>
                En acc&eacute;dant et en utilisant ce site, vous acceptez sans r&eacute;serve les pr&eacute;sentes CGU.
                Si vous n&apos;acceptez pas ces conditions, nous vous prions de ne pas utiliser ce site.
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
                Le site <strong>Clim&apos;int&eacute;rieure</strong> a pour objet de pr&eacute;senter notre solution de climatisation air-eau
                100% int&eacute;rieure et de permettre aux visiteurs de demander un devis gratuit pour leur projet.
              </p>
              <p>
                <strong>Important :</strong> Ce site est un site informatif et de g&eacute;n&eacute;ration de leads. Il ne s&apos;agit pas
                d&apos;un site de vente en ligne. Aucune transaction commerciale n&apos;est r&eacute;alis&eacute;e directement sur le site.
              </p>
            </div>
          </section>

          {/* 2. Accès au site */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              2. Acc&egrave;s au site
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Le site est accessible gratuitement &agrave; tout utilisateur disposant d&apos;un acc&egrave;s &agrave; Internet.
                Tous les co&ucirc;ts li&eacute;s &agrave; l&apos;acc&egrave;s au site, que ce soient les frais mat&eacute;riels, logiciels ou d&apos;acc&egrave;s
                &agrave; Internet, sont exclusivement &agrave; la charge de l&apos;utilisateur.
              </p>
              <p>
                Nous nous r&eacute;servons le droit de modifier, interrompre, suspendre ou supprimer l&apos;acc&egrave;s au site,
                &agrave; tout moment et sans pr&eacute;avis, notamment pour des raisons de maintenance ou de mise &agrave; jour.
              </p>
            </div>
          </section>

          {/* 3. Obligations de l'utilisateur */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              3. Obligations de l&apos;utilisateur
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>En utilisant ce site, vous vous engagez &agrave; :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir des informations exactes, &agrave; jour et compl&egrave;tes dans le formulaire de contact</li>
                <li>Ne pas utiliser le site &agrave; des fins ill&eacute;gales ou frauduleuses</li>
                <li>Ne pas tenter de perturber le fonctionnement du site ou d&apos;acc&eacute;der de mani&egrave;re non autoris&eacute;e &agrave; ses syst&egrave;mes</li>
                <li>Respecter les droits de propri&eacute;t&eacute; intellectuelle de Clim&apos;int&eacute;rieure</li>
                <li>Ne pas collecter ou stocker des donn&eacute;es personnelles d&apos;autres utilisateurs</li>
              </ul>
            </div>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              4. Propri&eacute;t&eacute; intellectuelle
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                L&apos;ensemble des &eacute;l&eacute;ments de ce site (textes, images, graphismes, logo, ic&ocirc;nes, sons, vid&eacute;os, logiciels, etc.)
                est la propri&eacute;t&eacute; exclusive de Clim&apos;int&eacute;rieure ou de ses partenaires.
              </p>
              <p>
                Toute reproduction, repr&eacute;sentation, modification, publication, adaptation, totale ou partielle, des &eacute;l&eacute;ments
                du site, quel que soit le moyen ou le proc&eacute;d&eacute; utilis&eacute;, est interdite, sauf autorisation &eacute;crite pr&eacute;alable de
                Clim&apos;int&eacute;rieure.
              </p>
              <p>
                Toute exploitation non autoris&eacute;e du site ou de l&apos;un quelconque des &eacute;l&eacute;ments qu&apos;il contient sera consid&eacute;r&eacute;e
                comme constitutive d&apos;une contrefa&ccedil;on et poursuivie conform&eacute;ment aux dispositions des articles L.335-2 et
                suivants du Code de Propri&eacute;t&eacute; Intellectuelle.
              </p>
            </div>
          </section>

          {/* 5. Limitation de responsabilité */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              5. Limitation de responsabilit&eacute;
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                <strong>Exactitude des informations :</strong> Les informations fournies sur ce site le sont &agrave; titre indicatif.
                Nous nous effor&ccedil;ons de maintenir ces informations aussi exactes et &agrave; jour que possible, mais ne pouvons garantir
                leur exactitude, leur exhaustivit&eacute; ou leur actualit&eacute;.
              </p>
              <p>
                <strong>Disponibilit&eacute; du site :</strong> Nous ne garantissons pas que le site sera disponible de mani&egrave;re
                ininterrompue. Le site peut &ecirc;tre temporairement indisponible en raison de maintenance, de mises &agrave; jour ou
                de circonstances ind&eacute;pendantes de notre volont&eacute;.
              </p>
              <p>
                <strong>Liens externes :</strong> Le site peut contenir des liens vers des sites tiers. Nous n&apos;avons aucun
                contr&ocirc;le sur ces sites et d&eacute;clinons toute responsabilit&eacute; quant &agrave; leur contenu ou &agrave; leurs pratiques.
              </p>
              <p>
                <strong>Dommages :</strong> Clim&apos;int&eacute;rieure ne pourra &ecirc;tre tenue responsable des dommages directs ou indirects
                r&eacute;sultant de l&apos;utilisation du site, y compris la perte de donn&eacute;es, la perte de profits, ou tout autre pr&eacute;judice.
              </p>
            </div>
          </section>

          {/* 6. Données personnelles */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              6. Donn&eacute;es personnelles
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Le traitement de vos donn&eacute;es personnelles est d&eacute;crit dans notre{' '}
                <Link href="/politique-confidentialite" className="text-editorial-sage hover:text-editorial-copper underline">
                  Politique de Confidentialit&eacute;
                </Link>.
              </p>
              <p>
                En utilisant ce site et en remplissant le formulaire de contact, vous consentez au traitement de vos
                donn&eacute;es personnelles conform&eacute;ment &agrave; cette politique.
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
                Le site utilise des cookies, notamment pour l&apos;analyse du trafic via Google Analytics.
                Votre consentement est demand&eacute; avant l&apos;installation de ces cookies.
              </p>
              <p>
                Pour plus d&apos;informations, consultez notre{' '}
                <Link href="/politique-confidentialite" className="text-editorial-sage hover:text-editorial-copper underline">
                  Politique de Confidentialit&eacute;
                </Link> ou g&eacute;rez vos pr&eacute;f&eacute;rences via le lien &quot;G&eacute;rer les cookies&quot; en bas de page.
              </p>
            </div>
          </section>

          {/* 8. Modifications des CGU */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              8. Modification des Conditions G&eacute;n&eacute;rales
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Nous nous r&eacute;servons le droit de modifier les pr&eacute;sentes CGU &agrave; tout moment. Les modifications entreront
                en vigueur d&egrave;s leur publication sur cette page.
              </p>
              <p>
                Il est de votre responsabilit&eacute; de consulter r&eacute;guli&egrave;rement cette page pour prendre connaissance des
                &eacute;ventuelles modifications.
              </p>
              <p>
                Votre utilisation continue du site apr&egrave;s la publication de modifications constitue votre acceptation
                de ces modifications.
              </p>
            </div>
          </section>

          {/* 9. Loi applicable et juridiction */}
          <section>
            <h2 className="font-display text-2xl text-editorial-charcoal mb-4 border-b border-editorial-mist pb-2">
              9. Loi applicable et juridiction comp&eacute;tente
            </h2>
            <div className="font-body text-editorial-stone space-y-3">
              <p>
                Les pr&eacute;sentes Conditions G&eacute;n&eacute;rales d&apos;Utilisation sont r&eacute;gies par le droit fran&ccedil;ais.
              </p>
              <p>
                En cas de litige relatif &agrave; l&apos;interpr&eacute;tation ou &agrave; l&apos;ex&eacute;cution des pr&eacute;sentes CGU, et &agrave; d&eacute;faut de
                r&eacute;solution amiable, les tribunaux fran&ccedil;ais seront seuls comp&eacute;tents.
              </p>
              <p>
                <strong>Juridiction comp&eacute;tente :</strong> Tribunaux de Paris (conform&eacute;ment au si&egrave;ge social de la soci&eacute;t&eacute;).
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
                Pour toute question relative aux pr&eacute;sentes Conditions G&eacute;n&eacute;rales d&apos;Utilisation, vous pouvez nous contacter :
              </p>
              <div className="bg-editorial-cream p-4 rounded mt-4">
                <p><strong>Raison sociale :</strong> YOSSEF AVRAHAM CAPITAL</p>
                <p><strong>Email :</strong> contact@clim-interieure.fr</p>
                <p><strong>Adresse :</strong> 15 Rue des Belles Feuilles, 75016 Paris</p>
              </div>
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
