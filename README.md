# Flow Food Truck - Site Web

Site web pour Flow Food Truck, inspiré du site d'Oli's Food (https://olisfood.ch/).

## Fonctionnalités

- Design moderne et responsive
- Pages pour présenter les différents services
- Section "Plat de la semaine"
- Présentation du menu du Food Truck
- Page d'actualités
- Formulaire de contact

## Technologies utilisées

- Next.js - Framework React moderne
- TailwindCSS - Framework CSS utilitaire
- TypeScript - Typage statique

## Structure du projet

```
flow-website/
├── public/               # Fichiers statiques (images, etc.)
├── src/
│   ├── app/              # Pages du site (App Router de Next.js)
│   │   ├── page.tsx      # Page d'accueil
│   │   ├── prestations/  # Section des prestations
│   │   ├── menu/         # Menu du food truck
│   │   ├── plat-semaine/ # Section du plat de la semaine
│   │   ├── actualites/   # Actualités
│   │   └── contact/      # Page de contact
│   └── components/       # Composants réutilisables
│       ├── Header.tsx    # En-tête du site
│       └── Footer.tsx    # Pied de page
└── ...
```

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-compte/flow-website.git
cd flow-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Déploiement

Le site peut être déployé sur Vercel, Netlify ou tout autre service supportant Next.js.

```bash
# Construire pour la production
npm run build

# Démarrer en mode production
npm start
```

## Crédits

- Design inspiré par [Oli's Food](https://olisfood.ch/)
- Images : à remplacer par vos propres images #   f l o w w e b  
 