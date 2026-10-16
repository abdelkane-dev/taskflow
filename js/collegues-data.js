/* ==========================================================
   collegues-data.js — SOURCE UNIQUE DES DONNÉES

   Pour ajouter un collègue ou son CV, il suffit de modifier
   ce fichier. Ni le HTML, ni le CSS, ni collegues.js n'ont
   besoin d'être touchés.

   ── Ajouter un CV ─────────────────────────────────────────
   1. Déposer le PDF dans  assets/cv/   (ex : assets/cv/adama-doucoure.pdf)
   2. Renseigner  cv: "assets/cv/adama-doucoure.pdf"

   ── Ajouter une photo ─────────────────────────────────────
   1. Déposer l'image dans  assets/colleagues/
   2. Renseigner  photo: "assets/colleagues/adama-doucoure.jpg"
      (sans photo, les initiales sont affichées)

   ── Ajouter un nouveau collègue ───────────────────────────
   Copier un bloc { ... } ci-dessous, le coller à la suite
   (sans oublier la virgule) et changer les valeurs.
   Un champ inconnu peut rester à null (ou [] pour skills).
   ========================================================== */

window.COLLEAGUES = [
  {
    id: "cheick-bougadary-djidani-traore",
    firstName: "Cheick Bougadary Djidani",
    lastName: "TRAORE",
    role: "Chargé de la gestion du backend et la logique de liaison",            // ex : "Étudiant en Ingénierie du Logiciel"
    bio: null,             // 1 à 2 phrases de présentation
    skills: ["SQL", "PHP", "HTML-CSS" ],            // ex : ["Python", "Java", "SQL"]
    photo: null,           // ex : "assets/colleagues/cheick-traore.jpg"
    cv: "assets/CV_Cheick_B_D_TRAORE.pdf",              // ex : "assets/cv/cheick-traore.pdf"
    email: "traorecheickbougadarydjidani@gmail.com",
    phone: "+223 71 04 69 12",
    github: "https://github.com/Checkkt",          // ex : "https://github.com/pseudo"
    linkedin: null         // ex : "https://www.linkedin.com/in/pseudo"
  },
  {
    id: "abdoul-hamid-maiga",
    firstName: "Abdoul Hamid",
    lastName: "MAIGA",
    role: null,
    bio: null,
    skills: [],
    photo: null,
    cv: null,
    email: null,
    phone: null,
    github: null,
    linkedin: null
  },
  {
    id: "sidiki-bagayoko",
    firstName: "Sidiki",
    lastName: "BAGAYOKO",
    role: null,
    bio: null,
    skills: [],
    photo: null,
    cv: null,
    email: null,
    phone: null,
    github: null,
    linkedin: null
  },
  {
    id: "adama-doucoure",
    firstName: "Adama",
    lastName: "DOUCOURE",
    role: null,
    bio: null,
    skills: [],
    photo: null,
    cv: null,
    email: null,
    phone: null,
    github: null,
    linkedin: null
  }
];

/* Adresse qui reçoit les demandes d'ajout de profil / CV */
window.COLLEAGUES_CONTACT = "abdoulkarimt334@gmail.com";
