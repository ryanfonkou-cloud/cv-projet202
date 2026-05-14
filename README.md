# CV-PROJET202

## Présentation du projet

CV-PROJET202 est une application web de gestion de CV développée sans framework frontend.

Le projet permet à un utilisateur de :

* créer un CV,
* modifier un CV,
* supprimer un CV,
* consulter un CV,
* ajouter des médias (photo, vidéo, audio),
* sauvegarder toutes les informations dans une base de données SQLite.

Le projet utilise :

* HTML
* CSS
* TypeScript
* Node.js natif
* SQLite

L’objectif principal du projet est de comprendre le fonctionnement complet d’une application web moderne sans dépendre de frameworks comme React ou Express.

---

# Objectifs pédagogiques

Le projet a été conçu pour apprendre :

* l’architecture frontend/backend,
* le fonctionnement d’un serveur HTTP,
* la communication client ↔ serveur,
* le CRUD,
* la gestion des fichiers,
* l’utilisation de SQLite,
* l’organisation professionnelle d’un projet,
* la compilation TypeScript.

---

# Technologies utilisées

## Frontend

### HTML

Utilisé pour créer la structure des pages :

* formulaires,
* sections,
* cartes CV,
* navigation.

### CSS

Utilisé pour :

* le design,
* le responsive,
* les animations,
* l’apparence générale du site.

### TypeScript

Utilisé pour la logique frontend.

TypeScript permet :

* un code plus propre,
* la vérification des types,
* la réduction des erreurs.

Le code TypeScript est ensuite compilé en JavaScript.

---

## Backend

### Node.js natif

Le backend utilise le module HTTP natif de Node.js.

Le serveur permet :

* de recevoir les requêtes,
* d’envoyer les réponses,
* de communiquer avec SQLite,
* de gérer les uploads,
* de gérer le CRUD.

Aucun framework backend n’est utilisé.

---

## Base de données

### SQLite

Le projet utilise SQLite pour stocker les données.

Le fichier principal de la base est :

```bash
index.db
```

La base de données contient :

* les informations du CV,
* les chemins des médias,
* les données utilisateur.

---

# Fonctionnalités principales

## CRUD complet

### CREATE

Créer un CV.

### READ

Afficher les informations d’un CV.

### UPDATE

Modifier un CV existant.

### DELETE

Supprimer un CV.

---

# Gestion des médias

L’utilisateur peut envoyer :

* une photo,
* une vidéo,
* un audio.

Les fichiers sont sauvegardés dans :

```bash
uploads/
```

Puis les chemins des fichiers sont enregistrés dans SQLite.

---

# Architecture du projet

```bash
cv-project/
│
├── public/
│   ├── css/
│   ├── ts/
│   ├── js/
│   ├── pages/
│   └── assets/
│
├── uploads/
│   ├── images/
│   ├── videos/
│   └── audios/
│
├── database/
│   └── index.db
│
├── src/
│   └── server.ts
│
├── dist/
│   └── server.js
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# Explication des dossiers

## public/

Contient le frontend du projet.

### css/

Fichiers CSS.

### ts/

Code TypeScript frontend.

### js/

Code JavaScript compilé.

### pages/

Pages HTML du projet.

### assets/

Images, icônes et ressources statiques.

---

## uploads/

Contient les fichiers envoyés par les utilisateurs.

### images/

Photos de profil.

### videos/

Vidéos de présentation.

### audios/

Audios de présentation.

---

## database/

Contient la base SQLite.

---

## src/

Contient le code source TypeScript du backend.

---

## dist/

Contient les fichiers compilés JavaScript.

---

# Installation du projet

## 1. Cloner le projet

```bash
git clone <url-du-projet>
```

---

## 2. Entrer dans le dossier

```bash
cd cv-projet202
```

---

## 3. Installer les dépendances

```bash
npm install
```

---

## 4. Compiler TypeScript

```bash
npx tsc
```

---

## 5. Lancer le serveur

```bash
node dist/server.js
```

---

# Structure du backend

Le backend fonctionne avec le module HTTP natif de Node.js.

Le serveur :

* écoute les requêtes,
* reçoit les données du frontend,
* interagit avec SQLite,
* renvoie les réponses.

---

# Communication du projet

```text
Navigateur
   ↓
Frontend HTML/CSS/TS
   ↓
Serveur Node.js
   ↓
SQLite
```

---

# Fonctionnement général

## Création d’un CV

1. L’utilisateur remplit le formulaire.
2. Le frontend envoie les données au serveur.
3. Le serveur sauvegarde les données dans SQLite.
4. Les médias sont enregistrés dans uploads/.
5. Les informations sont affichées dynamiquement.

---

# Convention du projet

## TypeScript source

Tous les fichiers TypeScript source doivent être placés dans :

```bash
src/
```

---

## Fichiers compilés

Les fichiers JavaScript générés automatiquement doivent être placés dans :

```bash
dist/
```

---

# Bonnes pratiques

* Ne jamais modifier directement les fichiers dans dist/.
* Toujours modifier les fichiers .ts.
* Garder une structure claire.
* Séparer frontend et backend.
* Utiliser des noms explicites.

---

# Évolutions futures possibles

* Dashboard administrateur
* Authentification utilisateur
* Génération PDF du CV
* Responsive mobile avancé
* Mode sombre
* Animations avancées
* Templates multiples de CV
* Recherche et filtrage

---

# Auteur

Projet développé dans un objectif pédagogique afin d’apprendre le développement web fullstack sans framework frontend.
