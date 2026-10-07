import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="mono text-xs uppercase tracking-[0.14em] text-sky">
          {project.category}
        </span>

        <h3 className="mt-3 text-xl font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-foreground transition-colors hover:text-sky"
            >
              GitHub ↗
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-foreground transition-colors hover:text-sky"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}