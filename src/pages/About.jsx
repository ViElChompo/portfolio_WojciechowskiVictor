import { useState } from "react";
import portrait from "../assets/golf.jpg";
import malaga from "../assets/malaga.jpg";
import velodrome from "../assets/velodrome.mp4";
import imacom from "../assets/imacom.png";
import im from "../assets/im.svg";
import eracom from "../assets/eracom.png";
import helimap from "../assets/helimap.png";
import coop from "../assets/coop.svg";
import logo from "../assets/logo.svg";
import vitra from "../assets/vitra.jpg";

function Section({ intro, children }) {
  return (
    <section className="space-y-6">
      {intro && <p className="text-3xl font-bold mb-2 leading-snug">{intro}</p>}
      {children}
    </section>
  );
}

function CardsGrid({ cards }) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <FlipCard key={i} card={c} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ card }) {
  const [flipped, setFlipped] = useState(false);
  const span = card.span ?? "";
  const mediaH = card.mediaHeight ?? "h-[400px]";
  const isFlippable = card.flippable && card.description;

  const toggleFlip = () => {
    if (isFlippable) setFlipped(!flipped);
  };

  // === CARTE FLIPPABLE ===
  if (isFlippable) {
    return (
      <article
        className={`group relative ${span} min-h-[500px] cursor-pointer
          rounded-2xl bg-white ring-1 ring-gray-200
          shadow-md hover:shadow-2xl hover:-translate-y-1
          transition-all duration-300`}
        onClick={toggleFlip}
      >
        {/* 💬 Le wrapper perspective reste, mais ne porte PAS les ombres */}
        <div className="h-full w-full [perspective:1000px]">
          <div
            className={`relative h-full w-full rounded-2xl
              transition-transform duration-500
              [transform-style:preserve-3d]
              ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
          >
            {/* FACE AVANT */}
            <div
              className="absolute inset-0 flex flex-col p-4 justify-between"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="truncate">{card.title}</span>
                <span>{card.metaRight}</span>
              </div>

              <div
                className={`flex w-full items-center justify-center ${mediaH} mt-3`}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                  {card.type === "image" && (
                    <img
                      src={card.src}
                      alt={card.alt || ""}
                      // 💬 Petit zoom visuel au hover pour renforcer l’interactivité
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  {card.type === "video" && (
                    <video
                      src={card.src}
                      className="h-full w-full object-contain"
                      muted={card.muted ?? true}
                      autoPlay={card.autoPlay ?? true}
                      loop={card.loop ?? true}
                      controls={card.controls ?? true}
                      playsInline={card.playsInline ?? true}
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
                <span className="truncate">{card.footerLeft}</span>
                <span className="flex items-center gap-1">
                  {card.footerRight}
                  {/* 💬 Indice d’interaction, au-dessus de la date */}
                  <span className="text-gray-300 text-[11px] translate-y-[1px] group-hover:rotate-180 transition-transform duration-500">
                    ↻
                  </span>
                </span>
              </div>
            </div>

            {/* FACE ARRIÈRE */}
            <div
              className="absolute inset-0 rounded-2xl p-6 flex flex-col items-start justify-center text-sm leading-relaxed bg-gray-900 text-white"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <p className="text-xs uppercase tracking-wide text-gray-300 mb-2">
                {card.metaRight}
              </p>
              <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-100">{card.description}</p>
              <div className="mt-4 text-xs text-gray-300">
                <span>{card.footerLeft}</span>
                <span className="mx-2">•</span>
                <span>{card.footerRight}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // --- CARTE STATIQUE ---
  return (
    <article
      className={`flex flex-col rounded-2xl p-4 justify-between min-h-[500px] bg-white ring-1 ring-gray-200 shadow-lg ${span}`}
    >
      {/* Méta haut */}
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span className="truncate">{card.title}</span>
        <span>{card.metaRight}</span>
      </div>

      {/* Média */}
      <div className={`flex w-full items-center justify-center ${mediaH} mt-3`}>
        <div className="w-full h-full rounded-2xl overflow-hidden bg-transparent flex items-center justify-center">
          {card.type === "image" && (
            <img
              src={card.src}
              alt={card.alt || ""}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          )}
          {card.type === "video" && (
            <video
              src={card.src}
              className="h-full w-full object-contain"
              muted={card.muted ?? true}
              autoPlay={card.autoPlay ?? true}
              loop={card.loop ?? true}
              controls={card.controls ?? true}
              playsInline={card.playsInline ?? true}
            />
          )}
        </div>
      </div>

      {/* Méta bas */}
      <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
        <span className="truncate">{card.footerLeft}</span>
        <span>{card.footerRight}</span>
      </div>
    </article>
  );
}

const experiencesCards = [
  {
    type: "image",
    src: helimap,
    alt: "Stage de 10 mois, Helimap Sixense",
    title: "Stage de 10 mois, Helimap Sixense",
    metaRight: "Acquisition et traitement de données LiDAR",
    footerLeft: "TerraScan, QGIS, RiSCAN PRO",
    footerRight: "2019-2020",
    span: "md:col-span-2",
    mediaHeight: "h-[360px]",
    flippable: true,
    description:
      "Stage de dix mois chez Helimap Sixense, entreprise suisse spécialisée dans la cartographie aérienne par technologie LiDAR. J’y ai contribué à la refonte complète du site web, tout en participant à des missions d’acquisition, de traitement et de correction de données géospatiales (LiDAR, orthophotos, planification de vols en hélicoptère).",
  },
  {
    type: "image",
    src: coop,
    alt: "Picking Coop",
    title: "Travail étudiant",
    metaRight: "Picking - préparation de commandes",
    footerLeft: "En parallèle de mes études",
    footerRight: "2023",
    mediaHeight: "h-[360px]",
    flippable: true,
    description:
      "Travail étudiant en tant que préparateur de commandes au sein de la Coop. Ce travail m'a appris à effectuer un travail physiquement pénible durant plusieurs heures tout en ayant un objectif de commandes préparées à l'heure. J'ai appris à organiser mon travail, à être rapide et efficace.",
  },
  {
    type: "image",
    src: logo,
    alt: "Self employed",
    title: "Travail à mon compte",
    metaRight: "Web Programming",
    footerLeft: "React.js, Vite, Tailwind.CSS, Breeze, Laravel ",
    footerRight: "2025 -",
    mediaHeight: "h-[360px]",
    flippable: true,
    description:
      "Travail personnel pour des clients tels que l'entreprise de mon père Wo-Dell Sàrl ou le salon de Coline (salon de coiffure pour lequel je refais le site web actuellement).",
  },
];

const aboutCards = [
  {
    type: "image",
    src: portrait,
    alt: "Portrait",
    title: "Portrait",
    metaRight: "Sport",
    footerLeft: "Golf, focus & mindset",
    footerRight: "Septembre 2025",
    span: "md:col-span-2",
    mediaHeight: "h-[420px]",
    flippable: false,
    hoverColor: "#423B35",
  },
  {
    type: "image",
    src: malaga,
    alt: "Photographie urbaine",
    title: "Photographie urbaine",
    metaRight: "Hobbys",
    footerLeft: "Málaga",
    footerRight: "Septembre 2024",
    mediaHeight: "h-[420px]",
    flippable: false,
  },
  {
    type: "image",
    src: vitra,
    alt: "Design",
    title: "Passionné de design",
    metaRight: "Culture",
    footerLeft: "VitraHaus",
    footerRight: "Mai 2024",
    mediaHeight: "h-[420px]",
    flippable: false,
  },
  {
    type: "video",
    src: velodrome,
    title: "Vélodrome",
    metaRight: "Sport",
    footerLeft: "Aigle",
    footerRight: "Octobre 2024",
    span: "md:col-span-2",
    mediaHeight: "h-[420px]",
    flippable: false,
    muted: true,
    autoPlay: true,
    loop: true,
    playsInline: true,
  },
];

const diplomasCards = [
  {
    type: "image",
    src: im,
    alt: "HEIG-VD",
    title: "HEIG-VD",
    metaRight: "Bachelor en cours",
    footerLeft: "Ingénierie des médias",
    footerRight: "2023–2026",
    span: "md:col-span-2",
    mediaHeight: "h-[300px]",
    flippable: true,
    description:
      "Bachelor en Ingénierie des Médias à la HEIG-VD, formation pluridisciplinaire à la croisée du design, du web et de la technologie. Le cursus combine développement web, communication visuelle, data et gestion de projet, pour concevoir des solutions numériques complètes, de l’idée à la mise en production.",
  },
  {
    type: "image",
    src: imacom,
    alt: "IMACOM",
    title: "IMACOM",
    metaRight: "Diplôme d'assistant Marketing",
    footerLeft:
      "Marketing stratégique",
    footerRight: "2023",
    mediaHeight: "h-[300px]",
    flippable: true,
    description:
      "Diplôme fédéral d’Assistant marketing et communication obtenu à l’IMACOM. La formation m’a permis d’acquérir une solide base en marketing stratégique, communication digitale, relations publiques et gestion de projet, tout en développant une sensibilité à l’analyse de marché et au positionnement des marques.",
  },
  {
    type: "image",
    src: eracom,
    alt: "ERACOM",
    title: "ERACOM",
    metaRight: "Maturité Spécialisée",
    footerLeft: "Communication and Media Studies",
    footerRight: "2019",
    mediaHeight: "h-[300px]",
    flippable: true,
    description:
      "Maturité spécialisée en Information et Communication obtenue à l’ERACOM. Cette formation m’a initié aux fondamentaux de la communication visuelle, des médias et du design, tout en développant mon sens critique et ma capacité à relier création, technique et message — une base essentielle à mon parcours en ingénierie des médias.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col py-8 px-4 space-y-14">
      {/* Introduction personnelle — version compacte et cohérente */}
      <section className="mx-auto w-full max-w-5xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Colonne gauche : titre + sous-titre discrets */}
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                Victor Wojciechowski
              </h1>
              <p className="text-sm text-gray-500">
                Étudiant en dernière année d'ingénierie des médias · HEIG-VD
              </p>
              {/* Icônes sociales */}
              <div className="flex items-center gap-4 pt-1">
                {/* GitHub */}
                <a
                  href="https://github.com/ViElChompo"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .297a12 12 0 0 0-3.793 23.406c.6.111.82-.258.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.547-1.387-1.336-1.757-1.336-1.757-1.092-.75.083-.735.083-.735 1.207.084 1.841 1.238 1.841 1.238 1.073 1.84 2.809 1.308 3.492 1.001.108-.778.42-1.308.762-1.61-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.238-3.221-.124-.303-.537-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.003 0c2.292-1.552 3.298-1.23 3.298-1.23.656 1.652.243 2.873.12 3.176.772.84 1.237 1.911 1.237 3.221 0 4.61-2.805 5.625-5.476 5.921.43.372.823 1.102.823 2.222v3.293c0 .321.218.694.825.576A12.003 12.003 0 0 0 12 .297Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/victor-wojciechowski-552b76303"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.29h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.58z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Colonne droite : description courte + méta en chips */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-[15px] leading-relaxed text-gray-600">
                Je conçois des expériences web claires et performantes, à
                l’intersection du design, du code et de la donnée. Intérêt pour
                le backend et les interfaces soignées. Actuellement à la
                recherche d’un
                <span className="font-medium"> projet de Bachelor</span> en{" "}
                <span className="font-medium">développement web</span> /{" "}
                <span className="font-medium"> dévloppement backend</span>, avec
                un attrait pour la{" "}
                <span className="font-medium">
                  valorisation du patrimoine horloger
                </span>
                .
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-gray-100 px-2.5 py-1 text-xs text-gray-600">
                  Morges (VD), Suisse
                </span>
                <span
                  className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-grey-600 hover:shadow-2xl hover:-translate-y-1
          transition-all duration-300"
                >
                  <button>
                    <a href="mailto:victorwoj6@gmail.com">
                      M'envoyer un e-mail
                    </a>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences professionnelles */}
      <Section intro={`Expériences professionnelles récentes`}>
        <CardsGrid cards={experiencesCards} />
      </Section>

      {/* Diplômes & certifications */}
      <Section intro={`Formations`}>
        <CardsGrid cards={diplomasCards} />
      </Section>
      {/* Présentation perso */}
      <Section intro={`Hobbys et passions.`}>
        <CardsGrid cards={aboutCards} />
      </Section>
    </div>
  );
}
