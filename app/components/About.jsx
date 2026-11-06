const focusAreas = [
  {
    title: "Exploratory Data Analysis",
    description:
      "Distributions, correlations, outliers, and asking the right analytical questions before jumping into modelling.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[18px]"
      >
        <path d="M3 3v18h18" />
        <path d="m7 15 4-5 3 3 5-7" />
      </svg>
    ),
  },
  {
    title: "Machine Learning Fundamentals",
    description:
      "Supervised regression, classification, and clustering with scikit-learn, validated through sound cross-validation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[18px]"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="m4.9 4.9 2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </svg>
    ),
  },
  {
    title: "Data Visualization",
    description:
      "Clean, readable charts designed to communicate patterns and insights clearly without distraction.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[18px]"
      >
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </svg>
    ),
  },
];

const profile = [
  ["Institution", "USTHB, Algiers"],
  ["Program", "Licence Data Science"],
  ["Core stack", "Python · SQL"],
  ["Libraries", "Pandas · NumPy · scikit-learn"],
  ["Languages", "Arabic · French · English"],
  ["Based in", "Algiers, Algeria"],
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-olive">
            01 — About
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Studying data science with a focus on sound fundamentals and practical exploration.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Currently in my second year of the Data Science program at USTHB, Algiers — combining mathematical rigor with hands-on Python programming.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Text column */}
          <div className="max-w-2xl">
            <div className="space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                I&apos;m <strong className="font-semibold text-foreground">Mehdi</strong>, a Data Science student at{" "}
                <strong className="font-semibold text-foreground">
                  USTHB — Université des Sciences et de la Technologie Houari Boumediene
                </strong>{" "}
                in Algiers. My academic journey combines mathematics, statistics, and programming to analyze data, find patterns, and turn numbers into practical insights.
              </p>

              <p>
                Most of my coursework and practice goes into Python —{" "}
                <strong className="font-semibold text-foreground">Pandas</strong> and{" "}
                <strong className="font-semibold text-foreground">NumPy</strong> for data manipulation,{" "}
                <strong className="font-semibold text-foreground">Matplotlib</strong> and{" "}
                <strong className="font-semibold text-foreground">Seaborn</strong> for visualization, and{" "}
                <strong className="font-semibold text-foreground">Scikit-learn</strong> for foundational machine learning. I also write SQL to query and structure relational data.
              </p>

              <p>
                I focus on understanding the fundamentals: cleaning messy raw data, validating models properly with cross-validation, and communicating analytical findings clearly.
              </p>
            </div>

            {/* Focus areas */}
            <div className="mt-10 space-y-3">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-[14px] border border-border bg-surface p-4 transition-colors duration-150 hover:border-olive/50"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-olive">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="rounded-[14px] border border-border-strong bg-surface p-6 shadow-[var(--shadow)] lg:sticky lg:top-24">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <div className="flex size-12 items-center justify-center rounded-xl border border-border-strong bg-surface-2 font-bold text-olive">
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
            <div className="mt-4 divide-y divide-border">
              {profile.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-6 py-3 text-sm"
                >
                  <span className="mono text-xs text-muted-2">{label}</span>
                  <strong className="text-right text-xs font-medium text-foreground">
                    {value}
                  </strong>
                </div>
              ))}

              {/* Status */}
              <div className="flex items-center justify-between gap-6 pt-3 text-sm">
                <span className="mono text-xs text-muted-2">Status</span>
                <strong className="flex items-center gap-2 text-xs font-medium text-olive">
                  <span className="size-1.5 rounded-full bg-olive" />
                  Open to student internships
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}