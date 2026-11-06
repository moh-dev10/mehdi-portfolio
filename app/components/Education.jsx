const timelineItems = [
  {
    date: "2024 — Present",
    title: "Licence in Data Science — 2nd Year",
    institution:
      "USTHB — Université des Sciences et de la Technologie Houari Boumediene · Algiers, Algeria",
    description:
      "Core academic curriculum in probability theory, statistical inference, linear algebra, algorithms, relational database systems, and foundational machine learning.",
    chips: [
      "Probability & Statistics",
      "Linear Algebra",
      "Databases (SQL)",
      "Algorithms",
      "Machine Learning",
    ],
  },
  {
    date: "2023 — 2024",
    title: "Baccalauréat — Experimental Sciences",
    institution: "Algiers, Algeria",
    description:
      "Graduated with a strong academic foundation in mathematics and physical sciences, leading directly to the specialized Data Science track at USTHB.",
    chips: ["Mathematics", "Physics", "Natural Sciences"],
  },
  {
    date: "Ongoing",
    title: "Independent Applied Practice",
    institution: "Self-Directed · Kaggle · Open-Source Datasets",
    description:
      "Complementing university courses with hands-on exploratory analysis, practical data cleaning challenges, and reproducible notebook documentation.",
    chips: [
      "Data wrangling",
      "Exploratory pipelines",
      "Notebook workflows",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-olive">
            05 — Education
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Academic background & coursework.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Formal training in mathematics, statistics, and computing at USTHB, complemented by self-directed exploratory practice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-10">
          {/* Vertical connecting line */}
          <div className="absolute top-2 bottom-2 left-2.5 w-px bg-border-strong sm:left-3" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Node dot */}
                <span className="absolute -left-[30px] top-2 size-3 rounded-full border border-olive bg-surface sm:-left-[35px]" />

                {/* Content Card */}
                <div className="rounded-[14px] border border-border bg-surface p-6 shadow-[var(--shadow)] transition-colors hover:border-border-strong sm:p-7">
                  <span className="mono block text-xs font-semibold uppercase tracking-wider text-olive">
                    {item.date}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-muted">
                    {item.institution}
                  </p>

                  <p className="mt-3.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>

                  {/* Chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="mono rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
