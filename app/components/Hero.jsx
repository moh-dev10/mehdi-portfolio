export default function Hero() {
  const stats = [
    { value: "4", suffix: "", label: "Projects in portfolio" },
    { value: "2", suffix: "nd", label: "Year at USTHB" },
    { value: "Core", suffix: "", label: "Python & SQL focus" },
  ];

  return (
    <section
      id="hero"
      className="section relative flex min-h-[calc(100vh-68px)] items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20 [background-image:linear-gradient(to_right,rgba(242,241,234,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,241,234,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      {/* Hero Content */}
      <div className="wrap relative z-10 grid w-full items-center gap-16 lg:grid-cols-2">
        {/* Copy Column */}
        <div>
          {/* Status pill */}
          <div className="mono mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-2 text-xs text-muted">
            <span className="size-2 rounded-full bg-olive" />
            Data Science Student · USTHB, Algiers
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
            Hi, I&apos;m <span className="text-olive">Mehdi</span>.
            <br />
            Data Science Student.
          </h1>

          {/* Positioning */}
          <p className="mono mt-4 text-xs tracking-wide text-muted">
            <span className="text-olive">{"//"}</span> Interested in Data Analysis, Machine Learning, and practical insights
          </p>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            I&apos;m a second-year Data Science student at USTHB. I&apos;m currently developing my skills in Python, data analysis, machine learning, and data visualization through academic learning and practical projects.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[10px] bg-olive px-5 py-3 text-sm font-semibold text-[#10110F] transition-colors duration-150 hover:bg-olive-hover"
            >
              View Projects
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-border-strong bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-150 hover:border-olive hover:text-olive"
            >
              Get in touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="block text-2xl font-bold text-foreground">
                  {stat.value}
                  {stat.suffix && (
                    <small className="text-sm font-normal text-muted">
                      {stat.suffix}
                    </small>
                  )}
                </span>
                <span className="mono text-xs text-muted-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Column */}
        <div className="relative z-20 w-full max-w-[560px]">
          {/* Main Card Panel */}
          <div className="overflow-hidden rounded-[14px] border border-border-strong bg-surface shadow-[var(--shadow)]">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-surface-2/30 px-5 py-3.5">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-border-strong" />
                <span className="size-2.5 rounded-full bg-border-strong" />
                <span className="size-2.5 rounded-full bg-border-strong" />
              </div>

              <span className="mono text-xs text-muted">
                pipeline_workflow.ipynb
              </span>

              <span className="mono ml-auto rounded border border-border bg-surface px-2 py-0.5 text-[10px] uppercase text-olive">
                Academic
              </span>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="mono text-xs text-muted-2">
                Current curriculum focus
              </p>

              <div className="mt-2 flex items-baseline justify-between">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    Data Analysis & ML
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    Exploration, feature engineering, and model validation
                  </p>
                </div>
                <span className="mono rounded border border-border bg-surface-2/60 px-2.5 py-1 text-[11px] text-olive">
                  L2 Track
                </span>
              </div>

              {/* Chart */}
              <div className="mt-6 h-[140px] w-full">
                <svg
                  viewBox="0 0 500 180"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="oliveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#92977F" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#92977F" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area */}
                  <path
                    d="M0 145 C50 130 90 115 140 120 C190 125 230 85 280 80 C330 75 370 65 420 50 C460 40 480 30 500 20 V180 H0 Z"
                    fill="url(#oliveGradient)"
                  />

                  {/* Trend line */}
                  <path
                    d="M0 145 C50 130 90 115 140 120 C190 125 230 85 280 80 C330 75 370 65 420 50 C460 40 480 30 500 20"
                    fill="none"
                    stroke="#92977F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Reference line */}
                  <path
                    d="M0 155 C120 135 250 110 500 70"
                    fill="none"
                    stroke="rgba(242, 241, 234, 0.15)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Mini Stats */}
              <div className="mt-5 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-background-soft/60">
                <div className="p-3.5">
                  <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                    Environment
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-foreground">
                    Python · Jupyter
                  </span>
                </div>

                <div className="p-3.5">
                  <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                    Curriculum
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-foreground">
                    USTHB L2
                  </span>
                </div>

                <div className="p-3.5">
                  <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                    Libraries
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-foreground">
                    Pandas · sklearn
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Chip — Top */}
          <div className="absolute -top-3 -right-4 z-30 hidden items-center gap-3 rounded-xl border border-border-strong bg-surface px-3.5 py-2.5 shadow-lg md:flex">
            <span className="grid size-7 place-items-center rounded-lg bg-surface-2 text-olive">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 3v18h18" />
                <path d="m7 14 4-4 3 3 5-6" />
              </svg>
            </span>
            <div className="text-xs font-medium text-foreground">
              Exploratory analysis
              <span className="mono block text-[10px] text-muted-2">supervised_learning</span>
            </div>
          </div>

          {/* Floating Chip — Bottom */}
          <div className="absolute -bottom-4 -left-4 z-30 hidden items-center gap-3 rounded-xl border border-border-strong bg-surface px-3.5 py-2.5 shadow-lg md:flex">
            <span className="grid size-7 place-items-center rounded-lg bg-surface-2 text-olive">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </span>
            <div className="text-xs font-medium text-foreground">
              Python · SQL · scikit-learn
              <span className="mono block text-[10px] text-muted-2">academic_stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}