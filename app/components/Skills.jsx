import RadarChart from "./RadarChart";

const skills = [
  {
    name: "Python",
    stage: "Practicing",
    level: 75,
    note: "Data wrangling, automation & scripting",
  },
  {
    name: "Pandas",
    stage: "Practicing",
    level: 75,
    note: "Data exploration, grouping & cleaning",
  },
  {
    name: "NumPy",
    stage: "Practicing",
    level: 70,
    note: "Array operations, vectorization & math",
  },
  {
    name: "SQL",
    stage: "Familiar with",
    level: 60,
    note: "Relational queries, joins & aggregations",
  },
  {
    name: "Matplotlib & Seaborn",
    stage: "Practicing",
    level: 70,
    note: "Statistical visualization & distribution plots",
  },
  {
    name: "Scikit-learn",
    stage: "Learning",
    level: 55,
    note: "Supervised models, pipelines & cross-validation",
  },
  {
    name: "Statistics & Probability",
    stage: "Academic core",
    level: 70,
    note: "USTHB curriculum: inference, distributions, linear algebra",
  },
  {
    name: "Git & Jupyter",
    stage: "Practicing",
    level: 65,
    note: "Notebook workflows, documentation & GitHub",
  },
];

const exploring = [
  "Deep Learning",
  "PyTorch",
  "NLP",
  "Docker",
  "Airflow",
  "Streamlit",
  "Big Data",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-olive">
            02 — Technical Skills
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Technical toolkit & academic development.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Categorized by practical familiarity and academic application rather than arbitrary scores.
          </p>
        </div>

        {/* Skills layout */}
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Skills list */}
          <div className="rounded-[14px] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-7">
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  {/* Top */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <span className="size-1.5 rounded-full bg-olive" />
                      {skill.name}
                    </span>

                    <span className="mono rounded border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-olive">
                      {skill.stage}
                    </span>
                  </div>

                  {/* Progress indicator */}
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-olive transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="mt-1.5 text-xs text-muted-2">
                    {skill.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* Radar */}
            <div className="rounded-[14px] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-7">
              <h3 className="text-sm font-semibold text-foreground">
                Skill balance
              </h3>

              <p className="mono mt-1 text-xs text-muted-2">
                {"//"} academic self-assessment
              </p>

              <div className="mt-4 flex min-h-[260px] items-center justify-center">
                <RadarChart />
              </div>
            </div>

            {/* Currently exploring */}
            <div className="rounded-[14px] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-7">
              <h3 className="text-sm font-semibold text-foreground">
                Currently exploring
              </h3>

              <p className="mono mt-1 text-xs text-muted-2">
                {"//"} upcoming study & practice areas
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exploring.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted transition-colors hover:border-olive hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}