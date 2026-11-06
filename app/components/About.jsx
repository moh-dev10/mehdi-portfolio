import Reveal from "./Reveal";

export default function About() {
  const areas = [
    {
      num: "01",
      title: "Exploratory Data Analysis",
      text: "Investigating distributions, correlations, and outliers. Understanding data collection artifacts and quality issues before touching any algorithm.",
    },
    {
      num: "02",
      title: "Applied Machine Learning",
      text: "Implementing linear baselines and tree-based models using Scikit-learn. Emphasizing hyperparameter discipline and cross-validation.",
    },
    {
      num: "03",
      title: "Data Visualization",
      text: "Constructing charts in Matplotlib and Seaborn that communicate empirical findings plainly, prioritizing axis legibility and honest baselines.",
    },
  ];

  return (
    <section id="about" className="section border-b border-border">
      <div className="wrap">
        {/* Section Header */}
        <Reveal delay={0}>
          <div className="max-w-2xl">
            <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
              01 / Background
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Building mathematical and applied foundations at USTHB.
            </h2>
          </div>
        </Reveal>

        {/* Narrative & Profile Grid */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal delay={40}>
            <div className="space-y-5 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Having obtained my Baccalauréat in 2025, I am currently a second-year undergraduate student enrolled in the Data Science program at <strong className="font-medium text-foreground">USTHB (Université des Sciences et de la Technologie Houari Boumediene)</strong> in Algiers. My curriculum balances foundational coursework in probability, statistical inference, algorithms, and linear algebra with practical computing laboratories.
              </p>

              <p>
                Outside lecture halls, I work with Python&apos;s data ecosystem — primarily <strong className="font-medium text-foreground">Pandas</strong> and <strong className="font-medium text-foreground">NumPy</strong> for structuring data arrays, and <strong className="font-medium text-foreground">SQL</strong> for database querying. I am particularly interested in how data preprocessing decisions impact downstream modeling performance.
              </p>

              <p>
                I believe the most valuable skill as a student is humility in front of data: checking assumptions, verifying data integrity, and avoiding premature optimization.
              </p>
            </div>
          </Reveal>

          {/* Quick Academic Facts */}
          <Reveal delay={100}>
            <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <span className="mono text-[11px] uppercase tracking-wider text-muted-2">
                Academic Context
              </span>

              <div className="mt-4 space-y-4 text-xs">
                <div>
                  <span className="mono block text-muted-2">University</span>
                  <span className="font-medium text-foreground">
                    Université des Sciences et de la Technologie Houari Boumediene (USTHB)
                  </span>
                </div>

                <div>
                  <span className="mono block text-muted-2">Current Program</span>
                  <span className="font-medium text-foreground">Licence 2 Data Science (Year 2)</span>
                </div>

                <div>
                  <span className="mono block text-muted-2">Baccalauréat</span>
                  <span className="font-medium text-foreground">Obtained in 2025</span>
                </div>

                <div>
                  <span className="mono block text-muted-2">Languages</span>
                  <span className="font-medium text-foreground">French, English, Arabic</span>
                </div>

                <div>
                  <span className="mono block text-muted-2">Location</span>
                  <span className="font-medium text-foreground">Algiers, Algeria</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3 Core Competency Pillars (Swiss 3-column grid) */}
        <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {areas.map((area, index) => (
            <Reveal key={area.num} delay={index * 80}>
              <div className="space-y-2">
                <span className="mono text-xs text-olive">{area.num}</span>
                <h3 className="text-sm font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {area.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}