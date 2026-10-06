const focusAreas = [
  {
    title: "Exploratory Data Analysis",
    description:
      "Distributions, correlations, outliers and the uncomfortable questions before modelling.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[17px]"
      >
        <path d="M3 3v18h18" />
        <path d="m7 15 4-5 3 3 5-7" />
      </svg>
    ),
    color: "sky",
  },
  {
    title: "Machine Learning",
    description:
      "Regression, classification and clustering with scikit-learn, validated with cross-validation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[17px]"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="m4.9 4.9 2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </svg>
    ),
    color: "violet",
  },
  {
    title: "Data Visualization",
    description:
      "Charts designed to be read in five seconds — not just rendered.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[17px]"
      >
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </svg>
    ),
    color: "mint",
  },
];

const profile = [
  ["Institution", "USTHB, Algiers"],
  ["Program", "Licence Data Science"],
  ["Core stack", "Python · SQL"],
  ["Libraries", "Pandas · NumPy · sklearn"],
  ["Languages", "Arabic · French · English"],
  ["Based in", "Algiers, Algeria"],
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-sky">
            01 — About
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Studying data science where the numbers are tough and the models
            matter.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Currently in my second year of the Data Science program at USTHB,
            Algiers — combining a strong mathematical foundation with hands-on
            Python practice.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="space-y-5 text-[15px] leading-7 text-muted">
              <p>
                I&apos;m <strong className="font-medium text-foreground">Mehdi</strong>
                , a Data Science student at{" "}
                <strong className="font-medium text-foreground">
                  USTHB — Université des Sciences et de la Technologie Houari
                  Boumediene
                </strong>{" "}
                in Algiers. My work sits at the intersection of statistics,
                programming and storytelling: cleaning data nobody wants to
                touch, engineering features that actually carry signal, and
                validating models so the results hold up outside the notebook.
              </p>

              <p>
                Most of my time goes into Python —{" "}
                <strong className="font-medium text-foreground">Pandas</strong>{" "}
                and{" "}
                <strong className="font-medium text-foreground">NumPy</strong>{" "}
                for the heavy lifting,{" "}
                <strong className="font-medium text-foreground">
                  Matplotlib
                </strong>{" "}
                and{" "}
                <strong className="font-medium text-foreground">Seaborn</strong>{" "}
                to make patterns visible, and{" "}
                <strong className="font-medium text-foreground">
                  Scikit-learn
                </strong>{" "}
                for supervised and unsupervised modelling. I also write SQL
                daily to pull and aggregate data straight from relational
                databases.
              </p>

              <p>
                Outside of coursework I build self-directed projects on real
                datasets — real estate, public health, e-commerce and Arabic
                NLP — because the fastest way to learn is to ship.
              </p>
            </div>

            {/* Focus areas */}
            <div className="mt-10 space-y-3">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-[var(--radius)] border border-border bg-surface p-4  hover:border-sky hover:translate-x-1 transition-all duration-300 hover:bg-sky/10"
                >
                  <div
                    className={[
                      "flex size-10 shrink-0 items-center justify-center rounded-xl border",
                      item.color === "sky" &&
                        "border-sky/20 bg-sky/10 text-sky",
                      item.color === "violet" &&
                        "border-violet/20 bg-violet/10 text-violet",
                      item.color === "mint" &&
                        "border-mint/20 bg-mint/10 text-mint",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow)] lg:sticky lg:top-24">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl border border-border-strong bg-surface-2 font-semibold text-foreground">
                M
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Mehdi</h3>

                <p className="mono mt-0.5 text-xs text-muted">
                  B.Sc. Data Science · 2nd year
                </p>
              </div>
            </div>

            {/* Rows */}
            <div className="mt-6 divide-y divide-border">
              {profile.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-6 py-3.5 text-sm"
                >
                  <span className="text-muted-2">{label}</span>

                  <strong className="text-right font-medium text-foreground">
                    {value}
                  </strong>
                </div>
              ))}

              {/* Status */}
              <div className="flex items-center justify-between gap-6 py-3.5 text-sm">
                <span className="text-muted-2">Status</span>

                <strong className="flex items-center gap-2 font-medium text-mint">
                  <span className="size-1.5 rounded-full bg-mint" />
                  Open to internships
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}