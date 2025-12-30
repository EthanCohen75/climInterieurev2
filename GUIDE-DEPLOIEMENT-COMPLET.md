# 🚀 Guide Complet de Déploiement - Clim'intérieure

## 📋 Table des Matières
1. [Images SEO à ajouter](#1-images-seo-à-ajouter)
2. [Noms de domaine](#2-noms-de-domaine)
3. [Déploiement sur Vercel](#3-déploiement-sur-vercel)
4. [Configuration Google Analytics](#4-configuration-google-analytics)
5. [Soumission aux moteurs de recherche](#5-soumission-aux-moteurs-de-recherche)
6. [Tests finaux](#6-tests-finaux)

---

## 1. Images SEO à ajouter

### 📸 Images requises pour le SEO

Vous devez créer **3 images** dans le dossier `public/` :

#### A. `og-image.jpg` (Open Graph - Facebook/LinkedIn)
- **Dimensions :** 1200 x 630 pixels
- **Format :** JPG ou PNG
- **Contenu suggéré :**
  - Logo Clim'intérieure
  - Slogan : "Climatisation 100% Intérieure"
  - Visuels d'appartement élégant
  - Couleurs de la charte (cream, charcoal, copper, sage)

#### B. `twitter-card.jpg` (Twitter/X)
- **Dimensions :** 1200 x 600 pixels
- **Format :** JPG ou PNG
- **Contenu :** Identique ou similaire à og-image

#### C. `logo.png` (Logo entreprise)
- **Dimensions :** 512 x 512 pixels minimum
- **Format :** PNG avec fond transparent
- **Contenu :** Logo de Clim'intérieure

### 🎨 Outils pour créer ces images (GRATUIT)
- **Canva** : https://www.canva.com (modèles gratuits)
- **Figma** : https://www.figma.com (design professionnel)
- **Remove.bg** : Pour rendre le fond transparent du logo

### 📁 Placement des fichiers
Placez ces 3 fichiers directement dans :
```
clim-interieure-landing-page/public/
├── og-image.jpg          ← À ajouter
├── twitter-card.jpg      ← À ajouter
├── logo.png              ← À ajouter
├── robots.txt            ✅ Déjà fait
├── sitemap.xml           ✅ Déjà fait
└── vite.svg
```

---

## 2. Noms de domaine

### 🔍 ÉTAPE 1 : Vérifier la disponibilité

Le client veut 2 domaines. Vérifions les options :

**Option 1 : Domaines courts**
- `clim-interieure.fr` ou `.com`
- `clim-sans-unite-exterieure.fr` (très long, à éviter)

**Option 2 : Domaines alternatifs**
- `climinterieure.fr` (sans tiret)
- `clim-air-eau.fr`
- `clim-interieure-paris.fr`

**Sites pour vérifier la disponibilité :**
- **OVH** : https://www.ovhcloud.com/fr/domains/ (français, recommandé)
- **Gandi** : https://www.gandi.net/fr (français, éthique)
- **Namecheap** : https://www.namecheap.com (international, moins cher)
- **Google Domains** : https://domains.google (simple, mais fermera en 2024)

### 💰 Prix indicatifs
- `.fr` : 8-12€/an
- `.com` : 10-15€/an
- `.paris` : 50-60€/an (premium)

### 📝 ÉTAPE 2 : Acheter les domaines

#### Recommandation : OVH (Français, simple)

1. **Aller sur OVH** : https://www.ovhcloud.com/fr/domains/
2. **Rechercher** votre domaine (ex: `clim-interieure.fr`)
3. **Vérifier disponibilité** :
   - ✅ Disponible → Ajouter au panier
   - ❌ Pris → Essayer une variante

4. **Acheter le/les domaine(s)**
   - Durée : 1 an minimum (renouvelable)
   - Protection WHOIS : ✅ Recommandé (masque vos données personnelles)
   - DNS : Laisser par défaut

5. **Créer un compte OVH** si pas encore fait

### 🎯 Stratégie multi-domaines

**Si le client veut 2 domaines :**

**Option A : 1 principal + 1 redirection**
- Domaine principal : `clim-interieure.fr` (le site)
- Domaine secondaire : `clim-sans-unite-exterieure.fr` → redirige vers principal
- **Avantage :** Simple, pas de duplication de contenu (SEO)

**Option B : 2 domaines pointant vers le même site**
- Les 2 domaines affichent le même site
- **Inconvénient :** Problème SEO (duplicate content)
- **Solution :** Redirection 301 du secondaire vers le principal

**Recommandation :** Option A (1 principal + redirection)

---

## 3. Déploiement sur Vercel

### 📦 ÉTAPE 1 : Préparer le code

#### A. S'assurer que tout est commité
```bash
cd "C:\Users\cohen\Desktop\Ethan\tutoc\clim-interieure-landing-page"
git status
```

Si des fichiers ne sont pas commités :
```bash
git add .
git commit -m "feat: ajout SEO, RGPD et pages légales"
git push
```

#### B. Créer un compte Vercel (si pas déjà fait)
1. Aller sur : https://vercel.com
2. **Sign Up** avec GitHub (recommandé)
3. Autoriser Vercel à accéder à vos repos GitHub

### 🚀 ÉTAPE 2 : Déployer le projet

#### Option A : Via le Dashboard Vercel (FACILE)

1. **Se connecter à Vercel** : https://vercel.com/dashboard
2. **Cliquer sur "Add New Project"**
3. **Import Git Repository** :
   - Sélectionner votre repo GitHub `clim-interieure-landing-page`
   - Cliquer "Import"

4. **Configure Project** :
   - **Framework Preset** : Vite (détecté automatiquement)
   - **Root Directory** : `./` (par défaut)
   - **Build Command** : `npm run build` (par défaut)
   - **Output Directory** : `dist` (par défaut)
   - **Install Command** : `npm install` (par défaut)

5. **Environment Variables** (Variables d'environnement) :
   - Cliquer "Add Environment Variable"
   - Ajouter :
     ```
     VITE_GOOGLE_SCRIPT_URL = [URL du Google Apps Script]
     VITE_GA_MEASUREMENT_ID = G-VY43N7JLCZ
     ```
   - ⚠️ Ces variables sont dans votre `.env` local

6. **Cliquer "Deploy"** 🚀

#### Option B : Via CLI Vercel (AVANCÉ)
```bash
npm i -g vercel
vercel login
vercel
```

### ⏱️ Temps de déploiement
- 1ère fois : 2-5 minutes
- Déploiements suivants : 1-2 minutes

### 🔗 URL Vercel par défaut
Vercel va générer une URL type :
```
https://clim-interieure-landing-page.vercel.app
```

---

## 4. Connecter le nom de domaine à Vercel

### 🔗 ÉTAPE 1 : Ajouter le domaine dans Vercel

1. **Dans Vercel Dashboard** :
   - Aller dans votre projet
   - Cliquer sur **"Settings"** (en haut)
   - Cliquer sur **"Domains"** (menu gauche)

2. **Add Domain** :
   - Entrer votre domaine : `clim-interieure.fr`
   - Cliquer "Add"

3. **Vercel va vous donner des enregistrements DNS à configurer**

### ⚙️ ÉTAPE 2 : Configurer les DNS chez OVH

#### A. Se connecter à OVH
1. Aller sur : https://www.ovh.com/manager/
2. Se connecter avec votre compte
3. Cliquer sur **"Noms de domaine"** dans le menu gauche
4. Sélectionner votre domaine (`clim-interieure.fr`)

#### B. Accéder à la zone DNS
1. Cliquer sur l'onglet **"Zone DNS"**
2. Cliquer sur **"Modifier en mode textuel"** ou **"Ajouter une entrée"**

#### C. Ajouter les enregistrements Vercel

Vercel vous a donné 2 types d'enregistrements :

**Type 1 : Si Vercel demande un enregistrement A**
```
Type : A
Nom : @ (ou vide)
Valeur : 76.76.21.21 (IP de Vercel, exemple)
```

**Type 2 : Si Vercel demande un CNAME**
```
Type : CNAME
Nom : www
Valeur : cname.vercel-dns.com
```

**Type 3 : Pour le domaine racine (recommandé)**
```
Type : A
Nom : @
Valeur : 76.76.21.21

Type : CNAME
Nom : www
Valeur : cname.vercel-dns.com
```

#### D. Attendre la propagation DNS
- **Temps :** 5 minutes à 48h (généralement 30 min)
- **Vérifier** : https://dnschecker.org

### ✅ ÉTAPE 3 : Activer HTTPS (SSL)

Vercel active **automatiquement** le certificat SSL (HTTPS) !
- Gratuit via Let's Encrypt
- Renouvelé automatiquement
- Prêt en 5-10 minutes

---

## 5. Configuration Google Analytics

### 📊 ÉTAPE 1 : Créer une propriété GA4 (si pas déjà fait)

#### A. Créer un compte Google Analytics
1. Aller sur : https://analytics.google.com
2. Se connecter avec le compte Google du client
3. Cliquer sur **"Commencer la mesure"** ou **"Admin"** (en bas à gauche)

#### B. Créer une propriété
1. Cliquer sur **"Créer une propriété"**
2. **Nom de la propriété** : "Clim'intérieure"
3. **Fuseau horaire** : France (GMT+1)
4. **Devise** : EUR - Euro
5. Cliquer "Suivant"

#### C. Détails de l'entreprise
1. **Secteur d'activité** : Construction/Immobilier ou Services
2. **Taille** : Petite entreprise
3. **Objectifs** : Générer des prospects
4. Cliquer "Créer"

#### D. Accepter les conditions

#### E. Créer un flux de données
1. **Plateforme** : Web
2. **URL du site web** : `https://clim-interieure.fr`
3. **Nom du flux** : "Site Web Clim'intérieure"
4. Cliquer "Créer un flux"

#### F. Récupérer l'ID de mesure
- Vous verrez un **ID de mesure** type : `G-XXXXXXXXXX`
- **C'est déjà fait !** Votre `.env` contient : `G-VY43N7JLCZ`

### 🔧 ÉTAPE 2 : Vérifier la configuration

#### A. L'ID est déjà dans le code
Fichier `.env` :
```
VITE_GA_MEASUREMENT_ID=G-VY43N7JLCZ
```

Fichier `src/utils/analytics-init.ts` :
```typescript
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
```

#### B. Vérifier dans Vercel
1. **Vercel Dashboard** → Votre projet
2. **Settings** → **Environment Variables**
3. Vérifier que `VITE_GA_MEASUREMENT_ID` est bien configuré

### ✅ ÉTAPE 3 : Tester Google Analytics

1. **Déployer le site sur Vercel**
2. **Ouvrir le site** dans un navigateur
3. **Accepter les cookies** via la bannière
4. **Ouvrir Google Analytics** : https://analytics.google.com
5. **Aller dans "Rapports" → "Temps réel"**
6. **Vous devriez voir 1 utilisateur actif** (vous)

### 🎯 ÉTAPE 4 : Configurer les objectifs (conversions)

#### A. Créer un événement de conversion
1. **Google Analytics** → **Admin**
2. **Propriété** → **Événements**
3. Cliquer **"Créer un événement"**
4. **Nom de l'événement** : `generate_lead`
5. **Marquer comme conversion** : ✅ Oui

Cet événement est déjà implémenté dans :
```typescript
// src/utils/analytics.ts
trackLead('quote_request', { ... });
```

---

## 6. Redirection du domaine secondaire (optionnel)

Si le client a acheté **2 domaines** :

### Option 1 : Redirection via Vercel

1. **Ajouter le 2ème domaine dans Vercel**
   - Settings → Domains
   - Add : `clim-sans-unite-exterieure.fr`

2. **Configurer la redirection**
   - Vercel → Settings → Domains
   - Cliquer sur le domaine secondaire
   - **Redirect to** : `clim-interieure.fr`
   - **Type** : Permanent (301)

### Option 2 : Redirection via OVH

1. **OVH Manager** → Domaine secondaire
2. **Redirection** → **Ajouter une redirection**
3. **Type** : Redirection permanente (301)
4. **Cible** : `https://clim-interieure.fr`

---

## 7. Soumission aux moteurs de recherche

### 🔍 Google Search Console

#### A. Créer un compte
1. Aller sur : https://search.google.com/search-console
2. Se connecter avec le compte Google du client
3. Cliquer **"Ajouter une propriété"**

#### B. Ajouter le domaine
1. **Type de propriété** : Domaine (recommandé)
2. **Domaine** : `clim-interieure.fr`
3. Cliquer "Continuer"

#### C. Vérifier la propriété
**Méthode 1 : Enregistrement DNS (Recommandé)**
1. Google vous donne un enregistrement TXT
2. Aller dans **OVH → Zone DNS**
3. Ajouter l'enregistrement TXT fourni par Google
4. Attendre 5-30 minutes
5. Cliquer "Vérifier" dans Google Search Console

**Méthode 2 : Via Vercel (Plus simple)**
1. Vercel vérifie automatiquement
2. Ou ajouter balise meta dans `index.html`

#### D. Soumettre le sitemap
1. **Google Search Console** → **Sitemaps** (menu gauche)
2. **Ajouter un sitemap** : `https://clim-interieure.fr/sitemap.xml`
3. Cliquer "Envoyer"

#### E. Demander l'indexation
1. **Inspection d'URL** (menu gauche)
2. Entrer : `https://clim-interieure.fr/`
3. Cliquer **"Demander une indexation"**

### 🦆 Bing Webmaster Tools (Optionnel)

1. Aller sur : https://www.bing.com/webmasters
2. Se connecter avec Microsoft
3. Ajouter le site
4. Soumettre le sitemap : `https://clim-interieure.fr/sitemap.xml`

---

## 8. Tests finaux après déploiement

### ✅ Checklist de validation

#### A. Fonctionnalités
- [ ] Site accessible sur `https://clim-interieure.fr`
- [ ] HTTPS activé (cadenas vert)
- [ ] Toutes les pages chargent (/, /mentions-legales, etc.)
- [ ] Navigation fonctionne
- [ ] Formulaire fonctionne
- [ ] Bannière cookies apparaît
- [ ] Accepter/Refuser cookies fonctionne

#### B. SEO
- [ ] **Test Open Graph** : https://developers.facebook.com/tools/debug/
  - Entrer `https://clim-interieure.fr`
  - Vérifier que l'image og-image.jpg s'affiche
- [ ] **Test Twitter Card** : https://cards-dev.twitter.com/validator
  - Entrer `https://clim-interieure.fr`
  - Vérifier que l'image twitter-card.jpg s'affiche
- [ ] **Test données structurées** : https://search.google.com/test/rich-results
  - Entrer `https://clim-interieure.fr`
  - Vérifier les 5 schémas JSON-LD (Organization, LocalBusiness, etc.)
- [ ] **robots.txt** : `https://clim-interieure.fr/robots.txt`
- [ ] **sitemap.xml** : `https://clim-interieure.fr/sitemap.xml`

#### C. Analytics
- [ ] Google Analytics temps réel fonctionne
- [ ] Événement `generate_lead` se déclenche quand formulaire soumis
- [ ] Tracking conditionnel au consentement

#### D. Mobile
- [ ] Test mobile : https://search.google.com/test/mobile-friendly
- [ ] Navigation mobile fluide
- [ ] Menu burger fonctionne
- [ ] Formulaire utilisable sur mobile

#### E. Performance
- [ ] Test Lighthouse : Chrome DevTools → Lighthouse
  - **Performance** : >90
  - **Accessibility** : >90
  - **Best Practices** : >90
  - **SEO** : >95

---

## 9. Mise à jour après réception des infos client

### 📝 Quand le client vous donne ses informations légales

#### A. Mettre à jour les pages légales
1. **Ouvrir les fichiers** :
   - `src/pages/MentionsLegales.tsx`
   - `src/pages/PolitiqueConfidentialite.tsx`
   - `src/pages/ConditionsGenerales.tsx`

2. **Remplacer tous les `[À COMPLÉTER]`** par les vraies infos

3. **Mettre à jour les URLs** :
   - Dans `index.html` : remplacer `https://www.climinterieure.fr/` par la vraie URL
   - Dans `public/sitemap.xml` : remplacer par la vraie URL
   - Dans `public/robots.txt` : remplacer par la vraie URL
   - Dans `src/components/SEO/StructuredData.tsx` : remplacer par la vraie URL

#### B. Déployer les changements
```bash
git add .
git commit -m "feat: ajout informations légales complètes"
git push
```

Vercel va automatiquement re-déployer le site (1-2 minutes).

---

## 10. Récapitulatif de la procédure complète

### 📅 Timeline recommandée

#### Jour 1 : Préparation
- [ ] Vérifier disponibilité des noms de domaine
- [ ] Créer les 3 images SEO (og-image, twitter-card, logo)
- [ ] Acheter le(s) domaine(s)

#### Jour 2 : Déploiement
- [ ] Déployer sur Vercel
- [ ] Connecter le domaine principal
- [ ] Configurer DNS chez OVH
- [ ] Vérifier HTTPS activé

#### Jour 3 : Configuration
- [ ] Configurer Google Analytics (si pas déjà fait)
- [ ] Soumettre sitemap à Google Search Console
- [ ] Configurer redirection du domaine secondaire (si applicable)

#### Jour 4 : Tests
- [ ] Tests complets (toutes les checklist)
- [ ] Validation Open Graph, Twitter Card, JSON-LD
- [ ] Test mobile et performance

#### Jour 5 : Réception infos client
- [ ] Compléter les pages légales
- [ ] Re-déployer
- [ ] Tests finaux

---

## 📞 Support & Ressources

### Documentation officielle
- **Vercel** : https://vercel.com/docs
- **React Router** : https://reactrouter.com
- **Google Analytics** : https://support.google.com/analytics
- **Google Search Console** : https://support.google.com/webmasters

### Outils de test
- **Open Graph** : https://developers.facebook.com/tools/debug/
- **Twitter Card** : https://cards-dev.twitter.com/validator
- **Rich Results** : https://search.google.com/test/rich-results
- **Mobile-Friendly** : https://search.google.com/test/mobile-friendly
- **PageSpeed Insights** : https://pagespeed.web.dev
- **DNS Checker** : https://dnschecker.org

### En cas de problème

**Vercel ne build pas :**
- Vérifier les variables d'environnement
- Vérifier les logs de build dans Vercel Dashboard

**DNS ne se propage pas :**
- Attendre jusqu'à 48h
- Vérifier avec dnschecker.org
- Vider le cache DNS : `ipconfig /flushdns` (Windows)

**Google Analytics ne fonctionne pas :**
- Vérifier que vous avez accepté les cookies
- Vérifier l'ID de mesure dans Vercel Environment Variables
- Regarder la console du navigateur (F12) pour les erreurs

---

**Document créé le :** 22 décembre 2025
**Auteur :** Assistant Claude
**Statut :** ✅ Guide complet prêt à l'emploi
