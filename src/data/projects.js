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
      "Conception de l’API REST v1 + auth Sanctum",
      "Seeding + route admin protégée",
      "Frontend Vue 3 (Composition API) + Pinia",
    ],
    links: {
      code: "https://github.com/ViElChompo/Entretien-piege/tree/main",
      demo: "https://github.com/ViElChompo/Entretien-piege/blob/main/technical/technical.md",
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
      "Login : isabelle.petit@example.com",
      "Password : password123",
    ],
    links: {
      code: "https://github.com/ProjArtBAMAgency/ProjArtBamAgency.git",
      demo: "https://www.nova-league.com/",
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
