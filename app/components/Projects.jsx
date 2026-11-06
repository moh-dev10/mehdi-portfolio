import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { getProjects } from "@/lib/repositories/projectsRepository";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="section border-b border-border">
      <div className="wrap">
        <Reveal delay={0}>
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
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80} duration={600}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}