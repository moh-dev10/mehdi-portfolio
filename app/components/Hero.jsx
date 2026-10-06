export default function Hero() {
  const stats = [
    { value: "6", suffix: "", label: "Projects shipped" },
    { value: "48", suffix: "k+", label: "Rows analyzed" },
    { value: "2", suffix: "nd", label: "Year at USTHB" },
  ];

  return (
    <section
      id="hero"
      className="section relative flex min-h-[calc(100vh-68px)] items-center justify-center overflow-hidden"
    >
      {/* ==================== BACKGROUND GRID ==================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-50
          [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
          [background-size:48px_48px]
          [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]
        "
      />

      {/* ==================== HERO CONTENT ==================== */}
      <div className="wrap relative z-10 grid w-full items-center gap-16 lg:grid-cols-2">
        {/* ==================== HERO COPY ==================== */}
        <div>
          {/* Status */}
          <div className="mono mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
            <span className="size-2 animate-pulse rounded-full bg-mint" />
            Open to internships & data collaborations
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m <span className="text-sky">Mehdi</span>.
            <br />
            I turn raw data into decisions.
          </h1>

          {/* Role */}
          <p className="mono mt-5 text-sm text-muted">
            <span className="text-sky">{"//"}</span> Data Science Student · USTHB,
            Algiers
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            2nd-year Data Science student building end-to-end analytical
            pipelines — from messy raw datasets to models and dashboards
            people actually use.
          </p>

          {/* ==================== CTA ==================== */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                inline-flex items-center gap-2
                rounded-[10px]
                bg-sky
                px-5 py-3
                text-sm font-semibold
                text-[#04121a]
                transition-transform duration-200
                hover:-translate-y-0.5
              "
            >
              View Projects
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                rounded-[10px]
                border border-border-strong
                px-5 py-3
                text-sm font-semibold
                text-foreground
                transition-colors duration-200
                hover:bg-white/5
              "
            >
              Get in touch
            </a>
          </div>

          {/* ==================== STATS ==================== */}
          <div className="mt-10 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="block text-2xl font-bold text-foreground">
                  {stat.value}
                  <small className="text-sm text-muted">
                    {stat.suffix}
                  </small>
                </span>

                <span className="text-sm text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== HERO VISUAL ==================== */}
        <div className="relative z-20 w-full max-w-[600px]">
          {/* Main Panel */}
          <div
            className="
              overflow-hidden
              rounded-[18px]
              border border-border
              bg-background
              shadow-[var(--shadow)]
            "
          >
            {/* ==================== PANEL HEADER ==================== */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              {/* Window Dots */}
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-pink" />
                <span className="size-2.5 rounded-full bg-amber" />
                <span className="size-2.5 rounded-full bg-mint" />
              </div>

              {/* File Name */}
              <span className="mono text-xs text-muted">
                model_metrics.ipynb
              </span>

              {/* Status */}
              <span className="ml-auto rounded-full bg-mint/10 px-2 py-1 text-[10px] font-semibold text-mint">
                LIVE
              </span>
            </div>

            {/* ==================== PANEL BODY ==================== */}
            <div className="p-5">
              {/* Metric Label */}
              <p className="mono text-xs text-muted">
                Cross-validated accuracy
              </p>

              {/* Main Metric */}
              <div className="mt-2 flex items-end justify-between">
                <p className="text-4xl font-bold">
                  94.2
                  <span className="text-lg text-muted">%</span>
                </p>

                <span className="rounded-lg border border-mint/30 bg-mint/10 px-3 py-2 text-xs font-semibold text-mint">
                  ▲ 3.4% vs baseline
                </span>
              </div>

              {/* ==================== CHART ==================== */}
              <div className="mt-8 h-[150px] w-full">
                <svg
                  viewBox="0 0 500 180"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#38bdf8"
                        stopOpacity="0.25"
                      />

                      <stop
                        offset="100%"
                        stopColor="#38bdf8"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  {/* Area */}
                  <path
                    d="M0 145 C45 120 70 105 110 115 C150 125 165 80 215 72 C255 66 270 55 305 68 C340 80 355 45 390 35 C430 28 455 25 500 12 V180 H0 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Main Line */}
                  <path
                    d="M0 145 C45 120 70 105 110 115 C150 125 165 80 215 72 C255 66 270 55 305 68 C340 80 355 45 390 35 C430 28 455 25 500 12"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Baseline */}
                  <path
                    d="M0 155 C80 130 150 120 220 105 C300 92 400 78 500 65"
                    fill="none"
                    stroke="#a78bfa"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    opacity="0.7"
                  />
                </svg>
              </div>

              {/* ==================== MINI STATS ==================== */}
              <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-[14px] border border-border">
                {/* Dataset */}
                <div className="p-4">
                  <span className="mono block text-[10px] uppercase tracking-widest text-muted-2">
                    Dataset
                  </span>

                  <span className="mt-2 block text-sm font-semibold">
                    18.4k rows
                  </span>
                </div>

                {/* Features */}
                <div className="border-x border-border p-4">
                  <span className="mono block text-[10px] uppercase tracking-widest text-muted-2">
                    Features
                  </span>

                  <span className="mt-2 block text-sm font-semibold">
                    12 engineered
                  </span>
                </div>

                {/* CV Folds */}
                <div className="p-4">
                  <span className="mono block text-[10px] uppercase tracking-widest text-muted-2">
                    CV folds
                  </span>

                  <span className="mt-2 block text-sm font-semibold">
                    5-fold
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== FLOATING CHIP — TOP ==================== */}
          <div
            className="
              absolute -right-6 -top-1
              z-30
              hidden
              items-center gap-3
              rounded-[14px]
              border border-border
              bg-background-soft
              px-4 py-3
              shadow-[var(--shadow)]
              animate-float
              md:flex
            "
          >
            <span className="grid size-8 place-items-center rounded-[10px] bg-violet/10 text-violet">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 3v18h18" />
                <path d="m7 14 4-4 3 3 5-6" />
              </svg>
            </span>

            <span className="text-xs font-semibold">
              Model trained

              <small className="mono mt-1 block text-[10px] font-normal text-muted">
                gradient_boost.v3
              </small>
            </span>
          </div>

          {/* ==================== FLOATING CHIP — BOTTOM ==================== */}
          <div
            className="
              absolute -bottom-6 -left-6
              z-30
              hidden
              items-center gap-3
              rounded-[14px]
              border border-border
              bg-background-soft
              px-4 py-3
              shadow-[var(--shadow)]
              animate-float
              md:flex
            "
          >
            <span className="grid size-8 place-items-center rounded-[10px] bg-sky/10 text-sky">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </span>

            <span className="text-xs font-semibold">
              Python · SQL · scikit-learn

              <small className="mono mt-1 block text-[10px] font-normal text-muted">
                core_stack
              </small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}