import victor from "../assets/victor.jpg";
import vid from '../assets/velodrome.mp4'




// src/pages/About.jsx
export default function About() {
  const items = [
    {
      type: "image",
      src: victor,
      alt: "Portrait",
      caption: "Le golf me permets d'apprendre à contrôler mes pensées et à me concentrer durant plusieurs heures.",
    },
    {
      type: "image",
      src: "/setup.jpg",
      alt: "Mon setup",
      caption: "Mon espace de travail au quotidien.",
    },
    {
      type: "video",
      src: vid,
      caption: "J'ai eu le plaisir de découvrir le vélodrome d'Aigle l'année passée. Une expérience à la fois effrayante et exaltante.",
    },
    {
      type: "image",
      src: "/lake.jpg",
      alt: "Lac Léman",
      caption: "Je m’inspire souvent des paysages suisses.",
    },
  ];

  return (
    <section className="space-y-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">À propos</h1>
        <p className="text-gray-600">
          Bonjour, je m'appelle Victor Wojciechowski. Je suis étudiant en dernière année de bachelor d'ingénierie des médias à la HEIG-VD. 
          Durant mes études j'ai eu le plaisir de découvrir un nouveau centre d'intérêt qui est la programamtion web, plus spécifiquement la partie backend. 
          En parallèle de mes études, je suis un avide coureur, cycliste et golfeur. 
        </p>
      </header>

      <div className="columns-1 md:columns-2 gap-4 [column-fill:_balance]">
        {items.map((item, i) => (
          <figure
            key={i}
            className="mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-lg"
          >
            {item.type === "image" && (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto max-h-screen object-contain md:object-cover"
                loading="lazy"
              />
            )}
            {item.type === "video" && (
              <video
                src={item.src}
                muted
                autoPlay
                loop
                controls
                className="w-full h-auto max-h-screen object-contain md:object-cover"
              />
            )}
            {item.caption && (
              <figcaption className="p-4 text-sm text-gray-700">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
