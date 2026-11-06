import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-olive">
            03 — Projects
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Selected practical data projects.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            A collection of exploratory analysis and foundational machine learning work built around public datasets and practical analytical questions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}