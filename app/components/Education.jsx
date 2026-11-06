const timelineItems = [
  {
    date: "2024 — Present",
    dotColor: "border-sky shadow-[0_0_16px_rgba(56,189,248,0.75)]",
    dateColor: "text-sky",
    title: "Licence en Data Science — 2nd Year",
    institution:
      "USTHB — Université des Sciences et de la Technologie Houari Boumediene · Algiers, Algeria",
    description:
      "Core coursework in probability, statistical inference, linear algebra, algorithmics, database systems, and machine learning. Practical sessions focused on Python-based data analysis and modelling on real datasets.",
    chips: [
      "Statistics",
      "Machine Learning",
      "Databases",
      "Algorithms",
      "Linear Algebra",
    ],
  },
  {
    date: "2023 — 2024",
    dotColor: "border-violet shadow-[0_0_16px_rgba(167,139,250,0.75)]",
    dateColor: "text-violet",
    title: "Baccalauréat — Experimental Sciences",
    institution: "Lycée · Algiers, Algeria",
    description:
      "Graduated with a strong mathematics and physics record, which led directly to choosing the Data Science track at USTHB over more general computer science programs.",
    chips: ["Mathematics", "Physics", "Mention: Bien"],
  },
  {
    date: "Ongoing",
    dotColor: "border-mint shadow-[0_0_16px_rgba(52,211,153,0.7)]",
    dateColor: "text-mint",
    title: "Self-Directed Applied Practice",
    institution: "Independent · Kaggle · Open Datasets",
    description:
      "Building projects outside the curriculum to develop the parts of data science that lectures rarely cover: data cleaning at scale, model validation discipline, and communicating results to non-technical readers.",
    chips: [
      "End-to-end pipelines",
      "Feature engineering",
      "Data storytelling",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-sky">
            05 — Education
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Academic background & continuous learning.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            A mathematics-heavy curriculum at USTHB, complemented by self-directed applied practice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-10">
          {/* Vertical connecting line */}
          <div className="absolute top-2 bottom-2 left-2.5 w-0.5 bg-linear-to-b from-sky/75 via-violet/50 to-mint/20 sm:left-3" />

          <div className="space-y-10">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Glowing Dot */}
                <span
                  className={`absolute -left-[30px] top-1.5 size-3.5 rounded-full border-2 bg-background sm:-left-[35px] ${item.dotColor}`}
                />

                {/* Content Card */}
                <div className="rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow)] transition-all duration-300 hover:translate-x-1 hover:border-border-strong sm:p-7">
                  <span
                    className={`mono block text-xs font-semibold uppercase tracking-wider ${item.dateColor}`}
                  >
                    {item.date}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    {item.institution}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>

                  {/* Chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
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
