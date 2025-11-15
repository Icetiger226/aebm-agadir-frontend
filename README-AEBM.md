# 🇧🇫 Plateforme AEBM Agadir - Frontend

## 📋 Description

Frontend de la plateforme web de l'**Association des Étudiants et Stagiaires Burkinabè au Maroc - Section Agadir**.

Cette plateforme moderne permet de gérer la communication, les événements, la trésorerie et l'entraide au sein de la communauté burkinabè d'Agadir.

## 🎯 Fonctionnalités Implémentées

### ✅ Pages Publiques
- **🏠 Accueil** : Page d'accueil avec présentation, statistiques animées, services et événements
- **👥 Qui sommes-nous** : Histoire, mission, valeurs et objectifs de l'AEBM
- **📰 Actualités** : Système d'actualités avec filtres par catégorie et recherche
- **📅 Événements** : Gestion des événements à venir et passés avec système d'inscription
- **💬 Forum** : Forum communautaire avec catégories (études, logement, emploi, transport)
- **🗺️ Guide de vie à Agadir** : Informations pratiques, annuaire des lieux utiles, conseils pour nouveaux arrivants

### 🔐 Pages Authentification
- **🔑 Connexion** : Page de connexion avec validation de formulaire
- **📝 Inscription** : Formulaire d'inscription complet (infos personnelles, académiques, sécurité)

### 👤 Pages Membres (Authentifiés)
- **👤 Profil** : Profil utilisateur avec modification, statistiques d'activité
- **📖 Annuaire** : Annuaire sécurisé des membres avec recherche et filtres
- **💰 Trésorerie** : Paiement des cotisations, historique des transactions, vue d'ensemble budgétaire

### 🔧 Page Administration
- **⚙️ Tableau de bord Admin** : 
  - Vue d'ensemble avec statistiques
  - Gestion des membres
  - Gestion des événements
  - Gestion des actualités
  - Gestion de la trésorerie
  - Paramètres système

## 🛠️ Technologies Utilisées

- **React 19.2.0** - Framework JavaScript
- **React Router DOM** - Navigation et routing
- **Lucide React** - Bibliothèque d'icônes modernes
- **Tailwind CSS** - Framework CSS (via classes utilitaires)

## 📁 Structure du Projet

```
aebmfrontend/
├── public/              # Fichiers statiques
├── src/
│   ├── layouts/         # Composants de mise en page
│   │   └── MainLayout.js
│   ├── pages/           # Pages de l'application
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── News.js
│   │   ├── Events.js
│   │   ├── Forum.js
│   │   ├── Guide.js
│   │   ├── Profile.js
│   │   ├── Directory.js
│   │   ├── Treasury.js
│   │   └── AdminDashboard.js
│   ├── App.js           # Composant principal avec routes
│   ├── App.css          # Styles globaux
│   └── index.js         # Point d'entrée
├── package.json
└── README-AEBM.md
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Lancement en mode développement
```bash
npm start
```

L'application sera accessible sur `http://localhost:3000` (ou un autre port si 3000 est occupé)

### Build pour la production
```bash
npm run build
```

## 🎨 Design et UX

### Palette de couleurs
- **Rouge** (#DC2626) : Couleur principale du drapeau burkinabè
- **Vert** (#16A34A) : Couleur secondaire du drapeau
- **Jaune** (#FBBF24) : Accent (étoile du drapeau)
- **Gris** : Nuances pour le fond et les éléments neutres

### Caractéristiques UX
- ✅ Design moderne et épuré
- ✅ Navigation intuitive
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Animations fluides
- ✅ Feedback visuel pour toutes les actions
- ✅ Accessibilité (contraste, tailles de police)

## 📱 Pages et Routes

| Route | Page | Accès |
|-------|------|-------|
| `/` | Accueil | Public |
| `/about` | Qui sommes-nous | Public |
| `/news` | Actualités | Public |
| `/events` | Événements | Public |
| `/forum` | Forum | Public |
| `/guide` | Guide de vie | Public |
| `/login` | Connexion | Public |
| `/register` | Inscription | Public |
| `/profile` | Mon Profil | Membre |
| `/directory` | Annuaire | Membre |
| `/treasury` | Trésorerie | Membre |
| `/admin` | Administration | Admin |

## 🔒 Sécurité et Confidentialité

- **Authentification JWT** (à implémenter avec le backend)
- **Contrôle d'accès** par rôles (membre, admin, trésorier)
- **Confidentialité** : Les membres contrôlent la visibilité de leurs informations
- **Validation** des formulaires côté client
- **Protection** contre les injections XSS

## 🌐 Intégration Backend (À venir)

Le frontend est prêt pour être connecté à un backend Node.js/Express avec :
- API REST pour toutes les opérations CRUD
- Authentification JWT
- Base de données MongoDB
- Upload de fichiers (photos, documents)
- Système de notifications
- Intégration paiement (Orange Money, CMI, PayDunya)

## 📊 Fonctionnalités Avancées (Futures)

- [ ] Système de messagerie interne
- [ ] Notifications push
- [ ] Carte interactive avec Google Maps
- [ ] Calendrier interactif
- [ ] Galerie photos des événements
- [ ] Export des rapports financiers en PDF
- [ ] Système de badges et récompenses
- [ ] Multi-langues (Français, Anglais, Mooré)

## 👥 Contribution

Ce projet a été développé pour l'AEBM Agadir dans le cadre de la modernisation de la gestion associative.

## 📝 Notes de Développement

### État actuel
- ✅ Toutes les pages principales sont créées
- ✅ Navigation fonctionnelle avec React Router
- ✅ Design responsive et moderne
- ✅ Composants réutilisables
- ⏳ Données mockées (à remplacer par appels API)
- ⏳ Backend à développer

### Prochaines étapes
1. Développer le backend (Node.js + Express + MongoDB)
2. Connecter les appels API
3. Implémenter l'authentification complète
4. Ajouter le système de paiement
5. Tests unitaires et d'intégration
6. Déploiement en production

## 📞 Contact

Pour toute question concernant ce projet :
- Email : contact@aebm-agadir.ma
- WhatsApp : [Groupe AEBM]

---

🇧🇫 **Développé avec ANTONY pour la communauté burkinabè d'Agadir**
