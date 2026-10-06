import RadarChart from "./RadarCahrt";

const skills = [
  {
    name: "Python",
    value: 90,
    color: "sky",
    gradient: "from-sky/70 to-sky",
  },
  {
    name: "Pandas",
    value: 88,
    color: "violet",
    gradient: "from-violet/70 to-violet",
  },
  {
    name: "NumPy",
    value: 85,
    color: "mint",
    gradient: "from-mint/70 to-mint",
  },
  {
    name: "SQL",
    value: 82,
    color: "amber",
    gradient: "from-amber/70 to-amber",
  },
  {
    name: "Matplotlib & Seaborn",
    value: 80,
    color: "pink",
    gradient: "from-pink/70 to-pink",
  },
  {
    name: "Scikit-learn",
    value: 78,
    color: "mint",
    gradient: "from-mint/60 to-mint",
  },
  {
    name: "Statistics & Probability",
    value: 76,
    color: "violet",
    gradient: "from-violet/60 to-violet",
  },
  {
    name: "Git & Jupyter",
    value: 72,
    color: "muted",
    gradient: "from-muted-2 to-muted",
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
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-sky">
            02 — Technical Skills
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            The toolkit I use to get from raw data to a validated result.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Proficiency reflects how confident I am applying each tool on a
            real, messy dataset without hand-holding.
          </p>
        </div>

        {/* Skills layout */}
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Skills list */}
          <div className="rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow)]">
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  {/* Top */}
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <span
                        className={`size-2 rounded-full bg-${skill.color} shadow-[0_0_8px_currentColor]`}
                      />

                      {skill.name}
                    </span>

                    <span className="mono text-xs text-muted">
                      {skill.value}%
                    </span>
                  </div>

                  {/* Bar */}
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${skill.gradient}`}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* Radar */}
            <div className="rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow)]">
              <h3 className="text-sm font-semibold text-foreground">
                Skill distribution
              </h3>

              <p className="mono mt-1 text-xs text-muted-2">
                 { "//" }self-assessed competency map
              </p>

              <div className="mt-6 flex min-h-[280px] items-center justify-center">
                <RadarChart/>
              </div>
            </div>

            {/* Currently exploring */}
            <div className="rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow)]">
              <h3 className="text-sm font-semibold text-foreground">
                Currently exploring
              </h3>

              <p className="mono mt-1 text-xs text-muted-2">
                {"//"} next 6 months
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exploring.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted transition-colors duration-300 hover:border-border-strong hover:text-foreground"
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