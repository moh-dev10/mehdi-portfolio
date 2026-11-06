"use client";

import { useState } from "react";

const sections = [
  {
    id: "problem",
    title: "1. Problem & Dataset Nuances",
    summary:
      "Real estate classifieds across Algerian urban areas are published in varied, unstructured formats with inconsistent notation.",
    details: [
      {
        heading: "Inconsistent field formats",
        desc: "Prices are sometimes stated per unit and sometimes per square metre, requiring explicit normalization rules.",
      },
      {
        heading: "Free-text location data",
        desc: "Commune and neighborhood information is often entered as mixed French and Arabic descriptions rather than structured keys.",
      },
      {
        heading: "Extreme distribution skew",
        desc: "High price dispersion between prime city-center apartments and suburban listings necessitated robust outlier handling.",
      },
    ],
  },
  {
    id: "approach",
    title: "2. Analytical Approach",
    summary:
      "A step-by-step pipeline developed in Python using Pandas for preprocessing and Scikit-learn for model evaluation.",
    details: [
      {
        heading: "Data cleaning & extraction",
        desc: "Regex routines to extract square footage, remove duplicates, and normalize currency denominations.",
      },
      {
        heading: "Feature preparation",
        desc: "Engineered categorical indicators for commune, property type, room count, and floor levels.",
      },
      {
        heading: "Evaluation methodology",
        desc: "Benchmarked a baseline linear model against tree-based regressors using 5-fold cross-validation to assess generalization.",
      },
    ],
  },
  {
    id: "learnings",
    title: "3. Learning Outcomes",
    summary:
      "Practical lessons gathered from working with real, messy data outside clean textbook datasets.",
    details: [
      {
        heading: "Data quality outweighs model complexity",
        desc: "Careful imputation and outlier clipping produced more reliable predictions than extensive hyperparameter tuning.",
      },
      {
        heading: "Log-transformations on skewed targets",
        desc: "Applying log1p transforms to price targets stabilized linear models and improved residual normality.",
      },
      {
        heading: "Validation discipline",
        desc: "Understanding why simple random splits can overestimate performance on spatially clustered data.",
      },
    ],
  },
];

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState("problem");

  const currentSection = sections.find((s) => s.id === activeTab) || sections[0];

  return (
    <section id="case" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-olive">
            04 — Case Study
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Exploratory project: real estate price estimation.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            A student machine learning exploration documenting the data cleaning, feature preparation, and modeling workflow on local property listings.
          </p>
        </div>

        {/* Case Card */}
        <div className="rounded-[14px] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-8">
          {/* Header pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="mono text-xs text-olive">
                Supervised Learning Exploration
              </span>
              <h3 className="mt-1 text-2xl font-bold text-foreground">
                Algerian Property Price Estimation Pipeline
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="mono rounded border border-border bg-surface-2 px-3 py-1 text-xs text-muted">
                Python · Pandas · Scikit-learn
              </span>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-border pb-4">
            {sections.map((sec) => {
              const isActive = activeTab === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setActiveTab(sec.id)}
                  className={`rounded-[8px] px-4 py-2 text-xs font-medium transition-colors ${
                    isActive
                      ? "border border-olive/40 bg-surface-2 text-olive"
                      : "border border-transparent text-muted hover:bg-surface-2 hover:text-foreground"
                  }`}
                >
                  {sec.title}
                </button>
              );
            })}
          </div>

          {/* Content Pane */}
          <div className="mt-6">
            <p className="text-sm font-medium leading-relaxed text-foreground">
              {currentSection.summary}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {currentSection.details.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-background-soft/60 p-4.5"
                >
                  <h4 className="flex items-center gap-2 text-xs font-semibold text-olive">
                    <span className="size-1 rounded-full bg-olive" />
                    {item.heading}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
