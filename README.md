# Projet Node.js avec Vite (Vue.js) et Backend ExpressJs

## Prérequis

Avant de commencer, assurez-vous d'avoir une mongodb paramétré et editer la var d'env correspondante

## Structure du projet

Le projet est divisé en deux parties principales :

1. **Frontend** : Utilise Vite avec Vue.js pour le développement et la construction.
2. **Backend** : Un serveur Node.js + Express pour gérer les requêtes et servir les API.

## Installation

### Étape 1 : Cloner le dépôt

Clonez ce projet sur votre machine locale :

```bash
git clone https://github.com/Margul7803/renf-js-0
cd renf-js
```

### Étape 2 : Installation des dépendances

Installez les dépendances pour le backend (dans le répertoire racine) :

```bash
npm install
```

Ensuite, installez les dépendances pour le frontend :

```bash
cd src/frontend
npm install
```

## Commandes

### Frontend

Le frontend utilise Vite pour Vue.js. Voici les commandes disponibles pour le frontend :

1. **Construire le frontend pour la production** :

    Exécutez cette commande dans le répertoire `src/frontend` pour construire le projet :

    ```bash
    cd src/frontend
    npm run build
    ```

    Cette commande génère les fichiers de production dans le répertoire `dist`.

2. **Prévisualiser la construction du frontend** :

    Après avoir construit le frontend, vous pouvez lancer un serveur local pour prévisualiser le build en exécutant :

    ```bash
    npm run preview
    ```

    Cela démarre un serveur local qui sert les fichiers générés par le build.

### Backend

Le backend est géré à partir du répertoire racine. Voici la commande pour lancer le serveur backend :

1. **Lancer le backend** :

    Exécutez cette commande dans le répertoire racine du projet pour démarrer le serveur backend :

    ```bash
    npm run start-back
    ```

    Cette commande démarre le serveur Node.js qui gère les requêtes backend.