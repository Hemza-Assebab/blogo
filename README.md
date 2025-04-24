# 📌 Navigation
- [Cahier des charges pour Blogo](#cahier-des-charges-pour-blogo)
  - [Presentation du projet](#presentation-du-projet)
  - [Problèmes à résoudre / besoins exprimés](#problèmes-à-résoudre--besoins-exprimés)
  - [Utilisateurs cibles](#utilisateurs-cibles)
  - [Fonctionnalités attendues](#fonctionnalités-attendues)
  - [Contraintes techniques](#contraintes-techniques)
- [Tableau des utilisateurs et rôles](#tableau-des-utilisateurs-et-rôles)

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
# Tableau des utilisateurs et rôles
| Type d'utilisateur     | Actions autorisées                                                                                      | Lien avec les futures routes protégées / autorisations                                              |
|------------------------|----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Utilisateur enregistré | Créer, modifier et supprimer des articles, liker et commenter des articles, gérer son profil.            | Routes protégées par middleware `auth` et `can` (via policies) pour accès aux articles personnels et modifications de profil. |
| Administrateur         | Gérer les utilisateurs (ajouter, supprimer, modifier), modérer le contenu, consulter des statistiques d'utilisation. | Routes protégées par middleware `auth` et `can` pour les actions de gestion (ex. `admin` middleware). |
# Liste des fonctionnalités attendues
## Présentation générale
L’application Blogo a pour but de permettre aux utilisateurs de créer, publier et gérer des articles de blog au sein d’une communauté interactive.

Elle s’adresse principalement à deux types d’utilisateurs : les utilisateurs enregistrés qui créent du contenu, et les administrateurs qui supervisent la plateforme.
## Liste des fonctionnalités par type d’utilisateur
### Utilisateur enregistré:
- Créer un compte et se connecter
- Rédiger un article
- Modifier ou supprimer ses articles
- Commenter des articles
- Liker des publications
- Gérer son profil (photo, infos personnelles)
- Consulter l’historique de ses publications et interactions
### Administrateur:
- Gérer les utilisateurs (ajouter, modifier, supprimer)
- Attribuer ou modifier des rôles
- Modérer les articles et les commentaires
- Gérer les paramètres de la plateforme
- Consulter les statistiques (nombre d’articles, utilisateurs actifs…)
## User Stories
- En tant qu’utilisateur, je veux rédiger un article, afin de partager mes idées avec la communauté.
- En tant qu’utilisateur, je veux commenter les articles des autres, afin de échanger des opinions ou poser des questions.
- En tant qu’utilisateur, je veux liker des articles, afin de exprimer mon appréciation pour certains contenus.
- En tant qu’administrateur, je veux supprimer un article inapproprié, afin de garantir le respect des règles de la plateforme.
- En tant qu’administrateur, je veux consulter les statistiques d’utilisation, afin de suivre l’activité et améliorer la plateforme.
- En tant qu’administrateur, je veux modifier les rôles des utilisateurs, afin de attribuer les bons droits à chaque membre.
## Priorisation des fonctionnalités
### Essentielles
- Créer un compte et se connecter
- Rédiger, modifier et supprimer un article
- Lire les articles publiés
- Liker un article
- Commenter un article
- Gérer son profil (infos de base, mot de passe)
- Gérer les utilisateurs (pour les administrateurs)
- Supprimer/modérer les articles ou commentaires (admin)
### Secondaires
- Ajouter une photo de profil
- Consulter l’historique de ses articles et interactions
- Modifier les rôles des utilisateurs (admin)
- Voir les profils d’autres membres
- Recevoir des notifications (nouveau commentaire, like)
### Bonus
- Statistiques d’utilisation (admin)
- Système de tags ou catégories pour les articles
- Recherche avancée (par auteur, mot-clé, date)
- Mode sombre / clair
- Réseaux sociaux intégrés pour partage d’articles
