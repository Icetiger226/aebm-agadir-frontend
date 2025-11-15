# Guide de déploiement sur Netlify

## 📋 Prérequis
- Compte GitHub
- Compte Netlify (gratuit)
- Git installé sur votre machine

## 🚀 Étapes de déploiement

### 1. Initialiser Git (si pas déjà fait)

```bash
cd aebmfrontend
git init
```

### 2. Ajouter tous les fichiers

```bash
git add .
```

### 3. Faire le premier commit

```bash
git commit -m "Initial commit: AEBM Agadir frontend"
```

### 4. Créer un repository sur GitHub

1. Allez sur https://github.com
2. Cliquez sur "New repository"
3. Nommez-le (ex: `aebm-agadir-frontend`)
4. Ne cochez PAS "Initialize with README"
5. Cliquez sur "Create repository"

### 5. Lier votre repo local à GitHub

Remplacez `VOTRE_USERNAME` et `NOM_DU_REPO` par vos valeurs :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/NOM_DU_REPO.git
git branch -M main
git push -u origin main
```

**Exemple :**
```bash
git remote add origin https://github.com/antony/aebm-agadir-frontend.git
git branch -M main
git push -u origin main
```

### 6. Déployer sur Netlify

#### Option A : Via l'interface Netlify (Recommandé)

1. Allez sur https://app.netlify.com
2. Cliquez sur "Add new site" → "Import an existing project"
3. Choisissez "Deploy with GitHub"
4. Autorisez Netlify à accéder à votre GitHub
5. Sélectionnez votre repository `aebm-agadir-frontend`
6. Configurez les paramètres de build :
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
7. Cliquez sur "Deploy site"

#### Option B : Via Netlify CLI

```bash
# Installer Netlify CLI globalement
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Initialiser le site
netlify init

# Déployer
netlify deploy --prod
```

### 7. Configuration Netlify (si nécessaire)

Si le build échoue, créez un fichier `netlify.toml` à la racine :

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🔄 Mises à jour futures

Pour mettre à jour le site après des modifications :

```bash
git add .
git commit -m "Description des modifications"
git push origin main
```

Netlify redéploiera automatiquement !

## 📝 Notes importantes

- Le site sera accessible sur une URL comme : `https://votre-site.netlify.app`
- Vous pouvez personnaliser le nom dans les paramètres Netlify
- Le déploiement est automatique à chaque push sur `main`

