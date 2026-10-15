# <div align="center">

<!-- PROJECT BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,11,21,31&height=220&section=header&text=TaskFlow%20&%20Portfolio&fontSize=44&fontColor=ffffff&animation=fadeIn&desc=Portfolio%20Collaboratif%20Multi-Pages%20%7C%20Abdoul%20Karim%20TRAORÉ&descFontSize=18&descAlignY=62" width="100%" alt="TaskFlow Portfolio Banner" />

<!-- BADGES SHIELDS.IO -->
<p align="center">
  <img src="https://img.shields.io/badge/Version-2.5.0-6366f1?style=for-the-badge&logo=git&logoColor=white" alt="Version 2.5.0" />
  <img src="https://img.shields.io/badge/HTML5-S%C3%A9mantique-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-Custom_Tokens_%26_Dark_Mode-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-Vanilla_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Git-Multi--Branches_Agile-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git Flow" />
  <img src="https://img.shields.io/badge/Statut-En_Production-success?style=for-the-badge" alt="Production" />
</p>

<p align="center">
  <a href="#-présentation">📖 Présentation</a> •
  <a href="#-pages-et-architecture">📁 Pages & Architecture</a> •
  <a href="#-stack-technique">🛠️ Stack Technique</a> •
  <a href="#-collaboration--branches-git">🌿 Collaboration Git</a> •
  <a href="#-démarrage-local">🚀 Démarrage Rapide</a> •
  <a href="#-auteurs">👥 Auteurs</a>
</p>

---

</div>

## 📖 Présentation

Bienvenue sur le dépôt officiel du **Portfolio & Plateforme Collaborative TaskFlow** d'**Abdoul Karim TRAORÉ**, étudiant en L3 Ingénierie Logicielle & Données (UIE) et candidat au **Master ISD de l'Université Paris-Saclay**.

Ce projet combine :
1. Un **portfolio web complet, ultra-moderne et interactif** mettant en avant son CV, ses projets d'ingénierie (IA, Web, Mobile), sa formation et ses compétences.
2. Une **plateforme collaborative** intégrant les contributions de collaborateurs au sein d'une architecture Git multi-branches rigoureuse.
3. Une **expérience utilisateur de haut niveau** avec bascule thématique (Dark / Light mode), design épuré en glassmorphism, orbes lumineuses dynamiques et conformité responsive totale.

---

## 📁 Pages et Architecture

Le projet adopte une séparation stricte et modulaire : **HTML à la racine**, styles dans `css/`, et scripts dans `js/`.

```
portfolio/
├── 📄 index.html          # Accueil principal, CV interactif, Compétences & Présentation
├── 📄 a-propos.html       # Parcours détaillé & piliers d'expertise (Contrib. Sidiki)
├── 📄 parcours.html       # Timeline académique UIE & Projet Master ISD Paris-Saclay
├── 📄 projet.html         # Galerie des réalisations et applications (Contrib. Adama)
├── 📄 collegues.html      # Annuaire dynamique et CV de l'équipe (Contrib. CheickBD)
├── 📄 pagecontact.html    # Formulaire de contact direct & canaux sociaux
├── 📂 css/                # Feuilles de style modulaires
│   ├── style.css          # Design system global, variables & animations
│   ├── a-propos.css       # Styles spécifiques de la page À Propos
│   ├── projet.css         # Styles de la galerie de projets
│   ├── collegues.css      # Styles de l'annuaire d'équipe
│   └── pagecontact.css    # Styles du formulaire et canaux de contact
├── 📂 js/                 # Logique JavaScript interactive
│   ├── script.js          # Thème Dark/Light, menu mobile, animations globales
│   ├── a-propos.js        # Logique dynamique de la page À Propos
│   ├── projet.js          # Filtres et modales projets
│   ├── collegues.js       # Rendu dynamique et sécurisé des fiches collègues
│   ├── collegues-data.js  # Source de vérité (données découplées de l'interface)
│   └── pagecontact.js     # Validation et gestion du formulaire de contact
└── 📂 assets/             # Ressources multimédias
    ├── cv.pdf             # CV officiel d'Abdoul Karim Traoré (téléchargeable)
    ├── profile.jpg        # Photo originale
    └── profile_v2.jpg     # Portrait haute définition officiel (costume & cravate orange)
```

---

## 🛠️ Stack Technique

<table align="center">
  <tr>
    <td align="center" width="25%"><b>Structure</b></td>
    <td align="center" width="25%"><b>Design & Style</b></td>
    <td align="center" width="25%"><b>Interactivité</b></td>
    <td align="center" width="25%"><b>Gestion de Version</b></td>
  </tr>
  <tr>
    <td align="center">HTML5 Sémantique<br>SEO & Accessibilité WAI-ARIA</td>
    <td align="center">Vanilla CSS3<br>Glassmorphism · Variables CSS<br>Thèmes Dark & Light</td>
    <td align="center">JavaScript ES6+<br>DOM sécurisé (anti-XSS)<br>Stockage LocalStorage</td>
    <td align="center">Git & GitHub<br>Branches parallèles<br>Fusion & Résolution de conflits</td>
  </tr>
</table>

---

## 🌿 Collaboration & Branches Git

Ce projet a été conçu selon les standards de l'ingénierie logicielle collaborative :

| Branche | Responsable | Rôle & Contenu | Statut de Fusion |
| :--- | :--- | :--- | :---: |
| `main` / `master` | Abdoul Karim | Branche de production stable | ✅ Synchronisée |
| `develop` | Abdoul Karim | Intégration continue de toutes les fonctionnalités | 🚀 Branche active |
| `origin/develop-contact` | CheickBD | Intégration de la page contact & de l'annuaire collègues | ✅ Fusionnée |
| `origin/projets` | Adama Programmeur | Galerie interactive des projets | ✅ Fusionnée |
| `origin/sidiki` | Sidiki Bagayoko | Section À Propos (HTML, CSS & JS dédiés) | ✅ Fusionnée |

---

## 🚀 Démarrage Rapide

### Prérequis
Aucune installation de dépendance externe n'est requise (100% Vanilla Web natif).

### Exécution locale
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/abdelkane-dev/taskflow.git
   ```
2. Ouvrez le dossier du projet :
   ```bash
   cd taskflow
   ```
3. Lancez simplement `index.html` dans votre navigateur préféré, ou utilisez un serveur de développement local :
   ```bash
   # Avec Python
   python -m http.server 3000

   # Ou avec Live Server dans VS Code
   ```

---

## 👥 Auteurs & Contributeurs

- **[Abdoul Karim TRAORÉ](https://github.com/abdelkane-dev)** — Porteur du projet, Architecture, Intégration globale & Profil CV.
- **CheickBD** — Conception de la page de contact & Section Collègues.
- **Adama Programmeur** — Conception de la galerie de projets.
- **Sidiki Bagayoko** — Conception de la page À Propos.

---

<div align="center">

<!-- FOOTER BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,11,21,31&height=100&section=footer" width="100%" alt="Footer Banner" />

<p align="center">
  <b>© 2026 Abdoul Karim TRAORÉ · Tous droits réservés.</b><br>
  <i>« Conçu avec passion, rigueur et précision d'ingénieur. »</i>
</p>

</div>
