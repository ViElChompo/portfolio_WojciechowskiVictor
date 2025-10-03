// src/pages/About.jsx
import portrait from "../assets/golf.jpg";
import malaga from "../assets/malaga.jpg";
import legend from "../assets/victor_legend.jpg";
import velodrome from "../assets/velodrome.mp4";
import imacom from "../assets/imacom.png";
import im from '../assets/im.svg';

/* ---------- Composants réutilisables ---------- */
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
        {cards.map((c, i) => {
          const span = c.span ?? "";
          const mediaH = c.mediaHeight ?? "h-[400px]";
          const hover = c.hoverColor ? { ["--hover-color"]: c.hoverColor } : {};
          return (
            <article
              key={i}
              style={hover}
              className={`flex flex-col rounded-2xl p-4 justify-between min-h-[500px] bg-white ring-1 ring-gray-200 shadow-lg transition-colors duration-300 ${span} hover:bg-[var(--hover-color)]`}
            >
              {/* Méta haut */}
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="truncate">{c.title}</span>
                <span>{c.metaRight}</span>
              </div>

              {/* Bloc média : coins arrondis + clipping, média non étiré */}
              <div className={`flex w-full items-center justify-center ${mediaH} mt-3`}>
                <div className="w-full h-full rounded-2xl overflow-hidden bg-transparent flex items-center justify-center">
                  {c.type === "image" && (
                    <img
                      src={c.src}
                      alt={c.alt || ""}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  )}
                  {c.type === "video" && (
                    <video
                      src={c.src}
                      className="h-full w-full object-contain"
                      muted={c.muted ?? true}
                      autoPlay={c.autoPlay ?? true}
                      loop={c.loop ?? true}
                      controls={c.controls ?? true}
                      playsInline={c.playsInline ?? true}
                    />
                  )}
                </div>
              </div>

              {/* Méta bas */}
              <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
                <span className="truncate">{c.footerLeft}</span>
                <span>{c.footerRight}</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Données DES SECTIONS ---------- */

/* 1) À PROPOS — reprend exactement tes infos */
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
    hoverColor: "#423B35",
  },
  {
    type: "image",
    src: malaga,
    alt: "Photographie urbaine",
    title: "Urban photography",
    metaRight: "Hobbys",
    footerLeft: "Málaga",
    footerRight: "Septembre 2024",
    mediaHeight: "h-[420px]",
    hoverColor: "#CBB8A9",
  },
  {
    type: "image",
    src: legend,
    alt: "Legend",
    title: "Victor",
    metaRight: "Fun",
    footerLeft: "",
    footerRight: "",
    mediaHeight: "h-[420px]",
    hoverColor: "#DCD5C5",
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
    muted: true,
    autoPlay: true,
    loop: true,
    playsInline: true,
    hoverColor: "#B8B997",
  },
];

/* 2) EXPÉRIENCES PRO — même mise en page (mets tes visuels/logos réels) */
const experiencesCards = [
  {
    type: "image",
    src: "/exp-breitling.png", // place le fichier dans /public ou importe-le
    alt: "Breitling Nova League",
    title: "Breitling — Nova League",
    metaRight: "Backend",
    footerLeft: "Laravel, Inertia, PWA",
    footerRight: "2024–2025",
    span: "md:col-span-2",
    mediaHeight: "h-[360px]",
    hoverColor: "#EDE9FE",
  },
  {
    type: "image",
    src: "/exp-internal-tools.png",
    alt: "Outils internes",
    title: "Outils internes",
    metaRight: "Fullstack",
    footerLeft: "Node, React, SQLite",
    footerRight: "2024",
    mediaHeight: "h-[360px]",
    hoverColor: "#ECFDF5",
  },
  {
    type: "image",
    src: "/exp-redesign.png",
    alt: "Refonte site",
    title: "Refonte site",
    metaRight: "UI/UX",
    footerLeft: "Figma → React",
    footerRight: "2023",
    mediaHeight: "h-[360px]",
    hoverColor: "#FFF7ED",
  },
];

/* 3) DIPLÔMES / CERTIFICATIONS — même mise en page */
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
    hoverColor: "#EEF2FF",
  },
  {
    type: "image",
    src: imacom,
    alt: "IMACOM",
    title: "Diplôme d'assistant Marketing",
    metaRight: "Certification",
    footerLeft: "Marketing stratégique / Communication & promotion / Vente & relation client / Relations publiques & médias / Analyse de marché & veille / Gestion de projet",
    footerRight: "2025",
    mediaHeight: "h-[300px]",
    hoverColor: "#EFF6FF",
  },
  {
    type: "image",
    src: "/dipl-ga4.png",
    alt: "Google Analytics",
    title: "Google Analytics",
    metaRight: "Certification",
    footerLeft: "GA4",
    footerRight: "2024",
    mediaHeight: "h-[300px]",
    hoverColor: "#FEF3C7",
  },
];

/* ---------- Page ---------- */
export default function About() {
  return (
    <div className="min-h-screen flex flex-col py-8 px-4 space-y-14">
      {/* Présentation perso */}
      <Section
        intro={`Bonjour, je m'appelle Victor Wojciechowski. Je suis étudiant en dernière année
d’ingénierie des médias à la HEIG-VD. J’ai découvert la programmation web,
surtout le backend. En parallèle, je suis un coureur, cycliste et golfeur avide.`}
      >
        <CardsGrid cards={aboutCards} />
      </Section>

      {/* Expériences professionnelles */}
      <Section
        intro={`Expériences professionnelles récentes : contributions backend, intégration UI et
pilotage de petites features fullstack.`}
      >
        <CardsGrid cards={experiencesCards} />
      </Section>

      {/* Diplômes & certifications */}
      <Section
        intro={`Parcours académique et certifications qui structurent ma pratique technique.`}
      >
        <CardsGrid cards={diplomasCards} />
      </Section>
    </div>
  );
}
