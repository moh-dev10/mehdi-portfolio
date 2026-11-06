import { ArrowRight } from "lucide-react";

export default function Connect() {
  return (
    <section id="connect" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-olive">
            06 — Code & Network
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Find me on GitHub and LinkedIn.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Public repositories, coursework notebooks, and where to reach me professionally for student opportunities.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* GitHub Card */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-[14px] border border-border bg-surface p-7 shadow-[var(--shadow)] transition-colors hover:border-olive/50"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-foreground">
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                  </svg>
                </span>

                <div>
                  <h3 className="text-lg font-bold text-foreground">GitHub</h3>
                  <p className="mono text-xs text-muted">@mehdi-ds</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted">
                Explore open coursework notebooks, data cleaning scripts, and machine learning exploration repositories.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs font-semibold text-olive">
              Visit GitHub Profile
              <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-1" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-[14px] border border-border bg-surface p-7 shadow-[var(--shadow)] transition-colors hover:border-olive/50"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-foreground">
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </span>

                <div>
                  <h3 className="text-lg font-bold text-foreground">LinkedIn</h3>
                  <p className="mono text-xs text-muted">in/mehdi-datascience</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted">
                Connect for academic collaborations, student projects, and summer internship discussions in data science.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs font-semibold text-olive">
              Connect on LinkedIn
              <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
