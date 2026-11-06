import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section border-b border-border">
      <div className="wrap">
        <div className="max-w-2xl">
          <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
            03 / Projects
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Selected exploratory data projects.
          </h2>

          <p className="mt-3 text-sm text-muted">
            Four foundational projects documenting machine learning experimentation, exploratory data analysis, and predictive modeling on open datasets.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}