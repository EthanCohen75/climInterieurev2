# Guide de configuration Google Analytics 4 (GA4)

Ce guide vous explique comment créer un compte Google Analytics 4 et obtenir votre ID de mesure pour tracker les visiteurs de votre site.

## Qu'est-ce que Google Analytics 4 ?

Google Analytics 4 (GA4) est la dernière version de Google Analytics. Elle vous permet de :
- Voir combien de personnes visitent votre site
- D'où viennent vos visiteurs (Google, réseaux sociaux, etc.)
- Quelles pages ils consultent
- Combien de personnes remplissent votre formulaire de devis
- Et bien plus encore

## Étape 1 : Créer un compte Google Analytics

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Connectez-vous avec votre compte Google (celui que vous utilisez pour Gmail)
3. Cliquez sur **"Commencer la mesure"** ou **"Start measuring"**

## Étape 2 : Configurer votre compte

### Nom du compte
1. Entrez un nom pour votre compte (par exemple : "Clim'intérieure" ou votre nom)
2. Cochez les cases de partage de données (recommandé, mais optionnel)
3. Cliquez sur **"Suivant"**

### Nom de la propriété
1. **Nom de la propriété** : Entrez "Site Clim'intérieure" (ou le nom de votre site)
2. **Fuseau horaire** : Sélectionnez "France"
3. **Devise** : Sélectionnez "Euro (€)"
4. Cliquez sur **"Suivant"**

### Informations sur l'entreprise
1. **Secteur d'activité** : Sélectionnez "Immobilier et construction" ou "Services professionnels"
2. **Taille de l'entreprise** : Sélectionnez la taille appropriée
3. **Comment comptez-vous utiliser Google Analytics** : Cochez "Examiner le comportement des utilisateurs"
4. Cliquez sur **"Créer"**

### Accepter les conditions
1. Lisez les conditions d'utilisation
2. Cochez les cases pour accepter
3. Cliquez sur **"J'accepte"**

## Étape 3 : Configurer la collecte de données

1. Sélectionnez la plateforme : **"Web"**
2. Configurez votre flux de données :
   - **URL du site web** : Entrez l'URL de votre site Vercel (par exemple : `https://votre-site.vercel.app`)
   - **Nom du flux** : "Site web Clim'intérieure"
   - **Activer la mesure améliorée** : Laissez cette option **activée** (recommandé)
3. Cliquez sur **"Créer un flux"**

## Étape 4 : Récupérer votre ID de mesure

C'est l'étape la plus importante ! Vous devez copier votre **ID de mesure**.

1. Après avoir créé le flux, vous verrez une page avec les détails du flux
2. En haut de la page, vous verrez **"ID de mesure"** suivi de quelque chose comme : **G-XXXXXXXXXX**
3. Cliquez sur l'icône de copie pour copier cet ID
4. **IMPORTANT** : Gardez cet ID précieusement, vous en aurez besoin pour la configuration !

### Comment retrouver votre ID de mesure plus tard

Si vous fermez la page et devez retrouver votre ID :
1. Allez sur [Google Analytics](https://analytics.google.com/)
2. En bas à gauche, cliquez sur l'icône **⚙️ (Paramètres/Admin)**
3. Dans la colonne "Propriété" au milieu, cliquez sur **"Flux de données"**
4. Cliquez sur votre flux (le nom de votre site)
5. L'ID de mesure apparaît en haut à droite : **G-XXXXXXXXXX**

## Étape 5 : Configurer votre application

Maintenant que vous avez votre ID de mesure, vous devez le configurer dans votre application.

### Configuration locale (sur votre ordinateur)

1. Ouvrez le fichier `.env` dans le dossier `clim-interieure-landing-page`
2. Vous verrez une ligne qui commence par `VITE_GA_MEASUREMENT_ID`
3. Remplacez `G-XXXXXXXXXX` par votre véritable ID de mesure
4. Enregistrez le fichier
5. Redémarrez votre serveur de développement (Ctrl+C puis `npm run dev`)

Exemple :
```env
VITE_GA_MEASUREMENT_ID=G-ABC123DEF4
```

### Configuration sur Vercel (pour le site en ligne)

1. Allez sur [Vercel](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans **Settings** > **Environment Variables**
4. Ajoutez une nouvelle variable :
   - **Name** : `VITE_GA_MEASUREMENT_ID`
   - **Value** : Votre ID de mesure (G-XXXXXXXXXX)
   - **Environments** : Cochez Production, Preview, et Development
5. Cliquez sur **Save**
6. **Redéployez** votre site :
   - Allez dans l'onglet **Deployments**
   - Cliquez sur les trois points (...) du dernier déploiement
   - Cliquez sur **Redeploy**

## Étape 6 : Vérifier que tout fonctionne

### Test en temps réel

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Dans le menu de gauche, cliquez sur **Rapports** > **Temps réel**
3. Ouvrez votre site web dans un autre onglet
4. Dans Google Analytics, vous devriez voir **"1 utilisateur actif en ce moment"** apparaître
5. Naviguez sur votre site, remplissez le formulaire
6. Vous devriez voir les événements apparaître en temps réel

### Si ça ne fonctionne pas

1. **Vérifiez l'ID de mesure** :
   - Assurez-vous qu'il commence bien par "G-" et non "UA-"
   - Vérifiez qu'il n'y a pas d'espaces avant ou après

2. **Vérifiez que le serveur est redémarré** :
   - Les variables `.env` ne sont chargées qu'au démarrage
   - Redémarrez avec Ctrl+C puis `npm run dev`

3. **Vérifiez dans la console du navigateur** :
   - Ouvrez les outils de développement (F12)
   - Allez dans l'onglet "Console"
   - Vous devriez voir des messages de Google Analytics
   - S'il y a des erreurs, notez-les

4. **Testez en navigation privée** :
   - Les extensions de navigateur (bloqueurs de pub) peuvent bloquer Analytics
   - Essayez en mode navigation privée/incognito

## Étape 7 : Comprendre vos données

### Rapports principaux à consulter

1. **Temps réel** : Voir qui est sur votre site en ce moment
2. **Acquisition** : D'où viennent vos visiteurs
3. **Engagement** : Quelles pages ils visitent
4. **Événements** : Voir les soumissions de formulaires

### Événement "generate_lead"

Votre site est configuré pour envoyer un événement spécial à chaque fois que quelqu'un remplit le formulaire de devis. Cet événement s'appelle **"generate_lead"**.

Pour le voir :
1. Allez dans **Rapports** > **Engagement** > **Événements**
2. Vous verrez une liste d'événements, dont "generate_lead"
3. Cliquez dessus pour voir combien de personnes ont rempli le formulaire

## Conseils et bonnes pratiques

### Donnez du temps aux données

- Les rapports en temps réel sont instantanés
- Les autres rapports peuvent prendre 24-48h pour se mettre à jour
- Soyez patient les premiers jours

### Configurez des objectifs (optionnel)

Vous pouvez créer des "conversions" dans GA4 :
1. Allez dans **Admin** > **Événements**
2. Trouvez l'événement "generate_lead"
3. Cliquez sur le bouton "Marquer comme conversion"
4. Cela vous permettra de suivre facilement vos leads dans les rapports

### Respectez la vie privée

- Google Analytics est conforme au RGPD si bien configuré
- Pensez à ajouter une mention dans votre politique de confidentialité
- Les données sont anonymisées par défaut

## Aide supplémentaire

### Ressources officielles

- [Centre d'aide Google Analytics](https://support.google.com/analytics)
- [Guide de démarrage GA4](https://support.google.com/analytics/answer/9304153)

### Problèmes courants

**"Je ne vois pas de données"**
- Attendez 24-48h pour les rapports standards
- Utilisez le rapport "Temps réel" pour un test immédiat

**"Mon ID ne fonctionne pas"**
- Vérifiez qu'il commence par "G-" (pas "UA-")
- GA4 uniquement, pas Universal Analytics

**"Les événements de formulaire n'apparaissent pas"**
- Testez la soumission du formulaire
- Vérifiez dans Temps réel > Événements
- Attendez quelques minutes

## Support

Si vous rencontrez des difficultés, vérifiez :
1. Que l'ID de mesure est correct dans `.env` et sur Vercel
2. Que le serveur a été redémarré après modification de `.env`
3. Que le site a été redéployé sur Vercel après ajout de la variable
4. Que vous n'avez pas de bloqueur de publicité actif lors du test
