import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-xl border border-gray-200 overflow-hidden bg-white hover:shadow-lg transition">
      <Link to={`/project/${project.id}`} className="block">
        <div className="aspect-[16/10] bg-gray-50 overflow-hidden">
          {project.type === "screenshot" && (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover group-hover:scale-105 transition"
              loading="lazy"
            />
          )}
          {project.type === "gallery" && (
            <img
              src={project.cover || project.images?.[0]?.src}
              alt={`Aperçu – ${project.title}`}
              className="h-full w-full object-cover group-hover:scale-105 transition"
              loading="lazy"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {(project.techStack || []).slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-200 px-2 py-0.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
