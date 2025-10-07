import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Projets</h1>
        <p className="text-gray-600 mt-1">
          Quelques réalisations récentes — fullstack, frontend et UX/UI.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
