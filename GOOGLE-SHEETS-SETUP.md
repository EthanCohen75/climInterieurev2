# Guide de configuration Google Sheets pour le formulaire de devis

Ce guide vous explique comment connecter votre formulaire de devis à une feuille Google Sheets pour recevoir automatiquement les soumissions.

## Étape 1 : Créer votre feuille Google Sheets

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez une nouvelle feuille (cliquez sur le bouton "+")
3. Nommez votre feuille (par exemple : "Demandes de devis climatisation")

## Étape 2 : Configurer les en-têtes de colonnes

Dans la première ligne de votre feuille, ajoutez les en-têtes suivants :

| A1 | B1 | C1 | D1 | E1 |
|----|----|----|----|----|
| Timestamp | Nom | Email | Ville d'installation | Message |

Ces colonnes recevront automatiquement les données du formulaire.

## Étape 3 : Ouvrir l'éditeur Apps Script

1. Dans votre feuille Google Sheets, cliquez sur **Extensions** > **Apps Script**
2. Une nouvelle fenêtre s'ouvre avec l'éditeur de code
3. Supprimez tout le code existant (par défaut, il y a une fonction myFunction vide)

## Étape 4 : Copier le script

1. Ouvrez le fichier `google-apps-script.js` qui se trouve dans ce dossier
2. Copiez **tout** le contenu du fichier
3. Collez-le dans l'éditeur Apps Script
4. Cliquez sur l'icône de **disquette** (💾) ou utilisez Ctrl+S pour enregistrer
5. Donnez un nom au projet (par exemple : "Formulaire Devis")

## Étape 5 : Déployer le script comme application web

1. Dans l'éditeur Apps Script, cliquez sur **Déployer** (en haut à droite) > **Nouveau déploiement**
2. Cliquez sur l'icône **engrenage** à côté de "Sélectionner le type"
3. Sélectionnez **Application Web**
4. Configurez les paramètres :
   - **Description** : "Formulaire de devis" (ou ce que vous voulez)
   - **Exécuter en tant que** : Sélectionnez **Moi** (votre compte)
   - **Qui peut accéder** : Sélectionnez **Tout le monde**
5. Cliquez sur **Déployer**

## Étape 6 : Autoriser l'application

La première fois, Google vous demandera d'autoriser le script :

1. Cliquez sur **Autoriser l'accès**
2. Sélectionnez votre compte Google
3. Vous verrez un avertissement "Google n'a pas vérifié cette application"
4. Cliquez sur **Paramètres avancés** (en bas)
5. Cliquez sur **Accéder à [nom du projet] (non sécurisé)**
6. Cliquez sur **Autoriser**

## Étape 7 : Copier l'URL du déploiement

1. Après le déploiement, une fenêtre apparaît avec l'URL
2. **IMPORTANT** : Copiez l'URL qui commence par `https://script.google.com/macros/s/...`
3. Cette URL ressemble à quelque chose comme :
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```
4. **Gardez cette URL précieusement**, vous en aurez besoin pour l'étape suivante !

## Étape 8 : Configurer votre application React

1. Ouvrez le fichier `.env` qui se trouve à la racine du projet
2. Vous y trouverez une variable `VITE_GOOGLE_SCRIPT_URL`
3. Remplacez la valeur par l'URL que vous avez copiée à l'étape 7
4. Enregistrez le fichier

Exemple :
```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzVOTRE_URL_ICI/exec
```

## Étape 9 : Redémarrer votre serveur de développement

Si votre application React est déjà en cours d'exécution :

1. Arrêtez le serveur (Ctrl+C dans le terminal)
2. Redémarrez-le avec `npm run dev`

Les variables d'environnement ne sont chargées qu'au démarrage de l'application.

## Étape 10 : Tester !

1. Allez sur votre site web
2. Remplissez le formulaire de devis
3. Cliquez sur "Envoyer ma demande"
4. Vérifiez votre feuille Google Sheets : une nouvelle ligne devrait apparaître avec les données !

## Dépannage

### Le formulaire se soumet mais rien n'apparaît dans Google Sheets

1. Vérifiez que vous avez bien copié l'URL complète (avec `/exec` à la fin)
2. Vérifiez que le fichier `.env` est bien enregistré
3. Vérifiez que vous avez redémarré le serveur après avoir modifié `.env`
4. Dans Google Apps Script, allez dans **Exécutions** pour voir les logs d'erreur

### Message d'erreur "Authorization required"

1. Retournez dans Apps Script
2. Allez dans **Déployer** > **Gérer les déploiements**
3. Vérifiez que "Qui peut accéder" est bien défini sur "Tout le monde"

### Les données n'apparaissent pas dans le bon ordre

1. Vérifiez que les en-têtes de colonnes dans votre feuille correspondent exactement à ceux indiqués à l'étape 2
2. Vérifiez qu'ils sont bien dans la première ligne (ligne 1)

## Mise à jour du script

Si vous devez modifier le script Google Apps Script plus tard :

1. Modifiez le code dans l'éditeur Apps Script
2. Enregistrez (💾)
3. Allez dans **Déployer** > **Gérer les déploiements**
4. Cliquez sur l'icône **crayon** (✏️) à côté de votre déploiement
5. Changez la **Version** en **Nouvelle version**
6. Cliquez sur **Déployer**
7. L'URL reste la même, donc pas besoin de modifier votre code React !

## Support

Si vous rencontrez des problèmes, vérifiez les logs dans Google Apps Script :
- Allez dans **Exécutions** dans le menu de gauche
- Vous verrez toutes les exécutions du script avec leurs statuts (succès/erreur)
- Cliquez sur une exécution pour voir les détails et les logs
