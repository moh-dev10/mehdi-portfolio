import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[14px] border border-border bg-surface shadow-[var(--shadow)] transition-colors duration-200 hover:border-border-strong">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="mono text-xs uppercase tracking-[0.14em] text-olive">
          {project.category}
        </span>

        <h3 className="mt-2 text-xl font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="mono rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-foreground transition-colors hover:text-olive"
            >
              GitHub ↗
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-foreground transition-colors hover:text-olive"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}