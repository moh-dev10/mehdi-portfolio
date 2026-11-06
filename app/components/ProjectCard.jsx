import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col justify-between rounded-[4px] border border-border bg-surface transition-colors duration-150 hover:border-border-strong">
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-surface-2/40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            referrerPolicy="no-referrer"
            className="object-cover transition-opacity duration-300 opacity-90 group-hover:opacity-100"
          />
        </div>

        <div className="p-5 sm:p-6">
          <span className="mono text-[11px] uppercase tracking-wider text-olive">
            {project.category}
          </span>

          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {project.title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="mono rounded-[2px] border border-border bg-background-soft px-2 py-0.5 text-[11px] text-muted-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-border px-5 py-3 text-xs sm:px-6">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground transition-colors hover:text-olive"
          >
            GitHub ↗
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground transition-colors hover:text-olive"
          >
            Live demo ↗
          </a>
        )}
      </div>
    </article>
  );
}