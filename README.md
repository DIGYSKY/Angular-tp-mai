# TP Angular - Application Multi-Fonctionnalités

Cette application Angular est un projet complet qui intègre plusieurs fonctionnalités intéressantes, notamment l'authentification, l'API Rick & Morty, et l'API NASA.

## Fonctionnalités

- **Authentification**
  - Système de login/logout
  - Protection des routes
  - Gestion des tokens JWT
  - Utilisateurs par défaut :
    - Username: `admin` / Password: `admin`
    - Username: `user` / Password: `user`

- **Rick & Morty**
  - Liste des personnages
  - Pagination
  - Détails des personnages
  - Interface responsive

- **NASA APOD (Astronomy Picture of the Day)**
  - Image du jour
  - Sélection par date
  - Support des images et vidéos
  - Explications détaillées
  - Liens vers les versions haute résolution

## Prérequis

- Node.js (version recommandée : 18.x ou supérieure)
- npm ou pnpm
- Une clé API NASA (obtenue sur [api.nasa.gov](https://api.nasa.gov))

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd TP-angular
```

2. Installer les dépendances :
```bash
npm install
# ou
pnpm install
```

3. Configurer la clé API NASA :
   - Ouvrir `src/app/services/nasa.service.ts`
   - Remplacer `YOUR_API_KEY` par votre clé API NASA

4. Lancer l'application :
```bash
ng serve
```

5. Ouvrir votre navigateur à l'adresse `http://localhost:4200`

## Structure du Projet

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── home/
│   │   ├── login/
│   │   ├── nasa/
│   │   └── rick-morty/
│   ├── core/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── services/
│   ├── pipes/
│   └── services/
└── environments/
```

## Routes Protégées

Les routes suivantes nécessitent une authentification :
- `/rick-morty`
- `/nasa`

## Développement

Pour générer un nouveau composant :
```bash
ng generate component components/nom-du-composant
```

Pour exécuter les tests :
```bash
ng test
```

## Technologies Utilisées

- Angular 19
- RxJS
- Angular Router
- Angular Forms
- Angular HTTP Client

## Licence

Ce projet est sous licence MIT.
