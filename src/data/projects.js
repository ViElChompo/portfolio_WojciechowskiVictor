import entretien from '../assets/entretien_resized.png';
import breitling from '../assets/macbook_Breitling.png';
import lego from '../assets/macbook_lego_resized.png';
import wordle from '../assets/wordle_iphone_resized.png';
import aeroDark from '../assets/dark_Aero.png';
import aeroLight from '../assets/light_Aero.png';


export const projects = [
  {
    id: "lego-story",
    title: "Lego Story",
    year: "2025",
    category: "Dataviz • Design Minimaliste",
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
    id: "entretien-piege",
    title: "Entretien Piégé",
    year: "2025",
    category: "Laravel & Vue.js • Full Stack",
    type: "screenshot",
    image: entretien,
    techStack: ["Laravel", "Laravel Sanctum", "SQLite", "Vue.js", "Pinia", "Axios"],
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
      "Participation au backend de la PWA Breitling Nova League (quiz, scoring, suivi).",
      "Architecture API, gestion des données utilisateurs, mécaniques de jeu.",
      "Repo privé (accord avec la direction).",
    ],
    links: {
      code: "https://github.com/ProjArtBAMAgency/ProjArtBamAgency.git",
      demo: "https://www.nova-league.com/",
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
      { src: aeroDark, alt: "Home page" },
      { src: aeroLight, alt: "Key feature: aero management" },
      { src: "/assets/breitling/profile.png", alt: "Profil" }
    ],
    techStack: ["Figma", "Design System", "UX Research"],
  },
];
