import RadarChart from "./RadarChart";

const skillMatrix = [
  {
    category: "Languages & Core",
    items: [
      { name: "Python", status: "Primary tool", desc: "Data manipulation, scripts, notebook analysis" },
      { name: "SQL", status: "Academic study", desc: "Relational queries, joins, aggregations" },
    ],
  },
  {
    category: "Data Analysis & ML",
    items: [
      { name: "Pandas & NumPy", status: "Frequent use", desc: "Data cleaning, reshaping, array operations" },
      { name: "Scikit-learn", status: "Active study", desc: "Regression, classification, CV workflows" },
      { name: "Matplotlib & Seaborn", status: "Frequent use", desc: "Exploratory plotting and statistical charts" },
    ],
  },
  {
    category: "Mathematics & Statistics",
    items: [
      { name: "Probability & Inference", status: "L2 Curriculum", desc: "Distributions, hypothesis testing, estimators" },
      { name: "Linear Algebra", status: "L2 Curriculum", desc: "Matrix operations, eigenvalues, projections" },
    ],
  },
  {
    category: "Environment & Tools",
    items: [
      { name: "Jupyter Notebooks", status: "Daily", desc: "Reproducible research and analysis" },
      { name: "Git & GitHub", status: "Practicing", desc: "Version control and project tracking" },
    ],
  },
];

const nextStudies = [
  { topic: "PyTorch", note: "Deep learning mathematical foundations" },
  { topic: "Docker", note: "Containerized environments for reproducibility" },
  { topic: "Streamlit", note: "Interactive prototypes for model demonstration" },
  { topic: "NLP", note: "Text preprocessing & tokenization techniques" },
];

export default function Skills() {
  return (
    <section id="skills" className="section border-b border-border">
      <div className="wrap">
        {/* Section header */}
        <div className="max-w-2xl">
          <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
            02 / Technical Matrix
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Working toolset & academic proficiencies.
          </h2>

          <p className="mt-3 text-sm text-muted">
            Organized by functional domain and current academic application rather than arbitrary scores.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left: Structured Matrix */}
          <div className="space-y-8">
            {skillMatrix.map((group) => (
              <div key={group.category} className="border-t border-border pt-4">
                <span className="mono text-[11px] uppercase tracking-wider text-muted-2">
                  {group.category}
                </span>

                <div className="mt-3 divide-y divide-border">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col justify-between py-2.5 sm:flex-row sm:items-baseline sm:gap-4"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-medium text-foreground">
                          {item.name}
                        </span>
                        <span className="text-xs text-muted-2">
                          {item.desc}
                        </span>
                      </div>

                      <span className="mono mt-1 shrink-0 text-[11px] text-olive sm:mt-0">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Radar balance & Study topics */}
          <div className="space-y-10 lg:border-l lg:border-border lg:pl-10">
            {/* Minimal Radar Chart */}
            <div>
              <span className="mono text-[11px] uppercase tracking-wider text-muted-2">
                Relative Balance · Academic Self-Assessment
              </span>
              <div className="mt-4 flex items-center justify-center rounded-[4px] border border-border bg-surface p-6">
                <RadarChart />
              </div>
            </div>

            {/* Next Studies */}
            <div className="border-t border-border pt-6">
              <span className="mono text-[11px] uppercase tracking-wider text-muted-2">
                Upcoming Academic Exploration
              </span>

              <div className="mt-4 space-y-3">
                {nextStudies.map((study) => (
                  <div
                    key={study.topic}
                    className="flex items-baseline justify-between rounded-[4px] border border-border bg-surface px-3.5 py-2.5 text-xs"
                  >
                    <span className="font-medium text-foreground">
                      {study.topic}
                    </span>
                    <span className="mono text-muted-2">
                      {study.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}