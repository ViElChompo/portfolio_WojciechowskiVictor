import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectNotes from "../components/ProjectNotes";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault(); // on empêche la navigation vers "#"
    navigate(-1); // on revient à la page précédente
  };

  if (!project) {
    return (
      <div className="py-10">
        <p>Projet introuvable.</p>
        <Link to="#" onClick={goBack} className="underline">
          ← Retour
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <Link
          to="#"
          onClick={goBack}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50"
        >
          ← Retour
        </Link>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <div className="text-gray-500 flex items-center gap-2">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.category}</span>
        </div>
      </header>

      <section className="space-y-4">
        {project.type === "screenshot" && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow"
            loading="lazy"
          />
        )}

        {project.type === "gallery" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {(project.images || []).map((img) => (
              <figure key={img.src} className="space-y-2">
                <img
                  src={img.src}
                  alt={img.alt || ""}
                  className="w-full rounded-lg shadow"
                  loading="lazy"
                />
                {img.alt && (
                  <figcaption className="text-sm text-gray-500">
                    {img.alt}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </section>

      <div className="flex flex-wrap gap-2">
        {(project.techStack || []).map((t) => (
          <span
            key={t}
            className="rounded-full border border-gray-200 px-2 py-0.5 text-s"
          >
            {t}
          </span>
        ))}
      </div>

      <section className="space-y-4 text-sm leading-relaxed">


        <ProjectNotes notes={project.notes} />


        {(project.links?.code || project.links?.demo) && (
          <div className="flex gap-4 pt-2">
            {project.links?.code && (
              <a
                className="underline"
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
              >
                Voir le code
              </a>
            )}
            {project.links?.demo && (
              <a
                className="underline"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo live
              </a>
            )}
          </div>
        )}
      </section>
    </article>
  );
}
