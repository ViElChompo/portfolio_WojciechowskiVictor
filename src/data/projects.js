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
      "Projet d’articulation HEIG-VD réalisé pour Breitling par l’équipe BAM! Agency.",

      
      "Contexte : Le matériel de formation consulté par les revendeurs multi-marques responsables de la vente des produits Breitling n'étaient consommés que avant la compétition organisée par la marque horlogère.\\nNous avons été mandatés pour créer une plateforme capable d’accueillir cette compétition continue et de permettre aux utilisateurs de réaliser des tests de connaissances et de se mesurer aux autres compétiteurs au travers de tests de connaissances.\\nPour ce faire nous avons imaginé la 'Nova League', une compétition annuelle gamifiée permettant aux revendeurs multimarques de se former tout au long de l’année, et non plus uniquement avant la phase de qualification. ",

      
      "Tech Stack : ",
      "Frontend - Vue.js (Composition API) + Inertia.js + TailwindCSS — architecture SPA mobile-first.\\nBackend - Laravel — API REST, migrations, seeders, authentification avec Breeze.\\nDatabase - SQLite (environnement de développement rapide et stable).",

      
      "Design & UX : Prototype complet sur Figma, tests utilisateurs, identité visuelle et itérations d’ergonomie.",
      "Gestion de projet : Méthode agile, planification sur Jira, répartition claire des rôles, réunions journalières et suivi constant.",
      "Livrables : Plateforme fonctionnelle, documentation technique, rapport complet et présentation finale.",

      
      "Repo github privé (confidentialité demandée par Breitling).",
      "Accès à la plateforme avec:",
      "Login : isabelle.petit@example.com",
      "Password : password123",
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

      "Tech Stack :",
      "Backend : Laravel — API RESTful versionnée, authentification, middleware et gestion des relations Eloquent.",
      "Frontend : Vue.js — navigation dynamique entre chapitres, affichage conditionnel et interface responsive.",
      "Base de données : SQLite.",
      "Objectif : ",
      "Démontrer l’intégration d’un backend structuré et d’un frontend réactif dans une expérience interactive cohérente et fonctionnelle.",
      "Coming Soon : ",
      "⛏️  Bientôt disponible en ligne.",
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

      "Contexte :",
      "Projet de datavisualisation réalisé dans le cadre du cours de VisualDon à la HEIG-VD.",
      "L’objectif était de découvrir et de mettre en pratique l’utilisation de la librairie D3.js pour créer une représentation visuelle interactive à partir de données réelles.",

      "Concept :",
      "L’application présente l’évolution et l’univers de la marque LEGO à travers des données issues d’une API publique référençant les sets, pièces et thématiques emblématiques.",
      "Chaque visualisation illustre une partie de l’histoire de LEGO — sa croissance, sa diversité et son impact culturel.",

      "Particularités :",
      "Cet exercice se concentre sur la clarté et la richesse de la dataviz, sans inclure le responsive design.",
      "💡 À consulter de préférence sur un ordinateur pour une expérience optimale.",
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
      "Projet développé en Vanilla JavaScript dans le cadre d’un exercice de programmation web.",

      "Contexte :",
      "Reproduction du célèbre jeu de lettres 'Wordle', afin de mettre en pratique la logique de programmation et la gestion des interactions utilisateur en JavaScript pur.",
      "Le but du jeu est de deviner un mot caché en un nombre limité de tentatives, chaque essai fournissant des indices visuels sur la position et la validité des lettres.",

      "Fonctionnalités :",
      "Gestion du clavier virtuel et validation dynamique des entrées.",
      "Affichage des lettres correctes, mal placées ou incorrectes selon la logique du jeu.",
      "Intégration d’une API permettant de récupérer les mots à deviner et d’assurer la variété des parties.",

      "Particularités :",
      "Projet entièrement codé sans framework, pour renforcer la compréhension des mécaniques DOM et de la logique algorithmique.",
      "💡 Expérience optimale sur ordinateur.",
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
