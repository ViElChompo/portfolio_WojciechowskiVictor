import entretien from "../assets/entretien_resized.png";
import breitling from "../assets/macbook_breitling.png";
import lego from "../assets/macbook_lego_resized.png";
import wordle from "../assets/wordle_iphone_resized.png";
import aeroDark from "../assets/dark_aero.png";
import aeroLight from "../assets/light_aero.png";
import aeroIpad from "../assets/aero_ipad.png";
import aeroLastPage from "../assets/aero.png";

export const projects = [

  {
    id: "breitling-novaleague",
    title: "Breitling Nova League",
    year: "2025",
    category: "Fullstack • PWA",
    type: "screenshot",
    image: breitling,
    techStack: ["Laravel", "Vue.js", "Inertia.js", "Vite", "TailwindCSS"],
    notes: [
      "J'ai pu créer le backend de la PWA Breitling Nova League (quiz, scoring, suivi).",
      "Architecture API, gestion des données utilisateurs, mécaniques de jeu.",
      "Repo privé (accord avec la direction de la HEIG-VD).",
      "Accès à la plateforme avec: ",
      `Login : isabelle.petit@example.com`,
      `Password : password123`,
    ],
    links: {
      code: "https://github.com/ProjArtBAMAgency/ProjArtBamAgency.git",
      demo: "https://www.nova-league.com/",
    },
  },
  {
    id: "entretien-piege",
    title: "Entretien Piégé",
    year: "2025",
    category: "Laravel & Vue.js • Full Stack",
    type: "screenshot",
    image: entretien,
    techStack: [
      "Laravel",
      "Laravel Sanctum",
      "SQLite",
      "Vue.js",
      "Pinia",
      "Axios",
    ],
    notes: [
  "Projet réalisé dans le cadre de deux cours : Développement de produit médias (Framework Laravel) et Web Mobile User Interface (Vue.js).",
  "Application web complète combinant un backend Laravel et un frontend Vue.js, sous la forme d’une fiction interactive où les choix de l’utilisateur influencent le récit.",
  "L’utilisateur participe à une simulation d’entretien d’embauche et doit répondre à des questions évaluant son adéquation avec les exigences d’une entreprise.",
  "Trois issues possibles à la fin de l'entretien :",
  "✅ Accepté — le profil correspond aux attentes.",
  "⚠️ Refusé — certaines réponses ne remplissent pas les critères.",
  "⛔ Blacklisté — le candidat échoue complètement à l’entretien.",
  "Backend : Laravel — API RESTful versionnée, authentification, middleware et gestion des relations Eloquent.",
  "Frontend : Vue.js — navigation dynamique entre chapitres, affichage conditionnel et interface responsive.",
  "Base de données : SQLite.",
  "Objectif : Démontrer l’intégration d’un backend structuré et d’un frontend réactif dans une expérience interactive cohérente et fonctionnelle.",
],

    links: {
      code: "https://github.com/ViElChompo/Entretien-piege/tree/main",
      demo: "https://github.com/ViElChompo/Entretien-piege/blob/main/technical/technical.md",
    },
  },
  {
    id: "lego-story",
    title: "Lego Story",
    year: "2025",
    category: "Dataviz • Frontend",
    type: "screenshot",
    image: lego,
    techStack: ["HTML5", "CSS3", "JavaScript", "Vite", "D3.js"],
    notes: [
      "Projet réalisé en Vanilla JS et à l'aide de librairies comme D3.js.",
    ],
    links: {
      code: "https://github.com/ViElChompo/visualDon-legoStory.git",
      demo: "https://visualdon-legostory.netlify.app/",
    },
  },
  {
    id: "wordle",
    title: "Wordle App",
    year: "2025",
    category: "Game • Frontend",
    type: "screenshot",
    image: wordle,
    techStack: ["JavaScript", "HTML5", "CSS3", "Vite"],
    notes: [
      "Jeu de réflexion basé sur l'utilisation de l'API de wordle.",
      "Projet développé en cours de programmation web.",
    ],
    links: {
      code: "https://github.com/ViElChompo/wwwordle.git",
      demo: "https://wwwordlevw.netlify.app/",
    },
  },
  
  {
    id: "Aero",
    title: "Aero2 website",
    year: "2025",
    category: "UX • UI ",
    type: "gallery",
    cover: aeroDark,
    images: [
      {
        src: aeroDark,
        alt: "Page d’accueil présentant la plateforme Aero2 et son concept : une aide innovante pour optimiser l’aérodynamisme et la dépense énergétique des cyclistes.",
      },
      {
        src: aeroLight,
        alt: "Interface centrale permettant d’analyser l’impact réel d’un équipement sur la performance : watts économisés, compatibilité et confort.",
      },
      {
        src: aeroIpad,
        alt: "Espace utilisateur avec modélisation 3D personnalisée, regroupant mensurations, vélo et recommandations adaptées pour un suivi précis.",
      },
      {
        src: aeroLastPage,
        alt: "Système de recommandations personnalisées : en fonction des mensurations et du vélo de l’utilisateur, Aero2 propose les pièces les plus adaptées pour optimiser l’aérodynamisme, le confort et l’économie d’énergie.",
      },
    ],
    techStack: ["Figma", "Wireframes", "UX Research"],
  },
];
