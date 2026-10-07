import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-sky">
            03 — Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground">
            Turning messy data into useful answers.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            A selection of data analysis and machine learning work built around
            real datasets and practical questions.
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