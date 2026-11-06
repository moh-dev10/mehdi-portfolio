const education = [
  {
    period: "2024 — Present",
    qualification: "Licence in Data Science (Year 2)",
    institution: "USTHB — Université des Sciences et de la Technologie Houari Boumediene",
    location: "Bab Ezzouar, Algiers",
    description:
      "Specialized undergraduate curriculum covering probability theory, mathematical statistics, linear algebra, algorithms and data structures, relational database systems (SQL), and introductory machine learning.",
    coursework: ["Probability & Statistics", "Linear Algebra", "SQL & Databases", "Data Structures", "Scikit-learn"],
  },
  {
    period: "2023 — 2024",
    qualification: "Baccalauréat — Experimental Sciences",
    institution: "Lycée",
    location: "Algiers, Algeria",
    description:
      "Graduated with a strong academic emphasis on mathematics, physical sciences, and natural sciences, leading directly into the competitive Data Science track at USTHB.",
    coursework: ["Advanced Mathematics", "Physics", "Chemistry"],
  },
  {
    period: "Ongoing",
    qualification: "Self-Directed Technical Practice",
    institution: "Independent Study",
    location: "Kaggle & Open-Source Projects",
    description:
      "Hands-on practice applying university theory to public datasets, focusing on reproducible exploratory data analysis, feature engineering, and documented Python notebooks.",
    coursework: ["Data Cleaning", "Exploratory Pipelines", "Notebook Documentation"],
  },
];

export default function Education() {
  return (
    <section id="education" className="section border-b border-border">
      <div className="wrap">
        {/* Section header */}
        <div className="max-w-2xl">
          <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
            05 / Education
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Academic timeline & coursework.
          </h2>

          <p className="mt-3 text-sm text-muted">
            Formal mathematical and computational studies at USTHB, complemented by self-directed empirical learning.
          </p>
        </div>

        {/* Chronological Record */}
        <div className="mt-12 divide-y divide-border border-t border-border">
          {education.map((item) => (
            <div
              key={item.period}
              className="grid gap-4 py-8 lg:grid-cols-[220px_1fr]"
            >
              <div>
                <span className="mono text-xs text-olive font-medium">
                  {item.period}
                </span>
                <span className="block text-xs text-muted-2 mt-0.5">
                  {item.location}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.qualification}
                </h3>

                <p className="mt-0.5 text-xs text-muted-2">
                  {item.institution}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="mono rounded-[2px] border border-border bg-surface px-2 py-0.5 text-[11px] text-muted-2"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
