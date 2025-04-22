# 📌 Navigation
- [Cahier des charges pour Blogo](#cahier-des-charges-pour-blogo)
  - [Presentation du projet](#presentation-du-projet)
  - [Problèmes à résoudre / besoins exprimés](#problèmes-à-résoudre--besoins-exprimés)
  - [Utilisateurs cibles](#utilisateurs-cibles)
  - [Fonctionnalités attendues](#fonctionnalités-attendues)
  - [Contraintes techniques](#contraintes-techniques)

# Cahier des charges pour Blogo
## Presentation du projet
### Brève description
**Blogo** est une application web qui permet aux utilisateurs de créer des blogs personnels, de publier des articles, et de consulter les publications des autres membres.
### Objectif principal de l’application
Permettre aux utilisateurs de publier des articles, d’interagir avec d’autres membres via des commentaires et des likes, et de gérer leur profil au sein d’une plateforme communautaire.
## Problèmes à résoudre / besoins exprimés
### Quelles difficultés ou besoins l’application vient résoudre ?
Les utilisateurs manquent d’un espace simple pour partager leurs idées de façon structurée. Blogo comble ce besoin avec une plateforme accessible dédiée à la publication d’articles.
### Que recherche l’utilisateur final ?
L’utilisateur final souhaite un outil lui permettant de :
- Rédiger et publier facilement des articles
- Être lu et recevoir des réactions (likes, commentaires)
- Créer un espace personnalisé et gérable à tout moment
- Rejoindre une communauté autour du contenu écrit
## Utilisateurs cibles
### Liste des types d’utilisateurs
- Utilisateurs enregistrés
- Administrateurs
### Description brève de chacun
- **Utilisateurs enregistrés** : Personnes ayant un compte sur la plateforme, pouvant publier des articles, commenter, aimer et gérer leur profil.
- **Administrateurs** : Utilisateurs ayant des privilèges de gestion pour modérer le contenu, gérer les utilisateurs et superviser la plateforme.
## Fonctionnalités attendues
### Utilisateurs enregistrés
- Créer un compte et se connecter
- Créer, modifier et supprimer des articles
- Liker et commenter les articles des autres
- Gérer son profil (modifier informations personnelles, photo de profil)
- Consulter l’historique de ses articles et de ses interactions
### Administrateurs
- Gérer les utilisateurs (ajouter, supprimer, modifier les rôles)
- Modérer les articles et les commentaires
- Gérer les paramètres de la plateforme (paramètres généraux, thème)
- Accéder à des statistiques d’utilisation (nombre d’articles, utilisateurs actifs, etc.)
## Contraintes techniques
### Technologies imposées
- **Backend:** Laravel
- **Frontend:** ReactJs
- **Database:** MySQL
### Base de données prévue
Utilisation d’une base de données relationnelle MySQL pour stocker les utilisateurs, articles, commentaires et likes.
### Hebergement d'application
L’application sera hébergée sur **Hostinger**, selon les besoins de performance et de gestion des coûts.
### Mobilité / Responsiveness
L'application devra être responsive, c'est-à-dire accessible et utilisable de manière optimale sur PC et mobile (smartphones et tablettes).
