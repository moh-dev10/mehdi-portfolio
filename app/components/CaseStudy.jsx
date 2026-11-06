export default function CaseStudy() {
  const points = [
    {
      step: "Phase 1",
      title: "Problem & Data Nuances",
      summary:
        "Analyzing real estate classifieds across Algerian urban areas presents classic data quality hurdles: unstandardized descriptions, mixed currency units, and free-text location entries.",
      items: [
        "Inconsistent pricing: some entries listed per square metre, others total unit price.",
        "Unstructured location fields: mixed French and Arabic descriptions with no postal taxonomy.",
        "Significant variance between central urban listings and suburban communes.",
      ],
    },
    {
      step: "Phase 2",
      title: "Engineering Pipeline",
      summary:
        "Building a reproducible data pipeline in Python using Pandas for cleaning and Scikit-learn for model evaluation.",
      items: [
        "Regex parsing to extract usable surface area and room counts from raw descriptions.",
        "One-hot and ordinal encoding for commune, property type, and floor level features.",
        "Evaluating linear models alongside tree-based regressors with 5-fold cross-validation.",
      ],
    },
    {
      step: "Phase 3",
      title: "Student Takeaways",
      summary:
        "Key lessons learned from moving beyond clean textbook exercises into raw real-world data.",
      items: [
        "Data cleaning and domain-informed feature selection produced the largest performance gains.",
        "Log-transforming skewed price distributions stabilized residuals across regression baselines.",
        "Proper cross-validation prevents spatial overfitting that naive random splits miss.",
      ],
    },
  ];

  return (
    <section id="case" className="section border-b border-border">
      <div className="wrap">
        {/* Section header */}
        <div className="max-w-2xl">
          <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
            04 / Case Study
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Algerian property price estimation.
          </h2>

          <p className="mt-3 text-sm text-muted">
            An exploratory student project investigating the preprocessing, feature engineering, and regression modeling required for messy real-world classifieds.
          </p>
        </div>

        {/* Technical overview sheet */}
        <div className="mt-12 rounded-[4px] border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-baseline">
            <div>
              <span className="mono text-[11px] uppercase tracking-wider text-muted-2">
                Project Classification
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                Supervised Regression on Local Real Estate Data
              </h3>
            </div>

            <div className="mono text-xs text-olive">
              Tools: Python · Pandas · Scikit-learn
            </div>
          </div>

          {/* 3 Step Editorial Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {points.map((p) => (
              <div key={p.step} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between border-b border-border pb-2">
                    <span className="mono text-[11px] text-olive">{p.step}</span>
                    <span className="text-xs font-semibold text-foreground">{p.title}</span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {p.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-muted-2">
                    {p.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-olive" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-4 text-xs text-muted-2">
            <span className="font-medium text-foreground">Summary note: </span>
            This exploration served as an academic exercise in end-to-end data processing, emphasizing empirical validation and data integrity over artificial benchmark claims.
          </div>
        </div>
      </div>
    </section>
  );
}
